'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function MSMEBusinessLoansClient() {
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
        { id: 'msme-loan-types', label: 'MSME Loan Types' },
        { id: 'common-disputes', label: 'Common Disputes' },
        { id: 'legal-framework', label: 'Legal Framework' },
        { id: 'sarfaesi-msme', label: 'SARFAESI for MSMEs' },
        { id: 'msefc-arbitration', label: 'MSEFC Arbitration' },
        { id: 'drt-defence', label: 'DRT Defence Strategy' },
        { id: 'npa-classification', label: 'NPA Classification' },
        { id: 'rbi-msme-framework', label: 'RBI MSME Framework' },
        { id: 'one-time-settlement', label: 'OTS for MSMEs' },
        { id: 'restructuring', label: 'Loan Restructuring' },
        { id: 'ibc-resolution', label: 'IBC Resolution' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Guidance' },
    ];

    const faqs = [
        {
            question: 'What is the difference between MSME loans and regular business loans in legal proceedings?',
            answer: 'MSME loans have additional legal safety under the Micro. Small and Medium Enterprises Development Act 2006 (MSMED Act). clients classified as MSMEs can access the MSME Facilitation Council (MSEFC) for payment disputes and have access to the MSME Samadhaan portal. Additionally. The RBI has issued exact guidelines for restructuring MSME loans. which allow for more flexible terms than regular firm loans. In DRT steps. MSME status can be used strategically to demonstrate the clients’s fit for special RBI safety not available to larger firms.'
        },
        {
            question: 'Can a bank take possession of my business assets under SARFAESI for an MSME loan default?',
            answer: 'Yes. Banks can invoke SARFAESI Act rules for MSME loans that are classified as NPA. Provided the original loan was Rs. 1 lakh or more and is secured by tangible assets. Yet. Before steps with SARFAESI enforcement. The bank must follow all procedural requirements under Section 13. Including issuing a demand notice. Considering the clients’s representation. following the prescribed timelines. Any deviation from these procedures can be challenged before the DRT under Section 17 of the SARFAESI Act. A skilled counsel can identify these procedural errors and use them to delay or prevent forced asset seizure.'
        },
        {
            question: 'What is MSEFC arbitration and how does it help MSMEs in loan disputes?',
            answer: 'MSEFC stands for Micro and Small Enterprises Facilitation Council. Established under the MSMED Act 2006. The MSEFC provides a platform for resolving payment disputes between MSMEs and their buyers. While it primarily addresses buyer-supplier payment disputes rather than bank loan disputes. An MSME that is owed money from buyers can use MSEFC steps to recover unpaid receivables. which can then be used to address bank loan debts. Additionally. MSEFC steps can sometimes be used to demonstrate to the bank and DRT that the MSME’s default was caused by delayed payments from buyers. which constitutes justified money hardship.'
        },
        {
            question: 'What is the MSME Samadhaan portal and how can it help my business loan dispute?',
            answer: 'The MSME Samadhaan portal is an online platform launched by the Ministry of MSME where Micro and Small Enterprises can file complaints against buyers who have not paid them within the stipulated 45-day period under the MSMED Act 2006. Filing on Samadhaan triggers a facilitation process through the MSEFC. While this is primarily a claims tool for unpaid receivables rather than a bank loan dispute tool. It can be used as supporting evidence in DRT or bank talks to show that your MSME’s money distress was caused by delayed payments from large buyers or government entities. Strengthening the case for restructuring or closure.'
        },
        {
            question: 'Can an MSME get its NPA classification reversed if the default was caused by COVID or other external factors?',
            answer: 'The RBI has periodically issued circulars allowing for special restructuring or NPA reversal under exceptional hardship. Such as during the COVID-19 pandemic under the Emergency Credit Line Guarantee Scheme (ECLGS). If your MSME’s NPA classification coincided with a period covered by such circulars. Your counsel can argue for compliance with these RBI rules. Even without exact circulars. Demonstrating that the default was caused by a documented external event (such as a client’s bankruptcy or a natural disaster) strengthens the case for restructuring rather than forced claims through SARFAESI or DRT steps.'
        },
        {
            question: 'What is the Emergency Credit Line Guarantee Scheme (ECLGS) and how does it affect MSME loan disputes?',
            answer: 'The ECLGS. Launched during the COVID-19 pandemic. Provided government-guaranteed additional credit to MSMEs to help them survive the economic disruption. If your MSME took an ECLGS loan and is now facing claims action. It is important that your counsel examines whether the bank has correctly applied the terms of the guarantee and whether the government guarantee was properly invoked before the bank initiated claims steps against you. Additionally. The terms of the ECLGS loan must be examined to ensure that any charges or fines levied by the bank are authorized under the scheme guidelines.'
        },
        {
            question: 'How does restructuring under the RBI’s MSME Restructuring Framework differ from OTS for business loans?',
            answer: 'Restructuring and OTS are two distinct instruments for resolving MSME firm loan disputes. Restructuring involves renegotiating the terms of the existing loan to make it more manageable. With the full main sum typically remaining payable. This can include extending the loan tenure. Reducing the rates rate. Converting rates to main sum. providing a EMI freeze on payments. OTS. By contrast. Involves settling the entire loan for a discounted lump sum. Restructuring is better for credit score safety. as it does not result in a "Settled" tag on the CIBIL report. OTS is considered more appropriate when the MSME has genuinely limited payment capacity and cannot realistically repay even the restructured amount.'
        },
        {
            question: 'Can I use the Insolvency and Bankruptcy Code (IBC) to resolve my MSME business loan dispute?',
            answer: 'The IBC 2016 provides a structured insolvency relief mechanism for firms that cannot repay their debts. For MSMEs. A special Pre-Packaged Insolvency relief Process (PPIRP) was introduced in 2021. which allows for a faster and less adversarial relief than the regular firm Insolvency relief Process (CIRP). Yet. Filing for IBC relief has significant results. Including potential loss of handling control during the relief period. It is generally considered a last resort after other options. Including DRT defence. Restructuring. OTS. Have been explored. A knowledgeable firm loan counsel will advise on whether IBC is appropriate for your exact case.'
        },
        {
            question: 'What documents should an MSME collect when facing a bank recovery action?',
            answer: 'When facing bank claims action for an MSME or firm loan. You should fast collect and secure the following papers: all loan pacts. Sanction letters. security papers. complete bank account statements showing all deposits and withdrawals. all payment receipts and transfer records for EMI payments. All correspondence with the bank. Including demand notices. SARFAESI notices. any restructuring proposals. your MSME registration letter (Udyam Registration). money statements and tax returns for the past three years. Evidence of any external factors that contributed to the default (COVID. Client default. Etc.). and any contact with the MSEFC or MSME Samadhaan portal. These papers are the foundation of your legal defence.'
        },
        {
            question: 'How can an MSME stop a bank auction of its business property in a loan dispute?',
            answer: 'To stop a bank auction of firm home in an MSME loan dispute. The most effective legal remedy is filing a Securitization Application (SA) before the DRT under Section 17 of the SARFAESI Act. Along with an urgent application for an interim stay on the auction. The stay application must show prima facie grounds for the challenge. Such as procedural errors in the SARFAESI process. Incorrect NPA classification. Inflated unpaid amounts. inadequate auction notice. DRTs typically hear urgent stay applications quickly. Ex-parte stays (granted without the bank having an opportunity to respond) are available in cases of extreme urgency. Such as when the auction is scheduled within a very short time frame.'
        },
        {
            question: 'How does CredSettle help MSMEs and businesses facing loan disputes?',
            answer: 'CredSettle provides thorough legal and advisory support for MSMEs and firms facing loan disputes in India. Our services include: analyzing your loan account to identify calculation errors and procedural defects. connecting you with experienced DRT counsel who specialize in MSME and firm loan cases. filing Securitization Applications and stay applications before the DRT. settle with banks and ARCs for One-Time closures on favorable terms. advising on restructuring options under the RBI’s MSME framework. and helping with MSEFC filings for claims of unpaid receivables. Our goal is to protect your firm assets and help you find the most viable path out of money distress.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Jaiswal',
            location: 'Pune',
            stars: 5,
            comment: 'Our manufacturing unit was facing a SARFAESI notice and the bank was about to seal our factory. CredSettle’s team filed an SA in the DRT within 48 hours. Got an interim stay. then settle an OTS over 4 months. We kept our factory running and settled at 55% of the unpaid amount.'
        },
        {
            name: 'Priya Menon',
            location: 'Chennai',
            stars: 5,
            comment: 'The bank had made errors in their calculation of unpaid rates on our firm loan. CredSettle’s chartered accountant identified the discrepancy amounting to over 8 lakhs. which we used to settle a significantly reduced closure. Without their help. I would have paid the full incorrect amount.'
        },
        {
            name: 'Suresh Gupta',
            location: 'Delhi',
            stars: 5,
            comment: 'My small trading firm was hit hard during the pandemic. The bank started SARFAESI steps despite the RBI EMI freeze. CredSettle challenged this and also helped me get a restructured loan under the RBI MSME framework. My firm is now recovering normally under the revised payment structure.'
        },
        {
            name: 'Anita Sharma',
            location: 'Jaipur',
            stars: 5,
            comment: 'Excellent service. From the first consultation. The team understood my firm loan case perfectly. They filed the DRT application. Got a stay on the auction. settle an OTS with the bank within 6 months. I cannot thank them enough for saving my shop and livelihood.'
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
        'name': 'MSME and Business Loan Legal Defence Service',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '3241',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-msme-loans" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-msme-loans" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-msme-loans" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

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
                        Best Lawyer for MSME<br />
                        <span className="text-blue-300">and Business Loans in India</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light"> Expert legal defence for MSME and firm loan disputes. Protect your firm. Assets and livelihood with specialized legal support. </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get a Free Business Loan Assessment
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
                            <li> <div className="flex items-center"> <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /> </svg> <span className="ml-1 font-medium text-gray-500 md:ml-2"> Best counsel for MSME and firm Loans </span> </div> </li>
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
                            <p className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Outline</p>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: The Unique Legal Challenges of MSME and Business Loans</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> India’s Micro. Small and Medium Enterprises (MSME) sector is the backbone of the national economy. Contributing over 30% to India’s GDP and providing employment to more than 110 million people. Yet this vital sector faces a persistent and growing challenge: access to finance and. More critically. Managing the legal results when firm loans go into default. For an MSME owner. A loan default is not merely a money issue. It can threaten their livelihood. Their family’s security. years of hard work in building a firm. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> MSME and firm loan disputes are distinct from own loan disputes in several important ways. The stakes are higher. The legal framework is more complex. the RBI safety available to MSMEs under the MSMED Act 2006 create both opportunities and complications that a general counsel may not fully understand. The best counsel for MSME and firm loans is one who combines deep knowledge of banking law. SARFAESI Act steps. DRT practice. The exact RBI safety that apply to firms classified as micro. Small. medium enterprises under Indian law. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> firm loan disputes in India arise from a variety of hardship. Many MSMEs fall into distress due to delayed payments from large buyers or government departments. A problem so widespread that the government created the MSME Samadhaan portal and the MSEFC dispute relief process to address it. Others face money difficulty due to supply chain disruptions. Changes in market conditions. unexpected events like the COVID-19 pandemic. When these firm pressures translate into loan defaults. The bank’s response can be swift and severe. Particularly for loans secured by firm assets or own home. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> This thorough guide explains every dimension of MSME and firm loan disputes in India. From the types of loans and common disputes to the legal framework for defence. The exact safety available to MSMEs. the strategies that the most effective firm loan counsel use to protect their clients. Whether you are dealing with a SARFAESI notice. A DRT application. An impending auction. Simply trying to settle a restructuring or closure. This guide will give you the knowledge you need to navigate the process with confidence. </p>

                            <h2 id="msme-loan-types" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Types of MSME and Business Loans and Their Legal Implications</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> grasp the type of loan your firm has taken is the first step toward grasp your legal rights and debts in a dispute. MSME and firm loans in India come in several distinct forms. Each with different legal implications in the context of default and claims. </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>1. Term Loans:</strong> These are the most common type of firm loan. where a fixed amount is lent for a exact period at a fixed or floating rates rate. Term loans are often secured by firm assets. Own home. both. In default. Banks typically invoke SARFAESI to take takeover of the secured assets. The legal defence strategy for a term loan default depends heavily on the nature of the security and whether the procedures under SARFAESI were correctly followed.</li>
                                    <li><strong>2. Working Capital Loans (CC/OD Accounts):</strong> Cash Credit (CC) and Overdraft (OD) accounts provide flexible credit for day-to-day firm operations. These accounts have no fixed payment schedule. the clients is expected to route firm receipts through the account. When these accounts exceed their sanctioned limits or go NPA. The bank can take action. Disputes in CC/OD accounts often involve questions about the correct calculation of the unpaid amount. Particularly regarding how the bank has applied rates and credited payments.</li>
                                    <li><strong>3. Equipment Finance Loans:</strong> These are loans for purchasing exact machinery or equipment. Often secured by a hypothecation of the purchased equipment. Disputes often involve questions about whether the equipment has been correctly valued. Whether the bank’s security rates was properly registered before the default. whether the procedure for repossessing hypothecated equipment was correctly followed.</li>
                                    <li><strong>4. MUDRA and Government-Backed Schemes:</strong> MUDRA loans under the Pradhan Mantri MUDRA Yojana (PMMY) and other government-backed MSME credit guarantee schemes have exact terms and RBI safety. Banks must follow additional procedures before initiating claims against government-guaranteed loans. Including involving the guarantee firm. counsel representing MSME clients under these schemes can challenge claims actions that deviate from the prescribed procedure for government-guaranteed loans.</li>
                                    <li><strong>5. Emergency Credit Line Guarantee Scheme (ECLGS) Loans:</strong> Introduced during COVID-19. ECLGS loans provided additional credit to MSMEs that were impacted by the pandemic. These loans have exact terms and a government guarantee. Banks must follow the prescribed procedure for invoking the ECLGS guarantee before initiating standalone claims against the clients. An ECLGS clients facing claims action should ensure that their counsel examines whether the bank correctly applied the guarantee terms.</li>
                                </ul>
                            </div>

                            <h2 id="common-disputes" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Common Disputes in MSME and Business Loan Cases</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> MSME and firm loan disputes rarely arise from a simple refusal to pay. They usually involve complex interactions between the clients’s firm hardship. The bank’s internal processes. the RBI environment. The most experienced MSME and firm loan counsel in India have identified several recurring patterns of disputes that they encounter in their practice. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Premature NPA classification is one of the most common grounds for dispute in MSME loan cases. Banks are required to follow RBI’s prudential norms when classifying an account as NPA. these norms specify the exact period of non-payment that must have elapsed before NPA classification is permitted. Many banks classify accounts as NPA prematurely. Either due to administrative errors or to initiate claims steps faster. An incorrectly dated NPA classification can result in inflated unpaid amounts and incorrect claims before the DRT. a good counsel will challenge this as the foundation of the entire claims case. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Calculation errors in unpaid dues are also extremely common in firm loan disputes. Banks often include incorrect rates calculations. Illegal charges. double-counted fines in their account statements. For a firm loan with a high unpaid amount. Even a small rate error can translate into lakhs of rupees. A forensic examination of the loan account by a chartered accountant can identify these errors. which significantly reduce the bank’s legitimate claim and strengthen the clients’s position in both DRT steps and closure talks. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Disputes about the nature and extent of security are another frequent source of conflict in MSME loan cases. firm owners often provide both firm assets and own home as security for loans. questions about which assets are properly subject to the bank’s security rates can be complex. If the bank attempts to enforce against assets that were not properly registered as security. Against assets belonging to family members who are not co-clients or guarantors. This can be challenged both before the DRT and in civil courts. </p>

                            <h2 id="legal-framework" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Legal Framework for MSME and Business Loan Disputes</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The legal landscape for MSME and firm loan disputes in India involves multiple overlapping statutes and rules. A counsel who specializes in MSME and firm loans must be conversant with all of these and know how to navigate between them strategically. </p>
                            <div className="overflow-x-auto mb-8">
                                <table className="min-w-full border-collapse border border-gray-200 text-sm text-gray-700">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-200 px-4 py-3 text-left">Law / Regulation</th>
                                            <th className="border border-gray-200 px-4 py-3 text-left">Relevance to MSME Loan Disputes</th>
                                            <th className="border border-gray-200 px-4 py-3 text-left">Key Legal Remedies</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">SARFAESI Act 2002</td>
                                            <td className="border border-gray-200 px-4 py-3">Bank enforcement of secured loans. NPA claims</td>
                                            <td className="border border-gray-200 px-4 py-3">SA before DRT under Section 17. stay on auction</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">RDB Act 1993</td>
                                            <td className="border border-gray-200 px-4 py-3">Bank claims applications before the DRT</td>
                                            <td className="border border-gray-200 px-4 py-3">Counter-claim. written statement. appeal to DRAT</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">MSMED Act 2006</td>
                                            <td className="border border-gray-200 px-4 py-3">Special safety and payment claims for MSMEs</td>
                                            <td className="border border-gray-200 px-4 py-3">MSEFC filing. pre-deposit safety. sector-exact restructuring</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">IBC 2016</td>
                                            <td className="border border-gray-200 px-4 py-3">firm insolvency relief for firms</td>
                                            <td className="border border-gray-200 px-4 py-3">PPIRP for MSMEs. EMI freeze on enforcement</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">RBI Guidelines</td>
                                            <td className="border border-gray-200 px-4 py-3">NPA classification. Restructuring. Fair Practices Code</td>
                                            <td className="border border-gray-200 px-4 py-3">Restructuring under RBI circulars. OTS policy compliance</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 id="sarfaesi-msme" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Understanding SARFAESI Act Provisions for MSME Loan Defence</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The SARFAESI Act 2002 is the primary enforcement tool that banks use against defaulting MSME clients who have provided tangible assets as security. For MSME firm owners. Grasp how SARFAESI works and how to challenge it is absolutely essential. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The SARFAESI process begins with the bank classifying the loan account as NPA and issuing a Demand Notice under Section 13(2). Demanding payment of the unpaid amount within 60 days. The clients has the right to make a representation under Section 13(3A) within 60 days. the bank must consider this representation and reply with reasons for not accepting it within 15 days of receiving the reply. This 15-day requirement is often violated by banks. which provides grounds for a legal challenge. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> If the clients fails to pay within 60 days and the bank does not accept any representation. The bank can take takeover of secured assets under Section 13(4). This can be symbolic takeover (affixing a notice) or real takeover. Within 30 days of taking takeover. The bank must publish an auction notice in two leading newspapers (one English and one vernacular) inviting sealed bids for the secured assets. The auction must be held on the specified date. the sale must be concluded at a price not below the reserve price. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> For MSME clients. The most effective time to challenge SARFAESI action is fast upon receiving the demand notice or the takeover notice. Filing a Securitization Application (SA) before the DRT with a simultaneously filed application for an interim stay prevents the bank from steps with the auction while the merits of the challenge are examined. MSME counsel who specialize in SARFAESI defence are skilled at identifying the exact procedural errors that are most likely to persuade the DRT to grant an interim stay and ultimately set aside the bank’s enforcement action. </p>

                            <h2 id="msefc-arbitration" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">MSEFC Arbitration: A Special Remedy for MSME Business Owners</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The MSME Facilitation Council (MSEFC) is a legal body established under the MSMED Act 2006 to provide a quick and effective mechanism for resolving payment disputes between MSMEs and their buyers. While it is not straight a forum for bank loan disputes. MSEFC steps can be a powerful tool for MSME firm owners who are facing loan default because their buyers have not paid them. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Under Section 15 of the MSMED Act. Buyers must make payment to MSME suppliers within 45 days of the delivery of goods or the rendering of services. If a buyer fails to make payment within this period. The MSME can file a reference before the MSEFC for conciliation and arbitration. The MSEFC steps are time-bound. Typically resulting in an award within 90 days. Once an award is made in favor of the MSME. The buyer must pay accordingly. this claims can be used to address the MSME’s unpaid bank debts. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> In the context of a bank loan dispute. MSEFC steps serve two purposes. First. They can generate actual claims for the MSME from its buyers. which can then be applied to the bank loan. Second. A pending MSEFC claim for a substantial amount can be presented to the bank as evidence of imminent claims. Supporting a request for a restructuring EMI freeze or an extended OTS payment timeline. Banks and DRTs do take note of MSEFC claims when assessing the genuineness of an MSME’s money distress and its prospects for claims. </p>

                            <h2 id="drt-defence" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Building a DRT Defence Strategy for MSME and Business Loans</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> An effective DRT defence strategy for MSME and firm loan disputes has three core components: identifying and articulating the strongest legal grounds for challenge. Gathering and presenting the supporting documentary evidence. managing the case strategically to achieve the best possible outcome through either a judicial order or a settle closure. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The first step in building a DRT defence for a firm loan is a thorough legal and money audit of the loan account. This involves a counsel reviewing all loan papers. A chartered accountant examining all money statements and calculating the independently checked unpaid amount. a comparison of the bank’s claim with this independently calculated figure. Discrepancies between the two figures often reveal the strongest grounds for challenge and the most significant settle leverage. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> A well-prepared DRT defence for an MSME loan typically challenges multiple aspects of the bank’s case simultaneously. Counsel argue procedural defects in the SARFAESI notices. Contest the NPA classification date. Dispute the calculation of unpaid main sum and rates. Challenge home valuations used for the reserve price. present evidence of the MSME’s genuine money hardship. This multi-faceted approach makes it more difficult for the bank to quickly obtain an order and increases the pressure on the bank to consider a reasonable closure. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> A crucial component of DRT defence strategy for firm loans is the timing and handling of interim steps. Obtaining interim stays on SARFAESI actions or auctions early in the steps can preserve the status quo for months or even years. Giving the MSME time to recover financially and settle from a position of greater strength. Conversely. If the DRT’s interim order requires the MSME to deposit a portion of the unpaid amount as a condition for the stay. The amount and timeline of this deposit must be carefully settle with the DRT. </p>

                            <h2 id="npa-classification" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Challenging Incorrect NPA Classification in MSME Loan Disputes</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The NPA classification of a firm loan account is one of the most consequential determinations that a bank makes in the lending relationship. Once classified as NPA. The account enters a different RBI framework where the bank’s enforcement powers are significantly enhanced. An incorrect NPA classification is therefore a fundamental ground of challenge in any MSME or firm loan dispute. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Under RBI’s Master Direction on Income Recognition. Asset Classification and Provisioning (IRACP). An account is classified as NPA when any rates or EMIs of main sum overdue remains unpaid for more than 90 days (for term loans) or when the unpaid balance in a CC/OD account remains continuously in excess of the sanctioned limit for 90 days. Banks must follow these norms strictly. any deviation provides grounds for challenging the NPA classification. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Common errors in NPA classification that MSME counsel often identify include: classifying an account as NPA before the 90-day period has elapsed. failing to account for payments that were received from the clients but not credited to the account. applying incorrect rates rates that artificially inflated the overdue amount. not following the prescribed upgrade procedure when the account was brought current after a brief default. and failing to apply the COVID-19 and other RBI-mandated restructuring or EMI freeze rules that would have prevented the NPA classification. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> A successful challenge to the NPA classification can result in the DRT ordering the bank to reclassify the account as a standard asset. which removes the bank’s basis for SARFAESI enforcement and DRT claims steps. Even if the NPA classification itself is upheld. Establishing a later correct NPA date can significantly reduce the amount of penal rates that has accrued. Potentially saving lakhs of rupees for the MSME clients. </p>

                            <h2 id="rbi-msme-framework" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">RBI Framework for MSME Loan Restructuring and Resolution</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The Reserve Bank of India has acknowledged the special vulnerability of the MSME sector to economic shocks and has periodically issued exact guidelines for restructuring MSME loans and providing relief to distressed MSME clients. These guidelines create a RBI framework that MSME counsel can use both protectively and offensively in loan dispute cases. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The RBI’s instructions on relief of stressed assets for MSMEs allow for the restructuring of MSME accounts that have become NPA without the downgrade in asset classification that would normally accompany such restructuring for other clients. This means that an MSME that restructures its loan account can potentially have the account reclassified as a standard asset. which significantly reduces the bank’s provisioning burden and also removes the NPA stigma from the clients’s credit profile. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Another important component of the RBI’s MSME framework is the requirement for banks to have a board-approved OTS policy specifically for MSME accounts. This policy must include clear fit criteria. Timelines for processing OTS applications. the range of discounts available. Banks that refuse to consider OTS applications from eligible MSME clients without providing reasons are in violation of their own policy and RBI guidelines. which provides grounds for a complaint to the RBI RBI officer. </p>

                            <h2 id="one-time-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">One-Time Settlement Options for MSME and Business Loan Disputes</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> A One-Time closure (OTS) is often the most practical relief for an MSME facing a severe firm loan dispute. Unlike a protracted legal battle before the DRT which can take years and substantial legal costs. An OTS provides a definitive relief in a shorter timeframe. Allows the MSME to avoid the risk of losing its firm assets. typically results in a significant reduction in the total amount payable. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The key to a successful OTS talks for an MSME firm loan is presenting a compelling and documented case for the discount being proposed. Banks are more likely to accept OTS terms that are supported by clear money evidence of the MSME’s inability to repay the full amount. A realistic assessment of the value of the available security. a plausible source of funds for the payout sum. counsel who specialize in MSME firm loan OTS settle from a thorough grasp of the bank’s internal cost-benefit analysis for settling versus litigating. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> For MSMEs. OTS discounts can range from 30% to 60% of the unpaid amount. Depending on the age of the NPA. The quality of the security. The status of any pending DRT steps. the MSME’s documented money position. Accounts that have been NPA for a long period. where the security has depreciated significantly. Where there are pending DRT challenges that the bank is anxious to resolve. Typically attract the highest discounts. Experienced OTS negotiators at CredSettle track these variables and use them strategically to secure the best possible terms for MSME clients. </p>

                            <h2 id="restructuring" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Loan Restructuring as an Alternative to Dispute for MSME Businesses</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> For MSMEs that have viable firms with genuine long-term prospects but are facing temporary money difficulty. Loan restructuring is often a better option than OTS. Restructuring keeps the MSME in good standing as a clients over the long term. Avoids the "Settled" tag on the credit report. allows the firm to continue operating with a more manageable debt burden. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Modern MSME loan restructuring options available in India include tenure extension (extending the loan period to reduce the EMI). Rates rate reduction (settle a lower rate for the balance tenure). EMI freeze (getting a payment holiday of 3 to 12 months to stabilize the firm cash flow). Conversion of floating to fixed rates rates (for predictability in cash flow planning). conversion of rates arrears into a new term loan with its own payment schedule. These options can be combined to create a restructuring package that is genuinely sustainable for the MSME. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The success of a restructuring request depends on the MSME’s ability to demonstrate to the bank that the underlying firm is viable and that the restructured payment schedule is realistic given the firm’s projected cash flows. This requires a well-prepared request supported by money projections. Market analysis. a clear explanation of the steps being taken to address the factors that caused the first money distress. MSME specialized counsel often work with chartered accountants and firm consultants to prepare these restructuring proposals. </p>

                            <h2 id="ibc-resolution" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">IBC Pre-Packaged Insolvency Resolution for MSME Businesses</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The Insolvency and Bankruptcy Code (IBC) 2016 and its 2021 amendment introducing Pre-Packaged Insolvency relief Process (PPIRP) for MSMEs provide a structured legal mechanism for resolving cases where the MSME genuinely cannot repay its debts through restructuring or OTS. While IBC is typically a last resort. Grasp how it works and when it might be appropriate is important for any MSME firm loan counsel. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The PPIRP for MSMEs allows the promoters of an MSME to initiate insolvency steps while retaining control of the firm during the process. A significant departure from the regular CIRP where handling is taken over by the relief experts. The PPIRP has a strict 120-day timeline (extendable to 90 days in certain hardship). Making it faster than the regular CIRP. It requires the submission of a relief plan from the promoters before bank insolvency steps begin. Hence the "pre-packaged" nature of the process. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The key benefit of PPIRP for MSMEs is the EMI freeze that comes into effect when the process begins. The EMI freeze prevents lenders from taking any enforcement action. Including SARFAESI steps. DRT claims applications. auctions of secured assets. This buys the MSME significant time to settle with creditors and prepare a relief plan. For an MSME facing imminent SARFAESI enforcement or an imminent DRT decree. The PPIRP EMI freeze can provide key breathing room. </p>

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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Get Expert MSME firm Loan Legal Help Today</h3>
                                <p className="text-blue-800 mb-6">Your firm deserves experienced legal representation. Our team of specialized MSME and firm loan counsel will assess your case. Identify your best options. help you protect your firm assets and livelihood.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book Your Free Business Loan Consultation
                                </Link>
                            </div>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14 mt-12">Final Guidance: Choosing the Best Lawyer for MSME &amp; Business Loans</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The choice of legal representation in an MSME or firm loan dispute can determine whether your firm survives or closes. The best counsel for MSME and firm loans are those who combine specialized knowledge of banking law and SARFAESI Act procedures with a practical grasp of how MSMEs operate and what their owners need to protect. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> When choosing a counsel for your MSME or firm loan dispute. Look for demonstrated experience in DRT steps. A track record of successful OTS talks with banks and ARCs. Familiarity with the RBI’s MSME restructuring guidelines. an ability to explain complex legal concepts in language that a firm owner can understand. The best counsel in this space also work collaboratively with chartered accountants. To ensure that the money analysis underlying the legal case is as strong as the legal arguments themselves. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> At CredSettle. We have helped hundreds of MSME and firm owners navigate loan disputes successfully. Protecting their firms. Their assets. their families' money security. Our experienced team of DRT counsel. Debt closure specialists. RBI advisors provides thorough support from the first client consultation through to the final relief. Whether through DRT steps. Restructuring. settle closure. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The most important thing to remember is that time matters in MSME loan disputes. Every day of delay reduces your legal options and gives the bank more time to advance its enforcement actions. Reaching out for legal help at the earliest possible stage gives your counsel the maximum number of tools available to defend your firm and settle the best possible outcome. </p>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The information provided in this guide is for educational purposes and does not constitute legal advice. Every MSME and business loan dispute case has unique facts and requires individualized legal advice from a qualified lawyer. Please consult a qualified business loan lawyer before taking any legal action.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <p className="font-bold text-xl text-gray-900 mb-2">MSME Loan Legal Help?</p>
                                <p className="text-sm text-gray-600 mb-6">Facing a SARFAESI notice or DRT case for your firm loan? Get a free expert assessment of your MSME legal options today.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Free MSME Consultation
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v SARFAESI Defence Expert</p>
                                    <p>v MSEFC Arbitration Support</p>
                                    <p>v OTS talks Specialist</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <p className="font-bold text-gray-900 mb-4 border-b pb-2">Related Legal Services</p>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-msme-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">MSME Loan Recovery Defence</Link>
                                    <Link href="/best-lawyer-for-msme-business-loan-dispute" className="block text-sm text-blue-600 hover:underline">MSME Business Loan Dispute</Link>
                                    <Link href="/best-lawyer-for-business-loan-settlement" className="block text-sm text-blue-600 hover:underline">Business Loan Settlement</Link>
                                    <Link href="/best-lawyer-for-drt-case-defence-for-bank-loan-recovery" className="block text-sm text-blue-600 hover:underline">DRT Case Defence</Link>
                                    <Link href="/best-lawyer-for-company-loan-matters" className="block text-sm text-blue-600 hover:underline">Company Loan Matters</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
