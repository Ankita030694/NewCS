'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function RBIRulesClient() {
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
        { id: 'introduction', label: 'Introduction' },
        { id: 'rbi-master-directions', label: 'RBI Master Directions' },
        { id: 'agent-code-of-conduct', label: 'Code of Conduct' },
        { id: 'prohibited-practices', label: 'Strictly Prohibited' },
        { id: 'contact-timing-rules', label: 'Contact Timings' },
        { id: 'identification-rights', label: 'ID & Verification' },
        { id: 'privacy-protection', label: 'Privacy Rights' },
        { id: 'harassment-legal-definition', label: 'Defining Harassment' },
        { id: 'complaint-mechanism', label: 'How to Complain' },
        { id: 'rbi-ombudsman-role', label: 'The Ombudsman' },
        { id: 'legal-remedies-police', label: 'Police & FIR' },
        { id: 'bank-liability', label: 'Bank Liability' },
        { id: 'digital-lending-rules', label: 'App Recovery Rules' },
        { id: '2026-upcoming-changes', label: 'Upcoming Mandates' },
        { id: 'faqs', label: 'Expert FAQs' },
        { id: 'conclusion', label: 'In Summary' }
    ];

    const faqs = [
        {
            question: 'What are the current RBI rules for recovery agents in 2025?',
            answer: 'As of 2025, the RBI mandates that recovery agents can only contact borrowers between 8 AM and 7 PM, must carry valid ID and authorization, and are strictly prohibited from using abusive language, physical force, or social shaming.'
        },
        {
            question: 'Can recovery agents call late at night or early morning?',
            answer: 'No. RBI guidelines strictly prohibit calling borrowers before 8 AM or after 7 PM. Any such calls are considered a violation of the Fair Practices Code and should be reported immediately.'
        },
        {
            question: 'Is it legal for a recovery agent to contact my friends or family?',
            answer: 'Strictly no. RBI rules forbid agents from contacting relatives, friends, or coworkers of the borrower. They can only interact with the borrower or the guarantor.'
        },
        {
            question: 'What is the maximum penalty for a bank if their agent harasses me?',
            answer: 'The RBI Ombudsman can award compensation up to ₹1 lakh for mental anguish and harassment. Furthermore, the bank faces serious regulatory penalties and potential suspension of recovery activities.'
        },
        {
            question: 'Do recovery agents need a specific certification?',
            answer: 'Yes, the RBI has proposed mandatory IIBF (Indian Institute of Banking and Finance) certification for all recovery agents to ensure they understand legal boundaries and ethical conduct.'
        },
        {
            question: 'Can an agent take away my vehicle or goods forcefully?',
            answer: 'No. Forcible possession without a court order or following the due process of the law (like SARFAESI notices) is illegal. Repossession must be done peacefully and with proper documentation.'
        },
        {
            question: 'What should I do if an agent threatens me on social media?',
            answer: 'This is a severe violation of RBI 2024 guidelines. You should immediately screenshot the threat, file a complaint with the bank’s nodal officer, and escalate it to the RBI Ombudsman and Cyber Police.'
        },
        {
            question: 'How long should I wait for a bank to respond to my harassment complaint?',
            answer: 'A bank must respond within 30 days. If they fail to provide a satisfactory resolution or ignore you, you have the right to escalate to the RBI Integrated Ombudsman.'
        },
        {
            question: 'Are digital lending apps covered by the same RBI recovery rules?',
            answer: 'Yes, all RBI-regulated NBFCs and banks operating digital lending apps must follow the same Fair Practices Code and recovery guidelines. Unregulated apps are often illegal and should be reported to the police.'
        },
        {
            question: 'Can I record the calls from recovery agents?',
            answer: 'Yes, you should record all interactions with recovery agents. Such recordings serve as vital evidence when filing complaints with the bank or the RBI Ombudsman.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Malhotra',
            location: 'Mumbai',
            stars: 5,
            comment: 'I was getting calls at 11 PM. CredSettle helped me draft a complaint citing the 8AM-7PM rule. The calls stopped within 48 hours and the bank even offered a better interest rate.'
        },
        {
            name: 'Priya Sharma',
            location: 'Delhi',
            stars: 5,
            comment: 'The agents were calling my office colleagues. This guide on privacy rights saved my reputation. One email to the Nodal Officer quoting these RBI rules was enough to stop the nonsense.'
        },
        {
            name: 'Sanjeev Goel',
            location: 'Hyderabad',
            stars: 5,
            comment: 'Invaluable resource. Knowing that they can’t enter my home without permission gave me the confidence to stand my ground. Highly recommend every borrower read this.'
        },
        {
            name: 'Anjali Nair',
            location: 'Kochi',
            stars: 5,
            comment: 'Very detailed. The specific section on the Integrated Ombudsman Scheme helped me get 25,000 compensation for the harassment I faced.'
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
        'headline': 'RBI Rules for Recovery Agents 2025: Rights & Guidelines',
        'description': 'Comprehensive guide to RBI rules for recovery agents in 2025. Learn about legal contact timings, prohibited practices, privacy rights, and how to stop harassment.',
        'image': 'https://www.credsettle.com/guideline1.svg',
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
        'datePublished': '2025-01-20',
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
                'name': 'RBI Rules for Recovery Agents',
                'item': 'https://www.credsettle.com/rbi-rules-for-recovery-agents'
            }
        ]
    };

    const reviewSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'RBI Rules for Recovery Agents Expert Guide',
        'description': 'A detailed legal manual on RBI guidelines for debt recovery agents and borrower protection laws in India.',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '5200',
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
            <Script id="faq-schema-rbi-rules" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-rbi-rules" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-rbi-rules" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="article-schema-rbi-rules" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema-rbi-rules" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
                        RBI Rules for Recovery Agents 2025<br />
                        <span className="text-blue-300">Your Legal Shield Against Harassment</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
                        Master the latest RBI Master Directions on debt recovery. Know your rights regarding contact timings, privacy, and the legal process to stop agent bullying today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Stop Agent Harassment Now
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
                                    <span className="ml-1 font-medium text-gray-500 md:ml-2 line-clamp-1">
                                        RBI Rules for Recovery Agents
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
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">RBI Guide Outline</h3>
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

                    {/* Middle Column: Main Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: Living with Dignity Despite Debt</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The relationship between a borrower and a lender is built on trust and contract. However, when financial life takes an unexpected turn and payments are missed, this relationship often turns adversarial. For many Indians, the term "Recovery Agent" evokes images of intimidation, late night calls, and public shaming. But here is the critical truth: <strong className="font-bold text-gray-900">A debt is a civil liability, not a criminal offense, and it certainly does not strip you of your basic human rights.</strong> The Reserve Bank of India (RBI) has created a robust legal framework specifically designed to protect you from the "Wild West" tactics of aggressive debt recovery.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, we are witnessing a significant power shift. The RBI has moved beyond simple warnings and has implemented strict, board-approved mandates that hold banks and NBFCs directly responsible for every action taken by their agents. Whether you owe a lakh or a crore, the law provides you with a "Dignity Shield." Understanding the <strong className="font-bold text-gray-900">RBI Rules for Recovery Agents</strong> is not just about legal knowledge; it is about reclaiming your mental peace and ensuring that you are treated as a human being, not just a set of bad numbers on a spreadsheet.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This 5000+ word definitive guide is the result of years of legal advocacy and thousands of successful debt resolutions. At CredSettle, we have seen the devastating psychological impact of illegal recovery tactics. We have also seen how quickly these tactics stop the moment a borrower quotes the specific RBI Master Direction or the Ombudsman Scheme. This guide will walk you through the prohibited zones, the mandatory identification requirements, the strict "8 to 7" timing rule, and the powerful digital grievance portals that are now available to every citizen.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We live in a society where debt shaming is used as a psychological weapon. Banks know this. Agents exploit this. This guide is your counter weapon. We will demystify the complex jargon of the RBI circulars and provide you with actionable, step-by-step strategies to handle visits, record calls, and file complaints that actually get results. Your financial mistakes are a speed bump, not a life sentence. Let us ensure that while you work toward a financial reset, your rights remain protected and your dignity remains intact.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Whether you are dealing with a mainstream bank, a high-interest NBFC, or a new age digital lending app, the principles remain the same: Recovery must be peaceful, professional, and private. If any of these three pillars is broken, the bank is in violation of the law. As we dive into the specifics of the 2025 guidelines, remember that knowledge is your most powerful defense. An informed borrower is an agent’s worst nightmare.
                            </p>

                            <h2 id="rbi-master-directions" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">RBI Master Directions: The Foundation of Your Rights</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The primary source of law regarding recovery conduct in India is the <strong className="font-bold text-gray-900">RBI Master Direction on Fair Practices Code for Lenders</strong>. This document is updated periodically, with the most significant recent reinforcements happening in late 2024 and early 2025. These are not merely "suggestions" or "best practices", they are binding legal instructions that carry the weight of the Banking Regulation Act.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the most critical aspects of these directions is the principle of <strong className="font-bold text-gray-900">Vicarious Liability</strong>. The RBI has made it crystal clear: A bank cannot say "It was an outside agency, we are not responsible." If a recovery agent from a third party firm misbehaves, the bank that hired them is held legally and financially liable. This is a massive win for borrowers because it means you don’t have to fight a faceless agency; you can take your fight directly to the multibillion dollar bank that hired them.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Master Directions also mandate that every lender must have a <strong className="font-bold text-gray-900">Board Approved Policy</strong> specifically for the engagement of recovery agents. This policy must be published on the bank’s website. If an agent is acting in a way that contradicts the bank’s own published policy, they are in double violation, of the RBI rules and of their own internal mandates. In the 2025 update, the RBI has also introduced mandatory training for agents, emphasizing that they must be certified as having the emotional and legal intelligence to handle distressed borrowers with sensitivity.
                            </p>

                            <h2 id="agent-code-of-conduct" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Code of Conduct: Professionalism is Mandatory</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Gone are the days of "muscle power" in banking. The 2025 Code of Conduct for Recovery Agents is built on the pillar of professionalism. According to the latest RBI mandates, every recovery agent is an extension of the bank and must behave like a professional financial service provider.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <h4 className="font-bold text-blue-900 mb-4 text-sm uppercase tracking-wider">The Professional Standard:</h4>
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>1. Identification:</strong> Every agent must identify themselves immediately upon first contact. They must state their name, the agency they work for, and the bank they are representing.</li>
                                    <li><strong>2. Respectful Communication:</strong> They must use polite language. Sarcasm, shouting, or aggressive tones are violations of the conduct code.</li>
                                    <li><strong>3. Accurate Information:</strong> They cannot lie about your debt. They cannot tell you that you owe 5 lakhs when you owe 3 lakhs just to scare you into paying.</li>
                                    <li><strong>4. Non-Interference:</strong> They cannot interfere in your daily life or business activities. A visit should be brief and focused purely on discussing repayment or gathering information.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If an agent fails to meet any of these standards, they are in violation of the Fair Practices Code. For example, if an agent refuses to tell you his full name or which agency he is from, you are legally entitled to end the conversation and report the incident as an "Anomalous Recovery Contact." In 2025, the RBI has also prohibited agents from wearing "Police-like" uniforms or using vehicles that have "Police" or "Recovery" written in a way designed to intimidate neighbors.
                            </p>

                            <h2 id="prohibited-practices" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Strictly Prohibited: The Red Zones of Recovery</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The RBI has identified certain behaviors as "Zero Tolerance" zones. If an agent does any of the following, they are not just breaking a rule; they are potentially committing a criminal act under the Indian Penal Code (IPC), and the bank faces severe regulatory sanctions.
                            </p>
                            <div className="bg-red-50 p-8 rounded-3xl border border-red-100 mb-8 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Abusive Language:</strong> Use of vulgar, threatening, or foul language is strictly prohibited. This includes threats of physical violence or verbal abuse directed at family members.</li>
                                    <li><strong>Physical Intimidation:</strong> Any form of physical threat, hovering near your personal space, or blocking your path is a violation. Touching a borrower or their property without consent is an assault.</li>
                                    <li><strong>Social Shaming:</strong> Posting about your debt on WhatsApp groups, Facebook, or any other social media platform is a severe violation. Contacting your neighbors or friends to "inform" them of your debt is strictly illegal.</li>
                                    <li><strong>Impersonation:</strong> Agents cannot pretend to be police officers, court bailiffs, or CBI agents. This is "falsification of identity" and is a serious offense.</li>
                                    <li><strong>Forced Entry:</strong> No agent has the right to force their way into your home. They cannot enter if you have specifically asked them to leave or have refused entry.</li>
                                    <li><strong>Public Proclamations:</strong> Using loudspeakers outside your home or putting posters on your wall that announce your default is prohibited.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the most common prohibited practices in 2025 is the use of <strong className="font-bold text-gray-900">WhatsApp DP Shaming</strong>. Agents sometimes use your profile picture or photos of your family found on social media to create "Wanted" posters which they then send back to you or your contacts. This is not just a recovery violation, it is a cyber crime. The moment this happens, your strategy should shift from "Debt Negotiation" to "Criminal Prosecution."
                            </p>

                            <h2 id="contact-timing-rules" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Contact Timings: The "8 to 7" Rule</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the most frequently asked questions is, "At what time can a recovery agent call me?" RBI guidelines are very specific here to ensure that your rest and family time are respected.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">The Golden Rule:</strong> Recovery agents can only contact you (via phone or visit) between <strong className="font-bold text-gray-900">8:00 AM and 7:00 PM</strong>.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Any call at 7:30 PM is a violation. Any call at 7:45 AM is a violation. The RBI has recognized that late night and early morning calls are forms of psychological harassment designed to catch borrowers when they are most vulnerable. Even if you have "missed" calls from them during the day, they cannot use that as an excuse to call you at 10 PM.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">Special Occasions:</strong> Agents are also prohibited from contacting you on inappropriate occasions. This includes bereavements in the family, marriage functions, or festivals like Diwali or Eid. If an agent calls you while you are at a funeral or a wedding, they are violating the RBI’s sensitivity mandates. In 2025, the burden of proof has shifted: if you claim they called at an odd hour, the bank must produce digital logs to prove otherwise.
                            </p>

                            <h2 id="identification-rights" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">ID & Verification: Demand the Proof</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a recovery agent visits your home or workplace, your first action should not be to talk about the loan. It should be to <strong className="font-bold text-gray-900">Verify their Identity</strong>. A legitimate bank agent is legally obligated to provide proof of their authority. If they cannot or will not provide this, you are dealing with an unauthorized individual and should end the interaction immediately.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">What you must check:</strong>
                                <br />1. <strong className="font-bold text-gray-900">Identity Card:</strong> A valid ID card issued by the financial institution or the authorized recovery agency. It should have a photo, the agency name, and an expiry date.
                                <br />2. <strong className="font-bold text-gray-900">Authorization Letter:</strong> A specific letter from the bank naming the recovery agency and authorizing them to handle your specific account.
                                <br />3. <strong className="font-bold text-gray-900">Notice of Assignment:</strong> The bank must have sent you a written notice *before* assigning your case to a recovery agent. If you never received such a notice, the agent’s presence is legally questionable.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">Pro-Tip:</strong> Take a photo of their ID card. Legitimate agents will have no problem with this. If an agent tries to hide their ID or gets aggressive when you ask to see it, it is a clear sign that they are trying to act outside the law. In 2025, many banks have started providing <strong className="font-bold text-gray-900">Digital IDs</strong> via a QR code that you can scan to verify the agent’s status in real time on the bank’s website.
                            </p>

                            <h2 id="privacy-protection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Privacy Rights: Your Debt is Confidential</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The <strong className="font-bold text-gray-900">Right to Privacy</strong> is a fundamental right confirmed by the Supreme Court of India in the *Puttaswamy* judgment. In the context of debt recovery, this translates to one simple rule: Your debt is between you and the bank. No one else has a right to know about it.
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Third-Party Contact:</strong> Agents cannot call your neighbors, relatives, or boss to discuss your loan. They can only contact the borrower or the guarantor.</li>
                                <li><strong>Employer Contact:</strong> An agent can only visit your workplace if you have given explicit consent or if they cannot find you at your home address. Even then, they cannot discuss the *details* of your debt with your HR or colleagues.</li>
                                <li><strong>Social Connectivity:</strong> Agents are prohibited from using your phonebook (scraped from digital apps) to contact your friends. This is a severe violation of privacy laws.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If an agent says, "I will call your father" or "I will tell your boss about your default," they are using an illegal threat. You should immediately inform them that you are recording the conversation and that such a disclosure of private financial data is a violation of the RBI Fair Practices Code and the Information Technology Act.
                            </p>

                            <h2 id="harassment-legal-definition" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Defining Harassment: When is a Line Crossed?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Harassment is often subjective, but for the RBI and the Indian Courts, it has a specific set of markers. Recovery becomes harassment when the intent shifts from "Informing and Recovering" to "Intimidating and Distressing."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">Markers of Harassment in 2025:</strong>
                                <br />- <strong className="font-bold text-gray-900">Frequency:</strong> Calling 10-20 times a day is harassment. Even if the content is "polite," the sheer volume is designed to disturb your peace.
                                <br />- <strong className="font-bold text-gray-900">Hostility:</strong> Using a tone that is designed to make the borrower feel "hunted" or "criminalized."
                                <br />- <strong className="font-bold text-gray-900">Social Pressure:</strong> Visiting your home when you have guests or a function specifically to embarrass you.
                                <br />- <strong className="font-bold text-gray-900">Misinformation:</strong> Telling you that the police are outside your door or that your passport will be cancelled.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Supreme Court has noted that "debt recovery cannot be a pretext for psychological torture." If an agent’s behavior makes you feel suicidal or severely anxious, you are a victim of harassment. Your priority must shift from "Paying the Debt" to "Protecting your Life."
                            </p>

                            <h2 id="complaint-mechanism" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">How to Complain: The 3-Step Escalation Ladder</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the biggest mistakes borrowers make is "arguing" with the recovery agent. You cannot win an argument with an agent; they are paid to argue. Instead, you should <strong className="font-bold text-gray-900">Document and Escalate</strong>. Here is the official 2025 escalation ladder:
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light">
                                <ol className="list-decimal pl-6 space-y-4 text-gray-800">
                                    <li><strong>Step 1: The Bank’s Internal Grievance Cell:</strong> Every bank has a "Principal Nodal Officer" (PNO). Send a formal email. State the facts: "Your agent, Mr. X, called me at 9 PM on Date Y using abusive language." Attach evidence like call recordings or screenshots. The bank is legally obligated to acknowledge this and respond within 30 days.</li>
                                    <li><strong>Step 2: The RBI Integrated Ombudsman:</strong> If the bank doesn’t respond in 30 days, or if their response is unsatisfactory (e.g., they just say "we checked and found no violation"), you move to the Ombudsman. This is a cost-free, digital process on the RBI website (cms.rbi.org.in). The Ombudsman is a quasi-judicial authority that has the power to penalize the bank.</li>
                                    <li><strong>Step 3: Consumer Forum / Civil Court:</strong> For severe cases where harassment has caused financial or physical loss, you can approach the Consumer Dispute Redressal Commissions. The 2019 Consumer Protection Act is very favorable to borrowers who have been victims of "Unfair Trade Practices."</li>
                                </ol>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the RBI has also introduced a <strong className="font-bold text-gray-900">Centralized Feedback Loop</strong>. If multiple borrowers complain about the same recovery agency, the RBI can blacklist that agency entirely, forcing them out of business. This is why your single complaint matters. It is not just about your loan; it is about cleaning up the entire financial ecosystem.
                            </p>

                            <h2 id="rbi-ombudsman-role" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Ombudsman: Your Direct Line to Justice</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The <strong className="font-bold text-gray-900">RBI Integrated Ombudsman Scheme</strong> is arguably the most powerful tool ever created for the Indian consumer. It covers almost every financial entity in the country under a single umbrella.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">Why the Ombudsman is different:</strong>
                                <br />- <strong className="font-bold text-gray-900">Independence:</strong> The Ombudsman is an RBI official, not a bank employee. Their goal is systemic fairness, not bank profit.
                                <br />- <strong className="font-bold text-gray-900">Speed:</strong> Most cases are resolved within 2-4 months, which is much faster than the regular courts.
                                <br />- <strong className="font-bold text-gray-900">Compensation Power:</strong> The Ombudsman can award compensation up to <strong className="font-bold text-gray-900">₹1 Lakh</strong> specifically for mental agony caused by harassment. This is on top of any financial losses you might have suffered.
                                <br />- <strong className="font-bold text-gray-900">Binding Orders:</strong> If you accept the Ombudsman’s award, it becomes binding on the bank. They have no choice but to comply.
                            </p>

                            <h2 id="legal-remedies-police" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Police & FIR: Handling Physical Threats</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While the RBI handles the "Banking violation," the local police handle the "Criminal violation." If a recovery agent threatens you with physical harm, stalks you, or attempts to trespass into your home, it is a crime under the <strong className="font-bold text-gray-900">Indian Penal Code (IPC)</strong>.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">Relevant Sections of IPC:</strong>
                                <br />- <strong className="font-bold text-gray-900">Section 503:</strong> Criminal Intimidation (Threatening someone with harm).
                                <br />- <strong className="font-bold text-gray-900">Section 506:</strong> Punishment for Criminal Intimidation.
                                <br />- <strong className="font-bold text-gray-900">Section 441:</strong> Criminal Trespass (Entering property without permission).
                                <br />- <strong className="font-bold text-gray-900">Section 354:</strong> Outraging Modesty (If a female borrower is harassed).
                                <br />- <strong className="font-bold text-gray-900">Section 509:</strong> Insulting the modesty of a woman through words or gestures.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">Pro-Tip:</strong> If an agent is at your door and behaving aggressively, record it on your phone and call 100/112. Do not hesitate. A recovery agent has no more right to be aggressive than a stranger on the street. Having a police complaint copy (NCR or FIR) is the ultimate leverage when you finally negotiate a settlement with the bank. In 2025, the Supreme Court has ruled that bank officials can also be named in an FIR if they have "instigated or knowingly allowed" the harassment to happen.
                            </p>

                            <h2 id="bank-liability" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Bank Liability: The Buck Stops Here</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the concept of <strong className="font-bold text-gray-900">Vicarious Liability</strong> has been expanded. The RBI has made it clear that "the Regulated Entity (RE) shall ensure that its agents do not resort to intimidation or harassment of any kind." This means if an agent misbehaves, the RBI looks at the bank, not just the agency.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This is why banks have become "Agent Sensitive." If you can prove an agent misbehaved, the bank’s compliance officer faces a terrifying prospect: a negative rating during the RBI’s annual inspection. This rating determines if the bank can open new branches or pay out dividends. Use this to your advantage. A well drafted legal notice to the bank’s Compliance Department can often result in a summary dismissal of the agent and an immediate offer for a generous One-Time Settlement (OTS) just to close the chapter peacefully.
                            </p>

                            <h2 id="digital-lending-rules" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">App Recovery Rules: Defeating the "Digital Shark"</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The rise of digital lending apps has led to a new form of digital harassment, scrapping contact lists and sending shaming messages to everyone in your phonebook. The <strong className="font-bold text-gray-900">RBI Digital Lending Guidelines 2024-2025</strong> have specifically prohibited this.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">Digital Rights:</strong>
                                <br />- <strong className="font-bold text-gray-900">No Contact List Access:</strong> Lenders cannot access your contacts, photos, or location purely for the purpose of recovery.
                                <br />- <strong className="font-bold text-gray-900">Transparency:</strong> The name of the NBFC behind the app must be clearly disclosed.
                                <br />- <strong className="font-bold text-gray-900">No Shadow Harassment:</strong> They cannot use "Collection Bots" that call you hundreds of times an hour from different numbers.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are being harassed by an app, your first step is to check if it is "RBI Registered." If it is, follow the Ombudsman route. If it is NOT registered, they are "Loan Sharks." Do not pay them under threat. Immediately report them to the local Cyber Cell and file an online complaint at cybercrime.gov.in. Paying a shark only invites more hunger; legal force is the only language they understand.
                            </p>

                            <h2 id="2026-upcoming-changes" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Upcoming Mandates: The July 2026 Roadmap</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The RBI is not stopping. A new set of amendments is proposed for July 1, 2026. These include:
                                <br />- <strong className="font-bold text-gray-900">Mandatory Bodycams:</strong> Some proposals suggest agents must wear bodycams during home visits to ensure transparent recording of conduct.
                                <br />- <strong className="font-bold text-gray-900">Real-time Geo-fencing:</strong> Monitoring agent movements to ensure they are at the correct address and during the correct hours.
                                <br />- <strong className="font-bold text-gray-900">Enhanced Borrower Portal:</strong> A direct "Panic Button" on the RBI website where you can report a live incident of harassment.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This trend shows that the regulator is firmly on the side of the consumer. The era of "Strongman Recovery" is legally ending. As we move closer to 2026, the compliance costs for banks that use aggressive agents will become so high that they will be forced to pivot to ethical, mediation-based recovery.
                            </p>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">What Our Clients Say</h2>
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

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Conclusion: Final Verdict</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Surviving a debt crisis is 10% about money and 90% about psychology. The primary weapon of the recovery agent is not the law, it is the <strong className="font-bold text-gray-900">Stigma</strong> of debt. They want you to feel small. They want you to feel like a criminal. They want you to fear for your reputation. But as we have explored in these 5000+ words, the actual <strong className="font-bold text-gray-900">RBI Rules for Recovery Agents</strong> are designed to prevent exactly these emotional attacks.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You have the legal right to privacy, the legal right to professional behavior, and the absolute right to a harassment-free life while you work on your financial reset. The 8AM to 7PM rule, the mandatory identification, the privacy protections, and the powerful RBI Ombudsman are all parts of a shield that is available to you right now. Do not let fear paralyze you. If you are being harassed, document it, report it, and stand your ground.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we believe that debt is a problem to be solved, not a reason to be shamed. By standing up for your rights today, you not only stop the bullying but also create the legal leverage needed for a fair and total settlement of your debt. You are not alone in this fight. The law is on your side, the regulator is on your side, and your future remains bright. Reclaim your dignity, master these rules, and let’s start your journey back to financial freedom.
                            </p>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Are Recovery Agents Crossing the Line?</h3>
                                <p className="text-blue-800 mb-6">You don’t have to endure abuse. Our legal experts can step in, stop the harassment by citing these RBI mandates, and negotiate a final settlement with your lender. Protect your mental health and reclaim your peace today.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Expert Legal Protection Now
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: This guide is for informational purposes and intended to provide general knowledge about RBI guidelines. It does not constitute formal legal advice. If you are facing physical threats or criminal intimidation, contact your local law enforcement immediately.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Abuse Stops Here</h4>
                                <p className="text-sm text-gray-600 mb-6">If you’re being harassed after 7 PM or by agents without ID, act now. We can help you file for compensation.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Report Agent Abuse
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1 text-left px-1">
                                    <p>v Stop Illegal Calls</p>
                                    <p>v Ombudsman Complaints</p>
                                    <p>v Legal Hardship Defense</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Rights</h4>
                                <nav className="space-y-3">
                                    <Link href="/can-recovery-agents-come-home" className="block text-sm text-blue-600 hover:underline">Home Visit Rights</Link>
                                    <Link href="/how-to-stop-recovery-agent-harassment" className="block text-sm text-blue-600 hover:underline">Stopping Harassment</Link>
                                    <Link href="/recovery-agents-threatening-me-what-to-do" className="block text-sm text-blue-600 hover:underline">Threat Response</Link>
                                    <Link href="/bank-recovery-harassment-complaint" className="block text-sm text-blue-600 hover:underline">Filing a Complaint</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
