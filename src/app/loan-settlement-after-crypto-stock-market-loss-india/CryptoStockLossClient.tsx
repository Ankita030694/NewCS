'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CryptoStockLossClient() {
  const [activeId, setActiveId] = useState('');
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
      { rootMargin: '-100px 0px -35% 0px', threshold: 0.1 }
    );
    const headings = document.querySelectorAll('h2[id], h3[id]');
    headings.forEach((h) => observer.observe(h));
    return () => headings.forEach((h) => observer.unobserve(h));
  }, []);

  const navLinks = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'reality-trading-debts', label: 'Reality of Trading Debts' },
    { id: 'banks-care-how-you-lost', label: 'Do Banks Care?' },
    { id: 'psychology-chasing-losses', label: 'Psychology of Chasing Losses' },
    { id: 'immediate-steps', label: '4 Immediate Steps' },
    { id: 'settlement-strategies', label: 'Settlement Strategies' },
    { id: 'hardship-declaration', label: 'Hardship Declaration' },
    { id: 'multiple-unsecured-lenders', label: 'Multiple Unsecured Lenders' },
    { id: 'red-flags', label: 'Red Flags What Never to Do' },
    { id: 'common-myths', label: 'Myths vs Facts' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: "Can banks track my trading accounts if I default?",
      answer: "Yes. Banks can access your bank statements and CIBIL reports. If you transferred loan funds to trading accounts. It will be visible on your statements. Yet. For clean loans. They still need a court order to attach any remaining assets in those accounts."
    },
    {
      question: "Will the bank file a police complaint if I lost the money?",
      answer: "Failing to repay an clean own loan due to market losses is a civil matter. Not a crime. A police complaint (FIR) can only be filed if there is evidence of forgery. Papers falsification. penal breach of trust at the time of availing the loan."
    },
    {
      question: "What happens if I admit I gambled the loan money?",
      answer: "You are under no debts to explain the details of your losses to agents. Simply state that you are experiencing severe money hardship and lack the capacity to repay. Avoid providing unnecessary details that could be used to manipulate you."
    },
    {
      question: "Can I settle if my bank account balance is absolutely zero?",
      answer: "Yes. A genuine zero asset position actually strengthens your case for a hardship closure. Lenders are more likely to approve significant waivers when they realize the clients genuinely has no remaining capital or liquid assets to recover."
    },
    {
      question: "Do I have to pay taxes on the waived settlement amount?",
      answer: "Under Indian tax laws. A waiver of the main sum amount on a own loan is generally not considered taxable income. as it represents a capital receipt. Yet. You should consult a tax experts for advice exact to your case."
    },
    {
      question: "How long will this default stay on my CIBIL report?",
      answer: "A settled account will reflect as 'Settled' on your CIBIL report. the default history will remain visible for up to seven years. It will temporarily impair your ability to secure new clean credit lines."
    },
    {
      question: "Can recovery agents visit my workplace if I lost money?",
      answer: "Agents are prohibited from visiting your workplace or harassing you publicly under Reserve Bank of India guidelines. Regardless of how the loan funds were utilized. You have the legal right to file complaints if this occurs."
    }
  ];

  const reviews = [
    {
      name: "Siddharth Verma",
      location: "Mumbai, India",
      rating: 5,
      text: "I lost a massive amount in options trading and used my credit cards to recover the loss. which only made things worse. CredSettle helped me settle with five different banks simultaneously. They fully shielded me from the agents and closed my accounts with a 65 percent waiver.",
      date: "March 2026"
    },
    {
      name: "Rohit Agarwal",
      location: "Bengaluru, India",
      rating: 5,
      text: "After the recent crypto crash wiped out my entire portfolio. I was unable to pay my own loan EMIs. The bank sent a legal notice threatening penal action. The legal experts at CredSettle intervened fast. Explaining that it was a civil matter. secured an affordable structured closure.",
      date: "April 2026"
    },
    {
      name: "Aditya Singh",
      location: "New Delhi, India",
      rating: 5,
      text: "I was extremely ashamed of losing borrowed money in the stock market. CredSettle handled my case without any judgment. Their strategic hardship declaration approach worked flawlessly. I was finally able to sleep peacefully after months of anxiety and non stop calls calls.",
      date: "May 2026"
    }
  ];

  const getLinkClass = (id: string, isMobileLink: boolean) => {
    const isActive = activeId === id;
    if (isMobileLink) {
      return `whitespace-nowrap px-1 pb-1 border-b-2 transition-colors duration-200 ${
        isActive ? 'border-blue-600 text-blue-600 font-semibold' : 'border-transparent text-gray-600 hover:text-blue-600'
      }`;
    } else {
      return `block transition-all duration-200 pl-3 border-l-2 ${
        isActive ? 'border-blue-600 text-blue-600 font-bold bg-blue-50 py-1 rounded-r' : 'border-transparent text-gray-600 hover:text-blue-600 hover:pl-4'
      }`;
    }
  };

  return (
    <>
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center"> <Link href="/" className="inline-flex items-center hover:text-blue-600">Home</Link> </li>
              <li> <div className="flex items-center"> <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/> </svg> <Link href="/loan-settlement" className="ml-1 font-medium text-gray-500 hover:text-blue-600 md:ml-2">Loan closure</Link> </div> </li>
              <li> <div className="flex items-center"> <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/> </svg> <span className="ml-1 font-medium text-gray-500 md:ml-2">Trading Loss closure</span> </div> </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-12">
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
                <p className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Table of Contents</p>
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
            <main>
              <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                
                <section id="introduction" className="mb-16 scroll-mt-28">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Loan Settlement After Crypto & Stock Market Loss</h2>
                  <div className="text-gray-700 leading-relaxed text-2xl mb-10 space-y-10 font-light italic opacity-90 border-l-4 border-blue-600 pl-8">
                    <p> Over 89% of retail equity traders lose money in India. an alarming number are funding these losses through high rates own loans or credit card cash advances. If you are facing loan default because a crypto crash or stock market margin call wiped out your borrowed capital. You need an fast. Emotionless strategy to handle the banks. </p>
                    <p> The mental burden of losing borrowed money in the money markets is immense. Unlike firm failures or medical emergencies. Trading losses carry a heavy social stigma. Clients often feel paralyzed by shame. Fearing that the bank will discover where the money went and initiate penal steps. This fear is systematically exploited by agents who use harsh tactics to threaten clients into paying. Even when the clients has reached a state of absolute zero liquidity. </p>
                    <p> yet. The legal reality in India is fully different from the threats made over the phone. A default resulting from trading losses is a civil breach of contract. Not a penal act. This thorough guide provides a structured. Non judgmental legal roadmap for settling clean loans when your capital has been fully eroded by the stock market or cryptocurrency trading. We will dismantle the myths. Outline the fast steps you must take to protect yourself. detail the legal strategies to settle a favorable closure even when you have no assets left. <div className="flex items-center gap-2 mt-4 text-sm text-gray-500 not-italic"> <span>By Rahul Sharma</span> <span>&bull. </span> <time dateTime="2026-07-02">Published on: July 2. 2026</time> </div> </p>
                  </div>
                </section>

                <section id="reality-trading-debts" className="mb-16 scroll-mt-28">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Reality of Trading Debts in India</h2>
                  <div className="text-gray-700 leading-relaxed space-y-8 text-xl">
                    <p> The proliferation of easy access digital lending platforms and frictionless brokerage applications has created a dangerous intersection in India. Retail investors. Lured by the promise of quick returns during bull runs or crypto booms. Often take out clean own loans to leverage their positions. When the market inevitably corrects. A highly volatile crypto asset crashes. The borrowed capital vanishes fully. </p>
                    <p> What remains is a high rates risk with no underlying asset to liquidate. This is fundamentally different from defaulting on a car loan or a home loan. where the bank can simply repossess the pledge. In the case of trading debts funded by own loans. The bank holds clean debt. There is nothing tangible for them to seize fast. To understand the exact definition and implications of clean defaults. You must first comprehend <Link href="/what-is-npa" className="text-blue-600 underline">what is npa</Link> and how banks classify these bad loans. </p>
                    <p> The desperation to hide the loss from family members often leads clients into a debt trap. They take a second loan to pay the EMI of the first loan. Worse. They take another loan to make one final "revenge trade" in hopes of recovering the lost money. This cycle accelerates the journey towards total money collapse. Acknowledging that the money is gone and the debt remains is the painful but necessary first step toward legal and money relief. </p>
                    <p> If the bank discovers that the loan was used for speculative trading. Agents will often amplify their threats. They will claim that investing loan money in the stock market or crypto constitutes "fraud" or "misappropriation of funds," threatening police action or jail time. It is crucial to by law deconstruct these threats before panic sets in and forces you into making irrational decisions. </p>
                  </div>
                </section>

                <section id="banks-care-how-you-lost" className="mb-16 scroll-mt-28">
                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Do Banks Care How You Lost The Money?</h3>
                  <div className="text-gray-700 leading-relaxed space-y-8 text-xl">
                    <p> From a purely legal standpoint. An clean own loan is granted based on your creditworthiness. Income history. CIBIL score at the time of application. While the loan application may ask for an "end use" category (like home renovation. Medical. Own). The bank generally does not track the downstream utilization of clean funds unless stipulated by exact RBI restrictions. </p>
                    <p> When you default. The bank's primary objective shifts from rates generation to capital claims. The claims department is incentivized to collect the maximum possible amount in the shortest possible time. They do not intrinsically care if the money was lost in a medical emergency or a crypto crash. they only care about their claims metrics. </p>
                    <p> yet. Agents will use the knowledge of your trading losses as a mental weapon. If they see massive transfers to Zerodha. Groww. Binance. WazirX on your bank statements. They will use it to shame you. They will threaten to inform your family about your "gambling" habits. They will threaten to file a police case for fraudulent intent. This is fully a talks tactic. If you are worried about the legality of your case. You should fast read our guide on <Link href="/can-i-go-to-jail-for-loan-default-in-india" className="text-blue-600 underline">can i go to jail for loan default in india</Link> to alleviate these exact fears. </p>
                    <p> The truth is. Investing in the stock market or legal cryptocurrency exchanges is not a crime in India. Taking a own loan and subsequently losing that money in the market is an extremely poor money decision. it is not a crime. The breach of contract is civil. The bank must follow civil claims procedures. which eventually lead to the Debt claims court (DRT) or Lok Adalat for a settle closure. </p>
                  </div>
                </section>

                <section id="psychology-chasing-losses" className="mb-16 scroll-mt-28">
                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Psychology of Chasing Losses</h3>
                  <div className="text-gray-700 leading-relaxed space-y-8 text-xl">
                    <p> Before addressing the legal workings of closure. We must address the mental loop that prevents clients from acting rationally. Behavioral economics describes the phenomenon of "loss aversion" and the "sunk cost fallacy." When a trader loses a significant amount of capital. The emotional pain is acute. The brain aggressively seeks a way to undo the damage. Leading to higher risk behavior. </p>
                    <p> In the context of loan funded trading. This manifests as "chasing losses." The clients takes out further high rates digital loans from 7 day loan apps or exhausts their credit card limits to fund highly leveraged options trades (F&O) or volatile crypto futures. Hoping for a miraculous claims. This is mathematically disastrous. The probability of recovering a massive loss through rushed. Emotional trading is near zero. </p>
                    <p> The agents understand this psychology. They know you are vulnerable. Ashamed. desperate. They will push you to borrow from friends. Family. Loan sharks just to clear the fast EMI. Keeping the loan out of the Non Performing Asset (NPA) category. You must break this loop fast. Paying an EMI with more borrowed money when your capital is zero is money suicide. It merely postpones the inevitable default while increasing the total main sum you owe. </p>
                    <p> Accepting the loss is the prerequisite for initiating a successful closure. You must shift your mindset from "how do I win this back" to "how do I by law contain this damage." Once you accept that the trading capital is gone. You can begin to execute a structured default and closure strategy. </p>
                  </div>
                </section>

                <section id="immediate-steps" className="mb-16 scroll-mt-28">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">4 Immediate Steps When You Hit Financial Zero</h2>
                  <div className="text-gray-700 leading-relaxed space-y-8 text-xl">
                    <p> When you look at your brokerage account and see a zero balance. You know the loan EMI is due next week. Panic is the natural response. Yet. Panic leads to mistakes. If you have fully exhausted your liquid funds and have no realistic means of paying the upcoming EMI without borrowing further. You must initiate a defensive money posture fast. </p>
                    <p> The following step checklist outlines the key actions you must take within the first 48 hours of realizing you cannot service the debt. These steps are designed to protect your essential income. Block unlawful threats. prepare the groundwork for a future closure talks. </p>

                    <div className="bg-blue-50 p-10 rounded-3xl border-2 border-blue-100 my-10 relative">
                      <h3 className="font-bold text-blue-900 mb-6 text-2xl uppercase tracking-wider text-center">Step Checklist: fast Actions</h3>
                      <ul className="space-y-6 text-lg">
                        <li className="flex items-start"> <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">1</div> <div> <strong className="block text-gray-900">Stop Chasing the Loss:</strong> <p className="text-gray-700 mt-1">fast freeze your trading accounts. Delete the brokerage apps from your phone. Do not. Under any hardship. Take out another loan from a digital lending app or borrow from friends to attempt a claims trade. Accept the current loss as the absolute bottom.</p> </div> </li>
                        <li className="flex items-start"> <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">2</div> <div> <strong className="block text-gray-900">Secure Your Essential Income:</strong> <p className="text-gray-700 mt-1">If your salary is credited to the same bank where you defaulted on the own loan or credit card. The bank will automatically deduct the dues using the Right of Set Off. You must fast open a new salary account in a fully different. Unrelated bank and redirect your HR payroll deposits there. This ensures you have money to survive.</p> </div> </li>
                        <li className="flex items-start"> <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">3</div> <div> <strong className="block text-gray-900">Revoke E NACH Mandates:</strong> <p className="text-gray-700 mt-1">Log into your bank portal and officially revoke any E NACH or auto debit mandates linked to the defaulted loans. While the loan company may still present the mandate. Officially revoking it creates a paper trail showing you attempted to stop the transaction due to lack of funds. which can be useful later.</p> </div> </li>
                        <li className="flex items-start"> <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">4</div> <div> <strong className="block text-gray-900">Communicate with Lenders in Writing:</strong> <p className="text-gray-700 mt-1">Do not avoid the bank fully. do not settle over the phone. Send a formal email to the bank's grievance head stating that due to severe and unforeseen money hardship. You are currently unable to service the EMIs. Request a temporary EMI freeze or restructuring. You do not need to mention trading losses. simply state "money hardship." Keep a copy of this email.</p> </div> </li>
                      </ul>
                    </div>
                    <p> Executing these four steps halts the fast bleeding. It secures your survival money and forces the bank to acknowledge that standard auto debits will no longer work. This moves the account closer to NPA status. which is paradoxically necessary because banks rarely offer substantial closure discounts on accounts that are technically regular and performing. </p>
                  </div>
                </section>

                <section id="settlement-strategies" className="mb-16 scroll-mt-28">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Settlement Strategies When You Have No Assets Left</h2>
                  <div className="text-gray-700 leading-relaxed space-y-8 text-xl">
                    <p> settle a closure when your net worth is zero requires a exact approach. The bank's entire leverage is based on the threat of future legal action or current social embarrassment. Your leverage is the absolute lack of recoverable assets. If a clients has no home. No massive bank balance. No liquid assets. A civil suit is fundamentally useless to the bank. A court decree cannot extract money that does not exist. </p>
                    <p> The objective is to convince the bank's claims handling that offering a large waiver is the most mathematically logical outcome for them. They must realize that spending money on legal fees to pursue a destitute clients will only increase their total loss. This process requires patience. The best deals usually appear between 180 to 360 days after the first default. Right before the money year end or quarter end when banks are desperate to clear bad loans from their books. </p>
                    <p> During this waiting period. The bank will escalate their tactics. They will send legal notices drafted by empanelled counsel threatening arbitration. Section 138 (if security cheques were given). civil suits. It is vital not to panic. If you receive a legal notice. You must respond to it by law. Ignoring it is a mistake. Read our detailed protocol on what to do when the <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-blue-600 underline">bank sent legal notice for loan what to do</Link> to ensure your response is bulletproof. </p>
                  </div>
                </section>

                <section id="hardship-declaration" className="mb-16 scroll-mt-28">
                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Hardship Declaration Approach</h3>
                  <div className="text-gray-700 leading-relaxed space-y-8 text-xl">
                    <p> The most effective legal strategy for trading debt is the formal Hardship Declaration. Instead of making excuses or arguing with telecallers. Your legal representative issues a thorough statement of your money insolvency to the bank's senior handling and the nodal head. </p>
                    <p> This declaration outlines your current income. Your absolute lack of liquid assets. your inability to service the accumulated debt. The goal is to transparently demonstrate that the bank's projected claims rate through legal channels is zero. By presenting a stark. Documented reality of your money collapse. You eliminate the effectiveness of their threaten tactics. </p>
                    <p> When the bank's legal department reviews a properly drafted hardship declaration. They categorize the account as "high risk for total write off." This categorization unlocks the authority for senior managers to offer maximum waivers. In many cases of severe trading losses. Banks have agreed to settle for 30% to 40% of the main sum amount. Fully waiving all accumulated rates. Penal charges. late fees. The closure is executed formally. Resulting in a No Dues letter and closure of the legal dispute. </p>
                  </div>
                </section>

                <section id="multiple-unsecured-lenders" className="mb-16 scroll-mt-28">
                  <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Dealing with Multiple clean Lenders</h3>
                  <div className="text-gray-700 leading-relaxed space-y-8 text-xl">
                    <p> Traders who blow their accounts rarely owe just one bank. Typically. There is a web of two own loans. Three credit cards. perhaps a handful of digital lending apps. Dealing with multiple lenders simultaneously is a logistical nightmare. Each bank deploys its own claims firm. Resulting in dozens of calls a day and conflicting deals. </p>
                    <p> The strategy here is prioritization and merger of talks. You cannot settle all of them at once if you have no money. You must create a structured closure timeline. </p>
                    <p> First. You must instruct your legal representative to handle all contact. Once a counsel steps in. The Reserve Bank of India mandates that the bank must direct all correspondence to the legal counsel. Effectively stopping the barrage of phone calls to your own number. Second. You prioritize the closures based on the aggressiveness of the lender and the size of the discount offered. You settle the smallest debts first to build momentum. you tackle the most harsh bank to buy peace of mind. By compartmentalizing the debt and settle through a legal firewall. You turn a chaotic crisis into a manageable. Step by step legal process. </p>
                  </div>
                </section>

                <section id="red-flags" className="mb-16 scroll-mt-28">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Red Flags: What Never to Do Right Now</h2>
                  <div className="text-gray-700 leading-relaxed space-y-8 text-xl">
                    <p> When you are under immense pressure from agents demanding fast payment for money you lost in the market. The instinct is to find a quick fix. Unfortunately. The "quick fixes" in debt claims almost always lead to deeper money ruin or severe legal complications. You must recognize the red flags and absolutely avoid the following actions. </p>
                    
                    <div className="bg-red-50 p-8 rounded-3xl border-2 border-red-200 my-10">
                      <h3 className="text-red-800 font-bold text-2xl uppercase tracking-wider mb-6 border-b border-red-200 pb-4">Red Flags List: key Mistakes to Avoid</h3>
                      <ul className="space-y-6 text-gray-800">
                        <li className="flex items-start"> <svg className="w-8 h-8 text-red-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> <div> <strong className="block text-xl mb-1">Taking a Loan to Pay a Loan</strong> <p>Never take a new own loan. Borrow from loan sharks. To pay the EMI of an existing defaulted loan. This is the definition of a debt trap. You are merely exchanging a 15% rates debt for a 30% or 40% rates debt. Accept the default.</p> </div> </li>
                        <li className="flex items-start"> <svg className="w-8 h-8 text-red-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> <div> <strong className="block text-xl mb-1">Signing Blank Cheques for Restructuring</strong> <p>If the bank offers to restructure the loan but demands fresh blank signed cheques as "security," refuse fully. Issuing new cheques while you are insolvent exposes you to Section 138 (Cheque Bounce) penal steps. clean loans should remain clean.</p> </div> </li>
                        <li className="flex items-start"> <svg className="w-8 h-8 text-red-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> <div> <strong className="block text-xl mb-1">Paying Cash to agents</strong> <p>Never hand over cash to a visiting agents under the promise of a "special discount." These transactions often never reach your loan account. All closure payments must be made digitally straight to the valid loan account after receiving a formal closure note.</p> </div> </li>
                        <li className="flex items-start"> <svg className="w-8 h-8 text-red-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> <div> <strong className="block text-xl mb-1">Confessing "Fraud" on Recorded Lines</strong> <p>Telecallers will try to bait you into saying you "misused" the funds for gambling or crypto. Do not engage in these recorded talks. Do not apologize profusely or make false promises of payment. Stick to the simple fact of money insolvency.</p> </div> </li>
                      </ul>
                    </div>
                    <p> Navigating a default requires cold. Calculated discipline. Any action taken out of fear or guilt will be used against you by the bank's legal team. By avoiding these red flags. You preserve your settle leverage and protect yourself from penal debts. </p>
                  </div>
                </section>

                <section id="common-myths" className="mb-16 scroll-mt-28">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Myths About Trading Debts vs Facts</h2>
                  <div className="text-gray-700 leading-relaxed space-y-8 text-xl">
                    <p> The stigma surrounding trading losses makes clients highly susceptible to misinformation. Claims firms exploit this ignorance. Propagating myths designed to maximize fear and compliance. Let us systematically dismantle the most prevalent falsehoods regarding trading related loan defaults in India. </p>
                    
                    <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden my-12 shadow-sm">
                      <h3 className="bg-blue-900 text-white p-6 text-2xl font-bold m-0 uppercase text-center">Myth vs Fact: Trading Debt claims</h3>
                      <div className="divide-y divide-gray-200">
                        <div className="p-8 hover:bg-gray-50 transition-colors">
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                              <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-bold uppercase tracking-wider mb-3">Myth</span>
                              <p className="text-lg font-medium text-gray-900">Trading with loan money is unlawful and constitutes penal fraud.</p>
                            </div>
                            <div className="flex-1">
                              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold uppercase tracking-wider mb-3">Fact</span>
                              <p className="text-lg text-gray-700">Unless you explicitly forged papers to obtain the loan. Utilizing a own loan to trade in legal equities or registered crypto exchanges is a civil matter. It is a breach of the loan pacts terms. it is not a crime.</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-8 hover:bg-gray-50 transition-colors">
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                              <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-bold uppercase tracking-wider mb-3">Myth</span>
                              <p className="text-lg font-medium text-gray-900">The bank will freeze all your family members' bank accounts.</p>
                            </div>
                            <div className="flex-1">
                              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold uppercase tracking-wider mb-3">Fact</span>
                              <p className="text-lg text-gray-700">The bank can only freeze accounts that belong strictly to you. usually only within the same banking institution (Right of Set Off). They have absolutely zero legal authority to freeze accounts belonging to your spouse. Parents. siblings.</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-8 hover:bg-gray-50 transition-colors">
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                              <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-bold uppercase tracking-wider mb-3">Myth</span>
                              <p className="text-lg font-medium text-gray-900">If you settle the loan. You can never get a job or travel abroad.</p>
                            </div>
                            <div className="flex-1">
                              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold uppercase tracking-wider mb-3">Fact</span>
                              <p className="text-lg text-gray-700">A settled loan affects your CIBIL score. which impacts future borrowing. It does not affect your passport. Visa fit. general employment prospects. unless you are applying for high security roles in the banking sector itself.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p> By grasp the facts. You strip away the artificial urgency created by calls agents. A default is a money problem with a mathematical and legal solution. It is not the end of your life. Nor is it a case that requires enduring abuse. </p>
                  </div>
                </section>

                <section id="faqs" className="mb-16 scroll-mt-28">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-8">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                        <h3 className="font-bold text-2xl text-gray-900 mb-4 tracking-tight border-l-4 border-blue-600 pl-4">{faq.question}</h3>
                        <p className="text-gray-700 leading-relaxed text-xl">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Success Stories</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                      <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-4 text-yellow-400 text-lg tracking-widest">
                          {[...Array(review.rating)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed italic mb-6">"{review.text}"</p>
                        <div className="flex items-center border-t pt-6 border-gray-50">
                          <div className="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center text-white font-bold text-xl mr-4">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 uppercase tracking-tight text-sm">{review.name}</p>
                            <p className="text-xs text-blue-600 uppercase font-bold">{review.location} • {review.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="mt-20 p-12 md:p-16 bg-blue-900 text-white rounded-3xl text-center shadow-xl">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight italic">Rebuild After the Loss</h2>
                  <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-xl leading-relaxed">Stop the threats and resolve your trading debts by law. Let CredSettle settle your money reset today.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-12 py-5 rounded-full font-bold text-xl uppercase tracking-tighter hover:bg-gray-100 transition-all shadow-lg hover:scale-105"
                  >
                    Get Legal Help Now
                  </Link>
                </div>

              </article>
            </main>
          </div>

          {/* Right Column: CTA & Related (Sticky) */}
          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              {/* Main CTA Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <p className="font-bold text-xl text-gray-900 mb-2">Need Urgent Help?</p>
                <p className="text-sm text-gray-600 mb-6">Don&apos. t face the bank alone. Get expert legal support today.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Request Call Back
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>v 100% private</p>
                  <p className="mt-1">v RBI Compliant Process</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bank Settlement Directory Grid */}
      <div className="max-w-[1440px] mx-auto px-4 py-12 border-t border-gray-200 mt-12">
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
      <div className="max-w-[1440px] mx-auto px-4 py-12 border-t border-gray-200">
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
