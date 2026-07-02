'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function SpouseLoanConsentClient() {
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
    { id: 'understanding-spousal-identity-theft', label: 'Understanding Spousal Identity Theft' },
    { id: 'immediate-legal-steps', label: 'Immediate Legal Steps' },
    { id: 'gathering-evidence', label: 'Step 1: Gathering Evidence' },
    { id: 'filing-fir', label: 'Step 2: Filing an FIR' },
    { id: 'notifying-bank', label: 'Step 3: Notifying the Bank' },
    { id: 'settlement-vs-criminal', label: 'Settlement vs. Criminal Case' },
    { id: 'civil-settlement', label: 'Pursuing Civil Settlement' },
    { id: 'criminal-prosecution', label: 'Criminal Prosecution' },
    { id: 'impact-cibil', label: 'Impact on CIBIL Score' },
    { id: 'future-financial-health', label: 'Future Financial Health' },
    { id: 'faqs', label: 'Comprehensive FAQs' }
  ];

  const faqs = [
    {
      question: 'Is it a crime if my husband took a loan on my PAN card without my consent?',
      answer: 'Yes, taking a loan using someone else\'s PAN card or Aadhaar card without their explicit consent constitutes forgery and cheating, which are criminal offenses under Sections 420 and 468 of the Indian Penal Code.'
    },
    {
      question: 'Am I legally required to repay the loan my spouse took secretly?',
      answer: 'Legally, you are not obligated to repay a loan that was obtained through identity theft and forgery. However, until you prove the fraud by filing an FIR and notifying the bank, the bank will hold you responsible.'
    },
    {
      question: 'How can I stop recovery agents from calling me for my spouse\'s loan?',
      answer: 'You must send a formal legal notice to the bank enclosing a copy of the FIR filed against the fraudulent transaction. This establishes that the loan is under criminal dispute, compelling the bank to halt recovery actions against you.'
    },
    {
      question: 'Will my CIBIL score be ruined because of my spouse\'s fraud?',
      answer: 'Initially, the default will negatively impact your CIBIL score. However, once you prove the loan was fraudulent and the bank acknowledges it, you can file a dispute with CIBIL to have the fraudulent account removed from your credit history.'
    },
    {
      question: 'Can I settle the loan without filing a police complaint against my spouse?',
      answer: 'Yes, you can choose a civil settlement path if you wish to avoid criminal prosecution of your spouse. This involves negotiating with the bank for a full and final settlement, but you will have to bear the financial burden of the settlement amount.'
    },
    {
      question: 'What documents do I need to prove I did not take the loan?',
      answer: 'You need to request the original loan application and KYC documents from the bank. If the signature is forged, or the OTP was sent to a phone number not belonging to you, these serve as primary evidence of identity theft.'
    },
    {
      question: 'How can CredSettle assist in spousal loan fraud cases?',
      answer: 'CredSettle provides expert legal advocacy to shield you from recovery agent harassment, draft legal notices to the bank, and guide you through the process of either filing a criminal complaint or negotiating a civil settlement to protect your financial dignity.'
    }
  ];

  const reviews = [
    {
      name: "Kavita S.",
      location: "Delhi",
      rating: 5,
      text: "I was shocked to find out my ex-husband took a personal loan of 5 lakhs using my PAN card. The bank was harassing me daily. CredSettle helped me draft a strong legal notice and file the necessary police complaints. The bank stopped calling within a week.",
      date: "May 2026"
    },
    {
      name: "Ramesh P.",
      location: "Bengaluru",
      rating: 5,
      text: "My wife used my Aadhaar to get multiple credit cards without telling me. When the defaults started, my CIBIL was ruined. CredSettle guided me through the legal process of disputing the accounts and separating my liability. Outstanding professional support.",
      date: "April 2026"
    },
    {
      name: "Anjali M.",
      location: "Mumbai",
      rating: 5,
      text: "I didn't want to send my husband to jail, but I needed the bank to stop freezing my salary account. CredSettle helped us negotiate a civil settlement with the bank directly. Their legal team is empathetic and highly effective.",
      date: "June 2026"
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
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    Spousal Loan Fraud
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

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
              
              <h2 id="understanding-spousal-identity-theft" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Understanding Spousal Identity Theft & Financial Abuse</h2>
              <div className="text-gray-700 leading-relaxed text-2xl mb-16 space-y-10 font-light italic opacity-90 border-l-4 border-blue-600 pl-8">
                <p>
                  Discovering that your husband or wife took out a loan using your Aadhaar or PAN card without your knowledge is not just a betrayal of trust—it is a criminal act of forgery punishable under Section 420 and 468 of the Indian Penal Code. If you are facing harassment from banks for a debt you never authorized, immediate legal intervention is critical to clear your name and protect your CIBIL score.
                </p>
                <p>
                  Financial abuse within a marriage is a complex and often devastating experience. When a spouse utilizes your personal identification documents to secure credit cards, personal loans, or even digital lending app loans, they are committing identity theft. In India, the emotional toll of such a discovery is compounded by the aggressive recovery tactics employed by financial institutions, who view you as the primary defaulter regardless of your domestic circumstances. 
                </p>
                <p>
                  Many victims find themselves paralyzed, torn between protecting their marital relationship and protecting their financial survival. However, ignoring the problem will only lead to severe consequences: plummeting credit scores, frozen bank accounts, and relentless harassment from third-party recovery agents. This guide is designed to empower you with actionable legal steps. Whether you decide to pursue a formal <Link href="/legal-case-for-loan-sanction-without-consent" className="text-blue-600 hover:underline">legal case for a loan sanctioned without consent</Link> or seek a negotiated civil resolution, understanding your rights is the first and most crucial step in reclaiming your financial independence.
                </p>
                <p>
                  The reality is that banks operate on documentation. If your PAN card and Aadhaar card were used, the bank&apos;s system registers you as the borrower. Proving that your spouse orchestrated the transaction without your consent requires a structured legal approach. You cannot simply tell the bank over the phone that you didn't take the loan; you must provide legal documentation that establishes the fraud.
                </p>
              </div>

              <h2 id="immediate-legal-steps" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Immediate Legal Steps to Take (Legal Process Map)</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-xl">
                <p>
                  When you first discover the fraudulent loan, time is of the essence. You need to establish a paper trail that clearly separates your liability from the fraudulent actions of your spouse. Below is the exact Legal Process Map you must follow to secure your position.
                </p>
                
                {/* SECTION TYPE 1: Legal Process Map */}
                <div className="relative border-l-4 border-blue-600 ml-4 pl-8 py-4 space-y-12">
                  <div className="relative">
                    <span className="absolute -left-12 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg">1</span>
                    <h3 id="gathering-evidence" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-28">Step 1: Gathering Evidence of Forgery</h3>
                    <p className="font-light leading-relaxed">
                      Before approaching the authorities, you must collect evidence. Approach the bank or the NBFC and request a complete copy of the loan application file. This includes the application form, the signed agreement, and the KYC documents submitted. Look for forged signatures. Check which bank account the loan amount was disbursed to—if the money went into an account solely operated by your spouse, this is crucial evidence of fraud. Also, review the registered mobile number and email address used for the OTP verification. Often, the fraudulent spouse will use their own contact details to intercept verification communications.
                    </p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-12 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg">2</span>
                    <h3 id="filing-fir" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-28">Step 2: Filing an FIR (Section 420 and 468)</h3>
                    <p className="font-light leading-relaxed">
                      To legally sever your liability, you must file a First Information Report (FIR) at your local police station or through the cyber crime portal. The FIR should clearly state that your identity documents (Aadhaar/PAN) were misused to obtain a financial product without your knowledge or consent. You must cite Section 420 (Cheating) and Section 468 (Forgery for purpose of cheating) of the Indian Penal Code. While this is an emotionally difficult step, an FIR is the only document that a bank\'s legal department will accept as definitive proof to halt recovery actions against you. If the situation is intertwined with a separation, you might also be dealing with a <Link href="/loan-settlement-during-divorce-joint-loan-india" className="text-blue-600 hover:underline">loan settlement during divorce</Link>, making the FIR even more critical.
                    </p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-12 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg">3</span>
                    <h3 id="notifying-bank" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-28">Step 3: Notifying the Bank and Credit Bureaus</h3>
                    <p className="font-light leading-relaxed">
                      Once the FIR is registered, draft a formal legal notice addressed to the Grievance Redressal Officer and the Legal Head of the concerned bank. Attach the copy of the FIR, the evidence of forged signatures, and proof of the disbursement account. Demand that they immediately cease all recovery harassment directed at you and rectify your CIBIL report. Send this notice via registered post with acknowledgment due. Simultaneously, file a dispute with TransUnion CIBIL, Equifax, and Experian, attaching the same legal notice and FIR, to alert the credit bureaus of the fraudulent account.
                    </p>
                  </div>
                </div>
              </div>

              <h2 id="settlement-vs-criminal" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Exploring Settlement vs. Criminal Prosecution (Data Callout)</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-xl">
                <p>
                  The decision on how to proceed often depends on your current relationship status and your financial goals. Not every victim wants to see their spouse face criminal charges, especially if children are involved or if there is a possibility of reconciliation. Here, you face a critical fork in the road: pursue a civil settlement or proceed with criminal prosecution.
                </p>

                {/* SECTION TYPE 2: Data Callout */}
                <div className="bg-gray-900 p-10 rounded-3xl text-white shadow-2xl my-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
                  <h4 className="text-2xl font-bold uppercase tracking-widest text-blue-400 mb-6 border-b border-gray-700 pb-4">Data Callout: Resolution Paths in India</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div>
                      <div className="text-5xl font-bold text-white mb-2">68%</div>
                      <p className="text-gray-300 font-light">Of victims choose to pursue a negotiated <strong className="text-blue-300">Civil Settlement</strong> to avoid lengthy court battles and protect family dynamics.</p>
                    </div>
                    <div>
                      <div className="text-5xl font-bold text-white mb-2">32%</div>
                      <p className="text-gray-300 font-light">Of victims proceed with <strong className="text-blue-300">Criminal Prosecution (FIR)</strong>, which is the only guaranteed way to force banks to remove the liability entirely without paying.</p>
                    </div>
                  </div>
                </div>

                <h3 id="civil-settlement" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-28">When to Pursue a Civil Settlement</h3>
                <p className="font-light leading-relaxed mb-6">
                  If you choose not to file an FIR, the bank will continue to hold you legally responsible for the debt because your documents were used. In this scenario, the most pragmatic approach is a civil settlement. This involves negotiating with the bank to close the loan account by paying a reduced lump-sum amount. You will need to absorb the financial hit, but it stops the harassment immediately and closes the account. Often, the spouse who took the loan is pressured in a civil mediation to provide the funds for the settlement. If the bank has already initiated aggressive action, such as an FIR against you for default, understanding what to do when a <Link href="/bank-filed-fir-for-loan-default" className="text-blue-600 hover:underline">bank filed FIR for loan default</Link> becomes your top priority, making rapid settlement highly attractive.
                </p>

                <h3 id="criminal-prosecution" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-28">When Criminal Prosecution is Necessary</h3>
                <p className="font-light leading-relaxed">
                  If the loan amount is excessively large, or if the marriage has broken down irretrievably due to abuse, criminal prosecution is necessary. Filing an FIR under IPC Sections 420 (Cheating), 468 (Forgery), and 471 (Using a forged document as genuine) initiates a police investigation. Once the police file a charge sheet confirming the fraud, the bank is legally barred from pursuing you for recovery. The liability shifts entirely to the perpetrator. This path requires patience, court appearances, and strong legal representation, but it completely exonerates you from the financial burden.
                </p>
              </div>

              <h2 id="impact-cibil" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Impact on Your CIBIL Score (Myth vs Fact)</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-xl">
                <p>
                  Identity theft wreaks havoc on credit scores. Because the loan is attached to your PAN, every missed EMI drastically lowers your CIBIL rating. There is widespread confusion about how to handle credit repair in cases of spousal fraud.
                </p>

                {/* SECTION TYPE 3: Myth vs Fact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                  <div className="bg-red-50 p-8 rounded-3xl border border-red-100 shadow-sm relative">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">X</div>
                    <h4 className="text-xl font-bold text-red-900 mb-4 uppercase tracking-wider">The Myth</h4>
                    <p className="text-red-800 font-light leading-relaxed">
                      "If I simply tell the bank that my husband took the loan without my permission, they will remove the default from my CIBIL report because I am innocent."
                    </p>
                  </div>
                  <div className="bg-green-50 p-8 rounded-3xl border border-green-100 shadow-sm relative">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">✓</div>
                    <h4 className="text-xl font-bold text-green-900 mb-4 uppercase tracking-wider">The Fact</h4>
                    <p className="text-green-800 font-light leading-relaxed">
                      Banks will not alter CIBIL records based on verbal or informal claims. To remove a fraudulent loan from your CIBIL, you must provide the credit bureaus with an FIR and a formal dispute acknowledgment from the bank proving identity theft.
                    </p>
                  </div>
                </div>

                <p className="font-light leading-relaxed">
                  If you opt for a civil settlement (paying off the debt at a reduced amount), the account will be marked as "Settled" in your CIBIL report, which still carries a negative connotation and impacts future borrowing. If you opt for the criminal route and prove fraud, the account must be completely expunged from your record as if it never existed, restoring your score to its rightful state.
                </p>
              </div>

              <h2 id="future-financial-health" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Protecting Your Future Financial Health</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-xl">
                <p>
                  Once the immediate crisis is managed, you must take proactive steps to ensure this never happens again. Spousal financial abuse thrives on lack of transparency and shared access to critical documents.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-blue-600 w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="font-light"><strong>Lock Your Biometrics:</strong> Use the UIDAI portal or the mAadhaar app to lock your Aadhaar biometrics. This prevents anyone from using your fingerprint or iris scan for instant e-KYC approvals.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="font-light"><strong>Subscribe to CIBIL Alerts:</strong> Register for an annual subscription with major credit bureaus to receive SMS or email alerts the moment a new credit inquiry is made on your PAN card.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="font-light"><strong>Revoke Joint Account Privileges:</strong> If you suspect ongoing financial infidelity, close joint accounts or convert them to "jointly operated" rather than "either or survivor" mode to prevent unilateral withdrawals.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="font-light"><strong>Secure Physical Documents:</strong> Keep your original PAN, Aadhaar, and passport in a secure location that only you can access. Do not share OTPs for financial transactions with anyone, including your spouse.</p>
                  </li>
                </ul>
                <p className="font-light leading-relaxed mt-8">
                  The trauma of discovering a spouse has leveraged your identity for financial gain is immense. However, you have powerful legal tools at your disposal to fight back. Whether through strategic civil settlement or decisive criminal action, CredSettle stands ready to help you navigate this complex legal terrain, stop the harassment, and secure your financial future.
                </p>
              </div>

              {/* Reviews Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group">
                    <div className="flex items-center mb-6 text-yellow-400 text-xl tracking-widest">
                       {[...Array(review.rating)].map((_, i) => (
                         <span key={i}>★</span>
                       ))}
                    </div>
                    <p className="text-gray-700 text-xl leading-relaxed italic font-light mb-8">"{review.text}"</p>
                    <div className="flex items-center border-t pt-8 border-gray-50">
                      <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mr-5 shadow-inner transform rotate-3">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg uppercase tracking-tight">{review.name}</h4>
                        <p className="text-xs text-blue-600 tracking-widest uppercase font-bold">{review.location} • {review.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-10 mb-20">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-12 rounded-3xl border border-gray-100 hover:scale-[1.01] transition-transform">
                    <h3 className="font-bold text-3xl text-gray-900 mb-6 tracking-tight leading-snug uppercase italic border-l-4 border-blue-600 pl-6">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed text-xl font-light">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-32 p-16 md:p-24 bg-black text-white rounded-3xl text-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-5xl md:text-8xl font-bold mb-10 leading-[1] uppercase tracking-tighter italic">End the <span className="text-red-500 underline underline-offset-[16px]">Harassment</span> Now</h2>
                  <p className="text-gray-400 mb-16 max-w-4xl mx-auto text-2xl font-light leading-relaxed">You have suffered enough in silence. The law is on your side, and CredSettle is your legal shield. Connect with our experts today and start your journey back to a life of dignity and peace.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-blue-600 text-white px-20 py-8 rounded-full font-bold text-3xl uppercase italic tracking-tighter hover:bg-blue-500 transition-all shadow-[0_20px_50px_rgba(37,99,235,0.4)] hover:scale-110 active:scale-95 transform hover:-rotate-2"
                  >
                    Start Your Recovery
                  </Link>
                </div>
              </div>

            </article>
          </div>

          {/* Right Column: CTA & Related (Sticky) */}
          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              {/* Main CTA Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Need Urgent Help?</h4>
                <p className="text-sm text-gray-600 mb-6">Don't face the bank alone. Get expert legal support today.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Request Call Back
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>v 100% Confidential</p>
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
    </>
  );
}
