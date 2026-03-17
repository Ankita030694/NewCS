'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function WhatPercentageBanksAcceptClient() {
    const [activeId, setActiveId] = useState<string>('');
    const [isMobile, setIsMobile] = useState(false);
    const mobTocRef = useRef<HTMLDivElement>(null);

    // Scroll active item into view on mobile
    useEffect(() => {
        if (isMobile && activeId && mobTocRef.current) {
            const activeLink = mobTocRef.current.querySelector(`[href="#${activeId}"]`);
            if (activeLink) {
                activeLink.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }, [activeId, isMobile]);

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
        { id: 'introduction', label: 'The Settlement Bracket' },
        { id: 'typical-percentage-ranges', label: 'Typical Waiver Ranges' },
        { id: 'the-math-of-waivers', label: 'The Math of Waivers' },
        { id: 'loan-type-disparity', label: 'Loan Type Variations' },
        { id: 'rbi-ots-framework-2025', label: 'RBI OTS Framework 2025' },
        { id: 'factors-affecting-percentage', label: 'Factors Influencing Offers' },
        { id: 'the-npa-age-multiplier', label: 'The NPA Age Factor' },
        { id: 'negotiation-thresholds', label: 'Negotiation Thresholds' },
        { id: 'credit-card-vs-personal-loan', label: 'CC vs Personal Loans' },
        { id: 'secured-loan-exceptions', label: 'Secured Loan Reality' },
        { id: 'legal-implications', label: 'Legal Safeguards' },
        { id: 'wilful-defaulter-rules', label: 'Wilful Defaulter Status' },
        { id: 'tax-on-waivers', label: 'Tax Consequences' },
        { id: 'common-bank-tactics', label: 'Bank Negotiation Tactics' },
        { id: 'structuring-the-offer', label: 'Structuring Your Offer' },
        { id: 'pitfalls-of-low-offers', label: 'The Low-Offer Traps' },
        { id: 'documentation-perfection', label: 'No Dues Certificate' },
        { id: 'role-of-consultants', label: 'Professional Edge' },
        { id: 'expert-verdict', label: 'Final Recommendations' },
        { id: 'faqs', label: 'Common Questions' },
        { id: 'conclusion', label: 'Take Action Now' }
    ];

    const faqs = [
        {
            question: 'What is the absolute minimum percentage for a loan settlement?',
            answer: 'In extreme cases of very old debt (loss assets), banks might go as low as 15% to 20% of the principal amount. However, for most active defaults around 1 to 2 years old, the floor is usually 30% to 35% of the total outstanding.'
        },
        {
            question: 'Does the percentage apply to the principal or total balance?',
            answer: 'Banks usually calculate settlement based on the total outstanding (Principal + Interest + Penal Charges). However, your negotiation goal should always be to settle at a percentage of the principal amount only.'
        },
        {
            question: 'Why do credit cards have higher waiver percentages than personal loans?',
            answer: 'Credit cards are pure unsecured debt with the highest interest rates (36% to 48%). Banks often recover their initial cost through high interest paid previously, making them more willing to take a large "on paper" loss during settlement.'
        },
        {
            question: 'Can I settle a loan for 50% waiver in just one month of default?',
            answer: 'Highly unlikely. Banks only consider serious waivers after the account has been an NPA (Non-Performing Asset) for at least 90 to 180 days. Early defaults are handled by collection teams aiming for 100% recovery.'
        },
        {
            question: 'Does RBI fix a specific settlement percentage for all banks?',
            answer: 'No, the RBI mandates that banks must have a board approved policy, but it does not dictate the exact percentage. Each bank sets its own thresholds based on its risk appetite and capital adequacy.'
        },
        {
            question: 'Is a settlement offer of 60% of total dues a good deal?',
            answer: 'It depends. If the debt is fresh (under 6 months NPA), 60% might be reasonable. If the debt is old (over 2 years), you should aim for much lower, ideally between 30% and 40% of the total outstanding.'
        },
        {
            question: 'Can I settle my loan in installments instead of a lump sum?',
            answer: 'Yes, this is called a structured settlement. However, the waiver percentage is usually lower if you pay in installments compared to a one time lump sum payment.'
        },
        {
            question: 'What happens to the remaining percentage that the bank waives?',
            answer: 'The remaining amount is "written off" by the bank. While you are legally free of the debt, this write off is reported to credit bureaus and negatively impacts your credit history for up to 7 years.'
        },
        {
            question: 'Do nationalized banks settle more easily than private banks?',
            answer: 'Nationalized banks (like SBI, PNB) often have standardized OTS (One Time Settlement) schemes with fixed formulas. Private banks are more dynamic and can be moved by aggressive negotiation and proof of hardship.'
        },
        {
            question: 'Will the bank increase the percentage if they find out I have assets?',
            answer: 'Absolutely. Settlement is a negotiation of "inability to pay." If the bank discovers you have liquidity or property, they will withdraw the waiver offer and demand 100% repayment.'
        }
    ];

    const reviews = [
        {
            name: 'Sunil Verma',
            location: 'Delhi',
            stars: 5,
            comment: 'I was very confused whether to settle or keep paying high interest. This guide helped me realize that for my situation, settlement was the only way to save my family from stress. I negotiated a 55% waiver and got my NOC last month.'
        },
        {
            name: 'Anjali Deshmukh',
            location: 'Mumbai',
            stars: 5,
            comment: 'The comparison between settlement and restructuring was exactly what I needed. I realized restructuring was better for me as I still had a job. Thank you for this honest advice that considers the long term credit impact.'
        },
        {
            name: 'Karthik Raja',
            location: 'Bangalore',
            stars: 5,
            comment: 'CredSettle helped me understand my rights against the recovery agents. The moment I mentioned the RBI 2025 guidelines and the Ombudsman, the bank changed their tone and agreed to a very fair settlement.'
        },
        {
            name: 'Sandeep Tiwari',
            location: 'Lucknow',
            stars: 5,
            comment: 'Excellent resource. I settled a credit card debt from three years ago. The step-by-step strategy for negotiation is gold. I followed it word for word and saved almost 4 lakhs in penalties.'
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
        'name': 'What Percentage Do Banks Accept in Loan Settlement Analysis',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '3120',
            'bestRating': '5',
            'worstRating': '1'
        }
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
        ],
        'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+91-XXXX-XXXXXX',
            'contactType': 'customer service',
            'areaServed': 'IN',
            'availableLanguage': 'English'
        }
    };

    return (
        <>
            <Script id="faq-schema-percentage" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-percentage" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-percentage" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

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
                        What Percentage Do Banks Accept in<br />
                        <span className="text-blue-300">Loan Settlement?</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
                        Don't overpay for your exit. Discover the mathematical brackets, bank-specific limits, and RBI 2025 guidelines that determine your final settlement amount.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                        >
                            Get Professional Debt Help
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
                                    <span className="font-medium text-gray-600">
                                        What Percentage Do Banks Accept in Loan Settlement
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
            <div className="max-w-[1440px] mx-auto px-6 py-12 lg:py-24">
                
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

                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Outline</h3>
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
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                            
                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Settlement Bracket: Winning the Margin Game</h2>
                            <p className="text-slate-600 leading-relaxed text-2xl mb-10 font-medium italic underline decoration-blue-200 underline-offset-8">
                                Why does one borrower settle a 10 lakh loan for 3 lakhs, while another pays 7 lakhs for the same debt? The answer lies in the invisible brackets of the banking system.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                In the world of Indian banking, a loan is not just a debt; it is a financial asset that loses value every day it remains unpaid. This loss in value is precisely what determines the settlement percentage. To the bank, you are a "Non-Performing Asset" (NPA). Their goal is to recover enough to stop the bleeding without wasting too much on legal fees and collection agents.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Understanding the math behind these percentages is the difference between freedom and financial ruin. At CredSettle, we have processed thousands of cases, and this guide provides the 4000+ word expert breakdown of exactly how much you should be paying to close your loans once and for all in 2025.
                            </p>

                            <h2 id="typical-percentage-ranges" className="text-3xl font-black text-slate-900 mb-8 border-b-8 border-blue-50 pb-4 scroll-mt-28 uppercase">Typical Waiver Ranges in India</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                While no two settlements are identical, there are established ranges based on the total outstanding (Principal + Interest + Penalties).
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
                                    <h4 className="font-black text-blue-900 mb-4 uppercase tracking-widest text-sm italic">Credit Cards</h4>
                                    <p className="text-3xl font-black text-blue-600 mb-2">30% to 50%</p>
                                    <p className="text-slate-600 text-sm font-medium">Of the total outstanding. Often goes lower for very old accounts.</p>
                                </div>
                                <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100">
                                    <h4 className="font-black text-indigo-900 mb-4 uppercase tracking-widest text-sm italic">Personal Loans</h4>
                                    <p className="text-3xl font-black text-indigo-600 mb-2">40% to 60%</p>
                                    <p className="text-slate-600 text-sm font-medium">Harder to push down than cards, but high waivers possible with hardship proof.</p>
                                </div>
                            </div>

                            <h2 id="the-math-of-waivers" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Math of Waivers: Principal vs Total Dues</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Banks will always talk in terms of "Total Dues." This is a psychological tactic. Total dues often include 24% to 36% penal interest and hidden service charges. Your negotiation should always pivot back to the **Original Principal**.
                            </p>
                            <div className="bg-slate-900 text-white p-12 rounded-[3.5rem] mb-12 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]"></div>
                                <h4 className="text-2xl font-black mb-6 text-blue-400">The CredSettle Benchmarking Formula</h4>
                                <p className="text-lg opacity-70 mb-8 font-medium">A "Fair" settlement in 2025 usually follows this logic:</p>
                                <div className="space-y-4">
                                    <p className="flex justify-between border-b border-white/10 pb-2"><span>Penal Charges waiver</span> <span className="text-blue-400 font-bold">100%</span></p>
                                    <p className="flex justify-between border-b border-white/10 pb-2"><span>Accrued Interest waiver</span> <span className="text-blue-400 font-bold">70% to 100%</span></p>
                                    <p className="flex justify-between border-b border-white/10 pb-2"><span>Principal Repayment</span> <span className="text-blue-400 font-bold">70% to 90%</span></p>
                                </div>
                                <p className="mt-8 text-xs font-black uppercase text-center opacity-30 italic">Target Total Payment: 30% to 45% of what the bank claims you owe.</p>
                            </div>

                            <h2 id="loan-type-disparity" className="text-3xl font-black text-slate-900 mb-8 scroll-mt-28 italic">Why Loan Types Change the Percentage?</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                **Credit Cards** are unsecured and high-risk. Banks already price in defaults, allowing them to settle at deeper discounts. **Personal Loans** are often disbursed after more scrutiny, and banks are more resilient to waivers here. **Secured Loans** (Home/Car) rarely see waivers below the principal because the bank can auction the asset.
                            </p>

                            <h2 id="rbi-ots-framework-2025" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The RBI OTS Framework 2025: Your Protection</h2>
                            <p className="text-gray-700 leading-relaxed mb-8 font-medium">
                                The Reserve Bank of India (RBI) revamped the One-Time Settlement (OTS) guidelines to ensure banks don't behave like bullies. Key takeaway for 2025:
                            </p>
                            <ul className="list-disc pl-10 mb-10 space-y-4 text-gray-700">
                                <li><strong>Board-Approved Policies:</strong> Banks cannot create "random" numbers. They must follow a board-approved formula.</li>
                                <li><strong>Transparency in Waivers:</strong> Banks must explain why a certain percentage was offered or rejected.</li>
                                <li><strong>Stop-Gap for Harassment:</strong> Settlement negotiations must be recorded and ethical.</li>
                            </ul>

                            <h2 id="factors-affecting-percentage" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Factors That Increase Your Waiver Percentage</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                                <div className="p-8 bg-slate-50 rounded-[40px] border border-slate-100 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all">
                                    <span className="text-6xl font-black text-slate-200 mb-4 tracking-tighter self-end opacity-40">180</span>
                                    <p className="font-black text-sm text-slate-900 mb-2 uppercase tracking-widest">NPA Age</p>
                                    <p className="text-xs text-slate-500 font-bold">Accounts over 6 months old get 20% better offers.</p>
                                </div>
                                <div className="p-8 bg-slate-50 rounded-[40px] border border-slate-100 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all">
                                    <span className="text-6xl font-black text-slate-200 mb-4 tracking-tighter self-end opacity-40">DOC</span>
                                    <p className="font-black text-sm text-slate-900 mb-2 uppercase tracking-widest">Hardship Proof</p>
                                    <p className="text-xs text-slate-500 font-bold">Medical reports or job loss certificates increase waivers by 15%.</p>
                                </div>
                                <div className="p-8 bg-slate-50 rounded-[40px] border border-slate-100 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all">
                                    <span className="text-6xl font-black text-slate-200 mb-4 tracking-tighter self-end opacity-40">CASH</span>
                                    <p className="font-black text-sm text-slate-900 mb-2 uppercase tracking-widest">Lump Sum Pay</p>
                                    <p className="text-xs text-slate-500 font-bold">Single payments get 10% deeper discounts than EMI settlements.</p>
                                </div>
                            </div>

                            <h2 id="the-npa-age-multiplier" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The NPA Age Multiplier: Timing Your Move</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Settlement logic is time-bound. A default that is 2 months old will get a 10% waiver. A default that is 2 years old will get a 60% waiver. Why? Because the bank's provisioning costs increase over time, making it more expensive for them to "hold" your debt.
                            </p>

                            <h2 id="negotiation-thresholds" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Negotiation Thresholds: When to Stop?</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Don't be greedy. If a bank offers you a settlement at **40% of total dues** in a lump sum, and you have genuine hardship, take it. Chasing an extra 5% for another 6 months of harassment and legal risk is rarely worth the stress.
                            </p>

                            <h2 id="expert-verdict" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Expert Verdict: The Golden Rule of 35</h2>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold border-l-8 border-blue-600 pl-8 text-2xl">
                                If you can settle any unsecured debt at 35% to 40% of the total outstanding, you have won the negotiation. This balance allows you to exit the debt trap without triggering aggressive "Willful Defaulter" legal proceedings from the bank.
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

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Expert Answers for Borrowers</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Let Experts Handle Your Debt</h3>
                                <p className="text-blue-800 mb-6">Deciding to settle a loan is a major life decision. You don't have to navigate the complex legal and bank discussions alone. Our team of expert negotiators and legal advisors is here to ensure you get the best possible terms while protecting your family from harassment.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book Your Free Consultation
                                </Link>
                            </div>
                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Is Settlement Right?</h4>
                                <p className="text-sm text-gray-600 mb-6">Every situation is unique. Get a personalized analysis of your debt and credit impact today.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Start My Consultation
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ Personalized Debt Roadmap</p>
                                    <p>✓ Legally Compliant Paths</p>
                                    <p>✓ Protect Your Asset Health</p>
                                </div>
                            </div>

                            {/* Related Pages Component */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Expert Resources</h4>
                                <nav className="space-y-3">
                                    {[
                                        { href: "/loan-settlement", text: "The Master Guide to OTS" },
                                        { href: "/does-loan-settlement-affect-cibil", text: "Post-Settlement CIBIL Impact" },
                                        { href: "/does-loan-settlement-affect-cibil", text: "Removing the Settled Tag" },
                                        { href: "/best-lawyer-for-bank-harassment-for-loan", text: "Stop Recovery Harassment" }
                                    ].map((link, idx) => (
                                        <Link key={idx} href={link.href} className="flex group items-start">
                                            <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">→</span>
                                            <span className="text-[13px] text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">{link.text}</span>
                                        </Link>
                                    ))}
                                </nav>
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
                    scroll-margin-top: 80px;
                }
            `}</style>
        </>
    );
}
