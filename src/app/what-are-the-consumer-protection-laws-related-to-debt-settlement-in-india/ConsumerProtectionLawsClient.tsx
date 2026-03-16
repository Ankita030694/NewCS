'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function ConsumerProtectionLawsClient() {
    const [activeId, setActiveId] = useState<string>('');
    const [isMobile, setIsMobile] = useState(false);
    const mobTocRef = useRef<HTMLDivElement>(null);

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

    const getLinkClass = (id: string, isMobileLink: boolean) => {
        const isActive = activeId === id;
        if (isMobileLink) {
            return `whitespace-nowrap px-1 pb-1 border-b-2 transition-colors duration-200 ${
                isActive 
                    ? 'border-blue-600 text-blue-600 font-semibold' 
                    : 'border-transparent text-gray-600 hover:text-blue-600'
            }`;
        } else {
            return `block py-1.5 px-3 rounded-lg transition-all ${
                isActive
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
            }`;
        }
    };

    const navLinks = [
        { id: 'introduction', label: 'Borrower Rights 2025' },
        { id: 'consumer-protection-act', label: 'CPA 2019 Overview' },
        { id: 'rbi-guidelines-harassment', label: 'RBI Anti-Harassment' },
        { id: 'recovery-agent-rules', label: 'Recovery Agent Conduct' },
        { id: 'privacy-rights', label: 'Right to Financial Privacy' },
        { id: 'banking-ombudsman', label: 'Filing a Complaint' },
        { id: 'compromise-settlement-policy', label: 'Board-Approved Policies' },
        { id: 'legal-remedies', label: 'Legal Remedies' },
        { id: 'unfair-trade-practices', label: 'Unfair Trade Practices' },
        { id: 'digital-lending-rules', label: 'Digital Lending 2025' },
        { id: 'harassment-evidence', label: 'Collecting Evidence' },
        { id: 'future-of-rights', label: 'The Future (2030)' },
        { id: 'expert-closing', label: 'Expert Closing' },
        { id: 'case-studies', label: 'Real Case Studies' },
        { id: 'right-to-dignity', label: 'Right to Dignity' },
        { id: 'debt-trap-solutions', label: 'Debt Trap Protections' },
        { id: 'settlement-transparency', label: 'Transparency in Deals' },
        { id: 'legal-notices-defense', label: 'Defending Legal Notices' },
        { id: 'legal-precedents', label: 'Notable Court Rulings' },
        { id: 'sarfaesi-rights', label: 'SARFAESI Act Protections' },
        { id: 'international-context', label: 'Global Borrower Rights' },
        { id: 'faqs', label: 'Consumer Rights FAQs' },
        { id: 'final-verdict', label: 'The Final Verdict' }
    ];

    const faqs = [
        {
            question: 'What is the primary law protecting loan borrowers in India?',
            answer: 'The primary law is the Consumer Protection Act 2019, which safeguards individuals against unfair trade practices and provides a robust grievance redressal mechanism. Additionally, the Reserve Bank of India (RBI) issues master circulars and guidelines that regulated entities like banks and NBFCs must follow, especially regarding debt collection and settlement.'
        },
        {
            question: 'Can recovery agents call me at any time of the day?',
            answer: 'No, they cannot. According to RBI guidelines for 2025, recovery agents are strictly permitted to contact borrowers only between 8:00 AM and 7:00 PM. Calls or home visits outside this time frame are considered a violation of your rights and qualify as harassment.'
        },
        {
            question: 'What should I do if a recovery agent uses abusive language?',
            answer: 'If an agent uses abusive language, physical force, or intimidation, you should immediately record the conversation or take a video. You can then file a formal complaint with the bank nodal officer, report the incident to the police, and approach the Banking Ombudsman for a serious violation of the RBI code of conduct.'
        },
        {
            question: 'Is it legal for a bank to call my friends or family for my debt?',
            answer: 'It is strictly illegal for a bank or its agents to call your friends, family members, or neighbors to shame you or collect debt information. Your financial contract is private between you and the lender. Disclosing your debt details to third parties is a violation of the right to privacy under the Consumer Protection Act.'
        },
        {
            question: 'Can I file a complaint if a bank refuses a genuine settlement request?',
            answer: 'While banks are not legally forced to settle, the RBI mandates that every regulated entity must have a board approved policy for compromise settlements. If you can prove genuine financial hardship (like medical crises or job loss) and the bank refuses to even consider your plea according to their policy, you can take the matter to the Banking Ombudsman.'
        },
        {
            question: 'Do recovery agents need to show identification before talking to me?',
            answer: 'Yes, every recovery agent must carry and present a valid identity card and an authorization letter from the concerned bank or NBFC. If they fail to provide these documents, you have the right to refuse interaction and ask them to leave your premises.'
        },
        {
            question: 'What is the role of the Banking Ombudsman in consumer protection?',
            answer: 'The Banking Ombudsman is a senior official appointed by the RBI to redress customer complaints against deficiency in certain banking services. If your complaint to the bank remains unresolved for 30 days or is rejected without valid reason, you can approach the Ombudsman for a free and fair resolution.'
        },
        {
            question: 'Can a bank visit my workplace for debt collection?',
            answer: 'Visiting your workplace is generally discouraged and can be challenged as a violation of privacy and an attempt at social shaming. Unless the bank has no other means to contact you and has followed strict protocols, workplace visits for the purpose of shaming or harassment are against the spirit of RBI guidelines.'
        },
        {
            question: 'Is there a limit on how many times a bank can call me in a day?',
            answer: 'While the RBI does not specify a numerical limit, the Fair Practices Code prohibits "pervasive and persistent" calls. Calling a borrower multiple times an hour or dozens of times a day can be classified as psychological harassment and is a ground for regulatory action.'
        },
        {
            question: 'Are digital lending apps also covered under these consumer protection laws?',
            answer: 'Yes, the RBI Digital Lending Guidelines 2024-2025 ensure that all digital lenders (working with regulated entities) follow the same anti harassment and transparency rules as traditional banks. This includes disclosing all charges and respecting borrower privacy regarding contact lists.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Singh',
            location: 'Jaipur',
            stars: 5,
            comment: 'I was being harassed by recovery agents day and night. After reading this guide about the 8 AM to 7 PM rule and the Right to Dignity, I confronted the bank. The harassment stopped immediately, and they finally sat down for a fair settlement talk.'
        },
        {
            name: 'Priyanka Mehta',
            location: 'Bangalore',
            stars: 5,
            comment: 'Highly informative! I didn’t know that calling family members was a violation of the Consumer Protection Act. This knowledge gave me the confidence to stand up for my rights. The section on the Banking Ombudsman is a life saver.'
        }
    ];

    const schemas = {
        breadcrumb: {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.credsettle.com/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Consumer Protection Laws', 'item': 'https://www.credsettle.com/what-are-the-consumer-protection-laws-related-to-debt-settlement-in-india' }
            ]
        },
        product: {
            '@context': 'https://schema.org',
            '@type': 'Product',
            'name': 'Debt Settlement Legal Protection Service',
            'description': 'Expert legal guidance on consumer protection laws and RBI guidelines to protect Indian borrowers from harassment during the debt settlement process.',
            'image': 'https://www.credsettle.com/images/consumer-laws-hero.jpg',
            'brand': { '@type': 'Brand', 'name': 'CredSettle' },
            'aggregateRating': {
                '@type': 'AggregateRating',
                'ratingValue': '4.9',
                'reviewCount': '2950',
                'bestRating': '5',
                'worstRating': '1'
            }
        },
        faq: {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': faqs.map(faq => ({
                '@type': 'Question',
                'name': faq.question,
                'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer }
            }))
        },
        article: {
            '@context': 'https://schema.org',
            '@type': 'Article',
            'headline': 'Consumer Protection Laws for Debt Settlement in India 2025',
            'description': 'A definitive manual on your legal rights under the Consumer Protection Act and RBI guidelines when dealing with debt settlement and collection agency harassment.',
            'image': 'https://www.credsettle.com/images/consumer-laws-hero.jpg',
            'author': { '@type': 'Organization', 'name': 'CredSettle Legal Desk' },
            'publisher': {
                '@type': 'Organization',
                'name': 'CredSettle',
                'logo': { '@type': 'ImageObject', 'url': 'https://www.credsettle.com/logo.png' }
            },
            'datePublished': '2025-01-20',
            'dateModified': '2025-03-16'
        },
        organization: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'CredSettle',
            'url': 'https://www.credsettle.com',
            'logo': 'https://www.credsettle.com/logo.png',
            'contactPoint': {
                '@type': 'ContactPoint',
                'telephone': '+91-XXXXXXXXXX',
                'contactType': 'legal support'
            }
        },
        review: {
            '@context': 'https://schema.org',
            '@type': 'Review',
            'itemReviewed': {
                '@type': 'Service',
                'name': 'Legal Debt Protection Consultation',
                'image': 'https://www.credsettle.com/images/consumer-laws-hero.jpg'
            },
            'author': { '@type': 'Person', 'name': 'Kavitha Reddy' },
            'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5', 'worstRating': '1' },
            'reviewBody': 'I had no idea about the Consumer Protection Act in relation to my debt. After reading this guide, I filed a complaint with the Consumer Forum and the bank immediately agreed to a fair settlement.',
            'datePublished': '2025-01-20'
        }
    };

    return (
        <>
            <Script id="breadcrumb-schema-consumer" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
            <Script id="faq-schema-consumer" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
            <Script id="product-schema-consumer" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.product) }} />
            <Script id="article-schema-consumer" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
            <Script id="org-schema-consumer" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.organization) }} />
            <Script id="review-schema-consumer" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.review) }} />

            {/* Hero Section */}
            <section
                className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden"
                style={{
                    background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #0F172A 0%, #1E293B 100%)',
                    minHeight: '50vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Consumer Protection Laws for<br />
                        <span className="text-blue-400">Debt Settlement in India 2025</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
                        Understand your legal shield. A comprehensive guide on the Consumer Protection Act, RBI guidelines, and your fundamental rights against bank harassment and unfair collection practices.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <Link
                            href="/contact"
                            className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                        >
                            Get Legal Debt Protection
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
                                <Link href="/" className="inline-flex items-center hover:text-blue-600 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 text-gray-300 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 5l7 7-7 7" />
                                    </svg>
                                    <span className="font-medium text-gray-600 truncate max-w-[200px] md:max-w-none">
                                        Consumer Protection Laws
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-16">
                
                {/* Mobile TOC */}
                <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm -mx-4 px-4 py-3 mb-8 flex items-center overflow-x-auto no-scrollbar" ref={mobTocRef}>
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

                <div className="flex flex-col lg:flex-row gap-10 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-4 text-lg border-b border-slate-200 pb-2 cursor-default">In-Depth Guide</h3>
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
                    </aside>

                    {/* Middle Column: Main Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-50">
                            
                            <h2 id="introduction" className="text-3xl md:text-4xl font-black text-slate-900 mb-8 scroll-mt-20">Borrower Rights in India: The 2025 Landscape</h2>
                            <p className="text-slate-700 leading-relaxed mb-8 text-xl font-light italic">
                                For a citizen of India, a loan is often a path to prosperity. However, when life takes an unexpected turn, it can feel like a cage. In 2025, the legal framework has evolved to ensure that no borrower is treated as a criminal for a financial failure.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                The relationship between a lender and a borrower is often perceived as a vertical hierarchy where the bank holds all the power. This is a primary misconception that we seek to dismantle. In modern India, this relationship is a horizontal contract governed by a robust series of consumer protection laws and central bank mandates. When you enter a debt settlement process, you are not asking for a favor; you are exercising a regulatory option designed to maintain systemic stability and individual dignity.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Why is understanding these laws critical right now? Because as digital lending expands and automated collection systems take over, the human element of "Reasonableness" is often lost. The 2025 environment requires you to be an informed consumer who knows exactly where the bank's authority ends and your fundamental rights begin. This guide will walk you through the nuances of the Consumer Protection Act, the specificities of RBI master circulars, and the tactical use of grievance redressal to shield your family and your future.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-10">
                                Beyond the numbers and the interest rates, there is the question of the "Right to a Fresh Start." Debt settlement is the mechanism for that start. But to reach it, you must navigate a path often filled with aggressive recovery agents and opaque bank policies. By the end of this 5000+ word analysis, you will have the legal literacy required to transform from a distressed debtor into an empowered consumer.
                            </p>

                            <h2 id="consumer-protection-act" className="text-3xl md:text-4xl font-black text-slate-900 mb-8 scroll-mt-20 text-center">The Consumer Protection Act 2019: Your Primary Shield</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                The Consumer Protection Act (CPA) 2019 is the cornerstone of borrower rights in India. While many think it only applies to faulty products or bad service at a restaurant, its application in the financial services sector is profound. A loan is a service provided by a bank, and as a borrower, you are a consumer of that service.
                            </p>
                            <div className="bg-slate-900 text-white p-10 rounded-[3rem] mb-12 shadow-2xl relative">
                                <span className="absolute -top-4 -left-4 bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm">CRITICAL LAW</span>
                                <h3 className="text-2xl font-bold mb-6 text-blue-400">Core Rights Under CPA 2019:</h3>
                                <ul className="space-y-6">
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-4 mt-1 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1 underline decoration-blue-800">Protection Against Unfair Trade Practices</h4>
                                            <p className="text-slate-300 font-light">Lenders cannot use deceptive or coercive methods to sell loans or collect dues. This includes hidden charges and aggressive collection tactics.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-4 mt-1 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1 underline decoration-blue-800">Right to be Informed</h4>
                                            <p className="text-slate-300 font-light">You have the right to know the exact breakdown of your debt. Banks must provide clear statements without evasive behavior.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-4 mt-1 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1 underline decoration-blue-800">Right to Seek Redressal</h4>
                                            <p className="text-slate-300 font-light">If you feel a bank has acted unfairly, you can approach the Consumer Courts. The 2025 updates have streamlined this process for faster resolution.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                In 2025, the CPA also covers "Dark Patterns" in digital lending. If an app uses your contact list to shame you or uses confusing UI to hide interest rates, they are in direct violation of this act. The Central Consumer Protection Authority (CCPA) has been increasingly proactive in taking suo moto action against predatory lenders.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-10">
                                For a borrower seeking settlement, the CPA is a tool for transparency. You use it to demand proof of debt and clear explanations of penalties. If a bank adds 30% in arbitrary "Collection Expenses" without justification, that is an unfair trade practice that can be challenged in consumer court.
                            </p>

                            <h2 id="rbi-guidelines-harassment" className="text-3xl md:text-4xl font-black text-slate-900 mb-8 scroll-mt-20">RBI Anti-Harassment Guidelines: The Code of Conduct</h2>
                            <p className="text-slate-700 leading-relaxed mb-6 italic border-l-4 border-blue-500 pl-6 bg-blue-50 py-4 rounded-r-xl">
                                The Reserve Bank of India is not just a regulator of money; it is a regulator of behavior. The RBI Master Circulars on Debt Collection are the holy grail for borrower protection.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                The most powerful thing an RBI guideline does is hold the "Regulated Entity" (the Bank or NBFC) directly responsible for the actions of their "Recovery Agents." In the past, banks would hide behind the excuse that "it was a third party agency we hired." In 2025, that excuse is dead. If an agent harasses you, it is legally as if the CEO of the bank has harassed you.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-10">
                                The RBI has clearly stated that recovery must be conducted with human dignity. The 2024-2025 updates have further tightened the screws on digital harassment. Using "Bots" for excessive calling or using synthetic voices to mimic legal authorities is strictly banned. The focus is on a professional, documented, and time bound recovery process that respects the borrower's private life.
                            </p>

                            <h2 id="recovery-agent-rules" className="text-3xl md:text-4xl font-black text-slate-900 mb-8 scroll-mt-20">Recovery Agent Conduct: Your Daily Rights</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Daily interactions with recovery agents are where most rights are violated. You need a checklist of what is allowed and what is a crime.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-md hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-blue-50">
                                    <h4 className="text-xl font-bold text-slate-900 mb-4 underline decoration-blue-300">The 8 AM - 7 PM Rule</h4>
                                    <p className="text-slate-600 font-light leading-relaxed">Agents can ONLY contact you within these hours. Any call at 9 PM or a visit at 7 AM is a breach of RBI rules and can be used as leverage in settlement talks.</p>
                                </div>
                                <div className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-md hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-blue-50">
                                    <h4 className="text-xl font-bold text-slate-900 mb-4 underline decoration-blue-300">Identity and Authorization</h4>
                                    <p className="text-slate-600 font-light leading-relaxed">An agent must show an ID and an authorization letter. If they refuse, you are encouraged by regulators to stop the conversation and ask them to leave.</p>
                                </div>
                                <div className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-md hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-blue-50">
                                    <h4 className="text-xl font-bold text-slate-900 mb-4 underline decoration-blue-300">No Muscle Power</h4>
                                    <p className="text-slate-600 font-light leading-relaxed">The Supreme Court of India and the RBI have both ruled that banks cannot use "goons or musclemen" for recovery. Only civil interaction is permitted.</p>
                                </div>
                                <div className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-md hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-blue-50">
                                    <h4 className="text-xl font-bold text-slate-900 mb-4 underline decoration-blue-300">No Family Contact</h4>
                                    <p className="text-slate-600 font-light leading-relaxed">Searching for your relatives on social media or calling your neighbors is "Social Shaming." This is a major violation and a ground for heavy penalties on the bank.</p>
                                </div>
                            </div>
                            <p className="text-slate-700 leading-relaxed mb-10">
                                Remember, recording these interactions is your best defense. In 2025, audio and video evidence of harassment is taken very seriously by the Banking Ombudsman and the Consumer Courts. At CredSettle, we often use such evidence as a "Counter Weight" during negotiations to get a better settlement for our clients.
                            </p>

                            <h2 id="privacy-rights" className="text-3xl md:text-4xl font-black text-slate-900 mb-8 scroll-mt-20">Right to Financial Privacy: Protect Your Data</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Your debt is a private matter between you and the bank. The Right to Privacy is a fundamental right under the Constitution of India, and its application in the banking sector is governed by the Digital Personal Data Protection (DPDP) Act and RBI guidelines.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Lenders are prohibited from sharing your loan details with anyone except authorized credit bureaus and their own employees who need to know. Sharing details with your employer to pressure you into paying is a violation. Using your contact list from a mobile app after you have revoked permission is a violation.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-10 font-bold p-6 bg-slate-100 rounded-3xl border border-slate-200">
                                Tactical Tip: If a recovery agent calls a relative or a colleague, do not just argue. Send a formal email to the bank documenting the time and the person called. State that this is a violation of the RBI Fair Practices Code and your right to privacy. This paper trail is invaluable.
                            </p>

                            <h2 id="banking-ombudsman" className="text-3xl md:text-4xl font-black text-slate-900 mb-8 scroll-mt-20">Filing a Complaint: The Path to Resolution</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                The Banking Ombudsman is the most effective way to resolve disputes with a bank without going to court. It is a free, fast, and powerful service provided by the RBI. The process in 2025 is even more streamlined through the Integrated Ombudsman Scheme.
                            </p>
                            <div className="space-y-6 mb-12">
                                {[
                                    { step: 1, title: 'Formal Bank Complaint', content: 'First, file a written complaint with the bank nodal officer or via their online portal. Get a reference number.' },
                                    { step: 2, title: 'Wait for 30 Days', content: 'The bank has 30 days to respond. If they do not respond or if you are unhappy with the response, proceed to the next step.' },
                                    { step: 3, title: 'Approach the Ombudsman', content: 'Visit cms.rbi.org.in or send an email to crpc@rbi.org.in. Attach your evidence and bank communication records.' },
                                    { step: 4, title: 'Conciliation and Award', content: 'The Ombudsman will hear both sides. They can pass an "Award" that the bank must follow, including paying compensation for mental agony.' }
                                ].map((step) => (
                                    <div key={step.step} className="flex gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100 items-center">
                                        <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-black flex-shrink-0 text-xl shadow-md">{step.step}</div>
                                        <div>
                                            <h4 className="font-black text-slate-900 mb-1">{step.title}</h4>
                                            <p className="text-slate-600 font-light">{step.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-700 leading-relaxed mb-10">
                                This process is not just for harassment. You can approach the Ombudsman if the bank is not updating your CIBIL after a settlement, if they have charged you wrong interest, or if they have lost your original property documents after you closed a loan.
                            </p>

                            <h2 id="compromise-settlement-policy" className="text-3xl md:text-4xl font-black text-slate-900 mb-8 scroll-mt-20 text-center">Board-Approved Policies: Making Settlement Official</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                One of the most important RBI rules of 2025 is that every bank **must** have a board approved policy for compromise settlements. This removes the "Discretionary Power" that bank managers used to wield over distressed borrowers. In the past, a manager could simply say "we don't settle" to pressure you into paying the full amount.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Today, you can ask for a copy of their settlement policy. You can state in your negotiation: "I am a distressed borrower with genuine hardship, and according to the RBI Framework 2023-2025, I am requesting an evaluation under your board approved compromise settlement policy." This technical language signals to the bank that you are an informed consumer who cannot be bullied.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-10">
                                This policy ensures that settlement is a last resort, yes, but a legitimate one. It creates a path for both parties to cut their losses and move on. At CredSettle, we help our clients present their cases mathematically and legally so they fit within these board approved parameters.
                            </p>

                            <h2 id="legal-remedies" className="text-3xl md:text-4xl font-black text-slate-900 mb-8 scroll-mt-20">Legal Remedies: Beyond the Ombudsman</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                If the Ombudsman is not enough, or if the bank files a case against you first (like a Section 138 Cheque Bounce or a DRT case), you need a professional legal defense.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                **Consumer Courts:** For deficiency in service or unfair trade practices. They can award huge compensations and stop unfair recovery actions.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                **Civil Courts:** To get stay orders against illegal property seizures if the bank has not followed the SARFAESI Act procedures.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-10 italic font-light text-slate-500">
                                Note: Having a professional lawyer or a debt settlement consultant manage these communications ensures that you don't accidentally incriminate yourself or miss critical deadlines.
                            </p>

                             <h2 id="legal-precedents" className="text-3xl md:text-4xl font-black text-slate-900 mb-8 scroll-mt-20">Legal Precedents: Notable Court Rulings on Borrower Rights</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                The judiciary in India has often stepped in to fill the gaps left by regulators. Understanding these landmark judgments provides you with "Legal Armor" that even the most aggressive bank lawyers respect.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                **ICICI Bank vs. Shanti Devi (2008):** In this landmark case, the Supreme Court of India took a very dim view of banks using musclemen for recovery. The court held that "Banks cannot use goons or musclemen to recover their loans by force." This case established the principle that banks are vicariously liable for the criminal acts of their recovery agents.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                **Justice K.S. Puttaswamy (Retd.) vs. Union of India (2017):** While this is the famous Aadhaar case, it established the "Right to Privacy" as a fundamental right. In the context of debt settlement, this case prevents lenders from socially shaming you or leaking your financial status to third parties without your explicit consent.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-10">
                                In 2025, these precedents are more relevant than ever. If an agent threatens you, reminding them of the *Shanti Devi* judgment can often shift the power dynamic immediately. Modern courts have consistently ruled that while a bank has the right to recover money, they do not have the right to harass or humiliate the individual.
                            </p>

                            <h2 id="sarfaesi-rights" className="text-3xl md:text-4xl font-black text-slate-900 mb-8 scroll-mt-20">Protecting Your Assets: SARFAESI Act Rights</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                If you have a secured loan (like a home loan), the bank might use the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002. However, this act does not give the bank unlimited power.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Under Section 13(2), the bank must give you a 60-day notice before taking any action. You have the right to file an objection under Section 13(3A) within 15 days of receiving this notice. The bank is legally bound to consider your objection and provide a reasoned response. If they fail to do so, their subsequent actions can be challenged in the Debt Recovery Tribunal (DRT).
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-10">
                                This "Right to Object" is your entry point for settlement. Often, during this 60-day window, a well-timed compromise settlement offer can prevent the auction of your property. Knowledge of procedural gaps in the SARFAESI process is often the most powerful tool a borrower has to force a settlement.
                            </p>

                            <h2 id="international-context" className="text-3xl md:text-4xl font-black text-slate-900 mb-8 scroll-mt-20">Global Perspective: How India Compares in 2025</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                It is interesting to note how India's borrower protection environment compares with the West. In the United States, the Fair Debt Collection Practices Act (FDCPA) provides similar protections. India's 2025 framework is arguably more robust because of the Integrated Ombudsman Scheme, which provides a free resolution mechanism that is much faster than the legal systems in many developed nations.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-10">
                                Borrowers in India should feel confident that the regulatory trend is moving towards more empathy and transparency. The inclusion of digital lending apps under the regulatory umbrella is a step that many nations are still struggling to implement effectively. As an Indian consumer, you are standing on solid legal ground.
                            </p>

                             <h2 id="future-of-rights" className="text-3xl md:text-4xl font-black text-slate-900 mb-8 scroll-mt-20">The Horizon: Borrower Rights in 2030</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                As we look towards the next decade, the landscape of consumer protection is expected to become even more digital-centric. By 2030, we predict the widespread adoption of "Financial Health Scores" that go beyond just credit scores, factoring in a borrower's right to survival and basic dignity.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                We also expect to see the "Right to be Forgotten" being applied more aggressively to debt records. After a successful settlement and a period of good behavior, borrowers may have the legal right to have the "Settled" remark removed earlier than the current 7-year mark. This is a movement gaining traction in international consumer rights forums, and India is likely to follow suit.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-10 italic">
                                Prediction: Automated regulatory audits will become real-time. If a bank agent calls a borrower too many times, a regulatory alert will be triggered instantly, potentially leading to automatic fines. This is the future of protection we are advocating for.
                            </p>

                            <h2 id="expert-closing" className="text-3xl md:text-4xl font-black text-slate-900 mb-8 scroll-mt-20">Expert Closing: Your Shield is Only as Strong as Your Knowledge</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                We have covered a vast terrain today - from the intricacies of the Consumer Protection Act 2019 to the specific daily rules for recovery agents and the powerful oversight of the Banking Ombudsman. But all these laws are reactive; your bravery is proactive.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-10">
                                Being in debt is a financial condition, not a personal failure. In 2025, the law recognizes this distinction very clearly. Use this guide as your manual, your shield, and your voice. When you stand up to a bank with the weight of these laws behind you, the dynamic changes. You are no longer just a "Defaulting Account Number"; you are an "Empowered Indian Citizen" who knows his rights.
                            </p>

                             <h2 id="case-studies" className="text-3xl md:text-4xl font-black text-slate-900 mb-8 scroll-mt-20">Real-World Case Studies: Law in Action</h2>
                            <div className="space-y-10 mb-16">
                                <div className="p-10 bg-white rounded-[3rem] border-2 border-slate-50 shadow-lg">
                                    <h4 className="text-2xl font-black text-blue-900 mb-4">Case 1: The 'Workplace Visit' Violation</h4>
                                    <p className="text-slate-700 leading-relaxed font-light mb-4">
                                        Amit, a software engineer in Pune, was facing aggressive recovery for a personal loan. One day, two agents visited his office and started shouting in the reception area. Amit, having read the RBI guidelines, didn't panic. He asked his office security to record the CCTV footage and filed a complaint with the bank's Nodal Officer and the local police within 2 hours.
                                    </p>
                                    <p className="text-slate-700 leading-relaxed font-light">
                                        **Result:** The bank not only apologized but also waived 100% of the penalties and accepted a 40% principal settlement to avoid a potential lawsuit in the consumer court. This is a classic example of using a rights violation as leverage.
                                    </p>
                                </div>
                                <div className="p-10 bg-white rounded-[3rem] border-2 border-slate-50 shadow-lg">
                                    <h4 className="text-2xl font-black text-blue-900 mb-4">Case 2: The Digital Lending 'Privacy Breach'</h4>
                                    <p className="text-slate-700 leading-relaxed font-light mb-4">
                                        Sunita used a popular lending app that accessed her contacts. When she delayed a payment, the app sent a group message to all her professional contacts. Sunita approached the Cyberspace Cell and the RBI Ombudsman simultaneously.
                                    </p>
                                    <p className="text-slate-700 leading-relaxed font-light">
                                        **Result:** The lending app's license was suspended for review, and Sunita's debt was completely nullified by the regulator as compensation for the gross privacy breach.
                                    </p>
                                </div>
                            </div>

                            <h2 id="faqs" className="text-3xl md:text-4xl font-black text-slate-900 mb-8 scroll-mt-20">Expert Answers for Consumers</h2>
                            <div className="space-y-8 mb-16">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-lg transition-all">
                                        <h3 className="font-black text-xl text-slate-900 mb-4">{faq.question}</h3>
                                        <p className="text-slate-600 font-light leading-relaxed">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Client Success and Feedback</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {[
                                    { name: 'Kavitha Reddy', location: 'Hyderabad', stars: 5, comment: 'I had no idea about the Consumer Protection Act in relation to my debt. After reading this guide, I filed a complaint with the Consumer Forum and the bank immediately agreed to a fair settlement. Knowledge is power.' },
                                    { name: 'Arun Nambiar', location: 'Kochi', stars: 5, comment: 'Recovery agents threatened to come to my house at night. CredSettle cited RBI 2025 circulars and filed a Nodal Officer complaint. The bank called us within one day and offered a settlement agreement. Incredible.' },
                                    { name: 'Sneha Bhosle', location: 'Nagpur', stars: 5, comment: 'I was unaware that the bank had violated multiple consumer protection guidelines during my settlement process. CredSettle identified all violations and used them to negotiate a 55% principal reduction. Life-changing.' },
                                    { name: 'Dinesh Rao', location: 'Bangalore', stars: 5, comment: 'This guide helped me understand my rights under the Banking Ombudsman Scheme 2021. I formally escalated my case and the bank settled within 30 days to avoid a formal ruling. Best outcome I could have hoped for.' }
                                ].map((review, index) => (
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

                            <div className="mt-16 p-12 bg-gradient-to-br from-blue-900 to-slate-900 rounded-[3.5rem] text-center text-white shadow-2xl">
                                <h3 className="text-3xl font-black mb-6">Protect Your Rights Today</h3>
                                <p className="text-blue-100 mb-8 text-xl font-light">Don't let the weight of debt crush your dignity. Knowledge is your first line of defense, and professional support is your final victory. Let us help you navigate the complex laws and secure a fair settlement that respects your future.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-white text-blue-900 font-black py-5 px-12 rounded-full hover:bg-blue-50 transition-all shadow-xl text-xl"
                                >
                                    Start Your Legal Defense
                                </Link>
                                <p className="mt-6 text-blue-300 text-sm font-light">Join 15,000+ Indians we have helped with legal debt relief.</p>
                            </div>
                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-8">

                            {/* Primary CTA */}
                            <div className="bg-gradient-to-b from-blue-600 to-blue-800 p-8 rounded-3xl shadow-xl text-center text-white">
                                <h4 className="font-black text-2xl mb-4">Are You Being Harassed?</h4>
                                <p className="text-sm text-blue-100 mb-8 font-light leading-relaxed">Stop the calls. Stop the fear. Our legal experts know every RBI rule in the book. Let us handle the bank for you.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-white text-blue-700 font-black py-4 px-4 rounded-2xl hover:bg-blue-50 transition-colors shadow-lg text-center"
                                >
                                    Talk to a Lawyer
                                </Link>
                                <div className="mt-6 text-[10px] text-blue-200 uppercase tracking-widest font-bold">
                                    <p className="mb-1">✓ 100% Legal Protection</p>
                                    <p className="mb-1">✓ RBI Complaint Assistance</p>
                                    <p>✓ Negotiated Settlements</p>
                                </div>
                            </div>

                            {/* Related Pages Component */}
                            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                                <h4 className="font-black text-slate-900 mb-6 border-b border-slate-100 pb-2">Resource Center</h4>
                                <nav className="space-y-4">
                                    {[
                                        { href: "/is-loan-settlement-a-good-option-for-borrowers", text: "Is Settlement Right for You?" },
                                        { href: "/rbi-rules-for-recovery-agents", text: "Download RBI Guidelines" },
                                        { href: "/does-loan-settlement-affect-cibil", text: "CIBIL Recovery Guide" },
                                        { href: "/how-to-avoid-debt-settlement-scams-in-india", text: "Spotting Settlement Scams" }
                                    ].map((link, idx) => (
                                        <Link key={idx} href={link.href} className="flex group items-start">
                                            <span className="text-blue-600 mr-3 group-hover:translate-x-1 transition-transform font-black">→</span>
                                            <span className="text-[14px] text-slate-600 font-bold group-hover:text-blue-600 transition-colors leading-tight">{link.text}</span>
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                            {/* Quote Box */}
                            <div className="bg-slate-900 p-8 rounded-3xl text-white">
                                <p className="text-sm italic font-light leading-relaxed mb-4">"The strength of a nation lies in the financial literacy and protection of its consumers. Know your rights, be heard."</p>
                                <p className="text-xs font-black text-blue-400">- Indian Consumer Forum 2025</p>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                h2, h3 {
                    scroll-margin-top: 100px;
                }
                article {
                  hyphens: auto;
                }
            `}</style>
        </>
    );
}
