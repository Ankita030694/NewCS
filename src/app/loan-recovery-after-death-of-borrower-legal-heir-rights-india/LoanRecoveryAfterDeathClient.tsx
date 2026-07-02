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
      answer: 'No. Defaulting on a civil loan is not a criminal offense in India. Recovery agents have absolutely no police powers, cannot issue arrest warrants, and cannot authorize the arrest of any person. Any threat of jail time for an unpaid unsecured loan is a blatant lie and a punishable offense of criminal intimidation.'
    },
    {
      question: 'What happens if the inherited property is worth less than the outstanding home loan?',
      answer: 'If a property is auctioned by the bank and the sale proceeds are insufficient to cover the outstanding home loan balance, the legal heirs are not personally required to pay the shortfall from their own pockets. The bank can only attempt to recover the shortfall if the legal heirs have inherited other assets from the deceased. If there are no other inherited assets, the bank must write off the remaining debt.'
    },
    {
      question: 'Are credit card dues passed on to the spouse?',
      answer: 'No. Credit card debt is an unsecured personal loan. It does not automatically pass on to a surviving spouse unless the spouse was explicitly registered as a joint account holder. The bank must claim the dues from the deceased\'s estate, not the spouse\'s personal income.'
    },
    {
      question: 'What if the legal heirs do not inform the bank about the borrower\'s death?',
      answer: 'Failing to inform the bank is unwise. If EMIs bounce, the bank will classify the account as a Non-Performing Asset (NPA) and initiate aggressive recovery or legal action against the deceased. It is always better to formally notify the bank with a death certificate to halt penalty charges, trigger insurance claims, and force the bank to follow proper deceased-settlement protocols.'
    },
    {
      question: 'Does a nominee automatically become liable to pay the loan?',
      answer: 'No. A nominee in a bank account or mutual fund is merely a custodian or trustee of the assets; they are not the legal owner unless they are also the sole legal heir. Being a nominee to an asset does not make one liable for the deceased\'s liabilities. The liability rests on the legal heirs who ultimately inherit the estate.'
    },
    {
      question: 'Can the bank deduct loan EMIs from the deceased\'s frozen salary account?',
      answer: 'Yes. If the deceased had a loan and a savings/salary account with the same bank, the bank has a "Right of Set-Off." They can freeze the account upon death and legally adjust the available balance against the outstanding loan dues before releasing any remaining funds to the nominee or legal heirs.'
    },
    {
      question: 'How can legal heirs claim the surplus amount if the bank sells the property under SARFAESI?',
      answer: 'If the bank auctions the inherited property under the SARFAESI Act, their only right is to recover the outstanding loan amount, plus accumulated interest and legitimate auction expenses. Any surplus amount remaining from the sale must be returned to the legal heirs. The heirs should formally write to the bank demanding the auction account statement and the swift remittance of the surplus balance into their accounts.'
    }
  ];

  const reviews = [
    {
      name: "Meera Reddy",
      location: "Bangalore",
      rating: 5,
      text: "When my husband passed away, the bank agents started visiting our house and threatening me over his personal loan. The legal insights from CredSettle helped me understand my rights. I sent them a formal letter, and the harassment stopped entirely.",
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
                    Loan Recovery After Death
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
          
          <div className="lg:w-1/5 hidden lg:block">
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

          <article className="lg:w-3/5 w-full prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            
            <p className="text-black leading-relaxed text-2xl mb-16 font-bold border-l-4 border-blue-600 pl-8">
              When the tragedy of death strikes a family, the subsequent trauma inflicted by uninformed or malicious collection agencies only compounds the grief. Grieving widows, children, and dependent parents are routinely coerced into emptying their personal savings or signing new loan agreements under the false pretense that they are legally bound to clear the deceased's outstanding debts.
            </p>
            <p className="text-xl mb-12 text-black">
              This predatory behavior flourishes in the gap between banking regulations and public legal awareness. Families are frequently subjected to incessant calls, public humiliation, and threats of non-existent legal action. By exploiting emotional vulnerability and legal ignorance, these agencies extract payments that the law actually prohibits them from claiming directly from personal funds. The immediate aftermath of a death should be a time for healing and estate consolidation, not fighting off unlawful extortion by financial institutions. Understanding your legal rights is the ultimate shield against these exploitative tactics.
            </p>

            <section>
              <h2 id="does-debt-pass" className="text-3xl font-bold text-black mb-6 scroll-mt-28">Does Debt Pass to Legal Heirs in India?</h2>
              
              <p className="text-xl mb-8 text-black">
                A fundamental question that plagues grieving families is whether they are legally obligated to repay the debts left behind by a deceased relative. In India, the legal principle governing this scenario is unequivocally clear: a legal heir is not personally liable for the debts of the deceased. The liability to repay any outstanding loan does not automatically transfer to the spouse, children, or parents in their personal capacity. Instead, the debt is attached strictly to the "estate" of the deceased person.
              </p>
              <p className="text-xl mb-8 text-black">
                The "estate" comprises all the assets, properties, bank balances, mutual funds, and investments owned by the deceased at the time of their death. According to the laws of inheritance in India, including the <a href="https://legislative.gov.in/actsofparliamentfromtheyear/hindu-succession-act-1956" rel="nofollow" target="_blank" className="text-blue-600 hover:underline">Hindu Succession Act</a> and the <a href="https://legislative.gov.in/actsofparliamentfromtheyear/indian-succession-act-1925" rel="nofollow" target="_blank" className="text-blue-600 hover:underline">Indian Succession Act</a>, legal heirs inherit both the assets and the liabilities of the deceased, but with a critical caveat. The heirs are liable to repay the deceased's debts only to the extent of the value of the assets they have inherited.
              </p>
              <p className="text-xl mb-8 text-black">
                For instance, if a father passes away leaving behind a personal loan of ₹10 Lakhs, but the only asset he left behind is a bank account with ₹3 Lakhs, the legal heirs are only liable up to ₹3 Lakhs. The bank can legally claim those ₹3 Lakhs from the estate to settle part of the loan. However, the bank cannot force the son or daughter to pay the remaining ₹7 Lakhs out of their own pockets, their own salary, or their self-acquired properties. If the deceased left behind zero assets, the legal heirs have absolutely zero liability, and the bank must classify the unrecovered amount as a bad debt and write it off.
              </p>
              <p className="text-xl mb-12 text-black">
                The only major exception to this rule applies to co-borrowers and legal guarantors. If a legal heir or family member co-signed the loan agreement as a joint borrower, or stood as a guarantor for the loan, their legal status is distinct from that of a mere legal heir. In such cases, the contract of guarantee or the joint liability clause makes the surviving co-borrower or guarantor personally liable for the entire outstanding amount, regardless of the extent of the inherited estate. It is therefore vital for families to carefully review the original loan documents to ascertain their exact legal standing before making any payments or admissions of liability to recovery agents.
              </p>
            </section>

            <section>
              <h2 id="rights-against-harassment" className="text-3xl font-bold text-black mb-6 scroll-mt-28">Rights of Family Members Against Bank Harassment</h2>
              
              <p className="text-xl mb-8 text-black">
                The <a href="https://www.rbi.org.in/" rel="nofollow" target="_blank" className="text-blue-600 hover:underline">Reserve Bank of India (RBI)</a> and the Indian judicial system have laid down stringent frameworks to protect citizens from strong-arm recovery tactics. Unfortunately, the decentralized nature of third-party recovery agencies often leads to rampant violations of these rights. Family members must recognize that they possess absolute legal rights against coercion, intimidation, and unauthorized debt collection practices. 
              </p>
              <p className="text-xl mb-12 text-black">
                The relationship between a bank and a borrower's family is governed by the Fair Practices Code, which dictates that banks must approach debt recovery with civility, respecting the privacy and dignity of the individuals involved. Even if a legal heir has inherited massive assets and is liable to pay the debt from that estate, the bank cannot resort to extra-judicial means or muscle power to extract those funds.
              </p>

                <h3 id="rbi-guidelines" className="font-bold text-black text-2xl mb-4 scroll-mt-28">RBI Guidelines on Deceased Borrower Accounts</h3>
                <p className="text-xl mb-8 text-black">
                  The Reserve Bank of India strictly regulates how banks and their agents must conduct themselves, especially when dealing with the accounts of deceased borrowers. The RBI mandates that banks must adopt a compassionate and reasonable approach rather than treating grieving families as deliberate defaulters.
                </p>
                <ul className="space-y-4 text-xl mb-8 text-black">
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-3 bg-blue-600 rounded-full mr-4 flex-shrink-0"></span>
                    <span>The RBI has explicitly prohibited banks and their recovery agents from resorting to intimidation, verbal abuse, physical threats, or any form of harassment. Agents are strictly forbidden from contacting family members, neighbors, or employers at unearthly hours.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-3 bg-blue-600 rounded-full mr-4 flex-shrink-0"></span>
                    <span>Telephonic contact must be restricted to standard business hours, typically between 8:00 AM and 7:00 PM.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-3 bg-blue-600 rounded-full mr-4 flex-shrink-0"></span>
                    <span>Furthermore, banks are barred from making false threats of arrest or police action, as civil debt recovery does not fall under the purview of criminal law unless a specific fraud was committed.</span>
                  </li>
                </ul>
                <p className="text-xl mb-8 text-black">
                  Secondly, the RBI mandates that banks must have a simplified, hassle-free procedure for the settlement of deceased individuals' accounts. This includes a clear, time-bound mechanism for returning original property documents to the legal heirs once a secured loan has been fully settled. In the past, banks notoriously withheld property papers for months, demanding complex successions certificates even for small amounts. Current guidelines stipulate that banks must release these documents within a specific timeframe (usually 15 to 30 days) after the full repayment is made by the legal heirs, failing which the bank is liable to pay a daily penalty for the delay.
                </p>
                <p className="text-xl mb-12 text-black">
                  Families facing harassment have the right to escalate the matter directly to the bank's Nodal Grievance Officer. If the bank fails to resolve the issue or stop the harassment within 30 days, the family can file a formal complaint with the RBI Ombudsman under the Integrated Ombudsman Scheme, which holds the power to penalize the bank and award compensation to the family for mental agony. For more information on handling recovery agents, you can read our guide on <Link href="/how-to-stop-recovery-agent-harassment" className="text-blue-600 font-bold hover:underline">how to stop recovery agent harassment</Link>.
                </p>

                <h3 id="unsecured-vs-secured" className="font-bold text-black text-2xl mb-4 scroll-mt-28">Unsecured vs Secured Loan Recovery Rules</h3>
                <p className="text-xl mb-12 text-black">
                  The methodology of loan recovery differs drastically based on the nature of the credit facility. The law treats unsecured and secured loans entirely differently when the primary borrower passes away.
                </p>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                  <h4 className="font-bold text-black text-xl mb-4">Unsecured Loans (Personal Loans, Credit Cards, Microfinance)</h4>
                  <p className="mb-4 text-black">
                    These loans are granted based on the borrower's credit history and income, without any collateral or asset backing. When the borrower dies, the bank has no specific asset to seize. The bank must petition the legal heirs to settle the dues from the deceased's estate. If the estate is insufficient or non-existent, the debt dies with the borrower. Recovery agents often try to blur this line, misleading heirs into believing that credit card debt transfers to a spouse automatically. This is legally false. If an heir has not inherited any assets, they should firmly inform the bank in writing that the estate is nil, effectively closing the matter.
                  </p>
                  <h4 className="font-bold text-black text-xl mb-4 mt-8">Secured Loans (Home Loans, Auto Loans, Loan Against Property)</h4>
                  <p className="text-black">
                    Secured loans are backed by tangible collateral. If the borrower dies and the loan EMIs stop, the bank retains the legal right to take possession of the collateral (the house or the car) and sell it to recover the outstanding dues. The bank's charge on the property survives the death of the borrower. However, before proceeding with the seizure, the bank must give the legal heirs a fair opportunity to step into the shoes of the borrower, regularize the account, and continue paying the EMIs to save the property. 
                  </p>
                  <p className="mt-4 text-black">
                    Many secured loans today are bundled with "Credit Life Insurance" or "Mortgage Redemption Insurance." This is a master insurance policy that clears the entire outstanding loan balance in the event of the primary borrower's death. Families must immediately check the loan sanction letter and account statements to see if insurance premiums were deducted, as the presence of this insurance means the bank must claim the money from the insurer, leaving the property free and clear for the legal heirs. It is crucial to be proactive rather than wait to receive a <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-blue-600 font-bold hover:underline">legal notice for loan default</Link>.
                  </p>
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
                        <td className="py-4 px-6 font-semibold border-r border-gray-100">Collateral Requirement</td>
                        <td className="py-4 px-6 border-r border-gray-100">None. Issued based on creditworthiness.</td>
                        <td className="py-4 px-6">Tangible asset (property, vehicle) pledged.</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-6 font-semibold border-r border-gray-100">Primary Recovery Source After Death</td>
                        <td className="py-4 px-6 border-r border-gray-100">The general liquid assets/estate left behind.</td>
                        <td className="py-4 px-6">The specific pledged collateral, followed by the general estate.</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-6 font-semibold border-r border-gray-100">Action on Zero Inherited Estate</td>
                        <td className="py-4 px-6 border-r border-gray-100">Bank must write off the debt as an unrecoverable loss.</td>
                        <td className="py-4 px-6">Bank will seize and auction the collateral to recover dues.</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-6 font-semibold border-r border-gray-100">Legal Heir Liability</td>
                        <td className="py-4 px-6 border-r border-gray-100">Strictly limited to the value of inherited assets. No personal liability.</td>
                        <td className="py-4 px-6">Heirs lose the asset if EMIs stop. No personal liability for any shortfall after auction.</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-6 font-semibold border-r border-gray-100">Role of Loan Insurance</td>
                        <td className="py-4 px-6 border-r border-gray-100">Rarely covered, though some personal loans have small group policies.</td>
                        <td className="py-4 px-6">Highly likely to be covered by Credit Life Insurance, which pays off the entire debt.</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-6 font-semibold border-r border-gray-100">Bank's Coercive Power</td>
                        <td className="py-4 px-6 border-r border-gray-100">Minimal. Bank can only file a civil suit against the estate.</td>
                        <td className="py-4 px-6">High. Bank can invoke the SARFAESI Act to seize property without court intervention.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </section>

            <section>
              <h2 id="steps-to-stop-harassment" className="text-3xl font-bold text-black mb-6 scroll-mt-28">Steps to Stop Bank Harassment After Death</h2>
              
              <p className="text-xl mb-12 text-black">
                When recovery agents begin circling a grieving family, it is crucial to transition from a defensive, emotional posture to an offensive, documented, and legal strategy. Taking control of the narrative stops harassment in its tracks and forces the bank to adhere to statutory procedures. 
              </p>

                <div className="bg-red-50 p-10 rounded-3xl border-2 border-red-100 my-10 shadow-inner relative overflow-hidden">
                  <h4 className="font-bold text-red-900 mb-6 text-2xl ">Red Flags List: Signs of Illegal Recovery Actions</h4>
                  <ul className="space-y-4 text-red-800 text-lg font-medium">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 text-2xl leading-none">⚠</span>
                      <span><strong>Calling outside permissible hours:</strong> Any calls before 8 AM or after 7 PM are a violation of RBI guidelines.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 text-2xl leading-none">⚠</span>
                      <span><strong>Threatening Police Action:</strong> Threatening to file a police FIR or claiming that an arrest warrant has been issued against the family members for the deceased's debt.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 text-2xl leading-none">⚠</span>
                      <span><strong>Public Shaming:</strong> Contacting the deceased's former employer, current neighbors, or extended relatives to publicly humiliate the family into paying.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 text-2xl leading-none">⚠</span>
                      <span><strong>Using Abusive Language:</strong> Shouting, using profanity, or employing physical intimidation tactics at the family's residence.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 text-2xl leading-none">⚠</span>
                      <span><strong>Refusing to Provide Documentation:</strong> Demanding money without providing a formal, stamped statement of account or refusing to acknowledge the borrower's death officially.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 text-2xl leading-none">⚠</span>
                      <span><strong>Forced Restructuring:</strong> Tricking a legal heir into signing a "restructuring agreement" or a blank cheque, which legally converts them from an heir into a primary borrower/guarantor.</span>
                    </li>
                  </ul>
                </div>

                <h4 className="font-bold text-blue-900 text-2xl uppercase mt-12 mb-6">Legal Process Map</h4>
                <div className="space-y-6">
                  <div className="flex items-center p-8 bg-blue-900 text-white rounded-3xl shadow-lg">
                    <span className="text-5xl font-bold mr-8 opacity-40 italic">01</span>
                    <div>
                      <p className="text-2xl font-bold ">Formal Intimation of Death</p>
                      <p className="text-blue-100 text-lg mt-2 font-light">Send a formal, written intimation to the bank manager regarding the borrower's demise. Attach a notarized copy of the Death Certificate via Registered Post with Acknowledgement Due (RPAD).</p>
                    </div>
                  </div>
                  <div className="flex items-center p-8 bg-blue-800 text-white rounded-3xl shadow-lg">
                    <span className="text-5xl font-bold mr-8 opacity-40 italic">02</span>
                    <div>
                      <p className="text-2xl font-bold ">Demand Complete Documentation</p>
                      <p className="text-blue-100 text-lg mt-2 font-light">Demand a complete, up-to-date Statement of Account, a copy of the original Loan Agreement, and details of any linked Loan Protection Insurance policies.</p>
                    </div>
                  </div>
                  <div className="flex items-center p-8 bg-blue-700 text-white rounded-3xl shadow-lg">
                    <span className="text-5xl font-bold mr-8 opacity-40 italic">03</span>
                    <div>
                      <p className="text-2xl font-bold ">Assess the Estate and Liability</p>
                      <p className="text-blue-100 text-lg mt-2 font-light">Evaluate the exact value of the assets left behind. If the estate's value is zero or less than the debt, prepare a formal legal reply stating that the legal heirs have inherited no assets to discharge the liability.</p>
                    </div>
                  </div>
                  <div className="flex items-center p-8 bg-blue-600 text-white rounded-3xl shadow-lg">
                    <span className="text-5xl font-bold mr-8 opacity-40 italic">04</span>
                    <div>
                      <p className="text-2xl font-bold ">Cease and Desist Communication</p>
                      <p className="text-blue-100 text-lg mt-2 font-light">If recovery agents continue to call, inform them once that the matter is being handled in writing with the branch manager. Record the phone calls and demand their authorization letter.</p>
                    </div>
                  </div>
                  <div className="flex items-center p-8 bg-blue-500 text-white rounded-3xl shadow-lg">
                    <span className="text-5xl font-bold mr-8 opacity-40 italic">05</span>
                    <div>
                      <p className="text-2xl font-bold ">File a Banking Ombudsman Complaint</p>
                      <p className="text-blue-100 text-lg mt-2 font-light">If the harassment persists, file a complaint on the RBI's CMS portal against the specific bank for violating the Fair Practices Code and employing coercive recovery tactics.</p>
                    </div>
                  </div>
                </div>
              </section>

            <section>
              <h2 id="understanding-sarfaesi" className="text-3xl font-bold text-black mb-6 scroll-mt-28">Understanding the SARFAESI Act and Legal Heirs</h2>
              
              <p className="text-xl mb-8 text-black">
                The <a href="https://financialservices.gov.in/beta/en/sarfaesi-act-2002" rel="nofollow" target="_blank" className="text-blue-600 hover:underline">Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act of 2002</a> is a powerful weapon in the hands of secured creditors (banks and NBFCs). It allows them to recover their non-performing assets (NPAs) by attaching and auctioning residential or commercial properties without the need to file a lengthy civil suit in a standard court. To understand how accounts become NPAs, read about <Link href="/understanding-90-day-loan-default-india" className="text-blue-600 font-bold hover:underline">understanding the 90-day loan default in India</Link>.
              </p>
              <p className="text-xl mb-12 text-black">
                However, the immense power granted by the SARFAESI Act comes with strict procedural prerequisites. When a borrower dies, the bank cannot simply bulldoze its way into taking possession of the house. The rights of the legal heirs must be formally recognized and respected throughout the statutory process.
              </p>

                <h3 id="notice-under-13-2" className="font-bold text-black text-2xl mb-4 scroll-mt-28">Notice to Heirs Under Section 13(2)</h3>
                <p className="text-xl mb-8 text-black">
                  The initiation of SARFAESI proceedings begins with a Demand Notice under Section 13(2) of the Act. This notice gives the borrower 60 days to clear the outstanding dues, failing which the bank can take symbolic or physical possession of the property under Section 13(4).
                </p>
                <p className="text-xl mb-8 text-black">
                  A critical legal nuance arises when the borrower dies. Indian courts and Debt Recovery Tribunals (DRTs) have repeatedly and firmly ruled that a Section 13(2) notice issued in the name of a dead person is void ab initio (legally invalid from the very beginning). A dead person cannot be served a notice, nor can they respond to it. 
                </p>
                <p className="text-xl mb-8 text-black">
                  If the bank issues a 13(2) notice after the borrower has passed away, the bank must identify all the legal heirs and issue fresh, individual notices to each of them. The 60-day period begins only after the legal heirs have been validly served. If the bank fails to do this and proceeds to take possession of the property based on a notice issued to a deceased individual, the entire SARFAESI proceeding is fundamentally flawed. Legal heirs can instantly challenge and quash such actions in the DRT.
                </p>
                <p className="text-xl mb-12 text-black">
                  Furthermore, if the borrower dies after the 13(2) notice was served but before the bank takes possession under 13(4), the bank is still legally obligated to bring the legal heirs on record and notify them of the subsequent steps. The heirs must be given the opportunity to exercise their right to redeem the mortgage (clear the dues and save the property) before it is auctioned.
                </p>

                <h3 id="challenging-valuation" className="font-bold text-black text-2xl mb-4 scroll-mt-28">Challenging the Bank's Valuation of Inherited Assets</h3>
                <p className="text-xl mb-8 text-black">
                  Even when SARFAESI proceedings are correctly initiated against the legal heirs, the bank does not have a free pass to sell the inherited property for a pittance. The bank is acting as a trustee of the property and is duty-bound to fetch the maximum possible market value to clear the debt and return any surplus to the heirs.
                </p>
                <p className="text-xl mb-8 text-black">
                  Legal heirs have a powerful remedy under Section 17 of the SARFAESI Act, which allows them to file a Securitisation Application (SA) before the Debt Recovery Tribunal (DRT) to challenge the bank's actions. One of the most common grounds for challenge is the deliberate undervaluation of the inherited asset. 
                </p>
                <p className="text-xl mb-12 text-black">
                  Banks often set a very low "Reserve Price" (minimum bidding price) to ensure a quick sale. If legal heirs believe the property is worth significantly more, they can challenge this valuation. They should obtain an independent valuation report from a certified government-approved valuer and present it to the DRT. If the DRT finds that the bank is selling the property at a distress rate, it can stay the auction and order a fresh valuation. This ensures that the estate is not plundered, protecting the financial interests of the legal heirs who are entitled to the remaining equity in the property after the loan is settled.
                </p>
              </section>

            <section>
              <h2 id="freezing-salary-account" className="text-3xl font-bold text-black mb-6 scroll-mt-28">Can Banks Freeze the Deceased's Salary Account?</h2>
              
              <p className="text-xl mb-8 text-black">
                Yes, banks not only can but are legally required to freeze a deceased person's salary account, savings account, and all other bank accounts once they receive formal notification of the account holder's death. This is a standard operating procedure designed to prevent unauthorized transactions, fraud, or disputes among family members.
              </p>
              <p className="text-xl mb-8 text-black">
                When a bank is informed of a customer's demise, they place a "deceased" freeze on the account. This immediately stops all outward debit transactions, including ATM withdrawals, UPI payments, and standing instructions for EMIs or mutual fund SIPs. However, the RBI permits "pipeline flows" to continue. This means that if the deceased's employer transfers their final salary or settlement into the account after their death, the bank will accept the credit, but the funds cannot be withdrawn until the legal claim process is completed.
              </p>
              <p className="text-xl mb-8 text-black">
                The process to access these frozen funds depends entirely on how the account was structured:
              </p>
              <ol className="list-decimal pl-6 space-y-4 text-xl mb-8 text-black">
                <li><strong>Accounts with a Nominee:</strong> This is the most straightforward scenario. The nominee is considered a trustee of the funds. They must submit a formal claim form, the original death certificate, and their own KYC documents. The RBI mandates that banks must settle claims for accounts with a clear nomination within 15 days of receiving the complete documentation. The nominee receives the funds, but they are legally bound to distribute them to the rightful legal heirs according to succession laws.</li>
                <li><strong>Joint Accounts:</strong> If the account was held jointly with a "Survivor" or "Either or Survivor" mandate, the surviving account holder can simply submit the death certificate and a request to remove the deceased person's name. They can then continue operating the account.</li>
                <li><strong>Accounts without a Nominee:</strong> This is where families face significant hurdles. If there is no nomination or joint holder, the bank will require extensive legal documentation to establish who the rightful heirs are. For smaller balances (the threshold varies by bank, often around ₹5 Lakhs), banks may accept an indemnity bond and an affidavit from the legal heirs. For larger balances, the bank will insist on a formal Succession Certificate or a Letter of Administration issued by a competent civil court, a process that can take many months and involve considerable legal expense.</li>
              </ol>
              <p className="text-xl mb-12 text-black">
                If the deceased had outstanding unsecured loans or credit card dues with the same bank where their salary account is held, the bank exercises a "Banker's Right of Lien and Set-Off." Before releasing the frozen funds to the nominee or legal heirs, the bank is legally entitled to deduct the outstanding loan amount from the account balance, releasing only the surplus to the family.
              </p>
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
                        <h4 className="font-bold text-black text-sm">{review.name}</h4>
                        <p className="text-xs text-gray-500">{review.location} • {review.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="mt-16 p-8 bg-black text-white rounded-3xl text-center">
              <h2 className="text-3xl font-bold mb-6">Need Help with Estate Claims?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Don't face recovery agents alone. Our legal experts can protect your rights and help you navigate complex claims safely.</p>
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
                  <img src="/default-user.svg" alt="Vikram Desai" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-xl text-black mb-1">Vikram Desai</h3>
                <p className="text-blue-600 font-semibold text-sm mb-4">Senior Legal Advocate</p>
                <p className="text-black text-sm leading-relaxed mb-6">
                  Vikram specializes in consumer protection and DRT litigation. With over a decade of experience fighting illegal banking practices, he leads the charge at CredSettle to protect grieving families from predatory recovery agents.
                </p>
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
