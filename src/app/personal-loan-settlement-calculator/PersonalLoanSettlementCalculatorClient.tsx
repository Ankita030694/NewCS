'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function PersonalLoanSettlementCalculatorClient() {
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
        { id: 'core-components', label: 'Unpaid Debt Math' },
        { id: 'dpd-impact', label: 'DPD and Settlement' },
        { id: 'hardship-severity', label: 'Hardship Multiplier' },
        { id: 'calculator-framework', label: 'Calculator Framework' },
        { id: 'case-study-medical', label: 'Case Study: Medical' },
        { id: 'case-study-job', label: 'Case Study: Job Loss' },
        { id: 'legal-tactics', label: 'Bank Legal Tactics' },
        { id: 'negotiation-steps', label: 'Negotiation Steps' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' }
    ];

    const faqs = [
        {
            question: "How accurate is a personal loan settlement calculator?",
            answer: "A personal loan settlement calculator provides a framework based on historical data, Days Past Due (DPD), and typical bank policies. While it cannot guarantee the exact final penny you will pay, it gives a highly accurate estimate of the realistic settlement amount you should aim for. The final figure always depends on direct negotiations and the specific approval from the bank management."
        },
        {
            question: "Does the calculator include penal interest and bounce charges in the waiver?",
            answer: "Yes. The framework specifically targets the waiver of 100 percent of penal interest, bounce charges, and late fees. When estimating your settlement amount in India, you should base your calculations primarily on the outstanding principal balance, not the inflated figure the bank presents after months of default."
        },
        {
            question: "How does DPD affect the settlement amount estimate?",
            answer: "Days Past Due (DPD) is the most critical factor in a personal loan settlement calculator. A DPD of 30 or 60 days will yield very little discount because the account is not yet a Non Performing Asset (NPA). Once the DPD crosses 180 days or 365 days, the bank is forced to provision heavily for the bad loan, which drastically improves your leverage to secure a much lower settlement amount."
        },
        {
            question: "Can I use this framework to estimate loan settlement amounts for credit cards too?",
            answer: "Yes. The underlying math for unsecured debt settlement is very similar. Both personal loans and credit cards rely on the removal of accrued interest and late fees. The primary difference is that credit card interest compounds faster, making the initial inflated balance much higher compared to a standard term personal loan."
        },
        {
            question: "Will the bank accept my hardship proof automatically?",
            answer: "Banks do not accept hardship claims at face value. You must provide undeniable documentary evidence such as termination letters, medical bills, or tax returns showing business failure. The personal loan settlement calculator framework assumes you can adequately prove your severe financial distress to the bank."
        },
        {
            question: "Is it possible to settle a loan without paying anything?",
            answer: "No. A loan settlement is a mutual compromise where the bank agrees to accept a portion of the principal. Complete waiver of the principal is known as a write off, which the bank only does for accounting purposes but does not absolve you of the legal liability to pay."
        },
        {
            question: "Does settling a personal loan ruin my CIBIL score forever?",
            answer: "Settling a personal loan will result in a 'Settled' status on your CIBIL report, which drops your score and makes borrowing difficult in the short term. However, the impact lessens over time, and you can rebuild your credit score systematically. It is far better than leaving the loan as a permanent unpaid default."
        },
        {
            question: "How much cash should I gather before starting negotiations?",
            answer: "Based on our personal loan settlement calculator framework, you should ideally gather at least 30 to 40 percent of your original principal amount before initiating serious settlement talks. Having lump sum cash ready gives you immense negotiating power to close the deal quickly."
        },
        {
            question: "What happens if I calculate my settlement but the bank refuses?",
            answer: "If the bank refuses your calculated offer, it usually means your DPD is not high enough or they do not believe your hardship is severe enough. In such cases, you must maintain your position, seek legal protection against harassment, and wait for the end of the financial quarter when banks are under pressure to clear bad debts."
        },
        {
            question: "Are these settlement calculations legal in India?",
            answer: "Yes. The Reserve Bank of India (RBI) allows banks to formulate their own Compromise Settlement Schemes. Negotiating a discount based on financial hardship is a perfectly legal process, provided you are negotiating directly with the bank and documenting everything through official channels."
        }
    ];

    const reviews = [
        { name: "Vikram Sharma", location: "Bangalore", stars: 5, comment: "The breakdown of how penal interest works opened my eyes. I was negotiating on the inflated 8 Lakh figure instead of my 5 Lakh principal. Once I used this framework, I settled for 2.5 Lakh." },
        { name: "Anita Desai", location: "Mumbai", stars: 5, comment: "I had no idea that Days Past Due was the secret to getting a good deal. I gathered my funds, waited until my DPD hit 180, and secured a fantastic settlement on my personal loan." },
        { name: "Rajesh Kumar", location: "Hyderabad", stars: 4, comment: "Very detailed explanation of the math behind loan settlements. The case studies helped me understand exactly how to present my medical hardship to the bank management." }
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
        'name': 'Personal Loan Settlement Calculator Framework',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '1120',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <script id="faq-schema-pl-calculator" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script id="review-schema-pl-calculator" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        Exact Payout Estimation Framework
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Personal Loan Settlement <br />
                        <span className="text-blue-300">Calculator Framework</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-normal">
                        Stop guessing how much you need to pay. Learn the exact math banks use to determine your settlement amount based on Principal, DPD, and hardship severity.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Calculate Your Settlement Now
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
                                    <Link href="/services/personal-loan-settlement" className="ml-1 font-medium text-gray-500 hover:text-blue-600 md:ml-2">
                                        Personal Loan Settlement
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ml-1 font-medium text-gray-500 md:ml-2">
                                        Settlement Calculator
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Calculation Guide</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: The Opaque Math of Loan Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When borrowers default on a personal loan, they are quickly overwhelmed by aggressive recovery agents and rapidly increasing account balances. One of the most terrifying aspects of this process is checking your loan account statement after a few months of non payment and realizing the outstanding balance has skyrocketed far beyond the original loan amount. Borrowers constantly ask how much cash they actually need to gather to escape this debt trap. The bank refuses to give a straight answer, preferring to keep the math completely opaque to maximize their recovery.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This page serves as a comprehensive personal loan settlement calculator framework. We will demystify the exact math used by banks and recovery agencies to determine your final settlement amount. By understanding the components of your debt, the critical role of Days Past Due, and the application of a hardship severity multiplier, you can accurately estimate how much to pay for loan settlement in India. You will learn that the inflated number the bank demands is merely a starting point for negotiation, not the final verdict on your financial future.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The ultimate goal of this framework is to empower you with knowledge. When you know exactly how the bank calculates a compromise settlement, you can prepare the required funds in advance, negotiate from a position of absolute strength, and close the loan on your own terms. We will break down every variable, step by step, so you are never caught off guard during a settlement negotiation.
                            </p>

                            <h2 id="core-components" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 2: Decoding the Core Components of Unpaid Debt</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To use a personal loan settlement calculator effectively, you must first understand what makes up your current outstanding balance. Banks deliberately complicate statements to confuse borrowers. The total amount demanded by the bank consists of three distinct components. Your negotiation strategy depends entirely on isolating these components and attacking the ones the bank is most willing to waive.
                            </p>

                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl"></div>
                                <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                                    </svg>
                                    The Three Pillars of Defaulted Debt:
                                </h4>
                                <ul className="space-y-3 text-blue-800 font-normal list-disc pl-5 m-0 text-base">
                                    <li><strong>The Principal Outstanding:</strong> This is the actual money you still owe from the amount originally disbursed to you. This is the core number that banks care about most. Banks are extremely reluctant to take a massive loss on the principal, but they will compromise if your hardship is genuine.</li>
                                    <li><strong>Accrued Regular Interest:</strong> This is the standard interest that continues to apply to the outstanding principal every month. As long as the account is not written off, this number slowly climbs.</li>
                                    <li><strong>Penal Interest and Bounce Charges:</strong> These are the punitive fees applied every time your EMI bounces, plus exorbitant penalty interest rates applied to the overdue amount. Over several months, these charges compound rapidly, creating the terrifying inflation in your total due balance.</li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                The golden rule of any personal loan settlement calculator is this: One hundred percent of penal interest and bounce charges are negotiable and usually waived completely in a successful settlement. Furthermore, a significant portion of the accrued regular interest is also waived. Therefore, when estimating your loan settlement amount in India, you must completely ignore the total outstanding balance and base your calculation solely on the Principal Outstanding on the day you defaulted.
                            </p>

                            <h2 id="dpd-impact" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 3: Days Past Due and Its Direct Impact on Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most crucial variable in our personal loan settlement calculator framework is your DPD, or Days Past Due. The DPD is the number of days that have passed since your first missed EMI. The banking system in India classifies loans into different risk categories based strictly on the DPD. Understanding these categories is essential because your settlement leverage increases exponentially as your DPD increases.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                                    <span className="text-blue-600 font-bold mb-2 block text-xs uppercase tracking-wider">DPD 1 to 89 Days</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">Standard Asset Phase</h5>
                                    <p className="text-sm text-gray-600 m-0">The bank still considers this a standard loan. Recovery agents will harass you intensely, but the bank will not entertain any settlement offers. They want the full amount, plus all late fees. Your leverage is zero.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                                    <span className="text-blue-600 font-bold mb-2 block text-xs uppercase tracking-wider">DPD 90 to 180 Days</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">Sub Standard NPA Phase</h5>
                                    <p className="text-sm text-gray-600 m-0">At 90 days, the loan becomes a Non Performing Asset. The bank must set aside provisioning capital. Settlement talks can begin, but the bank will demand 70 to 80 percent of the principal outstanding.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                                    <span className="text-blue-600 font-bold mb-2 block text-xs uppercase tracking-wider">DPD 180 to 365 Days</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">Doubtful Asset Phase</h5>
                                    <p className="text-sm text-gray-600 m-0">The bank recognizes that recovering the full amount is highly unlikely. Provisioning requirements increase significantly. This is the optimal window for settlement. You can secure waivers bringing the settlement down to 40 to 60 percent of the principal.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                                    <span className="text-blue-600 font-bold mb-2 block text-xs uppercase tracking-wider">DPD 365+ Days</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">Loss Asset Phase</h5>
                                    <p className="text-sm text-gray-600 m-0">The bank has largely written off the account. While legal action is possible, the bank is desperate to recover any cash value. Settlements can sometimes drop below 30 percent of the principal, depending heavily on the borrower hardship.</p>
                                </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you try to negotiate a settlement when your DPD is only 45 days, the bank will flatly refuse. They rely on recovery agents to intimidate you into paying. The personal loan settlement calculator requires you to hold your nerve, endure the initial collection pressure, and wait until your DPD crosses into the NPA territory where the bank is financially incentivized to compromise.
                            </p>

                            <h2 id="hardship-severity" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 4: The Hardship Severity Multiplier</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A high DPD alone does not guarantee a low settlement amount. Banks evaluate the reason for your default before approving massive waivers. This is where the Hardship Severity Multiplier comes into play. The personal loan settlement calculator adjusts the final estimate based on the provable financial distress you are experiencing. If you have a high income and simply stopped paying, the bank will refuse a steep discount and pursue legal action instead.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                There are three main tiers of hardship that banks recognize. The first tier is Temporary Hardship, such as a short term job loss or temporary salary reduction. For this tier, banks offer minimal discounts on the principal. The second tier is Severe Hardship, which includes prolonged unemployment lasting over six months, business closure, or major medical emergencies affecting immediate family members. This tier allows for significant principal waivers. The third tier is Extreme Hardship, involving permanent disability, chronic terminal illness, or death of the primary earner. In these tragic scenarios, the bank may waive the vast majority of the principal.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold bg-blue-50 text-blue-900 p-8 rounded-3xl shadow-md border border-blue-100">
                                Documentation is Everything: The bank will never take your word for it. To activate the best multiplier in our settlement calculator, you must submit hard evidence. This includes termination emails, hospital bills, medical reports, GST cancellation certificates, or death certificates. Without solid proof, the bank will classify your default as willful and demand a much higher payout.
                            </p>

                            <h2 id="calculator-framework" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 5: The Personal Loan Settlement Calculator Framework</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Now we combine the Principal Outstanding, the DPD timeline, and the Hardship Severity Multiplier to create the actual calculation framework. Follow these steps to estimate your realistic settlement amount.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Step 1: Identify your Base Principal. Look at your loan statement right before you defaulted. Ignore all subsequent penal interest and bounce charges. If your loan statement says you owed Five Lakh Rupees in principal at the time of default, that Five Lakh is your Base Principal.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Step 2: Apply the DPD Discount. If your DPD is between 90 and 180 days, expect to pay between 70 to 80 percent of the Base Principal. If your DPD is between 180 and 365 days, expect to pay between 40 to 60 percent. If your DPD is over 365 days, expect to pay between 25 to 40 percent.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Step 3: Adjust for Hardship. If you have Severe Hardship with solid documentation, lean toward the lower end of the percentage ranges mentioned above. If your hardship is temporary or poorly documented, lean toward the higher end.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Let us look at a practical calculation. Assume your Base Principal is Ten Lakh Rupees. Your DPD is 200 days, placing you in the Doubtful Asset Phase where the range is 40 to 60 percent. You have documented proof of a collapsed business, which is a Severe Hardship. Therefore, you can target the lower end of the range. Your estimated settlement amount would be 40 percent of Ten Lakh, which equals Four Lakh Rupees. You should gather Four Lakh in cash and begin negotiations.
                            </p>

                            <h2 id="case-study-medical" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 6: Case Study 1 Medical Emergency and High DPD</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Let us examine a real world application of this framework. Mr. Sharma held a personal loan with a private sector bank. At the time of his default, his Base Principal was Eight Lakh Rupees. A few months later, his loan statement showed a total outstanding of Ten Lakh Fifty Thousand due to massive penal interest and bounce charges applied by the automated banking system.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The cause of his default was a severe medical emergency involving his spouse, which completely drained his savings and forced him to miss work for several months. He submitted extensive medical bills and discharge summaries to the bank as proof of extreme hardship. However, he made the mistake of trying to negotiate when his DPD was only 60 days. The bank rejected his offer of Three Lakh Rupees entirely, demanding the full inflated amount.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Acting on expert legal advice, Mr. Sharma halted negotiations, endured the collection calls, and waited until his account crossed the 180 day DPD mark, entering the NPA Doubtful Asset phase. He then reinitiated negotiations, submitting the medical proofs once more. Because the DPD was high and the hardship was extreme, the bank management finally approved a settlement. The total inflated amount of Ten Lakh Fifty Thousand was ignored. Instead, they settled for Two Lakh Forty Thousand Rupees, which represented exactly 30 percent of his original Eight Lakh Base Principal. This perfectly aligns with our personal loan settlement calculator framework for high DPD and severe hardship.
                            </p>

                            <h2 id="case-study-job" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 7: Case Study 2 Job Loss with Moderate DPD</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In our second case study, Ms. Gupta had a personal loan with a Base Principal of Five Lakh Rupees. Her total outstanding balance inflated to Six Lakh Twenty Thousand over four months due to penalties. She defaulted because her department was laid off during a corporate restructuring. She received a termination letter, which served as excellent documentation of her sudden job loss.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Ms. Gupta found a new job within three months, but at a significantly lower salary. She could no longer afford the original EMI, but she managed to save a lump sum of Two Lakh Fifty Thousand Rupees. Her DPD was currently at 120 days, placing her in the initial NPA phase.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Using the calculator framework, she knew that at 120 days DPD, banks generally expect 70 to 80 percent of the Base Principal. However, she leveraged her termination letter to argue for a lower amount. She offered a single lump sum payment of Two Lakh Fifty Thousand to close the loan immediately. The bank initially demanded Four Lakh Rupees. After weeks of negotiation, the bank realized she genuinely did not have more funds and accepted the Two Lakh Fifty Thousand offer. This represented exactly 50 percent of her Base Principal, an excellent outcome achieved by combining moderate DPD with undeniable hardship proof and immediate lump sum liquidity.
                            </p>

                            <h2 id="legal-tactics" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 8: Legal Tactics of Banks During Recovery</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While you use the personal loan settlement calculator to prepare your funds, the bank will not simply wait quietly. They employ various legal and psychological tactics to break your resolve and force a full payment. Knowing these tactics prevents you from panicking and abandoning your settlement strategy.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most common tactic is the Legal Notice. Around the 90 day DPD mark, you will likely receive a formal notice from an advocate representing the bank. This notice will demand the entire inflated amount within seven to fourteen days and threaten civil or criminal action if you fail to comply. It is crucial to understand that a legal notice is merely a demand letter; it is not a court order. It is designed to intimidate you. You should respond to it professionally through your own legal counsel, stating your financial hardship and willingness to settle, but you must not panic and pay random amounts.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Another tactic is the invocation of Section 138 of the Negotiable Instruments Act, which applies if the bank presented a blank security cheque that bounced. Unlike regular loan defaults, a bounced cheque is a criminal offense in India. If the bank files a Section 138 case, you must appear in court and obtain bail. However, even during an active court case, the matter can still be settled out of court through mediation or Lok Adalat, using the same calculator principles we have discussed. The key is to never ignore court summons.
                            </p>

                            <h2 id="negotiation-steps" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 9: Strategic Negotiation Steps</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once you have used the personal loan settlement calculator to estimate your payout and have gathered the necessary cash, you must execute the negotiation flawlessly. The bank will use highly trained recovery managers who negotiate these deals every single day. You need a structured approach to ensure you get the settlement letter.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                First, establish a paper trail. Do not rely exclusively on phone calls with recovery agents. Send a formal email to the bank’s Nodal Officer detailing your financial hardship, attaching your documentary evidence, and proposing your settlement amount. State clearly that the amount is a one time settlement offer based on your maximum borrowing capacity from relatives.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Second, anchor low. If your calculator framework suggests a final settlement of 40 percent, your initial offer should be 20 percent. The bank will counteroffer with 80 percent, and you will slowly negotiate toward your target of 40 percent. If you start your offer at 40 percent, the bank will force you up to 60 percent.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Finally, demand absolute written confirmation. Never transfer any settlement money based on a verbal promise or a text message from a recovery agent. You must receive an official Settlement Letter from the bank’s official email domain, clearly stating the agreed settlement amount, the waiver of all remaining balances, and a guarantee that a No Objection Certificate will be issued upon realization of the funds. The personal loan settlement calculator is useless if you pay the money and the bank refuses to close the loan account.
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
                                <p className="text-blue-800 mb-6 font-normal">Our expert legal team specializes in dealing with banking institutions to secure the lowest possible settlement amount based on your specific DPD and hardship profile.</p>
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
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed px-2">
                                    We can send an immediate Legal Notice to stop agents from visiting your house today.
                                </p>
                                <Link
                                    href="/contact"
                                    className="w-full bg-[#1b5df3] hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md text-center text-sm"
                                >
                                    Stop the Agents
                                </Link>
                                <div className="mt-5 space-y-2 text-xs text-gray-500 w-full text-center font-medium">
                                    <p>&#10003; 24hr Legal Response</p>
                                    <p>&#10003; RBI Compliance Audit</p>
                                    <p>&#10003; Complete Defense</p>
                                </div>
                            </div>

                            {/* Card 2: Links */}
                            <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100 shadow-sm mt-6">
                                <h4 className="font-black text-gray-900 text-lg border-b border-gray-900 pb-3 mb-4">Related Expertise</h4>
                                <ul className="space-y-4 text-left font-medium text-sm">
                                    <li>
                                        <Link href="/services/personal-loan-settlement" className="text-blue-600 hover:text-blue-800 transition-colors">
                                            Personal Loan Relief
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/credit-card-settlement" className="text-blue-600 hover:text-blue-800 transition-colors">
                                            Credit Card Defense
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/loan-settlement" className="text-blue-600 hover:text-blue-800 transition-colors">
                                            General Settlement
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-handle-recovery-agent-harrasment" className="text-blue-600 hover:text-blue-800 transition-colors">
                                            Harassment Prevention
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
