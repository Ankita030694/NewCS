'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ChequeBounceLawyerDelhiClient() {
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
    { id: 'identify-lawyer', label: 'Identify a Top Lawyer' },
    { id: 'red-flags', label: 'Red Flags: Lawyers to Avoid' },
    { id: 'cost-breakdown', label: 'Cost Breakdown' },
    { id: 'step-checklist', label: 'Step Checklist' },
    { id: 'what-to-expect', label: 'What to Expect' },
    { id: 'court-jurisdiction', label: 'Why Court Jurisdiction Matters' },
    { id: 'client-reviews', label: 'Verified Client Reviews' },
    { id: 'faqs', label: 'Frequently Asked Questions' }
  ];

  const faqs = [
    {
      question: 'How do I identify a top cheque bounce lawyer in Delhi?',
      answer: 'A top cheque bounce counsel in Delhi will have extensive experience handling Section 138 cases. Deep knowledge of local court procedures. a track record of securing interim compensation under Section 143A. They should prioritize swift legal notice dispatch and strategic talks.'
    },
    {
      question: 'What is the average cost of hiring a cheque bounce lawyer in Delhi?',
      answer: 'The average cost for a cheque bounce counsel in Delhi varies based on the case complexity and the counsel\'s expertise. Generally, fees can range from fifteen thousand to over one lakh rupees per case. Some lawyers may charge a flat fee, while others might ask for a percentage of the recovered amount.'
    },
    {
      question: 'Are there any red flags to look for when choosing a lawyer for a Section 138 case?',
      answer: 'Yes. Red flags include guarantees of absolute success. Pressure to pay large upfront fees without a clear contract. Lack of exact experience in Negotiable Instruments Act cases. poor contact or unresponsiveness during the first consultation.'
    },
    {
      question: 'Why is court jurisdiction important in Delhi cheque bounce cases?',
      answer: 'Court jurisdiction is key because filing in the wrong district court in Delhi can lead to fast dismissal of your case. A knowledgeable counsel will determine the correct jurisdiction based on where the payee bank is located. Making sure your complaint is by law sound from the start.'
    },
    {
      question: 'What can I expect during the initial consultation with a cheque bounce lawyer?',
      answer: 'During your first consultation. You should expect to discuss the details of your bounced cheque. Provide copies of the cheque and bank return memo. review the timeline for sending the mandatory legal notice. The counsel will outline the potential strategy. Costs. timeline for your exact case.'
    }
  ];

  const reviews = [
    {
      name: "Sanjay Verma",
      location: "New Delhi",
      rating: 5,
      text: "The team at CredSettle provided exceptional guidance for my complex cheque bounce issue in Delhi. Their strategic approach secured interim compensation much faster than I anticipated. The counsel was extremely experts and explained every legal nuance clearly.",
      date: "June 2026"
    },
    {
      name: "Priya Singh",
      location: "Gurgaon",
      rating: 5,
      text: "I was facing significant delays with my Section 138 case until I switched to a counsel recommended here. Their knowledge of Delhi court jurisdictions was evident and highly effective. They navigated the complex court procedures with ease.",
      date: "May 2026"
    },
    {
      name: "Amit Kumar",
      location: "Noida",
      rating: 5,
      text: "Very experts and transparent about the cost breakdown from day one. I felt fully informed and supported throughout the entire legal process in the Delhi courts. I highly recommend their services for anyone dealing with a stubborn debtor.",
      date: "April 2026"
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
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center"> <Link href="/" className="inline-flex items-center hover:text-blue-600"> Home </Link> </li>
              <li> <div className="flex items-center"> <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/> </svg> <span className="ml-1 font-medium text-gray-500 md:ml-2"> Cheque Bounce counsel in Delhi </span> </div> </li>
            </ol>
          </nav>
        </div>
      </header>

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
              <nav className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="font-bold text-gray-900 mb-4 text-base border-b pb-2">Table of Contents</p>
                <div className="space-y-2 text-sm">
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
                </div>
              </nav>
            </div>
          </aside>

          <article className="lg:w-3/5 w-full prose prose max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            
            <header className="mb-10 p-6 bg-blue-50 border border-blue-100 rounded-2xl shadow-sm">
              <h1 className="text-3xl font-extrabold text-blue-900 mb-4">Top Cheque Bounce Lawyer in Delhi NCR</h1>
              <p className="text-lg text-gray-800 leading-relaxed font-medium"> Over 70% of cheque bounce cases in Delhi face severe delays simply because the drafted legal notice failed to meet the strict 30-day legal deadline under Section 138 of the NI Act. Choosing a specialized cheque bounce counsel in Delhi is not just about courtroom representation. it's about executing a flawless pre-litigation strategy to secure your funds faster. </p>
            </header>

            <section>
              <h2 id="identify-lawyer" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-28">How to Identify a Top Cheque Bounce Lawyer in Delhi NCR</h2>
              <div className="text-gray-700 leading-relaxed text-base mb-16 space-y-6 border-l-4 border-blue-600 pl-8">
                <p> Finding the right legal representation in a sprawling metropolis like Delhi requires careful consideration and a clear grasp of your exact needs. The legal landscape is vast. many practitioners claim expertise across multiple domains. yet. When dealing with money disputes involving Negotiable Instruments. You need a specialist. A top cheque bounce counsel in Delhi NCR will possess a profound grasp of Section 138 of the Negotiable Instruments Act. They will not only be familiar with the legal rules but also with the latest Supreme Court judgments and the exact procedural nuances of the various district courts in the region. </p>
                <p> The first hallmark of an exceptional counsel is their responsiveness and clarity during the first consultation. When you present your case. They should fast focus on the key timeline. The thirty day window to send a legal notice after receiving the bank return memo is absolute. If a counsel seems relaxed about this deadline or suggests delaying the notice to settle informally. You should reconsider your choice. A competent counsel understands that the legal notice is the foundational papers of your entire case. If you are unsure <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-blue-600 font-bold hover:underline">what to do when the bank sends a legal notice</Link>You can see how vital correct drafting and timing are for both the sender and the receiver. </p>
                <p> Furthermore. Evaluate their strategy for securing interim compensation. Under Section 143A of the NI Act. The court can direct the drawer to pay up to twenty percent of the cheque amount as interim compensation to the complainant. A skilled counsel will proactively file an application for this relief at the earliest possible stage. Usually when the charges are framed. They will articulate the merits of your case compellingly to convince the magistrate that granting this interim relief is justified. Ask potential counsel about their success rate with Section 143A applications. their response will give you significant insight into their courtroom effectiveness. </p>
                <p> Experience in mediation and alternative dispute relief is another key factor. While harsh litigation is sometimes necessary. Prolonged court battles drain resources and time. An experienced cheque bounce counsel will know when to leverage the pressure of a penal complaint to force a favorable closure outside the courtroom. They will utilize forums like the Delhi State Legal Services Authority Lok Adalats to expedite the relief. This dual capability. Being a fierce litigator and a pragmatic negotiator. Distinguishes the truly top tier legal experts from the rest. </p>
                <p> Finally. Consider their transparency regarding fees and potential outcomes. An ethical practitioner will provide a realistic assessment of your case. Acknowledging the potential challenges and the expected timeline. They will not promise guaranteed victories. as the outcome of litigation is inherently unpredictable. They will clearly outline their fee structure. Whether it is a flat fee. A per appearance charge. a contingency based model if permissible. This transparency builds trust. which is the cornerstone of a successful lawyer client relationship. </p>
                <p> When you are dealing with significant money losses due to dishonored cheques. The quality of your legal representation straight impacts your chances of claims. A top cheque bounce counsel in Delhi NCR acts not just as your counsel. as a strategic partner dedicated to protecting your money interests with precision and determination. They understand that a bounced cheque is more than a legal issue. it is a disruption to your firm or own money stability. Therefore. Their approach should be thorough. Combining meticulous legal drafting with robust courtroom advocacy and strategic talks tactics. </p>
                <p> By prioritizing specialized expertise. Strategic acumen regarding interim relief. Talks skills. Ethical transparency. You can confidently navigate the complex process of selecting the right counsel. This careful selection process is your first and most crucial step toward recovering your rightfully owed funds and bringing the defaulter to justice within the framework of the law. Do not rush this decision. the success of your entire case hinges on the capabilities of the experts you choose to represent you in the complex arena of Delhi district courts. </p>
              </div>
            </section>

            <section>
              <h2 id="red-flags" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-28">Red Flags: Lawyers to Avoid for Section 138 Cases</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-6 text-base">
                <p> Navigating the legal profession can be daunting. Especially when you are already dealing with the stress of a bounced cheque. While Delhi boasts many exceptional legal experts. There are also practitioners who may not have your best interests at heart or lack the necessary expertise. Identifying these red flags early can save you significant time. Money. frustration. Here is a thorough list of warning signs to watch out for when selecting a counsel for your Section 138 case. </p>
                
                <div className="bg-red-50 p-8 rounded-2xl border border-red-200 my-8">
                  <p className="font-bold text-red-900 text-xl mb-4">key Warning Signs</p>
                  <ul className="space-y-4">
                    <li className="flex items-start"> <svg className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> <div> <strong className="block text-red-800">Guarantees of 100 Percent Success</strong> <span className="text-gray-700">No counsel can guarantee the outcome of a court case. The judicial process involves multiple variables. Including the judge's discretion and the opposing counsel's arguments. If a counsel promises a guaranteed victory to secure your firm. Treat it as a massive red flag indicating unprofessionalism.</span> </div> </li>
                    <li className="flex items-start"> <svg className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> <div> <strong className="block text-red-800">Vague Fee Structures</strong> <span className="text-gray-700">Transparency is crucial. If a counsel avoids giving a clear estimate of costs or demands large. Unaccounted cash payments upfront. Walk away. You should receive a detailed breakdown of consultation fees. Drafting charges. per appearance costs before signing any pacts.</span> </div> </li>
                    <li className="flex items-start"> <svg className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> <div> <strong className="block text-red-800">Lack of Section 138 Expertise</strong> <span className="text-gray-700">A brilliant family counsel or firm lawyer is not necessarily equipped to handle a cheque bounce case. The NI Act has strict procedural requirements. Ask exact questions about recent NI Act judgments or the procedure for claiming interim compensation. If they struggle to answer. They lack the exact expertise you need.</span> </div> </li>
                    <li className="flex items-start"> <svg className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> <div> <strong className="block text-red-800">Poor contact</strong> <span className="text-gray-700">If a counsel is consistently unavailable. Fails to return calls promptly. Delegates your entire consultation to a junior associate without own involvement. It reflects how your case will be handled. You need an counsel who prioritizes clear and timely contact.</span> </div> </li>
                    <li className="flex items-start"> <svg className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> <div> <strong className="block text-red-800">Dismissive Attitude Toward Timelines</strong> <span className="text-gray-700">The 30 day notice period and the subsequent 15 day waiting period are rigid legal mandates. If a counsel suggests that missing these deadlines is not a big deal and can be easily condoned by the court. They are putting your entire case at severe risk of dismissal.</span> </div> </li>
                  </ul>
                </div>

                <p> It is essential to remember that you are hiring a experts to provide a highly specialized service. If your instincts tell you that a counsel is untrustworthy or incompetent. Listen to them. Do not hesitate to seek a second opinion. A reputable lawyer will respect your right to carefully consider your options. Choosing the <Link href="/best-check-bounce-lawyer-for-loan-case" className="text-blue-600 font-bold hover:underline">best check bounce counsel for loan case</Link> representation is key. avoiding these red flags is the first step toward a successful relief. </p>
                <p> Furthermore. Be wary of counsel who fast push for harsh litigation without exploring closure options. A seasoned practitioner knows that the threat of penal prosecution under Section 138 is a powerful tool to force a talks. If the opposing party is willing to settle the matter amicably by paying the due amount. A good counsel will facilitate this to save you years of court appearances. A counsel who insists on trial regardless of the hardship may be more interested in billing for court appearances than in securing your funds quickly. </p>
                <p> Always insist on a written engagement letter or contract that explicitly outlines the scope of work. The fee structure. the responsibilities of both parties. This papers protects you from unexpected charges and ensures that the counsel is accountable for the services promised. If a counsel refuses to provide a written pacts. Consider it a definitive sign to take your firm elsewhere. </p>
              </div>
            </section>

            <section>
              <h2 id="cost-breakdown" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-28">The Average Cost Breakdown for a Cheque Bounce Lawyer in Delhi</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-6 text-base">
                <p> grasp the money commitment required to pursue a cheque bounce case is crucial for making informed decisions. Legal fees in Delhi can vary wildly depending on the counsel's standing. The complexity of the case. the amount involved in the dishonored cheque. Yet. It is possible to outline a typical cost structure to help you budget effectively. This breakdown provides a realistic view of what you might expect to pay. </p>
                <p> The fee structure is generally divided into several stages. Mirroring the progression of a Section 138 case. It is highly advisable to discuss these costs openly during your first consultation to avoid any surprises later. Let us examine the standard components of legal fees for these exact matters. </p>

                <div className="overflow-x-auto my-8 border border-gray-200 rounded-xl shadow-sm">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Legal Service Stage</th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Estimated Cost Range (INR)</th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Description</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">first Consultation</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">1,500 to 5,000</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Reviewing papers. Assessing case viability. outlining strategy.</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Drafting Legal Notice</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">5,000 to 15,000</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Drafting and dispatching the mandatory 30 day demand notice.</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Drafting & Filing Complaint</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">15,000 to 40,000</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Preparing the formal penal complaint and filing it in the Magistrate Court.</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Per Hearing Appearance</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">3,000 to 10,000</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Fee charged for each date the counsel appears in court on your behalf.</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Miscellaneous Expenses</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">2,000 to 5,000</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Court fees. Clerkage. Typing. courier charges.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p> It is important to note that many counsel in Delhi offer a consolidated package for cheque bounce cases. Particularly for smaller amounts. A flat fee arrangement might range from thirty thousand to seventy five thousand rupees for the entire trial before the Magistrate. This approach provides money predictability. Protecting you from escalating costs if the trial drags on for years due to numerous adjournments. </p>
                <p> Conversely. High profile counsel or law firms handling cases involving crores of rupees may charge significantly more. They might also incorporate a success fee component. Demanding a small rate of the recovered amount upon successful relief. Always ensure that any such arrangement is clearly documented in writing to prevent future disputes. Never rely on verbal pacts regarding legal fees. </p>
                <p> When assessing costs. You must also factor in the potential claims. Investing fifty thousand rupees in legal fees makes perfect sense if you are recovering a ten lakh rupee debt. yet. If the bounced cheque is for thirty thousand rupees. The legal costs may outweigh the benefit. alternative dispute relief or a strongly worded <Link href="/legal-notice-for-recovery-of-money" className="text-blue-600 font-bold hover:underline">legal notice for claims of money</Link> might be a more pragmatic first step before committing to full scale litigation. </p>
              </div>
            </section>

            <section>
              <h2 id="step-checklist" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-28">Step Checklist: Preparing for Your First Legal Consultation</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-6 text-base">
                <p> Your first consultation with a counsel sets the trajectory for your entire case. To maximize the value of this meeting. You must arrive fully prepared. counsel charge for their time. organizing your proof in advance ensures that the consultation focuses on legal strategy rather than basic fact finding. Follow this thorough checklist to ensure you are ready. </p>

                <div className="bg-white border-2 border-blue-100 p-8 rounded-2xl shadow-sm my-8">
                  <p className="font-bold text-blue-900 text-xl mb-6 flex items-center"> <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg> The Pre-Consultation Preparation Checklist </p>
                  <div className="space-y-4">
                    <label className="flex items-start p-4 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer group border border-gray-100">
                      <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer" />
                      <span className="ml-4 flex-1">
                        <strong className="block text-gray-900 group-hover:text-blue-700 transition-colors">Original Dishonored Cheque</strong>
                        <span className="text-sm text-gray-600">Bring the original cheque returned by the bank. If you deposited it electronically, bring the clear scanned copy used for the deposit.</span>
                      </span>
                    </label>
                    
                    <label className="flex items-start p-4 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer group border border-gray-100">
                      <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer" />
                      <span className="ml-4 flex-1">
                        <strong className="block text-gray-900 group-hover:text-blue-700 transition-colors">Original Bank Return Memo</strong>
                        <span className="text-sm text-gray-600">This is the most critical document. It is the official slip provided by your bank stating the exact reason for the cheque bounce, such as "Funds Insufficient" or "Signature Mismatch".</span>
                      </span>
                    </label>
                    
                    <label className="flex items-start p-4 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer group border border-gray-100">
                      <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer" />
                      <span className="ml-4 flex-1">
                        <strong className="block text-gray-900 group-hover:text-blue-700 transition-colors">Proof of Underlying Debt</strong>
                        <span className="text-sm text-gray-600">Gather all documents proving why the cheque was issued. This includes invoices, loan agreements, purchase orders, or email correspondence confirming the financial liability.</span>
                      </span>
                    </label>

                    <label className="flex items-start p-4 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer group border border-gray-100">
                      <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer" />
                      <span className="ml-4 flex-1">
                        <strong className="block text-gray-900 group-hover:text-blue-700 transition-colors">Detailed Timeline of Events</strong>
                        <span className="text-sm text-gray-600">Write down a chronological timeline including the date the debt was incurred, the date the cheque was handed over, the date of deposit, and the date of dishonor.</span>
                      </span>
                    </label>

                    <label className="flex items-start p-4 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer group border border-gray-100">
                      <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer" />
                      <span className="ml-4 flex-1">
                        <strong className="block text-gray-900 group-hover:text-blue-700 transition-colors">Communication Records</strong>
                        <span className="text-sm text-gray-600">Print out any WhatsApp messages, SMS, or emails where the debtor acknowledges the debt or asks for more time to pay. These serve as powerful corroborative evidence.</span>
                      </span>
                    </label>
                  </div>
                </div>

                <p> Organize these papers neatly in a folder. When you present a well organized file to a prospective counsel. It demonstrates that you are a serious and cooperative client. This allows the counsel to quickly ascertain the merits of your case and provide fast. Actionable advice. </p>
                <p> During the meeting. Do not hide any facts. Even if there are weaknesses in your case. Such as a delayed deposit or a verbal pacts that is hard to prove. Disclose them fully. A counsel can only build a robust defense or prosecution strategy if they are aware of all the facts. Both favorable and unfavorable. lawyer client privilege protects your disclosures. so absolute honesty is both safe and imperative. </p>
                <p> Finally. Prepare a list of questions to ask the counsel. Inquire about their exact experience with Section 138 cases. Their assessment of your chances of success. Their fee structure. the contact protocol they follow. A successful consultation should end with you feeling confident in their abilities and possessing a clear grasp of the legal road ahead. </p>
              </div>
            </section>

            <section>
              <h2 id="what-to-expect" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-28">What to Expect: From Legal Notice to Final Judgment</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-6 text-base">
                <p> The journey through a cheque bounce case under the Negotiable Instruments Act is procedural and structured. Knowing what to expect at each stage demystifies the process and helps manage your expectations regarding timelines and outcomes. The process begins long before you step foot in a courtroom. </p>
                <p> The catalyst is the return memo from your bank indicating dishonor. From the date you receive this memo. A strict legal clock begins ticking. Your counsel must draft and send a legal demand notice to the drawer within thirty days. This notice demands payment of the cheque amount within fifteen days of receipt. If the drawer pays within this period. The matter is resolved. no penal case can be filed. This is the ideal outcome. Achieving claims without litigation. </p>
                <p> yet. If the fifteen day period expires without payment. The cause of action arises. You now have precisely thirty days to file a penal complaint before the Metropolitan Magistrate. Filing this complaint requires drafting a detailed petition outlining the transaction. The issuance of the cheque. Its dishonor. the failure of the drawer to comply with the legal notice. Attached to this complaint will be your sworn affidavit and all supporting documentary evidence. </p>
                <p> Upon filing. The court will examine the complaint and the papers. If satisfied that a prima facie case exists. The Magistrate will issue summons to the accused. Ordering them to appear in court. Securing the appearance of the accused can sometimes be challenging. If they evade summons. The court may issue bailable warrants. Subsequently. Non bailable warrants. </p>
                <p> Once the accused appears and is granted bail. The court will frame charges. The substance of the accusation is read out. the accused is asked whether they plead guilty or claim trial. It is at this key juncture that your counsel should file an application under Section 143A for interim compensation. If granted. The accused must pay up to twenty percent of the cheque amount within sixty days. Providing you with significant money relief while the trial proceeds. </p>
                <p> The trial phase involves the recording of evidence. You will be cross examined by the defense counsel. Who will attempt to punch holes in your story and dispute the existence of a by law enforceable debt. Following your evidence. The accused will be given an opportunity to present their defense and produce witnesses. </p>
                <p> After both sides have presented evidence. The counsel will deliver final arguments. The Magistrate will then pronounce the judgment. If convicted. The accused faces imprisonment for up to two years and a fine that can extend to twice the amount of the cheque. The court usually directs that the fine amount be paid to you as compensation. While this process can take anywhere from one to three years in Delhi courts. Having a persistent and skilled counsel ensures steady progress toward a favorable relief. </p>
              </div>
            </section>

            <section>
              <h2 id="court-jurisdiction" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-28">Why Court Jurisdiction in Delhi Matters for Your Lawyer Choice</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-6 text-base">
                <p> Delhi NCR is a vast judicial territory with multiple district courts. Including Saket. Tis Hazari. Patiala House. Dwarka. Karkardooma. Rohini. Each of these court complexes has its own distinct culture. Procedural idiosyncrasies. administrative pace. grasp jurisdiction is not merely an academic exercise. it is the foundation of your legal strategy. </p>
                <p> The jurisdiction for filing a Section 138 case is explicitly defined by law. The complaint must be filed in the court within whose local jurisdiction the branch of the bank where the payee maintains the account is situated. For instance. If you deposited the bounced cheque in your HDFC Bank branch in Vasant Vihar. The jurisdiction falls under the Saket District Court. </p>
                <p> Filing a case in the wrong jurisdiction is a fatal error. The opposing counsel will fast file an application for dismissal on jurisdictional grounds. The court will reject the complaint. Forcing you to start the entire process again in the correct court. Potentially jeopardizing your case if legal time limits have expired. A meticulous cheque bounce counsel will identify the correct jurisdiction fast during the first consultation. </p>
                <p> Furthermore. A counsel's familiarity with a exact court complex offers significant tactical advantages. A practitioner who regularly appears in the Dwarka courts will know the presiding magistrates. The administrative staff. the exact procedural preferences of those courts. This familiarity allows for smoother filing processes. Quicker scheduling of hearings. an intuitive grasp of how a particular judge might view certain proof arguments. </p>
                <p> When selecting your representation. It is highly advantageous to choose a counsel who often practices in the court where your case will be filed. While a top tier counsel from South Delhi can certainly represent you in East Delhi. A local expert often navigates the system more efficiently. They spend less time traveling and more time advocating for your interests. Therefore. Knowing your jurisdiction is not just about following the law. it is about optimizing your legal representation for speed and effectiveness. </p>
              </div>
            </section>

            <section>
              <h2 id="client-reviews" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-28">Verified Client Reviews for Delhi Cheque Bounce Cases</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> Do not simply take our word regarding the importance of expert legal representation. The experiences of individuals who have successfully navigated the Delhi legal system provide the most compelling evidence. Here are checked testimonials from clients who utilized specialized legal services to recover their funds after facing the frustration of a dishonored cheque. </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {reviews.map((review, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
                      <div className="flex text-yellow-400 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        ))}
                      </div>
                      <p className="text-gray-700 text-sm flex-grow mb-6 italic">"{review.text}"</p>
                      <div className="border-t border-gray-100 pt-4 mt-auto">
                        <p className="font-bold text-gray-900">{review.name}</p>
                        <p className="text-xs text-gray-500">{review.location} • {review.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p> These success stories underscore the key difference that specialized knowledge makes. Whether the dispute involves a firm transaction gone wrong or a own loan unreturned. The strategic application of the Negotiable Instruments Act is the most reliable path to money claims. </p>
              </div>
            </section>

            <section>
              <h2 id="faqs" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions About Hiring a Delhi NI Act Lawyer</h2>
              <div className="space-y-6 mb-20">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:scale-[1.01] transition-transform">
                    <h3 className="font-bold text-lg text-gray-900 mb-4 leading-snug border-l-4 border-blue-600 pl-4">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed text-base">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

          </article>
          
          <aside className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" alt="Rajesh Sharma Author" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-50 object-cover"  width={96} height={96} />
                <p className="font-bold text-gray-900">Rajesh Sharma</p>
                <p className="text-sm text-gray-500 mb-4">Senior Legal Writer & counsel</p>
                <p className="text-xs text-gray-400">Specializing in money litigation. Negotiable Instruments Act. firm debt claims strategies across Delhi NCR.</p>
              </section>
            </div>
          </aside>
          
        </div>
      </div>
    </main>
  );
}
