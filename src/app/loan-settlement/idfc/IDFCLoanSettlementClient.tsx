'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function IDFCLoanSettlementClient() {
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
    { id: 'introduction', label: 'IDFC Settlement Guide' },
    { id: 'npa-norms', label: 'NPA Classification' },
    { id: 'settlement-letter', label: 'Settlement Letter' },
    { id: 'credit-card', label: 'Credit Card OTS' },
    { id: 'eligibility', label: 'Eligibility Check' },
    { id: 'process-timeline', label: 'Process & Timeline' },
    { id: 'documents', label: 'Required Docs' },
    { id: 'faqs', label: 'IDFC FAQs' },
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
        question: "What is the SMA classification before NPA in IDFC First Bank?",
        answer: "Before your loan is marked as NPA (Non-Performing Asset), IDFC First Bank classifies it under Special Mention Accounts (SMA). SMA-0 is for 1-30 days overdue, SMA-1 for 31-60 days, and SMA-2 for 61-90 days. Settlement discussions are most effective when the account crosses the SMA-2 stage and nears the NPA status."
    },
    {
        question: "Does IDFC First Bank offer specific settlements for the 'Millennia' Credit Card?",
        answer: "Yes, the IDFC First Millennia Credit Card, being a popular unsecured product, is eligible for One Time Settlement (OTS). Since card dues attract high finance charges (often 40%+ annually), the bank may agree to a settlement of 30-50% of the principal outstanding if genuine hardship is proven."
    },
    {
        question: "What does 'Without Prejudice' mean in my settlement letter?",
        answer: "You will often see the term 'Without Prejudice' in IDFC settlement letters. This legal phrase means that the offer is made for settlement purposes only and cannot be used against the bank in court as an admission of liability or waiver of their original rights if the settlement fails."
    },
    {
        question: "Can I settle my IDFC loan online through a portal?",
        answer: "IDFC First Bank generally requires a formal written proposal submitted to their collections department or via email. While they have a digital-first approach, loan settlements are sensitive legal agreements that usually involve manual verification of hardship documents rather than an automated online click-to-settle option."
    },
    {
        question: "Will I get a 'No Dues Certificate' immediately after payment?",
        answer: "Typically, IDFC First Bank processes the 'No Dues Certificate' (NDC) or Closure Letter within 15-21 working days after the settlement amount is fully realized in their system. At CredSettle, we track this timeline to ensure you receive the hard copy."
    },
    {
        question: "How does the 'Settled' status affect my relationship with IDFC?",
        answer: "Once an account is 'Settled', IDFC First Bank may internally blacklist your profile for future unsecured lending (credit cards or personal loans). However, this does not prevent you from banking with them for savings or fixed deposits."
    },
    {
        question: "Can IDFC initiate arbitration during settlement talks?",
        answer: "Yes, arbitration proceedings are standard for banks to secure a legal order for recovery. However, engaging a professional settlement firm like CredSettle often puts a hold on these aggressive legal steps as we open a formal channel of negotiation with the bank’s legal officers."
    },
    {
        question: "Is the settlement amount payable in installments?",
        answer: "While a One Time Settlement (OTS) usually implies a single bullet payment, IDFC First Bank may legally allow splitting the settlement amount into 2-3 monthly installments in exceptional cases, though this might slightly reduce the discount percentage offered."
    },
    {
        question: "What happens to the 'Write-off' amount in the bank’s books?",
        answer: "The difference between your total outstanding and the settlement amount is treated as a 'loss' or 'write-off' in the bank’s P&L statement. This is why they require strong proof of hardship-to justify this financial loss to their auditors."
    },
    {
        question: "Does CredSettle handle the IDFC 'Consumer Durable' loan settlements?",
        answer: "Yes, we handle settlements for consumer durable loans (loans for phones, electronics) as well. Though the amounts are smaller, the harassment can be just as stressful, and we ensure a legal closure."
    }
  ];

  return (
    <>
      {/* Breadcrumb Section */}
      <div className="bg-white border-b border-gray-200 hidden md:block">
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
                    Loan Settlement
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    IDFC First Bank
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content Layout - 3 Column */}
      <div className="max-w-[1440px] mx-auto px-4 py-8 md:py-12">
        
        {/* Mobile: Sticky Horizontal Scroll Table of Contents */}
        <div className="lg:hidden sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm -mx-4 px-4 py-3 mb-8 flex items-center overflow-x-auto no-scrollbar" ref={mobileNavRef}>
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
                <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Topic Guide</h3>
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
            <article className="prose prose-lg max-w-none bg-white p-6 md:p-12 rounded-3xl shadow-sm border border-gray-100 font-sans">
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Strategic Guide to IDFC First Bank Loan Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Facing repayment challenges with IDFC First Bank can be overwhelming. As one of India&apos;s most tech-savvy and rapidly growing banks, IDFC First Bank has stringent debt recovery protocols. However, they also adhere strictly to the **RBI&apos;s Fair Practices Code**, which provides a legitimate exit route for honest borrowers facing genuine financial crises: the **One Time Settlement (OTS)**.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Unlike general debt advice, this guide focuses specifically on the nuances of settling with IDFC First Bank. Whether you hold a **FIRST Millennia Credit Card**, a **FIRST Wealth Card**, or a high-value personal loan, understanding the bank&apos;s specific *NPA classification timeline* and *settlement letter formats* is the difference between a rejected proposal and a debt-free life. CredSettle acts as your legal shield and negotiator in this high-stakes process.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">The CredSettle Advantage</h4>
                <p className="text-blue-800 m-0">
                  Did you know IDFC settlements often involve a &quot;Without Prejudice&quot; clause? We ensure you understand every legal term before you sign, protecting you from future liability.
                </p>
              </div>

              <h2 id="npa-norms" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Understanding NPA Classification: The Driver of Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                To negotiate effectively, you must understand *when* IDFC First Bank considers your account a &quot;Non-Performing Asset&quot; (NPA). The bank tracks your delinquency in distinct stages called **Special Mention Accounts (SMA)**. Settlement approvals vary significantly based on which stage you are in.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 text-center">
                  <h5 className="font-bold text-yellow-800 text-lg">SMA-0</h5>
                  <p className="text-sm text-yellow-700 font-medium">1-30 Days Overdue</p>
                  <p className="text-xs text-gray-500 mt-2">Early warning. Hard to get settlement here.</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 text-center">
                  <h5 className="font-bold text-orange-800 text-lg">SMA-1</h5>
                  <p className="text-sm text-orange-700 font-medium">31-60 Days Overdue</p>
                  <p className="text-xs text-gray-500 mt-2">Collections intensify. Legal notices may start.</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-100 text-center">
                  <h5 className="font-bold text-red-800 text-lg">SMA-2 / NPA</h5>
                  <p className="text-sm text-red-700 font-medium">61-90+ Days Overdue</p>
                  <p className="text-xs text-gray-500 mt-2">Prime time for OTS negotiation.</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-8">
                **Crucial Insight:** Once your account crosses the 90-day mark and is tagged as NPA, IDFC First Bank is required to set aside provisions for this loss. At this stage, they are more motivated to accept a settlement to clean their balance sheet. This is the strategic window where CredSettle intervenes for maximum waivers.
              </p>

              <h2 id="settlement-letter" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Decoding the IDFC Settlement Letter</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                An IDFC settlement letter is a legally binding document. It is not just a receipt; it is a new contract. Never transfer a single rupee until you have received this letter on the bank&apos;s official letterhead (or secure email domain). Key clauses to look for include:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-10 text-gray-700">
                <li><strong>Settlement Amount & Deadline:</strong> The exact figure (e.g., ₹2,50,000) and the cut-off date. Even a one-day delay can void the deal.</li>
                <li><strong>&quot;Full and Final&quot; Clause:</strong> The letter must explicitly state that upon realization of this amount, the entire liability is extinguished.</li>
                <li><strong>Revocation Rights:</strong> IDFC typically reserves the right to revoke the offer if they find any &quot;material misrepresentation&quot; in your hardship details.</li>
                <li><strong>Credit Bureau Reporting:</strong> A transparent clause stating the account will be reported as &quot;Settled&quot; or &quot;Post Write-off Settled&quot;.</li>
              </ul>

              <h2 id="credit-card" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">IDFC Credit Card OTS Specifics</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Settling credit cards like the **IDFC First Millennia**, **Classic**, or **Select** differs from loan settlements. Credit card debt is comprised heavily of non-principal components-interest, late fees, and over-limit charges.
              </p>
              <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-50 p-6 rounded-2xl mb-10 border border-gray-200">
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Why Card Settlements Offer Higher Waivers</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Since a large portion of your credit card outstanding is often &quot;inflated&quot; by 40-42% annualized interest, IDFC First Bank has more flexibility to waive these components. It is not uncommon for us to negotiate waivers of up to 70-80% on the *total outstanding* (which includes interest), effectively bringing the payment down to near-principal levels.
                  </p>
                </div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl">💳</div>
              </div>

              <h2 id="eligibility" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Detailed Eligibility Checklist</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                IDFC Bank uses a distinct risk-assessment matrix. You are likely to qualify for an OTS if you meet these specific criteria:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Unsecured Nature
                  </h4>
                  <p className="text-gray-600 text-sm">Personal Loans, Jumbo Loans (Loan on Card), and Credit Card balances. Secured loans (Home/LAP) are rarely eligible.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Source of Hardship
                  </h4>
                  <p className="text-gray-600 text-sm">Documented events like job loss (pink slip), business closure (GST surrender), or medical emergencies (hospital bills).</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Asset Tracing
                  </h4>
                  <p className="text-gray-600 text-sm">The bank checks if you have other substantial relationships (FDs, Savings) with them. Funds in these can be lien-marked.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Wilful Default Clearance
                  </h4>
                  <p className="text-gray-600 text-sm">You must not be categorized as a wilful defaulter-someone who *can* pay but *won&apos;t*.</p>
                </div>
              </div>

              <h2 id="process-timeline" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Workflow: From Defaults to Freedom</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The settlement process is a strategic workflow. Proceeding without a plan can lead to rejected proposals. Here is our proven roadmap for IDFC settlements:
              </p>

              <div className="relative border-l-2 border-gray-200 ml-4 space-y-10 mb-12">
                <div className="relative pl-8">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></span>
                  <h4 className="font-bold text-gray-900 text-lg">Phase 1: Shielding & Analysis (Week 1)</h4>
                  <p className="text-gray-600 mt-2">We analyze your loan agreements and current SMA status. We take over communication, directing collection agents to speak with our legal team, instantly reducing your mental stress.</p>
                </div>
                <div className="relative pl-8">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></span>
                  <h4 className="font-bold text-gray-900 text-lg">Phase 2: The Proposal (Week 2-3)</h4>
                  <p className="text-gray-600 mt-2">We draft a hardship letter supported by evidence. We submit a counter-offer to the bank&apos;s initial demand, often starting at 25-30% of the principal to leave room for negotiation.</p>
                </div>
                <div className="relative pl-8">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></span>
                  <h4 className="font-bold text-gray-900 text-lg">Phase 3: The Negotiation Table (Week 4)</h4>
                  <p className="text-gray-600 mt-2">This is where experience counts. We negotiate with IDFC&apos;s regional collection managers, pushing for maximum waivers on interest and penalties, leveraging regulatory guidelines.</p>
                </div>
                <div className="relative pl-8">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-4 border-white shadow-sm"></span>
                  <h4 className="font-bold text-gray-900 text-lg">Phase 4: Closure (Week 5-6)</h4>
                  <p className="text-gray-600 mt-2">Payment is made *only* after verifying the Settlement Letter. We then follow up rigorously until the No Dues Certificate is issued and your CIBIL is updated.</p>
                </div>
              </div>

              <h2 id="documents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Document Repository</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                To process your request, IDFC&apos;s backend team needs to verify &quot;inability to pay&quot;. Keep these ready:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-10 text-gray-700">
                <li><strong>KYC:</strong> Self-attested copy of PAN and Aadhar.</li>
                <li><strong>Liability Statement:</strong> Current loan schedule or credit card statement highlighting the overdue amount.</li>
                <li><strong>Hardship Evidence:</strong> 
                  <ul className="list-circle pl-6 mt-2 text-sm text-gray-600 space-y-1">
                    <li>Termination letter / Resignation acceptance.</li>
                    <li>Medical discharge summary / Bills.</li>
                    <li>Business closure proof / 6-months bank statement showing revenue drop.</li>
                  </ul>
                </li>
              </ul>

              <h2 id="why-credsettle" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The CredSettle Assurance</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Why choosing CredSettle for your IDFC case is a smart financial move:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="p-5 bg-white border border-blue-100 rounded-xl hover:bg-blue-50 transition-colors">
                  <h5 className="font-bold text-gray-900 mb-2">Anti-Harassment Shield</h5>
                  <p className="text-sm text-gray-600">We enforce RBI&apos;s harassment laws. No more threatening calls to your relatives or office.</p>
                </div>
                <div className="p-5 bg-white border border-blue-100 rounded-xl hover:bg-blue-50 transition-colors">
                  <h5 className="font-bold text-gray-900 mb-2">Legal Verification</h5>
                  <p className="text-sm text-gray-600">Our lawyers vet every document IDFC sends, ensuring you are not signing a trap.</p>
                </div>
                <div className="p-5 bg-white border border-blue-100 rounded-xl hover:bg-blue-50 transition-colors">
                  <h5 className="font-bold text-gray-900 mb-2">Data-Driven Negotiation</h5>
                  <p className="text-sm text-gray-600">We use data from thousands of past settlements to know exactly how low IDFC can go.</p>
                </div>
                <div className="p-5 bg-white border border-blue-100 rounded-xl hover:bg-blue-50 transition-colors">
                  <h5 className="font-bold text-gray-900 mb-2">Success-Based Fees</h5>
                  <p className="text-sm text-gray-600">You pay our success fee only when the settlement letter is in your hand.</p>
                </div>
              </div>

              {/* Review Snippets */}
              <div className="bg-gradient-to-br from-[#101010] to-[#2c3e50] rounded-2xl p-8 text-white mb-12 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-center border-b border-gray-600 pb-4">Real IDFC Settlement Stories</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
                    <div className="flex items-center mb-4 gap-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">AK</div>
                      <div>
                        <div className="font-bold">Amit K., Bangalore</div>
                        <div className="text-xs text-blue-200">IDFC Personal Loan</div>
                      </div>
                    </div>
                    <p className="italic text-gray-300 text-sm leading-relaxed">&quot;I had an 8 Lakhs personal loan. After layoffs, I couldn&apos;t pay. CredSettle handled everything. They got it down to 3.5 Lakhs. The best part was I didn&apos;t have to talk to a single recovery agent.&quot;</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
                    <div className="flex items-center mb-4 gap-3">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center font-bold">SR</div>
                      <div>
                        <div className="font-bold">Sneha R., Pune</div>
                        <div className="text-xs text-purple-200">Millennia Credit Card</div>
                      </div>
                    </div>
                    <p className="italic text-gray-300 text-sm leading-relaxed">&quot;My card bill was 2.1 Lakhs with all the late fees. CredSettle stepped in and closed it for just 75,000. Professional and legally sound advice.&quot;</p>
                  </div>
                </div>
              </div>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Expert FAQs on IDFC First Settlement</h2>
              <div className="space-y-4">
                {faqList.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-4 rounded-lg">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>

            </article>
          </div>

          {/* Right Column: CTA & Related (Sticky) */}
          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              {/* Main CTA Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">Hounded by Agents?</h4>
                <p className="text-sm text-gray-600 mb-6">Stop the calls today. Get legal protection now.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md transform group-hover:-translate-y-1"
                >
                  Get Help Now
                </Link>
                <div className="mt-4 text-xs text-gray-500 space-y-1">
                  <p className="flex items-center justify-center gap-1"><svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg> Confidential</p>
                  <p className="flex items-center justify-center gap-1"><svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg> RBI Compliant</p>
                  <p className="flex items-center justify-center gap-1"><svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg> 4.9/5 Rated</p>
                </div>
              </div>

              {/* Related Pages Info */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Resources</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/services/credit-card-settlement" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-600"></span>
                      Credit Card Debt
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/personal-loan-settlement" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-600"></span>
                      Personal Loans
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/hdfc" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-600"></span>
                      HDFC Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/anti-harassment" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-600"></span>
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
