'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function LOCClient() {
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
    { id: 'what-is-loc', label: 'What is LOC?' },
    { id: 'delhi-hc-ruling', label: 'Delhi HC Ruling' },
    { id: 'mere-default', label: 'Mere Default vs. Crime' },
    { id: 'national-interest', label: 'National Interest' },
    { id: 'right-to-travel', label: 'Right to Travel' },
    { id: 'legal-remedies', label: 'Legal Remedies' },
    { id: 'challenging-loc', label: 'Challenging LOC' },
    { id: 'psb-powers', label: 'Bank Powers' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'Can a bank issue a Look Out Circular (LOC) for a personal loan default?',
      answer: 'According to the landmark Delhi High Court ruling, banks cannot request the issuance of an LOC for mere default in loan repayment. LOCs are intended for individuals who are accused of cognitive offences or whose departure would be detrimental to the national interest or economic sovereignty of India.'
    },
    {
      question: 'What did the Delhi High Court say about the "economic interest of India" in LOC cases?',
      answer: 'The court clarified that the "economic interest of India" cannot be interpreted so broadly as to include simple defaults by individuals on bank loans. It must involve larger-scale financial frauds or actions that could destabilize the national economy.'
    },
    {
      question: 'Is being a "wilful defaulter" enough for an LOC?',
      answer: 'While banks often try to link wilful default to LOC requests, the Delhi High Court emphasized that unless there is a criminal element or a specific threat to the country, a travel ban via an LOC is an overreach of power.'
    },
    {
      question: 'What is the procedure to quash an LOC?',
      answer: 'To quash an LOC, one must file a writ petition in the High Court under Article 226 of the Constitution. The court will examine if the legal requirements for issuing an LOC were met and if the fundamental right to travel is being violated without due process.'
    },
    {
      question: 'Can Public Sector Banks directly issue Look Out Circulars?',
      answer: 'Public Sector Banks (PSBs) can request the Ministry of Home Affairs (MHA) or designated authorities to issue an LOC. However, they must provide sufficient justification that the individual\'s departure would harm the national interest.'
    },
    {
      question: 'Does an LOC expire automatically?',
      answer: 'Generally, an LOC is valid for one year unless a request is made by the originating agency to renew it. However, in many cases, they are kept active through periodic renewals, requiring legal intervention to remove them.'
    },
    {
      question: 'What happens if I am stopped at the airport due to an LOC?',
      answer: 'If stopped, you will be prevented from boarding your flight. You should immediately ask for the details of the agency that issued the LOC and contact a legal expert to challenge the restriction in court.'
    },
    {
      question: 'Can I travel abroad if I have a pending loan case but no LOC?',
      answer: 'Yes, unless a court specifically restricts your travel or an LOC has been issued, you have the right to travel abroad. Simple litigation or debt recovery proceedings do not automatically bar international travel.'
    },
    {
      question: 'What are the MHA guidelines for Look Out Circulars?',
      answer: 'The Ministry of Home Affairs has specific guidelines that allow agencies to request LOCs in cases of cognizable offences or where the individual\'s exit is against the "economic interest" or "national interest." These guidelines are frequently scrutinized by courts for potential misuse.'
    },
    {
      question: 'Is the right to travel abroad a fundamental right in India?',
      answer: 'Yes, the Supreme Court of India, in the Maneka Gandhi case, established that the right to travel abroad is part of the right to personal liberty under Article 21 of the Constitution.'
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
                    Delhi High Court LOC Ruling
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
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28">The Landmark Delhi High Court Ruling: Why Mere Bank Loan Default Cannot Trigger an LOC</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  In a decision that resonates through the corridors of financial institutions and legal chambers alike, the Delhi High Court has recently delivered a powerful judgment regarding the issuance of Look Out Circulars (LOCs). This ruling clarifies a critical boundary between civil debt recovery and the state's power to restrict personal liberty. For years, borrowers facing financial distress have lived under the looming threat of being stopped at international borders due to bank loan defaults. The court has now made it clear: <strong>a mere bank loan default is not sufficient grounds for issuing an LOC.</strong>
                </p>
                <p>
                  The essence of this judgment lies in the protection of fundamental rights guaranteed by the Constitution of India. Specifically, the right to travel abroad, which has been recognized as an integral part of the right to personal liberty under Article 21. By curbing the arbitrary use of LOCs by Public Sector Banks, the Delhi High Court has provided a significant shield for citizens who may be struggling with legitimate business failures or financial setbacks. This article delves deep into the nuances of this ruling, exploring its implications for borrowers, banks, and the broader legal landscape in India.
                </p>
                <p>
                  Understanding the context is crucial. A Look Out Circular is a potent administrative tool used by authorities to monitor and restrict the movement of individuals who are wanted in connection with criminal investigations or who pose a threat to the nation. However, the recent trend saw banks requesting LOCs against "wilful defaulters" as a means of coercive recovery. The High Court has scrutinized this practice, asking whether a financial debt, no matter how large, can automatically be equated to a crime against the state.
                </p>
                <p>
                  This ruling is not just a legal victory but a moral one, affirming that the state cannot treat its citizens as criminals simply because they owe money to a bank. In a globalized world where international travel is often essential for business, education, and personal reasons, the removal of such arbitrary restrictions is a welcome step toward a more balanced and just legal system.
                </p>
              </div>

              <h2 id="what-is-loc" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Decoding the Look Out Circular (LOC): Purpose and Misuse</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  To appreciate the significance of the court's ruling, one must first understand what a Look Out Circular actually is. An LOC is a notice used by authorities to check if a person traveling internationally is wanted by any law enforcement agency. It is primarily used at immigration checkpoints to identify and stop individuals who might be trying to flee the country to avoid prosecution.
                </p>
                <p>
                  Historically, LOCs were reserved for terrorists, smugglers, and individuals involved in heinous crimes. However, the guidelines issued by the Ministry of Home Affairs (MHA) were expanded over time to include broader categories. One such category was the "economic interest of India." This phrase became the loophole through which Public Sector Banks began requesting LOCs for large loan defaults, arguing that the loss of public money was a threat to the nation's economic stability.
                </p>
                <p>
                  The problem arose when this power was used indiscriminately. Individuals with pending civil litigations, or those who were in the process of negotiating debt settlements, found themselves blacklisted at airports without any prior notice. This "silent" nature of the LOC made it particularly devastating. People would only find out about the restriction when they were at the boarding gate, leading to immense personal embarrassment and financial loss.
                </p>
                <p>
                  The Delhi High Court observed that the power to issue an LOC is "extraordinary" and must be used with extreme caution. It cannot be reduced to a routine debt recovery tactic. The court highlighted that banks have other legal avenues for recovery, such as the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act and the Insolvency and Bankruptcy Code (IBC). Using a travel ban as a shortcut is both illegal and unconstitutional.
                </p>
              </div>

              <h2 id="delhi-hc-ruling" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Delhi High Court's Verdict: A Detailed Analysis</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The specific case that led to this landmark ruling involved several individuals who had been barred from traveling abroad due to requests from various Public Sector Banks. The petitioners argued that their defaults were a result of business failures and that they had no intention of fleeing the country. They contended that the LOCs were issued without any criminal case being registered against them.
                </p>
                <p>
                  The Delhi High Court, in its detailed judgment, agreed with the petitioners. The court laid down several key principles:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>Absence of Criminal Intent:</strong> For an LOC to be valid, there must be evidence of a cognizable offence. Mere non-payment of a loan is a civil matter and does not constitute a crime unless there is proof of fraud, forgery, or cheating.</li>
                  <li><strong>Right to Personal Liberty:</strong> The right to travel is a fundamental right. Any restriction on this right must be based on a law that is fair, just, and reasonable.</li>
                  <li><strong>Proportionality:</strong> The measure taken by the state (the LOC) must be proportional to the objective (recovering public money). Stopping a person from traveling for a civil debt is considered a disproportionate and excessive measure.</li>
                  <li><strong>Judicial Oversight:</strong> Banks cannot be the sole judges of whether an LOC is necessary. Their requests must be scrutinized by the issuing authorities against strict legal criteria.</li>
                </ul>
                <p>
                  The court's decision effectively quashed several LOCs, allowing the petitioners to travel abroad. This ruling sets a powerful precedent for thousands of other cases across the country. It sends a clear message to the banking sector that they must operate within the bounds of the law and respect the constitutional rights of their customers.
                </p>
              </div>

              <h2 id="mere-default" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Mere Default vs. Economic Crime: Where the Line is Drawn</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  One of the most important aspects of the ruling is the distinction between a "mere default" and an "economic crime." Banks often use the term "wilful defaulter" to paint a picture of criminal intent. However, the court clarified that being declared a wilful defaulter under RBI guidelines is a regulatory classification, not a criminal one.
                </p>
                <p>
                  An economic crime involves active deception, such as siphoning off funds, falsifying balance sheets, or creating shell companies to hide assets. In such cases, where an FIR (First Information Report) has been filed and a criminal investigation is underway, an LOC may be justified. But in cases where the borrower has simply failed to keep up with their EMI payments due to market conditions or genuine financial hardship, no criminal element exists.
                </p>
                <p>
                  The court noted that the "economic interest of India" refers to large-scale actions that could impact the entire banking system or the national currency. It does not include the default of a few crores by an individual or a small business. By narrowing the definition of this term, the court has prevented its misuse as a catch-all phrase for any financial dispute.
                </p>
                <p>
                  This distinction is vital for the health of the Indian economy. Business involves risk, and failure is a possibility. If every failed entrepreneur is treated as a potential fugitive, it would stifle innovation and risk-taking. The law must provide a path for honest failures to be resolved through civil means, without the threat of criminal-style restrictions on movement.
                </p>
              </div>

              <h2 id="national-interest" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Scope of "National Interest" in Travel Restrictions</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The concept of "National Interest" is often invoked by the state to justify various restrictions on citizens. In the context of LOCs, the MHA guidelines state that an LOC can be issued if the departure of the person would be "detrimental to the sovereignty or security or integrity of India" or "detrimental to the economic interests of India."
                </p>
                <p>
                  The Delhi High Court's ruling provides a much-needed check on the expansion of these terms. The court emphasized that these are "gravity-filled" words that carry significant weight. They cannot be invoked for the benefit of a specific bank to recover its private dues. National interest is about the welfare of the entire country, not the balance sheet of a single institution.
                </p>
                <p>
                  The judgment also highlighted that the state must provide specific reasons when invoking national interest. Vague assertions are not enough. There must be a clear link between the person's travel and a potential harm to the nation. In the absence of such a link, the restriction is arbitrary and illegal.
                </p>
                <p>
                  This part of the judgment reinforces the idea that the state's power is limited. Even when acting in the name of national interest, the government must follow the principles of natural justice and due process. The court's role as a guardian of these principles is essential in preventing the slide into administrative authoritarianism.
                </p>
              </div>

              <h2 id="right-to-travel" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Right to Travel Abroad: A Fundamental Constitutional Right</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The right to travel abroad has a long and storied history in Indian jurisprudence. In the landmark case of <em>Maneka Gandhi v. Union of India</em> (1978), the Supreme Court held that the right to go abroad is part of the "personal liberty" guaranteed under Article 21. This means that no person can be deprived of this right except according to a procedure established by law.
                </p>
                <p>
                  The Delhi High Court has built upon this foundation, noting that an LOC is a "coercive measure" that effectively takes away this fundamental right. Therefore, the procedure for issuing an LOC must be strictly followed. Any deviation from the guidelines or any use of the power for an unauthorized purpose (like debt recovery) makes the LOC void from the beginning.
                </p>
                <p>
                  The court also pointed out that the impact of a travel ban is not just on the individual's movement but also on their dignity and livelihood. For many people, international travel is necessary for their work. A ban can lead to job loss, business closure, and social stigma. These are heavy penalties that cannot be imposed without a trial and a conviction.
                </p>
                <p>
                  By upholding the right to travel, the court has reaffirmed the primacy of the individual over the administrative machinery of the state. It is a reminder that the Constitution exists to protect the citizen from the overreach of the powerful.
                </p>
              </div>

              <h2 id="legal-remedies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Legal Remedies for Borrowers: What to Do If You Face an LOC</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  If you are a borrower and find yourself restricted by an LOC, it is important to know that you have legal remedies. The first and most effective step is to approach the High Court by filing a writ petition. Here is a general guide on the steps involved:
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 shadow-sm">
                    <strong>1. Obtain Information:</strong> The first step is to find out which agency or bank requested the LOC. You can do this by asking the immigration authorities at the airport or by filing an RTI (Right to Information) request, although the latter can be slow.
                  </li>
                  <li className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 shadow-sm">
                    <strong>2. Consult a Legal Expert:</strong> You will need an advocate who specializes in constitutional law and banking litigation. They will help you draft a petition challenging the LOC on the grounds of illegality and violation of fundamental rights.
                  </li>
                  <li className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 shadow-sm">
                    <strong>3. File a Writ Petition:</strong> The petition is filed under Article 226 in the High Court. You can seek an urgent stay on the LOC or its complete quashing.
                  </li>
                  <li className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 shadow-sm">
                    <strong>4. Seek Interim Relief:</strong> If you have an urgent travel requirement (such as a medical emergency or a business commitment), you can request the court for a temporary suspension of the LOC, allowing you to travel for a specific period.
                  </li>
                </ul>
                <p>
                  It is important to act quickly. The longer an LOC remains active, the more damage it can do to your reputation and business. The recent Delhi High Court judgment has made it much easier for borrowers to get relief, as the court is now highly skeptical of LOCs based on mere financial defaults.
                </p>
              </div>

              <h2 id="challenging-loc" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">How to Successfully Challenge an LOC in Court</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Challenging an LOC requires a strategic approach. Your legal team must demonstrate that the issuance of the circular was arbitrary and lacked a solid legal basis. Some of the common arguments used in successful challenges include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Lack of FIR:</strong> If no criminal case has been registered, the primary condition for an LOC is often not met.</li>
                  <li><strong>No Flight Risk:</strong> Show that you have strong roots in India (property, family, business) and have always cooperated with the bank's recovery efforts.</li>
                  <li><strong>Cooperation with Investigation:</strong> If there is an investigation, provide proof that you have attended all summons and provided all necessary documents.</li>
                  <li><strong>Violation of MHA Guidelines:</strong> Argue that the bank failed to show how your travel would harm the national or economic interest of the country.</li>
                </ul>
                <p>
                  The court will also look at the bank's behavior. If the bank has already initiated recovery through other means (like SARFAESI or IBC), the court may view the LOC as an unnecessary and malicious additional burden.
                </p>
                <p>
                  At CredSettle, we understand the stress and complexity of these situations. We help borrowers navigate the legal system, connecting them with experts who can challenge illegal travel bans and work toward a fair settlement of their debts. Our goal is to ensure that your rights are protected while you find a sustainable way to resolve your financial liabilities.
                </p>
              </div>

              <h2 id="psb-powers" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Powers of Public Sector Banks: A Need for Regulation</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The ability of Public Sector Banks to request LOCs is a relatively recent development, introduced through an MHA office memorandum in 2018. While the intention was to prevent high-profile fraudsters from fleeing the country (like Vijay Mallya or Nirav Modi), the power has been widely misused against smaller borrowers.
                </p>
                <p>
                  The Delhi High Court's ruling highlights a significant imbalance in power. Unlike law enforcement agencies, banks are commercial entities with a vested interest in recovery. Giving them the power to restrict a person's liberty without judicial oversight is a recipe for abuse.
                </p>
                <p>
                  There is a growing call for more stringent regulation of how banks use this power. Some suggest that a bank's request for an LOC should first be approved by a magistrate or a specialized tribunal. Others argue that the power should be limited only to cases involving massive fraud above a certain threshold.
                </p>
                <p>
                  The current legal trend, led by the Delhi and Bombay High Courts, is to keep a tight leash on this power. By quashing LOCs in simple default cases, the judiciary is forcing banks to return to the proper legal channels for debt recovery. This is essential for maintaining the integrity of both the banking system and the legal process.
                </p>
              </div>

              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Client Success Stories & Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "I was stopped at the IGI airport for a 2-crore default. CredSettle legal partners filed a writ in the Delhi HC, and the LOC was quashed within a month. I am now back to my business travels."
                  </p>
                  <p className="font-bold text-blue-900">- Amit Khanna, Delhi</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "The expertise CredSettle brought to the table was life-changing. They explained that my wilful defaulter tag didn't mean I could be barred from seeing my daughter abroad. Forever grateful."
                  </p>
                  <p className="font-bold text-blue-900">- Priya Sharma, Mumbai</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "Very professional team. They helped me get an interim order to travel for my son's graduation while the main LOC case was pending. Highly recommended."
                  </p>
                  <p className="font-bold text-blue-900">- Vikram Singh, Gurgaon</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "I didn't even know there was an LOC against me until I was at the check-in counter. CredSettle helped me navigate this nightmare with clear legal advice."
                  </p>
                  <p className="font-bold text-blue-900">- Sanjay Gupta, Noida</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "Honest and result-oriented. They challenged the bank's claim of 'economic interest' successfully in court. Best legal consultation for travel bans."
                  </p>
                  <p className="font-bold text-blue-900">- Meera Iyer, Bangalore</p>
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
                  <h2 className="text-3xl font-bold mb-4">Facing an Unfair Travel Ban?</h2>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Don't let a loan default stop your life. Get expert legal guidance to challenge illegal Look Out Circulars and regain your freedom.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Get Free Legal Consultation
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
                <h4 className="font-bold text-2xl mb-4">Urgent Travel Help</h4>
                <p className="text-blue-100 mb-6 text-sm">Stopped at the airport or worried about a travel ban? Our experts can help you immediately.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-white text-blue-700 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-md"
                >
                  Consult Now
                </Link>
                <div className="mt-8 pt-6 border-t border-blue-500/30 space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Fast Writ Filing</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Expert Banking Lawyers</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Interim Travel Relief</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">Helpful Resources</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">How Loan Settlement Works</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/can-i-go-to-jail-for-loan-default-in-india" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Jail for Loan Default?</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/punishment-for-non-payment-of-personal-loan-in-india" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Legal Punishment Guide</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/rbi-rules-for-recovery-agents" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">RBI Recovery Rules</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-handle-recovery-agent-harrasment" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Stopping Harassment</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <p className="text-xs text-gray-500 italic">
                  Legal Disclaimer: The information provided on this page is for general awareness and does not constitute formal legal advice. Please consult a qualified advocate for your specific legal needs.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
