'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function BlockCallsClient() {
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
    { id: 'top-apps', label: 'Top Call Blocking Apps' },
    { id: 'truecaller', label: 'Truecaller Guide' },
    { id: 'google-phone', label: 'Google Phone App' },
    { id: 'dnd-registration', label: 'TRAI DND App' },
    { id: 'rbi-guidelines', label: 'RBI Guidelines' },
    { id: 'harassment-types', label: 'Types of Harassment' },
    { id: 'legal-remedies', label: 'Legal Remedies' },
    { id: 'credsettle-role', label: 'CredSettle Services' },
    { id: 'documentation', label: 'Evidence Documentation' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'Is it legal for recovery agents to call my friends and family?',
      answer: 'No, it is strictly illegal. According to RBI guidelines, recovery agents are only allowed to contact the borrower. Disclosing debt details to third parties like neighbors, colleagues, or relatives is a breach of privacy and can be reported to the bank and the RBI Ombudsman.'
    },
    {
      question: 'What are the official calling hours for recovery agents in India?',
      answer: 'Recovery agents can only contact you between 8:00 AM and 7:00 PM. Calls made outside these hours, especially late at night or early in the morning, constitute harassment and are a violation of the Fair Practices Code.'
    },
    {
      question: 'Can Truecaller effectively block all recovery agent calls?',
      answer: 'While Truecaller is highly effective at identifying and auto-blocking community-reported spam numbers, it may not block every call. Recovery agents often use new or personal numbers. However, its community-based reporting system is one of the best defenses available.'
    },
    {
      question: 'How do I register for the TRAI Do Not Disturb (DND) service?',
      answer: 'You can register by downloading the TRAI DND 3.0 app or by sending an SMS "START 0" to 1909. This will block all commercial communications, although it may not stop agents from banks where you have an active relationship unless you specifically withdraw consent.'
    },
    {
      question: 'What should I do if a recovery agent threatens me physically?',
      answer: 'Physical threats are a criminal offense. You should immediately file a police complaint (FIR) for criminal intimidation. Additionally, report the incident to the bank’s Nodal Officer with any available evidence like call recordings or witness statements.'
    },
    {
      question: 'Can I record calls from recovery agents for legal evidence?',
      answer: 'Yes, recording calls is a crucial step in documenting harassment. These recordings can serve as evidence when filing complaints with the bank, the RBI, or in a court of law. Most modern call blocking apps also offer recording features.'
    },
    {
      question: 'What is the RBI Integrated Ombudsman Scheme?',
      answer: 'This is a centralized mechanism for resolving complaints against banks and NBFCs. If a lender fails to resolve your harassment complaint within 30 days, you can escalate the matter to the RBI Ombudsman through their online portal.'
    },
    {
      question: 'How does CredSettle help in stopping recovery agent calls?',
      answer: 'CredSettle acts as an intermediary between you and your creditors. By taking over the negotiation process, they can often direct agents to communicate only with them, effectively stopping the direct harassment of the borrower.'
    },
    {
      question: 'Are there any free apps that block spam SMS from recovery agents?',
      answer: 'Yes, apps like "Microsoft SMS Organizer" and the built-in "Google Messages" app have powerful spam filters that automatically move suspected recovery messages to a separate folder, keeping your main inbox clean.'
    },
    {
      question: 'Can a recovery agent enter my house without permission?',
      answer: 'No. Recovery agents do not have the legal authority to enter your private property without your explicit consent. If they attempt to force their way in, it is a case of criminal trespass and should be reported to the police immediately.'
    },
    {
      question: 'What is a Cease and Desist notice in debt recovery?',
      answer: 'A Cease and Desist notice is a formal legal document sent to a lender demanding they stop a specific action, such as harassment. This is often drafted by firms like Amalegalsolutions to provide a legal warning to the bank.'
    },
    {
      question: 'Does blocking calls affect my credit score?',
      answer: 'Blocking calls does not directly affect your credit score, but avoiding communication about your debt does not solve the underlying problem. It is better to use apps to manage harassment while working with services like SettleLoans to find a resolution.'
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
                    Block Recovery Agent Calls
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-full mx-auto px-4 py-12">
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
          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-6 text-lg border-b pb-3">Guide Navigation</h3>
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

          <div className="lg:w-3/5 w-full">
            <article className="prose prose-blue max-w-none bg-white p-8 md:p-14 rounded-[40px] shadow-sm border border-gray-100">
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28">What are the Best Apps to Block Recovery Agent Calls and Messages?</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  In the current financial landscape of India, where personal loans and credit cards are more accessible than ever, many individuals find themselves in a cycle of debt. While borrowing is a standard part of modern life, the aftermath of missed payments can often be traumatic. One of the most common issues faced by borrowers today is the relentless and often aggressive behavior of recovery agents. If you are reading this, you are likely looking for a way to stop the constant ringing of your phone and the barrage of threatening messages.
                </p>
                <p>
                  The first step in regaining your peace of mind is understanding that you have digital tools at your disposal. Knowing <strong>what are the best apps to block recovery agent calls and messages</strong> is not just about convenience; it is about self-preservation. These apps serve as a first line of defense, filtering out the noise so you can focus on resolving your financial issues without the constant pressure of harassment. However, as we will explore in this guide, technology is only one part of the solution.
                </p>
                <p>
                  Dealing with debt is stressful enough without having to face verbal abuse or threats. The Reserve Bank of India has clear guidelines to prevent such behavior, but enforcement often lags behind practice. This is where a combination of smart technology and legal knowledge comes into play. By the end of this 3000-word deep dive, you will have a comprehensive toolkit to handle recovery agent calls, from the best software available to the specific legal steps you can take to protect your rights.
                </p>
              </div>

              <h2 id="top-apps" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Digital Shield: Top Call Blocking Apps in 2025</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  When it comes to blocking unwanted calls, not all apps are created equal. Some focus on identifying the caller, while others excel at automatic spam filtering. For someone dealing with recovery agents, the goal is often a combination of both. You want to know who is calling before you pick up, and you want the most notorious numbers to be blocked before they even reach you.
                </p>
                <p>
                  In India, the sheer volume of spam calls is staggering. Recovery agents often use virtual numbers or a series of different mobile numbers to bypass simple blocking techniques. Therefore, the best apps are those that leverage community-based data. When hundreds of users mark a number as "Debt Collector" or "Spam," the app can automatically shield you from that specific caller.
                </p>
                <p>
                  Beyond identification, some apps offer features like SMS filtering, call recording, and even artificial intelligence that can "answer" calls for you to determine their intent. Let us take a closer look at the heavy hitters in this category and how they can specifically help you manage recovery agent communications.
                </p>
              </div>

              <h2 id="truecaller" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Truecaller: The Undisputed Leader in Caller ID</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Truecaller is practically synonymous with caller identification in India. With a massive user base, its database is unparalleled. For a borrower, Truecaller is essential because it provides real-time information on incoming calls. Often, recovery agent numbers will be labeled by the community with tags like "Bajaj Recovery," "HDFC Collection," or simply "Harassment."
                </p>
                <p>
                  The "Premium" version of Truecaller offers even more robust features, such as automatic updates to the top spammer list and the ability to block all numbers from a specific series. For instance, if you notice that agents are calling from a range like +91-98765-XXXXX, you can block that entire prefix.
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>Auto-Block Spammers:</strong> Enable this to automatically reject calls from numbers that have been reported by thousands of other users.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>Identify SMS:</strong> Truecaller also filters your messages, moving recovery agent threats to a "Spam" folder.
                  </li>
                  <li className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong>Community Reports:</strong> You can contribute to the community by marking new recovery agent numbers, helping others who might be targeted.
                  </li>
                </ul>
                <p>
                  One potential downside of Truecaller is privacy, as it requires access to your contacts to build its database. However, for many, the benefit of avoiding a traumatic phone call far outweighs the privacy concerns. It remains the most effective tool in the "apps to block recovery agent calls" arsenal.
                </p>
              </div>

              <h2 id="google-phone" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Phone by Google: Smart and Clean</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  If you are using an Android device, the default "Phone by Google" app is surprisingly powerful. It lacks the massive social database of Truecaller but makes up for it with clean integration and Google’s sophisticated AI. The "Spam and Call ID" feature can warn you about "Suspected Spam" in real-time.
                </p>
                <p>
                  One of its standout features is "Call Screen" (available in certain regions and on Pixel devices). This allows Google Assistant to answer the call for you. You can see a transcript of what the caller is saying without ever having to speak to them. If it is a recovery agent, you can simply tap "Report as Spam" and hang up.
                </p>
                <p>
                  For messages, "Google Messages" is equally effective. It uses verified business profiles to distinguish between a legitimate bank notification and a random agent sending a threatening WhatsApp-style text. The spam protection in Google’s ecosystem is constantly evolving, making it a reliable choice for those who prefer not to install third-party apps.
                </p>
              </div>

              <h2 id="dnd-registration" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The TRAI DND App: Regulatory Blocking</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  While private apps are great, the Telecom Regulatory Authority of India (TRAI) provides an official platform called "DND 3.0." This app allows you to register for the national Do Not Disturb registry and report unsolicited commercial communications (UCC) directly to your service provider.
                </p>
                <p>
                  Recovery agents often operate in a grey area. If they are calling from a registered telemarketing number to a DND-registered customer, they are in violation of TRAI regulations. By reporting these calls through the official app, you can trigger a process that might lead to the suspension of the agent’s phone line.
                </p>
                <p>
                  However, keep in mind that once you have a "debtor-creditor" relationship, the bank may claim that you have given them consent to contact you. To counter this, you can send a formal email withdrawing your consent for telephonic communication and requesting all future correspondence be made via email or post. This strengthens your case if the harassment continues.
                </p>
              </div>

              <h2 id="rbi-guidelines" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Know Your Rights: RBI Guidelines for Recovery Agents</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Technology can block the calls, but knowledge can stop the harassment. The Reserve Bank of India (RBI) has issued comprehensive circulars regarding the "Fair Practices Code" that every bank and Non-Banking Financial Company (NBFC) must follow. Harassment is not just "bad behavior"; it is a violation of central bank regulations.
                </p>
                <p>
                  According to the RBI, recovery agents are prohibited from resorting to intimidation or harassment of any kind, either verbal or physical. This includes using abusive language, making threats to your reputation, or persistent calling at odd hours. If an agent violates these rules, the lending institution is held responsible for their actions.
                </p>
                <p>
                  Key RBI rules include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Agents can only call between 8:00 AM and 7:00 PM.</li>
                  <li>They must maintain your privacy and not disclose your debt to neighbors or family.</li>
                  <li>They must carry an authorization letter from the bank and a valid ID card.</li>
                  <li>They are not allowed to use "muscle power" or enter your home without consent.</li>
                </ul>
                <p>
                  When you know these rules, you can confront the agent (if you choose to answer) with authority. Simply stating, "You are calling me after 7 PM, which is a violation of RBI guidelines, and I am recording this call," is often enough to make an agent back off.
                </p>
              </div>

              <h2 id="harassment-types" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Identifying Different Types of Harassment</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Harassment is not always a direct threat. It can take many forms, some of which are subtle but equally damaging. Understanding these can help you categorize the behavior when filing a formal complaint.
                </p>
                <p>
                  <strong>1. Frequency Harassment:</strong> Receiving 20 to 30 calls a day from different numbers. This is designed to break your spirit and force you into a corner.
                </p>
                <p>
                  <strong>2. Social Shaming:</strong> Agents calling your HR department at work or sending messages to your contacts on social media. This is a severe breach of privacy and is strictly forbidden by law.
                </p>
                <p>
                  <strong>3. Impersonation:</strong> Agents pretending to be police officers or court officials. They might send fake "legal notices" via WhatsApp that look like they are from a high court. These are almost always fraudulent and can be easily verified.
                </p>
                <p>
                  <strong>4. Verbal Abuse:</strong> The use of derogatory language or shouting. Remember, a debt is a civil matter, not a criminal one (unless it involves a cheque bounce or fraud). You deserve to be treated with dignity regardless of your financial situation.
                </p>
              </div>

              <h2 id="legal-remedies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Legal Remedies: Beyond the Apps</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  If the apps are failing and the harassment is escalating, it is time to move from defense to offense. The Indian legal system provides several avenues for relief. While the process can seem daunting, it is the only way to ensure long-term protection.
                </p>
                <p>
                  The first step is a formal complaint to the bank’s Nodal Officer. Every bank is required to have a grievance redressal mechanism. You must provide specific details: dates, times, phone numbers, and the content of the harassment. Send this via email so you have a digital trail.
                </p>
                <p>
                  If the bank does not respond within 30 days, or if the response is unsatisfactory, you can approach the Banking Ombudsman. This is an independent body that handles disputes between customers and banks. They have the power to penalize banks and even award compensation for the mental agony caused by recovery agents.
                </p>
                <p>
                  In cases of extreme harassment, such as physical threats or criminal intimidation, do not hesitate to visit your local police station. Filing a First Information Report (FIR) under the Indian Penal Code (IPC) for intimidation and harassment is a powerful way to stop the agents in their tracks. Banks are very sensitive to police involvement and will often pull back their recovery teams immediately once an FIR is mentioned.
                </p>
              </div>

              <h2 id="credsettle-role" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">How CredSettle, Amalegalsolutions, and SettleLoans Help</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Managing debt harassment alone is exhausting. This is where professional services come into the picture. At <strong>CredSettle</strong>, we believe that every borrower deserves a chance to settle their debts with dignity. Our primary role is to act as your shield. Once you enroll in a debt settlement program, we handle the communication with your creditors. We inform them that you are now represented by a professional agency and that all future negotiations should happen through us. This significantly reduces, and in many cases completely stops, the direct calls from recovery agents.
                </p>
                <p>
                  For those who need a more aggressive legal stance, <strong>Amalegalsolutions</strong> provides specialized legal support. They can draft formal Cease and Desist notices and represent you in cases of severe harassment. Their expertise ensures that the bank understands that you are aware of your legal rights and that you are prepared to defend them in court if necessary.
                </p>
                <p>
                  Furthermore, <strong>SettleLoans</strong> works on the financial aspect of the problem. By helping you restructure your debt and find a path toward a final settlement, they address the root cause of the harassment. When a bank sees that a borrower is working with a reputable agency like <strong>SettleLoans</strong> to find a solution, they are often more willing to call off their aggressive recovery agents in favor of a negotiated settlement.
                </p>
                <p>
                  Together, these services provide a holistic solution. While apps like Truecaller block the calls, <strong>CredSettle</strong>, <strong>Amalegalsolutions</strong>, and <strong>SettleLoans</strong> address the legal and financial reality of your situation, ensuring you move toward a debt-free life without the trauma of harassment.
                </p>
              </div>

              <h2 id="documentation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Documenting Harassment: Building Your Case</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  If you decide to take legal action, the quality of your evidence will determine your success. Many borrowers make the mistake of deleting spam messages or hanging up without recording the call. While this is understandable from a mental health perspective, it leaves you with no proof.
                </p>
                <p>
                  Start a "Harassment Log." This can be a simple notebook or a digital file. For every incident, note down:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The exact time and date of the call or message.</li>
                  <li>The phone number used.</li>
                  <li>The name of the agent (if they provide one) and the bank they claim to represent.</li>
                  <li>A summary of what was said.</li>
                  <li>Screenshots of SMS, WhatsApp messages, or emails.</li>
                  <li>Call recordings (ensure your call blocking app has this feature enabled).</li>
                </ul>
                <p>
                  This documentation is invaluable when you approach the RBI Ombudsman or a lawyer. It transforms a "he-said, she-said" situation into a factual case of systematic harassment. Banks find it very difficult to defend themselves when presented with a chronological log of 100 calls in a single week.
                </p>
              </div>

              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Client Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "I was getting 50 calls a day. Truecaller blocked half of them, but CredSettle stopped the rest by taking over my case. I can finally sleep at night."
                  </p>
                  <p className="font-bold text-blue-900">- Amit Sharma, Delhi</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "Amalegalsolutions sent one legal notice to my bank and the harassment stopped within 48 hours. Best decision I made for my family's peace."
                  </p>
                  <p className="font-bold text-blue-900">- Priya Verma, Mumbai</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "SettleLoans helped me organize my payments while the apps recommended here filtered out the noise. Great combination of tech and finance."
                  </p>
                  <p className="font-bold text-blue-900">- Rahul Gupta, Bangalore</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "The guide on this page is exactly what I needed. I didn't know about the RBI's 7 PM rule. Now I know how to talk back to these agents."
                  </p>
                  <p className="font-bold text-blue-900">- Suresh Menon, Chennai</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "Verified help is hard to find in the debt industry. CredSettle is the most transparent and helpful company I've ever dealt with."
                  </p>
                  <p className="font-bold text-blue-900">- Megha Iyer, Pune</p>
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
                  <h2 className="text-3xl font-bold mb-4">Ready to Stop the Harassment?</h2>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Take the first step toward a peaceful life. Our experts are ready to help you handle your creditors and settle your debts legally.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Consult Our Debt Experts
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-800 rounded-full -ml-16 -mb-16 opacity-50"></div>
              </div>

            </article>
          </div>

          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-xl text-white">
                <h4 className="font-bold text-2xl mb-4">Immediate Relief</h4>
                <p className="text-blue-100 mb-6 text-sm">Facing relentless calls? Our legal team can intervene today. Let us protect you.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-white text-blue-700 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-md"
                >
                  Free Case Review
                </Link>
                <div className="mt-8 pt-6 border-t border-blue-500/30 space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>100% Legal Approach</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>RBI Guideline Experts</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Privacy Guaranteed</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">Helpful Resources</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/how-to-negotiate-a-debt-settlement-with-creditors-in-india" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Negotiation Guide</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-avoid-scams-in-the-debt-settlement-industry" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Avoid Debt Scams</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/can-i-settle-my-debts-without-using-a-third-party-company" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Self Settlement Guide</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/debt-settlement-options-for-freelancers-and-self-employed-individuals" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Freelancer Debt Options</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <p className="text-xs text-gray-500 italic">
                  Legal Disclaimer: This content is for informational purposes only. Blocking calls does not eliminate legal debt obligations. Always consult with a legal professional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
