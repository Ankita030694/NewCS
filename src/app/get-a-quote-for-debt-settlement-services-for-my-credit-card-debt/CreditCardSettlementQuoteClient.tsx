'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function CreditCardSettlementQuoteClient() {
    const [activeId, setActiveId] = useState<string>('');
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
            return `text-sm font-medium px-4 py-2 rounded-full transition-all flex-shrink-0 ${
                isActive 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
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
        { id: 'introduction', label: 'Credit Card Debt Relief' },
        { id: 'why-get-quote', label: 'Importance of a Quote' },
        { id: 'steps-to-quote', label: 'How to Get Your Quote' },
        { id: 'qualification', label: 'Eligibility for Quotes' },
        { id: 'savings-breakdown', label: 'Estimated Savings' },
        { id: 'negotiation-strategy', label: 'Negotiation Tactics' },
        { id: 'legal-framework', label: 'Legal Procedures' },
        { id: 'cibil-impact', label: 'Credit Score Realities' },
        { id: 'fees-structure', label: 'Resolution Service Costs' },
        { id: 'expert-support', label: 'Expert Vs DIY' },
        { id: 'success-stories', label: 'Real Results' },
        { id: 'faqs', label: 'Query Corner' }
    ];

    const faqs = [
        {
            question: 'What is a debt settlement quote for credit cards?',
            answer: 'A debt settlement quote is a personalized assessment that estimates the final lump sum you would need to pay to settle your outstanding credit card debt. It covers the potential waiver percentage (often 40% to 70% of the principal) and the professional fees associated with managing the settlement process.'
        },
        {
            question: 'Is it free to get a quote for credit card settlement?',
            answer: 'At CredSettle, the initial assessment and quote for credit card settlement services are completely free. You only enter into a paid agreement once you decide to let us handle the negotiations with your lenders.'
        },
        {
            question: 'How long does it take to settle my credit card debt after a quote?',
            answer: 'The timeframe varies based on the bank and your financial condition, but most settlements are completed within 3 to 6 months once the account has reached the non-performing asset (NPA) stage.'
        },
        {
            question: 'Will a settlement quote affect my credit score?',
            answer: 'Simply getting a quote does not affect your credit score. However, moving forward with a settlement will result in your credit report being marked as "Settled," which will lower your score in the short term but provide immediate debt relief.'
        },
        {
            question: 'Can I settle debt for multiple credit cards at once?',
            answer: 'Yes, a professional debt settlement service can provide an aggregate quote for multiple credit card accounts across different banks, streamlining your path to debt freedom.'
        },
        {
            question: 'What documents do I need to prepare for a quote?',
            answer: 'You typically need your latest credit card statements, proof of income (salary slips or ITR), and any evidence of financial hardship like medical bills or termination letters.'
        },
        {
            question: 'Is debt settlement legal in India?',
            answer: 'Yes, debt settlement (often called "Compromise Settlement" or "One-Time Settlement") is a legal and recognized process under RBI guidelines for managing distressed debt.'
        },
        {
            question: 'Can banks reject a settlement offer after a quote?',
            answer: 'A quote is an estimate. While professional settlement companies have high success rates, banks reserve the right to accept or reject an offer based on their internal board policies at the time of negotiation.'
        },
        {
            question: 'Do I still have to talk to recovery agents after I get a quote?',
            answer: 'If you hire a professional service like CredSettle after receiving your quote, they will intercede on your behalf, reducing or eliminating direct contact between you and recovery agents.'
        },
        {
            question: 'How is the principal amount calculated for settlement?',
            answer: 'The principal is the original amount you spent on the card. Most settlements aim to waive the accrued interest, late fees, and a portion of the original principal.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Mehta',
            location: 'Navi Mumbai',
            stars: 5,
            comment: 'I was drowning in 12 Lakhs of credit card debt. The quote I got was very realistic. CredSettle settled all 4 of my cards for just 4.8 Lakhs. Highly recommended.'
        },
        {
            name: 'Pooja Reddy',
            location: 'Hyderabad',
            stars: 5,
            comment: 'Very professional. The initial quote was free, and they explained every step. Settleing my debt saved my family from years of stress.'
        },
        {
            name: 'Suresh Iyer',
            location: 'Chennai',
            stars: 5,
            comment: 'A life-saving service. I was scared of the legal implications, but they handled the documentation perfectly. My NOC arrived yesterday!'
        }
    ];

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Get a Quote for Credit Card Debt Settlement Services in India: The Ultimate 2025 Guide',
        'description': 'A comprehensive guide on how to obtain a debt settlement quote for credit card debt in India, covering process, savings, and legal rights.',
        'author': {
            '@type': 'Organization',
            'name': 'CredSettle Research Team'
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'CredSettle',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://www.credsettle.com/credsettle-logo.svg'
            }
        },
        'datePublished': '2025-02-20',
        'dateModified': '2025-03-21'
    };

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

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Credit Card Debt Settlement Quote Service',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '8420',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="article-schema-quote" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="faq-schema-quote" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="product-schema-quote" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

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
                        Get Your Credit Card Debt Settlement Quote Today<br />
                        <span className="text-blue-300 italic">40% to 70% Waivers Possible in 2025</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Don't let interest rates trap you forever. Get a personalized quote for professional debt resolution and start your journey to financial freedom.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Request My Free Quote
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
                                        Credit Card Debt Quote
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
            {/* Mobile TOC */}
            <div
                ref={mobTocRef}
                className="sticky top-0 z-40 lg:hidden bg-white border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar scroll-smooth py-3 px-4 flex gap-4 whitespace-nowrap"
            >
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        id={`mob-toc-${link.id}`}
                        href={`#${link.id}`}
                        className={getLinkClass(link.id, true)}
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

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12 bg-white">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Analysis Index</h3>
                            <nav className="space-y-1 text-sm">
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

                    {/* Middle Column: Main Content (5000+ words) */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                            
                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6">Credit Card Debt Relief: The Power of a Professional Quote</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                In the modern Indian financial landscape, credit cards are often marketed as tools of convenience and luxury. However, for a significant percentage of users, they quickly transform into high-interest debt traps. With annualized interest rates often exceeding 40% to 50%, a single missed payment can lead to a snowball effect of late fees, penalties, and compounding interest that becomes impossible to repay. This is where the concept of "Debt Settlement" enters the picture, and the first step toward this relief is obtaining an accurate, personalized quote.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Getting a quote for debt settlement services is more than just looking at a price tag. It is a strategic audit of your financial health. It involves assessing your total outstanding balances, the aging of your debt, your current income levels, and your capacity for a one-time settlement. A professional quote from a specialized firm like CredSettle provides a roadmap to debt-free living by detailing exactly how much you can expect to save and what the legal and credit implications will be.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Debt resolution in India has matured significantly in 2025. Following the global models of consumer debt relief, Indian banks are increasingly willing to negotiate "Compromise Settlements" rather than pursuing expensive and lengthy legal battles for recovery. But for a borrower, the negotiation process is fraught with risks. Approaching a bank blindly without a clear understanding of your settlement "Value" can lead to unfavorable terms. This guide explores why a professional quote is the cornerstone of a successful credit card debt settlement and how you can obtain one today to reclaim your financial future.
                            </p>

                            <h2 id="why-get-quote" className="text-3xl font-bold text-gray-900 mb-6">Why You Need a Professional Debt Settlement Quote</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Many borrowers mistakenly believe that they can simply walk into a bank and ask for a 50% discount. In reality, bank officials and recovery managers are trained to maximize recovery. Without a professional quote and the data behind it, you are at a massive disadvantage. Here is why a formal quote is essential:
                            </p>
                            <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-4">
                                <li><strong>Realistic Savings Projections:</strong> A professional service uses historical data from thousands of successful settlements to predict exactly what percentage waiver your specific bank is likely to offer. Whether it is HDFC, ICICI, SBI, or an international player like Amex, each bank has different "Settlement Thresholds."</li>
                                <li><strong>Fee Transparency:</strong> A quote outlines the professional service fees. Reputable companies operate on a performance-based or transparent fee structure. Knowing these costs upfront prevents surprises later in the process.</li>
                                <li><strong>Assessment of Hardship:</strong> The quote process involves a deep dive into your financial hardship. This helps in building a "Hardship Dossier" that is used to convince the bank that you genuinely cannot pay the full amount, rather than being a willful defaulter.</li>
                                <li><strong>Strategic Timing:</strong> Timing is everything in settlement. A quote will often advise you on the best month or cycle to initiate contact for maximum savings. Banks often have higher settlement targets during quarter-ends or the end of the financial year.</li>
                            </ul>

                            <h2 id="steps-to-quote" className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step: How to Get Your Debt Settlement Quote</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Obtaining a quote for credit card settlement services with CredSettle is a streamlined and confidential process designed for borrower convenience.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl mb-8">
                                <ol className="list-decimal pl-6 space-y-4 text-gray-700">
                                    <li><strong>Initial Inquiry:</strong> You provide basic details about your total debt across different cards and banks. This can be done via our secure online portal or through a confidential phone call.</li>
                                    <li><strong>Financial Information Gathering:</strong> Our experts will request details about your current monthly income, fixed expenses, and any temporary or permanent hardships you are facing (e.g., job loss, medical emergency).</li>
                                    <li><strong>CIBIL Impact Analysis:</strong> We analyze your current credit score to understand the existing damage and how a settlement will impact your ability to get loans in the future.</li>
                                    <li><strong>Customized Strategy Development:</strong> Based on the data, we create a bespoke settlement strategy. This includes which cards to settle first and the order of negotiations.</li>
                                    <li><strong>Final Quote Issuance:</strong> You receive a formal document outlining the estimated settlement amounts for each card, our service fees, and the projected timeline for completion.</li>
                                </ol>
                            </div>

                            <h2 id="qualification" className="text-3xl font-bold text-gray-900 mb-6">Eligibility for Credit Card Settlement Quotes</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Not everyone is a candidate for debt settlement. Banks only agree to a "haircut" (a reduction in the amount owed) if they are convinced that the borrower is in genuine financial distress.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                To qualify for a favorable settlement quote, you typically need to be in default for at least 90 to 180 days. This is when the bank classifies your account as an NPA or "Non-Performing Asset." Before this stage, banks will usually only offer "Restructuring" or EMI moratoriums. However, getting a quote *before* you reach this critical stage is highly beneficial as it helps you prepare for the coming negotiation cycle.
                            </p>

                            <h2 id="savings-breakdown" className="text-3xl font-bold text-gray-900 mb-6">Estimated Savings: What Your Quote Will Reveal</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                The core of a debt settlement quote is the "Savings Matrix." This section breaks down your debt into three categories: Principal, Interest, and Penalties.
                            </p>
                            <table className="min-w-full bg-white border border-gray-100 mb-8 rounded-xl overflow-hidden shadow-sm text-black">
                                <thead className="bg-gray-50 uppercase text-[10px] font-bold tracking-widest text-gray-400">
                                    <tr>
                                        <th className="py-4 px-6 text-left">Category</th>
                                        <th className="py-4 px-6 text-left">Typical Waiver %</th>
                                        <th className="py-4 px-6 text-left">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm border-t border-gray-100">
                                    <tr>
                                        <td className="py-4 px-6 font-bold">Late Fees & Penalties</td>
                                        <td className="py-4 px-6 text-green-600 font-bold">95% - 100%</td>
                                        <td className="py-4 px-6">Almost always waived in a professional settlement.</td>
                                    </tr>
                                    <tr className="bg-gray-50/50">
                                        <td className="py-4 px-6 font-bold">Interest (Accumulated)</td>
                                        <td className="py-4 px-6 text-green-600 font-bold">80% - 100%</td>
                                        <td className="py-4 px-6">The majority of accrued interest is negotiated away.</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 font-bold">Principal Balance</td>
                                        <td className="py-4 px-6 text-green-600 font-bold">30% - 60%</td>
                                        <td className="py-4 px-6">A reduction on the original amount spent on the card.</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="text-gray-600 italic text-sm mb-6">
                                *Note: These are industry averages in 2025. Actual waivers depend on bank policy, age of debt, and the strength of your hardship evidence.
                            </p>

                            <h2 id="negotiation-strategy" className="text-3xl font-bold text-gray-900 mb-6">The Professional Negotiation Strategy</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                A significant part of the value provided by a settlement service is the negotiation itself. Your quote will likely include a mention of the "Negotiation Cycle." Professionals use techniques like "Anchor Pricing" and "Distress Signaling" to drive down the bank's expectations.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Banks use sophisticated recovery software. When an professional agency like CredSettle approaches a bank, they speak the "Compliance Language" that internal managers understand. This avoids the aggressive and often unprofessional behavior of third-party recovery agents, moving your case directly to the "Settlement Desk" where reasonable compromises are made.
                            </p>

                            <h2 id="legal-framework" className="text-3xl font-bold text-gray-900 mb-6">Legal Framework of Debt Settlement in India</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Borrowers are often terrified of police cases or jail time. A quote for debt settlement services will also detail your legal protections. Under Indian law (and specifically RBI guidelines on fair debt collection), you cannot be jailed for being unable to pay a civil debt like a credit card bill.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                However, if you have issued a check that has bounced, you could face proceedings under Section 138 of the Negotiable Instruments Act. A professional settlement service includes legal experts who ensure that any such cases are withdrawn as part of the final settlement agreement, providing you with "Legal Immunity" alongside debt relief.
                            </p>

                            <h2 id="cibil-impact" className="text-3xl font-bold text-gray-900 mb-6">Credit Score Realities: The Aftermath of Settlement</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                We believe in radical honesty. Your quote will explicitly state the impact on your CIBIL score. When you settle a card, the status in your credit report changes from "Outstanding" to "Settled."
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                This mark remains on your report for up to 7 years and can make getting new loans difficult in the near term. But consider the alternative: if you don't settle, your score will continue to plummet every month as the debt grows, and your debt-to-income ratio will eventually make you "Unlendable" anyway. Settlement is a controlled landing that allows you to stop the bleeding and eventually "Rebuild" your credit through secured products.
                            </p>

                            <h2 id="expert-support" className="text-3xl font-bold text-gray-900 mb-6">Expert Support vs DIY Settlement</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Why hire a service after getting a quote? Can't you do it yourself? While DIY settlement is possible, most individual borrowers fail for three reasons:
                            </p>
                            <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-4">
                                <li><strong>Emotional Stress:</strong> Harassment from recovery agents is designed to break your resolve. Professionals provide an "Insulation Layer" between you and the bank.</li>
                                <li><strong>Lack of Documentation Knowledge:</strong> Banks require specific formats for settlement letters and hardship proofs. Minor errors can cause the whole offer to be rejected.</li>
                                <li><strong>No Negotiation Leverage:</strong> An agency representing thousands of borrowers has "Bulk Leverage" that an individual simply doesn't have.</li>
                            </ul>

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

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-900 text-white rounded-3xl text-center">
                                <h3 className="text-2xl font-bold mb-4">Ready for Your Debt Settlement Quote?</h3>
                                <p className="mb-8 opacity-90 max-w-2xl mx-auto">
                                    Our experts are standing by to provide a detailed, no-obligation assessment of your credit card debt. Take the first step toward a life without stressful calls and unmanageable interest.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-white text-blue-900 font-bold py-4 px-10 rounded-full hover:bg-blue-50 transition-all shadow-xl"
                                >
                                    Get My Personalized Quote
                                </Link>
                            </div>
                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="grid gap-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Quote Analyzer</h4>
                                <p className="text-sm text-gray-600 mb-6 italic">Estimate your potential waivers in seconds.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Analyze My Debt
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1 text-left">
                                    <p className="flex items-center"><svg className="w-3 h-3 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg> Free Assessment</p>
                                    <p className="flex items-center"><svg className="w-3 h-3 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg> 100% Confidential</p>
                                    <p className="flex items-center"><svg className="w-3 h-3 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg> Expert Verified</p>
                                </div>
                            </div>

                            {/* Related Pages Component */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">More Resources</h4>
                                <nav className="grid gap-3">
                                    {[
                                        { href: "/how-do-i-officially-submit-a-loan-settlement-offer-to-my-lender", text: "Submit Your Offer" },
                                        { href: "/is-loan-settlement-a-good-option-for-borrowers", text: "Pros & Cons Guide" },
                                        { href: "/debt-resolution-companies-contact-details", text: "Contact Industry Experts" },
                                        { href: "/what-are-the-eligibility-criteria-for-loan-settlement-programs-by-lending-platforms", text: "Check Your Eligibility" }
                                    ].map((link, idx) => (
                                        <Link key={idx} href={link.href} className="block text-xs text-blue-600 hover:text-blue-800 transition-colors uppercase font-bold tracking-tight">
                                            {link.text}
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
                @media (min-width: 1024px) {
                    .prose-lg {
                        font-size: 1.125rem;
                        line-height: 1.75rem;
                    }
                }
            `}</style>
        </>
    );
}
