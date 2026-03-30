'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function RecoveryAbuseClient() {
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
          ? 'border-blue-600 text-blue-600 font-bold bg-blue-50 py-1 rounded-r shadow-sm'
          : 'border-transparent text-gray-600 hover:text-blue-600 hover:pl-4'
      }`;
    }
  }

  const navLinks = [
    { id: 'introduction', label: 'The Modern Crisis' },
    { id: 'legal-truth', label: 'Can They Abuse You?' },
    { id: 'rbi-guidelines-2025', label: 'RBI Guidelines 2025' },
    { id: 'settlement-legality', label: 'Is Settlement Illegal?' },
    { id: 'civil-vs-criminal', label: 'No Jail Risk Explained' },
    { id: 'privacy-violations', label: 'Privacy & Data Rights' },
    { id: 'harassment-protection', label: 'Stop the Harassment' },
    { id: 'supreme-court-rulings', label: 'Judicial Precedents' },
    { id: 'ots-shield', label: 'The OTS Shield' },
    { id: 'checklist', label: 'Compliance Checklist' },
    { id: 'reviews', label: 'Success Stories' },
    { id: 'faqs', label: 'Critical FAQs' },
  ];

  const faqs = [
    {
      question: 'Can a recovery agent legally call my neighbors or boss?',
      answer: 'Absolutely not. The RBI Fair Practices Code strictly prohibits agents from disclosing your debt to third parties. Contacting your neighbors, friends, or employer to shame you is a gross violation of privacy and is completely illegal.'
    },
    {
      question: 'Is it true that loan settlement is an illegal act in India?',
      answer: 'This is a common myth spread by agents to scare you into full payment. The truth is that loan settlement is a valid, legal, and recognized financial process under RBI guidelines, often termed One-Time Settlement.'
    },
    {
      question: 'What happens if an agent visits my home after 7:00 PM?',
      answer: 'This is a violation of current RBI rules. Recovery agents are permitted to visit or call only between 8:00 AM and 7:00 PM. Any contact outside these hours should be documented and reported to the bank and the RBI Ombudsman.'
    },
    {
      question: 'Can the police arrest me for credit card default?',
      answer: 'No. Credit card default is a civil matter of breach of contract. The police generally do not interfere in purely civil disputes. Unless there is evidence of pre-planned fraud or a cheque bounce case, there is no criminal grounds for arrest.'
    },
    {
      question: 'What documents should a recovery agent show me during a visit?',
      answer: 'An agent is legally required to show you their identity card issued by the bank or the agency along with an authorization letter from the lending institution. If they fail to provide these, you have the right to refuse entry and ask them to leave.'
    },
    {
      question: 'Can agents use physical force to take back a vehicle on a defaulted loan?',
      answer: 'No. The Supreme Court has ruled that agents cannot use muscle power or force to repossess property. Repossession must follow the legal process defined under the SARFAESI Act or other relevant statutes, which involve proper legal notices.'
    },
    {
      question: 'Is it legal for recovery agents to use abusive language or threats?',
      answer: 'No. RBI guidelines expressly forbid the use of any form of verbal abuse, threats of physical harm, or intimidation tactics. Such behavior is a penal offense and can lead to heavy penalties for the bank.'
    },
    {
      question: 'How long does a settled status stay on my credit report?',
      answer: 'A settled account status usually remains on your credit report for up to seven years. However, this does not mean you cannot get credit again. By following a structured credit rebuilding plan, you can improve your score much sooner.'
    },
    {
      question: 'Can I file an FIR against a recovery agent for harassment?',
      answer: 'Yes. If an agent uses criminal intimidation, trespasses on your property, or uses physical violence, you can file an FIR against the agent and the bank.'
    },
    {
      question: 'Why should I choose CredSettle for handling my debt issues?',
      answer: 'CredSettle provides a legal shield between you and recovery agents. Our team of legal experts understands RBI guidelines perfectly and negotiates directly with banks to reach a legitimate settlement while stopping all forms of illegal harassment.'
    }
  ];

  return (
    <>
      {/* Breadcrumb Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex text-sm text-gray-500 font-medium" aria-label="Breadcrumb">
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
                    Recovery Agent Abuse Rights
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
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Contents</h3>
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
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Modern Crisis of Debt Harassment in India</h2>
              <div className="text-gray-700 leading-relaxed mb-10">
                <p className="mb-4">
                  In the rapidly evolving financial landscape of India, where credit availability has reached unprecedented levels, a dark shadow often follows the promise of easy loans. This shadow is personified by the aggressive recovery tactics used by many banks and Non-Banking Financial Companies or NBFCs. For millions of honest borrowers who find themselves in financial distress due to job losses, business failures, or medical emergencies, the experience of debt recovery often turns from a professional follow-up into a living nightmare of harassment and psychological warfare.
                </p>
                <p>
                  The question &quot;can recovery agents abuse you legally in india&quot; is one that echoes in the minds of thousands of people every single day. The short answer is a definitive and absolute no. However, the gap between what is legal and what actually happens on the ground is vast. Most recovery agents operate on the assumption that the average borrower is unaware of their legal rights and can be easily intimidated into paying by using threats of jail, police action, or social shaming.
                </p>
              </div>

              <h2 id="legal-truth" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Can Recovery Agents Abuse You Legally?</h2>
              <div className="text-gray-700 leading-relaxed mb-10">
                <p className="mb-4">
                  Let us start with the most fundamental core of the issue: the legality of abuse. There is no provision under Indian law, including the Banking Regulation Act or the Reserve Bank of India guidelines, that grants ANY recovery agent the right to use physical force, verbal abuse, or psychological intimidation. Any such act is not just a violation of guidelines; it is a criminal offense under the Indian Penal Code.
                </p>
                <p>
                  Recovery agents often use a variety of &quot;grey area&quot; tactics that they claim are part of their duty. They might tell you that shouting at your doorstep is a way of &quot;sending a message&quot; or that calling your distant relative is &quot;part of the background check.&quot; These are blatant lies. These actions are designed to cause mental agony and social shaming, which are strictly prohibited by the RBI Fair Practices Code.
                </p>
              </div>

              <h2 id="rbi-guidelines-2025" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">RBI Guidelines for Recovery Agents 2024 to 2025</h2>
              <div className="text-gray-700 leading-relaxed mb-10">
                <p className="mb-4">
                  The Reserve Bank of India has been proactive in tackling the menace of aggressive debt recovery. Over the years, the RBI has issued multiple circulars, most notably in 2022 and updated for the years 2024 and 2025, which lay down strict rules for banks and NBFCs regarding their recovery practices.
                </p>
                <ul className="list-disc pl-6 space-y-4 font-normal">
                  <li><strong>Strict Calling and Visitation Hours:</strong> Agents can only contact borrowers between 8:00 AM and 7:00 PM. Any contact outside these hours is a direct violation.</li>
                  <li><strong>No Harassment of Third Parties:</strong> Agents must respect the privacy of the borrower. They cannot disclose the details of the loan or the default status to anyone other than the borrower themselves.</li>
                  <li><strong>Prohibition of Abusive Language:</strong> The use of foul language, derogatory remarks, or physical threats is strictly forbidden.</li>
                  <li><strong>Identification:</strong> Any agent visiting your home must carry their official ID card and a formal letter of authorization from the bank.</li>
                </ul>
              </div>

              <h2 id="settlement-legality" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Is Loan Settlement Illegal in India?</h2>
              <div className="text-gray-700 leading-relaxed mb-10">
                <p className="mb-4">
                  One of the most persistent lies used by recovery agents is the claim that loan settlement is illegal or a &quot;criminal act.&quot; They tell borrowers that by settling, they are cheating the bank and will be blacklisted by the government. We need to clear the air once and for all: This is a myth.
                </p>
                <p>
                  In the eyes of the law and the RBI, loan settlement is a perfectly valid and recognized financial process. It is officially known as a &quot;Compromise Settlement&quot; or &quot;One-Time Settlement&quot; (OTS). It is a process where the lender agrees to accept a lower amount than the total outstanding to close the account permanently. It helps banks clean up their balance sheets by removing NPAs.
                </p>
              </div>

              <h2 id="civil-vs-criminal" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Civil Breach vs Criminal Offense</h2>
              <div className="text-gray-700 leading-relaxed mb-10">
                <p className="mb-4">
                  The fear of imprisonment is the most potent weapon in a recovery agent&apos;s arsenal. They will often threaten you with Section 420 of the IPC. However, you must understand the critical legal distinction between a civil breach of contract and a criminal act of cheating.
                </p>
                <p>
                  A loan default is a civil matter. In India, you cannot be arrested for being poor or for being unable to pay a debt. Standard personal loans and credit card defaults are civil issues. For a default to become &quot;cheating,&quot; the bank must prove that you had a dishonest intention from day one. If you have paid even a few EMIs, it proves your intention was honest.
                </p>
              </div>

              <h2 id="privacy-violations" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Privacy Violations and Data Rights</h2>
              <div className="text-gray-700 leading-relaxed mb-10">
                <p className="mb-4">
                  Recovery agents often use sophisticated methods to scrape your contact list. They then use this list to call your friends or parents to shame you. This is a severe violation of the Digital Personal Data Protection Act and the RBI guidelines.
                </p>
                <p>
                  A bank or an agent has zero legal permission to share your loan status with anyone else. If an agent calls your brother and tells him you are a &quot;defaulter,&quot; they are committing a tort of defamation and a breach of privacy. You can legally sue the bank for damages for the mental agony and reputation loss caused.
                </p>
              </div>

              <h2 id="harassment-protection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">How to Stop Recovery Agent Harassment</h2>
              <div className="text-gray-700 leading-relaxed mb-10">
                <p className="mb-4">If you are currently facing abuse, do not stay silent. Follow this proven legal strategy:</p>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>Record and Document:</strong> Every call, every SMS, and every home visit must be recorded.</li>
                  <li><strong>Formal Internal Complaint:</strong> Send a detailed email to the bank&apos;s Nodal Officer and Grievance Redressal Officer.</li>
                  <li><strong>The RBI Ombudsman:</strong> Escalated it to the RBI Ombudsman through the CMS portal if the bank doesn&apos;t resolve it in 30 days.</li>
                  <li><strong>Legal Help:</strong> Engaging a specialized firm like CredSettle can change the game by acting as your official legal representative.</li>
                </ul>
              </div>

              <h2 id="supreme-court-rulings" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Supreme Court Judgments on Debt Recovery</h2>
              <div className="text-gray-700 leading-relaxed mb-10">
                <p className="mb-4">
                  The Indian judiciary has been the greatest protector of borrower rights. In the famous case of ICICI Bank vs. Shanti Devi Sharma, the Supreme Court took a very stern view of banks using muscle men for recovery. The court established that the &quot;right to live with dignity&quot; under Article 21 of the Constitution is supreme.
                </p>
              </div>

              <h2 id="ots-shield" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The OTS Shield: Your Best Legal Exit</h2>
              <div className="text-gray-700 leading-relaxed mb-10">
                <p className="mb-4">
                  One-Time Settlement or OTS allows you to close a dark chapter of your financial life through a single, negotiated payment that is often much lower than your total outstanding amount. Once you have a formal settlement letter and make the payment, the bank is legally barred from further recovery.
                </p>
              </div>

              <h2 id="checklist" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Compliance Checklist</h2>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-10">
                <ul className="space-y-4 list-none pl-0">
                  <li className="flex items-center gap-2 text-black font-medium"><span className="text-green-600 font-bold">✓</span> Are they calling only between 8:00 AM and 7:00 PM?</li>
                  <li className="flex items-center gap-2 text-black font-medium"><span className="text-green-600 font-bold">✓</span> Did they show a valid ID card and Authorization letter?</li>
                  <li className="flex items-center gap-2 text-black font-medium"><span className="text-green-600 font-bold">✓</span> Have they avoided calling your coworkers?</li>
                  <li className="flex items-center gap-2 text-black font-medium"><span className="text-green-600 font-bold">✓</span> Are they using professional language?</li>
                  <li className="flex items-center gap-2 text-black font-medium"><span className="text-green-600 font-bold">✓</span> Have they avoided threats of jail?</li>
                </ul>
              </div>

              <section id="reviews" className="scroll-mt-28 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                    <p className="text-gray-700 italic mb-4">&quot;I was living in constant fear because recovery agents were calling my office. CredSettle stepped in and stopped the calls in 48 hours. I settled my 5 lakh debt for 1.8 lakhs legally.&quot;</p>
                    <p className="font-bold text-blue-900">- Ankit S.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                    <p className="text-gray-700 italic mb-4">&quot;Agents came to my house after 7 PM. Team CredSettle helped me file an Ombudsman complaint. The bank had to apologize and pay a penalty. I have finally settled.&quot;</p>
                    <p className="font-bold text-blue-900">- Sunita V.</p>
                  </div>
                </div>
              </section>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>

            </article>
          </div>

          {/* Right Column: CTA & Related (Sticky) */}
          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Legal Shield</h4>
                <p className="text-sm text-gray-600 mb-6">Are you being threatened with jail? Our experts protect you using RBI guidelines.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Consult Now
                </Link>
                <div className="mt-4 text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                  <p>100% Confidential</p>
                  <p className="mt-1">RBI Compliant Process</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2 uppercase tracking-wide text-xs">Legal Know-How</h4>
                <div className="space-y-4">
                  {[
                    { h: "/loan-settlement", t: "Master Guide" },
                    { h: "/do-banks-file-fir-for-credit-card-dues", t: "Can Banks FIR?" },
                    { h: "/understanding-90-day-loan-default-india", t: "90 Day Default" },
                    { h: "/is-loan-settlement-illegal-in-india-truth", t: "Legality Truth" }
                  ].map((page, i) => (
                    <Link key={i} href={page.h} className="group block">
                      <p className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors leading-tight">{page.t}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bank Settlement Directory Grid */}
      <div className="max-w-[1440px] mx-auto px-4 py-12 border-t border-gray-200 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Settlement Services by Bank</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { name: 'HDFC Bank', href: '/loan-settlement/hdfc' },
            { name: 'SBI (State Bank of India)', href: '/loan-settlement/sbi' },
            { name: 'ICICI Bank', href: '/loan-settlement/icici' },
            { name: 'IndusInd Bank', href: '/loan-settlement/indusind' },
            { name: 'Axis Bank', href: '/loan-settlement/axis-bank' },
            { name: 'Kotak Mahindra Bank', href: '/loan-settlement/kotak' },
            { name: 'IDFC First Bank', href: '/loan-settlement/idfc' },
            { name: 'Yes Bank', href: '/loan-settlement/yes-bank' },
            { name: 'RBL Bank', href: '/loan-settlement/rbl-bank' },
            { name: 'Bajaj Finserv', href: '/loan-settlement/bajaj-finserv' },
            { name: 'Aditya Birla Capital', href: '/loan-settlement/aditya-birla' },
            { name: 'Hero Fincorp', href: '/loan-settlement/hero-fincorp' },
            { name: 'Union Bank', href: '/loan-settlement/union-bank' },
            { name: 'Federal Bank', href: '/loan-settlement/federal-bank' },
            { name: 'Bank of Baroda', href: '/loan-settlement/bank-of-baroda' },
            { name: 'DMI Finance', href: '/loan-settlement/dmi-finance' },
            { name: 'Kisetsu Saison Finance', href: '/loan-settlement/kisetsu' },
            { name: 'SMFG India Credit', href: '/loan-settlement/smfg-india-credit' },
            { name: 'Fibe (EarlySalary)', href: '/loan-settlement/fibe' },
            { name: 'Poonawalla Fincorp', href: '/loan-settlement/poonawalla' },
            { name: 'Tata Capital', href: '/loan-settlement/tata-capital' },
            { name: 'KrazyBee (KreditBee)', href: '/loan-settlement/krazybee' },
            { name: 'Piramal Finance', href: '/loan-settlement/piramal-finance' },
            { name: 'Stashfin (Akara Capital)', href: '/loan-settlement/stashfin' },
            { name: 'AU Small Finance Bank', href: '/loan-settlement/au-small-finance-bank' },
            { name: 'PayU Finance', href: '/loan-settlement/payu-finance' },
          ].map((bank) => (
            <Link 
              key={bank.href}
              href={bank.href}
              className="flex items-center p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
              <span className="text-gray-700 font-medium group-hover:text-blue-700">{bank.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Areas We Serve In Grid */}
      <div className="max-w-[1440px] mx-auto px-4 py-12 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Areas We Serve In</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { name: 'Andhra Pradesh', href: '/loan-settlement/andhra-pradesh' },
            { name: 'Delhi', href: '/loan-settlement/delhi' },
            { name: 'Gujarat', href: '/loan-settlement/gujarat' },
            { name: 'Haryana', href: '/loan-settlement/haryana' },
            { name: 'Karnataka', href: '/loan-settlement/karnataka' },
            { name: 'Maharashtra', href: '/loan-settlement/maharashtra' },
            { name: 'Rajasthan', href: '/loan-settlement/rajasthan' },
            { name: 'Tamil Nadu', href: '/loan-settlement/tamil-nadu' },
            { name: 'Telangana', href: '/loan-settlement/telangana' },
            { name: 'Uttar Pradesh', href: '/loan-settlement/uttar-pradesh' },
            { name: 'West Bengal', href: '/loan-settlement/west-bengal' },
          ].map((area) => (
            <Link 
              key={area.href}
              href={area.href}
              className="flex items-center p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
              <span className="text-gray-700 font-medium group-hover:text-blue-700">{area.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
