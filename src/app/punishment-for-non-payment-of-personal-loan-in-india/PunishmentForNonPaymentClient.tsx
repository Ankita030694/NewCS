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
      answer: 'No. Defaulting on a own loan is considered a civil breach of contract. Not a crime. You cannot be arrested or sent to jail merely for being unable to repay a own debt. unless fraud or a bounced cheque is involved. The fundamental law of the land protects honest citizens who fall on hard times from imprisonment for civil debt.'
    },
    {
      question: 'What happens if my ECS mandate or cheque bounces for EMI payment?',
      answer: 'If a cheque bounces. The bank can initiate a penal case under Section 138 of the Negotiable Instruments Act. Similarly. An ECS mandate failure can attract fines under Section 25 of the Payment and closure Systems Act. which can have penal implications. You must respond to the legal notice within the stipulated fifteen days to avoid an arrest warrant.'
    },
    {
      question: 'Are recovery agents allowed to visit my office?',
      answer: 'agents must follow strict RBI guidelines. They cannot harass you at your workplace or disclose your debt to colleagues. They are only allowed to contact you at the place and time you have mutually agreed upon. Any violation of this rule can be reported to the banking RBI officer or the local police station as a case of penal threaten and public slander.'
    },
    {
      question: 'How long does a personal loan default stay on my CIBIL report?',
      answer: 'A default or a settled status will reflect on your CIBIL report for several years. Typically up to seven years. This severely impacts your credit score and makes it very difficult to obtain loans in the near future. Even after you close the account. The historical record of late payments will remain visible to potential lenders evaluating your creditworthiness.'
    },
    {
      question: 'Can the bank freeze my salary account for a loan default?',
      answer: 'Banks can exercise the right of set off. Allowing them to deduct funds from your savings or salary account held within the same bank to recover unpaid dues. Provided this clause was in your loan pacts. Yet. They cannot freeze accounts held with other banking institutions without a exact order from a competent court or court.'
    },
    {
      question: 'Is a One Time Settlement (OTS) a good idea for personal loans?',
      answer: 'An OTS is an emergency measure for those in genuine money distress. While it stops legal action and threats. It results in a settled status on your credit report. which damages your creditworthiness significantly. It should only be utilized when you have fully exhausted all other avenues of payment. Such as loan restructuring or liquidating non essential assets.'
    },
    {
      question: 'What should I do if a recovery agent threatens me?',
      answer: 'You should fast papers the incident by recording calls or saving messages. You have the right to file a police complaint for penal threaten and lodge a grievance with the banking RBI officer against the bank. The law is firmly on your side when it comes to dealing with abusive debt collectors. banking institutions face heavy fines for the misconduct of their outsourced firms.'
    }
  ];

  const reviews = [
    {
      name: "Suresh Kumar",
      location: "Chennai",
      rating: 5,
      text: "I was terrified of going to jail because I could not pay my own loan due to a massive firm loss. The constant calls made me severely depressed. After grasp the laws and consulting with experts. I realized I had rights. We sent a strong legal reply. the threats stopped fully. We eventually settled the loan by law.",
      date: "June 2026"
    },
    {
      name: "Priya Singh",
      location: "Mumbai",
      rating: 5,
      text: "The bank agents started visiting my office and humiliating me in front of my manager. It was a nightmare. I learned about the RBI guidelines and fast filed a formal complaint with the nodal head. The bank apologized and withdrew the exact firm. I am now undergoing a structured loan restructuring process without the daily panic.",
      date: "April 2026"
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad",
      rating: 5,
      text: "I received a Section 138 notice for a bounced cheque on my own loan EMI. I thought my life was over. The legal team helped me draft a proper response within the fifteen day limit. Proving my money hardship. The case did not escalate to court. the bank agreed to a one time closure of fifty percent of the unpaid amount.",
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
              <li className="inline-flex items-center"> <Link href="/" className="inline-flex items-center hover:text-blue-600"> Home </Link> </li>
              <li> <div className="flex items-center"> <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/> </svg> <span className="ml-1 font-medium text-gray-500 md:ml-2"> Punishment for Non Payment of own Loan in India </span> </div> </li>
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
                <p className="font-bold text-gray-900 mb-4 text-base border-b pb-2">Table of Contents</p>
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
              <h2 className="text-xl font-bold text-blue-900 mb-3">Personal Loan Defaults and Recovery in India</h2>
              <p className="text-base text-gray-800 leading-relaxed mb-4"> yet. Defaulting on a own loan in India is a civil offense. Not a penal one. Meaning you cannot go to jail simply for not having the money to pay. This key distinction forms the foundation of your legal defense against the predatory threaten tactics commonly deployed by unregulated claims firms across the country. </p>
              <p className="text-base text-gray-800 leading-relaxed mb-4"> The massive explosion of clean lending in the post pandemic era has resulted in an unprecedented volume of defaults. Millions of middle class citizens. Struggling with job losses. Unexpected medical bills. Rampant inflation. Find themselves trapped in a vicious cycle of debt. The mental toll of receiving threatening calls at all hours of the day and night is often far more debilitating than the actual money loss. </p>
              <p className="text-base text-gray-800 leading-relaxed"> When you default on a own loan. The banking institution will unleash a multi tiered claims strategy designed to extract maximum payment in the shortest possible time. They will bombard you with messages. Send legal notices threatening severe action. deploy field agents to your residence. Knowing your rights. Grasp the exact legal framework. formulating a experts response strategy is your only shield against this onslaught. We will explore every facet of the default process. Demystifying the threats and providing you with actionable legal insights to reclaim your peace of mind and protect your future creditworthiness. </p>
            </section>

            <section>
              <h2 id="immediate-consequences" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Immediate Consequences of Missing Personal Loan EMIs</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> The machinery of debt calls activates the moment your scheduled Equated Monthly Installment (EMI) fails to clear. Banks employ sophisticated automated systems that instantly categorize your account based on the number of days past due. The first phase is characterized by a high frequency of contact. Blending polite reminders with subtle warnings about the escalating results of continued non payment. </p>
                <p> Within the first thirty days. The bank will classify your account as Special Mention Account zero (SMA zero). You will incur late payment fine fees. your unpaid main sum will begin to accumulate penal rates at exorbitant rates. This penal rates compounds rapidly. Meaning that your debt will grow exponentially even if you stop borrowing fully. The bank will send continuous SMS alerts. Automated voice calls. formal emails demanding fast rectification of the shortfall. </p>

                <h3 id="impact-cibil" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Impact on Your CIBIL Score and Future Credit</h3>
                <p> The most fast and objectively measurable result of an EMI default is the severe damage inflicted upon your credit score. Banking institutions report payment data to credit bureaus like TransUnion CIBIL. Experian. Equifax. CRIF High Mark every single month. A missed payment is recorded as a negative entry. Fast pulling down your score by twenty to fifty points. Depending on your overall credit history. </p>
                <p> As the default extends from thirty days to sixty days. Then to ninety days. The damage becomes dire. The account transitions from being merely delayed to being classified as a Non Performing Asset (NPA). An NPA classification on your credit report is a massive red flag that will deter any conventional lender from extending new credit to you. Mortgages, vehicle loans. even small limit credit cards will be fully out of reach. This loss of creditworthiness can stall your money progress for several years. Forcing you to rely exclusively on cash transactions or highly predatory. Unregulated lenders in times of emergency. </p>

                <h3 id="recovery-harassment" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Escalating threats by Bank agents</h3>
                <p> Once an account becomes seriously delinquent. Banks often outsource the claims process to third party calls firms. These firms operate on a commission basis. Earning a rate of whatever amount they manage to extract from the defaulting clients. This incentive structure inevitably leads to harsh. Often unlawful. Claims tactics. </p>
                <p> The threats typically begins with incessant phone calls made from dozens of different unregistered numbers. Making it impossible to block them effectively. These agents will use high pressure mental tactics. Shouting. Using abusive language. making false threats regarding imminent police action or arrest. They exploit the common citizen's lack of legal knowledge to induce panic. </p>
                <p> If phone calls fail to produce the desired result. The firm will escalate to real field visits. Agents may arrive at your home address unannounced. Demanding fast payment. In extreme cases. They may contact your neighbors. Your relatives. Your employer. Aiming to publicly humiliate you into paying. This tactic of public shaming is explicitly prohibited by the Reserve Bank of India. Yet it remains a distressingly common practice among rogue calls firms. To combat this. You need to understand <Link href="/how-to-stop-recovery-agent-harassment" className="text-blue-600 font-bold hover:underline">how to stop agents threats</Link> and assert your legal rights fast. </p>
                
                <div className="bg-red-50 p-8 rounded-2xl border border-red-200 my-10">
                  <h3 className="font-bold text-red-900 text-base mb-4">Red Flags List: unlawful calls Practices</h3>
                  <ul className="list-disc pl-5 space-y-3 text-red-800">
                    <li>Calling you outside the by law permitted window of 8:00 AM to 7:00 PM.</li>
                    <li>Using profanity. Abusive language. shouting during telephone talks.</li>
                    <li>Threatening real violence against you or your family members.</li>
                    <li>Falsely claiming to be police heads or court officials.</li>
                    <li>Threatening to send the police to arrest you for an clean loan default.</li>
                    <li>Discussing your debt details with your employer. Neighbors. extended family.</li>
                    <li>Refusing to provide valid identification or authorization letters when visiting your premises.</li>
                    <li>Demanding cash payments without providing fast. Valid receipts from the bank.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 id="legal-actions" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Legal Actions Banks Can Take Under Indian Law</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> While you cannot be jailed simply for failing to repay a civil debt. Banking institutions possess a powerful arsenal of legal mechanisms to enforce claims. The exact legal route chosen by the bank depends heavily on the nature of the loan pacts. The unpaid amount. the underlying instruments used to facilitate the EMI payments. It is crucial to differentiate between genuine legal steps and fake notices designed solely to threaten. </p>

                <h3 id="sec-138-notice" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Notice Under Section 138 of NI Act (Cheque Bounce)</h3>
                <p> If you provided post dated cheques (PDCs) to the bank as security for the own loan. One of these cheques is presented for payment and subsequently bounces due to insufficient funds. The case escalates dramatically. The dishonoring of a cheque is a crime under Section 138 of the Negotiable Instruments Act. </p>
                <p> The bank will send you a formal legal notice within thirty days of the cheque bouncing. Demanding the payment of the cheque amount within fifteen days. This fifteen day period is key. If you fail to make the payment within this window. The bank has the legal right to file a penal complaint against you in the magistrate court. If found guilty under Section 138. You can face imprisonment for a term which may extend to two years. a fine which may extend to twice the amount of the cheque. both. </p>
                <p> Similarly. if your EMI is deducted via the online Clearing Service (ECS) or National Automated Clearing House (NACH) mandate. The mandate fails due to insufficient funds. The bank can invoke Section 25 of the Payment and closure Systems Act. The fines and procedures under this section are virtually identical to those under Section 138 of the NI Act. Carrying severe penal implications. Therefore. You must be extremely cautious about bouncing cheques or mandates. If you anticipate a default. It is sometimes strategically advisable to instruct your bank to stop payment. although this carries its own set of contractual breach implications. </p>
                <p> When you receive such a notice. You must consult a legal experts fast to understand <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-blue-600 font-bold hover:underline">what to do when the bank sends a legal notice</Link> and to draft an appropriate. By law sound reply. Ignoring it is the worst possible strategy. as it will inevitably lead to the issuance of bailable or non bailable warrants. </p>

                <h3 id="civil-suit" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Civil Suit for claims of unpaid Dues</h3>
                <p> If the loan was disbursed without cheques or mandates. If the bank chooses not to pursue the penal route. They can file a civil suit for the claims of money under Order 37 of the Code of Civil Procedure (Summary Suit). A summary suit is an expedited legal process designed for the swift claims of established debts. where the defendant has a limited opportunity to defend themselves unless they can prove a substantial defense. </p>
                <p> Filing a civil suit is an expensive and time consuming endeavor for the bank. Involving court fees and prolonged litigation. Consequently. Banks generally reserve this option for high ticket own loans where the unpaid balance justifies the legal expenditure. If the court rules in favor of the bank and issues a decree. The bank can execute the decree by attaching your movable or immovable homes. By garnishing a portion of your salary straight from your employer. Subject to the limitations prescribed in Section 60 of the CPC. </p>

                <h3 id="arbitration" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Arbitration steps in Loan pacts</h3>
                <p> Modern own loan pacts almost universally contain an arbitration clause. This clause stipulates that in the event of a dispute or default. The matter will be resolved through arbitration rather than in a traditional civil court. The bank appoints a sole arbitrator to adjudicate the matter. </p>
                <p> Arbitration is generally faster than civil litigation. The bank will issue a notice invoking the arbitration clause and detailing the appointment of the arbitrator. You have the right to participate in the steps. Present evidence. dispute inflated rates charges or fine fees. If you fail to participate. The arbitrator will likely pass an ex parte award in favor of the bank. Once an arbitration award is passed. It carries the same legal weight as a civil court decree and can be executed similarly. </p>
                
                <div className="bg-gray-900 p-8 rounded-3xl text-white shadow-lg my-12">
                  <h3 className="font-bold text-yellow-400 text-base mb-6 border-b border-gray-700 pb-2">Legal Process Map: The Anatomy of Bank Action</h3>
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold mr-4">1</div>
                      <div>
                        <p className="font-bold text-lg mb-1">Day 1 to 90: Internal Collections Phase</p>
                        <p className="text-gray-300 text-sm">Automated reminders, telecalling. field visits by bank staff or authorized firms. The account transitions from SMA to NPA status.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold mr-4">2</div>
                      <div>
                        <p className="font-bold text-lg mb-1">Day 90 to 120: Legal Notice Issuance</p>
                        <p className="text-gray-300 text-sm">The bank issues formal demand notices. Section 138 / Section 25 notices if a cheque or ECS mandate has bounced. A reply must be drafted fast.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold mr-4">3</div>
                      <div>
                        <p className="font-bold text-lg mb-1">Day 120+: Initiation of Litigation or Arbitration</p>
                        <p className="text-gray-300 text-sm">The bank files a penal complaint for a bounced cheque. Initiates a summary civil suit. invokes the arbitration clause to secure a by law enforceable decree or award.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold mr-4">4</div>
                      <div>
                        <p className="font-bold text-lg mb-1">Execution of Decree</p>
                        <p className="text-gray-300 text-sm">Following a favorable judgment or award. The bank applies for execution. Leading to potential asset attachment or salary garnishment.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            <section>
              <h2 id="what-banks-cannot-do" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">What Banks Cannot Do (Your Rights as a Defaulter)</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> The power asymmetry between a massive money institution and an individual clients often leads to severe exploitation. Yet. The Indian legal system provides substantial safeguards to protect citizens from predatory debt calls practices. Knowing what the bank is by law prohibited from doing is the cornerstone of your defense strategy. </p>

                <h3 id="no-police-arrests" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">No Police Arrests for Civil Debt Defaults</h3>
                <p> The most pervasive myth propagated by agents is the threat of fast police arrest. You must internalize this fact fully: defaulting on an clean own loan is a civil matter. The police have absolutely no jurisdiction in civil disputes regarding loan claims. A police head cannot arrest you. Detain you. force you to sign a closure pacts simply because you owe money to a bank. </p>
                <p> If a agents threatens to bring the police to your house. They are committing the crime of penal threaten. If an individual claiming to be a police head arrives at your door demanding loan payment. They are likely an imposter. which is a serious crime. You should fast demand their valid identification and contact the local police station to check their credentials. The only scenario where police involvement is legitimate is if the bank has filed a formal FIR alleging premeditated fraud or forgery during the loan application process. if a court has issued an arrest warrant in a Section 138 cheque bounce case because you continually ignored court summons. </p>
                
                <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl my-10 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-blue-100 text-blue-800 font-bold px-4 py-1 rounded-bl-xl text-sm">Truth Bomb</div>
                  <h3 className="font-bold text-gray-900 text-base mb-4">Myth vs Fact: The Debt calls Reality</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-gray-100 pb-4">
                      <div>
                        <p className="font-bold text-red-600">The Myth</p>
                        <p className="text-gray-600 text-sm">"If you don't pay by 5 PM. We are sending the police van to arrest you and throw you in jail."</p>
                      </div>
                      <div>
                        <p className="font-bold text-green-600">The Legal Fact</p>
                        <p className="text-gray-800 text-sm">Police cannot arrest citizens for civil debt. Loan defaults are adjudicated in civil courts or arbitration tribunals. Not police stations.</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-gray-100 pb-4">
                      <div>
                        <p className="font-bold text-red-600">The Myth</p>
                        <p className="text-gray-600 text-sm">"We will contact your HR department and get you fired from your job for being a defaulter."</p>
                      </div>
                      <div>
                        <p className="font-bold text-green-600">The Legal Fact</p>
                        <p className="text-gray-800 text-sm">Third party disclosure is strictly banned by the RBI. Attempting to ruin your employment constitutes penal slander and threats.</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-bold text-red-600">The Myth</p>
                        <p className="text-gray-600 text-sm">"We have a warrant to seize all the furniture. Electronics. vehicles from your house today."</p>
                      </div>
                      <div>
                        <p className="font-bold text-green-600">The Legal Fact</p>
                        <p className="text-gray-800 text-sm">Banks cannot seize assets for an clean own loan without first completing a lengthy civil trial and obtaining a formal execution decree from a judge.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 id="rbi-guidelines" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">RBI Guidelines on Fair calls Practices</h3>
                <p> The Reserve Bank of India has issued stringent guidelines detailing the Fair Practices Code that all banks and Non Banking money Companies (NBFCs) must follow. These guidelines are designed to ensure that clients are treated with dignity and respect. Regardless of their money delinquency. </p>
                <p> According to these mandates. Banks must rely on written contact and legal processes for claims. Rather than resorting to muscle power or mental terror. agents must carry proper authorization letters and identity cards issued by the bank. They are strictly prohibited from engaging in any action that could publicly embarrass the clients. They cannot call the clients at odd hours. Use threatening language. send false legal notices that mimic court papers. </p>
                <p> If a bank or its outsourced firm violates these guidelines. The clients has the right to escalate the matter. You can file a formal complaint with the bank's internal grievance redressal mechanism. If the bank fails to resolve the issue within thirty days. You can approach the Banking RBI officer. A quasi judicial authority appointed by the RBI to address customer complaints. The RBI officer has the power to heavily penalize banks for employing abusive claims practices and can mandate compensation for the mental agony suffered by the clients. </p>
              </div>
            </section>

            <section>
              <h2 id="handle-defaults" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">How to Handle Personal Loan Defaults Professionally</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> Panicking. Avoiding phone calls. changing your address are counterproductive strategies that only exacerbate the problem and accelerate legal action. To resolve a default. You must confront the case straight. Armed with proof and a clear talks strategy. </p>
                <p> The first step is to comprehensively assess your money reality. Calculate your total unpaid debt across all credit facilities. Determine your bare minimum living expenses. identify exactly how much surplus cash. If any. You can generate each month. You cannot settle effectively if you do not know your own money boundaries. Once you have this clarity. You can explore two primary avenues of relief. </p>

                <h3 id="loan-restructuring" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Opting for a Legitimate Loan Restructuring</h3>
                <p> If your money hardship is temporary. Such as a short term medical emergency or a brief period of job loss. Loan restructuring is the optimal solution. Restructuring involves renegotiating the terms of the original loan pacts to make the EMIs affordable. </p>
                <p> You must proactively approach the bank with a formal hardship letter. Detailing the reasons for your money distress and providing supporting evidence like medical bills or end letters. Request the bank to extend the loan tenure. which will proportionally reduce your monthly EMI burden. Alternatively. You can request a temporary EMI freeze period where you are excused from making main sum payments for a few months while you stabilize your income. </p>
                <p> Banks are often willing to accommodate restructuring requests for clients with a previously flawless payment history. as it keeps the account performing and avoids the necessity of provisioning for bad debt. A restructured loan will still impact your CIBIL score negatively. as it deviates from the original payment schedule. it is far less damaging than a total default or a closure. </p>

                <h3 id="one-time-settlement" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Going for a One-Time closure (OTS)</h3>
                <p> If your money crisis is severe and long term. You have absolutely no capacity to repay the full unpaid amount. A One Time closure (OTS) may be your only viable exit strategy. In an OTS. You settle with the bank to accept a lump sum payment that is significantly lower than the actual total dues. the bank writes off the remaining balance. grasp <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="text-blue-600 font-bold hover:underline">what loan closure is and how it works</Link> is essential before embarking on this path. </p>
                <p> closure talks require extreme patience and emotional fortitude. You must bypass the harsh low level calls agents and communicate straight with the bank's senior nodal heads or specialized closure departments. The talks process can stretch over several months. The bank will initially demand the full amount. Then slowly reduce their demand as they realize that extracting the full sum is impossible. </p>
                <p> You must secure the final closure pacts in writing. Explicitly stating that the lump sum payment constitutes a "full and final closure" of the account. that no further legal action will be pursued. Never make a closure payment based on a verbal promise. Be fully aware that while an OTS provides fast money relief and halts all legal steps. It will brand your credit report with a "Settled" status. Severely crippling your ability to borrow money for the next five to seven years. It is the money equivalent of a severe surgical procedure. it saves your life but leaves a permanent scar. </p>
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
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" alt="Vikram Sharma Legal Expert" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-50"  width={96} height={96} />
                <p className="font-bold text-gray-900">Vikram Sharma</p>
                <p className="text-sm text-gray-500 mb-4">Senior Legal counsel & money Strategist</p>
                <p className="text-xs text-gray-400">Expert in dealing with banking rules. Agents threats. complex debt restructuring matters.</p>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
