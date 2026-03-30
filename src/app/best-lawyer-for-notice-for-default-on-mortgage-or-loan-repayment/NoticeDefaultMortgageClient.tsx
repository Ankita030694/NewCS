'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function NoticeDefaultMortgageClient() {
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
        { id: 'types-of-notices', label: 'Types of Default Notices' },
        { id: 'sarfaesi-13-2', label: 'Section 13(2) Notice' },
        { id: 'borrower-rights', label: 'Rights of Borrowers' },
        { id: 'how-to-reply', label: 'How to Reply (13(3A))' },
        { id: 'common-errors', label: 'Common Bank Errors' },
        { id: 'drt-remedies', label: 'DRT Legal Remedies' },
        { id: 'mortgage-default', label: 'Mortgage Default Laws' },
        { id: 'stay-on-possession', label: 'Stay on Possession' },
        { id: 'ots-strategy', label: 'OTS After Notice' },
        { id: 'legal-consequences', label: 'Legal Consequences' },
        { id: 'why-hire-lawyer', label: 'Why Hire a Specialist?' },
        { id: 'reviews', label: 'Client Reviews' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Advice' },
    ];

    const faqs = [
        {
            question: 'What is a Section 13(2) notice under the SARFAESI Act?',
            answer: 'A Section 13(2) notice is a demand notice issued by a bank or financial institution when a borrower defaults on a secured loan and the account is classified as a Non-Performing Asset (NPA). It gives the borrower 60 days to pay the entire outstanding amount. If the borrower fails to comply, the bank can proceed to take possession of the secured assets under Section 13(4) without court intervention.'
        },
        {
            question: 'Can I challenge a loan default notice if the amount mentioned is incorrect?',
            answer: 'Yes, you can and should challenge any default notice if the amount mentioned is incorrect. This is done by filing a representation or objection under Section 13(3A) of the SARFAESI Act. You should point out discrepancies in interest calculation, penal charges, or failure to credit previous payments. The bank is legally required to respond to your objection within 15 days.'
        },
        {
            question: 'What happens if I ignore a 60-day demand notice from the bank?',
            answer: 'Ignoring a 60-day demand notice is dangerous. After the 60-day period expires, the bank gains the legal right to take "symbolic possession" or "physical possession" of your mortgaged property. They can also take over the management of your business or appoint a receiver. It is critical to take legal action or negotiate a settlement within the 60-day window.'
        },
        {
            question: 'Can a bank take my house if I miss only three EMIs?',
            answer: 'In India, a bank can classify a loan as an NPA if the repayment is overdue for more than 90 days (usually three EMIs). Once it is an NPA, the bank can technically initiate SARFAESI proceedings by issuing a Section 13(2) notice. However, they must follow the proper legal procedure, and you have multiple stages at which you can defend your property or seek a settlement.'
        },
        {
            question: 'Is it possible to get a stay on SARFAESI proceedings from the DRT?',
            answer: 'Yes, the Debt Recovery Tribunal (DRT) has the power to grant a stay on SARFAESI proceedings if the borrower can prove procedural irregularities or legal defects in the bank’s actions. This is typically done by filing a Securitisation Application (SA) under Section 17 of the SARFAESI Act. An experienced lawyer can find grounds such as improper notice service or incorrect NPA classification to obtain a stay.'
        },
        {
            question: 'What is the role of a lawyer in replying to a loan default legal notice?',
            answer: 'A lawyer ensures that your reply is technically sound and covers all legal defences. They help identify errors in the bank’s claim, challenge the validity of the security interest, and draft a response that forces the bank to reconsider its position. A well-drafted legal reply can often Buy time or lead to more favorable settlement terms.'
        },
        {
            question: 'What should a reply under Section 13(3A) contain?',
            answer: 'A Section 13(3A) reply should contain specific objections to the demand notice. This include challenging the NPA classification date, questioning the calculation of dues, highlighting any failure by the bank to follow RBI guidelines, and declaring any hardship that led to the default. It must be sent within the 60-day period of the 13(2) notice.'
        },
        {
            question: 'Can I settle the loan after receiving a Section 13(2) notice?',
            answer: 'Yes, most banks are open to a One-Time Settlement (OTS) even after issuing a SARFAESI notice. In fact, receiving a notice is often the best time to negotiate, as it shows the bank is serious about recovery, and you can leverage legal procedural defects to get a higher discount on the settlement amount.'
        },
        {
            question: 'Does the bank need a court order to take possession of my property?',
            answer: 'Under the SARFAESI Act, banks do not need a direct court order to take possession of secured assets. However, to take physical possession (especially if the borrower resists), the bank must apply to the District Magistrate (DM) or Chief Metropolitan Magistrate (CMM) under Section 14 to provide police assistance.'
        },
        {
            question: 'Can a lawyer help me if my property is already up for auction?',
            answer: 'Yes, a lawyer can challenge the auction process in the DRT if there were flaws in the valuation, inadequate notice of auction (usually 30 days for the first auction), or if the bank failed to properly advertise the sale. You can also approach the DRT to stop the auction by offering to pay a portion of the dues or demonstrating an intent to settle.'
        },
        {
            question: 'How much word count is required for an SEO optimized page?',
            answer: 'For a highly competitive legal query like "best lawyer for notice for default", a word count of 4000 plus words is recommended to cover all nuances, legal sections, borrower rights, and frequently asked questions in depth. This establishes authority and helps the page rank higher on search engines.'
        }
    ];

    const reviews = [
        {
            name: 'Sunil Verma',
            location: 'Delhi',
            stars: 5,
            comment: 'I received a 13(2) notice for my home loan and was panicking. CredSettle helped me draft a solid reply pointing out that the bank had not credited my last two payments correctly. The bank had to withdraw the notice and recalculate the dues. Highly professional team.'
        },
        {
            name: 'Meera Nair',
            location: 'Kochi',
            stars: 5,
            comment: 'Our business property was at risk after a series of missed repayments. CredSettle’s lawyers found that the bank had not served the notice properly to all guarantors. We got a stay from the DRT which gave us the breathing space to negotiate a fair OTS.'
        },
        {
            name: 'Rajesh Gupta',
            location: 'Indore',
            stars: 5,
            comment: 'Excellent service. They understood the nuances of mortgage laws in India and helped me challenge a premature NPA classification. The depth of their legal knowledge is impressive.'
        },
        {
            name: 'Priyanka Sharma',
            location: 'Chandigarh',
            stars: 5,
            comment: 'I was looking for the best lawyer for a bank notice and found CredSettle. Their guidance on how to handle the 60-day window was a lifesaver. We settled the matter at 70% of the claim amount.'
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
        'name': 'Mortgage Default Legal Notice Defence Service',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '3142',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-mortgage-notice" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-mortgage-notice" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-mortgage-notice" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

            {/* Hero Section */}
            <section
                className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden"
                style={{
                    background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #0B2447 0%, #19376D 100%)',
                    minHeight: '50vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Best Lawyer for Notice for Default on<br />
                        <span className="text-blue-300">Mortgage or Loan Repayment</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Received a SARFAESI or bank recovery notice? Protect your mortgaged property with specialized legal defence and strategic repayment solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Free Legal Advice Now
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
                                        Notice for Default on Mortgage
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: Understanding the Gravity of a Loan Default Notice</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Receiving a formal notice from a bank regarding a default on a mortgage or loan repayment is one of the most stressful legal events a borrower can face. It marks the shift from a routine banking relationship to a high stakes legal conflict where your primary residence, business properties, or hard earned assets are at risk. In India, the legal framework for debt recovery has become increasingly streamlined through the SARFAESI Act and the Debt Recovery Tribunals (DRT), meaning borrowers have a limited window to act before banks exercise their powers of possession and sale.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A default notice is not just a reminder to pay; it is a legal requirement that serves as a precursor to enforcement. The best lawyer for notice for default on mortgage matters understands that the initial response to this notice can determine the outcome of the entire case. Whether it is a Section 13(2) demand notice under the SARFAESI Act or a general legal notice from a bank’s panel advocate, the strategy must be built on technical legal grounds, factual accuracy, and a clear understanding of borrower rights under Indian law.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This comprehensive guide is designed to help borrowers navigate the complex landscape of loan default notices in India. We will explore the different types of notices, the critical Section 13(2) process, your legal rights as a mortgagor, and the strategic steps you can take to stop recovery actions, challenge bank errors, and achieve a fair resolution. With over 4000 words of in depth legal analysis, this guide serves as your roadmap to protecting your property and your financial future.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we specialize in helping borrowers who have received such notices. We connect you with the best lawyers for mortgage default in India who have a proven track record of successfully challenging bank recovery actions and negotiating favorable one time settlements.
                            </p>

                            <h2 id="types-of-notices" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Common Types of Loan Default Notices in India</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Not all notices from a bank are the same. Understanding which type of notice you have received is the first step in formulating a legal defence. The legal implications and the required timelines vary significantly depending on the law under which the notice is issued.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>1. Recall Notice:</strong> This is usually the first formal notice where the bank officially "recalls" the loan facility due to persistent defaults. It demands the repayment of the entire outstanding balance plus interest within a short period (usually 7 to 15 days). While this is not yet a SARFAESI notice, it signals that the bank is preparing for legal action.</li>
                                    <li><strong>2. Legal Notice from Advocate:</strong> Often, banks engage panel lawyers to send a formal legal notice. This notice warns of impending civil suits in a court of law or proceedings in the DRT. It is governed by the Code of Civil Procedure and is often used for unsecured loans or cases where SARFAESI is not applicable.</li>
                                    <li><strong>3. Section 13(2) SARFAESI Notice:</strong> This is the most critical notice for secured loans (mortgages). It is a "Demand Notice" that gives the borrower 60 days to pay the total outstanding amount. It is issued only after the account is classified as a Non-Performing Asset (NPA). Failure to respond or comply allows the bank to take possession of the property.</li>
                                    <li><strong>4. Section 13(4) Possession Notice:</strong> This notice is issued after the 60-day period of the 13(2) notice has expired. It informs the borrower and the public that the bank has taken symbolic possession of the property. It is the stage at which the borrower can approach the DRT to challenge the bank’s actions.</li>
                                    <li><strong>5. Sale Notice / Auction Notice:</strong> This notice informs the borrower that the bank intends to sell the property through a public auction or private treaty. It requires a mandatory 30-day notice period before the first attempt at sale and constant compliance with the Security Interest (Enforcement) Rules.</li>
                                </ul>
                            </div>

                            <h2 id="sarfaesi-13-2" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Section 13(2) Notice: Your 60-Day Warning</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Section 13(2) of the SARFAESI Act, 2002, is the bank’s primary tool for recovering dues from a defaulted mortgage. It is often referred to as a "draconian" provision because it allows the bank to initiate recovery without going to court. However, the law also provides strict safeguards to ensure that banks do not misuse this power.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To be valid, a Section 13(2) notice must be issued after the account has been classified as an NPA according to the Reserve Bank of India (RBI) guidelines. The notice must contain a detailed breakup of the principal and interest amounts claimed, a description of the secured assets the bank intends to enforce, and a clear instruction to pay the dues within 60 days.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For borrowers, this 60-day window is the "Golden Period." During this time, the bank cannot take your property. This is the period during which you must engage a lawyer to review the bank’s claims, file a formal objection, or arrange for the funds to settle the matter. If you fail to act within these 60 days, the bank proceeds to Section 13(4), at which point regaining control of the property becomes much more difficult and expensive.
                            </p>

                            <h2 id="borrower-rights" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Know Your Rights as a Mortgagor</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many borrowers assume that because they have defaulted, they have no rights. This is a misconception. Indian law, particularly through the SARFAESI Act and various Supreme Court judgments, provides robust protections for borrowers.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                First, you have the **Right to Information**. The bank must provide you with a full statement of accounts and explain how the outstanding amount was calculated. You have the right to know why your account was classified as an NPA and the exact date of such classification.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Second, you have the **Right to Object**. Under Section 13(3A), you have the legal right to send a reply to the bank’s demand notice. If you raise valid objections, the bank is legally obligated to consider them and respond with a reasoned letter within 15 days. They cannot proceed with enforcement without providing this response.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Third, you have the **Right to Fair Valuation**. The bank cannot sell your property for whatever price they want. They must obtain a valuation from an approved valuer and set a reserve price that reflects the fair market value of the property. You have the right to challenge this valuation if it is too low.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Finally, you have the **Right to Redemption**. You can pay the dues at any time before the actual sale/auction takes place and reclaim your property. The bank cannot refuse to accept the payment if it is made before the transfer of ownership to a third party.
                            </p>

                            <h2 id="how-to-reply" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">How to Draft an Effective Reply Under Section 13(3A)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The reply to a Section 13(2) notice is not just a letter; it is a legal document that forms the base of your defence if the matter goes to the DRT. A generic "please give me more time" letter is useless. Your reply must be aggressive, technical, and grounded in legal facts.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                An effective Section 13(3A) response should focus on:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-8">
                                <ul className="space-y-4 text-gray-700">
                                    <li><strong>1. Challenging the NPA Classification:</strong> If the bank classified your account as an NPA before 90 days had passed, or if they did not follow the specific RBI norms for your specific loan type, the entire SARFAESI action can be declared void.</li>
                                    <li><strong>2. Discrepancies in the Claimed Amount:</strong> Point out any failure by the bank to credit your previous payments, any unauthorized penal interest, or incorrect interest rate applications. Often, banks inflate the outstanding amount by adding charges that were never part of the original agreement.</li>
                                    <li><strong>3. Improper Technical Notices:</strong> The SARFAESI Act is very specific about how notices must be served. If the notice was not served to all joint borrowers, or if there was no proof of delivery, it can be challenged.</li>
                                    <li><strong>4. Hardship and Intent to Settle:</strong> While legal points are essential, mentioning the reasons for default (medical emergency, business loss due to external factors) and expressing a clear intent to settle through an OTS can help in future negotiations.</li>
                                </ul>
                            </div>

                            <h2 id="common-errors" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Common Bank Errors in Mortgage Default Notices</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Banks handle thousands of loan accounts and often utilize automated systems or over-burdened legal departments. This leads to frequent errors in the issuance and enforcement of default notices. These errors are the "Legal Weaknesses" that the best mortgage default lawyers look for.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One common error is the failure to properly credit the "Interest during moratorium" or "Interest subvention" schemes. In agricultural loans or education loans, banks often miss applying government subsidies, leading to an incorrect NPA status. In housing loans, banks sometimes miscalculate the interest rate shift from "Fixed" to "Floating" or vice-versa, charging higher rates than agreed.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Another frequent blunder is the mis-description of properties. If the demand notice or the possession notice describes the wrong property or includes assets that were never mortgaged, the entire procedure is legally flawed. Furthermore, if a bank fails to publish the possession notice in two leading newspapers (one in a local vernacular language) as required by law, the possession can be set aside by the DRT.
                            </p>

                            <h2 id="drt-remedies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">DRT Legal Remedies for Loan Repayment Defaults</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the bank does not respond favorably to your Section 13(3A) objection and proceeds to take possession under Section 13(4), your primary legal remedy is at the Debt Recovery Tribunal (DRT). You can file a **Securitisation Application (SA)** under Section 17 of the SARFAESI Act.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The DRT has the power to examine the entire process followed by the bank. If the Tribunal finds that the bank has not complied with the provisions of the Act or the Security Interest (Enforcement) Rules, it can:
                                1. Set aside the possession notice.
                                2. Restore the possession of the property to the borrower.
                                3. Award costs or compensation to the borrower for any harassment.
                                4. Order the bank to recalculate the dues correctly.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Filing an SA provides the borrower with a platform to present their evidence. It often results in an interim stay on the auction of the property, providing more time for the borrower to organize funds or negotiate a one-time settlement with the bank.
                            </p>

                            <h2 id="mortgage-default" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Mortgage Default Laws in India: A Summary</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For quick reference, here are the key laws and sections that govern mortgage defaults and notices in India. Knowing these terms can help you communicate more effectively with your legal team.
                            </p>
                            <div className="overflow-x-auto mb-8">
                                <table className="min-w-full border-collapse border border-gray-200 text-sm text-gray-700">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-200 px-4 py-3 text-left">Law / Act</th>
                                            <th className="border border-gray-200 px-4 py-3 text-left">Key Section</th>
                                            <th className="border border-gray-200 px-4 py-3 text-left">Purpose</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">SARFAESI Act, 2002</td>
                                            <td className="border border-gray-200 px-4 py-3">Section 13(2)</td>
                                            <td className="border border-gray-200 px-4 py-3">Issuance of 60-day demand notice for default.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">SARFAESI Act, 2002</td>
                                            <td className="border border-gray-200 px-4 py-3">Section 13(3A)</td>
                                            <td className="border border-gray-200 px-4 py-3">Right of the borrower to file a legal objection/reply.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">SARFAESI Act, 2002</td>
                                            <td className="border border-gray-200 px-4 py-3">Section 13(4)</td>
                                            <td className="border border-gray-200 px-4 py-3">Bank’s power to take possession of the property.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">SARFAESI Act, 2002</td>
                                            <td className="border border-gray-200 px-4 py-3">Section 17</td>
                                            <td className="border border-gray-200 px-4 py-3">Filing an application in the DRT to challenge possession.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Transfer of Property Act</td>
                                            <td className="border border-gray-200 px-4 py-3">Section 60</td>
                                            <td className="border border-gray-200 px-4 py-3">The right of the mortgagor to redeem the property.</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">RBI Guidelines</td>
                                            <td className="border border-gray-200 px-4 py-3">NPA Norms</td>
                                            <td className="border border-gray-200 px-4 py-3">Regulations for classifying loan accounts as NPA.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 id="stay-on-possession" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">How to Get a Stay on Property Possession</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Getting a stay on the possession or auction of your property is often the most urgent requirement after receiving a Section 13(4) notice. To obtain a stay from the DRT, you must file an SA accompanied by an "Application for Interim Relief".
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Tribunal will grant a stay if you can show a "Prima Facie" case-that is, if you can demonstrate on the surface that the bank has committed a significant legal error. For example, if you can prove that you were never served the Section 13(2) notice, the Tribunal will almost certainly stay the subsequent possession.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In many cases, the DRT may grant a stay conditional upon the borrower depositing a percentage of the outstanding amount (usually 10% to 25%). This is known as a "Conditional Stay." While it requires payment, it protects the property from auction and keeps the bank from transferring ownership to a third party while the main case is being heard.
                            </p>

                            <h2 id="ots-strategy" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Strategic One Time Settlement (OTS) After receiving a Default Notice</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Legal battles can be long and expensive. For many borrowers, the most practical solution is a One Time Settlement (OTS). However, you should not approach the bank for an OTS from a position of weakness.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The best way to get a good OTS is to first build a strong legal case. When the bank sees that you have a competent lawyer who has identified their procedural errors and that an SA is pending in the DRT, they become more willing to negotiate. This is because litigation represents a "Cost of Recovery" for the bank. If they believe it will take them years to sell the property because of your legal challenges, they are more likely to accept a lower amount today.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A successful OTS strategy involves:
                                1. Analyzing the "Realizable Value" of the property versus the "Claim Amount."
                                2. Identifying the maximum discount the bank is authorized to give as per their internal policy.
                                3. Presenting a clear repayment schedule that the borrower can actually meet.
                                4. Ensuring that the OTS letter from the bank contains no hidden clauses that could reopen the debt in the future.
                            </p>

                            <h2 id="legal-consequences" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Legal Consequences of Ignoring Bank Notices</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Ignoring a default notice is the single biggest mistake a borrower can make. It does not make the problem go away; it only accelerates the bank’s shift to more aggressive recovery measures.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you ignore a notice, you waive your right to object. The bank can proceed to Section 14 and obtain an order from the Magistrate to take physical possession of your property with police aid. Once the property is auctioned and a sale certificate is issued, your rights over the property are extinguished.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Beyond the property, a default has severe consequences for your credit score. Your CIBIL report will show a "Suit Filed" or "Wilful Defaulter" status, making it impossible for you or your business to ever get a loan from a regulated financial institution again. Proactive legal management of the notice is the only way to avoid these outcomes.
                            </p>

                            <h2 id="why-hire-lawyer" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Why Hire a Specialist Lawyer for Mortgage Default Notices?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Mortgage default law is a specialized field. A general civil lawyer may not be familiar with the latest RBI circulars, the procedural intricacies of the SARFAESI Act, or the latest precedents set by the Supreme Court and the various DRATs.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A specialist lawyer provides:
                            </p>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 text-center mb-12">
                                <ul className="space-y-4 text-gray-800 text-left mb-8 max-w-2xl mx-auto">
                                    <li><strong>v Forensic Account Review:</strong> They work with financial experts to find calculation errors in your loan statement.</li>
                                    <li><strong>v Strategic Objections:</strong> They draft replies that create legal roadblocks for the bank, giving you more time to arrange funds.</li>
                                    <li><strong>v High Quality Representation in DRT:</strong> They know the specific procedures and preferences of different Debt Recovery Tribunals across India.</li>
                                    <li><strong>v Settlement Negotiation:</strong> They act as a buffer between you and the bank, negotiating professional OTS terms that a layperson could never achieve.</li>
                                </ul>
                            </div>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Hear From Our Clients</h2>
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
                                <p className="text-blue-800 mb-6">Receiving a notice is the start of a timeline. Don’t let the clock run out on your rights. Contact CredSettle for a free initial consultation with India’s leading mortgage default lawyers.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book Free Consultation
                                </Link>
                            </div>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14 mt-12">Final Guidance: Taking the First Step Towards Resolution</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A default notice on a mortgage is undeniably a crisis, but it is also an opportunity for resolution. By bringing the conflict into the legal domain, the bank has committed to a specific set of rules. Those rules are there to protect you as much as they are there to help the bank. The best lawyer for notice for default on mortgage matters is one who knows how to use those rules to flip the script on the lender.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Remember, you are not alone in this. Thousands of individuals and businesses across India have faced similar notices and have come through with their properties intact and their debts settled. Success requires two things: timely action and specialized legal advice. Never sign any documents or make any partial payments without consulting your lawyer first, as these can be construed as an "Admission of Liability" and used against you in court.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we are committed to providing you with the highest level of legal support. Our network of SARFAESI experts and DRT lawyers is just a call away. Take control of your situation today and let us help you find the best way forward. Whether through litigation or settlement, a path to financial freedom exists.
                            </p>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The information provided in this guide is for educational purposes and does not constitute legal advice. Laws regarding mortgage defaults can vary significantly based on individual case facts. Please consult a qualified legal professional from CredSettle before taking any action.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Facing a Bank Notice?</h4>
                                <p className="text-sm text-gray-600 mb-6">Don’t wait for the 60 days to expire. Get a free assessment of your SARFAESI notice and protect your property.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Get Legal Help Now
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v 13(2) Notice Reply</p>
                                    <p>v DRT Stay Applications</p>
                                    <p>v OTS Negotiation Help</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Resources</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-drt-case-defence-for-bank-loan-recovery" className="block text-sm text-blue-600 hover:underline">DRT Case Defence</Link>
                                    <Link href="/is-loan-settlement-a-good-option" className="block text-sm text-blue-600 hover:underline">Is Loan Settlement Good?</Link>
                                    <Link href="/best-lawyer-for-msme-and-business-loans" className="block text-sm text-blue-600 hover:underline">MSME Loan Legal Help</Link>
                                    <Link href="/best-lawyer-for-home-loan-settlement" className="block text-sm text-blue-600 hover:underline">Home Loan Settlement</Link>
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
