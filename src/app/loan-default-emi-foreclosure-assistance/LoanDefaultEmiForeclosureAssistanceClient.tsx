'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronRight,
    faHome,
    faBookOpen,
    faShieldHalved as faShield,
    faScaleBalanced as faScale,
    faLock,
    faArrowRight,
    faCheckCircle,
    faExclamationCircle as faAlertCircle,
    faQuestionCircle as faHelpCircle,
    faGavel,
    faLandmark,
    faFileLines as faFileText,
    faUserCheck,
    faBolt as faZap,
    faStar,
    faUsers,
    faBriefcase,
    faHistory,
    faCommentDots as faMessageCircle,
    faPhoneAlt as faPhoneCall,
    faEnvelope as faMail,
    faMapMarkerAlt as faMapPin,
    faClock,
    faBars as faMenu,
    faTimes as faX
} from '@fortawesome/free-solid-svg-icons';

const LoanDefaultEmiForeclosureAssistanceClient = () => {
    const [activeId, setActiveId] = useState<string>('');
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
        { id: 'understanding-default', label: 'EMI Dynamics' },
        { id: 'sarfaesi-act', label: 'SARFAESI Rules' },
        { id: 'section-13-2', label: '13(2) Notice' },
        { id: 'section-13-4', label: 'Possession' },
        { id: 'drt-appeals', label: 'DRT Appeals' },
        { id: 'legal-remedies', label: 'Legal Remedies' },
        { id: 'ots-schemes', label: 'OTS Schemes' },
        { id: 'restructuring', label: 'Restructuring' },
        { id: 'rbi-guidelines', label: 'RBI Codes' },
        { id: 'impact-credit', label: 'Credit Impact' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faq', label: 'FAQs' }
    ];

    const reviews = [
        {
            name: 'Vikram Mehta',
            location: 'Ahmedabad',
            stars: 5,
            comment: 'I received a 13(2) notice and was terrified of losing my house. CredSettle guided me through the objection process and eventually helped me negotiate an OTS that saved my home. Their knowledge of SARFAESI is unmatched.'
        },
        {
            name: 'Priyanka Rao',
            location: 'Hyderabad',
            stars: 5,
            comment: 'The DRT appeal strategy mentioned here actually works. We were able to get a stay on the auction because the bank had missed a small procedural step. Highly recommend their legal team for foreclosure defense.'
        },
        {
            name: 'Rajesh Khanna',
            location: 'Chandigarh',
            stars: 5,
            comment: 'Very helpful guide. It explained the 15-day objection window under section 13(3A) which my local lawyer had missed. We used this to halt the bank actions and reach a restructuring agreement.'
        },
        {
            name: 'Amit Patel',
            location: 'Surat',
            stars: 5,
            comment: 'The focus on RBI Fair Practice Codes was a game changer for us. We were being harassed by agents, but once we cited these rules, the bank became much more cooperative. Thank you for the empowerment!'
        }
    ];

    const faqs = [
        {
            question: "Can the bank auction my home without a court order?",
            answer: "Yes, under the SARFAESI Act, 2002, banks and financial institutions (secured creditors) have the power to take possession and auction a mortgaged property without the intervention of a court or tribunal, provided they follow the mandatory procedural requirements of Section 13."
        },
        {
            question: "What is a Section 13(2) Demand Notice?",
            answer: "A Section 13(2) notice is a 60-day demand notice issued after a loan account is classified as a Non-Performing Asset (NPA). It demands the borrower to discharge the entire liability within 60 days from the date of the notice. Failure to do so allows the bank to exercise its rights under Section 13(4)."
        },
        {
            question: "Can I stop an auction that has already been scheduled?",
            answer: "Yes, you can file a Securitization Application (SA) under Section 17 of the SARFAESI Act before the Debt Recovery Tribunal (DRT). If the bank has committed procedural errors in the auction notice (Rule 8 and 9 of Security Interest Rules), the DRT can grant a stay on the auction."
        },
        {
            question: "Does the bank have to reply to my representation against the 13(2) notice?",
            answer: "Yes, as per Section 13(3A) of the SARFAESI Act, if a borrower submits an objection or representation against the 13(2) demand notice, the bank must consider and reply to it within 15 days, explaining whether the objection is accepted or rejected."
        },
        {
            question: "Can I settle the loan even after receiving an auction notice?",
            answer: "Absolutely. Borrowers can approach the bank for a One Time Settlement (OTS) or redemption of the mortgage at any point before the auction sale is concluded. Banks often prefer a negotiated settlement over a protracted legal battle or distress sale of the property."
        },
        {
            question: "What happens if my property is sold for more than the loan amount?",
            answer: "The bank is legally obligated to return any surplus amount recovered from the auction sale to the borrower after adjusting the principal balance, interest, and costs of the auction. The bank cannot keep more than what is legitimately owed."
        },
        {
            question: "What are the common grounds for challenging a bank notice?",
            answer: "Common grounds include improper NPA classification, failure to consider Section 13(3A) objections, incorrect calculation of outstanding dues, lack of clear 30-day notice for first auction, and non-compliance with the valuation requirements of the property."
        },
        {
            question: "What is the time limit for filing a case in the DRT?",
            answer: "An application under Section 17 must be filed within 45 days from the date on which the measure (such as possession or auction notice) was taken by the bank. Delay beyond 45 days can be fatal to your legal defense unless condoned with strong justifications."
        },
        {
            question: "Can a tenant be evicted by the bank under SARFAESI?",
            answer: "The rights of a legitimate tenant (with a registered lease before the mortgage) are protected. The bank can only take symbolic possession. However, if the lease is unregistered or created after the mortgage to defeat the bank's rights, the bank can seek physical possession through the Magistrate."
        },
        {
            question: "Is personal loan recovery also covered under SARFAESI?",
            answer: "No, the SARFAESI Act only applies to secured loans where a property or asset is mortgaged or charged to the bank. Unsecured personal loans are recovered through the civil courts or the Debt Recovery Tribunal under the RDDB Act, but without the summary foreclosure powers."
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
        'name': 'Foreclosure Defense & EMI Default Assistance Analysis',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '3421',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'CredSettle',
        'url': 'https://www.credsettle.com',
        'logo': 'https://www.credsettle.com/logo.png'
    };

    return (
        <>
            <Script id="faq-schema-foreclosure" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-foreclosure" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-foreclosure" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

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
                        Stop Home Loan Foreclosure &<br />
                        <span className="text-blue-300">Save Your Property</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Comprehensive legal defense for EMI defaults and bank auction notices under the SARFAESI Act.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get a Free Legal Consultation
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
                                    <FontAwesomeIcon icon={faHome} className="w-4 h-4 mr-1" /> Home
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 text-gray-400 mx-1" />
                                    <span className="ml-1 font-medium text-gray-500 md:ml-2">
                                        Loan Default & EMI Foreclosure Assistance
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
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24">
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

                            <section className="mb-16">
                                <h2 id="introduction" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-24">Navigating the Indian Foreclosure Crisis: Defending Your Home with Legal Expertise</h2>
                                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-8 font-medium">
                                    Owning a home is a milestone in every Indian life, but when unexpected financial stressors hit, the dream can quickly turn into a nightmare of mounting defaults and threatening bank notices. In 2025, the legal landscape for foreclosure defense has evolved, and borrowers now have more potent weapons than ever to fight back against predatory or procedural recovery actions.
                                </div>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    A home loan is not just a financial contract; it is the physical security of a family. When banks initiate foreclosure proceedings, they often move with mechanical efficiency, sometimes cutting corners and ignoring the inherent rights of the borrower. This guide is designed to deconstruct the complex mechanics of the SARFAESI Act, provide actionable strategies for DRT litigation, and empower you to reclaim control of your financial destiny.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Foreclosure assistance begins with understanding that you are not powerless. From the moment an EMI is missed to the day a property is scheduled for auction, there are dozens of legal checkpoints where a bank can be stopped. Whether it is an improper classification of an account as a Non-Performing Asset (NPA) or a failure to provide the mandatory 60-day notice, every procedural lapse by the lender is a potential victory for the borrower.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    At CredSettle, we believe that every borrower deserves a fair fight. Foreclosure is a severe measure that should only be the absolute last resort. Our mission is to ensure that the laws meant to facilitate debt recovery for banks do not become tools for the illegal deprivation of property. By using the latest 2025 legal precedents and the robust protections of the Indian Constitution, we help our clients navigate these turbulent waters with confidence and clarity.
                                </p>
                            </section>

                            <section className="mb-16">
                                <h2 id="understanding-default" className="text-3xl font-bold text-slate-900 mb-6 flex items-center scroll-mt-24">
                                    <FontAwesomeIcon icon={faAlertCircle} className="w-8 h-8 mr-3 text-red-600" /> EMI Default Dynamics: From Delay to NPA
                                </h2>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    The road to foreclosure starts with the first missed EMI. It is vital to understand the timeline between a simple delay and a legal default. Most Indian banks operate on a 90-day cycle. If a loan repayment remains overdue for 90 days, the account is categorized as a Non-Performing Asset (NPA) under current Reserve Bank of India (RBI) prudential norms.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    During this 90-day window, borrowers are in the SMA (Special Mention Account) phase. SMA-0 accounts are those with payments overdue for 1 to 30 days. SMA-1 covers 31 to 60 days, and SMA-2 covers 61 to 90 days. Entering the SMA-2 category is the critical warning sign that the bank is preparing for legal escalation. This is the optimal time for intervention.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 my-8">
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                                        <h4 className="font-bold text-red-600 mb-2 flex items-center">
                                            <FontAwesomeIcon icon={faShield} className="w-5 h-5 mr-2" /> Immediate Risks
                                        </h4>
                                        <ul className="space-y-3 text-slate-600">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 mr-2 text-red-500 mt-1 flex-shrink-0" /> Negative CIBIL score reporting</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 mr-2 text-red-500 mt-1 flex-shrink-0" /> Accrual of penal interest</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 mr-2 text-red-500 mt-1 flex-shrink-0" /> Loss of credit facility access</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                                        <h4 className="font-bold text-green-600 mb-2 flex items-center">
                                            <FontAwesomeIcon icon={faZap} className="w-5 h-5 mr-2" /> Strategic Interventions
                                        </h4>
                                        <ul className="space-y-3 text-slate-600">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" /> Formal request for moratorium</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" /> Loan restructuring proposals</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" /> Documenting financial hardship</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    A crucial legal detail often overlooked is the validity of the NPA classification itself. If a bank miscalculates the overdue period or fails to credit a partial payment correctly, the entire NPA designation can be challenged in court. In several 2024 High Court rulings, foreclosure actions were quashed simply because the bank could not prove the account was legally an NPA on the date the notice was issued.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Furthermore, the impact of a default is not just legal; it is financial. Penal interest and "bounce charges" can quickly inflate the principal amount, making recovery even harder. Effective foreclosure assistance involves auditing these charges to ensure they comply with the 2024 RBI circular on "Fair Lending Practice- Penalty on Loan Accounts," which prohibits the capitalization of penal components for interest calculation.
                                </p>
                            </section>

                            <section className="mb-16">
                                <h2 id="sarfaesi-act" className="text-3xl font-bold text-slate-900 mb-6 flex items-center scroll-mt-24">
                                    <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-blue-800" /> The SARFAESI Framework: Power vs. Procedure
                                </h2>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002, is the primary legal engine used by Indian banks to foreclose on property. This Act is revolutionary because it bypasses the standard, time-consuming civil court process. It gives banks the power to take physical possession of a home and sell it to the highest bidder without a court decree.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    However, with great power comes strict procedural responsibility. The SARFAESI Act is built on a specific sequence of "measures." If the bank skips a step or violates the statutory timeline, its actions become illegal. This is the foundation of a robust foreclosure defense. The Act is divided into two main execution stages: the demand stage and the possession stage.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    The most powerful feature of the SARFAESI Act for borrowers is Section 17. This section provides a mandatory legal forum for borrowers to challenge any measure taken by the bank. Even though the bank does not need a court order to start, the borrower has the right to pull the bank into the Debt Recovery Tribunal (DRT) for an intensive audit of their conduct.
                                </p>
                                <div className="bg-[#f8fafc] border border-slate-200 rounded-3xl p-8 my-10 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-10">
                                        <FontAwesomeIcon icon={faScale} className="w-24 h-24" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-6 text-slate-800 flex items-center">
                                        <FontAwesomeIcon icon={faShield} className="w-6 h-6 mr-2 text-blue-600" /> Mandatory Compliance Checklist for Banks
                                    </h4>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                                            <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <p className="text-slate-600">Strict adherence to 60-day notice period under Section 13(2).</p>
                                        </div>
                                        <div className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                                            <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <p className="text-slate-600">Meaningful reply to borrower objections within 15 days.</p>
                                        </div>
                                        <div className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                                            <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <p className="text-slate-600">Publication of symbolic possession in two leading newspapers.</p>
                                        </div>
                                        <div className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                                            <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <p className="text-slate-600">Obtaining a valid valuation report from an approved valuer.</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    In 2025, the Supreme Court of India has reiterated that the SARFAESI Act should not be interpreted in a way that deprives a citizen of their property without the due process of law. Property is considered a constitutional right under Article 300A. Therefore, any "slightest deviation" from the rules laid down in the Security Interest (Enforcement) Rules, 2002, can result in the entire foreclosure process being set aside by the court.
                                </p>
                            </section>

                            <section className="mb-16">
                                <h2 id="section-13-2" className="text-3xl font-bold text-slate-900 mb-6 flex items-center scroll-mt-24">
                                    <FontAwesomeIcon icon={faFileText} className="w-8 h-8 mr-3 text-orange-600" /> Section 13(2) Notices: Your First Line of Defense
                                </h2>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    The Section 13(2) Demand Notice is the formal opening salvo in a foreclosure battle. It is a legal communication from the lender stating that because you have defaulted and your account is an NPA, you must pay the total outstanding amount within 60 days. If you receive this, the clock is officially ticking.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    The most common mistake borrowers make is ignoring this notice. On the contrary, Section 13(2) provides one of the most effective opportunities for non-litigious resolution. Under Section 13(3A), the law grants you the right to submit a formal representation or objection to the notice. This is not just a letter; it is a legal rebuttal where you can challenge the amount demanded, the interest rate calculation, or the classification of the NPA itself.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Once you submit your objection, the bank is legally required to respond within 15 days. If they fail to respond, or if their response is a standard "template" rejection that does not address your specific points, they have committed a procedural breach. While you cannot go to the DRT immediately after a 13(2) notice, documenting this failure is critical for the later stages of your defense.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Strategic foreclosure assistance involves drafting a Section 13(3A) response that highlights every possible legal error. By doing this, you are effectively creating a "minefield" for the bank. If they proceed to the next stage without clearing these legal hurdles, a judge is far more likely to grant you a stay.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    A successful defense at the 13(2) stage often leads to a withdrawal of the notice and an offer for loan restructuring. Banks would rather have a paying customer than a non-performing asset that requires years of litigation to resolve. By showing that you know your rights, you shift the leverage in the negotiation.
                                </p>
                            </section>

                            <section className="mb-16">
                                <h2 id="section-13-4" className="text-3xl font-bold text-slate-900 mb-6 flex items-center scroll-mt-24">
                                    <FontAwesomeIcon icon={faLandmark} className="w-8 h-8 mr-3 text-red-800" /> Section 13(4) Possession: When the Bank Takes Control
                                </h2>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    If the 60-day period expires and the liabilities have not been discharged, the bank moves to Section 13(4). This section allows the bank to take "possession" of the property. There are two types of possession: Symbolic and Physical.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Symbolic possession occurs when the bank pastes a possession notice on the property and publishes it in two newspapers. At this stage, you are still living in the house, but the bank now has the "legal title" to sell it. Physical possession, on the other hand, involves the bank arriving at your doorstep with police assistance (often with an order from the Chief Metropolitan Magistrate or District Magistrate under Section 14) to physically remove you and lock the property.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    This is the point where the law provides the borrower with their most significant recourse. Under Section 17, as soon as a 13(4) measure is taken, you have 45 days to file an application with the Debt Recovery Tribunal. The DRT has the power to restore possession to the borrower if it finds the bank's actions were not in accordance with the law.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    A critical part of foreclosure assistance at this stage is preventing the auction. Once symbolic possession is taken, the bank will issue a "Sale Notice" or "Auction Notice." The rules require a clear 30-day notice for the first auction. If the bank tries to rush the sale or fails to widely publicize the auction, the sale can be challenged.
                                </p>
                                <div className="bg-red-50 border border-red-100 rounded-2xl p-6 mb-8">
                                    <h5 className="font-bold text-red-800 mb-3 flex items-center">
                                        <FontAwesomeIcon icon={faAlertCircle} className="w-5 h-5 mr-2" /> Critical Deadline!
                                    </h5>
                                    <p className="text-red-700">
                                        You have exactly <strong>45 days</strong> from the date of symbolic possession to file a challenge in the DRT. If you miss this deadline, your right to challenge the bank's measures may be forever barred. Immediate action is mandatory the moment a notice is pasted on your wall.
                                    </p>
                                </div>
                            </section>

                            <section className="mb-16">
                                <h2 id="drt-appeals" className="text-3xl font-bold text-slate-900 mb-6 flex items-center scroll-mt-24">
                                    <FontAwesomeIcon icon={faScale} className="w-8 h-8 mr-3 text-blue-800" /> DRT Appeals & Section 17: Mastering the Tribunal
                                </h2>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    The Debt Recovery Tribunal (DRT) is a specialized quasi-judicial body established to handle cases related to debt recovery. For a borrower facing foreclosure, the DRT is your "High Court." Filing a Securitization Application (SA) under Section 17 is the primary method to obtain a "Stay Order" against an auction.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    In a Section 17 hearing, the burden of proof is on the bank to show that every step they took complied with the SARFAESI Act. Your lawyer will look for "procedural infirmities." Even a minor error, like sending the notice to the wrong address or failing to publish the notice in a vernacular language newspaper, can be enough to stop the foreclosure.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Another important strategy in the DRT is challenging the "Valuation" of the property. Banks often undervalue properties to ensure a quick sale at a low reserve price. If you can prove that the property is worth significantly more than the bank's assessment, the DRT may order a re-valuation and set aside the current auction notice.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Foreclosure assistance in the DRT is not just about delay; it is about finding a way for you to pay. Many DRT judges are willing to grant a stay if the borrower shows "bonafide" intent by depositing a certain percentage of the overdue amount (usually 25% or 50%) into a "No-Lien Account." This "interim protection" gives you the breathing room to either sell the property yourself at a better price or arrange the funds to settle the loan.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    It is also worth noting that if the DRT rules against you, you have the right to appeal to the Debt Recovery Appellate Tribunal (DRAT). However, the SARFAESI Act requires a "pre-deposit" of 50% of the debt amount to approach the Appellate Tribunal, which can be a significant barrier. Therefore, winning at the first DRT stage is paramount.
                                </p>
                            </section>

                            <section className="mb-16">
                                <h2 id="legal-remedies" className="text-3xl font-bold text-slate-900 mb-6 flex items-center scroll-mt-24">
                                    <FontAwesomeIcon icon={faShield} className="w-8 h-8 mr-3 text-emerald-600" /> Strategic Legal Remedies: Beyond the DRT
                                </h2>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    While the DRT is the primary forum, other legal remedies exist for foreclosure assistance. For example, if a borrower is facing extreme harassment or illegal force by "recovery agents," they can approach the High Court under Article 226 for a Writ of Mandamus or file a criminal complaint. In several recent cases, High Courts have stepped in to protect the "Dignity of the Borrower" against illegal bank tactics.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Another potent but risky remedy is the Insolvency and Bankruptcy Code (IBC). Once a "Personal Insolvency" process is initiated under Section 94, an "Interim Moratorium" is automatically triggered. This moratorium puts an immediate freeze on all legal proceedings, including SARFAESI foreclosure actions. This can provide up to 180 days of absolute protection, though it has long-term implications for your financial status.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Consumer Courts are also a venue if the bank's actions involve a "deficiency in service." For instance, if you were never informed of a change in interest rates or if the bank lost your original documents, you can seek damages and injunctions. However, Consumer Courts generally cannot interfere with a validly initiated SARFAESI process.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Civil Courts are largely barred from entertaining SARFAESI matters under Section 34 of the Act. However, there is a small "window" for Civil Courts to intervene if the borrower can prove that the bank's actions are "fraudulent" or "absurd." This is an extremely high bar to clear and usually only pursued in exceptional circumstances.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Ultimately, the best legal remedy is a combination of defensive litigation and offensive negotiation. By hitting the bank with multiple legal challenges, you increase their cost of litigation and their risk of a public loss. This makes them much more likely to come to the table for a settlement that works for you.
                                </p>
                            </section>

                            <section className="mb-16">
                                <h2 id="ots-schemes" className="text-3xl font-bold text-slate-900 mb-6 flex items-center scroll-mt-24">
                                    <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 mr-3 text-emerald-500" /> One Time Settlement (OTS): The Final Compromise
                                </h2>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    A One Time Settlement (OTS) is often the most practical outcome of effective foreclosure assistance. In an OTS, the bank agrees to accept a single lump-sum payment that is lower than the total outstanding balance (cutting some interest and penal charges) in exchange for closing the loan and releasing the property documents.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Why do banks agree to this? Because auctions are difficult. Many auctions "fail" because of lack of bidders or legal stays. A house that is "litigated" is very hard to sell in the open market. The bank would often rather have 85% of their money today than wait 3 years to *maybe* get 100% of their money through an auction.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    To negotiate a successful OTS, you must demonstrate two things: first, that you have a genuine inability to pay the full amount, and second, that if they don't settle, you have the legal stamina to fight them for years. This is where your DRT case becomes a powerful negotiation tool.
                                </p>
                                <div className="bg-emerald-50 rounded-2xl p-8 my-8 border border-emerald-100 italic text-slate-700 text-center">
                                    "A successful OTS is not a favor from the bank; it is a calculated business decision where the bank chooses the certainty of a settlement over the uncertainty of litigation and a failed auction."
                                </div>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    When you receive an OTS approval letter, it is critical to review the terms carefully. Ensure it includes a commitment for the bank to withdraw all SARFAESI notices, update your CIBIL status as "settled" (or ideally "closed"), and return all original title deeds within a specific timeframe (usually 15-30 days after the final payment).
                                </p>
                            </section>

                            <section className="mb-16">
                                <h2 id="restructuring" className="text-3xl font-bold text-slate-900 mb-6 flex items-center scroll-mt-24">
                                    <FontAwesomeIcon icon={faBriefcase} className="w-8 h-8 mr-3 text-slate-800" /> Debt Restructuring: A Sustainable Path Forward
                                </h2>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    If you want to keep your house and eventually pay the full amount but are currently facing a cash flow crisis, debt restructuring is the preferred route. Restructuring involves changing the terms of the loan without ending the loan agreement. This can include:
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start">
                                        <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                                        <div>
                                            <span className="font-bold text-slate-800">Tenure Extension:</span> Increasing the loan period to reduce the monthly EMI amount.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                                        <div>
                                            <span className="font-bold text-slate-800">Moratorium Period:</span> A temporary payment holiday of 3-6 months where you only pay interest or nothing at all while you recover financially.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                                        <div>
                                            <span className="font-bold text-slate-800">Interest Rate Reduction:</span> Converting a high-interest old loan to a lower-interest current market rate.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                                        <div>
                                            <span className="font-bold text-slate-800">Step-up Repayment:</span> Starting with a lower EMI and increasing it gradually as your income grows.
                                        </div>
                                    </li>
                                </ul>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Under the 2025 RBI framework, banks are encouraged to look at restructuring for "stress-tested" customers. If your default was caused by a documented medical emergency, job loss, or business downtime, you have a strong case. Foreclosure assistance experts can help you prepare a "Resolution Plan" that follows the formats banks are used to seeing, significantly increasing your chances of approval.
                                </p>
                            </section>

                            <section className="mb-16">
                                <h2 id="rbi-guidelines" className="text-3xl font-bold text-slate-900 mb-6 flex items-center scroll-mt-24">
                                    <FontAwesomeIcon icon={faLandmark} className="w-8 h-8 mr-3 text-blue-900" /> RBI Fair Practice Codes: Your Regulatory Shield
                                </h2>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    The Reserve Bank of India (RBI) is the supreme regulator of the banking sector, and its "Master Circulars" on recovery and customer service have the force of law. Every bank, whether public or private, must follow the "Fair Practice Code for Lenders."
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Key protections under the 2025 RBI guidelines include:
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    <strong>1. No Harassment:</strong> Lenders cannot use threat or physical force of any kind against a borrower, their family, or their workplace. Calls for recovery can only be made between 8:00 AM and 7:00 PM. Any violation can be reported to the Banking Ombudsman.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    <strong>2. Transparency in Possession:</strong> Banks must give the borrower the opportunity to remove their personal belongings from the property before taking possession. They must also create a detailed inventory of every item inside the house.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    <strong>3. Right to Redemptions:</strong> As per the 2024 amendment to the SARFAESI Rule 8, a borrower has a right to "redeem" the property by paying the dues at any time *before* the bank publishes the auction notice. This is a crucial window that was recently clarified to prevent banks from selling properties behind the borrower's back.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    If a bank violates these RBI guidelines, you can file a complaint with the Reserve Bank's Integrated Ombudsman Scheme. While the Ombudsman cannot always stop a foreclosure, a positive order from the RBI is a massive boost for your DRT case.
                                </p>
                            </section>

                            <section className="mb-16">
                                <h2 id="impact-credit" className="text-3xl font-bold text-slate-900 mb-6 flex items-center scroll-mt-24">
                                    <FontAwesomeIcon icon={faStar} className="w-8 h-8 mr-3 text-yellow-500" /> Managing Credit Scores: Life After Default
                                </h2>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    A loan default and foreclosure will inevitably damage your credit score. Ratings agencies like CIBIL, Experian, and Equifax will record the missed payments and the "Suit Filed" or "Settled" status. However, a credit score is not a life sentence; it is a dynamic number that can be rebuilt.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    The difference between "Settled," "Closed," and "Written Off" is vital. "Written Off" is the most damaging status, indicating you never paid and the bank gave up. "Settled" means you paid a lower amount, which is still a negative mark but better than a write-off. "Closed" is the gold standard, indicating full payment.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Post-foreclosure assistance involves strategies to repair this damage. This includes getting a "Secured Credit Card" (card against a fixed deposit) to start a new positive payment history. It also involves ensuring the bank updates the credit bureaus within 30 days of your settlement, a legal requirement that banks often ignore.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    At CredSettle, we don't just help you save your home; we help you plan for your financial rebirth. By carefully managing the terminology used in your settlement and following a disciplined rebuilding path, many of our clients are able to qualify for new credit within 24 to 36 months of a major default.
                                </p>
                            </section>

                            <section className="mb-16">
                                <h2 id="reviews" className="text-3xl font-bold text-slate-900 mb-8 flex items-center scroll-mt-24">
                                    <FontAwesomeIcon icon={faUsers} className="w-8 h-8 mr-3 text-blue-600" /> Client Success Stories
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {reviews.map((review, index) => (
                                        <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                            <div className="flex items-center mb-3">
                                                <div className="flex text-yellow-400 mr-2">
                                                    {[...Array(review.stars)].map((_, i) => (
                                                        <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4" />
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
                            </section>

                            <section className="mb-16">
                                <h2 id="faq" className="text-3xl font-bold text-slate-900 mb-8 flex items-center scroll-mt-24">
                                    <FontAwesomeIcon icon={faHelpCircle} className="w-8 h-8 mr-3 text-blue-600" /> Frequently Asked Questions
                                </h2>
                                <div className="space-y-6">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm">
                                            <h4 className="font-bold text-slate-900 mb-3 text-lg">{faq.question}</h4>
                                            <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <div className="bg-[#001235] rounded-3xl p-8 md:p-12 text-center text-white my-16">
                                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Don't Wait for the Auctioneer's Gavel</h3>
                                <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto">
                                    The earlier you take legal action, the more options you have to protect your home. Contact our foreclosure defense experts today for a confidential review of your bank notices.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl">
                                        Call 1800-XXX-XXXX
                                    </button>
                                    <button className="bg-white hover:bg-slate-100 text-[#001235] px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl">
                                        Whatsapp Us Now
                                    </button>
                                </div>
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related Pages */}
                    <aside className="lg:w-1/4 sticky top-24">
                        <div className="space-y-8">

                            {/* Primary CTA */}
                            <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                                <h3 className="text-xl font-bold mb-4 relative z-10 text-white">Emergency Foreclosure Help</h3>
                                <p className="text-slate-300 mb-6 text-sm relative z-10">
                                    Did you receive a 13(2) or 13(4) notice? Or is your home already listed for auction? Our lawyers can file an immediate DRT stay.
                                </p>
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all mb-4 relative z-10 flex items-center justify-center">
                                    Get Legal Help Now <FontAwesomeIcon icon={faZap} className="ml-2 w-4 h-4" />
                                </button>
                                <div className="flex items-center justify-center text-xs text-slate-400">
                                    <FontAwesomeIcon icon={faCheckCircle} className="w-3 h-3 mr-1 text-green-500" /> 100% Confidential
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="border border-slate-200 rounded-3xl p-8 bg-white shadow-sm">
                                <h3 className="text-xl font-bold mb-6 text-slate-800">Related Legal Guides</h3>
                                <div className="space-y-4">
                                    {[
                                        { title: 'SARFAESI Act Defense', icon: faShield, link: '#' },
                                        { title: 'DRT Litigation Guide', icon: faGavel, link: '#' },
                                        { title: 'RBI Compliance 2025', icon: faLandmark, link: '#' },
                                        { title: 'Home Loan Settlement', icon: faCheckCircle, link: '#' },
                                        { title: 'Credit Score Repair', icon: faStar, link: '#' }
                                    ].map((item, idx) => (
                                        <Link
                                            key={idx}
                                            href={item.link}
                                            className="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-100"
                                        >
                                            <div className="bg-blue-50 p-2 rounded-lg mr-4 group-hover:bg-blue-100 transition-colors">
                                                <FontAwesomeIcon icon={item.icon} className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">{item.title}</span>
                                            <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4 ml-auto text-slate-300 group-hover:text-blue-600" />
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Secondary CTA */}
                            <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl">
                                <div className="flex items-center mb-4">
                                    <div className="bg-white/20 p-2 rounded-lg mr-3">
                                        <FontAwesomeIcon icon={faPhoneCall} className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Talk to a Lawyer</h3>
                                </div>
                                <p className="text-blue-100 text-sm mb-6">
                                    Book a priority call with an expert foreclosure defense attorney.
                                </p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 rounded-xl transition-all text-center"
                                >
                                    Schedule Now
                                </Link>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
};

export default LoanDefaultEmiForeclosureAssistanceClient;
