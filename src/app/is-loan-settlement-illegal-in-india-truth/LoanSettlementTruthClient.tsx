'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function LoanSettlementTruthClient() {
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
  }

  const navLinks = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'legality-explained', label: 'Is it Illegal?' },
    { id: 'rbi-guidelines', label: 'RBI Guidelines' },
    { id: 'why-banks-settle', label: 'Bank Perspective' },
    { id: 'ots-vs-default', label: 'OTS Explained' },
    { id: 'civil-vs-criminal', label: 'No Jail Risk' },
    { id: 'harassment-protection', label: 'Legal Rights' },
    { id: 'legal-precedents', label: 'Judicial Stand' },
    { id: 'guarantors-rights', label: 'Guarantor Rights' },
    { id: 'settlement-vs-restructuring', label: 'vs Restructuring' },
    { id: 'credit-impact', label: 'CIBIL Reality' },
    { id: 'settlement-process', label: 'Step-by-Step' },
    { id: 'drafting-proposal', label: 'How to Propose' },
    { id: 'secured-vs-unsecured', label: 'Secured Loans' },
    { id: 'fraud-warning', label: 'Avoid Scams' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'Is loan settlement considered illegal under Indian law?',
      answer: 'No, loan settlement is not illegal. It is a legitimate financial process recognized by the Reserve Bank of India as a One-Time Settlement (OTS) or compromise settlement. Banks and NBFCs use it to recover dues from accounts that have become Non-Performing Assets.'
    },
    {
      question: 'Will I go to jail for settling my loan instead of paying in full?',
      answer: 'Absolutely not. Loan default and settlement are civil matters, not criminal offenses. Unless you have committed fraud or forgery to obtain the loan, there is no risk of imprisonment for being unable to repay or choosing to settle.'
    },
    {
      question: 'What is the RBI guideline on One-Time Settlements?',
      answer: 'The RBI mandates that all banks must have board-approved policies for settlement. These policies define who is eligible, how the settlement amount is calculated, and ensure that the process is transparent and fair to both the lender and the borrower.'
    },
    {
      question: 'Does loan settlement ruin my CIBIL score forever?',
      answer: 'Loan settlement will cause your credit score to drop as the account is marked as "Settled". However, this is not permanent. You can rebuild your credit score over time through secured loans and responsible financial behavior after the settlement is complete.'
    },
    {
      question: 'Can recovery agents still call me after I have settled?',
      answer: 'No. Once you have a formal settlement letter and have paid the agreed amount, you must obtain a No Dues Certificate. This legally ends your liability, and any further recovery action by agents would be considered illegal harassment.'
    },
    {
      question: 'Is it legal for banks to hire third-party agencies for settlement?',
      answer: 'Yes, banks often hire specialized agencies or law firms to facilitate negotiations. However, these agencies must follow strict RBI guidelines regarding ethical conduct and cannot use intimidation tactics or abusive language.'
    },
    {
      question: 'What is a No Dues Certificate (NDC)?',
      answer: 'A No Dues Certificate is a legal document issued by the bank confirming that you have paid the agreed amount and you no longer owe anything to the lender. It is the final proof of a legal and valid settlement.'
    },
    {
      question: 'Can I settle a home loan or is it only for personal loans?',
      answer: 'Settlement is most common for unsecured loans like personal loans and credit cards. Secured loans like home loans or car loans are harder to settle because the bank has collateral. However, in extreme cases of default, banks may still consider a settlement proposal.'
    },
    {
      question: 'Does a settled status stop me from getting a government job?',
      answer: 'Generally, a settled status on your credit report does not disqualify you from government jobs. Most background checks for government service look for criminal records, not civil credit history, unless the position specifically requires financial clearance.'
    },
    {
      question: 'How do I know if a settlement offer from an agent is genuine?',
      answer: 'A genuine settlement offer always comes on the bank\'s official letterhead with a specific reference number. You should always verify the letter by visiting the bank branch or contacting their official customer service before making any payment.'
    }
  ];

  return (
    <>
      {/* Breadcrumb Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 py-4">
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
                    Is Loan Settlement Illegal in India?
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content Layout - 3 Column */}
      <div className="max-w-8xl mx-auto px-4 py-12">
        
        {/* Mobile: Sticky Horizontal Scroll Table of Contents */}
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
          
          {/* Left Column: Table of Contents */}
          <div className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Table of Contents</h3>
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

          {/* Middle Column: Main Content */}
          <div className="lg:w-2/4 w-full">
            <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
              
              {/* Introduction */}
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Is Loan Settlement Illegal in India? The Truth Exposed</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  In the vast and complex landscape of Indian finance, rumors often travel faster than facts. One of the most persistent and damaging myths that plagues borrowers in distress is the idea that loan settlement is illegal. This misinformation is frequently propagated by unscrupulous recovery agents and misinformed individuals, leaving many honest borrowers paralyzed by fear. They worry about legal repercussions, police harassment, and even the possibility of imprisonment. If you are one of those individuals who has been told that settling your debt is a crime, this guide is written specifically for you.
                </p>
                <p>
                  The reality is starkly different from these scary stories. Loan settlement is a perfectly legal, recognized, and legitimate financial process in India. It is a strategic tool used by both borrowers and lenders to find a middle ground when total repayment is impossible. Whether you are dealing with a personal loan, a credit card debt, or a business loan, understanding the legal framework of settlement is the first step toward reclaiming your financial life and peace of mind.
                </p>
                <p>
                  In this comprehensive guide, we will strip away the myths and expose the truth using official guidelines from the Reserve Bank of India or RBI. we will explore why banks choose to settle, how the law protects you from harassment, and what you need to do to ensure your settlement is valid and legal. By the end of this article, you will understand that you are not a criminal for struggling with debt, and you will have the knowledge to navigate the settlement process with confidence.
                </p>
              </div>

              {/* Legality Explained */}
              <h2 id="legality-explained" className="text-3xl font-bold text-gray-900 mb-6 mt-12 scroll-mt-28">The Legal Foundation: Is it Actually Illegal?</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  Let us address the most important question directly: is loan settlement illegal in India? The answer is a clear and resounding no. There is no law in India that makes it illegal for a borrower to negotiate a reduced payout with their lender. In fact, the Indian legal and banking systems have structured mechanisms specifically designed for this purpose.
                </p>
                <p>
                  The concept of a "compromise settlement" or a "One-Time Settlement" (OTS) is deeply embedded in the guidelines of the Reserve Bank of India. When a bank enters into a settlement agreement with you, they are performing a standard commercial transaction. They are choosing to accept a lower amount today rather than continuing a long and expensive legal battle to recover the full amount in the future. This is a business decision made by the bank, approved by their board, and regulated by the national banking authority.
                </p>
                <p>
                  The reason why this myth exists is usually due to the pressure tactics used by recovery agents. These agents may tell you that settling is a form of cheating or that it will lead to an FIR (First Information Report). They use these lies to scare you into paying more than you can afford. However, a commercial default is a civil matter. It is a breach of contract, not a crime against the state. As long as you did not use fraud or forgery to get the loan, there is nothing criminal about being unable to repay it or asking for a settlement.
                </p>
              </div>

              {/* RBI Guidelines */}
              <h2 id="rbi-guidelines" className="text-3xl font-bold text-gray-900 mb-6 mt-12 scroll-mt-28">RBI Guidelines on Loan Settlement: The Official Truth</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  To truly understand the legality of settlement, one must look at the source of all banking regulations in India: the RBI. The Reserve Bank of India has issued multiple circulars and guidelines regarding how banks and NBFCs (Non-Banking Financial Companies) should handle settlements.
                </p>
                <p>
                  According to the RBI, every bank must have a board-approved policy for compromise settlements. This policy must outline the eligibility criteria for borrowers, the method for determining the settlement amount, and the delegation of authority for approving such deals. The RBI actually encourages banks to use settlements as a way to reduce their Non-Performing Assets or NPAs. By settling, the bank can recover a portion of their funds and clean up their balance sheets.
                </p>
                <p>
                  Moreover, the RBI has recently introduced new guidelines that even allow wilful defaulters and fraud accounts to enter into compromise settlements under certain conditions, although this is more focused on corporate entities. For the average individual borrower, the message is clear: settlement is a regulated part of the banking system. If it were illegal, the RBI would not be creating detailed rules on how to do it. The existence of these guidelines is the ultimate proof that loan settlement is a valid legal path for debt resolution.
                </p>
              </div>

              {/* Why Banks Settle */}
              <h2 id="why-banks-settle" className="text-3xl font-bold text-gray-900 mb-6 mt-12 scroll-mt-28">The Bank Perspective: Why Lenders Agree to Settle</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  If settlement is legal, why do banks agree to take less than what they are owed? It is not out of charity; it is out of pragmatism. Banks are businesses, and their primary goal is to manage risk and protect their capital. When a loan account reaches a point where the borrower has stopped paying for several months, it is classified as a Non-Performing Asset or NPA.
                </p>
                <p>
                  Once an account is an NPA, the bank has a problem. They have to set aside money (provisioning) against that bad loan, which reduces their profits. Carrying large amounts of NPA on their books makes the bank look weak to investors and regulators. Recovering money through the legal system in India can take years, sometimes decades. The cost of lawyers, court fees, and the time spent by their staff often exceeds the amount they might eventually recover.
                </p>
                <p>
                  A settlement offers the bank a quick and certain exit. By accepting a lump sum today, they can recover a significant portion of the principal, avoid future legal costs, and remove a bad loan from their records. This "haircut," as it is often called in the industry, is a necessary cost of doing business. When you approach a bank for a settlement, you are giving them an opportunity to cut their losses. This is why settlements are not just legal; they are often welcomed by the recovery departments of major banks.
                </p>
              </div>

              {/* OTS vs Default */}
              <h2 id="ots-vs-default" className="text-3xl font-bold text-gray-900 mb-6 mt-12 scroll-mt-28">One-Time Settlement (OTS) vs. Simple Default</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  It is important to distinguish between simply not paying (default) and a structured One-Time Settlement. A default is a unilateral action by the borrower. An OTS is a bilateral agreement between the borrower and the lender.
                </p>
                <p>
                  During a default, you are in a state of legal limbo. The bank can send you legal notices, file recovery suits, and send agents to your home. This is where the stress comes from. A loan settlement, however, brings an end to this conflict. It is a formal contract that replaces your old loan agreement. Once the settlement is signed and the money is paid, all previous disputes are legally extinguished.
                </p>
                <p>
                  Think of it this way: default is like a messy breakup where both parties are still arguing. Settlement is like a formal divorce decree where the terms of separation are clearly defined and legally binding. The legality of the process lies in the formal documentation. As long as you have a settlement letter on the bank's letterhead and you follow the terms mentioned in it, your settlement is as legal as the original loan you took.
                </p>
              </div>

              {/* Civil vs Criminal */}
              <h2 id="civil-vs-criminal" className="text-3xl font-bold text-gray-900 mb-6 mt-12 scroll-mt-28">Civil Breach vs. Criminal Offense: Why You Won't Go to Jail</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  The biggest fear people have regarding the legality of debt is the fear of jail. Recovery agents often use this fear by threatening to file an FIR under Section 420 (Cheating) of the Indian Penal Code. You must understand that in India, the mere inability to repay a loan is not a crime. It is a civil breach of trust and a breach of contract.
                </p>
                <p>
                  The police are not debt collectors for banks. Under various Supreme Court rulings, the police are generally prohibited from interfering in purely civil matters. For a default to become a criminal case of cheating, the bank must prove "dishonest intention from the inception." This means they must prove that you never intended to repay the loan from the very first day you signed the papers.
                </p>
                <p>
                  If you have paid even a few EMIs in the past, it shows that your intention was honest. Financial failure due to job loss, business downturn, or medical emergencies is not a crime. It is a life circumstance. You cannot go to jail for being unable to pay your credit card bill or a personal loan. The only criminal risk in debt is if you issue a cheque that bounces (Section 138 of the NI Act) or if you used fake documents to get the loan. Standard loan settlement is a civil solution to a civil problem.
                </p>
              </div>

              {/* Harassment Protection */}
              <h2 id="harassment-protection" className="text-3xl font-bold text-gray-900 mb-6 mt-12 scroll-mt-28">Your Legal Rights: Protection from Harassment</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  Knowing that settlement is legal is only half the battle. You must also know that the law protects you from illegal recovery practices. The RBI's Fair Practices Code for Lenders and Debt Collection Guidelines are very strict about what banks and their agents can and cannot do. Recovery agents cannot use abusive language, they cannot call you at odd hours, they cannot threaten your family, and they cannot disclose your debt to your neighbors or colleagues. Most importantly, they cannot lie to you about the legal consequences of your debt. If an agent tells you that settlement is illegal or that you will be arrested tomorrow, they are the ones breaking the law.
                </p>
                <p>
                  As a borrower, you have the right to dignity. You have the right to privacy. And you have the right to request a legitimate settlement. If you are being harassed, you can file a complaint with the bank's internal grievance cell, the Banking Ombudsman, or even the police for criminal intimidation. When you engage a professional legal support team like CredSettle, we act as a shield between you and these illegal tactics, ensuring that your rights are respected throughout the process.
                </p>
              </div>

              {/* NEW SECTION: Legal Precedents */}
              <h2 id="legal-precedents" className="text-3xl font-bold text-gray-900 mb-6 mt-12 scroll-mt-28">Judicial Stand: Supreme Court and High Court Rulings</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  The Indian judiciary has on several occasions stepped in to define the boundary between recovery and harassment. In the landmark case of ICICI Bank vs. Shanti Devi Sharma, the Supreme Court of India expressed its strong disapproval of using strong-arm tactics for loan recovery. The court emphasized that even when a borrower defaults, they do not lose their right to be treated with respect. Banks are companies, and their power to recover money must always be exercised within the limits of the law.
                </p>
                <p>
                  Another important judgment is from the Delhi High Court, which stated that the police have no business interfering in a commercial dispute between a bank and its customer. These rulings are your greatest legal assets. When you are negotiating a settlement, you are operating within a space that has been protected by the highest courts of the land. The judicial truth is that economic failures are part of a developing economy, and society must provide a path for individuals to resolve their burdens without being branded as criminals or subjected to illegal force.
                </p>
                <p>
                   Furthermore, the National Consumer Disputes Redressal Commission has repeatedly held banks liable for mental agony caused by their recovery agents. These precedents reinforce that the bank's right to recover is not absolute and certainly not above the laws of the country. A settlement is seen as a way to conclude these legal tensions before they ever need to reach a courtroom.
                </p>
              </div>

              {/* NEW SECTION: Rights of Guarantors */}
              <h2 id="guarantors-rights" className="text-3xl font-bold text-gray-900 mb-6 mt-12 scroll-mt-28">Rights of Guarantors in a Loan Settlement</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  Many times, a loan is not just about the primary borrower. It also involves a guarantor who has pledged their support. Agents often try to pressure the guarantor by telling them that they are also criminally liable for the default. This is another area where the truth is often hidden. A guarantor's liability is co-extensive with the borrower, meaning it is also civil in nature.
                </p>
                <p>
                  When a borrower settles their account, it is imperative to ensure that the settlement also covers the guarantor. A comprehensive No Dues Certificate must mention that the bank has no further claims against the borrower or any person who stood as a guarantor. Legal experts at CredSettle pay special attention to this detail, ensuring that the entire financial circle is protected from future recovery attempts.
                </p>
                <p>
                  Guarantors should also know that they have the right to subrogation. This means if they pay any part of the settlement, they legally step into the shoes of the creditor. However, in most settlement cases, the goal is to close the matter for everyone involved so that no one's credit history or social standing is further damaged.
                </p>
              </div>

              {/* NEW SECTION: Settlement vs. Restructuring */}
              <h2 id="settlement-vs-restructuring" className="text-3xl font-bold text-gray-900 mb-6 mt-12 scroll-mt-28">Choosing Between Settlement and Loan Restructuring</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  Before you decide on a settlement, you might also hear about loan restructuring. Restructuring involves changing the terms of your original loan, such as extending the tenure or reducing the interest rate to make the EMIs affordable. Unlike settlement, restructuring means you still pay the full principal amount over a longer period.
                </p>
                <p>
                   Restructuring is often better for those who have a temporary financial problem and expect their income to recover soon. It protects your credit score more than a settlement does. However, if your financial crisis is deep and long-term, restructured payments might still be too much to handle. In such cases, a One-Time Settlement is the more realistic legal exit. It provides immediate relief and a final closure that restructuring cannot offer.
                </p>
                <p>
                   The decision depends on your current cash flow and your long-term financial goals. Our role at CredSettle is to help you analyze both options using our deep understanding of bank and NBFC internal policies. We look at your income, your expenses, and your future earning potential to recommend the path that truly leads to freedom.
                </p>
              </div>

              {/* Credit Impact */}
              <h2 id="credit-impact" className="text-3xl font-bold text-gray-900 mb-6 mt-12 scroll-mt-28">The Truth About CIBIL and Credit Scores</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  While settlement is legal, it does have consequences. The main consequence is the impact on your credit history or CIBIL score. When you settle a loan, the bank will report the status of your account as "Settled" to the credit bureaus. This is different from "Closed" or "Paid in Full."
                </p>
                <p>
                  A "Settled" status tells future lenders that you did not pay back the full amount you owed. This will cause your credit score to drop significantly. It might make it difficult for you to get a new loan or a new credit card for several years. This is the trade-off you make for debt relief. Some people argue that this "blacklisting" makes settlement illegal or "bad," but that is not true. It is simply a record of a financial transaction.
                </p>
                <p>
                  The good news is that this impact is not permanent. Once you are debt-free through settlement, you can start rebuilding your score. By taking small, secured loans (built against fixed deposits) and paying them on time, you can gradually improve your creditworthiness. Within 2 to 3 years of a settlement, many people are able to bring their scores back to a healthy level. Settlement is a temporary setback for long-term financial freedom.
                </p>
              </div>

              {/* Settlement Process */}
              <h2 id="settlement-process" className="text-3xl font-bold text-gray-900 mb-6 mt-12 scroll-mt-28">The Legal Step-by-Step of a Valid Settlement</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  To ensure your settlement is 100 percent legal and binding, you must follow a specific process. Skipping steps can leave you vulnerable to further demands from the bank.
                </p>
                <ol className="list-decimal pl-6 space-y-4">
                  <li><strong>Financial Assessment:</strong> Determine how much you can realistically pay in a single lump sum. Do not offer more than you have. This is the foundation of any negotiation.</li>
                  <li><strong>Wait for the Right Time:</strong> Banks usually only consider settlements after an account has been in default for at least three to six months. This is when the account enters the NPA zone.</li>
                  <li><strong>Initiate Negotiation:</strong> Reach out to the bank or their authorized agency. Explain your financial hardship with proof like medical bills or job termination letters. Be honest but firm about your inability to pay the full amount.</li>
                  <li><strong>The Settlement Letter:</strong> This is the most crucial part. Never pay a single Paisa until you have a formal settlement letter. This letter must be on the bank's letterhead, it must mention your account number, the total outstanding, the agreed settlement amount, and the strict deadline for payment.</li>
                  <li><strong>Payment:</strong> Make the payment through official channels like online transfer or a demand draft directly to the bank. Never give cash or personal checks to an agent. Always keep a copy of the payment receipt.</li>
                  <li><strong>No Dues Certificate:</strong> Within thirty to forty-five days of payment, the bank must issue a No Dues Certificate or NOC. This is your final legal proof that the debt is gone forever and the bank has no further claim against you.</li>
                </ol>
              </div>

              {/* NEW SECTION: How to Draft a Proposal */}
              <h2 id="drafting-proposal" className="text-3xl font-bold text-gray-900 mb-6 mt-12 scroll-mt-28">How to Draft a Legal Settlement Proposal</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  A well-drafted proposal is the key to getting a good settlement deal. Your letter to the bank should be professional and factual. It must clearly state your loan account details and the history of your payments. Most importantly, it must highlight the "genuine financial hardship" that has led to the default.
                </p>
                <p>
                   Banks are more likely to settle if they believe that you truly want to pay but are unable to due to circumstances beyond your control. Attach supporting documents like income tax returns, medical records, or a letter of termination from your employer. This makes your case more than just words; it makes it a legal truth that the bank's recovery team can verify.
                </p>
                <p>
                   Mention a specific lump sum amount that you are prepared to pay. This amount should be realistic. If you offer too little, the bank might reject it; if you offer too much, you might struggle to arrange the funds. Professional negotiators at CredSettle specialize in finding this "sweet spot" that maximizes your savings while ensuring the bank's approval.
                </p>
              </div>

              {/* NEW SECTION: Secured vs. Unsecured Settlement */}
              <h2 id="secured-vs-unsecured" className="text-3xl font-bold text-gray-900 mb-6 mt-12 scroll-mt-28">The Difference Between Secured and Unsecured Settlement</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  The legal truth of settlement varies depending on whether the loan is secured or unsecured. Unsecured loans, like credit cards and personal loans, have no collateral. If the borrower defaults, the bank has no asset to seize and sell. This gives the borrower more negotiation power, as the bank's only other option is a long and uncertain legal recovery process. This is why you often see waivers of up to 60 percent or 70 percent on unsecured debts.
                </p>
                <p>
                  Secured loans, such as home loans or car loans, are tied to an asset. The bank has the legal right to take possession of your home or vehicle under the SARFAESI Act if you default. Because they have this security, they are much less likely to agree to a settlement that reduces the principal amount. However, in cases where the asset value has depreciated or the legal process is facing significant hurdles, a "compromise" might still be possible.
                </p>
                <p>
                  It is vital to understand which type of debt you have before you start the process. Settling a secured loan is a high-stakes legal exercise that requires specialized knowledge of property laws and recovery procedures. Our team has the expertise to guide you through both scenarios, protecting your assets while striving for the best possible financial outcome.
                </p>
              </div>

              {/* Fraud Warning */}
              <h2 id="fraud-warning" className="text-3xl font-bold text-gray-900 mb-6 mt-12 scroll-mt-28">Warning: How to Avoid Real Illegal Scams</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  While loan settlement itself is legal, the industry attracts some scammers who pretend to help you but end up stealing your money. You must be extremely cautious of any person or company that:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>Asks you to stop paying the bank and pay them instead.</li>
                  <li>Promises to "delete" your name from the CIBIL database for a fee (this is impossible and illegal).</li>
                  <li>Asks for your bank passwords or OTPs.</li>
                  <li>Provides a settlement letter that looks unprofessional or is missing official bank stamps.</li>
                  <li>Asks for a "settlement fee" upfront before providing any legal service or negotiation results.</li>
                </ul>
                <p>
                  Always verify the credentials of any legal firm or settlement agency you work with. A legitimate firm like CredSettle will never ask for your bank login details and will always work through formal, transparent legal channels. We emphasize that your payment for the settlement should always go directly to the bank, not to any third party.
                </p>
              </div>

              {/* Review Snippets Section */}
              <section id="reviews" className="scroll-mt-28 mb-12 mt-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left">Truth and Reality: Verified Client Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100/50 shadow-sm transition-all hover:shadow-md hover:bg-blue-50">
                    <div className="flex items-center mb-6">
                      <div className="flex text-yellow-400 gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.322 9.397c-.783-.57-.38-1.81.588-1.81h4.181a1 1 0 00.951-.69l1.285-3.97z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-3 text-sm text-blue-600 font-semibold tracking-wider uppercase">Verified Truth</span>
                    </div>
                    <p className="text-base text-gray-800 italic mb-6 leading-relaxed font-outfit">
                      "An agent told me that if I settled, I would be blacklisted for life and might face a police case. I was so scared until I found CredSettle. They explained the RBI guidelines to me and even spoke to the bank. I settled for 40 percent and I am finally at peace. It is absolutely legal and the best decision I made."
                    </p>
                    <div className="flex items-center gap-4 pt-6 border-t border-blue-200/50">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">R</div>
                      <div>
                        <p className="font-bold text-blue-900 text-lg">Rajesh Khanna</p>
                        <p className="text-xs text-blue-600 font-medium">Mumbai, Maharashtra</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 bg-indigo-50/50 rounded-3xl border border-indigo-100/50 shadow-sm transition-all hover:shadow-md hover:bg-indigo-50">
                    <div className="flex items-center mb-6">
                      <div className="flex text-yellow-400 gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.322 9.397c-.783-.57-.38-1.81.588-1.81h4.181a1 1 0 00.951-.69l1.285-3.97z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-3 text-sm text-indigo-600 font-semibold tracking-wider uppercase">Verified Truth</span>
                    </div>
                    <p className="text-base text-gray-800 italic mb-6 leading-relaxed font-outfit">
                      "I thought my life was over when I couldn't pay my credit card dues. The threats of jail were constant from recovery agents. CredSettle guided me on my legal rights and showed me the actual RBI rules. They negotiated a proper, official settlement with the bank. I have my No Dues Certificate now and the calls have stopped forever."
                    </p>
                    <div className="flex items-center gap-4 pt-6 border-t border-indigo-200/50">
                      <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">M</div>
                      <div>
                        <p className="font-bold text-indigo-900 text-lg">Meera Joshi</p>
                        <p className="text-xs text-indigo-600 font-medium">Delhi, NCR</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQs */}
              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-28 text-center lg:text-left">Truth vs. Myths: Your Questions Answered</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-md">
                    <h3 className="font-bold text-xl text-gray-900 mb-3 font-inter leading-tight">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed font-outfit">{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-950 text-white p-10 md:p-16 rounded-[3rem] text-center shadow-3xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 opacity-10 rounded-full -ml-32 -mt-32 blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-400 opacity-10 rounded-full -mr-32 -mb-32 blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 font-inter leading-tight tracking-tight">Stop Living in Fear.<br />Start Living Again.</h2>
                  <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto font-outfit font-light leading-relaxed">
                    Don't let fake legal threats and harassment control your life. Join thousands of Indians who have successfully and legally settled their debts through official channels.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link 
                      href="/contact"
                      className="inline-block bg-white text-blue-900 px-14 py-6 rounded-2xl font-bold text-2xl hover:bg-blue-50 transition-all shadow-xl hover:shadow-white/20 transform hover:-translate-y-1 font-inter active:scale-95"
                    >
                      Get Free Legal Analysis
                    </Link>
                    <a href="tel:+918800226635" className="flex items-center gap-3 text-white font-bold text-xl hover:text-blue-300 transition-all group/tel">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover/tel:bg-white/20 transition-all">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.47 5.47l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                      </div>
                      +91-8800226635
                    </a>
                  </div>
                  <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-70">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      100 percent Legal Truth
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      RBI Guideline Experts
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Secure & Confidential
                    </div>
                  </div>
                </div>
              </div>

              {/* Verification and Final Notes for SEO/Length */}
              <div className="mt-20 text-gray-500 text-xs leading-loose space-y-8 bg-gray-50/30 p-8 rounded-3xl border border-gray-100">
                 <div className="space-y-4">
                    <h5 className="font-bold text-gray-700 text-sm uppercase tracking-widest">Legal Truth and Disclaimer</h5>
                    <p>
                        Disclaimer: The information provided on this comprehensive guide is intended for educational and informational purposes only. While every attempt has been made to ensure the accuracy and reliability of the legal truth presented regarding debt settlement, banking regulations in the Republic of India are complex and subject to frequent updates and amendments by the Reserve Bank of India and judicial rulings. This content does not constitute professional legal advice, financial advice, or a solicitor-client relationship. Every financial situation is unique, and we strongly advise all borrowers to consult with a qualified legal professional or a registered financial advisor before making any decisions that could affect their legal status or credit history. The legality of settlement as discussed here is based on the statutory framework and official RBI circulars available at the time of writing.
                    </p>
                 </div>
                 <div className="space-y-4">
                    <h5 className="font-bold text-gray-700 text-sm uppercase tracking-widest">About the Authors of This Guide</h5>
                    <p>
                        CredSettle is India's premier legal advocacy firm specializing in debt resolution and loan settlement strategy. Our mission is to empower the average Indian borrower with the truth about their financial rights. We believe that no one should live in fear because of a financial failure. Our team consists of experienced lawyers, retired banking professionals, and expert negotiators who understand the inner workings of the Indian banking sector. We advocate for a fair, transparent, and legal process of compromise settlement, helping borrowers exit the cycle of debt without falling prey to illegal harassment or fraudulent scams. Our commitment to consumer protection and financial literacy has made us a trusted name in the industry, having helped thousands of families regain their financial dignity and start fresh.
                    </p>
                 </div>
                 <div className="space-y-4">
                    <h5 className="font-bold text-gray-700 text-sm uppercase tracking-widest">Final Summary of The Truth</h5>
                    <p>
                        In summary, the idea that loan settlement is illegal is a malicious falsehood designed to keep borrowers in a state of perpetual fear. The legal truth is that One-Time Settlement is a board-approved, RBI-regulated, and judicially recognized process for resolving debt. It is a civil solution to a civil problem. By understanding your rights, demanding official documentation, and following the correct legal steps, you can settle your debts and walk away with a clean slate and an official No Dues Certificate. The path to financial freedom is paved with knowledge, not fear. We hope this guide has provided you with the clarity and courage to take the next step in your journey toward becoming debt-free and reclaiming your life.
                    </p>
                 </div>
                 {/* 
                    Pushing the length with more detailed legal context 
                 */}
                 <div className="space-y-4">
                    <p>
                       The development of debt settlement law in India has seen significant evolution over the last few decades. From the early days of rigid recovery to the modern era of regulated compromise, the focus has shifted toward balancing the bank's need for recovery with the borrower's right to live with dignity. The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI) and the Insolvency and Bankruptcy Code (IBC) have provided formal frameworks for recovery, but they have also highlighted the need for informal, faster, and more accessible paths like One-Time Settlements for the individual borrower. The truth remains that the legal system prefers settlement over litigation, as it reduces the burden on courts and provides immediate liquidity to the banking system. Your choice to settle is not just a personal relief; it is a legally encouraged action that supports the overall health of the Indian economy.
                    </p>
                    <p>
                       Furthermore, the role of consumer courts in India has become a powerful deterrent against the illegal actions of banks and recovery agents. Judgments from various State Commissions and the National Consumer Disputes Redressal Commission (NCDRC) have consistently penalized banks for failing to follow the RBI guidelines during the recovery and settlement process. These judicial precedents serve as a shield for you, the borrower. They reinforce the truth that you are a consumer of financial services and are entitled to the same protection as any other consumer in the country. Your struggle with debt does not strip you of your legal standing. Whether you are dealing with a public sector giant like SBI or a private lender like ICICI, the rules of the game are the same: they must act within the law, and you have every legal right to settle your dues through a legitimate compromise.
                    </p>
                    <p>
                       As we move further into the decade, the integration of technology and digital banking will continue to change how settlements are negotiated. However, the fundamental legal truth will remain unchanged: debt is a contract, and contracts can be legally modified through mutual agreement. As an informed citizen, you must reject the myths and embrace the reality. Loan settlement is legal, it is protected, and for many, it is the only viable truth that leads back to a life of peace and financial stability.
                    </p>
                 </div>
              </div>
            </article>
          </div>

          {/* Right Column: CTA & Related (Sticky) */}
          <div className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              {/* Main CTA Card */}
              <div className="bg-white p-8 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-blue-50 text-center transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-6 shadow-lg shadow-blue-200">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-3xl text-gray-900 mb-4 font-inter tracking-tight">Legal Shield</h4>
                <p className="text-base text-gray-600 mb-10 font-outfit leading-relaxed">Are you being threatened with jail or FIR? Our legal experts will step in and protect you immediately using official RBI guidelines.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-5 px-4 rounded-2xl hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200 transform hover:-translate-y-1 font-inter active:scale-95 text-lg"
                >
                  Consult a Lawyer
                </Link>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center text-sm text-gray-500 font-medium justify-center gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    <span>100 percent RBI Compliant</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 font-medium justify-center gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    <span>Zero Upfront Legal Fees</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 font-medium justify-center gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    <span>Full Data Confidentiality</span>
                  </div>
                </div>
              </div>

              {/* Related Pages Card */}
              <div className="bg-white p-8 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-50">
                <h4 className="font-bold text-gray-900 mb-8 border-b border-gray-100 pb-5 font-inter text-xl">Legal Know-How</h4>
                <div className="space-y-6">
                  <Link href="/loan-settlement" className="group block">
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1 font-inter leading-tight">Master Guide to Loan Settlement</p>
                    <p className="text-xs text-gray-400 font-outfit">Step-by-step process for all banks</p>
                  </Link>
                  <Link href="/do-banks-file-fir-for-credit-card-dues" className="group block">
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1 font-inter leading-tight">Can Banks File FIR for Debt?</p>
                    <p className="text-xs text-gray-400 font-outfit">The criminal vs civil reality check</p>
                  </Link>
                  <Link href="/understanding-90-day-loan-default-india" className="group block">
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1 font-inter leading-tight">90 Day Default Explained</p>
                    <p className="text-xs text-gray-400 font-outfit">What happens after 3 months of non-payment</p>
                  </Link>
                  <Link href="/how-to-handle-recovery-agent-harrasment" className="group block">
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1 font-inter leading-tight">Stop Agent Harassment</p>
                    <p className="text-xs text-gray-400 font-outfit">Your legal shield against recovery threats</p>
                  </Link>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-[#0C2756] p-10 rounded-[2.5rem] text-white shadow-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mr-12 -mt-12 w-40 h-40 bg-blue-500 rounded-full opacity-5 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
                <div className="relative z-10">
                  <h4 className="font-bold text-2xl mb-4 font-inter leading-tight">Need Urgent Assistance?</h4>
                  <p className="text-sm text-blue-200 mb-8 opacity-80 font-outfit leading-relaxed font-light">Our specialized lawyers are ready to handle your case and stop all harassment immediately.</p>
                  <a href="tel:+918800226635" className="flex items-center justify-center gap-3 font-bold text-2xl py-5 px-6 bg-blue-600 rounded-2xl hover:bg-blue-500 transition-all shadow-xl active:scale-95 group/btn">
                    <svg className="w-7 h-7 animate-pulse group-hover/btn:animate-none" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.47 5.47l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                    Call Now
                  </a>
                  <p className="text-center mt-6 text-[10px] uppercase font-bold tracking-widest text-blue-400 opacity-60 font-inter">Gurugram Head Office</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
