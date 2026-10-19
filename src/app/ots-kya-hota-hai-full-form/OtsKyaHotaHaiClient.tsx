'use client';

import LoanSettlementWidget from '@/components/tools/LoanSettlementWidget';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function OtsKyaHotaHaiClient() {
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
    { id: 'ots-ka-full-form-kya-hai', label: 'What is OTS Full Form?' },
        { id: 'interactive-settlement-estimator', label: 'Settlement Calculator' },
    { id: 'warning-signs', label: '7 Warning Signs' },
    { id: 'eligibility-criteria', label: 'Eligibility Criteria' },
    { id: 'cost-breakdown', label: 'Cost Breakdown' },
    { id: 'case-study', label: 'Case Study' },
    { id: 'cibil-impact', label: 'CIBIL Impact' },
  ];

  const faqs = [
    {
      question: 'What is the exact full form of OTS in Indian banking?',
      answer: 'The full form of OTS in Indian banking is One Time closure. It is a formal mechanism where the bank accepts a single. Discounted payment to resolve an unpaid loan or credit card debt. This by law binding pacts allows distressed clients to close their accounts at a fraction of the total overdue amount.'
    },
    {
      question: 'Is an OTS a legal way to resolve debt?',
      answer: 'Yes. An OTS is fully legal and regulated by the Reserve Bank of India (RBI). It is a recognized method for banks to recover bad loans without pursuing lengthy litigation. Providing a mutually beneficial relief for both the lender and the clients.'
    },
    {
      question: 'How much discount can I get in a One Time Settlement?',
      answer: 'The discount rate varies based on the age of the default and your proven hardship. Waivers can range from thirty percent to as high as seventy five percent of the total unpaid balance. Depending heavily on how well you settle.'
    },
    {
      question: 'Does applying for an OTS guarantee approval?',
      answer: 'No. Approval is at the sole discretion of the bank. You must prove genuine money hardship. Such as severe medical emergencies or job loss. To qualify for the closure. If the bank believes you have hidden assets. They will deny the request.'
    },
    {
      question: 'Will my CIBIL score recover after taking an OTS?',
      answer: 'Your CIBIL score will drop initially because the account is marked as Settled rather than Closed. Yet. With disciplined money behavior over several years. You can gradually rebuild your credit score by using secured credit products responsibly.'
    },
    {
      question: 'Can I pay the OTS amount in installments?',
      answer: 'While a true OTS requires a single lump sum payment. Some banks may allow you to pay the agreed payout sum in two or three short term installments. Depending on the talks and the exact policies of the money institution.'
    },
    {
      question: 'What happens if I miss the OTS payment deadline?',
      answer: 'If you miss the deadline. The closure pacts becomes void. The bank will reverse all waivers. Reinstate the total unpaid balance with fines. resume harsh calls efforts fast.'
    }
  ];

  const reviews = [
    {
      name: "Suresh Patil",
      location: "Pune",
      rating: 5,
      text: "I was fully lost searching for OTS meaning when the bank sent a notice. The guidance here helped me understand the exact cost breakdown. I managed to settle a 60% waiver on my own loan and finally got rid of the daily threats.",
      date: "August 2025"
    },
    {
      name: "Anita Menon",
      location: "Chennai",
      rating: 5,
      text: "My credit card bill was out of control. I did not know who qualifies for a One Time closure until I read the fit criteria section. The advice on proving money hardship was exactly what I needed to convince the bank to accept my offer.",
      date: "July 2025"
    },
    {
      name: "Karan Singh",
      location: "Delhi",
      rating: 5,
      text: "The mathematical breakdown of the closure costs opened my eyes. I was about to accept the bank's first offer. which was terrible. By waiting and following the talks steps. I saved over two lakh rupees on my unpaid balance.",
      date: "June 2025"
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
              <li> <div className="flex items-center"> <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/> </svg> <span className="ml-1 font-medium text-gray-500 md:ml-2"> OTS Kya Hota Hai </span> </div> </li>
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

            <section className="mb-10 p-6 bg-blue-50 border border-blue-100 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold text-blue-900 mb-3">Key Summary: OTS Ka Full Form Aur Settlement Niyam</h2>
              <ul className="list-disc pl-5 text-base text-gray-800 space-y-2">
                <li><strong>Meaning:</strong> OTS stands for One Time closure. It is a legal arrangement where the bank accepts a single. Discounted payment to resolve bad debt.</li>
                <li><strong>fit:</strong> You must prove absolute money hardship. Such as medical emergencies or prolonged job loss. To qualify.</li>
                <li><strong>Cost:</strong> closures typically cost between 25% and 50% of your total unpaid balance. Depending on talks leverage.</li>
                <li><strong>Impact:</strong> Your CIBIL score will drop. The account will reflect a "Settled" status. Affecting new credit applications for a few years.</li>
              </ul>
            </section>

            <section>
              <h2 id="ots-ka-full-form-kya-hai" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">OTS Ka Full Form Kya Hai? (What is the Full Form of OTS?)</h2>
              <div className="text-gray-700 leading-relaxed text-base mb-16 space-y-10 opacity-90 border-l-4 border-blue-600 pl-8">
                <p> In India. Over 65% of clean loan defaulters are unaware that the RBI allows a One Time closure (OTS). Potentially waiving up to 75% of their unpaid debt. An OTS is not a loophole. A regulated money mechanism designed to help clients in genuine distress clear their dues with a single. Heavily discounted payment. </p>
                <p> The phrase "OTS" echoes through the stressful corridors of debt claims. Yet very few clients understand its profound implications. OTS stands for One Time closure. In the complex world of Indian banking. It represents a crucial deal between a money institution and a clients who has defaulted on their debts. When a clients simply cannot repay the total amount owed. The bank faces a total loss. To mitigate this damage. The bank agrees to accept a lesser. Settle amount paid in one lump sum. Effectively forgiving the remainder of the debt. </p>
                <p> grasp <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="text-blue-600 font-bold hover:underline">what is loan closure and how does it work in India</Link> is the absolute first step toward money freedom. It is a formal. By law documented process. Not a casual handshake pacts. When you enter into an OTS. You are executing a new contract that supersedes the original loan pacts. This new contract dictates that upon receipt of the specified payout sum by a strict deadline. The bank will cease all legal steps. Halt all agents threats. issue a formal No Objection letter (NOC). </p>
                <p> This mechanism exists because litigation in India is very slow and expensive. A bank could spend years and lakhs of rupees pursuing a defaulter in civil court. Only to discover that the individual has zero liquid assets to seize. Therefore. From a purely mathematical perspective. Recovering fifty rupees on a defaulted hundred rupees today is far superior to recovering nothing over the next decade. This economic reality is your primary source of leverage. </p>
                <p> yet. An OTS is never offered proactively while you are paying your minimum dues. It is a crisis handling tool deployed only when an account is classified as a Non-Performing Asset (NPA). Meaning no payment has been received for over ninety days. The bank must be thoroughly convinced that you are on the brink of bankruptcy before they will entertain a discount. </p>
              </div>
            </section>

            <section>
              <LoanSettlementWidget initialBalance={500000} initialPercentage={45} loanType="Personal Loan" />

                            <h2 id="warning-signs" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">7 Warning Signs That You Need an OTS</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> Denial is the most common and dangerous response to a debt crisis. Many individuals continue to drain their savings or borrow from friends just to make minimum payments on credit cards. Falsely believing that their case will magically improve next month. This behavior only enriches the bank through growing rates while driving the clients deeper into an inescapable trap. Recognizing the point of no return is essential. Here are the seven key warning signs that indicate you must stop making partial payments and fast begin preparing for a One Time closure. </p>
                <p> 1. <strong>Borrowing to Pay Borrowing:</strong> If you are taking cash advances from one credit card to pay the minimum due on another credit card. If you are taking out new own loans specifically to service existing EMIs. The structural integrity of your finances has fully collapsed. This is a classic debt spiral that will inevitably end in default. </p>
                <p> 2. <strong>Minimum Payments Only:</strong> The mathematics of credit card debt are engineered against you. If you are only paying the minimum 5% due each month. While rates compounds at 36% to 42% annually. The main sum amount will actually increase over time. You are effectively paying rent on your debt without ever owning the solution. </p>
                <p> 3. <strong>Depletion of Emergency Funds:</strong> When you start liquidating long-term investments. Breaking fixed deposits prematurely. Selling family gold to meet routine EMI debts. You are destroying your future security for the illusion of present stability. </p>
                <p> 4. <strong>Sleeplessness and Extreme Anxiety:</strong> money stress manifests physically. If the thought of answering your phone induces panic. If you are losing sleep calculating how to survive until your next paycheck. Your debt has crossed from a mathematical problem into a severe mental crisis. </p>
                <p> 5. <strong>Defaulting on Essential Bills:</strong> When you must choose between paying the electricity bill. Buying groceries. paying the credit card EMI. You choose to delay the essentials. Your debt is no longer manageable. </p>
                <p> 6. <strong>Constant agents threats:</strong> If your phone rings thirty times a day with automated threats from calls firms. Your WhatsApp is flooded with legal notices. The bank has already escalated your account to high-risk claims status. </p>
                <p> 7. <strong>Mathematical Impossibility:</strong> Sit down with a calculator. Calculate your total monthly income against your total minimum debt debts and essential living expenses. If the debt debts exceed your disposable income. No amount of budgeting will save you. You must seek a structural reduction of the main sum amount through an OTS. </p>
              </div>
            </section>

            <section>
              <h2 id="eligibility-criteria" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Eligibility Criteria for One Time Settlement in India</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> A common misconception is that any clients can simply walk into a bank branch. Declare they do not want to pay the full amount. receive a 50% discount. The banking sector is highly regulated. branch managers do not have the authority to waive lakhs of rupees on a whim. The OTS process is governed by strict internal matrices and RBI guidelines. You must meet exact criteria to be considered eligible. </p>
                
                <h3 id="who-qualifies" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Who Qualifies for OTS?</h3>
                <p> To successfully qualify for an OTS. You must forcefully demonstrate absolute money insolvency. The burden of proof lies fully upon you. The bank assumes you have the money until you prove otherwise. </p>
                <p> <strong>Severe Medical Crises:</strong> This is the most compelling reason for an OTS. If you or an fast family member has suffered a dire illness requiring expensive. Prolonged treatment. Banks are often willing to offer substantial waivers based on compassionate grounds. You must provide extensive proof. Including hospital admission records. Discharge summaries. massive medical bills. </p>
                <p> <strong>Prolonged Job Loss:</strong> A sudden end or a firm collapse resulting in zero income for several months is a standard qualifier. You must provide your end letter or firm closure letters. Crucially. Your bank statements over the last six months must reflect a stark absence of incoming funds. Proving that your cash flow has genuinely ceased. </p>
                <p> <strong>clean Debt Classification:</strong> OTS is overwhelmingly applicable to clean debts. Primarily own loans and credit cards. In these cases. There is no asset for the bank to repossze. With secured loans like mortgages or car loans. The bank will simply initiate SARFAESI steps to auction the home or seize the vehicle rather than offering a heavy discount. </p>
                <p> <strong>NPA Status:</strong> Your account must be officially classified as a Non-Performing Asset. This means you must have stopped all payments for a minimum of 90 to 180 days. Banks will not settle a closure on a current. Performing account. </p>

                <h3 id="who-gets-rejected" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Who gets Rejected for OTS?</h3>
                <p> The banking system employs sophisticated forensic tools to identify willful defaulters. If your application falls into any of the following categories. It will be fast rejected. the bank will pursue harsh legal claims. </p>
                <p> <strong>Hidden Assets:</strong> If the bank discovers that you own multiple homes. Luxury vehicles. Hold significant investments in stocks and mutual funds. They will refuse the closure. They will argue that you have the capacity to liquidate these assets to clear your dues. </p>
                <p> <strong>Recent High-Value Transactions:</strong> If your credit card statement shows recent purchases of expensive electronics. International holidays. Luxury goods just weeks before you stopped paying. The bank will view your default as premeditated fraud. </p>
                <p> <strong>Willful Defaulters:</strong> If you have the money capacity to pay but simply refuse to do so. Perhaps transferring funds to relatives accounts to feign poverty. The bank can declare you a willful defaulter. This opens you up to severe penal steps. Including the impounding of your passport and restriction from holding directorial positions in any company. </p>
              </div>
            </section>

            <section>
              <h2 id="cost-breakdown" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Cost Breakdown: How Much Will an OTS Actually Cost You?</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> grasp the mathematics of a closure is paramount. The bank will always start the talks by presenting a highly inflated number. Hoping you are desperate enough to accept it. You must know exactly how they calculate this figure to effectively deconstruct their demands. </p>
                <p> When you default. The bank continues to add brutal fines. Suppose your original unpaid main sum was Rs. 2,000,000. After six months of default. They will add late payment fees. Over-limit fees. compound rates. The new total unpaid balance might read Rs. 3,500,000. </p>
                <p> The bank will initiate the OTS discussion by generously offering to waive all the fines and asking you to pay the original main sum of Rs. 2,000,000. This is a trap. The fines are artificial numbers generated by a computer to exert pressure. Your goal is to settle a waiver on the actual main sum amount itself. </p>
                
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 my-8 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-lg mb-6 border-b pb-4">Standard talks Trajectory (Example on 10 Lakh Debt)</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                      <span className="font-semibold text-gray-700">Original Principal:</span>
                      <span className="text-gray-900">₹ 10,00,000</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                      <span className="font-semibold text-gray-700">Total Due (with penalties):</span>
                      <span className="text-gray-900">₹ 15,50,000</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                      <span className="font-semibold text-red-600">Bank's 1st Offer (0% Principal Waiver):</span>
                      <span className="text-red-600">₹ 10,00,000</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                      <span className="font-semibold text-blue-600">Borrower's Counter Offer:</span>
                      <span className="text-blue-600">₹ 2,00,000</span>
                    </div>
                    <div className="flex justify-between items-center bg-green-50 p-4 rounded-lg border border-green-200">
                      <span className="font-bold text-green-800">Final Settled Amount (60% Principal Waiver):</span>
                      <span className="font-bold text-green-800 text-xl">₹ 4,00,000</span>
                    </div>
                  </div>
                </div>

                <p> Many clients wonder <Link href="/what-percentage-do-banks-accept-in-loan-settlement" className="text-blue-600 font-bold hover:underline">what rate do banks accept in loan closure</Link>. The truth is that there is no fixed legal rate. A highly skilled negotiator handling an clean own loan that is over 300 days delinquent can often secure a closure between 25% and 40% of the total unpaid amount. </p>
                <p> yet. You must be prepared to pay this settle amount almost fast. The bank's willingness to accept a massive loss is fully dependent on the certainty of fast cash claims. If you settle a fantastic deal but cannot produce the funds within the 7 to 15 day deadline. The offer will be withdrawn. the bank will not offer such generous terms again. </p>
              </div>
            </section>

            <section>
              <h2 id="case-study" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Case Study: A Successful 75% Waiver on a Personal Loan</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> Theoretical knowledge is useless without practical application. Let us examine exactly how a clients deployed these strategies to escape a crushing money burden. </p>
                
                <div className="bg-gray-900 p-10 md:p-14 rounded-3xl text-white shadow-2xl relative overflow-hidden my-12">
                  <div className="relative z-10">
                    <h3 className="text-base font-bold mb-8 text-yellow-400">The Anatomy of a 75% Waiver</h3>
                    
                    <div className="space-y-6 text-base">
                      <p><strong className="text-yellow-400">The Subject:</strong> Mr. Vikram Singh. An operations manager in Bangalore whose company shut down unexpectedly.</p>
                      <p><strong className="text-yellow-400">The Problem:</strong> Vikram had an clean own loan of Rs. 8,00,000. After ten months of job loss. The total unpaid balance. Including fines. Reached Rs. 12,00,000. He was facing immense pressure from agents visiting his neighborhood.</p>
                      <p><strong className="text-yellow-400">The Preparation:</strong> Vikram stopped answering calls from low level calls agents. He secured a small loan of Rs. 3,00,000 from his father in law and kept it in a separate. Unconnected bank account ready for fast deployment.</p>
                      <p><strong className="text-yellow-400">The Execution:</strong> Through a legal representative. Vikram initiated contact with the bank's regional grievance head. He submitted a thorough hardship package comprising his end letter. Ten months of zero-balance bank statements. a firm offer of Rs. 2,00,000 to close the matter fully.</p>
                      <p><strong className="text-yellow-400">The talks:</strong> The bank predictably rejected the offer. Demanding Rs. 8,00,000. Over three weeks. Vikram's representative countered every demand by reiterating absolute insolvency. They warned the bank that Vikram was consulting bankruptcy counsel. Faced with the prospect of zero claims. The bank lowered their demand to Rs. 5,00,000.</p>
                      <p><strong className="text-yellow-400">The Victory:</strong> Vikram made his final. Non-negotiable offer: Rs. 3,00,000 to be wired within 48 hours of receiving the valid closure note. The bank accepted. Vikram paid exactly 25% of the total unpaid amount. The account was marked settled. The threats ceased fully. the legal threat was neutralized.</p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-600 rounded-full -mr-40 -mt-40 opacity-10 blur-[100px]"></div>
                </div>
              </div>
            </section>

            <section>
              <h2 id="cibil-impact" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">How OTS Affects Your CIBIL Score (And How to Recover)</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> The most significant result of a One Time closure is the fast and severe damage to your creditworthiness. You are trading money dignity for money survival. It is vital to understand the exact workings of this fine so you can plan your claims strategy. </p>
                <p> Many clients frantically search to find out <Link href="/does-loan-settlement-affect-cibil" className="text-blue-600 font-bold hover:underline">does loan closure affect CIBIL</Link>. The answer is unequivocally yes. When the bank accepts your discounted payment. They report the transaction to all major credit bureaus. Yet. They do not report the account as "Closed". A closed status is reserved for clients who pay 100% of the main sum and rates. Instead. Your account is marked as "Settled" or "Post Write-Off Settled". </p>
                <p> This single word "Settled" acts as a glaring warning siren in the money ecosystem. It signals to every future lender that you are a high risk individual who failed to honor a money contract. Consequently. Your CIBIL score will instantly plummet. Often dropping by 75 to 150 points. For the next three to seven years. You will be systematically rejected for almost all clean credit products. Including own loans. New credit cards. firm loans. If you are approved for a secured loan. You will be subjected to punitively high rates rates. </p>
                <p> Despite this harsh reality. Choosing an OTS is significantly better than ignoring the debt. If you do nothing. The bank will eventually classify the account as "Written-Off" and file a civil suit. A "Suit Filed" or "Written-Off" status is money suicide. Destroying your credibility permanently. A closure. While damaging. Indicates that you eventually took responsibility and resolved the crisis. </p>
                <p> Rebuilding your credit after an OTS requires immense discipline. You must wait at least six months before applying for any new credit to avoid adding hard inquiries to a damaged profile. Your first step should be acquiring a secured credit card backed by a fixed deposit. By utilizing only 30% of the credit limit and paying the bill perfectly on time for 18 running months. You will demonstrate renewed money stability. Slowly forcing your CIBIL score to climb back into the acceptable range. </p>
              </div>
            </section>

          </article>
          
          <aside className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" alt="Rohan Sharma Legal Expert" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-50 object-cover"  width={96} height={96} />
                <p className="font-bold text-gray-900">Rohan Sharma</p>
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
