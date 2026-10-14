'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function LoanRecoveryAfterDeathClient() {
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
    { id: 'does-debt-pass', label: 'Does Debt Pass to Heirs?' },
    { id: 'rights-against-harassment', label: 'Rights Against Harassment' },
    { id: 'rbi-guidelines', label: 'RBI Guidelines' },
    { id: 'unsecured-vs-secured', label: 'Unsecured vs Secured' },
    { id: 'steps-to-stop-harassment', label: 'Steps to Stop Harassment' },
    { id: 'understanding-sarfaesi', label: 'Understanding SARFAESI' },
    { id: 'notice-under-13-2', label: 'Notice Under Section 13(2)' },
    { id: 'challenging-valuation', label: 'Challenging Valuation' },
    { id: 'freezing-salary-account', label: 'Freezing Salary Account' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'Can recovery agents arrest a legal heir for the deceased\'s unpaid loan?',
      answer: 'No. Defaulting on a civil loan is not a crime in India. Agents have absolutely no police powers. Cannot issue arrest warrants. cannot authorize the arrest of any person. Any threat of jail time for an unpaid clean loan is a blatant lie and a punishable offense of penal threaten.'
    },
    {
      question: 'What happens if the inherited property is worth less than the outstanding home loan?',
      answer: 'If a home is auctioned by the bank and the sale proceeds are insufficient to cover the unpaid home loan balance. The legal heirs are not personally required to pay the shortfall from their own pockets. The bank can only attempt to recover the shortfall if the legal heirs have inherited other assets from the deceased. If there are no other inherited assets. The bank must write off the remaining debt.'
    },
    {
      question: 'Are credit card dues passed on to the spouse?',
      answer: 'No. Credit card debt is an clean own loan. It does not automatically pass on to a surviving spouse unless the spouse was explicitly registered as a joint account holder. The bank must claim the dues from the deceased\'s estate, not the spouse\'s personal income.'
    },
    {
      question: 'What if the legal heirs do not inform the bank about the borrower\'s death?',
      answer: 'Failing to inform the bank is unwise. If EMIs bounce. The bank will classify the account as a Non-Performing Asset (NPA) and initiate harsh claims or legal action against the deceased. It is always better to formally notify the bank with a death letter to halt fine charges. Trigger cover claims. force the bank to follow proper deceased-closure protocols.'
    },
    {
      question: 'Does a nominee automatically become liable to pay the loan?',
      answer: 'No. A nominee in a bank account or mutual fund is merely a custodian or trustee of the assets. they are not the legal owner unless they are also the sole legal heir. Being a nominee to an asset does not make one liable for the deceased\'s liabilities. The liability rests on the legal heirs who ultimately inherit the estate.'
    },
    {
      question: 'Can the bank deduct loan EMIs from the deceased\'s frozen salary account?',
      answer: 'Yes. If the deceased had a loan and a savings/salary account with the same bank. The bank has a "Right of Set-Off." They can freeze the account upon death and by law adjust the available balance against the unpaid loan dues before releasing any remaining funds to the nominee or legal heirs.'
    },
    {
      question: 'How can legal heirs claim the surplus amount if the bank sells the property under SARFAESI?',
      answer: 'If the bank auctions the inherited home under the SARFAESI Act. Their only right is to recover the unpaid loan amount. Plus accumulated rates and legitimate auction expenses. Any surplus amount remaining from the sale must be returned to the legal heirs. The heirs should formally write to the bank demanding the auction account statement and the swift wire transfer of the surplus balance into their accounts.'
    }
  ];

  const reviews = [
    {
      name: "Meera Reddy",
      location: "Bangalore",
      rating: 5,
      text: "When my husband passed away. The bank agents started visiting our house and threatening me over his own loan. The legal insights from CredSettle helped me understand my rights. I sent them a formal letter. the threats stopped fully.",
      date: "May 2026"
    },
    {
      name: "Rohit Sharma",
      location: "New Delhi",
      rating: 5,
      text: "The bank tried to seize our family home using a fake SARFAESI notice issued in my deceased father's name. We challenged their valuation and saved our equity. This guide was a lifesaver.",
      date: "April 2026"
    },
    {
      name: "Sneha Nair",
      location: "Kochi",
      rating: 5,
      text: "I was terrified when they froze my mother's salary account to recover credit card dues. Learning about the 'Right of Set-Off' and how to properly claim the surplus saved me from being cheated out of the remaining funds.",
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
    <>
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[90rem] mx-auto px-4 py-4">
          <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center"> <Link href="/" className="inline-flex items-center hover:text-blue-600"> Home </Link> </li>
              <li> <div className="flex items-center"> <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/> </svg> <span className="ml-1 font-medium text-gray-500 md:ml-2"> Loan claims After Death </span> </div> </li>
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
          
          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="font-bold text-black mb-4 text-lg border-b pb-2">Table of Contents</p>
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

          <article className="lg:w-3/5 w-full prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            
            <p className="text-black leading-relaxed text-2xl mb-16 font-bold border-l-4 border-blue-600 pl-8"> When the tragedy of death strikes a family. The subsequent trauma inflicted by uninformed or malicious calls firms only compounds the grief. Grieving widows, children. dependent parents are routinely coerced into emptying their own savings or signing new loan pacts under the false pretense that they are by law bound to clear the deceased's unpaid debts. </p>
            <p className="text-xl mb-12 text-black"> This predatory behavior flourishes in the gap between banking rules and public legal awareness. Families are often subjected to incessant calls. Public humiliation. threats of non-existent legal action. By exploiting emotional vulnerability and legal ignorance. These firms extract payments that the law actually prohibits them from claiming straight from own funds. The fast aftermath of a death should be a time for healing and estate merger. Not fighting off unlawful extortion by money institutions. grasp your legal rights is the ultimate shield against these exploitative tactics. </p>

            <section>
              <h2 id="does-debt-pass" className="text-3xl font-bold text-black mb-6 scroll-mt-28">Does Debt Pass to Legal Heirs in India?</h2>
              
              <p className="text-xl mb-8 text-black"> A fundamental question that plagues grieving families is whether they are by law obligated to repay the debts left behind by a deceased relative. In India. The legal principle governing this scenario is unequivocally clear: a legal heir is not personally liable for the debts of the deceased. The risk to repay any unpaid loan does not automatically transfer to the spouse. Children. parents in their own capacity. Instead. The debt is attached strictly to the "estate" of the deceased person. </p>
              <p className="text-xl mb-8 text-black"> The "estate" comprises all the assets. Homes. Bank balances. Mutual funds. investments owned by the deceased at the time of their death. According to the laws of inheritance in India. Including the <a href="https://legislative.gov.in/actsofparliamentfromtheyear/hindu-succession-act-1956" rel="nofollow noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Hindu Succession Act</a> and the <a href="https://legislative.gov.in/actsofparliamentfromtheyear/indian-succession-act-1925" rel="nofollow noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Indian Succession Act</a>Legal heirs inherit both the assets and the debts of the deceased. with a key caveat. The heirs are liable to repay the deceased's debts only to the extent of the value of the assets they have inherited. </p>
              <p className="text-xl mb-8 text-black"> For instance. if a father passes away leaving behind a own loan of ₹10 Lakhs. The only asset he left behind is a bank account with ₹3 Lakhs. The legal heirs are only liable up to ₹3 Lakhs. The bank can by law claim those ₹3 Lakhs from the estate to settle part of the loan. Yet. The bank cannot force the son or daughter to pay the remaining ₹7 Lakhs out of their own pockets. Their own salary. their self-acquired homes. If the deceased left behind zero assets. The legal heirs have absolutely zero risk. the bank must classify the unrecovered amount as a bad debt and write it off. </p>
              <p className="text-xl mb-12 text-black"> The only major exception to this rule applies to co-clients and legal guarantors. If a legal heir or family member co-signed the loan pacts as a joint clients. Stood as a guarantor for the loan. Their legal status is distinct from that of a mere legal heir. In such cases. The contract of guarantee or the joint risk clause makes the surviving co-clients or guarantor personally liable for the entire unpaid amount. Regardless of the extent of the inherited estate. It is therefore vital for families to carefully review the original loan papers to ascertain their exact legal standing before making any payments or admissions of risk to agents. </p>
            </section>

            <section>
              <h2 id="rights-against-harassment" className="text-3xl font-bold text-black mb-6 scroll-mt-28">Rights of Family Members Against Bank Harassment</h2>
              
              <p className="text-xl mb-8 text-black"> The <a href="https://www.rbi.org.in/" rel="nofollow noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Reserve Bank of India (RBI)</a> and the Indian judicial system have laid down stringent frameworks to protect citizens from strong-arm claims tactics. Unfortunately. The decentralized nature of third-party claims firms often leads to rampant violations of these rights. Family members must recognize that they possess absolute legal rights against coercion. Threaten. illegal debt calls practices. </p>
              <p className="text-xl mb-12 text-black"> The relationship between a bank and a clients's family is governed by the Fair Practices Code. Which dictates that banks must approach debt claims with civility. Respecting the privacy and dignity of the individuals involved. Even if a legal heir has inherited massive assets and is liable to pay the debt from that estate. The bank cannot resort to extra-judicial means or muscle power to extract those funds. </p>

                <h3 id="rbi-guidelines" className="font-bold text-black text-2xl mb-4 scroll-mt-28">RBI Guidelines on Deceased clients Accounts</h3>
                <p className="text-xl mb-8 text-black"> The Reserve Bank of India strictly regulates how banks and their agents must conduct themselves. Especially when dealing with the accounts of deceased clients. The RBI mandates that banks must adopt a compassionate and reasonable approach rather than treating grieving families as deliberate defaulters. </p>
                <ul className="space-y-4 text-xl mb-8 text-black">
                  <li className="flex items-start"> <span className="w-2 h-2 mt-3 bg-blue-600 rounded-full mr-4 flex-shrink-0"></span> <span>The RBI has explicitly prohibited banks and their agents from resorting to threaten. Verbal abuse. Real threats. any form of threats. Agents are strictly forbidden from contacting family members. Neighbors. employers at unearthly hours.</span> </li>
                  <li className="flex items-start"> <span className="w-2 h-2 mt-3 bg-blue-600 rounded-full mr-4 flex-shrink-0"></span> <span>Telephonic contact must be restricted to standard firm hours. Typically between 8:00 AM and 7:00 PM.</span> </li>
                  <li className="flex items-start"> <span className="w-2 h-2 mt-3 bg-blue-600 rounded-full mr-4 flex-shrink-0"></span> <span>Furthermore. Banks are barred from making false threats of arrest or police action. as civil debt claims does not fall under the purview of penal law unless a exact fraud was committed.</span> </li>
                </ul>
                <p className="text-xl mb-8 text-black"> Secondly. The RBI mandates that banks must have a simplified. Hassle-free procedure for the closure of deceased individuals' accounts. This includes a clear. Time-bound mechanism for returning original home papers to the legal heirs once a secured loan has been fully settled. In the past. Banks notoriously withheld home papers for months. Demanding complex successions letters even for small amounts. Current guidelines stipulate that banks must release these papers within a exact timeframe (usually 15 to 30 days) after the full payment is made by the legal heirs. Failing which the bank is liable to pay a daily fine for the delay. </p>
                <p className="text-xl mb-12 text-black"> Families facing threats have the right to escalate the matter straight to the bank's Nodal Grievance head. If the bank fails to resolve the issue or stop the threats within 30 days. The family can file a formal complaint with the RBI RBI officer under the Integrated RBI officer Scheme. which holds the power to penalize the bank and award compensation to the family for mental agony. For more information on handling agents. You can read our guide on <Link href="/how-to-stop-recovery-agent-harassment" className="text-blue-600 font-bold hover:underline">how to stop agents threats</Link>. </p>

                <h3 id="unsecured-vs-secured" className="font-bold text-black text-2xl mb-4 scroll-mt-28">clean vs Secured Loan claims Rules</h3>
                <p className="text-xl mb-12 text-black"> The methodology of loan claims differs drastically based on the nature of the credit facility. The law treats clean and secured loans fully differently when the primary clients passes away. </p>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                  <h3 className="font-bold text-black text-xl mb-4">Clean Loans (own Loans. Credit Cards. Microfinance)</h3>
                  <p className="mb-4 text-black"> These loans are granted based on the clients's credit history and income. Without any pledge or asset backing. When the clients dies. The bank has no exact asset to seize. The bank must petition the legal heirs to settle the dues from the deceased's estate. If the estate is insufficient or non-existent. The debt dies with the clients. Agents often try to blur this line. Misleading heirs into believing that credit card debt transfers to a spouse automatically. This is by law false. If an heir has not inherited any assets. They should firmly inform the bank in writing that the estate is nil. Effectively closing the matter. </p>
                  <h3 className="font-bold text-black text-xl mb-4 mt-8">Secured Loans (Home Loans. Auto Loans. Loan Against home)</h3>
                  <p className="text-black"> Secured loans are backed by tangible pledge. If the clients dies and the loan EMIs stop. The bank retains the legal right to take takeover of the pledge (the house or the car) and sell it to recover the unpaid dues. The bank's charge on the home survives the death of the clients. Yet. Before steps with the seizure. The bank must give the legal heirs a fair opportunity to step into the shoes of the clients. Regularize the account. continue paying the EMIs to save the home. </p>
                  <p className="mt-4 text-black"> Many secured loans today are bundled with "Credit Life cover" or "Mortgage Redemption cover." This is a master cover policy that clears the entire unpaid loan balance in the event of the primary clients's death. Families must fast check the loan sanction letter and account statements to see if cover premiums were deducted. As the presence of this cover means the bank must claim the money from the firm. Leaving the home free and clear for the legal heirs. It is crucial to be proactive rather than wait to receive a <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-blue-600 font-bold hover:underline">legal notice for loan default</Link>. </p>
                </div>

                <div className="overflow-x-auto my-12">
                  <table className="min-w-full bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <thead className="bg-blue-900 text-white">
                      <tr>
                        <th className="py-4 px-6 text-left text-lg font-bold">Feature</th>
                        <th className="py-4 px-6 text-left text-lg font-bold">Unsecured Loans</th>
                        <th className="py-4 px-6 text-left text-lg font-bold">Secured Loans</th>
                      </tr>
                    </thead>
                    <tbody className="text-black">
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-6 font-semibold border-r border-gray-100">pledge Requirement</td>
                        <td className="py-4 px-6 border-r border-gray-100">None. Issued based on creditworthiness.</td>
                        <td className="py-4 px-6">Tangible asset (home. Vehicle) pledged.</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-6 font-semibold border-r border-gray-100">Primary claims Source After Death</td>
                        <td className="py-4 px-6 border-r border-gray-100">The general liquid assets/estate left behind.</td>
                        <td className="py-4 px-6">The exact pledged pledge. Followed by the general estate.</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-6 font-semibold border-r border-gray-100">Action on Zero Inherited Estate</td>
                        <td className="py-4 px-6 border-r border-gray-100">Bank must write off the debt as an unrecoverable loss.</td>
                        <td className="py-4 px-6">Bank will seize and auction the pledge to recover dues.</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-6 font-semibold border-r border-gray-100">Legal Heir risk</td>
                        <td className="py-4 px-6 border-r border-gray-100">Strictly limited to the value of inherited assets. No own risk.</td>
                        <td className="py-4 px-6">Heirs lose the asset if EMIs stop. No own risk for any shortfall after auction.</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-6 font-semibold border-r border-gray-100">Role of Loan cover</td>
                        <td className="py-4 px-6 border-r border-gray-100">Rarely covered. though some own loans have small group policies.</td>
                        <td className="py-4 px-6">Highly likely to be covered by Credit Life cover. which pays off the entire debt.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-6 font-semibold border-r border-gray-100">Bank's Coercive Power</td>
                        <td className="py-4 px-6 border-r border-gray-100">Minimal. Bank can only file a civil suit against the estate.</td>
                        <td className="py-4 px-6">High. Bank can invoke the SARFAESI Act to seize home without court action.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </section>

            <section>
              <h2 id="steps-to-stop-harassment" className="text-3xl font-bold text-black mb-6 scroll-mt-28">Steps to Stop Bank Harassment After Death</h2>
              
              <p className="text-xl mb-12 text-black"> When agents begin circling a grieving family. It is crucial to transition from a defensive. Emotional posture to an offensive. Documented. legal strategy. Taking control of the story stops threats in its tracks and forces the bank to adhere to legal procedures. </p>

                <div className="bg-red-50 p-10 rounded-3xl border-2 border-red-100 my-10 shadow-inner relative overflow-hidden">
                  <h3 className="font-bold text-red-900 mb-6 text-2xl ">Red Flags List: Signs of unlawful claims Actions</h3>
                  <ul className="space-y-4 text-red-800 text-lg font-medium">
                    <li className="flex items-start"> <span className="text-red-500 mr-3 text-2xl leading-none">⚠</span> <span><strong>Calling outside permissible hours:</strong> Any calls before 8 AM or after 7 PM are a violation of RBI guidelines.</span> </li>
                    <li className="flex items-start"> <span className="text-red-500 mr-3 text-2xl leading-none">⚠</span> <span><strong>Threatening Police Action:</strong> Threatening to file a police FIR or claiming that an arrest warrant has been issued against the family members for the deceased's debt.</span> </li>
                    <li className="flex items-start"> <span className="text-red-500 mr-3 text-2xl leading-none">⚠</span> <span><strong>Public Shaming:</strong> Contacting the deceased's former employer. Current neighbors. extended relatives to publicly humiliate the family into paying.</span> </li>
                    <li className="flex items-start"> <span className="text-red-500 mr-3 text-2xl leading-none">⚠</span> <span><strong>Using Abusive Language:</strong> Shouting, using profanity. employing real threaten tactics at the family's residence.</span> </li>
                    <li className="flex items-start"> <span className="text-red-500 mr-3 text-2xl leading-none">⚠</span> <span><strong>Refusing to Provide proof:</strong> Demanding money without providing a formal. Stamped statement of account or refusing to acknowledge the clients's death officially.</span> </li>
                    <li className="flex items-start"> <span className="text-red-500 mr-3 text-2xl leading-none">⚠</span> <span><strong>Forced Restructuring:</strong> Tricking a legal heir into signing a "restructuring pacts" or a blank cheque. which by law converts them from an heir into a primary clients/guarantor.</span> </li>
                  </ul>
                </div>

                <h3 className="font-bold text-blue-900 text-2xl uppercase mt-12 mb-6">Legal Process Map</h3>
                <div className="space-y-6">
                  <div className="flex items-center p-8 bg-blue-900 text-white rounded-3xl shadow-lg">
                    <span className="text-5xl font-bold mr-8 opacity-40 italic">01</span>
                    <div>
                      <p className="text-2xl font-bold ">Formal Intimation of Death</p>
                      <p className="text-blue-100 text-lg mt-2 font-light">Send a formal. Written intimation to the bank manager regarding the clients's demise. Attach a notarized copy of the Death letter via Registered Post with Acknowledgement Due (RPAD).</p>
                    </div>
                  </div>
                  <div className="flex items-center p-8 bg-blue-800 text-white rounded-3xl shadow-lg">
                    <span className="text-5xl font-bold mr-8 opacity-40 italic">02</span>
                    <div>
                      <p className="text-2xl font-bold ">Demand Complete proof</p>
                      <p className="text-blue-100 text-lg mt-2 font-light">Demand a complete. Up-to-date Statement of Account. A copy of the original Loan pacts. details of any linked Loan safety cover policies.</p>
                    </div>
                  </div>
                  <div className="flex items-center p-8 bg-blue-700 text-white rounded-3xl shadow-lg">
                    <span className="text-5xl font-bold mr-8 opacity-40 italic">03</span>
                    <div>
                      <p className="text-2xl font-bold ">Assess the Estate and risk</p>
                      <p className="text-blue-100 text-lg mt-2 font-light">Evaluate the exact value of the assets left behind. If the estate's value is zero or less than the debt. Prepare a formal legal reply stating that the legal heirs have inherited no assets to discharge the risk.</p>
                    </div>
                  </div>
                  <div className="flex items-center p-8 bg-blue-600 text-white rounded-3xl shadow-lg">
                    <span className="text-5xl font-bold mr-8 opacity-40 italic">04</span>
                    <div>
                      <p className="text-2xl font-bold ">Cease and Desist contact</p>
                      <p className="text-blue-100 text-lg mt-2 font-light">If agents continue to call. Inform them once that the matter is being handled in writing with the branch manager. Record the phone calls and demand their authorization letter.</p>
                    </div>
                  </div>
                  <div className="flex items-center p-8 bg-blue-500 text-white rounded-3xl shadow-lg">
                    <span className="text-5xl font-bold mr-8 opacity-40 italic">05</span>
                    <div>
                      <p className="text-2xl font-bold ">File a Banking RBI officer Complaint</p>
                      <p className="text-blue-100 text-lg mt-2 font-light">If the threats persists. File a complaint on the RBI's CMS portal against the exact bank for violating the Fair Practices Code and employing coercive claims tactics.</p>
                    </div>
                  </div>
                </div>
              </section>

            <section>
              <h2 id="understanding-sarfaesi" className="text-3xl font-bold text-black mb-6 scroll-mt-28">Understanding the SARFAESI Act and Legal Heirs</h2>
              
              <p className="text-xl mb-8 text-black"> The <a href="https://financialservices.gov.in/beta/en/sarfaesi-act-2002" rel="nofollow noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">Securitisation and Reconstruction of money Assets and Enforcement of Security rates (SARFAESI) Act of 2002</a> is a powerful weapon in the hands of secured creditors (banks and NBFCs). It allows them to recover their non-performing assets (NPAs) by attaching and auctioning home or trade homes without the need to file a lengthy civil suit in a standard court. To understand how accounts become NPAs. Read about <Link href="/understanding-90-day-loan-default-india" className="text-blue-600 font-bold hover:underline">grasp the 90-day loan default in India</Link>. </p>
              <p className="text-xl mb-12 text-black"> yet. The immense power granted by the SARFAESI Act comes with strict procedural prerequisites. When a clients dies. The bank cannot simply bulldoze its way into taking takeover of the house. The rights of the legal heirs must be formally recognized and respected throughout the legal process. </p>

                <h3 id="notice-under-13-2" className="font-bold text-black text-2xl mb-4 scroll-mt-28">Notice to Heirs Under Section 13(2)</h3>
                <p className="text-xl mb-8 text-black"> The initiation of SARFAESI steps begins with a Demand Notice under Section 13(2) of the Act. This notice gives the clients 60 days to clear the unpaid dues. Failing which the bank can take symbolic or real takeover of the home under Section 13(4). </p>
                <p className="text-xl mb-8 text-black"> A key legal nuance arises when the clients dies. Indian courts and Debt claims Tribunals (DRTs) have repeatedly and firmly ruled that a Section 13(2) notice issued in the name of a dead person is void ab initio (by law invalid from the very beginning). A dead person cannot be served a notice. Nor can they respond to it. </p>
                <p className="text-xl mb-8 text-black"> If the bank issues a 13(2) notice after the clients has passed away. The bank must identify all the legal heirs and issue fresh. Individual notices to each of them. The 60-day period begins only after the legal heirs have been validly served. If the bank fails to do this and proceeds to take takeover of the home based on a notice issued to a deceased individual. The entire SARFAESI steps is fundamentally flawed. Legal heirs can instantly challenge and quash such actions in the DRT. </p>
                <p className="text-xl mb-12 text-black"> Furthermore. If the clients dies after the 13(2) notice was served but before the bank takes takeover under 13(4). The bank is still by law obligated to bring the legal heirs on record and notify them of the subsequent steps. The heirs must be given the opportunity to exercise their right to redeem the mortgage (clear the dues and save the home) before it is auctioned. </p>

                <h3 id="challenging-valuation" className="font-bold text-black text-2xl mb-4 scroll-mt-28">Challenging the Bank's Valuation of Inherited Assets</h3>
                <p className="text-xl mb-8 text-black"> Even when SARFAESI steps are correctly initiated against the legal heirs. The bank does not have a free pass to sell the inherited home for a pittance. The bank is acting as a trustee of the home and is duty-bound to fetch the maximum possible market value to clear the debt and return any surplus to the heirs. </p>
                <p className="text-xl mb-8 text-black"> Legal heirs have a powerful remedy under Section 17 of the SARFAESI Act. which allows them to file a Securitisation Application (SA) before the Debt claims court (DRT) to challenge the bank's actions. One of the most common grounds for challenge is the deliberate undervaluation of the inherited asset. </p>
                <p className="text-xl mb-12 text-black"> Banks often set a very low "Reserve Price" (minimum bidding price) to ensure a quick sale. If legal heirs believe the home is worth significantly more. They can challenge this valuation. They should obtain an independent valuation report from a signed government-approved valuer and present it to the DRT. If the DRT finds that the bank is selling the home at a distress rate. It can stay the auction and order a fresh valuation. This ensures that the estate is not plundered. Protecting the money interests of the legal heirs who are entitled to the remaining equity in the home after the loan is settled. </p>
              </section>

            <section>
              <h2 id="freezing-salary-account" className="text-3xl font-bold text-black mb-6 scroll-mt-28">Can Banks Freeze the Deceased's Salary Account?</h2>
              
              <p className="text-xl mb-8 text-black"> Yes. Banks not only can but are by law required to freeze a deceased person's salary account. Savings account. all other bank accounts once they receive formal notification of the account holder's death. This is a standard operating procedure designed to prevent illegal transactions. Fraud. disputes among family members. </p>
              <p className="text-xl mb-8 text-black"> When a bank is informed of a customer's demise. They place a "deceased" freeze on the account. This fast stops all outward debit transactions. Including ATM withdrawals. UPI payments. standing instructions for EMIs or mutual fund SIPs. Yet. The RBI permits "pipeline flows" to continue. This means that if the deceased's employer transfers their final salary or closure into the account after their death. The bank will accept the credit. the funds cannot be withdrawn until the legal claim process is completed. </p>
              <p className="text-xl mb-8 text-black"> The process to access these frozen funds depends fully on how the account was structured: </p>
              <ol className="list-decimal pl-6 space-y-4 text-xl mb-8 text-black">
                <li><strong>Accounts with a Nominee:</strong> This is the most straightforward scenario. The nominee is considered a trustee of the funds. They must submit a formal claim form. The original death letter. their own KYC papers. The RBI mandates that banks must settle claims for accounts with a clear nomination within 15 days of receiving the complete proof. The nominee receives the funds. they are by law bound to distribute them to the rightful legal heirs according to succession laws.</li>
                <li><strong>Joint Accounts:</strong> If the account was held jointly with a "Survivor" or "Either or Survivor" mandate. The surviving account holder can simply submit the death letter and a request to remove the deceased person's name. They can then continue operating the account.</li>
                <li><strong>Accounts without a Nominee:</strong> This is where families face significant hurdles. If there is no nomination or joint holder. The bank will require extensive legal proof to establish who the rightful heirs are. For smaller balances (the threshold varies by bank. Often around ₹5 Lakhs). Banks may accept an indemnity bond and an affidavit from the legal heirs. For larger balances. The bank will insist on a formal Succession letter or a Letter of Administration issued by a competent civil court. A process that can take many months and involve considerable legal expense.</li>
              </ol>
              <p className="text-xl mb-12 text-black"> If the deceased had unpaid clean loans or credit card dues with the same bank where their salary account is held. The bank exercises a "Banker's Right of Lien and Set-Off." Before releasing the frozen funds to the nominee or legal heirs. The bank is by law entitled to deduct the unpaid loan amount from the account balance. Releasing only the surplus to the family. </p>
            </section>

            <section>
              <h2 id="success-stories" className="text-3xl font-bold text-black mb-6 scroll-mt-28">Client Experiences</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-center mb-4 text-yellow-400">
                       {[...Array(review.rating)].map((_, i) => (
                         <span key={i}>★</span>
                       ))}
                    </div>
                    <p className="text-black text-sm mb-6 italic">"{review.text}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold mr-3">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-black text-sm">{review.name}</p>
                        <p className="text-xs text-gray-500">{review.location} • {review.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="mt-16 p-8 bg-black text-white rounded-3xl text-center">
              <h2 className="text-3xl font-bold mb-6">Need Help with Estate Claims?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Don't face agents alone. Our legal experts can protect your rights and help you navigate complex claims safely.</p>
              <Link 
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-500 transition-colors"
              >
                Get Legal Support
              </Link>
            </div>

            <section>
              <h2 id="faqs" className="text-3xl font-bold text-black mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-6 mb-16">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h3 className="font-bold text-black mb-3">{faq.question}</h3>
                    <p className="text-black text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
            
          </article>

          <aside className="lg:w-1/5 w-full">
            <div className="sticky top-24">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img src="/default-user.svg" alt="Vikram Desai" className="w-full h-full object-cover"  width={96} height={96} />
                </div>
                <p className="font-bold text-xl text-black mb-1">Vikram Desai</p>
                <p className="text-blue-600 font-semibold text-sm mb-4">Senior Legal counsel</p>
                <p className="text-black text-sm leading-relaxed mb-6"> Vikram specializes in consumer safety and DRT litigation. With over a decade of experience fighting unlawful banking practices. He leads the charge at CredSettle to protect grieving families from predatory agents. </p>
                <Link href="/contact" className="bg-blue-900 text-white w-full py-3 rounded-full font-bold text-sm hover:bg-blue-800 transition-colors">
                  Consult Vikram
                </Link>
                <div className="mt-6 pt-6 border-t border-gray-100 w-full text-left">
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Published On</p>
                  <time dateTime={new Date().toISOString()} className="text-sm text-black font-medium">
                    {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </>
  );
}
