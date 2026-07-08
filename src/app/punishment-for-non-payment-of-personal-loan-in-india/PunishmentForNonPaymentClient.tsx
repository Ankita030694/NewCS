'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function PunishmentForNonPaymentClient() {
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
    { id: 'immediate-consequences', label: 'Immediate Consequences' },
    { id: 'impact-cibil', label: 'Impact on CIBIL' },
    { id: 'recovery-harassment', label: 'Recovery Harassment' },
    { id: 'legal-actions', label: 'Legal Actions by Banks' },
    { id: 'sec-138-notice', label: 'Sec 138 Notice' },
    { id: 'civil-suit', label: 'Civil Suit for Recovery' },
    { id: 'arbitration', label: 'Arbitration Proceedings' },
    { id: 'what-banks-cannot-do', label: 'What Banks Cannot Do' },
    { id: 'no-police-arrests', label: 'No Police Arrests' },
    { id: 'rbi-guidelines', label: 'RBI Guidelines' },
    { id: 'handle-defaults', label: 'How to Handle Defaults' },
    { id: 'loan-restructuring', label: 'Loan Restructuring' },
    { id: 'one-time-settlement', label: 'One-Time Settlement (OTS)' },
    { id: 'faqs', label: 'Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: 'Can I go to jail for not paying a personal loan in India?',
      answer: 'No, defaulting on a personal loan is considered a civil breach of contract, not a criminal offense. You cannot be arrested or sent to jail merely for being unable to repay a personal debt, unless fraud or a bounced cheque is involved. The fundamental law of the land protects honest citizens who fall on hard times from imprisonment for civil debt.'
    },
    {
      question: 'What happens if my ECS mandate or cheque bounces for EMI payment?',
      answer: 'If a cheque bounces, the bank can initiate a criminal case under Section 138 of the Negotiable Instruments Act. Similarly, an ECS mandate failure can attract penalties under Section 25 of the Payment and Settlement Systems Act, which can have criminal implications. You must respond to the legal notice within the stipulated fifteen days to avoid an arrest warrant.'
    },
    {
      question: 'Are recovery agents allowed to visit my office?',
      answer: 'Recovery agents must follow strict RBI guidelines. They cannot harass you at your workplace or disclose your debt to colleagues. They are only allowed to contact you at the place and time you have mutually agreed upon. Any violation of this rule can be reported to the banking ombudsman or the local police station as a case of criminal intimidation and public defamation.'
    },
    {
      question: 'How long does a personal loan default stay on my CIBIL report?',
      answer: 'A default or a settled status will reflect on your CIBIL report for several years, typically up to seven years. This severely impacts your credit score and makes it very difficult to obtain loans in the near future. Even after you close the account, the historical record of late payments will remain visible to potential lenders evaluating your creditworthiness.'
    },
    {
      question: 'Can the bank freeze my salary account for a loan default?',
      answer: 'Banks can exercise the right of set off, allowing them to deduct funds from your savings or salary account held within the same bank to recover outstanding dues, provided this clause was in your loan agreement. However, they cannot freeze accounts held with other banking institutions without a specific order from a competent court or tribunal.'
    },
    {
      question: 'Is a One Time Settlement (OTS) a good idea for personal loans?',
      answer: 'An OTS is an emergency measure for those in genuine financial distress. While it stops legal action and harassment, it results in a settled status on your credit report, which damages your creditworthiness significantly. It should only be utilized when you have completely exhausted all other avenues of repayment, such as loan restructuring or liquidating non essential assets.'
    },
    {
      question: 'What should I do if a recovery agent threatens me?',
      answer: 'You should immediately document the incident by recording calls or saving messages. You have the right to file a police complaint for criminal intimidation and lodge a grievance with the banking ombudsman against the bank. The law is firmly on your side when it comes to dealing with abusive debt collectors, and banking institutions face heavy penalties for the misconduct of their outsourced agencies.'
    }
  ];

  const reviews = [
    {
      name: "Suresh Kumar",
      location: "Chennai",
      rating: 5,
      text: "I was terrified of going to jail because I could not pay my personal loan due to a massive business loss. The constant calls made me severely depressed. After understanding the laws and consulting with experts, I realized I had rights. We sent a strong legal reply, and the harassment stopped entirely. We eventually settled the loan legally.",
      date: "June 2026"
    },
    {
      name: "Priya Singh",
      location: "Mumbai",
      rating: 5,
      text: "The bank agents started visiting my office and humiliating me in front of my manager. It was a nightmare. I learned about the RBI guidelines and immediately filed a formal complaint with the nodal officer. The bank apologized and withdrew the specific agency. I am now undergoing a structured loan restructuring process without the daily panic.",
      date: "April 2026"
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad",
      rating: 5,
      text: "I received a Section 138 notice for a bounced cheque on my personal loan EMI. I thought my life was over. The legal team helped me draft a proper response within the fifteen day limit, proving my financial hardship. The case did not escalate to court, and the bank agreed to a one time settlement of fifty percent of the outstanding amount.",
      date: "February 2026"
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
                    Punishment for Non Payment of Personal Loan in India
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
              <h2 className="text-xl font-bold text-blue-900 mb-3">According to recent RBI data, personal loan defaults in India have surged, leaving thousands facing aggressive recovery agents and legal notices daily.</h2>
              <p className="text-base text-gray-800 leading-relaxed mb-4">
                However, defaulting on a personal loan in India is a civil offense, not a criminal one, meaning you cannot go to jail simply for not having the money to pay. This critical distinction forms the foundation of your legal defense against the predatory intimidation tactics commonly deployed by unregulated recovery agencies across the country.
              </p>
              <p className="text-base text-gray-800 leading-relaxed mb-4">
                The massive explosion of unsecured lending in the post pandemic era has resulted in an unprecedented volume of defaults. Millions of middle class citizens, struggling with job losses, unexpected medical bills, and rampant inflation, find themselves trapped in a vicious cycle of debt. The psychological toll of receiving threatening calls at all hours of the day and night is often far more debilitating than the actual financial loss. 
              </p>
              <p className="text-base text-gray-800 leading-relaxed">
                When you default on a personal loan, the banking institution will unleash a multi tiered recovery strategy designed to extract maximum payment in the shortest possible time. They will bombard you with messages, send legal notices threatening severe action, and deploy field agents to your residence. Knowing your rights, understanding the exact legal framework, and formulating a professional response strategy is your only shield against this onslaught. We will explore every facet of the default process, demystifying the threats and providing you with actionable legal insights to reclaim your peace of mind and protect your future creditworthiness.
              </p>
            </section>

            <section>
              <h2 id="immediate-consequences" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Immediate Consequences of Missing Personal Loan EMIs</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  The machinery of debt collection activates the moment your scheduled Equated Monthly Installment (EMI) fails to clear. Banks employ sophisticated automated systems that instantly categorize your account based on the number of days past due. The initial phase is characterized by a high frequency of communication, blending polite reminders with subtle warnings about the escalating consequences of continued non payment.
                </p>
                <p>
                  Within the first thirty days, the bank will classify your account as Special Mention Account zero (SMA zero). You will incur late payment penalty fees, and your outstanding principal will begin to accumulate penal interest at exorbitant rates. This penal interest compounds rapidly, meaning that your debt will grow exponentially even if you stop borrowing entirely. The bank will send continuous SMS alerts, automated voice calls, and formal emails demanding immediate rectification of the shortfall.
                </p>

                <h3 id="impact-cibil" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Impact on Your CIBIL Score and Future Credit</h3>
                <p>
                  The most immediate and objectively measurable consequence of an EMI default is the severe damage inflicted upon your credit score. Banking institutions report repayment data to credit bureaus like TransUnion CIBIL, Experian, Equifax, and CRIF High Mark every single month. A missed payment is recorded as a negative entry, immediately pulling down your score by twenty to fifty points, depending on your overall credit history.
                </p>
                <p>
                  As the default extends from thirty days to sixty days, and then to ninety days, the damage becomes catastrophic. The account transitions from being merely delayed to being classified as a Non Performing Asset (NPA). An NPA classification on your credit report is a massive red flag that will deter any conventional lender from extending new credit to you. Mortgages, vehicle loans, and even small limit credit cards will be completely out of reach. This loss of creditworthiness can stall your financial progress for several years, forcing you to rely exclusively on cash transactions or highly predatory, unregulated lenders in times of emergency.
                </p>

                <h3 id="recovery-harassment" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Escalating Harassment by Bank Recovery Agents</h3>
                <p>
                  Once an account becomes seriously delinquent, banks frequently outsource the recovery process to third party collection agencies. These agencies operate on a commission basis, earning a percentage of whatever amount they manage to extract from the defaulting borrower. This incentive structure inevitably leads to aggressive, and often illegal, recovery tactics.
                </p>
                <p>
                  The harassment typically begins with incessant phone calls made from dozens of different unregistered numbers, making it impossible to block them effectively. These agents will use high pressure psychological tactics, shouting, using abusive language, and making false threats regarding imminent police action or arrest. They exploit the common citizen's lack of legal knowledge to induce panic.
                </p>
                <p>
                  If phone calls fail to produce the desired result, the agency will escalate to physical field visits. Agents may arrive at your residential address unannounced, demanding immediate payment. In extreme cases, they may contact your neighbors, your relatives, or your employer, aiming to publicly humiliate you into paying. This tactic of public shaming is explicitly prohibited by the Reserve Bank of India, yet it remains a distressingly common practice among rogue collection agencies. To combat this, you need to understand <Link href="/how-to-stop-recovery-agent-harassment" className="text-blue-600 font-bold hover:underline">how to stop recovery agent harassment</Link> and assert your legal rights immediately.
                </p>
                
                <div className="bg-red-50 p-8 rounded-2xl border border-red-200 my-10">
                  <h4 className="font-bold text-red-900 text-base mb-4">Red Flags List: Illegal Collection Practices</h4>
                  <ul className="list-disc pl-5 space-y-3 text-red-800">
                    <li>Calling you outside the legally permitted window of 8:00 AM to 7:00 PM.</li>
                    <li>Using profanity, abusive language, or shouting during telephone conversations.</li>
                    <li>Threatening physical violence against you or your family members.</li>
                    <li>Falsely claiming to be police officers or court officials.</li>
                    <li>Threatening to send the police to arrest you for an unsecured loan default.</li>
                    <li>Discussing your debt details with your employer, neighbors, or extended family.</li>
                    <li>Refusing to provide official identification or authorization letters when visiting your premises.</li>
                    <li>Demanding cash payments without providing immediate, official receipts from the bank.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 id="legal-actions" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Legal Actions Banks Can Take Under Indian Law</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  While you cannot be jailed simply for failing to repay a civil debt, banking institutions possess a powerful arsenal of legal mechanisms to enforce recovery. The specific legal route chosen by the bank depends heavily on the nature of the loan agreement, the outstanding amount, and the underlying instruments used to facilitate the EMI payments. It is crucial to differentiate between genuine legal proceedings and fake notices designed solely to intimidate.
                </p>

                <h3 id="sec-138-notice" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Notice Under Section 138 of NI Act (Cheque Bounce)</h3>
                <p>
                  If you provided post dated cheques (PDCs) to the bank as security for the personal loan, and one of these cheques is presented for payment and subsequently bounces due to insufficient funds, the situation escalates dramatically. The dishonoring of a cheque is a criminal offense under Section 138 of the Negotiable Instruments Act.
                </p>
                <p>
                  The bank will send you a formal legal notice within thirty days of the cheque bouncing, demanding the payment of the cheque amount within fifteen days. This fifteen day period is critical. If you fail to make the payment within this window, the bank has the legal right to file a criminal complaint against you in the magistrate court. If found guilty under Section 138, you can face imprisonment for a term which may extend to two years, or a fine which may extend to twice the amount of the cheque, or both. 
                </p>
                <p>
                  Similarly, if your EMI is deducted via the Electronic Clearing Service (ECS) or National Automated Clearing House (NACH) mandate, and the mandate fails due to insufficient funds, the bank can invoke Section 25 of the Payment and Settlement Systems Act. The penalties and procedures under this section are virtually identical to those under Section 138 of the NI Act, carrying severe criminal implications. Therefore, you must be extremely cautious about bouncing cheques or mandates. If you anticipate a default, it is sometimes strategically advisable to instruct your bank to stop payment, although this carries its own set of contractual breach implications.
                </p>
                <p>
                  When you receive such a notice, you must consult a legal professional immediately to understand <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-blue-600 font-bold hover:underline">what to do when the bank sends a legal notice</Link> and to draft an appropriate, legally sound reply. Ignoring it is the worst possible strategy, as it will inevitably lead to the issuance of bailable or non bailable warrants.
                </p>

                <h3 id="civil-suit" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Civil Suit for Recovery of Outstanding Dues</h3>
                <p>
                  If the loan was disbursed without cheques or mandates, or if the bank chooses not to pursue the criminal route, they can file a civil suit for the recovery of money under Order 37 of the Code of Civil Procedure (Summary Suit). A summary suit is an expedited legal process designed for the swift recovery of established debts, where the defendant has a limited opportunity to defend themselves unless they can prove a substantial defense.
                </p>
                <p>
                  Filing a civil suit is an expensive and time consuming endeavor for the bank, involving court fees and prolonged litigation. Consequently, banks generally reserve this option for high ticket personal loans where the outstanding balance justifies the legal expenditure. If the court rules in favor of the bank and issues a decree, the bank can execute the decree by attaching your movable or immovable properties, or by garnishing a portion of your salary directly from your employer, subject to the limitations prescribed in Section 60 of the CPC.
                </p>

                <h3 id="arbitration" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Arbitration Proceedings in Loan Agreements</h3>
                <p>
                  Modern personal loan agreements almost universally contain an arbitration clause. This clause stipulates that in the event of a dispute or default, the matter will be resolved through arbitration rather than in a traditional civil court. The bank appoints a sole arbitrator to adjudicate the matter.
                </p>
                <p>
                  Arbitration is generally faster than civil litigation. The bank will issue a notice invoking the arbitration clause and detailing the appointment of the arbitrator. You have the right to participate in the proceedings, present evidence, and dispute inflated interest charges or penalty fees. If you fail to participate, the arbitrator will likely pass an ex parte award in favor of the bank. Once an arbitration award is passed, it carries the same legal weight as a civil court decree and can be executed similarly. 
                </p>
                
                <div className="bg-gray-900 p-8 rounded-3xl text-white shadow-lg my-12">
                  <h4 className="font-bold text-yellow-400 text-base mb-6 border-b border-gray-700 pb-2">Legal Process Map: The Anatomy of Bank Action</h4>
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold mr-4">1</div>
                      <div>
                        <p className="font-bold text-lg mb-1">Day 1 to 90: Internal Collections Phase</p>
                        <p className="text-gray-300 text-sm">Automated reminders, telecalling, and field visits by bank staff or authorized agencies. The account transitions from SMA to NPA status.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold mr-4">2</div>
                      <div>
                        <p className="font-bold text-lg mb-1">Day 90 to 120: Legal Notice Issuance</p>
                        <p className="text-gray-300 text-sm">The bank issues formal demand notices, or Section 138 / Section 25 notices if a cheque or ECS mandate has bounced. A reply must be drafted immediately.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold mr-4">3</div>
                      <div>
                        <p className="font-bold text-lg mb-1">Day 120+: Initiation of Litigation or Arbitration</p>
                        <p className="text-gray-300 text-sm">The bank files a criminal complaint for a bounced cheque, initiates a summary civil suit, or invokes the arbitration clause to secure a legally enforceable decree or award.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold mr-4">4</div>
                      <div>
                        <p className="font-bold text-lg mb-1">Execution of Decree</p>
                        <p className="text-gray-300 text-sm">Following a favorable judgment or award, the bank applies for execution, leading to potential asset attachment or salary garnishment.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            <section>
              <h2 id="what-banks-cannot-do" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">What Banks Cannot Do (Your Rights as a Defaulter)</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  The power asymmetry between a massive financial institution and an individual borrower often leads to severe exploitation. However, the Indian legal system provides substantial safeguards to protect citizens from predatory debt collection practices. Knowing what the bank is legally prohibited from doing is the cornerstone of your defense strategy.
                </p>

                <h3 id="no-police-arrests" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">No Police Arrests for Civil Debt Defaults</h3>
                <p>
                  The most pervasive myth propagated by recovery agents is the threat of immediate police arrest. You must internalize this fact completely: defaulting on an unsecured personal loan is a civil matter. The police have absolutely no jurisdiction in civil disputes regarding loan recovery. A police officer cannot arrest you, detain you, or force you to sign a settlement agreement simply because you owe money to a bank.
                </p>
                <p>
                  If a recovery agent threatens to bring the police to your house, they are committing the crime of criminal intimidation. If an individual claiming to be a police officer arrives at your door demanding loan repayment, they are likely an imposter, which is a serious criminal offense. You should immediately demand their official identification and contact the local police station to verify their credentials. The only scenario where police involvement is legitimate is if the bank has filed a formal FIR alleging premeditated fraud or forgery during the loan application process, or if a court has issued an arrest warrant in a Section 138 cheque bounce case because you continually ignored court summons.
                </p>
                
                <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl my-10 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-blue-100 text-blue-800 font-bold px-4 py-1 rounded-bl-xl text-sm">Truth Bomb</div>
                  <h4 className="font-bold text-gray-900 text-base mb-4">Myth vs Fact: The Debt Collection Reality</h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-gray-100 pb-4">
                      <div>
                        <p className="font-bold text-red-600">The Myth</p>
                        <p className="text-gray-600 text-sm">"If you don't pay by 5 PM, we are sending the police van to arrest you and throw you in jail."</p>
                      </div>
                      <div>
                        <p className="font-bold text-green-600">The Legal Fact</p>
                        <p className="text-gray-800 text-sm">Police cannot arrest citizens for civil debt. Loan defaults are adjudicated in civil courts or arbitration tribunals, not police stations.</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-gray-100 pb-4">
                      <div>
                        <p className="font-bold text-red-600">The Myth</p>
                        <p className="text-gray-600 text-sm">"We will contact your HR department and get you fired from your job for being a defaulter."</p>
                      </div>
                      <div>
                        <p className="font-bold text-green-600">The Legal Fact</p>
                        <p className="text-gray-800 text-sm">Third party disclosure is strictly banned by the RBI. Attempting to ruin your employment constitutes criminal defamation and harassment.</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-bold text-red-600">The Myth</p>
                        <p className="text-gray-600 text-sm">"We have a warrant to seize all the furniture, electronics, and vehicles from your house today."</p>
                      </div>
                      <div>
                        <p className="font-bold text-green-600">The Legal Fact</p>
                        <p className="text-gray-800 text-sm">Banks cannot seize assets for an unsecured personal loan without first completing a lengthy civil trial and obtaining a formal execution decree from a judge.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 id="rbi-guidelines" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">RBI Guidelines on Fair Collection Practices</h3>
                <p>
                  The Reserve Bank of India has issued stringent guidelines detailing the Fair Practices Code that all banks and Non Banking Financial Companies (NBFCs) must follow. These guidelines are designed to ensure that borrowers are treated with dignity and respect, regardless of their financial delinquency.
                </p>
                <p>
                  According to these mandates, banks must rely on written communication and legal processes for recovery, rather than resorting to muscle power or psychological terror. Recovery agents must carry proper authorization letters and identity cards issued by the bank. They are strictly prohibited from engaging in any action that could publicly embarrass the borrower. They cannot call the borrower at odd hours, use threatening language, or send false legal notices that mimic court documents.
                </p>
                <p>
                  If a bank or its outsourced agency violates these guidelines, the borrower has the right to escalate the matter. You can file a formal complaint with the bank's internal grievance redressal mechanism. If the bank fails to resolve the issue within thirty days, you can approach the Banking Ombudsman, a quasi judicial authority appointed by the RBI to address customer complaints. The Ombudsman has the power to heavily penalize banks for employing abusive recovery practices and can mandate compensation for the mental agony suffered by the borrower.
                </p>
              </div>
            </section>

            <section>
              <h2 id="handle-defaults" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">How to Handle Personal Loan Defaults Professionally</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Panicking, avoiding phone calls, and changing your address are counterproductive strategies that only exacerbate the problem and accelerate legal action. To resolve a default, you must confront the situation directly, armed with documentation and a clear negotiation strategy. 
                </p>
                <p>
                  The first step is to comprehensively assess your financial reality. Calculate your total outstanding debt across all credit facilities, determine your bare minimum living expenses, and identify exactly how much surplus cash, if any, you can generate each month. You cannot negotiate effectively if you do not know your own financial boundaries. Once you have this clarity, you can explore two primary avenues of resolution.
                </p>

                <h3 id="loan-restructuring" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Opting for a Legitimate Loan Restructuring</h3>
                <p>
                  If your financial hardship is temporary, such as a short term medical emergency or a brief period of unemployment, loan restructuring is the optimal solution. Restructuring involves renegotiating the terms of the original loan agreement to make the EMIs affordable. 
                </p>
                <p>
                  You must proactively approach the bank with a formal hardship letter, detailing the reasons for your financial distress and providing supporting evidence like medical bills or termination letters. Request the bank to extend the loan tenure, which will proportionally reduce your monthly EMI burden. Alternatively, you can request a temporary moratorium period where you are excused from making principal payments for a few months while you stabilize your income.
                </p>
                <p>
                  Banks are often willing to accommodate restructuring requests for borrowers with a previously flawless repayment history, as it keeps the account performing and avoids the necessity of provisioning for bad debt. A restructured loan will still impact your CIBIL score negatively, as it deviates from the original repayment schedule, but it is far less damaging than a total default or a settlement.
                </p>

                <h3 id="one-time-settlement" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Going for a One-Time Settlement (OTS)</h3>
                <p>
                  If your financial crisis is severe and long term, and you have absolutely no capacity to repay the full outstanding amount, a One Time Settlement (OTS) may be your only viable exit strategy. In an OTS, you negotiate with the bank to accept a lump sum payment that is significantly lower than the actual total dues, and the bank writes off the remaining balance. Understanding <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="text-blue-600 font-bold hover:underline">what loan settlement is and how it works</Link> is essential before embarking on this path.
                </p>
                <p>
                  Settlement negotiations require extreme patience and emotional fortitude. You must bypass the aggressive low level collection agents and communicate directly with the bank's senior nodal officers or specialized settlement departments. The negotiation process can stretch over several months. The bank will initially demand the full amount, then slowly reduce their demand as they realize that extracting the full sum is impossible.
                </p>
                <p>
                  You must secure the final settlement agreement in writing, explicitly stating that the lump sum payment constitutes a "full and final settlement" of the account, and that no further legal action will be pursued. Never make a settlement payment based on a verbal promise. Be fully aware that while an OTS provides immediate financial relief and halts all legal proceedings, it will brand your credit report with a "Settled" status, severely crippling your ability to borrow money for the next five to seven years. It is the financial equivalent of a severe surgical procedure; it saves your life but leaves a permanent scar.
                </p>
              </div>
            </section>

            <section>
              <h2 id="faqs" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-10 mb-20">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-12 rounded-3xl border border-gray-100 hover:scale-[1.01] transition-transform">
                    <h3 className="font-bold text-base text-gray-900 mb-6 leading-snug border-l-4 border-blue-600 pl-6">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed text-base">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

          </article>

          <aside className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <img src="/anujbhiya.png" alt="Anuj Bhiya Legal Expert" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-50" />
                <h4 className="font-bold text-gray-900">Anuj Bhiya</h4>
                <p className="text-sm text-gray-500 mb-4">Senior Legal Advocate & Financial Strategist</p>
                <p className="text-xs text-gray-400">Expert in dealing with banking regulations, recovery agent harassment, and complex debt restructuring matters.</p>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
