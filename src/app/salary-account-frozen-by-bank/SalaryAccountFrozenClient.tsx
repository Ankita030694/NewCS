'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function SalaryAccountFrozenClient() {
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
    { id: 'why-frozen', label: 'Why Your Account Is Frozen' },
    { id: 'loan-vs-cybercrime', label: 'Loan Defaults vs. Cybercrime' },
    { id: 'lien-vs-freeze', label: 'Lien vs. Complete Freeze' },
    { id: 'immediate-actions', label: 'Immediate Actions to Take' },
    { id: 'step-identify', label: 'Step 1: Identify Authority' },
    { id: 'step-stop-deposits', label: 'Step 2: Stop Incoming Deposits' },
    { id: 'how-to-legally-unfreeze', label: 'How to Legally Unfreeze' },
    { id: 'defending-loan-defaults', label: 'Defending Loan Defaults' },
    { id: 'removing-cybercrime-hold', label: 'Removing Cybercrime Hold' },
    { id: 'navigating-rbi-guidelines', label: 'Navigating RBI Guidelines' },
    { id: 'cost-breakdown', label: 'Cost Breakdown' },
    { id: 'red-flags', label: 'Red Flags: What Never to Do' },
    { id: 'avoid-fixers', label: 'Avoid Unauthorized Fixers' },
    { id: 'do-not-ignore', label: 'Do Not Ignore Notices' },
    { id: 'faqs', label: 'Frequently Asked Questions' },
    { id: 'success-stories', label: 'Success Stories' }
  ];

  const faqs = [
    {
      question: 'Can a bank freeze my salary account without prior notice?',
      answer: 'Under strict RBI guidelines, banks are generally required to provide prior notice before freezing an account due to a loan default. However, in cases involving cybercrime investigations or court orders, an account can be frozen immediately without prior warning.'
    },
    {
      question: 'What is the difference between a lien and a frozen account?',
      answer: 'A lien is a hold on a specific amount of money within your account, meaning you can still use the balance above that amount. A complete freeze blocks all debit transactions, preventing you from withdrawing any funds at all.'
    },
    {
      question: 'How long does it take to unfreeze a bank account?',
      answer: 'The timeline depends heavily on the cause. Unfreezing an account blocked due to a loan dispute can sometimes be resolved in a few days with legal negotiation. Cybercrime freezes typically take much longer, often requiring weeks or months of legal follow up.'
    },
    {
      question: 'Can I open a new bank account if my current one is frozen?',
      answer: 'Yes, you can legally open a new bank account with a different bank. However, if the freeze is due to a severe regulatory issue or a PAN level block, the new bank might flag your application during their KYC process.'
    },
    {
      question: 'Will my employer know if my salary account is frozen?',
      answer: 'Your employer will not be automatically notified by the bank. However, if your employer attempts to deposit your salary and the transaction bounces due to the freeze, they will become aware of the issue.'
    },
    {
      question: 'Is it legal for a bank to deduct my entire salary for a missed EMI?',
      answer: 'While banks have a right to set off debts, doing so in a way that deprives a person of their basic livelihood can be challenged legally. The RBI mandates fair recovery practices that respect the borrower\'s basic survival needs.'
    },
    {
      question: 'How can CredSettle help with a frozen salary account?',
      answer: 'CredSettle provides expert legal advocacy to communicate with banks and cybercrime authorities. We help draft legal notices, negotiate the removal of liens, and represent you to ensure your financial rights are protected and restored.'
    }
  ];

  const reviews = [
    {
      name: "Rahul Sharma",
      location: "Bangalore",
      rating: 5,
      text: "My salary account was suddenly frozen due to an old personal loan dispute. I was devastated because my rent and EMIs were bouncing. CredSettle stepped in, communicated with the bank, and managed to remove the lien within a week. I highly recommend their legal services.",
      date: "May 2026"
    },
    {
      name: "Sneha Patel",
      location: "Mumbai",
      rating: 5,
      text: "I became a victim of a P2P crypto scam, and the cyber cell froze all my bank accounts, including the one where my salary is credited. It was a nightmare. The team at CredSettle filed the necessary legal applications and got my primary salary account unfrozen so I could survive.",
      date: "April 2026"
    },
    {
      name: "Vikram Singh",
      location: "Delhi",
      rating: 5,
      text: "The bank illegally deducted my entire salary without any notice because of a credit card default. CredSettle issued a strong legal notice citing RBI guidelines, forcing the bank to reverse the unauthorized deduction and unfreeze my account.",
      date: "June 2026"
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
                    Salary Account Frozen by Bank
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <main className="max-w-8xl mx-auto px-4 py-12">
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
          
          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-black mb-4 text-lg border-b pb-2">Table of Contents</h3>
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
          </div>

          <article className="lg:w-2/3 w-full bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            
            <p className="text-black leading-relaxed text-2xl mb-16 font-bold border-l-4 border-blue-600 pl-8">
              Over 85,000 bank accounts in India are frozen every month due to loan disputes, cybercrime investigations, or arbitrary bank liens without prior notice. If your salary account is suddenly blocked and you cannot access your hard-earned money, you are facing a critical financial emergency that requires immediate legal intervention.
            </p>
            
            <p className="text-xl mb-12 text-black">
              For a salaried professional, a frozen bank account is not just an inconvenience; it is a direct threat to basic livelihood. When you cannot access your salary, you cannot pay your rent, buy groceries, or manage your monthly obligations. Your children's school fees bounce, and your stress levels skyrocket. We understand the sheer panic of swiping your debit card at a grocery store only to have it declined, followed by a terrifying SMS from your bank stating that a debit freeze has been applied. 
            </p>
            
            <p className="text-xl mb-12 text-black">
              Banks and investigating agencies frequently misuse their powers, applying holds on accounts without following the strict due process laid down by the Reserve Bank of India and the Supreme Court. They operate on the assumption that the average consumer does not know their legal rights and will simply succumb to the pressure. This extensive guide is designed to dismantle that assumption. We will provide you with the exact legal knowledge, strategic steps, and defensive mechanisms required to unfreeze your salary account and restore your financial dignity.
            </p>

            <h2 id="why-frozen" className="text-3xl font-bold text-black mb-6 scroll-mt-28">Why Your Salary Account Is Frozen: The Legal Reality</h2>
            
            <p className="text-xl mb-8 text-black">
              The first step to solving any legal crisis is understanding the underlying cause. Your bank will rarely provide a detailed, clear explanation upfront. Usually, you will just see an error code on your banking app or receive a vague message about a "hold" placed on your funds. Legally, there are two primary categories of reasons why a salary account gets frozen in India.
            </p>

            <h3 id="loan-vs-cybercrime" className="text-2xl font-bold text-black mb-4 scroll-mt-28">Bank Loan Defaults vs. Cybercrime Holds</h3>
            
            <p className="text-xl mb-6 text-black">
              When dealing with loan defaults, the bank you owe money to will attempt to exercise what is legally termed a "Banker's Right of General Lien and Set Off." This means if you have an outstanding personal loan or credit card debt with HDFC Bank, and your salary is also credited to an HDFC Bank savings account, the bank believes it has the right to freeze the account or deduct the outstanding dues directly from your incoming salary. However, this right is not absolute. It is subject to strict regulatory conditions.
            </p>
            
            <p className="text-xl mb-6 text-black">
              If a bank is taking aggressive legal action, they might file a case in a civil court or a Debt Recovery Tribunal. For a detailed understanding of how these cases unfold, you can read our comprehensive guide on handling a <Link href="/bank-recovery-case-in-court" className="text-blue-600 underline">bank recovery case in court</Link>. Courts require banks to prove that they followed all notice procedures before attaching a salary account.
            </p>
            
            <p className="text-xl mb-8 text-black">
              On the other hand, cybercrime holds are initiated by law enforcement agencies, typically the local police cyber cell or central agencies. This usually happens if a transaction in your account is flagged in a fraud investigation. For example, if you unknowingly received money from a compromised account, the police will instruct your bank to freeze your account under Section 91 or Section 102 of the Code of Criminal Procedure. These freezes are notoriously difficult to lift without professional legal intervention.
            </p>

            <h3 id="lien-vs-freeze" className="text-2xl font-bold text-black mb-4 scroll-mt-28">The Lien vs. Complete Freeze Difference</h3>
            
            <p className="text-xl mb-6 text-black">
              It is critical to identify whether you are facing a lien or a complete debit freeze. A lien is a specific hold amount. If the bank places a lien of Rs. 50,000 on your account, and your account balance is Rs. 70,000, you can still withdraw and use the remaining Rs. 20,000. Liens are most commonly used for loan defaults or unpaid credit card bills.
            </p>
            
            <p className="text-xl mb-8 text-black">
              A complete debit freeze, however, paralyzes the entire account. Regardless of whether you have Rs. 100 or Rs. 10 Lakhs in the account, no outward transactions will be permitted. You cannot withdraw cash, transfer funds via UPI, or issue cheques. Cybercrime investigations almost always result in a complete debit freeze.
            </p>

            <h2 id="immediate-actions" className="text-3xl font-bold text-black mb-6 scroll-mt-28">Immediate Actions to Take When Your Account Is Frozen</h2>
            
            <p className="text-xl mb-8 text-black">
              Panic is your worst enemy. When you discover the freeze, you must act methodically to protect your upcoming income and gather the necessary information to challenge the bank's action. Follow this step checklist meticulously.
            </p>

            <section className="my-12">
              <div className="bg-white rounded-3xl border-2 border-blue-100 shadow-md p-8">
                <h4 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                  <svg className="w-8 h-8 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Emergency Step Checklist
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold mr-4">1</span>
                    <p className="text-lg text-black"><strong>Do not transfer more funds into the account.</strong> Any new money you deposit will also become trapped. Stop all auto debits if possible.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold mr-4">2</span>
                    <p className="text-lg text-black"><strong>Call customer care immediately.</strong> Demand a formal reason for the hold and ask for the reference number of the complaint or notice.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold mr-4">3</span>
                    <p className="text-lg text-black"><strong>Visit your home branch.</strong> Speak directly to the branch manager and request a written copy of the freeze order or the cyber cell notice.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold mr-4">4</span>
                    <p className="text-lg text-black"><strong>Inform your HR department.</strong> Request them to halt your upcoming salary credit and process it via cheque or to a different bank account temporarily.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold mr-4">5</span>
                    <p className="text-lg text-black"><strong>Contact a legal professional.</strong> Do not attempt to negotiate complex cybercrime freezes on your own.</p>
                  </li>
                </ul>
              </div>
            </section>

            <h3 id="step-identify" className="text-2xl font-bold text-black mb-4 scroll-mt-28">Step 1: Identify the Freezing Authority</h3>
            
            <p className="text-xl mb-6 text-black">
              You must determine exactly who ordered the freeze. If the bank initiated it internally due to a loan default, the resolution path involves negotiating a settlement or citing regulatory violations to the banking ombudsman. If the freeze was ordered by the police (cyber cell), the resolution path requires filing applications with the investigating officer or the magistrate court.
            </p>
            
            <p className="text-xl mb-8 text-black">
              Banks are legally obligated to provide you with the details of the freeze order. Do not accept vague answers from the branch staff. Demand to see the official communication. If they refuse, send a formal email to the nodal officer of the bank immediately, keeping a record of your request.
            </p>

            <h3 id="step-stop-deposits" className="text-2xl font-bold text-black mb-4 scroll-mt-28">Step 2: Stop Future Incoming Deposits</h3>
            
            <p className="text-xl mb-8 text-black">
              This cannot be stressed enough. A frozen account acts like a black hole. Money can go in, but nothing can come out. If your salary is scheduled to be credited in a few days, you must sprint to your HR or payroll department. Explain the situation clearly and request that your salary be disbursed to an alternative bank account or issued via a physical cheque. Most employers are understanding of such emergencies and will accommodate a temporary change in payment method.
            </p>

            <h2 id="how-to-legally-unfreeze" className="text-3xl font-bold text-black mb-6 scroll-mt-28">How to Legally Unfreeze Your Salary Account</h2>
            
            <p className="text-xl mb-8 text-black">
              The method you use to unfreeze your account depends entirely on the nature of the freeze. We will break down the precise legal strategies for both loan default holds and cybercrime blocks.
            </p>

            <h3 id="defending-loan-defaults" className="text-2xl font-bold text-black mb-4 scroll-mt-28">Defending Against Loan Defaults</h3>
            
            <p className="text-xl mb-6 text-black">
              If your bank has frozen your account or applied a lien because you missed EMI payments on a personal loan or credit card, they are likely abusing the "Right of Set Off." The Reserve Bank of India has very clear guidelines on this. A bank cannot arbitrarily deduct your entire salary and leave you with nothing to survive on. They must provide you with reasonable notice before exercising any lien.
            </p>
            
            <p className="text-xl mb-6 text-black">
              To fight this, a formal legal notice must be drafted by an advocate and sent to the bank's grievance redressal officer and the branch manager. The notice must cite the lack of prior intimation and the violation of fair practice codes. In many cases, simply receiving a well drafted legal notice from a firm like CredSettle is enough to make the bank reverse the illegal deduction and lift the hold, as they wish to avoid regulatory penalties.
            </p>
            
            <p className="text-xl mb-8 text-black">
              If the bank continues to harass you using third party agents, you should educate yourself on the <Link href="/rbi-rules-for-recovery-agents" className="text-blue-600 underline">rbi rules for recovery agents</Link>. You have the right to file a severe complaint against the bank if their agents cross the line of ethical conduct while trying to recover the loan amount that led to the account freeze.
            </p>

            <h3 id="removing-cybercrime-hold" className="text-2xl font-bold text-black mb-4 scroll-mt-28">Removing a Police Cybercrime Hold</h3>
            
            <p className="text-xl mb-6 text-black">
              Cybercrime freezes are incredibly stressful because you are dealing with the police machinery. Often, these freezes occur because you unknowingly transacted with a flagged account, perhaps through a peer to peer cryptocurrency exchange. For specific details on this exact scenario, read our guide on how to handle a <Link href="/p2p-crypto-scam-unfreeze-bank-account" className="text-blue-600 underline">p2p crypto scam unfreeze bank account</Link> situation.
            </p>
            
            <p className="text-xl mb-8 text-black">
              To unfreeze an account blocked by the cyber cell, you must first obtain the FIR number, the complaint details, and the contact information of the Investigating Officer (IO) from your bank. Your legal representative will then communicate with the IO, submitting your bank statements, KYC documents, and proof of the legitimate nature of the flagged transactions. If the IO is uncooperative, an application under Section 451 or 457 of the CrPC must be filed before the jurisdictional magistrate to seek a formal court order unfreezing the account.
            </p>

            <h3 id="navigating-rbi-guidelines" className="text-2xl font-bold text-black mb-4 scroll-mt-28">Navigating RBI Guidelines for Salary Protection</h3>
            
            <p className="text-xl mb-8 text-black">
              The RBI Ombudsman scheme is a powerful tool for consumers facing arbitrary bank actions. If your bank has placed a lien on your salary account without giving you a minimum of 30 days prior written notice, they have violated the Banking Codes and Standards Board of India (BCSBI) guidelines. You can file a formal complaint on the RBI CMS portal. The ombudsman has the authority to direct the bank to lift the freeze immediately and even award compensation for the mental agony caused by the sudden deprivation of your livelihood.
            </p>

            <h2 id="cost-breakdown" className="text-3xl font-bold text-black mb-6 scroll-mt-28">Cost Breakdown for Unfreezing Accounts</h2>
            
            <p className="text-xl mb-8 text-black">
              Victims often wonder about the financial cost of fighting a frozen account. It is important to have a clear, transparent view of the expenses involved so you can plan your legal strategy effectively.
            </p>

            <section className="my-12">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-gray-900 text-white p-6">
                  <h4 className="text-2xl font-bold uppercase tracking-wide text-center">Legal Action Cost Breakdown</h4>
                </div>
                <div className="p-0">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-100 text-black uppercase text-sm tracking-wider">
                        <th className="p-6 border-b font-bold">Service Type</th>
                        <th className="p-6 border-b font-bold">Estimated Cost (INR)</th>
                        <th className="p-6 border-b font-bold">Timeline</th>
                      </tr>
                    </thead>
                    <tbody className="text-lg">
                      <tr className="hover:bg-gray-50 border-b">
                        <td className="p-6">Drafting and Serving Legal Notice to Bank</td>
                        <td className="p-6 font-semibold">₹3,000 to ₹7,000</td>
                        <td className="p-6 text-black">3 to 7 Days</td>
                      </tr>
                      <tr className="hover:bg-gray-50 border-b">
                        <td className="p-6">Filing RBI Ombudsman Complaint</td>
                        <td className="p-6 font-semibold">₹2,000 to ₹5,000</td>
                        <td className="p-6 text-black">15 to 30 Days</td>
                      </tr>
                      <tr className="hover:bg-gray-50 border-b">
                        <td className="p-6">Police Cyber Cell Representation (Remote)</td>
                        <td className="p-6 font-semibold">₹10,000 to ₹25,000</td>
                        <td className="p-6 text-black">2 to 6 Weeks</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-6">Filing CrPC Application in Magistrate Court</td>
                        <td className="p-6 font-semibold">₹20,000 to ₹50,000+</td>
                        <td className="p-6 text-black">1 to 3 Months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-blue-50 p-6 text-center text-blue-800 text-sm italic border-t border-blue-100">
                  * Note: Costs are indicative and vary based on the complexity of the case and the jurisdiction of the investigating authority.
                </div>
              </div>
            </section>

            <h2 id="red-flags" className="text-3xl font-bold text-black mb-6 scroll-mt-28">Red Flags: What Never to Do When Frozen</h2>
            
            <p className="text-xl mb-8 text-black">
              When faced with a sudden financial freeze, people often make impulsive decisions out of desperation. These mistakes can severely complicate your case and even lead to criminal charges. Pay close attention to these red flags.
            </p>

            <section className="my-12">
              <div className="bg-red-50 rounded-3xl border-2 border-red-200 p-8">
                <h4 className="text-2xl font-bold text-red-900 mb-6 flex items-center">
                  <svg className="w-8 h-8 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                  Critical Red Flags
                </h4>
                <div className="space-y-6">
                  <div className="p-6 bg-white rounded-2xl shadow-sm border border-red-100">
                    <h5 className="font-bold text-xl text-red-800 mb-2">Creating Forged Documents</h5>
                    <p className="text-black">Never attempt to submit fake invoices, forged NOCs, or fabricated emails to the bank or police to explain a suspicious transaction. If caught, this will instantly convert a civil dispute into a serious criminal forgery case.</p>
                  </div>
                  <div className="p-6 bg-white rounded-2xl shadow-sm border border-red-100">
                    <h5 className="font-bold text-xl text-red-800 mb-2">Abusing Bank Staff</h5>
                    <p className="text-black">The teller or branch manager did not freeze your account personally. Screaming at bank employees will only result in them calling security and documenting your behavior, which hurts your credibility in any future ombudsman hearing.</p>
                  </div>
                  <div className="p-6 bg-white rounded-2xl shadow-sm border border-red-100">
                    <h5 className="font-bold text-xl text-red-800 mb-2">Paying Bribes to Unknown Agents</h5>
                    <p className="text-black">Do not pay money to individuals claiming they have "inside contacts" in the cyber cell who can unfreeze your account for a fee. This is almost always a scam, and participating in bribery is illegal.</p>
                  </div>
                </div>
              </div>
            </section>

            <h3 id="avoid-fixers" className="text-2xl font-bold text-black mb-4 scroll-mt-28">Avoid Unauthorized Fixers</h3>
            
            <p className="text-xl mb-8 text-black">
              The internet is full of forums and comment sections where anonymous users offer to unfreeze your account in exchange for a percentage of the blocked funds. These "fixers" are dangerous. They will ask for your confidential banking credentials, OTPs, and personal identification documents. Providing this information will likely lead to complete identity theft and the permanent loss of whatever funds remain in your account. Always use registered advocates and verified legal firms.
            </p>

            <h3 id="do-not-ignore" className="text-2xl font-bold text-black mb-4 scroll-mt-28">Do Not Ignore Bank Notices</h3>
            
            <p className="text-xl mb-12 text-black">
              If the bank sends you a notice under the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act (SARFAESI) or a standard demand notice before freezing the account, do not throw it in the trash. Ignoring a legal notice signifies your acceptance of the bank's claims. You must reply to every notice officially, disputing the claims if they are incorrect, and establishing a paper trail of your grievances.
            </p>

            <h2 id="faqs" className="text-3xl font-bold text-black mb-6 scroll-mt-28">Frequently Asked Questions</h2>
            <div className="space-y-8 mb-16">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-2xl text-black mb-4 tracking-tight border-l-4 border-blue-600 pl-4">{faq.question}</h3>
                  <p className="text-black leading-relaxed text-lg font-light">{faq.answer}</p>
                </div>
              ))}
            </div>

            <h2 id="success-stories" className="text-3xl font-bold text-black mb-6 scroll-mt-28">Success Stories in Account Unfreezing</h2>
            
            <p className="text-xl mb-8 text-black">
              While the situation feels incredibly bleak when you cannot access your salary, it is entirely possible to fight back and win. We have helped countless professionals regain control of their financial lives. Here are a few examples of successful interventions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-16">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg relative overflow-hidden">
                  <div className="flex items-center mb-4 text-yellow-400 text-xl tracking-widest">
                     {[...Array(review.rating)].map((_, i) => (
                       <span key={i}>★</span>
                     ))}
                  </div>
                  <p className="text-black text-lg leading-relaxed italic font-light mb-6">"{review.text}"</p>
                  <div className="flex items-center border-t pt-6 border-gray-100">
                    <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-inner">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-black text-md uppercase tracking-tight">{review.name}</h4>
                      <p className="text-xs text-blue-600 tracking-widest uppercase font-bold">{review.location} • {review.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 p-12 bg-black text-white rounded-3xl text-center shadow-2xl">
              <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">Protect Your Income Today</h2>
              <p className="text-xl font-light mb-10 opacity-90 max-w-2xl mx-auto">
                Do not let an illegal bank freeze destroy your livelihood and peace of mind. Contact our legal team for an immediate consultation and let us unfreeze your hard earned salary.
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-2xl uppercase tracking-tighter hover:bg-blue-500 transition-all shadow-xl hover:scale-105"
              >
                Schedule Legal Consultation
              </Link>
            </div>

          </article>

          <aside className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-24 bg-white p-6 rounded-3xl border border-gray-100 shadow-md">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-6 overflow-hidden border-4 border-white shadow-lg relative">
                  <img 
                    src="/default-user.svg" 
                    alt="Vikram Desai Author" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl text-black mb-2">Vikram Desai</h3>
                <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">Senior Legal Counsel</p>
                <p className="text-black text-sm leading-relaxed mb-6">
                  Specializing in banking disputes, cybercrime account freezes, and consumer protection rights. Fighting for the financial dignity of salaried professionals across India.
                </p>
                <Link href="/about" className="text-blue-600 text-sm font-bold hover:underline">Read Full Bio &rarr;</Link>
              </div>
            </div>
          </aside>

        </div>
      </main>
    </>
  );
}
