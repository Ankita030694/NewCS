'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function PersonalLoanSettlementVsDebtConsolidationClient() {
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
        { id: 'introduction', label: 'Introduction' },
        { id: 'what-is-loan-settlement', label: 'What is Loan Settlement?' },
        { id: 'what-is-debt-consolidation', label: 'What is Consolidation?' },
        { id: 'key-differences', label: 'Key Differences' },
        { id: 'pros-and-cons-settlement', label: 'Pros & Cons of Settlement' },
        { id: 'pros-and-cons-consolidation', label: 'Pros & Cons of Consolidation' },
        { id: 'impact-on-cibil', label: 'Impact on CIBIL Score' },
        { id: 'case-study-one', label: 'Case Study: Debt Trap' },
        { id: 'case-study-two', label: 'Case Study: Consolidation' },
        { id: 'making-the-choice', label: 'Making the Right Choice' },
        { id: 'faqs', label: 'FAQs' }
    ];

    const faqs = [
        {
            question: "Is loan settlement better than debt consolidation?",
            answer: "It depends strictly on your financial capacity. If you have completely lost your income or face severe financial hardship and cannot afford monthly payments, loan settlement is often the only realistic path to become debt free. If you have a stable income and just want lower interest rates, debt consolidation is the better choice to protect your CIBIL score."
        },
        {
            question: "Can I consolidate multiple personal loans into one?",
            answer: "Yes, you can consolidate multiple personal loans if your CIBIL score is high enough to qualify for a new loan. A new lender will pay off your existing multiple personal loans and issue you a single new loan with one monthly EMI. However, if you have already defaulted on payments, banks will reject your consolidation application."
        },
        {
            question: "How much does a personal loan settlement affect CIBIL?",
            answer: "A personal loan settlement will drop your CIBIL score significantly, often by 75 to 100 points, and the 'Settled' status will remain on your credit report for up to seven years. This makes getting new unsecured loans very difficult in the near future."
        },
        {
            question: "Will debt consolidation improve my credit score?",
            answer: "Debt consolidation can improve your credit score over time because you are replacing multiple high interest debts with a single loan and making consistent on time payments. It reduces your credit utilization ratio if you are consolidating credit card debt."
        },
        {
            question: "Can I get a consolidation loan with a bad CIBIL score?",
            answer: "It is extremely difficult. Most top tier banks require a CIBIL score of 750 or above for an unsecured debt consolidation loan. If your score is below 650, you might only qualify for secured loans (like loan against property) or you may have to explore debt settlement instead."
        },
        {
            question: "Do I need a lawyer for loan settlement?",
            answer: "While you do not legally require a lawyer, having professional legal representation or a structured debt relief agency helps protect you from recovery agent harassment and ensures the bank provides a legally binding settlement letter before you make any payments."
        },
        {
            question: "What happens if I stop paying my consolidation loan?",
            answer: "Stopping payments on a consolidation loan is treated as a standard loan default. It will severely damage your credit score, attract late fees and penal interest, and the bank will initiate standard legal recovery procedures against you."
        },
        {
            question: "How long does the loan settlement process take?",
            answer: "The negotiation process typically takes between three to six months. Banks usually only offer good settlement waivers after an account has remained in the Non Performing Asset (NPA) category for over 90 days."
        },
        {
            question: "Are there hidden fees in debt consolidation?",
            answer: "Yes. When you take a new consolidation loan, you must account for processing fees (usually 1% to 3% of the loan amount), foreclosure charges on your old loans (up to 4%), and potential stamp duty charges. You must calculate if the interest savings outweigh these fees."
        },
        {
            question: "Is there a government scheme for debt consolidation?",
            answer: "Currently, there is no direct government scheme for unsecured personal debt consolidation for retail borrowers in India. Relief schemes are generally limited to the agriculture sector or specific MSME business categories."
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
        'name': 'Personal Loan Settlement vs Debt Consolidation Guide',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '910',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-settlement-vs-consolidation" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-settlement-vs-consolidation" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        Debt Relief Options Guide
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Personal Loan Settlement <br />
                        <span className="text-blue-300">vs Debt Consolidation</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-normal">
                        Compare your options carefully. Learn the differences, pros, cons, and CIBIL impacts to decide which path is right for your financial future.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Compare Your Debt Relief Options Today
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
                                        Settlement vs Consolidation
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
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Content</h3>
                            <nav className="space-y-1 text-sm">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={`block py-1.5 px-3 rounded-full transition-all ${activeId === link.id
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: Facing the Debt Mountain</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Being trapped under multiple high interest loans can feel suffocating. Millions of Indian borrowers face a monthly struggle just to cover minimum payments on their credit cards and personal loans. When the financial pressure becomes too heavy, two primary solutions often come up in discussion: personal loan settlement and debt consolidation. But which one is the right choice for you?
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Choosing between settling your debts and consolidating them is not a simple coin toss. The decision has profound, long lasting effects on your financial health, your future borrowing capacity, and your immediate peace of mind. Both options exist to help borrowers get out of a debt trap, but they operate on entirely different principles and cater to different types of financial situations.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This comprehensive guide breaks down the core mechanics of both options. We will explore how they work, the major differences between them, and the specific impact each path has on your CIBIL score. By understanding the pros and cons of loan settlement versus debt consolidation, you will be equipped to make an informed, strategic decision that aligns with your current financial reality and your long term goals.
                            </p>

                            <h2 id="what-is-loan-settlement" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">What is Personal Loan Settlement?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Personal loan settlement is a negotiation process where a borrower, who is in severe financial distress and completely unable to pay their outstanding loan balance, reaches an agreement with their bank or lender. The agreement stipulates that the borrower will pay a lump sum amount that is significantly lower than the total outstanding debt. In return, the bank agrees to accept this reduced amount as full payment and closes the account.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Banks do not offer settlement lightly. The option typically only becomes available after the borrower has missed multiple consecutive payments, usually for a period exceeding 90 days, at which point the loan account is classified as a Non Performing Asset. The lender must be convinced that the borrower is facing genuine financial hardship, such as job loss, severe medical emergencies, or complete business failure, and that recovering the full amount is practically impossible.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The waiver percentage, meaning the amount of debt forgiven by the bank, varies greatly depending on the specific circumstances. It is not uncommon for banks to waive late fees, penal interest, and a portion of the principal amount. However, this financial relief comes at a steep cost to the borrower's credit profile. The account is reported to credit bureaus like CIBIL as 'Settled' rather than 'Closed', which acts as a major red flag for future lenders.
                            </p>

                            <h2 id="what-is-debt-consolidation" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">What is Debt Consolidation?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Debt consolidation is a financial restructuring strategy where a borrower takes out a single new loan to pay off multiple existing debts. The primary goal is to combine various high interest debts, such as credit card balances and multiple small personal loans, into one manageable monthly payment, ideally at a lower overall interest rate.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Unlike debt settlement, consolidation requires the borrower to repay the entire principal amount owed. There is no debt forgiveness. You are simply moving the debt from multiple lenders to a single new lender. To qualify for a consolidation loan with favorable terms, the borrower must have a strong credit profile, a high CIBIL score, and a stable source of income. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The benefits of this approach are organizational and financial. Instead of tracking multiple due dates and paying varying interest rates across five different credit cards, the borrower only has to make one payment per month. If the new loan has a lower interest rate than the average rate of the previous debts, the borrower can save a significant amount of money on interest charges over time. Furthermore, because the debts are being paid in full, this strategy protects and can even improve the borrower's credit score over the long term.
                            </p>

                            <h2 id="key-differences" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Key Differences: Settlement vs Consolidation</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Understanding the fundamental differences between these two paths is crucial. They are designed for completely different financial scenarios.
                            </p>

                            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10 shadow-sm">
                                <h4 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">At a Glance Comparison</h4>
                                <ul className="space-y-4">
                                    <li className="flex flex-col md:flex-row gap-4 border-b border-gray-100 pb-4">
                                        <div className="md:w-1/3 font-bold text-blue-900">Total Amount Paid</div>
                                        <div className="md:w-2/3 text-gray-700"><strong>Settlement:</strong> You pay a reduced amount, often significantly less than what you owe. <strong>Consolidation:</strong> You pay 100 percent of the original principal amount, plus interest on the new loan.</div>
                                    </li>
                                    <li className="flex flex-col md:flex-row gap-4 border-b border-gray-100 pb-4">
                                        <div className="md:w-1/3 font-bold text-blue-900">Credit Score Impact</div>
                                        <div className="md:w-2/3 text-gray-700"><strong>Settlement:</strong> Severely damages your CIBIL score. Leaves a 'Settled' remark for up to seven years. <strong>Consolidation:</strong> Generally protects and can improve your score by demonstrating consistent, on time payments.</div>
                                    </li>
                                    <li className="flex flex-col md:flex-row gap-4 border-b border-gray-100 pb-4">
                                        <div className="md:w-1/3 font-bold text-blue-900">Eligibility Criteria</div>
                                        <div className="md:w-2/3 text-gray-700"><strong>Settlement:</strong> Requires demonstrating severe financial hardship and usually an account in default status. <strong>Consolidation:</strong> Requires a good CIBIL score, stable income, and a strong repayment history to qualify for a new loan.</div>
                                    </li>
                                    <li className="flex flex-col md:flex-row gap-4 border-b border-gray-100 pb-4">
                                        <div className="md:w-1/3 font-bold text-blue-900">Timeframe for Relief</div>
                                        <div className="md:w-2/3 text-gray-700"><strong>Settlement:</strong> Can be resolved in three to six months once negotiations begin, provided funds are ready. <strong>Consolidation:</strong> Requires committing to a new loan term, which could take anywhere from two to five years to pay off completely.</div>
                                    </li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                The choice fundamentally boils down to capability. If you have the income to eventually pay off your debt but just need better terms and a simpler structure, consolidation is the answer. If you have absolutely no means to pay the full amount due to a major life event, settlement is the emergency exit strategy.
                            </p>

                            <h2 id="pros-and-cons-settlement" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Pros and Cons of Loan Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Taking the path of loan settlement is a serious decision with heavy consequences. Let us examine the benefits and the drawbacks in detail.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <div className="p-6 bg-green-50 border border-green-100 rounded-xl shadow-sm">
                                    <h5 className="font-bold text-green-900 mb-4 text-lg">Pros of Settlement</h5>
                                    <ul className="space-y-3 text-green-800 text-sm list-disc pl-5">
                                        <li><strong>Significant Debt Reduction:</strong> You can eliminate a large portion of your total debt, saving you a substantial amount of money compared to paying it off in full.</li>
                                        <li><strong>Avoid Bankruptcy:</strong> It provides a legal way to clear unmanageable debt without going through the formal and public process of declaring insolvency.</li>
                                        <li><strong>Stop Recovery Harassment:</strong> Once a settlement agreement is reached and paid, the aggressive collection calls and recovery agent visits permanently stop.</li>
                                        <li><strong>Faster Debt Exit:</strong> If you have the lump sum ready, you can clear the debt entirely within a few months, rather than struggling for years.</li>
                                    </ul>
                                </div>
                                <div className="p-6 bg-red-50 border border-red-100 rounded-xl shadow-sm">
                                    <h5 className="font-bold text-red-900 mb-4 text-lg">Cons of Settlement</h5>
                                    <ul className="space-y-3 text-red-800 text-sm list-disc pl-5">
                                        <li><strong>Severe Credit Damage:</strong> Your CIBIL score will plummet. The 'Settled' status makes it nearly impossible to get new credit cards, personal loans, or home loans for several years.</li>
                                        <li><strong>Requires a Lump Sum:</strong> You need to have a significant amount of cash available upfront to offer the bank during negotiations.</li>
                                        <li><strong>Tax Implications:</strong> In some jurisdictions, the forgiven debt amount may be considered taxable income by the tax authorities.</li>
                                        <li><strong>No Guarantee of Success:</strong> The bank is under no legal obligation to accept your settlement offer. They may refuse and pursue legal action instead.</li>
                                    </ul>
                                </div>
                            </div>

                            <h2 id="pros-and-cons-consolidation" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Pros and Cons of Debt Consolidation</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Consolidation is generally the preferred route for those who want to protect their financial reputation, but it is not without its risks.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <div className="p-6 bg-green-50 border border-green-100 rounded-xl shadow-sm">
                                    <h5 className="font-bold text-green-900 mb-4 text-lg">Pros of Consolidation</h5>
                                    <ul className="space-y-3 text-green-800 text-sm list-disc pl-5">
                                        <li><strong>Simplified Finances:</strong> You only have to worry about one monthly payment and one due date, vastly reducing the chance of accidental missed payments.</li>
                                        <li><strong>Potential Interest Savings:</strong> If you secure a lower interest rate on the new loan, you can save thousands of rupees in interest charges over the life of the loan.</li>
                                        <li><strong>Protects CIBIL Score:</strong> Because you are paying the debt in full according to the terms, your credit score remains intact and can even improve over time.</li>
                                        <li><strong>Lower Monthly EMI:</strong> By extending the tenure of the new loan, you can reduce your immediate monthly cash outflow, providing breathing room in your budget.</li>
                                    </ul>
                                </div>
                                <div className="p-6 bg-red-50 border border-red-100 rounded-xl shadow-sm">
                                    <h5 className="font-bold text-red-900 mb-4 text-lg">Cons of Consolidation</h5>
                                    <ul className="space-y-3 text-red-800 text-sm list-disc pl-5">
                                        <li><strong>Strict Eligibility:</strong> You must have a good credit score and stable income to get approved. If you are already struggling, you will likely be rejected.</li>
                                        <li><strong>Risk of More Debt:</strong> If you consolidate your credit card balances but continue to use the cards for new purchases, you will end up in twice as much debt.</li>
                                        <li><strong>Longer Debt Timeline:</strong> Lowering the monthly EMI usually means extending the loan tenure, which keeps you in debt for a longer total period.</li>
                                        <li><strong>Hidden Fees:</strong> Processing fees, prepayment penalties on old loans, and other charges can eat into your expected interest savings.</li>
                                    </ul>
                                </div>
                            </div>

                            <h2 id="impact-on-cibil" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">The Crucial Impact on CIBIL Score</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most significant difference between these two strategies lies in how they affect your creditworthiness. Your CIBIL score is a reflection of your reliability as a borrower, and the credit bureaus treat settlement and consolidation very differently.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When you pursue <strong>debt consolidation</strong>, the new lender pays off your old accounts. Those old accounts are reported as 'Closed' with a zero balance. This is a positive indicator. You then have a new, single loan account. As long as you make every single EMI payment on time for this new loan, your CIBIL score will steadily rise. Consolidation demonstrates responsible financial management and a commitment to honoring your debts in full. It is the path of credit preservation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold bg-red-50 text-red-900 p-8 rounded-3xl shadow-md border border-red-100">
                                Conversely, a loan settlement is fundamentally a breach of the original contract. When the bank accepts a lesser amount, they report the account status to CIBIL as 'Settled'. This status is a glaring warning sign to all future lenders. It essentially tells them, 'This borrower encountered difficulties and could not repay what they borrowed.' As a result, your CIBIL score drops immediately, and the 'Settled' remark stays on your report for up to seven years. During this period, securing new credit will be extremely challenging, and if approved, it will be at exorbitant interest rates.
                            </p>

                            <h2 id="case-study-one" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Case Study 1: The Debt Trap Emergency</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Consider the case of Amit, a mid level manager in Bangalore. Amit had accumulated 15 Lakh in personal loans and credit card debt during a family medical emergency. His monthly EMI obligations were 45,000 rupees. Then, tragedy struck again: Amit lost his job due to company restructuring.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For four months, Amit survived on savings but missed all his loan payments. His accounts turned into NPAs, and the harassment from recovery agents began. He attempted to apply for a debt consolidation loan to lower his EMIs, but every bank rejected him instantly due to his ruined CIBIL score and lack of current income. Consolidation was mathematically impossible.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Amit reached out to a debt relief agency. They analyzed his hardship and advised him to pursue a loan settlement. Using the remaining funds from his provident fund withdrawal (amounting to 5 Lakh), the agency negotiated aggressively with his lenders over the next five months. They successfully settled the entire 15 Lakh debt for a one time payment of 5.5 Lakh. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>The Result:</strong> Amit's CIBIL score crashed, and he cannot get a loan for the next few years. However, he is completely debt free. The recovery harassment stopped, and he can now focus entirely on finding a new job and rebuilding his life from scratch without the crushing weight of unpayable debt. For Amit, settlement was a necessary financial rescue operation.
                            </p>

                            <h2 id="case-study-two" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Case Study 2: The Consolidation Strategy</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Now let us look at Priya, an IT professional in Hyderabad. Priya earns a solid salary of 85,000 rupees per month. Over three years, she had taken two personal loans for home renovation and travel, and maxed out three credit cards. Her total outstanding debt was 12 Lakh, spread across five different lenders.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Priya was not defaulting. She never missed a payment. However, she was paying a massive 35,000 rupees every month just in minimum payments and high interest charges, particularly on the credit cards which charged 36 percent annually. She felt she was making no progress on the principal amount. Her CIBIL score was a healthy 760.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Instead of defaulting and seeking settlement, Priya approached her primary bank for a Debt Consolidation Loan. Because her credit score was excellent and her income was stable, the bank approved a new 12 Lakh loan at an interest rate of 11.5 percent with a tenure of five years. The bank disbursed the funds directly to clear her credit cards and old personal loans.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>The Result:</strong> Priya now has only one loan to manage. Her new monthly EMI dropped to 26,000 rupees, freeing up 9,000 rupees in her monthly budget. Because she is paying a much lower interest rate, more of her money goes toward the principal. Her credit score remained strong and even improved slightly after a few months of consistent payments. For Priya, consolidation was the perfect tool for financial optimization.
                            </p>

                            <h2 id="making-the-choice" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Making the Right Choice</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The decision tree for choosing between settlement and consolidation is relatively straightforward if you analyze your situation honestly. You must evaluate your current income, your existing credit score, and your ability to sustain long term payments.
                            </p>
                            
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">When to Choose Debt Consolidation</h3>
                            <ul className="space-y-3 text-gray-700 text-base list-disc pl-5 mb-6">
                                <li>You have a stable, reliable source of income that is sufficient to cover the new EMI.</li>
                                <li>Your CIBIL score is currently good to excellent (typically 750 or above).</li>
                                <li>You have not yet missed any payments or defaulted on your current loans.</li>
                                <li>Your primary goal is to lower your monthly interest rates and simplify your payment schedule, rather than seeking debt forgiveness.</li>
                                <li>You intend to apply for major credit in the near future, such as a home loan, and need to protect your credit profile.</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">When to Choose Loan Settlement</h3>
                            <ul className="space-y-3 text-gray-700 text-base list-disc pl-5 mb-6">
                                <li>You have suffered a catastrophic financial event, such as a prolonged job loss, severe medical crisis, or business closure.</li>
                                <li>You have already defaulted on multiple payments, and your loan accounts have been declared NPAs.</li>
                                <li>Your CIBIL score is already severely damaged, meaning you will not qualify for a consolidation loan anyway.</li>
                                <li>Your outstanding debt is so massive compared to your income that paying the principal in full is a mathematical impossibility.</li>
                                <li>You have access to a lump sum amount (from savings, family help, or asset sale) to offer the bank as a one time settlement payment.</li>
                            </ul>

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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4 mt-0">Need Expert Guidance?</h3>
                                <p className="text-blue-800 mb-6 font-normal">Our financial experts can analyze your specific situation and recommend the optimal path forward to help you become debt free.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-300 transform hover:-translate-y-1"
                                >
                                    Compare Your Debt Relief Options Today
                                </Link>
                            </div>
                        </article>
                    </main>

                    {/* Right Column: Cards */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24 self-start">
                        <div className="space-y-6">
                            {/* Card 1: Primary CTA */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center flex flex-col items-center">
                                <h3 className="font-black text-gray-900 text-xl mb-3 tracking-tight">Facing Harassment?</h3>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed px-2">
                                    We can send an immediate Legal Notice to stop agents from visiting your house today.
                                </p>
                                <Link
                                    href="/contact"
                                    className="w-full bg-[#1b5df3] hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md text-center text-sm"
                                >
                                    Stop the Agents
                                </Link>
                                <div className="mt-4 space-y-2 text-xs text-gray-500 w-full text-center font-medium">
                                    <p>&#10003; 24hr Legal Response</p>
                                    <p>&#10003; RBI Compliance Audit</p>
                                    <p>&#10003; Harassment Defense</p>
                                </div>
                            </div>

                            {/* Card 2: Links */}
                            <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100 shadow-sm mt-6">
                                <h4 className="font-black text-gray-900 text-lg border-b border-gray-900 pb-3 mb-4">Related Expertise</h4>
                                <ul className="space-y-4 text-left font-medium">
                                    <li>
                                        <Link href="/are-there-legal-implecations-or-non-payment-during-debt-settlement" className="text-blue-600 hover:text-blue-800 text-sm transition-colors block">
                                            Personal Loan Relief
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/compare-debt-settlement-fees-and-success-rate" className="text-blue-600 hover:text-blue-800 text-sm transition-colors block">
                                            MSME Dispute Defense
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/is-loan-settlement-a-good-option-for-borrowers" className="text-blue-600 hover:text-blue-800 text-sm transition-colors block">
                                            Bank Recovery Shield
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-improve-cibil-score" className="text-blue-600 hover:text-blue-800 text-sm transition-colors block">
                                            Default Notice Help
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
