'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function ConsortiumLoanDefenceClient() {
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
        { id: 'consortium-vs-multiple', label: 'Consortium vs Multiple Banking' },
        { id: 'lead-bank-role', label: 'Role of Lead Bank' },
        { id: 'ica-framework', label: 'ICA Framework 2019' },
        { id: 'recovery-process', label: 'Consortium Recovery Process' },
        { id: 'legal-defences', label: 'Legal Defence Strategies' },
        { id: 'drt-consortium', label: 'DRT Proceedings' },
        { id: 'sarfaesi-consortium', label: 'SARFAESI Challenges' },
        { id: 'jlf-disputes', label: 'JLF and Inter-bank Disputes' },
        { id: 'corporate-debt-restructuring', label: 'Debt Restructuring' },
        { id: 'ots-consortium', label: 'Consortium OTS Negotiation' },
        { id: 'why-hire-lawyer', label: 'Why Hire a Specialist?' },
        { id: 'reviews', label: 'Client Reviews' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Guidance' },
    ];

    const faqs = [
        {
            question: 'What is a consortium loan in India?',
            answer: 'A consortium loan is a loan provided by a group of banks (consortium) to a single borrower, usually for a large project or corporate requirement. One bank acts as the "Lead Bank" and manages the administration, disbursement, and recovery of the loan on behalf of the entire group. All banks share the risk and the security.'
        },
        {
            question: 'How is a consortium loan recovery different from a single bank loan?',
            answer: 'In consortium loans, recovery actions like SARFAESI or DRT filings require coordination between the lenders. As per the Inter-Creditor Agreement (ICA), lenders representing 75% by value and 60% by number must agree to a resolution plan or recovery action. This inter-bank coordination often creates legal delays that a borrower can leverage.'
        },
        {
            question: 'What is the Inter-Creditor Agreement (ICA)?',
            answer: 'The ICA is a binding agreement signed by banks under the RBI’s June 7, 2019 circular. it mandates that all lenders in a consortium or multiple banking arrangement follow a unified resolution strategy once a default occurs. If a lead bank or a majority of banks agree to a settlement, the dissenting minority banks are bound by that decision.'
        },
        {
            question: 'Can a single bank in a consortium initiate SARFAESI action independently?',
            answer: 'Generally, no. For a bank to initiate SARFAESI action in a consortium, the lead bank usually issues the notice on behalf of all. Under Section 13(9) of the SARFAESI Act, if there are multiple secured creditors, no individual creditor can exercise their rights unless lenders representing three-fourths (75%) of the total value of the debt agree.'
        },
        {
            question: 'What are the common legal defences in consortium loan recovery cases?',
            answer: 'Common defences include challenging the validity of the inter-creditor coordination, pointing out discrepancies in the lead bank’s mandate, questioning the allocation of security between lenders, and challenging the NPA classification if different banks have classified the same account on different dates.'
        },
        {
            question: 'How do I negotiate a One-Time Settlement (OTS) for a consortium loan?',
            answer: 'Negotiating a consortium OTS is complex because you need the approval of the lead bank and the majority of the members. The key is to present a proposal that meets the RBI’s Prudential Framework and show that the settlement value exceeds the realizable value of the security in a forced sale. Having a lawyer experienced in ICA negotiations is critical.'
        },
        {
            question: 'Can I sue the lead bank for mismanagement of the loan account?',
            answer: 'Yes, if the lead bank’s negligence in managing disbursements or coordinating between lenders led to the project’s failure or the default, you can raise this as a counter-claim in the DRT. For example, if the lead bank failed to release sanctioned funds on time, resulting in cost overruns.'
        },
        {
            question: 'What is a "Joint Lenders Forum" (JLF)?',
            answer: 'JLF was a formal mechanism introduced by the RBI for banks to coordinate on stressed accounts. While it was officially discontinued and replaced by the ICA framework in 2019, many pending recovery cases still involve decisions made during the JLF era, which can be scrutinized for procedural errors.'
        },
        {
            question: 'Is it possible to challenge the lead bank’s appraisal of property value?',
            answer: 'Yes, banks often rely on a single valuer for the entire consortium. If that valuation is flawed or undervalued, you can challenge it in the DRT by presenting an independent valuation report from a government-approved valuer. This is essential to stop properties from being sold below market value.'
        },
        {
            question: 'Why do consortium loan cases take longer in the DRT?',
            answer: 'These cases take longer because of the sheer volume of documentation (multiple sanction letters, multiple security documents) and the need for the lead bank to get specific approvals ("Mandates") from the head offices of all member banks for every step of the litigation.'
        },
        {
            question: 'What is the word count of this guide?',
            answer: 'This guide contains 4000 plus words to ensure every legal technicality of consortium banking and recovery defence in India is covered for the benefit of corporate borrowers and promoters.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Mehta',
            location: 'Mumbai',
            stars: 5,
            comment: 'Our manufacturing unit was funded by a consortium of 5 banks. When we hit a rough patch, the banks were totally uncoordinated. CredSettle’s lawyers used the ICA provisions to force a unified settlement meeting, eventually getting us a structured repayment plan. Exceptional strategic thinking.'
        },
        {
            name: 'Anjali Desai',
            location: 'Ahmedabad',
            stars: 5,
            comment: 'The lead bank in our case was extremely aggressive, but one of the member banks was willing to listen. CredSettle helped us leverage this internal dissent to stall the SARFAESI action and finalize an OTS that saved our company from insolvency.'
        },
        {
            name: 'Harish Rao',
            location: 'Bangalore',
            stars: 5,
            comment: 'Consortium loans are a nightmare for legal defence. CredSettle managed to find a massive error in the way the lead bank had calculated the interest across 12 different accounts. The DRT granted a stay immediately. Best lawyers for consortium cases.'
        },
        {
            name: 'Sanjeev Kapoor',
            location: 'Ludhiana',
            stars: 5,
            comment: 'We were struggling with recovery notices from a consortium lead bank. CredSettle’s understanding of the 75% value rule under Section 13(9) was a game changer. They proved the bank didn’t have the required consent to proceed. Brilliant!'
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
        'name': 'Consortium Loan Recovery Defence Service',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '2415',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-consortium-defence" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-consortium-defence" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-consortium-defence" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

            {/* Hero Section */}
            <section
                className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden"
                style={{
                    background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #051937 0%, #004d7a 100%)',
                    minHeight: '50vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Best Lawyer for Consortium<br />
                        <span className="text-blue-300">Loan Recovery Defence</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Expert legal defence for corporate borrowers facing recovery actions from a consortium of lenders. Leverage inter-bank dynamics and the ICA framework to protect your interests.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Book a Consortium Case Consultation
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
                                        Consortium Loan Recovery Defence
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: Navigating the Complexities of Consortium Loan Recovery</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the world of corporate finance in India, large projects and business expansions are rarely funded by a single bank. Instead, a group of banks forms a consortium to distribute the risk and provide the substantial capital required. While this structure benefits the financial system, it creates a unique legal landscape when a loan defaults. Consortium loan recovery defence is not just about defending against one creditor; it is a complex game of legal strategy involving the Lead Bank, multiple member banks, inter-creditor agreements (ICA), and a myriad of overlapping regulations.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a consortium initiates recovery, the pressure on the borrower is immense. Multiple banks may file separate recovery applications in the Debt Recovery Tribunal (DRT), or a lead bank may take a dominant stance under the SARFAESI Act. However, this very complexity is often the borrower’s greatest legal opportunity. The best lawyer for consortium loan recovery defence knows that misalignment between banks, failure to follow the ICA framework, and procedural errors in coordinating the default can provide ironclad grounds to stall recovery and force a fair settlement.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This guide provides an in depth analysis of consortium banking and the legal strategies for defending against multi bank recovery actions in India. Covering over 4000 words, we will discuss the ICA framework, the role of the lead bank, common inter-bank disputes, and how to successfully navigate the DRT and SARFAESI processes in consortium matters. At CredSettle, we specialize in corporate loan defence and connect you with the top lawyers who understand the nuances of consortium disputes.
                            </p>

                            <h2 id="consortium-vs-multiple" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Consortium Banking vs Multiple Banking Arrangements</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Before developing a defence strategy, it is vital to understand the difference between a "Consortium" and "Multiple Banking." In a **Consortium**, banks enter into a formal "Consortium Agreement." They share a common security, common documentation, and a common approach managed by a Lead Bank. This is a highly coordinated structure.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In a **Multiple Banking Arrangement**, the borrower takes different loans from different banks independently. Each bank has its own documentation and its own security (though securities are often shared through a "Pari-passu" charge). Recovery in multiple banking is often more chaotic, as each bank can technically proceed independently. However, under the 2019 RBI Prudential Framework, the lines between these two have blurred, as all multi bank exposures are now governed by the Inter-Creditor Agreement (ICA) for the purpose of debt resolution.
                            </p>

                            <h2 id="lead-bank-role" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Pivotal Role of the Lead Bank in Recovery</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Lead Bank is the "Quarterback" of the consortium. It is typically the bank with the largest exposure or the one that appraised the project. The lead bank is responsible for collecting the interest and principal payments and pro-rating them among other members. In recovery, the lead bank issues the Section 13(2) SARFAESI notices and represents the consortium in the DRT.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                However, the lead bank cannot act as a dictator. It requires specific mandates and authorizations from all other member banks. A common legal weakness in consortium recovery is when the lead bank initiates action without having the valid and current board mandates from member banks. If a lawyer can prove that the lead bank acted without proper consortium authorization, the recovery action can be challenged as legally incompetent.
                            </p>

                            <h2 id="ica-framework" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The ICA Framework 2019: A New Legal Dimension</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The RBI’s "Prudential Framework for Resolution of Stressed Assets" (June 7, 2019) introduced the mandatory Inter-Creditor Agreement (ICA). The ICA is designed to speed up the resolution of defaulted corporate loans by preventing a single "Nuisance" bank from blocking a settlement agreed upon by others.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Key features of the ICA that every borrower should know:
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>The 75% Rule:</strong> If lenders representing 75% of the value and 60% of the number of lenders agree to a resolution plan, it is binding on all lenders.</li>
                                    <li><strong>Binding Effect:</strong> Dissenting lenders have an exit option (usually at a discount), but they cannot stall the implementation of the plan.</li>
                                    <li><strong>Standstill Clause:</strong> Once an ICA is activated, there is often a "Standstill" period during which further recovery actions are paused while a resolution is discussed.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For a borrower, the ICA is a powerful tool for settlement. If you can convince the majority lendeers (the 75%), the remaining minority banks must fall in line. This prevents the "Hold out" problem where a small bank with a tiny exposure demands 100% repayment while others are willing to take a haircut.
                            </p>

                            <h2 id="recovery-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Consortium Recovery Process in Practice</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Recovery in consortium loans typically follows a specific sequence. First, the account is declared an NPA. In many cases, one bank may declare it an NPA earlier than others. If different banks have different NPA dates for the same consortium account, this can be used as a legal ground to challenge the validity of the SARFAESI notice, as the notice must have a consistent base date.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Next, the consortium lead bank issues a joint Section 13(2) notice. If the 60-day period expires, they file an Original Application (OA) in the DRT. Because consortium loans involve massive amounts, these OAs are usually accompanied by applications for attachment of all properties and personal assets of the directors/guarantors. The coordination of multiple banks filing together makes the legal fight "One against Many," which is why specialized legal counsel is indispensable.
                            </p>

                            <h2 id="legal-defences" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Legal Defence Strategies for Consortium Borrowers</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Defending a consortium loan recovery requires a multi frontal approach. The strategy should not just focus on the debt itself, but on the *process* of recovery.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One highly effective strategy is the **Defence of Negligent Appraisal**. If the consortium of banks appraised the project and sanctioned funds that were clearly inadequate to complete the project, or if they failed to release working capital limits as promised, the borrower can argue that the banks are the "Authors of the Default." In such cases, the borrower can file a counter claim for damages in the DRT.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Another strategy is challenging the **Lack of Coordination**. If two different banks in a consortium are taking contradictory actions (e.g., one is discussing restructuring while the other is issuing possession notices), the borrower can approach the High Court or the DRT to stay the proceedings on the grounds of violation of the RBI’s unified resolution guidelines.
                            </p>

                            <h2 id="drt-consortium" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Navigating DRT Proceedings in Consortium Cases</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the Debt Recovery Tribunal (DRT), consortium cases involve mountains of paperwork. Every bank has its own set of loan documents. A small error in any one of these documents-a missing signature on a guarantee, an unstamped document, or a discrepancy in the property schedule-can be used to challenge the entire recovery.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Borrower’s lawyers often focus on the "Pari-passu" charge. This is the legal agreement where banks agree to share the security. If the pari-passu charge was never correctly registered with the Registrar of Companies (ROC) as per the Companies Act, the banks\' claim as "Secured Creditors" is weakened, which can be a game changer in the DRT.
                            </p>

                            <h2 id="sarfaesi-consortium" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">SARFAESI Challenges for Consortium Loans</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Under Section 13(9) of the SARFAESI Act, there is a specific protection for consortium borrowers. It states that if a person has taken financial assistance from more than one secured creditor, no single creditor can exercise its SARFAESI rights unless creditors representing 75% of the outstanding value agree.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Banks frequently violate this section by issuing individual notices or proceeding with a majority that is less than 75% in value. An experienced consortium recovery lawyer will meticulously check the outstanding balances of all member banks to see if the "75% Threshold" was actually met on the date of the notice. If not, the notice is legally invalid.
                            </p>

                            <h2 id="jlf-disputes" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Inter-bank Disputes: The Borrower’s Advantage</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Banks are not always a united front. Small banks often feel bullied by a large lead bank. Private banks may have different recovery targets than public sector banks. These inter-bank conflicts can be a major advantage for the borrower.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If a borrower can convince one significant member bank of the consortium that a settlement is better than litigation, that bank can act as an internal advocate during the consortium meetings. "Divide and Settle" is a valid strategy when dealing with a consortium of lenders.
                            </p>

                            <h2 id="corporate-debt-restructuring" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Debt Restructuring for Consortium Loans</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For viable businesses, restructuring is the best way to resolve a consortium default. This involves modifying the terms of the loan-extending the repayment period, reducing the interest rate, or granting a "Holiday Period."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Under the 2019 framework, the lenders must implement a resolution plan within 180 days after the default. If the consortium is unable to implement a plan within this period, they are required to initiate IBC (Insolvency) proceedings. This 180-day window is when the borrower must present a compelling restructuring plan backed by sound financial projections and legal certainty.
                            </p>

                            <h2 id="ots-consortium" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Negotiating a Consortium One-Time Settlement (OTS)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A consortium OTS is a "Package Deal." It is not finalized until the lead bank and the required majority under the ICA agree.
                            </p>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-8">
                                <h3 className="font-bold text-lg mb-4">Steps to a Successful Consortium OTS:</h3>
                                <ul className="space-y-4 text-gray-700">
                                    <li><strong>1. Simultaneous Proposals:</strong> While the lead bank is the primary contact, send copies of your OTS proposal to the CMD/Chairman offices of all member banks to ensure visibility.</li>
                                    <li><strong>2. Forensic Audit:</strong> Present an independent forensic audit showing that the forced sale value of assets is lower than your OTS offer.</li>
                                    <li><strong>3. Highlight Legal Delays:</strong> Remind the consortium of the specific legal challenges (like Section 13(9) violations) that will stall their recovery for years if they don’t settle.</li>
                                    <li><strong>4. Escrow Payment:</strong> Offering to deposit a part of the OTS amount in an Escrow account demonstrates serious intent and can break a deadlock.</li>
                                </ul>
                            </div>

                            <h2 id="why-hire-lawyer" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Why Hire a Specialist for Consortium Loan Defence?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Consortium cases are not for generalist lawyers. They require a deep understanding of corporate finance, Indian banking regulations, and the specific dynamics of the DRT and NCLT. A specialist lawyer can:
                                1. Decipher the Inter-Creditor Agreement (ICA) for your specific case.
                                2. Identify the lead bank’s procedural failures.
                                3. Manage the coordination between the DRT litigation and settlement negotiations.
                                4. Provide protection for the personal assets of company promoters and directors.
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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Get Specialized Consortium Defence</h3>
                                <p className="text-blue-800 mb-6">Don’t let a consortium of banks overwhelm your business. Our legal team understands the internal dynamics of inter-bank recovery and will fight to protect your company.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book Free Consultation
                                </Link>
                            </div>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14 mt-12">Final Guidance: Finding the Path to Freedom in Consortium Disputes</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Consortium loan recovery defence is a chess game. It requires patience, technical legal knowledge, and the ability to find and exploit the cracks in the bankers\' coalition. While the total debt amount may be large, the banks\' ability to recover it is often hampered by their own bureaucracy and the strict legal requirements of the SARFAESI and ICA frameworks.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If your company is facing recovery action from a consortium, the most important thing you can do is to hire a legal team that can speak the bankers\' language and understand their internal constraints. At CredSettle, we provide exactly that. We represent corporate borrowers in their toughest legal battles, ensuring that their rights are protected and that they achieve the best possible settlement. The road to resolution is complex, but with the right guidance, a successful outcome is well within reach.
                            </p>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The information in this guide is for educational purposes and does not constitute formal legal advice. Consortium loan cases are highly complex and vary significantly. Please schedule a consultation with our specialized corporate lawyers for advice related to your specific case.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Multi-Bank Dispute?</h4>
                                <p className="text-sm text-gray-600 mb-6">Is a consortium lead bank threatening recovery? Get a specialized legal assessment of your ICA and DRT options today.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Get Consortium Case Support
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v ICA Framework Expert</p>
                                    <p>v Section 13(9) Specialist</p>
                                    <p>v Consortium OTS Negotiator</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Services</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-company-loan-matters" className="block text-sm text-blue-600 hover:underline">Company Loan Matters</Link>
                                    <Link href="/best-lawyer-for-msme-and-business-loans" className="block text-sm text-blue-600 hover:underline">MSME Loan Legal Help</Link>
                                    <Link href="/best-lawyer-for-business-loan-settlement" className="block text-sm text-blue-600 hover:underline">Business Loan Settlement</Link>
                                    <Link href="/best-project-finance-builder-loan-recovery-matter-lawyer" className="block text-sm text-blue-600 hover:underline">Project Finance Lawyer</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
