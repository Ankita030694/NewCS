'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function CompanyLoanMattersClient() {
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
        { id: 'types-of-company-loans', label: 'Types of Company Loans' },
        { id: 'common-disputes', label: 'Common Legal Disputes' },
        { id: 'legal-framework', label: 'Legal Framework' },
        { id: 'sarfaesi-company', label: 'SARFAESI Defence' },
        { id: 'drt-company-defence', label: 'DRT Proceedings' },
        { id: 'director-liability', label: 'Director Liability' },
        { id: 'guarantor-protection', label: 'Guarantor Protection' },
        { id: 'ibc-resolution', label: 'IBC Resolution Process' },
        { id: 'debt-restructuring', label: 'Corporate Debt Restructuring' },
        { id: 'npa-remedies', label: 'NPA Account Remedies' },
        { id: 'ots-companies', label: 'OTS for Companies' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Guidance' },
    ];

    const faqs = [
        {
            question: 'What is the difference between a company loan matter and a personal loan dispute in India?',
            answer: 'Company loan matters involve corporate borrowers, typically private or public limited companies, as opposed to individual borrowers. The key legal differences include: company loans are governed by the Companies Act 2013 in addition to banking laws; directors\' personal liability in company loan defaults depends on specific guarantees given; IBC 2016 provides a specific Corporate Insolvency Resolution Process (CIRP) for company loan defaults; and corporate borrowers may have taken loans from multiple lenders simultaneously, making the legal landscape more complex. Company loan matters also frequently involve questions about the validity of corporate resolutions authorizing the borrowing, which can be challenged if proper corporate governance was not followed.'
        },
        {
            question: 'Can a bank initiate SARFAESI proceedings against a company\'s assets for a defaulted corporate loan?',
            answer: 'Yes, banks and financial institutions can invoke the SARFAESI Act 2002 against a company\'s secured assets when the company\'s loan account is classified as NPA. The bank can issue a demand notice under Section 13(2) demanding repayment within 60 days, and if the company fails to pay, the bank can take possession of the secured assets and proceed with auction under Section 13(4). However, all the standard SARFAESI procedural requirements apply to company loans as well, and any deviation from these requirements can be challenged by the company before the DRT under Section 17. Corporate borrowers often have more complex security structures, which creates additional grounds for challenging SARFAESI actions.'
        },
        {
            question: 'Are directors of a company personally liable for the company\'s loan default?',
            answer: 'Directors of a company are generally not automatically personally liable for the company\'s loan defaults, as the company has a separate legal identity. However, directors who have personally guaranteed the company\'s loans are liable under those guarantees. Additionally, if a director has taken specific commitments or made personal undertakings to the bank, they may be personally liable. Under the Companies Act 2013, directors can also be held liable if they have committed fraud or gross negligence in managing the company. It is important for directors to understand the exact nature of their liability under the loan documents before entering into any settlement or negotiation with the bank.'
        },
        {
            question: 'What is a Corporate Insolvency Resolution Process (CIRP) under IBC and when should a company consider it?',
            answer: 'The Corporate Insolvency Resolution Process (CIRP) under the Insolvency and Bankruptcy Code 2016 is a structured process for resolving corporate insolvency. A CIRP can be initiated either by the financial creditor (bank), operational creditor (supplier), or the company itself (through its shareholders or board). Once CIRP begins, a moratorium is imposed preventing all enforcement actions, including SARFAESI proceedings and DRT recovery applications. A Resolution Professional (RP) takes charge of the company\'s management, and a resolution plan is sought from potential investors. If no resolution plan is approved within 330 days, the company goes into liquidation. Companies should consider CIRP as a last resort when they have no viable restructuring or OTS option and face multiple enforcement actions from lenders.'
        },
        {
            question: 'Can a company challenge its NPA classification before a DRT?',
            answer: 'Yes, a company can challenge its NPA classification before the DRT, particularly in the context of challenging SARFAESI enforcement. If the bank classified the company\'s loan account as NPA before the prescribed 90-day period had elapsed, or if payments were not correctly credited to the account resulting in a premature NPA classification, or if the bank failed to follow RBI guidelines on NPA classification, these grounds can be raised before the DRT in a Securitization Application. A successful challenge to the NPA classification effectively neutralizes the bank\'s basis for SARFAESI enforcement and can significantly change the dynamics of any settlement negotiation.'
        },
        {
            question: 'How does a company negotiate a One-Time Settlement (OTS) on a corporate loan?',
            answer: 'Negotiating an OTS for a corporate loan involves several steps. The company must first prepare a comprehensive financial analysis showing its current financial position, the causes of the default, and the available funds for the OTS payment. The company\'s lawyer then formally submits an OTS proposal to the bank\'s OTS committee, supported by valuations of secured assets, financial projections, and legal documents identifying any procedural defects in the bank\'s enforcement. Banks evaluate OTS proposals based on the outstanding principal, the security coverage, the age of the NPA, and the company\'s financial position. Knowledgeable corporate loan lawyers are skilled at presenting these factors in a way that maximizes the discount obtainable in the OTS negotiation.'
        },
        {
            question: 'What happens to a company\'s assets if the DRT passes a decree in favor of the bank?',
            answer: 'When the DRT passes a decree (Recovery Certificate) in favor of the bank, the bank can proceed with execution of the decree through the Recovery Officer of the DRT. The Recovery Officer has powers to attach the company\'s assets, sell them by auction, and distribute the proceeds to satisfy the decree. If the company has already pledged specific assets under SARFAESI, those assets are typically sold through the SARFAESI process rather than the DRT execution process. The company can appeal the DRT decree to the DRAT within 30 days, though a pre-deposit of a percentage of the decree amount is typically required as a condition for admission of the appeal.'
        },
        {
            question: 'What is the Standstill Agreement and can it help a company facing multiple loan defaults?',
            answer: 'A Standstill Agreement is a negotiated arrangement between a company and its lenders where the lenders agree not to initiate or continue enforcement actions for a specified period while the company and its lenders work out a restructuring plan. Standstill Agreements are more common in cases involving multiple lenders, where coordinated action is needed. The Inter-Creditor Agreement (ICA) framework under the RBI\'s June 2019 Prudential Framework for Resolution of Stressed Assets provides a structured mechanism for inter-creditor coordination that effectively creates a semi-formal standstill. Companies with multiple outstanding loans that are facing DRT or SARFAESI actions from different lenders should consider whether the ICA framework can be invoked to provide a coordinated resolution.'
        },
        {
            question: 'Can a company\'s guarantors seek separate legal relief in a company loan matter?',
            answer: 'Yes, guarantors who are being sued by the bank separately (either through a DRT application or a civil suit) can seek their own independent legal relief. Guarantors have several potential defences, including discharge from liability if the bank altered the terms of the loan agreement without the guarantor\'s consent, discharge if the bank provided additional time to the principal borrower without the guarantor\'s consent, discharge if the bank released any security without the guarantor\'s knowledge, and the right to demand that the bank first enforce its security against the principal borrower before proceeding against the guarantor. These defences are highly fact-specific and require careful examination of the guarantee and loan documents by an experienced corporate loan lawyer.'
        },
        {
            question: 'What documents should a company collect when facing a corporate loan dispute?',
            answer: 'When facing a corporate loan dispute, the company should immediately gather and secure the following categories of documents: all loan agreements, sanction letters, board resolutions authorizing the borrowing, and security documents; complete account statements showing all disbursements, repayments, and interest calculations; all communications with the bank, including demand notices, SARFAESI notices, and restructuring proposals; audited financial statements for the past three years; property documents for all secured assets including valuation reports; any guarantees given by directors or third parties; corporate authorization documents including Memorandum of Association and Articles of Association; and any regulatory filings or compliance documents related to the loan. These documents form the foundation of the company\'s legal defence and settlement negotiation.'
        },
        {
            question: 'How can CredSettle help companies facing corporate loan disputes?',
            answer: 'CredSettle provides comprehensive legal and advisory support for companies facing corporate loan disputes in India. Our services specifically for company loan matters include: connecting companies with experienced corporate DRT lawyers who specialize in company loan cases; analyzing loan accounts to identify procedural defects, NPA classification errors, and calculation discrepancies; filing Securitization Applications and stay applications before the DRT; negotiating One-Time Settlements with banks and ARCs on behalf of corporate borrowers; advising on debt restructuring options under RBI guidelines; facilitating inter-creditor coordination under the ICA framework; and advising on IBC options including PPIRP and CIRP when restructuring and OTS options are not viable. Our goal is to find the most practical path out of financial distress for each company while protecting the interests of its promoters and stakeholders.'
        }
    ];

    const reviews = [
        {
            name: 'Arun Kapoor',
            location: 'Mumbai',
            stars: 5,
            comment: 'Our Pvt Ltd was facing a DRT application from our bank for a 2 crore loan. CredSettle analyzed our account and found a significant calculation error and NPA date discrepancy. We used these findings to negotiate an OTS at 65% of the bank\'s original claim, saving the company over 70 lakhs.'
        },
        {
            name: 'Deepika Ranganathan',
            location: 'Bangalore',
            stars: 5,
            comment: 'As a guarantor for my company\'s business loan, I was terrified when the bank sent me a personal demand notice after the company defaulted. CredSettle\'s lawyer identified that the bank had accepted a restructuring proposal from the company without my consent as guarantor, which substantially dissolved my personal liability. Excellent expertise.'
        },
        {
            name: 'Mahesh Chandra',
            location: 'Hyderabad',
            stars: 5,
            comment: 'Our construction company was hit hard by project delays and we defaulted on a large builder loan. CredSettle helped us navigate a SARFAESI challenge while simultaneously negotiating a structured OTS with the lending consortium. The property was saved, and we repaid in installments over 18 months.'
        },
        {
            name: 'Neha Patel',
            location: 'Surat',
            stars: 5,
            comment: 'The bank had made multiple errors in our CC account calculation, resulting in a claim that was almost 30% inflated. CredSettle\'s CA and legal team prepared a comprehensive forensic audit report that we used in DRT proceedings. The bank eventually accepted a dramatically reduced OTS within 8 months of engaging CredSettle.'
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
            'telephone': '+91-9178987984',
            'contactType': 'customer service',
            'areaServed': 'IN',
            'availableLanguage': 'English'
        }
    };

    const reviewSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Company Loan Legal Defence Service',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '2194',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-company-loan" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-company-loan" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-company-loan" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

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
                        Best Lawyer for Company<br />
                        <span className="text-blue-300">Loan Matters in India</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Expert legal solutions for corporate loan disputes. Protect your company, its assets and your directors' personal interests with specialized corporate loan legal defence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get a Free Company Loan Assessment
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
                                        Best Lawyer for Company Loan Matters
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
                                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: The Complex World of Company Loan Matters in India</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a company in India faces trouble with its loan obligations, the legal landscape it must navigate is significantly more complex than that facing an individual borrower. Corporate loan matters involve a unique intersection of banking law, company law, securities law, and insolvency law that no single piece of legislation fully covers. The best lawyer for company loan matters must be equally comfortable in a Debt Recovery Tribunal hearing, a National Company Law Tribunal (NCLT) proceeding under the IBC, and a negotiating room with a consortium of lenders.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                India's banking sector currently carries a significant burden of corporate NPAs. Despite substantial progress in reducing the NPA ratio through IBC resolutions and enhanced recovery measures, thousands of companies across all sectors continue to grapple with bank loans that have turned problematic. These companies face an aggressive combination of SARFAESI enforcement, DRT recovery proceedings, and in the most severe cases, CIRP filings under the IBC that threaten to take away management control from the promoters entirely.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The stakes in company loan matters are particularly high because they affect not just the promoters and directors personally but also the livelihoods of the company's employees, the interests of its creditors, customers, and suppliers, and in some cases, the broader economic health of the sectors in which these companies operate. This is why finding the right legal representation is paramount. A company facing bank recovery action needs a lawyer who understands both the legal tools available to the bank and the full range of legal options the company has to protect itself.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This comprehensive guide covers everything a company director, promoter, or financial officer needs to know about company loan matters in India, from the types of corporate loans and the most common disputes to the legal remedies available in SARFAESI proceedings, DRT cases, and IBC resolution processes. Whether you are dealing with your first demand notice from a bank or confronting an imminent CIRP filing, this guide provides the foundational knowledge needed to understand your situation and take effective action.
                            </p>

                            <h2 id="types-of-company-loans" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Types of Company Loans and Their Legal Implications</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Companies in India access financing through a variety of loan structures, each with distinct legal characteristics that affect the nature of disputes and the available defences when things go wrong. Understanding which type of loan your company has taken is the starting point for developing an effective legal strategy.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>1. Term Loans:</strong> Provided for a specific purpose (such as capital expenditure or asset acquisition) with a structured repayment schedule over a defined tenure. When companies default on term loans, banks typically invoke SARFAESI against the specific assets financed by the loan and any additional security provided. Disputes in term loan matters often involve questions about the correct calculation of outstanding principal, interest, and penal charges, and whether the bank followed RBI guidelines on NPA classification.</li>
                                    <li><strong>2. Working Capital Facilities (CC/OD):</strong> Revolving credit facilities that allow companies to finance day-to-day operations. These accounts have a sanctioned limit and are expected to be funded by the company's routine business receipts. When CC/OD accounts go NPA, disputes frequently arise about the correct outstanding balance, particularly regarding how interest was calculated on the debit balance and whether all credits to the account were properly recorded.</li>
                                    <li><strong>3. Project Finance Loans:</strong> Large loans provided for specific infrastructure or industrial projects, often with complex security structures involving land, buildings, plant and machinery, and project revenues. When project finance loans default, the disputes can be particularly complex because the security (an ongoing project) may not be easily sold through a standard auction. Specialized lawyers with experience in project finance and construction law are often needed for these cases.</li>
                                    <li><strong>4. External Commercial Borrowings (ECB):</strong> Foreign currency loans taken by Indian companies from overseas lenders. ECB matters have an international dimension, as the loan agreement may be governed by foreign law and the lender may be pursuing recovery through foreign courts in addition to Indian proceedings. Companies facing ECB defaults need lawyers who understand both the RBI's ECB framework and the relevant international legal principles.</li>
                                    <li><strong>5. Consortium and Multiple Banking Arrangements:</strong> Many large companies borrow from a consortium of banks or maintain credit facilities with multiple banks simultaneously. When defaults occur, coordinating the responses of multiple lenders adds significant complexity to the legal proceedings. The RBI's Inter-Creditor Agreement (ICA) framework requires lead banks and other lenders to follow a coordinated approach to resolution, which creates specific procedural requirements that can be challenged if not followed correctly.</li>
                                </ul>
                            </div>

                            <h2 id="common-disputes" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Common Legal Disputes in Company Loan Matters</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Company loan disputes rarely arise from simple non-payment. They typically emerge from a complex web of financial difficulty, procedural errors by the bank, disagreements about the outstanding amount, and questions about the proper application of security. The most experienced corporate loan lawyers in India have encountered these disputes repeatedly and know how to identify and articulate the strongest grounds for challenge.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Disputes about the validity of security documents are common in company loan matters. When a company provides immovable property as security for a loan, the security creation requires compliance with the Registration Act 1908 (for property mortgages), the Companies Act 2013 (for filing with the ROC within 30 days), and the relevant stamp duty laws. Any defect in the security creation process can make the bank's security interest unenforceable, which significantly limits its recovery options and changes the dynamics of any dispute resolution.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Disputes about the scope of the bank's mandate under the loan agreement are also frequent in company loan matters. Banks sometimes attempt to invoke rights that are not clearly provided in the loan documentation, such as taking possession of assets that were not specifically included in the security agreement, applying funds from one loan account to satisfy obligations under another account without authorization, or unilaterally increasing the interest rate beyond what was agreed in the sanction letter.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In cases involving consortium loans, disputes between the lending banks themselves are another source of complication for the borrowing company. When consortium members disagree about the resolution strategy and some lenders prefer recovery while others support restructuring, the borrowing company can find itself caught in the middle. An experienced corporate loan lawyer navigates this complexity by engaging the lead bank and other key lenders separately and helping to build a consensus around a resolution approach that protects the company's interests.
                            </p>

                            <h2 id="legal-framework" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Legal Framework Governing Company Loan Matters in India</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Company loan matters in India are governed by an overlapping framework of statutes, regulations, and judicial precedents. A comprehensive understanding of this framework is essential for any lawyer specializing in corporate loan disputes.
                            </p>
                            <div className="overflow-x-auto mb-8">
                                <table className="min-w-full border-collapse border border-gray-200 text-sm text-gray-700">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-200 px-4 py-3 text-left">Legal Instrument</th>
                                            <th className="border border-gray-200 px-4 py-3 text-left">Application to Company Loan Matters</th>
                                            <th className="border border-gray-200 px-4 py-3 text-left">Key Remedies for Companies</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">SARFAESI Act 2002</td>
                                            <td className="border border-gray-200 px-4 py-3">Bank enforcement of secured corporate loans</td>
                                            <td className="border border-gray-200 px-4 py-3">SA before DRT (Section 17); interim stay on auction</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">RDB Act 1993</td>
                                            <td className="border border-gray-200 px-4 py-3">Bank's OA before DRT for recovery</td>
                                            <td className="border border-gray-200 px-4 py-3">Written statement; counter-claim; DRT appeal</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">IBC 2016</td>
                                            <td className="border border-gray-200 px-4 py-3">CIRP and liquidation for corporates</td>
                                            <td className="border border-gray-200 px-4 py-3">Moratorium; PPIRP; voluntary CIRP; pre-pack</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Companies Act 2013</td>
                                            <td className="border border-gray-200 px-4 py-3">Corporate governance; director liability; charges</td>
                                            <td className="border border-gray-200 px-4 py-3">Challenge improper security creation; director rights</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">RBI Guidelines</td>
                                            <td className="border border-gray-200 px-4 py-3">NPA norms, ICA framework, restructuring</td>
                                            <td className="border border-gray-200 px-4 py-3">Restructuring under Prudential Framework; OTS policy</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 id="sarfaesi-company" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">SARFAESI Defence Strategies for Companies</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The SARFAESI Act is the most powerful enforcement tool available to banks against corporate borrowers with secured assets. When a bank or ARC invokes SARFAESI against a company, the response must be swift and strategic. Companies have a fixed window of opportunity to challenge SARFAESI actions before the rights to the secured assets are irreversibly compromised.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most effective SARFAESI defence strategies for companies begin with a thorough examination of the entire SARFAESI process from beginning to end. Corporate loan lawyers review whether the NPA classification followed RBI norms, whether the demand notice was correctly addressed and served on all the required parties (company, directors, guarantors), whether the company's representation was properly considered, and whether all the procedural requirements for taking possession were met. Any deficiency in this process provides grounds for a Securitization Application before the DRT.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For companies with complex security structures involving multiple types of assets (real property, plant and machinery, intellectual property, receivables), challenges to the scope of the bank's security interest can be particularly effective. If the bank has taken possession of or attempted to sell assets that are not clearly included in the security documentation, the company's lawyer can apply for a specific injunction against the use of those assets while the dispute is resolved.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Another powerful SARFAESI defence strategy for companies is challenging the property valuation used to set the reserve price for the auction. Corporate assets, particularly industrial properties and specialized machinery, are often difficult to value accurately, and banks sometimes use conservative valuations that set an artificially low reserve price. This benefits the auction purchaser at the expense of the quality of the company's assets and reduces the amount credited toward the outstanding loan after the auction sale.
                            </p>

                            <h2 id="drt-company-defence" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">DRT Defence Strategy for Company Loan Recovery Cases</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a bank files an Original Application (OA) before the DRT for recovery of corporate loan dues, the company faces a structured adversarial proceeding with strict timelines. Building an effective DRT defence for a company loan recovery case requires immediate engagement of experienced DRT counsel, a comprehensive audit of the loan account, and a strategic assessment of the company's strongest grounds for defence.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once an OA is filed, the company (as respondent) must file its written statement within the timeline prescribed by the DRT. This document is critically important and must be prepared carefully by experienced corporate loan counsel. It should address every allegation in the bank's application, raise all available factual and legal defences, include a counter-claim if the company has been harassed or if the bank's actions caused additional financial damage, and be supported by copies of all relevant documents.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The evidential phase of DRT proceedings for company loan matters involves the filing of affidavits, documentary exhibits, and expert reports (such as chartered accountant certificates challenging the outstanding calculation). Companies that invest in a thorough evidential presentation often achieve much better outcomes, as the DRT is required to evaluate the evidence carefully and cannot simply accept the bank's claim at face value without examining the company's opposing evidence.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A key strategic consideration in DRT proceedings for company loan matters is the timing and nature of settlement negotiations. Many DRT lawyers advise a dual-track approach: maintaining a vigorous legal defence in the DRT while simultaneously engaging the bank's loan recovery department or senior management in OTS negotiations. This approach demonstrates to the bank that the company is capable of prolonged litigation (raising the bank's legal costs and extending the time before recovery) while also keeping open the possibility of a negotiated resolution that is faster and cheaper for both sides.
                            </p>

                            <h2 id="director-liability" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Director Liability in Company Loan Defaults</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the most personally important aspects of company loan matters for company promoters and directors is understanding the extent of their personal liability when the company defaults on its loan obligations. The principle of limited liability is a fundamental feature of company law in India, but this protection has significant exceptions that every director of a company with outstanding bank loans must understand.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Personal guarantees are the most common source of director personal liability in company loan defaults. When a director signs a personal guarantee in favor of the company's bank lender, they directly assume the obligation to repay the loan if the company fails to do so. Personal guarantees are enforceable regardless of the company's limited liability structure, and banks routinely pursue personal guarantors when corporate recovery targets are not achievable from the company alone. The strength of a personal guarantee claim and the defences available to the guarantor depend on the specific language of the guarantee document, which is why careful review by legal counsel is essential.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Under the Companies Act 2013, directors can also be held personally liable in cases of fraud. If the company's default was caused by or accompanied by fraudulent actions by directors, such as creating fictitious assets, siphoning funds from the company to related parties, or making fraudulent misrepresentations to the bank about the company's financial position, these directors can be held personally liable not just civilly but also criminally under provisions of the IPC and the Companies Act.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Qualified company loan lawyers advise directors proactively on how to minimize their personal exposure in company loan matters. This includes advising on the proper documentation of corporate decisions related to the loan, ensuring that the director has clear records of any dissenting opinions about company decisions that led to financial distress, and where appropriate, negotiating the scope of personal guarantees at the time they are given.
                            </p>

                            <h2 id="guarantor-protection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Protecting Guarantors in Company Loan Disputes</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a company defaults on its loans, the bank invariably pursues available guarantors. This can include company directors who have given personal guarantees, third-party guarantors who provided property as collateral, and corporate guarantors from related entities. Understanding the legal protections available to guarantors is an important dimension of comprehensive company loan legal advice.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Under the Indian Contract Act 1872, guarantors enjoy several specific protections that can be raised as defences when the bank sues on the guarantee. A guarantor is discharged from liability if the principal terms of the loan were altered without the guarantor's consent (the "accommodation" principle). A guarantor is also discharged if the bank released or gave up any of the securities without the guarantor's consent, as the guarantor is entitled to step into the bank's shoes and enforce those securities. The bank must also give notice to the guarantor before proceeding against the principle debtor.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the context of IBC proceedings, personal guarantors of corporate debtors face insolvency proceedings before the DRT itself (not the NCLT). The IBC 2016 provisions for personal insolvency of personal guarantors subject them to a special mechanism where the DRT can take evidence and determine the guarantor's assets available for distribution to creditors. Understanding the interaction between corporate IBC proceedings and personal guarantor insolvency is an important aspect of comprehensive company loan legal representation.
                            </p>

                            <h2 id="ibc-resolution" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The IBC Resolution Process for Corporate Loan Defaults</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Insolvency and Bankruptcy Code 2016 has fundamentally transformed the legal landscape for corporate loan defaults in India. Since its implementation, the IBC has become both the most powerful tool available to creditors and a critical strategic option for companies seeking a structured resolution of their debt obligations. Company loan lawyers must have a thorough understanding of IBC proceedings to advise their corporate clients effectively.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a bank or other financial creditor files an application under Section 7 of the IBC before the NCLT, alleging that the corporate debtor (the company) is in default of a financial debt, the NCLT must admit the application if the default is established. Once admitted, a moratorium comes into effect under Section 14 of the IBC, which stays all pending SARFAESI proceedings, DRT recovery applications, civil suits, and other enforcement actions against the company. This moratorium, while initially welcome to the company, comes at a significant cost: an Interim Resolution Professional (IRP) and subsequently a Resolution Professional (RP) is appointed to take over the management of the company.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For companies that want to use IBC strategically without losing management control, the Pre-Packaged Insolvency Resolution Process (PPIRP) introduced for MSMEs in 2021 is an important option. Under the PPIRP, the company's promoters retain management control during the resolution process, and a resolution plan prepared by the company is submitted to creditors for approval. If the creditors do not approve the base resolution plan, they can invite competing plans from third parties. The PPIRP has a strict 120-day timeline and provides the moratorium protections of the regular IBC while allowing the promoters to remain in control of everyday business operations.
                            </p>

                            <h2 id="debt-restructuring" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Corporate Debt Restructuring Options for Companies</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For companies that have viable businesses but are facing temporary financial difficulty, debt restructuring is often a far better option than the adversarial routes of DRT litigation or IBC proceedings. Corporate debt restructuring preserves the company's credit profile, avoids the costs and uncertainties of litigation, and allows the company to continue operating while addressing its debt obligations.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The RBI's June 2019 Prudential Framework for Resolution of Stressed Assets provides the primary regulatory framework for bank-led corporate debt restructuring. Under this framework, when a company's loan is identified as stressed, the lenders are required to implement a Resolution Plan within specified timelines. The Resolution Plan can take various forms, including rescheduling of payments, conversion of debt to equity, providing additional credit for working capital, and in some cases, haircuts (reductions in principal). All lenders with more than 75% exposure (by value) and 60% (by number) must agree to the Resolution Plan for it to be binding on all lenders.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For larger corporate debtors with exposure from multiple banks, the ICA process provides a structured negotiation platform. Under the ICA, the lead bank coordinates the resolution process and all banks that have signed the ICA are obligated to follow the agreed resolution approach. Companies whose loans are subject to the ICA mechanism should engage experienced legal counsel who understands how to leverage the inter-creditor dynamics to achieve the most favorable restructuring terms for the company.
                            </p>

                            <h2 id="npa-remedies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Remedies for Incorrect NPA Classification of Company Loan Accounts</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For many companies, the journey into loan dispute territory begins with an NPA classification that may be incorrect, premature, or non-compliant with RBI guidelines. Challenging the NPA classification is often the foundation of an effective company loan defence strategy, as it potentially invalidates the bank's entire basis for SARFAESI enforcement and DRT proceedings.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Companies whose CC/OD accounts have been classified as NPA often find that the bank failed to properly account for all credits to the account, resulting in an artificially inflated outstanding balance that exceeded the sanctioned limit for longer than it actually did. A detailed forensic review of the account statements by an expert chartered accountant can identify these discrepancies and demonstrate that the account should not have been classified as NPA on the date the bank claims.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Under existing RBI guidelines, an account that has been incorrectly classified as NPA should be upgraded to a standard asset classification when the borrower regularizes the account. If the bank refuses to upgrade despite the account being regularized, or if it refuses to acknowledge payments that were credited to the account, the company has the right to complain to the RBI Ombudsman and to raise the issue in DRT proceedings. Courts have repeatedly held that incorrect NPA classification that causes financial and reputational harm to the company can give rise to claims for damages.
                            </p>

                            <h2 id="ots-companies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">One-Time Settlement for Corporate Loan Disputes</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A One-Time Settlement (OTS) remains one of the most practically effective ways to resolve a company loan dispute, particularly for NPA accounts where the bank has limited realistic prospects of full recovery. OTS negotiations for corporate loans involve unique considerations that distinguish them from personal loan OTS, including the company's need to protect its ongoing business relationships, the involvement of multiple directors and guarantors, and often the requirement for board approval of the settlement terms.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For corporate OTS negotiations, the preparation of a compelling OTS proposal is the most critical step. This proposal must demonstrate to the bank's OTS committee that the offered amount represents the maximum realizable value from the company, taking into account the current value of secured assets, the company's financial position and future prospects, the legal challenges that would need to be overcome to achieve a better recovery through litigation, and the time and cost of pursuing those legal challenges.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The discount achievable in a corporate OTS depends on multiple factors. Older NPAs typically attract larger discounts. Accounts where the bank's security coverage is thin (loan amount significantly exceeds the realizable value of the security) also attract larger discounts. Accounts where there are pending legal challenges by the company that the bank is anxious to avoid or resolve also attract better OTS terms. Skilled corporate loan lawyers at CredSettle understand how to identify and leverage all of these factors in their client's OTS negotiations.
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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Get Expert Company Loan Legal Support Today</h3>
                                <p className="text-blue-800 mb-6">Your company's future depends on the quality of its legal strategy. Our team of experienced corporate loan lawyers, DRT specialists, and debt negotiators will assess your case and help you achieve the best possible outcome for your company and its stakeholders.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book Your Free Company Loan Consultation
                                </Link>
                            </div>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14 mt-12">Final Guidance: Choosing the Best Lawyer for Your Company Loan Matter</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Company loan matters require a lawyer who combines multiple areas of legal expertise: banking law, corporate law, SARFAESI Act practice, DRT proceedings, and insolvency law. The best lawyer for company loan matters is one who can see the complete legal landscape and develop a strategy that addresses all dimensions of the company's situation simultaneously.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When choosing legal representation for a company loan matter, prioritize lawyers who have specific experience with corporate DRT cases, not just general banking litigation. Verify that they understand the IBC framework and can advise on whether CIRP or PPIRP might be appropriate for your situation. Confirm that they work collaboratively with chartered accountants who can analyze loan accounts and identify calculation errors. Look for a track record of successful OTS negotiations with major banks and ARCs, as this is often the most important service in terms of practical outcomes for the company.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, our team of corporate loan specialists, DRT lawyers, and debt settlement advisors has helped numerous companies navigate loan disputes successfully, protecting their business operations, their assets, and their promoters' personal interests. From the initial assessment through to final resolution, we provide comprehensive support tailored to the specific circumstances of each corporate client's situation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Time is often critical in company loan matters, as SARFAESI deadlines, DRT timelines, and IBC triggers can all create time pressure that limits the company's options if not addressed quickly. The earlier you engage experienced legal counsel, the more options you have available and the better position you are in to achieve a favorable resolution. Contact us today for a free assessment of your company's loan situation and let us help you find the path forward.
                            </p>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The information provided in this guide is for educational purposes and does not constitute legal advice. Every company loan matter has unique facts and requires individualized legal advice from a qualified corporate loan lawyer. Please consult a qualified lawyer before taking any legal action regarding your company's loan obligations.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Company Loan Legal Help?</h4>
                                <p className="text-sm text-gray-600 mb-6">Facing SARFAESI or DRT action for your company loan? Get a free expert assessment of your corporate legal options today.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Free Company Consultation
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ Corporate DRT Specialist</p>
                                    <p>✓ IBC Advisory Support</p>
                                    <p>✓ OTS Negotiation Expert</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Legal Services</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-drt-case-defence-for-bank-loan-recovery" className="block text-sm text-blue-600 hover:underline">DRT Case Defence</Link>
                                    <Link href="/best-lawyer-for-msme-and-business-loans" className="block text-sm text-blue-600 hover:underline">MSME and Business Loans</Link>
                                    <Link href="/best-lawyer-for-business-loan-settlement" className="block text-sm text-blue-600 hover:underline">Business Loan Settlement</Link>
                                    <Link href="/best-project-finance-builder-loan-recovery-matter-lawyer" className="block text-sm text-blue-600 hover:underline">Project Finance Lawyer</Link>
                                    <Link href="/best-lawyer-for-drt-loan-assignment-dispute-defence-in-drt" className="block text-sm text-blue-600 hover:underline">DRT Loan Assignment Dispute</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
