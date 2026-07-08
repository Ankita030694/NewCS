'use client';

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
      answer: 'Yes, it is entirely legal. Settling a debt is a civil contract resolution between you and the bank. The Reserve Bank of India permits banks to write off or settle bad debts to maintain their financial health. It is a standardized procedure when borrowers face genuine financial hardship.'
    },
    {
      question: 'Will settling my debt remove the default from my CIBIL report?',
      answer: 'No, it will not remove the default history. When you agree to a settlement, the bank reports the account status as Settled rather than Closed. This status remains on your credit report for seven years and negatively impacts your credit score, making future borrowing difficult but manageable over time.'
    },
    {
      question: 'Can recovery agents arrest me for not paying my credit card bill?',
      answer: 'Absolutely not. Defaulting on an unsecured credit card is a civil issue, not a criminal offense. You cannot be arrested, jailed, or detained for failing to repay a loan or credit card. If any agent threatens you with police action, they are committing illegal intimidation and you can file a complaint against them.'
    },
    {
      question: 'How long does the entire debt settlement process take?',
      answer: 'The process typically takes between three to six months. Banks usually do not entertain settlement offers until the account is at least ninety days overdue and classified as a Non-Performing Asset. Once negotiations begin, reaching a final agreement and receiving the official No Objection Certificate can take an additional few weeks.'
    },
    {
      question: 'Do I have to pay the settlement amount in a single lump sum?',
      answer: 'Banks heavily prefer a single lump sum payment and will offer the highest waiver percentages for immediate cash. However, in cases of extreme hardship, banks may agree to split the settlement amount into three or four manageable monthly installments. Failing to pay any installment will void the agreement.'
    },
    {
      question: 'Can the bank deduct money from my salary account without asking?',
      answer: 'If you hold your salary account in the same bank that issued your credit card, they can use the Bankers Right of General Lien or Right of Set Off to auto-debit your funds. To prevent this, it is highly recommended to transfer your salary account to a completely different banking institution.'
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
                    How to Settle Credit Card Debt
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

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">How to Settle a Credit Card Debt</h1>

            <section className="mb-10 p-6 bg-blue-50 border border-blue-100 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold text-blue-900 mb-3">TL;DR (Summary)</h2>
              <ul className="list-disc pl-5 text-base text-gray-800 space-y-2">
                <li><strong>Preparation:</strong> Never ignore bank communications. Understand your financial limits and prepare documentary evidence of your hardship before starting negotiations.</li>
                <li><strong>Execution:</strong> Stop paying the minimum due if you are insolvent. Wait for the account to become an NPA to unlock the best settlement offers.</li>
                <li><strong>Protection:</strong> Learn your legal rights. You cannot be arrested for a credit card default and recovery agents are bound by strict conduct rules.</li>
                <li><strong>Resolution:</strong> Always demand a formal settlement letter before transferring any funds. Never trust verbal agreements from collection agents.</li>
              </ul>
            </section>

            <section>
              <div className="text-gray-700 leading-relaxed text-base mb-16 space-y-10 opacity-90 border-l-4 border-blue-600 pl-8">
                <p>
                  Over 22% of Indian credit card holders default on payments within the first three years of card issuance due to compounding interest rates exceeding 40% annually. If your credit card debt has spiraled out of control and you are facing relentless recovery calls, negotiating a formal settlement is your most effective defense against permanent financial ruin. The moment you miss a payment, a highly automated and aggressive collection machine is activated. This system relies entirely on fear, confusion, and a lack of legal knowledge on the part of the consumer. Financial institutions design their credit card products to maximize profit through revolving credit, trapping users in a cycle of minimum payments that barely cover the massive monthly interest charges.
                </p>
                <p>
                  When a sudden crisis hits, like a medical emergency, a job termination, or a severe business loss, this delicate financial balancing act collapses instantly. Borrowers often make the catastrophic mistake of taking out new personal loans or borrowing from predatory digital lending applications just to cover the minimum dues of their credit cards. This strategy only delays the inevitable and multiplies the total debt burden exponentially. By the time a borrower realizes they are trapped, they owe several times the original amount borrowed.
                </p>
                <p>
                  The purpose of this guide is to demystify the settlement process completely. Financial institutions absolutely prefer a negotiated settlement over endless litigation or a total write off. However, they will never offer a fair deal proactively. You must force their hand through strategic communication, absolute documentation of your insolvency, and a firm understanding of consumer protection laws. If you are being subjected to excessive pressure, understanding <Link href="/what-are-the-consumer-protection-laws-related-to-debt-settlement-in-india" className="text-blue-600 font-bold hover:underline">the consumer protection laws related to debt settlement</Link> is your strongest shield against abusive practices. 
                </p>
                <p>
                  This document will walk you through every single phase of the default lifecycle, from the very first missed payment to the final issuance of a No Objection Certificate. We will detail exactly how to speak with collection agents, how to draft a hardship letter, and how to evaluate the long term consequences on your financial health. Whether you owe a small sum or a massive amount, the fundamental mechanics of debt negotiation remain completely identical. Your objective is to resolve the crisis legally, securely, and with the maximum possible reduction in your outstanding balance.
                </p>
              </div>
            </section>

            <section>
              <h2 id="understanding-lifecycle" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Understanding the Lifecycle of Credit Card Defaults</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  To successfully negotiate a settlement, you must first understand how a banking institution classifies your account internally. Banks do not view your account emotionally. They view it as a mathematical risk asset passing through various stages of degradation. Your negotiation leverage increases dramatically as your account moves through these specific regulatory classifications.
                </p>
                <p>
                  For the first thirty days after a missed payment, your account is considered in standard irregular status (SMA 0). The bank assumes this might be an oversight. You will receive polite text messages and automated emails reminding you to clear the minimum due. At this stage, no bank will ever entertain a settlement offer. They expect full repayment along with a late payment penalty.
                </p>
                <p>
                  Between thirty and sixty days of default (SMA 1), the tone changes significantly. Telecalling teams take over. You will receive multiple calls a day. The callers are trained to be firm and persistent. They will warn you about impending damage to your credit score. The bank is still fully intent on recovering the entire amount and rehabilitating your account. A settlement at this stage is virtually impossible because the bank still considers the debt fully recoverable.
                </p>

                <h3 id="why-unsecured-debt-escalates" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Why Unsecured Debt Escalates Rapidly</h3>
                <p>
                  Between sixty and ninety days (SMA 2), the crisis intensifies. This is when third party collection agencies are often assigned to your case. The balance on your card will now be noticeably larger than your original spend. This rapid escalation is due to the toxic combination of late payment fees, over limit charges, and compounding interest calculated on a daily basis. The original principal amount becomes buried under layers of punitive financial charges.
                </p>
                <p>
                  Once your account crosses the ninety day threshold without any payment, a critical shift occurs. According to Reserve Bank of India guidelines, your account must now be classified as a Non-Performing Asset. This means the bank must stop recognizing the interest as income on their balance sheet, and they must start setting aside their own capital as a provision against the loss. 
                </p>
                <p>
                  It is only after the NPA classification that the bank truly becomes open to a One Time Settlement. At this juncture, the bank realizes that spending money on further collection efforts or legal action might yield nothing. Securing forty percent of the total outstanding amount today is mathematically superior to chasing a hundred percent for the next three years and ultimately recovering nothing. Understanding <Link href="/how-to-negotiate-a-lower-principal-amount-for-creditors" className="text-blue-600 font-bold hover:underline">how to negotiate a lower principal amount</Link> during this specific window is the key to a successful resolution.
                </p>
              </div>
            </section>

            <section>
              <h2 id="immediate-actions" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Immediate Actions After Missing an EMI</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Panic is the enemy of strategy. When you realize that you can no longer afford your credit card payments, you must take immediate, calculated steps to protect yourself. Ignoring the problem will not make it disappear. It will only limit your options and increase your anxiety.
                </p>
                <p>
                  First, you must conduct a brutal assessment of your finances. Stop using all credit cards immediately. Cut them up if necessary. You cannot borrow your way out of a debt crisis. Create a strict survival budget that covers only essential living expenses like rent, groceries, and utilities. Calculate exactly how much money, if any, you can divert toward building a settlement fund. You must accumulate a lump sum to offer the bank later.
                </p>
                <p>
                  Second, secure your primary banking relationship. If your credit card was issued by the same bank where your salary is deposited, you are in immediate danger. Banks have the legal right of general lien, meaning they can auto deduct the credit card dues directly from your savings account without asking for your permission. You must immediately open a new savings account in a completely different bank and route all your income to the new account. This ensures you maintain control over your cash flow.
                </p>
                <p>
                  Third, organize your documentation. A bank will not grant a settlement just because you ask for one. You must prove financial incapacity. Gather your termination letters, medical bills, bank statements showing depleted savings, or business loss statements. This evidence forms the foundation of your hardship narrative. Without it, the bank will assume you are simply trying to evade your responsibilities willfully.
                </p>
              </div>
            </section>

            <section>
              <h2 id="step-checklist" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Step-by-Step Debt Settlement Checklist</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Negotiating a settlement is a formal business transaction. It requires a methodical approach. Do not attempt to finalize a settlement over the phone with an angry collection agent. Follow this precise checklist to ensure your settlement is legally binding and maximally beneficial.
                </p>
                
                <div className="my-12">
                  <h4 className="font-bold text-blue-900 text-base mb-8 border-b-2 border-blue-100 pb-2">The Settlement Execution Protocol</h4>
                  
                  <div className="flex mb-8">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg z-10">1</div>
                      <div className="w-1 bg-blue-200 h-full mt-2 rounded"></div>
                    </div>
                    <div className="pb-8">
                      <h5 className="font-bold text-gray-900 text-base mb-2">Draft the Hardship Application</h5>
                      <p className="text-gray-700">Write a formal letter addressed to the nodal officer or grievance redressal department of the bank. State your credit card number, clearly explain the reason for your financial distress, and attach copies of your documentary evidence. State that you intend to resolve the matter but require a significant waiver due to absolute insolvency.</p>
                    </div>
                  </div>

                  <div className="flex mb-8">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg z-10">2</div>
                      <div className="w-1 bg-blue-200 h-full mt-2 rounded"></div>
                    </div>
                    <div className="pb-8">
                      <h5 className="font-bold text-gray-900 text-base mb-2">Anchor the Negotiation Low</h5>
                      <p className="text-gray-700">When the bank responds, their first offer will be terrible. They might offer to waive only the late fees. You must reject this immediately. Counteroffer with a very low number, perhaps twenty percent of the principal amount. Emphasize that this small amount is all you can borrow from relatives, and if they reject it, you will have no choice but to declare bankruptcy.</p>
                    </div>
                  </div>

                  <div className="flex mb-8">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg z-10">3</div>
                      <div className="w-1 bg-blue-200 h-full mt-2 rounded"></div>
                    </div>
                    <div className="pb-8">
                      <h5 className="font-bold text-gray-900 text-base mb-2">Demand a Written Settlement Letter</h5>
                      <p className="text-gray-700">After weeks of haggling, when you finally agree on a number, absolutely refuse to pay a single rupee until you receive a formal settlement letter. This letter must be on the official bank letterhead. It must contain your account number, the agreed amount, the payment date, and a specific clause stating the account will be fully settled with no further dues pending upon payment.</p>
                    </div>
                  </div>

                  <div className="flex mb-8">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg z-10">4</div>
                      <div className="w-1 bg-blue-200 h-full mt-2 rounded"></div>
                    </div>
                    <div className="pb-8">
                      <h5 className="font-bold text-gray-900 text-base mb-2">Execute Payment Securely</h5>
                      <p className="text-gray-700">Never hand cash to a collection agent. Never deposit money into a personal account. Transfer the funds strictly via NEFT, RTGS, or a Demand Draft drawn directly in favor of your specific credit card account number. Keep the transaction reference number perfectly safe.</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg z-10">5</div>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-base mb-2">Obtain the No Objection Certificate</h5>
                      <p className="text-gray-700">Approximately thirty days after the payment clears, you must aggressively follow up with the bank to issue a final No Objection Certificate. Check your CIBIL report forty five days later to verify that the account status has been officially updated to Settled. Keep these physical and digital records forever.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 id="cost-breakdown" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Cost Breakdown: Settlement vs. Repayment</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  To fully grasp the financial benefit of a settlement, we must analyze a mathematical cost breakdown. Let us assume you have an outstanding credit card balance of Rs. 3,000,000. Due to a job loss, you stop paying for six months. By the sixth month, with compounding interest at 42% annually, plus GST, plus late payment fees, your total outstanding balance balloons to approximately Rs. 4,10,000.
                </p>
                <p>
                  If you attempt to resume standard repayment by paying only the minimum due every month, it will take you over fifteen years to clear the debt. The total amount you would pay over those fifteen years would exceed Rs. 8,50,000. This is the debt trap by design. You are effectively paying for the same debt multiple times over.
                </p>
                <p>
                  Alternatively, if you endure the collection process, wait for the account to become a Non-Performing Asset, and aggressively negotiate a One Time Settlement, the math changes entirely. A skilled negotiator with solid proof of hardship can often secure a settlement at forty percent of the current outstanding balance. In this scenario, you would pay a single lump sum of Rs. 1,64,000 to close an account that demanded Rs. 4,10,000. 
                </p>
                <p>
                  The cost savings are massive, but they come at the price of your credit score. You save over two lakhs in cold hard cash, but your CIBIL report receives a massive penalty. This is a pragmatic choice. If you do not have the money, preserving your credit score is irrelevant. You must prioritize your immediate financial survival over a hypothetical future loan approval. However, it is vital to know <Link href="/what-are-the-risks-of-entering-a-debt-settlement-agreement" className="text-blue-600 font-bold hover:underline">the risks of entering a debt settlement agreement</Link> so you are not caught off guard by the long term consequences.
                </p>

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
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Immediate</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-bold">Positive / Closed</td>
                      </tr>
                      <tr className="bg-blue-50 hover:bg-blue-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">Negotiated Settlement (40%)</td>
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
                <p>
                  The most stressful aspect of defaulting on a credit card is enduring the collection process. Banks outsource recovery to third party agencies whose employees work on a commission basis. This incentive structure frequently encourages predatory and abusive behavior. You must learn to distinguish between legal collection efforts and illegal harassment.
                </p>
                <p>
                  A legitimate collection effort involves written reminders, formal legal notices drafted by practicing advocates, and polite phone calls inquiring about your repayment status. These communications will clearly identify the bank, the agency, and the exact amount owed. The representatives will act professionally, albeit firmly.
                </p>
                <p>
                  Predatory tactics cross into criminal behavior. If an agent threatens to send the police to your home, they are lying. The police have absolutely no jurisdiction over civil debt recovery matters and cannot arrest you for an unpaid credit card. If an agent threatens to seize your household belongings, they are lying. Only a civil court judge can issue an attachment order after a lengthy trial, and even then, basic necessities cannot be seized.
                </p>

                <h3 id="legal-rights" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Your Legal Rights Against Harassment</h3>
                <p>
                  The Reserve Bank of India mandates strict behavioral guidelines for all recovery agents. Agents are strictly prohibited from calling you before 8 AM or after 7 PM. They cannot use abusive language, shout at you, or insult your character. 
                </p>
                <p>
                  Most importantly, agents are completely forbidden from disclosing your debt to third parties. They cannot call your employer to get you fired. They cannot call your relatives to shame you. They cannot discuss your financial situation with your neighbors or your building security guard. These actions constitute severe privacy violations and criminal defamation.
                </p>
                <p>
                  If you face harassment, your first step is to record the calls and save the abusive messages. You must then file a formal written complaint with the bank grievance officer detailing the exact nature of the abuse, complete with dates, times, and phone numbers. If the bank fails to act within thirty days, you escalate the complaint to the RBI Banking Ombudsman. Simultaneously, you can file an FIR at your local police station under Section 503 (Criminal Intimidation) and Section 506 of the Indian Penal Code against the specific agents harassing you.
                </p>
              </div>
            </section>

            <section>
              <h2 id="success-story" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Success Story: Overcoming a Rs. 5 Lakh Debt</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  To understand how these negotiation tactics work in reality, we will examine the case of Amit Verma, a logistics manager from Chennai. Amit held a premium credit card with a limit of four lakhs. During a severe industry downturn, he lost his job and remained unemployed for seven months. He maxed out his card entirely on daily living expenses and medical bills for his mother.
                </p>
                
                <div className="bg-gray-900 p-10 md:p-14 rounded-3xl text-white shadow-2xl relative overflow-hidden my-12">
                  <div className="relative z-10">
                    <h4 className="text-base font-bold mb-8 text-yellow-400">From Harassment to a 65% Waiver</h4>
                    
                    <div className="space-y-6 text-base">
                      <p><strong className="text-yellow-400">The Escalation:</strong> By the sixth month of non payment, Amits outstanding balance had exploded to five lakh thirty thousand rupees. He was receiving over forty calls a day. Recovery agents visited his apartment twice, loudly demanding payment and humiliating him in front of his neighbors.</p>
                      <p><strong className="text-yellow-400">The Counterattack:</strong> Amit stopped taking calls and communicated solely via email. He sent a strongly worded legal notice to the bank headquarters citing the specific RBI guidelines the agents violated during their home visit. He threatened to approach the Banking Ombudsman and file a police complaint. The harassment ceased immediately, and his case was transferred to an internal senior resolution officer.</p>
                      <p><strong className="text-yellow-400">The Proof:</strong> Amit supplied his termination letter, his mothers hospital admission records, and a bank statement showing a near zero balance. He established an undeniable narrative of absolute financial ruin.</p>
                      <p><strong className="text-yellow-400">The Negotiation:</strong> The bank initially demanded three lakh rupees to close the account. Amit rejected it, stating he could only borrow one lakh rupees from his brother. The bank countered with two lakhs. After another two weeks of holding his ground, Amit increased his offer slightly to one lakh eighty five thousand rupees as a final, take it or leave it proposition.</p>
                      <p><strong className="text-yellow-400">The Victory:</strong> Recognizing that litigation would yield nothing against an unemployed individual, the bank accepted. Amit received a formal settlement letter, paid the amount via NEFT, and received his NOC. He eliminated over three lakh forty thousand rupees of debt legally and safely.</p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-600 rounded-full -mr-40 -mt-40 opacity-10 blur-[100px]"></div>
                </div>
              </div>
            </section>

            <section>
              <h2 id="rebuilding-profile" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Rebuilding Your Financial Profile Post-Settlement</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Obtaining your No Objection Certificate is a monumental relief, but it is not the end of the journey. A settled credit card account leaves a lasting scar on your credit report. For the first two years post settlement, your CIBIL score will likely remain very low, and mainstream banks will automatically reject any applications for unsecured credit. You must proactively rebuild your financial reputation.
                </p>
                <p>
                  Your primary tool for credit rehabilitation is a secured credit card. Several banks offer credit cards backed by a Fixed Deposit. You place an amount, for example, fifty thousand rupees, into a Fixed Deposit, and the bank issues a credit card with a limit equal to ninety percent of that deposit. Since the bank holds your cash as collateral, they do not care about your past default.
                </p>
                <p>
                  You must use this secured card religiously for small purchases and pay the bill in full, five days before the due date, every single month without fail. Do not utilize more than thirty percent of the available limit. This establishes a brand new pattern of perfect repayment behavior.
                </p>
                <p>
                  Additionally, you can apply for small consumer durable loans, such as financing a mobile phone or a refrigerator, provided you make a large down payment. Paying these small EMIs flawlessly adds further positive data points to your credit file. Over a period of three to four years, the negative impact of the settlement will diminish in weight, your score will steadily rise, and you will eventually regain access to standard financial products.
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

            <section>
              <h2 id="start-journey" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Start Your Debt-Free Journey Today</h2>
              <div className="mt-16 p-16 md:p-24 bg-black text-white rounded-3xl text-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-base md:text-base font-bold mb-10 leading-[1]">Reclaim Your <span className="text-blue-500 underline underline-offset-[16px]">Financial</span> Freedom</h2>
                  <p className="text-gray-400 mb-16 max-w-4xl mx-auto text-base leading-relaxed">
                    You do not have to fight this battle alone. The banking system is designed to overwhelm you, but expert legal negotiators understand every loophole, policy, and tactic necessary to secure a massive waiver and end the harassment for good.
                  </p>
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
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" alt="Anuj Bhiya Legal Expert" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-50" />
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
