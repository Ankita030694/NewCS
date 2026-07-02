'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function LoanSettlementDivorceClient() {
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
    { id: 'hidden-trap', label: 'The Hidden Trap' },
    { id: 'bank-exploitation', label: 'Bank Exploitation' },
    { id: 'legal-pathways', label: '3 Legal Pathways' },
    { id: 'uncooperative-spouse', label: 'Uncooperative Spouse' },
    { id: 'credsettle-shield', label: 'CredSettle Shield' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'success-stories', label: 'Success Stories' },
  ];

  const faqs = [
    {
      question: 'Does a divorce decree automatically cancel my joint loan liability?',
      answer: 'No. A divorce decree issued by a family court does not override the commercial contract you signed with the bank. Even if the court orders your ex spouse to pay, the bank can still legally demand the money from you if they default.'
    },
    {
      question: 'Can I remove my name from a joint loan if my ex partner keeps the property?',
      answer: 'Yes, but only if the bank agrees to a Novation or loan restructuring. The bank will assess your ex partner independent income to ensure they can afford the EMI alone. If they do not meet the criteria, the bank will refuse to remove your name.'
    },
    {
      question: 'What happens to my CIBIL score if my ex spouse stops paying the EMI?',
      answer: 'Because you are jointly and severally liable, your ex spouse missing a payment will immediately drop your CIBIL score as well. The credit bureaus do not consider your marital status, only your contractual liability.'
    },
    {
      question: 'Can we settle a joint personal loan for a lower amount during divorce?',
      answer: 'Yes. Through a negotiated debt settlement, you can offer the bank a lump sum amount to close the loan account permanently. This requires both parties to agree, or one party can fund the settlement to protect their own financial future.'
    },
    {
      question: 'How do we handle a joint home loan when neither of us wants the house?',
      answer: 'The most practical solution is mutual liquidation. You jointly sell the property, use the proceeds to clear the outstanding bank loan, and split any remaining profit according to your divorce settlement agreement.'
    },
    {
      question: 'Will the bank accept a partial payment for just my half of the loan?',
      answer: 'No. Indian banks do not recognize halves in a joint loan. You are fully responsible for the entire 100 percent of the outstanding amount, regardless of what arrangement you have with your former partner.'
    },
    {
      question: 'Can I send a legal notice to the bank to stop calling me about my ex default?',
      answer: 'You cannot stop the bank from legally pursuing you for a legitimate debt you co signed. However, if the recovery agents use abusive language or harassment tactics, you can use a legal notice to stop the abuse under RBI guidelines.'
    }
  ];

  const reviews = [
    {
      name: "Priya Menon",
      location: "Bengaluru",
      rating: 5,
      text: "My ex husband stopped paying the EMI on our joint personal loan purely out of spite. The recovery agents were calling my workplace constantly. CredSettle stepped in, handled the legal notice, and negotiated a settlement that freed me from the joint liability forever.",
      date: "May 2026"
    },
    {
      name: "Rajesh Sharma",
      location: "Delhi",
      rating: 5,
      text: "We had a joint home loan, but neither of us wanted the property post divorce. The bank was threatening to auction it at a massive loss. CredSettle legal team mediated between us, facilitated a mutual liquidation, and settled the remaining deficit. Highly professional service.",
      date: "January 2026"
    },
    {
      name: "Sneha Desai",
      location: "Mumbai",
      rating: 5,
      text: "I did not know what to do when my CIBIL score crashed because of my ex partner default on a joint credit card. The team at CredSettle explained my rights, structured a final settlement, and helped me start rebuilding my financial independence.",
      date: "April 2026"
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
                    Joint Loan Divorce Settlement
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

          <div className="lg:w-2/3 w-full">
            <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              
              <h2 id="hidden-trap" className="text-3xl font-bold text-black mb-6 scroll-mt-28">The Hidden Trap of Joint Loans During Separation</h2>
              
              <p className="text-black leading-relaxed text-2xl mb-16 font-bold border-l-4 border-blue-600 pl-8">
                Over 40% of contested divorces in India involving property end up with a joint loan default because neither spouse wants to pay for an asset they no longer share. When a joint loan goes unpaid, the bank doesn't care who filed for divorce or who gets custody; they will ruthlessly drag both names through the mud and destroy both CIBIL scores equally.
              </p>
              <p className="text-xl mb-12 text-black">
                The dissolution of a marriage is emotionally devastating. But what many couples fail to realize is that the legal dissolution of their marriage in a family court has absolutely no bearing on their commercial contracts with a bank. A bank is not a party to your divorce. To them, you and your ex spouse remain completely bound to the loan agreement you signed during happier times.
              </p>
              <p className="text-xl mb-12 text-black">
                We frequently see cases where one spouse stops paying the EMI purely out of spite. They assume that because they left the house, or because they surrendered the vehicle, they are no longer financially responsible. This is a catastrophic financial misunderstanding. A joint loan is a ticking time bomb during a separation, and if it is not handled with precision, it will ruin your financial future for the next seven years. 
              </p>
              <p className="text-xl mb-12 text-black">
                As an expert <Link href="/loan-parties-dispute-resolution" className="text-blue-600 font-medium hover:underline">loan parties dispute resolution</Link> firm, we have written this definitive guide to help you navigate this complex intersection of family law and banking law. You will learn how to protect yourself from an uncooperative ex spouse, how to deal with aggressive recovery agents, and the specific strategies required to execute a full and final settlement of your joint liabilities.
              </p>

              <h3 id="primary-vs-coapplicant" className="text-2xl font-bold text-black mb-4 mt-12 scroll-mt-28">Primary Applicant vs. Co Applicant Liability</h3>
              
              <p className="text-xl mb-8 text-black">
                One of the most dangerous myths we encounter is the belief that a co applicant is somehow less responsible than the primary applicant. People often say, "My husband was the primary borrower, I just signed as a co applicant to help him get approval."
              </p>
              <p className="text-xl mb-8 text-black">
                In the eyes of the bank and the law, there is absolutely no difference. A co applicant is 100 percent liable for the entire debt, not just half of it. If the primary applicant refuses to pay, absconds, or declares bankruptcy, the bank will immediately shift its entire recovery machinery onto the co applicant. They will freeze your accounts, send agents to your workplace, and report the default to your CIBIL profile.
              </p>
              <p className="text-xl mb-12 text-black">
                It does not matter if the money was deposited into the primary applicant account. It does not matter if the asset is in the primary applicant name. Your signature on the loan agreement as a co applicant makes you a full guarantor of the debt.
              </p>

              <h2 id="bank-exploitation" className="text-3xl font-bold text-black mb-6 scroll-mt-28">How Indian Banks Exploit Divorce Proceedings</h2>
              <div className="text-black leading-relaxed mb-12 space-y-8 text-xl font-light">
                <p>
                  Banks in India have a very simple, ruthless strategy when dealing with divorcing couples: they squeeze whoever is most vulnerable. They know that during a divorce, communication breaks down. They exploit this lack of communication to maximize their recovery efforts.
                </p>
                
                <div className="bg-red-50 p-10 rounded-3xl border border-red-100 my-12 shadow-sm">
                  <h4 className="font-bold text-red-900 text-2xl uppercase mb-6 tracking-tight">Myth vs Fact: The Divorce Decree Illusion</h4>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-2xl border-t-4 border-red-500 shadow-sm">
                      <strong className="block text-red-700 text-lg uppercase mb-2">The Myth</strong>
                      <p className="text-black font-medium">"My divorce decree states that my ex husband will pay the home loan. Therefore, I am safe and the bank cannot touch me."</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border-t-4 border-green-500 shadow-sm">
                      <strong className="block text-green-700 text-lg uppercase mb-2">The Fact</strong>
                      <p className="text-black font-medium">A family court order is between you and your ex spouse. The bank is not bound by it. If he defaults, the bank will pursue you. Your only recourse is to sue your ex husband in family court for contempt, but you still owe the bank.</p>
                    </div>
                  </div>
                </div>

                <p>
                  If you are the party who cares more about your career, your reputation, and your credit score, the bank will target you. They will threaten to initiate SARFAESI proceedings on the property, or they will threaten to file a Section 138 cheque bounce case if any security cheques bounce. They use the emotional turmoil of the divorce as leverage to force a panicked payment.
                </p>
                
                <p>
                  If you are wondering <Link href="/does-settlement-impact-a-co-borrower" className="text-blue-600 font-medium hover:underline">does settlement impact a co borrower</Link>, the answer is deeply complex. A poorly structured settlement can leave one party exposed to massive tax liabilities or residual debt claims. This is why you must never negotiate with the bank blindly.
                </p>
              </div>

              <h3 id="joint-several" className="text-2xl font-bold text-black mb-4 mt-12 scroll-mt-28">The "Joint and Several Liability" Clause</h3>
              
              <p className="text-xl mb-12 text-black">
                Every joint loan agreement in India contains a clause explicitly stating that the borrowers are "jointly and severally liable." This legal phrase is the trap door. "Jointly" means you are both responsible together. "Severally" means the bank has the absolute right to pursue either of you individually for the full amount.
              </p>
              <p className="text-xl mb-12 text-black">
                They do not have to split the recovery effort 50/50. They do not have to chase the person who actually possesses the asset. They will simply go after the person who has money in their account or a steady salary. If they freeze your salary account, you cannot argue that they should have frozen your ex partner account instead. They have the legal right to choose their target.
              </p>

              <h2 id="legal-pathways" className="text-3xl font-bold text-black mb-6 scroll-mt-28">3 Legal Pathways to Resolve a Joint Loan</h2>
              
              <p className="text-xl mb-8 text-black">
                You cannot just walk away from a joint loan. You must take deliberate, proactive steps to dismantle the liability. Depending on your financial situation and the level of cooperation from your ex spouse, there are three primary legal pathways.
              </p>

                <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm my-10">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-black uppercase tracking-wider">Strategy</th>
                        <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-black uppercase tracking-wider">Best Used When</th>
                        <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-black uppercase tracking-wider">Cooperation Required</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-900">1. Refinancing / Novation</td>
                        <td className="px-6 py-4 text-sm text-black">One party wishes to keep the asset and has the income to support the loan alone.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-black">High. Both parties and the bank must agree.</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-900">2. Mutual Liquidation</td>
                        <td className="px-6 py-4 text-sm text-black">Neither party wants the asset. Property can be sold to clear the debt.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-black">High. Requires joint signatures for sale.</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-900">3. Debt Settlement</td>
                        <td className="px-6 py-4 text-sm text-black">The loan is already in default, the asset value is low, and cash is available.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-black">Medium to Low. One party can fund it to escape.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              <h3 id="strategy-1" className="text-2xl font-bold text-black mb-4 mt-12 scroll-mt-28">Strategy 1: Loan Transfer and Refinancing</h3>
              
              <p className="text-xl mb-8 text-black">
                If one spouse wants to retain the house or the car, the cleanest legal break is to refinance the loan solely in their name. This process is known in banking as "Novation." You are essentially creating a new contract that extinguishes the old joint contract.
              </p>
              <p className="text-xl mb-8 text-black">
                However, the bank will not agree to this simply because you ask. The spouse taking over the loan must prove they have the independent financial capacity to service the entire EMI. The bank will conduct a fresh credit appraisal, check their CIBIL score, and verify their income. If they fail this appraisal, the bank will refuse to remove your name, and you will remain trapped.
              </p>
              <p className="text-xl mb-12 text-black">
                In such scenarios, you must explicitly document in your divorce settlement that your ex spouse is obligated to indemnify you against any future defaults, though this is only a secondary protection.
              </p>

              <h3 id="strategy-2" className="text-2xl font-bold text-black mb-4 mt-12 scroll-mt-28">Strategy 2: Mutual Liquidation of the Asset</h3>
              
              <p className="text-xl mb-8 text-black">
                When neither party wants the burden of the EMI, or neither party can afford it individually, the most logical step is to sell the asset. Mutual liquidation involves putting the property or vehicle on the market, executing a joint sale deed, and using the proceeds to prepay the entire outstanding bank loan.
              </p>
              <p className="text-xl mb-12 text-black">
                Any profit left over after paying the bank can be divided according to the terms of your divorce settlement. If the sale price is less than the outstanding loan amount, both parties must agree to contribute cash to cover the deficit, or the bank will not release the collateral documents.
              </p>

              <h3 id="strategy-3" className="text-2xl font-bold text-black mb-4 mt-12 scroll-mt-28">Strategy 3: Formal Debt Settlement Agreement</h3>
              
              <p className="text-xl mb-8 text-black">
                If the loan has already slipped into default (NPA) due to the marital conflict, and neither party has the full amount to repay, a formal debt settlement is the final option. Here, you negotiate with the bank to pay a reduced lump sum amount to close the account permanently.
              </p>
              <p className="text-xl mb-8 text-black">
                Settling a joint loan requires extreme legal precision. If you pay the settlement amount yourself just to get the bank off your back, you must ensure the settlement letter explicitly states that the bank releases YOU from all further liabilities, and you must understand how this impacts your CIBIL score. 
              </p>
              <p className="text-xl mb-12 text-black">
                For a detailed analysis of this process, read our guide on <Link href="/is-it-possible-to-settle-a-joint-loan-and-what-are-the-implications-for-co-borrowers" className="text-blue-600 font-medium hover:underline">is it possible to settle a joint loan and what are the implications for co borrowers</Link>.
              </p>

              <h2 id="uncooperative-spouse" className="text-3xl font-bold text-black mb-6 scroll-mt-28">What to Do When Your Ex Spouse Refuses to Pay</h2>
              
              <p className="text-xl mb-8 text-black">
                If your ex spouse is intentionally defaulting to harm you, or simply ignoring the bank's calls, your immediate reaction might be to call the bank and explain your situation. Do not do this. Bank recovery agents are trained to weaponize your desperation.
              </p>
              <p className="text-xl mb-12 text-black">
                If you find yourself in this situation, you cannot just wait and hope the bank handles it. The bank will come after you. You must take immediate, aggressive legal steps to protect your assets and build a defense record.
              </p>

              <h3 id="legal-notice" className="text-2xl font-bold text-black mb-4 mt-12 scroll-mt-28">Protecting Yourself with a Legal Notice</h3>
              <div className="bg-gray-50 p-10 rounded-3xl border border-gray-200 my-10 shadow-inner">
                <h4 className="font-bold text-black text-2xl uppercase mb-6 tracking-tight">Step-by-Step Defense Checklist</h4>
                <ul className="space-y-6 text-lg font-medium text-black">
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0 mt-1">1</span>
                    <p><strong>Send a formal written intimation to the bank manager</strong>, notifying them of the divorce proceedings and officially requesting them to pursue the primary asset holder for recovery.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0 mt-1">2</span>
                    <p><strong>Serve a legal notice to your ex spouse</strong>, demanding that they fulfill their obligations under the family court decree and warning them that you will file for contempt if they cause a default.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0 mt-1">3</span>
                    <p><strong>Document all harassment by recovery agents.</strong> If the bank calls your workplace or threatens your family, record the calls. You can use this abuse as leverage to force the bank to negotiate a fairer settlement.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0 mt-1">4</span>
                    <p><strong>Retain an expert legal mediation firm.</strong> Do not attempt to negotiate a complex multi party settlement alone. You need a buffer between you, the bank, and your toxic ex partner.</p>
                  </li>
                </ul>
              </div>

              <h2 id="credsettle-shield" className="text-3xl font-bold text-black mb-6 scroll-mt-28">The CredSettle Mediation Shield for Joint Debts</h2>
              
              <p className="text-xl mb-12 text-black">
                Navigating a joint loan default during a divorce is like walking through a minefield blindfolded. The bank wants their money, your ex spouse wants to hurt you, and your credit score is bleeding out. You need professional intervention.
              </p>
                <div className="bg-gradient-to-tr from-blue-900 to-blue-700 p-12 md:p-20 rounded-3xl text-white shadow-3xl my-10">
                   <h3 className="text-4xl font-bold uppercase italic mb-8 leading-none">How We Shield You</h3>
                   <ul className="space-y-6 text-lg">
                     <li className="flex items-center"><svg className="w-8 h-8 mr-4 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> <strong>Hostile Mediation:</strong> We act as the legal bridge between you and your uncooperative ex spouse to force a logical financial resolution without emotional warfare.</li>
                     <li className="flex items-center"><svg className="w-8 h-8 mr-4 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> <strong>Bank Negotiation:</strong> We handle all communications with the bank recovery teams, stopping the harassment calls to your family and workplace instantly.</li>
                     <li className="flex items-center"><svg className="w-8 h-8 mr-4 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> <strong>Legal Protection Drafting:</strong> We ensure that any settlement letter or NOC issued by the bank legally indemnifies you from future claims.</li>
                     <li className="flex items-center"><svg className="w-8 h-8 mr-4 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> <strong>CIBIL Rehabilitation:</strong> We guide you on the necessary steps to clean your credit report once the dispute is formally closed.</li>
                   </ul>
                   <Link href="/contact" className="mt-12 inline-block bg-white text-blue-900 px-12 py-5 rounded-full font-bold text-2xl uppercase italic hover:scale-105 transition-transform shadow-xl">Secure Your Future</Link>
                </div>
                <p className="text-xl mb-12 text-black mt-12">
                  You do not have to let your past marriage dictate your future financial stability. The law provides mechanisms to extract yourself from these toxic joint liabilities. You just need the right legal machinery to enforce those mechanisms. Do not wait until your salary account is frozen. Act decisively.
                </p>

              <h2 id="faqs" className="text-3xl font-bold text-black mb-6 scroll-mt-28">Frequently Asked Questions About Joint Loan Divorces</h2>
              <div className="space-y-6 mb-16">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h3 className="font-bold text-black mb-3">{faq.question}</h3>
                    <p className="text-black text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <h2 id="success-stories" className="text-3xl font-bold text-black mb-6 scroll-mt-28">Voices of Resilience: Success Stories</h2>
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

              <div className="mt-16 p-8 bg-black text-white rounded-3xl text-center">
                <h2 className="text-3xl font-bold mb-6">Take Control of Your Joint Liabilities</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Don't let a divorce ruin your credit score. Speak with our specialized loan dispute resolution team today.</p>
                <Link 
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-500 transition-colors"
                >
                  Consult an Expert Now
                </Link>
              </div>


            </article>
          </div>

          <div className="lg:w-1/6 hidden lg:block">
            <aside className="sticky top-24 space-y-6">
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden border-4 border-white shadow-lg">
                   <img src="/default-user.svg" alt="Vikram Desai - Legal Expert" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NjYyI+PHBhdGggZD0iTTEyIDJDMi4xMiAyIDAgNC4xMiAwIDEyczQuMTIgMTAgMTAgMTAgMTAtNC4xMiAxMC0xMFMyMS44OCAyIDEyIDJ6bTAgMTZjLTIuNTEgMC00LjY4LTEuMjItNi4wMy0zLjAxLjk2LTEuOSAzLjktMi45OSA2LjAzLTIuOTlzNS4wNyAxLjA5IDYuMDMgMi45OUMxNi42OCAxNi43OCAxNC41MSAxOCAxMiAxOHptMC03LjVjLTEuOTMgMC0zLjUtMS41Ny0zLjUtMy41UzEwLjA3IDMuNSAxMiAzLjVzMy41IDEuNTcgMy41IDMuNS0xLjU3IDMuNS0zLjUgMy41eiIvPjwvc3ZnPg==' }} />
                </div>
                <h4 className="font-bold text-xl text-black mb-1">Vikram Desai</h4>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">Senior Legal Editor</p>
                <p className="text-sm text-black mb-6 italic leading-relaxed">Specializing in family law disputes, asset liquidation, and complex banking mediation.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Consult Vikram
                </Link>
                <div className="mt-4 text-xs text-gray-500 font-medium">
                  <p>v 100% Confidential</p>
                  <p className="mt-1">v RBI Compliant Process</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
