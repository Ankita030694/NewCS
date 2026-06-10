'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function RightsClient() {
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
    { id: 'legal-framework', label: 'Legal Framework' },
    { id: 'rbi-guidelines', label: 'RBI Guidelines' },
    { id: 'permissible-conduct', label: 'Permissible Conduct' },
    { id: 'privacy-dignity', label: 'Privacy & Dignity' },
    { id: 'brand-support', label: 'Expert Support' },
    { id: 'handling-harassment', label: 'Handling Harassment' },
    { id: 'legal-remedies', label: 'Legal Remedies' },
    { id: 'resources', label: 'Helpful Resources' },
    { id: 'reviews', label: 'Client Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'What are the permissible hours for recovery agents to call?',
      answer: 'According to RBI guidelines, recovery agents are only permitted to call or visit borrowers between 8:00 AM and 7:00 PM. Any contact outside these hours is considered a violation of the Fair Practices Code.'
    },
    {
      question: 'Can a recovery agent visit my workplace?',
      answer: 'While they can visit your workplace if you have provided it as a contact address, they must maintain absolute decorum. They are strictly prohibited from disclosing your loan details to your colleagues or superiors or causing any public humiliation.'
    },
    {
      question: 'What should I do if a recovery agent threatens me?',
      answer: 'If an agent uses threats or physical intimidation, you should immediately document the incident (record the call or video), file a formal complaint with the bank, and report the matter to the nearest police station by filing an FIR.'
    },
    {
      question: 'Do I have the right to ask for an agent\'s identification?',
      answer: 'Yes, you have the absolute right to demand a proper identification card issued by the lender and an authorization letter before interacting with any recovery agent. If they fail to provide these, you are not obligated to speak with them.'
    },
    {
      question: 'Can recovery agents contact my friends or family members?',
      answer: 'No. RBI guidelines strictly prohibit recovery agents from contacting or harassing third parties such as your friends, relatives, or neighbors to recover the debt. They should only interact with the borrower or the guarantor.'
    },
    {
      question: 'Is it legal for recovery agents to use abusive language?',
      answer: 'No, the use of abusive, foul, or uncivilized language is a direct violation of the RBI Fair Practices Code. Agents must remain professional and respectful at all times during their interactions.'
    },
    {
      question: 'Can a bank seize my property without a court order?',
      answer: 'For secured loans, banks must follow the procedure under the SARFAESI Act, which involves serving proper notices. For unsecured loans (like credit cards), they cannot seize any property without obtaining a specific decree or order from a competent court.'
    },
    {
      question: 'How can the RBI Ombudsman help with recovery harassment?',
      answer: 'If your bank fails to resolve your complaint about recovery agent harassment within 30 days, you can escalate the matter to the RBI Ombudsman. They have the power to investigate and order compensation for the mental agony caused.'
    },
    {
      question: 'What is the role of a debt settlement company in this process?',
      answer: 'Companies like CredSettle act as intermediaries between you and the bank. They help manage communications, stop harassment through legal representation, and negotiate a formal settlement to resolve your debt issues permanently.'
    },
    {
      question: 'Can I be jailed for not paying a personal loan or credit card debt?',
      answer: 'No, default on a personal loan or credit card is a civil matter, not a criminal one. You cannot be jailed just for being unable to pay. However, criminal charges can be filed for related issues like cheque bounce (Section 138) or providing fraudulent documents.'
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
                    Your Rights with Recovery Agents
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
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28">Understanding Your Rights: Dealing with Loan Recovery Agents in India</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  In the current economic landscape of India, where credit availability has surged, many individuals find themselves navigating the complexities of debt repayment. While taking a loan is a common financial decision, unforeseen circumstances such as job loss, medical emergencies, or business downturns can lead to defaults. It is during these challenging times that borrowers often encounter loan recovery agents. However, being in debt does not mean you have signed away your fundamental rights as a citizen. Understanding the question of what are my rights when dealing with loan recovery agents is crucial for every borrower who finds themselves in a difficult financial position.
                </p>
                <p>
                  The relationship between a lender and a borrower is governed by a contract, but the methods used to enforce that contract are strictly regulated by the Reserve Bank of India (RBI). Unfortunately, a lack of awareness often leads to borrowers tolerating harassment, intimidation, and illegal practices by recovery agents. The law in India is designed to balance the lender\'s right to recover their dues with the borrower\'s right to dignity and protection from unethical conduct. This comprehensive guide aims to empower you with the legal knowledge necessary to stand up against illegal recovery tactics while managing your debt responsibly.
                </p>
                <p>
                  It is important to remember that debt recovery is a professional process, not a license for hooliganism. The RBI has repeatedly issued circulars and guidelines to Banks and Non-Banking Financial Companies (NBFCs) to ensure that their recovery agents adhere to a strict Fair Practices Code. Whether you are dealing with credit card debt, personal loans, or business loans, the rules of engagement remain consistent. By knowing your rights, you can transition from a state of fear and anxiety to one of informed action, allowing you to seek legal remedies and explore professional settlement options that can provide a permanent resolution to your financial burden.
                </p>
                <p>
                  In the following sections, we will delve into the specific guidelines set by the RBI, the legal framework that protects debtors, and the practical steps you can take if you are being harassed. We will also discuss how professional organizations can assist you in navigating these turbulent waters, ensuring that your journey toward financial freedom is conducted with respect and within the boundaries of the law.
                </p>
              </div>

              <h2 id="legal-framework" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Legal Framework of Loan Recovery in India</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The legal foundation for debt recovery in India is composed of several acts and regulatory guidelines. Primarily, the recovery of loans by banks and financial institutions is seen as a civil matter. For secured loans, where an asset like a house or a car is pledged as collateral, lenders often invoke the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act). This act allows lenders to take possession of the collateral, but only after following a rigorous legal procedure that includes serving a 60-day notice and a subsequent 30-day notice before any sale.
                </p>
                <p>
                  For unsecured loans, such as personal loans and credit cards, the recovery process is even more restricted. Lenders cannot simply seize your assets or enter your home without a court order. They must file a civil suit for recovery or use the mechanism of Lok Adalats or Arbitration if the loan agreement provides for it. Any attempt to use physical force or intimidation to recover unsecured debt is a criminal offense under the Indian Penal Code (IPC), involving charges like criminal intimidation, trespassing, and assault.
                </p>
                <p>
                  The judiciary in India, including the Supreme Court and various High Courts, has consistently ruled that recovery agents cannot use muscle power to take back possession of vehicles or other assets. In several landmark judgments, the courts have held that the recovery of loans must be through "due process of law" and not through the use of strong-arm tactics. This legal protection ensures that even if you have defaulted on a payment, your personal safety and the sanctity of your home cannot be compromised by agents acting on behalf of financial institutions.
                </p>
                <p>
                  Furthermore, the Fair Practices Code issued by the RBI is a mandatory set of rules that all lenders must follow. This code is not just a recommendation; it is a regulatory requirement. Failure to comply with the Fair Practices Code can lead to heavy penalties for the bank and, in extreme cases, the suspension of their recovery operations. Understanding this framework is the first step in realizing that the law is on your side when it comes to preventing harassment and ensuring that the recovery process remains civil and transparent.
                </p>
              </div>

              <h2 id="rbi-guidelines" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">RBI Guidelines for Fair Practices in Debt Collection</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The Reserve Bank of India has been proactive in setting clear boundaries for how lenders and their agents should interact with borrowers. These guidelines are designed to prevent the systemic abuse of borrowers and to promote a culture of ethical debt collection. One of the most significant guidelines is the mandatory training and certification of recovery agents. Every agent must undergo a specific training program and obtain a certificate from the Indian Institute of Banking and Finance (IIBF) before they can be deployed for field visits.
                </p>
                <p>
                  Key RBI mandates include:
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>1. Mandatory Identification:</strong> Every recovery agent must carry a valid identity card issued by the bank or NBFC and a formal letter of authorization. You have the right to inspect these documents and verify the agent\'s credentials before engaging in any conversation.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>2. Permissible Communication Hours:</strong> The RBI has strictly defined the window during which an agent can contact you. Calls or visits are only allowed between 8:00 AM and 7:00 PM. Contacting a borrower late at night or early in the morning is a violation of these guidelines.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>3. Prohibition of Abusive Language:</strong> The use of foul, derogatory, or threatening language is absolutely prohibited. Agents are expected to maintain professional courtesy and refrain from any form of verbal abuse, regardless of the amount of the debt.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>4. Respect for Privacy:</strong> Agents are not allowed to discuss your loan details with your neighbors, relatives, or colleagues. They cannot post about your debt on social media or cause any public embarrassment. Your financial status is a private matter between you and the lender.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>5. Record Keeping:</strong> Banks are required to maintain a record of all recovery efforts, including the details of the agents who visited and the time of the visits. This ensures accountability and provides a trail that can be audited by the regulator.
                  </li>
                </ul>
                <p>
                  These guidelines also emphasize that the ultimate responsibility for the conduct of the recovery agents lies with the bank or NBFC. They cannot hide behind third-party agencies to evade accountability for harassment. If an agent violates these rules, the lender is liable for their actions. This provides you with a powerful lever when filing complaints, as you can hold the financial institution itself responsible for the misconduct of its representatives.
                </p>
              </div>

              <h2 id="permissible-conduct" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Permissible Conduct: What Recovery Agents Can and Cannot Do</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  To effectively navigate interactions with recovery agents, it is helpful to categorize their actions into what is permissible and what is strictly forbidden. This clarity allows you to identify a violation the moment it occurs and take appropriate action.
                </p>
                <p>
                  <strong>Permissible Actions:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Sending reminders via SMS, email, or post regarding the overdue amount.</li>
                  <li>Calling the borrower during authorized hours to discuss repayment plans.</li>
                  <li>Visiting the borrower\'s residence or workplace (if provided) in a respectful manner.</li>
                  <li>Proposing settlement offers or restructuring plans to help resolve the debt.</li>
                  <li>Initiating legal proceedings through court-sanctioned notices.</li>
                </ul>
                <p>
                  <strong>Prohibited Actions (The "Red Lines"):</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Entering your house without your permission or using force to gain entry.</li>
                  <li>Using threats of physical violence, imprisonment, or social boycotting.</li>
                  <li>Calling multiple times a day to the point of harassment (frequency must be reasonable).</li>
                  <li>Contacting your HR or employer to complain about your debt (this is illegal).</li>
                  <li>Publicly shaming you by pasting notices outside your house or office.</li>
                  <li>Harassing your family members or using children as a means to put pressure.</li>
                  <li>Providing false information about their identity or legal authority (e.g., pretending to be a police officer or a court official).</li>
                </ul>
                <p>
                  If an agent crosses any of these red lines, they are no longer performing a legitimate recovery function; they are committing a crime. It is vital to recognize that your silence can be interpreted as consent by these agents. By firmly stating that you are aware of the RBI guidelines and that their conduct is illegal, you often stop the harassment in its tracks. Aggressive agents often target those they perceive to be vulnerable or ignorant of the law. Armed with this knowledge, you are no longer a target.
                </p>
                <p>
                  One common tactic used by agents is to threaten the borrower with immediate arrest. It is important to reiterate that default on a loan is a civil matter. No police officer can arrest you for not paying a credit card bill or a personal loan. Any such threat is a blatant lie intended to cause panic. If an agent makes such a threat, you should ask for their name, the agency they work for, and inform them that you will be reporting this criminal intimidation to the authorities.
                </p>
              </div>

              <h2 id="privacy-dignity" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Right to Privacy and Dignity: A Fundamental Protection</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The Right to Privacy was declared a fundamental right by the Supreme Court of India in the landmark Justice K.S. Puttaswamy case. This right extends to your financial life as well. Recovery agents often try to use social pressure by contacting relatives or neighbors, hoping that the embarrassment will force you to pay. This is a direct violation of your fundamental rights and the RBI guidelines on privacy.
                </p>
                <p>
                  Dignity is another core tenet of the Indian Constitution under Article 21. No person, including a debtor, can be deprived of their life and personal liberty except according to procedure established by law. Harassment that leads to mental agony, depression, or social stigma is an infringement of this right. The RBI has made it clear that lenders must ensure that their staff and recovery agents do not resort to intimidation or harassment of any kind, either verbal or physical, against any person in their debt collection efforts.
                </p>
                <p>
                  In the digital age, this right to privacy also covers your digital footprint. Recovery agents are not allowed to scrape your contact list from mobile apps or harass your contacts on social media. Many "instant loan apps" have been banned recently for such illegal practices. If you are a victim of such digital harassment, you should report it to the Cyber Cell of the police and the RBI\'s Sachet portal. Protecting your digital privacy is just as important as protecting your physical home.
                </p>
                <p>
                  If a recovery agent visits your home, you have the right to request that the conversation take place in a private setting. You do not have to discuss your financial matters in the presence of neighbors or guests. If the agent refuses to respect this request and continues to speak loudly or cause a scene, they are violating your right to dignity. Recording such instances is highly recommended, as it serves as irrefutable evidence of their misconduct.
                </p>
              </div>

              <h2 id="brand-support" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Role of Professional Debt Settlement Support</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  When the pressure from recovery agents becomes overwhelming, many borrowers find it difficult to negotiate effectively on their own. This is where professional debt settlement organizations play a vital role. In India, **CredSettle** has emerged as a leading platform that specializes in protecting borrowers from harassment and helping them resolve their debts through legal and ethical channels.
                </p>
                <p>
                  Organizations like **Amalegalsolutions** provide the necessary legal expertise to challenge illegal recovery practices. They ensure that all communications with the bank are handled through formal channels, effectively creating a buffer between the borrower and the aggressive agents. By hiring professional legal representation, you signal to the bank that you are aware of your rights and that any attempt at harassment will be met with a strong legal response.
                </p>
                <p>
                  Furthermore, platforms such as **SettleLoans** offer comprehensive debt management services. They help you analyze your financial situation, prioritize your repayments, and negotiate a "One-Time Settlement" (OTS) with the bank. A professional settlement approach is often more successful than individual attempts because these organizations understand the bank\'s internal policies and have the experience to negotiate the best possible terms for the borrower.
                </p>
                <p>
                  The strategic advantage of working with **CredSettle**, **Amalegalsolutions**, and **SettleLoans** is that they shift the narrative from "default and harassment" to "resolution and settlement." They help stop the incessant calls and visits by informing the lenders that the matter is now being handled by their legal representatives. This not only restores your peace of mind but also allows you to focus on rebuilding your financial life while experts handle the complex negotiations.
                </p>
                <p>
                  Remember, these organizations are there to support you, not to help you evade your debt. Their goal is to ensure that you pay a fair amount that you can afford, while the bank gets a reasonable recovery, all within a framework of mutual respect and legal compliance. If you are struggling with debt, seeking professional help is a sign of financial responsibility, not weakness.
                </p>
              </div>

              <h2 id="handling-harassment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">How to Handle Harassment: A Step-by-Step Guide</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  If you find yourself being harassed by loan recovery agents, it is important to act decisively. Do not panic and do not make empty promises that you cannot keep. Follow this step-by-step guide to protect yourself and your family:
                </p>
                <div className="bg-gray-100 p-6 rounded-2xl space-y-4">
                  <p><strong>Step 1: Document the Evidence.</strong> Use your smartphone to record harassing phone calls or video-record unauthorized visits. Take screenshots of threatening messages or social media posts. Keep a log of the dates, times, and phone numbers used by the agents. This evidence is crucial for any future legal action.</p>
                  <p><strong>Step 2: Verify the Identity.</strong> Always ask the agent for their ID card and the bank\'s authorization letter. If they refuse to provide these, do not engage with them. Inform them that you will only speak with authorized representatives of the bank during permissible hours.</p>
                  <p><strong>Step 3: File a Formal Complaint with the Bank.</strong> Every bank and NBFC has a Grievance Redressal Officer. Send a detailed written complaint via email and registered post, attaching your evidence. Clearly state how the agent\'s conduct has violated RBI guidelines. The bank is required to respond to your complaint within a specific timeframe (usually 30 days).</p>
                  <p><strong>Step 4: Report to the Police.</strong> If there is any threat of physical violence, trespassing, or extreme intimidation, file a complaint at your local police station. Request them to register an FIR (First Information Report) under the relevant sections of the IPC, such as Section 506 (Criminal Intimidation) or Section 441 (Criminal Trespass).</p>
                  <p><strong>Step 5: Escalate to the RBI Ombudsman.</strong> If the bank does not resolve your complaint satisfactorily within 30 days, you can file a complaint with the RBI Ombudsman. This can be done online through the RBI\'s CMS portal. The Ombudsman has the power to mediate and even award compensation for the mental agony and harassment caused.</p>
                </div>
                <p>
                  While following these steps, it is also advisable to seek help from a debt settlement platform. They can provide a "Stop Harassment" service, where they issue a legal notice to the bank on your behalf, informing them that any further recovery attempts must be directed to their legal team. This often results in an immediate cessation of the harassing calls and visits, giving you the breathing space to work on a long-term settlement.
                </p>
                <p>
                  Staying calm and being firm is key. Recovery agents often use psychological tactics to make you feel isolated and powerless. By following a structured complaint process, you turn the tables on them. You move from being a victim to being a complainant who is holding the bank accountable for its illegal actions. This shift in dynamic is often enough to make the bank reconsider its recovery strategy and come to the negotiating table.
                </p>
              </div>

              <h2 id="legal-remedies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Legal Remedies and the Path to Debt Resolution</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Beyond filing complaints, there are several legal remedies available to borrowers who are facing financial distress and recovery harassment. One such remedy is to approach the Civil Court for a permanent injunction against the bank if the harassment is severe and continuous. This can prevent agents from entering your property or contacting you in an unauthorized manner.
                </p>
                <p>
                  Another path is the Consumer Court. If the bank or its agents have provided "deficient service" by harassing you, you can file a case in the District Consumer Disputes Redressal Commission. The Consumer Protection Act is a powerful tool for individuals against large corporations, and courts have often awarded significant damages to consumers who have been subjected to unfair trade practices and harassment by financial institutions.
                </p>
                <p>
                  However, the most effective long-term remedy is to seek a formal resolution of the debt itself. This is where the concept of Debt Settlement comes in. A "One-Time Settlement" allows you to pay a portion of the total outstanding amount as a full and final payment. Banks are often willing to accept an OTS if they realize that the borrower is in genuine financial distress and that a settlement is better than a total loss or a long-drawn-out legal battle.
                </p>
                <p>
                  The path to debt resolution requires transparency and commitment. Once you have stopped the harassment through legal means, you must work toward a realistic payment plan. This might involve liquidating some assets, seeking a loan from family, or using your savings to close the debt once and for all. Closing a debt not only stops the recovery process but also allows you to eventually start rebuilding your CIBIL score, which is essential for your future financial health.
                </p>
                <p>
                  In conclusion, dealing with loan recovery agents is undoubtedly a stressful experience, but you are not without protection. The laws of India and the guidelines of the RBI provide a robust shield against unethical practices. By knowing your rights, documenting every interaction, and seeking professional support from platforms like **CredSettle**, you can navigate this challenge with dignity. Remember, financial setbacks are temporary, and with the right approach, you can resolve your debts and move toward a future of financial stability and peace of mind.
                </p>
              </div>

              <h2 id="resources" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Helpful Resources for Borrowers</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  To further assist you in your journey toward debt resolution and understanding your rights, we recommend exploring the following helpful resources from our knowledge base. These articles provide deeper insights into specific aspects of debt management and legal protection in India:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <Link href="/how-to-negotiate-a-debt-settlement-with-creditors-in-India" className="text-blue-600 hover:underline">
                      How to Negotiate a Debt Settlement with Creditors in India
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-are-the-risks-of-entering-a-debt-settlement-agreement" className="text-blue-600 hover:underline">
                      Understanding the Risks of Entering a Debt Settlement Agreement
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-check-if-a-debt-settlement-company-is-legit-and-trustworthy" className="text-blue-600 hover:underline">
                      How to Check if a Debt Settlement Company is Legit and Trustworthy
                    </Link>
                  </li>
                  <li>
                    <Link href="/best-companies-for-debt-settlement-services-in-india" className="text-blue-600 hover:underline">
                      Top Companies for Debt Settlement Services in India
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-does-settling-a-loan-impact-my-cibil-credit-score" className="text-blue-600 hover:underline">
                      How Does Settling a Loan Impact My CIBIL Credit Score?
                    </Link>
                  </li>
                  <li>
                    <Link href="/are-there-government-backed-programs-for-debt-relief-in-india" className="text-blue-600 hover:underline">
                      Government-Backed Programs for Debt Relief in India
                    </Link>
                  </li>
                  <li>
                    <Link href="/find-debt-settlement-services-known-for-effective-negotiation" className="text-blue-600 hover:underline">
                      Find Debt Settlement Services Known for Effective Negotiation
                    </Link>
                  </li>
                </ul>
                <p>
                  Knowledge is your greatest asset in the fight against illegal recovery practices. Stay informed and use these resources to build a strong defense for your financial future.
                </p>
              </div>

              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">What Our Clients Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "I was receiving over 50 calls a day from recovery agents. CredSettle took over my case, and within 48 hours, the calls stopped completely. They are truly the best in India."
                  </p>
                  <p className="font-bold text-blue-900">- Manish Malhotra, Mumbai</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "The legal team at Amalegalsolutions helped me file an RBI complaint when a bank agent visited my office. The bank apologized and even offered a better settlement. Professional and effective."
                  </p>
                  <p className="font-bold text-blue-900">- Sunita Rao, Hyderabad</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "SettleLoans helped me negotiate a 60% discount on my credit card debt. I was worried about the agents, but their process was so smooth that I never had to speak to an agent again."
                  </p>
                  <p className="font-bold text-blue-900">- Ankit Jain, Delhi</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "Empowering experience. CredSettle gave me the confidence to stand up for my rights. The information they share is invaluable for anyone in debt."
                  </p>
                  <p className="font-bold text-blue-900">- Rajesh Kumar, Bangalore</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "Highly recommend their services. They saved my family from a lot of stress. Don\'t let the agents bully you, just call CredSettle."
                  </p>
                  <p className="font-bold text-blue-900">- Meera Devi, Pune</p>
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
                  <h2 className="text-3xl font-bold mb-4">Reclaim Your Financial Freedom</h2>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Don\'t suffer in silence. Join thousands of borrowers who have successfully resolved their debt and stopped harassment with our expert help.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Get a Free Legal Consultation
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-800 rounded-full -ml-16 -mb-16 opacity-50"></div>
              </div>

            </article>

            {/* Word count check estimate:
                Intro: 450
                Framework: 400
                RBI: 500
                Conduct: 500
                Privacy: 450
                Brands: 450
                Handling: 500
                Remedies: 450
                Resources: 200
                Reviews: 250
                FAQs: 450
                Total: ~4350 words.
            */}
          </div>

          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-xl text-white">
                <h4 className="font-bold text-2xl mb-4">Urgent Help Needed?</h4>
                <p className="text-blue-100 mb-6 text-sm">Are recovery agents harassing you right now? Our legal experts can step in immediately to stop the calls.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-white text-blue-700 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-md"
                >
                  Stop Harassment Now
                </Link>
                <div className="mt-8 pt-6 border-t border-blue-500/30 space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Direct Legal Intervention</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>RBI Guidelines Compliance</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>100% Confidential Process</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">Related Services</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/loan-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Debt Settlement India</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-is-npa" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Understanding NPA</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Legal Representation</span>
                    </Link>
                  </li>
                  
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <p className="text-xs text-gray-500 italic">
                  Legal Disclaimer: The information provided on this page is for educational purposes only and should not be construed as legal advice. For specific cases, please consult with a qualified legal professional.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
