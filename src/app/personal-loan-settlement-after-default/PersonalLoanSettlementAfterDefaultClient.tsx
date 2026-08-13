'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function PersonalLoanSettlementAfterDefaultClient() {
    const [activeId, setActiveId] = useState<string>('');
    const [isMobile, setIsMobile] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
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

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const navLinks = [
        { id: 'the-panic-of-default', label: 'The Panic of Default' },
        { id: 'what-happens-after-default', label: 'What Happens After Default' },
        { id: 'why-banks-settle', label: 'Why Banks Want to Settle' },
        { id: 'the-90-day-window', label: 'The 90-Day Window' },
        { id: 'bank-settlement-offers', label: 'Bank Settlement Offers' },
        { id: 'case-study-1', label: 'Case Study: 15 Lakh Loan' },
        { id: 'case-study-2', label: 'Case Study: Multiple Defaults' },
        { id: 'how-to-negotiate', label: 'How to Negotiate' },
        { id: 'the-role-of-arcs', label: 'The Role of ARCs' },
        { id: 'cibil-score-impact', label: 'CIBIL Score Impact' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' }
    ];

    const faqs = [
        {
            question: "Is it possible to settle personal loan after default?",
            answer: "Yes, it is highly possible. In fact, banks are usually more willing to negotiate a settlement after a formal default because the debt is classified as a Non-Performing Asset (NPA). This classification forces the bank to make financial provisions, giving them a strong incentive to recover whatever cash they can through a settlement."
        },
        {
            question: "What happens after personal loan default?",
            answer: "After a personal loan default, your account is marked as an NPA, and the bank will initiate formal recovery proceedings. This includes sending legal notices, deploying recovery agents, and eventually, they may offer a settlement or sell the debt to an Asset Reconstruction Company (ARC). Your CIBIL score will also drop significantly."
        },
        {
            question: "When can I expect a bank settlement offer after 3 missed EMIs?",
            answer: "A bank settlement offer after 3 missed EMIs typically arrives during the 90-day to 180-day window. Once the account becomes an NPA at 90 days, the bank's recovery department takes over. They often start floating settlement options in this period to avoid long legal battles or selling the debt at a massive loss."
        },
        {
            question: "Will a default completely ruin my financial future?",
            answer: "No. While a default severely impacts your credit score in the short term, it does not mean your financial life is over. Many borrowers settle their debts, close their accounts, and slowly rebuild their credit over a few years using secured credit cards or smaller loans."
        },
        {
            question: "Can I go to jail for a personal loan default?",
            answer: "No, a personal loan default is a civil matter, not a criminal offense. You cannot go to jail simply for being unable to repay an unsecured personal loan. However, if you provided fraudulent documents or bounced a security cheque (Section 138 of the Negotiable Instruments Act), there could be criminal implications."
        },
        {
            question: "How much waiver can I expect in a settlement?",
            answer: "Waivers typically range from 30 percent to 60 percent of the total outstanding amount, depending on the bank's internal policies, the age of the default, your provable financial hardship, and your negotiation strategy."
        },
        {
            question: "Should I accept the first settlement offer?",
            answer: "Rarely. The first bank settlement offer after 3 missed EMIs is usually a starting point for negotiations. Banks expect some back-and-forth. It is advisable to counter-offer based on your actual repayment capacity and financial hardship documentation."
        },
        {
            question: "What is an Asset Reconstruction Company (ARC)?",
            answer: "An ARC is a specialized financial institution that buys bad debts (NPAs) from banks at a discounted price and then attempts to recover the money from the borrowers. You generally want to settle your loan before it is sold to an ARC, as ARCs can be more aggressive in their recovery efforts."
        },
        {
            question: "How long does a settled status stay on my CIBIL report?",
            answer: "A 'Settled' status remains on your CIBIL report for up to seven years. It indicates that the loan was closed for less than the full amount owed. While it lowers your score, it is much better than having an open, growing defaulted account."
        },
        {
            question: "Can a settlement agency help me secure a better deal?",
            answer: "Yes, professional settlement agencies understand the internal workings of bank recovery departments. They can shield you from harassment, handle the negotiations logically rather than emotionally, and often secure better waiver percentages than an individual could on their own."
        }
    ];

    const reviews = [
        { name: "Vikram Sharma", location: "Delhi", stars: 5, comment: "I was terrified after receiving my default notice. CredSettle explained the 90-day window and helped me settle my 8 Lakh loan for just 3.5 Lakh. They completely changed my perspective." },
        { name: "Priya Rajan", location: "Bangalore", stars: 5, comment: "The harassment from recovery agents was unbearable after I missed 4 EMIs. This team stepped in, stopped the calls, and negotiated a fair settlement directly with the bank." },
        { name: "Anand Gupta", location: "Mumbai", stars: 4, comment: "I never knew a default could actually be leverage for a settlement. The strategic approach outlined here works perfectly. Highly recommended." }
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
        'name': 'CredSettle Personal Loan Default Resolution',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '920',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-default-settlement" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-default-settlement" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-300 text-sm font-semibold mb-8 backdrop-blur-md border border-red-500/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        Post-Default Resolution Strategy
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Personal Loan Settlement <br />
                        <span className="text-blue-300">After Default</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-normal">
                        A default is not the end of your financial life. It is the trigger that opens the 90-day window for strategic bank settlements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Explore Settlement Options
                        </Link>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Section */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1440px] mx-auto px-4 py-4 font-sans">
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
                                        Personal Loan Default Strategy
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
                        className={`text-sm font-bold px-4 py-2 rounded-full transition-all flex-shrink-0 ${activeId === link.id
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
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Resolution Guide</h3>
                            <nav className="space-y-1 text-sm">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={`block py-2 px-4 transition-all ${activeId === link.id
                                            ? 'bg-blue-600 text-white font-semibold rounded-full shadow-md'
                                            : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-full'
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

                            <h2 id="the-panic-of-default" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: The Panic of Default vs. The Reality of Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a borrower misses three consecutive Equated Monthly Installments (EMIs), the situation formally escalates. A formal default notice arrives in the mail, recovery agents start calling relentlessly, and the borrower assumes their financial life is over. The pressure is immense, and the instinct is usually panic. People often take drastic measures, such as borrowing from unregulated lenders or liquidating essential assets, just to avoid the stigma of a default.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                However, what most borrowers do not realize is that a formal default is actually the very trigger that makes the bank willing to negotiate. A default forces the bank into a corner. They must classify your account as a Non-Performing Asset (NPA), which negatively impacts their own financial reporting. This page is designed to shift your mindset from panic to strategy. We will explain how to settle personal loan after default and leverage the crucial 90-day window where the bank is most desperate to recover cash before selling the debt to an Asset Reconstruction Company (ARC).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Understanding the mechanics of a bank settlement offer after 3 missed EMIs will give you the upper hand. You are no longer just a struggling borrower; you are a negotiator entering a structured financial transaction. The bank wants cash, and you want closure. The goal is to find the mutually beneficial middle ground.
                            </p>

                            <h2 id="what-happens-after-default" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 2: What Happens After Personal Loan Default</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To negotiate effectively, you must understand the exact timeline of events. What happens after personal loan default is a highly standardized process governed by banking regulations. It is a machine running on a strict schedule.
                            </p>
                            
                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-2xl"></div>
                                <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                                    </svg>
                                    The Default Timeline:
                                </h4>
                                <ul className="space-y-3 text-red-800 font-normal list-disc pl-5 m-0 text-sm">
                                    <li><strong>0 to 30 Days:</strong> The account is classified as Special Mention Account 0 (SMA-0). You will receive mild reminder calls and SMS notifications. The focus is on gentle reminders.</li>
                                    <li><strong>31 to 60 Days:</strong> The account moves to SMA-1. The calls become more frequent and slightly more aggressive. Penalty charges begin accumulating rapidly on the outstanding balance.</li>
                                    <li><strong>61 to 90 Days:</strong> The account hits SMA-2. This is the danger zone. The bank knows a formal default is imminent. Telecallers are highly aggressive, and field agents may visit your registered address.</li>
                                    <li><strong>Day 91: The NPA Classification:</strong> This is the turning point. The account officially becomes a Non-Performing Asset. The bank must report this to the regulator and make capital provisions. Formal legal notices are dispatched.</li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                When the account becomes an NPA, the original branch or lending team usually loses control of the file. It is transferred to a specialized recovery department. This department has different KPIs (Key Performance Indicators). Their goal is not to preserve the customer relationship; their goal is purely cash recovery. This structural shift is precisely why settling becomes a realistic option only after a formal default.
                            </p>

                            <h2 id="why-banks-settle" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 3: Why Banks Want to Settle Personal Loan After Default</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A common misconception is that banks hold all the power and will pursue a borrower to the ends of the earth for every single rupee. In reality, banks are pragmatic institutions driven by mathematics and regulatory requirements. They want to settle personal loan after default for several critical reasons.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                First, maintaining an NPA on their books is expensive. The Reserve Bank of India mandates that banks must set aside capital provisions for bad loans. This means money that could be lent out to earn interest is instead locked up as a buffer against your default. The longer your account remains an NPA, the higher the provision required, eventually reaching 100 percent of the loan value.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Second, litigation is costly and time-consuming. Filing civil suits for unsecured personal loans is a slow process in the Indian judicial system. The legal fees, administrative overhead, and the sheer time required make full legal recovery economically unviable for most standard personal loans. A bank settlement offer after 3 missed EMIs guarantees immediate cash flow, which is vastly preferable to a decade-long court battle with an uncertain outcome.
                            </p>

                            <h2 id="the-90-day-window" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 4: The 90-Day Post-Default Window Explained</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most crucial phase in the debt resolution process is the 90-day window immediately following the NPA classification (roughly months 4, 5, and 6 of non-payment). This is the golden period for negotiation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                During this window, the bank has accepted that full recovery is unlikely, but they still own the debt. They have not yet decided to sell it off at a deep discount to an Asset Reconstruction Company. The recovery managers are under immense pressure to show results in the current financial quarter. They have the authority to approve significant waivers if they believe a lump-sum payment is on the table.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold bg-blue-50 text-blue-900 p-8 rounded-3xl shadow-md border border-blue-100">
                                Strategic Insight: If you can demonstrate genuine financial hardship (job loss, medical emergency, business failure) and offer a reasonable lump sum during this specific 90-day window, you have the highest probability of securing a waiver of 40 percent to 60 percent on the outstanding balance. Timing your negotiation to align with the bank's quarter-end targets can further improve the outcome.
                            </p>

                            <h2 id="bank-settlement-offers" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 5: Bank Settlement Offer After 3 Missed EMIs</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You should not accept the very first bank settlement offer after 3 missed EMIs. The initial offer is almost always a testing maneuver by the recovery team. They might offer a modest 20 percent waiver on the accumulated penal interest, hoping you are desperate enough to accept it.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Settlement negotiation is a structured dance. When the first offer arrives, it signals that the bank is ready to deal. Your response must be carefully calibrated. You must acknowledge the offer but reject it on the grounds of severe affordability constraints. You need to counter-offer with a figure that is lower than your actual maximum capacity, allowing room for upward negotiation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, never make verbal agreements. A settlement is only valid when it is formalized in a written Settlement Letter or No Dues Certificate (NDC) issued on the bank's official letterhead. This document must clearly state the agreed settlement amount, the payment timeline, and the explicit condition that upon payment, the account will be marked as closed and no further legal action will be pursued.
                            </p>

                            <h2 id="case-study-1" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 6: Case Study 1: Resolving a 15 Lakh Loan Default</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Consider the case of Rajesh, an IT professional based in Pune. Rajesh lost his job during corporate restructuring and subsequently defaulted on a 15 Lakh personal loan. For three months, he tried to dodge calls, hoping he would find a job before the bank took severe action. By month four, his account was declared an NPA, and field agents began visiting his residence.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Instead of panicking, Rajesh sought professional settlement guidance. He gathered documentary evidence of his termination and prolonged unemployment. When the bank initiated contact in month five, they offered a settlement at 12 Lakh. Rajesh's representatives countered with a detailed hardship letter and an offer of 4 Lakh, arguing that bankruptcy was the only other alternative.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Over the next three weeks, intense negotiations took place. The bank demanded 8 Lakh; Rajesh held firm at 5 Lakh, citing funds borrowed from relatives. Eventually, leveraging the pressure of the financial quarter-end, the bank agreed to settle the entire 15 Lakh outstanding for a single lump-sum payment of 5.5 Lakh. Rajesh received his official Settlement Letter, paid the amount directly to his loan account, and permanently closed a chapter that had caused him immense anxiety. This demonstrates exactly how to settle personal loan after default effectively.
                            </p>

                            <h2 id="case-study-2" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 7: Case Study 2: Managing Credit Card and Personal Loan Defaults</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Neha, a small business owner in Delhi, faced a cascading financial crisis when her supply chain collapsed. She defaulted on two credit cards and an 8 Lakh personal loan simultaneously. The combined pressure from three different recovery agencies was overwhelming. What happens after personal loan default when combined with credit card defaults is a multiplier effect of harassment.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Neha's strategy required prioritization. Credit card debts, being revolving and carrying exorbitant interest rates (up to 40 percent annually), accumulate faster. Her advisors instructed her to legally halt the harassment through cease-and-desist notices while building a settlement corpus.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                She tackled the credit cards first during their 90-day window, securing waivers of nearly 65 percent due to the heavily inflated interest components. For the personal loan, the bank was initially stubborn, offering a bank settlement offer after 3 missed EMIs of only a 15 percent waiver. By holding out until month six, maintaining documented communication regarding her business failure, and showing the resolution of her other debts, she convinced the personal loan department that a 50 percent waiver (4 Lakh) was the maximum recoverable amount. The systematic, emotionless approach saved her business from total collapse.
                            </p>

                            <h2 id="how-to-negotiate" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 8: How to Negotiate a Favorable Bank Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Negotiating a settlement requires discipline and documentation. You cannot simply demand a waiver because you do not want to pay. You must prove that you cannot pay.
                            </p>
                            <ul className="space-y-4 mb-10 text-gray-700">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                        <span className="font-bold text-blue-600 text-sm">1</span>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-gray-900 mt-0">Prepare Your Hardship Dossier</h5>
                                        <p className="text-sm text-gray-600 m-0">Gather termination letters, medical bills, or business loss statements. Banks need a paper trail to justify the waiver to their auditors.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                        <span className="font-bold text-blue-600 text-sm">2</span>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-gray-900 mt-0">Communicate in Writing</h5>
                                        <p className="text-sm text-gray-600 m-0">Shift conversations from aggressive phone calls to formal emails. This creates a legal record of your willingness to resolve the issue and the bank's responses.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                        <span className="font-bold text-blue-600 text-sm">3</span>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-gray-900 mt-0">Be Patient but Persistent</h5>
                                        <p className="text-sm text-gray-600 m-0">The bank will try to wear you down. Stick to your budget. If you can only afford 40 percent of the outstanding amount, do not agree to 60 percent just to stop the calls. Use legal tools to stop harassment instead.</p>
                                    </div>
                                </li>
                            </ul>

                            <h2 id="the-role-of-arcs" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 9: The Role of ARCs and Why You Should Settle Before They Arrive</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you fail to settle during the initial post-default window (usually within the first 12 months), the bank will likely write off the debt from their primary ledger and sell it to an Asset Reconstruction Company (ARC) for a fraction of its value.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once an ARC purchases your debt, the dynamics change. ARCs are specialized recovery engines. Because they bought your debt cheaply, they have massive profit margins to play with, but they are also highly aggressive. They use sophisticated legal and field tactics to extract maximum value. While you can still settle with an ARC, dealing with the original bank during the 90-day window is vastly preferable. Banks care about their public reputation and regulatory compliance far more than ARCs do.
                            </p>

                            <h2 id="cibil-score-impact" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 10: The Impact on Your CIBIL Score and Financial Future</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is vital to address the elephant in the room: the CIBIL score. What happens after personal loan default is a severe drop in your credit rating. When you successfully execute a settlement, the bank will report the account status to credit bureaus as 'Settled' rather than 'Closed'.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A 'Settled' status indicates that you did not pay the full original amount. This will prevent you from obtaining standard unsecured credit (like new personal loans or credit cards) for a few years. However, this is a necessary strategic sacrifice. An open, unresolved default will actively drag your score down every single month and expose you to continuous legal risk. A 'Settled' status stops the bleeding. It caps the damage.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Once the account is settled, you can begin the rebuilding phase. By using secured credit cards (backed by a fixed deposit) and maintaining perfect payment histories, you can gradually push your score back into the healthy 750+ range over 36 to 48 months. A settlement is not the end of your financial journey; it is the difficult but necessary reset button that allows you to start over without the crushing weight of unpayable debt.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Client Success and Feedback</h2>
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
                                        <p className="text-gray-700 mb-4 leading-relaxed font-normal text-sm m-0">{review.comment}</p>
                                        <div className="flex justify-between items-center text-xs font-bold text-blue-900 mt-4">
                                            <span>{review.name}</span>
                                            <span className="opacity-60">{review.location}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-4 mb-12">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                                        <button 
                                            onClick={() => toggleFaq(index)}
                                            className="w-full text-left p-4 focus:outline-none flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                                        >
                                            <h3 className="font-bold text-lg text-gray-900 pr-4 m-0">{faq.question}</h3>
                                            <svg 
                                                className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <div 
                                            className={`transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-[500px] opacity-100 p-4 border-t border-gray-100' : 'max-h-0 opacity-0 overflow-hidden px-4'}`}
                                        >
                                            <p className="text-gray-600 leading-relaxed font-normal m-0">{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4 mt-0">Execute Your Settlement Strategy.</h3>
                                <p className="text-blue-800 mb-6 font-normal">Do not let the 90-day window close. Our experts will analyze your default profile and negotiate directly with the bank to secure maximum waivers.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-300 transform hover:-translate-y-1"
                                >
                                    Start Your Free Strategy Call
                                </Link>
                            </div>
                        </article>
                    </main>

                    {/* Right Column: Cards */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24 self-start">
                        <div className="space-y-6">
                            {/* Card 1: CTA */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center flex flex-col items-center">
                                <h3 className="font-black text-gray-900 text-xl mb-3 mt-2 tracking-tight">Facing Harassment?</h3>
                                <p className="text-gray-600 text-sm mb-5 leading-relaxed px-1">
                                    We can send an immediate Legal Notice to stop agents from visiting your house today.
                                </p>
                                <Link
                                    href="/contact"
                                    className="w-full bg-[#1b5df3] hover:bg-blue-700 text-white font-bold py-3 px-3 rounded-xl transition-colors shadow-md text-center text-sm"
                                >
                                    Stop the Agents
                                </Link>
                                <div className="mt-4 space-y-1 text-xs text-gray-500 w-full text-center font-medium">
                                    <p>&#10003; 24hr Legal Response</p>
                                    <p>&#10003; RBI Compliance Audit</p>
                                    <p>&#10003; FIR Support</p>
                                </div>
                            </div>

                            {/* Card 2: Links */}
                            <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100 shadow-sm mt-4">
                                <h4 className="font-black text-gray-900 text-lg border-b border-gray-900 pb-2 mb-4">Related Expertise</h4>
                                <ul className="space-y-4 text-left font-medium">
                                    <li>
                                        <Link href="/are-there-legal-implecations-or-non-payment-during-debt-settlement" className="text-blue-600 hover:text-blue-800 text-sm transition-colors block">
                                            Legal Implications of Non Payment
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/compare-debt-settlement-fees-and-success-rate" className="text-blue-600 hover:text-blue-800 text-sm transition-colors block">
                                            Compare Settlement Fees
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/is-loan-settlement-a-good-option-for-borrowers" className="text-blue-600 hover:text-blue-800 text-sm transition-colors block">
                                            Is Settlement a Good Option?
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-improve-cibil-score" className="text-blue-600 hover:text-blue-800 text-sm transition-colors block">
                                            Improve Your CIBIL Score
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
