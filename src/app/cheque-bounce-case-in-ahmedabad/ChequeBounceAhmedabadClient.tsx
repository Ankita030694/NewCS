'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ChequeBounceAhmedabadClient() {
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
    { id: 'section-138', label: 'Section 138 NI Act' },
    { id: 'reasons', label: 'Dishonour Reasons' },
    { id: 'legal-notice', label: 'Legal Notice Role' },
    { id: 'timeline', label: 'Case Timeline' },
    { id: 'jurisdiction', label: 'Jurisdiction & Courts' },
    { id: 'compensation', label: 'Interim Compensation' },
    { id: 'documents', label: 'Required Documents' },
    { id: 'advocate', label: 'Choosing an Advocate' },
    { id: 'reviews', label: 'Client Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'What is the first thing I should do if a cheque bounces in Ahmedabad?',
      answer: 'Immediately obtain the "Cheque Return Memo" from your bank. This is your primary evidence. Then, consult an Ahmedabad cheque bounce lawyer to draft and send a legal notice within 30 days of receiving that memo.'
    },
    {
      question: 'Which court in Ahmedabad handles cheque bounce cases?',
      answer: 'Most cases are handled by the Metropolitan Magistrate Court in Gheekanta. If the case involves a smaller town near Ahmedabad, it might go to a Judicial Magistrate First Class (JMFC) in those specific jurisdictions.'
    },
    {
      question: 'Can I file a case if the signature on the cheque is different?',
      answer: 'Yes. The Supreme Court has clarified that a signature mismatch is a valid ground for a Section 138 case, provided the underlying debt is legitimate. It is treated similarly to "insufficient funds".'
    },
    {
      question: 'How long does a 138 case take in Ahmedabad courts?',
      answer: 'While the law suggests a 6-month resolution, the practical timeline in busy courts like Gheekanta is usually 1 to 2 years. However, the 20% interim compensation can be secured much earlier, often within 3-6 months.'
    },
    {
      question: 'What happens if the person who issued the cheque stays outside Ahmedabad?',
      answer: 'You can still file the case in Ahmedabad if your bank branch (where you deposited the cheque) is located in Ahmedabad. This "Payee-centric" jurisdiction is a major advantage for local residents.'
    },
    {
      question: 'Is a cheque bounce a bailable or non-bailable offense?',
      answer: 'It is a bailable offense. However, if the accused fails to appear in court after multiple summons, the court will issue a Non-Bailable Warrant (NBW), which can lead to arrest.'
    },
    {
      question: 'Can a company, and not just an individual, be sued for a bounced cheque?',
      answer: 'Yes. Under Section 141 of the NI Act, the company and the persons in charge of its affairs (directors, managers) at the time of the offence can be held liable.'
    },
    {
      question: 'Can I settle the case out of court after filing?',
      answer: 'Yes, Section 138 is a "compoundable" offence. You can settle at any stage of the trial if both parties agree. Ahmedabad courts often refer such cases to Lok Adalats for faster settlement.'
    },
    {
      question: 'What if I missed the 30-day deadline for the legal notice?',
      answer: 'The criminal remedy under Section 138 becomes unavailable if you miss the statutory deadlines. However, you may still be able to file a civil suit for money recovery within 3 years, though this is a slower process.'
    },
    {
      question: 'Does a "Stop Payment" instruction protect the drawer from a case?',
      answer: 'No. In fact, if the drawer issues a stop-payment without a valid reason (like theft of the cheque), it is often viewed by the court as an admission of their inability to pay, strengthening your case.'
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
                    Cheque Bounce Case in Ahmedabad
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
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28 italic-none">Navigating Cheque Bounce Cases in Ahmedabad: A Comprehensive Legal Guide</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  Ahmedabad, the financial powerhouse of Gujarat, thrives on commerce and trade. From the traditional markets of Manek Chowk to the modern business hubs along SG Highway, the flow of credit and payments is constant. However, this commercial vibrancy often leads to disputes, specifically those involving the dishonour of cheques. If you are dealing with a <strong>cheque bounce case in Ahmedabad</strong>, you are part of a legal landscape that is both fast-paced and technically demanding. A bounced cheque is more than a financial hurdle; it is a breach of trust and a violation of the law under Section 138 of the Negotiable Instruments Act, 1881.
                </p>
                <p>
                  In the courts of Ahmedabad, whether it is the Metropolitan Magistrate Court in Gheekanta or the District Court in Mirzapur, cheque bounce litigation is one of the most common types of legal proceedings. The law recognizes that for businesses to function, the sanctity of a cheque must be maintained. This is why the legal framework provides for criminal penalties, including imprisonment and heavy fines, for those who issue cheques without the intent or means to honour them.
                </p>
                <p>
                  Navigating the legal system in Gujarat requires more than just a passing knowledge of the law. It requires an understanding of local court procedures, the specific requirements of Ahmedabad magistrates, and the strategic timing of legal notices. This comprehensive guide aims to demystify the process for payees who have been wronged and provide a clear roadmap for recovery. From the moment the bank returns your cheque with a memo, the clock starts ticking. Understanding your rights and responsibilities is the first step toward a successful legal resolution.
                </p>
              </div>

              <h2 id="section-138" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4 italic-none">Legal Foundation: Section 138 of the Negotiable Instruments Act in Gujarat</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The Negotiable Instruments Act of 1881 governs the use of cheques, promissory notes, and bills of exchange in India. Section 138 is the specific provision that deals with the "dishonour of cheque for insufficiency, etc., of funds in the account." In Ahmedabad, this law is applied strictly to ensure that cheques remain a reliable medium of exchange. The primary objective is to punish the dishonest drawer and provide a speedy remedy for the payee.
                </p>
                <p>
                  For a transaction to fall under the umbrella of Section 138, certain legal criteria must be met. The cheque must have been issued for the discharge of a "legally enforceable debt." This is a crucial distinction in Ahmedabad courts; if a cheque was given as a gift, for charity, or as a security without an underlying debt, it may not qualify for criminal prosecution under this section. The burden of proof often lies on the drawer to rebut the presumption that the cheque was issued for a valid debt, but the payee must be prepared with invoices, contracts, or ledger statements to support their claim.
                </p>
                <p>
                  The punishment for a proven offence under Section 138 is rigorous. The court can sentence the accused to imprisonment for up to two years, impose a fine that is up to twice the amount of the cheque, or both. This criminal classification makes cheque bounce cases more effective than standard civil recovery suits, which can take significantly longer to resolve. In the judicial environment of Gujarat, where business efficiency is highly valued, the courts strive to dispose of these matters through summary trials, although the high volume of cases can still lead to delays. Understanding these foundations is essential before initiating any legal action.
                </p>
              </div>

              <h2 id="reasons" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4 italic-none">Common Reasons for Cheque Dishonour in Ahmedabad Banks</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  When a bank in Ahmedabad, such as SBI, Bank of Baroda, or HDFC, refuses to honour a cheque, it issues a "Cheque Return Memo." This document is the primary evidence for your case. While "insufficient funds" is the most frequent reason, several other grounds can trigger a Section 138 proceeding. In the busy banking sector of Gujarat, understanding these reasons is vital for your legal strategy.
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>1. Funds Insufficient:</strong> The most straightforward case where the account balance is less than the cheque amount. This is the classic 138 scenario.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>2. Account Closed:</strong> If the drawer closes the account after issuing the cheque, it is often seen by Ahmedabad courts as a deliberate attempt to defraud.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>3. Stop Payment:</strong> The drawer instructs the bank not to pay. Unless the drawer can prove a valid reason for the stop-payment (like a lost cheque or a failed service), this is actionable under Section 138.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>4. Signature Mismatch:</strong> While technical, the Supreme Court and Gujarat High Court have held that a signature mismatch is equivalent to "insufficient funds" if it leads to dishonour.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>5. Referral to Drawer:</strong> A general term indicating the bank cannot process the cheque, often due to a lack of funds or frozen accounts.
                  </li>
                </ul>
                <p>
                  Regardless of the technical reason, the impact on the payee is the same: the money is not received. In Ahmedabad, payees often make the mistake of re-presenting the cheque multiple times at the drawer's request. While this is legal within the cheque's three-month validity, it often serves as a delay tactic. It is generally advisable to act at the first instance of dishonour or at least before the validity period expires.
                </p>
              </div>

              <h2 id="legal-notice" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4 italic-none">The Critical Role of the Legal Notice</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The legal notice is the most important document in a <strong>cheque bounce case in Ahmedabad</strong>. It is the prerequisite for filing a criminal complaint. If the notice is not sent, or if it is sent improperly, your entire case can be dismissed on technical grounds before it even begins. Under Section 138, the payee must send a formal demand notice to the drawer within 30 days of receiving the cheque return memo from the bank.
                </p>
                <p>
                  In Ahmedabad, where legal tradition is deep-rooted, a professionally drafted notice holds significant weight. The notice must clearly state:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The details of the transaction that led to the issuance of the cheque.</li>
                  <li>The details of the cheque itself (number, date, amount).</li>
                  <li>The fact of its dishonour and the reason provided by the bank.</li>
                  <li>A clear demand for the payment of the cheque amount.</li>
                  <li>A 15-day grace period for the drawer to make the payment.</li>
                </ul>
                <p>
                  The 15-day window is a statutory requirement. If the drawer pays the full amount within these 15 days, no offence is committed. This period is intended to protect honest drawers who might have made a genuine mistake. However, if the payment is not received by the 16th day after the notice is delivered, the "cause of action" arises. 
                </p>
                <p>
                  The method of sending the notice is also critical. In Ahmedabad, it is standard practice to use Registered Post with Acknowledgement Due (RPAD) or Speed Post. The "Acknowledgement Card" or the online tracking report from the postal department serves as evidence of receipt. In recent years, Gujarat courts have also begun accepting digital service via WhatsApp and email as valid supplementary modes, provided the delivery can be proven. A well-crafted notice from a reputed law firm often prompts a settlement, as drawers in the Ahmedabad business community are generally wary of the stigma and consequences of a criminal trial.
                </p>
              </div>

              <h2 id="timeline" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4 italic-none">Timeline and Procedure for Filing in Ahmedabad Courts</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Precision is the hallmark of a successful <strong>cheque bounce case in Ahmedabad</strong>. The law imposes strict deadlines that cannot be ignored. Here is the step-by-step procedural timeline:
                </p>
                <div className="bg-gray-100 p-6 rounded-2xl">
                  <ol className="list-decimal pl-6 space-y-4">
                    <li>
                      <strong>Step 1: Receipt of Return Memo</strong> - The 30-day clock for the legal notice starts.
                    </li>
                    <li>
                      <strong>Step 2: Sending the Notice</strong> - Must be done within those 30 days via Registered Post.
                    </li>
                    <li>
                      <strong>Step 3: Delivery of Notice</strong> - The 15-day grace period for the drawer starts from the date they receive the notice.
                    </li>
                    <li>
                      <strong>Step 4: The Filing Window</strong> - If the 15 days pass without payment, you have exactly 30 days to file the criminal complaint in court.
                    </li>
                  </ol>
                </div>
                <p>
                  In Ahmedabad, the complaint is filed in the Metropolitan Magistrate Court. After filing, the Magistrate will examine the complaint and the accompanying documents. If everything is in order, the Magistrate will record the "verification statement" of the complainant. This is a critical stage in the Gheekanta courts, where the judge ensures there is a prima facie case.
                </p>
                <p>
                  Once the court is satisfied, it issues a "Summons" to the accused. If the accused fails to appear after the summons, the court can issue "Bailable Warrants" and eventually "Non-Bailable Warrants." The Ahmedabad police are then responsible for producing the accused in court. The trial then proceeds through the stages of framing charges, evidence, cross-examination, and finally, the judgment. While the law suggests that these cases should be resolved within six months, the reality of court backlogs means it often takes longer.
                </p>
              </div>

              <h2 id="jurisdiction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4 italic-none">Jurisdiction: Where to File Your Case in Ahmedabad?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  One of the most common questions from payees in Gujarat is, "Where exactly should I file my case?" Before 2015, there was significant confusion regarding jurisdiction, often requiring payees to travel to the drawer's city. However, following a landmark amendment, the rules were simplified to favor the payee.
                </p>
                <p>
                  In a <strong>cheque bounce case in Ahmedabad</strong>, jurisdiction is determined by:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Where the Payee has an Account:</strong> If you deposit the cheque for collection through your own bank account, the case must be filed in the court within whose local jurisdiction your bank branch is located.</li>
                  <li><strong>Where the Cheque is Presented Over the Counter:</strong> If you present the cheque directly at the drawer's bank, the case is filed in the court where that branch is located.</li>
                </ul>
                <p>
                  For most businesses and individuals in Ahmedabad, this means you can file the case in the court nearest to your own bank. If your bank is in Navrangpura, Satellite, or Maninagar, your case will likely be heard in the Metropolitan Magistrate Court in the Gheekanta court complex. This change has been a major relief for the Ahmedabad business community. It prevents drawers from using distance as a defense and allows local creditors to seek justice more conveniently.
                </p>
              </div>

              <h2 id="compensation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4 italic-none">Interim Compensation: Relief During the Trial</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  A frequent frustration for victims of cheque bounce in Ahmedabad is the duration of the trial. While criminal prosecution is a deterrent, it does not immediately put money back into the payee's pocket. To address this, the Negotiable Instruments Act was amended in 2018 to include Section 143A. This provision allows the Ahmedabad Magistrate to order the drawer to pay "interim compensation" to the complainant.
                </p>
                <p>
                  This interim compensation can be up to 20% of the cheque amount. It is usually ordered when the drawer pleads "not guilty" at the stage of framing charges. The drawer must pay this amount within 60 days of the court's order. In the commercial environment of Gujarat, Section 143A has become a powerful tool. It provides immediate financial relief and acts as a litmus test for the drawer's intent. If a drawer is unwilling or unable to pay even 20% of the disputed amount, it often encourages the court to take a stricter view of their defense.
                </p>
                <p>
                  On the other hand, if the drawer is eventually acquitted, the complainant must return the interim compensation with interest. However, in most legitimate debt recovery scenarios, this provision significantly increases the pressure on the accused to settle the matter early in the trial process.
                </p>
              </div>

              <h2 id="documents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4 italic-none">Necessary Documentation for a Strong Case</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  In the courts of Ahmedabad, your case is only as strong as your paperwork. When you approach a specialist in <strong>cheque bounce cases in Ahmedabad</strong>, they will first ask for your "case file." Ensure you have the following originals and copies:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>The Original Bounced Cheque:</strong> The most vital piece of evidence.</li>
                  <li><strong>The Bank Return Memo:</strong> Original copy showing the date and reason for dishonour.</li>
                  <li><strong>The Office Copy of the Legal Notice:</strong> The exact document that was dispatched.</li>
                  <li><strong>Original Postal Receipts:</strong> Proof that the notice was sent within the 30-day window.</li>
                  <li><strong>The Acknowledgment Due (AD) Card:</strong> Proof of delivery or online tracking report.</li>
                  <li><strong>Documentary Proof of Debt:</strong> Invoices, purchase orders, or loan agreements.</li>
                </ul>
                <p>
                  For company-related cases in areas like GIDC Vatwa or SG Highway, you will also need a "Board Resolution" or a "Power of Attorney" authorizing a specific person to sign the complaint and testify. In Ahmedabad's busy legal atmosphere, having these documents categorized and ready for filing will save you significant time and ensure that your advocate can focus on the legal arguments.
                </p>
              </div>

              <h2 id="advocate" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4 italic-none">Choosing a Specialist Ahmedabad Advocate Matters</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  While many general lawyers offer services for cheque bounce, choosing a specialist is critical for success in Ahmedabad. The Section 138 procedure is a "Summary Trial," which follows a distinct set of rules compared to standard criminal or civil cases. An expert advocate who regularly practices in the Mirzapur and Gheekanta courts will have an edge.
                </p>
                <p>
                  A specialized lawyer understands the nuances of cross-examination in these cases. They know how to challenge a drawer's defense of "lost cheque" or "signed blank cheque," which are commonly used tactics in Gujarat courts. Furthermore, a local specialist will be familiar with the recent judgments of the Gujarat High Court that have shaped how Section 138 is interpreted in the state.
                </p>
                <p>
                  At CredSettle, we understand the unique challenges of the Ahmedabad legal landscape. We bridge the gap between you and the most effective legal professionals in the city. Our partners don't just focus on the criminal trial; they focus on the "Recovery." Whether it's through the pressure of a Section 138 case, the filing of a parallel civil recovery suit, or negotiating a settlement through a Lok Adalat, we aim for the most efficient path to your financial restoration.
                </p>
              </div>

              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4 italic-none">Client Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">★★★★★</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "CredSettle team was amazing. They handled my cheque bounce case in Gheekanta Court perfectly. Recovered the full amount from a tricky debtor in just few hearings."
                  </p>
                  <p className="font-bold text-blue-900">- Chirag Shah, Ahmedabad</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">★★★★★</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "Very professional approach. The legal notice they sent was enough to make the drawer pay within 15 days. Saved me from a long legal battle. Best Section 138 experts in Gujarat."
                  </p>
                  <p className="font-bold text-blue-900">- Megha Patel, Satellite</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">★★★★★</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "I was worried about the court process, but their advocate in Mirzapur made it very simple. They even got the 20% interim compensation ordered quickly. Top class service."
                  </p>
                  <p className="font-bold text-blue-900">- Hardik Prajapati, Ahmedabad</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">★★★★★</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "Reliable and efficient. They handle all our corporate cheque bounce issues with great success. Highly recommended for business owners in Ahmedabad."
                  </p>
                  <p className="font-bold text-blue-900">- V. K. Enterprises, GIDC Vatwa</p>
                </div>
              </div>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4 italic-none">Frequently Asked Questions</h2>
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
                  <h2 className="text-3xl font-bold mb-4 italic-none">Ready to Recover Your Money?</h2>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Don't let a cheque bounce stop your business. Get in touch with Ahmedabad's top Section 138 legal experts today.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Start Your Recovery Process Now
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
                <h4 className="font-bold text-2xl mb-4 italic-none">Urgent Recovery Help</h4>
                <p className="text-blue-100 mb-6 text-sm">Did your cheque bounce recently? The 30-day clock is ticking in Gujarat. Act now!</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-white text-blue-700 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-md"
                >
                  Request Consultation
                </Link>
                <div className="mt-8 pt-6 border-t border-blue-500/30 space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>15-Minute Response Time</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Verified Ahmedabad Lawyers</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Hassle-Free Documentation</span>
                  </div>
                </div>
              </div>

              {/* Related Pages Component */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg italic-none">Related Services</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/loan-settlement" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Loan Settlement Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-is-npa" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">NPA Resolution Guide</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cheque-bounce-lawyer" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Cheque Bounce Experts</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/gujarat" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Debt Relief in Gujarat</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <p className="text-xs text-gray-500 italic">
                  Legal Disclaimer: The information provided on this page is for general awareness only in Ahmedabad and does not constitute legal advice. Please consult a qualified advocate for your specific Section 138 case.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
