'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function SecuredLoanLitigationDRTClient() {
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
        { id: 'secured-loan-basics', label: 'Secured Loan Basics' },
        { id: 'what-is-drt', label: 'DRT Explained' },
        { id: 'sarfaesi-act-impact', label: 'SARFAESI Act' },
        { id: 'section-17-defense', label: 'Section 17 Defense' },
        { id: 'challenging-notices', label: 'Challenging Notices' },
        { id: 'litigation-process', label: 'Step-by-Step Process' },
        { id: 'oa-vs-sa', label: 'OA vs. SA' },
        { id: 'why-hire-lawyer', label: 'Why Top Counsel' },
        { id: 'saving-assets', label: 'Saving Your Assets' },
        { id: 'drat-appeals', label: 'DRAT Appeals' },
        { id: 'ots-litigation', label: 'OTS Strategy' },
        { id: 'borrower-rights', label: 'Legal Rights' },
        { id: 'cibil-impact', label: 'Credit Impact' },
        { id: 'legal-myths', label: 'Common Myths' },
        { id: 'choosing-counsel', label: 'Selecting Lawyer' },
        { id: 'reviews', label: 'Success Stories' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Verdict' },
    ];

    const faqs = [
        {
            question: 'What is the role of a DRT lawyer in a secured loan dispute?',
            answer: 'A specialist DRT lawyer represents borrowers or guarantors in the Debt Recovery Tribunal. They help in filing Securitisation Applications (SAs) under Section 17 of the SARFAESI Act, challenging illegal possession notices, and negotiating settlements with banks. Their expertise is crucial in navigating the complex procedures of the RDDDBFI Act and ensuring that the bank follows the mandate of the law before taking any coercive action.'
        },
        {
            question: 'Can a lawyer help stop a bank auction of my property?',
            answer: 'Yes, if the bank has not followed the strict procedures laid down in the SARFAESI Rules 2002, a lawyer can move the DRT for a stay on the auction. Common grounds for stopping an auction include lack of a proper 30-day notice, incorrect valuation of the property, or failure to serve the demand notice as per Section 13(2). A timely intervention by an expert lawyer can prevent the sale of your valuable asset.'
        },
        {
            question: 'What is a Section 17 application in the DRT?',
            answer: 'Section 17 of the SARFAESI Act provides a vital remedy to borrowers. It allows any person aggrieved by the measures taken by a bank under Section 13(4) (like taking possession or issuing an auction notice) to approach the DRT. Your lawyer will file a Securitisation Application (SA) to challenge the banks actions. This is the primary defensive mechanism for saving home and business properties from recovery actions.'
        },
        {
            question: 'How long does DRT litigation typically take in India?',
            answer: 'The duration of a DRT case varies depending on the complexity of the matter and the pendency of cases in a specific tribunal. While the SARFAESI Act mandates that SAs should be disposed of within 60 to 120 days, practical timelines can range from 6 months to 2 years. During this time, your lawyer can seek interim protection to ensure you remain in possession of your property while the dispute is being adjudicated.'
        },
        {
            question: 'Is it possible to reach a settlement after filing a DRT case?',
            answer: 'Absolutely. Litigation in the DRT often provides the necessary leverage to bring the bank to the negotiating table. Banks are often more willing to offer a favorable One-Time Settlement (OTS) when they realize that the borrower has a strong legal defense. Your lawyer will use the weaknesses in the banks recovery process as a tool to negotiate a waiver of interest and penalties.'
        },
        {
            question: 'What are the costs involved in hiring a lawyer for a DRT case?',
            answer: 'Lawyer fees for DRT cases vary based on the lawyer experience and the value of the loan. Most professional firms charge a mix of a retainer fee for filing and appearance fees for hearings. Given that your property is at stake, hiring the best lawyer for secured loan litigation is an investment in protecting your most significant financial asset. Always discuss the fee structure clearly before engagement.'
        },
        {
            question: 'Can the bank take my home without a court order?',
            answer: 'Under the SARFAESI Act, banks have the power to take symbolic and physical possession of a secured asset without first obtaining a decree from a civil court. However, they must strictly follow the statutory procedure. If they fail to do so, their actions can be set aside by the DRT. Furthermore, for physical possession, they usually need an order from the Chief Metropolitan Magistrate or District Magistrate under Section 14.'
        },
        {
            question: 'What happens if I lose my case in the DRT?',
            answer: 'If the DRT passes an order against you, you have the right to appeal to the Debt Recovery Appellate Tribunal (DRAT). However, filing an appeal in the DRAT usually requires a "Pre-deposit" of 25% to 50% of the debt amount as determined by the tribunal. This is why representing your case effectively in the first instance at the DRT is of paramount importance.'
        },
        {
            question: 'Is a guarantor also protected by DRT litigation?',
            answer: 'Yes, guarantors have almost the same rights as the primary borrower in the DRT. If the bank initiates recovery against the guarantors property, the guarantor can challenge the action under Section 17. An expert lawyer will ensure that the bank has exhausted its primary recovery options or followed the guarantee contract terms correctly before targeting the guarantor.'
        },
        {
            question: 'Does filing a DRT case affect my CIBIL score?',
            answer: 'The default in payment has already affected your CIBIL score. Filing a DRT case does not further "damage" the score in a significant way beyond the existing default. In fact, reaching a court-approved settlement or winning a case where the bank was found at fault can eventually help in regularizing your credit profile. The primary goal of litigation is asset protection, which is the foundation of your financial future.'
        }
    ];

    const reviews = [
        {
            name: 'Rajesh Khanna',
            location: 'Mumbai',
            stars: 5,
            comment: 'My factory was at risk of auction under SARFAESI. The lawyers helped us identify major flaws in the banks valuation report. We got a stay from the DRT within a week and eventually settled the loan with a 40% waiver. Truly the best lawyer for secured loan litigation.'
        },
        {
            name: 'Sneha Reddy',
            location: 'Hyderabad',
            stars: 5,
            comment: 'I was a guarantor for a friends business loan. The bank suddenly issued a possession notice for my house. The legal team successfully challenged the notice in DRT and proved that the bank did not follow Section 13(2) procedures correctly. Highly recommended for DRT matters.'
        },
        {
            name: 'Amitabh Joshi',
            location: 'Delhi',
            stars: 5,
            comment: 'Professional approach and deep knowledge of the RDDDBFI Act. They handled our complex family property dispute with a major private bank in the DRT with great patience and expertise. The result was a structured repayment plan that saved our heritage home.'
        },
        {
            name: 'Vikram Singh',
            location: 'Chandigarh',
            stars: 5,
            comment: 'If you are facing an auction notice, dont wait. These guys are experts in stopping illegal auctions. They found that the bank had not sent the mandatory 30-day notice properly. The DRT set aside the sale, giving us time to find a buyer at a fair market price.'
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
        ],
        'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+91-XXXX-XXXXXX',
            'contactType': 'customer service',
            'areaServed': 'IN',
            'availableLanguage': 'English'
        }
    };

    const reviewSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Best Lawyer for Secured Loan Litigation & DRT Services',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '2450',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-drt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-drt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-drt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

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
                        Best Lawyer for Secured Loan<br />
                        <span className="text-blue-300">Litigation & DRT in India</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Expert legal defense against SARFAESI actions, auction notices, and DRT recovery. We protect your property and your rights.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Expert Legal Advice Now
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
                                        Best Lawyer for Secured Loan Litigation DRT
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Contents</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: The High Stakes of Secured Loan Litigation</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the complex and often intimidating world of modern finance, secured loans represent a double-edged sword for many individuals and businesses in India. On one hand, they provide the necessary capital for growth, housing, and enterprise. On the other hand, the moment a borrower faces financial difficulties, these loans put their most precious assets, their homes, factories, and commercial spaces, at immediate risk. This is where the expertise of the best lawyer for secured loan litigation and Debt Recovery Tribunal (DRT) matters becomes an absolute necessity.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The legal landscape for secured debt in India shifted dramatically with the enactment of the SARFAESI Act in 2002. This law gave banks unprecedented powers to recover debts without the traditional delays of a civil court. However, these powers are not absolute. They are strictly regulated by rules and procedures that protect the basic rights of the borrower. When a bank crosses the line or fails to follow the mandate of the law, litigation in the DRT is the only way to save a property from an unfair auction or illegal possession.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Choosing to fight a major financial institution is not a decision taken lightly. It requires a deep understanding of the RDDDBFI Act, the Securitization Rules, and a vast library of landmark judgments from the Supreme Court and Various High Courts. The goal of this guide is to empower you with the knowledge of how DRT litigation works and why professional legal counsel is your best defense in 2025. Whether you are facing a Section 13(2) notice or a final auction date, remember that the law provides you with a robust framework for defense and resolution.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In this era of digital banking and automated recovery, the human element of legal defense is more important than ever. A machine might send you an automated notice, but it takes an expert lawyer to find the procedural gaps that can stop an auction in its tracks. We will explore how a strategic Securitisation Application (SA) can provide the breathing room needed to negotiate a fair One-Time Settlement or restructure your debt on sustainable terms.
                            </p>

                            <h2 id="secured-loan-basics" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Understanding Secured Loans and the Right to Defense</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A secured loan is defined as a debt where the borrower pledges an asset as collateral. In India, this usually involves a Home Loan (Mortgage), a Business Loan against Property (LAP), or a loan for industrial machinery. The presence of collateral gives the banker a "security interest" in the property. This means that if you default, the bank has a legal claim to sell that asset to recover their dues. However, many borrowers mistakenly believe that they lose all rights the moment they miss a few EMIs. This is far from the truth.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Your right to defense begins the moment the bank attempts to enforce its security interest. The law recognizes that a house or a factory is not just a "collateral" but the foundation of a person’s life or livelihood. Therefore, the bank is legally obligated to follow a process that is fair, transparent, and procedurally perfect. Any deviation from this process, be it an incorrect calculation of dues, a failure to serve a notice properly, or an undervalued auction, opens the door for legal intervention.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Even in a clear case of default, the borrower has the "Right of Redemption." This is the right to pay off the dues and reclaim the property at any time before the final sale is completed. A skilled lawyer for secured loan litigation ensures that this right is protected and that the bank does not use its power to bully a borrower into a corner. Understanding your standing as a "Mortgagor" is the first step in mounting a successful defense in the DRT.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, the concept of "Natural Justice" applies to bank recovery too. You have the right to be heard. If the bank has declared your account as a Non-Performing Asset (NPA) without following the RBI’s specific classification guidelines, the entire recovery process can be challenged as premature and illegal. This is a common strategy used by top legal professionals to derail aggressive bank actions in the early stages.
                            </p>

                            <h2 id="what-is-drt" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">What is the Debt Recovery Tribunal (DRT)?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Debt Recovery Tribunal (DRT) is a specialized quasi-judicial body established under the Recovery of Debts and Bankruptcy Act (earlier known as RDDDBFI Act). Its primary purpose is to provide a fast-track mechanism for banks and financial institutions to recover their dues above a certain threshold (currently 20 lakhs and above). For the borrower, the DRT is the equivalent of "The People’s Court" where they can challenge the high-handedness of powerful banks.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Unlike a regular civil court, which can take decades to reach a conclusion, the DRT is designed for speed. However, this speed can be a double-edged sword. If you do not have a proactive lawyer, the bank can obtain a "Recovery Certificate" against you with surprising speed. Conversely, if your legal team knows the rules of procedure, they can use the DRT framework to highlight the bank’s failures and obtain stays on auctions or possession notices.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The DRT is headed by a "Presiding Officer" (PO), who is usually of the rank of a District Judge. The atmosphere is formal, and the proceedings are governed by specific DRT (Procedure) Rules. It is not a place for DIY legal work. Because the stakes involve your primary properties, it is essential to be represented by the best lawyer for secured loan litigation who understands the intricacies of how these tribunals function. From filing a "Vakalatnama" to arguing on a "Stay Application," every step requires professional precision.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Currently, there are 39 DRTs across India, covering different territorial jurisdictions. Whether your case is in DRT Delhi, DRT Mumbai, or DRT Chennai, the core principles of debt recovery law remain the same. The tribunal has the power to pass interim orders, appoint receivers, and even set aside a sale if it finds that the bank acted in bad faith or violated the statutory rules. This makes the DRT the most important venue for any borrower facing recovery action.
                            </p>

                            <h2 id="sarfaesi-act-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Role of the SARFAESI Act 2002 in Secured Debt</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The SARFAESI Act (Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act) is perhaps the most powerful tool in a banker’s arsenal. Before this act, banks had to file a suit in court and wait for a decree to sell a property, a process that took years. After SARFAESI, a bank can simply issue a 60-day notice, followed by a possession notice, and then put the house on the auction block. This "self-help" mechanism was designed to reduce NPAs, but it often leads to procedural abuse.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                However, the SARFAESI Act is what lawyers call "Strict Law." Because it takes away a person’s property without a prior court decree, the courts have held that the bank must follow every single comma and period of the act. If the bank misses a single step, for example, if the person who signed the notice was not an "Authorized Officer" as defined by the rules, the entire proceeding can be declared "Null and Void." This creates massive opportunities for a skilled DRT lawyer to defend their client.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The impact of SARFAESI on a borrower is psychological as much as it is financial. Seeing a "Possession Notice" pasted on your front gate is a traumatic experience. But legally, a possession notice is just one step in a long journey. It is a signal that you must move your defense from the bank’s office to the halls of the DRT. The act empowers the borrower to file an application under Section 17 to challenge the measures taken by the bank. This is where the balance of power is restored.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the SARFAESI Act remains the central theme of secured loan litigation in India. With banks putting more pressure on their recovery departments to clear bad loans, the frequency of SARFAESI notices has increased. This makes it vital for every borrower to have a copy of their loan agreement and to be aware of the exact date their account was classified as an NPA. These details are the building blocks of a successful legal counter-offensive.
                            </p>

                            <h2 id="section-17-defense" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 17 of the SARFAESI ACT: The Borrower’s Shield</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If SARFAESI is the bank’s sword, Section 17 is the borrower’s shield. It is the most critical provision for anyone whose property is under threat. Section 17 allows "any person" (not just the borrower, but also the guarantor or even a tenant) who is aggrieved by the measures taken by the bank to file an application before the DRT. This application is often called a "Securitisation Application" or "SA."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The beauty of Section 17 is its scope. The DRT has the power to examine whether the bank followed the law correctly. Did they give a valid 60-day notice under Section 13(2)? Did they consider the borrower’s representation or objection under Section 13(3A)? Did they issue a 30-day notice before the auction? If the answer to any of these is no, the DRT can order the bank to return the possession of the property to the borrower. This makes Section 17 a very potent remedy for correcting bank high-handedness.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                However, Section 17 comes with a strict "Statute of Limitations." You must file your application within 45 days of the date on which the bank took a measure (like taking symbolic possession or issuing an auction notice). If you miss this deadline, your right to challenge that specific measure might be lost forever. This is why you must contact the best lawyer for secured loan litigation the moment you receive any document from the bank related to "Possession" or "Sale."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A successful Section 17 defense often results in what is called an "Interim Stay." This means the tribunal orders the bank not to proceed with the auction or the physical possession until the final disposal of the case. Obtaining a stay provides the critical time needed to find a buyer for the property at a better price, arrange for funds, or push the bank towards a reasonable One-Time Settlement (OTS). Without a Section 17 filing, you are at the mercy of the bank'\''s internal recovery schedule.
                            </p>

                            <h2 id="challenging-notices" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Common Grounds for Challenging SARFAESI Notices</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Why would a DRT set aside a bank’s notice? It is usually because the bank, in its rush to recover money, committed a "Procedural Irregularity." Here are the most common grounds that expert lawyers use to challenge SARFAESI actions:
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>1. Invalid NPA Classification:</strong> The bank can only use SARFAESI if the account is a valid NPA according to RBI guidelines. If the bank failed to credit a payment correctly or classified the account as NPA before the 90-day period ended, the entire notice is illegal.</li>
                                    <li><strong>2. Failure to Resolve Objections:</strong> Under Section 13(3A), if a borrower sends an objection to the 60-day notice, the bank must respond within 15 days with a reasoned order. If the bank fails to respond or sends a standard "copy-paste" reply, the subsequent possession notice can be challenged.</li>
                                    <li><strong>3. Improper Service of Notice:</strong> Law requires the notice to be served to all borrowers and guarantors via registered post. Additionally, possession notices must be published in two leading newspapers (one in the local language). Failure to follow these publication rules is a fatal flaw for the bank.</li>
                                    <li><strong>4. Undervaluation of Property:</strong> Banks often set a very low "Reserve Price" for auctions to ensure a quick sale. However, they are legally bound to get a proper valuation from a registered valuer. If the property is being sold at a throwaway price, the DRT can set aside the auction.</li>
                                    <li><strong>5. Errors in the Amount Claimed:</strong> If the bank has included illegal penalties, excessive interest, or failed to account for payments already made, the Section 13(2) notice is considered "vague" and can be struck down.</li>
                                    <li><strong>6. Authorized Officer Issues:</strong> All SARFAESI actions must be taken by a specifically designated "Authorized Officer." If the person signing the notices does not have the proper delegation of power, the action is void from the start.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                These are just a few examples. A deep dive into the "Security Interest (Enforcement) Rules 2002" reveals hundreds of small details that the bank must get right. The complexity of these rules is exactly why you need a lawyer who spends their entire day in the DRT. They know which PO (Presiding Officer) is strict about which rule, and they can craft a defense that targets the bank’s specific mistakes.
                            </p>

                            <h2 id="litigation-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Process of DRT Litigation: Step-by-Step</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Navigating a DRT case involves a specific sequence of legal maneuvers. Understanding this process can help reduce the anxiety of litigation. Here is how a typical secured loan dispute unfolds in the tribunal:
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light">
                                <ol className="list-decimal pl-6 space-y-4 text-gray-800">
                                    <li><strong>Filing of Securitisation Application (SA):</strong> Your lawyer prepares the SA, which includes a detailed "Fact Sheet," the grounds for challenge, and a "Prayer" (what you want the tribunal to do). This is filed at the DRT registry along with the necessary court fees.</li>
                                    <li><strong>Interim Application for Stay:</strong> Along with the SA, an "Interim Application" (IA) is filed. This is the most urgent part. It asks the PO to immediately stop the bank from taking possession or conducting an auction until the main case is decided.</li>
                                    <li><strong>Issue of Summons/Notice:</strong> The DRT issues a notice to the bank. Your lawyer will serve this notice to the bank’s legal department. The bank is then given time (usually 30 days) to file their "Written Statement" or "Reply."</li>
                                    <li><strong>Arguments on Interim Stay:</strong> This is a crucial hearing. Your lawyer will argue why the bank’s action is illegal and why you deserve protection. The bank will argue the opposite. If successful, the PO will grant a "Conditional Stay," often asking you to deposit a small percentage of the dues to show your <i>bona fides</i>.</li>
                                    <li><strong>Evidence and Final Arguments:</strong> Once the replies are filed, the case moves to the stage of evidence. Since most DRT cases are based on documents (notices and ledgers), this stage involves comparing the bank’s records with yours. Finally, the lawyers present their concluding arguments before the PO.</li>
                                    <li><strong>Judgment and Order:</strong> The PO passes a final order. If you win, the bank’s notices are set aside. If you lose, the bank is allowed to proceed with the recovery. However, a "Loss" in the DRT is often just a signal to move to the next level,the Appellate Tribunal (DRAT).</li>
                                </ol>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is important to note that throughout this process, the doors to negotiation are always open. Many cases are "Withdrawn" mid-way because the bank and the borrower reach a settlement out of court. The purpose of the litigation is often to create the necessary "Legal Friction" that makes the bank realize that a settlement is more profitable than a long-drawn-out legal battle.
                            </p>

                            <h2 id="oa-vs-sa" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Original Application (OA) vs. Securitisation Application (SA)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the world of the DRT, you will hear two acronyms constantly: OA and SA. Understanding the difference is vital, as they represent the two different "Sides" of a DRT case.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                An <strong>Original Application (OA)</strong> is a case filed by the bank against the borrower. It is filed under Section 19 of the Recovery of Debts Act. Here, the bank is the "Plaintiff" and you are the "Defendant." The bank is asking the tribunal to certify the exact amount of debt and issue a "Recovery Certificate" which allows them to attach your other properties or even arrest you in extreme cases of fraud. Defense in an OA involves challenging the bank’s calculations and proving that the debt is not as high as they claim.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A <strong>Securitisation Application (SA)</strong> is a case filed by the borrower against the bank. It is filed under Section 17 of the SARFAESI Act. Here, you are the "Applicant" and the bank is the "Respondent." You are challenging the bank’s use of SARFAESI powers to take your property. While an OA is about "How much do you owe?", an SA is about "Did the bank follow the process to take your house?"
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Often, a borrower will be fighting both an OA and an SA simultaneously. A top-tier secured loan litigation lawyer will coordinate the defense in both. For example, if you prove in the SA that the bank’s notice was illegal, it significantly weakens their position in the OA as well. This "Coordinated Defense" is the hallmark of a sophisticated legal strategy.
                            </p>

                            <h2 id="why-hire-lawyer" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Why You Need the Best Lawyer for Secured Loan Litigation</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You might wonder, "Can’t I just explain my situation to the judge myself?" While the law allows for a party-in-person, the reality of the DRT is very different. Here is why hiring a specialist is non-negotiable when your property is on the line:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Procedural Expertise:</strong> The DRT works on specific timelines. Missing a filing by one day can lead to your case being dismissed without a hearing. A lawyer manages all deadlines and ensures that your pleadings are "Technically Sound."</li>
                                <li><strong>Leverage in Negotiation:</strong> Banks have their own panels of aggressive lawyers. When you walk in with a known and respected DRT counsel, the bank’s legal team knows they cannot "Railroad" you. This immediately improves your bargaining power for an OTS.</li>
                                <li><strong>Finding the "Fatal Flaws":</strong> A layman sees a 50-page bank notice as a single document. A specialist lawyer sees it as a collection of potential errors. They look for the missing signatures, the incorrect interest compoundings, and the lack of proper approvals that can kill a case.</li>
                                <li><strong>Access to Precedents:</strong> Every day, High Courts and the Supreme Court pass new orders that affect DRT cases. A professional lawyer has access to specialized legal databases and can cite a judgment from yesterday to save your property today.</li>
                                <li><strong>Interim Protection:</strong> The most crucial part of a DRT case is the first day,the stay hearing. Argued correctly, you get to keep your house for another year while the case proceeds. Argued poorly, the bank takes possession the next morning. You don’t get a second chance at a first impression.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, bank lawyers are using AI and automated systems to file cases in bulk. Facing this "Machine" requires a lawyer who can bring a strategic, human mind to find the exceptions and the nuances that an automated system missed. Your lawyer is not just an "Arguer"; they are your "Financial Bodyguard."
                            </p>

                            <h2 id="saving-assets" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Strategies for Stopping Bank Auctions and Possession</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Stopping an auction is the "Emergency Surgery" of the legal world. If you have received a "Sale Notice" or seen your property listed on an e-auction portal, time is your greatest enemy. Here are the strategies professional lawyers use to stop the hammer from falling:
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>The 30-Day Rule Challenge:</strong> The bank must give a clear 30-day notice for the first auction. If they have counted the days incorrectly or if the notice didn’t reach you in time, the auction can be stayed.</li>
                                    <li><strong>Valuation Discrepancy:</strong> If you can provide a valuation report from a certified architect showing that your property is worth 5 crores but the bank is selling it for 3 crores, the DRT will often intervene. Selling at a "Gross Undervaluation" is against the law.</li>
                                    <li><strong>Priority of Dues:</strong> If there are other dues on the property (like worker wages or certain tax dues that have priority), your lawyer can argue that the bank cannot sell the property without first settling those claims.</li>
                                    <li><strong>The "Interested Buyer" Strategy:</strong> If you have found a private buyer willing to pay more than the bank’s reserve price, the tribunal will almost always allow you time to complete the private sale. This ensures the bank gets its money and you get to keep the surplus.</li>
                                    <li><strong>Section 14 Irregularities:</strong> When the bank goes to the DM or CMM for physical possession, they must file an affidavit. If this affidavit contains any false statement, the entire possession process can be halted.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                These strategies are not about "Avoiding Payment" but about "Ensuring Justice." Many banks try to "Gift" properties to preferred bidders in auctions at low prices. A strong legal defense ensures that your property is not sold unfairly and that you are given every opportunity to save it before it is lost forever.
                            </p>

                            <h2 id="drat-appeals" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Debt Recovery Appellate Tribunal (DRAT) Appeal Process</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                What if the DRT Presiding Officer passes an order that you believe is wrong? The story doesn’t end there. You have the right to file an appeal in the Debt Recovery Appellate Tribunal (DRAT). There are five DRATs in India (Delhi, Mumbai, Kolkata, Chennai, and Allahabad).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                An appeal to the DRAT is a high-level legal battle. It is argued on "Questions of Law" rather than just "Questions of Fact." However, there is a major hurdle: the <strong>Pre-deposit</strong>. Under Section 18 of the SARFAESI ACT, the appellant must deposit 50% of the debt amount with the DRAT for the appeal to be "Entertained." The tribunal has the power to reduce this to 25%, but not below that.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This pre-deposit makes the DRAT a restricted venue. You only go there if you have a very strong case or if the property value is so high that the deposit is worth the risk. A specialist lawyer will help you argue for a "Waiver of Pre-deposit" down to the minimum 25% by proving extreme financial hardship.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, even if you cannot afford the DRAT pre-deposit, your lawyer can explore the option of a <strong>Writ Petition</strong> in the High Court under Article 226 of the Constitution. While the Supreme Court has said that High Courts should generally not interfere in DRT matters, they can and do intervene when there is a "Gross Violation of Fundamental Rights" or a "Total Lack of Jurisdiction" by the bank. This "High Court Route" is a sophisticated tactical move that only the best lawyers can execute.
                            </p>

                            <h2 id="ots-litigation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">One-Time Settlement (OTS) Strategies through Litigation</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For most borrowers, the ultimate goal is not a 10-year court case, but a "Safe Exit." This is where the One-Time Settlement (OTS) comes in. An OTS is a compromise where the bank agrees to take a lump sum and waive the rest of the interest and penalties. But why would a bank agree to this?
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Banks agree to OTS when they see "Legal Risk." If your litigation is strong, the bank knows that they might not be able to sell the property for another 3 years. During those 3 years, the loan remains an NPA on their books, affecting their "Provisioning" and profit. By offering a settlement, you are giving them "Certainty" in exchange for a "Discount."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A strategic lawyer uses the DRT case as a <strong>Negotiating Table</strong>. They show the bank manager the flaws in the notices, the pending stay applications, and the potential High Court writ petitions. Faced with the prospect of a losing legal battle, the bank’s "Recovery Committee" often approves an OTS that they had previously rejected. This is the "Carrot and Stick" approach: the litigation is the stick, and the cash settlement is the carrot.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, many banks have "OTS Schemes" that are active during specific months (like February-March). Your lawyer will time your legal filings to coincide with these schemes, ensuring you get the maximum possible waiver. Getting an OTS through litigation is an art form; it requires knowing when to push in court and when to talk in the bank manager’s cabin.
                            </p>

                            <h2 id="borrower-rights" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Legal Rights of Borrowers against Forceful Possession</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the biggest fears of any borrower is "Forceful Possession",the idea of being thrown out of their house in the middle of the night. It is critical to know that even under the SARFAESI Act, the bank must maintain <strong>Human Dignity</strong>. Here are your specific rights:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>No Self-Help Force:</strong> Bank recovery agents cannot physically push you out. Only a Court-appointed Receiver or the Police (acting under a DM/CMM order) can take physical possession. If a private agent tries to use force, they are committing a crime.</li>
                                <li><strong>Inventory of Goods:</strong> Before sealing a property, the Authorized Officer must make a detailed "Panchnama" (Inventory) of all items left inside. You are entitled to a copy of this list. They cannot "Confiscate" your personal belongings that are not part of the security.</li>
                                <li><strong>Religious and Personal Access:</strong> You have the right to take your documents, medicines, and essential daily items before the property is sealed. The bank cannot hold your identity documents hostage.</li>
                                <li><strong>Peaceful Handover:</strong> If the DRT has not granted a stay, it is often better to hand over "Symbolic Possession" peacefully while continuing your legal fight for "Restoration of Possession." This prevents the trauma of a forced eviction.</li>
                                <li><strong>Protection for Women and Children:</strong> If an eviction is taking place, the presence of female police officers is mandatory if there are women in the house. Any action taken without proper police protocol can be challenged as a violation of basic human rights.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Knowing these rights doesn’t just protect you from the bank; it gives you the confidence to stand your ground. A borrower who knows the law is much harder to intimidate than one who is acting out of pure fear. Your lawyer will be your voice in ensuring that the bank’s recovery team stays within the boundaries of the law.
                            </p>

                            <h2 id="cibil-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Impact of DRT Cases on CIBIL and Financial Future</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A common concern is: "Will fighting the bank in court permanently blackmark my CIBIL?" The reality is nuanced. The moment you defaulted on your EMIs and the bank classified you as an NPA, the "Damage" to your CIBIL score was already done. The score has already dropped, and the "NPA" or "Default" tag is already there. Filing a DRT case doesn’t make that tag "worse."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In fact, litigation is often the path to "Cleaning" your CIBIL. If you win your case and the tribunal declares that the bank was wrong, the bank is legally obligated to correct your credit record. Alternatively, if the litigation leads to an OTS, the status on your CIBIL will change from "Default" to "Settled." While "Settled" is not as good as "Closed," it is significantly better than "Suit Filed" or "NPA," which are the current statuses.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Rebuilding your financial life after a DRT case takes time (usually 2 to 3 years of clean behavior), but it is entirely possible. Many successful entrepreneurs today have a "DRT Case" in their past. It is seen by many in the business world as a "Battle Scat", a sign that you fought for your business and survived a crisis. The goal of top-tier legal representation is to ensure that while your credit takes a temporary hit, your <strong>Capital Assets</strong> (like your home) are saved. You can fix a credit score, but you cannot easily replace a lost family home.
                            </p>

                            <h2 id="legal-myths" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Myths vs. Reality of DRT Litigation</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                There is a lot of "Gully Advice" regarding the DRT that can be dangerous. Let’s debunk some common myths:
                            </p>
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Myth: "Filing a case automatically stops the bank."</strong> Reality: Filing is not enough. You must win a specific "Stay Order" from the judge. Without a stay, the bank can auction your house even while the case is pending.</li>
                                    <li><strong>Myth: "The bank will never settle once I file a case."</strong> Reality: The exact opposite is true. Banks settle *because* you filed a case. Litigation creates a delay that makes them prefer a settlement over a 2-year wait.</li>
                                    <li><strong>Myth: "DRT cases take 20 years."</strong> Reality: While they aren’t "fast," they are much faster than civil suits. An SA is often decided within 1 to 2 years, which is a blink of an eye in the Indian legal system.</li>
                                    <li><strong>Myth: "I can hide my property from SARFAESI by gifting it to a relative."</strong> Reality: This is dangerous. The bank can challenge such transfers as "Fraudulent Preferences" or "Sham Transactions." It can lead to criminal charges. Always use legal defenses, not "Smart Tricks."</li>
                                    <li><strong>Myth: "A lawyer can guarantee a stay."</strong> Reality: No professional lawyer can "Guarantee" an order. They can only guarantee they will present the best possible legal grounds. Beware of any "Legal Agent" who promises a 100% guarantee for a fee.</li>
                                </ul>
                            </div>

                            <h2 id="choosing-counsel" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">How to Choose the Right Counsel for Your DRT Case</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Not all lawyers are equipped to handle the DRT. You wouldn’t ask a dentist to perform heart surgery; similarly, you shouldn’t ask a "General Practice" lawyer to handle a Section 17 SARFAESI matter. Here is what to look for when choosing the best lawyer for secured loan litigation:
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>1. Subject Matter Experience:</strong> Ask them how many SAs they have filed in the last year. A specialist will be able to discuss the recent changes in SARFAESI rules and point to specific orders they have won. <strong>2. Availability:</strong> DRT matters move fast. You need a lawyer who is accessible and has a team to handle urgent filings. A "Celebrity Lawyer" who is never available might be less effective than a dedicated specialist firm.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>3. Negotiation Skills:</strong> Since settlement is the goal for 90% of borrowers, your lawyer must be a "Diplomat" as well as a "Fighter." They should have a good rapport with the legal and recovery departments of major banks. <strong>4. Transparency:</strong> They should be honest about your chances. If your case is weak, a good lawyer will tell you early on and suggest a direct settlement instead of taking your money for a useless court battle.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>5. Digital Savvy:</strong> In 2025, DRTs have moved to "e-filing" and virtual hearings. Your legal team must be tech-savvy enough to navigate these systems without errors. This ensures your case isn’t delayed due to technical glitches.
                            </p>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Conclusion: Navigating the Path to Financial Recovery</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Facing a secured loan default is one of the most stressful experiences a person can go through. The fear of losing your home or your business can be paralyzing. But as we have explored in this 4000+ word deep dive, you are not helpless. The law in 2025 provides a powerful set of tools, from Section 17 SAs to DRAT appeals, that can protect you from unfair bank actions.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The path to financial recovery starts with a single step: <strong>Decision.</strong> A decision to stop acting out of fear and start acting with legal intelligence. By hiring the best lawyer for secured loan litigation and DRT matters, you change the narrative. You are no longer just a "Defaulter"; you are a "Litigant" who is standing up for their rights.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Remember, your property is more than just a collateral to you, but to the bank, it is just a "Number" on a spreadsheet. Their recovery team is following a manual. Your legal team, on the other hand, is fighting for your life. With the right strategy, a timely intervention, and a professional legal defense, even the most difficult debt crisis can be resolved. You can save your assets, settle your dues, and eventually rebuild your financial future.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Don’t wait for the auctioneer’s hammer. If you have received a notice, now is the time to act. Every day you wait is a day the bank gets stronger. Reach out to expert counsel today and take the first step toward reclaiming your peace of mind and your property.
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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Protect Your Property Today</h3>
                                <p className="text-blue-800 mb-6">Don’t let a bank notice take away what you’ve worked hard to build. Our team of expert DRT lawyers and secured loan specialists is ready to mount a robust defense for you. We understand the high stakes and provide the precision needed to win.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book a Legal Strategy Session
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The contents of this page are intended for informational purposes only and do not constitute legal advice. Every case in the Debt Recovery Tribunal is unique and depends on specific facts and documentation. Please consult with a qualified legal professional regarding your individual situation.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Facing Auction?</h4>
                                <p className="text-sm text-gray-600 mb-6">Stop illegal bank actions with expert legal defense in the DRT. Time is limited, act now.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Protect My Property
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v SARFAESI Defense</p>
                                    <p>v DRT Representation</p>
                                    <p>v Stop Auction Notices</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Technical Resources</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-loan-recovery-cases" className="block text-sm text-blue-600 hover:underline">Loan Recovery Guide</Link>
                                    <Link href="/best-lawyer-for-loan-against-property-settlement" className="block text-sm text-blue-600 hover:underline">LAP Settlement Help</Link>
                                    <Link href="/best-lawyer-for-home-loan-settlement" className="block text-sm text-blue-600 hover:underline">Home Loan Defense</Link>
                                    <Link href="/best-check-bounce-lawyer-for-loan-case" className="block text-sm text-blue-600 hover:underline">Cheque Bounce Matters</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
