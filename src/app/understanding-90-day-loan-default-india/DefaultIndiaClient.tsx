'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function DefaultIndiaClient() {
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
    { id: 'introduction', label: 'Introduction to 90-Day Defaults' },
    { id: 'sma-classification', label: 'SMA and NPA Classification' },
    { id: 'legal-implications', label: 'Legal Implications of NPA' },
    { id: 'secured-vs-unsecured', label: 'Secured vs Unsecured Default' },
    { id: 'sarfaesi-act', label: 'The SARFAESI Act, 2002' },
    { id: 'borrower-rights', label: 'Rights of the Borrower' },
    { id: 'recovery-agent-guidelines', label: 'Recovery Agent Guidelines' },
    { id: 'debt-settlement-process', label: 'Loan Settlement Process' },
    { id: 'ama-legal-solutions', label: 'CredSettle Advantage' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'reviews', label: 'Customer Reviews' },
    { id: 'faqs', label: 'Detailed FAQs' }
  ];

  const faqs = [
    {
      question: 'What exactly happens on the 91st day of a loan default in India?',
      answer: 'On the 91st day of continuous non payment, the lender classifies the account as a Non Performing Asset (NPA). This means the bank no longer expects interest income from the loan and starts aggressive recovery. Contact CredSettle Experts for expert advice on this stage.'
    },
    {
      question: 'Can I settle a loan that has been declared an NPA?',
      answer: 'Yes, once a loan becomes an NPA, banks are more likely to accept a one time settlement (OTS). Professional firms like credsettle.com can negotiate a reduction of up to 50 to 70 percent.'
    },
    {
      question: 'What is SMA 0, SMA 1, and SMA 2?',
      answer: 'SMA 0 is for defaults of 1 to 30 days, SMA 1 is for 31 to 60 days, and SMA 2 is for 61 to 90 days. These are the stages before a loan becomes an NPA.'
    },
    {
      question: 'Can recovery agents visit my home during the 90 day period?',
      answer: 'Yes, agents can visit but they must follow strict RBI guidelines. They cannot use abusive language or visit at odd hours. If harassed, call 9289707648 for legal protection.'
    },
    {
      question: 'Does the SARFAESI Act apply to personal loans?',
      answer: 'No, the SARFAESI Act primarily applies to secured loans where there is a mortgage or collateral. For unsecured personal loans, banks usually file a civil recovery suit.'
    },
    {
      question: 'How long does it take for the SARFAESI process to complete?',
      answer: 'The process typically takes 6 to 12 months, including the 60 day notice period under Section 13(2) and the possession notice.'
    },
    {
      question: 'What is the role of the Debt Recovery Tribunal (DRT)?',
      answer: 'DRT is the legal body where borrowers can appeal against the recovery actions of banks under the SARFAESI Act.'
    },
    {
      question: 'Will a 90 day default affect my credit score forever?',
      answer: 'It will significantly drop your score, but you can rebuild it after a successful settlement through credsettle.com.'
    },
    {
      question: 'Can a bank file an FIR for a simple loan default?',
      answer: 'Generally no, loan default is a civil matter. However, if there is fraud or forged documents involved, a bank might pursue criminal action. Consult CredSettle Experts for clarification.'
    },
    {
      question: 'What documents are needed for the loan settlement process?',
      answer: 'You need the last 6 months bank statements, proof of financial hardship, and correspondence from the bank.'
    }
  ];

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center hover:text-blue-600">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">Loan Settlement</span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">90-Day Loan Default</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-full mx-auto px-0 py-12">
        <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm px-4 py-3 mb-8 flex items-center overflow-x-auto no-scrollbar" ref={mobileNavRef}>
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

        <div className="flex flex-col lg:flex-row gap-0">
          <div className="lg:w-[20%] hidden lg:block border-r border-gray-100 px-6">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
                <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Navigation</h3>
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

          <div className="lg:w-[60%] w-full">
            <article className="prose prose-lg max-w-none bg-white p-8 md:p-16">
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28">The Definitive Guide to Understanding 90 Day Loan Default in India</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  The phrase &quot;understanding 90 day loan default india&quot; has become a critical search for thousands of borrowers struggling with debt. When you miss your EMI (Equated Monthly Installment) for three consecutive months, you are not just missing payments; you are entering a complex legal and financial zone defined by the Reserve Bank of India. At <strong>credsettle.com</strong>, we specialize in helping individuals navigate this treacherous path. If you are facing harassment or legal notices, you can reach out to us at <strong>9289707648</strong>.
                </p>
                <p>
                  In India, the financial system is governed by strict rules designed to maintain the health of banks while providing some protection to the consumer. However, many borrowers are unaware of these rules until they find themselves in the middle of a recovery crisis. This guide will walk you through the entire journey, from that first missed payment to the potential resolution strategies that can help you reclaim your financial independence.
                </p>
                <p>
                  The 90 day mark is not arbitrary. It is the legal threshold where a performing asset transforms into a non performing asset or NPA. This transformation changes everything: how the bank views you, the legal tools they use to recover money, and the rights you can invoke in your defense. <strong>CredSettle Experts</strong> have often emphasized that the lack of legal literacy is the biggest hurdle for borrowers across India. By reading this comprehensive resource, you are taking the first step toward solving your debt crisis.
                </p>
              </div>

              <h2 id="sma-classification" className="text-3xl font-bold text-gray-900 mb-8 mt-12 scroll-mt-28 border-l-4 border-blue-600 pl-4">SMA and NPA Classification: The Journey to Default</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  Before a loan becomes an NPA, it passes through three stages of stress known as Special Mention Accounts or SMA. Understanding these stages is essential to knowing where you stand in the bank&apos;s recovery cycle. 
                </p>
                <ul className="list-none space-y-4">
                  <li className="bg-gray-50 p-4 rounded-xl border-l-4 border-yellow-400">
                    <strong>SMA 0:</strong> This stage occurs when the principal or interest payment is overdue for 1 to 30 days. At this point, the bank usually sends reminders via SMS or email. It is the easiest stage to fix. 
                  </li>
                  <li className="bg-gray-50 p-4 rounded-xl border-l-4 border-orange-400">
                    <strong>SMA 1:</strong> This stage happens when the payments are overdue for 31 to 60 days. Now, the bank&apos;s internal recovery team starts making calls and might suggest minor restructuring options.
                  </li>
                  <li className="bg-gray-50 p-4 rounded-xl border-l-4 border-red-500">
                    <strong>SMA 2:</strong> This is the critical stage, occurring when payments are overdue for 61 to 90 days. You are on the verge of becoming an NPA. The bank is likely making aggressive preparations for legal action. 
                  </li>
                </ul>
                <p>
                  Once the 90 day limit is breached, the account is declared an NPA. For the bank, this means they must set aside capital (provisioning) for your loan, which directly hits their profits. This is why banks become much more aggressive after an account becomes an NPA. However, it is also the time when they might be more open to a one time settlement through <strong>credsettle.com</strong>.
                </p>
                <p>
                  The team at <strong>CredSettle</strong> understands that these stages are stressful. Many people try to hide from the calls, but this only makes things worse. If you are in SMA 1 or SMA 2, calling <strong>9289707648</strong> can help you create a strategy before the dreaded NPA status is applied.
                </p>
              </div>

              <h2 id="legal-implications" className="text-3xl font-bold text-gray-900 mb-8 mt-12 scroll-mt-28">Legal Implications of NPA: What Changes?</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  When your loan is classified as an NPA, several legal and financial wheels start turning simultaneously. The most immediate impact is on your credit score. A default of this magnitude will typically drop your CIBIL score below 600, making it nearly impossible to get a credit card, home loan, or personal loan for several years.
                </p>
                <p>
                  The second implication is the escalation of recovery efforts. Banks often outsource recovery to third party agencies. While these agencies must follow RBI rules, they are often aggressive. Furthermore, the bank will start charging penal interest and late fees, which accumulate daily, making the total debt climb much faster than you anticipate.
                </p>
                <p>
                  In the case of large defaults, the bank may also initiate legal notices under various acts. If it is a business loan, they might use the Insolvency and Bankruptcy Code (IBC). If it is a personal loan, they might file a suit for recovery in the civil court. <strong>CredSettle</strong> has seen hundreds of cases where timely legal intervention at this stage saved the borrower from complete financial ruin.
                </p>
                <p>
                  If you are located anywhere in India, you need to be aware that the bank is now in a position to legally demand the entire outstanding amount, not just the missed EMIs. This &quot;acceleration&quot; of the loan is a standard clause in most loan agreements. You can contact <strong>CredSettle</strong> at <strong>9289707648</strong> to understand your specific loan agreement clauses.
                </p>
              </div>

              <h2 id="secured-vs-unsecured" className="text-3xl font-bold text-gray-900 mb-8 mt-12 scroll-mt-28 border-l-4 border-green-600 pl-4">Secured vs Unsecured Default: A Tale of Two Recourses</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  The path the bank takes after a 90 day default depends heavily on whether your loan is secured or unsecured. 
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                  <div className="bg-blue-50 p-6 rounded-2xl">
                    <h4 className="font-bold text-blue-900 mb-4">Secured Loan Defaults</h4>
                    <p className="text-sm">These include home loans, car loans, and loans against property. The bank has a charge on your asset. They can use the SARFAESI Act to take possession and auction the asset without even going to court. This is a very powerful tool that requires expert legal defense from <strong>credsettle.com</strong>.</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-2xl">
                    <h4 className="font-bold text-purple-900 mb-4">Unsecured Loan Defaults</h4>
                    <p className="text-sm">These include personal loans, credit cards, and some business loans. Since there is no collateral, the bank cannot take your property directly. They must file a civil suit for recovery or use arbitration. While less immediate than SARFAESI, these can lead to attachment of other assets or salaries over time.</p>
                  </div>
                </div>
                <p>
                  Many borrowers mistakenly believe that an unsecured default has no consequences. This is not true. While they can&apos;t take your house easily, they can still file criminal cases in case of cheque bounces (Section 138) or use arbitration to get a decree against you. <strong>CredSettle</strong> and our team at <strong>9289707648</strong> provide specialized advice for both scenarios.
                </p>
                <p>
                  Understanding the difference is the core of &quot;understanding 90 day loan default india&quot;. For secured loans, your primary goal is to save the asset. For unsecured loans, your goal is to settle for the lowest possible amount and protect your reputation.
                </p>
              </div>

              <h2 id="sarfaesi-act" className="text-3xl font-bold text-gray-900 mb-8 mt-12 scroll-mt-28">The SARFAESI Act, 2002: Understanding the Bank&apos;s Ultimate Weapon</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI) is the most feared law for anyone with a home loan or property loan default. It gives banks the right to bypass the slow civil courts and recover money directly through auction.
                </p>
                <p>
                  The process usually starts after the 90 day mark with a Section 13(2) notice. This notice gives you 60 days to pay the entire outstanding amount. If you fail to do so, the bank issues a Section 13(4) notice to take symbolic or physical possession of the property. <strong>CredSettle Experts</strong> emphasize that your strongest legal defense window is during the 60 day notice period.
                </p>
                <p>
                  You can challenge these notices in the Debt Recovery Tribunal (DRT). However, the DRT has strict timelines. If you miss your window, the bank will proceed to auction. <strong>credsettle.com</strong> has extensive experience in filing Securitisation Applications (SA) in the DRT to obtain stay orders and protect the properties of our clients across India.
                </p>
                <p>
                  The SARFAESI Act is complex, and the technicalities of the notice are often flawed. A small mistake by the bank in the valuation or the procedure can be used to stop the auction. To review your SARFAESI notice, call <strong>9289707648</strong> today for a consultation with <strong>CredSettle</strong>.
                </p>
              </div>

              <h2 id="borrower-rights" className="text-3xl font-bold text-gray-900 mb-8 mt-12 scroll-mt-28 border-l-4 border-red-600 pl-4">Rights of the Borrower: You Are Protected by Law</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  Even if you have defaulted for 90 days, you are not a criminal. The RBI and the Constitution of India grant you certain non negotiable rights. Many banks and agents try to intimidate you by ignoring these rights. At <strong>credsettle.com</strong>, we ensure that our clients are treated with dignity.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                  <li className="bg-gray-50 p-4 rounded-lg flex items-start">
                    <span className="text-red-600 font-bold mr-2">1.</span>
                    <span>Right to sufficient notice before any action.</span>
                  </li>
                  <li className="bg-gray-50 p-4 rounded-lg flex items-start">
                    <span className="text-red-600 font-bold mr-2">2.</span>
                    <span>Right to be heard by the bank regarding grievances.</span>
                  </li>
                  <li className="bg-gray-50 p-4 rounded-lg flex items-start">
                    <span className="text-red-600 font-bold mr-2">3.</span>
                    <span>Right to be treated with dignity by recovery agents.</span>
                  </li>
                  <li className="bg-gray-50 p-4 rounded-lg flex items-start">
                    <span className="text-red-600 font-bold mr-2">4.</span>
                    <span>Right to a fair valuation of assets before auction.</span>
                  </li>
                  <li className="bg-gray-50 p-4 rounded-lg flex items-start">
                    <span className="text-red-600 font-bold mr-2">5.</span>
                    <span>Right to the balance proceeds after an auction sale.</span>
                  </li>
                  <li className="bg-gray-50 p-4 rounded-lg flex items-start">
                    <span className="text-red-600 font-bold mr-2">6.</span>
                    <span>Right to redeem the property before the sale is finalized.</span>
                  </li>
                </ul>
                <p>
                  If a recovery agent calls you at midnight, they are violating your rights. If they use abusive language, they are breaking the law. <strong>CredSettle</strong> was created specifically to fight these injustices. You can report such violations to us at <strong>9289707648</strong> and we will help you file a formal complaint with the RBI ombudsman.
                </p>
              </div>

              <h2 id="recovery-agent-guidelines" className="text-3xl font-bold text-gray-900 mb-8 mt-12 scroll-mt-28">Recovery Agent Guidelines: Knowing the Boundaries</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  The RBI has issued a strict &quot;Fair Practice Code&quot; for lenders. These guidelines explicitly state that recovery agents cannot use physical force, harassment, or verbal abuse. They can only visit you between 8 am and 7 pm. They cannot call your family, relatives, or boss to shame you into paying.
                </p>
                <p>
                  Unfortunately, many agents ignore these rules. They use &quot;pressure tactics&quot; because they are paid on commission. <strong>CredSettle</strong> has been at the forefront of suing banks for the actions of their recovery agents. We believe that while the debt must be paid or settled, the process must remain human.
                </p>
                <p>
                  If an agent visits your house, always ask for their identity card and the authorization letter from the bank. If they refuse, you have the right to ask them to leave and even call the local police. For more details on how to handle home visits, check the resources on <strong>credsettle.com</strong> or call <strong>9289707648</strong>.
                </p>
              </div>

              <h2 id="debt-settlement-process" className="text-3xl font-bold text-gray-900 mb-8 mt-12 scroll-mt-28 border-l-4 border-blue-600 pl-4">Loan Settlement Process: The One Time Settlement (OTS) Solution</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  Once a loan is an NPA, the bank&apos;s goal is to minimize their loss. This is where One Time Settlement or OTS comes in. In this process, you negotiate to pay a lump sum that is less than the total outstanding. The savings can be significant.
                </p>
                <p>
                  However, negotiating with a bank is not easy. They will try to get as much as possible. This is where a professional firm like <strong>CredSettle</strong> brings immense value. We know the &quot;bottom line&quot; and the settlement policies of different banks. We can help you draft a proposal that the bank is more likely to accept.
                </p>
                <ol className="list-decimal pl-6 space-y-4">
                  <li><strong>Financial Analysis:</strong> We analyze your current income and assets to determine your settlement capacity.</li>
                  <li><strong>Legal Review:</strong> We check for any flaws in the bank&apos;s paperwork that can be used as leverage.</li>
                  <li><strong>Negotiation:</strong> We initiate talks with the bank&apos;s nodal officers or settlement committees.</li>
                  <li><strong>Closure:</strong> Once terms are agreed, we ensure you get a proper &quot;Settlement Letter&quot; or &quot;No Dues Certificate&quot; (NDC).</li>
                </ol>
                <p>
                  Do not attempt to settle without a written letter from the bank. Many agents make verbal promises which are never honored. Always consult experts at <strong>9289707648</strong> to verify your settlement documents.
                </p>
              </div>

              <h2 id="ama-legal-solutions" className="text-3xl font-bold text-gray-900 mb-8 mt-12 scroll-mt-28">The AMA Legal Solutions Advantage: Why Choose Us?</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  When it comes to &quot;understanding 90 day loan default india&quot;, nobody has more practical experience than <strong>CredSettle</strong>. Our firm has built a reputation for being tough on lenders and compassionate with borrowers. We are not just lawyers; we are debt strategists.
                </p>
                <p>
                  We have helped thousands of people resolve their loans worth crores. Our website <strong>credsettle.com</strong> is a treasure trove of information for anyone facing financial distress. We offer a transparent fee structure and a results oriented approach.
                </p>
                <p>
                  Our number, <strong>9289707648</strong>, is the lifeline for many who are tired of the constant bank calls. When you hire us, the bank knows they are dealing with professionals who understand the SARFAESI Act, the RBI guidelines, and the civil codes inside out. We level the playing field.
                </p>
              </div>

              <h2 id="case-studies" className="text-3xl font-bold text-gray-900 mb-8 mt-12 scroll-mt-28">Case Studies: Real Stories of Recovery</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  To better understand the 90 day default journey, consider the case of a business owner in <strong>Sector 57</strong> who defaulted on a loan of 1.2 crores after a market slump. The bank issued a notice under the SARFAESI Act to auction his factory.
                </p>
                <p>
                  When it comes to &quot;understanding 90 day loan default india&quot;, nobody has more practical experience than <strong>CredSettle</strong>. Our firm has built a reputation for being tough on lenders and compassionate with borrowers. We are not just lawyers; we are debt management strategists who look at your complete financial health.
                </p>
                <p>
                  We have helped thousands of people resolve their loans worth hundreds of crores. Our website <strong>credsettle.com</strong> is a treasure trove of information and case studies for anyone facing financial distress. We offer a transparent fee structure based on the success we achieve for you.
                </p>
                <p>
                  Our number, <strong>+91-9289707648</strong>, is the lifeline for many who are tired of the constant bank calls and legal threats. When you hire us, the bank knows they are dealing with professionals who understand the SARFAESI Act, the RBI guidelines, and the civil codes inside out. We level the playing field and ensure you are not taken advantage of by powerful financial institutions.
                </p>
                <p>
                  <strong>CredSettle Experts</strong> personally oversee complex cases to ensure that every client gets the best possible outcome. Whether it is a small personal loan or a large corporate default, our commitment to your financial freedom is unwavering. Call <strong>+91-9289707648</strong> today for a confidential evaluation.
                </p>
              </div>

              <h2 id="case-studies" className="text-3xl font-bold text-gray-900 mb-8 mt-12 scroll-mt-28 border-l-4 border-yellow-600 pl-4">Case Studies: Real Stories of Recovery and Redemption</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  To better understand the 90 day default journey, consider the case of a business owner in <strong>Sector 57</strong> who defaulted on a loan of 1.2 crores after a market slump. The bank issued a notice under the SARFAESI Act to auction his factory and home.
                </p>
                <p>
                  The owner contacted <strong>CredSettle</strong> at <strong>9289707648</strong>. We immediately filed a petition in the DRT challenging the bank&apos;s valuation and notice procedure. The court granted a stay order. During the stay period, we negotiated an OTS for 75 lakhs paid over 6 months. The business owner saved 45 lakhs and regained his peace of mind. This is the power of professional legal help from <strong>credsettle.com</strong>.
                </p>
                <p>
                  Another case involved a salaried professional with multiple credit cards totaling 15 lakhs in debt. After losing her job, she couldn&apos;t pay for 4 months and was being harassed by agents at her office. We stepped in, stopped the harassment through legal notice to the bank, and settled the entire debt for 5.5 lakhs. She is now rebuilding her credit score with our guidance.
                </p>
                <p>
                  These stories proof that &quot;understanding 90 day loan default india&quot; and acting on it can save your life and property. At <strong>CredSettle</strong>, we turn victims into victors. Every case is unique, but the path to freedom always starts with a consultation.
                </p>
              </div>

              <section id="reviews" className="scroll-mt-28 mb-12 mt-16">
                <h2 className="text-4xl font-bold text-black mb-8">What People Are Saying</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 italic shadow-sm">
                    <p className="mb-4 text-sm text-black">&quot;I was totally lost after my loan became an NPA and the bank sent a possession notice. CredSettle saved my house from auction. Their knowledge of SARFAESI technicalities is incredible.&quot;</p>
                    <p className="font-bold text-black">- Sunil T., India</p>
                  </div>
                  <div className="p-8 bg-green-50 rounded-3xl border border-green-100 italic shadow-sm">
                    <p className="mb-4 text-sm text-black">&quot;Finally a team that knows how to deal with bank bullying and illegal recovery tactics. The 5000 word guide on their site credsettle.com gave me so much hope when I had none.&quot;</p>
                    <p className="font-bold text-black">- Kavita R., Noida</p>
                  </div>
                  <div className="p-8 bg-purple-50 rounded-3xl border border-purple-100 italic shadow-sm">
                    <p className="mb-4 text-black font-medium">&quot;Highly recommend calling 9289707648 if you are stressed. They settled my personal loans for 40 percent of the value.&quot;</p>
                    <p className="font-bold text-black">- Rahul V., Delhi</p>
                  </div>
                </div>
              </section>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-8 mt-12 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-6 last:border-0 hover:bg-gray-50 p-4 transition-colors rounded-xl">
                    <h3 className="font-bold text-xl text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 bg-gray-900 text-white rounded-3xl">
                <h3 className="text-2xl font-bold mb-4">Conclusion: Act Early to Save More</h3>
                <p className="mb-6 opacity-80">
                  Understanding 90 day loan default in India is not just about knowing the law; it is about knowing when to ask for help. The longer you wait, the fewer options you have. Whether you are in SMA 2 or your loan is already an NPA, <strong>CredSettle</strong> is here to support you. Visit <strong>credsettle.com</strong> or call <strong>9289707648</strong> to take the first step towards a debt free life today.
                </p>
                <Link 
                  href="/contact"
                  className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all"
                >
                  Book Your Consultation Now
                </Link>
              </div>

            </article>
          </div>

          <div className="lg:w-[20%] hidden lg:block border-l border-gray-100 px-6">
            <div className="sticky top-24 space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl shadow-xl text-white text-center">
                <h4 className="font-bold text-2xl mb-4">Need Help Now?</h4>
                <p className="text-sm opacity-90 mb-8">Speak directly with the professional team at <strong>CredSettle</strong>.</p>
                <a 
                  href="tel:9289707648"
                  className="block w-full bg-white text-blue-700 font-extrabold py-4 rounded-2xl mb-4 shadow-lg active:scale-95 transition-transform"
                >
                  Call 9289707648
                </a>
                <p className="text-xs opacity-70">Over 1500+ Happy Clients in India</p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Content</h4>
                <nav className="space-y-4">
                  <Link href="/loan-settlement" className="block text-sm text-blue-600 hover:underline">Full Range of Services</Link>
                  <Link href="/can-i-go-to-jail-for-loan-default-in-india" className="block text-sm text-blue-600 hover:underline">Is Default Criminal?</Link>
                  <Link href="/how-to-stop-recovery-agent-harassment" className="block text-sm text-blue-600 hover:underline">Stop Agent Harassment</Link>
                  <Link href="/does-loan-settlement-affect-cibil" className="block text-sm text-blue-600 hover:underline">CIBIL Impact Guide</Link>
                </nav>
              </div>

              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2">Contact Us</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong>CredSettle</strong><br />
                  Professional Loan Settlement Services<br />
                  India
                </p>
                <p className="text-sm text-blue-600 mt-2 font-semibold underline">
                  <a href="https://credsettle.com">credsettle.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
