'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ChequeBounceClient() {
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
    { id: 'section-138-ni-act', label: 'Section 138 Explained' },
    { id: 'legal-process', label: 'Legal Process Steps' },
    { id: 'defenses-available', label: 'Strong Legal Defenses' },
    { id: '2025-amendments', label: 'latest 2025 Updates' },
    { id: 'role-of-lawyer', label: 'Role of Experts' },
    { id: 'court-fees-costs', label: 'Fees & Costs' },
    { id: 'settlement-options', label: 'Settlement Options' },
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
      question: "Is a cheque bounce case a criminal offense in India?",
      answer: "Yes, under Section 138 of the Negotiable Instruments Act, 1881, dishonest dishonour of a cheque is a criminal offense. If convicted, the accused can face imprisonment for up to 2 years, or a fine which may extend to twice the amount of the cheque, or both."
    },
    {
      question: "Can I settle a cheque bounce case out of court?",
      answer: "Absolutely. Cheque bounce cases are 'compoundable' offenses. This means the complainant and the accused can agree to a settlement at any stage of the trial. Once the settlement amount is paid, the court will acquit the accused and close the case."
    },
    {
      question: "What is the time limit to file a cheque bounce case?",
      answer: "You must send a legal notice within 30 days of receiving the cheque return memo from the bank. If the drawer fails to pay within 15 days of receiving the notice, you must file the complaint in court within the next 30 days (extended to 3 months under 2025 amendments)."
    },
    {
      question: "What if I lost the original cheque? Can I still file a case?",
      answer: "Filing a Section 138 case generally requires the original cheque. However, if the cheque is lost after dishonour, you may be able to proceed by filing an FIR for the lost document and using secondary evidence, though this complicates the legal battle significantly."
    },
    {
      question: "Can notice be sent via WhatsApp or Email?",
      answer: "Yes, recent amendments and supreme court judgments have recognized specific digital modes like Email and WhatsApp as valid service of legal notice, provided you can prove the delivery (blue ticks or read receipts) in court."
    },
    {
      question: "Does the court require me to pay interim compensation?",
      answer: "Yes, under the newly inserted Section 143A, the court can order the accused to pay up to 20% of the cheque amount as interim compensation to the complainant while the trial is still pending. This must be paid within 60 days of the court's order."
    },
    {
      question: "Can a director be held liable for a company's bounced cheque?",
      answer: "Yes. Under Section 141 of the NI Act, every person who was in charge of and responsible to the company for the conduct of its business at the time the offense was committed can be held vicariously liable and prosecuted along with the company."
    },
    {
      question: "What defenses can save me in a cheque bounce case?",
      answer: "Common defenses include: the cheque was for security and not a debt, the debt is time-barred, the legal notice was not served correctly, or the cheque was lost/stolen and misused. A skilled lawyer can analyze facts to build a strong defense strategy."
    },
    {
      question: "How long does a cheque bounce case take to resolve?",
      answer: "Historically, cases took years. However, new 2025 rules mandate that Magistrates should endeavor to conclude the trial within 6 months. Summary trials are preferred to expedite the process."
    },
    {
      question: "Why do I need a specialized Cheque Bounce Lawyer?",
      answer: "Procedural technicalities in Section 138 cases are strict. A slight delay in filing or a defective notice can get your case dismissed. A specialized lawyer ensures compliance with timelines, drafts robust notices, and handles complex cross-examinations to secure a conviction or acquittal."
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
                  <Link href="/services" className="ml-1 font-medium text-gray-700 hover:text-blue-600 md:ml-2">
                    Services
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    Cheque Bounce Lawyer
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
              
              <h2 id="section-138-ni-act" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Expert Cheque Bounce Lawyers in India: Defend Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                A cheque is more than just a piece of paper; it is a promise of payment. When that promise is broken, it disrupts business trust and personal dignity. In India, the law treats this breach very seriously. Under Section 138 of the Negotiable Instruments Act, 1881, the dishonour of a cheque for insufficiency of funds is a criminal offense, not just a civil dispute.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Whether you are a payee waiting for your hard earned money or a drawer who has been falsely accused or is facing genuine financial hardship, navigating the legal corridors of a Section 138 case requires specialized expertise. The outcome of these cases often hinges on technical details: the validity of the notice, the legality of the debt, and strict adherence to timelines.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                At CredSettle, our network of specialized Cheque Bounce Lawyers brings decades of experience to the table. We don't just file cases; we build legal strategies designed to secure the fastest possible relief, be it recovery of your money or acquittal from false charges.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">Did You Know?</h4>
                <p className="text-blue-800 m-0">
                  Mere bouncing of a cheque is not an offense. The offense is committed only when the drawer fails to pay the money within 15 days of receiving a formal Legal Demand Notice. This 15 day window is your critical opportunity for settlement.
                </p>
              </div>

              <h2 id="legal-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Step-by-Step Legal Process</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Understanding the legal lifecycle of a cheque bounce case is vital to avoid panic and make informed decisions. Here is the chronological workflow mandated by Indian law.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex bg-gray-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">1</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Presentation & Dishonour</h4>
                    <p className="text-gray-700">The cheque is presented to the bank within 3 months of issue. The bank returns it unpaid with a "Return Memo" stating reasons like "Funds Insufficient" or "Account Closed".</p>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">2</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Legal Demand Notice</h4>
                    <p className="text-gray-700">This is the most critical step. The payee MUST send a legal notice to the drawer within 30 days of receiving the Return Memo. The notice must demand the exact cheque amount.</p>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">3</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">15-Day Waiting Period</h4>
                    <p className="text-gray-700">The law grants the drawer a grace period of 15 days from the receipt of notice to make the payment and avoid criminal liability.</p>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">4</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Filing the Complaint</h4>
                    <p className="text-gray-700">If payment is not made, a criminal complaint must be filed before the Magistrate within 30 days (now extendable to 3 months) after the 15 day period expires.</p>
                  </div>
                </div>
                <div className="flex bg-gray-50 p-4 rounded-lg">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">5</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Summons & Evidence</h4>
                    <p className="text-gray-700">The court issues summons to the accused. If they appear, plea is recorded. Evidence is led by way of affidavit. Cross examination follows.</p>
                  </div>
                </div>
              </div>

              <h2 id="defenses-available" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Strong Legal Defenses for the Accused</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Being accused doesn't mean being convicted. There are several robust defenses available under the law that can lead to acquittal if argued correctly by an expert lawyer.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">1. Security Cheque Defense</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                If the cheque was given as a security deposit (e.g., for a dealership or rental) and not for the discharge of an existing debt, Section 138 may not apply. Establishing that the debt was not "due" on the date of the cheque is a key defense strategy.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">2. Time Barred Debt</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                A cheque issued to repay a time barred debt (a debt older than 3 years which has not been acknowledged in writing) cannot be legally enforced under Section 138. The underlying liability must be legally enforceable.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3">3. Defective Legal Notice</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Technical errors can win cases. If the legal notice did not give full 15 days time, demanded an amount different from the cheque amount (e.g., adding interest/penalty to the principal demand), or was sent after the 30 day limit, the complaint itself becomes invalid.
              </p>

              <h2 id="2025-amendments" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Key 2025 Amendments You Must Know</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The landscape of cheque bounce litigation has evolved significantly with recent amendments and Supreme Court directives aimed at speedy justice.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                 <li>**Extended Filing Time:** Complainants now have up to 3 months (previously 30 days) to file a complaint after the cause of action arises, giving more time to arrange documents.</li>
                 <li>**Interim Compensation (Section 143A):** Courts can now order the accused to pay 20% of the cheque amount to the complainant *during* the trial itself. This is a game changer for recovery.</li>
                 <li>**Digital Notice Validity:** Service of legal notice via Email and WhatsApp is now legally valid, preventing accused parties from evading summons by locking their houses.</li>
                 <li>**E Filing:** Mandatory electronic filing of cases in many states to reduce physical paperwork and court visits.</li>
              </ul>

              <h2 id="role-of-lawyer" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">How CredSettle Lawyers Help You</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Whether you are the victim of a bounced cheque or facing a case, having the right legal counsel is non negotiable. Our specialized team offers:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-blue-600 font-bold mb-2">For Complainants (Payees)</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✓ Drafting precise Legal Notices.</li>
                    <li>✓ Tracing the accused's assets.</li>
                    <li>✓ Filing Interim Compensation applications.</li>
                    <li>✓ Fast tracking the trial for quick recovery.</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-blue-600 font-bold mb-2">For Accused (Drawers)</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✓ Analysis of notice defects.</li>
                    <li>✓ Representation for bail and exemption.</li>
                    <li>✓ Negotiating out of court settlements.</li>
                    <li>✓ Quashing false FIRs in High Court.</li>
                  </ul>
                </div>
              </div>

              <h2 id="court-fees-costs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Understanding Court Fees & Costs</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Litigation involves financial planning. The court fee for filing a cheque bounce case varies by state and cheque amount.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg text-sm">
                  <thead className="bg-gray-50 border-b">
                     <tr>
                       <th className="text-left py-3 px-4 font-semibold text-gray-700">Cheque Amount</th>
                       <th className="text-left py-3 px-4 font-semibold text-gray-700">Estimated Court Fee (Approx)</th>
                     </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 text-gray-600">Up to ₹50,000</td>
                      <td className="py-3 px-4 text-gray-600">₹200 - ₹1,000 depending on state</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 text-gray-600">₹50,000 to ₹2 Lakhs</td>
                      <td className="py-3 px-4 text-gray-600">5% of Cheque Amount</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 text-gray-600">Above ₹5 Lakhs</td>
                      <td className="py-3 px-4 text-gray-600">Max Cap applies (e.g., ₹1.5 Lakhs in some states)</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-500 mt-2">*Note: These are indicative figures. Exact fees rely on the jurisdictional Court Fees Act.</p>
              </div>

              <h2 id="settlement-options" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Settlement: The Smart Way Out</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Prolonged litigation benefits no one. The Supreme Court of India encourages settlement in NI Act cases. If you choose to settle, you save on years of legal fees and mental harassment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                If settlement happens at the stage of the appellate court (High Court/Supreme Court), the accused may have to pay a "compounding cost" (10% to 20% of the cheque amount) to the Legal Services Authority. Therefore, **early settlement is always cheaper**. Our lawyers are expert negotiators who can broker a fair deal, ensuring the case is withdrawn immediately upon payment.
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
                <h3 className="text-2xl font-bold mb-4">Facing a Cheque Bounce Case?</h3>
                <p className="mb-8 opacity-90 max-w-2xl mx-auto">Don't ignore the legal notice. Immediate action can save you from criminal conviction. Consult our experts today.</p>
                <Link 
                  href="/contact"
                  className="inline-block bg-white text-blue-700 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all shadow-lg transform hover:-translate-y-1"
                >
                  Get Legal Advice Now
                </Link>
                <p className="mt-4 text-sm opacity-70">Confidential • Expert Defense • Nationwide Network</p>
              </div>

            </article>
          </div>

          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Need a Lawyer?</h4>
                <p className="text-sm text-gray-600 mb-6">Expert legal defense for Section 138 cases.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Consult Now
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>✓ Notice Drafting</p>
                  <p className="mt-1">✓ Court Defense</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Services</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/services/anti-harassment" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Stop Harassment
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/credit-card-settlement" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Card Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/credit-score-builder" className="text-gray-600 hover:text-blue-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      Rebuild Score
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
