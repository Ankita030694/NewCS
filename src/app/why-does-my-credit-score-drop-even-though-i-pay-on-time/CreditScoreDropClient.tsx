'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function CreditScoreDropClient() {
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
        { id: 'introduction', label: 'Overview' },
        { id: 'credit-utilization-ratio', label: 'CUR Impact' },
        { id: 'hard-inquiries', label: 'Hard Inquiries' },
        { id: 'credit-mix', label: 'Credit Mix' },
        { id: 'closing-old-accounts', label: 'Old Accounts' },
        { id: 'systemic-errors', label: 'Reporting Errors' },
        { id: 'bnpl-impact', label: 'BNPL & P2P' },
        { id: 'reviews', label: 'Case Studies' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'rectification', label: 'The Fix' },
    ];

    const faqs = [
        {
            question: 'Why did my CIBIL score drop by 20 points even though I paid all EMIs?',
            answer: 'A score drop despite timely payments is often due to a high Credit Utilization Ratio on your credit cards, a new hard inquiry, or a closing of an old credit account. Even if you pay on time, using more than 30% of your total credit limit can signal risk to the algorithm. In 2026, with weekly reporting, this drop can happen within days of a high balance being recorded.'
        },
        {
            question: 'Does applying for a new credit card lower my score immediately?',
            answer: 'Yes, every time you apply for credit, the lender performs a "Hard Inquiry." This typically results in a small, temporary dip in your score. Multiple inquiries in a short period can lead to a more significant drop because it makes you appear "credit hungry" to lenders.'
        },
        {
            question: 'Will my credit score drop if I close a credit card I don’t use?',
            answer: 'Surprisingly, yes. Closing an old credit card reduces your total available credit limit and shortens your average credit age. Both these factors are critical for a high score. It is usually better to keep old accounts open even with a zero balance.'
        },
        {
            question: 'How long does it take for a payment to reflect in my CIBIL report correctly?',
            answer: 'As per the 2026 RBI guidelines, banks must now report data on a weekly basis. However, it still takes about 7 to 14 days for the bureau to process this data and update your score. If you paid your dues recently, check back after two weeks.'
        },
        {
            question: 'Can Buy Now Pay Later (BNPL) loans affect my credit score?',
            answer: 'Absolutely. Most BNPL services are treated as personal loans or consumer durable loans. High usage or multiple active BNPL accounts can negatively impact your credit mix and increase your debt-to-income perception, even with on-time payments.'
        },
        {
            question: 'What should I do if my score drops due to a bank error?',
            answer: 'You should immediately file a dispute with the credit bureau (CIBIL, Experian, etc.) and the concerned bank. Under new regulations, banks are required to resolve these disputes within a specified timeframe or provide compensation for any delays caused.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Sethi',
            location: 'Mumbai',
            stars: 5,
            comment: 'I was panicked when my score dropped from 780 to 740 for no reason. CredSettle identified that my bank had not updated my old car loan status. Their experts helped me file a dispute and my score is back to 785 within three weeks!'
        },
        {
            name: 'Priyanka Nair',
            location: 'Kochi',
            stars: 5,
            comment: 'This guide explained why my score fell after closing my first credit card. Amalegal Solutions provided a clear roadmap to rebuild my score using secured cards. Exceptional advice for anyone struggling with credit!'
        },
        {
            name: 'Rahul Deshmukh',
            location: 'Pune',
            stars: 5,
            comment: 'I thought on-time payments were enough. I learned about Credit Utilization Ratio here and realized my 90% usage was killing my score. Following the 30% rule helped me recover 40 points in just two months.'
        },
        {
            name: 'Ananya Sharma',
            location: 'Delhi',
            stars: 5,
            comment: 'Struggled with phantom loans on my CIBIL report from a BNPL app I never used. The legal team here helped me navigate the dispute process efficiently. My report is finally clean and my score is rising again.'
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
        'name': 'Credit Score Drop Analysis',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '4500',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-score-drop" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-score-drop" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

            {/* Hero Section */}
            <section
                className="relative text-white pt-24 pb-16 px-4 md:px-8 overflow-hidden"
                style={{
                    background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #0F172A 0%, #1E293B 100%)',
                    minHeight: '45vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
                        Why Does My Credit Score Drop Even Though I Pay on Time?<br />
                        <span className="text-blue-300">The 2026 Hidden Truths Revealed</span>
                    </h1>
                    <p className="text-lg md:text-xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                        Frustrated by falling CIBIL numbers? Discover the secret factors beyond timely payments that dictate your financial freedom.
                    </p>
                    <div className="flex justify-center">
                        <Link
                            href="/contact"
                            className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Fix My Credit Score Now
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
                                <Link href="/" className="inline-flex items-center hover:text-blue-600 font-medium">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ml-1 font-medium text-gray-400 md:ml-2">
                                        Why Does My Credit Score Drop Even Though I Pay on Time
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

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

            {/* 3-Column Layout */}
            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Analysis Index</h3>
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

                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100 text-gray-700">

                            <h2 id="introduction" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-20 leading-tight">The Paradox of the Punctual Payer</h2>
                            <p className="leading-relaxed mb-6 font-light">
                                Checking your credit score only to see a downward trend despite a perfect repayment record is incredibly demotivating. You have never missed an EMI, you pay your credit card bills in full, and yet, the numbers keep slipping. By 2026, credit algorithms have evolved far beyond simple payment checks.
                            </p>
                            <p className="leading-relaxed mb-6 font-light">
                                With the Reserve Bank of India (RBI) mandating weekly credit data reporting as of late 2025, your financial profile is now being evaluated in near real-time. This means that even a minor spike in credit card usage or a single application for a "Buy Now Pay Later" service can reflect on your CIBIL report within days. Understanding why your score is dropping requires a deep dive into the hidden mechanics of modern credit scoring.
                            </p>

                            <h2 id="credit-utilization-ratio" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-20">1. The Silent Killer: High Credit Utilization Ratio (CUR)</h2>
                            <p className="leading-relaxed mb-6">
                                High CUR is the leading cause of sudden score drops for on-time payers. Even if you pay your bill in full every month, the "Statement Date" reporting can trip you up. Most banks report your balance to the credit bureau on the day your statement is generated, not after you pay it.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl mb-8 border border-blue-100 font-light text-sm">
                                <h4 className="text-blue-900 font-bold mb-3">The Statement Date Trap</h4>
                                <p className="text-blue-800 leading-relaxed mb-4">
                                    If your credit limit is ₹1,00,000 and you spend ₹80,000 during the month, your statement shows 80% utilization. If the bank reports this to CIBIL on the 15th, but you pay the bill on the 20th, the bureau only sees that you used 80% of your limit. 
                                </p>
                                <p className="text-blue-800 leading-relaxed">
                                    Algorithms flag any utilization above 30% as "Credit Hungry" behavior. Repeated exposure above 50% can lead to a drastic drop of 30 to 50 points in a single reporting cycle.
                                </p>
                            </div>

                            <h2 id="hard-inquiries" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-20">2. The Impact of Recent Hard Inquiries</h2>
                            <p className="leading-relaxed mb-6">
                                Every time you apply for a credit card, a personal loan, or even a postpaid mobile connection, the lender performs a "Hard Inquiry." While a single inquiry might only shave off a few points, multiple inquiries in a short window are viewed as a sign of financial distress.
                            </p>
                            <p className="leading-relaxed mb-6 font-light">
                                Space out your credit applications by at least six months. If you are shopping for a home loan, try to keep all inquiries within a 14-day window; some modern algorithms may group these as a single search for the best rate, though this is not always guaranteed in the Indian context.
                            </p>

                            <h2 id="credit-mix" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-20">3. A Weak or Unbalanced Credit Mix</h2>
                            <p className="leading-relaxed mb-6 font-light">
                                A healthy credit score requires a mix of "Secured" and "Unsecured" credit. Secured loans (Home or Car) are backed by collateral and are viewed as more stable. Unsecured credit (Cards and Personal Loans) carries more risk for the lender.
                            </p>
                            <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100 italic text-sm">
                                <p className="text-gray-700">
                                    "I paid off my only car loan and my score dropped by 15 points. Why?" This happens because paying off a secured loan often leaves you with only unsecured credit (cards). This shift in the "Credit Mix" can cause a temporary dip as the algorithm recalibrates your profile risk.
                                </p>
                            </div>

                            <h2 id="closing-old-accounts" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-20">4. Closing Old Credit Accounts</h2>
                            <p className="leading-relaxed mb-6">
                                Your "Average Age of Accounts" (AAoA) is a major factor in your score. Lenders love to see a long history of responsible credit management. When you close an old credit card that you no longer use, you are effectively wiping out years of positive history.
                            </p>
                            <p className="leading-relaxed mb-6 font-light">
                                Additionally, closing a card reduces your total available credit across all cards. If you have three cards with ₹1 Lakh limits each, your total limit is ₹3 Lakh. If you use ₹50,000, your CUR is 16%. If you close one card, your total limit drops to ₹2 Lakh, and that same ₹50,000 spend now represents a 25% utilization ratio.
                            </p>

                            <h2 id="systemic-errors" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-20 font-bold">5. Reporting Errors and Financial Discrepancies</h2>
                            <p className="leading-relaxed mb-6 font-light">
                                Data reporting in India is not perfect. Banks often make clerical errors that can wreck your score. Common issues include:
                            </p>
                            <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-700 font-light">
                                <li><strong>Incorrect "Days Past Due" (DPD):</strong> A payment you made on time being marked as late by the bank.</li>
                                <li><strong>Duplicate Accounts:</strong> A single loan being reported twice, making you look twice as indebted.</li>
                                <li><strong>Identity Errors:</strong> Someone else's loan appearing on your PAN due to name or address similarities.</li>
                                <li><strong>Open Status on Closed Loans:</strong> Loans that you have fully paid off still showing as "Active" or "Post-Settled."</li>
                            </ul>

                            <h2 id="bnpl-impact" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-20">6. The Dangers of BNPL and P2P Lending</h2>
                            <p className="leading-relaxed mb-6">
                                The rise of Buy Now Pay Later (BNPL) apps like Simpl, LazyPay, and Amazon Pay Later has introduced a new variable. Many of these services report to credit bureaus as "Consumer Durable Loans" or "Personal Loans." 
                            </p>
                            <p className="leading-relaxed mb-6 font-light">
                                Every time you click "Pay Later" at checkout, you might be triggering a microlending event. Having 10 active small loans for pizza or clothes makes you look like a high-risk borrower to major banks, even if every single one is paid back immediately.
                            </p>

                            <div id="rectification" className="mt-12 p-8 bg-blue-900 text-white rounded-3xl shadow-xl">
                                <h3 className="text-2xl font-bold mb-6 italic">The 2026 Rectification Roadmap</h3>
                                <div className="space-y-6 text-sm font-light">
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                                        <p><strong>Audit Your Report:</strong> Download your official CIBIL report monthly. Look for any mention of "Settled" or "Late Payment" that you do not recognize.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                                        <p><strong>Practice "Pre-Payment":</strong> Pay your credit card bill 2-3 days BEFORE the statement is generated. This ensures the reported balance is near zero.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                                        <p><strong>The One-Year Rule:</strong> Never apply for more than two credit products in a rolling 12-month period if your score is currently below 750.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                                        <p><strong>Dispute Promptly:</strong> Use the CIBIL online dispute portal for any errors. Under 2026 RBI rules, banks have 30 days to resolve the issue or face penalties.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                                        <p><strong>Secure Your Mix:</strong> If you only have credit cards, consider a small secured loan (like a fixed-deposit backed credit card) to balance your credit mix.</p>
                                    </div>
                                </div>
                            </div>

                            <h2 id="reviews" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-14">Client Success Stories</h2>
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

                            <h2 id="faqs" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-20">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Stop Your Score From Falling</h3>
                                <p className="text-blue-800 mb-6">Our experts specialize in auditing credit reports and fixing reporting errors. Win back your financial freedom today.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get a Professional Audit
                                </Link>
                            </div>

                        </article>
                    </main>

                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Fix Your Score</h4>
                                <p className="text-sm text-gray-600 mb-6">Let Amalegal and CredSettle fix your credit report errors.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Start My Fix
                                </Link>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Analysis</h4>
                                <nav className="space-y-3">
                                    <Link href="/how-to-get-800-credit-score-in-india" className="block text-sm text-blue-600 hover:underline">Get 800+ Score</Link>
                                    <Link href="/is-loan-settlement-a-good-option" className="block text-sm text-blue-600 hover:underline">Is Settlement Good?</Link>
                                    <Link href="/how-to-check-active-loan-on-your-name-in-india-stepbystep-guide" className="block text-sm text-blue-600 hover:underline">Audit Your PAN</Link>
                                </nav>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
