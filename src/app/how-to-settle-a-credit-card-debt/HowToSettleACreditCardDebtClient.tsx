'use client';

import LoanSettlementWidget from '@/components/tools/LoanSettlementWidget';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HowToSettleACreditCardDebtClient() {
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
    { id: 'understanding-lifecycle', label: 'Understanding the Lifecycle' },
        { id: 'interactive-settlement-estimator', label: 'Settlement Calculator' },
    { id: 'immediate-actions', label: 'Immediate Actions' },
    { id: 'step-checklist', label: 'Step-by-Step Checklist' },
    { id: 'cost-breakdown', label: 'Cost Breakdown' },
    { id: 'recovery-tactics', label: 'Recovery Tactics' },
    { id: 'success-story', label: 'Success Story' },
    { id: 'rebuilding-profile', label: 'Rebuilding Profile' },
    { id: 'faqs', label: 'Frequently Asked Questions' },
    { id: 'start-journey', label: 'Start Your Journey' },
  ];

  const faqs = [
    {
      question: 'Is it legal to settle a credit card debt in India?',
      answer: 'Yes. It is fully legal. Settling a debt is a civil contract relief between you and the bank. The Reserve Bank of India permits banks to write off or settle bad debts to maintain their money health. It is a standardized procedure when clients face genuine money hardship.'
    },
    {
      question: 'Will settling my debt remove the default from my CIBIL report?',
      answer: 'No. It will not remove the default history. When you agree to a closure. The bank reports the account status as Settled rather than Closed. This status remains on your credit report for seven years and negatively impacts your credit score. Making future borrowing difficult but manageable over time.'
    },
    {
      question: 'Can recovery agents arrest me for not paying my credit card bill?',
      answer: 'Absolutely not. Defaulting on an clean credit card is a civil issue. Not a crime. You cannot be arrested. Jailed. detained for failing to repay a loan or credit card. If any agent threatens you with police action. They are committing unlawful threaten and you can file a complaint against them.'
    },
    {
      question: 'How long does the entire debt settlement process take?',
      answer: 'The process typically takes between three to six months. Banks usually do not entertain deals until the account is at least ninety days overdue and classified as a Non-Performing Asset. Once talks begin. Reaching a final pacts and receiving the valid No Objection letter can take an additional few weeks.'
    },
    {
      question: 'Do I have to pay the settlement amount in a single lump sum?',
      answer: 'Banks heavily prefer a single lump sum payment and will offer the highest waiver rate for fast cash. Yet. In cases of extreme hardship. Banks may agree to split the payout sum into three or four manageable monthly installments. Failing to pay any installment will void the pacts.'
    },
    {
      question: 'Can the bank deduct money from my salary account without asking?',
      answer: 'If you hold your salary account in the same bank that issued your credit card. They can use the Bankers Right of General Lien or Right of Set Off to auto-debit your funds. To prevent this. It is highly recommended to transfer your salary account to a fully different banking institution.'
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
              <li> <div className="flex items-center"> <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/> </svg> <span className="ml-1 font-medium text-gray-500 md:ml-2"> How to Settle Credit Card Debt </span> </div> </li>
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

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">How to Settle a Credit Card Debt</h1>

            <section className="mb-10 p-6 bg-blue-50 border border-blue-100 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold text-blue-900 mb-3">Key Takeaways: Settling Credit Card Debt in India</h2>
              <ul className="list-disc pl-5 text-base text-gray-800 space-y-2">
                <li><strong>Preparation:</strong> Never ignore bank contacts. Understand your money limits and prepare documentary evidence of your hardship before starting talks.</li>
                <li><strong>Execution:</strong> Stop paying the minimum due if you are insolvent. Wait for the account to become an NPA to unlock the best deals.</li>
                <li><strong>safety:</strong> Learn your legal rights. You cannot be arrested for a credit card default and agents are bound by strict conduct rules.</li>
                <li><strong>relief:</strong> Always demand a formal closure note before transferring any funds. Never trust verbal pacts from calls agents.</li>
              </ul>
            </section>

            <section>
              <div className="text-gray-700 leading-relaxed text-base mb-16 space-y-10 opacity-90 border-l-4 border-blue-600 pl-8">
                <p> Over 22% of Indian credit card holders default on payments within the first three years of card issuance due to growing rates rates exceeding 40% annually. If your credit card debt has spiraled out of control and you are facing relentless claims calls. Settle a formal closure is your most effective defense against permanent money ruin. The moment you miss a payment. A highly automated and harsh calls machine is activated. This system relies fully on fear. Confusion. a lack of legal knowledge on the part of the consumer. Money institutions design their credit card products to maximize profit through revolving credit. Trapping users in a cycle of minimum payments that barely cover the massive monthly rates charges. </p>
                <p> When a sudden crisis hits. Like a medical emergency. A job end. A severe firm loss. This delicate money balancing act collapses instantly. clients often make the dire mistake of taking out new own loans or borrowing from predatory digital lending applications just to cover the minimum dues of their credit cards. This strategy only delays the inevitable and multiplies the total debt burden exponentially. By the time a clients realizes they are trapped. They owe several times the original amount borrowed. </p>
                <p> The purpose of this guide is to demystify the steps fully. money institutions absolutely prefer a settle closure over endless litigation or a total write off. Yet. They will never offer a fair deal proactively. You must force their hand through strategic contact. Absolute proof of your insolvency. a firm grasp of consumer safety laws. If you are being subjected to excessive pressure. Grasp <Link href="/what-are-the-consumer-protection-laws-related-to-debt-settlement-in-india" className="text-blue-600 font-bold hover:underline">the consumer safety laws related to debt closure</Link> is your strongest shield against abusive practices. </p>
                <p> This papers will walk you through every single phase of the default lifecycle. From the very first missed payment to the final issuance of a No Objection letter. We will detail exactly how to speak with calls agents. How to draft a hardship letter. how to evaluate the long term results on your money health. Whether you owe a small sum or a massive amount. The fundamental workings of debt talks remain fully identical. Your objective is to resolve the crisis by law. Securely. with the maximum possible reduction in your unpaid balance. </p>
              </div>
            </section>

            <section>
              <h2 id="understanding-lifecycle" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Understanding the Lifecycle of Credit Card Defaults</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> To successfully settle a closure. You must first understand how a banking institution classifies your account internally. Banks do not view your account emotionally. They view it as a mathematical risk asset passing through various stages of degradation. Your talks leverage increases dramatically as your account moves through these exact RBI classifications. </p>
                <p> For the first thirty days after a missed payment. Your account is considered in standard irregular status (SMA 0). The bank assumes this might be an oversight. You will receive polite text messages and automated emails reminding you to clear the minimum due. At this stage. No bank will ever entertain a deals. They expect full payment along with a late payment fine. </p>
                <p> Between thirty and sixty days of default (SMA 1). The tone changes significantly. Telecalling teams take over. You will receive multiple calls a day. The callers are trained to be firm and persistent. They will warn you about impending damage to your credit score. The bank is still fully intent on recovering the entire amount and rehabilitating your account. A closure at this stage is virtually impossible because the bank still considers the debt fully recoverable. </p>

                <h3 id="why-unsecured-debt-escalates" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Why clean Debt Escalates Rapidly</h3>
                <p> Between sixty and ninety days (SMA 2). The crisis intensifies. This is when third party calls firms are often assigned to your case. The balance on your card will now be noticeably larger than your original spend. This rapid escalation is due to the toxic combination of late payment fees. Over limit charges. growing rates calculated on a daily basis. The original main sum amount becomes buried under layers of punitive money charges. </p>
                <p> Once your account crosses the ninety day threshold without any payment. A key shift occurs. According to Reserve Bank of India guidelines. Your account must now be classified as a Non-Performing Asset. This means the bank must stop recognizing the rates as income on their balance sheet. they must start setting aside their own capital as a rules against the loss. </p>
                <p> It is only after the NPA classification that the bank truly becomes open to a One Time closure. At this juncture. The bank realizes that spending money on further calls efforts or legal action might yield nothing. Securing forty percent of the total unpaid amount today is mathematically superior to chasing a hundred percent for the next three years and ultimately recovering nothing. grasp <Link href="/how-to-negotiate-a-lower-principal-amount-for-creditors" className="text-blue-600 font-bold hover:underline">how to settle a lower main sum amount</Link> during this exact window is the key to a successful relief. </p>
              </div>
            </section>

            <section>
              <LoanSettlementWidget initialBalance={300000} initialPercentage={45} loanType="Credit Card Debt" />

                            <h2 id="immediate-actions" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Immediate Actions After Missing an EMI</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> Panic is the enemy of strategy. When you realize that you can no longer afford your credit card payments. You must take fast. Calculated steps to protect yourself. Ignoring the problem will not make it disappear. It will only limit your options and increase your anxiety. </p>
                <p> First. You must conduct a brutal assessment of your finances. Stop using all credit cards fast. Cut them up if necessary. You cannot borrow your way out of a debt crisis. Create a strict survival budget that covers only essential living expenses like rent. Groceries. utilities. Calculate exactly how much money. If any. You can divert toward building a closure fund. You must accumulate a lump sum to offer the bank later. </p>
                <p> Second. Secure your primary banking relationship. If your credit card was issued by the same bank where your salary is deposited. You are in fast danger. Banks have the legal right of general lien. Meaning they can auto deduct the credit card dues straight from your savings account without asking for your permission. You must fast open a new savings account in a fully different bank and route all your income to the new account. This ensures you maintain control over your cash flow. </p>
                <p> Third. Organize your proof. A bank will not grant a closure just because you ask for one. You must prove money incapacity. Gather your end letters. Medical bills. Bank statements showing depleted savings. firm loss statements. This evidence forms the foundation of your hardship story. Without it. The bank will assume you are simply trying to evade your responsibilities willfully. </p>
              </div>
            </section>

            <section>
              <h2 id="step-checklist" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Step-by-Step Debt Settlement Checklist</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> settle a closure is a formal firm transaction. It requires a methodical approach. Do not attempt to finalize a closure over the phone with an angry calls agent. Follow this precise checklist to ensure your closure is by law binding and maximally beneficial. </p>
                
                <div className="my-12">
                  <h3 className="font-bold text-blue-900 text-base mb-8 border-b-2 border-blue-100 pb-2">The closure Execution Protocol</h3>
                  
                  <div className="flex mb-8">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg z-10">1</div>
                      <div className="w-1 bg-blue-200 h-full mt-2 rounded"></div>
                    </div>
                    <div className="pb-8">
                      <h3 className="font-bold text-gray-900 text-base mb-2">Draft the Hardship Application</h3>
                      <p className="text-gray-700">Write a formal letter addressed to the nodal head or grievance redressal department of the bank. State your credit card number. Clearly explain the reason for your money distress. attach copies of your documentary evidence. State that you intend to resolve the matter but require a significant waiver due to absolute insolvency.</p>
                    </div>
                  </div>

                  <div className="flex mb-8">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg z-10">2</div>
                      <div className="w-1 bg-blue-200 h-full mt-2 rounded"></div>
                    </div>
                    <div className="pb-8">
                      <h3 className="font-bold text-gray-900 text-base mb-2">Anchor the talks Low</h3>
                      <p className="text-gray-700">When the bank responds. Their first offer will be terrible. They might offer to waive only the late fees. You must reject this fast. Counteroffer with a very low number. Perhaps twenty percent of the main sum amount. Emphasize that this small amount is all you can borrow from relatives. If they reject it. You will have no choice but to declare bankruptcy.</p>
                    </div>
                  </div>

                  <div className="flex mb-8">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg z-10">3</div>
                      <div className="w-1 bg-blue-200 h-full mt-2 rounded"></div>
                    </div>
                    <div className="pb-8">
                      <h3 className="font-bold text-gray-900 text-base mb-2">Demand a Written closure note</h3>
                      <p className="text-gray-700">After weeks of haggling. When you finally agree on a number. Absolutely refuse to pay a single rupee until you receive a formal closure note. This letter must be on the valid bank letterhead. It must contain your account number. The agreed amount. The payment date. a exact clause stating the account will be fully settled with no further dues pending upon payment.</p>
                    </div>
                  </div>

                  <div className="flex mb-8">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg z-10">4</div>
                      <div className="w-1 bg-blue-200 h-full mt-2 rounded"></div>
                    </div>
                    <div className="pb-8">
                      <h3 className="font-bold text-gray-900 text-base mb-2">Execute Payment Securely</h3>
                      <p className="text-gray-700">Never hand cash to a calls agent. Never deposit money into a own account. Transfer the funds strictly via NEFT. RTGS. a Demand Draft drawn straight in favor of your exact credit card account number. Keep the transaction reference number perfectly safe.</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg z-10">5</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base mb-2">Obtain the No Objection letter</h3>
                      <p className="text-gray-700">About thirty days after the payment clears. You must aggressively follow up with the bank to issue a final No Objection letter. Check your CIBIL report forty five days later to check that the account status has been officially updated to Settled. Keep these real and digital records forever.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 id="cost-breakdown" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Cost Breakdown: Settlement vs. Repayment</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> To fully grasp the money benefit of a closure. We must analyze a mathematical cost breakdown. Let us assume you have an unpaid credit card balance of Rs. 3,000,000. Due to a job loss. You stop paying for six months. By the sixth month. With growing rates at 42% annually. Plus GST. Plus late payment fees. Your total unpaid balance balloons to about Rs. 4,10,000. </p>
                <p> If you attempt to resume standard payment by paying only the minimum due every month. It will take you over fifteen years to clear the debt. The total amount you would pay over those fifteen years would exceed Rs. 8,50,000. This is the debt trap by design. You are effectively paying for the same debt multiple times over. </p>
                <p> Alternatively. If you endure the calls process. Wait for the account to become a Non-Performing Asset. Aggressively settle a One Time closure. The math changes fully. A skilled negotiator with solid proof of hardship can often secure a closure at forty percent of the current unpaid balance. In this scenario. You would pay a single lump sum of Rs. 1,64,000 to close an account that demanded Rs. 4,10,000. </p>
                <p> The cost savings are massive. they come at the price of your credit score. You save over two lakhs in cold hard cash. your CIBIL report receives a massive fine. This is a pragmatic choice. If you do not have the money. Preserving your credit score is irrelevant. You must prioritize your fast money survival over a hypothetical future loan approval. Yet. It is vital to know <Link href="/what-are-the-risks-of-entering-a-debt-settlement-agreement" className="text-blue-600 font-bold hover:underline">the risks of entering a debt closure pacts</Link> so you are not caught off guard by the long term results. </p>

                <div className="overflow-x-auto my-8">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-b">Financial Scenario</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-b">Total Cash Outflow</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-b">Time to Resolve</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-b">Impact on CIBIL</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">Standard Minimum Payments</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Rs. 8,50,000+</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">15+ Years</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-bold">Positive / Active</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">Full Preclosure</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Rs. 4,10,000</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">fast</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-bold">Positive / Closed</td>
                      </tr>
                      <tr className="bg-blue-50 hover:bg-blue-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">settle closure (40%)</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">Rs. 1,64,000</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">3 to 6 Months</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-bold">Negative / Settled</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 id="recovery-tactics" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Identifying Legitimate vs. Predatory Recovery Tactics</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> The most stressful aspect of defaulting on a credit card is enduring the calls process. Banks outsource claims to third party firms whose employees work on a commission basis. This incentive structure often encourages predatory and abusive behavior. You must learn to distinguish between legal calls efforts and unlawful threats. </p>
                <p> A legitimate calls effort involves written reminders. Formal legal notices drafted by practicing counsel. polite phone calls inquiring about your payment status. These contacts will clearly identify the bank. The firm. the exact amount owed. The representatives will act professionally. Albeit firmly. </p>
                <p> Predatory tactics cross into penal behavior. If an agent threatens to send the police to your home. They are lying. The police have absolutely no jurisdiction over civil debt claims matters and cannot arrest you for an unpaid credit card. If an agent threatens to seize your household belongings. They are lying. Only a civil court judge can issue an attachment order after a lengthy trial. Even then. Basic necessities cannot be seized. </p>

                <h3 id="legal-rights" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Your Legal Rights Against threats</h3>
                <p> The Reserve Bank of India mandates strict behavioral guidelines for all agents. Agents are strictly prohibited from calling you before 8 AM or after 7 PM. They cannot use abusive language. Shout at you. insult your character. </p>
                <p> Most importantly. Agents are fully forbidden from disclosing your debt to third parties. They cannot call your employer to get you fired. They cannot call your relatives to shame you. They cannot discuss your money case with your neighbors or your building security guard. These actions constitute severe privacy violations and penal slander. </p>
                <p> If you face threats. Your first step is to record the calls and save the abusive messages. You must then file a formal written complaint with the bank grievance head detailing the exact nature of the abuse. Complete with dates. Times. phone numbers. If the bank fails to act within thirty days. You escalate the complaint to the RBI Banking RBI officer. Simultaneously. You can file an FIR at your local police station under Section 503 (penal threaten) and Section 506 of the Indian Penal Code against the exact agents harassing you. </p>
              </div>
            </section>

            <section>
              <h2 id="success-story" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Success Story: Overcoming a Rs. 5 Lakh Debt</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> To understand how these talks tactics work in reality. We will examine the case of Amit Verma. A logistics manager from Chennai. Amit held a premium credit card with a limit of four lakhs. During a severe trade downturn. He lost his job and remained unemployed for seven months. He maxed out his card fully on daily living expenses and medical bills for his mother. </p>
                
                <div className="bg-gray-900 p-10 md:p-14 rounded-3xl text-white shadow-2xl relative overflow-hidden my-12">
                  <div className="relative z-10">
                    <h3 className="text-base font-bold mb-8 text-yellow-400">From threats to a 65% Waiver</h3>
                    
                    <div className="space-y-6 text-base">
                      <p><strong className="text-yellow-400">The Escalation:</strong> By the sixth month of non payment. Amits unpaid balance had exploded to five lakh thirty thousand rupees. He was receiving over forty calls a day. Agents visited his apartment twice. Loudly demanding payment and humiliating him in front of his neighbors.</p>
                      <p><strong className="text-yellow-400">The Counterattack:</strong> Amit stopped taking calls and communicated solely via email. He sent a strongly worded legal notice to the bank headquarters citing the exact RBI guidelines the agents violated during their home visit. He threatened to approach the Banking RBI officer and file a police complaint. The threats ceased fast. his case was transferred to an internal senior relief head.</p>
                      <p><strong className="text-yellow-400">The Proof:</strong> Amit supplied his end letter. His mothers hospital admission records. a bank statement showing a near zero balance. He established an undeniable story of absolute money ruin.</p>
                      <p><strong className="text-yellow-400">The talks:</strong> The bank initially demanded three lakh rupees to close the account. Amit rejected it. Stating he could only borrow one lakh rupees from his brother. The bank countered with two lakhs. After another two weeks of holding his ground. Amit increased his offer slightly to one lakh eighty five thousand rupees as a final. Take it or leave it proposition.</p>
                      <p><strong className="text-yellow-400">The Victory:</strong> Recognizing that litigation would yield nothing against an unemployed individual. The bank accepted. Amit received a formal closure note. Paid the amount via NEFT. received his NOC. He eliminated over three lakh forty thousand rupees of debt by law and safely.</p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-600 rounded-full -mr-40 -mt-40 opacity-10 blur-[100px]"></div>
                </div>
              </div>
            </section>

            <section>
              <h2 id="rebuilding-profile" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Rebuilding Your Financial Profile Post-Settlement</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> Obtaining your No Objection letter is a monumental relief. it is not the end of the journey. A settled credit card account leaves a lasting scar on your credit report. For the first two years post closure. Your CIBIL score will likely remain very low. mainstream banks will automatically reject any applications for clean credit. You must proactively rebuild your money reputation. </p>
                <p> Your primary tool for credit rehabilitation is a secured credit card. Several banks offer credit cards backed by a Fixed Deposit. You place an amount. For example. Fifty thousand rupees. Into a Fixed Deposit. the bank issues a credit card with a limit equal to ninety percent of that deposit. Since the bank holds your cash as pledge. They do not care about your past default. </p>
                <p> You must use this secured card religiously for small purchases and pay the bill in full. Five days before the due date. Every single month without fail. Do not utilize more than thirty percent of the available limit. This establishes a brand new pattern of perfect payment behavior. </p>
                <p> Additionally. You can apply for small consumer durable loans. Such as financing a mobile phone or a refrigerator. Provided you make a large down payment. Paying these small EMIs flawlessly adds further positive data points to your credit file. Over a period of three to four years. The negative impact of the closure will diminish in weight. Your score will steadily rise. you will eventually regain access to standard money products. </p>
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

            <section>
              <h2 id="start-journey" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Start Your Debt-Free Journey Today</h2>
              <div className="mt-16 p-16 md:p-24 bg-black text-white rounded-3xl text-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-base md:text-base font-bold mb-10 leading-[1]">Reclaim Your <span className="text-blue-500 underline underline-offset-[16px]">Financial</span> Freedom</h2>
                  <p className="text-gray-400 mb-16 max-w-4xl mx-auto text-base leading-relaxed"> You do not have to fight this battle alone. The banking system is designed to overwhelm you. Expert legal negotiators understand every loophole. Policy. tactic necessary to secure a massive waiver and end the threats for good. </p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-blue-600 text-white px-20 py-8 rounded-full font-bold text-base hover:bg-blue-500 transition-all shadow-[0_20px_50px_rgba(37,99,235,0.4)] hover:scale-110 active:scale-95 transform hover:-rotate-2"
                  >
                    Get Free Consultation
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900 rounded-full -mr-300 -mt-300 opacity-20 blur-[150px]"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900 rounded-full -ml-300 -mb-300 opacity-20 blur-[150px]"></div>
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
