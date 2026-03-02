'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function DRTDefenceClient() {
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
                rootMargin: '-80px 0px -40% 0px',
                threshold: 0.1
            }
        );

        const headings = document.querySelectorAll('h2[id], h3[id]');
        headings.forEach((heading) => observer.observe(heading));

        // Initial check for scroll position
        const handleScroll = () => {
            if (window.scrollY < 150) {
                setActiveId('introduction');
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Run once

        return () => {
            headings.forEach((heading) => observer.unobserve(heading));
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { id: 'introduction', label: 'Overview' },
        { id: 'drt-structure', label: 'DRT Framework' },
        { id: 'sarfaesi-act', label: 'SARFAESI Act' },
        { id: 'legal-defences', label: 'Common Defences' },
        { id: 'npa-classification', label: 'NPA Issues' },
        { id: 'procedural-errors', label: 'Bank Errors' },
        { id: 'limitation-act', label: 'Time Limits' },
        { id: 'drt-v-civil', label: 'Court Types' },
        { id: 'drat-appeals', label: 'Appeals' },
        { id: 'hiring-lawyer', label: 'Expert Counsel' },
        { id: 'msme-protection', label: 'MSME Rights' },
        { id: 'rbi-rules', label: 'RBI Guidelines' },
        { id: 'case-strategies', label: 'Our Approach' },
        { id: 'settlement-paths', label: 'OTS Options' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Steps' },
    ];

    const faqs = [
        {
            question: "What is the primary role of a lawyer in a DRT case defence?",
            answer: "A lawyer in a Debt Recovery Tribunal (DRT) case ensures that the bank follows every legal protocol. They identify procedural flaws in SARFAESI notices, challenge incorrect debt calculations, and represent the borrower to seek stay orders or reasonable settlements."
        },
        {
            question: "Can the bank take possession of my property without a court order?",
            answer: "Under the SARFAESI Act, banks can take symbolic possession after issuing a Section 13(4) notice. However, physical possession typically requires an order from the District Magistrate or Chief Metropolitan Magistrate under Section 14. A lawyer can challenge these actions in the DRT."
        },
        {
            question: "What is the time limit for filing an appeal in the DRT?",
            answer: "Under Section 17 of the SARFAESI Act, a borrower must file a Securitization Application (SA) before the DRT within 45 days from the date the bank takes measures under Section 13(4). Missing this deadline can severely weaken your defence."
        },
        {
            question: "Can agricultural land be attached under the SARFAESI Act?",
            answer: "No, Section 31(i) of the SARFAESI Act specifically exempts agricultural land from its provisions. If a bank attempts to attach or sell agricultural land using SARFAESI, a lawyer can quickly get such actions quashed in the DRT."
        },
        {
            question: "What happens if my loan account was wrongly classified as an NPA?",
            answer: "If the bank failed to follow RBI's 90-day delinquency rule or other classification guidelines, the entire recovery process under SARFAESI becomes invalid. A skilled advocate can use this as a primary defence to stop the recovery proceedings."
        },
        {
            question: "Do I need to deposit money to file a case in the DRT?",
            answer: "Filing a Securitization Application (SA) under Section 17 does not usually require a pre-deposit of the debt. However, appealing a DRT order in the Debt Recovery Appellate Tribunal (DRAT) requires a pre-deposit of 50% of the debt, which can be reduced to 25% by the court."
        },
        {
            question: "Can a DRT case be settled out of court?",
            answer: "Yes, even during an active DRT trial, both parties can opt for a One Time Settlement (OTS). Skilled lawyers often use the strengths of your defence to negotiate a better settlement amount with the bank's recovery department."
        },
        {
            question: "Is the DRT process faster than a regular civil court?",
            answer: "The DRT was created specifically for the speedy recovery of debts. While it is generally faster than civil courts, the complexity of legal challenges and the volume of cases can still lead to prolonged litigation if not handled strategically."
        },
        {
            question: "What is a 'Stay Order' in the context of DRT?",
            answer: "A stay order is a temporary halt on the bank's recovery actions, such as an auction or possession, granted by the DRT. It provides the borrower time to present their full legal defence and prevents the irreparable loss of the property during trial."
        },
        {
            question: "How does the Limitation Act apply to bank recovery cases?",
            answer: "Banks generally have three years from the date of default or last acknowledgement of debt to file a recovery case. If the bank initiates action after this period without a valid extension of limitation, the case can be dismissed as time-barred."
        }
    ];

    const reviews = [
        { name: "Rajesh Kumar", stars: 5, comment: "I was facing a SARFAESI notice for my factory. CredSettle's lawyers found a major flaw in the bank's NPA classification. The DRT granted a stay, and we eventually settled for 40% less.", location: "Ludhiana" },
        { name: "Anita Desai", stars: 5, comment: "The bank was trying to auction my house while my dispute was still pending. Their team moved the DRT quickly and stopped the auction within 48 hours. Highly recommended.", location: "Pune" },
        { name: "Vikram Singh", stars: 5, comment: "Professional and deep knowledge of banking laws. They helped me navigate the DRCAT appeal process when the first order went against us. Finally got justice.", location: "Delhi" },
        { name: "Meena Gupta", stars: 5, comment: "Excellent support for MSME borrowers. They explained my rights under the RBI guidelines that even my bank manager didn't mention.", location: "Ahmedabad" }
    ];

    return (
        <>
            <Script
                id="faq-schema-drt"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />
            <Script
                id="product-schema-drt"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "DRT Case Defence Legal Services",
                        "description": "Expert legal representation for Debt Recovery Tribunal cases and SARFAESI Act challenges in India.",
                        "brand": {
                            "@type": "Brand",
                            "name": "CredSettle"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": "154"
                        }
                    })
                }}
            />

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
                        Best Lawyer for <span className="text-blue-300">DRT Case Defence</span><br />
                        for Bank Loan Recovery
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Expert legal defence for DRT cases and SARFAESI Act notices. Hire the best lawyers for bank loan recovery disputes and NPA settlement.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Free Legal Case Review
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
                                        DRT Case Defence
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

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Outline</h3>
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

                    {/* Middle Column: Main Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Navigating the High Stakes World of DRT Litigation</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Facing a Debt Recovery Tribunal (DRT) case is one of the most stressful experiences a borrower or business owner can endure in India. The DRT was established with a singular focus: the rapid recovery of debts due to banks and financial institutions. Unlike civil courts, which prioritize a full and often lengthy trial, the DRT functions with a mandate for speed, often making it feel like a hostile environment for an unprepared borrower. However, the law provides robust protections for those who are unfairly targeted. Hiring the right DRT advocate transforms your situation from a desperate struggle into a calculated legal defence.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the legal landscape for bank recovery has become increasingly digital and fast paced. Banks are now using summary procedures and auction portals to liquidate assets in record time. This makes the initial 45 day window for filing a Securitization Application (SA) more critical than ever before. A single error in responding to a SARFAESI notice can lead to the loss of a decades old family home or a vital manufacturing plant. This guide explores how our specialized legal team at CredSettle protects your assets and your dignity in the face of institutional recovery efforts.
                            </p>

                            <h2 id="drt-structure" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Framework of Debt Recovery Tribunals in India</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Debt Recovery Tribunal (DRT) was formed under the Recovery of Debts and Bankruptcy Act (RDB Act). Its jurisdiction covers cases where the amount of debt due to any bank or financial institution is 20 lakh rupees or more. For debts below this threshold, banks must still use the civil court system, which provides certain procedural delays that can be used for negotiation. But once a case hits the DRT, the rules change fundamentally. The tribunal follows its own set of procedures rather than the strict Code of Civil Procedure (CPC), allowing for faster evidence processing and quicker judgements.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our lawyers understand the internal mechanics of the DRT across all major Indian cities. We know that each tribunal operates with a specific cadence, and our strategy is always tailored to the local judicial environment. Whether it is a recovery application filed by the bank under the RDB Act or a Securitization Application (SA) filed by the borrower under the SARFAESI Act, the tribunal serves as the ultimate arbiter. Knowing the precedents set by specific benches regarding borrower rights is where our expertise becomes your greatest advantage.
                            </p>

                            <h2 id="sarfaesi-act" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Decoding the SARFAESI Act: The Bank's Sharpest Tool</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act (SARFAESI) is the most powerful law in the hands of Indian lenders. It allows banks to seize and sell secured assets (like houses, shops, or land) without the intervention of a court. This "extrajudicial" power is intended to clean up the banking system, but it is frequently misused to bypass the legitimate grievances of borrowers. The Act works through a hierarchy of notices that must be strictly followed, failing which the entire action is void in the eyes of the law.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The process starts with a Section 13(2) notice, which gives the borrower 60 days to pay the entire outstanding amount. If you receive this, do not file it away. This is your first opportunity to file a "Representation and Objection." If the bank does not provide a reasoned reply to your objection within 15 days, their subsequent actions can be quashed. Following this is the Section 13(4) notice, which marks the point where the bank claims to have taken possession of the property. This is the trigger for your 45 day window to move the DRT. Our advocates specialize in finding the precise cracks in these notices that lead to stay orders and eventual justice.
                            </p>

                            <h2 id="legal-defences" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Common Legal Defences in DRT and SARFAESI Cases</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Success in the DRT is not about asking for mercy; it is about pointing out the bank's failure to follow the law. Precision is the key. Over years of defending thousands of cases, we have identified primary categories of defences that consistently result in favorable outcomes for our clients. These are not just technicalities; they are the fundamental legal rights that protect citizens from the arbitrary use of power by large financial institutions.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Incorrect NPA Classification:</strong> The 90 day delinquency rule is absolute. If a bank declares your account as an NPA even a day early, or if they failed to consider payments made during that period, their entire SARFAESI action is fundamentally flawed and must be set aside.</li>
                                    <li><strong>Failure to Respond to Objections:</strong> Section 13(3A) of the SARFAESI Act mandates that a bank must reply to your Section 13(2) objections. If they ignore your points or provide a generic "copy paste" reply, the DRT will likely consider it a violation of natural justice.</li>
                                    <li><strong>Procedural Lapses in Possession:</strong> Taking symbolic or physical possession requires following specific rules about serving notices, publishing them in newspapers, and affixing them to the property. Any missing step makes the possession illegal.</li>
                                    <li><strong>Undervaluation of Property:</strong> Banks often try to sell assets at a fraction of their market value to ensure a quick sale. Challenging the "Reserve Price" set by the bank's valuer with an independent valuation report is a powerful way to stop an unfair auction.</li>
                                    <li><strong>Exemption of Agricultural Land:</strong> Section 31(i) is a massive shield. If the land used as security is being used for agriculture, the bank cannot touch it under SARFAESI. We have saved countless family farms using this specific provision.</li>
                                </ul>
                            </div>

                            <h2 id="npa-classification" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Science of Fighting Incorrect NPA Classification</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The root of every recovery case is the classification of your loan as a Non-Performing Asset (NPA). According to the Reserve Bank of India (RBI) Master Circular, an account becomes an NPA only when the interest or installment remains overdue for a period of more than 90 days. However, bank software often miscalculates this, or bank officers fail to account for partial payments. In some cases, banks even move the "NPA date" backwards to make their balance sheets look better, which is a direct violation of banking norms.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our legal team performs a "Forensic Audit" of your loan account statements. We look for hidden charges, incorrect interest rate applications, and failure to credit your payments on time. If we can prove that the account should not have been an NPA on the date the notice was issued, the DRT has no choice but to quash the bank's recovery order. This "NPA Defence" is often the strongest weapon in a borrower's arsenal, as it strikes at the very heart of the bank's legal standing to sue.
                            </p>

                            <h2 id="procedural-errors" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Using Bank Procedural Errors as Leverage</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Banks are bureaucratic machines, and machines often make mistakes. For the SARFAESI Act to be legal, every "i" must be dotted and every "t" must be crossed. The rules require the bank to send a 30 day sale notice before an auction, and this notice must be served personally to all borrowers and guarantors. Furthermore, the auction notice must be published in two leading newspapers, one of which must be in the local vernacular language.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We painstakingly review every document the bank files. Did they send the notice to the correct address? Is the newspaper publication date accurate? Did they provide the mandatory 30 days between the notice and the sale? If the bank took a shortcut on any of these steps, we can move the DRT for a stay of auction. This pause gives you the time needed to either find a private buyer for the property at a better price or negotiate a sustainable settlement with the bank. In many of our cases, the threat of a prolonged litigation due to their procedural errors is exactly what brings the bank to the negotiating table.
                            </p>

                            <h2 id="limitation-act" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Limitation Act: When the Bank Waits Too Long</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Justice delayed is justice denied, and the law of limitation reflects this. Banks cannot hold a threat over your head forever. Generally, a bank has a period of three years from the date of the account being declared an NPA or the date of the last acknowledgement of debt to file a recovery case in the DRT. If they miss this window, they lose their right to recover the money through the legal system. This is a complete bar to recovery, and no amount of "hardship" on the bank's part can override it.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                However, banks often try to extend this limitation through tricky means, such as making you sign a "Balance Confirmation" or getting you to make a small token payment. Our advocates are trained to spot these "Limitation Trap" tactics. If we find that the bank's recovery application is filed even one day after the limitation period expired, we can have the entire case dismissed at the threshold stage. This is a rare but extremely effective defence that ends the nightmare once and for all.
                            </p>

                            <h2 id="drt-v-civil" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">DRT vs. Civil Court: Choosing Your Battlefield</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While banks prefer the DRT for its speed, there are situations where a borrower can pull the case into a regular civil court. For example, if there is a claim of fraud, or if the property in question is not actually part of the security agreement, the civil court retains its jurisdiction. Civil courts follow the CPC strictly, providing more opportunities for detailed evidence and lengthy cross examination, which can be strategically useful for a borrower facing an unfair bank demand.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our legal strategy involves identifying which "Battlefield" is best for you. If the bank's case is weak on merits, we fight it head on in the DRT. If the case requires a detailed investigation into complex facts, we may move to involve the civil courts or even the High Court under Article 226 of the Constitution. Having a lawyer who can think globally across different court systems is what separates a standard advocate from an expert DRT strategist. We never just "respond" to the bank; we actively choose the legal arena that gives you the highest chance of winning.
                            </p>

                            <h2 id="drat-appeals" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The World of DRAT Appeals: Getting a Second Chance</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the DRT passes an order that is against your interest, the fight is not over. You have the right to appeal to the Debt Recovery Appellate Tribunal (DRAT) within 45 days. The DRAT has the power to review every fact and law applied by the lower tribunal. However, there is a catch: the "Pre-Deposit" rule. Under Section 18 of the SARFAESI Act, you must deposit 50% of the amount claimed by the bank before your appeal can even be heard.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This pre-deposit requirement is a massive hurdle for most borrowers in 2025. Our specialized appellate lawyers are experts at filing "Waiver Applications." We present your financial hardship and the "Prima Facie" strength of your case to convince the judge to reduce the deposit to the minimum allowed 25%. In extraordinary cases where even 25% is impossible, we can approach the High Court to seek further relief. Winning in the DRAT requires a high level of legal scholarship and a deep understanding of Supreme Court precedents, which is exactly why clients choose CredSettle for their appeals.
                            </p>

                            <h2 id="hiring-lawyer" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Why Hiring the Best DRT Advocate is Non-Negotiable</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many people try to "manage" a DRT case themselves or hire a general practitioner who handles everything from divorces to property registration. This is often a fatal mistake. Banking law is specialized, and DRT practice is even more so. The rules of evidence, the timeline for filing, and the temperament of the tribunal judges are unique. A general lawyer might miss the specific "NPA Audit" flaws or the "SARFAESI Procedural Irregularities" that form the core of a successful defence.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The best DRT lawyer brings more than just knowledge of the law; they bring leverage. Banks and their recovery managers know which advocates are "difficult" to beat. When the bank sees a specialized firm like CredSettle representing a borrower, their internal risk assessment changes. They know that we will audit every line of their claim and expose every mistake they made. This often leads to the bank offering a settlement on terms they would never give to an unrepresented or poorly represented borrower. Professional legal fees are an investment in your financial future and the preservation of your assets.
                            </p>

                            <h2 id="msme-protection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Special Protections for MSME Borrowers in 2025</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are a Micro, Small, or Medium Enterprise (MSME), you have specific rights that other borrowers do not. The MSMED Act and the RBI Master Circular on MSME defaults provide a "Handholding Procedure" that banks must follow. A bank cannot simply declare an MSME account as an NPA and start recovery. They are mandated to check if the business is "Stressed" and if a "Rectification Plan" can be put in place to save the business and the jobs it provides.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We help MSME owners use these "Rescue Provisions" as a shield in the DRT. If the bank failed to offer you a restructuring path before initiating SARFAESI, it is a direct violation of the RBI guidelines. We use these regulations to stop the recovery process and force the bank into a mediation where a sustainable repayment plan can be established. For a small business owner, these rules are the difference between bankruptcy and a path to recovery.
                            </p>

                            <h2 id="rbi-rules" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">RBI Guidelines: The Ultimate Rulebook for Lenders</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Reserve Bank of India (RBI) is the supreme regulator of the banking sector, and its "Master Circulars" have the force of law. These circulars cover everything from how interest should be calculated to how recovery agents must behave. Most importantly, the RBI mandates that banks must have a "Board Approved Policy" for compromise settlements. They cannot arbitrarily reject a reasonable settlement offer if the borrower is in genuine distress.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our legal team uses the "RBI Defence" extensively. We point out when a bank has violated the "Fair Practices Code" or failed to follow the "Internal Grievance Redressal" mechanism. By showing the DRT that the bank has behaved in an "Unfair or Coercive" manner contrary to RBI rules, we can seek equitable relief. Banks are terrified of the "Banking Ombudsman" and the RBI's regulatory audit; we use that fear as a tool to protect your interests and bring them to the settlement table on your terms.
                            </p>

                            <h2 id="case-strategies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Our Winning Strategy for DRT Case Defence</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we don't just "show up" in court. We follow a battle tested roadmap that has been refined over hundreds of successful cases. Our strategy is built on three pillars: forensic analysis, procedural challenge, and strategic negotiation. We understand that our goal is not just to win a legal argument, but to solve your financial crisis.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light">
                                <ol className="list-decimal pl-6 space-y-4 text-gray-800">
                                    <li><strong>Immediate Audit:</strong> Within 24 hours of engagement, our team audits your 13(2) notice and your loan account history to identify the strongest "Threshold Defences."</li>
                                    <li><strong>Protective Filings:</strong> We move the DRT for a "Caveat" or interim stay to ensure the bank cannot take any surprise action while we are preparing your main Securitization Application.</li>
                                    <li><strong>The Objection Shield:</strong> We draft a meticulous representation under Section 13(3A), creating a legal record of the bank's failures that they will find impossible to ignore.</li>
                                    <li><strong>Evidence Building:</strong> We gather independent valuations, proof of agricultural use, or evidence of procedural failure to build a "Preponderance of Probabilities" in your favor.</li>
                                    <li><strong>Parallel Negotiation:</strong> While fighting the case in court, we engage with the bank's recovery department to push for an OTS (One Time Settlement) using the legal pressure we have created as leverage.</li>
                                </ol>
                            </div>

                            <h2 id="settlement-paths" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">One Time Settlements (OTS): The Peaceful Resolution</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For many borrowers, the goal of a DRT defence is to reach a "One Time Settlement" where the bank waives a portion of the interest and penalties. However, banks rarely give a good OTS deal to someone who has no legal strength. They only settle fairly when they realize that winning the court case will be expensive, uncertain, and time consuming. This is where our "Litigation for Negotiation" philosophy pays off.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We help you draft an "OTS Proposal" that is backed by your legal defences. We explain to the bank why their SARFAESI action will likely fail in the DRT, and why accepting a reasonable settlement now is in their best interest. By aligning their "Commercial Interest" with your "Legal Strength," we achieve settlements that save our clients millions of rupees. An OTS is not a favor from the bank; it is a professional business deal that we negotiate from a position of power.
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

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div id="conclusion" className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center scroll-mt-14">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Protect Your Future Today</h3>
                                <p className="text-blue-800 mb-6">Every hour counts when facing a DRT deadline. Get an immediate consultation with our senior DRT advocates and let us start building your shield.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book Free Consultation
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                CredSettle Disclaimer: This article is intended for informational and educational purposes only. It does not constitute legal advice. We recommend consulting with a qualified advocate to discuss the specifics of your bank recovery case.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">DRT Case Help</h4>
                                <p className="text-sm text-gray-600 mb-6">Facing a bank auction or SARFAESI notice? Get expert legal help now before the deadline passes.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Free Case Audit
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ Stay Order Specialists</p>
                                    <p>✓ SARFAESI Notice Reply</p>
                                    <p>✓ Bank Mediation & OTS</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Deep Dives</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-MSME-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">MSME Recovery Defence</Link>
                                    <Link href="/best-check-bounce-lawyer-for-loan-case" className="block text-sm text-blue-600 hover:underline">Check Bounce Lawyer</Link>
                                    <Link href="/best-lawyers-for-bounced-security-check-for-loans-and-credit-card-disputes" className="block text-sm text-blue-600 hover:underline">Security Check Disputes</Link>
                                    <Link href="/what-is-npa" className="block text-sm text-blue-600 hover:underline">NPA Guide 2025</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
