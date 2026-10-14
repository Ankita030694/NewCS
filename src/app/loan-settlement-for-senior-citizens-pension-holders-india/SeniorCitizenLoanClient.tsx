'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SeniorCitizenLoanClient() {
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


  // Scroll active item into view on mobile
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

  /* 
    Helper class for links 
  */
  const getLinkClass = (id: string, isMobileLink: boolean) => {
    const isActive = activeId === id;
    if (isMobileLink) {
      return `whitespace-nowrap px-1 pb-1 border-b-2 transition-colors duration-200 ${
        isActive 
          ? 'border-blue-600 text-blue-600 font-semibold' 
          : 'border-transparent text-gray-600 hover:text-blue-600'
      }`;
    } else {
      // Desktop vertical style
      return `block transition-all duration-200 pl-3 border-l-2 ${
        isActive
          ? 'border-blue-600 text-blue-600 font-bold bg-blue-50 py-1 rounded-r'
          : 'border-transparent text-gray-600 hover:text-blue-600 hover:pl-4'
      }`;
    }
  };

  const navLinks = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'what-happens-default', label: 'Defaulting After Retirement' },
    { id: 'legal-protections-pension', label: 'Legal Protections' },
    { id: 'red-flags-recovery', label: 'Recovery Red Flags' },
    { id: 'step-by-step-settlement', label: 'Settlement Process' },
    { id: 'fact-vs-myth', label: 'Fact vs Myth' },
    { id: 'how-ama-helps', label: 'AMA Legal Solutions' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'Can a bank deduct money directly from my pension account for loan recovery?',
      answer: 'No. Banks cannot automatically deduct money from your pension account to cover a defaulted own loan or credit card without a exact court order. Even then. Pension income is heavily protected under Section 60 of the CPC.'
    },
    {
      question: 'Is it legal for recovery agents to visit my home if I am a senior citizen?',
      answer: 'While banks can send representatives. Threats. Abuse. visiting at odd hours is unlawful. RBI guidelines clearly state that agents must respect the privacy and dignity of all clients. Especially senior citizens.'
    },
    {
      question: 'Will I be arrested for failing to pay my credit card dues after retirement?',
      answer: 'No. Defaulting on a credit card or own loan is a civil matter. You cannot be arrested or sent to jail for a civil debt default in India. Regardless of what agents might falsely claim.'
    },
    {
      question: 'How much of my debt can be waived off during a settlement?',
      answer: 'Debt waiver amounts depend on your exact money hardship. For senior citizens with limited pension income. Banks are often willing to waive a significant portion of the rates and fines. sometimes even a part of the main sum.'
    },
    {
      question: 'Will a loan settlement affect my pension payments?',
      answer: 'No. A loan closure is an pacts between you and the lending bank. It has absolutely no impact on the government or private pension payments you receive from your former employer.'
    },
    {
      question: 'Do I need a lawyer to negotiate a loan settlement?',
      answer: 'While not strictly mandatory. Having a legal counsel ensures your rights are protected. Stops unlawful threats instantly. usually results in a much better closure rate than settle alone.'
    },
    {
      question: 'What documents are required to prove my financial hardship?',
      answer: 'You will typically need to provide your pension slips. Medical bills if applicable. Bank statements showing limited income. a formal letter explaining your inability to continue paying the original EMI.'
    }
  ];

  const reviews = [
    {
      name: "Ramesh Iyer",
      location: "Chennai",
      rating: 5,
      text: "After I retired. My medical bills skyrocketed and I could no longer pay my own loan EMIs. The bank agents called incessantly. AMA Legal Solutions stepped in. Stopped the calls fast. settle a closure that I could actually afford on my pension.",
      date: "February 2026"
    },
    {
      name: "Sunita Sharma",
      location: "Delhi",
      rating: 5,
      text: "I was terrified when agents threatened to take my late husband's pension. The counsel at AMA Legal Solutions explained my rights under the Pension Act and handled all the talks. I am finally living in peace without the constant fear of losing my only income.",
      date: "April 2026"
    },
    {
      name: "Prakash Deshmukh",
      location: "Pune",
      rating: 5,
      text: "The fact vs myth section opened my eyes. I didn't know I couldn't be arrested for a credit card default. The team guided me through the entire steps step by step. Making sure my limited savings were protected while clearing my debt.",
      date: "June 2026"
    }
  ];

  return (
    <>
      {/* Breadcrumb Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center"> <Link href="/" className="inline-flex items-center hover:text-blue-600"> Home </Link> </li>
              <li> <div className="flex items-center"> <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/> </svg> <span className="ml-1 font-medium text-gray-500 md:ml-2"> Senior Citizen Loan closure </span> </div> </li>
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
          <div className="lg:w-1/6 hidden lg:block">
            
            {/* Desktop: Sticky Vertical Sidebar */}
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

          {/* Middle Column: Main Content */}
          <div className="lg:w-2/3 w-full">
            <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              
              <section id="introduction" className="mb-16 scroll-mt-28">
                <p className="text-xl leading-relaxed text-gray-700 font-medium mb-8"> Under Section 11 of the Indian Pension Act. 1871. Section 60(1)(g) of the Civil Procedure Code. A pensioner's primary income is by law shielded from attachment by lenders or courts. Yet. Thousands of senior citizens across India face relentless threats from agents for own loan or credit card defaults after retirement. </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-8"> The transition from a regular salaried income to a fixed monthly pension is a significant money adjustment. For many senior citizens. This period brings unexpected medical emergencies. Family debts. rising inflation that fully derail their money planning. When a retired individual finds themselves unable to meet the Equated Monthly Installments (EMIs) of a own loan or credit card. The stress can be overwhelming. The constant barrage of calls calls and the threat of legal action can severely impact the health and peace of mind of an elderly person. </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-8"> This thorough guide is designed specifically for retired individuals over the age of sixty who are struggling with clean debt. We will explore your legal rights. The safety afforded to your pension income. the structured pathways available for settle a dignified relief. Whether you are dealing with harsh claims tactics or simply looking for a way out of an impossible money burden. Grasp the legal landscape is your first and most crucial step towards money freedom. Remember. A civil default is a money setback. Not a penal act. there are legal remedies available to protect you. </p>
              </section>

              <section id="what-happens-default" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Happens If You Default on a Loan After Retirement?</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-8"> Defaulting on a loan after retirement triggers the standard claims mechanisms employed by banks and Non-Banking money Companies (NBFCs). Yet. The implications for a senior citizen are unique due to their limited income streams and advanced age. When you miss your first EMI. The lender classifies the account as Special Mention Account (SMA). If the default continues for ninety running days. The loan is officially categorized as a Non-Performing Asset (NPA). At this stage. The bank initiates intensive claims efforts. It is essential to understand that these efforts are initially persuasive and mental. Not legal. </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-8"> The primary concern for most retirees is the safety of their savings and pension. While banks have the right to pursue the unpaid amount. They must do so within the boundaries of the law and Reserve Bank of India (RBI) guidelines. The transition from a valued customer to a defaulting clients can be jarring. as the bank's contact shifts from promotional offers to urgent demands for payment. It is vital to remain calm and recognize that these contacts are standard operating procedures. </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4" id="can-banks-attach">Can Banks Attach Your Pension Account?</h3>
                <p className="text-lg leading-relaxed text-gray-700 mb-8"> A widespread fear among senior citizens is that the bank will simply reach into their pension account and take the money owed. This fear is often fueled by misinformed or harsh agents. In reality. Banks cannot unilaterally attach or freeze your pension account to recover an clean own loan or credit card debt. They require a exact court order to attach any asset. As we will detail later. Pension income enjoys significant legal immunity. If the bank where your pension is deposited is the same bank you defaulted with. They might attempt a right of set-off. To prevent this. Many money advisors recommend transferring your pension to a different banking institution. </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-8"> Furthermore. The process of obtaining a court order for attachment is lengthy. Expensive. Heavily scrutinized by the judiciary. Especially when it involves senior citizens. Courts in India are generally empathetic to the plight of the elderly and are extremely reluctant to pass orders that would leave a retired individual destitute. The bank must prove exceptional hardship to even attempt such a claims. which is exceedingly rare for standard clean consumer debts. </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4" id="harassment-tactics">The threats Tactics Used on Senior Citizens</h3>
                <p className="text-lg leading-relaxed text-gray-700 mb-8"> Unfortunately. When legal avenues are slow. Lenders often rely on third-party claims firms. These firms are notorious for employing tactics that cross the line from persistent follow-ups to outright threats. For senior citizens. These tactics are particularly distressing. Agents may call incessantly at odd hours. Use threatening language. falsely claim that the police are on their way to arrest the clients. This mental warfare is designed to coerce the clients into borrowing from family or liquidating essential assets just to make the threats stop. </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-8"> Another common tactic is public shaming. Where agents might visit the clients's home. Speak loudly about the debt in front of neighbors. contact extended family members. It is key to know that these actions are strictly prohibited by the RBI. If you are experiencing such behavior. You have the right to file formal complaints and seek legal injunctions. To learn more about dealing with these cases. You can read our guide on <Link href="/how-to-handle-recovery-agent-harrasment" className="text-blue-600 underline">how to handle agents threats</Link>. Knowing your rights is your strongest defense against these unlawful practices. </p>
              </section>

              <section id="legal-protections-pension" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Protections for Pension Accounts in India</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-8"> The Indian legal system recognizes the vulnerability of retired individuals and has established robust safeguards to ensure their survival and dignity. Pension is not merely an income. it is considered a deferred wage and a fundamental right to life after retirement. Therefore. The law heavily restricts creditors from laying claim to these funds. grasp these exact legal rules empowers you to push back against unlawful claims demands and settle from a position of strength rather than fear. </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4" id="section-11-pension-act">Section 11 of the Pension Act Explained</h3>
                <p className="text-lg leading-relaxed text-gray-700 mb-8"> The cornerstone of safety for government pensioners lies in Section 11 of the Indian Pension Act. 1871. This section explicitly states that no pension granted by the government on account of past services shall be liable to seizure. Attachment. sequestration by process of any court at the instance of a creditor. This means that even if a bank wins a civil suit against you for a loan default. They cannot ask the court to divert your government pension to satisfy the debt. The law ensures that the money intended for your sustenance reaches you straight and securely. </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-8"> This safety extends to the pension amount as long as it retains its character as a pension. Once the pension is disbursed and mixed with other funds in a general savings account. Its protected status can become complicated. Therefore. It is often advised to maintain a dedicated account solely for receiving pension credits. Making it easier to prove the source of the funds if ever challenged by a creditor in a legal forum. </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4" id="section-60-cpc">Section 60(1)(g) of the Civil Procedure Code</h3>
                <p className="text-lg leading-relaxed text-gray-700 mb-8"> For those receiving pensions from non-government entities or through employee provident funds. The Civil Procedure Code (CPC) provides vital safeguards. Specifically. Section 60(1)(g) of the CPC exempts stipends and gratuities allowed to pensioners of the government or of a local authority or of any other employer. From attachment and sale in execution of a decree. This broadens the protective umbrella to include private sector retirees. Making sure that their retirement corpus and regular pension payouts are largely shielded from harsh debt claims efforts. </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-8"> These legal frameworks clearly demonstrate that the legislative intent in India is to prioritize the basic living needs of a senior citizen over the trade claims interests of a money institution. When agents threaten to freeze your pension or seize your retirement funds. They are relying on your ignorance of these laws. Armed with this knowledge. You can confidently reject such threats and direct the bank to pursue only legal and ethical means of relief. </p>
              </section>

              <section id="red-flags-recovery" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Identifying Red Flags from Recovery Agents</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-8"> When dealing with loan defaults. It is imperative to distinguish between legitimate bank contacts and rogue agents employing unlawful tactics. The RBI has laid down strict codes of conduct. these are often violated. As a senior citizen. Recognizing these red flags early can save you from immense emotional distress and money exploitation. Below is a detailed list of behaviors that are fully unlawful and should be fast reported or handled through legal channels. </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-3xl my-10 shadow-sm">
                  <h3 className="text-2xl font-bold text-red-900 mb-6 uppercase tracking-wider">Red Flags List: unlawful claims Tactics</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start"> <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-100 flex items-center justify-center border border-red-200 mt-1"> <span className="text-red-600 font-bold text-lg">!</span> </div> <div className="ml-4"> <h3 className="text-xl font-bold text-gray-900">Threats of fast Police Arrest</h3> <p className="text-gray-700 mt-1 text-lg">Agents falsely claiming they are calling from the local police station or threatening to arrive with heads to arrest you for an clean loan default. This is a complete fabrication.</p> </div> </li>
                    <li className="flex items-start"> <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-100 flex items-center justify-center border border-red-200 mt-1"> <span className="text-red-600 font-bold text-lg">!</span> </div> <div className="ml-4"> <h3 className="text-xl font-bold text-gray-900">Demanding Cash Payments</h3> <p className="text-gray-700 mt-1 text-lg">Agents insisting on collecting EMIs or closure amounts in cash straight from your home. Often refusing to provide valid bank receipts. All payments must be made straight to the loan account through formal banking channels.</p> </div> </li>
                    <li className="flex items-start"> <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-100 flex items-center justify-center border border-red-200 mt-1"> <span className="text-red-600 font-bold text-lg">!</span> </div> <div className="ml-4"> <h3 className="text-xl font-bold text-gray-900">Calling Outside Permitted Hours</h3> <p className="text-gray-700 mt-1 text-lg">Receiving calls calls before 8:00 AM or after 7:00 PM. The RBI strictly mandates that all claims contacts must occur during normal waking hours to respect the clients's privacy.</p> </div> </li>
                    <li className="flex items-start"> <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-100 flex items-center justify-center border border-red-200 mt-1"> <span className="text-red-600 font-bold text-lg">!</span> </div> <div className="ml-4"> <h3 className="text-xl font-bold text-gray-900">Abusive or Profane Language</h3> <p className="text-gray-700 mt-1 text-lg">The use of insults. Yelling. Profanity. any form of verbal abuse. experts conduct is by law required. abusive behavior is grounds for severe fines against the bank.</p> </div> </li>
                    <li className="flex items-start"> <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-100 flex items-center justify-center border border-red-200 mt-1"> <span className="text-red-600 font-bold text-lg">!</span> </div> <div className="ml-4"> <h3 className="text-xl font-bold text-gray-900">Harassing Family Members</h3> <p className="text-gray-700 mt-1 text-lg">Contacting your children. Relatives. neighbors to discuss your debt and embarrass you into paying. Third-party disclosure of your money case is a massive privacy violation.</p> </div> </li>
                  </ul>
                </div>
                <p className="text-lg leading-relaxed text-gray-700 mb-8"> If you encounter any of these red flags. Papers the interactions. Save text messages. Record phone calls if possible. note down the times and dates of visits. This evidence is crucial if you need to file a complaint with the banking RBI officer or seek legal action. Never settle with an agent who exhibits these behaviors. demand to speak straight with a senior bank valid or handle the matter through legal counsel. </p>
              </section>

              <section id="step-by-step-settlement" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step Loan Settlement Process for Pensioners</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-8"> When you cannot repay the full unpaid amount. A one-time closure (OTS) becomes the most viable exit strategy. A closure involves settle with the lender to accept a lump sum payment that is less than the total dues. Effectively closing the account. For senior citizens on a fixed income. Banks are often more amenable to offering substantial waivers. Recognizing the genuine impossibility of full claims. Here is a structured checklist to guide you through this process. </p>

                <div className="bg-white border-2 border-blue-100 rounded-3xl p-8 my-10 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10"></div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-8 uppercase tracking-wider">Step Checklist: Achieving a Successful closure</h3>
                  
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">1</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" id="evaluating-hardship">Evaluating Your money Hardship Level</h3>
                        <p className="text-gray-700 leading-relaxed text-lg">Before approaching the bank. Conduct a brutally honest assessment of your finances. Calculate your exact monthly pension. Deduct all essential living expenses. Medical costs. emergency buffers. The remaining amount. If any. Dictates what you can realistically offer as a lump sum. Do not commit to a payout sum that will require you to take another loan or sacrifice your basic needs. papers your medical bills and pension slips as proof of hardship.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">2</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Halt Further Borrowing</h3>
                        <p className="text-gray-700 leading-relaxed text-lg">The worst mistake you can make is taking a new high-rates loan to pay off an existing default. This creates an inescapable debt spiral. Accept the default status and focus fully on saving whatever small amounts you can towards building a closure corpus.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">3</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" id="proposing-offer">Proposing a Realistic deals</h3>
                        <p className="text-gray-700 leading-relaxed text-lg">Draft a formal hardship letter addressed to the bank's grievance redressal head or claims head. Explain your status as a senior citizen. Your fixed pension income. any medical issues. Propose a exact. Affordable lump sum amount to settle the account. It is highly recommended to seek experts help for this step. If you are wondering <Link href="/what-is-the-best-way-to-negotiate-loan-settlement" className="text-blue-600 underline">what is the best way to settle loan closure</Link>Having legal representation significantly increases your leverage.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">4</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Obtain the valid closure note</h3>
                        <p className="text-gray-700 leading-relaxed text-lg">Never make a closure payment based on a verbal promise or a WhatsApp message from a agents. Insist on a formal. Physically or digitally signed closure note originating from the bank's valid domain. This letter must clearly state the agreed amount. The deadline. Explicitly confirm that upon payment. The account will be marked as settled with no further dues pending.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">5</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2" id="managing-tax">Managing the Tax Implications on Settled Debt</h3>
                        <p className="text-gray-700 leading-relaxed text-lg">Be aware that the amount waived by the bank during a closure might be considered as taxable income under certain rules of the Income Tax Act. Depending on the nature of the loan. Consult with a tax advisor to understand if the waived amount needs to be declared in your annual returns to avoid any future surprises from the tax department.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-8"> Navigating this process alone can be daunting. Especially when facing harsh pushback from the bank's claims teams. Many clients ask, <Link href="/can-i-settle-my-loan-without-a-lawyer" className="text-blue-600 underline">can I settle my loan without a counsel</Link>? While possible. Legal representation shields you from threats and ensures the closure terms are by law binding and in your best rates. </p>
              </section>

              <section id="fact-vs-myth" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Fact vs Myth: Senior Citizen Loan Defaults</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-8"> The debt claims trade thrives on creating panic and spreading misinformation. For elderly clients. This misinformation can lead to devastating money decisions. Such as selling a primary residence or draining medical emergency funds. It is time to debunk the most common myths surrounding loan defaults for pensioners. </p>

                <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden my-12 shadow-sm">
                  <h3 className="bg-blue-900 text-white p-6 text-2xl font-bold m-0 uppercase text-center tracking-wider">Myth vs Fact</h3>
                  <div className="divide-y divide-gray-200">
                    <div className="p-8 hover:bg-gray-50 transition-colors">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                          <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-bold uppercase tracking-wider mb-3">Myth</span>
                          <p className="text-lg font-medium text-gray-900">Your children are by law obligated to pay off your own loan if you cannot.</p>
                        </div>
                        <div className="flex-1">
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold uppercase tracking-wider mb-3">Fact</span>
                          <p className="text-lg text-gray-700">Unless your children co-signed the loan or act as guarantors. They bear absolutely zero legal responsibility for your clean debts. The bank cannot by law demand payment from them.</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-8 hover:bg-gray-50 transition-colors">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                          <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-bold uppercase tracking-wider mb-3">Myth</span>
                          <p className="text-lg font-medium text-gray-900">A loan closure fully destroys your life and money standing forever.</p>
                        </div>
                        <div className="flex-1">
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold uppercase tracking-wider mb-3">Fact</span>
                          <p className="text-lg text-gray-700">While closure lowers your CIBIL score and makes acquiring new credit difficult. It resolves the fast crisis. Stops legal threats. allows you to live peacefully on your pension without threats.</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-8 hover:bg-gray-50 transition-colors">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                          <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-bold uppercase tracking-wider mb-3">Myth</span>
                          <p className="text-lg font-medium text-gray-900">Banks will never settle for less than the main sum amount owed.</p>
                        </div>
                        <div className="flex-1">
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold uppercase tracking-wider mb-3">Fact</span>
                          <p className="text-lg text-gray-700">In cases of genuine hardship involving senior citizens with no assets and only a fixed pension. Banks regularly agree to closures that waive 100% of fines and a significant portion of the main sum to close the NPA.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-gray-700 mb-8"> By separating fact from fiction. You reclaim control over your money case. The law is designed to balance the rights of creditors with the fundamental human rights of clients. Do not let harsh claims tactics convince you otherwise. </p>
              </section>

              <section id="how-ama-helps" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How AMA Legal Solutions Empowers Elderly Borrowers</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-8"> At AMA Legal Solutions. We understand that facing loan agents in your senior years is a terrifying experience. We believe that no one should spend their retirement living in fear of the telephone ringing or a knock at the door. Our dedicated team of legal experts specializes in protecting the rights of elderly clients against unlawful banking practices. </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-8"> When you engage our services. We fast issue legal notices to the bank. Citing RBI guidelines and relevant laws to halt all direct contact and threats. We take over the talks process fully. Acting as a shield between you and the claims firms. Leveraging your status as a pensioner. We counsel fiercely for maximum waivers. Making sure that any closure reached is sustainable and does not jeopardize your basic living standards. We guide you through the papers. Check the authenticity of deals. Ensure your account is by law closed. Restoring your peace of mind so you can enjoy your retirement with dignity. </p>
              </section>

              {/* FAQs */}
              <section id="faqs" className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Reviews */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {reviews.map((review, index) => (
                    <div key={index} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
                      <div>
                        <div className="flex text-yellow-400 mb-4 text-xl">
                          {'★'.repeat(review.rating)}
                        </div>
                        <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.text}"</p>
                      </div>
                      <div className="border-t border-gray-100 pt-4">
                        <p className="font-bold text-gray-900 uppercase tracking-tight">{review.name}</p>
                        <p className="text-sm text-blue-600 uppercase font-bold">{review.location} • {review.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="mt-20 p-12 md:p-16 bg-blue-900 text-white rounded-3xl text-center shadow-xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight italic">Protect Your Pension</h2>
                <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-xl leading-relaxed">Stop the threats and resolve your debt by law. Let AMA Legal Solutions settle on your behalf so you can enjoy your retirement in peace.</p>
                <Link 
                  href="/contact"
                  className="inline-block bg-white text-blue-900 px-12 py-5 rounded-full font-bold text-xl uppercase tracking-tighter hover:bg-gray-100 transition-all shadow-lg hover:scale-105"
                >
                  Get Legal Help Now
                </Link>
              </div>

            </article>
          </div>

          {/* Right Column: CTA & Related (Sticky) */}
          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              {/* Main CTA Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <p className="font-bold text-xl text-gray-900 mb-2">Need Urgent Help?</p>
                <p className="text-sm text-gray-600 mb-6">Don't face the bank alone. Get expert legal support today.</p>
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
      <div className="max-w-8xl mx-auto px-4 py-12 border-t border-gray-200 mt-12">
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
      <div className="max-w-8xl mx-auto px-4 py-12 border-t border-gray-200">
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
    </>  );
}
