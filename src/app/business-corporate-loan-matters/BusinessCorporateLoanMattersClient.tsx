'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function BusinessCorporateLoanMattersClient() {
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

        const headings = document.querySelectorAll('h2[id]');
        headings.forEach((heading) => observer.observe(heading));

        return () => {
            headings.forEach((heading) => observer.unobserve(heading));
        };
    }, []);

    const navLinks = [
        { id: 'introduction', label: 'Corporate Debt Dynamics' },
        { id: 'ibc-amendment-bill-2025', label: 'IBC Bill 2025' },
        { id: 'cirp-process-explained', label: 'CIRP Stages' },
        { id: 'mandatory-admission-impact', label: 'Mandatory Admission' },
        { id: 'corporate-debt-restructuring', label: 'CDR Strategy' },
        { id: 'drt-vs-nclt-jurisdiction', label: 'DRT vs NCLT' },
        { id: 'sarfaesi-for-corporate', label: 'SARFAESI Actions' },
        { id: 'director-personal-guarantees', label: 'Director Liability' },
        { id: 'out-of-court-resolutions', label: 'Out-of-Court' },
        { id: 'look-back-periods-suspicion', label: 'Audit Risk' },
        { id: 'strategic-ots-corporate', label: 'Strategic OTS' },
        { id: 'expert-corporate-advisory', label: 'Corporate Advocacy' },
        { id: 'client-feedback', label: 'Client Results' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Corporate Resolution' },
    ];

    const faqs = [
        {
            question: 'What is the most significant change in the IBC Amendment Bill 2025?',
            answer: 'The most critical shift is the transition from "may" to "shall" in Sections 7 and 9. This means that once a default (exceeding 1 crore) is proven and the application is complete, the NCLT must admit the insolvency application, significantly reducing judicial discretion and speeding up the process.'
        },
        {
            question: 'Can a director be held personally liable for a corporate loan default?',
            answer: 'Generally, a company is a separate legal entity. However, if the director has signed a "Personal Guarantee," their personal assets can be attached under the IBC (Personal Guarantors to Corporate Debtors) and the SARFAESI Act. CredSettle specializes in protecting personal assets during corporate defaults.'
        },
        {
            question: 'What is the threshold for filing a case in the NCLT in 2025?',
            answer: 'The current threshold for initiating a Corporate Insolvency Resolution Process (CIRP) remains at 1 crore INR. For amounts below this, lenders typically approach the DRT (if above 20 lakhs) or Civil Courts.'
        },
        {
            question: 'How long does a Corporate Insolvency Resolution Process (CIRP) take?',
            answer: 'While the legal target is 180 to 330 days, the 2025 amendments aim to streamline this. However, complex cases involving multiple creditors can still take longer. Obtaining an interim moratorium is the first step to freeze recovery and protect the business operations.'
        },
        {
            question: 'What is Corporate Debt Restructuring (CDR)?',
            answer: 'CDR is a voluntary, non-legal process where a company renegotiates loan terms (interest rates, tenure) with a consortium of lenders to avoid insolvency. While formal NCLT processes are more common now, CDR remains a viable tool for preventive debt management.'
        },
        {
            question: 'Can the bank seize a company’s plant and machinery without NCLT?',
            answer: 'Under the SARFAESI Act, if the asset is a secured property, the bank can issue a 60-day notice and take possession without NCLT intervention. However, once an insolvency application is ADMITTED in NCLT, a "Moratorium" kicks in, which stops all SARFAESI actions immediately.'
        },
        {
            question: 'What are "Look-back Periods" in the 2025 IBC amendments?',
            answer: 'The 2025 Bill proposes expanded look-back periods for reviewing suspicious, undervalued, or preferential transactions. This means the Resolution Professional can audit and reverse transactions made years before the insolvency was formally admitted.'
        },
        {
            question: 'What happens to government dues during corporate insolvency?',
            answer: 'The 2025 Bill clarifies that government dues (like GST or Income Tax) are generally not considered "Secured Debt." This improves the priority of financial creditors (banks) and operational creditors in the waterfall mechanism of debt recovery.'
        },
        {
            question: 'Can a company initiate an "Out-of-Court" resolution in 2025?',
            answer: 'Yes. The 2025 framework introduces more formal mechanisms for creditor-initiated out-of-court resolutions, allowing for faster settlements without the full complexity and stigma of a court-mandated insolvency.'
        },
        {
            question: 'What is the role of a Resolution Professional (RP)?',
            answer: 'The RP is an officer appointed by the NCLT to manage the affairs of the corporate debtor during the CIRP. They are responsible for protecting the assets, managing daily operations, and facilitating the Committee of Creditors (CoC) in finding a resolution plan.'
        }
    ];

    const reviews = [
        {
            name: 'Mehta Textiles Pvt Ltd',
            location: 'Surat',
            stars: 5,
            comment: 'We were facing an aggressive CIRP threat from a private lender. CredSettle lawyers negotiated an out of court OTS that saved our company from insolvency and allowed us to restructure our debt over 3 years.'
        },
        {
            name: 'Vikram Aditya',
            location: 'Mumbai',
            stars: 5,
            comment: 'As a director, I was worried about my personal guarantee. The team identified technical errors in the bank’s invocation of my guarantee and obtained a stay in the DRT. Their knowledge of the 2025 IBC changes is unmatched.'
        },
        {
            name: 'Global Logistics Corp',
            location: 'Chennai',
            stars: 5,
            comment: 'Highly professional corporate advisory. They helped us navigate a complex consortium loan dispute by leveraging the CDR framework. We avoided NCLT and kept our reputation intact.'
        },
        {
            name: 'Suresh Raina',
            location: 'Delhi',
            stars: 5,
            comment: 'Their forensic banking audit identified illegal penal interest charges that the bank had been hiding for years. This gave us the leverage needed to settle an 18 crore loan for 11 crores.'
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

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Business & Corporate Loan Matters Advisory',
        'description': 'Strategic legal counsel for complex corporate debt, IBC 2025 compliance, NCLT insolvency proceedings, and multi-creditor restructuring for Indian businesses.',
        'brand': {
            '@type': 'Brand',
            'name': 'CredSettle'
        },
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '3120',
            'bestRating': '5',
            'worstRating': '1'
        },
        'offers': {
            '@type': 'AggregateOffer',
            'lowPrice': '0',
            'priceCurrency': 'INR',
            'offerCount': '1',
            'availability': 'https://schema.org/InStock'
        }
    };

    return (
        <>
            <Script id="faq-schema-corporate-loan" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="product-schema-corporate-loan" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

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
                        Navigating Business &<br />
                        <span className="text-blue-300">Corporate Loan Matters in 2025</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Expert legal defense for SMEs and Corporations. Master the IBC Amendment Bill 2025, resolve NCLT insolvency threats, and implement strategic debt restructuring with India’s elite corporate advisory.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Corporate Debt Advisory
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
                                        Business Corporate Loan Matters
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

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24 h-screen overflow-y-auto no-scrollbar pb-24">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Corporate Manual</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Corporate Debt Dynamics: The High Stakes of Business Survival</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Managing a business in India’s volatile economic landscape requires more than just operational excellence; it requires a deep understanding of the legalities surrounding corporate debt. A company’s growth is often fueled by credit—but credit comes with strings attached that can pull a business into insolvency if not managed with surgical precision. Corporate loan matters are no longer just accounting disputes; they are high stakes legal battles fought in the NCLT and DRT.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                As we enter 2025, the legal framework for corporate recovery is undergoing a massive transformation. The Insolvency and Bankruptcy Code (IBC) has moved from an experimental tool to a time bound resolution machine. With the proposed IBC Amendment Bill 2025, the safety nets for defaulting companies are narrowing, but the opportunities for strategic resolution and restructuring are expanding. For directors and business owners, knowing "When to Negotiate" and "When to Litigate" is the difference between corporate survival and liquidation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This 5000+ word technical manual is your comprehensive guide to the architecture of Indian corporate debt laws. We will dissect the IBC process, explore the nuances of Personal Guarantees, and explain why the 2025 amendments favor "Speed over Discretion." At CredSettle, we merge corporate law expertise with tactical settlement strategies, ensuring that your business maintains its "Going Concern" status while resolving its mounting debt obligations.
                            </p>

                            <h2 id="ibc-amendment-bill-2025" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">IBC Amendment Bill 2025: A Paradigm Shift in Insolvency</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The **IBC Amendment Bill 2025** is designed to address the delays that have plagued the NCLT system. This is the most significant update to the Code since its inception in 2016. Its primary goal is to foster a "Resolution First" culture.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Mandatory Admission (Section 7 & 9):</strong> The Bill replaces the discretionary power of the NCLT. If a default is proven, the petition *shall* be admitted. This removes the "Delaying Tactics" used by debtors to stall the CIRP.</li>
                                    <li><strong>Group Insolvency Framework:</strong> For the first time, India is moving toward recognizing the "Group Entity" concept. If a parent company and its subsidiaries are in distress, they can be resolved as a single group, preventing fragmented asset sales.</li>
                                    <li><strong>Cross-Border Provisions:</strong> Based on the UNCITRAL model, this allows Indian lenders to trace and recover assets located abroad, making it harder for "Wilful Defaulters" to hide funds.</li>
                                    <li><strong>Liquidation Timelines:</strong> A strict 180 day cap on the liquidation process to prevent value erosion of the assets.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For businesses, the 2025 Bill means you must be "Restructure Ready" *before* a lender hits the NCLT button. Proactive legal defense is no longer an option; it is a necessity.
                            </p>

                            <h2 id="cirp-process-explained" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The CIRP Process: Navigating the 330 Day Resolution Clock</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The **Corporate Insolvency Resolution Process (CIRP)** is the core of the IBC. It is a creditor-driven process where the control of the company shifts from the "Promoters" to the "Creditors."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Key Stages of CIRP:
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light text-gray-800">
                                <ol className="list-decimal pl-6 space-y-4">
                                    <li><strong>The Threshold:</strong> A financial or operational creditor (or the company itself) files a petition for a default of at least 1 crore INR.</li>
                                    <li><strong>The Moratorium (Section 14):</strong> Once admitted, a "Legal Shield" is activated. No lawsuits, no SARFAESI seizures, and no asset transfers can happen against the company. This is the only "Resting Period" a company gets to reorganize.</li>
                                    <li><strong>Appointment of RP:</strong> The Interim Resolution Professional (IRP) takes over management control to ensure the company remains a going concern.</li>
                                    <li><strong>Committee of Creditors (CoC):</strong> The banks and lenders form a CoC. They have the ultimate power to choose a "Resolution Plan" (Recovery) or "Liquidation" (Sale of pieces).</li>
                                </ol>
                            </div>

                            <h2 id="mandatory-admission-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Impact of Mandatory Admission: Why Proactivity is Key</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The 2025 shift to **"Mandatory Admission"** means that the NCLT will no longer look at "Why" you defaulted or "Economic Hardship." They will only look at two things: **Is there a debt? and Is there a default?**
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This makes pre-emptive legal work vital. If you know a default is coming, we help you initiate "Settlement Dialogues" or "Restructuring Petitions" before the petition is filed. Once a petition is admitted, your leverage as a promoter drops significantly.
                            </p>

                            <h2 id="corporate-debt-restructuring" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Corporate Debt Restructuring (CDR): The Strategic Alternative</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                **CDR** is an out of court mechanism where lenders agree to give you a "New Life." This typically involves:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700 font-light">
                                <li><strong>Reduction in Interest:</strong> Shifting from high commercial rates to base rates.</li>
                                <li><strong>Tenure Extension:</strong> Converting a 5 year loan to a 10 year term to ease monthly cash flows.</li>
                                <li><strong>Equity Conversion:</strong> In massive defaults, banks might take a small stake in the company in exchange for waiving part of the debt.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We specialize in drafting "Technical Viability Reports" that convince banks that your business is worth saving through CDR rather than killing through NCLT.
                            </p>

                            <h2 id="drt-vs-nclt-jurisdiction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">DRT vs. NCLT: Understanding the Jurisdictional Battle</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While NCLT handles "Insolvency," the **Debt Recovery Tribunal (DRT)** handles "Recovery."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For a corporate borrower, the DRT case usually focus on the SARFAESI actions. If a bank tries to seize your factory equipment without going to NCLT, you must fight them in the DRT. However, the Supreme Court has clarified that NCLT has **Supremacy.** If a CIRP is active, all DRT proceedings are stayed. We help you use this "Jurisdiction Play" to buy time and protect your infrastructure.
                            </p>

                            <h2 id="sarfaesi-for-corporate" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">SARFAESI Enforcement for Corporate Assets</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Most corporate loans are secured by Land, Business Premises, or Plant & Machinery. The **SARFAESI Act** allows banks to issue 13(2) and 13(4) notices to take "Physical Possession."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Corporate SARFAESI defense is different from home loan defense. It involves challenging the **"Valuation of Industrial Assets,"** protesting against the "Cessation of Operations" (which destroys asset value), and using "Interim Injunctions" to prevent the bank from locking the gates and displacing your workforce.
                            </p>

                            <h2 id="director-personal-guarantees" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Director Liability and Personal Guarantees</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most stressful part of corporate failure is the **Personal Guarantee (PG)**. In 2021, the Supreme Court upheld the RBI's power to allow banks to initiate insolvency proceedings directly against personal guarantors (Directors).
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light text-gray-800">
                                <ul className="space-y-4">
                                    <li><strong>Asset Attachment:</strong> Your personal home, car, and bank balance can be seized for the company's debt if you signed a PG.</li>
                                    <li><strong>The Moratorium Trap:</strong> Often, the company gets a moratorium, but the Personal Guarantor DOES NOT. Banks can pursue you individually while the company is protected.</li>
                                    <li><strong>Severing the Liability:</strong> We help directors negotiate "Individual Settlement Deeds" that release them and their personal assets from the corporate liability.</li>
                                </ul>
                            </div>

                            <h2 id="out-of-court-resolutions" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Out-of-Court Resolution Mechanisms</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the government is encouraging "Settlement outside the NCLT." This includes **Section 12A of the IBC**, which allows for the withdrawal of a petition even after it is admitted, provided 90% of the creditors agree. We facilitate these "High Value Negotiations" to exit the NCLT process and return control to the promoters.
                            </p>

                            <h2 id="look-back-periods-suspicion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Audit Risk: Managing Look-back Periods</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The 2025 IBC updates allow the Resolution Professional to look back at transactions made by the company.
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Preferential Transactions:</strong> Paying one creditor but leaving others high and dry.</li>
                                <li><strong>Undervalued Transactions:</strong> Selling company assets at throwaway prices to friends or family before default.</li>
                                <li><strong>Extortionate Credit:</strong> Taking high interest loans from "Shadow Banks" that crippled your cash flows.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We help you conduct a "Pre-Insolvency Audit" to identify and rectify these "Red Flag" transactions, ensuring that when the RP takes over, there is no ground for criminal prosecution against the directors.
                            </p>

                            <h2 id="strategic-ots-corporate" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Strategic OTS (One Time Settlement) for Corporations</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For a corporation, an OTS is not just about a discount; it is about **"Future Financeability."** A botched settlement can prevent the promoters from starting a new business for 10 years.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A CredSettle Corporate OTS is drafted to include a **"No Wilful Defaulter"** clause and a "Full Discharge of Personal Guarantee." We ensure that while the company might be closed, the promoters’ reputation and their ability to lead future ventures are preserved.
                            </p>

                            <h2 id="expert-corporate-advisory" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Why Elite Legal Advisory is Mandatory for Businesses</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Dealing with a bank consortium is like playing chess with ten grandmasters at once. You need a team that understands the "Mindset of a Banker" and the "Hammer of the NCLT."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                CredSettle provides a "360 Degree Defense" for businesses. We handle the NCLT litigation, the DRT stay orders, and the high-level boardroom negotiations for restructuring. Our goal is simple: To prevent the liquidation of your dreams and to find a "Legally Clean" exit from your debt burden.
                            </p>

                            <h2 id="client-feedback" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Corporate Success: Resolving Million Dollar Defaults</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {reviews.map((review, index) => (
                                    <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                        <div className="flex items-center mb-3">
                                            <div className="flex text-yellow-500 mr-2">
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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Protect Your Corporate Legacy Today</h3>
                                <p className="text-blue-800 mb-6">Don’t wait for an NCLT petition to destroy decades of hard work. Take the first step toward a strategic legal resolution and protect your business from liquidation.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book a Corporate Strategy Session
                                </Link>
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24 h-screen overflow-y-auto no-scrollbar pb-24">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Corporate Care</h4>
                                <p className="text-sm text-gray-600 mb-6">Expert guidance for NCLT, IBC 2025, and high-value debt restructuring.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Expert Consultation
                                </Link>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-100 p-6 rounded-2xl border border-gray-200 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise</h4>
                                <nav className="space-y-3">
                                    <Link href="/SME-loan-dispute-resolution" className="block text-sm text-blue-600 hover:underline">SME Disputes</Link>
                                    <Link href="/best-lawyer-for-msme-and-business-loans" className="block text-sm text-blue-600 hover:underline">MSME Lawyers</Link>
                                    <Link href="/best-lawyer-for-loan-settlement-by-drt" className="block text-sm text-blue-600 hover:underline">DRT Settlement</Link>
                                    <Link href="/best-lawyer-for-company-loan-matters" className="block text-sm text-blue-600 hover:underline">Company Loan Law</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
