'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function CheckFreeCibilScoreClient() {
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
        { id: 'introduction', label: 'The Hidden Cost' },
        { id: 'rbi-mandate', label: 'RBI Mandate' },
        { id: 'data-harvesting', label: 'Data Harvesting Trap' },
        { id: 'step-by-step', label: 'Step-by-Step Guide' },
        { id: 'official-bureaus', label: 'Official Bureaus' },
        { id: 'stop-spam', label: 'Stop Spam Calls' },
        { id: 'legal-precautions', label: 'Legal Precautions' },
        { id: 'reviews', label: 'Client Reviews' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Thoughts' },
    ];

    const faqs = [
        {
            question: 'Will checking my CIBIL score reduce it?',
            answer: 'No. When you check your own credit score, it is considered a soft inquiry. Soft inquiries do not impact your credit score at all. Only when a lender checks your score for a loan application does it count as a hard inquiry, which can temporarily lower your score by a few points.'
        },
        {
            question: 'Why do third-party apps give me a different score than the official CIBIL website?',
            answer: 'There are four major credit bureaus in India: CIBIL, Experian, Equifax, and CRIF High Mark. Third-party apps often partner with Experian or CRIF because their API access is cheaper. If you want your true CIBIL score, you must get it directly from TransUnion CIBIL.'
        },
        {
            question: 'How often does the RBI mandate a free credit report?',
            answer: 'According to the Reserve Bank of India, every individual is entitled to one free full credit report per calendar year from each of the four authorized credit information companies. This means you can legally obtain four free reports annually if you rotate between the bureaus.'
        },
        {
            question: 'Can I sue an aggregator app for selling my phone number to loan agents?',
            answer: 'Yes, if they did not clearly disclose that your data would be shared with third-party lenders for marketing purposes. Under the Digital Personal Data Protection Act 2023, you have the right to revoke consent and demand data erasure. If they fail to comply, you can file a grievance with the Data Protection Board.'
        },
        {
            question: 'Are WhatsApp credit score checks safe?',
            answer: 'Proceed with extreme caution. While some legitimate banks offer WhatsApp services, many unverified accounts use this method to harvest your PAN card details and phone number. It is always safer to use the official website of the credit bureau.'
        }
    ];

    const reviews = [
        {
            name: 'Rajesh Kumar',
            location: 'Mumbai',
            stars: 5,
            comment: 'I checked my score on a famous payment app and within ten minutes I got six calls for personal loans. I used CredSettle to send a legal notice to the app to delete my data. This guide helped me finally download my real CIBIL report without any spam.'
        },
        {
            name: 'Anita Desai',
            location: 'Pune',
            stars: 5,
            comment: 'Nobody tells you that these free score apps are just lead generation tools for high interest lenders. Once I learned about the RBI mandate for a free annual report, I went straight to the official bureau. No spam calls, no harassment.'
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
        'name': 'Check Free CIBIL Score Guide',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '1450',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-cibil" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-cibil" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        Check Your Free CIBIL Score <br />
                        <span className="text-blue-300">Without Data Harvesting</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Discover the official RBI mandated method to get your free annual credit report directly from credit bureaus, completely bypassing predatory third-party aggregator apps and avoiding endless spam calls.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Legal Help Against Spam
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
                                        Check Free CIBIL Score
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Score Protection Guide</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: The Hidden Cost of Free Credit Scores</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Everyone wants to know their financial standing, and checking your credit score is the first step towards financial literacy. In the digital age, a simple search for checking your credit score yields hundreds of results. You will find payment applications, fintech aggregators, and online marketplaces offering this service absolutely free of charge. You simply enter your PAN card number and your mobile number, and within seconds, a shiny three digit number appears on your screen. It feels fast, it feels efficient, and most importantly, it feels free.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                However, there is a fundamental truth in the digital economy that applies heavily here: if a product is free, you are the product. Your financial data is an incredibly valuable commodity. When you check your credit score through a third party application, you are not just querying a database. You are willingly handing over a comprehensive map of your financial life to a data broker. This map includes your active loans, your repayment history, your credit card utilization, and your overall creditworthiness. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Third party aggregators do not provide this service out of the goodness of their hearts. They pay the official credit bureaus a fee to access your data via an API. They absorb this cost because the data they harvest from you is worth exponentially more when sold to their network of partner lenders. As soon as you click the consent box, your contact information and financial profile are instantly auctioned off as a "highly qualified lead." Within minutes of checking your score, you might receive a call offering you a pre-approved personal loan or a lifetime free credit card. This is not a coincidence. This is the entire business model at work. For many borrowers, this leads to an endless barrage of spam calls, SMS messages, and aggressive marketing tactics. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                This hidden cost of data privacy is rarely disclosed in a clear and understandable manner. The terms and conditions are often buried in dense legal jargon. Millions of Indians unwittingly trade their financial privacy for a free credit score, unaware that a much safer, legally protected, and entirely free alternative exists. The purpose of this guide is to expose this data harvesting trap and empower you to take control of your financial information. If you are already facing aggressive calls from loan recovery agents, you might want to learn how to defend yourself by reading our guide on finding the <Link href="/best-lawyer-for-personal-loans" className="text-blue-600 underline">best lawyer for personal loans</Link>.
                            </p>

                            <h2 id="rbi-mandate" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 2: The RBI Mandate on Free Annual Credit Reports</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Reserve Bank of India recognized the necessity for consumers to access their own credit information without facing financial hurdles or compromising their privacy. To ensure transparency and fairness in the lending ecosystem, the RBI issued a definitive mandate directed at all licensed Credit Information Companies operating in India. This mandate fundamentally changed the landscape of credit reporting, yet it remains one of the best kept secrets in the personal finance sector.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Under the regulatory framework established by the RBI, every individual consumer is entitled to receive one full base level credit report, commonly known as a Free Full Credit Report, completely free of charge once every calendar year from each of the authorized credit bureaus. This is not a promotional offer or a limited time deal. It is your statutory right. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Currently, the RBI recognizes four official credit bureaus in India: TransUnion CIBIL, Experian, Equifax, and CRIF High Mark. Because the mandate applies to each bureau individually, you actually have the legal right to obtain four free credit reports annually. A smart financial strategy involves spacing out these requests. You could check your CIBIL report in January, your Experian report in April, your Equifax report in July, and your CRIF High Mark report in October. This method allows you to monitor your credit health throughout the year at zero cost and without relying on any third party intermediaries.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                The report you receive directly from the bureau under this mandate is comprehensive. It contains exactly the same level of detail that banks and financial institutions see when evaluating your loan applications. It lists every open and closed account, your month by month payment history, any defaults or late payments, and the list of inquiries made by lenders. Securing this report directly from the source is the only way to ensure complete data integrity. It guarantees that your financial footprint is not being tracked, monetized, or shared with an unregulated network of telemarketers.
                            </p>

                            {/* Visual Section 1: Alert Banner */}
                            <div className="bg-red-50 p-8 rounded-3xl border border-red-200 shadow-sm mb-12 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
                                <h4 className="text-2xl font-black mb-4 text-red-900 flex items-center gap-2">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                    RBI Data Privacy Warning
                                </h4>
                                <p className="text-red-800 leading-relaxed font-medium mb-0">
                                    The RBI has explicitly warned consumers against sharing sensitive credentials with unverified financial platforms. When you agree to the terms of service on a third party aggregator application, you are granting them a legal power of attorney to fetch your credit data on your behalf. This broad consent often includes clauses that permit them to sell your contact details to multiple lenders. To protect yourself from predatory lending practices and non stop telemarketing harassment, you must only fetch your report directly from the official websites of the four RBI authorized credit bureaus.
                                </p>
                            </div>

                            <h2 id="data-harvesting" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 3: Official Bureaus vs. Third Party Aggregators</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Understanding the mechanics of the credit information ecosystem requires distinguishing between the primary source of data and the secondary distributors. The primary sources are the four Credit Information Companies licensed by the RBI. These bureaus collect raw data directly from banks, non banking financial companies, and cooperative credit societies. They aggregate this massive volume of data, apply proprietary statistical algorithms, and generate your credit score and detailed report.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Secondary distributors are the fintech apps, digital wallets, and loan comparison websites that offer "free" credit scores as a feature to attract users. These platforms do not calculate your score. They simply act as a mirror, reflecting data fetched from one of the official bureaus via an API connection. However, the mirror they use is often flawed, delayed, or selectively displayed.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                The most critical difference lies in the business objective. An official credit bureau is heavily regulated by the RBI and the Credit Information Companies Regulation Act. Their primary mandate is maintaining secure, accurate financial records for the banking system. A third party aggregator, conversely, operates primarily as a marketing agency. Their main objective is user acquisition and lead generation. They utilize the free credit score feature as a bait to lure you into their ecosystem. Once you are inside, their algorithms analyze your credit profile to push highly targeted financial products. If your score is high, you will see aggressive advertisements for premium credit cards. If your score is average, you might be bombarded with offers for high interest personal loans.
                            </p>

                            {/* Visual Section 2: Comparison Table */}
                            <div className="overflow-x-auto mb-12 shadow-lg rounded-2xl border border-gray-200">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="p-4 border-b font-bold text-gray-900 w-1/3">Feature</th>
                                            <th className="p-4 border-b font-bold text-green-700 bg-green-50 w-1/3">Official Credit Bureaus</th>
                                            <th className="p-4 border-b font-bold text-red-700 bg-red-50 w-1/3">Third-Party Aggregator Apps</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700 font-light">
                                        <tr>
                                            <td className="p-4 border-b font-medium bg-white">Primary Motive</td>
                                            <td className="p-4 border-b bg-green-50">Regulatory compliance and secure data storage.</td>
                                            <td className="p-4 border-b bg-red-50">Lead generation and selling financial products.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium bg-white">Data Privacy</td>
                                            <td className="p-4 border-b bg-green-50">Strict adherence to RBI privacy mandates. No selling of contact data.</td>
                                            <td className="p-4 border-b bg-red-50">Broad consent clauses allowing data sharing with partner lenders.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium bg-white">Spam Calls</td>
                                            <td className="p-4 border-b bg-green-50">Zero marketing calls or SMS spam.</td>
                                            <td className="p-4 border-b bg-red-50">High risk of receiving multiple loan offers within minutes.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium bg-white">Report Detail</td>
                                            <td className="p-4 border-b bg-green-50">Provides the full, comprehensive detailed credit report.</td>
                                            <td className="p-4 border-b bg-red-50">Often provides only a simplified summary or just the three digit score.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium bg-white">Dispute Resolution</td>
                                            <td className="p-4 border-b bg-green-50">Direct portal to raise disputes and correct inaccuracies instantly.</td>
                                            <td className="p-4 border-b bg-red-50">Cannot fix errors directly. Must route complaints through customer care.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 id="step-by-step" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 4: Step-by-Step Guide to Getting Your Official Score</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Retrieving your free annual credit report from an official bureau is a straightforward process, provided you follow the correct steps and navigate through the inevitable attempts by the bureau to upsell their paid subscription plans. All bureaus offer premium paid services for daily monitoring or identity theft protection. While these services have their place, they are not strictly necessary for an average consumer who just wants to review their annual health check.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Here is the precise sequence of steps you should take to access your free report without accidentally subscribing to a paid plan.
                            </p>
                            
                            <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-700 font-light">
                                <li><strong>Navigate to the Official Portal:</strong> Ensure you are on the legitimate website of the credit bureau. Fraudulent websites often mimic the design of official bureaus to steal your PAN card details. Look for the secure HTTPS lock icon in your browser address bar.</li>
                                <li><strong>Locate the Free Annual Report Link:</strong> Do not click the massive buttons advertising premium subscriptions. Search the page layout carefully, often in the footer or a smaller secondary menu, for a specific link titled "Free Annual CIBIL Score" or "Get Your Free Annual Credit Report."</li>
                                <li><strong>Create Your Account:</strong> You will need to provide your email address, create a secure password, and enter your full name exactly as it appears on your PAN card. You must also enter your date of birth, gender, and current residential address.</li>
                                <li><strong>Provide Identity Verification:</strong> You must enter a valid identity number. While an Aadhaar number or Passport number can sometimes be used, entering your PAN card number is the most reliable and accurate method, as all loan accounts in India are strictly tied to your PAN.</li>
                                <li><strong>Complete the Authentication Process:</strong> The bureau will send a One Time Password to the mobile number registered with your bank accounts. In some instances, if your credit file is complex, the bureau may ask multiple choice questions regarding your past loan history to verify your identity.</li>
                                <li><strong>Bypass the Upsell Screen:</strong> After successful authentication, you will almost certainly face a screen urging you to upgrade to a paid monitoring plan. Look for the small text link that says "No Thanks" or "Proceed to Free Report."</li>
                                <li><strong>Download the PDF:</strong> Once inside your dashboard, locate the option to download your full report as a PDF file. Save this file securely, as the free access link on the dashboard may expire after a certain number of days.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                This process takes less than ten minutes. By taking these direct steps, you guarantee that your data is safe and that you are viewing the most accurate and up to date version of your credit file. If you discover a defaulted loan you did not authorize, you might be a victim of identity theft. In such serious scenarios, consulting with a legal professional, such as a <Link href="/best-lawyer-for-bank-loan-recovery-defence" className="text-blue-600 underline">bank loan recovery defence lawyer</Link>, is highly recommended to protect your assets and clear your name.
                            </p>

                            {/* Visual Section 3: Checklist */}
                            <div className="bg-gray-900 text-white p-10 rounded-[3rem] mb-12 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full"></div>
                                <h4 className="text-2xl font-black mb-6 flex items-center gap-3">
                                    <span className="w-3 h-10 bg-blue-500 inline-block rounded-full"></span>
                                    Pre-Check Privacy Checklist
                                </h4>
                                <p className="text-gray-300 font-light mb-6">Before typing your PAN card number into any website, verify these critical security points.</p>
                                <ul className="space-y-4 font-light text-gray-200">
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <span><strong>Domain Verification:</strong> Check the URL. It must be the exact domain of the official bureau, not a slightly misspelled variation designed for phishing.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <span><strong>No App Required:</strong> You do not need to download a mobile application to get your statutory free report. Mobile apps request extensive permissions, including access to your contacts and SMS inbox, which is highly invasive.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <span><strong>Avoid Public Wi-Fi:</strong> Never enter your PAN details or bank OTPs while connected to unsecured public internet networks at cafes or airports.</span>
                                    </li>
                                </ul>
                            </div>

                            <h2 id="official-bureaus" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 5: Direct Links to the 4 RBI Authorized Credit Bureaus</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To ensure you do not inadvertently visit a deceptive website, here is a detailed breakdown of the four official credit information companies operating in India, along with instructions on how to access your free report directly from their secure platforms.
                            </p>
                            <div className="space-y-6 mb-10">
                                <div className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold text-blue-900 mb-2">1. TransUnion CIBIL</h3>
                                    <p className="text-gray-600 font-light mb-4">The oldest and most widely recognized bureau in India. Most major banks refer to your CIBIL score when processing mortgage and personal loan applications. Their scoring model ranges from 300 to 900.</p>
                                    <p className="text-sm font-medium text-gray-800 bg-gray-50 inline-block px-3 py-1 rounded">Access portal: cibil.com/freecibilscore</p>
                                </div>
                                <div className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold text-blue-900 mb-2">2. Experian India</h3>
                                    <p className="text-gray-600 font-light mb-4">A global leader in consumer credit reporting. Experian provides a highly detailed report and their dispute resolution process is generally considered to be fast and user friendly.</p>
                                    <p className="text-sm font-medium text-gray-800 bg-gray-50 inline-block px-3 py-1 rounded">Access portal: experian.in/free-credit-report</p>
                                </div>
                                <div className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold text-blue-900 mb-2">3. Equifax India</h3>
                                    <p className="text-gray-600 font-light mb-4">Another major global player. Equifax reports are highly valued by non banking financial companies and microfinance institutions. They have robust fraud detection mechanisms built into their reports.</p>
                                    <p className="text-sm font-medium text-gray-800 bg-gray-50 inline-block px-3 py-1 rounded">Access portal: equifax.co.in</p>
                                </div>
                                <div className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold text-blue-900 mb-2">4. CRIF High Mark</h3>
                                    <p className="text-gray-600 font-light mb-4">Particularly strong in capturing data from rural banking, cooperative banks, and microfinance sectors. If you have taken a small business loan or a rural agriculture loan, checking CRIF is essential.</p>
                                    <p className="text-sm font-medium text-gray-800 bg-gray-50 inline-block px-3 py-1 rounded">Access portal: crifhighmark.com/personal</p>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold bg-green-50 p-6 rounded-xl border border-green-200 text-green-900">
                                Legal Reminder: You do not need to pay a third party agent or a chartered accountant to download these reports for you. It is a completely free, self service digital process mandated by the central bank.
                            </p>

                            <h2 id="stop-spam" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 6: How to Stop Spam Calls If You Already Used an Aggregator</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are reading this guide after you have already used a third party aggregator application, you are likely experiencing the frustrating aftermath. Your phone is ringing constantly with offers for credit cards, pre-approved loans, and dubious investment schemes. The aggregator has successfully monetized your data. However, you are not powerless. Under recent data protection regulations, you can take concrete steps to reclaim your privacy and stop the harassment.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The very first step is to formally revoke the consent you inadvertently granted. Open the application or website where you checked your score. Navigate deeply into the account settings, privacy settings, or profile preferences. Look for a section detailing data sharing, marketing communications, or third party partners. Explicitly opt out of all marketing communications and disable any toggle switches related to data sharing. Following this, you should immediately request an account deletion. Do not merely uninstall the application from your smartphone. Uninstalling the app removes the software from your device, but your financial profile remains active on their corporate servers. You must initiate a formal account deletion request through the app interface.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the spam calls continue unabated, it is time to escalate the matter. Register your mobile number on the National Do Not Call registry maintained by the Telecom Regulatory Authority of India. This is easily done by sending an SMS with the text "START 0" to 1909. While this will not stop illegal offshore scam callers, it strictly prohibits registered domestic telemarketers and banks from contacting you with promotional offers. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                If a specific bank or lender continues to harass you despite these measures, they are in violation of RBI fair practice codes. You have the right to file a formal grievance. You should document the time, date, and phone numbers of the spam calls. Send a sternly worded email to the grievance redressal officer of the offending bank, stating clearly that you did not solicit their services and demanding an immediate cessation of calls. If they fail to comply within a month, you can escalate the complaint to the RBI Integrated Ombudsman portal. In cases where the harassment reaches an extreme level, it might be necessary to send a formal legal notice for data privacy violation.
                            </p>

                            <h2 id="legal-precautions" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-green-700 pl-6">Section 7: Legal Precautions Before Checking Your Score</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Before you begin monitoring your credit, it is crucial to understand the legal implications of the data contained within your report. Your credit report is not just a collection of numbers; it is a legally binding ledger of your financial conduct. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When you download your report, examine the section detailing your active loan accounts. Ensure that every single account listed actually belongs to you. In India, identity theft often involves fraudsters taking out small personal loans or consumer durable loans using a stolen PAN card. If you spot an account you do not recognize, you must act immediately. Do not ignore it, hoping it will resolve itself. You must raise a dispute directly on the credit bureau website. The bureau is legally obligated to investigate the matter with the concerned bank and rectify the error within a stipulated timeframe, usually thirty days.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Pay close attention to accounts marked as "Settled" or "Written Off." A settled account means you paid a negotiated amount lower than the total outstanding balance to close the loan. While this stops recovery agents from pursuing you, it severely damages your credit score and remains on your record for up to seven years, significantly hindering your ability to secure future loans. If a bank promised you a regular closure but marked the account as settled in your CIBIL report, this is a deficiency in service. You can challenge this deceptive practice.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Understanding your credit report is the foundation of financial defense. The modern lending landscape is highly automated, and a single inaccurate entry can lead to automatic loan rejections. By securing your report directly from the official source, you eliminate the middleman, protect your privacy, and gain the exact insights needed to manage your financial health securely. If you find yourself in a complex legal battle regarding a defaulted business loan that is inaccurately reflecting on your personal credit report, we recommend seeking specialized counsel, such as exploring the <Link href="/best-lawyer-for-msme-business-loan-dispute" className="text-blue-600 underline">best lawyer for MSME business loan disputes</Link>.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Client Reviews and Experiences</h2>
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

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Protect Your Financial Privacy</h3>
                                <p className="text-blue-800 mb-6">If you are a victim of relentless loan spam calls due to data harvesting, our legal experts can help you file privacy grievances and stop the harassment immediately.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Legal Assistance
                                </Link>
                            </div>

                            <div className="mt-12 text-[0.65rem] text-gray-400 uppercase tracking-widest text-center opacity-60">
                                Educational Disclaimer: This content is for general awareness regarding data privacy and credit reporting. It does not constitute formal legal advice. Always refer to official RBI guidelines for the most current regulatory updates.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Harassed by Spammers?</h4>
                                <p className="text-sm text-gray-600 mb-6">We can help you draft legal notices to force data brokers to delete your financial information.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Stop Spam Calls
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v DPDP Act Notice</p>
                                    <p>v Consent Revocation</p>
                                    <p>v RBI Ombudsman Help</p>
                                    <p>v Data Erasure Enforcement</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-personal-loans" className="block text-sm text-blue-600 hover:underline">Personal Loan Relief</Link>
                                    <Link href="/best-lawyer-for-msme-business-loan-dispute" className="block text-sm text-blue-600 hover:underline">MSME Dispute Defense</Link>
                                    <Link href="/best-lawyer-for-bank-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">Bank Recovery Shield</Link>
                                    <Link href="/best-lawyer-for-notice-for-loan-default" className="block text-sm text-blue-600 hover:underline">Default Notice Help</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
