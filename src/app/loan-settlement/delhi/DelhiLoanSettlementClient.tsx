'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function DelhiLoanSettlementClient() {
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
    { id: 'delhi-debt-crisis', label: 'Delhi Debt Crisis' },
    { id: 'legal-framework', label: 'Legal Framework' },
    { id: 'lok-adalat-delhi', label: 'Delhi Lok Adalat' },
    { id: 'police-protection', label: 'Police Protection' },
    { id: 'drt-delhi', label: 'DRT Delhi Procedures' },
    { id: 'settlement-process', label: 'Settlement Process' },
    { id: 'why-hire-lawyer', label: 'Why Hire Lawyer' },
    { id: 'impacting-cibil', label: 'CIBIL Impact' },
    { id: 'faqs', label: 'FAQs' },
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

  const faqList = [
    {
      question: "Is loan settlement legal in Delhi NCR?",
      answer: "Yes, absolutely. Loan settlement is a completely legal financial process in Delhi and across India. It is governed by the Indian Contract Act and facilitated under RBI guidelines. When you settle a loan, you are essentially entering into a new legal agreement with the bank to close the account for a reduced amount."
    },
    {
      question: "How can I stop recovery agents from visiting my home in Delhi?",
      answer: "You have legal rights to stop harassment. If agents are visiting without notice or behaving rudely, you can file a complaint with the Delhi Police. Hiring a legal service like CredSettle allows us to send a legal notice to the bank, which usually stops these visits as all communication is then routed through your lawyer."
    },
    {
      question: "Which courts in Delhi handle loan settlement cases?",
      answer: "Most loan settlements are handled out of court or through the Lok Adalat system organized by the Delhi State Legal Services Authority (DSLSA). For larger loans above 20 Lakhs, the Debt Recovery Tribunals (DRT) at Sansad Marg (Parliament Street) have jurisdiction."
    },
    {
      question: "Can I settle my credit card debt in full?",
      answer: "Yes, credit card debt is unsecured and is one of the most common types of debt settled. Banks are often willing to accept 30% to 50% of the outstanding amount as a full and final settlement to clear their books of non-performing assets."
    },
    {
      question: "Will I go to jail if I don’t pay my personal loan in Delhi?",
      answer: "No, defaulting on a loan is a civil matter, not a criminal offense. You cannot be arrested for non-payment of a personal loan. However, if you have issued a cheque that bounces, a case under Section 138 of the Negotiable Instruments Act can be filed, which is a criminal offense. Settlement resolves this risk."
    },
    {
      question: "What is the role of the RBI Ombudsman in Delhi?",
      answer: "The RBI Ombudsman acts as a senior grievance redressal authority. If a bank in Delhi is harassing you or not following fair practices, and they don’t resolve your complaint within 30 days, you can escalate the matter to the RBI Ombudsman for a binding resolution."
    },
    {
      question: "How long does the entire settlement process take?",
      answer: "The timeline varies but typically takes between 2 weeks to 4 months. It depends on the bank’s internal approvals, the age of your default, and how quickly we can negotiate a deal that fits your budget."
    },
    {
      question: "Do I need to be present physically for the settlement?",
      answer: "In most cases, no. Your lawyer can handle all negotiations. You might only need to be present if the settlement is being finalized in a Lok Adalat session to sign the final award, but even this can often be managed with proper legal representation."
    },
    {
      question: "What documents do I need to start the process?",
      answer: "You primarily need your loan statements, any notices sent by the bank, your ID proof (PAN/Aadhar), and documents supporting your financial hardship (like a termination letter, medical bills, or salary slips showing reduced income)."
    },
    {
      question: "Can you help if I live in Noida or Gurgaon but work in Delhi?",
      answer: "Yes, we cover the entire Delhi NCR region including Noida, Gurgaon, Ghaziabad, and Faridabad. The banking circles often overlap, and the legal principles for settlement remain consistent across the region."
    }
  ];

  return (
    <>
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
                    Delhi
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-12">
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

          <div className="lg:w-2/3 w-full">
            <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              
              <h2 id="delhi-debt-crisis" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Loan Settlement Landscape in Delhi NCR</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Delhi, being the capital city and a massive economic hub, witnesses a high volume of financial transactions and credit disbursement. From young professionals in Gurugram taking personal loans to business owners in Chandni Chowk leveraging credit lines, debt is an integral part of the city’s growth. However, financial instability can strike anyone. Job losses, business closures, or medical emergencies often lead to a debt trap where repaying the full amount becomes impossible.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you are a resident of Delhi NCR facing harassing recovery calls and mounting interest, you must know that you have a legal way out. Loan Settlement is a structured, legal process recognized by the Reserve Bank of India (RBI) and widely practiced in Delhi’s banking circles. It allows you to negotiate with your lender to pay back a portion of what you owe as a "Full and Final" payment to close the account permanently.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                The banking ecosystem in Delhi is aggressive, but it is also pragmatic. Banks prefer recovering 50% of a loan through settlement rather than 0% through default. With the right legal representation, you can leverage this to clear your debts and regain your peace of mind.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">Important for Delhi Residents</h4>
                <p className="text-blue-800 m-0">
                  The Delhi State Legal Services Authority (DSLSA) actively promotes pre-litigation settlement through Lok Adalats. This is often the fastest way to get a legally binding settlement decree in the capital.
                </p>
              </div>

              <h2 id="legal-framework" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Legal Framework Covering Debt Settlement in Delhi</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your rights as a borrower are protected by several strong legal statutes. Understanding these is the first step to stopping harassment and negotiating from a position of strength.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">1. RBI Guidelines on Recovery Agents</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The RBI has issued strict notifications governing how banks can collect debts. In Delhi, recovery agents cannot call you before 8:00 AM or after 7:00 PM. They are strictly prohibited from using abusive language, threatening physical harm, or contacting your family members and colleagues to shame you. If they violate these rules, the bank is liable for their actions.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">2. The Legal Services Authorities Act, 1987</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                This Act provides the statutory basis for Lok Adalats. In Delhi, the decisions made by a Log Adalat have the same force as a decree from a civil court. Once a settlement is reached here, the matter is closed for good, and the bank cannot reopen the case or demand more money later.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">3. Protection Against Usury</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                While Delhi does not have a specific money lending act as stringent as Maharashtra’s, the Punjab Registration of Money Lenders Act (applicable to Delhi) and various Supreme Court judgments protect borrowers from exorbitant interest rates charged by unlicensed private lenders. If you are dealing with loan sharks, police protection is your primary recourse.
              </p>

              <h2 id="lok-adalat-delhi" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Settling Through Delhi Lok Adalat</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Delhi State Legal Services Authority organizes National Lok Adalats in all strict courts of Delhi covering Tis Hazari, Patiala House, Karkardooma, Rohini, Dwarka, and Saket. These are held quarterly and are the most efficient venue for settling bank disputes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                **Why Choose Lok Adalat in Delhi?**
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                 <li>**Speed:** Matters are resolved in a single day.</li>
                 <li>**Cost:** There is no court fee. If you have already paid a court fee in a pending case, it is refunded if the matter is settled here.</li>
                 <li>**Finality:** The award is final and no appeal lies against it in any court.</li>
                 <li>**Flexibility:** The judges and mediators act as facilitators, not adjudicators, helping both parties reach a mutually acceptable figure.</li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                **2026 Tentative Schedule for National Lok Adalat in Delhi:**
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <span className="block text-green-800 font-bold mb-1">1st Quarter</span>
                  <span className="block text-xl font-bold text-gray-800">March 2026 (2nd Saturday)</span>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <span className="block text-green-800 font-bold mb-1">2nd Quarter</span>
                  <span className="block text-xl font-bold text-gray-800">May 2026 (2nd Saturday)</span>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <span className="block text-green-800 font-bold mb-1">3rd Quarter</span>
                  <span className="block text-xl font-bold text-gray-800">September 2026 (2nd Saturday)</span>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <span className="block text-green-800 font-bold mb-1">4th Quarter</span>
                  <span className="block text-xl font-bold text-gray-800">December 2026 (2nd Saturday)</span>
                </div>
              </div>

              <h2 id="police-protection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Filing Complaints Against Harassment in Delhi</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Residents of Delhi have multiple avenues to report illegal recovery tactics. The Delhi Police is proactive in handling cases of extortion masquerading as debt recovery.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">Online Complaint Channels</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You do not always need to visit the police station physically.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                 <li>**Delhi Police Website:** Use the "Citizen Services" section on [delhipolice.gov.in](https://delhipolice.gov.in) to file a complaint for non-cognizable offenses or cyber harassment.</li>
                 <li>**Cyber Crime Portal:** If the harassment is happening via WhatsApp, Email, or through digital loan apps, file a report at [cybercrime.gov.in](https://cybercrime.gov.in). This is effectively monitored by the Delhi Cyber Cell.</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-3">Drafting Your Complaint</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When filing a written complaint at your local police station (Thana), ensure you address it to the **Station House Officer (SHO)**. Be specific. Mention the phone numbers calling you, the language used, and attach transcripts or recordings.
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6 text-sm font-mono text-gray-800 overflow-x-auto">
                 <p>To,</p>
                 <p>The Station House Officer,</p>
                 <p>[Name of Police Station, e.g., Malviya Nagar],</p>
                 <p>New Delhi.</p>
                 <br/>
                 <p><strong>Subject: Complaint regarding criminal intimidation and mental harassment by recovery agents.</strong></p>
                 <br/>
                 <p>Sir,</p>
                 <p>I am filing this complaint against the recovery agents of [Bank Name] who are harassing me and my family regarding a personal loan [Account No].</p>
                 <p>They have been calling me abusively from [Phone Numbers] late at night. They have threatened to come to my office to defame me. This is causing me severe mental trauma and fear for my safety.</p>
                 <p>I request you to take action against these individuals under IPC Section 506 (Criminal Intimidation).</p>
              </div>

              <h2 id="drt-delhi" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Debt Recovery Tribunals (DRT) in Delhi</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                For loan amounts exceeding ₹20 Lakhs, banks will approach the Debt Recovery Tribunal. Delhi is the headquarters for the DRT in North India and has multiple benches.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                **DRT Locations:** The primary DRTs in Delhi (DRT-1, DRT-2, and DRT-3) are located at the **Jeevan Tara Building, Parliament Street (Sansad Marg), New Delhi**.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you receive a summons from the DRT, do not ignore it. It means the bank has initiated a formal legal recovery process. You must hire a specialized DRT lawyer to represent you. In the DRT, you can challenge the bank’s interest calculations, penal charges, and even counter-sue for damages if the bank has acted unlawfully. It is also a platform where a court-monitored settlement can be negotiated.
              </p>

              <h2 id="settlement-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Step-by-Step Loan Settlement Process</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Understanding the workflow helps reduce anxiety. Here is how we handle settlements for our clients in Delhi:
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex bg-gray-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">1</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Analysis & Protection</h4>
                    <p className="text-gray-700">We analyze your loan documents and immediate financial state. We take over communication with the bank to stop the daily harassment calls.</p>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">2</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Delinquency Management</h4>
                    <p className="text-gray-700">The loan must be in default (NPA) to be eligible for deep discounts. We guide you through this period, handling legal notices and ensuring you don’t panic.</p>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">3</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Negotiation</h4>
                    <p className="text-gray-700">Our legal team negotiates with the bank’s regional collection managers in Delhi. We aim for the lowest possible amount, often achieving waivers of 50-70% depending on the case.</p>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">4</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Documentation & Payment</h4>
                    <p className="text-gray-700">Once the amount is agreed, the bank issues a Settlement Letter. You pay the agreed amount directly to the bank. We verify the letter before you pay a single rupee.</p>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">5</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Closure</h4>
                    <p className="text-gray-700">The bank issues a No Dues Certificate (NDC). The loan is closed in your credit report.</p>
                  </div>
                </div>
              </div>

              <h2 id="why-hire-lawyer" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Why You Need a Specialized Settlement Lawyer</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Many borrowers ask, "Can I settle directly with the bank?" Yes, you can. But in Delhi’s competitive recovery environment, doing it alone puts you at a disadvantage.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                 <li>**Psychological Pressure:** Collection agents are trained to break you psychologically. A lawyer acts as a shield.</li>
                 <li>**Trap of Partial Payments:** Agents often trick you into paying small amounts that are adjusted against interest, not principal. A lawyer prevents this.</li>
                 <li>**Legal Notices:** Banks send daunting legal notices referencing arbitration or criminal cases. A lawyer knows which are real threats and which are just pressure tactics.</li>
                 <li>**Better Rates:** We settle hundreds of cases. We know the bottom line of each bank and can push for discounts an individual might never get.</li>
              </ul>

              <h2 id="impacting-cibil" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Impact on CIBIL Score</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Honesty is our policy. Settlement *will* impact your CIBIL score. Your account status will reflect as "Settled" rather than "Closed". This may lower your score by 50-100 points initially. 
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                However, consider the alternative. If you maximize your credit cards to pay another EMI, you fall into a debt trap. If you default without settling, your score crashes anyway, and legal action continues. Settlement stops the bleeding. It puts a full stop to the debt. Once the debt is gone, you can start rebuilding your score with secured cards or gold loans. In 18-24 months, your financial health can be restored.
              </p>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqList.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-blue-600 rounded-2xl p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Live in Delhi & Drowning in Debt?</h3>
                <p className="mb-8 opacity-90 max-w-2xl mx-auto">Stop the harassment today. Get expert legal help to settle your loans for up to 50% less.</p>
                <Link 
                  href="/contact"
                  className="inline-block bg-white text-blue-700 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all shadow-lg transform hover:-translate-y-1"
                >
                  Get Your Free Consultation
                </Link>
                <p className="mt-4 text-sm opacity-70">Confidential * Secure * Experts in Delhi NCR Banking Laws</p>
              </div>

            </article>
          </div>

          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Delhi Support</h4>
                <p className="text-sm text-gray-600 mb-6">Expert legal team for Delhi NCR residents.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Check Eligibility
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>v 24/7 Support</p>
                  <p className="mt-1">v Legal Protection</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Pages</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/services/credit-card-settlement" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Credit Card Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/personal-loan-settlement" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Personal Loans
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/maharashtra" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Maharashtra Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cheque-bounce-lawyer" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Cheque Bounce Laws
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
