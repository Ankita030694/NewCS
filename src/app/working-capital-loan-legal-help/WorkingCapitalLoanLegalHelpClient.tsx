'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function WorkingCapitalLoanLegalHelpClient() {
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
        { id: 'introduction', label: 'Overview' },
        { id: 'wc-cycle', label: 'WC Cycle Deep-Dive' },
        { id: 'rbi-circulars', label: 'RBI Regulations 2025' },
        { id: 'financing-types', label: 'CC vs OD vs WCDL' },
        { id: 'sbr-framework', label: 'Scale-Based Regs' },
        { id: 'collateral-charge', label: 'Security & Charges' },
        { id: 'gst-lending', label: 'GST-Linked Loans' },
        { id: 'documentation', label: 'Key Documents' },
        { id: 'renewal-legalities', label: 'Renewals & Audits' },
        { id: 'dispute-resolution', label: 'Dispute & Recovery' },
        { id: 'digital-solutions', label: 'OCEN & Aggregators' },
        { id: 'reviews', label: 'Client Feedback' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Verdict' },
    ];

    const faqs = [
        {
            question: "What is the legal difference between Cash Credit (CC) and Overdraft (OD) in 2025?",
            answer: "While both are running accounts, Cash Credit is primarily secured by the hypothecation of business assets like stock and book debts (current assets), whereas an Overdraft is typically granted against fixed assets, financial securities like FDs, or as an 'unsecured' facility for a short duration. From a legal standpoint, the charge creation for CC is more complex as it involves continuous monitoring of fluctuating stock values."
        },
        {
            question: "Can a bank unilaterally reduce my working capital limit?",
            answer: "Yes, provided the sanction letter or the facility agreement contains a 'Review Clause.' Most working capital facilities are 'Repayable on Demand.' Banks usually reduce limits based on the 'Drawing Power' (DP) calculated from your monthly stock statements. If your assets drop, your DP and consequently your usable limit will also be reduced legally by the bank."
        },
        {
            question: "What happens if there is a discrepancy in the Stock Audit report?",
            answer: "A Stock Audit discrepancy can lead to the account being classified as 'Irregular' or even 'Stressed.' Legally, the bank can freeze the account or convert the excess drawal into a 'Working Capital Demand Loan' (WCDL) with a higher interest rate and a strict repayment schedule. Repeated discrepancies are often viewed as a 'Willful Misrepresentation' of assets."
        },
        {
            question: "Is it mandatory to register a charge with CERSAI for a working capital loan?",
            answer: "Yes, under the SARFAESI Act, registration of security interest with the Central Registry of Securitisation Asset Reconstruction and Security Interest (CERSAI) is mandatory for all secured loans. Failure to register can prevent the lender from using the fast-track recovery provisions of the SARFAESI Act, giving the borrower a temporary legal defense."
        },
        {
            question: "How does the 'Pari-Passu' charge work in consortium lending?",
            answer: "In a consortium, multiple banks lend to the same business against the same assets. A 'Pari-Passu' charge means all lenders have an equal right over the assets in proportion to their outstanding debt. Legally, any sale of assets or recovery must be shared among all consortium members, and one bank cannot act independently without the consent of others."
        },
        {
            question: "What is the impact of GST non-compliance on working capital renewals?",
            answer: "In 2025, GST compliance is the primary 'Trust Signal.' Banks now pull data directly from the GSTN (with consent) to verify sales figures. Any mismatch between your 'Audit Financials' and 'GST Returns' is a legal red flag that can lead to a rejection of the renewal or a sharp increase in interest rates as a 'Risk Premium.'"
        },
        {
            question: "Can a director be held personally liable for a company's working capital default?",
            answer: "Only if the director has signed a 'Personal Guarantee' (PG). In most Indian SME and Mid-Corporate lending, banks mandate PGs from all promoter directors. Once signed, the PG makes the director's personal assets (property, bank accounts) liable for the company's debt, effectively piercing the corporate veil."
        },
        {
            question: "What are the RBI's 'Restructuring' rules for MSME working capital in 2025?",
            answer: "The RBI allows for a one-time restructuring of MSME loans without a downgrade in asset classification, provided the entity is a GST-registered MSME. Legally, this involves extending the repayment period or converting unpaid interest into a 'Funded Interest Term Loan' (FITL), giving the business breathing room to recover its cash flow."
        },
        {
            question: "What is the legal validity of an 'Email' as a request for limit enhancement?",
            answer: "Under the Information Technology Act, 2000, electronic communications like emails are legally valid. However, most bank agreements specify that an 'Enhancement Request' must be submitted in a 'Prescribed Format' with fresh financial projections. An email can initiate the discussion, but the formal legal commitment requires physical or digitally signed documents."
        },
        {
            question: "How does a 'Letter of Credit' (LC) differ legally from a direct loan?",
            answer: "An LC is a 'Contingent Liability' for the bank. It is a legal guarantee to a third party (the seller) that the bank will pay if the buyer fails. Unlike a direct loan, the bank's money is not moved until the seller presents valid shipping documents. Legally, it is an 'Independent Contract' between the bank and the seller, regardless of disputes between the buyer and seller."
        }
    ];

    const reviews = [
        {
            name: "Mehul Shah",
            location: "Ahmedabad",
            stars: 5,
            comment: "Our manufacturing unit was facing a liquidity crunch due to inventory pileup. CredSettle helped us understand the legal nuances of the Tandon Committee norms used by our bank, allowing us to successfully argue for a 25% increase in our CC limit."
        },
        {
            name: "Anjali Gupta",
            location: "Delhi",
            stars: 5,
            comment: "The section on GST integrated lending was an eye opener. We realized our internal bookkeeping wasn't aligned with our GST filings, which was the reason our renewal was stuck for 4 months. Fixing the legal alignment cleared the path."
        },
        {
            name: "Karthik Subramanian",
            location: "Chennai",
            stars: 5,
            comment: "Excellent advisory on SARFAESI risks. We were worried about our stock audit discrepancies being used against us. The legal strategy provided here helped us negotiate a peaceful restructuring with the bank."
        },
        {
            name: "Pritam Singh",
            location: "Ludhiana",
            stars: 5,
            comment: "Simple, layout is very easy to read on mobile. The FAQ on personal guarantees saved me from signing a generic document that would have put my family home at risk for a business expansion loan."
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
        'name': 'Working Capital Loan Legal Help',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '3120',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-wc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-wc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        Working Capital Loan Legal Help:<br />
                        <span className="text-blue-300">Optimize Your Cash Flow</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Stay ahead of the working capital cycle. Expert legal advisory on RBI Master Circulars, CC/OD credit facilities, and multi-bank consortium management in India.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Request Legal Audit
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
                                        Working Capital Loan Legal Help
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
                    <aside className="lg:width-1/4 xl:w-1/5 hidden lg:block sticky top-14">
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
                                            const element = document.getElementById(link.id);
                                            if (element) {
                                                const offset = 80;
                                                const bodyRect = document.body.getBoundingClientRect().top;
                                                const elementRect = element.getBoundingClientRect().top;
                                                const elementPosition = elementRect - bodyRect;
                                                const offsetPosition = elementPosition - offset;
                                                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Lifeline of Business Operations (2025 Perspective)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the fast paced Indian market of 2025, Liquidity is the ultimate competitive advantage. While growth and profitability are the results, Working Capital is the process. A working capital loan is not just a financial facility; it is a legal contract that defines the boundaries of your daily operations. Whether you are a manufacturer in a rural district or a high growth tech company in an urban center, how you manage your Current Assets and Current Liabilities determines the lifespan of your enterprise.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                As we enter 2025, the regulatory landscape has shifted significantly. The Reserve Bank of India (RBI) has moved towards a Data First approach, where credit decisions are increasingly automated based on GST filings, banking history, and digital footprints. This shift has made Legal Help for Working Capital more critical than ever. It is no longer just about knowing the bank manager; it is about ensuring your Legal Data: from your stock hypothecation audits to your CERSAI registrations: is flawless and consistent across all platforms.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                CredSettles Working Capital Loan Legal Help is designed to empower Indian business owners with the technical knowledge required to navigate these complexities. We bridge the gap between your operational needs and the bank's rigid compliance requirements. In a world where SARFAESI and Asset Classification are words that cause sleepless nights, we provide a proactive legal roadmap to secure, manage, and even restructure your credit limits without losing control of your business.
                            </p>

                            <h2 id="wc-cycle" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: Decoding the Working Capital Cycle</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To understand the legal structure of a loan, one must first understand the 'Cycle' it fuels. The Working Capital Cycle (WCC) is the time it takes for a business to convert its current assets and liabilities into cash. It starts from the purchase of raw materials (Accounts Payable) and ends with the collection of cash from the final sale (Accounts Receivable). The 'Gap' in between is what banks fund through working capital loans.
                            </p>

                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Inventory (Raw, WIP, Finished):</strong> Legally, this is 'Hypothecated' to the bank. You own it, but the bank has a 'Charge' over it.</li>
                                    <li><strong>Accounts Receivable (Book Debts):</strong> These are your future cash inflows. Banks lend against these (typically for debts less than 90-180 days old).</li>
                                    <li><strong>Accounts Payable:</strong> This is your 'Trade Credit.' While this is a liability, it is a source of interest free capital.</li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the 'Speed of the Cycle' is being monitored digitally. Lenders are increasingly using 'Early Warning Signals' (EWS) to detect if your cycle is slowing down. A slowdown in the cycle often precedes a financial default. A professional legal advisor helps you draft 'Terms of Sale' for your customers that ensure faster recovery of book debts, thereby keeping your working capital cycle healthy.
                            </p>

                            <h2 id="rbi-circulars" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 2: RBI Master Circulars - The Regulatory Compass for 2025</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The RBI 'Master Circular on Loans and Advances' is the 'Holy Grail' of Indian banking law. In 2025, these circulars have been updated to reflect the 'Scale Based Regulation' for NBFCs and the new 'Prudential Norms' for banks. For a business owner, understanding these circulars is the difference between being a 'Compliant Borrower' and a 'Stressed Asset.'
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the core legacies that still influences 2025 lending is the **Tandon and Chore Committee** reports. These committees defined the 'Max Permissible Bank Finance' (MPBF). Even today, banks use these norms to calculate how much you can borrow. Legally, the bank cannot lend you more than the MPBF, even if you have enough collateral. This 'Gap Financing' rule is designed to prevent systemic over leveraging.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The 2025 updates to the Master Circular have also introduced stricter 'End Use Monitoring.' Banks are now legally mandated to ensure that working capital funds are not 'diverted' for long term capital investments or for 'siphoning' to sister concerns. Any diversion of funds is a major legal breach and can lead to the 'Invocation of Guarantees' and the start of recovery proceedings.
                            </p>

                            <h2 id="financing-types" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 3: Types of Working Capital Financing</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Choosing the right 'Tool' for your liquidity is essential. India has a diverse ecosystem of financing options, each with a unique legal personality:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Cash Credit (CC):</strong> The most common form of working capital. It is a 'Running Account' where the borrower can withdraw funds up to a 'Drawing Power' (DP). The DP is calculated monthly based on the value of stocks and book debts.</li>
                                <li><strong>Overdraft (OD):</strong> Often used synonymously with CC, but legally distinct. ODs are typically 'Asset Backed' (against FDs, property, or shares) or 'Unsecured' for very high creditworthy borrowers.</li>
                                <li><strong>Working Capital Demand Loan (WCDL):</strong> This is a 'Fixed Term' short term loan within your overall working capital limit. It has a lower interest rate compared to CC but must be repaid on a specific date.</li>
                                <li><strong>Non-Fund Based Limits (LC & BG):</strong> These involve the bank's 'Credit Standing.' A Letter of Credit protects sellers, while a Bank Guarantee protects buyers.</li>
                            </ul>

                            <h2 id="sbr-framework" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 4: Scale-Based Regulations (SBR) in 2025</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are borrowing from a Non Banking Financial Company (NBFC), the 2025 **Scale Based Regulation (SBR)** framework is critical. The RBI now categorizes NBFCs into four layers: Base, Middle, Upper, and Top. The 'Middle' and 'Upper' layer NBFCs are now governed by many of the same 'Capital Adequacy' and 'Asset Classification' norms as banks.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For a business borrower, this means that NBFCs are no longer as 'Flexible' as they used to be with NPA classification. In 2025, any account overdue for more than 90 days must be declared an NPA, even by an NBFC. There is no 'Grace Period.' This legal harmonization has made it essential for businesses to ensure that their interest servicing is done with clockwork precision.
                            </p>

                            <h2 id="collateral-charge" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 5: Collateral Management & Pari-Passu Charge</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Security is the heart of a bank's comfort. In working capital, the 'Primary Security' is always the current assets of the business: your stock and your debtors. This is done through 'Hypothecation.' Unlike a 'Pledge', in hypothecation, you keep the goods but they are 'Chargeable' to the bank.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The **CERSAI (Central Registry)** plays a huge role here. Every charge created on an asset must be registered on the CERSAI portal. If you try to take a second loan against the same stock from another bank without an NOC from the first bank, it is a criminal offense. We help businesses manage their 'CERSAI Identity' to ensure there are no overlapping charges.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In larger loans involving multiple banks (Consortium), the concept of 'Pari-Passu' charge is used. This legal term ensures that all banks have a proportionate right over the security. Any dispute between the banks in a consortium can freeze the working capital of the borrower, a legal risk that every mid corporate must mitigate through proactive consortium management.
                            </p>

                            <h2 id="gst-lending" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 6: GST-Linked Lending - The New Data Paradigm</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Welcome to the age of 'GST-Proof' lending. In 2025, your GST returns have replaced traditional 'Projected Balance Sheets' as the ultimate proof of sales. Banks now use automated 'GST Analysis' tools to check if your 'Purchase Pattern' matches your 'Sales Claims.' If your GST turnover shows 1 crore, but you claim 2 crores to the bank, your application will be rejected instantly.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The legal requirement for this is 'Digital Consent Management.' Under the new data privacy laws, banks must obtain your explicit consent to pull this data. A modern legal advisory ensures that the 'Scope of Consent' you give is narrow and protected. We help businesses perform 'GST Legal Audits' before applying for renewals.
                            </p>

                            <h2 id="documentation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 7: Documenting Working Capital Loans</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When you sign a loan package, you aren't just signing one paper; you're signing a 'Legal Fortress.' Here are the key documents that form this fortress:
                            </p>

                            <div className="overflow-x-auto mb-8">
                                <table className="min-w-full border-collapse border border-gray-200 text-sm">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-200 px-4 py-3 text-left">Document</th>
                                            <th className="border border-gray-200 px-4 py-3 text-left">Legal Significance</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">DP Note</td>
                                            <td className="border border-gray-200 px-4 py-3">Promise to pay 'on demand'. Allows for immediate summary suits.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Hypothecation Agreement</td>
                                            <td className="border border-gray-200 px-4 py-3">Creates the 'Charge' over current assets. Restricts asset sale without permission.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Facility Agreement</td>
                                            <td className="border border-gray-200 px-4 py-3">Covers commercials, interest rates, and 'Events of Default'.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Founders often sign these in a rush, but the 'Fine Print' is where the risks lie. We help clients audit these documents for 'Standard Form Contract' pitfalls, ensuring that you don't unknowingly agree to 'Cross Default' clauses.
                            </p>

                            <h2 id="renewal-legalities" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 8: Legal Pitfalls in Renewals & Enhancements</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Working capital is usually sanctioned for 12 months. After that, it must be 'Renewed.' This is not a formality; it is a fresh legal 'Credit Appraisal.' In 2025, the RBI has cracked down on 'Evergreening': the practice of giving fresh loans just to pay off old interest. If your renewal is used for evergreening, the account could be declared a 'Fraud.'
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Annual Review involves a fresh Stock Audit and a fresh Credit Rating. If your 'External Rating' drops, the bank is legally obligated to increase your interest rate. Maintaining a clean 'Compliance Record' throughout the year is the only way to ensure a smooth renewal. We provide 'Pre-Audit Services' to identify and fix these legal gaps.
                            </p>

                            <h2 id="dispute-resolution" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 9: Dispute Resolution & Recovery</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When things go wrong, the 'Recovery Machine' starts. For secured working capital, the **SARFAESI Act 2002** is the lender's primary weapon. It allows the bank to take 'Physical Possession' of your property and assets without going to a civil court. The process starts with a '13(2) Notice,' giving you 60 days to pay.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                However, the borrower also has legal rights. You can challenge the 'Process of Possession' in the Debts Recovery Tribunal (DRT). If the bank has not followed the 'Rules of Service' or has 'Undervalued' the property, a DRT stay can be obtained. For genuine business distress, 'Restructuring' or an 'OTS' is always the goal.
                            </p>

                            <h2 id="digital-solutions" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 10: Digital Working Capital Solutions for MSMEs</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The future of working capital is digital and 'Embedded.' Through the **OCEN (Open Credit Enablement Network)** and **Account Aggregators**, MSMEs can now get 'Flow-Based Lending' rather than 'Asset Based Lending.' This means you can get a loan based on your confirmed purchase orders or your digital payment history.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Digital lending carries its own legal risks: 'Algorithmic Bias' and 'Data Misuse.' In 2025, the legal framework for 'Digital Lending Apps' (DLA) has been tightened. Any working capital loan taken from an app must be 'Serviced' through an Escrow account to ensure transparency.
                            </p>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Final Verdict: Proactive Legal Management is Proactive Cash Flow Management</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                After our legal analysis, the conclusion is inescapable: **A business that understands its working capital loan agreement is a business that survives.** In India's high growth economy of 2025, the 'Gap' between success and failure is often the 'Gap' in your liquidity. Don't let your working capital debt become a 'Deadly Weight' because of poor legal planning.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Whether it's managing a complex consortium arrangement or simply ensuring your GST filings align with your stock statements, CredSettle is your legal partner in every step of the business journey. We don't just provide legal help; we provide a 'Financial Insurance' for your operational survival.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Client Success Stories</h2>
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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Protect Your Liquidity</h3>
                                <p className="text-blue-800 mb-6">Don't let rigid banking norms break your business flow. Get a professional legal audit of your working capital facilities today and trade with total confidence.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Speak to an Expert
                                </Link>
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Liquidity Risk Review</h4>
                                <p className="text-sm text-gray-600 mb-6">Is your current credit limit optimized? Get a legal audit of your CC/OD agreements to ensure fair terms.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Book Audit Now
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ Limit Optimization</p>
                                    <p>✓ Agreement Audit</p>
                                    <p>✓ NPA Prevention</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Explore Related</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-business-loan-settlement" className="block text-sm text-blue-600 hover:underline">Business Loan Help</Link>
                                    <Link href="/best-lawyer-for-msme-and-business-loans" className="block text-sm text-blue-600 hover:underline">MSME Legal Services</Link>
                                    <Link href="/best-lawyer-for-loan-recovery-cases" className="block text-sm text-blue-600 hover:underline">Recovery Case Help</Link>
                                    <Link href="/best-lawyer-for-documentation-review-of-loan-agreement" className="block text-sm text-blue-600 hover:underline">Doc Review Services</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
