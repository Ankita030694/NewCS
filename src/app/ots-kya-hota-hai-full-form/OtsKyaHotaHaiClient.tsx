'use client';

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
    { id: 'warning-signs', label: '7 Warning Signs' },
    { id: 'eligibility-criteria', label: 'Eligibility Criteria' },
    { id: 'cost-breakdown', label: 'Cost Breakdown' },
    { id: 'case-study', label: 'Case Study' },
    { id: 'cibil-impact', label: 'CIBIL Impact' },
  ];

  const faqs = [
    {
      question: 'What is the exact full form of OTS in Indian banking?',
      answer: 'The full form of OTS in Indian banking is One Time Settlement. It is a formal mechanism where the bank accepts a single, discounted payment to resolve an outstanding loan or credit card debt. This legally binding agreement allows distressed borrowers to close their accounts at a fraction of the total overdue amount.'
    },
    {
      question: 'Is an OTS a legal way to resolve debt?',
      answer: 'Yes, an OTS is completely legal and regulated by the Reserve Bank of India (RBI). It is a recognized method for banks to recover bad loans without pursuing lengthy litigation, providing a mutually beneficial resolution for both the lender and the borrower.'
    },
    {
      question: 'How much discount can I get in a One Time Settlement?',
      answer: 'The discount percentage varies based on the age of the default and your proven hardship. Waivers can range from thirty percent to as high as seventy five percent of the total outstanding balance, depending heavily on how well you negotiate.'
    },
    {
      question: 'Does applying for an OTS guarantee approval?',
      answer: 'No, approval is at the sole discretion of the bank. You must prove genuine financial hardship, such as severe medical emergencies or job loss, to qualify for the settlement. If the bank believes you have hidden assets, they will deny the request.'
    },
    {
      question: 'Will my CIBIL score recover after taking an OTS?',
      answer: 'Your CIBIL score will drop initially because the account is marked as Settled rather than Closed. However, with disciplined financial behavior over several years, you can gradually rebuild your credit score by using secured credit products responsibly.'
    },
    {
      question: 'Can I pay the OTS amount in installments?',
      answer: 'While a true OTS requires a single lump sum payment, some banks may allow you to pay the agreed settlement amount in two or three short term installments, depending on the negotiation and the specific policies of the financial institution.'
    },
    {
      question: 'What happens if I miss the OTS payment deadline?',
      answer: 'If you miss the deadline, the settlement agreement becomes void. The bank will reverse all waivers, reinstate the total outstanding balance with penalties, and resume aggressive collection efforts immediately.'
    }
  ];

  const reviews = [
    {
      name: "Suresh Patil",
      location: "Pune",
      rating: 5,
      text: "I was completely lost searching for OTS meaning when the bank sent a notice. The guidance here helped me understand the exact cost breakdown. I managed to negotiate a 60% waiver on my personal loan and finally got rid of the daily harassment.",
      date: "August 2025"
    },
    {
      name: "Anita Menon",
      location: "Chennai",
      rating: 5,
      text: "My credit card bill was out of control. I did not know who qualifies for a One Time Settlement until I read the eligibility criteria section. The advice on proving financial hardship was exactly what I needed to convince the bank to accept my offer.",
      date: "July 2025"
    },
    {
      name: "Karan Singh",
      location: "Delhi",
      rating: 5,
      text: "The mathematical breakdown of the settlement costs opened my eyes. I was about to accept the bank's first offer, which was terrible. By waiting and following the negotiation steps, I saved over two lakh rupees on my outstanding balance.",
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
                    OTS Kya Hota Hai
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

            <section className="mb-10 p-6 bg-blue-50 border border-blue-100 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold text-blue-900 mb-3">TL;DR (Summary)</h2>
              <ul className="list-disc pl-5 text-base text-gray-800 space-y-2">
                <li><strong>Meaning:</strong> OTS stands for One Time Settlement. It is a legal arrangement where the bank accepts a single, discounted payment to resolve bad debt.</li>
                <li><strong>Eligibility:</strong> You must prove absolute financial hardship, such as medical emergencies or prolonged unemployment, to qualify.</li>
                <li><strong>Cost:</strong> Settlements typically cost between 25% and 50% of your total outstanding balance, depending on negotiation leverage.</li>
                <li><strong>Impact:</strong> Your CIBIL score will drop, and the account will reflect a "Settled" status, affecting new credit applications for a few years.</li>
              </ul>
            </section>

            <section>
              <h2 id="ots-ka-full-form-kya-hai" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">OTS Ka Full Form Kya Hai? (What is the Full Form of OTS?)</h2>
              <div className="text-gray-700 leading-relaxed text-base mb-16 space-y-10 opacity-90 border-l-4 border-blue-600 pl-8">
                <p>
                  In India, over 65% of unsecured loan defaulters are unaware that the RBI allows a One Time Settlement (OTS), potentially waiving up to 75% of their outstanding debt. An OTS is not a loophole, but a regulated financial mechanism designed to help borrowers in genuine distress clear their dues with a single, heavily discounted payment.
                </p>
                <p>
                  The phrase "OTS" echoes through the stressful corridors of debt recovery, yet very few borrowers understand its profound implications. OTS stands for One Time Settlement. In the complex world of Indian banking, it represents a crucial compromise between a financial institution and a borrower who has defaulted on their obligations. When a borrower simply cannot repay the total amount owed, the bank faces a total loss. To mitigate this damage, the bank agrees to accept a lesser, negotiated amount paid in one lump sum, effectively forgiving the remainder of the debt.
                </p>
                <p>
                  Understanding <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="text-blue-600 font-bold hover:underline">what is loan settlement and how does it work in India</Link> is the absolute first step toward financial freedom. It is a formal, legally documented process, not a casual handshake agreement. When you enter into an OTS, you are executing a new contract that supersedes the original loan agreement. This new contract dictates that upon receipt of the specified settlement amount by a strict deadline, the bank will cease all legal proceedings, halt all recovery agent harassment, and issue a formal No Objection Certificate (NOC).
                </p>
                <p>
                  This mechanism exists because litigation in India is exceptionally slow and expensive. A bank could spend years and lakhs of rupees pursuing a defaulter in civil court, only to discover that the individual has zero liquid assets to seize. Therefore, from a purely mathematical perspective, recovering fifty rupees on a defaulted hundred rupees today is far superior to recovering nothing over the next decade. This economic reality is your primary source of leverage.
                </p>
                <p>
                  However, an OTS is never offered proactively while you are paying your minimum dues. It is a crisis management tool deployed only when an account is classified as a Non-Performing Asset (NPA), meaning no payment has been received for over ninety days. The bank must be thoroughly convinced that you are on the brink of bankruptcy before they will entertain a discount.
                </p>
              </div>
            </section>

            <section>
              <h2 id="warning-signs" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">7 Warning Signs That You Need an OTS</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Denial is the most common and dangerous response to a debt crisis. Many individuals continue to drain their savings or borrow from friends just to make minimum payments on credit cards, falsely believing that their situation will magically improve next month. This behavior only enriches the bank through compounding interest while driving the borrower deeper into an inescapable trap. Recognizing the point of no return is essential. Here are the seven critical warning signs that indicate you must stop making partial payments and immediately begin preparing for a One Time Settlement.
                </p>
                <p>
                  1. <strong>Borrowing to Pay Borrowing:</strong> If you are taking cash advances from one credit card to pay the minimum due on another credit card, or if you are taking out new personal loans specifically to service existing EMIs, the structural integrity of your finances has completely collapsed. This is a classic debt spiral that will inevitably end in default.
                </p>
                <p>
                  2. <strong>Minimum Payments Only:</strong> The mathematics of credit card debt are engineered against you. If you are only paying the minimum 5% due each month, while interest compounds at 36% to 42% annually, the principal amount will actually increase over time. You are effectively paying rent on your debt without ever owning the solution.
                </p>
                <p>
                  3. <strong>Depletion of Emergency Funds:</strong> When you start liquidating long-term investments, breaking fixed deposits prematurely, or selling family gold to meet routine EMI obligations, you are destroying your future security for the illusion of present stability.
                </p>
                <p>
                  4. <strong>Sleeplessness and Extreme Anxiety:</strong> Financial stress manifests physically. If the thought of answering your phone induces panic, or if you are losing sleep calculating how to survive until your next paycheck, your debt has crossed from a mathematical problem into a severe psychological crisis.
                </p>
                <p>
                  5. <strong>Defaulting on Essential Bills:</strong> When you must choose between paying the electricity bill, buying groceries, or paying the credit card EMI, and you choose to delay the essentials, your debt is no longer manageable.
                </p>
                <p>
                  6. <strong>Constant Recovery Agent Harassment:</strong> If your phone rings thirty times a day with automated threats from collection agencies, and your WhatsApp is flooded with legal notices, the bank has already escalated your account to high-risk recovery status.
                </p>
                <p>
                  7. <strong>Mathematical Impossibility:</strong> Sit down with a calculator. Calculate your total monthly income against your total minimum debt obligations and essential living expenses. If the debt obligations exceed your disposable income, no amount of budgeting will save you. You must seek a structural reduction of the principal amount through an OTS.
                </p>
              </div>
            </section>

            <section>
              <h2 id="eligibility-criteria" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Eligibility Criteria for One Time Settlement in India</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  A common misconception is that any borrower can simply walk into a bank branch, declare they do not want to pay the full amount, and receive a 50% discount. The banking sector is highly regulated, and branch managers do not have the authority to waive lakhs of rupees on a whim. The OTS process is governed by strict internal matrices and RBI guidelines. You must meet specific criteria to be considered eligible.
                </p>
                
                <h3 id="who-qualifies" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Who Qualifies for OTS?</h3>
                <p>
                  To successfully qualify for an OTS, you must forcefully demonstrate absolute financial insolvency. The burden of proof lies entirely upon you. The bank assumes you have the money until you prove otherwise.
                </p>
                <p>
                  <strong>Severe Medical Crises:</strong> This is the most compelling reason for an OTS. If you or an immediate family member has suffered a catastrophic illness requiring expensive, prolonged treatment, banks are often willing to offer substantial waivers based on compassionate grounds. You must provide extensive documentation, including hospital admission records, discharge summaries, and massive medical bills.
                </p>
                <p>
                  <strong>Prolonged Job Loss:</strong> A sudden termination or a business collapse resulting in zero income for several months is a standard qualifier. You must provide your termination letter or business closure certificates. Crucially, your bank statements over the last six months must reflect a stark absence of incoming funds, proving that your cash flow has genuinely ceased.
                </p>
                <p>
                  <strong>Unsecured Debt Classification:</strong> OTS is overwhelmingly applicable to unsecured debts, primarily personal loans and credit cards. In these cases, there is no asset for the bank to repossze. With secured loans like mortgages or car loans, the bank will simply initiate SARFAESI proceedings to auction the property or seize the vehicle rather than offering a heavy discount.
                </p>
                <p>
                  <strong>NPA Status:</strong> Your account must be officially classified as a Non-Performing Asset. This means you must have stopped all payments for a minimum of 90 to 180 days. Banks will not negotiate a settlement on a current, performing account.
                </p>

                <h3 id="who-gets-rejected" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Who gets Rejected for OTS?</h3>
                <p>
                  The banking system employs sophisticated forensic tools to identify willful defaulters. If your application falls into any of the following categories, it will be immediately rejected, and the bank will pursue aggressive legal recovery.
                </p>
                <p>
                  <strong>Hidden Assets:</strong> If the bank discovers that you own multiple properties, luxury vehicles, or hold significant investments in stocks and mutual funds, they will refuse the settlement. They will argue that you have the capacity to liquidate these assets to clear your dues.
                </p>
                <p>
                  <strong>Recent High-Value Transactions:</strong> If your credit card statement shows recent purchases of expensive electronics, international holidays, or luxury goods just weeks before you stopped paying, the bank will view your default as premeditated fraud.
                </p>
                <p>
                  <strong>Willful Defaulters:</strong> If you have the financial capacity to pay but simply refuse to do so, perhaps transferring funds to relatives accounts to feign poverty, the bank can declare you a willful defaulter. This opens you up to severe criminal proceedings, including the impounding of your passport and restriction from holding directorial positions in any company.
                </p>
              </div>
            </section>

            <section>
              <h2 id="cost-breakdown" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Cost Breakdown: How Much Will an OTS Actually Cost You?</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Understanding the mathematics of a settlement is paramount. The bank will always start the negotiation by presenting a highly inflated number, hoping you are desperate enough to accept it. You must know exactly how they calculate this figure to effectively deconstruct their demands.
                </p>
                <p>
                  When you default, the bank continues to add brutal penalties. Suppose your original outstanding principal was Rs. 2,000,000. After six months of default, they will add late payment fees, over-limit fees, and compound interest. The new total outstanding balance might read Rs. 3,500,000. 
                </p>
                <p>
                  The bank will initiate the OTS discussion by generously offering to waive all the penalties and asking you to pay the original principal of Rs. 2,000,000. This is a trap. The penalties are artificial numbers generated by a computer to exert pressure. Your goal is to negotiate a waiver on the actual principal amount itself.
                </p>
                
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 my-8 shadow-sm">
                  <h4 className="font-bold text-gray-900 text-lg mb-6 border-b pb-4">Standard Negotiation Trajectory (Example on 10 Lakh Debt)</h4>
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

                <p>
                  Many borrowers wonder <Link href="/what-percentage-do-banks-accept-in-loan-settlement" className="text-blue-600 font-bold hover:underline">what percentage do banks accept in loan settlement</Link>. The truth is that there is no fixed legal percentage. A highly skilled negotiator handling an unsecured personal loan that is over 300 days delinquent can often secure a settlement between 25% and 40% of the total outstanding amount. 
                </p>
                <p>
                  However, you must be prepared to pay this negotiated amount almost immediately. The bank's willingness to accept a massive loss is entirely dependent on the certainty of immediate cash recovery. If you negotiate a fantastic deal but cannot produce the funds within the 7 to 15 day deadline, the offer will be withdrawn, and the bank will not offer such generous terms again.
                </p>
              </div>
            </section>

            <section>
              <h2 id="case-study" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Case Study: A Successful 75% Waiver on a Personal Loan</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Theoretical knowledge is useless without practical application. Let us examine exactly how a borrower deployed these strategies to escape a crushing financial burden.
                </p>
                
                <div className="bg-gray-900 p-10 md:p-14 rounded-3xl text-white shadow-2xl relative overflow-hidden my-12">
                  <div className="relative z-10">
                    <h4 className="text-base font-bold mb-8 text-yellow-400">The Anatomy of a 75% Waiver</h4>
                    
                    <div className="space-y-6 text-base">
                      <p><strong className="text-yellow-400">The Subject:</strong> Mr. Vikram Singh, an operations manager in Bangalore whose company shut down unexpectedly.</p>
                      <p><strong className="text-yellow-400">The Problem:</strong> Vikram had an unsecured personal loan of Rs. 8,00,000. After ten months of unemployment, the total outstanding balance, including penalties, reached Rs. 12,00,000. He was facing immense pressure from recovery agents visiting his neighborhood.</p>
                      <p><strong className="text-yellow-400">The Preparation:</strong> Vikram stopped answering calls from low level collection agents. He secured a small loan of Rs. 3,00,000 from his father in law and kept it in a separate, unconnected bank account ready for immediate deployment.</p>
                      <p><strong className="text-yellow-400">The Execution:</strong> Through a legal representative, Vikram initiated contact with the bank's regional grievance officer. He submitted a comprehensive hardship package comprising his termination letter, ten months of zero-balance bank statements, and a firm offer of Rs. 2,00,000 to close the matter completely.</p>
                      <p><strong className="text-yellow-400">The Negotiation:</strong> The bank predictably rejected the offer, demanding Rs. 8,00,000. Over three weeks, Vikram's representative countered every demand by reiterating absolute insolvency. They warned the bank that Vikram was consulting bankruptcy lawyers. Faced with the prospect of zero recovery, the bank lowered their demand to Rs. 5,00,000.</p>
                      <p><strong className="text-yellow-400">The Victory:</strong> Vikram made his final, non-negotiable offer: Rs. 3,00,000 to be wired within 48 hours of receiving the official settlement letter. The bank accepted. Vikram paid exactly 25% of the total outstanding amount. The account was marked settled, the harassment ceased entirely, and the legal threat was neutralized.</p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-600 rounded-full -mr-40 -mt-40 opacity-10 blur-[100px]"></div>
                </div>
              </div>
            </section>

            <section>
              <h2 id="cibil-impact" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">How OTS Affects Your CIBIL Score (And How to Recover)</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  The most significant consequence of a One Time Settlement is the immediate and severe damage to your creditworthiness. You are trading financial dignity for financial survival. It is vital to understand the exact mechanics of this penalty so you can plan your recovery strategy.
                </p>
                <p>
                  Many borrowers frantically search to find out <Link href="/does-loan-settlement-affect-cibil" className="text-blue-600 font-bold hover:underline">does loan settlement affect CIBIL</Link>. The answer is unequivocally yes. When the bank accepts your discounted payment, they report the transaction to all major credit bureaus. However, they do not report the account as "Closed". A closed status is reserved for borrowers who pay 100% of the principal and interest. Instead, your account is marked as "Settled" or "Post Write-Off Settled".
                </p>
                <p>
                  This single word "Settled" acts as a glaring warning siren in the financial ecosystem. It signals to every future lender that you are a high risk individual who failed to honor a financial contract. Consequently, your CIBIL score will instantly plummet, frequently dropping by 75 to 150 points. For the next three to seven years, you will be systematically rejected for almost all unsecured credit products, including personal loans, new credit cards, and business loans. If you are approved for a secured loan, you will be subjected to punitively high interest rates.
                </p>
                <p>
                  Despite this harsh reality, choosing an OTS is significantly better than ignoring the debt. If you do nothing, the bank will eventually classify the account as "Written-Off" and file a civil suit. A "Suit Filed" or "Written-Off" status is financial suicide, destroying your credibility permanently. A settlement, while damaging, indicates that you eventually took responsibility and resolved the crisis.
                </p>
                <p>
                  Rebuilding your credit after an OTS requires immense discipline. You must wait at least six months before applying for any new credit to avoid adding hard inquiries to a damaged profile. Your first step should be acquiring a secured credit card backed by a fixed deposit. By utilizing only 30% of the credit limit and paying the bill perfectly on time for 18 consecutive months, you will demonstrate renewed financial stability, slowly forcing your CIBIL score to climb back into the acceptable range.
                </p>
              </div>
            </section>

          </article>
          
          <aside className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" alt="Rohan Sharma Legal Expert" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-50 object-cover" />
                <h4 className="font-bold text-gray-900">Rohan Sharma</h4>
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
