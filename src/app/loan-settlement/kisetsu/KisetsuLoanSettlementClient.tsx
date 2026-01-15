'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function KisetsuLoanSettlementClient() {
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
    { id: 'understanding-ots', label: 'Understanding OTS' },
    { id: 'eligibility-criteria', label: 'Eligibility' },
    { id: 'settlement-process', label: 'Process Guide' },
    { id: 'collection-tactics', label: 'Collection Tactics' },
    { id: 'legal-implications', label: 'Legal Implications' },
    { id: 'documentation', label: 'Documents Needed' },
    { id: 'credit-impact', label: 'CIBIL Impact' },
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
      question: "What is Kisetsu Saison Finance Settlement?",
      answer: "Kisetsu Saison Finance settlement, or OTS (One Time Settlement), is a mutual agreement where you pay a reduced lump sum amount to close your loan account effectively. This option is typically available for borrowers who are unable to repay their full dues because of genuine financial hardship."
    },
    {
      question: "Will settling my loan affect my CIBIL score?",
      answer: "Yes, opting for a settlement will negatively impact your credit score. Your account will be marked as 'Settled' rather than 'Closed', which indicates to future lenders that the full amount was not repaid. However, this is often a necessary step to become debt-free and stop mounting interest."
    },
    {
      question: "Can I settle my loan if legal action has already started?",
      answer: "Yes, settlement is possible even during legal proceedings. In fact, many cases under Section 138 or arbitration are resolved through settlement agreements. It is advisable to have legal representation to ensure the terms are favorable and the legal cases are withdrawn concurrently."
    },
    {
      question: "How much discount can I expect on my outstanding dues?",
      answer: "The discount varies based on several factors including the age of the default, your financial situation, and the bank's policies. Typically, waivers range from 30% to 50% or more on the total outstanding, primarily targeting the removal of penal interest and other charges."
    },
    {
      question: "How long does the settlement process take?",
      answer: "The entire process, from initial analysis to receiving the settlement letter, usually takes between 2 to 4 weeks. This timeline can vary depending on the complexity of the case and the speed of negotiations."
    },
    {
      question: "What documents do I need for settlement?",
      answer: "You will primarily need your KYC documents, recent loan statements, and proof of financial hardship (like a termination letter, medical records, or bank statements showing low funds). These help in building a strong case for a waiver."
    },
    {
      question: "Are there any hidden costs in hiring a settlement expert?",
      answer: "Transparent firms like CredSettle have a clear fee structure usually based on success or a percentage of savings. Always clarify the fees upfront. Direct dealing with the bank has no 'fee' but often results in a higher settlement amount due to lack of negotiation leverage."
    },
    {
      question: "What is a 'No Dues Certificate'?",
      answer: "A 'No Dues Certificate' (NDC) is a formal document issued by the lender after you have paid the agreed settlement amount. It serves as proof that the loan is fully closed and the lender has no further claims against you. Never consider a settlement complete without this document."
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
                    Kisetsu Saison Finance
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
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Navigating Kisetsu Saison and Privo Loan Settlement</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Are you feeling the overwhelming pressure of unpaid dues with <strong>Kisetsu Saison Finance (India) Pvt. Ltd.</strong>, also widely known as <strong>Credit Saison India</strong>? Or are you struggling with a loan from their popular instant loan app, <strong>Privo</strong>? You are not alone. In the volatile landscape of modern economics, job insecurities, medical emergencies, or unforeseen business losses can derail even the most disciplined financial plans. Suddenly, the phone starts ringing incessantly with demands for payment, turning your daily life into a source of constant stress.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Whether it is a <strong>Privo app loan</strong> or a direct business loan from Credit Saison, being in debt is a civil matter, not a criminal one. You have rights, and there are structured, legal pathways to resolve this situation. One effective route is <strong>Loan Settlement</strong>, often referred to as <strong>One Time Settlement (OTS)</strong>. This process is a legitimate way to exit a debt trap when you genuinely cannot afford to pay the full amount.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Kisetsu Saison Finance is a technology-led neo-lending conglomerate. While they employ robust digital collection strategies, they also understand that recovering a partial amount is preferable to a total write-off (Non-Performing Asset). This pragmatic approach opens the door for negotiation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                In this comprehensive guide, <strong>CredSettle</strong> provides you with a roadmap. We will explain how the settlement process works specifically with Kisetsu Saison Finance and Privo, how to download your <strong>NOC (No Objection Certificate)</strong>, how to engage with their specific <strong>grievance officers</strong> like Mr. Emaad Khan, and how you can potentially reduce your debt burden by up to <strong>50%</strong> legally and ethically.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">CredSettle's Commitment</h4>
                <p className="text-blue-800 m-0">
                  Your financial dignity matters. We specialize in intervening between you and lenders like Kisetsu Saison Finance to stop harassment and negotiate a fair settlement. Let us handle the legal complexities while you focus on rebuilding your life.
                </p>
              </div>

              <h2 id="understanding-ots" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Understanding the One Time Settlement (OTS) Mechanism</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The <strong>One Time Settlement (OTS)</strong> is not a "loophole" but a formal banking provision established to clean up bad loans. When a borrower defaults for an extended period—typically over 90 days—the loan is classified as a Non-Performing Asset (NPA). At this stage, the lender's priority shifts from "earning profit" to "minimizing loss."
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Here is why Kisetsu Saison Finance might agree to a settlement:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-700">
                <li><strong>Provisioning Costs:</strong> Holding a bad loan on their books requires the lender to set aside capital (provisions) mandated by the RBI, which locks up their funds.</li>
                <li><strong>Legal Expenses:</strong> Filing cases for recovery is time-consuming and expensive, with no guarantee of full recovery.</li>
                <li><strong>Operational Drain:</strong> Chasing a defaulter requires manpower and resources. A settlement provides an immediate exit.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                In an OTS, you agree to pay a lump sum amount (Settlement Amount) which is lower than your total outstanding. In exchange, the lender waives the remaining principal, interest, and penalties, and marks the account as settled.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">The "Sacrifice" Calculation</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Lenders calculate a "sacrifice" amount—the money they are willing to forego to close the account today. Negotiations revolve around maximizing this sacrifice. Factors influencing this include the age of the NPA (older NPAs often get better deals) and the strength of your hardship verification.
              </p>

              <h2 id="eligibility-criteria" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Who is Eligible for Settlement?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Settlement is not an entitlement; it is a negotiation. Kisetsu Saison Finance will scrutinize your request to ensure you are not a "Willful Defaulter" (someone who has money but refuses to pay). To successfully settle, you must demonstrate <strong>genuine financial hardship</strong>.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-2">Unsecured Loans</h4>
                  <p className="text-gray-600 text-sm">Settlement is primarily for unsecured debt like <strong>Privo App Personal Loans</strong> and Credit Saison Business Loans. Secured loans are rarely settled as the lender can seize the asset.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-2">NPA Status</h4>
                  <p className="text-gray-600 text-sm">Typically, serious negotiations begin after the account hits the 90-day overdue mark (NPA status). Pre-NPA settlements are exceptionally rare.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Valid Grounds for Hardship</h3>
              <div className="space-y-6 mb-10">
                <div className="bg-white border-l-4 border-green-500 pl-6 py-2">
                  <h4 className="font-bold text-gray-900">Loss of Employment</h4>
                  <p className="text-gray-700 mt-1">A sudden job loss or layoff is one of the most accepted reasons. Providing a termination letter strengthens your case significantly.</p>
                </div>
                <div className="bg-white border-l-4 border-green-500 pl-6 py-2">
                  <h4 className="font-bold text-gray-900">Medical Crisis</h4>
                  <p className="text-gray-700 mt-1">Severe illness for yourself or a dependent that has depleted your savings is a compassionate ground for settlement.</p>
                </div>
                <div className="bg-white border-l-4 border-green-500 pl-6 py-2">
                  <h4 className="font-bold text-gray-900">Business Insolvency</h4>
                  <p className="text-gray-700 mt-1">For self-employed individuals, proof of business closure or severe revenue loss (via GST returns or bank statements) is critical.</p>
                </div>
              </div>

              <h2 id="settlement-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Step-by-Step Settlement Process</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Approaching a settlement without a plan can lead to rejection or a poor deal. Here is the structured approach CredSettle utilizes for Kisetsu Saison Finance cases:
              </p>

              <div className="space-y-8 mb-12">
                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Assessment & Anti-Harassment</h4>
                  <p className="text-gray-700">
                    We start by analyzing your loan documents to identify the actual principal versus inflated charges. Simultaneously, we take over communication with recovery agents to ensure you are not subjected to illegal harassment.
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Proposal Submission</h4>
                  <p className="text-gray-700">
                    We draft a formal settlement proposal detailing your hardship. This is submitted to the authorized officer at Kisetsu Saison Finance (often via <strong>grievance@creditsaison-in.com</strong>). We never start with the highest amount you can pay; we start low to leave room for negotiation.
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">The Negotiation Phase</h4>
                  <p className="text-gray-700">
                    The lender will counter-offer, usually demanding 80-90% of the dues. Our legal experts engage in multiple rounds of discussion, citing RBI guidelines and your financial reality, to bring this figure down to a realistic 30-50% range.
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Settlement Authorization</h4>
                  <p className="text-gray-700">
                    Success! The lender agrees to a figure. We ensure this is documented in an official <strong>Settlement Letter</strong>. This letter must clearly state the settlement amount, the due date, and the promise to close the loan upon payment.
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Closure and NOC Download</h4>
                  <p className="text-gray-700">
                    You make the payment directly to your loan account. Within 15-20 days, the bank issues a <strong>No Dues Certificate (NOC)</strong>. While there isn't a direct "one-click download" for everyone, CredSettle ensures this is emailed to you directly from their official domain (@creditsaison-in.com).
                  </p>
                </div>
              </div>

              <h2 id="collection-tactics" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Handling Collection Tactics & Complaints</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Kisetsu Saison Finance employs tech-driven collection strategies. You might receive automated calls, WhatsApp messages, and emails. Understanding your rights is your shield.
              </p>
              <div className="bg-red-50 p-6 rounded-2xl mb-8 border border-red-100">
                <h3 className="text-red-800 font-bold text-xl mb-3">Know Your Rights (RBI Guidelines)</h3>
                <ul className="list-disc pl-5 text-red-700 space-y-2">
                  <li><strong>Time Restrictions:</strong> Agents can only call between 8:00 AM and 7:00 PM.</li>
                  <li><strong>Privacy:</strong> They cannot inform your neighbors or relatives about your debt.</li>
                  <li><strong>Professionalism:</strong> Abusive language or physical threats are strictly prohibited.</li>
                  <li><strong>Identity:</strong> Every agent must carry an authorization letter.</li>
                </ul>
                <p className="text-red-700 mt-4 font-semibold">
                  If you face harassment, you can escalate the matter to their Grievance Redressal Officer, <strong>Mr. Emaad Khan</strong>, at <strong>emaad.khan@creditsaison-in.com</strong> or call <strong>+91 9962003070</strong>. If that fails, CredSettle can help you file a complaint with the RBI Ombudsman.
                </p>
              </div>

              <h2 id="legal-implications" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Legal Implications: Arbitration & Section 25</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                NBFCs often utilize the <strong>Payment and Settlement Systems Act, 2007 (Section 25)</strong> for dishonored electronic mandates (NACH/ECS), similar to Section 138 for cheques.
              </p>
              
              <div className="grid gap-6 mb-10">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Arbitration</h4>
                  <p className="text-gray-700">
                    Your loan agreement likely includes an arbitration clause. The lender may unilaterally appoint an arbitrator. Ignoring arbitration notices can lead to an <em>ex-parte</em> award against you.
                    <br/><span className="text-blue-600 font-semibold">Strategy:</span> We represent you in these proceedings to challenge the appointment or the claim, forcing the lender to come to the settlement table.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Legal Notices</h4>
                  <p className="text-gray-700">
                    Receiving a legal notice can be scary, but it is often a pressure tactic. Most notices are invitations to pay. However, they must be responded to professionally to avoid escalation.
                  </p>
                </div>
              </div>

              <h2 id="documentation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Documents Checklist</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Being prepared accelerates the process. Keep these ready:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-10 text-gray-700">
                <li><strong>Loan Account Number & details (Privo App screenshots work too).</strong></li>
                <li><strong>Copies of overdue notices sent by the lender.</strong></li>
                <li><strong>Bank statements showing financial crunch.</strong></li>
                <li><strong>Income proof (Salary slips/ITR) to prove reduced capacity.</strong></li>
                <li><strong>Identity Proof (Aadhar/PAN).</strong></li>
                <li><strong>Specific hardship evidence (Medical bills, Job termination letter).</strong></li>
              </ul>

              <h2 id="credit-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Impact on CIBIL Score</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Transparency is key. A settlement <strong>will</strong> lower your credit score. Your report will reflect a "Settled" status for about 7 years. This indicates you paid less than the owed amount.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Is it worth it?</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                Absolutely, if the alternative is indefinite financial distress. A "Settled" status stops the monthly bleeding of your score caused by "Late Payment" or "Write Off" tags. Once settled, you can start rebuilding. CredSettle offers a post-settlement credit building program to help you navigate back to a 750+ score over time.
              </p>

              {/* Review Snippets */}
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center">User Experiences</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">★★★★★</div>
                      <div className="text-sm opacity-80">Rohan D.</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"I had a Privo loan that I couldn't pay after my shop closed. CredSettle stopped the constant calls and closed the specific loan for 45% of the value."</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 text-xl mr-2">★★★★★</div>
                      <div className="text-sm opacity-80">Sneha P.</div>
                    </div>
                    <p className="italic text-gray-200 text-sm">"The legal team dealt with the arbitration notice I received. I didn't have to go to court. Highly relieved."</p>
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
                
                {/* Additional SEO FAQs */}
                <div className="border-b border-gray-100 pb-4 last:border-0">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">How can I download the Kisetsu Saison Finance NOC?</h3>
                  <p className="text-gray-600">You generally cannot download the NOC directly from a public link. After settlement is paid, the NOC is emailed to your registered email address from <strong>support@creditsaison-in.com</strong> or mailed to your registered address. Ensure you follow up with their support team if it is delayed.</p>
                </div>
                <div className="border-b border-gray-100 pb-4 last:border-0">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">What is the Privo Customer Care Number for settlement?</h3>
                  <p className="text-gray-600">The customer care number for Privo (Credit Saison) is <strong>1800-1038-961</strong>. However, for settlement discussions, it is more effective to email their grievance officer at <strong>grievance@creditsaison-in.com</strong> to create a paper trail of your request.</p>
                </div>
                 <div className="border-b border-gray-100 pb-4 last:border-0">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Are there complaints against Kisetsu Saison Finance?</h3>
                  <p className="text-gray-600">Yes, like many lenders, there are consumer complaints regarding loan settlement delays and recovery agent behavior. If you face issues, you can file a complaint on the RBI Ombudsman portal or use a service like CredSettle to handle the grievance for you legally.</p>
                </div>
              </div>

            </article>
          </div>

          {/* Right Column: CTA & Related (Sticky) */}
          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              {/* Main CTA Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Settle Kisetsu Loan</h4>
                <p className="text-sm text-gray-600 mb-6">Expert legal help to save up to 50% on dues.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Get Help Now
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>✓ Stop Harassment</p>
                  <p className="mt-1">✓ Legal Protection</p>
                </div>
              </div>

              {/* Related Pages Info */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Lenders</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/loan-settlement/bajaj-finserv" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Bajaj Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/aditya-birla" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Aditya Birla Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/dmi-finance" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      DMI Finance Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/hero-fincorp" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Hero Fincorp Settlement
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
