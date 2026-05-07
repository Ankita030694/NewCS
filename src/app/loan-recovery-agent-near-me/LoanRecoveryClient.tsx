'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function LoanRecoveryClient() {
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
    { id: 'rbi-guidelines', label: 'RBI Guidelines' },
    { id: 'rights-of-borrower', label: 'Borrower Rights' },
    { id: 'handling-harassment', label: 'Handle Harassment' },
    { id: 'settlement-as-solution', label: 'Loan Settlement' },
    { id: 'detailed-process', label: 'Recovery Process' },
    { id: 'legal-framework', label: 'Legal Framework' },
    { id: 'myths-vs-reality', label: 'Myths vs Reality' },
    { id: 'conclusion', label: 'Conclusion' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: "Can a loan recovery agent visit my house at any time?",
      answer: "No, according to RBI guidelines, recovery agents can only visit between 8:00 AM and 7:00 PM. Any visit outside these hours is a violation of rules."
    },
    {
      question: "What should I do if a recovery agent is harassing me?",
      answer: "You should immediately file a complaint with the bank's grievance redressal cell. If not resolved in 30 days, escalate it to the RBI Ombudsman. You can also file a police complaint if they use physical force or abusive language."
    },
    {
      question: "Can recovery agents call my friends or relatives?",
      answer: "No, recovery agents are strictly prohibited from calling your friends, family, or references for the purpose of debt collection. They can only contact you directly."
    },
    {
      question: "Do I have the right to ask for the recovery agent's ID?",
      answer: "Yes, you have every right to demand an identity card and an authorization letter from the bank. If they fail to provide these, do not engage with them."
    },
    {
      question: "Can a bank file a criminal case for loan default?",
      answer: "Loan default is generally a civil matter. However, if there is evidence of fraud, cheating, or if a cheque bounces (Section 138 NI Act), it can become a criminal case."
    },
    {
      question: "Is it possible to settle a loan without a recovery agent?",
      answer: "Yes, you can directly approach the bank or hire a debt settlement company like CredSettle to negotiate a 'One-Time Settlement' (OTS) on your behalf."
    },
    {
      question: "What are the new RBI guidelines for recovery agents 2024?",
      answer: "The new guidelines emphasize borrower privacy, strict calling hours, no harassment, and clear disclosure of agent identities. Banks are held responsible for the actions of their agents."
    },
    {
      question: "Can I stop recovery agents from calling me?",
      answer: "While you cannot stop legitimate calls for recovery, you can stop harassment. If you are in a settlement process, your consultant can often manage the communication for you."
    },
    {
      question: "What happens if I don't pay the recovery agent?",
      answer: "If you don't pay, the bank may proceed with legal actions like filing a civil suit, sending a legal notice, or reporting to credit bureaus (affecting your CIBIL score)."
    },
    {
      question: "How does CredSettle help with recovery agents?",
      answer: "CredSettle provides legal protection by ensuring agents follow RBI rules. We handle negotiations for settlement, reducing the burden of calls and visits."
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
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    Loan Recovery Agent Near Me
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

              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28">Loan Recovery Agent Near Me: Your Comprehensive Guide to Legal Rights and Harassment Protection</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  When financial circumstances become difficult, many individuals find themselves searching for a "loan recovery agent near me." This search usually stems from one of two scenarios. Either you are a lender looking to recover outstanding dues from a borrower, or more commonly, you are a borrower who is already being contacted by these agents and you want to understand who they are, where they operate from, and what your rights are.
                </p>
                <p>
                  Loan recovery agents are third party entities hired by banks and Non Banking Financial Companies (NBFCs) to recover unpaid debts. While their role is legitimate in the financial ecosystem, the methods they sometimes employ can cross the line into harassment. In India, the Reserve Bank of India (RBI) has laid down very strict guidelines to ensure that the recovery process remains dignified and legal.
                </p>
                <p>
                  This comprehensive guide is designed to help you navigate the complex world of loan recovery. Whether you are dealing with credit card debt, personal loans, or business loan defaults, understanding how recovery agents function and the legal protections available to you is the first step toward regaining your financial peace of mind.
                </p>
              </div>

              <h2 id="rbi-guidelines" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Legal Framework: RBI Guidelines for Recovery Agents</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The Reserve Bank of India has updated its circulars multiple times to protect borrowers from predatory recovery practices. If you are searching for a loan recovery agent near me to understand the rules they must follow, here are the most critical points established by the central bank.
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>1. Authorized Working Hours:</strong> Recovery agents are strictly prohibited from calling or visiting you at odd hours. The permissible window is between 8:00 AM and 7:00 PM.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>2. Identity and Transparency:</strong> Every agent must identify themselves and the agency they represent. They must carry an ID card and an authorization letter from the bank.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>3. Privacy and Third-Party Contact:</strong> Agents are forbidden from calling your friends, family, or colleagues to shame you about your debt.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>4. No Physical Force:</strong> Use of physical force, intimidation, or verbal abuse is strictly prohibited and can lead to severe penalties for the bank.
                  </li>
                </ul>
              </div>

              <h2 id="rights-of-borrower" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Your Fundamental Rights as a Borrower</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Defaulting on a loan is not a criminal offense in itself. It is a breach of a civil contract. As a citizen of India, you are protected by the Constitution and specific financial laws. If you find a loan recovery agent near me who is not following the law, remember these rights.
                </p>
                <p>
                  <strong>Right to Privacy:</strong> Your financial details are confidential. Banks cannot publish your name or photo in newspapers as a "defaulter" unless specific legal conditions under the SARFAESI Act are met.
                </p>
                <p>
                  <strong>Right to be Heard:</strong> You have the right to explain your financial hardship. If you have faced a genuine crisis, you can request a moratorium or a restructuring of your loan.
                </p>
                <p>
                  <strong>Right to a Legal Notice:</strong> Before taking any major legal step, the lender must send you a formal notice giving you a stipulated time (usually 60 days for secured loans) to respond.
                </p>
              </div>

              <h2 id="handling-harassment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">How to Handle Recovery Agent Harassment</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  If you are being harassed, simply searching for a loan recovery agent near me won't solve the problem. You need to take active steps to protect yourself.
                </p>
                <p>
                  <strong>Step 1: Record Everything.</strong> Keep a log of all calls and record any visits or abusive conversations. This is your primary evidence.
                </p>
                <p>
                  <strong>Step 2: Complain to the Bank.</strong> Send a formal complaint to the bank's Grievance Redressal Officer. They are responsible for their agents' actions.
                </p>
                <p>
                  <strong>Step 3: RBI Ombudsman.</strong> If the bank fails to act within 30 days, escalate the matter to the RBI Integrated Ombudsman.
                </p>
                <p>
                  <strong>Step 4: Police Complaint.</strong> In cases of physical threats or trespassing, file an FIR at your local police station immediately.
                </p>
              </div>

              <h2 id="settlement-as-solution" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Loan Settlement: A Better Alternative to Recovery</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Instead of constantly worrying about a loan recovery agent near me, you should explore the option of loan settlement. A One Time Settlement (OTS) is a process where the bank agrees to accept a lower amount than the total outstanding to close the loan account.
                </p>
                <p>
                  This is usually an option when the bank realizes that the borrower is in genuine financial distress and recovering the full amount is unlikely. While it does affect your CIBIL score temporarily, it stops the harassment and gives you a clean slate.
                </p>
                <p>
                  At CredSettle, we specialize in helping borrowers negotiate these settlements. We ensure that you get the best possible deal while being protected from any illegal recovery tactics.
                </p>
              </div>

              <h2 id="detailed-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Detailed Loan Recovery Process in India</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  To demystify the search for a loan recovery agent near me, it is helpful to understand the formal stages of debt recovery used by banks.
                </p>
                <div className="bg-gray-100 p-6 rounded-2xl mb-6">
                  <h4 className="font-bold mb-3">1. Soft Recovery Stage (Days 1-90)</h4>
                  <p className="text-sm">SMS reminders and polite calls from the bank's internal collection team.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-2xl mb-6">
                  <h4 className="font-bold mb-3">2. Hard Recovery Stage (90+ Days)</h4>
                  <p className="text-sm">Account is marked as NPA. Third-party agents are assigned. Frequency of calls and home visits increases.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-2xl">
                  <h4 className="font-bold mb-3">3. Legal Action Stage</h4>
                  <p className="text-sm">Filing cases under Section 138 (Cheque Bounce), DRT proceedings, or SARFAESI Act actions.</p>
                </div>
              </div>

              <h2 id="legal-framework" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Technical Aspects of Debt Recovery Law</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The legal landscape surrounding the search for a loan recovery agent near me is deeply rooted in the Fair Practices Code. Banks are mandated to have a dedicated policy for the engagement of recovery agents. This policy must be available on their website and should clearly state the process of engagement, the training provided to agents, and the ethical standards they must uphold.
                </p>
                <p>
                  When we talk about a loan recovery agent near me in the context of secured loans like home loans or car loans, the rules become even more specific under the SARFAESI Act 2002. While the bank has the right to repossess the asset, they must follow a process of issuing a 60 day notice, followed by a symbolic possession and then actual possession through the District Magistrate.
                </p>
                <p>
                  The digital age has brought new challenges. Online lenders and instant loan apps often use "digital recovery" tactics. The RBI has been extremely strict about this, recently cancelling the licenses of several NBFCs found using unethical digital recovery agents.
                </p>
              </div>

              <h2 id="myths-vs-reality" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Common Myths About Loan Recovery Agents</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">Myth: They can arrest you.</h4>
                  <p className="text-sm">Reality: Recovery agents have zero legal authority to arrest anyone. Only the police, with a court warrant, can make an arrest.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">Myth: They can enter your house.</h4>
                  <p className="text-sm">Reality: Entering your home without permission is trespassing. They must stay at the entrance unless invited.</p>
                </div>
              </div>

              <h2 id="conclusion" className="text-3xl font-bold text-black mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Conclusion & Final Advice</h2>
              <p className='text-black'>
                In conclusion, while the phrase "loan recovery agent near me" might bring up images of aggressive collectors, the reality is a regulated industry where you have significant protections. Whether you are dealing with a nationalized bank, a private lender, or a modern fintech app, the rules of engagement are clear. You are entitled to respect, privacy, and a fair chance to resolve your debts. CredSettle is here to ensure that these rights are not just words on a paper but a reality in your life.
              </p>
              <p className='text-black'>
                Finally, remember that the search for a loan recovery agent near me is a call to action. It is a sign that you need to take control of your debts before they take control of you. Use the resources available, understand the law, and don't hesitate to seek professional help. Your financial freedom is worth the effort of standing up for your rights.
              </p>
              <p className='text-black'>
                To provide even more context for your search for a loan recovery agent near me, it's worth exploring the different types of agencies that exist in India. Some are large, pan-India organizations that handle thousands of accounts for major public sector banks. Others are small, local firms that specialize in a particular city or region. When you search for a loan recovery agent near me, you might come across firms that call themselves "debt collection agencies," "recovery consultants," or "legal recovery firms." While the names differ, their goal is the same. The diversity of these agencies is one reason why the RBI's centralized guidelines are so important. They provide a uniform standard that applies to every agency, regardless of its size or location.
              </p>
              <p className='text-black'>
                The search for a loan recovery agent near me also touches upon the concept of "skip tracing." This is the process agents use to find borrowers who have changed their address or phone number without informing the bank. Skip tracing involves using public records, social media, and other legal databases to locate the borrower. While skip tracing is a legitimate part of the recovery process, it must be done ethically. Agents cannot impersonate government officials or use deceptive tactics to get information about your whereabouts from your family or friends.
              </p>
              <p className='text-black'>
                Another technical aspect related to a "loan recovery agent near me" is the "settlement letter." If you reach a verbal agreement with an agent or the bank, it is absolutely critical that you receive a formal settlement letter on the bank's letterhead before you make any payment. This letter should clearly state the settlement amount, the waiver amount, and the date by which the payment must be made. Without this letter, any payment you make might be adjusted against the interest, and the agent might continue to harass you for the remaining balance. CredSettle ensures that every settlement we negotiate is backed by ironclad documentation to protect our clients from such issues.
              </p>
              <p className='text-black'>
                When searching for a loan recovery agent near me, you should also be aware of the "No Dues Certificate" (NDC) or "No Objection Certificate" (NOC). This is the final document you receive after you have completed your settlement payments. It is your proof that the loan account is closed and that the bank has no further claims against you. Ensure that the bank also updates your status with credit bureaus like CIBIL within 30 to 45 days of issuing the NDC.
              </p>
              <p className='text-black'>
                The search for a loan recovery agent near me can also be an opportunity to learn about "debt consolidation." If you have multiple loans and are being contacted by different recovery agents, it might be more efficient to consolidate your debts into a single loan with a lower interest rate. However, this is usually only an option if your credit score is still relatively healthy. If you are already in default and dealing with recovery agents, loan settlement through CredSettle is often the more practical route.
              </p>
              <p className='text-black'>
                The phrase "loan recovery agent near me" is often searched by people in the middle of the night, driven by the stress of an impending visit or a threatening call. We want to tell you that there is light at the end of the tunnel. Thousands of people have faced this situation and successfully navigated it. The key is to stop running and start negotiating. By engaging with professionals who understand the system, you turn a one-sided struggle into a balanced negotiation. You move from being a "defaulter" to being a "settler," which is a much more empowered position to be in.
              </p>
              <p className='text-black'>
                In the broader sense, the existence of a "loan recovery agent near me" is a symptom of a credit system that sometimes outpaces the financial literacy of its participants. At CredSettle, we don't just help you settle your loans; we also aim to educate you on better financial management for the future. Understanding how interest compounds, how credit scores work, and how to read a loan agreement are skills that will prevent you from ever needing to search for a loan recovery agent near me again.
              </p>
              <p className='text-black'>
                The legal frameworks are also becoming more borrower friendly. For instance, the Insolvency and Bankruptcy Code (IBC) has provisions for "Fresh Start" processes for individuals with very low income and assets. While these processes are still being refined for the retail segment, they represent a shift toward a more compassionate legal system. As you look for a loan recovery agent near me, stay informed about these macro changes in the legal landscape.
              </p>
              <p className='text-black'>
                Finally, we want to emphasize the importance of self care. Debt recovery is not just a financial issue; it is a mental health issue. The stress of being pursued by a loan recovery agent near me can lead to anxiety, depression, and strain on family relationships. Don't carry this burden alone. Talk to your spouse, your parents, or a trusted friend. Hiring CredSettle is also a form of self care, as it offloads the stress of communication to experts who are trained to handle it. You deserve to sleep peacefully at night, and we are here to make that possible.
              </p>
              <p className='text-black'>
                As the Indian economy continues to grow, the credit market will only expand. With more people taking loans for homes, education, and business, the role of recovery will remain a part of the system. However, the future of recovery is one of professionalism and legal compliance. The days of unregulated muscle power are fading, replaced by technology driven and legally sound recovery processes. By staying informed and proactive, you can ensure that your journey through the financial system, even in times of default, remains within the bounds of law and dignity.
              </p>
              <p className='text-black'>
                Remember that every financial problem has a solution. It might require time, effort, and some difficult choices, but it is never the end of the road. A settled loan is a closed chapter, allowing you to focus on rebuilding your score and your life. The path to recovery starts with a single step: deciding to take control. Whether it's through understanding RBI rules or reaching out to a debt relief expert, the power to change your situation lies in your hands.
              </p>

              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4 mt-10">Client Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "I was constantly searching for a loan recovery agent near me to understand why they were calling my workplace. CredSettle stepped in and handled everything. The harassment stopped within 48 hours."
                  </p>
                  <p className="font-bold text-blue-900">- Vikram S., Mumbai</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "The team at CredSettle is amazing. They helped me settle a 10 lakh debt for just 3 lakhs. More importantly, they gave me the confidence to stand up to abusive agents."
                  </p>
                  <p className="font-bold text-blue-900">- Anjali M., Delhi</p>
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
                  <h2 className="text-3xl font-bold mb-4 text-white">Ready to Stop the Harassment?</h2>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Join thousands of satisfied clients who have found relief and legal protection with CredSettle.</p>
                  <Link
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Start Your Recovery Process Now
                  </Link>
                </div>
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
                <h4 className="font-bold text-2xl mb-4 text-white">Stop Harassment Now</h4>
                <p className="text-blue-100 mb-6 text-sm">Facing illegal recovery visits? Our legal experts can protect you today.</p>
                <Link
                  href="/contact"
                  className="block w-full bg-white text-blue-700 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-md"
                >
                  Request Help
                </Link>
                <div className="mt-8 pt-6 border-t border-blue-500/30 space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>100% Legal Protection</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Expert RBI Guidance</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Stress-Free Recovery</span>
                  </div>
                </div>
              </div>

              {/* Related Pages Component */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">Helpful Resources</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/how-to-stop-recovery-agent-harassment" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Stop Agent Harassment</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/rbi-rules-for-recovery-agents" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">RBI Recovery Rules</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/can-recovery-agents-come-home" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Can Agents Come Home?</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal-notice-for-recovery-of-money" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Money Recovery Notice</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <p className="text-xs text-gray-500 italic">
                  Legal Disclaimer: The information provided on this page is for awareness and does not constitute legal advice. Consult a qualified professional for your case.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
