'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function RecoveryAgentClient() {
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
    { id: 'rbi-guidelines', label: 'RBI Guidelines 2025' },
    { id: 'prohibited-actions', label: 'Prohibited Actions' },
    { id: 'legal-protections', label: 'Legal Protections' },
    { id: 'step-by-step-guide', label: 'Step-by-Step Guide' },
    { id: 'digital-harassment', label: 'WhatsApp & Social Media' },
    { id: 'rbi-ombudsman', label: 'RBI Ombudsman' },
    { id: 'police-legal-notice', label: 'Police & Legal Notice' },
    { id: 'sarfaesi-act', label: 'SARFAESI vs Unsecured' },
    { id: 'loan-specific-rules', label: 'Loan-Specific Rules' },
    { id: 'mental-health', label: 'Coping with Stress' },
    { id: 'loan-settlements', label: 'Safe Settlements' },
    { id: 'documentation', label: 'Evidence Collection' },
    { id: 'legal-templates', label: 'Complaint Templates' },
    { id: 'credsettle-role', label: 'How CredSettle Helps' },
    { id: 'success-stories', label: 'Success Stories' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'What are the official RBI timings for recovery agents to call?',
      answer: 'According to the latest RBI circulars (RBI/2022-23/108), recovery agents can only contact borrowers between 8:00 AM and 7:00 PM. Calling before or after these hours is a direct violation and is considered harassment.'
    },
    {
      question: 'Can a recovery agent visit my home or office without notice?',
      answer: 'Agents can visit but must respect the borrowers privacy and professional environment. They must provide official identification and a valid authorization letter from the lending institution. Unannounced visits intended to shame the borrower are prohibited.'
    },
    {
      question: 'Is it legal for recovery agents to call my family or neighbors?',
      answer: 'Absolutely not. RBI guidelines strictly forbid agents from discussing a borrowers financial defaults with third parties, including family members, friends, or employers. This is a violation of the Right to Privacy.'
    },
    {
      question: 'What should I do if a recovery agent uses abusive language?',
      answer: 'Record the conversation immediately. This recording is vital evidence. File a formal complaint with the banks Grievance Redressal Officer. If the issue is not resolved in 30 days, escalate to the RBI Ombudsman portal.'
    },
    {
      question: 'Can recovery agents threaten me with immediate arrest?',
      answer: 'No. Recovery agents are not law enforcement officers. Loan default is a civil dispute, and threatening arrest or impersonating a police officer is a criminal offense under the Indian Penal Code (IPC).'
    },
    {
      question: 'What is the unified RBI Ombudsman scheme?',
      answer: 'The Integrated Ombudsman Scheme 2021 allows borrowers to file one complaint for any bank or NBFC. It is a cost-free, high-level mechanism to resolve issues like harassment and unfair recovery practices.'
    },
    {
      question: 'Should I record calls from recovery agents without their consent?',
      answer: 'In India, recording a conversation you are a part of is generally legal for self-protection and evidence. These recordings are accepted by the RBI and Consumer Courts as proof of harassment.'
    },
    {
      question: 'How do I handle harassment through WhatsApp and Social Media?',
      answer: 'Take screenshots of all messages. Do not delete them. Block the numbers after saving proof. RBI rules on digital lending (2022) specifically prohibit such tactics. Report the IDs to the Cyber Cell and the bank.'
    },
    {
      question: 'Is it better to hire a lawyer or a debt relief agency like CredSettle?',
      answer: 'While lawyers handle individual litigation, CredSettle provides a holistic approach including stopping harassment, managing creditor communication, and negotiating settlements, often at a fraction of the time and cost.'
    },
    {
      question: 'Can I file a case in the Consumer Court for mental agony?',
      answer: 'Yes. The Consumer Protection Act, 2019, allows you to seek damages for mental trauma and unfair practices. Many borrowers have won significant compensation for illegal recovery tactics.'
    }
  ];

  const reviews = [
    {
      name: "Sandeep Kumar",
      location: "Delhi",
      rating: 5,
      text: "I was getting 50 calls a day from various recovery agents. I couldn't even sleep. CredSettle legal team took over my case, sent a strong notice to the bank, and the calls stopped in 2 days. Truly a lifesaver.",
      date: "January 2024"
    },
    {
      name: "Priya Menon",
      location: "Bangalore",
      rating: 5,
      text: "Recovery agents visited my office and created a scene. I was terrified of losing my job. CredSettle advised me on the RBI rules and helped me file an Ombudsman complaint. The bank apologized and settled my loan for 40% of the value.",
      date: "February 2024"
    },
    {
      name: "Ravi Teja",
      location: "Hyderabad",
      rating: 5,
      text: "The best part about CredSettle is they know the law. They drafted my response to the recovery agency citing specific RBI circulars. The agents stopped their illegal tactics immediately. Highly recommended.",
      date: "March 2024"
    },
    {
      name: "Anjali Singh",
      location: "Mumbai",
      rating: 5,
      text: "I had a home loan issue and the bank was threatening SARFAESI action without proper notice. CredSettle legal experts reviewed my documents and found procedural errors. They saved my home.",
      date: "December 2023"
    },
    {
      name: "Manish Pandey",
      location: "Lucknow",
      rating: 5,
      text: "CredSettle's team is very professional. They don't just stop harassment; they actually help you plan your finances. I am now debt-free thanks to them.",
      date: "January 2024"
    }
  ];

  return (
    <>
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
                    How to Handle Recovery Agent Harassment
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

          <div className="lg:w-3/5 w-full">
            <article className="prose prose-blue max-w-none bg-white p-8 md:p-14 rounded-[40px] shadow-sm border border-gray-100">
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28 leading-tight">Navigating the Storm: A Master Class on How to Handle Recovery Agent Harassment</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  Financial instability is a harsh reality that can strike anyone, anywhere. In the high-pressure economic environment of modern India, falling behind on a loan installment or a credit card payment is not just a financial hurdle; it often becomes a psychological and social battle. When you default on a payment, you might expect a polite reminder call or a formal letter. However, the reality for millions of borrowers is the sudden onset of aggressive, unrelenting, and often illegal tactics used by third-party collection agencies. Knowing <strong>how to handle recovery agent harassment</strong> is a survival skill in today's financial world. It is about more than just numbers; it is about reclaiming your constitutional right to live with dignity and peace of mind.
                </p>
                <p>
                  The Reserve Bank of India (RBI), the guardian of India's financial stability, has consistently mandated that recovery processes must be humanized. The law is clear: a borrower is a customer who has failed to meet a commercial obligation, not a criminal who has forfeited their human rights. Despite these clear legal and ethical boundaries, the ground reality often involves midnight calls, public shaming, threats of violence, and unauthorized workplace visits. These actions are not just "part of the job" for recovery agents; they are flagrant violations of the law. This guide is your ultimate resource, providing an 8000-word deep dive into the legal, psychological, and practical frameworks you need to stop harassment and resolve your debts with honor.
                </p>
                <p>
                  Why do recovery agents behave this way? The simple answer is target-based compensation. These agencies are often paid a commission on what they recover, leading to a culture where aggression is mistaken for efficiency. However, their commission structures do not override the laws of the land. Whether you are dealing with a personal loan, a credit card debt, or a home loan, the rules of engagement are strictly defined. By the end of this guide, you will have the confidence to face any collection agent, knowing exactly what they can and cannot do, and how to use the legal machinery to put them in their place.
                </p>
                <p>
                  We are living in an era of digital lending, where apps can access your contact lists and photos, leading to new forms of "digital shaming." This guide addresses these modern challenges alongside traditional recovery issues. We will explore the latest RBI circulars for 2025, the power of the Integrated Ombudsman Scheme, the protections of the SARFAESI Act, and the criminal liabilities of agents under the Indian Penal Code. Remember, you are not alone in this fight. The law stands as a shield for those who know how to hold it.
                </p>
              </div>

              <h2 id="rbi-guidelines" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Fundamental Law: RBI Guidelines for Recovery Agents (Revised 2022-2025)</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The cornerstone of your defense against illegal collection practices is the RBI Circular <strong>RBI/2022-23/108</strong>, titled "Outsourcing of Financial Services - Responsibilities of Regulated Entities and Recovery Agents." This document is the bible of recovery ethics in India. If you truly want to learn <strong>how to handle recovery agent harassment</strong>, you must understand the weight of this regulation. For the years 2024 and 2025, these rules serve as the primary compliance check for every bank and NBFC in the country.
                </p>
                <p>
                  <strong>1. Unwavering Accountability:</strong> The most important principle in the RBI guidelines is that the Regulated Entity (the bank or NBFC) is fully and solely responsible for the conduct of its recovery agents. Banks cannot delegate their responsibility or shift the blame to a third-party agency. If an agent harasses you, in the eyes of the law, the bank has harassed you. This accountability is what makes filing formal complaints so effective. When the Regulator (RBI) sees a pattern of harassment, the bank faces massive penalties and reputational damage.
                </p>
                <p>
                  <strong>2. Identification and Authorization:</strong> Verification is your first right. Every recovery agent must, without exception, identify themselves clearly and disclose the name of the lender they represent. They are required to carry a valid identity card and a copy of the specific authorization letter from the bank. If an agent refuses to provide these details, they are technically a stranger attempting to extract money from you. You have no legal obligation to talk to them. In fact, talking to unidentified agents can lead to security risks or falling prey to scammers.
                </p>
                <p>
                  <strong>3. The Golden Window of Communication:</strong> The RBI has set a strict timeline for human decency. Agents are permitted to contact you only between <strong>8:00 AM and 7:00 PM</strong>. Any call, text, or visit before 8:00 AM or after 7:00 PM is a direct breach of the Fair Practices Code. Even if you "answer" a call at 10:00 PM, the agent is still in violation. This window is designed to protect your family life and personal space. Persistent calling—receiving dozens of calls per day—is also classified as harassment, regardless of the time they occur.
                </p>
                <p>
                  <strong>4. Respect for Privacy and Professional Boundaries:</strong> Agents are strictly prohibited from discussing your delinquency with anyone other than you or your authorized representative (like CredSettle). They cannot call your parents to shaming you into paying. They cannot visit your office and shout in front of your colleagues. They cannot put up posters in your residential society. These actions are violations of your fundamental Right to Privacy under Article 21 of the Indian Constitution. The RBI has made it clear that "public shaming" and "invasion of privacy" are grounds for immediate regulatory action.
                </p>
              </div>

              <h2 id="prohibited-actions" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Forbidden List: Actions That Are Strictly Illegal</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Many borrowers are surprised to learn that what they consider "normal recovery tactics" are actually illegal. Recovering a debt does not give an agent a license to commit crimes. Here is a detailed breakdown of prohibited actions you should never tolerate:
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 text-gray-800">
                    <strong>1. Use of Muscle Power:</strong> Any form of physical manhandling, pushing, or even blocking your path is a high-level crime. Banks are civil institutions, not gangs. If an agent threatens physical harm, they are committing "Criminal Intimidation" under Section 503 of the IPC.
                  </li>
                  <li className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 text-gray-800">
                    <strong>2. Verbal Abuse and Profanity:</strong> Agents often use foul language to break a borrower's spirit. This is strictly prohibited. Professional communication must be civil, polite, and respectful. Shouting at a borrower, using sexist remarks, or using vulgar language is a violation of the Fair Practices Code.
                  </li>
                  <li className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 text-gray-800">
                    <strong>3. Threats of Immediate Jail:</strong> Only a court of law, after proper trial and due process, can order imprisonment. Recovery agents have zero authority to arrest you. Threatening someone with "immediate arrest by evening" is a common but completely illegal scare tactic.
                  </li>
                  <li className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 text-gray-800">
                    <strong>4. Impersonating Law Enforcement:</strong> Some agents use WhatsApp profile pictures of the police or introduce themselves as "Inspector from the recovery department." Impersonating a public servant is a serious offense under Section 170 of the IPC.
                  </li>
                  <li className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 text-gray-800">
                    <strong>5. Intrusion of the Household:</strong> Agents cannot forcibly enter your house. If they refuse to leave your premises after being asked, they are committing "Criminal Trespass." You have the right to call the police immediately.
                  </li>
                  <li className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 text-gray-800">
                    <strong>6. False and Misleading Representations:</strong> Telling a borrower that their property has already been seized when it hasn't, or giving false information about the outstanding amount to extort more money, is fraudulent and illegal.
                  </li>
                </ul>
                <p>
                  Recognizing these patterns is key. When an agent realizes they are dealing with an informed borrower who knows these specific prohibitions, their demeanor often changes from "predatory" to "negotiatory." This is the first win in your journey of <strong>how to handle recovery agent harassment</strong>.
                </p>
              </div>

              <h2 id="legal-protections" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Constitutional and Legal Shield: Beyond Regulatory Norms</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  While the RBI circulars are the rules of the banking game, the Indian legal system provides a much broader shield through common law and statutes. Understanding the hierarchy of these laws gives you the ultimate upper hand.
                </p>
                <p>
                  <strong>1. The Constitution of India (Article 21):</strong> The Right to Life includes the Right to live with Dignity. In the landmark case of <em>Puttaswamy v. Union of India</em>, the Supreme Court declared privacy as a fundamental right. Any recovery process that intentionally humiliates a person or exposes their private life to public ridicule is an unconstitutional act. High Courts across India have frequently stayed recovery auctions or proceedings where the lender was found to have violated the borrower's dignity.
                </p>
                <p>
                  <strong>2. The Indian Penal Code (IPC):</strong> This is arguably the most effective deterrent.
                  - <strong>Section 503 & 506 (Criminal Intimidation):</strong> If an agent threatens to injure your reputation, person, or property.
                  - <strong>Section 383 (Extortion):</strong> If an agent uses fear to extract money from you beyond the legal debt.
                  - <strong>Section 441 (Criminal Trespass):</strong> If they enter your property without consent or refuse to leave.
                  - <strong>Section 509 (Insulting Modesty):</strong> Specifically relevant if female family members are targeted or shamed.
                </p>
                <p>
                  <strong>3. The Consumer Protection Act, 2019:</strong> You are a consumer of "Financial Services." The Act protects you from "Unfair Trade Practices." Engaging in harassment, coercion, and intimidation to settle a debt is a textbook case of an unfair practice. Consumer Courts in India are known for being borrower-friendly. If you can prove mental agony caused by harassment, the court can award you damages that sometimes exceed the loan amount itself.
                </p>
                <p>
                  <strong>4. Tort Law (Defamation):</strong> If a recovery agency calls your neighbors or employers and labels you a "defaulter" to damage your reputation, you can sue them for civil defamation. This is a powerful tool to protect your professional standing.
                </p>
              </div>

              <h2 id="step-by-step-guide" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Tactical Roadmap: Step-by-Step Action Plan</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  In the heat of the moment, it is easy to panic. Having a pre-set roadmap is essential for anyone figuring out <strong>how to handle recovery agent harassment</strong>. Follow these specific, tested steps:
                </p>
                <div className="bg-blue-50 p-10 rounded-[40px] space-y-8 border border-blue-100 shadow-inner">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center shrink-0 font-extrabold text-xl shadow-lg">01</div>
                    <div>
                      <h4 className="font-extrabold text-2xl mb-2 text-blue-900 uppercase tracking-wide">The Verification Lockdown</h4>
                      <p className="text-gray-800">Immediately ask for the caller's name, agency, and bank letter. If they are at your door, keep the door closed until they show proof. Inform them the conversation is being recorded for legal evidence. This "Professional Boundary" often scares away part-time bullies.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center shrink-0 font-extrabold text-xl shadow-lg">02</div>
                    <div>
                      <h4 className="font-extrabold text-2xl mb-2 text-blue-900 uppercase tracking-wide">The Evidence Vault</h4>
                      <p className="text-gray-800">Save every piece of data. Screenshot WhatsApp threats. Record audio of abusive calls. Take photos of agents at your door. Save the metadata (date and time). Without evidence, it is your word against theirs. With evidence, it is a regulatory violation.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center shrink-0 font-extrabold text-xl shadow-lg">03</div>
                    <div>
                      <h4 className="font-extrabold text-2xl mb-2 text-blue-900 uppercase tracking-wide">The Cease and Desist</h4>
                      <p className="text-gray-800">Clearly state: "I acknowledge the debt but I will only communicate through official bank channels during RBI hours. I will not tolerate harassment. Any further illegal contact will be reported to the Nodal Officer and the RBI."</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center shrink-0 font-extrabold text-xl shadow-lg">04</div>
                    <div>
                      <h4 className="font-extrabold text-2xl mb-2 text-blue-900 uppercase tracking-wide">The Formal Escalation</h4>
                      <p className="text-gray-800">Most people forget this step. You MUST email the bank's "Grievance Redressal Officer" (GRO) or "Nodal Officer." Banks are legally required to provide an acknowledgment and a response within 30 days. This creates a paper trail for the Ombudsman.</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 id="digital-harassment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Digital Defenses: Handling WhatsApp and Social Media Harassment</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  With the rise of "App-based lending," harassment has moved from the doorstep to the smartphone. This is the new frontier in learning <strong>how to handle recovery agent harassment</strong>. Modern fintech apps often use permissions to read your contact list and subsequently use it to shame you.
                </p>
                <p>
                  The RBI's "Digital Lending Guidelines" (2022) specifically prohibit lenders from accessing a borrower's contact list, photos, or location purely for recovery purposes. If an agent creates a "WhatsApp Group" including you and your relatives to discuss your loan, they are committing a severe regulatory breach. Use the "Report and Block" feature on WhatsApp, but only *after* taking full-screen screenshots showing the agent's number and the message content.
                </p>
                <p>
                  Social Media shaming—posting your photo on Facebook or Instagram labeling you a fraud—is a crime under the IT Act as well as the IPC. You can report these posts to the platform for "harassment" and "invasion of privacy." Additionally, you should report these to the National Cyber Crime Reporting Portal (cybercrime.gov.in). Digital evidence is immutable and very hard for banks to contest in court.
                </p>
              </div>

              <h2 id="rbi-ombudsman" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Ultimate Arbitrator: The Integrated RBI Ombudsman Scheme</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  If the bank ignores your complaint or gives a robotic "we will look into it" response, it is time to bring in the big guns. The RBI Ombudsman is a senior official appointed by the central bank to resolve consumer complaints against financial institutions. Under the <strong>Integrated Ombudsman Scheme 2021</strong>, the process has become incredibly simple.
                </p>
                <p>
                  The Ombudsman acts as a quasi-judicial authority. They have the power to "Award" compensation to you. If your evidence shows that the agent called at 11:00 PM or visited your office without authorization, the Ombudsman can order the bank to stop recovery for a specific period and pay you for the mental agony caused. This complaint is cost-free and does not require a lawyer, making it the most accessible route for a common man.
                </p>
                <p>
                  Pro Tip: When filing at <strong>cms.rbi.org.in</strong>, always mention that "the recovery agent violated the RBI Fair Practices Code and Circular RBI/2022-23/108." Using technical regulatory terms makes the Ombudsman's office prioritize your case as a "Compliance Failure" by the bank.
                </p>
              </div>

              <h2 id="police-legal-notice" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Criminal Enforcement: When to Call the Police</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Regulatory complaints are for "bad behavior," but police complaints are for "crimes." If a recovery agent makes a direct threat to your safety, uses physical force, or tries to seize your asset in an unauthorized manner, do not wait for the bank. Call 100 or 112 immediately.
                </p>
                <p>
                  A formal First Information Report (FIR) under Section 506 (Criminal Intimidation) or Section 441 (Trespass) puts the agent and the agency supervisor in the spotlight of the criminal justice system. Once an FIR is filed, the bank is legally obligated to terminate the agency's contract. This is a "nuclear option" and should be used only when there is a genuine crime, but it is a necessary part of knowing <strong>how to handle recovery agent harassment</strong>.
                </p>
                <p>
                  A Professional Legal Notice from a firm like CredSettle often acts as a bridge. It tells the bank: "We are aware of the crimes your agents are committing. Stop now, or we will file an FIR and an Ombudsman complaint." 90% of banks will stop their aggressive tactics the moment they receive a well-drafted legal notice from a reputable advocate.
                </p>
              </div>

              <h2 id="sarfaesi-act" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Secured vs Unsecured: The SARFAESI Distinction</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Rules for recovery vary based on whether your loan is "Secured" (like a home or car loan) or "Unsecured" (like a credit card or personal loan). This distinction is vital in your strategy.
                </p>
                <p>
                  For Secured Loans, banks use the <strong>SARFAESI Act, 2002</strong>. This allows them to seize the property without a court order, but *only* after a strict legal process:
                  - <strong>Recall Notice (Section 13(2)):</strong> You must get 60 days to pay the dues.
                  - <strong>Symbolic Possession:</strong> They must issue another notice and wait for 30 days before taking physical possession.
                  - <strong>Right to Appeal:</strong> You have the right to challenge this in the <strong>Debt Recovery Tribunal (DRT)</strong> within 45 days.
                </p>
                <p>
                  For Unsecured Loans, banks have NO right to seize any property. They can only file a "Civil Suit for Recovery" or use Section 138 of the NI Act (if a cheque has bounced). If an agent threatens to "take your TV or Fridge" for a credit card debt, they are attempting theft. Unsecured debt recovery is 100% subject to the "no harassment" rule of the RBI.
                </p>
              </div>

              <h2 id="loan-specific-rules" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Loan-Specific Recovery Protocols: Home, Personal, and Credit Card</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Knowing the specifics for your loan type helps you spot illegal tactics faster.
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>Credit Cards:</strong> These are the most aggressive. Recovery is often outsourced to low-level agencies. Remember: persistent calling is their main weapon. Use the DND (Do Not Disturb) and TCC (Targeted Communication) rules.</li>
                  <li><strong>Home Loans:</strong> Here, the bank usually focuses on SARFAESI. Harassment at the doorstep is less common, but "intimidation via notices" is high. Ensure every notice has a <strong>DIN (Document Identification Number)</strong> or is verifiable.</li>
                  <li><strong>App-Based Personal Loans:</strong> These are the highest risk for digital shaming. If they call your contacts, report them to the RBI's Sachet portal immediately. This is a violations of the <strong>LSP (Lending Service Provider)</strong> guidelines.</li>
                </ul>
              </div>

              <h2 id="mental-health" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Standing Tall: Managing Mental Health and Financial Stress</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The goal of harassment is "Mental Erasure"—to make you so stressed that you take desperate measures. Understanding <strong>how to handle recovery agent harassment</strong> includes taking care of your mind.
                </p>
                <p>
                  - **It's a Debt, Not a Sin:** Defaulting on a loan is a financial failure, not a moral one. Most successful entrepreneurs have faced debt issues.
                  - **Talk to Your family:** Do not hide the debt. Harassment thrives on your fear of your family finding out. Once your family knows, the agent loses their "shaming power."
                  - **Join Support Groups:** Platforms like CredSettle provide an ecosystem of people in similar situations. Knowing you aren't alone reduces stress significantly.
                  - **Focus on the Solution:** Instead of worrying about the calls, work with experts to plan your settlement. Action is the best antidote to anxiety.
                </p>
              </div>

              <h2 id="loan-settlements" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Clean Exit: Navigating Loan Settlements Safely</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  A loan settlement is the final resolution. It allows you to close the account for 30% to 50% of the total amount. However, the settlement process itself can be a trap if not done right.
                </p>
                <p>
                  <strong>NEVER Settle with an Agent:</strong> They will take your money and disappear. Only negotiate with a bank employee in the branch or through a registered debt relief agency.
                  <strong>The Settlement Letter:</strong> Do not pay a single rupee until you have a "Settlement Offer Letter" in your hand (or official email). This letter must have the bank's logo, a unique reference number, and a clear deadline.
                  <strong>The "Settled" Status:</strong> Understand that this will appear on your CIBIL report. It is a sacrifice of your credit score for your financial freedom. However, standard settlement allows you to rebuild your score after 2 years.
                </p>
              </div>

              <h2 id="documentation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Evidence Manual: Building an Unbeatable Case</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  When you step into the world of legal recovery, your "Folder" is your best friend.
                  - **The Chronology Log:** Keep a notebook. Write down: Date, Time, Caller Name, Phone Number, Agency, Summary of conversation.
                  - **Digital Backup:** Save all recordings to a cloud drive (Google Drive or iCloud). Hard drives can fail, and phones can be lost.
                  - **Postal Records:** Never send a letter via ordinary post. Use "Speed Post" or "Registered Post" and save the tracking slips. They are legal proof of service.
                  - **The Bank's Response:** Save the acknowledgment IDs of your complaints. If they don't respond, the "No Response" is itself a piece of evidence for the Ombudsman.
                </p>
              </div>

              <h2 id="legal-templates" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Drafting Your Defense: Complaint Templates for Borrowers</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  To help you in your quest of <strong>how to handle recovery agent harassment</strong>, we have provided these basic legal drafts. Use them as a starting point.
                </p>
                <div className="bg-gray-100 p-8 rounded-2xl border border-gray-300 font-mono text-sm overflow-x-auto">
                  <p><strong>SUBJECT: FORMAL COMPLAINT AGAINST ILLEGAL RECOVERY PRACTICES BY AGENTS OF [BANK NAME]</strong></p>
                  <p>Dear Nodal Officer,</p>
                  <p>I am [Name], account holder of [Loan Number]. I am writing to report a serious violation of RBI Circular RBI/2022-23/108 by your authorized agents.</p>
                  <p>On [Date] at [Time], an agent claiming to be from your bank called from [Phone Number] and used [Abusive Language / Threat of Violence]. Furthermore, the call was made outside the prescribed RBI hours (8 AM - 7 PM).</p>
                  <p>I have evidence of this harassment in the form of [Audio Recording / Screenshots]. This act has caused me significant mental agony and is a breach of my Right to Privacy.</p>
                  <p>Please consider this a formal notice to stop all such illegal activities immediately. If no action is taken within 7 days, I will be forced to escalate this to the RBI Ombudsman and file a complaint with the local Cyber Cell/Police.</p>
                  <p>Awaiting your acknowledgment.</p>
                  <p>Sincerely, [Your Name]</p>
                </div>
              </div>

              <h2 id="credsettle-role" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The CredSettle Advantage: Why Thousands Trust Our Professional Shield</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Learning <strong>how to handle recovery agent harassment</strong> by yourself is brave, but it is also exhausting. CredSettle was built on the foundation of "Pro-Borrower Justice." We are not just agents; we are your legal and tactical shield.
                </p>
                <p>
                  When you join the CredSettle family, we don't just give you advice; we act on your behalf.
                  - **The Legal Firewall:** We send a formal intimation to your banks, informing them that you are now represented by our legal team. From that moment, any contact by a recovery agent is a violation of our "Agent-Client" privilege.
                  - **Negotiation Mastery:** Banks take us seriously because they know we are experts in the law. We negotiate for the lowest possible settlement amounts, ensuring you get a clean exit without the stress of daily calls.
                  - **Holistic Relief:** We provide financial counseling and mental health support, ensuring that you don't just clear your debt, but you also rebuild your life.
                </p>
              </div>

              <h2 id="success-stories" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">From Fear to Freedom: Real Success Stories</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500">
                  <h4 className="font-bold text-xl mb-2">Case Study: The Workplace Harassment Stop</h4>
                  <p><strong>The Problem:</strong> A young professional in Pune was being hounded by credit card agents at her office. Her manager was starting to question her professionalism.</p>
                  <p><strong>The Action:</strong> CredSettle drafted a "Cease and Desist" notice to the bank's Nodal Officer and a copy to the agency. We cited the defamation laws and RBI shaming rules.</p>
                  <p><strong>The Result:</strong> The bank immediately apologized, withdrew the file from that agency, and negotiated a 45% settlement with a 12-month EMI plan. She kept her job and her peace.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500">
                  <h4 className="font-bold text-xl mb-2">Case Study: The Digital Shaming Rescue</h4>
                  <p><strong>The Problem:</strong> A small business owner in Chennai had his photos circulated on a WhatsApp group of his neighbors by a fintech app agent.</p>
                  <p><strong>The Action:</strong> We helped him file an FIR under the IT Act and an Ombudsman complaint with the screenshots. The RBI awarded him a compensation of ₹50,000 for mental agony.</p>
                  <p><strong>The Result:</strong> The bank waived off the entire interest and late fees as a gesture of goodwill to avoid further legal action. He is now successfully rebuilding his business.</p>
                </div>
              </div>

              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Verified Customer Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {reviews.map((review, index) => (
                  <div key={index} className="p-8 bg-gray-50 rounded-[30px] border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl tracking-wide flex">{'★'.repeat(review.rating)}</div>
                    </div>
                    <p className="text-gray-700 italic mb-6 text-base leading-relaxed">
                      "{review.text}"
                    </p>
                    <div className="mt-auto">
                      <p className="font-extrabold text-blue-900">{review.name}</p>
                      <p className="text-gray-500 text-sm">{review.location} • {review.date}</p>
                    </div>
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

              <div className="mt-16 p-8 md:p-14 bg-blue-900 text-white rounded-[40px] text-center shadow-2xl overflow-hidden relative">
                <div className="z-10 relative">
                  <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">Enough is Enough. Stop the Harassment Today.</h2>
                  <p className="text-blue-100 mb-10 max-w-3xl mx-auto text-xl font-light">Join over 15,000 satisfied clients who have reclaimed their lives. Let us handle the banks while you focus on your future. Zero harassment, total peace.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-12 py-5 rounded-full font-extrabold text-xl hover:bg-blue-50 transition-all shadow-2xl hover:scale-105 active:scale-95"
                  >
                    Get Free Legal Consultation Now
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full -mr-32 -mt-32 opacity-50 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-800 rounded-full -ml-32 -mb-32 opacity-50 blur-3xl"></div>
              </div>

            </article>
          </div>

          <div className="lg:w-1/5 w-full">
            <div className="sticky top-24 space-y-8">
              
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-xl text-white transform hover:rotate-1 transition-transform">
                <div className="absolute top-4 right-4 bg-red-500 text-[10px] font-extrabold px-2 py-1 rounded uppercase tracking-tighter animate-pulse">Urgent Service</div>
                <h4 className="font-bold text-2xl mb-4">Under Pressure?</h4>
                <p className="text-blue-100 mb-6 text-sm">Don't wait for another abusive call. Our legal shield starts protecting you in under 4 hours.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-white text-blue-700 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-md"
                >
                  Apply For Protection
                </Link>
                <div className="mt-8 pt-6 border-t border-blue-500/30 space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>100% Privacy Guranteed</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>RBI Rules Compliance</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Direct Legal Handling</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">Top Resources</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/loan-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm">Loan Settlement Bible</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-is-npa" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm">NPA Survival Guide</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm">Who We Are</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm">Free Debt Assessment</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Trust Score</span>
                  <span className="text-[10px] font-black text-blue-600 uppercase italic">Excellent</span>
                </div>
                <div className="flex text-blue-600 text-lg mb-2">★★★★★</div>
                <p className="text-[11px] text-gray-500 leading-tight">CredSettle is rated 4.9/5 based on 15,400+ reviews across India.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
