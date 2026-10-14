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
      answer: 'No. A default does not automatically disappear from your CIBIL report after ten years. While the impact of the default on your overall score diminishes significantly over time. The account will remain in the written off or settled category until it is formally resolved with a No Objection letter.'
    },
    {
      question: 'Can recovery agents harass me for a debt that is 10 years old?',
      answer: 'agents are strictly prohibited by RBI guidelines from harassing clients regardless of the age of the debt. If a debt is beyond the limitation period of three years. You have strong legal grounds to stop their actions by filing a formal police complaint or notifying the banking RBI officer.'
    },
    {
      question: 'Is it true that making a small payment restarts the limitation period?',
      answer: 'Yes. According to Section 18 and Section 19 of the Limitation Act of 1963. If you acknowledge the debt in writing or make a partial payment towards the unpaid amount. The three year limitation period is by law restarted from the date of that acknowledgment or payment.'
    },
    {
      question: 'Can the bank seize my property for an unsecured personal loan default after ten years?',
      answer: 'For an clean own loan. Banks cannot straight seize your home using the SARFAESI Act. They must file a civil suit and obtain a court decree. If the debt is over ten years old and time barred. They cannot by law obtain this decree unless the limitation period was reset.'
    },
    {
      question: 'Should I ignore legal notices for a 10 year old personal loan?',
      answer: 'You should never fully ignore a legal notice. Instead. Consult a legal experts to draft a formal response pointing out that the debt is time barred under the Limitation Act. Ignoring it fully might result in an ex parte judgment if the bank fraudulently claims the limitation was reset.'
    },
    {
      question: 'How do I negotiate a settlement for a very old personal loan?',
      answer: 'To settle a closure for an old loan. You must assert your knowledge of the time barred status of the debt. Offer a very small fraction of the main sum amount as a lump sum payment to close the account formally. experts debt relief services can assist in securing waivers up to ninety percent.'
    },
    {
      question: 'What is the difference between a written off loan and a waived off loan?',
      answer: 'A written off loan is a purely internal accounting measure where the bank removes the non performing asset from its balance sheet. your legal debts to pay remains intact. A waived off loan means the bank has by law forgiven the debt and you no longer owe them the money.'
    }
  ];

  const reviews = [
    {
      name: "Rahul Verma",
      location: "Delhi",
      date: "May 2026",
      rating: 5,
      text: "I was receiving calls from random firms for a own loan I defaulted on back in 2014. The constant threats ruined my peace of mind. The legal team helped me draft a proper response citing the Limitation Act. The threats stopped fast. we settled the debt for 10% of the demanded amount."
    },
    {
      name: "Sneha Patel",
      location: "Mumbai",
      date: "April 2026",
      rating: 5,
      text: "I didn't realize a 9-year-old default would block my home loan application. My bank insisted the debt was still active despite no contact for years. CredSettle guided me through the talks. I secured my NOC within weeks without paying the ridiculous compound rates they initially demanded."
    },
    {
      name: "Amit Desai",
      location: "Pune",
      date: "June 2026",
      rating: 5,
      text: "A agents tricked me into making a Rs. 500 payment. which I later learned reset the limitation period on an 11-year-old loan. I was terrified. The counsel stepped in. Took over all contact. managed to settle a highly favorable closure before the bank could file a suit."
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
              <li> <div className="flex items-center"> <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/> </svg> <span className="ml-1 font-medium text-gray-500 md:ml-2"> own Loan Defaulter for 10 Years </span> </div> </li>
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
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
                        Personal Loan Defaulter for 10 Years:<br />
                        <span className="text-blue-300">Legal &amp; Financial Reality</span>
                    </h1>

            <section className="mb-10 p-6 bg-blue-50 border border-blue-100 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold text-blue-900 mb-3">Key Takeaways: Legal Realities of a 10-Year Loan Default</h2>
              <ul className="list-disc pl-5 text-base text-gray-800 space-y-2">
                <li><strong>The Reality:</strong> In India. A staggering number of clients believe that avoiding payment for an extended period magically erases their risk. the legal reality of being a own loan defaulter for 10 years is far more complex. While a debt may technically become time barred after 3 years under the Limitation Act of 1963. Banks can still use sophisticated strategies like tricking you into a tiny payment to by law resurrect your risk a decade later.</li>
                <li><strong>The Limitation Act:</strong> clean debts generally become time barred after three years. Preventing banks from filing fresh civil claims suits.</li>
                <li><strong>The Trap:</strong> Any written acknowledgment or partial payment restarts the three year clock. Making you fully liable again.</li>
                <li><strong>The Impact:</strong> A ten year default will remain on your internal banking records indefinitely. Blocking loans from that exact institution forever.</li>
                <li><strong>The Solution:</strong> You can settle an harsh closure on old debts by leveraging your knowledge of the time barred status to close the account fully.</li>
              </ul>
            </section>

            <section>
              <h2 id="immediate-vs-later" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-28">What Happens Immediately vs. 10 Years Later</h2>
              <div className="text-gray-700 leading-relaxed text-base mb-16 space-y-10 opacity-90 border-l-4 border-blue-600 pl-8">
                <p> In India. A staggering number of clients believe that avoiding payment for an extended period magically erases their risk. the legal reality of being a own loan defaulter for 10 years is far more complex. While a debt may technically become time barred after 3 years under the Limitation Act of 1963. Banks can still use sophisticated strategies like tricking you into a tiny payment to by law resurrect your risk a decade later. When you first miss an Equated Monthly Installment for your clean own loan. The banking machinery initiates an automated and highly harsh sequence of claims protocols. grasp this timeline is absolutely crucial for protecting your money future and navigating the immense mental pressure applied by money institutions. </p>
                <p> Many clients assume that the intensity of claims efforts remains constant. This is a dangerous misconception. The reality is that the bank alters its legal strategies. Accounting classifications. talks willingness as the debt ages from days into years. What the bank can by law do in the first year of default is vastly different from what it can execute in the tenth year of default. </p>
              </div>

              <h3 id="first-90-days" className="text-xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">The First 90 Days: NPA Classification</h3>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> The first ninety days of default represent the most intense period of contact. During the first thirty days. Your account is classified as Special Mention Account Zero (SMA 0). The bank primarily relies on automated text messages. Emails. phone calls from their internal customer service departments reminding you to clear the overdue amount to avoid late fees. At this stage. The bank genuinely believes the missed payment is an oversight or a temporary liquidity issue. </p>
                <p> If you fail to pay by the sixtieth day. The account moves to Special Mention Account One (SMA 1) and Special Mention Account Two (SMA 2) classifications. The tone of contact becomes distinctly harsh. Telecallers will explicitly warn you about the impending damage to your credit score. Once the ninety day mark is breached without a single payment. The Reserve Bank of India mandates that the bank classify your loan as a Non Performing Asset. This is a key legal and money milestone. The bank must now set aside capital rules for the anticipated loss. Straight impacting their profitability. It is at this exact moment that the bank officially recognizes you as a serious defaulter and prepares to deploy third party claims firms. </p>
              </div>

              <h3 id="year-1-to-3" className="text-xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Year 1 to 3: harsh claims and Legal Notices</h3>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> From the moment an account becomes a Non Performing Asset until the third anniversary of the default. You are in the high risk zone for litigation. The bank will assign your case to external calls firms whose primary mandate is to recover the funds through relentless mental pressure. These agents operate on high commission structures and often ignore RBI boundaries. You will experience frequent home visits. Office visits. incessant phone calls demanding full payment of the inflated balance. which now includes compounded penal rates and legal charges. </p>
                <p> Simultaneously. The bank's legal department will initiate a barrage of demand notices. These notices serve two purposes: they act as a severe threaten tactic. they establish a documented paper trail proving the bank attempted to recover the funds. Within this three year window. The bank possesses the unhindered legal right to file a civil suit for the claims of money under Order 37 of the Civil Procedure Code. If you provided blank cheques as security during the loan disbursement process. The bank might present them for clearing. When the cheques inevitably bounce due to insufficient funds. The bank will quickly initiate penal steps against you under Section 138 of the Negotiable Instruments Act. This period requires utmost vigilance and fast legal consultation if a court summons is received. </p>
              </div>

              <h3 id="year-4-to-10" className="text-xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Year 4 to 10: The Statute of Limitations Effect</h3>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> Once the default crosses the three year threshold from the date of the last payment or the date of the loan maturity. A monumental shift occurs in the legal landscape. According to the Limitation Act of 1963. The debt officially becomes time barred. This means the bank permanently loses its legal remedy to file a fresh civil lawsuit to force you to repay the unpaid money. The courts will summarily dismiss any new civil claims suit filed by the bank for a time barred debt. </p>
                <p> During years four through ten. The harsh home visits and relentless phone calls usually subside fully. The bank has likely written off the loan from its active balance sheet to claim tax benefits. Yet. This does not mean the bank has forgotten you. They will sporadically sell portfolios of old. Written off debts to Asset Reconstruction Companies at massive discounts. You might suddenly receive a call in year seven from a fully unknown firm claiming you owe them money. Their only tactic at this stage is mental manipulation. Hoping you are ignorant of your legal rights regarding time barred debts. They will try to trick you into making a small token payment or replying to an email acknowledging the debt. which brings us to the most dangerous legal trap clients face. </p>
              </div>
            </section>

            <section>
              <h2 id="does-default-erase-debt" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-28">Does a 10-Year Default Erase Your Debt?</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> The most pervasive myth in the Indian money sector is the belief that ignoring a debt for a decade automatically erases it from existence. This fundamental misunderstanding of the law has led countless individuals into disastrous money results. You must clearly differentiate between the loss of legal remedy and the extinguishment of the actual risk. The debt itself never by law expires. </p>
              </div>

              <h3 id="written-off-vs-waived" className="text-xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">The Written Off vs. Waived Off Myth</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mb-12">
                <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
                  <h3 className="font-bold text-red-900 text-lg mb-4">Myth: A Written Off Account Means the Debt is Forgiven</h3>
                  <p className="text-gray-800 text-base"> Many clients check their credit reports. See the status marked as Written Off. celebrate under the false assumption that the bank has forgiven the loan. They believe they are fully free from the money debts and can resume borrowing normally. </p>
                </div>
                <div className="bg-green-50 p-8 rounded-2xl border border-green-200">
                  <h3 className="font-bold text-green-900 text-lg mb-4">Fact: A Write Off is an Internal Accounting Procedure</h3>
                  <p className="text-gray-800 text-base"> A write off simply means the bank has recognized the loan as a total loss on its balance sheet for tax and RBI purposes. It does not extinguish your legal debts to repay the money. The bank retains the absolute right to recover the written off amount indefinitely. Using non judicial methods. A debt is only forgiven when the bank explicitly issues a No Objection letter stating the account is Closed or Waived Off. </p>
                </div>
              </div>

              <h3 id="time-barred-rule" className="text-xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">The 3-Year Time-Barred Debt Rule (Limitation Act)</h3>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> The Limitation Act of 1963 is the most key piece of legislation protecting clients from perpetual legal threats. The law stipulates that a creditor has a strict window of three years to initiate civil litigation for the claims of a debt. The clock starts ticking from the date the cause of action arises. Which is typically the date of your last payment. The date you defaulted on the EMI. the maturity date of the loan contract. </p>
                <p> If the bank fails to file a lawsuit within this precise three year period. The debt becomes by law time barred. The courts operate on the principle that the law assists those who are vigilant about their rights. Not those who sleep over them. Consequently. If a bank attempts to file a civil claims suit against you for a ten year old own loan. The judge is by law obligated to dismiss the suit at the preliminary hearing. This powerful statute ensures that you do not live under the perpetual threat of civil litigation for mistakes made a decade ago. </p>
                <p> yet. It is paramount to understand that the Limitation Act only bars the legal remedy. It does not extinguish the underlying right of the bank to the money. The bank cannot sue you. they can still by law ask you for the money through phone calls and letters. Furthermore. If the bank holds any of your funds in other accounts due to a banker's lien or Right of Set Off. They can by law appropriate those funds to offset the time barred debt. This is why you must maintain immense caution when dealing with an institution where you have an ancient default. </p>
              </div>
            </section>

            <section>
              <h2 id="can-bank-file-case" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-28">Can the Bank File a Case After 10 Years?</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> Generally. The answer is no. A bank cannot successfully file a civil suit for a ten year old default because of the strict safety afforded by the Limitation Act. Yet. Banks employ highly skilled legal teams who are experts at finding exceptions to the rule. They understand that most clients are fully unaware of their rights and will inadvertently provide the bank with the exact evidence needed to bypass the limitation period. grasp <Link href="/can-bank-file-case-for-personal-loan" className="text-blue-600 font-bold hover:underline">when a bank can file a case for a own loan</Link> is essential knowledge for anyone carrying old debt. </p>
              </div>

              <h3 id="exceptions-to-limitation" className="text-xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Exceptions to the Limitation Act</h3>
              
              <div className="my-12">
                <h3 className="font-bold text-blue-900 text-lg mb-8 border-b-2 border-blue-100 pb-2">The Legal Process Map: How the Clock Restarts</h3>
                
                <div className="flex mb-8">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">A</div>
                    <div className="w-1 bg-blue-200 h-full mt-2 rounded"></div>
                  </div>
                  <div className="pb-8">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Written Acknowledgment (Section 18)</h3>
                    <p className="text-gray-700">If. At any point before the expiration of the original three year period. You write a letter or send an email to the bank acknowledging the existence of the debt. The three year clock instantly restarts from the date of that written contact. agents will often trick you into sending an email begging for more time just to secure this vital written acknowledgment.</p>
                  </div>
                </div>

                <div className="flex mb-8">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">B</div>
                    <div className="w-1 bg-blue-200 h-full mt-2 rounded"></div>
                  </div>
                  <div className="pb-8">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Partial Payment (Section 19)</h3>
                    <p className="text-gray-700">This is the most common trap. If you make even a tiny partial payment towards the main sum or rates of the debt before the limitation period expires. The three year clock is fully reset from the date of that payment. Agents will relentlessly pressure you to pay just five hundred rupees to "stop the calls," knowing fully well that this payment by law revives a massive debt that was about to become time barred.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">C</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Fresh Promise to Pay (Section 25 of Indian Contract Act)</h3>
                    <p className="text-gray-700">This is the ultimate danger for a ten year old debt. Even if the three year limitation period has fully expired and the debt is officially time barred. If you make a fresh. Written promise to pay the time barred debt. It constitutes a brand new. By law binding contract. The bank can now fast file a lawsuit based on this new written promise. Resurrecting a dead debt fully.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 id="cibil-impact" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-28">Impact on CIBIL Score Over a Decade</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> Your CIBIL report is the foundational papers of your money identity in India. A own loan default inflicts dire damage initially. Plunging your score into the low hundreds. But what happens to that record as a decade passes? The credit bureaus operate on exact data retention policies that dictate how long derogatory information remains visible to potential lenders. </p>
              </div>

              <h3 id="will-default-disappear" className="text-xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Will the Default Disappear from Credit Reports?</h3>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> Contrary to popular belief. A default does not magically vanish from the master databases of the credit bureaus after seven or ten years. The bank will continue to report the account status as Written Off month after month. Year after year. As long as the bank updates the record. The derogatory mark will persist on your extensive credit history. </p>
                <p> yet. The practical impact of a ten year old default diminishes significantly over time. Credit scoring algorithms heavily weight recent credit behavior. A default that occurred last month will decimate your ability to secure a loan. A default that occurred nine years ago. Especially if followed by a clean record of secured credit building. Will have a much smaller numerical impact on your overall score. Many lenders only scrutinize the last thirty six to seventy two months of your credit history when making routine lending decisions. </p>
                <p> The key issue arises when you apply for a high value loan. Such as a substantial home loan. In these scenarios. The underwriting team will pull your thorough credit report and identify the ancient written off account. Almost all major banking institutions have an internal policy prohibiting lending to individuals with an unresolved write off on their record. Regardless of its age. You must seek out experts guidance to understand if <Link href="/is-cibil-ruined-forever-after-settlement" className="text-blue-600 font-bold hover:underline">your CIBIL is ruined forever after a closure</Link> and how you can systematically rebuild your profile. </p>
              </div>
            </section>

            <section>
              <h2 id="debt-settlement-decade" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-28">Debt Settlement After a Decade</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> Living with an unresolved. Ten year old default is like carrying a dormant money landmine. It limits your borrowing capacity. Risks sudden revival through Asset Reconstruction Companies. maintains your status on internal bank blacklists. The most prudent money decision is to confront the ancient debt and execute a formal closure to secure a No Objection letter. </p>
              </div>

              <h3 id="how-to-negotiate" className="text-xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">How to settle a 10-Year Old Debt</h3>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> settle a ten year old debt requires a fully different strategy than settle a recent default. You hold all the leverage. The bank knows the debt is by law time barred. They know they cannot sue you. Their only hope of recovering anything is your voluntary compliance. Therefore. You must enter the talks from a position of absolute strength and profound knowledge of the Limitation Act. </p>
                <p> Never contact the bank by phone. Initiate the process through a formal letter drafted by a legal experts. The contact must clearly state that while you acknowledge the historical account. You assert that the debt is time barred under the Limitation Act of 1963. you are offering a minuscule ex gratia payment solely to close the file and update the credit bureaus. Do not make any promises to pay the full amount. as this could constitute a fresh contract under Section 25 of the Indian Contract Act. </p>
                <p> For a decade old clean own loan. You should target a waiver of eighty to ninety percent of the current inflated balance. The bank has already written off the amount years ago. Any claims now is pure profit on their balance sheet. Offer a small lump sum payment. Strictly conditional upon receiving a written closure note stating the account will be closed and the credit bureaus updated. If you are unsure about navigating this precarious legal minefield. You must learn <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="text-blue-600 font-bold hover:underline">what loan closure is and how it works</Link> to engage experts negotiators who will shield you from accidental risk revival. </p>
                <p> Once the closure is finalized and paid. Retain the No Objection letter securely for the rest of your life. money institutions undergo mergers and system migrations. old settled debts occasionally reappear due to clerical errors. Your NOC is your ultimate legal shield against any future claims on that exact own loan. </p>
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
                <img src="/default-user.svg" alt="Financial Strategist" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-50 object-cover bg-gray-50"  width={96} height={96} />
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
