'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface FAQ {
    question: string;
    answer: string;
}

interface Review {
    name: string;
    location: string;
    stars: number;
    comment: string;
}

interface WhatIsLineOfCreditClientProps {
    faqs: FAQ[];
    reviews: Review[];
}

export default function WhatIsLineOfCreditClient({ faqs, reviews }: WhatIsLineOfCreditClientProps) {
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
        { id: 'overview', label: 'Overview' },
        { id: 'core-difference', label: 'The Core Difference' },
        { id: 'how-it-works', label: 'How LOC Works in India' },
        { id: 'revolving-nature', label: 'Revolving Nature' },
        { id: 'pros-and-cons', label: 'Pros and Cons' },
        { id: 'when-is-superior', label: 'When LOC is Superior' },
        { id: 'real-life-scenarios', label: 'Real Life Scenarios' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Verdict' },
    ];

    return (
        <>
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
                        What is a Line of Credit vs a Traditional Loan?<br />
                        <span className="text-blue-300">Decoding the Credit Puzzle</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Borrowers frequently confuse personal loans with a line of credit, resulting in paying interest on funds they have not used. Understand the revolving nature of LOCs and borrow smartly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Free Financial Advice
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
                                        What is a Line of Credit
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
                        className={`text-sm font-bold px-4 py-2 rounded-lg transition-all flex-shrink-0 ${activeId === link.id
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Credit Manual</h3>
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

                            <h2 id="overview" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: Overview and Decoding the Credit Puzzle</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Millions of borrowers in India struggle to choose the right financial product when they need funds. The default option for many is a traditional term loan, commonly referred to as a personal loan. However, this lack of financial literacy causes borrowers to confuse personal loans with overdrafts or lines of credit, resulting in them paying interest on funds they have not even used.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The financial landscape is shifting rapidly. With the advent of digital lending apps and modern banking facilities, a Line of Credit (LOC) has emerged as a powerful, flexible alternative. The core issue lies in understanding the "gap" in borrowing: when you take a traditional loan, you borrow a lump sum and pay interest on the entire amount from day one. In contrast, an LOC operates like a flexible reservoir of funds. You draw only what you need and pay interest strictly on the withdrawn amount.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold text-green-900 uppercase tracking-tighter border-y border-green-100 py-4">
                                The golden rule of borrowing: Never pay interest on money that is sitting idle in your savings account.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In this comprehensive guide, we will dissect the fundamental difference between line of credit and personal loan products in the Indian context. We will explain the revolving nature of LOCs, analyze how interest is calculated, and detail the precise scenarios where a line of credit is statistically and practically superior to a term loan.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Whether you are a small business owner navigating irregular cash flows, a salaried individual managing unpredictable medical expenses, or someone planning a home renovation, this guide will empower you to make an informed, cost effective borrowing decision. If you find yourself trapped in multiple term loans that you cannot afford, you might want to consult a <Link href="/best-lawyer-for-personal-loans" className="text-blue-600 underline">personal loan defense lawyer</Link> to understand your settlement options.
                            </p>

                            <h2 id="core-difference" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 2: The Core Difference</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To truly understand how does line of credit work in India, we must first examine the mechanics of a traditional personal loan. When you are approved for a personal loan of 5 lakhs, the bank deposits the entire 5 lakhs into your account immediately. Your Equated Monthly Installment (EMI) begins the very next month, calculated on the full 5 lakh principal, regardless of whether you spent the money or kept it in your bank.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A Line of Credit flips this model entirely. When a bank approves an LOC of 5 lakhs for you, they do not deposit the money into your account. Instead, they assign you a "credit limit" of 5 lakhs. You can choose to withdraw 50 thousand today, 1 lakh next month, and nothing the month after. The defining feature is that you are only charged interest on the 50 thousand you withdrew, not the remaining 4.5 lakhs of your limit.
                            </p>

                            {/* Visual Element 1: Comparison Table */}
                            <div className="overflow-x-auto mb-10 border border-gray-200 rounded-xl shadow-sm">
                                <table className="min-w-full bg-white text-left text-sm">
                                    <thead className="bg-gray-50 text-gray-700 border-b border-gray-200">
                                        <tr>
                                            <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Feature</th>
                                            <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs text-blue-700 border-l border-gray-200">Line of Credit (LOC)</th>
                                            <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs text-red-700 border-l border-gray-200">Traditional Personal Loan</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-6 py-4 font-semibold text-gray-900">Disbursement</td>
                                            <td className="px-6 py-4 text-gray-700 border-l border-gray-200">Flexible. Withdraw only what you need, when you need it.</td>
                                            <td className="px-6 py-4 text-gray-700 border-l border-gray-200">Lump sum. Entire amount is transferred upfront.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 bg-gray-50/50">
                                            <td className="px-6 py-4 font-semibold text-gray-900">Interest Calculation</td>
                                            <td className="px-6 py-4 text-gray-700 border-l border-gray-200">Charged solely on the utilized amount.</td>
                                            <td className="px-6 py-4 text-gray-700 border-l border-gray-200">Charged on the entire principal amount from day one.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-6 py-4 font-semibold text-gray-900">Repayment</td>
                                            <td className="px-6 py-4 text-gray-700 border-l border-gray-200">Flexible. Pay minimum dues or full balance to restore limit.</td>
                                            <td className="px-6 py-4 text-gray-700 border-l border-gray-200">Fixed monthly EMIs for a specific tenure.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 bg-gray-50/50">
                                            <td className="px-6 py-4 font-semibold text-gray-900">Reusability</td>
                                            <td className="px-6 py-4 text-gray-700 border-l border-gray-200">Revolving. Limit restores as you repay.</td>
                                            <td className="px-6 py-4 text-gray-700 border-l border-gray-200">One time use. Must apply for a new loan to get more funds.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-10">
                                The table above clearly illustrates the massive flexibility advantage an LOC offers. If your expenses are staggered over several months, an LOC prevents the unnecessary interest leakage that occurs with a lump sum personal loan.
                            </p>

                            <h2 id="how-it-works" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 3: How Does a Line of Credit Work in India?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In India, the line of credit ecosystem has expanded beyond traditional bank overdrafts. Fintech companies, NBFCs, and major banks now offer unsecured digital LOCs directly through mobile applications. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The process typically involves an initial credit assessment based on your CIBIL score, income statements, and banking history. Once approved, the lender sets a maximum credit limit. You are given a dedicated virtual account or a card linked to this limit. Whenever you make a transfer from this limit to your personal savings account, the interest meter starts running. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                The billing cycle usually runs monthly. At the end of the month, you receive a statement showing your utilized principal and the accrued interest. You are required to pay a "Minimum Amount Due" which typically covers the interest and a small fraction of the principal. However, smart borrowers know that to truly benefit, you should repay the principal as quickly as possible. If you are struggling with multiple debt obligations, you might consider reading about <Link href="/debt-settlement-vs-debt-consolidation" className="text-blue-600 underline">debt settlement vs debt consolidation</Link> to restructure your liabilities.
                            </p>

                            {/* Visual Element 2: Alert Banner */}
                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-10 shadow-sm flex items-start gap-4">
                                <div className="text-red-600 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-red-800 font-bold text-lg mb-2 uppercase tracking-wide">Critical Warning: The Revolving Trap</h4>
                                    <p className="text-red-700 font-medium">
                                        Do not treat a Line of Credit like free money. If you only pay the "Minimum Amount Due" each month, you will remain perpetually in debt, paying exorbitant amounts of interest over time. An LOC is a cash flow management tool, not a substitute for permanent income. Always aim to clear the utilized principal rapidly.
                                    </p>
                                </div>
                            </div>

                            <h2 id="revolving-nature" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 4: The Revolving Nature</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The term "revolving credit" is fundamental to understanding an LOC. It means the credit limit replenishes as you make repayments. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Imagine a water tank with a capacity of 1000 liters. This represents your approved limit. If you draw 300 liters, you have 700 liters left. If you pour 100 liters back into the tank, your available capacity increases back to 800 liters. You can continuously draw and replenish the tank without ever needing to build a new one. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                This is vastly superior to a term loan, which operates like a one way street. Once you repay a term loan, the relationship with the borrowed funds ends. If you need money again, you must submit new documents, undergo a fresh CIBIL inquiry, and wait for processing. The revolving nature of an LOC provides peace of mind; it acts as an emergency fund that is always on standby.
                            </p>

                            <h2 id="pros-and-cons" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 5: Pros and Cons: Evaluating Your Options</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While a line of credit offers unparalleled flexibility, it is not without drawbacks. It is essential to weigh the advantages against the potential pitfalls before applying.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <div className="bg-white p-8 rounded-3xl border border-green-100 shadow-lg relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-green-100 rounded-bl-full z-0"></div>
                                    <h4 className="text-xl font-bold mb-4 text-green-800 relative z-10">Advantages of LOC</h4>
                                    <ul className="space-y-3 font-light text-gray-700 relative z-10 list-disc pl-5">
                                        <li>Pay interest strictly on utilized funds.</li>
                                        <li>Continuous access to funds without reapplying.</li>
                                        <li>Flexible repayment options tailored to your cash flow.</li>
                                        <li>Acts as a robust emergency financial buffer.</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-8 rounded-3xl border border-red-100 shadow-lg relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-red-100 rounded-bl-full z-0"></div>
                                    <h4 className="text-xl font-bold mb-4 text-red-800 relative z-10">Disadvantages of LOC</h4>
                                    <ul className="space-y-3 font-light text-gray-700 relative z-10 list-disc pl-5">
                                        <li>Interest rates can be slightly higher than traditional secured loans.</li>
                                        <li>Risk of overspending due to constant access to funds.</li>
                                        <li>Variable interest rates might increase your borrowing cost.</li>
                                        <li>Potential annual maintenance or processing fees.</li>
                                    </ul>
                                </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-10">
                                If you lack financial discipline, the easy access to revolving credit can lead to a severe debt trap. Maintaining a good credit profile is paramount, and if you have faltered in the past, learning <Link href="/how-to-improve-cibil-score" className="text-blue-600 underline">how to improve CIBIL score</Link> should be your first priority before seeking a new LOC.
                            </p>

                            <h2 id="when-is-superior" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 6: When is a Line of Credit Superior?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A personal loan is the correct choice when you have a singular, fixed expense. For example, if you are buying a used car for exactly 4 lakhs, you need exactly 4 lakhs right now. In this scenario, the structured EMI of a personal loan forces discipline and provides a clear end date for your debt.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Conversely, a line of credit is statistically superior in scenarios characterized by financial uncertainty. 
                            </p>

                            {/* Visual Element 3: Checklist */}
                            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-10 shadow-inner">
                                <h4 className="text-2xl font-bold text-blue-900 mb-6 text-center uppercase tracking-wide">Interactive Checklist: Is an LOC Right For You?</h4>
                                <div className="space-y-4">
                                    <label className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm cursor-pointer hover:bg-gray-50 transition-colors border border-transparent hover:border-blue-300">
                                        <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                                        <div>
                                            <span className="font-bold text-gray-900 block">Staggered Expenses</span>
                                            <span className="text-sm text-gray-600 font-light">Are your costs spread out over several months (like a wedding or construction)?</span>
                                        </div>
                                    </label>
                                    <label className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm cursor-pointer hover:bg-gray-50 transition-colors border border-transparent hover:border-blue-300">
                                        <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                                        <div>
                                            <span className="font-bold text-gray-900 block">Unpredictable Cash Flow</span>
                                            <span className="text-sm text-gray-600 font-light">Are you a freelancer or business owner with irregular monthly income?</span>
                                        </div>
                                    </label>
                                    <label className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm cursor-pointer hover:bg-gray-50 transition-colors border border-transparent hover:border-blue-300">
                                        <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                                        <div>
                                            <span className="font-bold text-gray-900 block">Emergency Buffer Setup</span>
                                            <span className="text-sm text-gray-600 font-light">Do you want a safety net for sudden medical or family emergencies without paying upfront interest?</span>
                                        </div>
                                    </label>
                                </div>
                                <p className="text-center mt-6 text-sm text-blue-800 font-semibold italic">If you checked two or more boxes, a Line of Credit is significantly more advantageous for your financial profile.</p>
                            </div>

                            <h2 id="real-life-scenarios" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 7: Real Life Scenarios</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Let us examine the "Home Renovation" scenario. You estimate a budget of 6 lakhs, but contractor delays and material cost fluctuations mean you will only need 2 lakhs in the first month, 3 lakhs in the third month, and 1 lakh in the fifth month.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you take a personal loan of 6 lakhs, the bank disburses the full amount immediately. You pay interest on 6 lakhs from day one, even though 4 lakhs are sitting completely unused in your savings account for months.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                If you utilize a line of credit of 6 lakhs, you only withdraw 2 lakhs initially. For the first two months, you strictly pay interest on that 2 lakhs. You save substantial amounts of money by avoiding interest on the unwithdrawn 4 lakhs. This precision borrowing prevents financial leakage and optimizes your cash flow.
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

                            <h2 id="conclusion" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6 mt-12">Final Verdict: Borrowing Smartly</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The choice between a line of credit and a personal loan dictates the trajectory of your financial health. By understanding the difference between line of credit and personal loan structures, you can stop the silent leakage of wealth caused by paying interest on idle funds.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A Line of Credit represents modern financial agility. It is the ultimate tool for borrowers who face unpredictable expenses and require a standby financial reservoir. However, it demands discipline to ensure you are consistently reducing the principal rather than just floating on minimum payments.
                            </p>
                            
                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Master Your Finances.</h3>
                                <p className="text-blue-800 mb-6">If you find yourself overwhelmed by complex financial products or trapped in a cycle of high interest debt, our experts can guide you toward resolution and financial freedom.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Expert Financial Guidance
                                </Link>
                            </div>

                            <div className="mt-12 text-[0.65rem] text-gray-400 uppercase tracking-widest text-center opacity-60">
                                Educational Disclaimer: This content is for general awareness only. Credit products vary significantly between lenders. Always review the detailed terms and conditions, interest rates, and processing fees of any financial product before applying.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Trapped in Debt?</h4>
                                <p className="text-sm text-gray-600 mb-6">If multiple personal loans and credit lines have become unmanageable, we can help you restructure and settle.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Explore Debt Relief
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v Professional Legal Advice</p>
                                    <p>v Custom Settlement Strategies</p>
                                    <p>v Harassment Protection</p>
                                    <p>v Confidential Assessments</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-personal-loans" className="block text-sm text-blue-600 hover:underline">Personal Loan Default Help</Link>
                                    <Link href="/debt-settlement-vs-debt-consolidation" className="block text-sm text-blue-600 hover:underline">Consolidation vs Settlement</Link>
                                    <Link href="/how-to-improve-cibil-score" className="block text-sm text-blue-600 hover:underline">Credit Score Recovery</Link>
                                    <Link href="/best-lawyer-for-bank-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">Bank Recovery Defense</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
