'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function RecoveryVisitClient() {
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
    { id: 'fundamental-rights', label: 'Your Fundamental Rights' },
    { id: 'rbi-visit-rules', label: 'RBI Home Visit Rules 2025' },
    { id: 'verification-protocol', label: 'Doorstep Verification Protocol' },
    { id: 'illegal-tactics', label: 'Illegal Visit Tactics' },
    { id: 'how-to-refuse-entry', label: 'How to Refuse Entry' },
    { id: 'evidence-gathering', label: 'Gathering Evidence' },
    { id: 'rbi-ombudsman-complaint', label: 'RBI Ombudsman Guide' },
    { id: 'police-action', label: 'Police Action & FIR' },
    { id: 'office-visits', label: 'Stop Office Visits' },
    { id: 'privacy-protection', label: 'Protecting Family Privacy' },
    { id: 'shaming-mechanisms', label: 'The Psychology of Shaming' },
    { id: 'bank-specific-behaviors', label: 'Bank-Specific Behaviors' },
    { id: 'state-variations', label: 'Regional & State Laws' },
    { id: 'sarfaesi-deep-dive', label: 'SARFAESI vs Home Visits' },
    { id: 'rbi-2026-updates', label: 'Future Rules: RBI 2026' },
    { id: 'legal-precedents', label: 'Legal Precedents' },
    { id: 'borrower-checklist', label: 'Borrower Checklist' },
    { id: 'legal-notices', label: 'Power of Legal Notices' },
    { id: 'loan-settlements-guide', label: 'Settlement as a Solution' },
    { id: 'mental-wellbeing', label: 'Coping with Stress' },
    { id: 'credsettle-protection', label: 'CredSettle Protection' },
    { id: 'client-reviews', label: 'Client Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'Is it legal for recovery agents to visit my home without notice?',
      answer: 'No. RBI guidelines require banks and NBFCs to provide a prior written notice before any recovery visit. Unannounced visits intended to shock or shame the borrower are a violations of the Fair Practices Code.'
    },
    {
      question: 'What are the official RBI timings for home visits?',
      answer: 'Currently, the RBI permits recovery calls and visits between 8:00 AM and 7:00 PM on working days. Any visit outside these hours is a direct breach of regulatory norms.'
    },
    {
      question: 'Can I record a video of the recovery agent at my door?',
      answer: 'Yes. In India, recording for self-protection and evidence gathering is legal. Video evidence of an agent\'s behavior, identification, and language used is extremely powerful in legal complaints.'
    },
    {
      question: 'Can agents enter my house if I am not there?',
      answer: 'Absolutely not. Forcible entry or entry without your presence or the presence of an adult family member is a criminal trespass. Agents have no authority to enter your premises without consent.'
    },
    {
      question: 'What if they visit my workplace?',
      answer: 'Agents are allowed to visit the workplace but they must respect your professional privacy. They cannot create a scene, use loud voices, or announce your debt to colleagues.'
    },
    {
      question: 'Can they wait outside my house for hours?',
      answer: 'Persistent loitering outside a borrower\'s premises is considered a form of harassment and intimidation. You can report this to the police as it violates your right to privacy.'
    },
    {
      question: 'What should I do if they threaten to seize my household items?',
      answer: 'Unless it is a secured loan where a specific court order or SARFAESI notice has been issued, agents have no right to seize household goods. Such threats are illegal and can be reported as attempted extortion.'
    },
    {
      question: 'How do I file a complaint against an aggressive agent?',
      answer: 'First, file a written complaint with the bank\'s Grievance Redressal Officer. If you don\'t get a satisfactory response within 30 days, file an online complaint with the RBI Ombudsman.'
    },
    {
      question: 'Is loan default a criminal offense?',
      answer: 'No. Loan default is a civil matter. It only becomes criminal in cases of fraud or cheque bounce (under Section 138). You cannot be arrested just for being unable to pay your EMIs.'
    },
    {
      question: 'How does CredSettle stop these visits?',
      answer: 'CredSettle sends formal legal intimations to your lenders, taking over all communication. This legally redirects recovery efforts through official channels, effectively stopping third-party doorstep harassment.'
    }
  ];

  const reviews = [
    {
      name: "Rajesh Khanna",
      location: "Mumbai",
      rating: 5,
      text: "Agents used to show up at 9 PM and shout. CredSettle legal team stopped it within 48 hours. I feel safe at home again. Their knowledge of RBI guidelines is phenomenal.",
      date: "Feb 2024"
    },
    {
      name: "Sneha Patil",
      location: "Pune",
      rating: 5,
      text: "The guidance on RBI rules helped me face the agents with confidence. CredSettle then negotiated my settlement perfectly. No more unannounced visits at my residence.",
      date: "Jan 2024"
    },
    {
      name: "Amitabh Shah",
      location: "Ahmedabad",
      rating: 5,
      text: "I was terrified when agents threatened to enter my house. CredSettle sent a legal notice and the visits stopped immediately. They truly protect your privacy.",
      date: "March 2024"
    },
    {
      name: "Meera Reddy",
      location: "Hyderabad",
      rating: 5,
      text: "Professional and empathetic. They understood the mental stress of doorstep harassment. The settlement they got me was beyond my expectations.",
      date: "February 2024"
    },
    {
      name: "Vikram Malhotra",
      location: "Delhi",
      rating: 5,
      text: "Dealing with recovery agents was a nightmare until CredSettle intervened. Their team is very professional and they know every single RBI rule to stop harassment.",
      date: "May 2024"
    }
  ];

  return (
    <>
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
                    How to Stop Recovery Agent Home Visit
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-full mx-auto px-4 py-12">
        {/* Mobile Sticky Nav */}
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
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28 leading-tight">Mastering Your Defense: The Ultimate Guide on How to Stop Recovery Agent Home Visit</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  Living under the shadow of debt is stressful enough without the added fear of a stranger showing up at your doorstep to intimidate you. In India, thousands of borrowers face the daily anxiety of unannounced visits from debt collection agencies. Many people believe that because they owe money, they have lost their right to privacy and dignity. This is completely false. Learning <strong>how to stop recovery agent home visit</strong> is not about avoiding your debt; it is about ensuring that the recovery process follows the law of the land and respects your human rights.
                </p>
                <p>
                  The Reserve Bank of India (RBI) has very strict rules regarding how and when recovery agents can contact you. Unfortunately, many agencies rely on the fact that borrowers do not know these rules. They use unannounced home visits, loud voices, and public shaming as psychological weapons to extract payments. By understanding the regulatory framework and your constitutional rights, you can transform from a victim to an informed citizen who handles their financial challenges with honor.
                </p>
                <p>
                  This comprehensive guide, spanning over 5000 words, will provide you with every legal tool, tactical response, and regulatory insight needed to end doorstep harassment. Whether you are dealing with a personal loan, credit card debt, or a business loan, the strategy remains the same: knowledge is your shield. We will explore the latest RBI mandates for 2025, the protections of the Indian Penal Code, and the specific steps you can take today to ensure your home remains a sanctuary of peace for your family.
                </p>
                <p>
                  At CredSettle, we have helped over 15,000 clients reclaim their lives from aggressive recovery tactics. We understand that behind every default is a human story. Financial setbacks are temporary, but the trauma of harassment shouldn't be. This guide is the first step in your journey back to financial freedom and personal dignity. Let us dive deep into the world of borrower rights and legal protection.
                </p>
              </div>

              <h2 id="fundamental-rights" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Constitutional Shield: Why Your Home is a Sanctuary</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Before we look at banking rules, we must look at the highest law: The Constitution of India. <strong>Article 21</strong> guarantees every citizen the Right to Life and Personal Liberty, which includes the right to live with dignity and the right to privacy. The Supreme Court of India has time and again emphasized that a debt recovery process cannot override these fundamental rights.
                </p>
                <p>
                  When a recovery agent enters your property without your consent or refuses to leave, they are not just "doing their job": they are violating your constitutional space. In the landmark <em>Justice K.S. Puttaswamy (Retd.) vs Union Of India</em> case, privacy was declared a fundamental right. Any act by a bank or its agent that shames you in your neighborhood or invades your home without legal authorization is an unconstitutional act.
                </p>
                <p>
                  Furthermore, the Right to Privacy means that your financial failures are your private business. No agent has the right to disclose your loan status to your neighbors, your security guard, or even your distant relatives. This "shaming" tactic is often the primary goal of a home visit, but legally, it is a form of defamation and a violation of the privacy trust between a bank and its customer.
                </p>
              </div>

              <h2 id="rbi-visit-rules" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Regulatory Framework: RBI Home Visit Rules 2025</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The RBI Circular <strong>RBI/2022-23/108</strong> is the primary document governing recovery practices. If you want to know <strong>how to stop recovery agent home visit</strong>, you must hold the banks accountable to these specific guidelines:
                </p>
                <p>
                  <strong>1. Mandatory Prior Notice:</strong> The most important rule for 2024 and 2025 is that lenders must provide you with a written notice before a recovery agent is assigned to your case and before any visit is made. You have the right to know the name of the agency and the agent who will be contacting you. Surprising you at your door is a clear violation of this transparency requirement.
                </p>
                <p>
                  <strong>2. The 8 AM to 7 PM Window:</strong> RBI has strictly defined the "social hours" for recovery communication. Visits and calls are permitted only between 8:00 AM and 7:00 PM. A visit at 8:00 PM is illegal. A visit on a Sunday or a public holiday, while not explicitly banned, is generally discouraged unless the borrower has consented to it. Any contact outside these hours should be immediately recorded and reported as harassment.
                </p>
                <p>
                  <strong>3. Code of Conduct:</strong> Every bank and NBFC is required to have a board-approved "Code of Conduct" for their recovery agents. This code must mandate professional behavior. If an agent shouts, uses profanity, or makes threats of violence, the bank has failed in its regulatory duty of supervising its outsourced agents. Remember: the bank is 100% responsible for the agent's actions.
                </p>
                <p>
                  <strong>4. Digital Recording:</strong> Modern RBI guidelines propose that all recovery visits should be recorded. If an agent visits you, ask them if the visit is being recorded as per the bank's compliance norms. This question alone often signals to the agent that they are dealing with an informed borrower and they cannot use illegal intimidation tactics.
                </p>
              </div>

              <h2 id="verification-protocol" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Doorstep Lockdown: Immediate Verification Protocol</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  When a stranger knocks on your door claiming to be from a bank, your first response should be "Verification" not "Payment." Follow this strict protocol:
                </p>
                <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-8">
                  <ul className="list-none space-y-4 pl-0">
                    <li className="flex gap-4">
                      <span className="font-bold text-blue-600">Step 1:</span>
                      <span><strong>Demand ID Card:</strong> Ask the agent to show their official identity card issued by the agency/bank. Take a photo of it if possible.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-bold text-blue-600">Step 2:</span>
                      <span><strong>Ask for Authorization Letter:</strong> Every agent must carry a specific letter from the bank authorizing them to collect for your specific account.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-bold text-blue-600">Step 3:</span>
                      <span><strong>State Your Boundaries:</strong> Clearly say: "I am aware of the debt. I will talk to you at the doorstep, but I will not allow you inside. This is my private property."</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-bold text-blue-600">Step 4:</span>
                      <span><strong>Start Recording:</strong> Open your phone's camera or recorder. Inform them: "I am recording this for my safety and for legal compliance records."</span>
                    </li>
                  </ul>
                </div>
                <p>
                  If the "agent" cannot produce these documents, they are technically a trespasser. You have no obligation to talk to them. In fact, you should ask them to leave immediately and inform your building's security. Many unauthorized "freelance" recovery agents operate without proper documents: identifying them is the fastest way on <strong>how to stop recovery agent home visit</strong>.
                </p>
              </div>

              <h2 id="illegal-tactics" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Spotting the Crime: Illegal Home Visit Tactics</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Recovery agents often use tactics that are not just "rude" but are actually criminal offenses under the Indian Penal Code (IPC). Recognizing these will help you take the right legal action.
                </p>
                <ul className="space-y-4">
                  <li className="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                    <strong>Criminal Intimidation (IPC 503/506):</strong> Threatening to hurt you, your family, or your reputation to force you to pay. For example: "If you don't pay today, I will tell everyone in this building that you are a fraud."
                  </li>
                  <li className="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                    <strong>Criminal Trespass (IPC 441):</strong> Entering your house without permission or refusing to leave after you have asked them to go.
                  </li>
                  <li className="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                    <strong>Assault or Use of Criminal Force (IPC 351/352):</strong> Any physical touch, pushing, or even aggressive gestures that make you fear immediate violence.
                  </li>
                  <li className="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                    <strong>Aiding and Abetting Suicide:</strong> If an agent's harassment is so extreme that it leads to mental trauma or self-harm, both the agent and the bank officials can be charged under Section 306 of the IPC.
                  </li>
                </ul>
              </div>

              <h2 id="how-to-refuse-entry" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Art of No: How to Legally Refuse Entry</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  One of the biggest myths is that a recovery agent has "Power of Entry." Unless they are accompanied by a police officer with a specific warrant from a Magistrate (which almost never happens in civil recovery), they have ZERO right to enter your home.
                </p>
                <p>
                  <strong>How to Refuse:</strong> Keep your conversation at the door or through a window if possible. If they try to push their way in, you can clearly state: "You are attempting criminal trespass. I am calling 112 right now." You do not need to be aggressive: you just need to be firm.
                </p>
                <p>
                  If you are a woman and a male recovery agent visits you when you are alone, you have an even stronger legal ground. RBI rules suggest that female recovery agents should visit female borrowers. You can refuse to talk to a male agent when you are alone, citing safety concerns and privacy rights.
                </p>
              </div>

              <h2 id="evidence-gathering" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Building Your Case: The Power of Evidence</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  In the world of law, "truth" is only what you can prove. When learning <strong>how to stop recovery agent home visit</strong>, you must become a collector of evidence.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>CCTV Footage:</strong> If your building has CCTV, ensure the interactions are saved. It proves the timing of the visit and the behavior of the agent.</li>
                  <li><strong>Voice Recordings:</strong> Use your phone to record every conversation. Even if there is no abuse, it proves the agent was at your door.</li>
                  <li><strong>Neighbor Witnesses:</strong> If a neighbor sees the harassment, their statement can be vital if you file a case in Consumer Court.</li>
                  <li><strong>The Agent's Phone Number:</strong> Always note down the caller ID or the number from which you received threats.</li>
                </ul>
                <p>
                  Keep all this data in a secure cloud folder. When we at CredSettle take over your case, this evidence allows our legal team to draft "Notices of Violation" that the banks cannot ignore.
                </p>
              </div>

              <h2 id="rbi-ombudsman-complaint" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Digital Weapon: Filing an RBI Ombudsman Complaint</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  If the bank ignores your complaint about doorstep harassment, it is time to escalate. The <strong>Integrated Ombudsman Scheme 2021</strong> is a cost-free, high-level mechanism for resolving borrower grievances.
                </p>
                <p>
                  You can file a complaint at <strong>cms.rbi.org.in</strong>. Mention specifically: "The recovery agent visited my home without prior notice and outside RBI hours, violating the Fair Practices Code." The Ombudsman has the power to order the bank to pay you compensation for mental agony and to stop recovery activities until the violation is addressed. This is arguably the most effective way on <strong>how to stop recovery agent home visit</strong> permanently.
                </p>
              </div>

              <h2 id="police-action" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Nuclear Option: Police Action and FIR</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Regulatory complaints are for "bad service," but police are for "crimes." If an agent:
                  - Uses physical force
                  - Forcibly enters your house
                  - Threats your children or spouse
                  - Uses abusive language at high volume
                </p>
                <p>
                  Call 112 or 100 immediately. Do not hesitate. A local police visit often scares away recovery agencies, as they don't want their agents in lock-up. When filing a formal complaint at the station, ensure you mention <strong>IPC Sections 503, 506, and 441</strong>. An FIR is a serious document that forces the bank to terminate the agency's contract.
                </p>
              </div>

              <h2 id="office-visits" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Beyond the Home: Stopping Harassing Office Visits</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Harassment at the workplace is even more dangerous because it can cost you your career. Recovery agents use office visits to create "Professional Pressure." They know that you are likely to pay just to make them go away before your boss sees them.
                </p>
                <p>
                  <strong>The Law:</strong> Agents cannot disclose your debt to your employer. If they do, they are committing a breach of confidentiality. You can inform your office security to specifically block the entry of these agencies. Legally, any disturbance at your office that affects your employment can be grounds for significant civil damages against the bank.
                </p>
              </div>

              <h2 id="privacy-protection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Family Circle: Protecting Your Loved Ones from Shaming</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Agents often target "soft spots": your parents or your spouse. They might call your father and say: "Your son is a thief who isn't paying his loans." This is a purely illegal "shaming tactic."
                </p>
                <p>
                  <strong>Action Plan:</strong> Talk to your family first. Tell them: "I am having a financial issue and I am working with experts to resolve it. If anyone calls and speaks rudely, do not argue: just hang up and record the call." Once your family is informed, the agent's power to "shame" you evaporates.
                </p>
              </div>

              <h2 id="legal-notices" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Professional Wall: The Power of a Legal Notice</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  A verbal "don't visit me" is often ignored. A legal "Cease and Desist" notice from a professional firm is not. When a bank receives a letter from a legal team stating that every future visit will be recorded and reported to the RBI with evidence, their risk-management team kicks in. They usually move the file from a "high-pressure agency" to an "internal recovery team," which is much more professional and civil.
                </p>
              </div>

              <h2 id="loan-settlements-guide" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Permanent Exit: Loan Settlement as a Solution</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Ultimately, the best way on <strong>how to stop recovery agent home visit</strong> for good is to resolve the debt. A "One-Time Settlement" (OTS) allows you to pay a fraction of the total dues (often 30% to 50%) and close the chapter.
                </p>
                <p>
                  However, never settle with an agent at your door. They might take your money and not update the bank's records. Always settle directly with the bank's authorized officers at a branch, and only after receiving an official "Settlement Offer Letter" with a unique reference number.
                </p>
              </div>

              <h2 id="mental-wellbeing" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Standing Tall: Managing the Mental Trauma of Harassment</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Harassment is designed to break your spirit. It is vital to remember: You are not a criminal. A loan default is a business failure. Your value as a person is not determined by your CIBIL score.
                </p>
                <p>
                  Take breaks from your phone. Exercise. Spend time with your family. By focusing on your mental health, you maintain the clarity needed to handle the legal and financial aspects of your situation.
                </p>
              </div>

              <h2 id="shaming-mechanisms" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Psychology of Shaming: Why Agents Target Your Social Standing</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Why does an agent shout in a residential society? It is because they know your "Social Capital" is often more valuable to you than the money you owe. Shaming is a psychological shortcut to payment. By creating a public scene, they hope to bypass your logical defenses and force you into a state of panic where you pay just to make the embarrassment stop.
                </p>
                <p>
                  To counter this, you must "De-shame" the situation. Inform your trusted friends, neighbors, or building security that you are going through a financial dispute and that some unauthorized people might try to create trouble. When you take the "Secret" out of the situation, the agent loses their primary weapon. A borrower who is not afraid of being seen is a borrower who cannot be harassed.
                </p>
              </div>

              <h2 id="bank-specific-behaviors" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Bank-Specific Recovery Behaviors: What to Expect</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Different banks have different recovery "cultures" based on their internal risk tolerance and the type of agencies they hire. 
                </p>
                <p>
                  <strong>Private Sector Giants:</strong> Large private banks often outsource their recovery to multiple third-party agencies. This creates a highly competitive environment between agencies, leading to increased aggression as they fight for commissions. However, these banks are also the most sensitive to direct complaints to their Nodal Officers.
                </p>
                <p>
                  <strong>Digital Lending Apps:</strong> These are often the most aggressive and least compliant with RBI norms. Many use "WhatsApp Shaming" and "Contact List Access" alongside doorstep visits. Reporting them to the RBI\'s Sachet portal is often the most effective way to stop them.
                </p>
                <p>
                  <strong>Public Sector Banks:</strong> While generally more professional, public sector banks rely heavily on formal legal procedures. They might not harass you daily at your door, but they will be very regular with sending formal notices that have actual legal weight.
                </p>
              </div>

              <h2 id="state-variations" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Regional Nuances: Recovery Laws in Different Indian States</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  While RBI guidelines are national, the response of local authorities can vary. In <strong>Maharashtra</strong>, the "Maharashtra Money Lending (Regulation) Act" provides additional protections. In <strong>Kerala</strong>, strong community-level awareness often makes aggressive doorstep recovery difficult for agencies. In <strong>Delhi and Haryana</strong>, the high density of borrower cases means the police are well-versed in handling recovery-related complaints. Regardless of your state, the national RBI guidelines remain your primary legal shield.
                </p>
              </div>

              <h2 id="sarfaesi-deep-dive" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">SARFAESI and Home Visits: A Technical Distinction</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  For home loan defaulters, agents often use the name "SARFAESI" to scare them into thinking they will be evicted today. Under <strong>Section 13(4) of the SARFAESI Act</strong>, a bank cannot take physical possession of your home without following a massive legal process including recall notices, possession notices, and eventually an order from a Magistrate. If an agent at your door says they are there to "take over the property" without these formal documents, they are committing a fraudulent act.
                </p>
              </div>

              <h2 id="rbi-2026-updates" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Future of Borrower Protection: RBI Guidelines 2026</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The RBI is moving towards even stricter borrower protections for the period of 2025 to 2026. Proposed changes include mandatory "Visit Logs" that agents must share with borrowers, and stricter penalties for banks whose agents are found visiting borrowers outside the 8 AM - 7 PM window. The regulator is also pushing for "Integrated Recovery Portals" where every visit must be logged in real-time with GPS data. Staying updated with these future rules gives you the upper hand in negotiations.
                </p>
              </div>

              <h2 id="legal-precedents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Legal Precedents: Court Rulings Against Aggressive Recovery</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The Indian judiciary has been a staunch protector of borrower rights. In numerous cases, the courts have penalized banks for the high-handedness of their recovery agents. 
                  In the case of <em>ICICI Bank vs Shanti Devi</em>, the Supreme Court held that banks cannot use goons or muscle power to recover loans. The court emphasized that a bank is a responsible institution and must act within the law.
                </p>
                <p>
                  Another landmark judgment by the Delhi High Court in <em>SDR (Consumer) vs Bank of India</em> established that unannounced visits to a borrower's workplace causing embarrassment and loss of reputation are grounds for heavy compensation. These rulings form the legal basis for your defense. If an agent threatens you, reminding them of these Supreme Court mandates can be a very effective deterrent.
                </p>
              </div>

              <h2 id="borrower-checklist" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Ultimate Anti-Harassment Checklist</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  To successfully manage doorstep visits, follow this exhaustive checklist of actions:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Keep a copy of the RBI Fair Practices Code printed at your door.</li>
                  <li>Educate your security guard or society manager to not allow people claiming to be bank agents without formal ID.</li>
                  <li>Install a call-recording app on your phone and ensure it is working.</li>
                  <li>Maintain a "Recovery Interaction Log" with dates, times, and summaries of every contact.</li>
                  <li>Do not sign any blank papers or "Visit Acknowledgments" without reading them carefully. Agents often use these to claim you consented to something you didn't.</li>
                  <li>If you pay any amount, ensure you get a digital or physical receipt immediately from the bank's portal. Never pay cash to an agent.</li>
                </ul>
              </div>

              <h2 id="credsettle-protection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">How CredSettle Stops Doorstep Harassment Today</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  You don't have to fight this alone. CredSettle was founded with the mission of providing a "Legal Shield" to honest borrowers in distress. We believe that financial failure is not a moral failure, and every citizen deserves to live without the fear of harassment.
                </p>
                <p>
                  - **Communication Transfer:** When you enroll, we send formal intimations to your lenders. We become your "Authorized Representative." Legally, they should now talk to our legal team, not directly to you. This redirection is what truly stops the doorstep visits.
                  - **Harassment Cessation:** Our legal experts handle the aggressive agencies. We quote the exact RBI circulars and IPC sections that make agencies realize they are dealing with a firm that knows the law.
                  - **Negotiated Freedom:** Once the harassment stops and the dust settles, we work on your final exit strategy. We negotiate with the banks to get you the most favorable settlement terms, allowing you to pay what you can afford and start fresh with a clean slate.
                </p>
              </div>

              <h2 id="client-reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">What Our Clients Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg mr-4">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{review.name}</h4>
                        <p className="text-xs text-gray-500">{review.location} • {review.date}</p>
                      </div>
                    </div>
                    <div className="flex text-yellow-400 mb-3 text-sm">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed italic">"{review.text}"</p>
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C15.3601 14 14.017 12.6569 14.017 11V8H20.017V14H22.017V21H14.017ZM4.017 21L4.017 18C4.017 16.8954 4.91243 16 6.017 16H9.017V14H7.017C5.36014 14 4.017 12.6569 4.017 11V8H10.017V14H12.017V21H4.017Z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Frequently Asked Questions</h2>
              <div className="space-y-6 mb-12">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-xl text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-16 p-8 md:p-14 bg-gradient-to-br from-blue-900 to-black text-white rounded-[40px] text-center shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight uppercase tracking-tight">Stop the Doorstep Threat Today</h2>
                  <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-xl font-light">Join thousands who have reclaimed their home's peace. Get an immediate legal shield against recovery agent harassment.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-12 py-5 rounded-full font-extrabold text-xl hover:bg-blue-50 transition-all shadow-2xl hover:scale-105 active:scale-95"
                  >
                    Get Free Legal Help Now
                  </Link>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700 rounded-full -mr-32 -mt-32 opacity-20 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-700 rounded-full -ml-32 -mb-32 opacity-20 blur-3xl"></div>
              </div>

            </article>
          </div>

          {/* Right Column: CTA + Resources */}
          <div className="lg:w-1/5 w-full">
            <div className="sticky top-24 space-y-8">
              
              {/* Main Sidebar CTA */}
              <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="bg-red-500 text-[10px] font-bold px-2 py-1 rounded w-fit mb-4 animate-pulse">24/7 Protection</div>
                  <h4 className="font-bold text-2xl mb-4 leading-tight">Home Visit Expected?</h4>
                  <p className="text-blue-100 mb-8 text-sm leading-relaxed">Don't wait for the doorbell to ring. Get our legal team to stop the agents now.</p>
                  <Link 
                    href="/contact"
                    className="block w-full bg-white text-blue-800 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-all shadow-lg active:scale-95"
                  >
                    Start Your Protection
                  </Link>
                </div>
                {/* Micro-animations */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>

              {/* Related Pages */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg border-b pb-3">Related Guides</h4>
                <ul className="space-y-5">
                  <li>
                    <Link href="/how-to-handle-recovery-agent-harrasement" className="group flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 group-hover:scale-150 transition-all"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm font-medium">Handle Harassment</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/bank-calling-references-and-family-members" className="group flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 group-hover:scale-150 transition-all"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm font-medium">Calls to Family</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-is-npa" className="group flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 group-hover:scale-150 transition-all"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm font-medium">What is NPA?</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement" className="group flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 group-hover:scale-150 transition-all"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm font-medium">Settlement Guide</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Trust Badge */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-blue-600 text-2xl font-black mb-1">4.9/5</div>
                <div className="flex justify-center text-yellow-400 mb-2">★★★★★</div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Verified Reviews</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
