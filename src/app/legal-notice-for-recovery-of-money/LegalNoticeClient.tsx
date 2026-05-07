'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function LegalNoticeClient() {
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
    { id: 'when-to-send', label: 'When to Send' },
    { id: 'legal-framework', label: 'Legal Framework' },
    { id: 'essential-components', label: 'Essential Components' },
    { id: 'step-by-step', label: 'Procedure Guide' },
    { id: 'required-documents', label: 'Required Documents' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'replying-to-notice', label: 'Replying to Notice' },
    { id: 'limitation-period', label: 'Limitation Period' },
    { id: 'court-action', label: 'Court Proceedings' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'Is it mandatory to send a legal notice before filing a recovery suit?',
      answer: 'While not always mandatory for general civil suits, it is highly recommended as it shows the court your genuine intent to resolve the matter before litigation. However, for cheque bounce cases under Section 138 of the Negotiable Instruments Act, sending a legal notice is a strict legal requirement.'
    },
    {
      question: 'How much time does the debtor have to reply to the notice?',
      answer: 'Typically, a legal notice provides a window of 15 to 30 days for the debtor to respond or settle the dues. The specific timeline is mentioned in the notice itself by the sender or their legal representative.'
    },
    {
      question: 'Can I send a legal notice for money recovery myself?',
      answer: 'Technically, you can draft and send a notice yourself. However, a notice sent on a professional lawyer’s letterhead carries significantly more weight and ensures that all legal technicalities are covered, which is crucial if the matter goes to court later.'
    },
    {
      question: 'What if the debtor refuses to accept the legal notice?',
      answer: 'If a debtor refuses to accept a notice sent via Registered Post, the law often treats it as "deemed service." This means the court will assume the notice was delivered, provided you have proof of the refusal from the postal authorities.'
    },
    {
      question: 'Can I claim interest on the outstanding amount in the notice?',
      answer: 'Yes, you can claim interest on the principal amount due, provided there was a prior agreement regarding interest or if the nature of the transaction allows for it under the Interest Act or commercial customs.'
    },
    {
      question: 'What is the limitation period for recovering money in India?',
      answer: 'Under the Limitation Act of 1963, the general time limit to file a suit for the recovery of money is three years from the date the cause of action arose (i.e., when the payment became due and was not paid).'
    },
    {
      question: 'Can a legal notice be sent via email or WhatsApp?',
      answer: 'Yes, modern judicial practices in India accept digital service via email or WhatsApp as valid, especially if it can be proven that the message was delivered and read. However, it is always safer to supplement this with a physical copy sent via Registered Post.'
    },
    {
      question: 'What is a Summary Suit under Order 37 of the CPC?',
      answer: 'A Summary Suit is a faster legal remedy for recovering money based on written contracts, bills of exchange, or promissory notes. Unlike regular suits, the defendant does not have an automatic right to defend and must seek permission from the court.'
    },
    {
      question: 'Can I recover money given to a friend or relative?',
      answer: 'Yes, money given to friends or relatives can be recovered through a legal notice and subsequent suit, provided you can prove it was a loan and not a gift. Documents like bank transfer records or text messages can serve as evidence.'
    },
    {
      question: 'What happens if the debtor ignores the legal notice?',
      answer: 'If the debtor ignores the notice and the grace period expires, you gain the right to initiate formal legal proceedings in a civil or criminal court, using the notice as primary evidence of your attempt to settle.'
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
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
                    Legal Notice for Recovery of Money
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
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28">How to Use a Legal Notice for Recovery of Money: A Comprehensive Indian Guide</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  In the dynamic financial landscape of India, lending money or providing services on credit is a common practice. However, the challenge arises when payments are delayed or debtors refuse to fulfill their obligations. A <strong>legal notice for recovery of money</strong> is the most professional and effective first step in resolving such disputes. It acts as a formal communication that warns the debtor of impending legal action, often prompting them to settle the matter outside of court.
                </p>
                <p>
                  Whether you are an individual who lent money to a friend in good faith or a business owner dealing with outstanding corporate invoices, understanding the legal nuances of money recovery is essential. In India, the legal system provides several routes for recovery, but almost all of them begin with a well drafted legal notice. This document is not just a reminder; it is a strategic tool that establishes your claim and sets the stage for future litigation if necessary.
                </p>
                <p>
                  The beauty of a <strong>legal notice for recovery of money</strong> lies in its ability to resolve conflicts without the high costs and long timelines of a full scale trial. Statistics show that a significant percentage of financial disputes in India are settled right after the service of a formal notice. This guide will walk you through everything you need to know about the process, from drafting to filing a suit, ensuring you have the best chance of getting your money back.
                </p>
                <p>
                  Many people hesitate to take legal action because they fear the complexity of the Indian judicial system. However, the law is designed to protect your hard earned money. By following a structured approach and adhering to the prescribed timelines, you can effectively leverage the law to hold debtors accountable. Let us dive into the details of how you can initiate this process today.
                </p>
              </div>

              <h2 id="when-to-send" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Common Scenarios: When Should You Send a Recovery Notice?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Identifying the right time to send a <strong>legal notice for recovery of money</strong> is crucial. Sending it too early might damage a professional relationship, while waiting too long might make your claim time barred. Here are the most common scenarios where a formal notice is warranted:
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>1. Unpaid Personal or Business Loans:</strong> When a loan agreement has been breached and the borrower fails to return the principal or interest as promised.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>2. Outstanding Invoices for Goods/Services:</strong> When a client or customer has received your products or services but refuses to pay the corresponding bills.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>3. Employee Salary or Dues:</strong> When an employer fails to pay the salary, bonuses, or other contractual benefits to an employee.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>4. Cheque Bounce Cases:</strong> When a cheque issued by a debtor is returned by the bank for reasons like insufficient funds. Here, a notice is a mandatory legal requirement under Section 138 of the NI Act.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>5. Breach of Commercial Contracts:</strong> Any situation where a party has failed to make a payment stipulated in a signed agreement.
                  </li>
                </ul>
                <p>
                  In each of these cases, the goal is the same: to create a formal record of your demand. A verbal request or a casual WhatsApp message might be easily ignored, but a <strong>legal notice for recovery of money</strong> creates a sense of urgency and seriousness that is hard for the debtor to overlook.
                </p>
                <p>
                  It is important to remember that the debt must be "legally enforceable." This means that the transaction should ideally be backed by some form of evidence, whether it is a written agreement, bank transfer records, or even email correspondence confirming the debt. Even in cases of informal loans, digital footprints often provide enough ground for a successful legal demand.
                </p>
              </div>

              <h2 id="legal-framework" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Legal Framework for Money Recovery in India</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The process of recovering money in India is governed by a set of well defined laws. Understanding these helps you choose the right path for your specific situation.
                </p>
                <p>
                  <strong>1. The Code of Civil Procedure (CPC), 1908:</strong> This is the backbone of civil litigation. Under Order 37 of the CPC, you can file a "Summary Suit." This is a faster way to recover money because it limits the defendant's ability to prolong the trial with frivolous defenses. It is particularly effective for recovery based on bills of exchange, promissory notes, or written contracts.
                </p>
                <p>
                  <strong>2. The Negotiable Instruments Act, 1881:</strong> As mentioned earlier, Section 138 of this act deals with cheque bounce cases. It is a criminal provision, meaning that a conviction can lead to imprisonment. The fear of a criminal record often makes this the fastest route for money recovery when a cheque is involved.
                </p>
                <p>
                  <strong>3. The Limitation Act, 1963:</strong> This law sets the expiration date for your legal rights. For most money recovery cases, the limitation period is three years. This means you must initiate legal action within three years of the date the money became due. Once this period passes, your debt might become legally unrecoverable.
                </p>
                <p>
                  <strong>4. The Insolvency and Bankruptcy Code (IBC), 2016:</strong> For larger corporate debts, the IBC provides a mechanism to initiate insolvency proceedings against a company that fails to pay its dues. This is a very powerful tool used by "operational creditors" to recover their money from defaulting companies.
                </p>
              </div>

              <h2 id="essential-components" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">What Makes a Recovery Notice Effective?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  A <strong>legal notice for recovery of money</strong> must be drafted with precision. Any ambiguity or error can be exploited by the debtor later in court. Here are the essential components that every notice should contain:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Clear Identification of Parties:</strong> Full names, addresses, and contact details of both the sender and the debtor.</li>
                  <li><strong>Statement of Facts:</strong> A chronological account of how the debt arose. Mention dates, agreement numbers, and transaction details.</li>
                  <li><strong>The Exact Amount Due:</strong> Be specific about the principal amount and any interest or penalties you are claiming.</li>
                  <li><strong>The Cause of Action:</strong> Clearly state that the debtor has failed to pay despite previous reminders.</li>
                  <li><strong>The Demand:</strong> A formal demand for the payment of the total outstanding amount.</li>
                  <li><strong>The Grace Period:</strong> Provide a specific window (usually 15 to 30 days) for the debtor to pay.</li>
                  <li><strong>The Threat of Action:</strong> A clear warning that failure to comply will result in civil and/or criminal proceedings.</li>
                </ul>
                <p>
                  The tone of the notice should be firm yet professional. It should not contain abusive language or personal attacks, as it will be read by a judge if the case goes to trial. The goal is to appear as a reasonable party that is being forced to take legal steps due to the debtor's non cooperation.
                </p>
                <p>
                  Additionally, it is highly recommended to mention the specific laws under which you intend to take action, such as Section 138 of the NI Act or Order 37 of the CPC. This shows the debtor that you have taken professional legal advice and are prepared for a battle.
                </p>
              </div>

              <h2 id="step-by-step" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Step-by-Step Procedure to Send a Legal Notice</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Sending a <strong>legal notice for recovery of money</strong> is a structured process. Following these steps ensures your notice is legally valid and impactful:
                </p>
                <div className="bg-gray-100 p-6 rounded-2xl">
                  <ol className="list-decimal pl-6 space-y-4">
                    <li>
                      <strong>Consult a Qualified Advocate:</strong> While you can write a notice yourself, having it sent on a lawyer's letterhead carries more authority. A lawyer will also ensure that the legal language is robust.
                    </li>
                    <li>
                      <strong>Gather Evidence:</strong> Compile all documents related to the debt. This includes contracts, bank statements, invoices, and records of previous communications.
                    </li>
                    <li>
                      <strong>Drafting the Notice:</strong> Your lawyer will draft the notice based on the facts provided. Review the draft carefully to ensure every detail is accurate.
                    </li>
                    <li>
                      <strong>Signing the Notice:</strong> Both you and your lawyer should ideally sign the notice to show it is a joint demand.
                    </li>
                    <li>
                      <strong>Dispatch via Registered Post:</strong> Send the notice through Registered Post with Acknowledgement Due (RPAD) or Speed Post. This provides you with an official receipt and tracking proof.
                    </li>
                    <li>
                      <strong>Keep the Proof of Delivery:</strong> Once the notice is delivered, you will receive an acknowledgement card or a tracking report. Save this carefully as it is vital evidence of "service."
                    </li>
                  </ol>
                </div>
                <p>
                  Once the notice is sent, you must wait for the grace period mentioned in the notice to expire. During this time, the debtor might reach out for a settlement or send a reply notice. If they offer a settlement that is acceptable to you, ensure that the terms are documented in a formal "Settlement Agreement" before you withdraw your claim.
                </p>
              </div>

              <h2 id="required-documents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Essential Documents for Building Your Recovery Case</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  In any <strong>legal notice for recovery of money</strong>, your strength lies in your documentation. The debtor might try to deny the existence of the debt, so you must be prepared with proof. Here are the documents you should keep handy:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Loan Agreements or Contracts:</strong> Any signed document that outlines the terms of the transaction.</li>
                  <li><strong>Bank Statements:</strong> Proof of the money being transferred from your account to the debtor's account.</li>
                  <li><strong>Promissory Notes:</strong> A written promise by the debtor to pay a certain sum.</li>
                  <li><strong>Invoices and Bills:</strong> Documents showing the delivery of goods or services.</li>
                  <li><strong>Acknowledgement of Debt:</strong> Any letter, email, or message where the debtor has admitted to owing you money.</li>
                  <li><strong>Cheque Return Memos:</strong> If a cheque was involved, the official reason for its bounce.</li>
                </ul>
                <p>
                  Even if you don't have a formal contract, don't lose heart. In modern times, "Electronic Evidence" like emails, SMS, and WhatsApp chats are widely accepted by Indian courts under the Evidence Act. If a debtor has acknowledged the debt in a chat or promised to pay by a certain date in an email, that can be a very strong piece of evidence in your favor.
                </p>
              </div>

              <h2 id="benefits" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Strategic Benefits of a Professional Legal Notice</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Sending a <strong>legal notice for recovery of money</strong> through a professional service like CredSettle offers several advantages that can significantly improve your chances of recovery.
                </p>
                <p>
                  <strong>First</strong>, it acts as a final warning. Many debtors ignore casual reminders but take immediate action when they receive a formal notice from a law firm. It shows them that you are no longer willing to wait and are ready to take the matter to court.
                </p>
                <p>
                  <strong>Second</strong>, it creates a paper trail. If you later decide to file a lawsuit, the legal notice serves as proof that you gave the debtor a fair chance to settle the matter. This helps establish your "bona fides" or good faith in front of the judge.
                </p>
                <p>
                  <strong>Third</strong>, it is cost effective. A legal notice costs a fraction of what a full blown lawsuit would. If the notice leads to a settlement, you save thousands in court fees and lawyer charges for multiple hearings.
                </p>
                <p>
                  <strong>Fourth</strong>, it clarifies the issues. Drafting a notice requires you to organize your facts and evidence. This clarity is extremely helpful if the matter eventually moves to a court of law.
                </p>
              </div>

              <h2 id="replying-to-notice" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">What if You Receive a Recovery Notice?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Sometimes, you might find yourself on the other side of a <strong>legal notice for recovery of money</strong>. If you receive such a notice, the most important rule is: <strong>Do not ignore it.</strong>
                </p>
                <p>
                  Ignoring a legal notice can be seen as an admission of the facts stated in it. It gives the sender a clear path to file a case against you. Instead, you should:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Read it Carefully:</strong> Understand the claims being made and the evidence being cited.</li>
                  <li><strong>Verify the Facts:</strong> Check your own records to see if the amount being claimed is accurate.</li>
                  <li><strong>Consult an Advocate:</strong> Get a professional to draft a "Reply Notice." In this reply, you can dispute the facts, claim that the debt has already been paid, or raise other valid defenses.</li>
                  <li><strong>Seek a Settlement:</strong> If you do owe the money but are facing financial hardship, use the reply to propose a settlement plan or request more time.</li>
                </ul>
                <p>
                  A well drafted reply can often stop a potential lawsuit in its tracks by highlighting flaws in the sender's claim or by opening the door for a mutually beneficial compromise.
                </p>
              </div>

              <h2 id="limitation-period" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Importance of the Three-Year Limitation Rule</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The Limitation Act of 1963 is a critical factor in every <strong>legal notice for recovery of money</strong>. The law believes that legal disputes should not hang over people's heads indefinitely. Therefore, it sets a strict timeline of three years for money recovery.
                </p>
                <p>
                  This three year clock starts from the "date of cause of action." For example, if you lent money that was supposed to be returned on January 1, 2023, you have until January 1, 2026, to file a suit. If you wait until February 2026, the court will likely dismiss your case as being "barred by limitation."
                </p>
                <p>
                  However, there is a way to "reset" this clock. If the debtor makes a partial payment or sends a written acknowledgement of the debt (like an email saying "I will pay you soon"), the three year period starts fresh from that date. This is why getting a written acknowledgement is a common strategy used by recovery experts to keep a claim alive.
                </p>
              </div>

              <h2 id="court-action" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Moving to Court: What Happens After the Notice Period?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  If the debtor fails to respond or pay after receiving the <strong>legal notice for recovery of money</strong>, the next step is to initiate court proceedings. Depending on the nature of your claim, you have several options:
                </p>
                <p>
                  <strong>Civil Suit for Recovery:</strong> This is a regular lawsuit where the court will hear both sides, examine evidence, and pass a decree. If you win, you get a "money decree" which can then be executed by attaching the debtor's properties or bank accounts.
                </p>
                <p>
                  <strong>Summary Suit (Order 37):</strong> As mentioned, this is a faster version of a civil suit. If the debtor cannot provide a "triable defense," the court can pass a judgment in your favor very quickly. This is ideal for cases with clear documentary proof.
                </p>
                <p>
                  <strong>Criminal Complaint (Section 138):</strong> If a cheque was involved, you can file a criminal case in the Magistrate's court. This puts the debtor at risk of imprisonment, which is often the strongest motivation for them to pay.
                </p>
                <p>
                  <strong>Arbitration:</strong> If your original agreement had an "Arbitration Clause," you can skip the regular courts and resolve the matter through an arbitrator. This is usually faster and more private than traditional litigation.
                </p>
              </div>

              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Success Stories from Our Clients</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "I had given a personal loan to a relative, and they stopped answering my calls. CredSettle helped me draft a very respectful yet firm legal notice. Within two weeks, I received the first installment of my money back. Truly grateful!"
                  </p>
                  <p className="font-bold text-blue-900">- Amit Sharma, Delhi</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "Our business was facing a major cash flow crisis because of unpaid invoices from a large distributor. The legal notice from CredSettle's partner lawyers prompted their board to settle all dues with interest. Professional and effective."
                  </p>
                  <p className="font-bold text-blue-900">- Priya Verma, Mumbai</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "I was wrongly served a legal notice for a debt I had already settled. CredSettle helped me draft a strong reply notice with all the payment proofs. The other party withdrew their claim immediately. Excellent support."
                  </p>
                  <p className="font-bold text-blue-900">- Rahul Khanna, Bangalore</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "The team at CredSettle is very knowledgeable about the limitation period rules. They helped me recover a three year old debt by finding an acknowledgement email that I had completely forgotten about. Highly recommended for complex cases."
                  </p>
                  <p className="font-bold text-blue-900">- Sunita Rao, Hyderabad</p>
                </div>
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
                  <h2 className="text-3xl font-bold mb-4">Don't Let Your Money Fade Away</h2>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Take the first step towards recovery today. Our experts are ready to help you draft a powerful legal notice that gets results.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Start Your Recovery Process
                  </Link>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-800 rounded-full -ml-16 -mb-16 opacity-50"></div>
              </div>

            </article>
          </div>

          {/* Right Column: CTA & Related Pages */}
          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              
              {/* Main Sidebar CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-xl text-white">
                <h4 className="font-bold text-2xl mb-4">Recover Your Dues Now</h4>
                <p className="text-blue-100 mb-6 text-sm">Facing non payment? A formal legal notice can recover up to 80% of debts without court visits.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-white text-blue-700 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-md"
                >
                  Get Legal Help
                </Link>
                <div className="mt-8 pt-6 border-t border-blue-500/30 space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Expert Legal Drafting</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Verified Delivery Proof</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Strategic Recovery Planning</span>
                  </div>
                </div>
              </div>

              {/* Helpful Resources Section */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">Helpful Resources</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Loan Settlement Guide</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/can-bank-file-case-for-personal-loan" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Bank Case FAQ</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/rbi-rules-for-recovery-agents" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">RBI Recovery Rules</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-handle-recovery-agent-harrasment" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Handle Agent Harassment</span>
                    </Link>
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
