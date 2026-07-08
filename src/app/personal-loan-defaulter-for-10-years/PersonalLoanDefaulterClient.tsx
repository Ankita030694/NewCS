'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function PersonalLoanDefaulterClient() {
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
    { id: 'immediate-vs-later', label: 'What Happens Immediately vs. 10 Years Later' },
    { id: 'does-default-erase-debt', label: 'Does a 10-Year Default Erase Your Debt?' },
    { id: 'can-bank-file-case', label: 'Can the Bank File a Case After 10 Years?' },
    { id: 'cibil-impact', label: 'Impact on CIBIL Score Over a Decade' },
    { id: 'debt-settlement-decade', label: 'Debt Settlement After a Decade' },
    { id: 'faqs', label: 'Frequently Asked Questions' }
  ];

  const faqs = [
    {
      question: 'Will my 10 year old personal loan default automatically disappear from CIBIL?',
      answer: 'No, a default does not automatically disappear from your CIBIL report after ten years. While the impact of the default on your overall score diminishes significantly over time, the account will remain in the written off or settled category until it is formally resolved with a No Objection Certificate.'
    },
    {
      question: 'Can recovery agents harass me for a debt that is 10 years old?',
      answer: 'Recovery agents are strictly prohibited by RBI guidelines from harassing borrowers regardless of the age of the debt. If a debt is beyond the limitation period of three years, you have strong legal grounds to stop their actions by filing a formal police complaint or notifying the banking ombudsman.'
    },
    {
      question: 'Is it true that making a small payment restarts the limitation period?',
      answer: 'Yes. According to Section 18 and Section 19 of the Limitation Act of 1963, if you acknowledge the debt in writing or make a partial payment towards the outstanding amount, the three year limitation period is legally restarted from the date of that acknowledgment or payment.'
    },
    {
      question: 'Can the bank seize my property for an unsecured personal loan default after ten years?',
      answer: 'For an unsecured personal loan, banks cannot directly seize your property using the SARFAESI Act. They must file a civil suit and obtain a court decree. If the debt is over ten years old and time barred, they cannot legally obtain this decree unless the limitation period was reset.'
    },
    {
      question: 'Should I ignore legal notices for a 10 year old personal loan?',
      answer: 'You should never completely ignore a legal notice. Instead, consult a legal professional to draft a formal response pointing out that the debt is time barred under the Limitation Act. Ignoring it completely might result in an ex parte judgment if the bank fraudulently claims the limitation was reset.'
    },
    {
      question: 'How do I negotiate a settlement for a very old personal loan?',
      answer: 'To negotiate a settlement for an old loan, you must assert your knowledge of the time barred status of the debt. Offer a very small fraction of the principal amount as a lump sum payment to close the account formally. Professional debt resolution services can assist in securing waivers up to ninety percent.'
    },
    {
      question: 'What is the difference between a written off loan and a waived off loan?',
      answer: 'A written off loan is a purely internal accounting measure where the bank removes the non performing asset from its balance sheet, but your legal obligation to pay remains intact. A waived off loan means the bank has legally forgiven the debt and you no longer owe them the money.'
    }
  ];

  const reviews = [
    {
      name: "Rahul Verma",
      location: "Delhi",
      date: "May 2026",
      rating: 5,
      text: "I was receiving calls from random agencies for a personal loan I defaulted on back in 2014. The constant threats ruined my peace of mind. The legal team helped me draft a proper response citing the Limitation Act. The harassment stopped immediately, and we settled the debt for 10% of the demanded amount."
    },
    {
      name: "Sneha Patel",
      location: "Mumbai",
      date: "April 2026",
      rating: 5,
      text: "I didn't realize a 9-year-old default would block my home loan application. My bank insisted the debt was still active despite no contact for years. CredSettle guided me through the negotiation, and I secured my NOC within weeks without paying the ridiculous compound interest they initially demanded."
    },
    {
      name: "Amit Desai",
      location: "Pune",
      date: "June 2026",
      rating: 5,
      text: "A recovery agent tricked me into making a Rs. 500 payment, which I later learned reset the limitation period on an 11-year-old loan. I was terrified. The advocates stepped in, took over all communication, and managed to negotiate a highly favorable settlement before the bank could file a suit."
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
                    Personal Loan Defaulter for 10 Years
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
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Personal Loan Defaulter for 10 Years: The Complete Legal & Financial Reality</h1>

            <section className="mb-10 p-6 bg-blue-50 border border-blue-100 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold text-blue-900 mb-3">TL;DR (Summary)</h2>
              <ul className="list-disc pl-5 text-base text-gray-800 space-y-2">
                <li><strong>The Reality:</strong> In India, a staggering number of borrowers believe that avoiding repayment for an extended period magically erases their liability, but the legal reality of being a personal loan defaulter for 10 years is far more complex. While a debt may technically become time barred after 3 years under the Limitation Act of 1963, banks can still use sophisticated strategies like tricking you into a tiny payment to legally resurrect your liability a decade later.</li>
                <li><strong>The Limitation Act:</strong> Unsecured debts generally become time barred after three years, preventing banks from filing fresh civil recovery suits.</li>
                <li><strong>The Trap:</strong> Any written acknowledgment or partial payment restarts the three year clock, making you fully liable again.</li>
                <li><strong>The Impact:</strong> A ten year default will remain on your internal banking records indefinitely, blocking loans from that specific institution forever.</li>
                <li><strong>The Solution:</strong> You can negotiate an aggressive settlement on old debts by leveraging your knowledge of the time barred status to close the account completely.</li>
              </ul>
            </section>

            <section>
              <h2 id="immediate-vs-later" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-28">What Happens Immediately vs. 10 Years Later</h2>
              <div className="text-gray-700 leading-relaxed text-base mb-16 space-y-10 opacity-90 border-l-4 border-blue-600 pl-8">
                <p>
                  In India, a staggering number of borrowers believe that avoiding repayment for an extended period magically erases their liability, but the legal reality of being a personal loan defaulter for 10 years is far more complex. While a debt may technically become time barred after 3 years under the Limitation Act of 1963, banks can still use sophisticated strategies like tricking you into a tiny payment to legally resurrect your liability a decade later. When you first miss an Equated Monthly Installment for your unsecured personal loan, the banking machinery initiates an automated and highly aggressive sequence of recovery protocols. Understanding this timeline is absolutely crucial for protecting your financial future and navigating the immense psychological pressure applied by financial institutions.
                </p>
                <p>
                  Many borrowers assume that the intensity of recovery efforts remains constant. This is a dangerous misconception. The reality is that the bank alters its legal strategies, accounting classifications, and negotiation willingness as the debt ages from days into years. What the bank can legally do in the first year of default is vastly different from what it can execute in the tenth year of default. 
                </p>
              </div>

              <h3 id="first-90-days" className="text-xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">The First 90 Days: NPA Classification</h3>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  The initial ninety days of default represent the most intense period of communication. During the first thirty days, your account is classified as Special Mention Account Zero (SMA 0). The bank primarily relies on automated text messages, emails, and phone calls from their internal customer service departments reminding you to clear the overdue amount to avoid late fees. At this stage, the bank genuinely believes the missed payment is an oversight or a temporary liquidity issue.
                </p>
                <p>
                  If you fail to pay by the sixtieth day, the account moves to Special Mention Account One (SMA 1) and Special Mention Account Two (SMA 2) classifications. The tone of communication becomes distinctly aggressive. Telecallers will explicitly warn you about the impending damage to your credit score. Once the ninety day mark is breached without a single payment, the Reserve Bank of India mandates that the bank classify your loan as a Non Performing Asset. This is a critical legal and financial milestone. The bank must now set aside capital provisions for the anticipated loss, directly impacting their profitability. It is at this exact moment that the bank officially recognizes you as a serious defaulter and prepares to deploy third party recovery agencies.
                </p>
              </div>

              <h3 id="year-1-to-3" className="text-xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Year 1 to 3: Aggressive Recovery and Legal Notices</h3>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  From the moment an account becomes a Non Performing Asset until the third anniversary of the default, you are in the high risk zone for litigation. The bank will assign your case to external collection agencies whose primary mandate is to recover the funds through relentless psychological pressure. These agents operate on high commission structures and often ignore regulatory boundaries. You will experience frequent home visits, office visits, and incessant phone calls demanding full repayment of the inflated balance, which now includes compounded penal interest and legal charges.
                </p>
                <p>
                  Simultaneously, the bank's legal department will initiate a barrage of demand notices. These notices serve two purposes: they act as a severe intimidation tactic, and they establish a documented paper trail proving the bank attempted to recover the funds. Within this three year window, the bank possesses the unhindered legal right to file a civil suit for the recovery of money under Order 37 of the Civil Procedure Code. If you provided blank cheques as security during the loan disbursement process, the bank might present them for clearing. When the cheques inevitably bounce due to insufficient funds, the bank will quickly initiate criminal proceedings against you under Section 138 of the Negotiable Instruments Act. This period requires utmost vigilance and immediate legal consultation if a court summons is received.
                </p>
              </div>

              <h3 id="year-4-to-10" className="text-xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Year 4 to 10: The Statute of Limitations Effect</h3>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Once the default crosses the three year threshold from the date of the last payment or the date of the loan maturity, a monumental shift occurs in the legal landscape. According to the Limitation Act of 1963, the debt officially becomes time barred. This means the bank permanently loses its legal remedy to file a fresh civil lawsuit to force you to repay the outstanding money. The courts will summarily dismiss any new civil recovery suit filed by the bank for a time barred debt.
                </p>
                <p>
                  During years four through ten, the aggressive home visits and relentless phone calls usually subside completely. The bank has likely written off the loan from its active balance sheet to claim tax benefits. However, this does not mean the bank has forgotten you. They will sporadically sell portfolios of old, written off debts to Asset Reconstruction Companies at massive discounts. You might suddenly receive a call in year seven from a completely unknown agency claiming you owe them money. Their only tactic at this stage is psychological manipulation, hoping you are ignorant of your legal rights regarding time barred debts. They will try to trick you into making a small token payment or replying to an email acknowledging the debt, which brings us to the most dangerous legal trap borrowers face.
                </p>
              </div>
            </section>

            <section>
              <h2 id="does-default-erase-debt" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-28">Does a 10-Year Default Erase Your Debt?</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  The most pervasive myth in the Indian financial sector is the belief that ignoring a debt for a decade automatically erases it from existence. This fundamental misunderstanding of the law has led countless individuals into disastrous financial consequences. You must clearly differentiate between the loss of legal remedy and the extinguishment of the actual liability. The debt itself never legally expires.
                </p>
              </div>

              <h3 id="written-off-vs-waived" className="text-xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">The Written Off vs. Waived Off Myth</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mb-12">
                <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
                  <h4 className="font-bold text-red-900 text-lg mb-4">Myth: A Written Off Account Means the Debt is Forgiven</h4>
                  <p className="text-gray-800 text-base">
                    Many borrowers check their credit reports, see the status marked as Written Off, and celebrate under the false assumption that the bank has forgiven the loan. They believe they are completely free from the financial obligation and can resume borrowing normally.
                  </p>
                </div>
                <div className="bg-green-50 p-8 rounded-2xl border border-green-200">
                  <h4 className="font-bold text-green-900 text-lg mb-4">Fact: A Write Off is an Internal Accounting Procedure</h4>
                  <p className="text-gray-800 text-base">
                    A write off simply means the bank has recognized the loan as a total loss on its balance sheet for tax and regulatory purposes. It does not extinguish your legal obligation to repay the money. The bank retains the absolute right to recover the written off amount indefinitely, using non judicial methods. A debt is only forgiven when the bank explicitly issues a No Objection Certificate stating the account is Closed or Waived Off.
                  </p>
                </div>
              </div>

              <h3 id="time-barred-rule" className="text-xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">The 3-Year Time-Barred Debt Rule (Limitation Act)</h3>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  The Limitation Act of 1963 is the most critical piece of legislation protecting borrowers from perpetual legal harassment. The law stipulates that a creditor has a strict window of three years to initiate civil litigation for the recovery of a debt. The clock starts ticking from the date the cause of action arises, which is typically the date of your last payment, the date you defaulted on the EMI, or the maturity date of the loan contract.
                </p>
                <p>
                  If the bank fails to file a lawsuit within this precise three year period, the debt becomes legally time barred. The courts operate on the principle that the law assists those who are vigilant about their rights, not those who sleep over them. Consequently, if a bank attempts to file a civil recovery suit against you for a ten year old personal loan, the judge is legally obligated to dismiss the suit at the preliminary hearing. This powerful statute ensures that you do not live under the perpetual threat of civil litigation for mistakes made a decade ago.
                </p>
                <p>
                  However, it is paramount to understand that the Limitation Act only bars the legal remedy, it does not extinguish the underlying right of the bank to the money. The bank cannot sue you, but they can still legally ask you for the money through phone calls and letters. Furthermore, if the bank holds any of your funds in other accounts due to a banker's lien or Right of Set Off, they can legally appropriate those funds to offset the time barred debt. This is why you must maintain immense caution when dealing with an institution where you have an ancient default.
                </p>
              </div>
            </section>

            <section>
              <h2 id="can-bank-file-case" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-28">Can the Bank File a Case After 10 Years?</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Generally, the answer is no. A bank cannot successfully file a civil suit for a ten year old default because of the strict protections afforded by the Limitation Act. However, banks employ highly skilled legal teams who are experts at finding exceptions to the rule. They understand that most borrowers are completely unaware of their rights and will inadvertently provide the bank with the exact evidence needed to bypass the limitation period. Understanding <Link href="/can-bank-file-case-for-personal-loan" className="text-blue-600 font-bold hover:underline">when a bank can file a case for a personal loan</Link> is essential knowledge for anyone carrying old debt.
                </p>
              </div>

              <h3 id="exceptions-to-limitation" className="text-xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Exceptions to the Limitation Act</h3>
              
              <div className="my-12">
                <h4 className="font-bold text-blue-900 text-lg mb-8 border-b-2 border-blue-100 pb-2">The Legal Process Map: How the Clock Restarts</h4>
                
                <div className="flex mb-8">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">A</div>
                    <div className="w-1 bg-blue-200 h-full mt-2 rounded"></div>
                  </div>
                  <div className="pb-8">
                    <h5 className="font-bold text-gray-900 text-lg mb-2">Written Acknowledgment (Section 18)</h5>
                    <p className="text-gray-700">If, at any point before the expiration of the original three year period, you write a letter or send an email to the bank acknowledging the existence of the debt, the three year clock instantly restarts from the date of that written communication. Recovery agents will often trick you into sending an email begging for more time just to secure this vital written acknowledgment.</p>
                  </div>
                </div>

                <div className="flex mb-8">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">B</div>
                    <div className="w-1 bg-blue-200 h-full mt-2 rounded"></div>
                  </div>
                  <div className="pb-8">
                    <h5 className="font-bold text-gray-900 text-lg mb-2">Partial Payment (Section 19)</h5>
                    <p className="text-gray-700">This is the most common trap. If you make even a tiny partial payment towards the principal or interest of the debt before the limitation period expires, the three year clock is completely reset from the date of that payment. Agents will relentlessly pressure you to pay just five hundred rupees to "stop the calls," knowing fully well that this payment legally revives a massive debt that was about to become time barred.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">C</div>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-lg mb-2">Fresh Promise to Pay (Section 25 of Indian Contract Act)</h5>
                    <p className="text-gray-700">This is the ultimate danger for a ten year old debt. Even if the three year limitation period has completely expired and the debt is officially time barred, if you make a fresh, written promise to pay the time barred debt, it constitutes a brand new, legally binding contract. The bank can now immediately file a lawsuit based on this new written promise, resurrecting a dead debt entirely.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 id="cibil-impact" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-28">Impact on CIBIL Score Over a Decade</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Your CIBIL report is the foundational document of your financial identity in India. A personal loan default inflicts catastrophic damage initially, plunging your score into the low hundreds. But what happens to that record as a decade passes? The credit bureaus operate on specific data retention policies that dictate how long derogatory information remains visible to potential lenders.
                </p>
              </div>

              <h3 id="will-default-disappear" className="text-xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Will the Default Disappear from Credit Reports?</h3>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Contrary to popular belief, a default does not magically vanish from the master databases of the credit bureaus after seven or ten years. The bank will continue to report the account status as Written Off month after month, year after year. As long as the bank updates the record, the derogatory mark will persist on your extensive credit history.
                </p>
                <p>
                  However, the practical impact of a ten year old default diminishes significantly over time. Credit scoring algorithms heavily weight recent credit behavior. A default that occurred last month will decimate your ability to secure a loan. A default that occurred nine years ago, especially if followed by a clean record of secured credit building, will have a much smaller numerical impact on your overall score. Many lenders only scrutinize the last thirty six to seventy two months of your credit history when making routine lending decisions.
                </p>
                <p>
                  The critical issue arises when you apply for a high value loan, such as a substantial home loan. In these scenarios, the underwriting team will pull your comprehensive credit report and identify the ancient written off account. Almost all major banking institutions have an internal policy prohibiting lending to individuals with an unresolved write off on their record, regardless of its age. You must seek out professional guidance to understand if <Link href="/is-cibil-ruined-forever-after-settlement" className="text-blue-600 font-bold hover:underline">your CIBIL is ruined forever after a settlement</Link> and how you can systematically rebuild your profile.
                </p>
              </div>
            </section>

            <section>
              <h2 id="debt-settlement-decade" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-28">Debt Settlement After a Decade</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Living with an unresolved, ten year old default is like carrying a dormant financial landmine. It limits your borrowing capacity, risks sudden revival through Asset Reconstruction Companies, and maintains your status on internal bank blacklists. The most prudent financial decision is to confront the ancient debt and execute a formal settlement to secure a No Objection Certificate.
                </p>
              </div>

              <h3 id="how-to-negotiate" className="text-xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">How to Negotiate a 10-Year Old Debt</h3>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Negotiating a ten year old debt requires a completely different strategy than negotiating a recent default. You hold all the leverage. The bank knows the debt is legally time barred. They know they cannot sue you. Their only hope of recovering anything is your voluntary compliance. Therefore, you must enter the negotiation from a position of absolute strength and profound knowledge of the Limitation Act.
                </p>
                <p>
                  Never contact the bank by phone. Initiate the process through a formal letter drafted by a legal professional. The communication must clearly state that while you acknowledge the historical account, you assert that the debt is time barred under the Limitation Act of 1963, and you are offering a minuscule ex gratia payment solely to close the file and update the credit bureaus. Do not make any promises to pay the full amount, as this could constitute a fresh contract under Section 25 of the Indian Contract Act.
                </p>
                <p>
                  For a decade old unsecured personal loan, you should target a waiver of eighty to ninety percent of the current inflated balance. The bank has already written off the amount years ago. Any recovery now is pure profit on their balance sheet. Offer a small lump sum payment, strictly conditional upon receiving a written Settlement Letter stating the account will be closed and the credit bureaus updated. If you are unsure about navigating this precarious legal minefield, you must learn <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="text-blue-600 font-bold hover:underline">what loan settlement is and how it works</Link> to engage professional negotiators who will shield you from accidental liability revival.
                </p>
                <p>
                  Once the settlement is finalized and paid, retain the No Objection Certificate securely for the rest of your life. Financial institutions undergo mergers and system migrations, and old settled debts occasionally reappear due to clerical errors. Your NOC is your ultimate legal shield against any future claims on that specific personal loan.
                </p>
              </div>
            </section>

            <section>
              <h2 id="faqs" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-10 mb-20">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-12 rounded-3xl border border-gray-100 hover:scale-[1.01] transition-transform">
                    <h3 className="font-bold text-lg text-gray-900 mb-6 leading-snug border-l-4 border-blue-600 pl-6">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed text-base">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Settlement Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col h-full">
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 italic flex-grow mb-6">"{review.text}"</p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <p className="font-bold text-gray-900">{review.name}</p>
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-sm text-gray-500">{review.location}</p>
                        <p className="text-xs text-gray-400">{review.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </article>
          <aside className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <img src="/default-user.svg" alt="Financial Strategist" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-50 object-cover bg-gray-50" />
                <h4 className="font-bold text-gray-900">Vikram Sharma</h4>
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
