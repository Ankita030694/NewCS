'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function SmeLoanDisputeResolutionClient() {
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
        { id: 'introduction', label: 'Commercial Importance' },
        { id: 'msmed-act-2006', label: 'MSMED Act 2006' },
        { id: 'delayed-payments-msefc', label: 'Delayed Payments' },
        { id: 'rbi-revival-framework', label: 'RBI Revival Rules' },
        { id: 'sma-npa-management', label: 'NPA Management' },
        { id: 'drt-defense-strategies', label: 'DRT Defense' },
        { id: 'sarfaesi-clash', label: 'SARFAESI vs MSMED' },
        { id: 'ots-msme-negotiation', label: 'SME Settlement' },
        { id: 'ombudsman-redressal', label: 'Banking Ombudsman' },
        { id: 'msme-case-studies', label: 'Success Stories' },
        { id: 'legal-checklist', label: 'SME Checklist' },
        { id: 'professional-representation', label: 'Why CredSettle' },
        { id: 'reviews', label: 'Client Feedback' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Resolution' },
    ];

    const faqs = [
        {
            question: 'What is the MSME Samadhaan portal used for?',
            answer: 'The MSME Samadhaan portal is a digital platform where Micro and Small Enterprises can file cases directly against buyers for delayed payments. It facilitates the MSEFC arbitration process and ensures visibility of pending dues from corporate buyers.'
        },
        {
            question: 'Can an NBFC seize MSME assets under SARFAESI without a court order?',
            answer: 'Yes, if the loan is secured and the account has been correctly classified as an NPA, a secured creditor can issue a 60 day notice under Section 13(2) of the SARFAESI Act. However, MSMEs have specific rights to challenge this in the DRT if RBI mandatory revival guidelines were not followed.'
        },
        {
            question: 'What is penal interest under the MSMED Act 2006?',
            answer: 'Under Section 16 of the Act, if a buyer fails to pay within 45 days, they are liable to pay compound interest with monthly rests to the supplier. The rate is three times the bank rate notified by the RBI.'
        },
        {
            question: 'What is the RBI Framework for Revival and Rehabilitation of MSMEs?',
            answer: 'This is a mandatory framework established in 2015 that requires banks to identify incipient stress in MSME accounts early. It provides a committee approach to restructure loans before they become NPAs, preserving the business as a going concern.'
        },
        {
            question: 'What constitutes incipient stress in an MSME account?',
            answer: 'The RBI categorizes incipient stress into Special Mention Accounts (SMA). SMA 0 is for payments overdue by 1 to 30 days, SMA 1 for 31 to 60 days, and SMA 2 for 61 to 90 days. Recognition at the SMA 0 stage is crucial for resolution.'
        },
        {
            question: 'Can MSMEs approach the Banking Ombudsman for loan disputes?',
            answer: 'Absolutely. MSMEs can file complaints regarding deficiency in banking services, including wrongful NPA classification, refusal to allow restructuring under RBI guidelines, or harassment by recovery agents.'
        },
        {
            question: 'Is the decision of the MSEFC final and binding?',
            answer: 'Yes, an award passed by the Micro and Small Enterprise Facilitation Council has the same force as a civil court decree. If a buyer wants to challenge it in a higher court, they must deposit 75 percent of the awarded amount first.'
        },
        {
            question: 'How does an OTS differ for an MSME compared to a personal loan?',
            answer: 'For MSMEs, an OTS (One Time Settlement) is often based on the liquidation value of assets and the realistic future cash flows of the business. Banks are more likely to waive penal interest if it means keeping a productive enterprise running.'
        },
        {
            question: 'What is SMA 2 status and why is it critical?',
            answer: 'SMA 2 status means the loan is overdue by 61 to 90 days. This is the "danger zone" right before the account is tagged as an NPA. In this phase, MSMEs must immediately invoke the RBI revival framework to halt aggressive recovery.'
        },
        {
            question: 'What are Corporate Debtors under MSME law?',
            answer: 'These are companies that owe money to MSMEs. Under the IBC (Insolvency and Bankruptcy Code), MSMEs can initiate insolvency against these corporate debtors if the default exceeds 1 crore rupees.'
        }
    ];

    const reviews = [
        {
            name: 'Prakash Mehra',
            location: 'Ludhiana',
            stars: 5,
            comment: 'Our manufacturing unit was facing a SARFAESI notice from a private NBFC. CredSettle identified that the bank had ignored the 2015 RBI MSME Framework. We challenged them in DRT and secured a 40 percent waiver and a restructuring plan.'
        },
        {
            name: 'Vikram Singh',
            location: 'Ahmedabad',
            stars: 5,
            comment: 'Highly professional team. They helped us file a claim on the MSME Samadhaan portal for payments stuck with a major corporate buyer. We recovered 85 lakhs plus compound interest within 6 months.'
        },
        {
            name: 'Anjali Gupta',
            location: 'Bangalore',
            stars: 5,
            comment: 'The technical depth they provided regarding SMA categories saved our startup. We were at SMA 2, and their legal intervention forced the bank to grant us a 2 year moratorium instead of declaring us an NPA.'
        },
        {
            name: 'Sanjeev Kumar',
            location: 'Indore',
            stars: 5,
            comment: 'Excellent understanding of the MSMED Act. Their lawyers negotiated a fair OTS for our textile business after a massive market slump. We are now debt free and growing again.'
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
        'name': 'SME Loan Dispute Resolution Service',
        'description': 'Comprehensive legal assistance for MSMEs in resolving complex loan disputes, including arbitration, non-wilful default defense, and recovery stay orders.',
        'brand': {
            '@type': 'Brand',
            'name': 'CredSettle'
        },
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
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
            <Script id="faq-schema-sme-loan" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="product-schema-sme-loan" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

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
                        SME Loan Dispute Resolution Experts<br />
                        <span className="text-blue-300">Protecting India's MSME Growth in 2025</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Facing unauthorized sanctions, delayed payments, or aggressive loan recovery? Use the power of the MSMED Act and RBI mandatory frameworks to defend your business and resolve disputes fairly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Professional Business Defense
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
                                        SME Loan Dispute Resolution
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Business Masterclass</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Introduction: The Critical Role of Legal Defense for India's MSMEs</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Small and Medium Enterprises (SMEs) are the undisputed backbone of the Indian economy. From Ludhiana’s textile mills to Bangalore’s tech hubs, MSMEs drive innovation, employment, and the country’s GDP. However, this sector is also the most vulnerable to financial shocks and predatory lending practices. In the modern era of 2025, an SME loan dispute is not just a disagreement over numbers; it is a battle for the very survival of a commercial legacy. Businesses often find themselves caught between a rock and a hard place: delayed payments from corporate buyers on one side, and aggressive loan recovery from banks and NBFCs on the other.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The complexity of SME loan legalities in India has grown exponentially. Between the mandatory guidelines issued by the Reserve Bank of India (RBI) and the statutory protections of the MSMED Act 2006, there is a vast ocean of legal protection that remains largely untapped by the average business owner. Most entrepreneurs treat a bank notice as a final verdict, unaware that the law provides multiple layers of "Commercial Defense." Whether you are struggling with a mismatched disbursement, a wrongful NPA classification, or an illegal recovery action under the SARFAESI Act, knowledge is your most potent asset.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we believe that a business in distress deserves a fair hearing, not a forced closure. The role of a specialized SME loan dispute lawyer in 2025 is to level the playing field. We leverage clinical negotiation techniques and the latest regulatory shifts to ensure that your business stays protected. This 5000+ word comprehensive manual is designed to be the ultimate legal compass for India’s SME ecosystem. We will explore the mechanics of the MSMED Act, the technicalities of RBI restoration frameworks, and the precise strategies for defending your enterprise in the Debt Recovery Tribunal (DRT).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Your journey back to commercial stability starts today. By understanding the intricate balance between borrower duties and lender obligations, you can transform a crisis into a structured resolution. Let us dive deep into the legal architecture that protects small businesses and ensures that India’s entrepreneurial spirit continues to thrive despite financial challenges.
                            </p>

                            <h2 id="msmed-act-2006" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Understanding the MSMED Act 2006: Your Fundamental Legal Framework</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Micro, Small and Medium Enterprises Development (MSMED) Act of 2006 is perhaps the most powerful piece of legislation ever created for the Indian business community. It was designed with a single objective: to protect small units from the "Bullies" of the corporate world. For an SME facing a loan dispute, the Act provides a indirect but vital shield. If your business is struggling because its capital is stuck with larger buyers, the MSMED Act provides the legal leverage to recover those funds and satisfy your lenders.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>The Definition of Power:</strong> The Act classifies units based on investment and turnover. In 2025, these limits are generous, ensuring that most mid sized businesses still fall under the protective umbrella of the MSME law.</li>
                                    <li><strong>Mandatory Payment Timelines:</strong> Section 15 of the Act is legendary. It mandates that any buyer must pay for goods or services within 45 days. No contract can override this statutory limit.</li>
                                    <li><strong>Priority in Recovery:</strong> When an MSME goes into liquidation or resolution, its status as an MSME often provides priority in certain settlement discussions, particularly when dealing with government departments.</li>
                                    <li><strong>The Samadhaan Portal:</strong> A digital gateway that has revolutionized dispute resolution, allowing MSMEs to file cases against major corporations without the need for expensive civil court lawyers in the initial stages.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Understanding the MSMED Act is the first step in any SME loan dispute. At CredSettle, we often find that a bank recovery action is the symptom, while a delayed payment from a corporate buyer is the disease. By using the MSMED Act to treat the disease, we resolve the recovery symptom naturally.
                            </p>

                            <h2 id="delayed-payments-msefc" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Delayed Payments: The MSEFC Arbitration Mechanism</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                What happens when a corporate giant refuses to pay a small supplier? This is the primary driver of SME loan defaults in India. The MSMED Act provides a specialized forum for this: the **Micro and Small Enterprise Facilitation Council (MSEFC)**. This is not a standard court; it is a quasi judicial body empowered to provide rapid, time bound arbitration.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The MSEFC process is a "Hardship Defense" for your loan dispute. When we represent an SME, we use the pending MSEFC cases as evidence in bank negotiations. We tell the bank, "Our client is not a willful defaulter; they are a victim of a corporate default. Here is the legal claim against the buyer for 10 crores plus compound interest." This changes the bank’s perception of the risk.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Key features of MSEFC arbitration in 2025:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Pre-deposit for Appeal:</strong> If a buyer wants to challenge an MSEFC award, they must deposit 75 percent of the amount in court. This one rule prevents frivolous litigation by big companies.</li>
                                <li><strong>Monthly Compound Interest:</strong> The interest rate is a massive 3 times the RBI bank rate. This often makes the interest amount larger than the principal, providing a huge windfall for the MSME.</li>
                                <li><strong>State Level Facilitation:</strong> Councils are located in every state, making it easier for local businesses to seek redressal without traveling to Delhi or Mumbai.</li>
                            </ul>

                            <h2 id="rbi-revival-framework" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">RBI Revival and Rehabilitation Framework 2015: The SME Lifeboat</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Most business owners and many local bank managers are unaware that the RBI issued a mandatory **Framework for Revival and Rehabilitation of MSMEs** in 2015. This is a "Right to Restructure." If your business is facing stress, you don’t have to wait for the bank to act. You can proactively invoke this framework.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Under this framework, every bank must have a "Committee for MSMEs." When a business owner submits a proposal for revival, the committee is legally obligated to review it within 90 days. During this period, the bank is encouraged to stop aggressive recovery and instead focus on a "Corrective Action Plan" (CAP).
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light text-gray-800">
                                <p className="font-bold mb-4">The CAP can include:</p>
                                <ol className="list-decimal pl-6 space-y-4">
                                    <li><strong>Rectification:</strong> The bank provides additional funding to help the unit get out of a temporary cash crunch.</li>
                                    <li><strong>Restructuring:</strong> The loan tenure is increased, interest rates are lowered, or a moratorium is granted on principal payments.</li>
                                    <li><strong>Recovery:</strong> Only if the business is proven to be unviable can the bank move to recovery. This makes "Recovery" the last resort, not the first choice.</li>
                                </ol>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A specialized lawyer ensures that your application for revival is drafted in a way that the bank cannot ignore. We turn your financial data into a "Viability Report" that the committee must legally consider.
                            </p>

                            <h2 id="sma-npa-management" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">SMA Categories and NPA Management: The Early Warning System</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the banking world, a loan doesn't just "become" bad. It goes through stages. Understanding these stages allows an MSME to intervene when it's easiest to win. The RBI has mandated **Special Mention Account (SMA)** categories for all commercial loans:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700 font-light">
                                <li><strong>SMA 0:</strong> Payment is overdue for 1 to 30 days. This is the stage for "Communication." A quick legal letter explaining the delay can prevent further escalation.</li>
                                <li><strong>SMA 1:</strong> Overdue for 31 to 60 days. This is the stage for "Documentation." You must start gathering proof of why the payment is delayed (e.g., supplier failure or market downturn).</li>
                                <li><strong>SMA 2:</strong> Overdue for 61 to 90 days. This is the stage for "Protection." This is where you must invoke the RBI revival framework to stop the account from turning into an NPA.</li>
                                <li><strong>NPA (Non-Performing Asset):</strong> Overdue for more than 90 days. The bank now has the right to initiate the SARFAESI process and seize assets.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we specialize in "SMA 2 Defense." We use the final 30 days before NPA classification to force a negotiation. If the bank fails to categorize you correctly or ignores your incipient stress warnings, their later actions in DRT can be completely set aside.
                            </p>

                            <h2 id="drt-defense-strategies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Debt Recovery Tribunals (DRT) for SMEs: Strategic Defense Patterns</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a loan dispute reaches the Debt Recovery Tribunal (DRT), the stakes are at their highest. The DRT is a fast track court where procedures are different from a standard civil court. For an SME, the DRT is a battlefield where technicalities can win cases.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Expert defense patterns in the DRT for 2025 include:
                            </p>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-8 text-gray-800">
                                <ul className="space-y-4">
                                    <li><strong>1. Procedural Breach Challenge:</strong> Challenging the bank’s failure to strictly follow the Securitization rules. If a notice is missing a signature or a date, the entire recovery can be halted for months.</li>
                                    <li><strong>2. Inflation of Claim:</strong> Banks often add illegal penal interest or recurring fees that are not in the contract. We demand a forensic audit of the loan account, often reducing the claimed amount by 20 to 30 percent.</li>
                                    <li><strong>3. Counterclaims for Business Loss:</strong> If the bank’s aggressive actions (like freezing a current account without notice) caused your business a specific loss, we file a "Counter Claim." This forces the bank onto the defensive.</li>
                                    <li><strong>4. Limitation Period Defense:</strong> Banks have a specific timeframe (usually 3 years) to file a case in DRT. If they miss this by even a day, the debt becomes legally unrecoverable.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The DRT is not just a place for banks to recover money; it is a place for borrowers to seek justice. A clinical, evidence based defense in the DRT is often the precursor to a very favorable One Time Settlement.
                            </p>

                            <h2 id="sarfaesi-clash" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">SARFAESI Act vs MSMED Act: The Legal Tug of War</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The biggest conflict in Indian business law is between the **SARFAESI Act 2002** (which helps banks seized assets) and the **MSMED Act 2006** (which protects small businesses). For years, there was confusion about which law wins. In 2025, the legal position is clear: While SARFAESI is powerful, it is not "Absolute."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Supreme Court has ruled that banks **must** follow the RBI MSME Guidelines before initiating SARFAESI. This is a game changer. If a bank tries to seize an SME factory without first offering the "Committee for Revival" process, the seizure is illegal. We use this "Regulatory Gap" to secure **Stay Orders** in various High Courts and the DRT. We protect your physical assets while the legal dispute is being resolved.
                            </p>

                            <h2 id="ots-msme-negotiation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">One-Time Settlement (OTS) for SMEs: Clinical Negotiation Tactics</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A One Time Settlement is often the best exit for an SME in deep distress. It allows the owner to close the old debt at a massive discount (often 40 to 60 percent) and start a new business venture with a clean slate. However, MSME OTS negotiation is a professional art form.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Key strategies we use at CredSettle:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>The "Dead Asset" Argument:</strong> If a factory is specialized, its auction value is low. We show the bank that a 50 percent OTS today is better than a 30 percent recovery from an auction two years later.</li>
                                <li><strong>The Family Support Angle:</strong> We present the settlement funds as being sourced from "External Family Borrowing," which the bank cannot touch if the settlement fails. This creates a "Take it or Leave it" pressure on the lender.</li>
                                <li><strong>The "Source of Funds" Proof:</strong> Banks want to know where the money is coming from. We provide a "Proof of Funds" dossier that assures the bank of a quick, clean transaction.</li>
                                <li><strong>The "Principal Only" Benchmark:</strong> Our starting point is always the remaining principal amount, demanding a 100 percent waiver of all penal interest and late fees.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A clinical OTS is not a plea for mercy; it is a business proposal. We take the emotion out of the room and replace it with a technical, data-driven negotiation that focuses on the bank’s desire for liquidity.
                            </p>

                            <h2 id="ombudsman-redressal" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Role of the Integrated Ombudsman for Small Businesses</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If your bank is ignoring your MSME status, refusing to accept your revival application, or using abusive recovery agents, the **RBI Integrated Ombudsman** is your most effective free remedy. In 2025, the Ombudsman has a dedicated cell for MSME complaints.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We help MSMEs draft Ombudsman complaints that focus on **Deficiency in Service**. If the bank manager threatened you, failed to provide your loan statements, or mis-classified your account, the Ombudsman can award you compensation of up to 20 lakhs. More importantly, the Ombudsman can order the bank to "Maintain Status Quo," effectively halting your recovery while the complaint is being investigated. This is a vital "Cooling Off" period that can be used to negotiate a settlement.
                            </p>

                            <h2 id="msme-case-studies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Case Studies: Real Stories of India's MSME Loan Victories</h2>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Case 1: The Forged Signature Defense</h3>
                                <p className="text-gray-700 mb-4">
                                    A small logistics company founded in Noida discovered that a "Top-up Loan" of 50 lakhs had been disbursed to their account based on forged signatures of the directors. The money was then immediately transferred out via a fraudulent KYC change.
                                </p>
                                <p className="text-gray-700">
                                    <strong>The Intervention:</strong> We filed a Cyber Cell FIR and a specific complaint with the RBI. We proved that the bank’s "Signature Verification System" had failed.
                                    <strong>The Outcome:</strong> The bank was forced to reverse the loan, restore the company’s CIBIL score, and pay a compensation of 5 lakhs for mental agony. The directors were cleared of all liability.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Case 2: The Samadhaan Recovery Reset</h3>
                                <p className="text-gray-700 mb-4">
                                    A component manufacturer for the auto industry defaulted on their 5 crore bank loan because their primary buyer (a Tier 1 supplier) hadn't paid them for 180 days.
                                </p>
                                <p className="text-gray-700">
                                    <strong>The Intervention:</strong> We filed a claim on the MSME Samadhaan portal. Simultaneously, we issued a notice to the bank invoking the 2015 Revival Framework, citing the "delayed payment" as the incipient stress.
                                    <strong>The Outcome:</strong> The MSEFC awarded the manufacturer 6.5 crores (including compound interest). The bank was forced to grant a 6 month moratorium while the company recovered its funds. The business is now profitable and the loan is being repaid regularly.
                                </p>
                            </div>

                            <h2 id="legal-checklist" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Ultimate Legal Checklist for India's SME Borrowers</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If your business is in a loan dispute, perform this 10 point audit immediately:
                            </p>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-8 font-light text-gray-800">
                                <ul className="space-y-4">
                                    <li>✓ <strong>MSME Registration:</strong> Is your Udyam Registration certificate up to date and linked to your PAN?</li>
                                    <li>✓ <strong>SAMADHAAN Check:</strong> Have you filed claims for every invoice overdue by more than 45 days?</li>
                                    <li>✓ <strong>SMA Notification:</strong> Did the bank provide you with written notice of your SMA 1 or SMA 2 status?</li>
                                    <li>✓ <strong>The 2015 Framework:</strong> Have you formally submitted a "Revival and Rehabilitation" proposal to the bank?</li>
                                    <li>✓ <strong>KYC Audit:</strong> Have there been any unauthorized changes to your registered email or phone number in the bank records?</li>
                                    <li>✓ <strong>Penal Interest Audit:</strong> Is the bank charging "Interest on Interest"? This is illegal for MSME accounts in many scenarios.</li>
                                    <li>✓ <strong>Collateral Valuation:</strong> When was the last time the bank updated their valuation of your security? An old valuation can hurt your OTS.</li>
                                    <li>✓ <strong>Ombudsman Window:</strong> Has been more than 30 days since you filed a formal complaint with the bank’s Nodal Officer?</li>
                                    <li>✓ <strong>Insurance Check:</strong> If the stress is due to a fire or flood, have you filed your insurance claim correctly? Banks often ignore insurance potential.</li>
                                    <li>✓ <strong>Guarantor Protection:</strong> Are the personal guarantors aware of their rights and the "Right of Subrogation"?</li>
                                </ul>
                            </div>

                            <h2 id="professional-representation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Why Professional Legal Representation Matters</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Representing yourself against a multi billion dollar bank in an SME loan dispute is like bringing a knife to a tank fight. Lenders have departments of specialized recovery lawyers who know the laws inside out. To protect your commercial interests, you need a team that matches their technical depth.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we don't just "talk" to banks. We speak the language of "Regulation." We use RBI circulars, Supreme Court precedents, and technical audits to shift the power dynamic. Our lawyers are not just advocates; they are commercial strategists who understand the importance of cash flow, balance sheets, and industrial operations. We fight to keep your factory doors open and your reputation intact.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">What Our MSME Clients Say</h2>
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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Secure Sucess for Your SME Today</h3>
                                <p className="text-blue-800 mb-6">Don't let a loan dispute or delayed payment stop your business growth. Our MSME legal experts are here to protect your commercial legacy with precision and power.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book Your Free Legal Strategy Session
                                </Link>
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24 h-screen overflow-y-auto no-scrollbar pb-24">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">SME Defense</h4>
                                <p className="text-sm text-gray-600 mb-6">Professional MSME legal intervention to stop asset seizure and resolve disputes.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Protect My Business
                                </Link>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-100 p-6 rounded-2xl border border-gray-200 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Business Guides</h4>
                                <nav className="space-y-3">
                                    <Link href="/SME-loan-dispute-resolution" className="block text-sm text-blue-600 hover:underline">SME Dispute Resolution</Link>
                                    <Link href="/best-lawyer-for-MSME-personal-loan" className="block text-sm text-blue-600 hover:underline">MSME Personal Loan Help</Link>
                                    <Link href="/services/business-loan-settlement" className="block text-sm text-blue-600 hover:underline">Settle My Business Loan</Link>
                                    <Link href="/legal-notice-for-loan-recovery" className="block text-sm text-blue-600 hover:underline">Handling Recovery Notices</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
