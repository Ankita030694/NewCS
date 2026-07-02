'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function SalaryAccountFreezeClient() {
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
    { id: 'right-of-set-off', label: 'Right of Set-Off' },
    { id: 'immediate-steps', label: 'Immediate Steps' },
    { id: 'rbi-complaint', label: 'RBI Complaint' },
    { id: 'loan-settlement', label: 'Loan Settlement' },
    { id: 'nach-mandates', label: 'NACH Mandates' },
    { id: 'bank-tactics', label: 'Bank Tactics' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'Can the bank freeze my Employee Provident Fund account for a loan default?',
      answer: 'Absolutely not. The EPF account is governed by the Employees Provident Funds and Miscellaneous Provisions Act. Under Section 10 of this Act, EPF balances are strictly immune from attachment, even by a civil court decree. Your retirement savings are completely safe from retail banking loan defaults.'
    },
    {
      question: 'What happens if my frozen salary account is a joint account?',
      answer: 'The banks right of set-off only applies when there is strict mutuality. If you took a personal loan in your individual capacity, the bank cannot legally freeze or execute a set-off against a joint account you hold with your spouse or parent, because the debt and the account ownership are not identical. If they do this, you can immediately file an Ombudsman complaint and likely win.'
    },
    {
      question: 'Can my employer terminate me because my salary account is frozen?',
      answer: 'A bank account freeze is a private civil dispute between you and your bank. It has no bearing on your employment contract. An employer cannot legally fire you simply because you have a banking dispute. However, constant calls from recovery agents to the HR department can damage your professional reputation, which is why proactive communication with HR is essential.'
    },
    {
      question: 'Will I go to jail for defaulting on a personal loan?',
      answer: 'No. Defaulting on a personal loan is a civil breach of contract, not a criminal offense. You cannot be jailed merely for being unable to repay a debt. The only exception is if you intentionally committed fraud or if you deliberately bounce cheques or ECS mandates with malicious intent, which can attract quasi-criminal proceedings. Even in those cases, the courts vastly prefer financial settlements over imprisonment.'
    },
    {
      question: 'Can I open a new bank account if my current one is frozen?',
      answer: 'Yes. There is no law preventing an Indian citizen from opening a new savings account, even if they have defaulted on a loan. However, there are practical challenges. Your PAN and Aadhaar are linked to your credit profile. When you apply for a new account, the new bank will see your deteriorated credit score. You should avoid opening an account with a bank that has any affiliated lending relationship with your current creditor.'
    },
    {
      question: 'How long does an RBI Ombudsman complaint take to resolve a frozen account?',
      answer: 'Once you file a complaint on the RBI CMS portal, the Ombudsman typically seeks a response from the bank within 15 to 30 days. Because an arbitrary 100 percent salary deduction violates basic subsistence rights, banks often proactively lift the freeze or offer a negotiated settlement before the Ombudsman issues a formal ruling to avoid regulatory penalties.'
    },
    {
      question: 'What is the minimum subsistence amount protected by law?',
      answer: 'While internal bank policies vary, Indian courts heavily rely on Section 60 of the Code of Civil Procedure as a benchmark, which exempts the first Rs 1000 and two thirds of the remainder of a salary from attachment. This legal principle dictates that a borrower cannot be entirely stripped of their income, ensuring funds remain for basic food and shelter.'
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
                    Salary Account Freeze
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
          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Table of Contents</h3>
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

          <div className="lg:w-2/3 w-full">
            <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                
                <section>
                  <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Navigating a Salary Account Freeze</h2>
                  <div className="text-gray-700 leading-relaxed mb-6">
                    <p className="mb-4">
                      According to the Reserve Bank of India (RBI) guidelines, banks cannot exercise their general lien or right of set-off to deduct your entire salary if it deprives you of basic subsistence. Despite this, over 45% of borrowers facing a sudden freeze on their salary accounts are left with absolutely zero funds for groceries, rent, or survival.
                    </p>
                    <p className="mb-4">
                      The immediate aftermath of a salary account freeze is a period of intense panic and financial paralysis. Waking up to find that your debit card is declined, your UPI apps are showing a bank error, and you cannot withdraw even a hundred rupees can be a harrowing experience. For millions of salaried professionals in India, a personal loan default triggers a cascading series of punitive measures by lending institutions, culminating in the dreaded account freeze. This guide explores the legal realities behind these tactics, the difference between a banker lien and an arbitrary freeze, the steps you can take to survive the immediate cash crunch, how to hold banks accountable through the RBI Ombudsman, and ultimately, how to negotiate a settlement to regain control of your financial life.
                    </p>
                    <p className="mb-4">
                      The psychological toll of waking up to a zero balance is immense. It is crucial to understand that while the bank holds your money, they do not hold all the cards. Indian law, specifically consumer protection and banking regulations, provides clear pathways to challenge arbitrary freezes. You are not without recourse. The first step to reclaiming your financial independence is understanding the exact legal mechanism the bank is using, or rather, misusing against you. Furthermore, you must prepare yourself for the inevitable interactions with debt collectors. If you are facing aggressive tactics, you should refer to our detailed guide on dealing with <Link href="/harassment-by-recovery-agents" className="text-blue-600 hover:underline">harassment by recovery agents</Link>.
                    </p>
                    <p className="mb-4">
                      This comprehensive resource is designed to be your actionable blueprint. We will dissect the right of set-off, provide a step-by-step checklist for immediate survival, map out the legal process for unfreezing your funds, and outline the timeline for escalating matters to the regulatory authorities. Your salary is your livelihood, and protecting it is your fundamental right. Let us delve into the mechanics of how banks freeze accounts and, more importantly, how you can legally force them to unfreeze your hard-earned money.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 id="right-of-set-off" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Understanding the Bank's Right of Set-Off on Salary Accounts</h2>
                  <div className="text-gray-700 leading-relaxed mb-6">
                    <p className="mb-4">
                      To understand your rights, it is crucial to distinguish between a Banker Lien, often executed as a right of set-off, and a blanket Account Freeze. Banks frequently blur the lines between these two concepts to exert maximum psychological pressure on defaulting borrowers. Under Section 171 of the Indian Contract Act of 1872, banks possess a general lien over the goods and securities of a customer that come into their possession in the regular course of banking business. In modern retail banking, this is typically exercised as the Right of Set-Off.
                    </p>
                    <p className="mb-4">
                      The Right of Set-Off allows a bank to adjust the outstanding balance of a loan against the funds lying in the borrower deposit accounts. However, this right is governed by strict conditions. Firstly, there must be mutuality. The funds and the debt must exist between the same parties in the same capacity. In simpler terms, if you owe money on a personal loan to Bank A, Bank A can exercise a set-off against your savings or salary account held in Bank A. 
                    </p>
                    <p className="mb-4">
                      Secondly, there is a notice requirement. According to fair banking practices and numerous judicial precedents, a bank must generally serve a reasonable prior notice to the customer before exercising the right of set-off. They cannot silently wipe out your account overnight without informing you. Thirdly, there is no cross-bank authority. If your personal loan is with Bank A, but your salary account is with Bank B, Bank A has absolutely zero unilateral authority to ask Bank B to freeze your funds or execute a set-off without a formal court order.
                    </p>
                    
                    <h3 id="rbi-guidelines" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-28">Does the RBI Allow Banks to Deduct 100% of Your Salary?</h3>
                    <p className="mb-4">
                      Even when a bank legally exercises its right of set-off, does the Reserve Bank of India allow them to deduct one hundred percent of your incoming salary? The answer lies in the fundamental principles of justice and statutory protection of livelihood. Indian law heavily protects a citizen basic livelihood. Article 21 of the Constitution of India guarantees the Right to Life, which courts have consistently interpreted to include the right to a livelihood. 
                    </p>
                    <p className="mb-4">
                      Furthermore, Section 60 of the Code of Civil Procedure explicitly exempts certain portions of a salary from attachment in the execution of a decree. Specifically, the first one thousand rupees and two thirds of the remainder of the salary are exempt from attachment. This legal principle clearly dictates that a borrower cannot be entirely stripped of their income. When a bank arbitrarily freezes a salary account and traps 100 percent of a borrower earnings, it operates in direct contravention of the spirit of these legal protections, depriving the individual of their basic subsistence. If you want to understand the exact regulatory framework, you should familiarize yourself with the <Link href="/rbi-guidelines-for-loan-recovery" className="text-blue-600 hover:underline">RBI guidelines for loan recovery</Link>.
                    </p>
                    <p className="mb-4">
                      The reality is that banks often rely on the borrower ignorance of these laws. They implement an internal hold on the account, effectively trapping the entire salary. They use this as a hostage negotiation tactic, telling the borrower to pay the EMI, and they will lift the hold. This is often a violation of the RBI Fair Practices Code, especially if executed without prior written notice. You must challenge this 100 percent deduction strategy immediately by demanding a subsistence allowance.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 id="immediate-steps" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Immediate Steps When Your Salary Account is Frozen</h2>
                  <div className="text-gray-700 leading-relaxed mb-6">
                    <p className="mb-4">
                      When you discover your account is frozen, time is of the essence. You must act strategically to ensure your family survival while navigating the dispute with the lender. Panic is your enemy; structured action is your ally. Do not rely on customer care hotlines; they will simply read from a script stating that your account is frozen due to outstanding dues. You must escalate the matter formally and physically.
                    </p>
                    
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
                      <h4 className="text-xl font-bold text-blue-900 mb-4">Emergency Survival Step Checklist</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-blue-600 font-bold mr-2">Step 1:</span>
                          <span><strong>Demand Written Proof:</strong> Visit your home branch immediately. Demand to know the exact legal basis for the freeze. Ask if it is a court order, a Garnishee order, or an internal policy. Demand the policy clause in writing.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 font-bold mr-2">Step 2:</span>
                          <span><strong>Submit Subsistence Application:</strong> Draft a formal letter requesting the release of a subsistence amount. State your frozen balance, essential monthly expenses, and reference Section 60 of the CPC. Get a stamped acknowledgment.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 font-bold mr-2">Step 3:</span>
                          <span><strong>Intercept Future Salary:</strong> Contact your HR department immediately. Explain there is a technical dispute with your bank and request that your next salary be credited via a physical crossed cheque or to an alternate account.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 font-bold mr-2">Step 4:</span>
                          <span><strong>Cancel Standing Instructions:</strong> Inform any other billers or utility providers linked to the frozen account to change the payment method to avoid cascading bounce charges.</span>
                        </li>
                      </ul>
                    </div>

                    <h3 id="open-new-account" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-28">How to Open a New Salary Account Legally</h3>
                    <p className="mb-4">
                      A common question borrowers ask is whether they can open a new bank account if their current one is frozen. The short answer is yes. There is no law preventing an Indian citizen from opening a new savings account, even if they have defaulted on a loan. However, there are practical challenges that you must navigate carefully. Your PAN and Aadhaar are linked to your credit profile. When you apply for a new account, the new bank will perform a soft inquiry and see your deteriorated credit score.
                    </p>
                    <p className="mb-4">
                      While most banks will still allow you to open a basic savings account, you should avoid opening an account with a bank that has any affiliated lending relationship with your current creditor. For instance, if you defaulted with an NBFC that is a subsidiary of a major private bank, do not open your new savings account with that parent bank. Choose a completely unrelated institution, preferably a reputed public sector bank or a distinct private bank.
                    </p>
                    <p className="mb-4">
                      Be aware that if your default leads to a prolonged legal battle and the lending bank eventually secures a court decree against you, they can track down your new bank accounts via your PAN and petition the court to attach those funds as well. Opening a new account is a survival tactic for the immediate term, not a permanent escape from the debt. It provides you the breathing room required to save money and eventually negotiate a full and final settlement. Ensure that your employer updates your payroll records to route your salary strictly to this newly established safe account.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 id="rbi-complaint" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Filing an RBI Ombudsman Complaint for Subsistence Allowance</h2>
                  <div className="text-gray-700 leading-relaxed mb-6">
                    <p className="mb-4">
                      If the bank has arbitrarily frozen your account without prior notice, or if they have denied your request for basic subsistence funds, you have the right to escalate the matter to the regulatory authority: The Reserve Bank of India. The RBI mandates that you must first attempt to resolve the issue directly with the bank. If the Branch Manager is unhelpful, escalate your complaint via email to the bank Grievance Redressal Officer or Principal Nodal Officer. You must give the bank 30 days to resolve the issue internally.
                    </p>
                    <p className="mb-4">
                      If the bank rejects your complaint, or if they fail to reply within 30 days, you can file a complaint under the Integrated Ombudsman Scheme of 2021. This process is entirely free and designed to protect consumers from predatory banking practices. You can visit the official RBI Complaint Management System portal to register and file a new complaint against the specific bank.
                    </p>

                    <h3 id="hardship-application" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-28">Drafting the Emergency Hardship Application</h3>
                    <p className="mb-4">
                      When drafting the complaint for the RBI Ombudsman, you must be objective and factual. State the exact date of the freeze, the lack of prior notice, the absence of any court order, and the bank refusal to release subsistence funds. Emphasize how this action violates RBI directives on fair recovery practices and deprives your family of basic survival necessities.
                    </p>
                    <p className="mb-4">
                      You must attach evidence to support your claims. Upload screenshots of the frozen account status, your email correspondence with the Nodal Officer, and the stamped copy of your Subsistence Release application that you submitted to the branch manager. The Ombudsman acts as a mediator and adjudicator. They will ask the bank to provide justification, such as a legal mandate, for the 100 percent debit freeze. Because most internal freezes lack legal backing, banks often back down at this stage. They typically offer to unfreeze the account in exchange for a negotiated repayment plan or settlement to avoid an adverse ruling from the regulator.
                    </p>
                    <p className="mb-4">
                      The Ombudsman also has the authority to order the bank to pay compensation for mental agony and loss of time, though this is granted sparingly and usually only in cases of severe, documented harassment. By leveraging the Ombudsman scheme, you shift the balance of power back in your favor, forcing the bank to operate within the bounds of the law rather than relying on intimidation tactics.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 id="loan-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Long-Term Solution: Unfreezing via Loan Settlement</h2>
                  <div className="text-gray-700 leading-relaxed mb-6">
                    <p className="mb-4">
                      Ultimately, fighting the freeze only addresses the symptom. To cure the disease and regain permanent financial stability, you must address the underlying loan default. Since personal loans are unsecured, banks are acutely aware that if you declare bankruptcy or vanish, they lose everything. This makes them highly amenable to negotiations, especially if the account has been classified as a Non-Performing Asset for several months.
                    </p>
                    <p className="mb-4">
                      If your financial hardship is severe and long-term, you may have to negotiate a One-Time Settlement. In an OTS, the bank agrees to accept a lump sum payment that is significantly lower than the total outstanding amount to close the account. If you need a comprehensive overview of this process, you should read our guide on <Link href="/how-to-settle-personal-loan" className="text-blue-600 hover:underline">how to settle a personal loan</Link>.
                    </p>

                    <h3 id="negotiating-ots" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-28">Negotiating a One-Time Settlement (OTS) While Frozen</h3>
                    <p className="mb-4">
                      When negotiating an OTS while your account is frozen, you must follow strict rules to protect yourself. Firstly, do not show desperation. Make it clear that you are facing severe financial hardship and that the settlement amount you are offering is all you can afford to arrange, often by borrowing from family. Secondly, aim for a massive reduction in penalties. Demand a full waiver on late payment fees, bounce charges, and penal interest. These are heavily inflated and banks readily drop them during settlements.
                    </p>
                    <p className="mb-4">
                      Thirdly, depending on how old the default is, banks may even agree to a significant haircut or reduction on the principal amount to recover whatever cash they can. The golden rule of settlement is to never pay a single rupee based on a verbal promise from a recovery agent or bank manager. Agents often lie, take your lump sum payment, adjust it against the penalties, and then continue harassing you for the remaining balance.
                    </p>
                    <p className="mb-4">
                      Insist on a formal Settlement Letter issued on the bank official letterhead and signed by an authorized officer. The letter must explicitly state the agreed-upon settlement amount, the deadline for payment, and a clear clause stating that upon receipt of this amount, the loan will be considered closed or settled. Crucially, it must contain a clear clause stating that any hold, lien, or freeze on associated bank accounts will be lifted immediately upon realization of the settlement funds. Once you have this document, execute the payment through a traceable method and collect your No Dues Certificate to force the unfreezing of your salary account.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 id="nach-mandates" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Dealing with Auto-Debit (NACH) Mandates on Frozen Accounts</h2>
                  <div className="text-gray-700 leading-relaxed mb-6">
                    <p className="mb-4">
                      When you take a personal loan, you typically sign an Electronic Clearing Service or National Automated Clearing House mandate allowing the bank to auto-debit your EMI. If your account lacks funds, or if it is frozen, the mandate bounces. Under Section 25 of the Payment and Settlement Systems Act, which is akin to Section 138 of the Negotiable Instruments Act for cheque bounces, a bounced electronic mandate is a criminal offense. Banks often use the threat of a Section 25 legal notice to coerce borrowers.
                    </p>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Legal Process Map: Handling NACH Bounces</h4>
                      <div className="flex flex-col space-y-4">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</div>
                          <div className="ml-4">
                            <h5 className="font-bold text-gray-900">Mandate Bounce Occurs</h5>
                            <p className="text-sm text-gray-600">Account lacks funds or is frozen, causing the auto-debit to fail.</p>
                          </div>
                        </div>
                        <div className="w-1 h-6 bg-gray-200 ml-5"></div>
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">2</div>
                          <div className="ml-4">
                            <h5 className="font-bold text-gray-900">Bank Issues Section 25 Notice</h5>
                            <p className="text-sm text-gray-600">A formal legal notice is sent demanding payment within 15 days to avoid criminal charges.</p>
                          </div>
                        </div>
                        <div className="w-1 h-6 bg-gray-200 ml-5"></div>
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">3</div>
                          <div className="ml-4">
                            <h5 className="font-bold text-gray-900">Borrower Responds Legally</h5>
                            <p className="text-sm text-gray-600">Reply to the notice citing the arbitrary account freeze and financial hardship, offering to settle.</p>
                          </div>
                        </div>
                        <div className="w-1 h-6 bg-gray-200 ml-5"></div>
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">4</div>
                          <div className="ml-4">
                            <h5 className="font-bold text-gray-900">Negotiation and Closure</h5>
                            <p className="text-sm text-gray-600">Enter into an OTS agreement; the bank withdraws the Section 25 proceedings upon payment.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 id="canceling-ecs" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-28">Canceling ECS Mandates to Prevent Bounce Charges</h3>
                    <p className="mb-4">
                      Initiating a Section 25 proceeding does not give the bank the automatic right to freeze the account; it only gives them the right to file a case before a magistrate. However, the continuous bouncing of mandates generates exorbitant bounce charges, inflating your outstanding debt rapidly. To stop this bleeding, you must attempt to cancel the NACH mandate.
                    </p>
                    <p className="mb-4">
                      You have the right to withdraw a NACH mandate by submitting a formal cancellation request to your destination bank, which is the bank where your salary account is held. The RBI has instructed banks that withdrawal of a mandate by a customer must be honored. While the lending bank will still hold you liable for the loan default, stopping the mandate prevents the endless cycle of bounce charges and potential Section 25 notices. You must submit this cancellation request in writing and retain a stamped acknowledgment copy for your records. This demonstrates that you took proactive steps to manage the account and were not acting with malicious intent to bounce payments.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 id="bank-tactics" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Common Bank Tactics vs Your Legal Rights</h2>
                  <div className="text-gray-700 leading-relaxed mb-6">
                    <p className="mb-4">
                      Banks rely heavily on psychological pressure to force repayments. A recovery manager might instruct the IT department to place a debit freeze flag on the borrower Customer ID. Unless the borrower challenges this legally, the freeze remains. They use intimidation by default, assuming most consumers do not know their legal rights.
                    </p>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 my-8 shadow-sm">
                      <h4 className="text-xl font-bold text-gray-900 mb-6">Timeline of an Account Freeze Crisis</h4>
                      <div className="relative border-l-2 border-blue-500 pl-6 space-y-8">
                        <div className="relative">
                          <div className="absolute -left-[31px] bg-blue-500 w-4 h-4 rounded-full border-4 border-white"></div>
                          <p className="text-sm font-bold text-blue-600 mb-1">Day 1: The Sudden Freeze</p>
                          <p className="text-gray-700">Salary is credited, but all debit transactions are blocked. Borrower discovers zero available balance.</p>
                        </div>
                        <div className="relative">
                          <div className="absolute -left-[31px] bg-blue-500 w-4 h-4 rounded-full border-4 border-white"></div>
                          <p className="text-sm font-bold text-blue-600 mb-1">Day 2-3: Branch Visit and Documentation</p>
                          <p className="text-gray-700">Borrower demands written proof of the freeze and submits a formal application for subsistence allowance.</p>
                        </div>
                        <div className="relative">
                          <div className="absolute -left-[31px] bg-blue-500 w-4 h-4 rounded-full border-4 border-white"></div>
                          <p className="text-sm font-bold text-blue-600 mb-1">Day 5-10: Payroll Diversion</p>
                          <p className="text-gray-700">Borrower successfully instructs HR to route the next salary to a newly opened, unaffiliated bank account.</p>
                        </div>
                        <div className="relative">
                          <div className="absolute -left-[31px] bg-blue-500 w-4 h-4 rounded-full border-4 border-white"></div>
                          <p className="text-sm font-bold text-blue-600 mb-1">Day 30: RBI Escalation</p>
                          <p className="text-gray-700">If the bank refuses to release funds, borrower files a formal complaint with the RBI Ombudsman.</p>
                        </div>
                        <div className="relative">
                          <div className="absolute -left-[31px] bg-green-500 w-4 h-4 rounded-full border-4 border-white"></div>
                          <p className="text-sm font-bold text-green-600 mb-1">Day 45-60: Resolution and Settlement</p>
                          <p className="text-gray-700">Under regulatory pressure, the bank negotiates a settlement, accepts a lump sum, and permanently lifts the freeze.</p>
                        </div>
                      </div>
                    </div>

                    <h3 id="protection-eviction" className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-28">Protection Against Immediate Eviction and Starvation</h3>
                    <p className="mb-4">
                      The most devastating impact of a frozen salary account is the immediate threat of starvation and eviction due to unpaid rent. This is precisely why the law prohibits the attachment of an entire salary. When you submit your hardship application, you must explicitly state that the bank actions are causing imminent threat to your survival. Documentation is key. Attach copies of your rent agreement, utility bills, and basic medical expenses to prove your subsistence needs.
                    </p>
                    <p className="mb-4">
                      If the bank remains obstinate, you can approach a civil court to seek an injunction against the arbitrary freeze, citing violation of Section 60 of the CPC. While legal proceedings take time, the mere service of a legal notice from a qualified advocate often prompts the bank legal department to advise the branch to release a portion of the funds to avoid judicial censure. Do not let aggressive recovery tactics force you into making panic-driven financial decisions. You have rights, and by following this structured approach, you can protect your livelihood and navigate your way out of the debt trap.
                    </p>
                  </div>
                </section>

                <section id="reviews" className="scroll-mt-28 mb-12 border-t border-gray-100 pt-8 mt-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Success Stories</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="flex items-center mb-4">
                        <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                      </div>
                      <p className="text-sm md:text-base text-gray-700 italic mb-4">
                        My salary account was frozen the day before my rent was due. I followed the steps to demand a subsistence allowance and escalated to the RBI. The bank unfroze my account within a week and agreed to settle my personal loan at a huge discount.
                      </p>
                      <p className="font-semibold text-blue-900">- Rajesh M., Bangalore</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="flex items-center mb-4">
                        <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                      </div>
                      <p className="text-sm md:text-base text-gray-700 italic mb-4">
                        I was terrified when my debit card stopped working. Opening a new account and routing my salary saved me from starvation. The legal guidance here helped me negotiate a settlement without fear.
                      </p>
                      <p className="font-semibold text-blue-900">- Sneha P., Mumbai</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="flex items-center mb-4">
                        <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                      </div>
                      <p className="text-sm md:text-base text-gray-700 italic mb-4">
                        The timeline and process map gave me exactly what I needed. I sent a legal notice challenging the arbitrary freeze, and the bank branch manager immediately released my funds. Highly recommended advice.
                      </p>
                      <p className="font-semibold text-blue-900">- Karan V., Delhi</p>
                    </div>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-28 border-t border-gray-100 pt-8 mt-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </article>
          </div>

          {/* Right Column: CTA & Related (Sticky) */}
          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              {/* Main CTA Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Need Urgent Help?</h4>
                <p className="text-sm text-gray-600 mb-6">Don't face the bank alone. Get expert legal support today.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Request Call Back
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>v 100% Confidential</p>
                  <p className="mt-1">v RBI Compliant Process</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bank Settlement Directory Grid */}
      <div className="max-w-8xl mx-auto px-4 py-12 border-t border-gray-200 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Settlement Services by Bank</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { name: 'HDFC Bank', href: '/loan-settlement/hdfc' },
            { name: 'SBI (State Bank of India)', href: '/loan-settlement/sbi' },
            { name: 'ICICI Bank', href: '/loan-settlement/icici' },
            { name: 'IndusInd Bank', href: '/loan-settlement/indusind' },
            { name: 'Axis Bank', href: '/loan-settlement/axis-bank' },
            { name: 'Kotak Mahindra Bank', href: '/loan-settlement/kotak' },
            { name: 'IDFC First Bank', href: '/loan-settlement/idfc' },
            { name: 'Yes Bank', href: '/loan-settlement/yes-bank' },
            { name: 'RBL Bank', href: '/loan-settlement/rbl-bank' },
            { name: 'Bajaj Finserv', href: '/loan-settlement/bajaj-finserv' },
            { name: 'Aditya Birla Capital', href: '/loan-settlement/aditya-birla' },
            { name: 'Hero Fincorp', href: '/loan-settlement/hero-fincorp' },
            { name: 'Union Bank', href: '/loan-settlement/union-bank' },
            { name: 'Federal Bank', href: '/loan-settlement/federal-bank' },
            { name: 'Bank of Baroda', href: '/loan-settlement/bank-of-baroda' },
            { name: 'DMI Finance', href: '/loan-settlement/dmi-finance' },
            { name: 'Kisetsu Saison Finance', href: '/loan-settlement/kisetsu' },
            { name: 'SMFG India Credit', href: '/loan-settlement/smfg-india-credit' },
            { name: 'Fibe (EarlySalary)', href: '/loan-settlement/fibe' },
            { name: 'Poonawalla Fincorp', href: '/loan-settlement/poonawalla' },
            { name: 'Tata Capital', href: '/loan-settlement/tata-capital' },
            { name: 'KrazyBee (KreditBee)', href: '/loan-settlement/krazybee' },
            { name: 'Piramal Finance', href: '/loan-settlement/piramal-finance' },
            { name: 'Stashfin (Akara Capital)', href: '/loan-settlement/stashfin' },
            { name: 'AU Small Finance Bank', href: '/loan-settlement/au-small-finance-bank' },
            { name: 'PayU Finance', href: '/loan-settlement/payu-finance' },
          ].map((bank) => (
            <Link 
              key={bank.href}
              href={bank.href}
              className="flex items-center p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
              <span className="text-gray-700 font-medium group-hover:text-blue-700">{bank.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Areas We Serve In Grid */}
      <div className="max-w-8xl mx-auto px-4 py-12 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Areas We Serve In</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { name: 'Andhra Pradesh', href: '/loan-settlement/andhra-pradesh' },
            { name: 'Delhi', href: '/loan-settlement/delhi' },
            { name: 'Gujarat', href: '/loan-settlement/gujarat' },
            { name: 'Haryana', href: '/loan-settlement/haryana' },
            { name: 'Karnataka', href: '/loan-settlement/karnataka' },
            { name: 'Maharashtra', href: '/loan-settlement/maharashtra' },
            { name: 'Rajasthan', href: '/loan-settlement/rajasthan' },
            { name: 'Tamil Nadu', href: '/loan-settlement/tamil-nadu' },
            { name: 'Telangana', href: '/loan-settlement/telangana' },
            { name: 'Uttar Pradesh', href: '/loan-settlement/uttar-pradesh' },
            { name: 'West Bengal', href: '/loan-settlement/west-bengal' },
          ].map((area) => (
            <Link 
              key={area.href}
              href={area.href}
              className="flex items-center p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
              <span className="text-gray-700 font-medium group-hover:text-blue-700">{area.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
