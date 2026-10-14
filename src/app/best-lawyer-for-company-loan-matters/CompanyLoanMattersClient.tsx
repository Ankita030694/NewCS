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
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, {
            rootMargin: '-100px 0px -35% 0px',
            threshold: 0.1
        });
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
            answer: "Company loan matters involve firm clients. Typically private or public limited companies. As opposed to person clients. The key legal differences include: company loans are governed by the Companies Act 2013 in addition to banking laws. Directors' private debt risk in company loan defaults depends on local guarantees given. IBC 2016 provides a local company bankruptcy steps (CIRP) for company loan defaults. And firm clients may have taken loans from multiple lenders simultaneously. Making the legal landscape more complex. Company loan matters also often involve questions about the validity of company resolutions authorizing the borrowing. This can be challenged if proper company governance was not followed."
        },
        {
            question: 'Can a bank initiate SARFAESI proceedings against a company’s assets for a defaulted corporate loan?',
            answer: "Yes. Banks and banks can invoke the SARFAESI Act 2002 against a company\u2019s secured assets when the company\u2019s loan account is classified as NPA. The bank can issue a demand notice under Section 13(2) demanding payment within 60 days. If the company fails to pay. The bank can take takeover of the secured assets and proceed with auction under Section 13(4). However. All the standard SARFAESI procedural requirements apply to company loans as well. Any deviation from these requirements can be challenged by the company before the DRT under Section 17. firm clients often have more complex pledge structures. This creates additional grounds for challenging SARFAESI actions."
        },
        {
            question: 'Are directors of a company personally liable for the company’s loan default?',
            answer: 'Directors of a company are generally not automatically personally liable for the company’s loan defaults. As the company has a separate legal identity. However. Directors who have personally guaranteed the company’s loans are liable under those guarantees. Additionally. If a director has taken local commitments or made private undertakings to the bank. They may be personally liable. Under the Companies Act 2013. Directors can also be held liable if they have committed fraud or gross negligence in managing the company. It is key for directors to understand the exact nature of their debt risk under the loan papers before entering into any settlement or talks with the bank.'
        },
        {
            question: 'What is a Corporate Insolvency Resolution Process (CIRP) under IBC and when should a company consider it?',
            answer: "The company bankruptcy steps (CIRP) under the bankruptcy and Bankruptcy Code 2016 is a structured process for resolving company bankruptcy. A CIRP can be initiated either by the money creditor (bank). Daily work creditor (supplier). The company itself (through its shareholders or board). Once CIRP begins. A moratorium is imposed preventing all enforcement actions. This includes sARFAESI steps and DRT claims applications. A relief expert (RP) takes charge of the company\u2019s handling. A relief plans is sought from potential investors. If no relief plans is approved within 330 days. The company goes into liquidation. Companies should consider CIRP as a last resort when they have no viable restructuring or OTS option and face multiple enforcement actions from lenders."
        },
        {
            question: 'Can a company challenge its NPA classification before a DRT?',
            answer: "Yes. A company can challenge its NPA classification before the DRT. Chiefly in the context of challenging SARFAESI enforcement. If the bank classified the company\u2019s loan account as NPA before the prescribed 90-day period had elapsed. If payments were not correctly credited to the account resulting in a premature NPA classification. If the bank failed to follow RBI rules on NPA classification. These grounds can be raised before the DRT in a Securitization Application. A successful challenge to the NPA classification effectively neutralizes the bank\u2019s basis for SARFAESI enforcement and can greatly change the dynamics of any talks."
        },
        {
            question: 'How does a company negotiate a One-Time Settlement (OTS) on a corporate loan?',
            answer: "settling an OTS for a firm loans involves several steps. The company must first prepare a full money analysis showing its current money position. The causes of the default. The available funds for the OTS payment. The company\u2019s lawyer then formally submits an OTS proposal to the bank\u2019s OTS boards. Supported by valuations of secured assets. Money projections. Legal papers identifying any procedural defects in the bank\u2019s enforcement. Banks evaluate OTS proposals based on the unpaid main loan. The pledge coverage. The age of the NPA. The company\u2019s money position. Knowledgeable firm loans lawyers are skilled at presenting these factors in a way that maximizes the discount obtainable in the OTS talks."
        },
        {
            question: 'What happens to a company’s assets if the DRT passes a decree in favor of the bank?',
            answer: "When the DRT passes a decree (claims letter) in favor of the bank. The bank can proceed with execution of the decree through the claims Officer of the DRT. The claims Officer has powers to attach the company\u2019s assets. Sell them by auction. Distribute the proceeds to satisfy the decree. If the company has already pledged local assets under SARFAESI. Those assets are typically sold through the SARFAESI process rather than the DRT execution process. The company can appeal the DRT decree to the DRAT within 30 days. Though a pre-deposit of a percentage of the decree amount is typically required as a condition for admission of the appeal."
        },
        {
            question: 'What is the Standstill Agreement and can it help a company facing multiple loan defaults?',
            answer: 'A Standstill pacts is a settled arrangement between a company and its lenders where the lenders agree not to initiate or continue enforcement actions for a specified period while the company and its lenders work out a restructuring plan. Standstill pacts are more common in cases involving multiple lenders. Where coordinated action is needed. The Inter-Creditor pacts (ICA) rules under the RBI’s June 2019 Prudential rules for relief of Stressed Assets provides a structured mechanism for inter-creditor coordination that effectively creates a semi-formal standstill. Companies with multiple unpaid loans that are facing DRT or SARFAESI actions from different lenders should consider whether the ICA rules can be invoked to provide a coordinated relief.'
        },
        {
            question: 'Can a company’s guarantors seek separate legal relief in a company loan matter?',
            answer: "Yes. Guarantors who are being sued by the bank separately (either through a DRT application or a civil suit) can seek their own independent legal relief. Guarantors have several potential defences. This includes discharge from debt risk if the bank altered the terms of the loan pacts without the guarantor\u2019s consent. Discharge if the bank provided additional time to the main loan client without the guarantor\u2019s consent. Discharge if the bank released any pledge without the guarantor\u2019s knowledge. The right to demand that the bank first enforce its pledge against the main loan client before steps against the guarantor. These defences are highly fact-local and require careful check of the guarantee and loan papers by an skilled firm loans lawyer."
        },
        {
            question: 'What documents should a company collect when facing a corporate loan dispute?',
            answer: "When facing a firm loans claims. The company should promptly gather and secure the following categories of papers: all loan pacts. Sanction letters. Board resolutions authorizing the borrowing. pledge papers. Complete account records showing all disbursements. Payments. And interest calculations. All contacts with the bank. Including demand notices. SARFAESI notices. And restructuring proposals. Audited money records for the past three years. Property papers for all secured assets including valuation reports. Any guarantees given by directors or third parties. company approval papers including Memorandum of Association and Articles of Association. And any RBI filings or compliance papers related to the loan. These papers form the foundation of the company\u2019s legal defence and talks."
        },
        {
            question: 'How can CredSettle help companies facing corporate loan disputes?',
            answer: "CredSettle provides full legal and alert support for companies facing firm loans claims in India. Our services mainly for company loan matters include: connecting companies with skilled company DRT lawyers who specialize in company loan cases. Analyzing loan accounts to identify procedural defects. NPA classification errors. calculation errors. Filing Securitization Applications and stay applications before the DRT. settling One-Time deals with banks and ARCs on behalf of firm clients. Advising on debt restructuring options under RBI rules. Helping inter-creditor coordination under the ICA rules. And advising on IBC options including PPIRP and CIRP when restructuring and OTS options are not viable. Our goal is to find the most practical path out of debt stress for each company while protecting the interests of its promoters and stakeholders."
        }
    ];
    const reviews = [
        {
            name: 'Arun Kapoor',
            location: 'Mumbai',
            stars: 5,
            comment: "Our Pvt Ltd was facing a DRT application from our bank for a 2 crore loan. CredSettle analyzed our account and found a major calculation error and NPA date error. We used these findings to settle an OTS at 65% of the bank\u2019s original claim. Saving the company over 70 lakhs."
        },
        {
            name: 'Deepika Ranganathan',
            location: 'Bangalore',
            stars: 5,
            comment: "As a guarantor for my company\u2019s firm loans. I was terrified when the bank sent me a private demand notice after the company defaulted. CredSettle\u2019s lawyer identified that the bank had accepted a restructuring proposal from the company without my consent as guarantor. This largely dissolved my private debt risk. Excellent expertise."
        },
        {
            name: 'Mahesh Chandra',
            location: 'Hyderabad',
            stars: 5,
            comment: 'Our construction company was hit hard by project delays and we defaulted on a large builder loan. CredSettle helped us navigate a SARFAESI challenge while simultaneously settling a structured OTS with the lending consortium. The property was saved. we repaid in installments over 18 months.'
        },
        {
            name: 'Neha Patel',
            location: 'Surat',
            stars: 5,
            comment: "The bank had made multiple errors in our CC account calculation. This results in a claim that was almost 30% inflated. CredSettle\u2019s CA and legal team prepared a full audits report that we used in DRT steps. The bank eventually accepted a dramatically reduced OTS within 8 months of engaging CredSettle."
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
    return (<>
            <Script id="faq-schema-company-loan" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>
            <Script id="review-schema-company-loan" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}/>
            <Script id="org-schema-company-loan" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}/>

            {/* Hero Section */}
            <section className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden" style={{
            background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
            minHeight: '50vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Best Lawyer for Company<br />
                        <span className="text-blue-300">Loan Matters in India.</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light"> Expert legal solutions for firm loans claims. Protect your company. Its assets and your directors' private interests with specialized firm loans legal defence. </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
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
                            <li className="inline-flex items-center"> <Link href="/" className="inline-flex items-center hover:text-blue-600"> Home </Link> </li>
                            <li> <div className="flex items-center"> <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/> </svg> <span className="ml-1 font-medium text-gray-500 md:ml-2"> Best Lawyer for Company Loan Matters. </span> </div> </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Mobile Sticky TOC */}
            <div ref={mobTocRef} className="sticky top-0 z-40 lg:hidden bg-white border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar scroll-smooth py-3 px-4 flex gap-4 whitespace-nowrap">
                {navLinks.map((link) => (<a key={link.id} id={`mob-toc-${link.id}`} href={`#${link.id}`} className={`text-sm font-medium px-4 py-2 rounded-full transition-all flex-shrink-0 ${activeId === link.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 bg-gray-50 hover:bg-gray-100'}`} onClick={(e) => {
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
            }}>
                        {link.label}
                    </a>))}
            </div>

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <p className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Outline</p>
                            <nav className="space-y-1 text-sm">
                                {navLinks.map((link) => (<a key={link.id} href={`#${link.id}`} className={`block py-1.5 px-3 rounded-lg transition-all ${activeId === link.id
                ? 'bg-blue-600 text-white font-semibold'
                : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`} onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${link.id}`)?.scrollIntoView({ behavior: 'smooth' });
                setActiveId(link.id);
            }}>
                                        {link.label}
                                    </a>))}
                            </nav>
                        </div>
                    </aside>

                    {/* Middle Column: Main Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: The Complex World of Company Loan Matters in India</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> When a company in India faces trouble with its loan dues. The legal landscape it must navigate is greatly more complex than that facing an person client. Firm loans matters involve a unique intersection of banking law. Company law. pledges law. bankruptcy law that no single piece of legislation fully covers. The best lawyer for company loan matters must be equally comfortable in a Debt claims Tribunal hearing. A National Company Law Tribunal (NCLT) steps under the IBC. A settling room with a consortium of lenders. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> India’s banking sector currently carries a major burden of company NPAs. Despite large progress in reducing the NPA ratio through IBC resolutions and enhanced claims measures. Thousands of companies across all sectors continue to grapple with bank loans that have turned problematic. These companies face an aggressive combination of SARFAESI enforcement. DRT claims steps. In the most severe cases. CIRP filings under the IBC that threaten to take away handling control from the promoters entirely. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The stakes in company loan matters are chiefly high because they affect not just the promoters and directors personally but also the livelihoods of the company’s staff. The interests of its creditors. Customers. Suppliers. in some cases. The broader economic health of the sectors in which these companies operate. This is why finding the right legal legal help is critical. A company facing bank claims action needs a lawyer who understands both the legal tools available to the bank and the full range of legal options the company has to protect itself. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> This full guide covers everything a company director. Promoter. Money officer needs to know about company loan matters in India. From the types of firm loans and the most common claims to the legal remedies available in SARFAESI steps. DRT cases. IBC relief processes. Whether you are dealing with your first demand notice from a bank or confronting an imminent CIRP filing. This guide provides the foundational knowledge needed to understand your situation and take effective action. </p>

                            <h2 id="types-of-company-loans" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Types of Company Loans and Their Legal Implications</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Companies in India access financing through a variety of loan structures. Each with distinct legal characteristics that affect the nature of claims and the available defences when things go wrong. Understanding which type of loan your company has taken is the starting point for developing an effective legal plan. </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>1. Term Loans:</strong> Provided for a local purpose (such as cash expenditure or asset acquisition) with a structured payment schedule over a defined tenure. When companies default on term loans. Banks typically invoke SARFAESI against the local assets financed by the loan and any additional pledge provided. claims in term loan matters often involve questions about the correct calculation of unpaid main loan. Interest. Penalty charges. And whether the bank followed RBI rules on NPA classification.</li>
                                    <li><strong>2. Working cash Facilities (CC/OD):</strong> Revolving credit facilities that allow companies to finance day-to-day work. These accounts have a sanctioned limit and are expected to be funded by the company’s routine trade receipts. When CC/OD accounts go NPA. claims often arise about the correct unpaid dues. Chiefly regarding how interest was calculated on the debit balance and whether all credits to the account were properly recorded.</li>
                                    <li><strong>3. Project Finance Loans:</strong> Large loans provided for local infrastructure or factory projects. These often carry complex pledge structures involving land. Buildings. Plant and machinery. Project income. When project finance loans default. The claims can be chiefly complex because the pledge (an ongoing project) may not be easily sold through a standard auction. Specialized lawyers with skill in project finance and construction law are often needed for these cases.</li>
                                    <li><strong>4. External trade Borrowings (ECB):</strong> Foreign currency loans taken by Indian companies from overseas lenders. ECB matters have an international dimension. As the loan pacts may be governed by foreign law and the lender may be pursuing claims through foreign courts in addition to Indian steps. Companies facing ECB defaults need lawyers who understand both the RBI’s ECB rules and the relevant international legal principles.</li>
                                    <li><strong>5. Consortium and Multiple Banking Arrangements:</strong> Many large companies borrow from a consortium of banks or maintain credit facilities with multiple banks simultaneously. When defaults occur. Coordinating the responses of multiple lenders adds major complexity to the legal steps. The RBI’s Inter-Creditor pacts (ICA) rules requires lead banks and other lenders to follow a coordinated approach to relief. This creates local procedural requirements that can be challenged if not followed correctly.</li>
                                </ul>
                            </div>

                            <h2 id="common-disputes" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Common Legal Disputes in Company Loan Matters</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Company loan claims rarely arise from simple non-payment. They typically emerge from a complex web of money trouble. Procedural errors by the bank. Disagreements about the unpaid amount. Questions about the proper application of pledge. The most skilled firm loans lawyers in India have encountered these claims repeatedly and know how to identify and articulate the strongest grounds for challenge. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> claims about the validity of pledge papers are common in company loan matters. When a company provides immovable property as pledge for a loan. The pledge creation requires compliance with the Registration Act 1908 (for property mortgages). The Companies Act 2013 (for filing with the ROC within 30 days). The relevant stamp duty laws. Any defect in the pledge creation process can make the bank’s pledge interest unenforceable. This greatly limits its claims options and changes the dynamics of any claims relief. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> claims about the scope of the bank’s mandate under the loan pacts are also frequent in company loan matters. Banks sometimes attempt to invoke rights that are not clearly provided in the loan paperwork. Examples include taking takeover of assets that were not mainly included in the pledge pacts. Applying funds from one loan account to satisfy dues under another account without approval. Unilaterally increasing the interest rate beyond what was agreed in the sanction letter. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> In cases involving consortium loans. claims between the lending banks themselves are another source of complication for the borrowing company. When consortium members disagree about the relief plan and some lenders prefer claims while others support restructuring. The borrowing company can find itself caught in the middle. An skilled firm loans lawyer navigates this complexity by engaging the lead bank and other key lenders separately and helping to build a consensus around a relief approach that protects the company’s interests. </p>

                            <h2 id="legal-framework" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Legal Framework Governing Company Loan Matters in India</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Company loan matters in India are governed by an overlapping rules of statutes. Regulations. And judicial rulings. A full understanding of this rules is essential for any lawyer specializing in firm loans claims. </p>
                            <div className="overflow-x-auto mb-8">
                                <table className="min-w-full border-collapse border border-gray-200 text-sm text-gray-700">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-200 px-4 py-3 text-left">Legal Instrument.</th>
                                            <th className="border border-gray-200 px-4 py-3 text-left">Application to Company Loan Matters.</th>
                                            <th className="border border-gray-200 px-4 py-3 text-left">Key Remedies for Companies.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">SARFAESI Act 2002.</td>
                                            <td className="border border-gray-200 px-4 py-3">Bank enforcement of secured firm loans.</td>
                                            <td className="border border-gray-200 px-4 py-3">SA before DRT (Section 17). interim stay on auction.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">RDB Act 1993</td>
                                            <td className="border border-gray-200 px-4 py-3">Bank’s OA before DRT for claims.</td>
                                            <td className="border border-gray-200 px-4 py-3">Written record. counter-claim. DRT appeal.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">IBC 2016</td>
                                            <td className="border border-gray-200 px-4 py-3">CIRP and liquidation for corporates.</td>
                                            <td className="border border-gray-200 px-4 py-3">Moratorium. PPIRP. voluntary CIRP. pre-pack.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Companies Act 2013.</td>
                                            <td className="border border-gray-200 px-4 py-3">company governance. director debt risk. charges.</td>
                                            <td className="border border-gray-200 px-4 py-3">Challenge improper pledge creation. director rights.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">RBI rules</td>
                                            <td className="border border-gray-200 px-4 py-3">NPA norms, ICA rules, restructuring.</td>
                                            <td className="border border-gray-200 px-4 py-3">Restructuring under Prudential rules. OTS policy.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 id="sarfaesi-company" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">SARFAESI Defence Strategies for Companies</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The SARFAESI Act is the most powerful enforcement tool available to banks against firm clients with secured assets. When a bank or ARC invokes SARFAESI against a company. The response must be swift and strategic. Companies have a fixed window of opportunity to challenge SARFAESI actions before the rights to the secured assets are irreversibly compromised. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The most effective SARFAESI defence plans for companies begin with a thorough check of the entire SARFAESI process from beginning to end. Firm loans lawyers review whether the NPA classification followed RBI norms. Whether the demand notice was correctly addressed and served on all the required parties (company. Directors. Guarantors). Whether the company’s legal help was properly considered. Whether all the procedural requirements for taking takeover were met. Any deficiency in this process provides grounds for a Securitization Application before the DRT. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> For companies with complex pledge structures involving multiple types of assets (real property. Plant and machinery, intellectual property. Receivables). Challenges to the scope of the bank’s pledge interest can be chiefly effective. If the bank has taken takeover of or attempted to sell assets that are not clearly included in the pledge paperwork. The company’s lawyer can apply for a local injunction against the use of those assets while the claims is resolved. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Another powerful SARFAESI defence plan for companies is challenging the property valuation used to set the reserve price for the auction. Company assets. Chiefly factory properties and specialized machinery. Are often difficult to value accurately. Banks sometimes use conservative valuations that set an artificially low reserve price. This benefits the auction purchaser at the expense of the quality of the company’s assets and reduces the amount credited toward the unpaid loan after the auction sale. </p>

                            <h2 id="drt-company-defence" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">DRT Defence Strategy for Company Loan Recovery Cases</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> When a bank files an Original Application (OA) before the DRT for claims of firm loans dues. The company faces a structured adversarial steps with strict timelines. Building an effective DRT defence for a company loan claims case requires fast engagement of skilled DRT counsel. A full audit of the loan account. A strategic assessment of the company’s strongest grounds for defence. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Once an OA is filed. The company (as respondent) must file its written record within the timeline prescribed by the DRT. This paper is critically key and must be prepared carefully by skilled firm loans counsel. It should address every allegation in the bank’s application. Raise all available factual and legal defences. Include a counter-claim if the company has been harassed or if the bank’s actions caused additional money damage. Be supported by copies of all relevant papers. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The evidential phase of DRT steps for company loan matters involves the filing of affidavits. Documentary exhibits. Expert reports (such as chartered accountant letters challenging the unpaid calculation). Companies that invest in a thorough evidential presentation often achieve much better outcomes. As the DRT is required to evaluate the proof carefully and cannot simply accept the bank’s claim at face value without examining the company’s opposing proof. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> A key strategic consideration in DRT steps for company loan matters is the timing and nature of talks. Many DRT lawyers advise a dual-track approach: maintaining a vigorous legal defence in the DRT while simultaneously engaging the bank’s loan claims unit or senior handling in OTS talks. This approach shows to the bank that the company is capable of prolonged lawsuits (raising the bank’s legal costs and extending the time before claims) while also keeping open the possibility of a settled relief that is faster and cheaper for both sides. </p>

                            <h2 id="director-liability" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Director Liability in Company Loan Defaults</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> One of the most personally key aspects of company loan matters for company promoters and directors is understanding the extent of their private debt risk when the company defaults on its loan dues. The principle of limited debt risk is a fundamental feature of company law in India. This safety has major exceptions that every director of a company with unpaid bank loans must understand. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> private guarantees are the most common source of director private debt risk in company loan defaults. When a director signs a private guarantees in favor of the company’s bank lender. They straight assume the debt to repay the loan if the company fails to do so. private guarantees are enforceable regardless of the company’s limited debt risk structure. Banks routinely pursue private guarantors when company claims targets are not achievable from the company alone. The strength of a private guarantees claim and the defences available to the guarantor depend on the local language of the guarantee paper. This is why careful review by legal counsel is essential. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Under the Companies Act 2013. Directors can also be held personally liable in cases of fraud. If the company’s default was caused by or accompanied by fraudulent actions by directors. Examples include creating fictitious assets. Siphoning funds from the company to related parties. Making fraudulent misrepresentations to the bank about the company’s money position. These directors can be held personally liable not just civilly but also criminally under provisions of the IPC and the Companies Act. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Qualified company loan lawyers advise directors proactively on how to minimize their private exposure in company loan matters. This includes advising on the proper paperwork of company decisions related to the loan. This ensures that the director has clear records of any dissenting opinions about company decisions that led to debt stress. Where appropriate. Settling the scope of private guarantees at the time they are given. </p>

                            <h2 id="guarantor-protection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Protecting Guarantors in Company Loan Disputes</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> When a company defaults on its loans. The bank invariably pursues available guarantors. This can include company directors who have given private guarantees. Third-party guarantors who provided property as pledge. company guarantors from related entities. Understanding the legal protections available to guarantors is an key dimension of full company loan legal advice. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Under the Indian Contract Act 1872. Guarantors enjoy several local protections that can be raised as defences when the bank sues on the guarantee. A guarantor is discharged from debt risk if the main loan terms of the loan were altered without the guarantor’s consent (the "accommodation" principle). A guarantor is also discharged if the bank released or gave up any of the pledges without the guarantor’s consent. As the guarantor is entitled to step into the bank’s shoes and enforce those pledges. The bank must also give notice to the guarantor before steps against the principle debtor. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> In the context of IBC steps. Private guarantors of company debtors face bankruptcy steps before the DRT itself (not the NCLT). The IBC 2016 provisions for private bankruptcy of private guarantors subject them to a special mechanism where the DRT can take proof and determine the guarantor’s assets available for distribution to creditors. Understanding the interaction between company IBC steps and private guarantor bankruptcy is an key aspect of full company loan legal legal help. </p>

                            <h2 id="ibc-resolution" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The IBC Resolution Process for Corporate Loan Defaults</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The bankruptcy and Bankruptcy Code 2016 has fundamentally transformed the legal landscape for firm loans defaults in India. Since its execution. The IBC has become both the most powerful tool available to creditors and a critical strategic option for companies seeking a structured relief of their debt dues. Company loan lawyers must have a thorough understanding of IBC steps to advise their company clients effectively. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> When a bank or other money creditor files an application under Section 7 of the IBC before the NCLT. Alleging that the company debtor (the company) is in default of a money debt. The NCLT must admit the application if the default is established. Once admitted. A moratorium comes into effect under Section 14 of the IBC. This stays all pending SARFAESI steps. DRT claims applications, civil suits. Other enforcement actions against the company. This moratorium. Meanwhile. Initially welcome to the company. Comes at a major cost: an Interim relief expert (IRP) and then a relief expert (RP) is appointed to take over the handling of the company. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> For companies that want to use IBC strategically without losing handling control. The Pre-Packaged bankruptcy steps (PPIRP) introduced for MSMEs in 2021 is an key option. Under the PPIRP. The company’s promoters retain handling control during the steps. A relief plans prepared by the company is submitted to creditors for approval. If the creditors do not approve the base relief plans. They can invite competing plans from third parties. The PPIRP has a strict 120-day timeline and provides the moratorium protections of the regular IBC while allowing the promoters to remain in control of everyday trade work. </p>

                            <h2 id="debt-restructuring" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Corporate Debt Restructuring Options for Companies</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> For companies that have viable firms but are facing temporary money trouble. Debt restructuring is often a far better option than the adversarial routes of DRT lawsuits or IBC steps. Firm debt restructuring preserves the company’s credit profile. Avoids the costs and uncertainties of lawsuits. Allows the company to continue operating while addressing its debt dues. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The RBI’s June 2019 Prudential rules for relief of Stressed Assets provides the primary RBI rules for bank-led firm debt restructuring. Under this rules. When a company’s loan is identified as stressed. The lenders are required to implement a relief plans within specified timelines. The relief plans can take various forms. This includes rescheduling of payments. Conversion of debt to equity. This provides additional credit for working cash. In some cases. Haircuts (reductions in main loan). All lenders with more than 75% exposure (by value) and 60% (by number) must agree to the relief plans for it to be binding on all lenders. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> For larger company debtors with exposure from multiple banks. The ICA process provides a structured talks platform. Under the ICA. The lead bank coordinates the steps and all banks that have signed the ICA are obligated to follow the agreed relief approach. Companies whose loans are subject to the ICA mechanism should engage skilled legal counsel who understands how to leverage the inter-creditor dynamics to achieve the most favorable restructuring terms for the company. </p>

                            <h2 id="npa-remedies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Remedies for Incorrect NPA Classification of Company Loan Accounts</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> For many companies. The journey into loan claims territory begins with an NPA classification that may be incorrect. Premature. Non-compliant with RBI rules. Challenging the NPA classification is often the foundation of an effective company loan defence plan. As it potentially invalidates the bank’s entire basis for SARFAESI enforcement and DRT steps. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Companies whose CC/OD accounts have been classified as NPA often find that the bank failed to properly account for all credits to the account. This results in an artificially inflated unpaid dues that exceeded the sanctioned limit for longer than it actually did. A detailed deep review of the account records by an expert chartered accountant can identify these errors and show that the account should not have been classified as NPA on the date the bank claims. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Under existing RBI rules. An account that has been incorrectly classified as NPA should be upgraded to a standard asset classification when the client regularizes the account. If the bank refuses to upgrade despite the account being regularized. If it refuses to acknowledge payments that were credited to the account. The company has the right to complain to the RBI Ombudsman and to raise the issue in DRT steps. Courts have repeatedly held that incorrect NPA classification that causes money and reputational harm to the company can give rise to claims for damages. </p>

                            <h2 id="ots-companies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">One-Time Settlement for Corporate Loan Disputes</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> A One-Time settlement (OTS) remains one of the most practically effective ways to resolve a company loan claims. Chiefly for NPA accounts where the bank has limited realistic prospects of full claims. OTS talks for firm loans involve unique considerations that distinguish them from private loans OTS. This includes the company’s need to protect its ongoing trade relationships. The involvement of multiple directors and guarantors. Often the requirement for board approval of the settlement terms. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> For company OTS talks. The preparation of a compelling OTS proposal is the most critical step. This proposal must show to the bank’s OTS boards that the offered amount represents the maximum realizable value from the company. Taking into account the current value of secured assets. The company’s money position and future prospects. The legal challenges that would need to be overcome to achieve a better claims through lawsuits. The time and cost of pursuing those legal challenges. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The discount achievable in a company OTS depends on multiple factors. Older NPAs typically attract larger discounts. Accounts where the bank’s pledge coverage is thin (loan amount greatly exceeds the realizable value of the pledge) also attract larger discounts. Accounts where there are pending legal challenges by the company that the bank is anxious to avoid or resolve also attract better OTS terms. Skilled firm loans lawyers at CredSettle understand how to identify and leverage all of these factors in their client’s OTS talks. </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Client Success Stories</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {reviews.map((review, index) => (<div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                        <div className="flex items-center mb-3">
                                            <div className="flex text-yellow-400 mr-2">
                                                {[...Array(review.stars)].map((_, i) => (<svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                                    </svg>))}
                                            </div>
                                        </div>
                                        <p className="text-gray-700 italic mb-4 leading-relaxed font-light text-sm">"{review.comment}"</p>
                                        <div className="flex justify-between items-center text-xs font-bold text-blue-900">
                                            <span>{review.name}</span>
                                            <span className="opacity-60">{review.location}</span>
                                        </div>
                                    </div>))}
                            </div>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (<div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Get Expert Company Loan Legal Support Today</h3>
                                <p className="text-blue-800 mb-6">Your company’s future depends on the quality of its legal plan. Our team of skilled firm loans lawyers. DRT specialists. Debt negotiators will assess your case and help you achieve the best possible outcome for your company and its stakeholders.</p>
                                <Link href="/contact" className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300">
                                    Book Your Free Company Loan Consultation
                                </Link>
                            </div>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14 mt-12">Final Guidance: Choosing the Best Lawyer for Your Company Loan Matter</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Company loan matters require a lawyer who combines multiple areas of legal expertise: banking law. Company law. SARFAESI Act practice. DRT steps. bankruptcy law. The best lawyer for company loan matters is one who can see the complete legal landscape and develop a plan that addresses all dimensions of the company’s situation simultaneously. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> When choosing legal legal help for a company loan matter. Prioritize lawyers who have local skill with company DRT cases. Not just general banking lawsuits. Verify that they understand the IBC rules and can advise on whether CIRP or PPIRP might be appropriate for your situation. Confirm that they work collaboratively with chartered accountants who can analyze loan accounts and identify calculation errors. Look for a track record of successful OTS talks with major banks and ARCs. As this is often the most key service in terms of practical outcomes for the company. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> At CredSettle. Our team of firm loans specialists. DRT lawyers. Debt settlement advisors has helped numerous companies navigate loan claims successfully. Protecting their trade work. Their assets. Their promoters' private interests. From the initial assessment through to final relief. We provide full support tailored to the local situation of each company client’s situation. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Time is often critical in company loan matters. As SARFAESI deadlines, DRT timelines. IBC triggers can all create time pressure that limits the company’s options if not addressed quickly. The earlier you engage skilled legal counsel. The more options you have available and the better position you are in to achieve a favorable relief. Contact us today for a free assessment of your company’s loan situation and let us help you find the path forward. </p>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The information provided in this guide is for educational purposes and does not constitute legal advice. Every company loan matter has unique facts and requires individualized legal advice from a qualified corporate loan lawyer. Please consult a qualified lawyer before taking any legal action regarding your company’s loan dues.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <p className="font-bold text-xl text-gray-900 mb-2">Company Loan Legal Help?</p>
                                <p className="text-sm text-gray-600 mb-6">Facing SARFAESI or DRT action for your company loan? Get a free expert assessment of your company legal options today.</p>
                                <Link href="/contact" className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center">
                                    Free Company Consultation
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v company DRT Specialist.</p>
                                    <p>v IBC alert Support.</p>
                                    <p>v OTS talks Expert.</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <p className="font-bold text-gray-900 mb-4 border-b pb-2">Related Legal Services.</p>
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
        </>);
}
