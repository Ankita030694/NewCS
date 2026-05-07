'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function MedicalEmergencySettlementClient() {
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
      return `whitespace-nowrap px-1 pb-1 border-b-2 transition-colors duration-200 ${isActive
        ? 'border-blue-600 text-blue-600 font-semibold'
        : 'border-transparent text-gray-600 hover:text-blue-600'
        }`;
    } else {
      return `block transition-all duration-200 pl-3 border-l-2 ${isActive
        ? 'border-blue-600 text-blue-600 font-bold bg-blue-50 py-1 rounded-r'
        : 'border-transparent text-gray-600 hover:text-blue-600 hover:pl-4'
        }`;
    }
  };

  const navLinks = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'legal-foundation', label: 'Legal Foundation' },
    { id: 'rbi-rules', label: 'RBI Hardship Rules' },
    { id: 'harassment', label: 'Harassment Protection' },
    { id: 'patient-rights', label: 'Patient Rights' },
    { id: 'hardship-evidence', label: 'Hardship Evidence' },
    { id: 'relief-options', label: 'Relief Options' },
    { id: 'negotiation', label: 'Negotiation Strategy' },
    { id: 'professional-help', label: 'Professional Help' },
    { id: 'tax-implications', label: 'Tax Implications' },
    { id: 'credit-impact', label: 'Credit Score Impact' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'Can a bank legally reject a settlement request during a medical emergency?',
      answer: 'While banks have the right to recover their funds, the RBI mandates that they must have a board approved policy for "Genuine Hardship" cases. If you provide documented proof of a severe medical crisis and loss of income, the bank is ethically and often policy wise obligated to consider your plea for restructuring or settlement rather than resorting to aggressive recovery.'
    },
    {
      question: 'Is there a specific RBI circular for medical debt relief?',
      answer: 'There is no single "Medical Only" circular, but the 2023 2024 RBI Framework for Compromise Settlements and the Integrated Ombudsman Scheme 2021 provide the foundation. These rules require banks to treat borrowers with empathy during crises like life threatening illnesses or temporary disability.'
    },
    {
      question: 'What documents should I prepare to prove medical hardship to my lender?',
      answer: 'You should gather hospital discharge summaries, surgery notes, consolidated medical bills, pharmacy receipts, and a doctor certificate stating your inability to work. Additionally, bank statements showing the medical expenses and salary slips showing income disruption are vital for the "Hardship Dossier."'
    },
    {
      question: 'Can recovery agents visit my home while I am recovering from surgery?',
      answer: 'The RBI Fair Practices Code strictly prohibits harassment. If you have informed the bank of your medical condition in writing, any intrusive or stressful home visits by agents can be reported as a violation of your Right to Privacy and Dignity. Agents must follow specific timing and behavior guidelines.'
    },
    {
      question: 'Is it better to pause EMIs or settle the loan during a long term illness?',
      answer: 'If the medical condition is temporary, a "Moratorium" or EMI pause is better as it protects your credit score. However, if the crisis has led to a permanent loss of income or total depletion of savings, a "One Time Settlement" (OTS) may be the only way to clear the debt and stop the interest from ballooning.'
    },
    {
      question: 'How much discount can one expect in a medical settlement negotiation?',
      answer: 'Discounts depend on the severity of the crisis and the type of loan. For unsecured credit card or personal loans, banks might waive 30% to 60% of the total dues if the medical evidence is compelling. Secured loans like home loans are harder to settle for a discount but may allow for tenure extensions.'
    },
    {
      question: 'Can a hospital detain me or a family member for unpaid loan or bills?',
      answer: 'No. The High Courts in India have repeatedly ruled that hospitals cannot detain patients or bodies of the deceased over payment disputes. This is a criminal offense. If a hospital attempts this, you should immediately contact the police and seek legal aid.'
    },
    {
      question: 'Will settling my loan for medical reasons still ruin my CIBIL score?',
      answer: 'Yes, the CIBIL score will take a hit because the account will be marked as "Settled" rather than "Closed." However, you can add a "Consumer Statement" to your credit report explaining that the settlement was due to documented medical hardship, which some future lenders may view with more empathy.'
    },
    {
      question: 'Is "Debt Insurance" applicable for medical emergencies?',
      answer: 'Many modern loans come with "Credit Shield" or "Critical Illness" cover. If your medical condition is listed in the policy (such as cancer, heart attack, or permanent disability), the insurance company may be liable to pay off the remaining loan balance.'
    },
    {
      question: 'Can the Banking Ombudsman help if the bank is unfair during my crisis?',
      answer: 'Absolutely. If the bank refuses to follow its own hardship policy or uses illegal recovery tactics while you are unwell, you can file a complaint with the Integrated Ombudsman. This is a free service, and the Ombudsman has the power to penalize the bank for bad faith negotiations.'
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
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    Support for Loan Settlement During Medical Emergencies
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

              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28">Navigating Loan Settlement During Medical Emergencies: A Comprehensive Guide</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  Imagine waking up in a hospital bed, still groggy from a life saving procedure, only to find your phone buzzing with aggressive calls from a collection agency. This is the reality for thousands of Indian borrowers every month. A medical emergency is never just a health crisis; in our current financial ecosystem, it rapidly transforms into a "Debt Trap" that can feel as suffocating as the illness itself. The psychological weight of mounting EMIs while you are fighting for your life or caring for a loved one is a burden that no one should carry alone.
                </p>
                <p>
                  In 2025, the landscape of medical debt in India is at a crossroads. While medical costs have skyrocketed, the regulatory environment has also matured. We are seeing a more compassionate stance from the Reserve Bank of India (RBI), which recognizes that a borrower who defaults due to a sudden hospital bill is vastly different from a "wilful defaulter" who simply refuses to pay. Support for loan settlement during medical emergencies is not just a form of "financial mercy" but a structured right grounded in Indian law and modern banking ethics.
                </p>
                <p>
                  This guide is designed to be your lighthouse during the storm. Whether you are dealing with a personal loan, a credit card bill that spiraled while you were in the ICU, or a home loan that is now at risk because of surgery costs, the information here will empower you. We will dive deep into the legal safeguards that protect you, the RBI guidelines that mandate empathy, and the practical, step by step strategy to negotiate a settlement that respects your reality. Financial health and physical health are deeply intertwined, and reclaiming your financial peace is a vital part of your recovery journey.
                </p>
                <p>
                  We will explore how to build a "Hardship Dossier" that makes your case unignorable for the bank. We will debunk myths about hospital detention and debtor jails. Most importantly, we will provide you with the exact language and legal logic to shift the power dynamic when dealing with lenders. You are not a failure for being sick, and a medical crisis is not a crime. By the end of this analysis, you will have the roadmap to reset your financial world and focus on what truly matters: getting well.
                </p>
              </div>

              <h2 id="legal-foundation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Legal Foundation: Article 21 and the Right to Dignity</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  To understand why you have a right to support during a medical crisis, we must look at the highest law of the land: The Constitution of India. Article 21 guarantees every citizen the "Right to Life and Personal Liberty." The Supreme Court of India has repeatedly interpreted this to include the "Right to live with human dignity" and the "Right to Health." When a lender uses psychological torture, abusive language, or extreme pressure while you are in a vulnerable medical state, they are not just violating banking rules; they are arguably violating your fundamental constitutional rights.
                </p>
                <p>
                  This legal foundation is critical because it gives you leverage. In any negotiation, the "Moral High Ground" is a strategic asset. By reminding a lender that your current inability to pay is a result of a medical catastrophe, you are invoking a level of protection that transcends the fine print of a loan agreement. The courts have often stepped in to protect borrowers whose lives were being endangered by the stress of illegal recovery tactics during illness.
                </p>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6">
                  <h4 className="font-bold text-blue-900 mb-2 text-lg">Key Legal Principles:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Doctrine of Necessity:</strong> Law recognizes that physical survival takes precedence over contractual obligations in extremes.</li>
                    <li><strong>Consumer Protection Act 2019:</strong> Ignoring a genuine medical plea can be seen as an "Unfair Trade Practice."</li>
                    <li><strong>Right against Illegal Detention:</strong> Hospitals cannot detain patients or bodies for unpaid bills.</li>
                  </ul>
                </div>
              </div>

              <h2 id="rbi-rules" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">RBI Hardship Rules: Mandating Empathy in Banking</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The Reserve Bank of India (RBI) is the guardian of the banking system, and its recent mandates have become a shield for the distressed. In 2023 and 2024, the RBI released comprehensive frameworks for "Compromise Settlements" and "Technical Write-offs." These guidelines have been further refined in 2025 to emphasize transparency and fairness. The core message is clear: Banks MUST have a board approved policy for dealing with borrowers who want to settle their debts due to genuine distress.
                </p>
                <p>
                  One of the most important 2025 updates is the <strong>"Hardship Sensitivity Requirement."</strong> Lenders are now encouraged (and in some cases required by the Ombudsman) to analyze the "Cause of Default." If the cause is a catastrophic medical event, the bank is expected to move away from its standard automated recovery path and look toward restructuring or a compromise settlement. This is not about "forgiving the loan" entirely, but about finding a realistic middle ground where the bank recovers some principal and the borrower is not destroyed.
                </p>
                <p>
                  Mentioning the <strong>Integrated Ombudsman Scheme</strong> in your emails to the bank is often the key that unlocks a stalled negotiation. The Ombudsman has the power to penalize the bank for bad faith negotiations when a medical crisis is clearly documented.
                </p>
              </div>

              <h2 id="harassment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Harassment Protection: Your Rights Against Aggressive Recovery</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  For many borrowers, the worst part of a medical emergency is not the debt itself, but the recovery agents. These third party agencies often use psychological warfare to extract money. However, in 2025, the law has grown sharp teeth to bite back. The RBI's "Guidelines on Recovery Agents" are strict and non negotiable. If an agent calls you at 10:00 PM while you are in a hospital bed, they are breaking the law.
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>1. Time Restrictions:</strong> Agents can only call or visit between 7:00 AM and 7:00 PM. Anything outside this window is a documented violation.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>2. No Privacy Breaches:</strong> They cannot call your employer, your neighbors, or your hospital staff to "shame" you. Any medical record you share with them is private and protected.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>3. No Abusive Language:</strong> The use of threats, foul language, or "thug style" intimidation is a criminal offense. You have the right to record all conversations.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>4. Identity Verification:</strong> Every agent must provide an official ID and an authorization letter from the bank. If they don't, you are legally allowed to refuse to talk to them.
                  </li>
                </ul>
              </div>

              <h2 id="patient-rights" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Patient Rights: The Hospital Detention Myth</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  One of the most terrifying threats used during medical debt crises is the threat of "No Discharge." Hospitals or medical lenders might imply that a patient cannot leave the facility until the bill is settled or a loan is approved. Let us be absolutely clear: <strong>Hospital detention for unpaid bills is illegal in India.</strong>
                </p>
                <p>
                  The High Courts have ruled that "Hospitals are not jails." Holding a patient against their will for a civil debt is considered "Wrongful Confinement" under the Indian Penal Code. Similarly, withholding the body of a deceased person for payment is a criminal act and a violation of the Dignity of the Dead. If you face this threat, you must immediately call the local police.
                </p>
                <p>
                  This doesn't mean the bill goes away. The hospital can still file a civil case for recovery, but they cannot use your body or your family's physical presence as collateral. Understanding this removes a massive psychological weapon from the hands of unscrupulous collectors.
                </p>
              </div>

              <h2 id="hardship-evidence" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Gathering Hardship Evidence: The Medical Dossier</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  In the world of banking, "words" are meaningless without "paper." If you want support for a loan settlement, you must prove your hardship. We recommend building what we call a <strong>Medical Hardship Dossier</strong>. This is an organized, professional folder that leaves no doubt about your situation.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Discharge Summary:</strong> Showing the dates and severity of the hospitalization.</li>
                  <li><strong>Surgery Notes:</strong> Detailed operation summaries to prove the intensity of the procedure.</li>
                  <li><strong>Consolidated Bills:</strong> Final hospital bills and pharmacy receipts to show financial drain.</li>
                  <li><strong>Doctor Certificate:</strong> A formal letter stating your inability to work or return to normalcy.</li>
                  <li><strong>Income Proof:</strong> Salary slips or bank statements showing the disruption in your regular earnings.</li>
                </ul>
              </div>

              <h2 id="relief-options" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Relief Options: Moratorium vs. Restructuring vs. Settlement</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Support doesn't always have to mean a "Settlement" (which hurts your credit). Depending on your prognosis and future income, there are three main paths you can take. Choosing the right one is the most important financial decision you will make.
                </p>
                <div className="bg-gray-100 p-6 rounded-2xl">
                  <ol className="list-decimal pl-6 space-y-4">
                    <li>
                      <strong>EMI Moratorium:</strong> Best for temporary illnesses. You ask the bank to pause payments for 3 6 months while you recover.
                    </li>
                    <li>
                      <strong>Loan Restructuring:</strong> Best for permanent income reduction. You ask to double the tenure and halve the EMI.
                    </li>
                    <li>
                      <strong>One-Time Settlement (OTS):</strong> Best for total savings depletion. You offer a lump sum (often 40% 60% of dues) to close the account forever.
                    </li>
                  </ol>
                </div>
              </div>

              <h2 id="negotiation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Strategic Negotiation: Shifting the Power Dynamic</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Negotiating a settlement while you are physically or emotionally drained is difficult. Your first official contact with the bank should not be a panicked phone call. It must be a formal email to the <strong>Nodal Officer</strong> or <strong>Appellate Authority</strong> of the bank.
                </p>
                <p>
                  In your correspondence, mention that you are aware of your rights under Article 21 and the latest consumer protection acts. This instantly changes the tone of the conversation. Mention that you have other debts and a limited "pool" of funds, and that you are offering a "clean exit" for the bank.
                </p>
                <p>
                  Always demand a <strong>Formal Offer Letter</strong> before paying a single rupee. Never pay based on a verbal promise from a collection agent.
                </p>
              </div>

              <h2 id="professional-help" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Why Seek Professional Debt Mediation?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  A medical emergency is exhausting. Trying to navigate the SARFAESI complexity, Negotiable Instruments Act, and the RBI Fair Practices Code simultaneously can lead to a mental breakdown. Professional firms like CredSettle provide a shield against harassment and direct access to Nodal Officers.
                </p>
                <p>
                  We take over all the communication, allowing you to focus on physical therapy and recovery. We ensure that your "Offer Letter" is 100% legal and that the bank updates the credit bureaus correctly. Often, the discount we negotiate is much larger than our fee, making it a net win for your family.
                </p>
              </div>

              <h2 id="tax-implications" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Tax Implications: Is Medical Debt Forgiveness Taxable?</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  A common question that arises during the support for loan settlement during medical emergencies is whether the "waived" amount is taxable. Under the Income Tax Act of India, any debt that is forgiven by a lender could potentially be viewed as "Cessation of Liability" and taxed as income from other sources. However, the situation is nuanced when medical hardship is involved.
                </p>
                <p>
                  In 2025, tax consultants often point to specific exemptions for "Compassionate Payments." If the bank writes off a portion of your loan specifically due to a life threatening medical condition, you may be able to argue that this is a "Capital Receipt" rather than a "Revenue Receipt." This distinction is vital because capital receipts are generally not taxable. However, this requires careful documentation and a statement from the bank that the waiver was a hardship grant.
                </p>
                <p>
                  We recommend keeping all your medical bills and the bank's final settlement letter in your tax records for at least 7 years. If the Income Tax department ever queries the "Sudden decrease in liability," your Medical Hardship Dossier will serve as your primary defense. Always consult with a Chartered Accountant to ensure that your debt settlement is reported correctly in your annual returns to avoid any future legal complications.
                </p>
              </div>

              <h2 id="credit-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Truth About Credit Score Impact</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  There is no "Magic Wand" for your credit score during a settlement. If you pay back less than the original agreement, the credit bureau will mark it as "Settled." You can expect an immediate drop of 75 to 150 points. However, a "Settled" status is infinitely better than an "Active Default" which compounds interest forever.
                </p>
                <p>
                  In 2025, you can add a "Consumer Statement" of up to 100 words on your CIBIL report explaining that the settlement was due to documented medical hardship. While it doesn't change the score, a human underwriter for a large future loan might look at this and provide a waiver based on your circumstances.
                </p>
              </div>

              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Client Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "During my father's heart surgery, we were drowning in debt. CredSettle guided us to a 45% settlement that saved our family from total ruin."
                  </p>
                  <p className="font-bold text-blue-900">- Rajesh Khanna, Mumbai</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "I didn't know I could ask for an EMI pause during my chemo treatments. They agreed to a 6 month moratorium without penalty!"
                  </p>
                  <p className="font-bold text-blue-900">- Meena Iyer, Chennai</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "Excellent resource on RBI guidelines. When recovery agents tried to harass me while I was on bed rest, CredSettle stepped in."
                  </p>
                  <p className="font-bold text-blue-900">- Vikram Singh, Delhi</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "The organization of my medical hardship dossier was key. I got a one-time settlement for my credit card debt within 3 weeks."
                  </p>
                  <p className="font-bold text-blue-900">- Arjun Reddy, Hyderabad</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "Professional and empathetic. They handled the negotiations with my bank while I was recovering from a major accident."
                  </p>
                  <p className="font-bold text-blue-900">- Priya Sharma, Bangalore</p>
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
                  <h2 className="text-3xl font-bold mb-4">Ready to Resolve Your Medical Debt?</h2>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Don't let debt interfere with your recovery. Get in touch with India's top debt settlement experts today.</p>
                  <Link
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Start Your Relief Process Now
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
                <h4 className="font-bold text-2xl mb-4">Medical Debt Relief</h4>
                <p className="text-blue-100 mb-6 text-sm">Facing overwhelming bills due to a health crisis? We can help you negotiate.</p>
                <Link
                  href="/contact"
                  className="block w-full bg-white text-blue-700 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-md"
                >
                  Request Consultation
                </Link>
                <div className="mt-8 pt-6 border-t border-blue-500/30 space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Empathetic Support</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Expert Negotiators</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Legal Protection</span>
                  </div>
                </div>
              </div>

              {/* Related Pages Component */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">Helpful Resources</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/how-to-handle-recovery-agent-harrasment" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm">Handle Agent Harassment</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/rbi-rules-for-recovery-agents" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm">RBI Rules for Agents</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm">How Settlement Works</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/is-loan-settlement-a-good-option" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm">Is Settlement Good?</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <p className="text-xs text-gray-500 italic">
                  Legal Disclaimer: The information provided on this page is for general awareness only and does not constitute legal advice. Please consult a qualified professional for your specific case.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
