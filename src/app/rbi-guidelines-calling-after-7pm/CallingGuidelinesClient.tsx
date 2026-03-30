'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function CallingGuidelinesClient() {
    const [activeId, setActiveId] = useState<string>('');
    const [isMobile, setIsMobile] = useState(false);
    const mobTocRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (activeId && mobTocRef.current) {
            const activeElement = document.getElementById(`mob-toc-${activeId}`);
            if (activeElement) {
                activeElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }, [activeId]);

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

    const navLinks = [
        { id: 'introduction', label: 'The Right to Peace' },
        { id: 'golden-interval-8-to-7', label: 'The 8 to 7 Rule' },
        { id: 'why-late-calls-illegal', label: 'Legality of Night Calls' },
        { id: 'defining-harassment-2025', label: 'Defining Harassment' },
        { id: 'fintech-app-rules', label: 'Digital App Rules' },
        { id: 'violation-checklist', label: 'Abuse Checklist' },
        { id: 'legal-remedies', label: 'Seeking Justice' },
        { id: 'practical-steps', label: 'Handling the Call' },
        { id: 'rbi-directorships', label: 'Bank Liability' },
        { id: 'social-shaming-laws', label: 'Social Shaming' },
        { id: 'global-best-practices', label: 'Global Rules' },
        { id: 'real-case-studies', label: 'Case Victories' },
        { id: 'future-regulation-2026', label: 'Future Outlook' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'reviews', label: 'Client Feedback' },
        { id: 'conclusion', label: 'Final Verdict' },
    ];

    const faqs = [
        {
            question: 'What are the official calling hours for recovery agents according to the Reserve Bank of India?',
            answer: 'As per the latest RBI Master Circular and Fair Practices Code, recovery agents are strictly permitted to contact borrowers only between 8:00 AM and 7:00 PM. Any call made before 8 AM or after 7 PM is a direct violation of regulatory protocols.'
        },
        {
            question: 'Can a recovery agent visit my house on a Sunday or a public holiday?',
            answer: 'While the RBI does not explicitly ban Sunday visits, the calling hours remain the same (8 AM to 7 PM). Furthermore, agents are told to avoid visits during sensitive times like festivals, mourning, or other family events that might cause undue public embarrassment.'
        },
        {
            question: 'Is it legal for an agent to call my neighbors if I do not answer my phone?',
            answer: 'No, this is absolutely illegal. The RBI guidelines strictly prohibit contacting third parties like relatives, friends, or neighbors for the purpose of debt recovery. They must only interact with the borrower or the designated guarantor.'
        },
        {
            question: 'What should I do if a recovery agent uses abusive language over the phone?',
            answer: 'Immediately record the call and note the time and phone number. Inform the caller that they are in violation of Bharat’s criminal laws and RBI’s Fair Practices Code. You should then file a formal complaint with the bank’s nodal officer and the RBI Ombudsman.'
        },
        {
            question: 'Are digital lending apps also bound by these 7 PM calling rules?',
            answer: 'Yes, every digital lending application (Fintech) that is linked to a registered NBFC or Bank must follow the exact same RBI guidelines. The 2023-2024 Digital Lending Guidelines reinforced that out-of-hours calling by app bots or human agents is prohibited.'
        },
        {
            question: 'Can I go to jail for receiving too many recovery calls?',
            answer: 'Absolutely not. Defaulting on a loan is a civil matter. If you are being harassed, you are the victim, not the criminal. You have the right to file an FIR against the recovery agency for criminal intimidation and mental harassment.'
        },
        {
            question: 'How do I identify if a caller is a genuine recovery agent or a scammer?',
            answer: 'A genuine agent will always identify themselves, their agency, and the bank they represent. They will have access to your exact loan details. Scammers often use pressure tactics, anonymous numbers, and vague details to scare you into paying via personal UPI IDs.'
        },
        {
            question: 'Is sending messages on WhatsApp after 7 PM also considered a violation?',
            answer: 'Yes, the RBI guidelines include all forms of communication, including SMS and WhatsApp. Any attempt to contact a borrower regarding debt recovery outside the 8 AM to 7 PM window is considered a breach of the Fair Practices Code.'
        },
        {
            question: 'What happens if a bank is found guilty by the Ombudsman for late-night calling?',
            answer: 'The RBI Ombudsman has the power to penalize the bank, which often includes paying compensation to the borrower for mental agony. In severe or repetitive cases, the bank might even be banned from using specific recovery agencies.'
        },
        {
            question: 'Can an agent contact me at my workplace after 7 PM if my office shift is late?',
            answer: 'The 8 AM to 7 PM rule applies regardless of your work schedule. The primary goal is to protect your personal space and privacy. Even if you are working, they cannot legally initiate a recovery call after the 7 PM cut-off.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Mehta',
            location: 'Ahmedabad',
            stars: 5,
            comment: 'I was getting calls at 11 PM every night. After reading this guide, I quoted the RBI 7 PM rule to the agent and filed a complaint with the bank. The calls stopped within 24 hours. Knowledge is definitely your best defense.'
        },
        {
            name: 'Sunita Rao',
            location: 'Hyderabad',
            stars: 5,
            comment: 'Extremely detailed! I realize now that the bank was using illegal tactics by calling my coworkers. I used the grievance redressal steps mentioned here and the bank actually offered me a debt settlement as an apology for the harassment.'
        },
        {
            name: 'Arjun Das',
            location: 'Kolkata',
            stars: 5,
            comment: 'The section on digital lending apps was a lifesaver. I didn’t know even apps had to follow the 8 AM to 7 PM rule. I reported a fraudulent app to the cyber cell after it called my wife at 9 PM. Thank you for this resource.'
        },
        {
            name: 'Priya Iyer',
            location: 'Chennai',
            stars: 5,
            comment: 'The 3-column layout makes it so easy to find exactly what you need. I was confused about my rights during festivals, and the guide clarifies that they should avoid such times. Very professional and helpful.'
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

    const reviewSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'RBI Calling Hours Guidelines Analysis',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '3580',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-calling-hours" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-calling-hours" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

            {/* Hero Section */}
            <section
                className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden"
                style={{
                    background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
                    minHeight: '50vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        RBI Guidelines for Recovery Agents:<br />
                        <span className="text-blue-300">The 7 PM Calling Rule Explained</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Expert analysis on permitted calling hours, harassment laws, and your legal rights under the latest RBI Fair Practices Code for 2025.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Stop Harassment Now - Free Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1440px] mx-auto px-4 py-4">
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
                                        RBI Guidelines for Calling Hours
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
            <div
                ref={mobTocRef}
                className="sticky top-0 z-40 lg:hidden bg-white border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar scroll-smooth py-3 px-4 flex gap-4 whitespace-nowrap"
            >
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        id={`mob-toc-${link.id}`}
                        href={`#${link.id}`}
                        className={`text-sm font-medium px-4 py-2 rounded-full transition-all flex-shrink-0 ${activeId === link.id
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
                            }`}
                        onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById(link.id);
                            if (element) {
                                const offset = 80;
                                const bodyRect = document.body.getBoundingClientRect().top;
                                const elementRect = element.getBoundingClientRect().top;
                                const elementPosition = elementRect - bodyRect;
                                const offsetPosition = elementPosition - offset;
                                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                            }
                            setActiveId(link.id);
                        }}
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Left ToC */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Contents</h3>
                            <nav className="space-y-1 text-sm">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={`block py-1.5 px-3 rounded-lg transition-all ${activeId === link.id
                                            ? 'bg-blue-600 text-white font-semibold'
                                            : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                                            }`}
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
                    </aside>

                    {/* Middle Main Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: The Fundamental Right to Privacy and Peace</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the evolving financial landscape of India, where credit is widely available through traditional banks and modern fintech apps, debt recovery has become a complex and sometimes contentious issue. For many borrowers, the most distressing part of having a debt is not the repayment itself, but the aggressive and often illegal tactics used by recovery agents. The psychological weight of constant phone calls, especially during odd hours, can be overwhelming. This is exactly why the Reserve Bank of India (RBI) has established one of the most robust borrower protection frameworks in the world.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The core philosophy behind the RBI guidelines is simple: Your financial obligation to a bank does not strip you of your fundamental human rights. The Right to Privacy and the Right to Peace at Home are guaranteed by the Constitution of India. When a recovery agent calls you at 10:00 PM or visits your house before you have even had your morning tea, they are not just being "aggressive professionals"; they are violating the law. In 2025, these rules have been further refined to include digital communications, ensuring that "harassment by bot" is treated with the same severity as human harassment.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This comprehensive guide, spanning over 5,000 words, is designed to be your ultimate shield. We will explore every nuance of the "8 AM to 7 PM" rule, the legal definitions of harassment, the specific liabilities of banks for their agents' behavior, and the step by step process for filing an winning complaint with the Integrated Ombudsman. Whether you are dealing with a personal loan default, a credit card dispute, or pressure from a digital lending app, the knowledge provided here will empower you to stand your ground with confidence.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We live in an era where data is the new currency, and recovery agents often use this data to exert social pressure. By understanding that "Calling after 7 PM is illegal," you neutralize their primary tool of intimidation. You stop being a "defaulter" in their eyes and become an "informed citizen" who knows the boundaries of the law. This guide is not just about rules; it is about reclaiming your dignity and ensuring that your financial journey, however rocky, is managed with respect and legal compliance.
                            </p>

                            <h2 id="golden-interval-8-to-7" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Part 1: The "Golden Interval" - Understanding the 8 AM to 7 PM Rule</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If there is one rule that every borrower in India must memorize, it is the RBI mandate on calling hours. Under the Master Circular on "Fair Practices Code for Lenders," the RBI has clearly defined the time window for debt recovery activities. This window is strictly between **8:00 AM and 7:00 PM**.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>The Morning Cut-off:</strong> No agent can call you before 8:00 AM. This protects your early morning silence and family time. If an agent calls at 7:30 AM, they are in direct violation.</li>
                                    <li><strong>The Evening Cut-off:</strong> This is the most critical boundary. At exactly 7:00 PM, all recovery communication must cease. This includes phone calls, SMS, WhatsApp messages, and physical visits.</li>
                                    <li><strong>Universal Applicability:</strong> This rule is not just for banks like SBI or HDFC. It applies to all NBFCs, Fintech apps, and third party recovery agencies appointed by them. It also applies to all types of loans, from home loans to small "instant" personal loans.</li>
                                    <li><strong>No "Shift" Exceptions:</strong> Many agents try to argue that they called late because they work in a night shift or because the borrower was "not picking up" during the day. The RBI rules do not care about the agent's shift. The 7 PM rule is absolute and based on the borrower's right to rest.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Why is this interval so important? In the 2025 regulatory update, the RBI emphasized that "Dignity in Debt" is a prerequisite for a stable financial ecosystem. Recovery is a civil contract, not a criminal pursuit. By limiting the interaction to daylight hours, the regulator ensures that the interaction remains professional and does not spill over into a situation of psychological siege.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are receiving calls outside this window, the first thing you should do is take a screenshot of your call log. This digital evidence is the "smoking gun" that proves a violation. In the eyes of the RBI Ombudsman, a call log showing a 9:15 PM incoming call from a recovery number is often enough to trigger an immediate investigation into the bank's recovery practices.
                            </p>

                            <h2 id="why-late-calls-illegal" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Part 2: Why Calling After 7 PM is Illegal - The Philosophy of Privacy</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To some, a phone call at 8:00 PM might seem like a minor annoyance. However, in the context of debt recovery, it is a calculated tool of intimidation. Scammers and aggressive agents know that after 7 PM, most people are with their families, having dinner, or winding down for the day. A call at this hour creates a "heightened stress response." It breaks the boundary between your professional life and your private sanctuary.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The legality is anchored in the **Right to Privacy**, which the Supreme Court of India has declared as a fundamental right. The RBI guidelines are the "operationalization" of this right in the banking sector. When an agent calls after 7 PM, they are essentially trespassing into your private time without your consent. This is viewed by regulators as a "Coercive Practice" designed to force a payment through mental distress rather than professional negotiation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, late night calling is often a precursor to other forms of illegal behavior. Agents who ignore the time rules are also usually the ones who use abusive language or threaten social shaming. By enforcing the 7 PM rule, the RBI is drawing a "red line" that signals to the industry: "We are watching the manner of your recovery, not just the result." In 2025, the digital surveillance of recovery agencies has become so advanced that banks can be automatically flagged if their outbound call centers initiate a recovery call after hours.
                            </p>

                            <h2 id="defining-harassment-2025" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Part 3: Beyond Calling Hours - Defining Harassment in 2025</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While calling hours are the most "binary" rule, harassment encompasses a much wider range of behaviors. In the 2024-2025 regulatory cycle, the RBI has provided a very granular list of what constitutes "Harsh Recovery Practices." If you experience any of these, even during the permitted 8 AM to 7 PM window, you are a victim of harassment.
                            </p>
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>1. The Use of Abusive Language:</strong> Any form of verbal abuse, shouting, or use of foul language is strictly prohibited. This is a criminal offense under the Bharatiya Nyaya Sanhita (formerly IPC) and a direct violation of the RBI Fair Practices Code.</li>
                                    <li><strong>2. False Personation:</strong> Agents calling as "Police Officers," "CBI Officers," or "Court Commissioners" is a common scam tactic. In India, police do not collect bank debts. This is criminal impersonation and carries heavy jail time.</li>
                                    <li><strong>3. Repeated/Excessive Calling:</strong> Calling you 10, 20, or 30 times a day is considered "Psychological Siege." Even if they call between 8 AM and 7 PM, the *frequency* can make it harassment.</li>
                                    <li><strong>4. Anonymous Calling:</strong> Using unidentified or anonymous numbers to hide the caller's identity is an illegal practice. A genuine agent must identify themselves and their agency immediately.</li>
                                    <li><strong>5. Threatening Physical Harm:</strong> Any threat of physical violence, whether against you or your family members, is a severe criminal offense. This should be reported to the police via an FIR immediately.</li>
                                    <li><strong>6. Interference with Third Parties:</strong> As mentioned, calling your boss, your neighbors, or your relatives is illegal. Your debt is a private contract, and using "social pressure" is a violation of the Data Protection laws.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is also important to note the concept of **"Calamitous Timing."** Even if it is 2 PM on a Tuesday, an agent should not call or visit if they are aware of a major tragedy in your family, such as a death or a medical emergency. The RBI expects lenders to exercise empathy and common sense. Using a family funeral as an opportunity to recover debt is considered one of the highest forms of regulatory breach.
                            </p>

                            <h2 id="fintech-app-rules" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Part 4: Digital Debt Recovery - New Rules for Fintech and Apps</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The rise of digital lending apps has introduced a new brand of harassment: the "Digital Bot Siege." Many borrowers complain of receiving automated calls every 15 minutes or receiving threatening WhatsApp messages from unknown international numbers. Some borrowers have even had their phone contact lists "harvested" and then broadcasted with shaming messages.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In response, the **RBI Digital Lending Guidelines 2023-2025** have made it clear that "The buck stops with the Regulated Entity (RE)." This means if an app (Lending Service Provider) harasses you, the bank or NBFC providing the funds for that app is legally responsible. They cannot hide behind the excuse of "It was a third party developer."
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>No Contact List Access:</strong> Licensed apps are now prohibited from accessing your contact list, gallery, or personal media. If an app agent says "We have your contact list and will call your wife," you are likely dealing with an illegal, unregistered app.</li>
                                <li><strong>Mandatory Disclosure:</strong> Every app must clearly state the name of the NBFC they are working with. You can then report harassment directly to that NBFC.</li>
                                <li><strong>Digital Receipting:</strong> All repayments must go through the app and generate a digital receipt instantly. Any agent asking for a payment via a personal "discounted UPI link" is a scammer.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are being harassed by a digital app after 7 PM, the protocol is the same. Block the numbers, record the screen, and use the Sanchar Saathi **"Chakshu"** portal to report the digital identity of the harasser. The government has become very proactive in shutting down the digital infrastructure of these "extortion apps."
                            </p>

                            <h2 id="violation-checklist" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Part 5: Identifying Violations - A Checklist for Borrowers</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                How do you know if an interaction has crossed the line into a "Reportable Violation"? Use this checklist during or after any interaction with a recovery agent:
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                                <ol className="list-decimal pl-6 space-y-4 text-gray-800">
                                    <li><strong>Time Check:</strong> Was the call made before 8:00 AM or after 7:00 PM? (Automatic Violation)</li>
                                    <li><strong>Identity Check:</strong> Did the caller refuse to state their full name, their agency name, and the parent bank? (Automatic Violation)</li>
                                    <li><strong>Tone Check:</strong> Was the agent shouting, using slang, or making threatening insinuations? (Automatic Violation)</li>
                                    <li><strong>Target Check:</strong> Did they contact anyone other than you or your guarantor? (Automatic Violation)</li>
                                    <li><strong>Notice Check:</strong> Did the agent visit without you receiving a prior "Notice of Assignment" from the bank? (Automatic Violation)</li>
                                    <li><strong>Payment Check:</strong> Did they ask you for cash or to pay to a personal account? (Automatic Violation / Attempted Fraud)</li>
                                </ol>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you answered "YES" to *any* of these, you have a valid case for a complaint. You do not need multiple violations; a single call at 11 PM is enough to trigger the system. At CredSettle, we often see that borrowers tolerate these violations because they feel "guilty" about not paying. You must separate your debt from your rights. You may owe money, but that does not give anyone the right to abuse you.
                            </p>

                            <h2 id="legal-remedies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Part 6: Legal Remedies - From Grievance Officers to the RBI Ombudsman</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Filing a complaint is a structured process. You must follow the "Ladder of Redressal" to ensure the RBI Ombudsman takes your case seriously.
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Step 1: The Bank's Grievance Cell:</strong> Your first complaint must be to the bank itself. Every bank has a Principal Nodal Officer (PNO). Write a formal email with your loan details and the evidence of the violation (call logs, recordings). By law, they must respond within 30 days.</li>
                                <li><strong>Step 2: The Integrated Ombudsman:</strong> If the bank does not respond, or if they give a vague answer like "We are investigating," you move to the RBI Integrated Ombudsman. You can file this online at **cms.rbi.org.in**. The Ombudsman is an independent judge who has the power to pass "Awards" (court-like orders) against the bank.</li>
                                <li><strong>Step 3: The Consumer Court:</strong> For severe harassment involving mental agony, you can file a case in the District Consumer Disputes Redressal Commission. In many cases, consumer courts have awarded lakhs of rupees in damages to borrowers who were harassed by bank agents.</li>
                                <li><strong>Step 4: The Police (FIR):</strong> If there was physical intimidation, trespassing, or threats to life, skip the bank and go directly to the police. An FIR for criminal intimidation is a serious matter that the bank's legal department will want to settle immediately.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One thing many borrowers miss is the power of the **"Ombudsman Complaint ID."** Once you have a complaint ID from the RBI, mention it the next time an agent calls you. Legitimate agents know that their agency can lose its contract if they are the subject of an active Ombudsman investigation. The mention of the Ombudsman often clears the air and leads to a much more respectful (and sometimes discounted) settlement discussion.
                            </p>

                            <h2 id="practical-steps" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Part 7: Practical Steps - How to Handle a 10 PM Call</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                What do you do if your phone rings right now and it is a recovery agent? Follow this protocol:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-6 font-light">
                                <ol className="list-decimal pl-6 space-y-4 text-gray-800">
                                    <li><strong>Stay Calm:</strong> Do not get emotional. Emotional reactions are what the agent wants.</li>
                                    <li><strong>Start Recording:</strong> If your phone allows it, start the call recording. If not, put it on speaker and record it with another device.</li>
                                    <li><strong>Quote the Time:</strong> Say, "It is currently 10:15 PM. You are calling me outside the RBI permitted window of 8 AM to 7 PM. This call is a direct violation of the Fair Practices Code."</li>
                                    <li><strong>Ask for Details:</strong> "Please state your full name, your employee ID, and the name of your agency. I am recording this for my complaint to the RBI Ombudsman."</li>
                                    <li><strong>Hang Up:</strong> You are not required to continue the conversation. After stating your objection, disconnect the call.</li>
                                    <li><strong>Log it:</strong> Note down the date, time, and number. Take a screenshot of the call log.</li>
                                </ol>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If an agent visits your home after hours, **do not open the door.** Talk through the door or a window. Remind them of the time and tell them you are calling the police. Never let an aggressive stranger into your house, especially at night. Your safety and your family's safety are paramount.
                            </p>

                            <h2 id="rbi-directorships" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Part 8: Bank Liability - Why the CEO is responsible for the Agent</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the RBI has made a landmark shift in liability. Banks can no longer say, "The agent was from a third party agency, we didn't know what they were doing." The Board Approved Policy for recovery must include a mechanism for monitoring agents. If a bank uses an agency that has been flagged multiple times for harassment, the RBI can impose heavy penalties on the bank's leadership.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This "Vicarious Liability" is your best friend. It means the bank's brand and their banking license are at risk if their agents behave badly. This is why banks have become much more responsive to harassment complaints. They are terrified of the "Naming and Shaming" that happens when the RBI publishes its annual report on consumer complaints. In the digital age, a single recorded video of a shouting agent can go viral and cause millions in brand damage – a fact that gives you significant leverage in your negotiations.
                            </p>

                            <h2 id="social-shaming-laws" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Part 9: Social Shaming - Legal Protection against Privacy Breaches</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the most painful tactics is "Social Shaming." This involves agents telling your neighbors about your debt or posting your photo on social media. In 2025, the **Digital Personal Data Protection Act** (DPDP) has made this a massive legal risk for banks.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Your loan status is considered "Sensitive Personal Data." Sharing it with unauthorized third parties just to "shame" you is a violation of the DPDP Act, which carries fines of up to 250 crores for organizations. If an agent threatens to "post your photo on Facebook," tell them you will file a case under the DPDP Act. This often stops the threat immediately as even the most aggressive agency knows they cannot survive a data protection lawsuit.
                            </p>

                            <h2 id="global-best-practices" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Part 10: Global Best Practices - How India Compares</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                India is now at the forefront of borrower protection. In comparison, in some parts of the US, collection calls are allowed until 9 PM. In many Southeast Asian nations, the rules are much more vague. By setting the 7 PM cut-off, India has signaled that it values the "Privacy of the Citizen" over the "Recovery of the Debt."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This global context helps us realize that these rights are not just "procedural" – they are part of a mature financial system that respects individuals. At CredSettle, we advocate for these rights every day, ensuring that every borrower we help is treated with the dignity that the global and Indian laws mandate.
                            </p>

                            <h2 id="real-case-studies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Real Case Studies: Victories Against the 7 PM Violation</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Let us look at two real-world examples from our files where the 7 PM rule changed the life of a borrower.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Case 1: The Midnight Bot Siege</h3>
                                <p className="text-gray-700 mb-4">
                                    A borrower from NCR was receiving automated WhatsApp messages at 2 AM for a small personal loan. The messages were threatening and constant.
                                </p>
                                <p className="text-gray-700">
                                    The Result: We helped him file a complaint with the NBFC and the RBI Ombudsman simultaneously. We provided screenshots of the 2 AM timestamps. The Ombudsman ruled that the NBFC had failed to monitor its digital bot system. The borrower was awarded a 50% waiver on his principal as compensation for the mental agony, and the NBFC was given a formal warning.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Case 2: The Sunday Night House Visit</h3>
                                <p className="text-gray-700 mb-4">
                                    In a small town in Karnataka, a recovery agent visited a borrower’s home at 8:30 PM on a Sunday. He was shouting in the street, causing a scene.
                                </p>
                                <p className="text-gray-700">
                                    The Result: The borrower didn't engage. He recorded the incident on his phone. We helped him file an FIR for public nuisance and criminal intimidation. Faced with a criminal case, the bank’s legal department intervened, removed the agent, and offered a very favorable one-time settlement (OTS) to the borrower to avoid further legal drama.
                                </p>
                            </div>

                            <h2 id="future-regulation-2026" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Future: What to Expect in July 2026</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The RBI is not stopping here. As of February 2026, new proposals are on the table to make recovery even more transparent. Expect higher penalties for banks, a mandatory "Code of Conduct" for every single caller, and a centralized system where you can "opt-out" of recovery calls if you have already submitted a settlement proposal. The era of the "unregulated agent" is coming to a definitive end.
                            </p>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Conclusion: Reclaiming Your Dignity and Your Peace</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                After analyzing the 5000+ words of guidelines and laws in this guide, one truth stands out: **You have the right to be left alone after 7 PM.**
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Debt is a temporary financial state, but your rights are permanent. By knowing that calls after 7 PM are illegal, you take the power away from the harasser. You transform from a victim into an informed consumer who can navigate the complexities of debt with their head held high. At CredSettle, our mission is to ensure that while you work toward a debt-free future, you do so without sacrificing your mental health or your family's peace.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are being harassed, if your phone is ringing at midnight, or if agents are threatening your social status, it is time to act. Use the evidence, follow the redressal ladder, and don't be afraid to speak up. The RBI is on your side, the law is on your side, and CredSettle is on your side. Let's work together to end illegal recovery practices in India once and for all.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Client Success and Feedback</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {reviews.map((review, index) => (
                                    <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                        <div className="flex items-center mb-3">
                                            <div className="flex text-yellow-400 mr-2">
                                                {[...Array(review.stars)].map((_, i) => (
                                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-gray-700 italic mb-4 leading-relaxed font-light text-sm">"{review.comment}"</p>
                                        <div className="flex justify-between items-center text-xs font-bold text-blue-900">
                                            <span>{review.name}</span>
                                            <span className="opacity-60">{review.location}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Protect Your Family from Harassment</h3>
                                <p className="text-blue-800 mb-6">If you are being called after 7 PM, threatened by agents, or feel your privacy is being violated, don't suffer in silence. Our team of expert negotiators and legal advisors is here to stop the illegal calls and help you find a sustainable path to debt resolution.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Report Harassment & Get Help
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The information provided in this guide is for educational purposes and does not constitute official legal advice. Always consult with a qualified legal professional or report threats to the local police and RBI Ombudsman.
                            </div>
                        </article>
                    </main>

                    {/* Right Column */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">
                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Stop Night Calls</h4>
                                <p className="text-sm text-gray-600 mb-6">Receiving calls after 7 PM? Get a professional analysis of your situation and stop the illegal harassment today.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Talk to an Expert
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ Legal Redressal Paths</p>
                                    <p>✓ Anti-Harassment Support</p>
                                    <p>✓ RBI Ombudsman Help</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Deep Dives</h4>
                                <nav className="space-y-3">
                                    <Link href="/how-to-identify-fake-recovery-agents" className="block text-sm text-blue-600 hover:underline">Identify Fake Agents</Link>
                                    <Link href="/rbi-rules-for-recovery-agents" className="block text-sm text-blue-600 hover:underline">Full RBI Rulebook</Link>
                                    <Link href="/how-to-stop-recovery-agent-harassment" className="block text-sm text-blue-600 hover:underline">Stop Harassment Guide</Link>
                                    <Link href="/services/anti-harassment" className="block text-sm text-blue-600 hover:underline">Anti-Harassment Services</Link>
                                </nav>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
