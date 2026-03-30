'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function RecoveryHarassmentClient() {
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
    { id: 'introduction', label: 'Introduction' },
    { id: 'legal-foundation', label: 'The Legal Foundation' },
    { id: 'rbi-framework', label: 'RBI Regulatory Framework' },
    { id: 'permissible-conduct', label: 'Permissible Hours and Conduct' },
    { id: 'doorstep-protocol', label: 'Handling Doorstep Visits' },
    { id: 'psychology-intimidation', label: 'Psychology of Intimidation' },
    { id: 'shaming-tactics', label: 'The Science of Shaming' },
    { id: 'criminal-violations', label: 'Criminal Law and IPC' },
    { id: 'privacy-defenses', label: 'Protecting Your Privacy' },
    { id: 'workplace-safety', label: 'Stop Office Harassment' },
    { id: 'digital-harassment', label: 'Digital Recovery Harassment' },
    { id: 'bank-behaviors', label: 'Specific Bank Cultures' },
    { id: 'regional-laws', label: 'State and Regional Laws' },
    { id: 'sarfaesi-harassment', label: 'SARFAESI vs Harassment' },
    { id: 'evidence-collection', label: 'Collecting Solid Evidence' },
    { id: 'bank-complaints', label: 'Formal Bank Complaints' },
    { id: 'rbi-ombudsman', label: 'RBI Ombudsman Guide' },
    { id: 'police-action', label: 'Police Action and FIR' },
    { id: 'civil-remedies', label: 'Civil Court Injunctions' },
    { id: 'consumer-protection', label: 'Consumer Forum Claims' },
    { id: 'legal-shield', label: 'Power of Legal Notices' },
    { id: 'women-rights', label: 'Rights of Women Borrowers' },
    { id: 'medical-emergency', label: 'Medical and Senior Cases' },
    { id: 'mental-wellbeing', label: 'Managing Debt Stress' },
    { id: 'credsettle-impact', label: 'The CredSettle Advantage' },
    { id: 'future-rules-2026', label: 'RBI Rules: 2026 Update' },
    { id: 'court-precedents', label: 'Judicial Precedents' },
    { id: 'checklists', label: 'Defense Checklists' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'Can recovery agents call my boss or office HR?',
      answer: 'No. Contacting your employer or HR to discuss your personal debt is a massive breach of confidentiality and is strictly prohibited by RBI. They can only contact you at your workplace if you have not provided other communication channels, but they cannot disclose your debt to anyone else.'
    },
    {
      question: 'What if an agent threatens me with a police arrest?',
      answer: 'This is a lie. Recovery agents have no power to arrest anyone. Loan default is a civil matter in India, not a criminal one. Only a court can issue an arrest warrant, and that too only in specific criminal cases like fraud.'
    },
    {
      question: 'Am I required to talk to agents when they visit my home?',
      answer: 'You are not legally forced to engage in a long conversation. You can verify their ID, state that you are working on the resolution, and ask them to leave your property. If they refuse to leave, it is criminal trespass.'
    },
    {
      question: 'Can agents use WhatsApp to shame me?',
      answer: 'Absolutely not. Sending messages to your contacts or creating groups to shame you is illegal. The RBI has taken very strict action against digital lenders for these specific tactics.'
    },
    {
      question: "Is there a limit on how many calls I can receive in a day?",
      answer: "While the RBI doesn’t give a specific number, excessive calling that disrupts your life is classified as harassment. Most legal experts consider more than 3 to 5 calls a day as excessive."
    },
    {
      question: "What documents should a recovery agent carry?",
      answer: "A valid agent ID card from the bank or agency, a copy of the bank’s authorization letter naming the agency, and the specific visit letter for your case."
    },
    {
      question: "Can a bank agent visit me on a Sunday?",
      answer: "The RBI permits contact during social hours (8 AM to 7 PM). While Sundays aren’t explicitly banned, they are generally considered non-working days for recovery unless the borrower has specifically requested a Sunday visit."
    },
    {
      question: "Can I sue a bank for my agent’s behavior?",
      answer: "Yes. Banks are 100% vicariously liable for the actions of their outsourced agents. You can sue for defamation, harassment, and mental agony in a Consumer Court or Civil Court."
    },
    {
      question: "What is the role of the RBI Ombudsman?",
      answer: "The Ombudsman is a senior official appointed by the RBI to resolve grievances against banks. If the bank doesn’t solve your harassment complaint, the Ombudsman can force them to apologize and pay compensation."
    },
    {
      question: 'How can CredSettle stop my calls permanently?',
      answer: 'By becoming your authorized legal representative. We send a formal notice to the bank taking over all communication. Legally, the bank must then stop direct collection efforts and deal with us.'
    }
  ];

  const reviews = [
    {
      name: "Manisha Verma",
      location: "Bhopal",
      rating: 5,
      text: "I was scared to open my door because of these agents. CredSettle took over my case and the harassment stopped immediately. I am now paying my settlement in easy EMIs.",
      date: "Jan 2025"
    },
    {
      name: "Rohan Das",
      location: "Kolkata",
      rating: 5,
      text: "The bank agents were calling my wife and daughter. It was reaching a breaking point. CredSettle legal notices brought an instant end to it. Very professional team.",
      date: "Dec 2024"
    },
    {
      name: "Karthik Raja",
      location: "Chennai",
      rating: 5,
      text: "Unannounced visits at my office were ruining my reputation. The CredSettle team coordinated with the bank’s nodal officer and stopped all visits. Grateful for their help.",
      date: "Feb 2025"
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
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    How to Stop Recovery Agent Harassment
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-full mx-auto px-4 py-12">
        {/* Mobile Sticky Nav */}
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
                <h3 className="font-bold text-gray-900 mb-6 text-lg border-b pb-3">Guide Segments</h3>
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
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28 leading-tight">Defeating Debt Stress: The Ultimate Resource on How to Stop Recovery Agent Harassment</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  Financial struggles are a reality for millions of hardworking Indians. However, owing money to a bank or a credit card company does not mean you have surrendered your human rights. In recent years, the aggressive nature of debt collection has reached alarming levels. Many borrowers find themselves trapped in a cycle of fear, receiving hundreds of calls a day and facing unannounced visits at their homes or offices. This guide is designed to empower you with the exact knowledge of <strong>how to stop recovery agent harassment</strong> by utilizing the robust legal and regulatory framework available in our country.
                </p>
                <p>
                  The Reserve Bank of India (RBI) has time and again stated that banks and NBFCs are responsible for the conduct of their recovery agents. The law is clear: recovery must be done through civil means and with absolute respect for the borrower’s privacy and dignity. Unfortunately, the ground reality is often different because agents rely on the borrower’s lack of awareness. They use intimidation, shouting, and public shaming as psychological tools to force payments. This article provides a massive in-depth strategy to turn the tables on these aggressive tactics.
                </p>
                <p>
                  At CredSettle, we believe that debt is a business problem that requires a business solution, not a personal trial by fire. This guide will walk you through constitutional protections, the latest RBI 2025 mandates, specific IPC sections for criminal complaints, and the practical steps to handle doorstep confrontations. Whether you are dealing with a personal loan default or mounting credit card debt, the strategies laid out here will help you reclaim your life and your residential peace.
                </p>
                <p>
                  The journey to stopping harassment starts with a single decision: to stop being a victim and start being an informed citizen. We will explore how to document evidence, how to file official complaints that the banks cannot ignore, and how to eventually exit your debt through legal settlement. Let us begin this deep dive into the world of borrower rights and defensive strategies.
                </p>
                <p>
                  In the coming chapters, we will dissect every tactic used by collection agencies and provide you with a counter-move. From the legal definitions of trespass and intimidation to the specific digital portals where you can report violations, this guide is your legal shield. We will also discuss the role of professional debt relief firms in providing a buffer between you and the aggressive collectors.
                </p>
              </div>

              <h2 id="legal-foundation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Shield of the State: Your Constitutional and Legal Rights</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Your first line of defense is the Constitution of India. Under <strong>Article 21</strong>, every individual is guaranteed the right to life and personal liberty, which includes the right to live with dignity. The Supreme Court of India has interpreted this to mean that the recovery of a debt cannot be done in a way that humiliates or degrades a human being. A loan is a contract, not a license for a bank to invade your privacy.
                </p>
                <p>
                  The Right to Privacy is now a fundamental right according to the landmark Puttaswamy judgment. This means that a recovery agent disclosing your debt to your neighbors, security guards, or relatives is a direct violation of the law. Your financial situation is a private matter between you and the lender. Any attempt to use "social shaming" as a recovery tool is unconstitutional and provides you with a strong ground for several legal actions.
                </p>
                <p>
                  Furthermore, the Right to Safety is paramount. Any physical touch, aggressive gesturing, or even high-volume shouting that causes a sense of fear is a violation of your personal space. The Indian legal system does not permit private individuals to use force or intimidation for debt recovery. Only authorized officers of the law, acting under a court order, have such powers, and even they must follow a strict legal protocol.
                </p>
                <p>
                  It is also important to understand the concept of "Freedom from Harassment" in the workplace. Your employment is your livelihood, and any act by a bank that jeopardizes your job by creating a scene in your office is a violation of your right to earn a living. The judiciary has been very protective of borrowers in this regard, often granting heavy damages against banks that interfere with a person’s professional life.
                </p>
              </div>

              <h2 id="rbi-framework" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Master Rulebook: RBI Fair Practices Code for 2025</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  If you want to know <strong>how to stop recovery agent harassment</strong>, you must become familiar with the RBI Circular <strong>RBI/2022-23/108</strong>. This document is the bible for borrower protection. It mandates that lenders must have a board approved policy for recovery, and they are fully responsible for the actions of their agents.
                </p>
                <p>
                  <strong>Transparency Requirements:</strong> One of the most violated rules is the requirement of prior notice. A bank must provide you with the details of the recovery agency assigned to your case before they start their activities. If a random person calls you claiming to be an agent without this prior information from the bank, they are in violation of transparency norms. This notice must be in writing and should include the name of the agency and the authorized agent.
                </p>
                <p>
                  <strong>Training and Certification:</strong> Every recovery agent is supposed to undergo a mandatory training program and get certified by the Indian Institute of Banking and Finance (IIBF). When an agent is aggressive, it is likely they have not been trained or they are choosing to ignore their training. You have the right to ask for their certification and the agency they represent. A certified agent knows that harassment can lead to their permanent blacklisting.
                </p>
                <p>
                  <strong>Grievance Mechanism:</strong> The RBI mandates that every bank must have a dedicated channel for complaints against recovery conduct. This is not the regular customer care: it is the Nodal Officer or the Grievance Redressal Officer. Your strategy should involve documenting the harassment and then sending it directly to these high-level officials, bypassing the lower-level staff who often shield the agencies.
                </p>
              </div>

              <h2 id="permissible-conduct" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Timing and Tone: Permissible Hours and Conduct</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The RBI is very specific about when and how you can be contacted. Understanding these Social Boundaries is key to identifying harassment.
                </p>
                <p>
                  <strong>The 8 AM to 7 PM Rule:</strong> Contacts for recovery, whether via phone or in-person visits, are strictly limited to the hours between 8:00 AM and 7:00 PM. Any call at 9:00 PM or a visit at 7:30 AM is an illegal act of harassment. This rule exists to protect your rest and your family’s privacy. Banks that violate this window are subject to heavy penalties from the regulator.
                </p>
                <p>
                  <strong>Frequency of Contact:</strong> While there is no hard number in the circular, the principle of non-interference applies. If an agent calls you 30 times a day, even within the allowed hours, it is a form of psychological harassment. The goal of recovery communication should be to set up a repayment plan, not to disrupt your ability to work or sleep. You can document these call logs as a breach of the Fair Practices Code.
                </p>
                <p>
                  <strong>Prohibition of Obscenity:</strong> Use of abusive language, profanity, or shouting is strictly forbidden. The RBI guidelines explicitly state that agents must use polite and professional language. Any deviation from this is a ground for immediate complaint to the bank and potentially the police. A recorded call of an agent using a single abusive word is enough to terminate their agency contract.
                </p>
                <p>
                  <strong>Special Occasions:</strong> RBI guidelines suggest that agents should avoid visiting or calling on days of mourning, weddings, or major festivals unless the borrower has requested it. Disregarding these sensitive occasions is seen as a sign of predatory intent and can be used as evidence of harassment.
                </p>
              </div>

              <h2 id="doorstep-protocol" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Doorstep Lockdown: Handling In-Person Visits</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  A visit to your home is the most intimidating form of harassment. Here is the professional protocol on <strong>how to stop recovery agent harassment</strong> at your door:
                </p>
                <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-8">
                  <ul className="list-none space-y-4 pl-0">
                    <li className="flex gap-4">
                      <span className="font-bold text-blue-600">Phase 1:</span>
                      <span><strong>Verification:</strong> Do not open the door fully. Ask for their official ID card and the bank’s authorization letter. Take a photo of these documents through the door or window. This identifies the individual and the agency who will be responsible for any misconduct.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-bold text-blue-600">Phase 2:</span>
                      <span><strong>Boundaries:</strong> Clearly state: "I will talk to you here at the door. I will not allow you inside my private residence. This is a recorded conversation." This establishes your legal control over your property.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-bold text-blue-600">Phase 3:</span>
                      <span><strong>Evidence:</strong> Start recording a video on your phone. If they object, tell them it is for mutual safety and legal records as per RBI norms. Recording is your most powerful defense against verbal abuse.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-bold text-blue-600">Phase 4:</span>
                      <span><strong>Termination:</strong> After a few minutes, if they are not offering a constructive solution, say: "I have noted your visit. You can leave now. Any further loitering will be reported as criminal trespass." Be firm and do not get drawn into an emotional argument.</span>
                    </li>
                  </ul>
                </div>
                <p>
                  Remember, a recovery agent has NO legal right to enter your house without your permission. If they push the door or step inside, they are committing a crime. You should immediately call your building security and the police. Showing that you are not afraid to call the authorities is the fastest way to make an agent leave. Never sign any blank forms or "Visit Logs" without reading them, as these can be used to prove you consented to things you did not.
                </p>
              </div>

              <h2 id="psychology-intimidation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Mind Game: Understanding the Psychology of Intimidation</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Harassment is a calculated mind game. The agent’s goal is to move you from a state of Logical Planning to a state of Emotional Panic. When you are in panic, you are more likely to make a rash payment, even if it means borrowing from someone else or skipping your children’s school fees. They are trained to find your "Breaking Point."
                </p>
                <p>
                  They often use False Urgency. They might say: "If you don’t pay by 4 PM, a police team will come to arrest you." This is 100% false. Police do not work for banks. Legal processes in India take months, if not years. When you hear a threat of "today or never," recognize it as a lie designed to induce panic. A common tactic is to fake "Police Status" or use heavy legal terms to sound like an authority figure.
                </p>
                <p>
                  Another trick is the Good Cop, Bad Cop routine, where one agent is very aggressive on the phone, and then another "Senior Manager" calls and pretends to be kind, saying they can "save you" if you make a quick partial payment. Both are working for the same agency. Do not fall for the kindness; stick to the legal facts of your debt and your rights.
                </p>
              </div>

              <h2 id="shaming-tactics" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Science of Shaming: How to Neutralize it</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Shaming is not an accidental byproduct of debt collection; it is a primary strategy. Agents know that for most Indians, the social status is a greater fear than the debt itself. By creating a public scene at your doorstep or shouting in your building’s lobby, they are not trying to collect money from you in that moment. They are trying to damage your Social Capital.
                </p>
                <p>
                  When your social standing is threatened, you lose your ability to think rationally. This is exactly what the agencies want. A panicked borrower makes mistakes: they borrow more money at higher interest rates to pay off the current harassment, or they sell essential assets in a hurry. To stop this, you must Socially Vaccinate yourself. Speak to your trusted neighbors, your building secretary, or your close friends. Tell them: "I am having a dispute with a bank, and their agents might try to create a scene. Do not be surprised or believe their lies." Once the Secret is out, the agent loses their most powerful weapon.
                </p>
                <p>
                  Furthermore, public shaming is a violation of the Law of Torts. You can actually sue for Defamation if an agent speaks loudly about your debt in a public place with the intent to lower your reputation. Modern courts have been very strict about this, often awarding damages that exceed the value of the loan itself. A borrower who is not afraid of being seen is a borrower who cannot be harassed.
                </p>
              </div>

              <h2 id="criminal-violations" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Penal Code Protection: Criminal Laws in India</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Harassment often crosses the line from a civil dispute to a criminal offense. Knowing these sections of the Indian Penal Code (IPC) is vital for your defense.
                </p>
                <ul className="space-y-4">
                  <li className="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                    <strong>Section 503/506 (Criminal Intimidation):</strong> If an agent threatens to hurt you, your family, or your property, they are committing a crime punishable by up to two years of imprisonment. This includes threats of "Police Action" which they have no power to take.
                  </li>
                  <li className="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                    <strong>Section 441/447 (Criminal Trespass):</strong> Entering your property with the intent to intimidate or annoy you, or refusing to leave when asked. This applies even to the lobby of your apartment if you have asked them to leave.
                  </li>
                  <li className="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                    <strong>Section 504 (Intentional Insult):</strong> Shouting and using abusive language with the intent to provoke a breach of peace or cause public disturbance.
                  </li>
                  <li className="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                    <strong>Section 509:</strong> Specifically for protecting the modesty and dignity of women. Any gesture or word intended to insult a woman borrower is a serious offense that can lead to immediate arrest of the agent.
                  </li>
                  <li className="p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
                    <strong>Section 383/384 (Extortion):</strong> Putting a person in fear of injury and thereby dishonestly inducing them to deliver any property or money. If they demand "Cash" or "Undocumented Payments" under threat, this belongs here.
                  </li>
                </ul>
                <p>
                  When you mention these specific sections to an agent, you signal to them that you are not just a debtor but a legally aware citizen. We have seen agents literally run away when a borrower starts recording and says, "I am filing a complaint under Section 506 right now." Always insist on a formal receipt for every rupee you pay.
                </p>
              </div>

              <h2 id="privacy-defenses" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Digital Fortress: Protecting Your Privacy</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Modern harassment happens on your phone. Here is how to lock down your digital life:
                </p>
                <p>
                  <strong>Call Filtering:</strong> Use apps to identify and block verified Scam or Debt Recovery numbers. However, do not block the official bank numbers, as you need to receive official communication. Use the "DND" registration on your phone to reduce unsolicited calls, although this is often ignored by illegal agencies.
                </p>
                <p>
                  <strong>WhatsApp Protection:</strong> If agents are messaging you on WhatsApp, block them immediately. Do not engage in an argument. Screenshot the chat before blocking it, as this is vital evidence. Enable privacy settings so that only your contacts can see your profile photo and status. Some agents try to use "WhatsApp Status Shaming" by tagging you; report these accounts to WhatsApp immediately.
                </p>
                <p>
                  <strong>Social Media Lockdown:</strong> Many aggressive agents try to find you on Facebook or LinkedIn to contact your friends. Make your profiles private immediately if you are facing harassment. Never accept friend requests from people you do not know when you are in a debt recovery cycle.
                </p>
              </div>

              <h2 id="workplace-safety" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Professional Shield: Stopping Office Harassment</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Your workplace is a highly sensitive area. Agents use office visits to create Career Fear. They know you are vulnerable because you don’t want your colleagues or boss to know about your debt.
                </p>
                <p>
                  <strong>Legal Position:</strong> Agents have zero right to tell your boss or HR about your loan. Doing so is a major violation of banking confidentiality. If they visit your office, follow the same Verification steps as you would at home. Inform your office security that you are being harassed by a specific agency and that they should not be allowed entry. Your HR should be informed that a "Disputed Debt" is causing harassment from unauthorized people.
                </p>
                <p>
                  If an agent creates a disturbance at your workplace that leads to disciplinary action against you, you have a very strong case for civil damages against the bank. Document every minute of an office visit. The RBI takes workplace harassment very seriously and often penalizes banks heavily for such conduct.
                </p>
              </div>

              <h2 id="digital-harassment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Digital Warfare: Stopping WhatsApp and SMS Harassment</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The most pervasive form of harassment today is digital. Agents use burner SIM cards to send threatening messages, often including Fake Legal Notices or Fake Police Summons.
                </p>
                <p>
                  <strong>1. Identifying Fake Notices:</strong> A real legal notice will come as a physical registered post or from a verified bank email. It will have a Bar Council number of an advocate. It will NOT be a PDF sent on WhatsApp with emojis and red fonts. If you receive such a message: do not panic. It is a Draft designed to scare you. A real notice never Uses aggressive or insulting language.
                </p>
                <p>
                  <strong>2. WhatsApp Shaming:</strong> If an agent creates a group with your family or friends, they are in severe violation of the Information Technology Act and RBI privacy norms. Take immediate screenshots. This is Cyber Harassment. You can file a complaint on the National Cyber Crime Reporting Portal (cybercrime.gov.in). This is one of the fastest ways to get an agency’s digital operations shut down.
                </p>
                <p>
                  <strong>3. Call Bombing:</strong> Some agencies use automated software to call you every minute. This is a violation of Telecom Regulatory Authority of India (TRAI) norms. You can report these numbers to the Unsolicited Commercial Communication (UCC) portal. Also, record a video of your phone screen while it is "bombarded" with calls as proof of harassment.
                </p>
              </div>

              <h2 id="bank-behaviors" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Bank-Specific Recovery Behaviors: What to Expect</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Different financial institutions in India have different Recovery Cultures. Knowing who you are dealing with helps in tailoring your defense.
                </p>
                <p>
                  <strong>1. Private Sector Giants (HDFC, ICICI, Axis):</strong> These banks have massive recovery operations. They often outsource to multiple agencies who compete with each other. This competition leads to high aggression. However, because they are large public-facing brands, they are very sensitive to Social Media Escalation and formal RBI complaints. A well-worded tweet tagging the bank’s CEO and the RBI often gets faster results than a simple customer care call.
                </p>
                <p>
                  <strong>2. Public Sector Banks (SBI, PNB, BOB):</strong> Generally more professional and slower in their recovery efforts. They rely more on formal legal notices rather than daily doorstep harassment. However, their legal actions are often more serious and harder to ignore. They tend to stick to the rulebook but can be very rigid in negotiations.
                </p>
                <p>
                  <strong>3. Fintech Apps and NBFCs:</strong> These are the Wild West of recovery. Many operate on the edge of the law, using Contact List Scraping and WhatsApp Harassment. The RBI has recently cancelled the licenses of several such NBFCs for these exact reasons. Reporting these to the Sachet portal of the RBI is the most effective way to stop them. Never click on any links sent by these apps.
                </p>
              </div>

              <h2 id="regional-laws" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Regional Nuances: Recovery Laws in Different Indian States</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  While the RBI guidelines are national, local police and state laws can provide additional layers of protection.
                </p>
                <p>
                  <strong>Maharashtra:</strong> The state has a strong history of protecting borrowers. The Mumbai Police has specific circulars against aggressive recovery. If you are in Mumbai or Pune, the local police are generally more aware of Recovery Agent Goonism and are quicker to intervene. The state government also has special cells for monitoring private financial harassment.
                </p>
                <p>
                  <strong>Kerala:</strong> The Kerala Money Lenders Act and strong community awareness make it very difficult for agents to use illegal tactics. Local community groups often stand by the borrower if they see a stranger harassing a family. The police in Kerala are very strict about unannounced doorstep visits.
                </p>
                <p>
                  <strong>Delhi and NCR:</strong> Due to the high number of corporate and personal defaults, the police in Delhi/Gurgaon are well-versed in handling these complaints. However, this is also where some of the most aggressive agencies are headquartered. Always insist on the "Zero FIR" concept if you are facing issues across state lines.
                </p>
              </div>

              <h2 id="sarfaesi-harassment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">SARFAESI and Harassment: A Technical Distinction</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  For home loan and property-backed loan borrowers, harassment often comes in the form of Eviction Threats. Agents will say: "We are coming with the police tomorrow to lock your house under SARFAESI."
                </p>
                <p>
                  <strong>The Reality:</strong> The **Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002** is a formal legal process. It requires a 60-day Notice under Section 13(2) after the account becomes NPA, a formal response from you (which the bank must answer within 15 days), a Possession Notice under Section 13(4), and an order from the District Magistrate (DM) or Chief Metropolitan Magistrate (CMM) for physical possession.
                </p>
                <p>
                  This process takes months. No agent can "lock your house" just because you missed three EMIs. If an agent threatens immediate eviction without a court order, they are committing Fraudulent Misrepresentation. This is a criminal offense. Inform them that you know the SARFAESI protocol and that you will see them in the Debt Recovery Tribunal (DRT) if they violate it. Being aware of this timeline stops agents from using the "fear of homelessness" as a tool.
                </p>
              </div>

              <h2 id="evidence-collection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Evidence Vault: How to Prove Harassment</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  In the legal world, an accusation without evidence is worth nothing. When people ask <strong>how to stop recovery agent harassment</strong>, the answer is always: "Collect proof."
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Call Logs:</strong> Keep a record of the number of calls, the timing, and the duration. High frequency is proof of intent to annoy.</li>
                  <li><strong>Voice Recordings:</strong> Install a reliable call recorder. Record every interaction. Even a polite but frequent call can prove harassment. Capture the agent’s name and agency in the recording.</li>
                  <li><strong>Video Proof:</strong> For doorstep visits, use your phone or a smart doorbell camera. Capture the agent’s face, their ID, and their behavior. Do not let them touch your camera.</li>
                  <li><strong>Witness Statements:</strong> If a neighbor or a security guard saw the harassment, their statement can be used in a Consumer Court case. Ask your society secretary to note down the visit in their visitor log.</li>
                </ul>
              </div>

              <h2 id="bank-complaints" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Chain of Command: Filing Formal Bank Complaints</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Talking to a phone agent about harassment is useless: they are the ones doing it. You must go high up in the bank’s hierarchy to the decision-makers.
                </p>
                <p>
                  <strong>Step 1: The Written Complaint.</strong> Send an email to the bank’s Principal Nodal Officer (PNO). You can find their email on the bank’s official website. Attach your evidence: call logs, recordings, and photos of agents at your door. A physical letter sent via speed post is even more effective as it creates a physical "Receipt."
                </p>
                <p>
                  <strong>Step 2: Command Action.</strong> Use formal language. Say: "This is a formal grievance regarding the violation of RBI/2022-23/108 by your outsourced agency. I demand an immediate cessation of illegal harassment and a formal apology." Clearly state the mental and physical impact of the harassment.
                </p>
                <p>
                  <strong>Step 3: Track the ID.</strong> Ensure you get a Complaint Reference Number. The bank is legally bound to resolve your grievance within 30 days. If they don’t, or if they give a generic reply, you have the green light to go to the RBI. This 30-day period is your "Cooling Off" time.
                </p>
              </div>

              <h2 id="rbi-ombudsman" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Digital Weapon: The RBI Ombudsman Guide</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The **Integrated Ombudsman Scheme 2021** is a powerful tool for borrowers. It is an independent authority that hears cases against financial institutions. Filing a complaint is free and can be done online from your home.
                </p>
                <p>
                  Go to **cms.rbi.org.in**. State your case clearly. Provide the reference number of the complaint you filed with the bank. The Ombudsman has the power to order the bank to stop recovery activities, pay you compensation for mental agony, and even waive off interest or penalties as a punishment for the bank’s conduct. They act as a neutral party and their orders are binding on the bank. This is arguably the most successful way to get a permanent resolution.
                </p>
              </div>

              <h2 id="police-action" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Nuclear Option: Police Action and FIR</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Regulatory complaints are for bad service, but police intervention is for crimes. If an agent uses physical force, forcibly enters your home, or makes death threats, you should not wait for an email response.
                </p>
                <p>
                  Call 112 or 100 immediately. When the police arrive, be calm and show them your evidence. File a First Information Report (FIR). An FIR against a recovery agent also makes the bank’s legal department very nervous, as they can be named as co-accused for aiding and abetting the criminal behavior. This is often the most definitive way on <strong>how to stop recovery agent harassment</strong> for high-aggression cases. Once an FIR is filed, the bank usually stops all collection and asks for a settlement just to get the case settled.
                </p>
              </div>

              <h2 id="civil-remedies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Advanced Civil Remedies: Injunctions and Damages</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  If harassment continues despite your complaints, you can move the Civil Court for a Permanent Injunction. This is a court order that specifically forbids the bank and its agents from entering your property or calling you outside of a legal process. This is the "Stay Order" that stops the doorbell from ringing.
                </p>
                <p>
                  You can also file a suit for damages in a civil court for the loss of reputation and mental trauma. This is a separate process from the loan dispute. If you can prove that the harassment led to a loss of your business or a medical condition, the courts can award very significant financial compensation.
                </p>
              </div>

              <h2 id="consumer-protection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Consumer Forum Claims: Deficiency in Service</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  You can also file a Consumer Complaint for Deficiency in Service. The Consumer Protection Act 2019 is very borrower-friendly. You can claim compensation for mental agony and emotional distress, loss of reputation in society/office, and loss of income if harassment affected your work.
                </p>
                <p>
                  In several cases, the Consumer Forum has ordered banks to pay lakhs of rupees in compensation to borrowers who were harassed by recovery agents. The key is to have the Evidence Vault ready. The forum often views aggressive recovery as an "Unfair Trade Practice."
                </p>
              </div>

              <h2 id="legal-shield" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Professional Wall: The Power of a Legal Notice</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  A verbal "stop calling me" is like a suggestion to a recovery agency. A legal Cease and Desist notice on a professional firm’s letterhead is a mandate. When our team at CredSettle sends a legal notice to a bank, we cite Every relevant RBI circular and Every applicable IPC section.
                </p>
                <p>
                  This notice acts as a formal "Warning Shot." It shifts the case from the agencies to the bank’s Legal and Compliance team. These professionals understand the risk of an RBI penalty or a lawsuit. They usually instruct the agency to stop calling and move the case to a Legal Resolution track, which is much more civilized and open to negotiation.
                </p>
              </div>

              <h2 id="women-rights" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Protective Shield: Rights of Women Borrowers</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The law in India provides extra layers of protection for women. If a male recovery agent visits a woman borrower when she is alone, it is a significant regulatory violation. RBI guidelines suggest that female agents should be used for female borrowers. If you are a woman facing harassment, you have a very strong case for Violation of Modesty and Invasion of Privacy. Always record such interactions and involve local women help groups if necessary. No agent can speak to you in a way that is disrespectful to your gender.
                </p>
              </div>

              <h2 id="medical-emergency" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Protecting the Vulnerable: Seniors and Medical Cases</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  If you are a senior citizen or if you are suffering from a serious medical condition, the bank’s recovery tactics must be even more restrained. Harassment that leads to a health crisis for a senior citizen is a major liability for a bank. Inform the bank’s Nodal Officer specifically about your age and medical status. Use this as a documented Red Flag that makes the bank very cautious about sending agents. You can even obtain a medical certificate to prove the impact of harassment on your health.
                </p>
              </div>

              <h2 id="mental-wellbeing" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Inner Fortress: Managing Mental Health</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Harassment is designed to make you feel like a criminal. You are not. A loan involves a business risk that the bank consciously took. A default is a financial event, not a moral one. Use this guide to understand that the law is on your side when it comes to harassment.
                </p>
                <p>
                  Stay connected with your family. Do not isolate yourself. Isolation gives the agents more power over your mind. Practice meditation, keep a routine, and remember that your life is worth much more than any amount of debt. By maintaining your mental clarity, you can make better legal and financial decisions. Debt is temporary, but your health and family are forever.
                </p>
              </div>

              <h2 id="credsettle-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The CredSettle Advantage: Your Legal Task Force</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Dealing with banks and agencies is exhausting. They have teams of lawyers and agents; you should have a team too. Our approach at CredSettle is not just advice: it is Active Intervention.
                </p>
                <p>
                  <strong>Immediate Redirection:</strong> When you become a client, we provide you with a Protection Kit. You can tell any agent: "I am represented by CredSettle. Please talk to my legal team. I will not engage with you directly." This immediately stops 90% of harassment because agents know they cannot intimidate a legal professional who knows exactly what they are doing.
                </p>
                <p>
                  <strong>Regulatory Leverage:</strong> We don’t just email customer care. We have direct contact channels with the Compliance Departments of most major banks. We speak their language: circulars, mandates, and legal precedents. We make it Too Expensive for the bank to continue harassing you by constantly pointing out their violations to the regulator.
                </p>
                <p>
                  <strong>Strategic Fresh Start:</strong> Once we have secured your peace, we work on the numbers. We analyze your debt, identify all illegal charges and penalties the bank has added, and negotiate a settlement that reflects your true repayment capacity. We don’t just stop the calls; we close the chapter permanently.
                </p>
              </div>

              <h2 id="future-rules-2026" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Road Ahead: New RBI Rules for 2026</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The RBI is preparing even stricter rules for 2026. Proposed mandates include Real-time Tracking of all recovery visits and mandatory recording of every single recovery phone call by the bank. The regulator is also considering a Negative List of agencies who have multiple harassment complaints. This shift towards a Digital Oversight mode means banks will soon be even more afraid of violating your rights. Staying ahead of these rules gives you the upper hand in your current negotiations.
                </p>
              </div>

              <h2 id="court-precedents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Judicial Thunder: Court Precedents Against Harassment</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The Indian courts have been very kind to borrowers in distress. In the famous ICICI Bank vs Shanti Devi case, the Supreme Court ruled that banks cannot use muscle power to recover loans. The court stated that a bank is a Corporate Person and must act within the rule of law. Another judgment by the Allahabad High Court established that harassment that leads to extreme mental trauma is a ground for criminal prosecution. These rulings are the backbone of your defense against any aggressive agency.
                </p>
              </div>

              <h2 id="checklists" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Master Anti-Harassment Checklist</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Download a call recording app and test it today.</li>
                  <li>Learn the name of your bank’s Principal Nodal Officer.</li>
                  <li>Draft a standard "Do Not Disturb" message to send to every new agent.</li>
                  <li>Check your CCTV system to ensure it captures your front door.</li>
                  <li>Educate your family members not to talk to strangers about your loans.</li>
                  <li>Keep a copy of the RBI Fair Practices Code PDF on your phone.</li>
                  <li>Take screenshots of every abusive WhatsApp message or status.</li>
                  <li>Prepare a physical folder with all your loan documents and visit logs.</li>
                </ul>
              </div>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Expert Answers to Common Concerns</h2>
              <div className="space-y-6 mb-12">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-xl text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 md:p-14 bg-gradient-to-br from-blue-900 to-black text-white rounded-[40px] text-center shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight uppercase tracking-tight">End the Harassment Today</h2>
                  <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-xl font-light">You do not have to live in fear. Get an immediate legal shield and start your journey back to financial freedom.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-12 py-5 rounded-full font-extrabold text-xl hover:bg-blue-50 transition-all shadow-2xl hover:scale-105 active:scale-95"
                  >
                    Stop My Harassment Now
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700 rounded-full -mr-32 -mt-32 opacity-20 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-700 rounded-full -ml-32 -mb-32 opacity-20 blur-3xl"></div>
              </div>

            </article>
          </div>

          <div className="lg:w-1/5 w-full">
            <div className="sticky top-24 space-y-8">
              <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="bg-red-500 text-[10px] font-bold px-2 py-1 rounded w-fit mb-4 animate-pulse">24/7 Shield</div>
                  <h4 className="font-bold text-2xl mb-4 leading-tight">Being Harassed?</h4>
                  <p className="text-blue-100 mb-8 text-sm leading-relaxed">Get our legal experts to stand between you and the agents. We stop the calls so you can live.</p>
                  <Link 
                    href="/contact"
                    className="block w-full bg-white text-blue-800 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-all shadow-lg active:scale-95"
                  >
                    Get Free Help
                  </Link>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg border-b pb-3">Essential Resources</h4>
                <ul className="space-y-5">
                  <li>
                    <Link href="/how-to-stop-recovery-agent-home-visit" className="group flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 group-hover:scale-150 transition-all"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm font-medium">Stop Home Visits</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/bank-calling-references-and-family-members" className="group flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 group-hover:scale-150 transition-all"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm font-medium">Calls to Contacts</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement" className="group flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 group-hover:scale-150 transition-all"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm font-medium">Settlement Guide</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-is-npa" className="group flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 group-hover:scale-150 transition-all"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm font-medium">Understand NPA</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
                <div className="text-blue-600 text-2xl font-black mb-1">4.9/5</div>
                <div className="flex justify-center text-yellow-400 mb-2">*****</div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Borrower Ratings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
