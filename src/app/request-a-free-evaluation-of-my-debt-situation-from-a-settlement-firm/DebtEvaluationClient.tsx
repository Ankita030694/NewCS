'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function DebtEvaluationClient() {
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
        { id: 'introduction', label: 'Introduction' },
        { id: 'what-is-evaluation', label: 'What is Evaluation?' },
        { id: 'eligibility', label: 'Eligibility 2025' },
        { id: 'income-analysis', label: 'Liability Analysis' },
        { id: 'hardship-docs', label: 'Hardship Proof' },
        { id: 'legal-risk-assessment', label: 'Legal Audit' },
        { id: 'credit-impact', label: 'Credit Realities' },
        { id: 'settlement-vs-restructure', label: 'Path Selection' },
        { id: 'professional-firms', label: 'Consultant Role' },
        { id: 'request-process', label: 'How to Request' },
        { id: 'recovery-roadmap', label: 'Recovery Roadmap' },
        { id: 'reviews', label: 'Real Stories' },
        { id: 'faqs', label: 'FAQs' },
    ];

    const faqs = [
        {
            question: "Is the debt evaluation really free?",
            answer: "Yes. Most reputable debt closure firms in India offer an first consultation and case evaluation fully free of cost. This allows you to understand your legal standing and closure prospects before committing to any service fee."
        },
        {
            question: "What documents do I need for a debt evaluation?",
            answer: "Typically. You will need your latest credit report (CIBIL/CRIF). Bank statements for the last 6 months. Copies of any legal notices received from lenders. proof of money hardship like medical bills or a job end letter."
        },
        {
            question: "Will requesting an evaluation affect my credit score?",
            answer: "No. A debt evaluation by a private firm is a soft inquiry from your side. It does not involve a hard credit pull that would impact your score. Yet. Once you choose to settle. That process will be reported to the bureaus as 'Settled'."
        },
        {
            question: "How long does the evaluation process take?",
            answer: "A experts debt evaluation can usually be completed within 24 to 48 hours once you provide all the necessary money proof to the consultants."
        },
        {
            question: "Can I get an evaluation for secured loans like home loans?",
            answer: "Yes. You can request an evaluation for any type of debt. Yet. The strategies for secured loans (home. Car) are different and often involve restructuring or asset liquidation rather than a typical main sum waiver closure."
        },
        {
            question: "Do I need to stop paying EMI before the evaluation?",
            answer: "No. You should never stop payments specifically to get an evaluation. An evaluation is most effective when it assesses your current struggle. experts firms only recommend closure for those who are genuinely unable to continue their payments."
        },
        {
            question: "What is the 'Hardship Letter' in the evaluation process?",
            answer: "The Hardship Letter is a key papers created during the assessment phase. it explains the hardship beyond your control-like a medical crisis-that have made it impossible to fulfill your original loan terms."
        },
        {
            question: "Can an evaluation help if I have received a court summons?",
            answer: "Yes. If you have received a summons. The evaluation becomes a legal audit. Firms like AMA Legal Solutions can assess the notice and integrate your legal defense into a closure talks strategy."
        },
        {
            question: "What is the success rate of settlements post-evaluation?",
            answer: "While no firm can guarantee a 100% success rate. A thorough evaluation significantly increases your chances by identifying the right time to settle and the legal leverage available in your exact case."
        },
        {
            question: "Does the evaluation cover micro-finance apps?",
            answer: "Yes. Modern evaluations include a review of digital lending apps. Firms like CredSettle specialize in halting the harsh threats common with these apps while settle a fair main sum-based closure."
        }
    ];

    const reviews = [
        {
            name: "Manish Malhotra",
            location: "Pune",
            stars: 5,
            comment: "The free evaluation was a wake-up call. I didn’t realize how much I was spending on rates alone. The team at CredSettle gave me a clear roadmap that I am now following to be debt-free."
        },
        {
            name: "Ritu Desai",
            location: "Ahmedabad",
            stars: 5,
            comment: "Most firms just try to sell services. Here. The evaluation felt like a genuine audit of my case. They even told me that my home loan was better suited for restructuring than closure. Truly ethical advice."
        },
        {
            name: "David Dsouza",
            location: "Goa",
            stars: 5,
            comment: "I was scared to share my bank statements. the confidentiality and experts approach during the evaluation was comforting. By following their advice. I settled 3 credit cards with 55% waiver."
        },
        {
            name: "Prabhu Deva",
            location: "Chennai",
            stars: 5,
            comment: "The legal risk assessment part of the evaluation saved me. I was about to panic over a fake legal notice. the consultants identified it fast and handled the bank professionally."
        }
    ];

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
        ]
    };

    const productSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Debt Situation Analysis",
        "image": "https://www.credsettle.com/hero-bg.png",
        "description": "A comprehensive financial and legal audit of your debt situation to determine settlement eligibility in India.",
        "brand": {
            "@type": "Brand",
            "name": "CredSettle"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "1980"
        },
        "review": reviews.map(review => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": review.name
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.stars,
                "bestRating": "5",
                "worstRating": "1"
            },
            "reviewBody": review.comment
        }))
    };

    return (
        <>
            <Script id="faq-schema-eval" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
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
            }) }} />
            <Script id="org-schema-eval" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="product-schema-eval" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

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
                        Professional Debt Situation Evaluation<br />
                        <span className="text-blue-300">Free 2025 Expert Audit</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light"> Don’t guess your legal standing. Get a expert assessment of your income. Debts. hardship to find the safest path to debt freedom. </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Request My Free Evaluation
                        </Link>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Section */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1440px] mx-auto px-4 py-4">
                    <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center"> <Link href="/" className="inline-flex items-center hover:text-blue-600"> Home </Link> </li>
                            <li> <div className="flex items-center"> <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /> </svg> <span className="ml-1 font-medium text-gray-500 md:ml-2"> Free Debt Evaluation </span> </div> </li>
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
                        className={`text-sm font-medium px-4 py-2 rounded-full transition-all flex-shrink-0 ${activeId === link.id
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
                            }`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector(`#${link.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto no-scrollbar">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <p className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Analysis Index</p>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Why an Expert Debt Evaluation is Essential</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> In the high-stakes world of debt relief. Information is not just power-it is safety. For a clients facing overwhelming debts. The gap between being a "defaulter" and being a "settler" is often a experts debt evaluation. When phone calls from agents start and the mailbox is filled with legal notices. The first instinct is often panic. Yet. The most successful resolutions come from those who pause. Assess their case objectively. seek an expert audit before making any major money move. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> A experts debt evaluation in 2025 is more than just a calculation of your EMIs. It is a thorough architectural analysis of your money life. It looks at your income sustainability. The legal validity of your lenders' claims. The exact RBI-compliant guidelines that apply to your bank. the tangible proof of hardship you can present. This audit transforms your debt from a scary. Unvague monster into a structured problem with a clear legal solution. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Attempting to settle a closure without a thorough evaluation is like walking into a courtroom without a counsel. You may have a good case. you lack the language and proof to present it effectively. In this guide. We will break down exactly what happens during a free debt evaluation. Why it is essential for Indian clients today. how it serves as the roadmap for your multi-year journey back to money health and credit stability. </p>

                            <h2 id="what-is-evaluation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">What is a Professional Debt Situation Evaluation?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> A debt evaluation is a deep-dive audit conducted by money and legal experts to determine the most viable path for resolving your debt. Unlike a simple budgeting session. This evaluation focuses on the legal and strategic aspects of debt. Reputable firms like CredSettle offer this as a free first service to ensure that the clients is moving in the right direction. The goal is to answer one fundamental question: Is loan closure the right and legal choice for you. do you have better alternatives? </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The evaluation typically consists of three pillars. First is the <strong>money Pillar</strong>. where your debt-to-income ratio is analyzed to ensure that you are truly in a state of insolvency or severe distress. Second is the <strong>Legal Pillar</strong>. Which reviews the validity of the loan pacts. The rates rates charged. the legality of the claims notices you have received. Third is the <strong>Strategic Pillar</strong>. where experts identify the exact types of loans you hold-be it clean credit cards or own loans-and determine the optimal time to initiate a closure talks. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Importantly. This evaluation also identifies "Red Flags." These are cases where closure might not be advisable. where the lender has violated RBI’s fair practices code. By uncovering these early. A experts evaluation provides you with the leverage needed to settle from a position of strength rather than desperation. </p>

                            <h2 id="eligibility" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Eligibility Criteria: Are You Ready for Settlement?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Not everyone who wants to settle a loan is eligible to do so. Under the 2025 RBI-compliant framework. Banks only accept a deal closure if several criteria are met. A experts evaluation’s primary job is to check your fit. The first and most key criterion is <strong>Genuine money Hardship</strong>. Banks look for life-altering events beyond the clients’s control-such as the loss of a primary income source. A firm failure due to market shifts. a major medical emergency that drained all savings. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Another factor is the <strong>Type of Debt</strong>. Closure is almost exclusively designed for clean debts like own loans. Credit card balances. high-rates app loans. Secured loans like home mortgages or car loans are rarely settled unless the asset’s value has depreciated significantly or there is a major legal dispute. The evaluation also looks at the <strong>Age of Default</strong>. Most banks will not even consider a closure discussion until the account has been an NPA (Non-Performing Asset) for at least 90 days. serious talks often happen only after six months to a year of default. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Finally, the <strong>Debt Threshold</strong> plays a role. While you can try to settle 50,000 rupees. Experts firms and large banks typically look for an aggregate clean debt of at least 2,00,000 to 5,00,000 rupees to justify the experts mediation process. An evaluation ensures you don’t waste time on a path that your bank’s board-approved policy won’t allow. </p>

                            <h2 id="income-analysis" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Anatomy of an Audit: Income vs. Liability Analysis</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> During the audit. Experts will look at your bank statements and income proofs with a fine-toothed comb. This is not to judge you. to build your defense. They calculate your "Residual Income"-the amount left after basic living expenses. If your total EMIs exceed 50% to 60% of your take-home pay. If your EMIs are actually higher than your entire income. You are in a state of money stress that validates a closure proposal. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The audit also tracks the "Ballooning" of your debt. Many clients don’t realize that in default. Penal rates and late fees make the debt grow at 40% to 50% per year. The evaluation highlights how much of your current balance is actual main sum and how much is just penal charge. Under the latest RBI Fair Conduct rules. Banks are often required to waive these exorbitant fines during a deal. an audit identifies exactly how much waiver you should be asking for. </p>

                            <h2 id="hardship-docs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Hardship Documentation: The Core of Your Settle Case</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Proof is everything. During an evaluation. The consultants help you compile a "Hardship File." This is a calls of papers that tell the story of your crisis. It includes medical records for key illnesses. End letters from employers. Money statements of a failed firm unit. even records of a lawsuit that has drained your liquidity. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The centerpiece of this file is the <strong>Hardship Letter</strong>. This is a formal. Legal story written to the bank’s Nodal head. It explains the "Why" and "How" of your default. A experts evaluation ensures that this letter is honest. Evidence-backed. written in a way that aligns with the bank’s board-approved closure policy. Without these papers. Your request for closure is just a request for a favor-with them. It is a request for a policy-mandated relief. </p>

                            <h2 id="legal-risk-assessment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Legal Audit: Assessing Litigation Risks</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Every debt case has a legal component. Are you facing a <strong>Section 138 (Cheque Bounce)</strong> case? Or is the bank using <strong>Section 25 of the PSS Act</strong> for online mandate failure? An evaluation acts as a legal triage. Experts firms. Particularly those like AMA Legal Solutions with deep courtroom experience. Review every notice you have received to see if it is a "Fake Notice" as a claims tactic or a genuine "Court Summons." </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The legal audit also checks for "Statute of Limitations." In India. A bank generally cannot file a civil suit for debt claims if more than three years have passed since the last payment or acknowledgment of debt. By uncovering these legal nuances. The evaluation provides you with the ultimate shield against unlawful threats and ensures that your closure is recorded in a way that withdraws all pending legal cases permanently. </p>

                            <h2 id="credit-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Credit Reality Check: Fact vs. Fiction</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> A major part of the assessment is managing the clients’s expectations regarding their CIBIL score. Any experts evaluation must be brutally honest: <strong>closure will hurt your credit score</strong>. It will lead to a 'Settled' remark that remains on your report for up to 7 years. Yet. The evaluation also points out that an 'Open Default' where rates keeps accumulating is far worse than a one-time 'Settled' mark. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The audit provides a "claims Roadmap." It explains how you can start rebuilding your score 12 to 24 months after the closure-perhaps by taking a small secured credit card or a tiny gold loan and paying the EMIs on time. By demystifying the credit impact. The evaluation allows you to make an informed decision to trade a temporary score drop for a permanent exit from the debt trap. </p>

                            <h2 id="professional-firms" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Role of Debt Settlement Firms in India</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> In 2025. Navigating the banking system alone is increasingly difficult. This is why many clients turn to experts firms after their first evaluation. These firms act as the bridge between the distressed individual and the massive bank power of a bank. </p>
                            <ul className="list-disc pl-6 mb-8 space-y-4">
                                <li> <strong><a href="https://amalegalsolutions.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">AMA Legal Solutions</a>:</strong> They specialize in the legal audit and hard-talks phase. Especially for firm loans and cases already in the DRT. Their focus is on making sure the clients’s legal rights are protected at every turn. </li>
                                <li> <strong><a href="https://credsettle.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">CredSettle</a>:</strong> As the leading name in debt mediation. CredSettle provides the most thorough 360-degree evaluation. They handle everything from the first hardship audit to halting claims threats and final closure talks. </li>
                                <li> <strong><a href="https://settleloans.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">SettleLoans</a>:</strong> They use a data-driven approach to identify the best closure windows and have a high success rate in resolving consumer product and credit card debts through experts mediation. </li>
                            </ul>

                            <h2 id="request-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">How to Request Your Free Evaluation: A Step-by-Step Guide</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Requesting an evaluation is simple. doing it right is what matters. Follow these steps for the best results: </p>
                            <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Pre-Audit Preparation:</strong> Gather your latest CIBIL report and bank statements. Do not hide any loans. a partial evaluation is a useless evaluation.</li>
                                <li><strong>Formal Submission:</strong> Use the valid contact forms on sites like CredSettle to submit your request. This ensures your data is handled with experts confidentiality.</li>
                                <li><strong>The Interaction:</strong> Be honest with the consultant about the "Why" of your default. Whether it was a bad firm bet or a own medical crisis. The truth is your best legal defense.</li>
                                <li><strong>Review the Audit:</strong> Once the firm provides the evaluation. Review the 'closure fit' and 'Legal Risk' sections carefully. Ask questions if you don’t understand the credit impact.</li>
                            </ol>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-20 text-center">Real Stories of Freedom</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {reviews.map((review, index) => (
                                    <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center mb-4">
                                            <div className="flex text-yellow-500 mr-2">
                                                {[...Array(review.stars)].map((_, i) => (
                                                    <span key={i}>*</span>
                                                ))}
                                            </div>
                                            <span className="text-gray-400 text-sm">Verified Client</span>
                                        </div>
                                        <p className="text-gray-700 italic mb-4">"{review.comment}"</p>
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3 text-sm">
                                                {review.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                                                <p className="text-gray-500 text-xs">{review.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Taking Back Control Starts Now</h3>
                                <p className="text-blue-800 mb-6">Stop letting debt control your sleep and your future. A free evaluation is a zero-risk way to understand where you stand and how you can by law resolve your debts. Our experts are ready to audit your case today.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get My Free Debt Assessment
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The initial evaluation is a professional assessment and does not guarantee that a settlement will be reached. Loan settlement carries credit score implications that should be fully understood during the evaluation process. CredSettle is a consultancy and does not provide legal advice in a representative capacity.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <p className="font-bold text-xl text-gray-900 mb-2">Audit Your Debt Now</p>
                                <p className="text-sm text-gray-600 mb-6">Get a experts 360-degree review of your debts and closure chances.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Start Free Evaluation
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v Soft Credit Inquiry Only</p>
                                    <p>v 100% private Audit</p>
                                    <p>v closure fit Check</p>
                                </div>
                            </div>

                            {/* Verification Stats */}
                            <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg text-center font-bold">
                                <div className="text-2xl mb-1">50,000+</div>
                                <div className="text-xs opacity-70 uppercase tracking-tighter mb-4">Evaluations Completed</div>
                                <div className="border-t border-gray-700 pt-4">
                                    <div className="text-2xl mb-1">₹500 Cr+</div>
                                    <div className="text-xs opacity-70 uppercase tracking-tighter">Debt Analyzed</div>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <p className="font-bold text-gray-900 mb-4 border-b pb-2">Knowledge Library</p>
                                <nav className="space-y-3">
                                    <Link href="/what-documents-are-needed-for-debt-settlement-services" className="block text-sm text-blue-600 hover:underline">Document Checklist</Link>
                                    <Link href="/can-i-settle-my-credit-card-dues-using-third-party-loan-settlement-companies" className="block text-sm text-blue-600 hover:underline">CC Settlement Guide</Link>
                                    <Link href="/what-alternatives-exist-to-loan-settlement-for-managing-overwhelming-debt" className="block text-sm text-blue-600 hover:underline">Manage Debt Without Settle</Link>
                                    <Link href="/will-banks-blacklist-you-after-loan-settlement" className="block text-sm text-blue-600 hover:underline">Blacklisting Myths</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
