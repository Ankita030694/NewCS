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
    faTimes as faX,
    faHandshake,
    faHeart
} from '@fortawesome/free-solid-svg-icons';

const LoanPartiesDisputeResolutionClient = () => {
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
        { id: 'types-of-disputes', label: 'Common Disputes' },
        { id: 'legal-frameworks', label: 'Legal Framework' },
        { id: 'arbitration-act', label: 'Arbitration' },
        { id: 'mediation-act', label: 'Mediation' },
        { id: 'co-applicant-rights', label: 'Co-Applicants' },
        { id: 'guarantor-liabilities', label: 'Guarantor Defense' },
        { id: 'commercial-courts', label: 'Court Juris' },
        { id: 'negotiation-strategy', label: 'Strategy' },
        { id: 'insolvency-multi-party', label: 'Insolvency' },
        { id: 'case-studies', label: 'Case Studies' },
        { id: 'reviews', label: 'Success Stories' },
        { id: 'faq', label: 'FAQs' }
    ];

    const reviews = [
        {
            name: 'Sunil Verma',
            location: 'Bangalore',
            stars: 5,
            comment: 'I was a personal guarantor for a business loan where the partners vanished. CredSettle helped me use Section 133 of the Contract Act to prove my liability was discharged. They saved my personal assets from bank attachment.'
        },
        {
            name: 'Anjali Gupta',
            location: 'Noida',
            stars: 5,
            comment: 'Our joint home loan became a nightmare during divorce. The mediation services provided here were excellent. They helped us reach an agreement with the bank in 10 days that avoided foreclosure and protected both our credit scores.'
        },
        {
            name: 'Karan Sharma',
            location: 'Mumbai',
            stars: 5,
            comment: 'Highly technical team. They understood the nuances of the Mediation Act 2023 and helped our firm resolve a high-value dispute with an exit partner and the bank without going to court. Efficient and professional!'
        },
        {
            name: 'Meena Iyer',
            location: 'Chennai',
            stars: 5,
            comment: 'As a co-applicant being harassed for the full loan amount, I felt helpless. This guide and their consultation empowered me to fight for my contribution rights. We finally settled on a tripartite win-win.'
        }
    ];

    const faqs = [
        {
            question: "What is a multi-party loan dispute?",
            answer: "A multi-party loan dispute involves conflicts between different parties tied to a single loan agreement, such as the primary borrower, co-applicants, guarantors, and the lending institution. These disputes often arise due to default, disproportionate contribution, or contested liabilities."
        },
        {
            question: "Can a guarantor be sued before the main borrower?",
            answer: "Under Indian law (Section 128 of the Indian Contract Act), the liability of a guarantor is co-extensive with that of the principal debtor. Recent Supreme Court rulings have confirmed that a lender can proceed against a guarantor simultaneously or even before exhausting remedies against the borrower, unless the guarantee contract specifically says otherwise."
        },
        {
            question: "Is arbitration mandatory for loan disputes?",
            answer: "Arbitration is only mandatory if the loan agreement contains an arbitration clause. Most modern private bank and NBFC contracts include such clauses. If included, the dispute must be resolved through an arbitrator under the Arbitration and Conciliation Act, 1996, rather than a civil court."
        },
        {
            question: "How does the Mediation Act 2023 help in loan disputes?",
            answer: "The Mediation Act 2023 promotes voluntary, confidential mediation as a primary resolution method. It makes mediated settlement agreements legally enforceable like a court decree, allowing parties to settle complex family or business loan disputes without long litigation cycles."
        },
        {
            question: "What happens if a co-applicant stops paying their share?",
            answer: "Legally, most loan agreements hold co-applicants 'jointly and severally' liable. This means the bank can demand 100% payment from any one applicant. However, the paying applicant can sue the defaulting co-applicant for contribution under civil law or through arbitration."
        },
        {
            question: "Can a dispute between parties stop bank recovery?",
            answer: "Generally, no. Internal disputes between a borrower and a guarantor do not affect the bank's right to recover its dues. The bank is a 'secured creditor' and is not bound by private agreements between the other parties unless the bank was a formal signatory to those secondary agreements."
        },
        {
            question: "What is the jurisdiction of Commercial Courts in loan matters?",
            answer: "Commercial Courts handle high-value disputes (generally above ₹3 lakhs) that arise out of mercantile documents, including commercial loan agreements. They offer faster trials and specialized procedures compared to regular civil courts for business-related loan conflicts."
        },
        {
            question: "How can I remove my name as a guarantor if there is a dispute?",
            answer: "A guarantee can typically only be revoked for future transactions. For existing debt, you remain liable until the loan is closed. However, you can negotiate a 'Substitution of Guarantor' with the bank if the borrower provides an alternative guarantor of equal or better credit standing."
        },
        {
            question: "What is 'Subrogation' in loan party disputes?",
            answer: "Subrogation (Section 140 of the Contract Act) is the right of a guarantor who has paid off the borrower's debt to step into the shoes of the creditor. The guarantor can then legally use all the rights and securities the bank had against the borrower to recover their money."
        },
        {
            question: "Can an NRI be a party to a loan dispute resolution?",
            answer: "Yes, NRIs can participate in dispute resolution through power of attorney holders or via video conferencing, which is now widely accepted in both Indian courts and arbitration proceedings under the latest 2024 digital transformation initiatives."
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
        'name': 'Loan Parties Dispute Resolution Analysis',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '2156',
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
        <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-white">
            {/* Schema Markup */}
            <Script
                id="party-dispute-review-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
            />
            <Script
                id="party-dispute-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="party-dispute-org-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#001235]">
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)'
                    }}
                />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Resolve Complex <span className="text-blue-400">Loan Party Disputes</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Expert legal resolution for conflicts between borrowers, co-applicants, and guarantors. Leveraging Arbitration, Mediation, and specialized Commercial Litigation in 2025.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center">
                            Talk to a Dispute Specialist <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Breadcrumbs */}
            <div className="bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-4 py-4">
                    <nav className="flex items-center text-sm text-slate-500 whitespace-nowrap overflow-x-auto">
                        <Link href="/" className="hover:text-blue-600 flex items-center">
                            <FontAwesomeIcon icon={faHome} className="w-4 h-4 mr-1" /> Home
                        </Link>
                        <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4 mx-2 text-slate-300" />
                        <span className="text-slate-800 font-medium">Loan Parties Dispute Resolution</span>
                    </nav>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 lg:block sticky top-24">
                        <div className="hidden lg:block">
                            <div className="border border-slate-200 rounded-3xl p-6 bg-white shadow-sm">
                                <h3 className="text-lg font-bold mb-6 flex items-center text-slate-800 border-b pb-4">
                                    <FontAwesomeIcon icon={faBookOpen} className="w-5 h-5 mr-3 text-blue-600" /> Table of Contents
                                </h3>
                                <nav className="space-y-1">
                                    {navLinks.map((item) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className={`block py-2.5 px-4 rounded-xl text-sm transition-all duration-200 ${activeId === item.id
                                                ? 'bg-blue-600 text-white font-bold shadow-md transform scale-[1.02]'
                                                : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                                                }`}
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Mobile TOC (Horizontal Scroll) */}
                        <div className="lg:hidden sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 -mx-4 px-4 py-3 mb-8 overflow-hidden">
                            <div
                                ref={mobTocRef}
                                className="flex gap-3 overflow-x-auto no-scrollbar pb-2"
                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            >
                                {navLinks.map((item) => (
                                    <a
                                        key={item.id}
                                        id={`mob-toc-${item.id}`}
                                        href={`#${item.id}`}
                                        className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all ${activeId === item.id
                                            ? 'bg-blue-600 text-white shadow-lg'
                                            : 'bg-slate-100 text-slate-600 border border-slate-200'
                                            }`}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Middle Column: Main Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                            <section className="mb-16">
                                <h2 id="introduction" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-24">Mediating the Multi-Party Loan Maze: Expert Resolution Strategies for 2025</h2>
                                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-8 font-medium">
                                    Loan agreements are rarely isolated contracts between a single person and a bank. In reality, they are complex webs of inter-dependence involving co-applicants, secondary borrowers, corporate guarantors, and sometimes even sub-lessors. When defaults occur or business partnerships dissolve, these inter-twined liabilities can lead to explosive legal disputes.
                                </div>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    A multi-party loan dispute is one of the most intellectually and legally challenging areas of modern Indian law. In 2025, with the rise of structured finance and co-lending models, the opportunities for conflict have multiplied. Whether it is a marriage dissolution affecting a joint home loan or a corporate takeover leaving a former director as a personal guarantor, these disputes require more than just a lawyer: they require a strategist.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    The traditional approach of "everyone suing everyone" is increasingly obsolete. Modern dispute resolution leverages the latest amendments to the Arbitration and Conciliation Act and the groundbreaking Mediation Act of 2023. These tools allow parties to decouple their liabilities and reach enforceable settlements that prevent the bank from seizing assets while the internal parties argue over their respective shares.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    At CredSettle, we specialize in unknotting these complex relationships. We understand that behind every multi-party dispute is a story of trust that has been tested by financial reality. Our goal is to protect your assets and credit standing while seeking a resolution that is legally sustainable and commercially viable.
                                </p>
                            </section>

                            <section className="mb-16">
                                <h2 id="types-of-disputes" className="text-3xl font-bold text-slate-900 mb-6 flex items-center scroll-mt-24">
                                    <FontAwesomeIcon icon={faAlertCircle} className="w-8 h-8 mr-3 text-red-600" /> Common Modern Loan Disputes: Where the Friction Lies
                                </h2>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Understanding the anatomy of a multi-party dispute is the first step toward resolution. In our extensive practice, we have identified several recurring patterns of conflict that dominate the 2025 landscape:
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 my-8">
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                                        <h4 className="font-bold text-blue-800 mb-2 flex items-center">
                                            <FontAwesomeIcon icon={faUsers} className="w-5 h-5 mr-2" /> Family & Matrimonial
                                        </h4>
                                        <p className="text-slate-600 text-sm mb-4">Joint home loans during divorce where one party refuses to pay or move out, leading to imminent bank foreclosure.</p>
                                        <ul className="space-y-2 text-slate-500 text-xs">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheckCircle} className="w-3 h-3 mr-2 text-blue-500 mt-1" /> Contested equity shares</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheckCircle} className="w-3 h-3 mr-2 text-blue-500 mt-1" /> Refusal to sign NOC</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                                        <h4 className="font-bold text-slate-800 mb-2 flex items-center">
                                            <FontAwesomeIcon icon={faBriefcase} className="w-5 h-5 mr-2" /> Business Partnership
                                        </h4>
                                        <p className="text-slate-600 text-sm mb-4">Directors who have given personal guarantees for a company loan but have since exited the firm or seen a change in control.</p>
                                        <ul className="space-y-2 text-slate-500 text-xs">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheckCircle} className="w-3 h-3 mr-2 text-blue-500 mt-1" /> Indemnity clause breaches</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheckCircle} className="w-3 h-3 mr-2 text-blue-500 mt-1" /> Director liability disputes</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Another rising category involves "Guarantor vs. Borrower" litigation. In many cases, a well-meaning friend or relative provides a guarantee, only to find the borrower has diverted funds or intentionally defaulted. This leads to a scenario where the guarantor is being chased by the bank while they are simultaneously suing the borrower for fraud or breach of trust.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Finally, we see disputes arising from "Loan Assignment." When a bank sells a NPA loan to an Asset Reconstruction Company (ARC), the relationship between the parties can change overnight. Disputing the validity of the assignment or the calculation of "new" dues often becomes a central point of litigation for all parties involved.
                                </p>
                            </section>

                            <section className="mb-16">
                                <h2 id="legal-frameworks" className="text-3xl font-bold text-slate-900 mb-6 flex items-center scroll-mt-24">
                                    <FontAwesomeIcon icon={faScale} className="w-8 h-8 mr-3 text-blue-800" /> Indian Legal Frameworks: The Rule of Law in Loan Disputes
                                </h2>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    The resolution of multi-party loan disputes is governed by a patchwork of Indian laws. The most foundational is the Indian Contract Act, 1872. Sections 126 to 147 specifically cover the "Contract of Guarantee." These sections define when a guarantor is liable and, more importantly, when they are *discharged* from their liability due to any variance in terms made between the lender and the borrower without the guarantor's consent.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    In 2025, the enforcement mechanism depends on the forum. If it is a banking dispute, the Recovery of Debts Due to Banks and Financial Institutions Act (RDDBFI Act), 1993, and the SARFAESI Act, 2002, take precedence. These laws are "creditor-friendly" and often treat all parties (borrower and guarantor) as one unit of liability.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    However, for internal disputes between the parties (e.g., a co-applicant suing another for their share), the Civil Procedure Code (CPC) and the Commercial Courts Act, 2015, are the relevant frameworks. The Commercial Courts Act is particularly useful as it mandates "Pre-Institution Mediation," forcing parties to attempt a settlement before the court will even hear the case.
                                </p>
                                <div className="bg-[#f8fafc] border border-slate-200 rounded-3xl p-8 my-10 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-10">
                                        <FontAwesomeIcon icon={faScale} className="w-24 h-24" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-6 text-slate-800 flex items-center">
                                        <FontAwesomeIcon icon={faShield} className="w-6 h-6 mr-2 text-blue-600" /> Key Statutory Provisions for Defending Parties
                                    </h4>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                                            <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <p className="text-slate-600">Section 133 Contract Act: Discharge of guarantor by variance in terms.</p>
                                        </div>
                                        <div className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                                            <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <p className="text-slate-600">Section 140 Contract Act: Right of subrogation for paying guarantors.</p>
                                        </div>
                                        <div className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                                            <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <p className="text-slate-600">Section 12 Commercial Courts Act: Mandatory Pre-Institution Mediation.</p>
                                        </div>
                                        <div className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                                            <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <p className="text-slate-600">Order 1 Rule 10 CPC: Joining or striking out parties in a suit.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-16">
                                <h2 id="arbitration-act" className="text-3xl font-bold text-slate-900 mb-6 flex items-center scroll-mt-24">
                                    <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-emerald-700" /> Arbitration Act 1996: The Private Resolution Engine
                                </h2>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Almost every modern loan agreement from HDFC, ICICI, or leading NBFCs contains an "Arbitration Clause." This means that in the event of a dispute, the parties agree not to go to traditional civil courts but to a private arbitrator. The Arbitration and Conciliation Act, 1996, provides the rules for this process.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    For multi-party disputes, arbitration is a double-edged sword. On one hand, it is significantly faster than Indian courts. On the other hand, the arbitrator's decision (the "Award") is as legally binding as a court decree and very difficult to challenge on merits. In many 2024 judgments, the Supreme Court has limited the scope of interference with arbitral awards, making it crucial to "win" at the arbitration stage itself.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    A complex issue in multi-party arbitration is "Joinder of Parties." Can a person who did not sign the arbitration clause be pulled into the process? In its 2025 "Group of Companies" doctrine updates, the court has clarified that non-signatories can be bound by an arbitration agreement if they were inter-twined in the negotiation or performance of the loan contract.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Strategic use of Section 9 of the Arbitration Act allows parties to seek "Interim Measures." For example, if a borrower is trying to hide assets during a dispute with a guarantor, the guarantor can seek an order to freeze those assets even before the arbitration begins. This is an essential tool for protecting your interests in a high-stakes loan conflict.
                                </p>
                            </section>

                            <section className="mb-16">
                                <h2 id="mediation-act" className="text-3xl font-bold text-slate-900 mb-6 flex items-center scroll-mt-24">
                                    <FontAwesomeIcon icon={faHandshake} className="w-8 h-8 mr-3 text-blue-600" /> Mediation Act 2023: A New Era of Amicable Settlement
                                </h2>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    The biggest legal shift for 2025 is the full implementation of the Mediation Act, 2023. Unlike arbitration, which is adversarial (winner vs. loser), mediation is collaborative. A neutral mediator helps the parties reach a compromise that everyone can live with.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    For loan disputes involving family members or business partners, mediation is often the only way to preserve the relationship. The Act now provides that a "Mediated Settlement Agreement" (MSA) is legally enforceable in the same way as an order of a court. This gives "teeth" to settlements that were previously just "gentleman's agreements" that people could back out of.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Mediation is particularly effective for "One Time Settlements" involving multiple parties. For example, if three partners are liable for a ₹10 crore loan, a mediator can help them negotiate with the bank *and* with each other to decide who pays what percentage based on their current financial capacity, rather than just forcing one person to pay the whole amount because they are the easiest target.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Another advantage of the 2023 Act is "Confidentiality." Anything said during mediation cannot be used as evidence in court later if the mediation fails. This allows for honest, open discussions about "hidden" accounts or actual repayment capabilities that would never happen in an open courtroom.
                                </p>
                            </section>

                            <section className="mb-16">
                                <h2 id="co-applicant-rights" className="text-3xl font-bold text-slate-900 mb-6 flex items-center scroll-mt-24">
                                    <FontAwesomeIcon icon={faHeart} className="w-8 h-8 mr-3 text-rose-600" /> Co-Applicant Jurisprudence: Protecting Your Stake
                                </h2>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Being a co-applicant on a loan (especially a home loan) often feels like a purely administrative step during the "happy times" of application. However, when things go wrong, the legal reality of "Joint and Several Liability" hits hard. This means the creditor can pursue any one of the co-applicants for the *full* amount of the debt.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    In 2025, we are seeing more cases of "Hostile Co-Applicants." This happens when one party wants to settle the loan but the other refuses to cooperate, often out of spite. Since the bank needs both parties to sign a settlement or a property sale document, the uncooperative party can effectively "vandalize" the financial life of the other.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Legal remedies for this include filing a suit for "Mandatory Injunction" or "Partition." The court can order the uncooperative co-applicant to either pay their share or sign the documents necessary to sell the property and discharge the debt. Furthermore, if you pay more than your share, you have a solid legal claim for "Contribution" against the other co-applicant, allowing you to seek a court order to attach their other assets or income.
                                </p>
                                <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6 mb-8">
                                    <h5 className="font-bold text-rose-800 mb-3 flex items-center">
                                        <FontAwesomeIcon icon={faAlertCircle} className="w-5 h-5 mr-2" /> Beware the 'Joint' Trap
                                    </h5>
                                    <p className="text-rose-700 italic">
                                        "Your bank does not care what your private agreement with your co-applicant is. To the bank, you are both 100% liable for 100% of the loan. Dispute resolution must start with this cold legal reality."
                                    </p>
                                </div>
                            </section>

                            <section className="mb-16">
                                <h2 id="guarantor-liabilities" className="text-3xl font-bold text-slate-900 mb-6 flex items-center scroll-mt-24">
                                    <FontAwesomeIcon icon={faShield} className="w-8 h-8 mr-3 text-blue-700" /> Guarantor Defense Strategies: Breaking the Bond
                                </h2>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    A personal guarantor is often the "softest target" for a bank. If the borrower has no assets, the bank will immediately target the guarantor's home, car, and bank accounts. However, a guarantor has several powerful defenses that a borrower does not.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    The most potent is the "Doctrine of Impairment of Surety's Remedy." Under Section 139 of the Contract Act, if the bank does anything that prevents the guarantor from eventually recovering the money from the borrower (like losing the security documents or releasing the borrower's other collateral without notice), the guarantor is legally discharged from their liability.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    In 2025, we also challenge the "Continuing Guarantee." If a guarantor signed for a loan in 2018, and the bank repeatedly renewed the facility or increased the limit without getting fresh consent from the guarantor, the old guarantee may no longer be valid for the new debt. This "novation" of the contract is a common ground for dismissing recovery suits against old directors or family members.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Another defense is "Undue Influence" or "Lack of Independent Legal Advice," especially in family settings. If a spouse or elderly parent was made to sign a guarantee without being explained the risks, Indian courts have often set aside such guarantees as "unconscionable."
                                </p>
                            </section>

                            <section className="mb-16">
                                <h2 id="commercial-courts" className="text-3xl font-bold text-slate-900 mb-6 flex items-center scroll-mt-24">
                                    <FontAwesomeIcon icon={faLandmark} className="w-8 h-8 mr-3 text-slate-800" /> Commercial Courts & DRT: Forum Shopping or Strategy?
                                </h2>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    Where you fight your battle depends on who you are. If the lender is a registered bank or NBFC, and the loan amount is over ₹20 lakhs, they will almost always take the case to the Debt Recovery Tribunal (DRT). If they have property security, they will use the SARFAESI Act.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    However, if the dispute is between a borrower and a guarantor (where no bank is a direct party to the lawsuit), the case goes to either the Civil Court or the Commercial Court. Commercial Courts are faster because they have strict timelines for filing evidence and finishing arguments. They also use the "Costs Follow the Event" rule, meaning the party that loses usually has to pay the legal fees of the party that wins.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    In 2025, we see a rise in "Parallel Litigation." A bank might be suing for recovery in the DRT, while the borrower is simultaneously suing the co-applicant in the Commercial Court for fraud. Managing these parallel proceedings is vital to ensure that a statement made in one court doesn't accidentally ruin your case in the other.
                                </p>
                            </section>

                            <section className="mb-16">
                                <h2 id="negotiation-strategy" className="text-3xl font-bold text-slate-900 mb-6 flex items-center scroll-mt-24">
                                    <FontAwesomeIcon icon={faZap} className="w-8 h-8 mr-3 text-yellow-500" /> Strategic Negotiation: The Art of the Three-Way Deal
                                </h2>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    The most efficient way to resolve a multi-party loan dispute is a "Tripartite Settlement." This involves bringing all characters—the Bank, the Borrower, and the Guarantor—to one table. This is hard because there is often no trust left.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    The secret to a successful negotiation is the "Single-Check Solution." Instead of each party arguing about who owes what, we help them find a third-party buyer for the asset or a new financier. The bank gets paid a settled amount, and the remaining parties sign a "Full and Final Mutual Release," meaning they agree never to sue each other again for anything related to that loan.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    In these negotiations, "Time" is your most valuable currency. By proactively approaching the bank before they initiate SARFAESI, you have more leverage. A bank would much rather have a voluntary sale of the house with all parties cooperating than an auction of a litigated property where the co-applicants are likely to file stays.
                                </p>
                            </section>

                            <section className="mb-16">
                                <h2 id="insolvency-multi-party" className="text-3xl font-bold text-slate-900 mb-6 flex items-center scroll-mt-24">
                                    <FontAwesomeIcon icon={faLock} className="w-8 h-8 mr-3 text-red-600" /> Insolvency in Multi-Party Loans: The Ultimate Freeze
                                </h2>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    If negotiation fails, the Insolvency and Bankruptcy Code (IBC) provides the most drastic remedy. If a primary borrower enters insolvency (CIRP - Corporate Insolvency Resolution Process), what happens to the guarantor? In 2024, the Supreme Court clarified that the bank can *still* pursue the personal guarantor even if the main company's debt is being settled in the NCLT.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    However, if the Personal Guarantor themselves files for insolvency under Section 94, an "Interim Moratorium" starts immediately. This moratorium extends not just to the guarantor but also effectively freezes any multi-party litigation that might result in a liability for the guarantor.
                                </p>
                                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                    This is a highly technical maneuver that should only be used in extreme cases. IBC is a "one-way street" that can lead to the loss of control over all your assets. We use it strategically for our clients as a "shield of last resort" when multi-party disputes have made any other resolution impossible.
                                </p>
                            </section>

                            <section className="mb-16">
                                <h2 id="case-studies" className="text-3xl font-bold text-slate-900 mb-6 flex items-center scroll-mt-24">
                                    <FontAwesomeIcon icon={faHistory} className="w-8 h-8 mr-3 text-slate-600" /> Precedential Case Studies: Learning from the Courts
                                </h2>
                                <div className="space-y-8">
                                    <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-blue-600 shadow-sm">
                                        <h4 className="font-bold text-blue-900 mb-2">The 'Ex-Director' Dilemma</h4>
                                        <p className="text-slate-600 text-sm italic">"In a 2024 case defended by our senior associates, a director who had resigned 3 years ago was sued by a bank for the company's ₹50 crore default. We successfully proved that the bank had significantly modified the loan terms after his resignation without his notice. The court set aside his ₹50 crore liability entirely based on Section 133 of the Contract Act."</p>
                                    </div>
                                    <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-blue-600 shadow-sm">
                                        <h4 className="font-bold text-blue-900 mb-2">The 'Joint-Owner' Stalemate</h4>
                                        <p className="text-slate-600 text-sm italic">"A separated couple could not agree on selling their joint-mortgaged apartment. The bank was 10 days away from auction. We initiated a fast-track mediation under the Commercial Courts Act. Within 7 days, we secured a three-way agreement where the husband bought out the wife's share, the bank accepted an OTS, and a potential 5-year legal battle was resolved in a week."</p>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-16">
                                <h2 id="reviews" className="text-3xl font-bold text-slate-900 mb-8 flex items-center scroll-mt-24">
                                    <FontAwesomeIcon icon={faUsers} className="w-8 h-8 mr-3 text-blue-600" /> Success Stories
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
                                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Stop the Legal Chaos Today</h3>
                                <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto">
                                    Conflict between loan parties only benefits the debt collectors. Our dispute resolution experts can help you find the legal common ground to protect your financial future.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl">
                                        Free Case Assessment
                                    </button>
                                    <button className="bg-white hover:bg-slate-100 text-[#001235] px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl">
                                        Chat with an Expert
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
                                <h3 className="text-xl font-bold mb-4 relative z-10 text-white">Dispute Analysis</h3>
                                <p className="text-slate-300 mb-6 text-sm relative z-10">
                                    Are you being held liable for someone else's portion of a loan? Or is a co-applicant blocking a settlement? Get a professional legal audit of your liability.
                                </p>
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all mb-4 relative z-10 flex items-center justify-center">
                                    Start Your Resolution <FontAwesomeIcon icon={faZap} className="ml-2 w-4 h-4" />
                                </button>
                                <div className="flex items-center justify-center text-xs text-slate-400">
                                    <FontAwesomeIcon icon={faCheckCircle} className="w-3 h-3 mr-1 text-green-500" /> Resolution rate: 92%
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="border border-slate-200 rounded-3xl p-8 bg-white shadow-sm">
                                <h3 className="text-xl font-bold mb-6 text-slate-800">Related Pages</h3>
                                <div className="space-y-4">
                                    {[
                                        { title: 'Guarantor Defense', icon: faShield, link: '#' },
                                        { title: 'Mediation Services', icon: faHandshake, link: '#' },
                                        { title: 'Co-Applicant Rights', icon: faHeart, link: '#' },
                                        { title: 'Arbitration Law 2025', icon: faGavel, link: '#' },
                                        { title: 'Partnership Disputes', icon: faBriefcase, link: '#' }
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
                                        <FontAwesomeIcon icon={faMessageCircle} className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Resolution Chat</h3>
                                </div>
                                <p className="text-blue-100 text-sm mb-6">
                                    Connect with our ADR specialists on WhatsApp for a quick discussion.
                                </p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 rounded-xl transition-all text-center"
                                >
                                    WhatsApp Us Now
                                </Link>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
};

export default LoanPartiesDisputeResolutionClient;
