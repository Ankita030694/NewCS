'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function WhatIsNpaClient() {
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
  };

  const navLinks = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'npa-kya-hota-hai', label: 'NPA Kya Hota Hai?' },
    { id: 'banking-definition', label: 'Banking Definition' },
    { id: 'types-of-npa', label: 'Types of Assets' },
    { id: 'calculation', label: 'Calculation' },
    { id: 'causes', label: 'Causes of NPA' },
    { id: 'twin-balance-sheet', label: 'Twin Balance Sheet' },
    { id: 'impact', label: 'Impact Analysis' },
    { id: 'resolution', label: 'Resolution Process' },
    { id: 'narcl', label: 'Bad Bank (NARCL)' },
    { id: 'write-off-vs-npa', label: 'Write-off vs NPA' },
    { id: 'check-status', label: 'Check Status' },
    { id: 'prevention', label: 'Prevention & Management' },
    { id: 'conclusion', label: 'Conclusion' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'What is the full form of NPA in banking?',
      answer: 'The full form of NPA is Non Performing Asset. It refers to a loan or advance for which the principal or interest payment remained overdue for a period of 90 days. It is a critical indicator of the financial health of a bank.'
    },
    {
      question: 'Does an NPA status affect my CIBIL score?',
      answer: 'Yes, an NPA classification has a severe negative impact on your credit score. Since it indicates a default of over 90 days, your score can drop significantly, often below 600. This makes it difficult to get new loans or credit cards in the future.'
    },
    {
      question: 'How can I remove the NPA tag from my account?',
      answer: 'To remove the NPA tag, you must regularize the account by paying the overdue amount including interest and penalties. Alternatively, you can opt for a One Time Settlement (OTS) with the bank to close the loan permanently, though this may reflect as "Settled" in your credit report.'
    },
    {
      question: 'Can a bank seize my property if my loan becomes NPA?',
      answer: 'Yes, for secured loans like home loans or loans against property, the bank has the right to initiate proceedings under the SARFAESI Act to take possession of the collateral. They can auction the property to recover their dues without intervention from the court.'
    },
    {
      question: 'What is the difference between Gross NPA and Net NPA?',
      answer: 'Gross NPA represents the total value of all non-performing loans in a bank. Net NPA is the value remaining after deducting the provisions (money set aside for losses) from the Gross NPA. Net NPA gives a truer picture of the actual risk.'
    },
    {
      question: 'Can I get a loan after my account becomes NPA?',
      answer: 'Getting a standard loan from major banks is very difficult with an active NPA or a recent settlement history. However, some NBFCs or fintech lenders might proivde loans at higher interest rates. Your best path is to improve your credit score over time before applying.'
    },
    {
      question: 'What is the 90 day norm for NPA?',
      answer: 'The 90 day norm states that a loan is classified as NPA if the interest or principal payment remains overdue for more than 90 days. This applies to most commercial and personal loans, with exceptions for agricultural loans.'
    }
  ];

  return (
    <>
      {/* Breadcrumb Section */}
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
                  <Link href="/resources" className="ml-1 font-medium text-gray-500 hover:text-blue-600 md:ml-2">
                    Resources
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    What is NPA
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content Layout - 3 Column */}
      <div className="max-w-[1440px] mx-auto px-4 py-12">
        
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
          <div className="lg:w-1/6 hidden lg:block">
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
          <div className="lg:w-2/3 w-full">
            <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">What is NPA? The Complete Guide to Non Performing Assets</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  The banking sector is unequivocally the backbone of any modern economy. It facilitates the smooth flow of capital from those who have surplus funds, such as depositors, to those who need them for productive purposes, such as entrepreneurs and homebuyers. However, this flow is inherent with risks, the most significant being the &quot;Credit Risk&quot;-the risk that a borrower will fail to repay their loan. When a borrower stops making payments, the asset (the loan) ceases to generate income for the bank. In banking and financial terminology, this represents a <strong>Non Performing Asset</strong> or <strong>NPA</strong>.
                </p>
                <p className="mb-4">
                  Understanding <strong>what is NPA</strong> is crucial not just for bankers, Chartered Accountants, and finance students, but for every individual who participates in the financial system. Whether you are a business owner seeking a line of credit, a home buyer servicing a mortgage, or a depositor worried about the safety of your hard earned savings in the bank, the concept of NPA has a direct impact on your financial life. The alarming rise of NPAs in the Indian banking system over the last decade has been a major topic of debate, leading to stringent regulations by the Reserve Bank of India (RBI) and the introduction of transformative legal frameworks like the Insolvency and Bankruptcy Code (IBC).
                </p>
                <p className="mb-4">
                  This comprehensive guide aims to demystify the concept of Non Performing Assets in exhaustive detail. We will explore the technical definitions, the sliding scale of asset classification, the root causes behind their accumulation, and the profound, multi-layered impact they have on banks, borrowers, and the macroeconomy. Furthermore, we will delve into the resolution mechanisms available in India, providing a practical roadmap for those who find themselves struggling with debt. By the end of this article, you will have a deep, actionable understanding of <strong>NPA in banking</strong> and how it shapes the financial landscape of the nation.
                </p>
                <p>
                  We often hear terms like "Bad Bank", "Loan Write-off", and "Debt Restructuring". These are all interconnected with the central concept of potentially bad loans. As we navigate through this guide, we will clarify these terms, ensuring you have a holistic view of the subject.
                </p>
              </div>

              <h2 id="npa-kya-hota-hai" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">NPA Kya Hota Hai? (Understanding in Simple Terms)</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  India is a linguistically diverse country, and for many, complex financial terms are best understood in their native language context. A very common query on search engines is &quot;<strong>NPA kya hota hai?</strong>&quot; Let us break this down simply for our Hindi speaking audience and anyone looking for a simplified, layman explanation.
                </p>
                <p className="mb-4">
                  <em>Sadharan bhasha mein samjhein to, NPA ka matlab hota hai &quot;Fansa hua karz&quot;.</em>
                </p>
                <p className="mb-4">
                  Jab koi vyakti ya company bank se loan leti hai, to use vah loan wapas chukana padta hai byaj (interest) ke saath. Bank ke liye diya gaya loan ek &quot;Asset&quot; (sampatti) hota hai. Kyun? Kyunki yah bank ko regular aamdani (income) deta hai byaj ke roop mein. Jab tak loan ki kishtein (EMI) samay par di ja rahi hain, vah ek &quot;Standard Asset&quot; ya &quot;Performing Asset&quot; kahlata hai. Yaani, wo asset bank ke liye perform kar raha hai.
                </p>
                <p className="mb-4">
                  Lekin, jab wah vyakti (borrower) kisi karanvash-chahe naukri chutne se, vyapar mein ghata hone se, ya janbujhkar-loan ki kishtein dena band kar deta hai, aur <strong>90 dinon (3 mahine)</strong> tak bank ko na to mool dhan (principal) milta hai aur na hi byaj wapas milta hai, to bank us loan ko &quot;Non Performing Asset&quot; ya NPA ghoshit kar deta hai. Iska seedha matlab hai ki vah sampatti ab bank ke liye kaam nahi kar rahi hai, yaani perform nahi kar rahi hai.
                </p>
                <p className="mb-4">
                  <strong>Ek Account NPA Banne Par Grahak Par Kya Asar Padta Hai?</strong>
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Credit Score Kharab Hona:</strong> Sabse bada nuksan ye hota hai ki CIBIL score bahut neeche gir jata hai. Ek baar NPA ka tag lag gaya, to score 750 se girkar 600 ya usse kam ho sakta hai.</li>
                  <li><strong>Bhavishya Mein Loan na Milna:</strong> Ek baar account NPA ho gaya to dusre bank ya vittiya sansthan loan dene mein inkaar kar dete hain. Aap credit card ke liye bhi apply nahi kar paate.</li>
                  <li><strong>Kanooni Karvai:</strong> Bank apne paise wapas lene ke liye legal notice bhej sakta hai. Agar loan secured hai (jaise home loan), to bank SARFAESI act ke tahat apki property zapt kar sakta hai aur use bech sakta hai.</li>
                  <li><strong>Samajik Pratistha:</strong> Kai baar banks recovery agents bhejte hain jo ghar aakar pareshan kar sakte hain, jisse samajik chavi kharab hoti hai.</li>
                </ul>
                <p>
                  Isliye, yah zaroori hai ki agar koi loan NPA hone ki kagaar par hai, to turant bank se sampark karke uska samadhan nikala jaye. Settlement, Restructuring, ya EMI Holiday jaise vikalp maujood hote hain jo apko is musibat se nikalne mein madad kar sakte hain. The stigma associated with &quot;<strong>npa kya hota hai</strong>&quot; often prevents people from seeking help early, but knowing the facts is the first step towards resolution.
                </p>
              </div>

              <h2 id="banking-definition" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Technical Definition and The 90-Day Norm</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  In the strict parlance of banking and accounting, an asset, including a leased asset, becomes non performing when it ceases to generate income for the bank. The Reserve Bank of India (RBI), which regulates the banking sector in India, has laid down specific, rigid guidelines to ensure uniformity in the classification of assets across the banking industry. The cornerstone of these guidelines is the &quot;90-Day Norm&quot;.
                </p>
                <p className="mb-4">
                  According to the RBI Master Circular on &quot;Prudential Norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances&quot;, a Non Performing Asset (NPA) is a loan or an advance where:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Term Loans:</strong> Interest and/or installment of principal remain overdue for a period of more than 90 days.</li>
                  <li><strong>Overdraft/Cash Credit (OD/CC):</strong> The account remains &apos;out of order&apos; for a continuous period of 90 days.</li>
                  <li><strong>Bill Discounting:</strong> The bill remains overdue for a period of more than 90 days in the case of bills purchased and discounted.</li>
                  <li><strong>Agricultural Loans (Short Duration):</strong> The installment of principal or interest thereon remains overdue for two crop seasons.</li>
                  <li><strong>Agricultural Loans (Long Duration):</strong> The installment of principal or interest thereon remains overdue for one crop season.</li>
                </ul>
                <p className="mb-4">
                  <strong>Understanding the Exceptions</strong><br/>
                  It is critically important to note the agricultural exception. The 90-day rule applies primarily to commercial, corporate, and personal retail loans. For agricultural loans, the classification is linked to crop seasons rather than a fixed number of days. This is to account for the harvest cycles that dictate a farmer&apos;s cash flow. A &quot;long duration&quot; crop is one with a crop season longer than one year, while others are &quot;short duration&quot;.
                </p>
                <p className="mb-4">
                  <strong>When is an account &apos;Out of Order&apos;?</strong><br/>
                  For revolving credit facilities like Overdrafts and Cash Credits, the concept of "overdue" is slightly different. An account should be treated as &apos;out of order&apos; if:
                  <br/>
                  1. The outstanding balance remains continuously in excess of the sanctioned limit/drawing power.
                  <br/>
                  2. In cases where the outstanding balance in the principal operating account is less than the sanctioned limit/drawing power, but there are no credits continuously for 90 days as on the date of Balance Sheet or credits are not enough to cover the interest debited during the same period.
                </p>
                <p>
                  This rigorous definition ensures that banks do not hide their bad loans or "evergreen" them (lend more money to pay off old intererst). Transparency in recognizing <strong>npa in banking</strong> is essential for maintaining the stability of the financial system. If banks were allowed to delay recognition, they might continue lending to defaulting borrowers, eventually leading to a much larger systemic collapse, akin to what was seen in the 2008 global financial crisis.
                </p>
              </div>

              <h2 id="types-of-npa" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Classification: Types of Non Performing Assets</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Not all NPAs are created equal. Once an asset is identified as an NPA based on the 90-day norm, it does not remain static. It travels through a lifecycle of degradation. The RBI requires banks to further classify NPAs into three categories based on the period for which the asset has remained non performing and the realizability of the dues. This classification is vital because it determines the amount of money the bank must set aside (provisioning) to cover potential losses. The three categories are:
                </p>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">1. Sub Standard Assets</h3>
                    <p>
                      A Sub Standard Asset is one which has remained NPA for a period less than or equal to 12 months. In such cases, the current net worth of the borrower/guarantor or the current market value of the security charged is not enough to ensure recovery of the dues to the banks in full. In other words, there is a distinct possibility that the bank will sustain some loss if deficiencies are not corrected. This is the first stage of an NPA. At this stage, there is still hope for upgradation if the borrower clears the dues.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">2. Doubtful Assets</h3>
                    <p className="mb-2">
                      An asset would be classified as doubtful if it has remained in the sub standard category for a period exceeding 12 months. That means the loan has been essentially unpaid for 15 months (3 months to become NPA + 12 months as sub standard). A Doubtful Asset has all the weaknesses inherent in assets that were classified as sub standard, with the added characteristic that the weaknesses make collection or liquidation in full, on the basis of currently known facts, conditions and values, highly questionable and improbable.
                    </p>
                    <p>Doubtful Assets are further sub-classified into:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li><strong>D1 (Doubtful 1):</strong> Doubtful up to 1 year (i.e., NPA age between 15 months to 27 months).</li>
                      <li><strong>D2 (Doubtful 2):</strong> Doubtful for more than 1 year and up to 3 years.</li>
                      <li><strong>D3 (Doubtful 3):</strong> Doubtful for more than 3 years.</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">3. Loss Assets</h3>
                    <p>
                      A Loss Asset is one where loss has been identified by the bank or internal/external auditors or the RBI inspection but the amount has not been written off wholly. In other words, such an asset is considered uncollectible and of such little value that its continuance as a bankable asset is not warranted although there may be some salvage or recovery value. This is the final stage where the bank essentially accepts that the money is gone. Even if 100% provision is made, it might stay on the books until technically written off.
                    </p>
                  </div>
                </div>
                <p className="mt-6">
                  Understanding these types helps us realize that NPA is not a binary state of &quot;Good&quot; or &quot;Bad&quot;. It is a sliding scale of degradation. A sub standard asset can still be upgraded to a standard asset if the borrower pays the dues. However, once it slips into the Loss Asset category, the chances of recovery are minimal, and the bank focuses purely on salvage value through legal enforcement.
                </p>
              </div>

              <h2 id="calculation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Calculation and Provisioning Norms</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  When analyzing the financial health of a bank, analysts, investors, and regulators look at two key metrics related to NPAs: Gross NPA and Net NPA. It is vital to distinguish between the two to get an accurate picture of the bank&apos;s balance sheet quality.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border border-blue-100 p-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Gross NPA (GNPA)</h4>
                    <p>
                      This is the absolute amount of all loans classified as NPA. It represents the total volume of bad loans on the bank&apos;s books. It is a gross measure of the quality of the loan book.
                      <br/>
                      <em>Formula: GNPA Ratio = (Total GNPA / Total Advances) x 100</em>
                    </p>
                  </div>
                  <div className="border border-blue-100 p-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Net NPA (NNPA)</h4>
                    <p>
                      This is the amount of bad loans remaining after deducting the provisions made by the bank. It represents the actual risk the bank is still carrying on its balance sheet.
                      <br/>
                      <em>Formula: Net NPA = Gross NPA - Provisions</em>
                    </p>
                  </div>
                </div>
                <p className="mb-4">
                  <strong>What is Provisioning?</strong><br/>
                  Provisioning is the practice of setting aside funds from the bank&apos;s profits to cover potential losses arising from bad assets. It is a safety buffer. The RBI mandates minimum provisioning requirements based on the asset category. This ensures that the bank remains solvent even if the loans are never recovered.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Standard Assets:</strong> 0.40% (General provisioning to cover latent risk).</li>
                  <li><strong>Sub Standard Assets:</strong> 15% for secured exposures and 25% for unsecured exposures.</li>
                  <li><strong>Doubtful Assets (D1):</strong> 25% of the secured portion + 100% of the unsecured portion.</li>
                  <li><strong>Doubtful Assets (D2):</strong> 40% of the secured portion + 100% of the unsecured portion.</li>
                  <li><strong>Doubtful Assets (D3):</strong> 100% of the secured portion + 100% of the unsecured portion.</li>
                  <li><strong>Loss Assets:</strong> 100% of the outstanding amount.</li>
                </ul>
                <p>
                  This system ensures that banks are always prepared for the worst case scenario. High provisioning reduces the net profit of the bank in the short term but ensures long term stability. When a bank reports a sudden drop in quarterly profits, it is often because they have decided to &quot;come clean&quot; and increase provisioning for accumulated bad loans, a process often referred to as "cleaning the books".
                </p>
              </div>

              <h2 id="causes" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Causes and Reasons for Rising NPAs</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Why do loans turn bad? The reasons are multifaceted, ranging from genuine business failures to malicious intent and global economic shifts. Understanding the root causes is essential for policy makers to design effective interventions.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">1. Macroeconomic Factors and Business Cycles</h3>
                <p className="mb-4">
                  The rise in NPAs often correlates with a slowdown in the economy. When GDP growth slows, demand for goods and services drops. Companies that expanded their capacity hoping for high growth suddenly find themselves with idle factories and shrinking revenues. They struggle to service the debt they took for expansion. Sectors like Infrastructure, Power, and Steel are particularly vulnerable to such economic cycles due to their long gestation periods and high capital intensity. If the economic cycle turns downwards during the construction phase, the project may become unviable.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2. Willful Default and Fraud</h3>
                <p className="mb-4">
                  A willful defaulter is a borrower who has the ability to pay but chooses not to. This often involves the diversion of funds. For instance, a company might take a loan for Project A but use the money for risky investments in the stock market, to buy land, or to siphon money to personal accounts of the promoters. This is a criminal breach of trust. High profile cases like that of Vijay Mallya or Nirav Modi fall into the category of fraud and willful default. The RBI has stringent norms for dealing with such entities, including barring them from accessing further institutional finance and debarring them from board positions.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">3. Poor Credit Appraisal and "Lazy Banking"</h3>
                <p className="mb-4">
                  Sometimes, the fault lies with the bank. In times of an economic boom, banks often compete aggressively to lend, lowering their credit standards to gain market share. They may conduct inadequate due diligence, rely on inflated projections, or finance unviable projects without proper collateral. This phenomenon, known as "lazy banking" or "irrational exuberance", leads to a buildup of poor quality assets that turn bad when the economic tide turns.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">4. Policy Paralysis and Delays</h3>
                <p className="mb-4">
                  In large infrastructure projects, delays in land acquisition, environmental clearances, or sudden changes in government policy (like cancellation of coal blocks or telecom licenses) can stall a project for years. During this time, the interest on the loan keeps compounding, while the project generates zero revenue. Eventually, the project cost escalates to a point where it is no longer viable, and the loan turns into an NPA despite the promoter&apos;s best intentions.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">5. Personal Financial Crises</h3>
                <p>
                  For retail borrowers (individuals), NPAs are rarely malicious. They usually stem from unforeseen life events like job loss, medical emergencies, divorce, or death of a primary earner. A sudden loss of income destroys the repayment capacity. In the absence of adequate social security safety nets in India, the borrower is forced to default on obligations like home loans or credit card payments to fund basic survival needs.
                </p>
              </div>

              <h2 id="twin-balance-sheet" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Twin Balance Sheet Problem</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  A concept popularized in the Economic Survey of India is the &quot;Twin Balance Sheet Problem&quot;. This refers to a situation where both the banking sector and the corporate sector are under financial stress.
                </p>
                <p className="mb-4">
                  <strong>1. Corporate Balance Sheets:</strong> Many large Indian companies over-borrowed during the boom years. When growth slowed, their profits were insufficient to cover their interest obligations. They became "over-leveraged".
                </p>
                <p className="mb-4">
                  <strong>2. Bank Balance Sheets:</strong> Since these companies could not pay back their loans, the loans turned into NPAs on the banks&apos; books. This eroded the banks&apos; capital and restricted their ability to lend.
                </p>
                <p>
                  This creates a vicious cycle: Banks cannot lend because they are burdened with NPAs. Companies cannot invest because they are burdened with debt and cannot get new loans. This paralysis stifles economic growth, investment, and job creation. Resolving NPAs is the only way to break this cycle and restore economic dynamism.
                </p>
              </div>

              <h2 id="impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Impact of NPA: The Multi-Layered Ripple Effect</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  The impact of <strong>Non Performing Assets</strong> is not limited to the ledger books of banks. It creates a ripple effect that touches the entire economy, affecting stakeholders at every level.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Impact on Banks</h3>
                    <p>
                      The primary victim is the bank itself. NPAs eat into profitability in two ways: first, the bank stops earning interest income on these assets. Second, the bank must set aside a significant portion of its operating profits for provisioning. This "double whammy" erodes the bank&apos;s capital base. If the Capital Adquacy Ratio (CAR) falls below the regulatory minimum (Basel III norms), the RBI may impose severe restrictions under the Prompt Corrective Action (PCA) framework. PCA banks are often stopped from lending, expanding their branch network, or hiring new staff. This can lead to a fall in the bank&apos;s stock price, loss of market share, and a loss of depositor confidence.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Impact on Borrowers</h3>
                    <p>
                      For the borrower, the consequences are severe and long lasting. A default destroys creditworthiness. The CIBIL score plummets, often below the 600 mark, effectively closing the doors to future credit from formal financial institutions. For businesses, this means an inability to manage working capital, often leading to potential bankruptcy or closure. For individuals, it means the inability to buy a home, get a car loan, or even get a phone contract. Furthermore, the psychological stress of dealing with recovery agents and legal notices takes a heavy toll. Property seizure under SARFAESI can lead to loss of one&apos;s home or business premises, leading to social displacement.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Impact on the Economy and Society</h3>
                    <p>
                      When banks are burdened with high NPAs, they become extremely risk averse. They stop lending to new projects, fearing more defaults. This phenomenon, known as "credit freeze", chokes the economy. Businesses cannot expand, entrepreneurs cannot start new ventures, and jobs are not created. The slow credit growth drags down the GDP. Furthermore, public sector banks (PSBs) are often major holders of NPAs. To keep them afloat, the government often has to step in to recapitalize them using taxpayer money-money that could have been used for schools, hospitals, or infrastructure development. Thus, the cost of NPAs is ultimately borne by the honest taxpayer and the citizenry at large.
                    </p>
                  </div>
                </div>
              </div>

              <h2 id="resolution" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Resolution Mechanisms: How to Handle NPA</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Recognizing the gravity of the issue, the Indian government and the RBI have established robust frameworks for the resolution of NPAs. These mechanisms aim to balance the rights of the lenders to recover their dues with the need to offer a fair exit route for honest business failures.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">1. SARFAESI Act, 2002</h3>
                <p className="mb-4">
                  The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act is a powerful tool for banks. It empowers banks to auction residential or commercial properties that have been pledged as collateral to recover loans. The key feature is that banks can do this <em>without the intervention of the courts</em>. This significantly speeds up the recovery process. However, it applies only to secured loans and loan amounts above ₹1 Lakh where the overdue amount is more than 20% of the principal/interest.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">2. Insolvency and Bankruptcy Code (IBC), 2016</h3>
                <p className="mb-4">
                  The IBC was a game changer in the Indian corporate landscape. It consolidated all existing insolvency laws into a single code. It provides a time bound process (180 days, extendable by 90 days) to resolve insolvency. If a resolution plan (restructuring the company) is not agreed upon by the Committee of Creditors (CoC) within this period, the company goes into liquidation. This threat of losing control of their company forces promoters to come to the table and negotiate seriously with banks. The IBC has been instrumental in resolving large corporate NPAs.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">3. Debt Recovery Tribunals (DRT)</h3>
                <p className="mb-4">
                   Established under the Recovery of Debts Due to Banks and Financial Institutions Act (RDDBFI), DRTs are special quasi-judicial bodies designed to handle debt recovery cases for banks. While faster than civil courts, they usually deal with loan amounts above ₹20 Lakhs. Borrowers can appeal DRT orders in the Debt Recovery Appellate Tribunal (DRAT).
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">4. Lok Adalats</h3>
                <p className="mb-4">
                  For smaller loans (typically up to Rs. 20 Lakhs), Lok Adalats offer an excellent forum for amicable settlement. They are non adversarial and focus on compromise between the two parties. The decision of the Lok Adalat is final and binding and cannot be appealed in any court. This is often an effective route for personal loan and credit card defaulters to settle their dues without lengthy litigation.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-2">5. One Time Settlement (OTS)</h3>
                <p className="mb-4">
                  This is where services like CredSettle come into the picture. OTS is a bilateral agreement between the bank and the borrower. The bank agrees to accept a lump sum payment that is less than the total outstanding (waiving off interest and penalties, and sometimes part of the principal) to close the account.
                  <br/><br/>
                  For a borrower, OTS is often the most practical solution to get out of the debt trap. It stops the harassment and allows for a fresh start. While it impacts the credit score initially, the freedom from debt allows the individual to eventually rebuild their financial standing.
                </p>
              </div>

              <h2 id="narcl" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Bad Bank: National Asset Reconstruction Company Ltd (NARCL)</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                   A recent and major initiative by the Government of India is the setting up of the National Asset Reconstruction Company Ltd (NARCL), often referred to as the &quot;Bad Bank&quot;.
                </p>
                <p className="mb-4">
                  <strong>Concept:</strong> A Bad Bank is set up to buy the bad loans (NPAs) of commercial banks. By transferring these toxic assets to the Bad Bank, the commercial banks can clean up their balance sheets and focus on their core business of lending.
                </p>
                <p className="mb-4">
                  <strong>How it works:</strong> The NARCL aggregates and consolidates stressed assets. It pays the banks 15% in cash and 85% in Security Receipts (SRs), which are guaranteed by the government. The IDRCL (India Debt Resolution Company Ltd) then manages these assets and tries to sell them to investors or turn them around to recover value. This structure aims to resolve legacy NPAs in the banking system, especially in the public sector.
                </p>
              </div>

              <h2 id="write-off-vs-npa" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Difference Between NPA, Write-Off, and Restructured Asset</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  These terms are often used interchangeably but have distinct meanings.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm whitespace-nowrap bg-white border border-gray-200 mb-6">
                    <thead className="bg-gray-100 text-gray-900 font-bold border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-3">Term</th>
                        <th className="px-4 py-3">Definition</th>
                        <th className="px-4 py-3">Borrower Liability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="px-4 py-3 font-semibold">NPA</td>
                        <td className="px-4 py-3">Loan overdue for &gt;90 days. Bank still expects repayment.</td>
                        <td className="px-4 py-3">Full liability exists. Interest keeps adding up.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold">Write-Off</td>
                        <td className="px-4 py-3">Bank removes loan from asset book (for tax/accounting) after full provisioning.</td>
                        <td className="px-4 py-3">Legally liable. Bank continues recovery efforts (Technical Write-off).</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold">Restructured</td>
                        <td className="px-4 py-3">Terms of loan changed (tenure increased, rate lowered) to help borrower pay.</td>
                        <td className="px-4 py-3">Liable for new terms. Account may not be classified as NPA if payments are regular.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold">Settled</td>
                        <td className="px-4 py-3">Bank accepts lower amount to close the loan (OTS).</td>
                        <td className="px-4 py-3">Liability ends. Balance is waived. Credit score reflects "Settled".</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h2 id="check-status" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">How to Check Your NPA Status</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Many borrowers are unaware that their account has been classified as NPA until they are rejected for a new loan. Here is how you can check:
                </p>
                <ol className="list-decimal pl-6 space-y-2 mb-4">
                  <li><strong>Check your CIBIL Report:</strong> Download your latest credit report. Look at the "Account Status" section for each loan. If it says <strong>"NPA"</strong>, <strong>"Written Off"</strong>, or <strong>"Suit Filed"</strong>, your account is in default. Also look for "DPD" (Days Past Due). Anything above 90 denotes NPA status.</li>
                  <li><strong>Review Bank Statements:</strong> If you see debit entries for "Penal Interest" or if your EMI bounces are frequent, you are at risk.</li>
                  <li><strong>Notices:</strong> Do not ignore letters from the bank. A notice under Section 13(2) of the SARFAESI Act is a definitive confirmation that your account is an NPA and the bank is initiating action.</li>
                </ol>
                <p>
                  If you discover an error (e.g., you paid but it shows NPA), you must immediately file a dispute with the credit bureau and the bank.
                </p>
              </div>

              <h2 id="prevention" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Prevention and Future Outlook</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Prevention is better than cure. Banks are now increasingly investing in Early Warning Signals (EWS). Using Artificial Intelligence and Machine Learning, banks analyze transaction patterns to detect signs of stress before a default happens. For example, if a company suddenly stops receiving payments from its main client, or if an individual starts revolving credit on multiple cards, the system flags it.
                </p>
                <p className="mb-4">
                  For individuals, prevention means financial discipline:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                   <li><strong>Emergency Fund:</strong> Always keep 6 months of expenses in liquid funds to pay EMIs during job loss.</li>
                   <li><strong>Insurance:</strong> Loan protection insurance can cover your liability in case of critical illness or death.</li>
                   <li><strong>Communication:</strong> If you foresee a default, talk to the bank <em>before</em> the 90 days. Request for restructuring. Banks are more willing to help a proactive customer than a reactive one.</li>
                </ul>
              </div>

              <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Conclusion</h2>
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  The issue of <strong>what is NPA</strong> is central to the health of our economy. While it is a technical banking term, its implications are real and human. For the banker, it represents a loss of profit. For the borrower, it represents a crisis of livelihood and dignity. The journey from "Performing" to "Non Performing" is often a slippery slope, but the journey back is possible.
                </p>
                <p>
                  With robust legal frameworks like SARFAESI and IBC, and practical solutions like Loan Settlement, there is always a way out. If you are struggling with debt, do not ignore the problem hoping it will go away. It will not. It will only compound. Seek professional help, understand your rights, and take the first step towards resolution today. Your financial freedom is worth fighting for.
                </p>
              </div>

              {/* Client Reviews Section */}
              <section id="reviews" className="scroll-mt-28 mb-12 border-t pt-12 border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 italic mb-4">
                      &quot;I had no idea what NPA was until I got a notice. I was scared I would lose my home. The team at CredSettle explained the SARFAESI process to me and helped me negotiate a settlement. I saved my house.&quot;
                    </p>
                    <p className="font-semibold text-blue-900">- Rajesh G., Delhi</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 italic mb-4">
                      &quot;My business loan turned NPA during the lockdown. Banks were not listening. CredSettle helped me structure an OTS proposal that the bank finally accepted. Very professional.&quot;
                    </p>
                    <p className="font-semibold text-blue-900">- Suresh P., Mumbai</p>
                  </div>
                </div>
              </section>

              {/* FAQs Section */}
              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>

            </article>
          </div>

          {/* Right Column: CTA & Related (Sticky) */}
          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Facing NPA Issues?</h4>
                <p className="text-sm text-gray-600 mb-6">Stop the harassment and safeguard your assets. Talk to an expert today.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Get Help Now
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>v SARFAESI Expert Advice</p>
                  <p className="mt-1">v OTS Negotiation</p>
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
