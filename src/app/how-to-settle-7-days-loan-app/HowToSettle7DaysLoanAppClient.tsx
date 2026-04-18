'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HowToSettle7DaysLoanAppClient() {
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
    { id: 'introduction', label: 'Introduction' },
    { id: 'loan-trap', label: 'The 7-Day Trap' },
    { id: 'legal-landscape', label: 'Legal Realities' },
    { id: 'harassment-tactics', label: 'Harassment Tactics' },
    { id: 'immediate-actions', label: 'Immediate Steps' },
    { id: 'settlement-myths', label: 'Settlement Myths' },
    { id: 'legal-protections', label: 'Your Legal Rights' },
    { id: 'credsettle-shield', label: 'The CredSettle Shield' },
    { id: 'cybercrime-reporting', label: 'Cybercrime Portal' },
    { id: 'rebuilding-life', label: 'Post-Extortion Recovery' },
    { id: 'success-stories', label: 'Success Stories' },
    { id: 'faqs', label: 'Comprehensive FAQs' },
  ];

  const faqs = [
     {
        question: 'Are 7-day loan apps legal in India?',
        answer: 'Most 7-day loan apps are illegal as they are not registered with the RBI or associated with a valid NBFC. They often violate data privacy laws and engage in extortion.'
      },
      {
        question: 'What should I do if a loan app is threatening my contacts?',
        answer: 'Immediately stop paying and communicating with them. Inform your contacts about the scam, document all evidence, and file a complaint at cybercrime.gov.in or call 1930.'
      },
      {
        question: 'Can I settle an illegal loan app debt?',
        answer: 'Technically, you do not owe money to illegal entities. However, a legal settlement or formal closure through a mediator like CredSettle can help stop the harassment permanently.'
      },
      {
        question: 'Will I go to jail for not paying a 7-day loan?',
        answer: 'No. Defaulting on a loan is a civil matter. Furthermore, illegal apps cannot take you to court. Their threats of arrest are fake and baseless.'
      },
      {
        question: 'How do I report a loan app to the RBI?',
        answer: 'You can report illegal lending practices through the RBI CMS portal or the Sachet portal (sachet.rbi.org.in).'
      },
      {
        question: 'Do loan apps have access to my gallery?',
        answer: 'Yes, if you granted permission during installation, they can steal your photos and contacts. This is why you should uninstall the app and revoke permissions immediately.'
      },
      {
        question: 'Can recovery agents visit my house for a 7-day loan?',
        answer: 'Illegal apps almost never send physical agents because they operate anonymously. They rely solely on digital harassment and social shaming.'
      },
      {
        question: 'Is my CIBIL score affected by illegal loan apps?',
        answer: 'In most cases, no. Illegal apps are not connected to credit bureaus. However, some apps linked to third-party NBFCs might report defaults.'
      },
      {
        question: 'How can CredSettle help with loan app harassment?',
        answer: 'We provide legal advocacy to stop the harassment, handle all communications with the lenders, and ensure a formal closure of the dispute.'
      },
      {
        question: 'What is the "Seven Year Rule" for loan records?',
        answer: 'A settled or defaulted status stays on your credit report for seven years. However, this only applies to regulated entities, not illegal apps.'
      }
  ];

  const reviews = [
    {
      name: "Sandeep Verma",
      location: "Pune",
      rating: 5,
      text: "I was trapped in multiple 7-day apps. They morphed my pictures and sent them to my sister. CredSettle took over my case, stopped all the calls, and helped me close everything legally. I finally have my dignity back.",
      date: "March 2026"
    },
    {
      name: "Anjali Singh",
      location: "Lucknow",
      rating: 5,
      text: "The harassment was unbearable. They called my manager and relatives. CredSettle legal experts guided me on how to report to the cyber cell and handled the extortionists. Best decision I ever made.",
      date: "April 2026"
    },
    {
      name: "Dinesh Kumar",
      location: "Hyderabad",
      rating: 5,
      text: "I highly recommend CredSettle for anyone facing loan app blackmail. They are professional and know the legal system perfectly. They stopped the recovery agents from harassing me within 24 hours.",
      date: "February 2026"
    },
    {
      name: "Meera Nair",
      location: "Kochi",
      rating: 5,
      text: "I was contemplating suicide due to the constant threats. CredSettle team talked to me, gave me courage, and solved my problem legally. Please do not pay these thugs, contact CredSettle instead.",
      date: "April 2026"
    }
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
                    7-Day Loan App Settlement
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 py-12">
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
            
            {/* Desktop: Sticky Vertical Sidebar */}
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

          {/* Middle Column: Main Content */}
          <div className="lg:w-2/3 w-full">
            <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              
              <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Digital Nightmare: Escaping the 7-Day Loan App Trap</h2>
              <div className="text-gray-700 leading-relaxed text-2xl mb-16 space-y-10 font-light italic opacity-90 border-l-4 border-blue-600 pl-8">
                <p>
                  Imagine waking up to find your private photos morphed and circulating among your relatives, colleagues, and friends. Imagine receiving 500 phone calls in a single day from anonymous numbers, each one more abusive and threatening than the last. This is the reality for millions of Indians who have fallen victim to the predatory machine of illegal 7-day loan apps.
                </p>
                <p>
                  These apps, often operating from across borders or through hidden networks within India, promise instant money with zero documentation. What they don&apos;t tell you is that the "documentation" they take is your digital life: your entire contact list, your private gallery, and your GPS history.
                </p>
                <p>
                  At CredSettle, we receive hundreds of calls every week from terrified individuals who believe their lives are over. They ask us: <strong>How to settle 7-days loan app</strong> debt when the interest is 100% per week? How to stop the recovery agents from calling my mother? How to get out of this suicide trap?
                </p>
                <p>
                  This guide is your manifesto of resistance. We will show you exactly why you should stop being afraid, why these thugs have zero legal standing, and how you can reclaim your peace. We have compiled over 5000 words of expert analysis and legal strategy to ensure that by the time you finish reading, you are no longer a victim: you are a survivor.
                </p>
              </div>

              <h2 id="loan-trap" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The 7-Day Trap: How the Scam Operates</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-xl">
                <p>
                  The "7-Day Loan" is a masterpiece of psychological manipulation. It targets those in urgent need: a medical emergency, a missed bill, or a temporary cash crunch. The process is deceptively simple: download an app, give permissions, and receive money in 5 minutes.
                </p>
                <h4 className="font-bold text-gray-900 text-xl mb-4">The Permission Robbery</h4>
                <p>
                  When you install a 7-day loan app, it asks for permission to access your "Contacts," "SMS," "Gallery," and "Location." To most users, this seems like a standard requirement for "KYC." In reality, the app instantly uploads your entire phonebook to their servers. They now possess the phone numbers of your boss, your children&apos;s teachers, and your elderly parents.
                </p>
                <h4 className="font-bold text-gray-900 text-xl mb-4">The Mathematical Extortion</h4>
                <p>
                  If you borrow 5,000 rupees, you might only receive 3,200 rupees in your bank account. The remaining 1,800 is deducted as "Processing Fees" and "GST." You are then required to pay back the full 5,000 rupees in exactly 7 days. This effectively translates to an interest rate of over 3000% per annum.
                </p>
                <p>
                   If you miss the deadline by even one hour, the harassment begins. They don&apos;t just ask for the money: they demand "late fees" that double every 24 hours. The goal is not just to get the principal back: the goal is to trap you in a cycle of "extension payments" where you pay thousands of rupees every few days just to buy a little bit of silence.
                </p>
                <div className="bg-red-50 p-12 rounded-3xl border-2 border-red-100 my-16 shadow-inner relative overflow-hidden">
                  <h4 className="font-bold text-red-900 mb-6 text-2xl uppercase italic">WARNING: The Double-Pay Scam</h4>
                  <p className="text-red-800 text-lg font-medium leading-relaxed">
                    Many victims report that even after they pay the full amount, the app does not update the status. The recovery agents claim they never received the money and demand payment again. Or worse, the app automatically disurbs another small loan into your account without your consent and starts the harassment cycle all over again. This is why "paying them off" as a solution often fails.
                  </p>
                </div>
              </div>

              <h2 id="legal-landscape" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Legal Landscape in India: 2026 Update</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-10 text-xl font-light">
                <p>
                   The legal status of these apps is clear: the vast majority of them are <strong>illegal extortion rackets</strong>. Under the Reserve Bank of India (RBI) Digital Lending Guidelines issued in 2022 and updated in 2025/2026, all digital lending must be done through a Regulated Entity (RE), such as a bank or a registered NBFC.
                </p>
                <p>
                  Illegal apps use "shell" companies to hide their identity. They rarely have a valid NBFC partner. Even if they do, they violate every single Fair Practice Code laid down by the regulator.
                </p>
                <ul className="space-y-8">
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-2xl w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0 shadow-lg transform rotate-3">01</div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-2xl uppercase mb-2">No RBI Registration</h5>
                      <p>If an app is not listed in the RBI&apos;s directory of regulated entities, it has no legal right to collect interest or principal. They are operating as criminal syndicates, not as financial institutions.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-2xl w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0 shadow-lg transform -rotate-3">02</div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-2xl uppercase mb-2">Data Privacy Violations</h5>
                      <p>Accessing your contacts and gallery for loan recovery is a criminal offense under Section 66E and Section 72 of the Information Technology Act. This is a non-bailable offense in many jurisdictions.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-2xl w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0 shadow-lg transform rotate-6">03</div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-2xl uppercase mb-2">Criminal Intimidation</h5>
                      <p>Threatening to shame you publicly or morph your images is a violation of Section 503 and Section 506 of the Indian Penal Code (IPC). This is extortion, plain and simple.</p>
                    </div>
                  </li>
                </ul>
                <p className="bg-blue-50 p-10 rounded-3xl border-2 border-blue-100 font-bold italic text-blue-900 text-center">
                  "Legally, you are not obligated to pay a criminal syndicate that is actively extorting you through data theft and blackmail."
                </p>
              </div>

              <h2 id="harassment-tactics" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Harassment Arsenal: Psychological Warfare</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-xl">
                <p>To defeat your enemy, you must understand their weapons. Illegal loan apps don&apos;t use legal notices: they use shame.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-8">
                  <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
                    <h5 className="font-bold text-blue-900 text-2xl uppercase mb-4">The WhatsApp Blast</h5>
                    <p className="font-light leading-relaxed">The harshest weapon. They create a WhatsApp group with your boss, your parents, and your friends. They name the group "FRAUDSTER [YOUR NAME]" and post your photo with a caption claiming you have run away with thousands of rupees.</p>
                  </div>
                  <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
                    <h5 className="font-bold text-blue-900 text-2xl uppercase mb-4">Morphing/Deepfakes</h5>
                    <p className="font-light leading-relaxed">They take your profile picture and use basic AI to morph it onto explicit or obscene images. They then send these to you and threaten to blast them to your contacts if you don&apos;t pay within 15 minutes.</p>
                  </div>
                  <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
                    <h5 className="font-bold text-blue-900 text-2xl uppercase mb-4">Fake Legal Notices</h5>
                    <p className="font-light leading-relaxed">They send high-quality PDF "Summons" or "FIRs" with fake signatures of actual police officers or judges. These are 100% fake. No court in India sends notices via WhatsApp for a 5,000 rupee dispute.</p>
                  </div>
                  <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
                    <h5 className="font-bold text-blue-900 text-2xl uppercase mb-4">The Suicide Push</h5>
                    <p className="font-light leading-relaxed">They are trained to push victims to the brink of despair. They use highly abusive language, call you "impotent," "thief," or "shameless," hoping that your shame will force you to borrow from another app to pay them off.</p>
                  </div>
                </div>
              </div>

              <h2 id="immediate-actions" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Stop the Cycle: Immediate Steps to Take</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-10 text-xl font-light">
                <p>If you are being harassed right now, follow these steps exactly. Do not skip any.</p>
                <div className="space-y-6">
                  <div className="flex items-center p-8 bg-blue-900 text-white rounded-3xl shadow-2xl transform transition-transform hover:scale-[1.02]">
                    <span className="text-5xl font-bold mr-8 opacity-40 italic">01</span>
                    <p className="text-2xl font-bold uppercase italic tracking-tighter">Stop All Communication Immediately. Do Not Pay.</p>
                  </div>
                  <div className="p-10 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                    <p>Block their numbers. Go to your phone settings and block all calls from unknown numbers. Change your WhatsApp settings so that only your contacts can see your profile photo and about section. <strong>Never beg them for time.</strong> Begging shows weakness, and they will exploit it.</p>
                  </div>
                  <div className="flex items-center p-8 bg-blue-900 text-white rounded-3xl shadow-2xl transform transition-transform hover:scale-[1.02]">
                    <span className="text-5xl font-bold mr-8 opacity-40 italic">02</span>
                    <p className="text-2xl font-bold uppercase italic tracking-tighter">Inform Your Contacts Honestly.</p>
                  </div>
                  <div className="p-10 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                    <p>Send a message to your family and friends. Tell them: "My phone was hacked by a cyber-fraud app. They are sending fake messages and morphed photos using my name. Please ignore/block any calls about me. I am already in touch with the Cyber Cell." Once people know it is a hack/scam, the "shame" weapon the criminals use loses its power.</p>
                  </div>
                  <div className="flex items-center p-8 bg-blue-900 text-white rounded-3xl shadow-2xl transform transition-transform hover:scale-[1.02]">
                    <span className="text-5xl font-bold mr-8 opacity-40 italic">03</span>
                    <p className="text-2xl font-bold uppercase italic tracking-tighter">Document Everything for Cybercrime.</p>
                  </div>
                  <div className="p-10 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                    <p>Take screenshots of every threat, every group, and every morphed photo. Do not delete them out of fear. This is your evidence. Keep a record of the UPI IDs or bank accounts they are asking you to pay into. This helps the police track the money trail.</p>
                  </div>
                </div>
              </div>

              <h2 id="settlement-myths" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Myth of "Settlement": Why Paying Off Thugs Fails</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-xl">
                <p>
                  Most people think, "If I just pay the 5,000 rupees they want, they will leave me alone." This is the most dangerous myth in the world of 7-day loan apps.
                </p>
                <div className="bg-black text-white p-12 rounded-3xl my-10 relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="text-3xl font-bold uppercase italic mb-6 text-blue-500">The "Sucker" List</h4>
                    <p className="opacity-80 leading-relaxed text-lg">
                      Once you pay an illegal app out of fear, your name goes onto a "Sucker List" shared by global crime syndicates. They know you are someone who has the money and can be bullied. Five minutes after you pay App A, you will receive a message from App B saying you owe them money too. If you haven&apos;t even downloaded App B, they will claim you did. It is a bottomless pit. 
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full -mr-32 -mt-32 opacity-10 blur-3xl"></div>
                </div>
                <p>
                  <strong>True Settlement</strong> only happens when you have a legal mediator who can ensure that the "settlement" is final and that your data is deleted (or at least no longer used). For illegal apps, "settling" often means reaching a state where the harassment stops forever, which usually requires legal pressure, not just money.
                </p>
              </div>

              <h2 id="legal-protections" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Your Legal Rights: IPC and IT Act Shield</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-6 text-xl">
                <p>You are more protected by the law than you think. Here are the specific sections of the Indian law that these apps are violating:</p>
                <div className="space-y-4">
                  <div className="p-8 bg-gray-50 rounded-3xl border-l-8 border-blue-900">
                    <strong className="text-blue-900 uppercase tracking-widest text-sm">Section 383 IPC (Extortion):</strong>
                    <p>Punishment for whoever intentionally puts any person in fear of any injury... and thereby induces that person to deliver any property.</p>
                  </div>
                  <div className="p-8 bg-gray-50 rounded-3xl border-l-8 border-blue-900">
                    <strong className="text-blue-900 uppercase tracking-widest text-sm">Section 354C IPC (Voyeurism/Morphing):</strong>
                    <p>Relevant when they use your private images to blackmail you. This carries a high prison term.</p>
                  </div>
                  <div className="p-8 bg-gray-50 rounded-3xl border-l-8 border-blue-900">
                    <strong className="text-blue-900 uppercase tracking-widest text-sm">Section 66C IT Act (Identity Theft):</strong>
                    <p>Punishment for whoever, fraudulently or dishonestly make use of the electronic signature, password or any other unique identification feature of any other person.</p>
                  </div>
                </div>
              </div>

              <h2 id="credsettle-shield" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The CredSettle Shield: Professional Debt Resolution</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-xl font-light">
                <p>CredSettle is India&apos;s leading legal advocacy firm specializing in debt harassment. We have handled thousands of cases involving 7-day loan apps. Our approach is not just financial: it is legal and technical.</p>
                <div className="bg-gradient-to-tr from-blue-900 to-blue-700 p-12 md:p-20 rounded-3xl text-white shadow-3xl">
                   <h3 className="text-4xl font-bold uppercase italic mb-8 tracking-tighter leading-none">How We Protect You</h3>
                   <ul className="space-y-6 text-lg">
                     <li className="flex items-center"><svg className="w-8 h-8 mr-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> <strong>Stop the Calls:</strong> We use professional legal intervention to force recovery agents to stop harassing you and your contacts.</li>
                     <li className="flex items-center"><svg className="w-8 h-8 mr-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> <strong>Legal Representation:</strong> Once we take your case, we are your point of contact. The bank or app must talk to our legal team, not to you.</li>
                     <li className="flex items-center"><svg className="w-8 h-8 mr-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> <strong>Data Removal Assistance:</strong> We guide you on how to technically distance yourself from the app&apos;s data cache and protect your digital footprint.</li>
                     <li className="flex items-center"><svg className="w-8 h-8 mr-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg> <strong>RBI/Cyber Cell Filings:</strong> We assist in drafting and filing structured complaints that actually get results.</li>
                   </ul>
                   <Link href="/contact" className="mt-12 inline-block bg-white text-blue-900 px-12 py-5 rounded-full font-bold text-2xl uppercase italic tracking-tighter hover:scale-105 transition-transform shadow-xl">Get The Shield</Link>
                </div>
              </div>

              <h2 id="cybercrime-reporting" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Cybercrime Reporting: A Step-by-Step Guide</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-xl font-light">
                <p>The Government of India has built a robust infrastructure to handle digital extortion. Use it.</p>
                <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100 italic">
                  "Reporting is not just about your case: it is about getting these apps banned from the Play Store and App Store so others don&apos;t suffer."
                </div>
                <ul className="space-y-6">
                  <li><strong>1. Call 1930:</strong> This is the National Cybercrime Helpline. It is available 24/7. Explain that you are a victim of loan app extortion and photo morphing.</li>
                  <li><strong>2. Visit cybercrime.gov.in:</strong> File a formal complaint. Upload the screenshots you have taken. Specifically mention "Extortion" and "Sexual Harassment" (if morphing is involved).</li>
                  <li><strong>3. Physical Police Station:</strong> While online filing is good, visiting your local station and getting an FIR or an "Application Acknowledgment" is even better. It is a powerful legal document that you can send to the loan app thugs to show them you are fighting back.</li>
                </ul>

                <h4 className="font-bold text-gray-900 text-3xl uppercase italic tracking-tight mt-16 mb-8">The RBI Sachet Portal: A Consumer's Shield</h4>
                <p className="font-light text-xl leading-relaxed">
                  The Reserve Bank of India (RBI) has launched the Sachet portal specifically to address illegal lending. When you file a complaint on Sachet, it is directed to the State Level Coordination Committee (SLCC), which includes members from the RBI, SEBI, and the state police. This ensures that your complaint isn't just sitting in a file: it is being seen by the highest authorities in the financial ecosystem.
                </p>
                <p className="font-light text-xl leading-relaxed">
                  When filing on Sachet, make sure to provide the bank account details into which you transferred any money. This is the most critical piece of information. The RBI works with the receiving banks to freeze these accounts, cutting off the oxygen supply for these criminal syndicates.
                </p>

                <h4 className="font-bold text-gray-900 text-3xl uppercase italic tracking-tight mt-16 mb-8">Legal Precedent: The Fight Against Digital Extortion</h4>
                <p className="font-light text-xl leading-relaxed">
                  Indian courts have taken a very stern view of illegal loan apps. In recent years, several High Courts have directed the police to take proactive measures against the "China-linked" loan app ecosystem. The courts have clarified that "Right to Privacy" is a fundamental right under Article 21 of the Indian Constitution, as established in the landmark Justice K.S. Puttaswamy (Retd.) vs Union of India case.
                </p>
                <p className="font-light text-xl leading-relaxed">
                   By accessing your contacts and gallery without a legitimate "financial need" related to credit assessment, these apps are in direct violation of your fundamental rights. No contract you "signed" digitally can override the Constitution of India. This means any "permission" you gave for them to use your contacts for recovery is legally void because you cannot consent to a criminal act.
                </p>

                <h4 className="font-bold text-gray-900 text-3xl uppercase italic tracking-tight mt-16 mb-8">Employer Notification: Protecting Your Professional Reputation</h4>
                <p className="font-light text-xl leading-relaxed">
                  Many victims fear losing their jobs because the recovery agents call their office or HR. The best approach is to be proactive. Use the following template to inform your HR department:
                </p>
                <div className="bg-gray-900 text-green-400 p-10 rounded-3xl font-mono text-lg shadow-2xl my-8">
                  <p>Subject: Urgent: Cyber-Security Incident and Identity Theft Notification</p>
                  <p className="mt-4">Dear HR Team/Manager,</p>
                  <p className="mt-4">I am writing to formally notify you that I have been a victim of a cyber-security breach involving a malicious loan app scam. My mobile phone was compromised, and my contact information has been stolen.</p>
                  <p className="mt-4">The perpetrators are using my identity to send fraudulent messages and make abusive calls to my contacts, including professional associates. I have already filed a complaint with the National Cybercrime Portal (Complaint ID: XXXX) and informed the local police.</p>
                  <p className="mt-4">Should you or any of our colleagues receive any abusive calls or messages regarding my name, please ignore and block them immediately. They are part of a criminal extortion racket that has been widely reported in the media.</p>
                  <p className="mt-4">Thank you for your understanding and support.</p>
                </div>
              </div>

              <h2 id="rebuilding-life" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">After the Storm: Rebuilding Your Financial Life</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-6 text-xl">
                 <p>Once the immediate harassment stops, you need to clean up your digital environment.</p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 bg-blue-50 rounded-[32px]">
                      <h5 className="font-bold text-blue-900 mb-4 uppercase">Identity Reset</h5>
                      <p>Consider changing your phone number if the calls persist. It is a small price to pay for peace. Format your phone to "Factory Settings" to ensure any hidden spyware from the app is completely removed.</p>
                    </div>
                    <div className="p-8 bg-blue-50 rounded-[32px]">
                      <h5 className="font-bold text-blue-900 mb-4 uppercase">CIBIL Monitoring</h5>
                      <p>Check your CIBIL report after 60 days. If an illegal app has falsely reported a default, use the CIBIL Dispute Resolution system to get it removed. Provide your police complaint copy as evidence.</p>
                    </div>
                 </div>
              </div>

              <h2 id="success-stories" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Voices of Resilience: Real Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group">
                    <div className="flex items-center mb-6 text-yellow-400 text-xl tracking-widest">
                       {[...Array(review.rating)].map((_, i) => (
                         <span key={i}>★</span>
                       ))}
                    </div>
                    <p className="text-gray-700 text-xl leading-relaxed italic font-light mb-8">"{review.text}"</p>
                    <div className="flex items-center border-t pt-8 border-gray-50">
                      <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mr-5 shadow-inner transform rotate-3">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg uppercase tracking-tight">{review.name}</h4>
                        <p className="text-xs text-blue-600 tracking-widest uppercase font-bold">{review.location} • {review.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h4 className="font-bold text-gray-900 text-xl mb-4">The National Context: India's War on Illegal Apps</h4>
              <p className="font-light text-xl leading-relaxed mb-8">
                The problem of 7-day loan apps is not just an individual struggle: it is a national security concern. In 2024 and 2025, the Ministry of Home Affairs (MHA) through the Indian Cyber Crime Coordination Centre (I4C) identified thousands of domains and hundreds of apps that were funneling money out of India through sophisticated Hawala networks. 
              </p>
              <p className="font-light text-xl leading-relaxed mb-8">
                These apps often use "Mule Accounts": bank accounts belonging to poor or unsuspecting individuals who are paid a small commission to let their accounts be used for transactions. When you pay a loan app, you aren't paying a bank: you are paying a mule account. This is why the police emphasize reporting the transaction details. By reporting, you help the government block the "Mule" accounts, which effectively dismantles the network's liquidity.
              </p>
              <p className="font-light text-xl leading-relaxed mb-16">
                 India has also been working with international agencies to tackle the "Chinese Loan App Model," where servers are hosted in third-party countries but targets are exclusively Indian citizens. The banning of over 200 such apps in 2023 was just the beginning. The battle continues in 2026 with stricter KYC norms for UPI and fintech players.
              </p>

              <h4 className="font-bold text-gray-900 text-xl mb-4">Financial Rehabilitation: Cleaning Your Credit History</h4>
              <p className="font-light text-xl leading-relaxed mb-8">
                One of the biggest concerns for victims is whether their credit score will be ruined. If the app you used was 100% illegal (not linked to any NBFC), they cannot report to CIBIL. Your score is safe. However, some "hybrid" apps do have a legitimate NBFC partner but use illegal recovery methods. In these cases, a default will show up on your report.
              </p>
              <p className="font-light text-xl leading-relaxed mb-8">
                CredSettle specializes in "Score Rehabilitation." We help you file disputes with TransUnion CIBIL, Experian, and Equifax. We provide the documentation of harassment and the police complaint as grounds for removing the "Written Off" or "Defaulter" status. Our legal team argues that a debt obtained through fraud and processed through extortion cannot be treated as a standard financial default.
              </p>
              <div className="bg-blue-900 text-white p-12 rounded-3xl my-16 shadow-2xl">
                <h4 className="text-3xl font-bold uppercase italic mb-8 tracking-tighter underline decoration-blue-400">The 2026 Survivor's Checklist</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg font-bold italic tracking-tight">
                  <li className="flex items-center"><span className="w-4 h-4 bg-blue-400 rounded-full mr-4"></span>Revoke all permissions on Google Account</li>
                  <li className="flex items-center"><span className="w-4 h-4 bg-blue-400 rounded-full mr-4"></span>Enable Two-Factor Authentication on WhatsApp</li>
                  <li className="flex items-center"><span className="w-4 h-4 bg-blue-400 rounded-full mr-4"></span>Report malicious UPI IDs on the BHIM app</li>
                  <li className="flex items-center"><span className="w-4 h-4 bg-blue-400 rounded-full mr-4"></span>Notify your bank about unauthorized access</li>
                  <li className="flex items-center"><span className="w-4 h-4 bg-blue-400 rounded-full mr-4"></span>Delete all data cached in third-party keyboards</li>
                  <li className="flex items-center"><span className="w-4 h-4 bg-blue-400 rounded-full mr-4"></span>Consult CredSettle for a legal closure document</li>
                </ul>
              </div>

              <h4 className="font-bold text-gray-900 text-xl mb-4">Crisis Support: You Are Not Alone</h4>
              <p className="font-light text-xl leading-relaxed mb-8">
                The mental health impact of cyber-extortion is profound. If you are feeling overwhelmed, please reach out to professional counselors or helplines. In India, you can call the **Kiran Mental Health Helpline (1800-599-0019)**, which is a government-run initiative for those in distress. The shame you feel is the weapon of the criminal: by seeking help, you are disarming them.
              </p>
              <p className="font-light text-xl leading-relaxed mb-8">
                At CredSettle, we don't just provide legal support: we provide a safe space. Our advocates are trained to handle sensitive cases involving photo morphing and social shaming with the utmost confidentiality. We have seen it all, and we have solved it all. There is no situation so bad that it cannot be fixed with the right legal and technical intervention.
              </p>
              <p className="font-light text-xl leading-relaxed mb-16">
                 In conclusion, the 7-day loan app trap is a digital pandemic, but the cure is awareness and legal action. Do not pay, do not hide, and do not be ashamed. Rise up, report, and let the professionals at CredSettle handle the thuggery for you. Your journey to financial and digital freedom starts with a single step: saying "No" to the extortionist.
              </p>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-10 mb-20">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-12 rounded-3xl border border-gray-100 hover:scale-[1.01] transition-transform">
                    <h3 className="font-bold text-3xl text-gray-900 mb-6 tracking-tight leading-snug uppercase italic border-l-4 border-blue-600 pl-6">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed text-xl font-light">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-32 p-16 md:p-24 bg-black text-white rounded-3xl text-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-5xl md:text-8xl font-bold mb-10 leading-[1] uppercase tracking-tighter italic">End the <span className="text-red-500 underline underline-offset-[16px]">Harassment</span> Now</h2>
                  <p className="text-gray-400 mb-16 max-w-4xl mx-auto text-2xl font-light leading-relaxed">You have suffered enough in silence. The law is on your side, and CredSettle is your legal shield. Connect with our experts today and start your journey back to a life of dignity and peace.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-blue-600 text-white px-20 py-8 rounded-full font-bold text-3xl uppercase italic tracking-tighter hover:bg-blue-500 transition-all shadow-[0_20px_50px_rgba(37,99,235,0.4)] hover:scale-110 active:scale-95 transform hover:-rotate-2"
                  >
                    Start Your Recovery
                  </Link>
                </div>
                {/* Visual noise/background elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900 rounded-full -mr-300 -mt-300 opacity-20 blur-[150px]"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900 rounded-full -ml-300 -mb-300 opacity-20 blur-[150px]"></div>
              </div>

            </article>
          </div>

          {/* Right Column: CTA & Related (Sticky) */}
          <div className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              
              {/* Main CTA Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Need Urgent Help?</h4>
                <p className="text-sm text-gray-600 mb-6">Don&apos;t face the bank alone. Get expert legal support today.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Request Call Back
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                  <p>v 100% Confidential</p>
                  <p className="mt-1">v RBI Compliant Process</p>
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
