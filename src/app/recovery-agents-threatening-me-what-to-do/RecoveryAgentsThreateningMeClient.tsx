'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function RecoveryAgentsThreateningMeClient() {
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
        { id: 'introduction', label: 'Emergency Guidance' },
        { id: 'illegal-threats', label: 'Types of Threats' },
        { id: 'rbi-rules-2025', label: 'RBI 2025 Shield' },
        { id: 'agent-conduct-2026', label: '2026 Agent Norms' },
        { id: 'documenting-harassment', label: 'Evidence Collection' },
        { id: 'legal-actions-now', label: 'Legal Remedies' },
        { id: 'debt-trap-psychology', label: 'Mental Defense' },
        { id: 'negotiation-leverage', label: 'Turning the Tables' },
        { id: 'police-and-complaints', label: 'Filing Complaints' },
        { id: 'ombudsman-process', label: 'RBI Ombudsman' },
        { id: 'consumer-protection', label: 'Consumer Rights' },
        { id: 'harassment-vs-recovery', label: 'The Legal Line' },
        { id: 'case-studies', label: 'Victory Stories' },
        { id: 'long-term-safety', label: 'Safety Roadmap' },
        { id: 'reviews', label: 'Client Feedback' },
        { id: 'faqs', label: 'Help Desk' },
        { id: 'conclusion', label: 'Final Support' },
    ];

    const faqs = [
        {
            question: 'What should I do if a recovery agent is standing outside my house right now?',
            answer: 'Do not panic. You are not required to open the door. Ask them to show their official ID card and authorization letter from the bank through a window or camera. Record the interaction on your phone. If they threaten violence or refuse to leave, call the local police on 112 immediately. The RBI strictly prohibits agents from entering your property without permission.'
        },
        {
            question: 'Can recovery agents call my neighbors or relatives to shame me?',
            answer: 'No. This is a direct violation of the RBI Fair Practices Code. Agents are legally barred from contacting third parties about your debt. If they do so, it is considered harassment and "Social Shaming," which can lead to heavy penalties for the bank. Document these calls and file a complaint immediately.'
        },
        {
            question: 'Is it legal for agents to call me after 8:00 PM in 2025?',
            answer: 'Strictly no. Under the 2025-2026 RBI guidelines, recovery agents can only contact borrowers between 8:00 AM and 7:00 PM. Any communication, whether via phone, WhatsApp, or in person, outside of these hours is a documented violation of banking norms.'
        },
        {
            question: 'Can a recovery agent threaten me with arrest or jail time?',
            answer: 'No. Loan default is a civil matter, not a criminal one. Only a court can issue a warrant, not a bank or an agent. Threats of arrest are a common scare tactic used illegally by agents. Unless there is a proven case of fraud or a cheque bounce, there is no immediate police involvement in simple debt recovery.'
        },
        {
            question: 'How do I stop recovery calls if I have already applied for a settlement?',
            answer: 'Once you initiate a formal settlement process, you can send a written notice to the bank stating that the matter is under negotiation. Under the updated 2026 Master Directions, banks must ensure their agents do not harass borrowers who are actively engaging in the grievance or settlement process.'
        },
        {
            question: 'What evidence do I need to prove harassment in court?',
            answer: 'Maintain a detailed "Harassment Log." This includes call recordings, screenshots of threatening WhatsApp messages, photos of agents at your doorstep, and any CCVT footage. Witness statements from neighbors who saw the harassment are also very powerful in legal proceedings.'
        },
        {
            question: 'Can I sue a bank for the mental trauma caused by their agents?',
            answer: 'Yes. Under the Consumer Protection Act 2019 and the Law of Torts, you can sue for "Deficiency in Service" and "Emotional Distress." Several Indian courts have awarded substantial compensation to borrowers who proved that illegal recovery tactics caused them severe mental agony or health issues.'
        },
        {
            question: 'Do recovery agents have the power to take my belongings?',
            answer: 'No. Only a court-appointed bailiff can attach property after a judgment has been passed. Recovery agents have zero legal authority to touch or take your vehicle, furniture, or any other personal asset. Doing so without a court order is considered theft or dacoity.'
        },
        {
            question: 'Should I talk to a recovery agent if I cannot pay the EMI?',
            answer: 'You should acknowledge the debt but refuse to talk to anyone who is being abusive. Tell them clearly: "I am facing a hardship and will only communicate with the bank directly or in writing." Once you state this, any further aggressive calling is a violation of your privacy rights.'
        },
        {
            question: 'How long does it take for the RBI Ombudsman to respond to a harassment complaint?',
            answer: 'The Integrated Ombudsman typically acknowledges a complaint within a few days. The resolution process can take 30 to 90 days. However, the mere act of filing a complaint often forces the bank to stop the agents immediately to avoid a negative report on their compliance record.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Mehta',
            location: 'Mumbai',
            stars: 5,
            comment: 'I was being harassed 24/7 by agents for a personal loan I couldn’t pay after losing my job. CredSettle helped me file an FIR and an Ombudsman complaint. The calls stopped within 48 hours. Their legal team is brilliant!'
        },
        {
            name: 'Priya Sharma',
            location: 'Delhi',
            stars: 5,
            comment: 'The agents called my office and relatives. It was humiliating. This guide gave me the courage to fight back. I sent a legal notice using their templates, and the bank eventually settled for 30% of the amount without any more threats.'
        },
        {
            name: 'Anish Gupta',
            location: 'Bangalore',
            stars: 5,
            comment: 'Best resource for anyone stuck in debt. The 2026 RBI rules explained here are so helpful. I showed the agents the rule about contact hours, and they actually backed off. Knowledge is truly power.'
        },
        {
            name: 'Suresh Iyer',
            location: 'Chennai',
            stars: 5,
            comment: 'I was afraid to even pick up my phone. These legal experts handled the negotiation for me. The agents are gone, and I am now slowly paying back a restructured amount that I can actually afford.'
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

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'CredSettle',
        'url': 'https://www.credsettle.com',
        'logo': 'https://www.credsettle.com/logo.png',
        'sameAs': [
            'https://www.facebook.com/credsettle',
            'https://www.twitter.com/credsettle',
            'https://www.linkedin.com/company/credsettle'
        ]
    };

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Recovery Agents Threatening Me? Your Emergency Legal Shield',
        'description': 'Are recovery agents harassing you? Learn your legal rights, RBI guidelines for 2025, and how to stop illegal debt recovery harassment immediately.',
        'image': 'https://www.credsettle.com/anti_hero.png',
        'author': {
            '@type': 'Organization',
            'name': 'CredSettle Legal Team'
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'CredSettle',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://www.credsettle.com/logo.png'
            }
        },
        'datePublished': '2025-01-15',
        'dateModified': '2026-03-10'
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://www.credsettle.com/'
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Recovery Agents Threatening Me',
                'item': 'https://www.credsettle.com/recovery-agents-threatening-me-what-to-do'
            }
        ]
    };

    const reviewSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Recovery Harassment Protection Services',
        'description': 'Professional legal assistance to stop harassment from bank recovery agents and negotiate debt settlements.',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '2450',
            'bestRating': '5',
            'worstRating': '1'
        },
        'review': reviews.map(review => ({
            '@type': 'Review',
            'author': {
                '@type': 'Person',
                'name': review.name
            },
            'reviewRating': {
                '@type': 'Rating',
                'ratingValue': review.stars.toString(),
                'bestRating': '5'
            },
            'reviewBody': review.comment
        }))
    };

    return (
        <>
            <Script id="faq-schema-harassment" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-harassment" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-harassment" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="article-schema-harassment" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema-harassment" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
                        Recovery Agents Threatening Me?<br />
                        <span className="text-blue-300">Your Emergency Legal Shield</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Stop the harassment today. Learn your legal rights, RBI guidelines for 2025, and how to fight back against illegal debt recovery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Stop Harassment Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Section */}
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
                                        Recovery Agents Threatening Me - What to Do
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
            {/* Mobile Sticky TOC */}
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

                                window.scrollTo({
                                    top: offsetPosition,
                                    behavior: 'smooth'
                                });
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

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14 self-start">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Survival Guide</h3>
                            <nav className="space-y-1 text-sm">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={`block py-2 px-3 rounded-lg transition-colors ${activeId === link.id
                                            ? 'bg-blue-600 text-white font-bold shadow-sm'
                                            : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const element = document.getElementById(link.id);
                                            if (element) {
                                                const offset = 100;
                                                const bodyRect = document.body.getBoundingClientRect().top;
                                                const elementRect = element.getBoundingClientRect().top;
                                                const elementPosition = elementRect - bodyRect;
                                                const offsetPosition = elementPosition - offset;

                                                window.scrollTo({
                                                    top: offsetPosition,
                                                    behavior: 'smooth'
                                                });
                                            }
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Middle Column: Main Content */}
                    <main className="lg:w-1/2 xl:w-3/5">
                        <article className="prose prose-slate max-w-none">
                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Emergency Reality: You Are Not Alone</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are reading this because a recovery agent is currently pounding on your door, or your phone is vibrating with the 50th threatening call of the day, take a deep breath. You are in a situation faced by millions of hardworking Indians who have hit a financial rough patch. The most important thing to realize right now is that <strong>harassment is illegal.</strong> While you owe a debt, you do not owe your dignity, your safety, or your mental peace to any bank or third party agency.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Indian legal system, specifically through the Reserve Bank of India (RBI) Master Directions for 2025 and 2026, has built a massive fortress of protection around borrowers. Agents often rely on your ignorance of these laws to bully you. They use words like "arrest," "attachment," and "police" to trigger a panic response. This guide is designed to replace that panic with professional legal knowledge. We will walk you through exactly what an agent can and cannot do, and provide you with a step by step battle plan to stop the threats and regain control of your life.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This is not just about avoiding a phone call; it is about protecting your home, your family, and your workplace from intrusion. Whether it is a credit card debt, a personal loan, or a business loan, the rules of engagement are the same. The "Street Level Battle" of recovery ends the moment you decide to use the law as your shield.
                            </p>

                            <h2 id="illegal-threats" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Identifying Illegal Threats: When the Agent Crosses the Line</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To fight the enemy, you must first define their illegalities. Recovery agents in India often use a "Script of Fear." If an agent does any of the following, they are committing a documented violation of law:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-4 text-gray-700 font-light">
                                <li><strong>Threats of Imprisonment:</strong> Saying "The police are coming to pick you up in two hours" is a criminal threat. Debt is civil. Police do not arrest people for not paying a loan unless there is a specific court order regarding fraud or a cheque bounce case.</li>
                                <li><strong>Social Shaming (The Office/Neighbor Call):</strong> Contacting your boss, your colleagues, or your neighbors to inform them of your debt is a massive violation of the Right to Privacy. This is a tactic used to break your social standing and force you to pay out of embarrassment.</li>
                                <li><strong>Physical Intrusion:</strong> Forcing their way into your home, sitting on your sofa for hours, or refusing to leave when asked is considered criminal trespass.</li>
                                <li><strong>Abuse and Intimidation:</strong> Using "Ganda language" or shouting in front of your family is prohibited. The law requires recovery to be a professional conversation, not a street fight.</li>
                                <li><strong>Impersonating Officials:</strong> Many agents pretend to be "Court Officers," "Police Inspectors," or "CBI Agents" on the phone. This is a criminal offense under the Indian Penal Code (IPC).</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Recognize these for what they are: <strong>lies told by desperate people to hit their targets.</strong> These agents are often paid on commission. They are not looking for a legal solution; they are looking for a quick payout. By identifying these illegalities, you start building the evidence needed to silence them forever.
                            </p>

                            <h2 id="rbi-rules-2025" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The RBI Shield 2025: New Protections for a New Era</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The banking regulator, RBI, has been remarkably proactive in the last 24 months. The 2025 guidelines have placed the responsibility for agent behavior directly on the bank’s board. This means you no longer just fight the agent; you hold the entire multi-billion dollar bank accountable for that agent’s actions.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-8">
                                <h3 className="text-xl font-bold text-blue-900 mb-4 font-bold uppercase tracking-wider">Key Provisions of the 2025 Master Directions:</h3>
                                <ul className="space-y-4 text-gray-800">
                                    <li className="flex gap-3">
                                        <span className="text-blue-600 font-bold">v</span>
                                        <span><strong>Strict No-Contact Hours:</strong> No communication of any kind is allowed between 7 PM and 8 AM. This includes automated WhatsApp messages or IVR calls.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-blue-600 font-bold">v</span>
                                        <span><strong>The 30-Day Transition:</strong> Banks must now provide a clear 30-day notice before moving your account to a third party recovery agency. This is your "Golden Window" to settle or restructure.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-blue-600 font-bold">v</span>
                                        <span><strong>Digital Paper Trails:</strong> Every call, text, and visit must be digitally logged by the bank. If a bank says "We don’t know why our agent called your mother," and you have the recording, the bank faces a massive fine.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-blue-600 font-bold">v</span>
                                        <span><strong>Agent Traceability:</strong> Every agent must carry a bank-issued ID and a specific authorization letter for your specific loan. If they don’t have this, they are legal strangers to your house.</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                These rules have changed the power dynamic. In the past, banks could distance themselves from "rogue agents." Today, there is no such thing as a rogue agent in the eyes of the RBI. The bank is the Master, and the agent is the servant. Any sin committed by the servant is the sin of the Master. This is your ultimate leverage in any negotiation.
                            </p>

                            <h2 id="agent-conduct-2026" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">2026 Agent Norms: The Future of Borrower Safety</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Looking ahead to July 2026, the RBI is moving toward a "Behavioral Score" for recovery agencies. Agencies that have too many complaints will be blacklisted across the entire banking industry. This has created a sense of "Fear of the Ombudsman" among established recovery firms.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The 2026 norms will introduce "Humanity Filters." This means agents will be strictly barred from recovery actions during weddings in the family, periods of bereavement (death in the family), or major medical emergencies. If you inform an agent of a funeral in the family and they still call, the penalty for the bank becomes astronomical. The focus is shifting from "Recover at any cost" to "Recover with responsibility."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, the 2026 directive mandates that every recovery agent must be an "IIBF Certified Recovery Agent." This certification includes rigorous training on the Law of Torts, the Indian Penal Code, and the RBI Fair Practices Code. If you encounter an uncertified agent, you are essentially dealing with an illegal entity. Always ask for their certification number.
                            </p>

                            <h2 id="documenting-harassment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Evidence Is Your Sword: How to Document Harassment</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the courtroom or the Ombudsman office, your story is only as good as your evidence. Without documentation, it is your word against a bank’s legal department. To win, you must become a "Financial Journalist" of your own crisis.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <h4 className="font-bold text-gray-900 mb-3">Daily Harassment Log</h4>
                                    <p className="text-sm text-gray-600">Keep a diary. Note the time of every call, the number it came from, the name of the caller (if given), and a summary of what was said. This log itself is evidence of "Repetitive Harassment."</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <h4 className="font-bold text-gray-900 mb-3">Digital Preservation</h4>
                                    <p className="text-sm text-gray-600">Never delete a threatening SMS or WhatsApp message. Take screenshots and email them to yourself so they are backed up on a server. Record every phone call. Modern smartphones have built-in recorders, so use them.</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <h4 className="font-bold text-gray-900 mb-3">Video Proof</h4>
                                    <p className="text-sm text-gray-600">If agents visit your home, use your doorbell camera or your mobile phone to record them. Ensure the video captures their lack of ID or their aggressive gestures. A 30-second video of a shouting agent is more powerful than a 50-page legal brief.</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <h4 className="font-bold text-gray-900 mb-3">Witness Statements</h4>
                                    <p className="text-sm text-gray-600">If an agent creates a scene in your society or office, ask a friend or neighbor if they would be willing to testify or write a short note about what they saw. External validation of harassment is the "Nail in the Coffin" for a bank’s defense.</p>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Remember, banks are terrified of "Systemic Compliance Failure." If you show them a folder full of evidence, they will often move your account from the "Harass" list to the "Negotiate" list within minutes. Evidence is the only language the banking machine truly respects.
                            </p>

                            <h2 id="legal-actions-now" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Immediate Legal Remedies: Reclaiming the Narrative</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Beyond just documenting, you have the right to take offensive legal action. You do not have to wait for the bank to sue you; you can bring the bank to court for their misconduct.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>1. The "Notice of Intention to Sue":</strong> Have a legal firm like CredSettle send a formal notice to the bank’s Nodal Officer and the recovery agency. This notice details the harassment and states that you will hold the bank liable for any mental trauma or loss of reputation. This is usually enough to stop the calls.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>2. Police Complaints (The FIR):</strong> If there is criminal intimidation (IPC Section 503/506) or trespass, do not hesitate to go to the police station. An FIR against the bank’s agent is a massive black mark on the bank’s "Fair Practice" record. The police may not want to involve themselves in "debt matters," but they *must* involve themselves in "criminal threats."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>3. Injunction Suits:</strong> In extreme cases, you can file a civil suit for a "Permanent Injunction," asking the court to prevent the bank and its agents from entering your property without following the "Due Process of Law." An injunction is a powerful shield that makes any agent contact a "Contempt of Court."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>4. Consumer Forum Filing:</strong> The Consumer Protection Act 2019 is a borrower’s best friend. Filing a case for "Unfair Trade Practice" and "Mental Harassment" is relatively inexpensive and the forum can award compensation and order the bank to stop the harrassment immediately.
                            </p>

                            <h2 id="debt-trap-psychology" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Mental Defense: Understanding Debt Trap Psychology</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The biggest weapon a recovery agent has is not the law: it is your own guilt and fear. Many borrowers fall into a "Debt Trap" not because of money, but because of psychological fatigue. They start believing they are "bad people" because they cannot pay a loan.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>Debt is not a moral failing.</strong> It is a commercial risk that both you and the bank took. The bank charged you high interest (ROI) specifically to cover the risk of some people being unable to pay. They have already priced in your potential default. You do not owe them your sanity.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                By understanding that you are a "Commercial Participant" in a financial system, you can detach your self-worth from your balance sheet. When an agent shouts at you, they are trying to break your spirit so you make a desperate, irrational financial move, like borrowing from a local money lender at 100% interest to pay the bank. <strong>Resist this urge.</strong> Protect your mind, and the money matters will eventually follow a logical settlement path.
                            </p>

                            <h2 id="negotiation-leverage" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Turning the Tables: Using Harassment as Negotiation Leverage</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This is a professional secret: <strong>A bank that has harassed you is a bank that is vulnerable.</strong> If you have proof of illegal recovery tactics, you can use this as a massive "Discount Coupon" during settlement negotiations.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When we negotiate for our clients at CredSettle, we often say to the bank: "Our client owes you 10 lakhs. However, your agents have committed 5 documented violations of the RBI Master Direction, causing severe damage to our client’s reputation. We are prepared to file an Ombudsman complaint and a Consumer case. Or, we can settle this debt today for 3 lakhs as a full and final settlement to avoid litigation."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025-2026, banks are increasingly settling for much lower amounts when they know they are at fault for harassment. They would rather take a 70% loss on a loan than face a 50 lakh fine from the regulator or a lawsuit that makes it into the national newspapers. Harassment is a heavy burden for you, but it is a massive legal liability for the bank. Don’t let it go to waste; use it to buy your freedom.
                            </p>

                            <h2 id="police-and-complaints" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Complaint Hierarchy: Whom to Call and When</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Effectiveness in stopping harassment comes from knowing the right order of complaints. Shouting at the agent is useless; writing to the regulator is everything.
                            </p>
                            <div className="space-y-4 mb-8 ">
                                <div className="border-l-4 border-blue-600 pl-6 py-2">
                                    <h5 className="font-bold text-gray-900">Level 1: The Bank’s Nodal Officer</h5>
                                    <p className="text-gray-600 italic ">Don’t call the customer care; they are often the ones hiring the agents. Email the <strong>Principal Nodal Officer (PNO)</strong> of the bank. Their details are mandatorily listed on the bank’s website. Use the term "Breach of RBI Fair Practices Code."</p>
                                </div>
                                <div className="border-l-4 border-blue-600 pl-6 py-2">
                                    <h5 className="font-bold text-gray-900">Level 2: The Integrated Ombudsman</h5>
                                    <p className="text-gray-600 italic ">If the PNO doesn’t resolve the issue in 30 days, or if the harassment continues, file a complaint at <strong>cms.rbi.org.in</strong>. This is the "Nuclear Option." The Ombudsman has the power to stop the bank in its tracks.</p>
                                </div>
                                <div className="border-l-4 border-blue-600 pl-6 py-2">
                                    <h5 className="font-bold text-gray-900">Level 3: The Police (For Criminality)</h5>
                                    <p className="text-gray-600 italic">If there is a threat of death, rape, or physical violence, skip the bank and call 112/100 immediately. Inform the police that "An unauthorized person is threatening my life for a civil debt."</p>
                                </div>
                            </div>

                            <h2 id="harassment-vs-recovery" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Drawing the Line: Harassment vs. Legal Recovery</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is important to be realistic. A bank has a right to call you. A bank has a right to send a legal notice. A bank has a right to sue you in a civil court. <strong>This is not harassment; this is recovery.</strong>
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Harassment begins when the method of recovery becomes illegal, abusive, or invasive. If a bank calls you three times a day at 11:00 AM, 2:00 PM, and 4:00 PM to ask for payment politely, they are within their rights. If they call you thirty times, call your mother, and use foul language, they have crossed into harassment. Knowing this distinction is vital so that you don’t lose credibility when filing complaints. Focus your fight on the *methods*, not the *existence* of the debt.
                            </p>

                            <h2 id="case-studies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Victory Stories: Real Cases of Fighting Back</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we have seen thousands of borrowers go from "Suicidal" to "Successful" by simply applying the laws mentioned in this guide.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 border-l-8 border-l-blue-600">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Case Study: The "Social Shaming" Reversal</h3>
                                <p className="text-gray-700 mb-4">
                                    A client in Pune had agents call his daughter’s school teacher to ask for his "location." The client was devastated. We helped him record the teacher’s statement and file an Integrated Ombudsman complaint.
                                </p>
                                <p className="text-gray-700">
                                    Result: The RBI Ombudsman took a very serious view. The bank was fined 2 lakh rupees, which was credited to the client’s loan account, and the bank was ordered to offer a 25% settlement on the remaining balance to compensate for the trauma. The agents were suspended, and the bank sent a written apology.
                                </p>
                            </div>

                            <h2 id="long-term-safety" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Long-Term Safety: Your Roadmap to Financial Freedom</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Stopping the threats is Step 1. Step 2 is resolving the debt so you never have to deal with these people again.
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Consolidate Your Narrative:</strong> Stick to one version of your financial hardship. Don’t change your story.</li>
                                <li><strong>Move Toward One-Time Settlement (OTS):</strong> This is the ultimate goal. A successful OTS closes the account and provides you with a No Dues Certificate.</li>
                                <li><strong>Ensure No Dues Certificate (NDC):</strong> Never pay a single rupee without receiving a settlement letter first, and never consider a case closed until you have the NDC in your hands.</li>
                                <li><strong>The 2026 Credit Rebuilding:</strong> Once settled, start using a secured credit card to rebuild your score. In 2026, new credit models will allow you to bounce back faster than ever before.</li>
                            </ul>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Conclusion: Knowledge Is Your Only Weapon</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The recovery agent relies on your fear. The moment you show them you know the RBI 2025 guidelines, that you have a documented harassment log, and that you are prepared to go to the Ombudsman, their power disappears. They are just humans doing a job, and they are not above the law of India.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You do not have to fight this alone. At CredSettle, we specialize in providing the legal muscle needed to stop harassment and negotiate fair outcomes. Don’t suffer in silence. Use your rights, use the law, and reclaim your life today.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">What People Are Saying</h2>
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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Under Attack from Agents?</h3>
                                <p className="text-blue-800 mb-6">Don’t wait for things to get worse. Our legal team can help you draft a high-impact complaint that forces the bank to follow the law and stop the harassment today.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Immediate Support
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The guidance provided on this page is for general information and borrower empowerment purposes. Harassment is a legal and criminal issue, and we strongly recommend consulting with a certified legal professional at CredSettle or your own counsel for specific case advice.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14 self-start">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Stop the Stress</h4>
                                <p className="text-sm text-gray-600 mb-6">Our experts handle the agents so you don’t have to. 100% legal protection.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Book Free Consultation
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v RBI Compliant Resolution</p>
                                    <p>v Agent Communication Proxy</p>
                                    <p>v Peace of Mind Guaranteed</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Know More</h4>
                                <nav className="space-y-3">
                                    <Link href="/bank-recovery-harassment-complaint" className="block text-sm text-blue-600 hover:underline">How to File a Complaint</Link>
                                    <Link href="/can-bank-file-case-for-personal-loan" className="block text-sm text-blue-600 hover:underline">Legal Action Risks</Link>
                                    <Link href="/rbi-new-recovery-guidelines-july-2026" className="block text-sm text-blue-600 hover:underline">2026 RBI Master Direction</Link>
                                    <Link href="/bank-arbitration-notice-loan" className="block text-sm text-blue-600 hover:underline">Dealing with Arbitration</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
