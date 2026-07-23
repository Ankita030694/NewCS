'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function InterestRateRecalculateClient() {
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
        { id: 'the-great-misconception', label: 'The Misconception' },
        { id: 'math-of-prepayment', label: 'Math of Prepayment' },
        { id: 'daily-reducing-balance', label: 'Daily Reducing Balance' },
        { id: 'flat-rate-vs-reducing', label: 'Flat Rate vs Reducing' },
        { id: 'emi-vs-tenure-reduction', label: 'EMI vs Tenure Reduction' },
        { id: 'rbi-prepayment-guidelines', label: 'RBI Guidelines' },
        { id: 'prepayment-checklist', label: 'Prepayment Checklist' },
        { id: 'credit-score-impact', label: 'Credit Score Impact' },
        { id: 'case-studies', label: 'Case Studies' },
        { id: 'reviews', label: 'Client Feedback' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Verdict' },
    ];

    const faqs = [
        {
            question: "Does my interest rate percentage drop when I make a part payment?",
            answer: "No. The contractual interest rate percentage remains exactly the same. What changes is the principal base upon which that interest is calculated. Since the principal is smaller, the total interest you pay in absolute terms drops significantly."
        },
        {
            question: "How does the daily reducing balance method work for prepayments?",
            answer: "In the daily reducing balance method, interest is calculated on the outstanding principal at the end of every single day. The very day your part payment is credited, your principal decreases, and from the next day, interest is calculated on this new, lower amount."
        },
        {
            question: "Should I choose to reduce my EMI or my loan tenure after a prepayment?",
            answer: "Reducing the loan tenure while keeping the EMI constant yields the highest interest savings over the life of the loan. Reducing the EMI provides immediate monthly cash flow relief but results in higher total interest paid compared to the tenure reduction option."
        },
        {
            question: "Are there charges for making a part payment on my loan?",
            answer: "It depends on the loan type and the lender. Floating rate home loans usually have no prepayment penalties under RBI guidelines. However, fixed rate loans and unsecured personal loans often attract part payment charges ranging from 2% to 5% of the prepaid amount."
        },
        {
            question: "When is the best time to make a loan prepayment?",
            answer: "The best time to prepay is early in the loan tenure. During the initial years, the interest component of your EMI is at its highest. Making a part payment then drastically reduces the principal, leading to massive interest savings over the remaining years."
        }
    ];

    const reviews = [
        {
            name: 'Rahul Deshmukh',
            location: 'Pune',
            stars: 5,
            comment: 'I always thought my interest rate was supposed to change after I made a part payment. CredSettle explained the daily reducing balance method to me clearly. By choosing to reduce my tenure instead of my EMI, I ended up saving over 4 Lakhs in interest on my home loan.'
        },
        {
            name: 'Priya Sharma',
            location: 'Delhi',
            stars: 5,
            comment: 'I was very confused when the bank charged me a fee for prepaying my personal loan. After reading this guide, I finally understood the difference between floating and fixed rate rules. It helped me negotiate a waiver on the foreclosure charges.'
        }
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
                        How Is the Interest Rate Recalculated After a Prepayment?<br />
                        <span className="text-blue-300">The Ultimate Amortization Guide</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Demystifying the daily reducing balance method, EMI restructuring, and the mathematical truth behind loan part payments. Learn how reducing your principal changes everything.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Expert Loan Guidance
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
                                        Interest Rate Recalculation After Prepayment
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Prepayment Guide</h3>
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

                            <h2 id="the-great-misconception" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: The Great Misconception About Prepayment</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Millions of borrowers across India make the incredibly smart financial decision to prepay a portion of their loans every year. Whether it is a Diwali bonus, a tax refund, or savings accumulated over time, injecting a lump sum into your loan account is one of the fastest ways to achieve financial freedom. However, there is a fundamental gap in how most borrowers understand the aftermath of this transaction. They constantly ask, "Why hasn't my interest rate dropped?"
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The root of this confusion lies in the terminology. When we talk about the "Interest Rate," we are referring to the contractual percentage assigned by the bank, for example, 9.5% per annum. When you make a part payment, this percentage does absolutely not change. The bank has not suddenly decided that you are a lower risk and therefore deserve an 8% interest rate. What actually changes is the <strong>principal balance</strong> upon which that 9.5% is calculated.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold text-green-900 uppercase tracking-tighter border-y border-green-100 py-4">
                                Your interest rate remains the same. Your interest burden plummets.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                This extensive guide, written with legal and financial precision, is designed to completely demystify the mathematics of loan part payments. We will break down exactly how your bank rebuilds your amortization schedule the moment your part payment clears. If you want to dive deeper into the mechanics of part payments themselves, you can read our comprehensive guide on <Link href="/loan-partial-payment" className="text-blue-600 hover:underline">making a loan partial payment</Link>.
                            </p>

                            <h2 id="math-of-prepayment" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 2: The Core Mathematics of Loan Prepayment</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To understand how your loan is recalculated, you have to look at the anatomy of an Equated Monthly Installment (EMI). Every single EMI you pay is divided into two parts: the Principal Component and the Interest Component. During the first few years of a loan, especially a long-tenure home loan, a massive portion of your EMI goes strictly towards paying the interest, while only a tiny fraction actually reduces your outstanding loan amount.
                            </p>
                            
                            {/* Visual Element 1: Alert Banner */}
                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl mb-10 shadow-sm relative">
                                <div className="absolute top-4 right-4 text-yellow-500 opacity-20">
                                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold text-yellow-800 mb-2">Crucial Financial Principle</h4>
                                <p className="text-yellow-900 font-medium">When you make a part prepayment, 100% of that money goes directly towards reducing your principal balance. There is no interest deduction from a part payment. It is a direct strike at the heart of your debt.</p>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                                Let us look at a practical mathematical example. Assume you have an outstanding principal of Rs. 50,00,000 on a home loan at an interest rate of 9% per annum. The interest you are charged for that specific month is calculated as follows: (50,00,000 * 9%) / 12 = Rs. 37,500. If your EMI is Rs. 45,000, then out of that EMI, 37,500 pays the interest and only 7,500 reduces the principal. The new principal becomes Rs. 49,92,500.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Now, suppose you make a part payment of Rs. 5,00,000. Your outstanding principal immediately drops to Rs. 44,92,500. For the very next month, the interest calculation will be: (44,92,500 * 9%) / 12 = Rs. 33,693. Simply by making that part payment, your monthly interest burden dropped by nearly Rs. 4,000. Over 20 years, that translates to an astronomical amount of savings.
                            </p>

                            <h2 id="daily-reducing-balance" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 3: The Daily Reducing Balance Method</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Almost all modern loans in India, especially from regulated banks and major NBFCs, operate on the <strong>Daily Reducing Balance Method</strong>. This is the most borrower-friendly method of interest calculation because it respects the exact day you deposit your money.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Under this method, the bank calculates your interest at the end of every single day based on whatever the principal balance is at that exact moment. At the end of the month, they add up the daily interest amounts, and that becomes the interest component of your upcoming EMI.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 font-medium">
                                Why is this important for part payments? It means that you do not have to wait for your next EMI cycle to see the benefits. If your EMI is due on the 5th of the month, and you make a part payment on the 15th, from the 16th onwards, the bank will start calculating interest on the newly reduced principal. Every day you delay your part payment is a day you are paying unnecessary interest to the bank. 
                            </p>

                            <h2 id="flat-rate-vs-reducing" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 4: Flat Rate vs Reducing Balance: The Trap</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While the daily reducing balance method is standard for home loans, many personal loans, auto loans, and particularly microfinance loans are still occasionally sold using a "Flat Interest Rate." It is vital to know the difference because part prepaying a flat rate loan is often financially pointless.
                            </p>

                            {/* Visual Element 2: Comparison Table */}
                            <div className="overflow-x-auto mb-10 rounded-2xl shadow-lg border border-gray-200">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-blue-900 text-white">
                                            <th className="py-4 px-6 font-bold text-lg border-b border-blue-800">Feature</th>
                                            <th className="py-4 px-6 font-bold text-lg border-b border-blue-800 border-l border-blue-800">Reducing Balance Method</th>
                                            <th className="py-4 px-6 font-bold text-lg border-b border-blue-800 border-l border-blue-800">Flat Rate Method</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white text-gray-800">
                                        <tr className="hover:bg-blue-50 transition-colors">
                                            <td className="py-4 px-6 border-b border-gray-200 font-semibold text-blue-900">Interest Calculation Base</td>
                                            <td className="py-4 px-6 border-b border-gray-200 border-l">Only on the outstanding principal balance.</td>
                                            <td className="py-4 px-6 border-b border-gray-200 border-l">On the total original loan amount, forever.</td>
                                        </tr>
                                        <tr className="hover:bg-blue-50 transition-colors bg-gray-50">
                                            <td className="py-4 px-6 border-b border-gray-200 font-semibold text-blue-900">Effect of Prepayment</td>
                                            <td className="py-4 px-6 border-b border-gray-200 border-l">Immediate reduction in future interest liability.</td>
                                            <td className="py-4 px-6 border-b border-gray-200 border-l">Often zero benefit. Interest is already fixed.</td>
                                        </tr>
                                        <tr className="hover:bg-blue-50 transition-colors">
                                            <td className="py-4 px-6 border-b border-gray-200 font-semibold text-blue-900">Actual Cost (APR)</td>
                                            <td className="py-4 px-6 border-b border-gray-200 border-l">Matches the quoted rate.</td>
                                            <td className="py-4 px-6 border-b border-gray-200 border-l">Almost double the quoted rate in reality.</td>
                                        </tr>
                                        <tr className="hover:bg-blue-50 transition-colors bg-gray-50">
                                            <td className="py-4 px-6 font-semibold text-blue-900">Verdict for Prepayment</td>
                                            <td className="py-4 px-6 border-l">Highly recommended.</td>
                                            <td className="py-4 px-6 border-l">Usually mathematically useless.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-10 font-light">
                                If you are considering prepaying a personal loan, you must first verify if it is on a reducing balance. If you are also worried about hidden fees associated with this process, be sure to read our detailed breakdown on <Link href="/foreclosure-and-part-prepayment-charges-on-personal-loan" className="text-blue-600 hover:underline">foreclosure and part prepayment charges</Link> before transferring any funds.
                            </p>

                            <h2 id="emi-vs-tenure-reduction" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 5: The Ultimate Choice: Reduce EMI or Reduce Tenure?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                After you make a part payment and your principal balance drops, the bank must restructure your amortization schedule. Because the debt is smaller, the math must balance out. The bank will typically offer you two choices:
                            </p>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight uppercase italic">Option A: Reduce the Loan Tenure (The Wealth Builder)</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you select this option, you continue paying the exact same EMI amount every month. However, because your principal is smaller, a much larger chunk of that EMI goes towards paying off the principal rather than interest. As a result, your loan finishes much faster. A 20-year loan might suddenly finish in 15 years. This option guarantees the absolute highest interest savings over the lifetime of the loan. It is the financially optimal choice.
                            </p>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight uppercase italic">Option B: Reduce the EMI (The Cash Flow Reliever)</h3>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                If you select this option, the bank keeps your original end date (tenure) exactly the same, but recalculates the monthly payment required to hit that date with the new, lower principal. Your EMI will drop. While this feels great because you have more cash in your pocket every month, you are stretching a smaller loan over a long period, which means the bank continues to accumulate interest over many years. Your overall interest savings will be significantly lower.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-10 font-bold bg-green-900 text-white p-8 rounded-3xl shadow-xl">
                                CredSettle Golden Rule: Always choose to reduce the tenure if you can comfortably afford your current EMI. Only choose EMI reduction if you are facing severe monthly budget constraints or anticipating a job loss.
                            </p>

                            <h2 id="rbi-prepayment-guidelines" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 6: RBI Guidelines on Prepayment Penalties</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the past, banks penalized borrowers heavily for prepaying loans because the bank lost out on projected interest income. However, the Reserve Bank of India has introduced extremely pro-consumer regulations over the last decade.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For individual borrowers with <strong>Floating Rate Loans</strong> (such as most home loans), the RBI has strictly banned all foreclosure and part prepayment penalties. You can prepay Rs. 100 or Rs. 10 Lakhs, and the bank cannot legally charge you a single rupee in penalty fees.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 font-medium">
                                However, this rule does not apply uniformly. If you have a Fixed Rate Loan, a Business Loan, or a Personal Loan, banks are legally allowed to charge a prepayment penalty. This penalty is usually calculated as a percentage (typically 2% to 5%) of the amount being prepaid. You must read your loan agreement carefully to identify this specific clause before making a massive transfer.
                            </p>

                            <h2 id="prepayment-checklist" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 7: The Strategic Prepayment Checklist</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Executing a part payment requires procedural accuracy. If you do it wrong, the money might just sit in a suspense account without actually reducing your principal. Here is our step-by-step checklist.
                            </p>

                            {/* Visual Element 3: Checklist */}
                            <div className="bg-white p-8 rounded-3xl border border-green-200 shadow-xl mb-10 relative">
                                <div className="absolute -top-4 -right-4 bg-blue-700 text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-lg">Action Plan</div>
                                <ul className="space-y-4 text-gray-800">
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span><strong className="text-gray-900">Step 1: Check Minimum Limits.</strong> Many banks require part payments to be at least equivalent to 2 or 3 EMIs. Verify this in your loan portal.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span><strong className="text-gray-900">Step 2: Declare Intent.</strong> Do not just transfer money to your loan account number. You must use the specific "Part Payment" utility in net banking or submit a written request at the branch, clearly specifying if you want tenure or EMI reduction.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span><strong className="text-gray-900">Step 3: Monitor the Recalculation.</strong> After the payment is debited, check your loan account within 72 hours. Your principal balance should drop immediately.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span><strong className="text-gray-900">Step 4: Request the New Schedule.</strong> Always download the new amortization schedule from the bank to visually confirm that the math aligns with your expectations.</span>
                                    </li>
                                </ul>
                            </div>

                            <h2 id="credit-score-impact" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 8: Impact on Your Credit Score (CIBIL)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Borrowers often wonder if paying off debt early will negatively affect their credit score, since the bank loses interest. The reality is quite the opposite. When you make a part payment, the reduced outstanding balance is reported to credit bureaus like CIBIL at the end of the month.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                This immediately lowers your overall credit utilization and debt-to-income ratio, which are highly positive indicators of financial health. It signals to future lenders that you possess strong repayment capacity and financial discipline. If you are curious about the nuanced effects of early payments, review our article on the <Link href="/prepaying-loan-impact-on-credit-score" className="text-blue-600 hover:underline">impact of prepaying a loan on your credit score</Link>.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                There is one minor caveat: if you completely close a very old credit account (foreclosure), your average age of credit history might drop slightly, causing a temporary dip in your score. However, a part payment does not close the account, so this risk is eliminated entirely.
                            </p>

                            <h2 id="case-studies" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 9: The Mathematics of Time: Case Studies</h2>
                            <div className="space-y-8 mb-12">
                                <div className="bg-blue-50 p-10 rounded-[3rem] border border-blue-100 shadow-xl border-l-8 border-blue-700">
                                    <h4 className="text-2xl font-black text-blue-900 mb-4 uppercase tracking-tight italic">Case Study 1: The Early Prepayment</h4>
                                    <p className="text-gray-800 mb-4 font-light">
                                        Rahul takes a 20-year home loan of Rs. 50 Lakhs at 8.5%. His EMI is Rs. 43,391. Total interest payable over 20 years is Rs. 54 Lakhs. After just 3 years, Rahul receives a massive bonus and prepays Rs. 5 Lakhs.
                                    </p>
                                    <p className="text-gray-800 font-bold italic">
                                        The Result: By choosing to keep his EMI the same and reducing his tenure, the loan finishes 4.5 years earlier. He saves an astonishing Rs. 16.5 Lakhs in interest over the life of the loan.
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-10 rounded-[3rem] border border-blue-100 shadow-xl border-l-8 border-blue-700">
                                    <h4 className="text-2xl font-black text-blue-900 mb-4 uppercase tracking-tight italic">Case Study 2: The Late Prepayment</h4>
                                    <p className="text-gray-800 mb-4 font-light">
                                        Anita has the same loan parameters. However, she waits until year 15 to make a Rs. 5 Lakh prepayment. By this time, the majority of the interest on her loan has already been paid to the bank (front-loaded interest).
                                    </p>
                                    <p className="text-gray-800 font-bold italic">
                                        The Result: Her tenure reduces by about 1.5 years, and her interest savings are less than Rs. 1.5 Lakhs. While still beneficial, the mathematical impact is a fraction of what Rahul achieved by prepaying early.
                                    </p>
                                </div>
                            </div>

                            <h2 id="conclusion" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Conclusion: Control Your Debt Architecture</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Understanding how your interest is recalculated is the key to mastering your debt. The interest rate percentage is merely a multiplier; the principal is the actual engine driving your debt cost. By aggressively attacking the principal through smart, well-timed part payments, you dismantle the bank's profit mechanism and secure your own financial future.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 text-blue-900 font-medium">
                                Remember to always verify the terms of your specific loan agreement, calculate potential prepayment penalties, and invariably choose tenure reduction over EMI reduction if you wish to build long-term wealth. If you need help analyzing your loan structure or negotiating with your lender, reach out to the financial experts at CredSettle today.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Client Feedback and Experiences</h2>
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

                            <div className="mt-12 text-[0.65rem] text-gray-400 uppercase tracking-widest text-center opacity-60">
                                Educational Disclaimer: This content is for financial literacy and general awareness only. Mathematical outcomes vary based on individual loan contracts, prevailing interest rates, and lender-specific policies. Always verify calculations with your bank before executing large transfers.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Need Loan Restructuring?</h4>
                                <p className="text-sm text-gray-600 mb-6">Let our experts analyze your amortization schedule to maximize your savings.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Get Expert Analysis
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v Mathematical Verification</p>
                                    <p>v Penalty Clause Review</p>
                                    <p>v Optimal Restructuring</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise</h4>
                                <nav className="space-y-3">
                                    <Link href="/prepaying-loan-impact-on-credit-score" className="block text-sm text-blue-600 hover:underline">Credit Score Impact</Link>
                                    <Link href="/foreclosure-and-part-prepayment-charges-on-personal-loan" className="block text-sm text-blue-600 hover:underline">Foreclosure Charges</Link>
                                    <Link href="/loan-partial-payment" className="block text-sm text-blue-600 hover:underline">Partial Payment Rules</Link>
                                    <Link href="/receive-documents-after-loan-pre-closure" className="block text-sm text-blue-600 hover:underline">Post-Closure Documents</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
