'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function MSMEBusinessLoanDisputeClient() {
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
        { id: 'msme-legal-framework', label: 'Legal Framework' },
        { id: 'when-to-hire', label: 'When to Hire' },
        { id: 'sarfaesi-rights', label: 'SARFAESI Rights' },
        { id: 'npa-defence', label: 'NPA Defence' },
        { id: 'msefc-proceedings', label: 'MSEFC Process' },
        { id: 'revival-framework', label: 'Revival Framework' },
        { id: 'ots-strategy', label: 'OTS Strategy' },
        { id: 'drt-approach', label: 'DRT Approach' },
        { id: 'choosing-lawyer', label: 'Selecting a Lawyer' },
        { id: 'case-studies', label: 'Case Studies' },
        { id: 'supreme-court', label: 'Supreme Court' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Verdict' },
    ];

    const faqs = [
        {
            question: 'Can a bank declare an MSME loan as NPA without following the revival framework?',
            answer: 'No. The Supreme Court of India in Pro Knits v. Canara Bank (2024) held that the Framework for Revival and Rehabilitation of MSMEs is mandatory. A bank cannot classify an MSME account as NPA without first constituting a board for stress relief and identifying incipient stress through Special Mention Account (SMA) categories. Any NPA declaration made without following this framework can be challenged before the Debt claims court or High Court.'
        },
        {
            question: 'What is the MSME Samadhaan portal and how does it help in loan disputes?',
            answer: 'The MSME Samadhaan portal is an online platform by the Ministry of MSME that allows MSMEs to file applications for claims of delayed payments from buyers. The application is forwarded to the respective Micro and Small Enterprise Facilitation Council (MSEFC) for conciliation. If conciliation fails. The MSEFC proceeds to arbitration. This is a faster and cheaper alternative to civil court steps for payment claims disputes.'
        },
        {
            question: 'What happens when I receive a Section 13(2) SARFAESI notice for my MSME loan?',
            answer: 'Upon receiving a Section 13(2) SARFAESI notice. You have 60 days to file written objections. You should fast assert your MSME status by providing Udyam Registration letter and invoke the Revival and Rehabilitation framework. The bank is by law obligated to pause SARFAESI steps and consider your claim. A counsel can help you draft a by law sound representation. Challenge procedural errors. settle a restructuring or OTS simultaneously.'
        },
        {
            question: 'Can I still get an OTS (One Time Settlement) if my MSME loan is already in DRT?',
            answer: 'Yes, absolutely. Even if a case has been filed before the Debt claims court. You can pursue an OTS simultaneously. In fact. The pressure of DRT steps often motivates banks to settle at more reasonable terms. A counsel experienced in DRT can represent you before the court while simultaneously settle OTS terms with the bank claims department. Once the OTS is finalised. The DRT case can be withdrawn or closed by consent.'
        },
        {
            question: 'Does the MSMED Act 2006 override the Arbitration Act for payment disputes?',
            answer: 'Yes. The Supreme Court has clarified that the MSMED Act. Being a special statute. Takes precedence over the Arbitration and Conciliation Act. 1996. Particularly for delayed payment disputes. This means MSME clients and creditors must first exhaust the MSEFC mechanism before approaching regular arbitration tribunals or civil courts. A counsel specialising in MSME law will ensure you use the correct forum to maximise your chances of success.'
        },
        {
            question: 'What is the role of the MSME Revival Committee in preventing NPA classification?',
            answer: 'Under the Framework for Revival and Rehabilitation of MSMEs. When an account enters the SMA-2 category (overdue for 61 to 90 days). The bank must form a board called the board for Stressed MSME Units. This board must prepare a Corrective Action Plan (CAP) before the account is declared NPA. If the bank fails to form this board. Any subsequent NPA classification or SARFAESI action is by law vulnerable to challenge.'
        },
        {
            question: 'How can an MSME borrower challenge an illegal auction of their business property?',
            answer: 'An MSME clients can file a Securitisation Application (SA) under Section 17 of the SARFAESI Act before the Debt claims court within 45 days of the bank taking takeover of secured assets. The DRT can grant a stay on auction steps if it finds procedural violations. Valuation errors. non-compliance with the MSME Revival Framework. This is a key remedy that requires the help of an experienced DRT counsel to prosecute effectively.'
        },
        {
            question: 'What documents should an MSME business owner gather before meeting a lawyer for a loan dispute?',
            answer: 'You should gather your Udyam Registration letter proving MSME classification. Original loan sanction letter and pacts. All payment receipts and account statements. Any previous correspondence with the bank. SARFAESI or DRT notices received. Audited money statements for the past three years. Any documentary evidence of the hardship that caused the default (such as GST returns showing firm decline. Loss of contracts. market disruptions). This helps the counsel assess your legal position quickly.'
        },
        {
            question: 'Is it possible for an MSME unit to get a moratorium on loan repayment from the bank?',
            answer: 'Yes. Under the RBI guidelines for MSMEs and the Revival and Rehabilitation Framework. Banks are empowered to offer moratoriums on main sum payments. Reduce rates rates. Convert working capital loans into term loans. extend tenure. These are corrective actions designed to help genuine MSME units survive a temporary cash flow crisis without their account being classified as NPA. A counsel can formally invoke these rules on your behalf.'
        },
        {
            question: 'How long does an MSME loan dispute case typically take in the DRT?',
            answer: 'The DRT Act mandates that cases should be disposed of within 180 days. Yet. In practice. Contested cases can take anywhere from 12 to 36 months depending on the complexity. The number of witnesses. the backlog at the exact court. Yet. Interim stays on auction steps and takeover can often be obtained within days of filing an application. Many disputes also resolve through OTS talks during the pendency of DRT steps. Making the timeline shorter.'
        }
    ];

    const reviews = [
        {
            name: 'Rajesh Agarwal',
            location: 'Pune',
            stars: 5,
            comment: 'My MSME textile unit received a SARFAESI notice and I was fully confused. CredSettle connected me with the right legal expert who filed objections asserting my MSME status. The bank had to follow the revival framework and we eventually got a restructuring instead of losing our factory. Truly life-saving assistance.'
        },
        {
            name: 'Priya Mehta',
            location: 'Surat',
            stars: 5,
            comment: 'The delayed payment from a large buyer had damaged my cash flows and my working capital loan went into SMA-2. The counsel filed through MSEFC and we recovered 18 lakhs in dues with rates. Simultaneously. The bank was convinced to give a EMI freeze. Fantastic dual-track approach.'
        },
        {
            name: 'Suresh Kumar Jain',
            location: 'Hyderabad',
            stars: 5,
            comment: 'I had a DRT case filed against my MSME. CredSettle legal team got me a stay on the auction within a week and settle an OTS at 45% of the unpaid amount including all penal rates. I got my NOC within 2 months. Highly recommend for any MSME firm loan dispute.'
        },
        {
            name: 'Anita Sharma',
            location: 'Jaipur',
            stars: 5,
            comment: 'My bank declared our MSME account NPA without forming the mandatory revival board. The counsel challenged this procedurally. which forced the bank back to the table. We restructured the loan over 7 years with a reduced EMI. The expertise in MSME-exact law made all the difference.'
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
        'name': 'Best Lawyer for MSME Business Loan Dispute - CredSettle Legal Services',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '1847',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-msme-dispute" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-msme-dispute" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-msme-dispute" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

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
                        <span className="text-blue-300">Business Loan Dispute in India</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light"> Expert legal defence for MSME clients facing NPA classification. SARFAESI notices. DRT steps and bank threats. Protect your firm today. </p>
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
                            <li className="inline-flex items-center"> <Link href="/" className="inline-flex items-center hover:text-blue-600"> Home </Link> </li>
                            <li> <div className="flex items-center"> <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /> </svg> <span className="ml-1 font-medium text-gray-500 md:ml-2"> Best counsel for MSME firm Loan Dispute </span> </div> </li>
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

            {/* 3-Column Layout */}
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Overview: Why MSME Loan Disputes Demand Specialist Legal Help</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> For India’s 63 million Micro. Small and Medium Enterprises. A firm loan is not just a money instrument. It is the lifeline that keeps production running. Workers employed. supplier relationships intact. When that lifeline is threatened by a bank’s claims action. The results go far beyond spreadsheet numbers. A wrong move can cost an entrepreneur their factory. Their home. their livelihood built over decades of hard work. This is precisely why finding the best counsel for an MSME firm loan dispute is not a luxury but an absolute necessity. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The legal landscape surrounding MSME loans in India is uniquely layered. Unlike regular clients. MSME firm owners have access to a powerful set of special safety under the Micro. Small and Medium Enterprises Development Act of 2006. The RBI’s Framework for Revival and Rehabilitation of MSMEs. multiple Supreme Court judgements that have repeatedly reinforced these safety. Yet. These rights are only useful when a clients knows they exist and has a skilled counsel to invoke them at the right moment. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The tragedy in most MSME loan disputes is not that the clients had no legal recourse. It is that they did not know about it in time. Banks and money institutions have entire legal departments working to recover dues quickly. When an MSME unit is served with a SARFAESI notice or a DRT summons. Every hour counts. Delays in responding. Errors in the reply. failure to assert MSME status at the correct stage can permanently damage your legal position. This guide is designed to give you a clear. Actionable grasp of your rights. The legal process. how to select the best possible legal representation for your MSME firm loan dispute. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Whether you are an MSME unit facing a routine delayed payment dispute. A firm owner who has received a SARFAESI takeover notice. An entrepreneur already in DRT steps. The information here will help you understand your options and take the right steps. We cover the full legal spectrum. From MSEFC filing and bank talks. To DRT litigation and One-Time closure strategy. Read through carefully. because the details matter tremendously in MSME law. </p>

                            <h2 id="msme-legal-framework" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The MSME Legal Framework: Laws That Protect Your Business</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> India has constructed a reasonably strong legal ecosystem for MSME safety. grasp the key statutes and their interaction is the first step in building a strong defence for your firm loan dispute. </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>1. The MSMED Act. 2006:</strong> This is the foundational statute for MSME safety. It defines the categories of Micro. Small and Medium enterprises. Governs delayed payment disputes between MSMEs and their buyers. empowers the Micro and Small Enterprise Facilitation Councils (MSEFCs) to arbitrate disputes. For MSME clients in a loan dispute. Simply being a registered MSME unit dramatically changes the legal playing field.</li>
                                    <li><strong>2. The SARFAESI Act. 2002:</strong> The Securitisation and Reconstruction of money Assets and Enforcement of Security rates Act empowers banks to seize and sell secured assets without court action. Yet. For MSME clients. The invocation of SARFAESI must comply with the Revival and Rehabilitation Framework. Any SARFAESI action taken without following this framework is by law vulnerable.</li>
                                    <li><strong>3. The claims of Debts and Bankruptcy Act. 1993 (RDB Act):</strong> This statute governs Debt claims court steps. Banks can file an Original Application before the DRT for claims of loans exceeding 20 lakh rupees. MSME clients have the right to file a written statement in defence and can cross-examine witnesses before the court.</li>
                                    <li><strong>4. RBI Framework for Revival and Rehabilitation of MSMEs:</strong> Issued under the MSMED Act. This framework mandates that banks must identify money stress in an MSME account through SMA categories before NPA classification. It requires the formation of a board for Stressed MSME Units to prepare a Corrective Action Plan. This is a mandatory pre-condition for NPA declaration. Not a discretionary measure.</li>
                                    <li><strong>5. RBI Guidelines on Fair Practices Code:</strong> These guidelines govern how lenders and their agents may interact with clients. claims threats, threaten. unlawful seizure are actionable violations that can be reported to the Banking RBI officer and used as leverage in closure talks.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6"> The interplay between these statutes creates both opportunities and pitfalls for MSME clients. For instance. While both the MSMED Act and the SARFAESI Act may apply to a single MSME loan dispute simultaneously. The Supreme Court has held that the MSMED Act’s special rules for MEs take precedence in delayed payment matters. Similarly. The Revival Framework overrides the standard bank NPA classification timeline in MSME cases. A specialist MSME counsel understands these overlaps and uses them strategically. </p>

                            <h2 id="when-to-hire" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">When Should an MSME Business Owner Hire a Loan Dispute Lawyer?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Many MSME firm owners delay hiring a counsel because they believe the case will resolve itself through bank discussions. because legal fees seem like an additional burden they cannot afford. This hesitation is almost always a mistake that compounds the problem. Here are the exact cases where fast legal engagement is not only advisable but key. </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Upon receiving any formal written contact from the bank:</strong> Any letter from the bank’s legal department. A demand notice. a notice under Section 13(2) of SARFAESI is a legal papers with strict timelines attached. Ignoring it or responding without legal guidance is a serious error.</li>
                                <li><strong>When your loan account enters SMA-2 status:</strong> Many MSME owners do not realise that SMA-2 (overdue for 61 to 90 days) is the stage where the bank must form the revival board. At this stage. A counsel can proactively assert your rights and prevent NPA classification.</li>
                                <li><strong>When the bank refuses to restructure despite your MSME status:</strong> If you have formally intimated your MSME registration and the bank is still refusing to follow the revival framework. A counsel can send a formal demand notice to the bank threatening legal action for non-compliance.</li>
                                <li><strong>When you receive a Section 13(4) takeover notice:</strong> This means the bank is about to take real takeover of your factory. Machinery. mortgaged home. You have only 45 days to file an SA before the DRT. Hour-level delays can be costly here.</li>
                                <li><strong>When a DRT summons is served:</strong> Upon receiving DRT summons. You typically have 30 days to file a written statement (reply). Missing this deadline results in an ex-parte order against you. fast legal engagement is non-negotiable.</li>
                                <li><strong>When buyers are delaying payments causing your loan distress:</strong> If the root cause of your loan default is a buyer who is not paying you on time. MSME Samadhaan portal filing through a counsel can recover those dues quickly and simultaneously demonstrate to the bank that your money stress was caused by an external party. Not wilful default.</li>
                            </ul>

                            <h2 id="sarfaesi-rights" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Your SARFAESI Rights as an MSME Borrower: A Detailed Breakdown</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The SARFAESI Act is one of the most powerful claims tools available to banks. it comes with an equally powerful set of clients safety. For MSME clients specifically. These rights are further strengthened by the Revival Framework. grasp each right in detail is essential. </p>
                            <div className="overflow-x-auto mb-8">
                                <table className="min-w-full border-collapse border border-gray-200 text-sm text-gray-700">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-200 px-4 py-3 text-left">SARFAESI Stage</th>
                                            <th className="border border-gray-200 px-4 py-3 text-left">Your Right</th>
                                            <th className="border border-gray-200 px-4 py-3 text-left">Timeline</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Section 13(2) Demand Notice</td>
                                            <td className="border border-gray-200 px-4 py-3">File written representation. Assert MSME status. Invoke Revival Framework</td>
                                            <td className="border border-gray-200 px-4 py-3">Within 60 days of notice</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">After Bank Rejects Representation</td>
                                            <td className="border border-gray-200 px-4 py-3">Bank must respond in writing with reasons. you can challenge before DRT</td>
                                            <td className="border border-gray-200 px-4 py-3">Bank must reply in 15 days</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Section 13(4) takeover Notice</td>
                                            <td className="border border-gray-200 px-4 py-3">File Securitisation Application before DRT for stay of takeover</td>
                                            <td className="border border-gray-200 px-4 py-3">Within 45 days of takeover</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Before Auction of Assets</td>
                                            <td className="border border-gray-200 px-4 py-3">Right to fair valuation. Public notice. Reserve price disclosure. Surplus refund</td>
                                            <td className="border border-gray-200 px-4 py-3">Before auction date</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Right of Redemption</td>
                                            <td className="border border-gray-200 px-4 py-3">Pay full unpaid amount at any point before final sale to stop steps</td>
                                            <td className="border border-gray-200 px-4 py-3">Until sale is concluded</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6"> The most key right for MSME clients is the right to invoke the Revival and Rehabilitation Framework upon receiving the Section 13(2) notice. When you submit your representation along with your Udyam Registration letter. You are by law compelling the bank to stop and evaluate your case through the mandatory MSME framework rather than the standard SARFAESI track. This single action can change the trajectory of the entire dispute. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Additionally. Banks often make procedural errors in SARFAESI steps. Such as incorrect unpaid amounts. Failure to credit payments already received. Improper service of notice. auction conducted at below-market reserve prices. A skilled MSME counsel will scrutinise every procedural step and use any error as grounds to challenge the claims action before the DRT. Many MSME units have had SARFAESI actions reversed fully on procedural grounds alone. </p>

                            <h2 id="npa-defence" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Defending Against MSME NPA Classification: Strategies That Work</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> NPA classification is the trigger that sets off the entire bank claims machinery. For an MSME firm. Being declared NPA means not just claims action on the existing loan. Also credit score destruction. Difficulty in getting new working capital. a reputational impact with suppliers and buyers who may have co-signed guarantees. Preventing NPA classification. Challenging an unlawful one. Is therefore a top priority in MSME loan disputes. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The law is clear: a bank cannot classify an MSME account as NPA without identifying incipient stress through the SMA framework. Here is what you can do at each stage: </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light">
                                <ol className="list-decimal pl-6 space-y-4 text-gray-800">
                                    <li><strong>SMA-0 Stage (1 to 30 days overdue):</strong> At this stage. Proactively write to the bank informing them of your temporary cash flow difficulties and your plan to regularise. Attach your Udyam Registration letter noting your MSME status. This creates a paper trail that shows you are not a wilful defaulter.</li>
                                    <li><strong>SMA-1 Stage (31 to 60 days overdue):</strong> Request the formation of a Joint Lenders Forum (JLF) or equivalent mechanism. ask for a Corrective Action Plan (CAP). Submit a money plan showing projected claims of cash flows with supporting evidence like pending receivables or new orders in hand.</li>
                                    <li><strong>SMA-2 Stage (61 to 90 days overdue):</strong> This is the key stage. Formally demand that the bank constitute the board for Stressed MSME Units. The bank is by law obligated to do this before classifying your account as NPA. If the bank refuses. Put this demand in writing and preserve the evidence.</li>
                                    <li><strong>If Account is Declared NPA Without Following Framework:</strong> Challenge the NPA classification fast. File a representation to the bank’s Nodal head citing the Supreme Court’s ruling in Pro Knits v. Canara Bank (2024) and demand reversal of NPA status. If the bank refuses. File an SA before the DRT or a writ petition before the High Court challenging the unlawful NPA declaration.</li>
                                    <li><strong>Challenging the unpaid Amount:</strong> Banks often inflate the unpaid amount by incorrectly applying penal rates or by not crediting partial payments. An independent audit of the loan account. Conducted by your counsel. Can reveal these errors and provide a strong numerical defence.</li>
                                    <li><strong>Arguing Force Majeure:</strong> If your MSME’s cash flow disruption was caused by an event beyond your control. Such as a pandemic. Natural disaster. Government policy change. These can be argued as force majeure factors that justify special consideration in the restructuring plan.</li>
                                </ol>
                            </div>

                            <h2 id="msefc-proceedings" className="text-3rd font-bold text-gray-900 mb-6 scroll-mt-14">MSEFC Proceedings: Recovering Delayed Payments Through MSME Samadhaan</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> While much of the MSME loan dispute discussion focuses on defending against bank claims actions. There is another crucial dimension that many firm owners overlook. Often. The root cause of an MSME loan default is that a larger buyer company has been delaying payments to the MSME for goods or services already delivered. The MSMED Act provides a dedicated mechanism to address exactly this case. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Under the MSMED Act. Any buyer who delays payment beyond the agreed period (which cannot exceed 45 days from the date of acceptance of goods or services) is liable to pay rates at three times the bank rate. MSME sellers can file an online application through the MSME Samadhaan portal. which is then forwarded to the Micro and Small Enterprise Facilitation Council (MSEFC) of the relevant state. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The MSEFC first attempts conciliation between the parties. If conciliation fails within 45 days. The Council proceeds to arbitration under the Arbitration and Conciliation Act. Using itself as the arbitral institution. This is a significantly faster mechanism than civil court litigation. The arbitral award. Once passed. Is enforceable as a decree of a civil court. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Critically. The Supreme Court has held that any buyer against whom an MSEFC application is pending cannot withdraw or challenge the jurisdiction by pointing to a separate arbitration clause in the contract. The MSMED Act’s mechanism takes precedence. This is a powerful tool. Particularly when the delayed payment is the very reason your bank loan is in distress. A successful MSEFC claims can provide you with the funds to regularise your bank account and avoid NPA classification altogether. </p>

                            <h2 id="revival-framework" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The MSME Revival Framework: How It Works and How Lawyers Use It</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The Framework for Revival and Rehabilitation of Micro. Small and Medium Enterprises. Issued by the Central Government in 2015 with legal force. Is without doubt the most powerful protective tool available to MSME clients. It was specifically designed to prevent banks from using harsh claims measures against MSME units that are in genuine money stress but are fundamentally viable. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The framework operates in several stages. First. The bank must set up a mechanism to identify incipient stress in MSME accounts before they reach NPA status. When an account enters SMA-2 status. The bank must form a board for Stressed MSME Units. Typically chaired by an experienced bank valid who is not straight involved in the sanctioning or claims of the account. This board must prepare a Corrective Action Plan (CAP) within a specified timeframe. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The CAP may include several measures: normalisation of existing facilities such as rescheduling of loan payments. Conversion of working capital loan into term loan. Fresh loan for technology upgrade or firm diversification. Rates waiver. any combination of these. The clients must be given a fair opportunity to participate in the formulation of the CAP and to provide their own representation. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> An experienced MSME counsel uses this framework in two ways. First. Proactively. By making sure the bank follows the framework correctly and at every stage. The counsel creates a paper trail of the bank’s debts and your compliance with information requirements. Second, reactively. If the bank skipped the framework and went straight to NPA classification or SARFAESI action. The counsel uses the framework non-compliance as a grounds to challenge the entire claims action in the DRT or High Court. This is not a technicality. courts have repeatedly held that non-compliance with the mandatory revival framework invalidates subsequent SARFAESI action. </p>

                            <h2 id="ots-strategy" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">OTS Strategy for MSME Borrowers: Getting the Best Deal Without Losing More</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> For MSME firms where restructuring is no longer viable due to permanent changes in the firm environment. A One-Time closure (OTS) often represents the best path to closure. An OTS allows the MSME owner to pay a settle lump sum less than the total unpaid amount. Receive a No Dues letter. move forward without the burden of a legal battle. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> yet. MSME OTS talks are different from own loan closures. Firm assets. Machinery. Stock. trade home are often involved. The bank’s calculation of a fair payout sum will factor in the realizable value of secured assets. The age of the NPA. The cost of legal steps. the likelihood of full claims through DRT or SARFAESI. A counsel who understands banking math can help you make an offer that is attractive to the bank’s internal relief board while protecting you from paying more than necessary. </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light">
                                <ol className="list-decimal pl-6 space-y-4 text-gray-800">
                                    <li><strong>firm Viability Assessment:</strong> Before proposing an OTS. Conduct an honest assessment of whether your firm can be revived. If it can. Restructuring with a counsel’s help is superior to OTS. OTS should only be pursued when the firm is genuinely non-viable in its current form.</li>
                                    <li><strong>papers the Hardship:</strong> Gather three years of audited accounts showing declining revenue. Closure orders from government. Loss of major customer contracts. market disruption data exact to your trade. This hardship proof is the foundation of your OTS talks.</li>
                                    <li><strong>Analyse the Asset Values:</strong> Get an independent market valuation of all secured assets. If the total realizable value of secured assets is significantly less than the unpaid amount. The bank has a strong incentive to settle. This gap is your settle leverage.</li>
                                    <li><strong>Time the Offer Wisely:</strong> OTS proposals made near the end of the money year (January to March) often get more sympathetic consideration. Bank managers are under pressure to reduce NPA levels before the annual balance sheet close.</li>
                                    <li><strong>Do Not settle Verbally:</strong> All closure discussions must be in writing. Never pay any amount based on a verbal promise. A formal OTS sanction letter with the bank’s seal. Authorised signatory. exact terms is the only valid basis for payment.</li>
                                    <li><strong>Get the Full Release:</strong> The OTS pacts must explicitly state that all legal steps. Including DRT cases. SARFAESI takeover notices. Any court cases. Will be withdrawn upon completion of payment. The bank must issue a No Dues letter within a specified timeframe after payment.</li>
                                </ol>
                            </div>

                            <h2 id="drt-approach" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">DRT Approach for MSME Borrowers: Defence and Counter-Attack</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> When banks file an Original Application before the Debt claims court for claims of MSME loans exceeding 20 lakh rupees. Many MSME owners feel overwhelmed by the formality of court steps. In reality. The DRT is a clients-friendly forum in several respects. It is faster than civil courts. It has exact processes for obtaining interim stays. it considers both the bank’s claims and the clients’s defences seriously. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> When an MSME clients appears before the DRT with skilled legal representation. Several defensive and offensive strategies become available. Defensively. You can challenge the bank’s calculation of unpaid dues. Question the legality of the NPA classification under the MSME Revival Framework. Dispute the valuation of secured assets. raise procedural objections to SARFAESI action. Offensively. You can file a counter-application against the bank for not following mandatory MSME safety procedures. For threats. for wrongful takeover. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The key to effective DRT representation for MSME disputes is a counsel who combines technical knowledge of DRT procedure with exact expertise in MSME law. SARFAESI. banking rules. A general civil litigator without banking law background will struggle in this forum. Look for counsel who regularly appear before DRTs and have exact experience in MSME loan matters. </p>

                            <h2 id="choosing-lawyer" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">How to Choose the Best Lawyer for Your MSME Business Loan Dispute</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Choosing the right counsel can be the difference between saving your firm and losing everything you have built. This is not a decision to make in a hurry. Here are the exact qualities and qualifications to look for. </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Specialisation in Banking and Finance Law:</strong> Your counsel must have deep expertise in SARFAESI. The RDB Act. the MSMED Act. General counsel or penal counsel are not equipped for this highly specialised area of law.</li>
                                <li><strong>DRT Experience:</strong> check that the counsel regularly appears before the Debt claims court in your jurisdiction. Ask them about recent MSME cases they have handled at the DRT and their outcomes.</li>
                                <li><strong>Knowledge of MSME-exact Case Law:</strong> The counsel should be aware of Supreme Court judgements like Pro Knits v. Canara Bank (2024) and other high court rulings on the mandatory nature of the MSME Revival Framework. This knowledge can be the decisive factor in your case.</li>
                                <li><strong>Track Record in OTS talks:</strong> If closure is on the table. The counsel’s talks skills with bank claims departments matter enormously. Ask for examples of OTS talks they have handled and the rate of the unpaid amount that clients paid.</li>
                                <li><strong>Transparent Fee Structure:</strong> Avoid counsel who charge fees based on opaque or vague criteria. A good MSME counsel will provide a clear engagement letter outlining scope of work. Fees. expected timelines.</li>
                                <li><strong>Responsiveness and Availability:</strong> MSME loan disputes often have strict legal deadlines. Your counsel must be reachable and responsive. A counsel who takes three days to reply to your calls is not suitable for time-sensitive DRT steps.</li>
                            </ul>

                            <h2 id="case-studies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Real Case Studies: MSME Loan Disputes Resolved</h2>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                                <p className="text-xl font-bold text-gray-900 mb-4">Case 1: SARFAESI Challenged on Revival Framework Non-Compliance</p>
                                <p className="text-gray-700 mb-4"> A small manufacturing MSME in Pune with a 40 lakh rupee machine loan received a Section 13(4) takeover notice from their bank after the account went into SMA-2. The bank had never formed the mandatory revival board. </p>
                                <p className="text-gray-700"> Result: A Securitisation Application was filed before the DRT within 30 days citing the Revival Framework non-compliance. The DRT granted a stay on takeover. The bank was compelled to form the board. which agreed to restructure the loan over 6 additional years with a 12-month EMI freeze on main sum. The MSME unit is fully operational today. </p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                                <p className="text-xl font-bold text-gray-900 mb-4">Case 2: MSEFC claims Enabled Bank Loan Regularisation</p>
                                <p className="text-gray-700 mb-4"> A small garment exporter in Surat had 28 lakh rupees in unpaid dues from a large retail buyer. This delayed payment caused their bank working capital loan to become SMA-2. Threatening NPA classification. </p>
                                <p className="text-gray-700"> Result: MSEFC filing led to claims of 22 lakh rupees with rates within 4 months through conciliation. This allowed the MSME to regularise the bank account before NPA classification. A parallel letter to the bank citing the MSEFC steps as evidence of non-wilful default secured a 3-month EMI freeze from the bank. </p>
                            </div>

                            <h2 id="supreme-court" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Supreme Court Judgements That Changed MSME Loan Dispute Law</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The Supreme Court of India has delivered several landmark judgements in recent years that significantly strengthen the position of MSME clients in loan disputes. Every MSME firm owner and their counsel should be aware of these precedents. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> In the landmark case of Pro Knits v. Canara Bank (2024). The Supreme Court unequivocally held that the Framework for Revival and Rehabilitation of MSMEs is mandatory in nature and not merely advisory. The court held that a bank cannot classify an MSME account as NPA without adhering to the framework’s procedures. Including the identification of incipient stress through SMA categories and the constitution of a board for stress relief. This judgement overturned lower court rulings that had treated the framework as discretionary. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The Supreme Court has also repeatedly affirmed the precedence of the MSMED Act over the Arbitration and Conciliation Act in delayed payment disputes. Making sure that MSME sellers have access to the faster MSEFC mechanism regardless of contractual arbitration clauses. These precedents form powerful legal ammunition for any MSME firm owner facing a loan dispute with a bank that has not followed mandatory procedures. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Beyond these exact judgements. Various High Courts across India have consistently held that SARFAESI actions taken without prior compliance with the MSME Revival Framework are liable to be stayed or set aside. This judicial trend reflects the courts' grasp that preserving viable MSME units is in the broader economic rates of the country. Not just in the individual firm owner’s rates. </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Client Success and Feedback</h2>
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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Protect Your MSME firm Today</h3>
                                <p className="text-blue-800 mb-6">Facing a SARFAESI notice. DRT steps or NPA classification? Our network of specialist MSME loan dispute counsel can protect your firm rights. Settle with the bank. find the fastest relief path. Don’t wait until the bank takes takeover.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book Your Free Legal Consultation
                                </Link>
                            </div>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14 mt-10">Conclusion: Your MSME Business Deserves the Best Legal Defence</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The law recognises that MSME firms are the backbone of India’s economy and deserves special safety from harsh claims actions. The MSMED Act. The Revival Framework. Supreme Court law collectively form a robust shield for MSME clients. But these safety are only as effective as the counsel who invokes them at the right moment. In the right forum. With the right evidence. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Whether you need to challenge an unlawful NPA classification. Fight a SARFAESI takeover notice. Defend before the DRT. Recover delayed payments from buyers. Settle an OTS that allows you to close your debt and move on. The right MSME firm loan dispute counsel can make all the difference between losing your firm and saving it. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> At CredSettle. We connect MSME firm owners with specialist legal experts who understand MSME law. Banking rules. DRT procedures. Our approach is practical. Responsive. focused on the fastest possible relief that protects your firm and your family. Do not face a bank with a legal department alone. Reach out today for a free consultation and let us assess the strength of your legal position. </p>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The information provided in this guide is for educational purposes and does not constitute legal advice. Please consult a qualified lawyer before taking any legal action in your MSME loan dispute matter.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <p className="font-bold text-xl text-gray-900 mb-2">Need MSME Legal Help?</p>
                                <p className="text-sm text-gray-600 mb-6">Get a specialist MSME loan dispute counsel to assess your case and protect your firm from bank claims actions.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Start My Consultation
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v MSME Law Specialists</p>
                                    <p>v DRT Defence Experts</p>
                                    <p>v Free First Consultation</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <p className="font-bold text-gray-900 mb-4 border-b pb-2">Related Legal Guides</p>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-loan-settlement-by-drt" className="block text-sm text-blue-600 hover:underline">DRT Loan Settlement Lawyer</Link>
                                    <Link href="/best-lawyer-for-notice-for-loan-default" className="block text-sm text-blue-600 hover:underline">Loan Default Notice Lawyer</Link>
                                    <Link href="/best-lawyer-for-drt-case-defence-for-bank-loan-recovery" className="block text-sm text-blue-600 hover:underline">DRT Case Defence</Link>
                                    <Link href="/best-lawyer-for-secured-loan-litigation-drt" className="block text-sm text-blue-600 hover:underline">Secured Loan Litigation</Link>
                                    <Link href="/best-lawyer-for-bank-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">Bank Loan Recovery Defence</Link>
                                    <Link href="/is-loan-settlement-a-good-option" className="block text-sm text-blue-600 hover:underline">Is Loan Settlement a Good Option?</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
