'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function OnlinePortalSettlementClient() {
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
    { id: 'introduction', label: 'Introduction' },
    { id: 'understanding-digital-settlement', label: 'Understanding Digital Debt Settlement' },
    { id: 'the-mechanics', label: 'The Mechanics: How Portals Work' },
    { id: 'case-study', label: 'Case Study' },
    { id: 'recognizing-scam-portals', label: 'Recognizing Scam Portals' },
    { id: 'cost-breakdown', label: 'Cost Breakdown' },
    { id: 'faqs', label: 'Frequently Asked Questions' },
    { id: 'start-journey', label: 'Begin Your Settlement Safely' },
  ];

  const faqs = [
    {
      question: 'What is the main advantage of using an online portal for loan settlement?',
      answer: 'The primary advantage is complete transparency and security. A digital portal provides a centralized dashboard where you can track negotiation progress, communicate with your designated agents securely, and avoid the physical harassment often associated with offline recovery processes.'
    },
    {
      question: 'Are digital loan settlement agents legally authorized to negotiate for me?',
      answer: 'Yes. When you sign a digital authorization mandate or a Power of Attorney on a verified portal, the assigned legal experts are fully authorized to represent you in negotiations with banks and non-banking financial companies.'
    },
    {
      question: 'How do online portals protect my financial data during submission?',
      answer: 'Reputable platforms use end to end encryption to protect your banking statements, loan agreements, and identity documents. They adhere strictly to the Digital Personal Data Protection Act of India, ensuring your information is never sold to third parties.'
    },
    {
      question: 'Can I settle a business loan using a digital settlement platform?',
      answer: 'Absolutely. Many platforms have specialized divisions for resolving commercial and business debt. The digital process remains the same, though the documentation required will include business financials rather than just personal salary slips.'
    },
    {
      question: 'What happens if the bank rejects the digital settlement proposal?',
      answer: 'Rejection of the initial offer is a standard part of the negotiation cycle. Your virtual agents will analyze the counteroffer from the bank and structure a revised proposal. If a resolution cannot be reached, the portal experts will guide you through alternative legal dispute resolution channels.'
    },
    {
      question: 'How long does the entire digital debt settlement process usually take?',
      answer: 'Depending on the severity of the default and the specific lender policies, a standard settlement via an online platform generally takes between three to six months to reach a final, binding agreement.'
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
                    How Online Portals Work
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
                <li><strong>Digital Ecosystem:</strong> Online portals securely connect defaulted borrowers with certified legal agents for structured negotiations.</li>
                <li><strong>Secure Documentation:</strong> Financial data is uploaded via encrypted dashboards, avoiding the risks of sharing physical documents with unknown agents.</li>
                <li><strong>Scam Prevention:</strong> Verified portals charge fees based on transparent milestones, never demanding exorbitant upfront payments before any work begins.</li>
                <li><strong>Legal Shielding:</strong> Digital platforms act as an immediate buffer against illegal collection practices and relentless harassment calls.</li>
              </ul>
            </section>

            <section>
              <h2 id="introduction" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">The Rise of Digital Debt Relief</h2>
              <div className="text-gray-700 leading-relaxed text-base mb-16 space-y-10 opacity-90 border-l-4 border-blue-600 pl-8">
                <p>
                  In 2025, over 40% of all unsecured debt settlements in India were initiated through digital platforms, marking a massive shift in how borrowers handle defaults. When you engage a loan settlement agent through an online portal, you are employing a virtual legal team to negotiate with creditors securely. This digital transformation has democratized access to high tier legal representation. Previously, securing a competent financial lawyer required extensive offline networking, multiple office visits, and high consultation fees that individuals already in debt simply could not afford. Today, the entire process is streamlined through intuitive, encrypted web applications.
                </p>
                <p>
                  The modern debt relief landscape is fraught with anxiety. Defaulting on a credit card or a personal loan triggers a relentless cascade of automated collection calls, intimidating emails, and sometimes physical visits from recovery personnel. The primary objective of these collection mechanisms is to create a sense of overwhelming urgency and fear. The banking institution hopes that this psychological pressure will compel the borrower to liquidate critical life savings, borrow from predatory lenders, or seek out high interest refinancing options just to stop the harassment.
                </p>
                <p>
                  However, the advent of specialized digital settlement portals has completely altered this power dynamic. By acting as a secure intermediary, these platforms establish an immediate legal buffer between the vulnerable consumer and the aggressive collection apparatus of the lender. A borrower no longer has to face their creditors alone or try to interpret complex legal jargon in isolation. The platform assigns certified professionals who understand the exact internal matrices that banks use to calculate settlement waivers.
                </p>
                <p>
                  This comprehensive guide explores the exact operational mechanics of these online platforms. We will delve into how your sensitive financial data is processed securely, the specific legal frameworks that empower digital agents to act on your behalf, and the critical indicators you must look for to distinguish a legitimate service from a predatory scam. Understanding these digital processes is the first and most crucial step toward reclaiming your financial independence in the modern age.
                </p>
              </div>
            </section>

            <section>
              <h2 id="understanding-digital-settlement" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Understanding Digital Debt Settlement</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Digital debt settlement is not merely a technological upgrade to a traditional service; it is a fundamental restructuring of how financial disputes are resolved. In the past, a borrower seeking a settlement had to physically locate a reliable agent, hand over sensitive hard copies of bank statements, and rely entirely on verbal assurances regarding the progress of their case. This opacity bred inefficiency and created ample opportunities for fraud.
                </p>
                <p>
                  A verified online portal replaces this archaic system with a transparent, data driven infrastructure. When you register on a legitimate platform, you are entering into a formal, legally binding agreement with a registered entity. This entity is usually a corporate firm specializing in financial technology and legal mediation. The portal serves as your command center. It provides real time updates on the status of your accounts, logs every communication made with your lenders, and securely stores all the legal notices and settlement letters generated during the process.
                </p>
                <p>
                  Furthermore, digital settlement agents operate with a significant informational advantage. Because these platforms aggregate thousands of similar cases, their analytical engines can predict the exact waiver percentages that a specific bank is likely to accept at a given stage of delinquency. If you owe money on an ICICI Bank credit card that is one hundred and twenty days past due, the portal's system already knows the historical settlement patterns for that exact scenario. This data driven approach removes the guesswork from negotiations and ensures that the borrower receives the maximum legally permissible discount on their outstanding principal.
                </p>
                <p>
                  The digital model also allows for seamless integration with other legal services. If a lender escalates the matter by filing a case in a Lok Adalat or issuing a formal legal demand notice under the Payment and Settlement Systems Act, the portal's integrated legal team can instantly access your file, draft a comprehensive legal response, and guide you through the required judicial procedures without requiring you to scramble for local legal representation. If you want to understand how these platforms handle specific cyber threats and digital harassment, you can review our guide on resolving <Link href="/digital-online-cyber-loan-disputes" className="text-blue-600 font-bold hover:underline">digital online cyber loan disputes</Link>.
                </p>
              </div>
            </section>

            <section>
              <h2 id="the-mechanics" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">The Mechanics: How Online Portals Facilitate Settlement</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  The operational workflow of a digital settlement platform is designed for maximum efficiency and compliance. The process is divided into clearly defined phases, each aimed at systematically reducing your financial liability while building a robust legal defense against coercive recovery tactics.
                </p>

                <h3 id="secure-data-submission" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Secure Data Submission</h3>
                <p>
                  The foundation of any successful negotiation is verifiable data. The very first step on an online portal involves the secure submission of your financial profile. You will be required to upload your recent CIBIL report, the original loan agreements, detailed bank statements for the past six months, and any communication or legal notices received from the lender. 
                </p>
                <p>
                  Reputable portals utilize military grade encryption protocols, such as AES 256, to ensure that this highly sensitive information is protected from interception. This digital vaulting system is vastly superior to emailing documents to an unverified individual agent. Once the data is uploaded, the platform's analytical tools and legal experts review the material to assess the true severity of your financial hardship. They analyze your income to debt ratio to ensure that you genuinely qualify for a settlement program, as banks will immediately reject settlement requests from individuals who appear to have sufficient liquid assets.
                </p>

                <h3 id="virtual-legal-representation" className="text-base font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Virtual Legal Representation</h3>
                <p>
                  After your case is accepted, the platform requires you to sign a digital authorization mandate or a limited Power of Attorney. This is a critical legal mechanism. It formally appoints the platform's certified agents as your legal representatives in all matters pertaining to the specified debts. This document is electronically signed using Aadhaar based eSign technology, making it fully valid under the Information Technology Act.
                </p>
                <p>
                  Once this mandate is activated, the digital agent sends a formal communication to your creditors, informing them that you have secured legal representation. This notification explicitly directs the bank and their collection agencies to cease all direct communication with you and route all future correspondence through the portal's legal department. This action alone usually stops the relentless barrage of collection calls within forty eight hours.
                </p>
                <p>
                  Following the establishment of this communication perimeter, the virtual negotiation begins. The agents use the platform's secure messaging infrastructure to submit your hardship letter and initial settlement offer directly to the nodal officers or senior resolution managers at the bank. This bypasses the low level recovery agents entirely, ensuring that your case is reviewed by individuals with the actual authority to approve substantial waivers. The entire back and forth negotiation process is logged and visible to you via your portal dashboard, ensuring complete transparency.
                </p>
              </div>
            </section>

            <section>
              <h2 id="case-study" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Case Study: Resolving a Defaulted Personal Loan Online</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Theoretical explanations are important, but real world applications demonstrate the true efficacy of digital settlement platforms. Let us examine a documented case involving a client who utilized an online portal to resolve a severe debt crisis without ever stepping foot inside a lawyer's office.
                </p>
                
                <div className="bg-gray-900 p-10 md:p-14 rounded-3xl text-white shadow-2xl relative overflow-hidden my-12">
                  <div className="relative z-10">
                    <h4 className="text-base font-bold mb-8 text-green-400">The Anatomy of a Digital Resolution</h4>
                    
                    <div className="space-y-6 text-base">
                      <p><strong className="text-green-400">The Subject:</strong> Mr. Anil Kumar, an independent logistics contractor based in Jaipur.</p>
                      <p><strong className="text-green-400">The Problem:</strong> Anil had taken an unsecured personal loan of five lakh rupees to expand his fleet. A sudden severe economic downturn in his sector wiped out his contracts. Over eight months, he exhausted his savings trying to pay the EMIs. When he finally defaulted, the bank applied exorbitant penal interest, ballooning the outstanding balance to over seven lakh rupees. The collection calls reached fifty per day, severely impacting his mental health.</p>
                      <p><strong className="text-green-400">The Digital Intervention:</strong> Anil registered on a verified settlement portal. He uploaded his bank statements showing zero business income and his medical records indicating stress related hospitalization. He digitally signed the authorization mandate from his smartphone.</p>
                      <p><strong className="text-green-400">The Negotiation:</strong> Within three days, the portal's legal team issued a cease and desist notice to the bank's collection agency, immediately halting the phone calls. The virtual agents then initiated negotiations with the bank's centralized resolution desk in Mumbai. The bank initially demanded five lakh rupees to close the account. The digital agents, utilizing historical settlement data for similar profiles, countered with a hardship proposal supported by Anil's uploaded documents.</p>
                      <p><strong className="text-green-400">The Resolution:</strong> After four weeks of structured electronic negotiations, the bank conceded. They recognized that protracted legal recovery efforts against an insolvent contractor would be fruitless. They accepted a One Time Settlement of two lakh rupees, payable in three equal monthly installments. The portal secured the official settlement letter, verified its authenticity, and guided Anil through making the payments directly to the bank via NEFT. Anil achieved a massive waiver and reclaimed his peace of mind, all managed through a secure online interface.</p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-600 rounded-full -mr-40 -mt-40 opacity-10 blur-[100px]"></div>
                </div>
              </div>
            </section>

            <section>
              <h2 id="recognizing-scam-portals" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Recognizing Scam Portals (Red Flags List)</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  While legitimate online platforms offer immense value, the digital space is also populated by malicious actors looking to exploit desperate borrowers. Identifying fraudulent operations is critical before you hand over sensitive financial documents or make any payments. You must educate yourself on <Link href="/how-to-avoid-debt-settlement-scams-in-india" className="text-blue-600 font-bold hover:underline">how to avoid debt settlement scams in India</Link>. Below is a detailed list of red flags that indicate you are dealing with a scam portal.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
                    <h3 id="upfront-fee-demands" className="font-bold text-red-900 text-base mb-4">Immediate Upfront Fee Demands</h3>
                    <p className="text-gray-800 text-base">
                      A legitimate platform charges fees based on milestones, such as successful onboarding, drafting legal notices, or achieving the final settlement. Scam portals typically demand a massive upfront fee, often cloaked as a "registration" or "processing" charge, before any work is performed. Once you pay this exorbitant amount, they cease all communication and disappear. Never pay thousands of rupees just to access a dashboard.
                    </p>
                  </div>
                  <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
                    <h3 id="unverifiable-credentials" className="font-bold text-red-900 text-base mb-4">Unverifiable Corporate Credentials</h3>
                    <p className="text-gray-800 text-base">
                      Authentic settlement platforms operate as registered companies (Private Limited or LLP). They publicly display their Corporate Identification Number (CIN), registered office address, and the profiles of their core legal team. Scam operations often operate through anonymous websites with generic names, lacking any verifiable physical address or transparent leadership information. If a portal refuses to disclose its legal registration details, run away immediately.
                    </p>
                  </div>
                  <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
                    <h3 className="font-bold text-red-900 text-base mb-4">Guarantees of Specific Waivers</h3>
                    <p className="text-gray-800 text-base">
                      No legitimate legal professional or settlement agent can guarantee a specific waiver percentage before negotiations begin. The final settlement amount is entirely at the discretion of the lending bank. If an online portal promises that they will unconditionally reduce your debt by eighty percent or guarantee that your CIBIL score will not be affected, they are lying to you to secure your business.
                    </p>
                  </div>
                  <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
                    <h3 className="font-bold text-red-900 text-base mb-4">Instructions to Stop Paying Creditors</h3>
                    <p className="text-gray-800 text-base">
                      While it is true that you must have a defaulted account to negotiate a settlement, a legitimate advisor will never aggressively order you to intentionally stop paying your active loans just to enroll in their program. Predatory portals encourage this behavior to force you into default, allowing them to collect higher fees, completely ignoring the devastating legal and financial consequences you will face.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 id="cost-breakdown" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Cost Breakdown of Digital Agents</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Transparency in pricing is the hallmark of a trustworthy digital settlement platform. Before you sign any mandate, you must understand exactly how the platform generates revenue and what your total financial commitment will be. We recommend reviewing a detailed analysis of <Link href="/what-are-the-charges-for-loan-settlement-services-by-top-financial-firms" className="text-blue-600 font-bold hover:underline">what financial firms charge for loan settlement services</Link> to ensure you are receiving a fair deal.
                </p>
                <p>
                  Generally, the cost structure of a verified online portal is divided into three distinct components. First, there is usually a nominal onboarding or retainer fee. This covers the administrative costs of setting up your digital vault, conducting the initial review of your CIBIL report, and issuing the preliminary cease and desist letters to stop the harassment. This fee should be reasonable, typically ranging between two thousand to five thousand rupees, depending on the complexity of the case.
                </p>
                <p>
                  The second component involves ongoing subscription or maintenance fees, which some platforms charge to cover the continuous legal representation and monthly negotiation efforts. However, the most ethical platforms eschew monthly subscriptions in favor of a performance based model. 
                </p>
                <p>
                  The final and most significant component is the success fee. This is the core revenue driver for legitimate platforms. The success fee is calculated as a percentage of the total amount saved during the settlement. For example, if you owe five lakh rupees and the portal negotiates a settlement of two lakh rupees, the total savings amount to three lakh rupees. The platform will charge a percentage, usually between ten and fifteen percent, on that three lakh rupee saving. This performance based structure perfectly aligns the portal's incentives with your own; the more money they save you, the more revenue they generate. This ensures they fight aggressively for the highest possible waiver.
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
              <h2 id="start-journey" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Begin Your Settlement Process Safely</h2>
              <div className="mt-16 p-16 md:p-24 bg-black text-white rounded-3xl text-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-base md:text-base font-bold mb-10 leading-[1]">Embrace <span className="text-blue-500 underline underline-offset-[16px]">Digital</span> Debt Relief</h2>
                  <p className="text-gray-400 mb-16 max-w-4xl mx-auto text-base leading-relaxed">
                    Do not let aggressive recovery agents dictate your future. Leverage the power of technology and expert legal representation to secure a fair settlement. The digital tools are available, you simply need to take the first step.
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-blue-600 text-white px-20 py-8 rounded-full font-bold text-base hover:bg-blue-500 transition-all shadow-[0_20px_50px_rgba(37,99,235,0.4)] hover:scale-110 active:scale-95 transform hover:-rotate-2"
                  >
                    Start Your Evaluation Now
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
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" alt="Amit Patel Legal Expert" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-50" />
                <h4 className="font-bold text-gray-900">Amit Patel</h4>
                <p className="text-sm text-gray-500 mb-4">Senior Digital Resolution Strategist</p>
                <p className="text-xs text-gray-400">Expert in navigating digital dispute resolution frameworks and online banking negotiations.</p>
              </div>
            </div>
          </aside>
          
        </div>
      </div>
    </main>
  );
}
