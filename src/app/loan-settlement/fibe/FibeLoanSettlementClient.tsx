'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function FibeLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [isMobile, setIsMobile] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Check if mobile for specific behaviors
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer for Active Section
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
        rootMargin: '-100px 0px -35% 0px', // Adjust trigger point
        threshold: 0.1
      }
    );

    const headings = document.querySelectorAll('h2[id], h3[id]');
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
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

  const navLinks = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'understanding-fibe', label: 'About Fibe/EarlySalary' },
    { id: 'why-settle', label: 'Why Settle?' },
    { id: 'eligibility', label: 'Eligibility Criteria' },
    { id: 'process', label: 'Settlement Process' },
    { id: 'documents', label: 'Required Documents' },
    { id: 'consequences', label: 'Consequences' },
    { id: 'harassment', label: 'Stop Harassment' },
    { id: 'faqs', label: 'FAQs' },
  ];

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

  const faqList = [
    {
      question: "Can I settle my Fibe (EarlySalary) personal loan if I cannot pay the EMIs?",
      answer: "Yes, if you are facing genuine financial distress and your loan account has become a Non Performing Asset (NPA) due to non payment for over 90 days, you can approach Fibe for a loan settlement. This involves negotiating a one time payment that is lower than your total outstanding dues, effectively closing the account."
    },
    {
      question: "What is the new name of EarlySalary?",
      answer: "EarlySalary has rebranded itself as **'Fibe'**. It is the same company offering personal loans and salary advances, but with a new brand identity. All previous loan agreements with EarlySalary are now managed under the Fibe brand by their entity **Social Worth Technologies Pvt Ltd** or their NBFC partners."
    },
    {
      question: "How much discount can I expect in a Fibe loan settlement?",
      answer: "The settlement amount depends on various factors like the age of the default, your verified financial hardship, and your negotiation skills. Typically, borrowers can save anywhere from **30% to 50%** on the total outstanding amount. In exceptional cases of severe medical hardship or long term unemployment, the waiver can be higher."
    },
    {
      question: "Will settling my Fibe loan affect my CIBIL score?",
      answer: "Yes, opting for a loan settlement will negatively impact your credit score. The loan account will be marked as **'Settled'** in your CIR (Credit Information Report), which indicates that the full amount was not repaid. This can lower your score by 50 to 100 points and stay on your report for up to 7 years."
    },
    {
      question: "Does Fibe take legal action against defaulters?",
      answer: "As an NBFC, Fibe has the right to initiate legal proceedings. They may send legal notices under **Section 138 (Cheque Bounce)** if you have active NACH mandates that bounce, or initiate **Arbitration** proceedings. However, they usually prefer to resolve the matter amicably through settlement before spending resources on long court battles."
    },
    {
      question: "What should I do if I receive a Section 138 notice from Fibe?",
      answer: "A Section 138 notice (for cheque/NACH bounce) is a criminal offense notice and should not be ignored. You must respond to it legally within the stipulated time. Contact a legal expert or CredSettle immediately. In many cases, initiating a settlement discussion can put a stay on these proceedings as the lender is primarily interested in recovering money, not jailing borrowers."
    },
    {
      question: "How do I stop harassment from Fibe recovery agents?",
      answer: "Recovery agents are bound by **RBI guidelines** which prohibit harassment, abusive language, and calling at odd hours (before 8 AM or after 7 PM). If you are being harassed, you can file a complaint with Fibe’s grievance redressal officer (Level 1). Engaging a legal settlement firm like CredSettle can also help, as we take over the communication and ensure professional conduct."
    },
    {
      question: "What documents do I need for Fibe loan settlement?",
      answer: "You will primarily need your KYC documents (PAN, Aadhaar), loan account statements, loan agreement copy, and **proof of financial hardship**. Proof of hardship is critical and can include a termination letter from your job, medical records showing critical illness, or bank statements indicating a severe drop in income."
    },
    {
      question: "How long does the Fibe loan settlement process take?",
      answer: "The entire process, from the initial proposal to the final closure, typically takes between **2 to 5 weeks**. This timeline can vary based on how quickly the documents are submitted, the speed of the internal approvals at Fibe’s end, and the complexity of the negotiation."
    },
    {
      question: "Can I get a loan in the future after settling my Fibe loan?",
      answer: "It will be difficult to get an unsecured loan or credit card immediately after a settlement due to the negative 'Settled' status. However, you can rebuild your credit score over **18-24 months** by using secured credit products (like FD backed credit cards) responsibly. Once your score improves above 750, you will be eligible for loans again."
    },
    {
      question: "Is CredSettle authorized to negotiate with Fibe on my behalf?",
      answer: "Yes, once you sign a **Letter of Authorization (LOA)** with us, CredSettle is legally empowered to communicate and negotiate with lenders on your behalf. We operate within the legal framework of the Payment and Settlement Systems Act and RBI guidelines to protect your rights."
    },
    {
      question: "What happens if I ignore the legal notices from Fibe?",
      answer: "Ignoring legal notices can lead to an ex-parte order (court order passed in your absence). This can result in attachment of bank accounts or salary. It is always better to engage, respond, and seek a settlement rather than going silent."
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
                  <Link href="/loan-settlement" className="ml-1 font-medium text-gray-700 hover:text-blue-600 md:ml-2">
                    loan settlement
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    Fibe (EarlySalary)
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
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Introduction to Fibe (EarlySalary) Loan Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                In the rapidly evolving landscape of Indian fintech, immediate access to credit has become easier than ever. **Fibe**, the rebranded identity of **EarlySalary**, stands at the forefront of this digital lending revolution. Marketed to young professionals as a quick solution for month end cash crunches or lifestyle upgrades, these instant loans are disbursed within minutes. However, the convenience of a "click and get" loan often masks the potential for a severe financial spiral. For many borrowers, what starts as a small salary advance can quickly balloon into an unmanageable debt burden due to high interest rates, processing fees, and the compounding nature of late payment penalties.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you are reading this, chances are you or someone you know is struggling to keep up with Fibe loan repayments. You might be facing a job loss, a medical emergency, or simply a situation where your outgoing EMIs exceed your income. The result is often a barrage of calls from recovery agents, legal notices sent to your home and office, and sleepless nights worrying about the future. It is critical to understand that you are not alone in this battle, and more importantly, you are not without rights.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                **CredSettle** specializes in providing legal and financial relief to borrowers trapped in this cycle. We facilitate **Fibe Loan Settlement**, a legitimate banking process that allows you to close your loan account by paying a negotiated, reduced amount (One Time Settlement or OTS). We negotiate directly with Fibe and its parent entity, **Social Worth Technologies Pvt Ltd**, to waive off the mounting interest and penalties, allowing you to settle the principal component according to your current affordability. This comprehensive, 2500+ word guide is definitive resource for understanding every aspect of the Fibe loan settlement process in 2026.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">The Reality of Settlement</h4>
                <p className="text-blue-800 m-0">
                  Loan settlement is not a loophole or an illegal escape. It is a formal provision within the banking system, regulated by RBI guidelines, designed to resolve Non Performing Assets (NPAs). It is a practical solution for both the lender (who recovers a portion of the bad debt) and the borrower (who gets a fresh start).
                </p>
              </div>

              <h2 id="understanding-fibe" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">De-coding Fibe: The Lender Profile</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                To effectively negotiate a settlement, you must first understand who you are dealing with. Fibe is not a bank in the traditional sense; it is a digital lending platform. The core company behind Fibe is **Social Worth Technologies Private Limited**. When you take a loan via the Fibe app, the money is often lent by their in-house NBFC arm, **Earlysalary Services Private Limited** (formerly Ashish Securities Pvt Ltd), or through their partner NBFCs such as Northern Arc Capital, InCred Financial Services, HDB Financial Services, and others.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Why Does This Matter?</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Understanding the lender structure is vital because your loan agreement, and subsequently your settlement letter, will be issued by the specific NBFC entity, not just the "Fibe" app.
              </p>
              <ul className="list-disc pl-6 space-y-4 mb-8 text-gray-700">
                <li><strong>Algorithmic Collection:</strong> Unlike traditional bank branch managers who might know you personally, Fibe uses sophisticated AI to assess your risk profile. Their collection process is highly automated. You might receive automated calls, WhatsApp reminders, and emails triggered by specific days of delay.</li>
                <li><strong>Aggressive Recovery:</strong> Fintech lenders often operate on thinner margins and higher volumes than traditional banks. This can sometimes translate into more aggressive recovery tactics to prevent defaults from piling up. They are quick to mark accounts as NPA and initiate legal warnings.</li>
                <li><strong>Digital Trail:</strong> Since the entire process is digital, every interaction is recorded. This works in your favor if you need to prove your financial hardship or document harassment, but it also means they have a clear record of your digital consent to their terms.</li>
              </ul>

              <h2 id="why-settle" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Debt Trap: When to Choose Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Settlement is a major financial decision with long term implications for your credit score. It should not be your first choice if you have the means to pay. However, financial life is unpredictable. You should seriously consider Fibe loan settlement if you find yourself in the following "Debt Trap" scenarios:
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">1. The Rollover Trap</h4>
                  <p className="text-gray-600">You are taking new loans from other apps just to pay the EMI of your Fibe loan. This is a classic sign of insolvency. You are digging a deeper hole.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">2. EMI Exceeding Income</h4>
                  <p className="text-gray-600">Due to a salary cut or job loss, your total EMI obligations are now more than 50-60% of your current in-hand income, leaving you with nothing for basic survival.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">3. Medical Catastrophe</h4>
                  <p className="text-gray-600">A sudden health crisis in the family has drained your savings, making debt repayment impossible for the foreseeable future.</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                In these situations, <strong>Settlement is the strategic exit route.</strong> It stops the bleeding. It puts an end to the accumulation of penal interest which can sometimes double the loan amount in a year. It allows you to close the chapter and focus on rebuilding your livelihood.
              </p>

              <h2 id="eligibility" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Detailed Eligibility Criteria</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Fibe and Social Worth Technologies have specific internal policies regarding who qualifies for an OTS (One Time Settlement). It is not an "application" you fill out; it is a status you must qualify for based on your account health and financial inputs.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. The 90-Day NPA Rule</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Banks generally entertain settlement offers only after the loan has been classified as a **Non Performing Asset (NPA)**. This typically happens when you have not paid your EMIs for **90 consecutive days**. Before this period, you are technically in the "overdue" category, and their primary focus will be on forcing you to regularize the account. Settlement talks usually begin effectively after this 3-month window.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Demonstrable Financial Hardship</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                You cannot simply choose not to pay. You must prove *inability* to pay. Fibe’s settlement officers will ask for evidence. This could be:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>**Termination Letter / Resignation Acceptance:** Proving loss of employment.</li>
                <li>**Bank Statements:** Showing a sudden drop in credit entries or salary status.</li>
                <li>**Medical Reports:** Documenting an illness that prevents you from working.</li>
                <li>**Business Closure Documents:** If you were self employed and your venture failed.</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Absence of Willful Default</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                "Willful Default" is a specific banking term. It applies if a borrower has the funds (visible in linked bank accounts) but refuses to pay, or if the funds borrowed were siphoned off for illegal purposes. Willful defaulters are rarely offered settlement; they face criminal proceedings. Ensure your intent to pay (but inability to do so) is clear in all communications.
              </p>

              <h2 id="process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The CredSettle Settlement Process: A Deep Dive</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Navigating the settlement process requires patience, legal knowledge, and negotiation skills. At CredSettle, we follow a rigorous 5-step protocol to ensure the best outcome for our clients.
              </p>

              <div className="relative border-l-4 border-blue-600 pl-8 space-y-12 my-12">
                
                <div className="relative">
                  <span className="absolute -left-12 top-0 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full text-white font-bold text-sm">1</span>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Step 1: Enrollment & Notices Check</h4>
                  <p className="text-gray-600">
                    The moment you enroll with CredSettle, we conduct a forensic audit of your loan. We verify the current outstanding, the principal amount disbursed vs. amount repaid, and check for any **Legal Notices** (Section 138, Arbitration, or Conciliation notices) you may have received from Social Worth Technologies. Responding to these notices legally is our first priority to prevent court warrants.
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-12 top-0 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full text-white font-bold text-sm">2</span>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Step 2: Shielding from Harassment</h4>
                  <p className="text-gray-600">
                    We formally notify Fibe that you have appointed CredSettle as your legal representative. We invoke RBI circulars mandating that lenders must deal with the appointed representatives. This creates a buffer. All calls from recovery agents are redirected to our legal team. If agents violate the code of conduct (abusive language, calling parents/colleagues), we file formal grievances with the RBI Ombudsman, putting pressure on the lender to back down.
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-12 top-0 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full text-white font-bold text-sm">3</span>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Step 3: The Negotiation Phase</h4>
                  <p className="text-gray-600">
                    This is where our expertise shines. Fibe will initially demand the full amount. We counter with a proposal based on your actual affordability-often starting at 20-30% of the principal. It is a back and forth process. We use your hardship documents as leverage. We highlight the futility of legal action against an insolvent borrower. Our goal is to waive off 100% of the interest and penal charges, and then negotiate a discount on the principal itself.
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-12 top-0 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full text-white font-bold text-sm">4</span>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Step 4: The Settlement Letter</h4>
                  <p className="text-gray-600">
                    **Crucial Warning:** Never pay a single rupee based on a WhatsApp message or a phone call promise. We ensure Fibe issues a formal **"Settlement Offer Letter"** on their official letterhead (or official email domain). We vet this letter to ensure it clearly mentions:
                  </p>
                  <ul className="list-disc pl-4 mt-2 text-sm text-gray-600">
                    <li>The exact settlement amount.</li>
                    <li>The payment due date.</li>
                    <li>A clause stating that upon this payment, the entire loan liability is extinguished.</li>
                    <li>The reporting status to credit bureaus.</li>
                  </ul>
                </div>

                <div className="relative">
                  <span className="absolute -left-12 top-0 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full text-white font-bold text-sm">5</span>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Step 5: Payment & Closure</h4>
                  <p className="text-gray-600">
                    You make the payment directly to Fibe’s official bank account (never to an agent’s personal UPI). Once paid, we chase the team for the **"No Dues Certificate" (NDC)** or **"NOC"**. This document is your shield against any future claim. We also guide you to check your CIBIL report after 45-60 days to ensure the account status is updated from "Overdue" to "Settled".
                  </p>
                </div>

              </div>

              <h2 id="documents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Required Documents for Fibe Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Documentation is your ammunition in a settlement negotiation. The more organized you are, the faster the process. Keep digital copies of the following ready:
              </p>
              <div className="bg-white border border-gray-200 rounded-xl p-8 mb-10 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                  <div>
                    <h5 className="font-bold text-gray-900 mb-2 border-b pb-2">Identification</h5>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>* E-Aadhaar Card (Full Copy)</li>
                      <li>* PAN Card</li>
                      <li>* Current Address Proof</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-2 border-b pb-2">Loan Details</h5>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>* Loan Account Number (found in Fibe app)</li>
                      <li>* Loan Aggrement Copy (sent to email)</li>
                      <li>* Recent Statement of Account (SOA)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-2 border-b pb-2">Hardship Proof</h5>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>* Termination/Layoff Letter</li>
                      <li>* Medical Records/Bills</li>
                      <li>* Salary Slips showing pay cuts</li>
                      <li>* Court orders (if any divorce/disputes)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-2 border-b pb-2">Communication</h5>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>* Screenshots of threatening messages</li>
                      <li>* Copies of Legal Notices received</li>
                      <li>* Call logs of harassment</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 id="consequences" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Life After Settlement: The Pros and Cons</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                It is important to enter a settlement with your eyes open. It is a trade off: you trade detailed credit history for immediate financial freedom.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">The Impact on CIBIL (Credit Score)</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                When you pay off a loan normally, the account is marked as **"Closed"**. When you settle, it is marked as **"Settled"**. This is a negative flag. It lowers your CIBIL score (often by 50-100 points). For the next 2-3 years, standard banks (HDFC, SBI, ICICI) will reject your applications for unsecured personal loans or premium credit cards.
              </p>

              <div className="bg-green-50 p-6 rounded-xl border border-green-200 mb-8">
                <h4 className="font-bold text-green-900 mb-2">The Silver Lining</h4>
                <p className="text-green-800 m-0">
                  While "Settled" is bad, **"Written Off"** is worse. If you ignore the debt, it eventually becomes a "Write Off"-meaning the lender gave up. This destroys your score for much longer. "Settled" shows you were responsible enough to negotiate and pay something. Also, you **CAN** rebuild your score. By taking a small Secured Credit Card (against an FD) or a Gold Loan and paying it back on time, you can push your score back above 750 within 18-24 months. CredSettle offers a dedicated **Credit Builder Program** to help you on this journey post settlement.
                </p>
              </div>

              <h2 id="harassment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Stopping Harassment: Your Legal Shield</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Recovery harassment is illegal. The Reserve Bank of India (RBI) has issued strict guidelines (August 2022 Circular) regarding the conduct of recovery agents. As a borrower, you have fundamental rights.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">RBI Circular August 2022: Your Protection</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Reserve Bank of India issued a notification (<strong>RBI/2022-23/92</strong>) specifically addressing the "Outsourcing of Financial Services - Responsibilities of Regulated Entities". This is the most powerful tool in a borrower’s arsenal. It explicitly states that:
              </p>
              <ul className="list-disc pl-6 space-y-4 mb-8 text-gray-700">
                <li><strong>Lender Liability:</strong> Fibe (Social Worth Technologies) and its NBFC partners are fully responsible for the actions of their recovery agents. They cannot say "the agency did it, we didn’t know."</li>
                <li><strong>Training:</strong> Agents must be trained to handle customers with sensitivity. Intimidation is a failure of this mandate.</li>
                <li><strong>Recording:</strong> Lenders are required to record calls made by recovery agents. You have the right to ask for these recordings if a dispute arises.</li>
              </ul>

              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 mb-10">
                <h4 className="font-bold text-red-900 mb-2">Warning Signs of Illegal Recovery</h4>
                <p className="text-red-800 m-0">
                  If an agent asks you to transfer money to a personal UPI ID to "hold your case" or "stop the legal notice," **DO NOT PAY**. This is a common fraud. Only pay to the official bank account mentioned in the Settlement Letter.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">What Agents CANNOT Do:</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li><strong>Abusive Language:</strong> Profanity, shouting, or insulting your character is strictly prohibited.</li>
                <li><strong>Public Shaming:</strong> They cannot call your relatives, friends, or office colleagues to demand payment or shame you. This is a violation of data privacy.</li>
                <li><strong>Odd Hours:</strong> Calls and visits are only permitted between **08:00 AM and 07:00 PM**. Calling late at night is a violation.</li>
                <li><strong>Physical Threats:</strong> Any threat of physical harm or intimidation is a criminal offense under the Indian Penal Code.</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">How to File a Complaint:</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                If Fibe agents cross the line, you must document it. Record calls and save screenshots.
              </p>
              <ol className="list-decimal pl-6 space-y-4 mb-10 text-gray-700">
                <li>**Level 1 (Fibe Internal):** Email your complaint with evidence to their grievance officer at **care@fibe.in** or call **020-67639797**.</li>
                <li>**Level 2 (Nodal Officer):** If unresolved, escalate to the Grievance Redressal Officer of Social Worth Technologies.</li>
                <li>**Level 3 (RBI Ombudsman):** If the harassment continues, file a complaint on the **RBI CMS Portal (cms.rbi.org.in)**. This is a powerful step that forces lenders to act.</li>
              </ol>

              {/* Review Snippets */}
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center">Real Stories, Real Relief</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">*****</div>
                      <div className="text-sm opacity-80">Suhail K., Bengaluru</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"I lost my job in the tech layoff and had a 4 Lakh loan with Fibe. The agents were calling my HR. I was suicidal. I contacted CredSettle. They immediately stopped the HR calls. They negotiated for 2 months and closed the loan for 1.4 Lakhs. I cannot thank them enough."</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">*****</div>
                      <div className="text-sm opacity-80">Anjali D., Pune</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"I was skeptical about settlement companies. But CredSettle was transparent. They told me honestly about the CIBIL impact. But the peace of mind they gave me from the daily 50+ calls was worth everything. Professional and legal approach."</p>
                  </div>
                </div>
              </div>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqList.map((faq, index) => (
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
              
              {/* Main CTA Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Trapped in Debt?</h4>
                <p className="text-sm text-gray-600 mb-6">Stop Fibe harassment today. Get expert legal help.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Request Call Back
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>v 100% Confidential</p>
                  <p className="mt-1">v Legal Protection</p>
                  <p className="mt-1">v Save up to 50%</p>
                </div>
              </div>

              {/* Related Pages Info */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Info</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/services/personal-loan-settlement" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Personal Loan Settle
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/hdfc" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      HDFC Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/anti-harassment" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Stop Harassment
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
