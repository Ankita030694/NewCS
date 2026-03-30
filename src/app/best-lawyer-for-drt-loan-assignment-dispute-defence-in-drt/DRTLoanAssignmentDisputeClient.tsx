'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function DRTLoanAssignmentDisputeClient() {
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
        { id: 'what-is-loan-assignment', label: 'Loan Assignment Explained' },
        { id: 'borrower-rights', label: 'Your Rights as Borrower' },
        { id: 'sarfaesi-assignment-defence', label: 'SARFAESI Defence' },
        { id: 'drt-proceedings', label: 'DRT Proceedings' },
        { id: 'grounds-to-challenge', label: 'Grounds to Challenge' },
        { id: 'role-of-arc', label: 'ARC and Its Tactics' },
        { id: 'key-documents', label: 'Key Documents' },
        { id: 'legal-strategy', label: 'Legal Strategy' },
        { id: 'rbi-guidelines', label: 'RBI Guidelines' },
        { id: 'case-timeline', label: 'Case Timeline' },
        { id: 'settlement-options', label: 'Settlement Options' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Guidance' },
    ];

    const faqs = [
        {
            question: 'Can a bank transfer my loan to an ARC without my consent in India?',
            answer: 'Yes, under the SARFAESI Act 2002, a bank or financial institution can assign or transfer a Non-Performing Asset (NPA) to an Asset Reconstruction Company (ARC) without requiring the borrower’s consent. However, the bank is legally required to provide proper notice of the assignment, and the ARC must follow all procedural requirements set under the SARFAESI Act and RBI guidelines when initiating recovery actions. The assignment must follow due process.'
        },
        {
            question: 'What is a Securitization Application (SA) in a DRT loan assignment dispute?',
            answer: 'A Securitization Application (SA) is a legal remedy available under Section 17 of the SARFAESI Act 2002. A borrower or guarantor who is aggrieved by any action taken by the secured creditor (whether the original bank or the ARC to which the loan was assigned) can file an SA before the Debt Recovery Tribunal. This application challenges the measures taken under the SARFAESI Act and can result in a stay on possession, auction, or other enforcement actions.'
        },
        {
            question: 'How long do I have to file a challenge in the DRT after receiving a SARFAESI notice?',
            answer: 'After receiving a demand notice under Section 13(2) of the SARFAESI Act, the borrower has 60 days to repay or respond with a representation. If the bank or ARC proceeds with enforcement measures, the borrower has 45 days from the date of such action to file a Securitization Application (SA) before the DRT under Section 17 of the SARFAESI Act. It is critical to act within these timelines, as delays can weaken your legal position significantly.'
        },
        {
            question: 'Can I challenge the valuation of my property in a DRT loan assignment dispute?',
            answer: 'Yes, challenging the valuation of secured assets is one of the most effective defence strategies in a DRT loan assignment dispute. If the ARC or bank has used an outdated, low, or biased property valuation to proceed with an auction, your lawyer can challenge this before the DRT. The DRT has the power to appoint an independent valuer or stay the auction proceeding pending a fair valuation. Courts have consistently held that forced or undervalued auctions are prejudicial to the borrower.'
        },
        {
            question: 'What happens to my outstanding loan after it is assigned to an ARC?',
            answer: 'After assignment, the ARC becomes the new creditor and acquires all the rights of the original bank. This means the ARC can issue notices under SARFAESI, take possession of secured assets, and initiate recovery proceedings before the DRT. However, the borrower retains the right to receive a proper account statement, dispute incorrect calculations, demand a reconciliation of dues, and challenge any procedural irregularities. The ARC cannot impose new interest rates or alter loan terms without following RBI guidelines.'
        },
        {
            question: 'Can I get a stay on an e-auction by the ARC through the DRT?',
            answer: 'Yes, if proper grounds exist, the DRT can grant a stay on an e-auction proceedings initiated by the ARC. Common grounds for such a stay include: the auction notice not being published in the required manner, the reserve price being set below market value, procedural violations in the SARFAESI process, the loan account being disputed as NPA incorrectly, or ongoing settlement negotiations. An experienced DRT lawyer can file an urgent application for an interim stay with supporting documents to protect your property.'
        },
        {
            question: 'What are the procedural errors that can be challenged in a DRT loan assignment dispute?',
            answer: 'There are several procedural errors that can form the basis of a strong defence in a DRT loan assignment dispute. These include: failure to serve proper notice of assignment to the borrower, incorrect NPA classification date, calculation errors in the outstanding dues, failure to consider the borrower’s representation under Section 13(3A), auction without requiring mandatory 30-day public notice, assigning the loan to an ARC not registered with the RBI, and taking possession without following the prescribed notice periods under the SARFAESI Act.'
        },
        {
            question: 'Will a loan settlement with the ARC affect my CIBIL score?',
            answer: 'Yes, settling a loan with an ARC will affect your CIBIL score. Since the loan was already classified as an NPA before assignment, your score has already taken a significant hit. After settlement, the ARC is required to update the loan status with credit bureaus. Ideally, you want the settlement to be reported as "Closed" rather than "Settled," as this has a less severe long-term impact. A good DRT lawyer and negotiator can help you ensure that the credit bureau reporting conditions are part of the settlement terms with the ARC.'
        },
        {
            question: 'Is it possible to settle a loan with an ARC after it has already filed a case in the DRT?',
            answer: 'Absolutely. Settlement with an ARC is possible at any stage, including after a DRT case has been filed. In fact, many ARCs prefer settlement over a lengthy legal battle, as their business model depends on recovering money quickly. A lawyer experienced in DRT loan assignment disputes can negotiate a One-Time Settlement (OTS) with the ARC while simultaneously defending you in DRT proceedings. The DRT case can be withdrawn or compounded once the settlement terms are agreed upon.'
        },
        {
            question: 'What documents should I collect when I receive a loan assignment notice?',
            answer: 'When you receive a notice of assignment from a bank to an ARC, you should immediately collect and secure the following documents: the original loan agreement and sanction letter, all repayment records and bank statements, the original SARFAESI notice (if any), the assignment notice or communication received, any correspondence with the original bank regarding outstanding dues, the property valuation report (if applicable), and all account statements showing the outstanding balance. These documents are the foundation of your legal defence.'
        },
        {
            question: 'How does CredSettle help borrowers in DRT loan assignment dispute defence?',
            answer: 'CredSettle provides end-to-end legal support for DRT loan assignment dispute defence across India. Our team works with experienced DRT lawyers and debt settlement specialists who analyze your loan account, identify procedural errors, challenge incorrect NPA classifications, file Securitization Applications before the DRT when needed, and negotiate One-Time Settlements (OTS) with ARCs to secure the best possible outcome. We also ensure that your credit bureau reporting is handled correctly as part of any negotiated settlement.'
        }
    ];

    const reviews = [
        {
            name: 'Rajesh Malhotra',
            location: 'Delhi',
            stars: 5,
            comment: 'I received a notice from an ARC saying my loan had been assigned and they were about to auction my property. CredSettle connected me with a DRT lawyer who filed an urgent stay application. The auction was stopped and we negotiated a very fair OTS within 4 months.'
        },
        {
            name: 'Sunita Agarwal',
            location: 'Mumbai',
            stars: 5,
            comment: 'The ARC was using a completely wrong property valuation to auction my commercial unit. The lawyer challenged it in the DRT and proved the valuation was 40% below market rate. The DRT ordered a fresh valuation, and we eventually settled at terms that allowed me to keep my business.'
        },
        {
            name: 'Prakash Nair',
            location: 'Bangalore',
            stars: 5,
            comment: 'My bank had classified my account as NPA even though I had documented payments. After assignment to an ARC, I thought I had no options. CredSettle’s legal team challenged the NPA classification itself and got us a completely fresh calculation of dues. Saved me over 12 lakhs in disputed interest.'
        },
        {
            name: 'Meena Shah',
            location: 'Ahmedabad',
            stars: 5,
            comment: 'The entire process felt overwhelming until I reached out to CredSettle. They explained every step, filed the SA on time, and negotiated with the ARC professionally. Within 6 months, we had a signed settlement agreement and the DRT case was withdrawn. I highly recommend their services.'
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
        'name': 'DRT Loan Assignment Dispute Defence Legal Service',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '2847',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-drt-assignment" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-drt-assignment" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-drt-assignment" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

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
                        Best Lawyer for DRT Loan<br />
                        <span className="text-blue-300">Assignment Dispute Defence in DRT</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Expert legal defence against ARC and bank loan assignment actions. Protect your rights before the Debt Recovery Tribunal across India.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get a Free DRT Case Review
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
                                        Best Lawyer for DRT Loan Assignment Dispute Defence
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: When Your Bank Sells Your Loan to an ARC</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Receiving a notice that your bank has assigned your loan to an Asset Reconstruction Company (ARC) is a moment that many borrowers across India face with confusion and fear. The notice often arrives without warning, bearing the name of an unfamiliar organization that is now claiming to be your new creditor. For a borrower who is already struggling with financial pressures, this assignment feels like being passed from one difficult situation to an even more uncertain one.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Debt Recovery Tribunal (DRT) system was established under the Recovery of Debts and Bankruptcy Act, 1993, to provide a speedy mechanism for banks and financial institutions to recover debts above Rs. 20 lakhs. When a loan is assigned to an ARC, the ARC inherits all the rights of the original lender and can use SARFAESI Act powers and DRT proceedings to recover the debt. What many borrowers do not realize is that they retain powerful legal rights even after this assignment, and the best lawyer for DRT loan assignment dispute defence can help them assert those rights effectively.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A loan assignment dispute in the DRT context arises when a borrower challenges the actions taken by the ARC or the original bank in connection with the assigned loan. This could involve challenging the NPA classification, questioning procedural errors in the SARFAESI process, disputing the calculation of outstanding dues, or seeking a stay on an impending auction of secured assets. The legal avenues available to borrowers are robust, and with experienced legal representation, many assignment dispute cases result in settlements that preserve the borrower’s assets or significantly reduce the outstanding demand.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This comprehensive guide explains everything a borrower needs to know about DRT loan assignment dispute defence in India, from understanding what an assignment is to building a solid legal strategy that can be presented before the DRT. Whether you have received a SARFAESI notice from an ARC, been served with a Demand Notice, or are facing an imminent auction of your property, understanding your rights is the first step toward an effective defence.
                            </p>

                            <h2 id="what-is-loan-assignment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">What Is a Loan Assignment and How Does It Work?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A loan assignment is a legal process by which a bank or financial institution transfers its rights and interests in a loan account to a third party, typically an Asset Reconstruction Company (ARC). ARCs are specialized entities registered with the Reserve Bank of India under the SARFAESI Act 2002. They are designed to acquire Non-Performing Assets (NPAs) from banks at a discounted price, clean up the bank’s balance sheet, and then recover as much as possible from the borrower.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                From a legal standpoint, the assignment is governed by Section 5 of the SARFAESI Act 2002, read with the relevant RBI guidelines. The bank sells the loan account to the ARC, often at 20% to 50% of the outstanding amount, depending on how old the NPA is and what security is available. The ARC then issues Security Receipts (SRs) to the bank and to qualified institutional buyers (QIBs) who invest in these instruments, hoping to profit from the recovery proceeds.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once the assignment is complete, the ARC becomes the "secured creditor" with all the enforcement powers that the original bank had. This means the ARC can issue notices under Section 13(2) of the SARFAESI Act demanding repayment, take possession of secured assets under Section 13(4), sell the security through a public auction, and file a recovery application before the DRT under the RDB Act 1993. The ARC can also appoint a receiver or manager to manage the secured assets during the recovery process.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                However, the law is clear that while the ARC inherits the bank’s rights, it also inherits all the defences that the borrower had against the bank. Any procedural error, incorrect calculation, or legal deficiency that existed before the assignment continues to be available as a ground of defence even after the loan has been assigned to the ARC. This is a critical point that the best lawyers for DRT loan assignment dispute defence leverage strategically during proceedings.
                            </p>

                            <h2 id="borrower-rights" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Borrower Rights in a Loan Assignment Dispute</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many borrowers mistakenly believe that once a loan is assigned to an ARC, they lose all their rights and are at the mercy of the new creditor. This is completely incorrect. Indian law provides borrowers with a robust set of rights that are enforceable before the DRT and higher courts. Understanding these rights is essential for mounting an effective defence.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>1. Right to Proper Notice:</strong> The ARC must formally notify the borrower of the assignment and provide the contact details of the new creditor. Any enforcement action taken without such notice is procedurally defective and can be challenged before the DRT.</li>
                                    <li><strong>2. Right to a Correct Account Statement:</strong> The borrower has the right to demand a complete and accurate statement of the loan account, including all payments made, interest calculated, and charges levied. Errors in this statement can form the basis of a dispute about the quantum of outstanding dues.</li>
                                    <li><strong>3. Right to Make a Representation:</strong> Under Section 13(3A) of the SARFAESI Act, after receiving a demand notice, the borrower has the right to make a written representation to the ARC. The ARC is legally required to consider this representation and reply with reasons before proceeding.</li>
                                    <li><strong>4. Right to File a Securitization Application (SA):</strong> Under Section 17 of the SARFAESI Act, the borrower can challenge any action taken by the ARC before the DRT within 45 days. This is the primary legal remedy for challenging possession, auction notices, and other enforcement actions.</li>
                                    <li><strong>5. Right Against Harassment:</strong> The ARC and its recovery agents must follow the RBI’s Fair Practices Code. They cannot resort to harassment, intimidation, or shaming tactics. Violations can be reported to the RBI Ombudsman and can strengthen the borrower’s position in DRT proceedings.</li>
                                    <li><strong>6. Right to Settle:</strong> The borrower retains the right to negotiate a One-Time Settlement (OTS) with the ARC at any stage, including during pending DRT proceedings. Many ARCs are motivated to settle because their business model favors quick recovery over prolonged litigation.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Beyond these statutory rights, borrowers also have constitutional protections. Article 300A of the Constitution of India protects a person’s right to property from being taken away without the authority of law. This means that any action by an ARC that does not strictly follow legal procedures can be challenged not only before the DRT but also, in appropriate cases, before the High Court under Article 226 of the Constitution.
                            </p>

                            <h2 id="sarfaesi-assignment-defence" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">SARFAESI Defence in Loan Assignment Cases</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The SARFAESI Act 2002 is the primary legal tool used by ARCs to enforce their rights after a loan assignment. Understanding how to defend against SARFAESI actions in a loan assignment dispute requires a detailed knowledge of the procedural requirements under the Act and the grounds on which these actions can be legally challenged.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The SARFAESI process in a loan assignment dispute typically follows this sequence: the ARC, after acquiring the loan, issues a demand notice under Section 13(2) requiring repayment within 60 days. If the borrower fails to repay, the ARC can take symbolic possession of the secured assets under Section 13(4) by affixing a notice and informing the borrower. Subsequently, the ARC can take physical possession and sell the asset through a public auction. The entire process, if not challenged, can result in the loss of the borrower’s property.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                However, there are numerous points in this process where a skilled DRT lawyer can intervene. The best lawyers for DRT loan assignment dispute defence are those who know exactly where the procedural vulnerabilities lie in a SARFAESI action and how to exploit those vulnerabilities in a Securitization Application before the DRT. Common SARFAESI defences include challenging the calculation of outstanding dues as inflated or incorrect, arguing that the NPA classification was premature or procedurally flawed, demonstrating that the bank failed to consider the borrower’s representation, or proving that the demand notice was not served in the legally prescribed manner.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One particularly effective SARFAESI defence in assignment cases involves questioning whether the ARC was properly registered and authorized to take enforcement actions at the time the notice was issued. Additionally, lawyers often challenge the timing and manner of the auction notice, particularly whether it was published in the required number of newspapers, whether adequate time was provided between the notice and the auction, and whether the reserve price was fair and properly determined.
                            </p>

                            <h2 id="drt-proceedings" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">DRT Proceedings in Loan Assignment Disputes: A Practical Guide</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Debt Recovery Tribunal is the primary judicial forum for resolving loan assignment disputes in India. Understanding how DRT proceedings work is essential for any borrower seeking to defend against an ARC’s recovery actions. DRTs function under the Recovery of Debts and Bankruptcy Act, 1993, and the SARFAESI Act, 2002, and handle matters across a wide range of financial disputes.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When an ARC files an Original Application (OA) before the DRT claiming recovery of the assigned debt, the borrower is made a respondent and must file a written statement within the prescribed time. This written statement is the primary opportunity for the borrower to set out all their defences and counter-claims. It is critical that this document be prepared meticulously, as it sets the tone for the entire litigation. A well-drafted written statement by an experienced DRT lawyer can shift the dynamics of the case significantly in the borrower’s favor.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Alternatively, when a borrower challenges the ARC’s SARFAESI actions, they file a Securitization Application (SA) before the DRT under Section 17. In this case, the borrower is the applicant and the ARC is the respondent. The SA must clearly state the grounds of challenge, attach supporting documents, and ideally include an application for an interim stay on the disputed enforcement action. The DRT has broad powers to grant interim relief, including stays on auctions, possession, and other enforcement measures.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                DRT proceedings also offer the possibility of an appeal to the Debt Recovery Appellate Tribunal (DRAT) if either party is aggrieved by the DRT’s decision. Appeals to the DRAT must be filed within 30 days of the DRT’s order, and the appellant may need to pre-deposit a portion of the awarded amount as a condition for admitting the appeal. From the DRAT, further appeals can be made to the High Court and ultimately to the Supreme Court of India.
                            </p>

                            <h2 id="grounds-to-challenge" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Legal Grounds to Challenge a Loan Assignment in DRT</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Building a strong defence in a DRT loan assignment dispute requires identifying and articulating specific legal grounds. Experienced lawyers who specialize in this area have developed a comprehensive understanding of the grounds that are most likely to succeed before the DRT. Here are the primary grounds that can be raised in a loan assignment dispute:
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light">
                                <ol className="list-decimal pl-6 space-y-4 text-gray-800">
                                    <li><strong>Incorrect NPA Classification:</strong> If the bank classified the loan as an NPA on the wrong date or without following RBI’s prudential norms, this is a fundamental ground of challenge. The correct NPA classification date affects the calculation of outstanding dues and the quantum of the bank’s claim before the DRT.</li>
                                    <li><strong>Calculation Errors in Outstanding Dues:</strong> It is common for banks and ARCs to include incorrect amounts, double-count charges, or apply interest rates that are not authorized under the loan agreement. A detailed forensic examination of the loan account statement can reveal these errors, which form strong grounds for reducing the ARC’s claim.</li>
                                    <li><strong>Non-Compliance with RBI Circulars:</strong> Specific RBI circulars govern how NPAs should be classified, how assignment should be done, and what process ARCs must follow. Any deviation from these circulars is a ground of challenge. Lawyers track the latest RBI circulars to identify such deviations in their clients' cases.</li>
                                    <li><strong>Defective Assignment Agreement:</strong> The loan assignment agreement between the bank and the ARC must comply with legal requirements. If the agreement is silent on certain aspects, or if it was executed in violation of applicable regulations, aspect of its validity can be challenged before the DRT.</li>
                                    <li><strong>Failure to Consider Representation:</strong> Under Section 13(3A) of SARFAESI, the ARC must consider the borrower’s representation and provide reasons for not accepting it before taking any enforcement action. Failure to do so is a serious procedural irregularity that the DRT takes seriously.</li>
                                    <li><strong>Improper Auction Procedures:</strong> Auction notices must be published in the prescribed manner, the reserve price must be properly determined, and the auction must be conducted fairly. Any deviation from DRT auction rules is a ground for setting aside the auction.</li>
                                </ol>
                            </div>

                            <h2 id="role-of-arc" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Understanding ARC Tactics in Loan Assignment Disputes</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Asset Reconstruction Companies are commercial entities that operate on a business model based on acquiring stressed assets at a discount and recovering the maximum possible amount. Understanding their tactics helps a borrower and their lawyer prepare a more effective defence strategy in a DRT loan assignment dispute.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                ARCs typically use a combination of psychological pressure and legal enforcement to prompt quick payment or settlement. On the legal side, they tend to move quickly with SARFAESI notices and possession actions to create a sense of urgency. They set tight timelines and sometimes schedule auctions at short notice, hoping the borrower will panic and settle at unfavorable terms rather than mount a legal challenge. This is why it is vital to engage a DRT lawyer as soon as you receive any communication from an ARC.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                From a negotiation standpoint, however, ARCs also have strong incentives to settle. Since they acquire loans at a significant discount, any recovery above the acquisition price represents a profit. This means that an ARC that bought a loan for Rs. 30 lakhs that has an outstanding book value of Rs. 70 lakhs would profit even if they settled with the borrower for Rs. 40 lakhs. This creates significant room for negotiation, particularly with the help of a skilled debt settlement advisor who understands the ARC’s financial position.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                ARCs also have a limited timeframe during which their Security Receipts (SRs) must be redeemed, typically 5 to 8 years from the date of acquisition. As this deadline approaches, ARCs become increasingly motivated to settle, often on terms far more favorable to the borrower than what they initially proposed. An experienced legal team tracks these timelines and uses them as leverage in settlement negotiations.
                            </p>

                            <h2 id="key-documents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Key Documents for DRT Loan Assignment Dispute Defence</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The strength of any DRT loan assignment dispute case depends significantly on the documents available to the borrower. A knowledgeable DRT lawyer will tell you that collecting and organizing these documents from the earliest possible stage is critical for building a successful defence.
                            </p>
                            <div className="overflow-x-auto mb-8">
                                <table className="min-w-full border-collapse border border-gray-200 text-sm text-gray-700">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-200 px-4 py-3 text-left">Document Category</th>
                                            <th className="border border-gray-200 px-4 py-3 text-left">Specific Documents</th>
                                            <th className="border border-gray-200 px-4 py-3 text-left">Why It Matters</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Loan Documentation</td>
                                            <td className="border border-gray-200 px-4 py-3">Sanction letter, Loan agreement, Promissory notes, Security documents</td>
                                            <td className="border border-gray-200 px-4 py-3">Foundation of your defence; identify unauthorized charges or terms</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Payment Records</td>
                                            <td className="border border-gray-200 px-4 py-3">Bank statements, EMI receipts, Payment challans, Transfer records</td>
                                            <td className="border border-gray-200 px-4 py-3">Prove actual payments; challenge incorrect outstanding amounts</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">ARC Communications</td>
                                            <td className="border border-gray-200 px-4 py-3">Assignment notice, Demand notice, Possession notice, Auction notice</td>
                                            <td className="border border-gray-200 px-4 py-3">Identify procedural defects; verify timelines for legal challenges</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Property Documents</td>
                                            <td className="border border-gray-200 px-4 py-3">Title deed, Sale deed, Property valuation reports, Encumbrance certificate</td>
                                            <td className="border border-gray-200 px-4 py-3">Challenge unfair reserve price; establish true market value</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Hardship Evidence</td>
                                            <td className="border border-gray-200 px-4 py-3">Medical reports, Termination letters, CA certificates, Tax returns</td>
                                            <td className="border border-gray-200 px-4 py-3">Support settlement negotiations; demonstrate genuine distress</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Beyond these documents, your lawyer may also require copies of any legal notices served by the original bank before the assignment, any correspondence between you and the bank during the default period, and any earlier valuation reports of the secured property. If possible, obtaining a certified copy of the assignment agreement between the bank and the ARC through a Right to Information (RTI) application or through the DRT discovery process can reveal important details about the terms of the assignment that may be useful in negotiations or in court.
                            </p>

                            <h2 id="legal-strategy" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Developing a Winning Legal Strategy for DRT Loan Assignment Defence</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Effective legal strategy in a DRT loan assignment dispute does not follow a one-size-fits-all approach. The best lawyers for DRT loan assignment dispute defence tailor their strategies to the specific facts and documents available in each case. However, certain strategic principles consistently produce positive results across different types of assignment disputes.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The first strategic priority is buying time through legitimate legal means. Loan assignment disputes often involve imminent auction notices or possession actions that must be stopped urgently. Filing an SA before the DRT with an immediate application for an interim stay is often the first tactical move. Many DRTs will grant an ex-parte interim stay (without hearing the ARC’s side) when there is urgency and prima facie grounds are shown. This stay immediately halts the enforcement action and gives the borrower breathing room to mount a full defence.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The second strategic priority is document-driven defence. This involves a comprehensive examination of all loan documents, account statements, and ARC communications to identify every possible error, irregularity, or violation. These findings are then organized into a structured written submission or chartered accountant’s certificate that the DRT can evaluate. A document-driven defence tends to be much more persuasive than a purely legal argument because it shows concretely that the ARC’s claim is incorrect or inflated.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The third strategic priority is parallel settlement negotiation. While the legal battle continues in the DRT, experienced DRT lawyers also open a negotiation channel with the ARC. This dual-track approach is very effective because the DRT proceedings demonstrate to the ARC that the borrower is serious and capable of prolonged litigation, which motivates the ARC to offer better settlement terms. Many DRT loan assignment disputes ultimately resolve through a negotiated settlement rather than a final order from the DRT.
                            </p>

                            <h2 id="rbi-guidelines" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">RBI Guidelines on Loan Assignment and ARC Operations in 2025</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Reserve Bank of India has issued comprehensive guidelines governing loan assignments and ARC operations that are directly relevant to DRT loan assignment dispute defence. These guidelines establish the procedural framework within which both banks and ARCs must operate, and any deviation from these guidelines provides grounds for a legal challenge.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Under the RBI’s Master Direction on ARCs (2021, updated through 2025), ARCs are required to maintain a board-approved policy for their resolution and recovery strategies. They must provide borrowers with a clear communication of the assignment, including the name and contact details of the ARC’s designated officer for borrower grievances. ARCs are also required to implement a comprehensive grievance redressal mechanism that allows borrowers to escalate their complaints within the ARC’s organizational structure.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The RBI has also clarified that ARCs must follow the same Fair Practices Code as banks in their dealings with borrowers. This means they cannot engage in abusive or harassing recovery practices, must maintain proper accounting records of all amounts received, and must provide accurate account statements to borrowers on request. The 2025 updates to the RBI guidelines have also strengthened the requirement for ARCs to have a board-approved OTS policy, which creates a clear framework for settlement negotiations that borrowers can invoke.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One significant development in recent years has been the RBI’s focus on ensuring that ARC security receipts are properly valued and that the timeline for redemption is adhered to. This has put additional pressure on ARCs to resolve their NPAs within the stipulated 8-year period, making them more open to settlement with borrowers who make credible offers. DRT lawyers who track these regulatory developments use them strategically in their client’s negotiations.
                            </p>

                            <h2 id="case-timeline" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Typical Timeline of a DRT Loan Assignment Dispute Case</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Understanding the typical timeline of events in a DRT loan assignment dispute helps borrowers plan their defence strategy and set realistic expectations. While every case is unique, the general sequence of events follows a predictable pattern.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-8 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Month 1 to 3:</strong> Bank classifies the loan as NPA and begins internal proceedings. Borrower receives demand notice under Section 13(2) of SARFAESI. This is the earliest opportunity to respond and build a defence.</li>
                                    <li><strong>Month 3 to 6:</strong> Bank assigns the loan to an ARC. The ARC sends its own notice of assignment and demand. This is the point at which engaging a DRT lawyer becomes critical, as the ARC typically moves faster than the original bank.</li>
                                    <li><strong>Month 6 to 9:</strong> ARC takes symbolic possession or issues auction notice. The borrower has 45 days to file an SA before the DRT. An urgent interim stay application should be filed simultaneously.</li>
                                    <li><strong>Month 9 to 18:</strong> DRT proceedings continue with exchange of pleadings, evidence, and arguments. Settlement negotiations may run in parallel. Many cases settle during this phase.</li>
                                    <li><strong>Month 18 to 36:</strong> If not settled, the DRT proceeds to a final hearing and order. Orders can be appealed to the DRAT. Final orders from the DRAT can be challenged before the High Court.</li>
                                    <li><strong>Parallel Track - Any Stage:</strong> Settlement can be reached at any point in the above timeline. The earlier a settlement is reached, the lower the legal costs for both sides, and the more favorable the terms tend to be for the borrower.</li>
                                </ul>
                            </div>

                            <h2 id="settlement-options" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Settlement Options in DRT Loan Assignment Disputes</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While a full legal defence before the DRT is sometimes necessary, settlement with the ARC is often the most practical and cost-effective resolution of a loan assignment dispute. Understanding the different settlement options available and how to negotiate them effectively is a crucial skill that distinguishes the best lawyers for DRT loan assignment dispute defence from those who only know the litigation path.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A One-Time Settlement (OTS) is the most common form of resolution in loan assignment disputes. In an OTS, the borrower agrees to pay a lump sum amount to the ARC in full and final settlement of all claims. The ARC agrees to withdraw or not pursue further legal proceedings, and to issue a No Dues Certificate (NDC) to the borrower. The settlement amount is typically calculated as a percentage of the outstanding dues, with significant discounts available particularly for older NPAs where the ARC acquired the loan at a steep discount from the bank.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Another option is a Structured Payment Plan (SPP), where the borrower agrees to pay the settlement amount in installments over a defined period. ARCs sometimes accept this when the borrower can demonstrate a regular income or a business that is recovering. The SPP typically involves a payment schedule that must be strictly adhered to, with the entire amount becoming due immediately upon default of any installment.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In cases involving secured property, a Sale and Payoff option is sometimes available. Here, the borrower arranges a private sale of the secured property at market value and uses the proceeds to settle the outstanding dues. This approach is beneficial because it typically generates more money than an ARC auction, the surplus (if any) after paying the ARC goes to the borrower, and it avoids the stigma and potential undervaluation associated with a forced auction. Lawyers experienced in DRT assignment disputes often facilitate these transactions while managing the legal proceedings simultaneously.
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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Get Expert DRT Loan Assignment Defence Now</h3>
                                <p className="text-blue-800 mb-6">Facing an ARC’s recovery action or a DRT case related to a loan assignment? Our team of experienced DRT lawyers and debt settlement experts will analyze your case, identify your strongest defences, and build a strategy to protect your property and financial future.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book Your Free Case Review
                                </Link>
                            </div>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14 mt-12">Final Guidance: Choosing the Best Lawyer for Your DRT Loan Assignment Dispute</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are facing a DRT loan assignment dispute, the choice of legal representation can make a decisive difference to the outcome. The best lawyers for DRT loan assignment dispute defence are those who combine deep knowledge of the SARFAESI Act and RDB Act with practical experience in DRT proceedings, strong negotiation skills, and an understanding of how ARCs operate commercially.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When evaluating a lawyer for your DRT assignment dispute, look for someone who has specific experience with SA filings and DRT hearings, not just general civil litigation. Ask about their track record with cases involving ARC loan assignments, and confirm that they understand the RBI guidelines governing ARC operations. A lawyer who combines legal expertise with the ability to negotiate a favorable OTS will serve your interests far better than one who only knows the litigation path.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, our network of DRT lawyers and debt settlement specialists has handled hundreds of loan assignment disputes across India. We bring together legal expertise, regulatory knowledge, and commercial negotiation skills to deliver the best possible outcome for our clients. Whether your priority is stopping an imminent auction, challenging an incorrect NPA classification, or negotiating a fair OTS with the ARC, we have the experience and the resources to help you achieve your goals.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Do not wait until the ARC has taken possession of your property or the auction date has passed. The window for legal challenges in SARFAESI matters is strictly time-bound, and every day of delay can reduce your legal options. Reach out to our team today for a free assessment of your DRT loan assignment dispute case and take the first step toward protecting your financial future.
                            </p>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The information provided in this guide is for educational purposes and does not constitute legal advice. Every loan assignment dispute case has unique facts and requires individualized legal advice from a qualified lawyer. Please consult a qualified DRT lawyer before taking any legal action.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">DRT Assignment Case Help?</h4>
                                <p className="text-sm text-gray-600 mb-6">Facing an ARC recovery notice? Get a free legal assessment of your DRT loan assignment dispute today.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Free Case Review
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v DRT Proceedings Expert</p>
                                    <p>v ARC Negotiation Specialist</p>
                                    <p>v SARFAESI Defence Lawyer</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Legal Services</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-drt-case-defence-for-bank-loan-recovery" className="block text-sm text-blue-600 hover:underline">DRT Case Defence for Bank Loan</Link>
                                    <Link href="/best-lawyer-for-arc-loan-assignment-dispute" className="block text-sm text-blue-600 hover:underline">ARC Loan Assignment Dispute</Link>
                                    <Link href="/best-lawyer-for-secured-loan-litigation-drt" className="block text-sm text-blue-600 hover:underline">Secured Loan Litigation DRT</Link>
                                    <Link href="/best-lawyer-for-loan-settlement-during-drt" className="block text-sm text-blue-600 hover:underline">Loan Settlement During DRT</Link>
                                    <Link href="/best-lawyer-for-msme-and-business-loans" className="block text-sm text-blue-600 hover:underline">MSME and Business Loans</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
