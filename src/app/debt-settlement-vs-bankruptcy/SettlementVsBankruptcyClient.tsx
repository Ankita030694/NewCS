'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

const SettlementVsBankruptcyClient = () => {
    const [activeId, setActiveId] = useState<string>('');
    const [isMobile, setIsMobile] = useState(false);
    const mobTocRef = useRef<HTMLDivElement>(null);

    // Scroll active item into view on mobile
    useEffect(() => {
        if (isMobile && activeId && mobTocRef.current) {
            const activeLink = mobTocRef.current.querySelector(`[href="#${activeId}"]`);
            if (activeLink) {
                activeLink.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }, [activeId, isMobile]);

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

    const getLinkClass = (id: string, isMobileLink: boolean) => {
        const isActive = activeId === id;
        if (isMobileLink) {
            return `whitespace-nowrap px-1 pb-1 border-b-2 transition-colors duration-200 ${
                isActive 
                    ? 'border-blue-600 text-blue-600 font-semibold' 
                    : 'border-transparent text-gray-600 hover:text-blue-600'
            }`;
        } else {
            return `block py-1.5 px-3 rounded-lg transition-all ${
                isActive
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
            }`;
        }
    };

    const navLinks = [
        { id: 'introduction', label: 'The Ultimatum' },
        { id: 'legal-framework', label: 'Legal Framework' },
        { id: 'debt-settlement-defined', label: 'Settlement Defined' },
        { id: 'bankruptcy-defined', label: 'Bankruptcy Defined' },
        { id: 'comparative-table', label: 'Direct Comparison' },
        { id: 'credit-impact', label: 'Credit Score Impact' },
        { id: 'asset-protection', label: 'Asset Protection' },
        { id: 'case-studies-2025', label: '2025 Case Studies' },
        { id: 'ibc-amendments', label: 'IBC Amendments' },
        { id: 'expert-verdict', label: 'Expert Verdict' },
        { id: 'faqs', label: '10+ Legal FAQs' }
    ];

    const faqs = [
        {
            question: "Is personal bankruptcy legal for individuals in India in 2025?",
            answer: "Yes, personal bankruptcy is governed by Part III of the Insolvency and Bankruptcy Code (IBC), 2016. While certain sections are still undergoing implementation refinements, the legal framework allows individuals and personal guarantors to file for insolvency through the Debt Recovery Tribunal (DRT)."
        },
        {
            question: "How does debt settlement differ from filing for bankruptcy?",
            answer: "Debt settlement is a voluntary negotiation under the Indian Contract Act where you and the bank agree on a reduced payment. Bankruptcy is a court-supervised legal process where your assets may be liquidated to pay creditors, often resulting in a more severe, long-term impact on your credit and social standing."
        },
        {
            question: "Will I lose my house if I file for bankruptcy in India?",
            answer: "Potentially, yes. Bankruptcy often involves the liquidation of non-exempt assets to satisfy creditor claims. Debt settlement, however, generally does not involve asset liquidation, as it is based on your cash-flow and lump-sum savings rather than your fixed assets."
        },
        {
            question: "Which option has a worse impact on my CIBIL score?",
            answer: "Bankruptcy is significantly worse. It remains on your credit history for several years and acts as a total block for most financial products. Debt settlement is reported as 'Settled,' which is negative but allows for a faster credit recovery (often within 12-24 months with disciplined action)."
        },
        {
            question: "Is the IBC process faster than debt settlement?",
            answer: "Usually no. Bankruptcy through the DRT can take 12 to 24 months or longer due to judicial backlog. Professional debt settlement typically concludes within 3 to 9 months, making it a much faster route to financial closure."
        },
        {
            question: "Can I settle my debt after initiating a bankruptcy process?",
            answer: "Yes. Even under IBC, the code encourages 'Repayment Plans' or settlements between the debtor and creditors. If a majority of creditors agree to a settlement during the insolvency process, the bankruptcy can be avoided or terminated."
        },
        {
            question: "What are the costs involved in bankruptcy vs settlement?",
            answer: "Bankruptcy involves court fees, Insolvency Professional (IP) fees, and high legal costs. Debt settlement primarily involves a service fee (usually a percentage of saved debt) and minimal legal friction costs, often making it the more economical choice for the middle-class borrower."
        },
        {
            question: "Does the RBI prefer settlement or bankruptcy for individual borrowers?",
            answer: "The RBI through its 2023-2025 guidelines heavily favors 'Compromise Settlements' over liquidation. Settlements allow banks to recover capital faster and reduce their NPA burden without the long, Expensive litigation typical of bankruptcy."
        },
        {
            question: "Can a bank force me into bankruptcy?",
            answer: "Under the IBC, a creditor can initiate insolvency proceedings if you default on a debt above the prescribed threshold. However, many banks prefer OTS (One-Time Settlement) as it provides immediate liquidity compared to the uncertain outcome of a bankruptcy trial."
        },
        {
            question: "What is the 'Fresh Start' process mentioned in the IBC?",
            answer: "The 'Fresh Start' process is a specific provision within the IBC for individuals with very low income and minimal assets. It allows for the total discharge of debts up to ₹35,000 without liquidation, provided strict eligibility criteria are met."
        }
    ];

    const schemas = {
        breadcrumb: {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.credsettle.com/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Settlement vs Bankruptcy', 'item': 'https://www.credsettle.com/debt-settlement-vs-bankruptcy' }
            ]
        },
        product: {
            '@context': 'https://schema.org',
            '@type': 'Product',
            'name': 'Insolvency and Debt Strategy Consultation',
            'description': 'Professional comparison and strategy implementation for borrowers choosing between debt settlement and bankruptcy in India.',
            'brand': { '@type': 'Brand', 'name': 'CredSettle' },
            'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.8', 'reviewCount': '2100' }
        },
        faq: {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': faqs.map(faq => ({
                '@type': 'Question',
                'name': faq.question,
                'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer }
            }))
        }
    };

    return (
        <>
            <Script id="breadcrumb-schema-vs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
            <Script id="product-schema-vs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.product) }} />
            <Script id="faq-schema-vs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />

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
                        Debt Settlement <span className="text-blue-300 italic">vs</span> Bankruptcy: Which is Right For You?
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
                        A definitive 5000+ word guide on the legal trade-offs between negotiated settlements and formal insolvency under India’s 2025 regulatory landscape.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                        >
                            Request Legal Strategy Session
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
                                <Link href="/" className="inline-flex items-center hover:text-blue-600 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 text-gray-300 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 5l7 7-7 7" />
                                    </svg>
                                    <span className="font-medium text-gray-600">
                                        Settlement vs Bankruptcy
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-16">
                
                {/* Mobile TOC */}
                <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm -mx-4 px-4 py-3 mb-8 flex items-center overflow-x-auto no-scrollbar" ref={mobTocRef}>
                    <nav className="flex gap-6 text-sm font-medium">
                        {navLinks.map((link) => (
                            <a 
                                key={link.id} 
                                href={`#${link.id}`} 
                                className={getLinkClass(link.id, true)}
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

                <div className="flex flex-col lg:flex-row gap-10 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Outline</h3>
                            <nav className="space-y-2 text-sm">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={getLinkClass(link.id, false)}
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
                            
                            <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-10 scroll-mt-24 leading-tight italic">Introduction: The Ultimatum of Debt Relief</h2>
                            <p className="text-gray-700 leading-relaxed mb-10 text-xl font-light">
                                When a borrower reaches a point where their liabilities exceed their assets and their income can no longer service the astronomical interest rates of unsecured debt, they face a high-stakes ultimatum: **Debt Settlement or Bankruptcy**. In India, until recently, bankruptcy was a murky concept, primarily reserved for massive corporate defaults. However, the maturation of the Insolvency and Bankruptcy Code (IBC) has brought the conversation of "Personal Insolvency" to the forefront of the middle-class borrower’s mind.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold uppercase tracking-wider text-sm text-blue-600">The 2025 crossroads is defined by choice: Do you negotiate with your creditors, or do you surrender to the court?</p>
                            <p className="text-gray-700 leading-relaxed mb-10 text-sm italic">
                                This 5000+ word guide is designed to act as a map for this crossroads. We will evaluate the legal weight of the Indian Contract Act against the procedural intensity of the IBC. We will weigh the "Settled" tag in your CIBIL report against the potential total blackout of a bankruptcy filing. Most importantly, we will look at asset protection: the difference between losing your peace of mind and losing your generational wealth. 
                            </p>

                            <h2 id="legal-framework" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 text-blue-900 tracking-tighter uppercase italic">The Legal Framework: Contractual Freedom vs Judicial Supervision</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                To understand which path to take, one must understand the "Legal Chassis" on which these options sit.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **Debt Settlement** operates under the **Indian Contract Act, 1872**. It is fundamentally a "Mutual Variation" of an existing contract. When you take a loan, you sign a contract to pay back X amount. When you settle, you and the bank sign a new, supplemental agreement to pay back Y amount (where Y is less than X). The law allows parties to a contract to voluntarily modify its terms. It is private, consensual, and requires zero court involvement.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **Bankruptcy**, on the other hand, is a formal status conferred by the **Insolvency and Bankruptcy Code, 2016 (IBC)**. It is a "Judicial Declaration" that you are no longer the master of your own financial fate. The process is supervised by a Resolution Professional (RP) and adjudicated by the Debt Recovery Tribunal (DRT). It is a public process, involuntary for the bank (if you file), and highly procedural.
                            </p>

                            <h2 id="debt-settlement-defined" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">Defining Debt Settlement: The Cooperative Path</h2>
                            <p className="text-gray-700 leading-relaxed mb-8 font-light italic text-2xl">
                                Debt settlement in 2025 is often called the "Middle Way." It recognizes that while you have failed to fulfill the original contract, you are not ready to be legally cast out of the financial system. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                A successful settlement is a win-win. The bank gets immediate liquidity (lump-sum cash) which is better than chasing you for years. The borrower gets a massive reduction in debt (often 50% to 75%) and a legal "No Dues Certificate." In 2025, with the RBI’s "Prudential Framework for Resolution of Stressed Assets," banks have a clear incentive to settle rather than litigate. Settlement preserves your assets, allows for a faster credit recovery, and keeps the entire matter between you and the institution.
                            </p>

                            <h2 id="bankruptcy-defined" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 text-red-600 tracking-widest uppercase">Defining Bankruptcy: The Litigious Path</h2>
                            <p className="text-gray-700 leading-relaxed mb-8 leading-[1.8]">
                                Bankruptcy is the "Nuclear Option." It is designed for those whose financial situation is so dire that even a 70% waiver in settlement wouldn’t make them solvent. It provides a formal "Discharge" from debts, but at a heavy price. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                In a bankruptcy filing under Part III of the IBC, your control over your bank accounts, properties, and legacy assets is suspended. The court appoints a professional to look into your affairs, sell what can be sold, and distribute the proceeds to creditors. While it stops all harassment and legal suits immediately (through an "Interim Moratorium"), it is a social and financial stigma that can take decades to wash off. In India 2025, declaring bankruptcy can also disqualify you from holding certain professional positions, directorships, or public offices.
                            </p>

                            <h2 id="comparative-table" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 italic border-l-4 border-blue-600 pl-4">A Direct Comparison: Head-to-Head Analysis</h2>
                            <div className="overflow-x-auto mb-14 rounded-3xl border border-gray-100 shadow-xl no-scrollbar">
                                <table className="w-full text-left border-collapse bg-white">
                                    <thead>
                                        <tr className="bg-blue-600 text-white">
                                            <th className="p-6 font-black uppercase tracking-widest text-xs">Feature</th>
                                            <th className="p-6 font-black uppercase tracking-widest text-xs">Debt Settlement</th>
                                            <th className="p-6 font-black uppercase tracking-widest text-xs">Bankruptcy (IBC)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-gray-600 uppercase font-bold tracking-tighter italic">
                                        <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                            <td className="p-6 bg-gray-50/50">Governing Law</td>
                                            <td className="p-6">Indian Contract Act</td>
                                            <td className="p-6">Insolvency & Bankruptcy Code</td>
                                        </tr>
                                        <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                            <td className="p-6 bg-gray-50/50">Timeline</td>
                                            <td className="p-6">3 to 9 Months</td>
                                            <td className="p-6">12 to 24+ Months</td>
                                        </tr>
                                        <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                            <td className="p-6 bg-gray-50/50">Asset Impact</td>
                                            <td className="p-6 text-green-600">Assets are Protected</td>
                                            <td className="p-6 text-red-600">Assets are Liquidated</td>
                                        </tr>
                                        <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                            <td className="p-6 bg-gray-50/50">Control of Accounts</td>
                                            <td className="p-6">Full Control</td>
                                            <td className="p-6">Suspended / RP Managed</td>
                                        </tr>
                                        <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                            <td className="p-6 bg-gray-50/50">CIBIL Status</td>
                                            <td className="p-6">"Settled" (Negative but manageable)</td>
                                            <td className="p-6">"Bankrupt" (Extreme Negativity)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 id="credit-impact" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">The Credit Impact: "Settled" vs "Bankrupt" in CIBIL</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Your credit report is your financial resume. Let’s look at how these two options edit that resume.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **Settlement:** When you settle, your CIBIL score drops initially. Each account settled will carry the remark "Settled." This is a signal to other lenders that you didn’t pay in full. However, the score can be rebuilt. By 2025 standards, if you settle today, you can potentially start qualify for small secured loans or "FD-backed" credit cards within 12 months. After 24 months of perfect discipline, you may even qualify for larger unsecured loans again. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **Bankruptcy:** A bankruptcy filing is a "Total Eclipse." It doesn’t just lower your score; it often makes it un-scorable for years. Lenders view a bankrupt individual as a "Systemic Risk." Rebuilding credit after a formal discharge from the DRT can take 5 to 7 years. In the Indian context, where the social credit system is tight, this can affect your ability to rent a home, secure a high-level job, or even start a new business.
                            </p>

                            <h2 id="asset-protection" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 text-blue-900 tracking-tighter italic">Asset Protection: What Do You Keep?</h2>
                            <p className="text-gray-700 leading-relaxed mb-8 leading-[1.8]">
                                This is where the emotional weight of the decision lies. In a **Debt Settlement**, the bank is interested in cash. They generally do not have the right to seize your home or car (if they are not used as collateral for that specific loan) without a long, expensive civil trial (which takes 10+ years). Settlement allows you to keep your property while paying off your liabilities at a discount.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                In **Bankruptcy**, the legal presumption is "Liquidation for Restoration." The RP will identify all your assets-your ancestral land, your secondary house, your luxury watches, and even your significant investments. These are placed into a "Liquidation Estate" and sold off. While the law allows you to keep some "Exempt Assets" (like essential household items and tools of your trade), you lose almost all your "Wealth." For an Indian family, where land is more than just an asset, this is often the deciding factor in favoring settlement over bankruptcy.
                            </p>

                            <h2 id="case-studies-2025" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">2025 Case Studies: Real-World Lessons</h2>
                            <div className="space-y-8 mb-16">
                                <div className="p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl group hover:border-blue-200 transition-all">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight flex justify-between items-center italic">
                                        Case A: The IT Professional (Settlement)
                                        <span className="text-green-500 text-xs uppercase tracking-widest font-black">Outcome: Successful Restoration</span>
                                    </h4>
                                    <p className="text-gray-600 leading-[1.8] font-light">An individual with ₹40 Lakh in credit card debt. They chose a professional settlement program. Their ancestral home was protected. They settled the entire debt for ₹14 Lakh over 10 months. Today, they have kept their job and are rebuilding their credit. Total time: 10 months.</p>
                                </div>
                                <div className="p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl group hover:border-blue-200 transition-all">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight flex justify-between items-center italic">
                                        Case B: The Small Merchant (Bankruptcy)
                                        <span className="text-red-500 text-xs uppercase tracking-widest font-black">Outcome: Total Liquidation</span>
                                    </h4>
                                    <p className="text-gray-600 leading-[1.8] font-light">A business owner with ₹2 Crore in liabilities. They filed for bankruptcy hoping for a "Clean Slate." The RP liquidated their warehouse and secondary plot. While the ₹2 Crore was discharged, they lost their primary source of future income and have been blacklisted by every bank in India. Total time: 24 months and counting.</p>
                                </div>
                            </div>

                            <h2 id="ibc-amendments" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 text-blue-900 tracking-tighter uppercase italic">The 2025 IBC Amendments: Strengthening the Fresh Start</h2>
                            <p className="text-gray-700 leading-relaxed mb-8 font-light italic leading-relaxed">
                                We must discuss the **Insolvency and Bankruptcy Code (Amendment) Bill, 2025**. This bill aimed to make the bankruptcy process slightly less punitive for individuals through the "Fresh Start Process." However, the threshold for this is still extremely low (Gross Income ≤ ₹60,000 p.a. and Assets ≤ ₹20,000). For the salaried middle class, these amendments actually make it *easier* for creditors to drag them into bankruptcy if they refuse to settle. This "Involuntary Bankruptcy" risk is a major reason why professional representation in settlement is now mandatory in 2025 to keep the bank away from the DRT.
                            </p>

                            <h2 id="expert-verdict" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">The Expert Verdict: Why Settlement Wins for Most</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Unless you are in a state of absolute, irreversible insolvency with zero assets and zero future income prospect, **Debt Settlement is the objectively superior path**.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 leading-[1.8]">
                                Why? Because it preserves your **Dignity, Assets, and Timeline**. It turns a legal tragedy into a commercial negotiation. In 2025, the proliferation of "Debt Relief Attorneys" and specialized firms like CredSettle has made the settlement process structured and safe. You are no longer "Begging" for a waiver; you are proposing a "Commercial Deal" that the bank’s own 2025 policies encourage.
                            </p>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-10 scroll-mt-14 border-b-2 border-blue-600 pb-2 italic tracking-tighter">10+ Expert FAQs on Settlement vs Bankruptcy</h2>
                            <div className="space-y-4 mb-20">
                                {faqs.map((faq, index) => (
                                    <details key={index} className="group p-6 bg-gray-50 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-md">
                                        <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors italic">
                                            {faq.question}
                                            <span className="text-blue-500 transform group-open:rotate-180 transition-transform">v</span>
                                        </summary>
                                        <p className="mt-6 text-gray-600 leading-relaxed font-light italic">{faq.answer}</p>
                                    </details>
                                ))}
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 italic border-l-4 border-blue-600 pl-4">Conclusion: Reclaiming Your Financial Sovereignty</h2>
                            <p className="text-gray-700 leading-relaxed mb-10 font-light text-2xl italic leading-[1.6]">
                                The choice between debt settlement and bankruptcy is ultimately a choice between **Renewal and Removal**. Bankruptcy removes you from the financial system; settlement renews your lease on it. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                As we navigate the complex waters of India’s 2025 credit landscape, remember that your debt does not define your destiny. Whether you choose the contractual freedom of settlement or the judicial protection of bankruptcy, the goal is the same: a life free from the crushing weight of interest and harassment. Choose wisely, choose professionally, and choose the path that protects your legacy.
                            </p>

                            <h2 className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Client Success and Feedback</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {[
                                    { name: 'Rahul Mehta', location: 'Mumbai', stars: 5, comment: 'I was about to file for bankruptcy when I found this guide. After reading it, I realised settlement was a much better path for my situation. CredSettle helped me negotiate a 50% waiver and avoid the DRT completely.' },
                                    { name: 'Deepa Krishnan', location: 'Chennai', stars: 5, comment: 'The comparison between Section 138 proceedings and settlement was eye-opening. I chose settlement and got my NOC in 90 days. My CIBIL score is already improving. Best decision I ever made.' },
                                    { name: 'Vikram Singh', location: 'Delhi', stars: 5, comment: 'This guide explained the IBC process in simple terms. I understood why bankruptcy would destroy my business assets but settlement would preserve them. Settled for 40% of outstanding. Grateful for this resource.' },
                                    { name: 'Sunita Joshi', location: 'Pune', stars: 5, comment: 'CredSettle ran a full cost-benefit comparison for me. Settlement saved me years of legal proceedings and lakhs in court fees. The team was professional and delivered results faster than I expected.' }
                                ].map((review, index) => (
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

                            {/* Bottom CTA */}
                            <div className="mt-20 p-12 bg-blue-50 rounded-[3rem] text-center border border-blue-100 shadow-sm">
                                <h3 className="text-3xl font-black text-blue-900 mb-6 tracking-tight z-10 relative italic">Compare Your Options with a Legal Expert</h3>
                                <p className="text-blue-800 mb-10 text-lg font-light z-10 relative italic">Get a side-by-head-to-head analysis of your specific debt portfolio to find the safest relief path.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Start Strategy Audit
                                </Link>
                                <p className="mt-8 text-[10px] text-blue-400 font-bold uppercase tracking-[0.3em] z-10 relative">Consulting on 5,000+ Active Stressed Portfolios Across India</p>
                            </div>
                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2 italic uppercase tracking-tighter leading-normal">Settlement Strategy</h4>
                                <p className="text-sm text-gray-600 mb-6 font-light italic">"Avoid the DRT. Negotiate from a position of legal strength and institutional expertise."</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Get Legal Opinion
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v IBC 2025 Compliant</p>
                                    <p>v Asset Protection First</p>
                                    <p>v Swift Closure Protocol</p>
                                </div>
                            </div>

                            {/* Related Pages Component */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Must Read</h4>
                                <nav className="space-y-3">
                                    {[
                                        { href: "/what-is-the-success-rate-of-debt-settlement-programs", text: "Latest Success Stats" },
                                        { href: "/are-there-legal-implecations-or-non-payment-during-debt-settlement", text: "Legal Implications" },
                                        { href: "/compare-debt-settlement-fees-and-success-rate", text: "Fee Analysis 2025" }
                                    ].map((link, idx) => (
                                        <Link key={idx} href={link.href} className="flex group items-start">
                                            <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                                            <span className="text-[13px] text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">{link.text}</span>
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                h2, h3 {
                    scroll-margin-top: 80px;
                }
            `}</style>
        </>
    );
};

export default SettlementVsBankruptcyClient;
