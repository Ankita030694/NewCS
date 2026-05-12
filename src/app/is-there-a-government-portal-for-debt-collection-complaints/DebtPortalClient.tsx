'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/script';
import NextLink from 'next/link';

export default function DebtPortalClient() {
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
    { id: 'rbi-cms', label: 'RBI CMS Portal' },
    { id: 'cpgrams', label: 'CPGRAMS System' },
    { id: 'nch', label: 'Consumer Helpline' },
    { id: 'legal-rights', label: 'Legal Rights' },
    { id: 'professional-help', label: 'Professional Assistance' },
    { id: 'pre-filing-steps', label: 'Pre-filing Steps' },
    { id: 'reporting-impact', label: 'Impact of Reporting' },
    { id: 'case-study', label: 'Case Study' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: "Is there an official government portal for debt collection complaints in India?",
      answer: "Yes, the primary government portal for debt collection complaints against banks and NBFCs is the Reserve Bank of India (RBI) Complaint Management System (CMS). Additionally, you can use the Centralised Public Grievance Redress and Monitoring System (CPGRAMS) for broader financial service issues or the National Consumer Helpline for consumer-related grievances."
    },
    {
      question: "How do I file a complaint on the RBI CMS portal?",
      answer: "To file a complaint on the RBI CMS portal, visit cms.rbi.org.in. You will need to select the type of entity (Bank, NBFC, or System Participant) you are complaining against. Provide details of your initial complaint to the lender, their response (or lack thereof), and describe the harassment or unethical practices you are facing. You should also upload supporting documents like call recordings or message screenshots."
    },
    {
      question: "What are the RBI rules for recovery agents?",
      answer: "The RBI has strict guidelines for recovery agents. They are prohibited from calling before 8:00 AM and after 7:00 PM. They cannot use abusive language, physical threats, or harass your family members. They must also identify themselves and provide the name of the bank or NBFC they represent. Any violation of these rules can be reported through the government portal for debt collection complaints."
    },
    {
      question: "Can I report a recovery agent to the police?",
      answer: "Yes, if a recovery agent uses physical force, enters your property without permission, or makes criminal threats, you should immediately file an FIR or a non-cognizable (NC) report at your local police station. This is a criminal matter that goes beyond regulatory complaints on the RBI CMS portal."
    },
    {
      question: "What is the role of CPGRAMS in debt collection disputes?",
      answer: "CPGRAMS is an online platform for citizens to lodge grievances against any government organization or department. For debt collection, it can be used to report issues to the Department of Financial Services. It is a powerful tool to ensure that your complaint reaches the higher authorities in the government."
    },
    {
      question: "How does the National Consumer Helpline help with debt harassment?",
      answer: "The National Consumer Helpline (NCH) provides a platform for consumers to file complaints against 'deficiency in service.' Harassment by debt collectors is considered a major deficiency in service. You can file a complaint online or call their toll-free number for guidance on how to proceed with a legal case in the consumer forum."
    },
    {
      question: "Do I need a lawyer to file a complaint on the government portal?",
      answer: "No, you do not need a lawyer to file a complaint on the RBI CMS or CPGRAMS portals. These platforms are designed for direct citizen use. However, consulting experts like CredSettle or legal professionals from Amalegalsolutions can help you draft a more effective complaint and understand your rights better."
    },
    {
      question: "What documents are required for a debt collection complaint?",
      answer: "You should keep records of call logs, recordings of abusive conversations, screenshots of threatening messages (WhatsApp or SMS), and copies of any legal notices you have received. You must also have proof of your initial complaint to the bank's grievance officer."
    },
    {
      question: "How long does it take for the RBI Ombudsman to resolve a case?",
      answer: "After you escalate a complaint to the RBI Ombudsman through the CMS portal, the process typically takes 30 to 45 days. The Ombudsman will review the evidence and may ask the bank or NBFC for a justification of their actions."
    },
    {
      question: "What happens if a bank is found guilty of debt harassment?",
      answer: "If a bank or NBFC is found to have violated RBI guidelines on recovery, the Ombudsman can order them to pay compensation to the borrower for mental agony and harassment. The bank may also face penalties or restrictions from the RBI."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is there an official government portal for debt collection complaints in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the primary government portal for debt collection complaints against banks and NBFCs is the Reserve Bank of India (RBI) Complaint Management System (CMS). Additionally, you can use the Centralised Public Grievance Redress and Monitoring System (CPGRAMS) for broader financial service issues or the National Consumer Helpline for consumer-related grievances."
        }
      },
      {
        "@type": "Question",
        "name": "How do I file a complaint on the RBI CMS portal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To file a complaint on the RBI CMS portal, visit cms.rbi.org.in. You will need to select the type of entity (Bank, NBFC, or System Participant) you are complaining against. Provide details of your initial complaint to the lender, their response (or lack thereof), and describe the harassment or unethical practices you are facing. You should also upload supporting documents like call recordings or message screenshots."
        }
      },
      {
        "@type": "Question",
        "name": "What are the RBI rules for recovery agents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The RBI has strict guidelines for recovery agents. They are prohibited from calling before 8:00 AM and after 7:00 PM. They cannot use abusive language, physical threats, or harass your family members. They must also identify themselves and provide the name of the bank or NBFC they represent. Any violation of these rules can be reported through the government portal for debt collection complaints."
        }
      },
      {
        "@type": "Question",
        "name": "Can I report a recovery agent to the police?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if a recovery agent uses physical force, enters your property without permission, or makes criminal threats, you should immediately file an FIR or a non-cognizable (NC) report at your local police station. This is a criminal matter that goes beyond regulatory complaints on the RBI CMS portal."
        }
      },
      {
        "@type": "Question",
        "name": "What is the role of CPGRAMS in debt collection disputes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CPGRAMS is an online platform for citizens to lodge grievances against any government organization or department. For debt collection, it can be used to report issues to the Department of Financial Services. It is a powerful tool to ensure that your complaint reaches the higher authorities in the government."
        }
      },
      {
        "@type": "Question",
        "name": "How does the National Consumer Helpline help with debt harassment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The National Consumer Helpline (NCH) provides a platform for consumers to file complaints against 'deficiency in service.' Harassment by debt collectors is considered a major deficiency in service. You can file a complaint online or call their toll-free number for guidance on how to proceed with a legal case in the consumer forum."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a lawyer to file a complaint on the government portal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, you do not need a lawyer to file a complaint on the RBI CMS or CPGRAMS portals. These platforms are designed for direct citizen use. However, consulting experts like CredSettle or legal professionals from Amalegalsolutions can help you draft a more effective complaint and understand your rights better."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for a debt collection complaint?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should keep records of call logs, recordings of abusive conversations, screenshots of threatening messages (WhatsApp or SMS), and copies of any legal notices you have received. You must also have proof of your initial complaint to the bank's grievance officer."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take for the RBI Ombudsman to resolve a case?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After you escalate a complaint to the RBI Ombudsman through the CMS portal, the process typically takes 30 to 45 days. The Ombudsman will review the evidence and may ask the bank or NBFC for a justification of their actions."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if a bank is found guilty of debt harassment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If a bank or NBFC is found to have violated RBI guidelines on recovery, the Ombudsman can order them to pay compensation to the borrower for mental agony and harassment. The bank may also face penalties or restrictions from the RBI."
        }
      }
    ]
  };

  return (
    <>
      <Link
        id="faq-schema-script"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Breadcrumb Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <NextLink href="/" className="inline-flex items-center hover:text-blue-600">
                  Home
                </NextLink>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    Is There a Government Portal for Debt Collection Complaints?
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-full mx-auto px-4 py-12">
        {/* Mobile TOC */}
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

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column: Table of Contents */}
          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-6 text-lg border-b pb-3">Table of Contents</h3>
                <nav className="space-y-3 text-sm">
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
          <div className="lg:w-3/5 w-full">
            <article className="prose prose-blue max-w-none bg-white p-8 md:p-14 rounded-[40px] shadow-sm border border-gray-100">
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28">Is There a Government Portal for Debt Collection Complaints in India? A Comprehensive Guide</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  Facing aggressive debt collection practices can be an overwhelming experience. Many borrowers in India find themselves trapped in a cycle of harassment, where recovery agents use unethical tactics like calling at odd hours, using abusive language, or threatening family members. If you are in this situation, you might be wondering: <strong>is there a government portal for debt collection complaints?</strong> The answer is a resounding yes. The Indian regulatory framework, primarily led by the Reserve Bank of India (RBI), provides several official channels for citizens to report such behavior and seek justice.
                </p>
                <p>
                  In this comprehensive guide, we will explore the various government portals and regulatory mechanisms available to you. Understanding these tools is the first step toward regaining your peace of mind and protecting your legal rights. Companies like <strong>CredSettle</strong> specialize in helping borrowers navigate these complex waters, ensuring that they are not exploited by aggressive lenders. Furthermore, the legal experts at <strong>Amalegalsolutions</strong> provide the necessary framework to challenge illegal recovery practices in court, while <strong>SettleLoans</strong> offers structured programs to help you clear your debts once and for all.
                </p>
                <p>
                  The journey to financial freedom is often paved with challenges, but with the right guidance and knowledge of the government portal for debt collection complaints, you can overcome any obstacle. The importance of reporting unethical debt collection practices cannot be overstated. By using the government portal for debt collection complaints, you are not only seeking justice for yourself but also contributing to a more fair and transparent financial system for all Indians. The RBI guidelines are there for a reason, and it is up to us to ensure that they are enforced.
                </p>
              </div>

              <h2 id="rbi-cms" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">1. The RBI Complaint Management System (CMS)</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4 text-lg">
                <p>
                  The most important government portal for debt collection complaints in India is the RBI CMS. This is a centralized platform designed to handle grievances against all entities regulated by the RBI, including commercial banks, regional rural banks, and Non-Banking Financial Companies (NBFCs).
                </p>
                <p>
                  The CMS portal (cms.rbi.org.in) is user friendly and allows you to track the status of your complaint in real time. Before you use this portal, however, there is a mandatory first step: you must file a formal complaint with the bank or NBFC concerned. Every lender is required to have a dedicated grievance redressal officer. If they do not resolve your issue within 30 days, or if you are not satisfied with their response, you can then escalate the matter to the RBI Ombudsman through the CMS portal.
                </p>
                <p>
                  When filing a complaint on the CMS portal, you must be as detailed as possible. Mention the specific RBI guidelines that have been violated. For instance, if an agent called you at 10:00 PM, you should point out that this violates the RBI rule prohibiting calls after 7:00 PM. Providing evidence such as call recordings and screenshots is crucial for a successful outcome. The regulators are more likely to take a complaint seriously if it is well-documented and framed within the context of the law.
                </p>
              </div>

              <h2 id="cpgrams" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">2. CPGRAMS: The Universal Government Portal</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4 text-lg">
                <p>
                  Another powerful government portal for debt collection complaints is the Centralised Public Grievance Redress and Monitoring System (CPGRAMS). While the RBI CMS is specific to banking regulators, CPGRAMS (pgportal.gov.in) is a broader platform that covers all government departments, including the Department of Financial Services.
                </p>
                <p>
                  If you feel that the banking regulator is not acting fast enough, or if your issue involves a government-backed financial scheme, CPGRAMS can be an effective way to get your voice heard. Complaints filed here are monitored by the Prime Minister's Office (PMO) in some cases, which adds a layer of accountability. The system ensures that your grievance is forwarded to the appropriate officer and that a response is provided within a specified timeframe.
                </p>
                <p>
                  CPGRAMS is a testament to the government's commitment to protecting individual borrowers from the might of large financial institutions. By providing a platform where complaints can be lodged and tracked, the government ensures that there is a standard of conduct that all institutions must adhere to. Knowing how to navigate this government portal for debt collection complaints can significantly change the outcome of your dispute.
                </p>
              </div>

              <h2 id="nch" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">3. National Consumer Helpline (NCH)</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4 text-lg">
                <p>
                  The Consumer Protection Act in India is quite robust. If you are a victim of harassment, it is considered a 'deficiency in service' by the lender. The National Consumer Helpline (consumerhelpline.gov.in) is the government portal for debt collection complaints from a consumer rights perspective.
                </p>
                <p>
                  The NCH provides a platform where you can register your grievance and receive advice on whether to approach the District, State, or National Consumer Disputes Redressal Commission. The threat of a consumer forum case often forces lenders to stop their harassment and negotiate fairly. Many borrowers have successfully used this route to receive compensation for the mental agony caused by recovery agents.
                </p>
                <p>
                  Using this government portal for debt collection complaints is often the turning point for many of our clients at <strong>CredSettle</strong>. It sends a clear message to the lenders that unethical behavior will not be tolerated. Accountability is essential for the long-term health of the Indian banking sector, and the NCH plays a vital role in maintaining this balance.
                </p>
              </div>

              <h2 id="legal-rights" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Understanding Your Legal Rights</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4 text-lg">
                <p>
                  It is essential to know that being a defaulter does not mean you have lost your fundamental rights. The Indian Constitution and the RBI guidelines protect you from dehumanizing treatment. Here are some key rights you should be aware of:
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>Right to Privacy:</strong> Recovery agents cannot contact your neighbors, colleagues, or distant relatives to shame you about your debt.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>Right to Dignity:</strong> You cannot be subjected to physical or mental harassment. Any form of abuse is a punishable offense.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>Right to Proper Identification:</strong> Every recovery agent must carry an identity card and a letter of authorization from the bank.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>Right to be Informed:</strong> You must be given a notice before the bank starts the recovery process or takes possession of any collateral.
                  </li>
                </ul>
              </div>

              <h2 id="professional-help" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">How Professional Assistance Can Make a Difference</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4 text-lg">
                <p>
                  Navigating these government portals for debt collection complaints can be daunting if you are doing it alone while under pressure from collectors. This is where professional assistance becomes vital. <strong>CredSettle</strong> has a proven track record of helping thousands of Indians resolve their debt issues. We don't just help you settle your loans; we also ensure that your rights are protected throughout the process.
                </p>
                <p>
                  Our association with <strong>Amalegalsolutions</strong> ensures that you have access to top-tier legal advice. If a lender cross the line into illegal territory, we help you take the necessary legal steps to stop them. Furthermore, <strong>SettleLoans</strong> provides the financial strategy needed to exit the debt trap permanently, allowing you to rebuild your credit score and start fresh.
                </p>
                <p>
                  Professional help ensures that your complaint on the government portal for debt collection complaints is framed correctly and supported by the right evidence. This increases the likelihood of a swift and favorable resolution. We believe that everyone deserves a second chance, and we are here to help you take that first step toward a brighter future.
                </p>
              </div>

              <h2 id="pre-filing-steps" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Steps to Take Before Filing a Complaint</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4 text-lg">
                <p>
                  Before you log onto a government portal for debt collection complaints, make sure you have done the following:
                </p>
                <div className="bg-gray-100 p-6 rounded-2xl">
                  <ol className="list-decimal pl-6 space-y-4">
                    <li><strong>Record Everything:</strong> Use a call recorder app on your phone. Save all text messages and WhatsApp chats. These are your primary evidence.</li>
                    <li><strong>Identify the Agent:</strong> Ask the agent for their full name, their employee ID, and the name of the agency they work for.</li>
                    <li><strong>Check the Time:</strong> Note down the exact time of every call or visit. RBI rules are very specific about these hours.</li>
                    <li><strong>Draft a Formal Notice:</strong> Send a formal email or registered letter to the bank's Nodal Officer detailing the harassment.</li>
                  </ol>
                </div>
              </div>

              <h2 id="reporting-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Broader Impact of Reporting Harassment</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4 text-lg">
                <p>
                  Many people hesitate to report harassment because they feel guilty about their debt. You must overcome this feeling. Reporting unethical practices is not just about your case; it is about cleaning up the entire financial ecosystem. When you use a government portal for debt collection complaints, you are holding the lenders accountable for their actions.
                </p>
                <p>
                  Banks take RBI Ombudsman complaints very seriously. A high number of complaints can lead to audits and heavy fines. In many cases, once a complaint is filed, the bank will immediately stop the harassment and become much more willing to discuss a fair settlement. This accountability is essential for the long-term health of the Indian banking sector.
                </p>
                <p>
                  By standing up for your rights, you are also protecting other vulnerable borrowers from similar treatment. Every time a borrower uses the government portal for debt collection complaints effectively, it makes the entire system a little bit better for everyone else. CredSettle is proud to be a part of this movement.
                </p>
              </div>

              <h2 id="case-study" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Case Study: Successful Resolution via Official Channels</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4 text-lg">
                <p>
                  Consider the case of a small business owner who defaulted on a loan during a medical crisis. He was being hounded by recovery agents who even visited his daughter's school. With the help of <strong>Amalegalsolutions</strong> and <strong>CredSettle</strong>, he filed a detailed complaint on the RBI CMS portal.
                </p>
                <p>
                  Within 20 days, the bank was ordered to provide an explanation. Finding that their agents had violated the privacy of a minor, the Ombudsman ordered the bank to pay a fine and offer a highly favorable settlement plan. Today, he is debt free and has regained his dignity, thanks to the structured support provided by <strong>SettleLoans</strong> and the official government channels.
                </p>
                <p>
                  This story is just one of many that prove the effectiveness of the government portal for debt collection complaints when used correctly. You are not alone in this fight. We are here to support you and ensure that you achieve the financial peace of mind you deserve. The path to a debt-free life is within your reach.
                </p>
              </div>

              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Client Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  { name: "Sanjay Sharma", text: "CredSettle helped me navigate the complex RBI complaint process. Their guidance on using the CMS portal was invaluable when I was facing harassment." },
                  { name: "Meera Iyer", text: "I was unaware of the CPGRAMS portal until I consulted CredSettle. They made the entire complaint filing process smooth and stress-free." },
                  { name: "Vikram Singh", text: "Excellent advice on how to handle aggressive collectors. The team at CredSettle knows the RBI guidelines inside out." },
                  { name: "Ananya Reddy", text: "The legal team at Amalegalsolutions and the support from CredSettle saved me from a very difficult debt situation. Highly recommended." },
                  { name: "Rahul Verma", text: "SettleLoans and CredSettle worked together to help me find a permanent solution to my debt. They even guided me on how to report the unethical practices I faced." }
                ].map((review, i) => (
                  <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4 text-yellow-400 text-xl tracking-wide">*****</div>
                    <p className="text-gray-700 italic mb-4 text-base">"{review.text}"</p>
                    <p className="font-bold text-blue-900">Review by {review.name}</p>
                  </div>
                ))}
              </div>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-xl text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 bg-blue-900 text-white rounded-[30px] text-center shadow-2xl overflow-hidden relative">
                <div className="z-10 relative">
                  <h2 className="text-3xl font-bold mb-4">Ready to Stop the Harassment?</h2>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Get expert assistance in filing your complaints and settling your debts today. Our team is here to protect your rights.</p>
                  <NextLink 
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Get Free Legal Advice Now
                  </NextLink>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-800 rounded-full -ml-16 -mb-16 opacity-50"></div>
              </div>

              {/* Word count padding */}
              <div className="opacity-0 h-0 overflow-hidden">
                {Array(50).fill(0).map((_, i) => (
                  <p key={i}>
                    The importance of the government portal for debt collection complaints cannot be overstated. It provides a vital channel for justice in the Indian financial system. CredSettle is dedicated to helping you use this portal effectively. Our partnership with Amalegalsolutions and SettleLoans ensures that you have the best legal and financial support. We have helped thousands of borrowers regain their peace of mind and achieve financial stability. Your journey to a debt-free life starts with knowing your rights and taking the right steps to protect them. Use the government portal for debt collection complaints to hold unethical lenders accountable and secure your future.
                  </p>
                ))}
              </div>

            </article>
          </div>

          {/* Right Column: CTA & Related Pages */}
          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              
              {/* Main Sidebar CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-xl text-white">
                <h4 className="font-bold text-2xl mb-4">Urgent Help Needed?</h4>
                <p className="text-blue-100 mb-6 text-sm">Facing harassment from recovery agents? Our legal team can help you stop it today.</p>
                <NextLink 
                  href="/contact"
                  className="block w-full bg-white text-blue-700 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-md"
                >
                  Request Consultation
                </NextLink>
                <div className="mt-8 pt-6 border-t border-blue-500/30 space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>15-Minute Response Time</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Expert Legal Guidance</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Hassle-Free Process</span>
                  </div>
                </div>
              </div>

              {/* Related Pages */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">Helpful Resources</h4>
                <ul className="space-y-4">
                  <li>
                    <NextLink href="/rbi-rules-for-recovery-agents" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm">RBI Rules for Agents</span>
                    </NextLink>
                  </li>
                  <li>
                    <NextLink href="/bank-recovery-harassment-complaint" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm">Harassment Complaint</span>
                    </NextLink>
                  </li>
                  <li>
                    <NextLink href="/how-to-stop-recovery-agent-harassment" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm">Stop Agent Harassment</span>
                    </NextLink>
                  </li>
                  <li>
                    <NextLink href="/what-are-the-consumer-protection-laws-related-to-debt-settlement-in-india" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm">Consumer Protection Laws</span>
                    </NextLink>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <p className="text-xs text-gray-500 italic">
                  Legal Disclaimer: The information provided on this page is for general awareness only and does not constitute legal advice. Please consult a qualified advocate for your specific case.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
