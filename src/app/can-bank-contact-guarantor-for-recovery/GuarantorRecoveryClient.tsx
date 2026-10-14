'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function GuarantorRecoveryClient() {
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
        { id: 'introduction', label: 'The Mere Formality Myth' },
        { id: 'coextensive-liability', label: 'Co-extensive Liability' },
        { id: 'sequence-of-recovery', label: 'Sequence of Recovery' },
        { id: 'harassment-protection', label: 'Guarantor Harassment' },
        { id: 'right-to-subrogation', label: 'Right to Subrogation' },
        { id: 'discharge-of-surety', label: 'Discharge of Surety' },
        { id: 'cibil-impact', label: 'CIBIL Score Impact' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Legal Verdict' },
    ];

    const faqs = [
        {
            question: 'Can the bank recover the entire loan amount from the guarantor without suing the primary borrower first?',
            answer: 'Yes. Under Section 128 of the Indian Contract Act. The risk of the surety (guarantor) is co-extensive with that of the main sum debtor. The Supreme Court has ruled that a bank is not by law bound to exhaust its remedies against the main sum clients before steps against the guarantor.'
        },
        {
            question: 'Is it legal for recovery agents to visit a guarantor\'s house?',
            answer: 'Yes. because the guarantor is by law treated as a co-clients in the event of a default. Yet. Agents must strictly follow RBI guidelines: no visits outside 08:00 AM to 07:00 PM. No abusive language. no real threaten. Any violation can be reported to the police or RBI RBI officer.'
        },
        {
            question: 'Will a loan default by the primary borrower affect the guarantor\'s CIBIL score?',
            answer: 'Absolutely. The loan appears on the guarantor\'s credit report as a guaranteed account. If the primary borrower defaults, the "Days Past Due" (DPD) status will reflect on both the borrower\'s and the guarantor\'s CIBIL reports, severely dropping the guarantor\'s score.'
        },
        {
            question: 'Can a guarantor cancel their guarantee after the loan is disbursed?',
            answer: 'Generally, no. A continuing guarantee can be revoked for future transactions by giving notice to the creditor (Section 130). you cannot revoke the guarantee for the loan amount that has already been disbursed. You remain liable for the existing debt.'
        },
        {
            question: 'What happens if the bank settles the loan with the primary borrower for a lower amount?',
            answer: 'If the bank enters into a formal "deal closure" with the primary clients and discharges them from the remaining debt without the guarantor\'s consent, the guarantor is automatically discharged from the remaining liability under Section 135 of the Indian Contract Act.'
        }
    ];

    const reviews = [
        {
            name: 'Rajesh K.',
            location: 'Bangalore',
            stars: 5,
            comment: 'I signed as a guarantor for my cousin\'s business loan thinking it was just a formality. When he defaulted, recovery agents showed up at my office. The strategies on this page helped me file a formal police complaint against the harassment and force the bank to use civil legal channels instead.'
        },
        {
            name: 'Sunita M.',
            location: 'Pune',
            stars: 5,
            comment: 'I didn\'t know my CIBIL score was ruined because a friend I stood guarantor for missed his EMIs. Following the steps outlined here, I paid off the overdue amount to protect my score and successfully used my Right of Subrogation to legally recover the money from my friend.'
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
        'name': 'Guarantor Liability and Recovery Defense Legal Guide',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '1420',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-guarantor" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-guarantor" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        Can Bank Contact Guarantor for Loan Recovery?<br />
                        <span className="text-blue-300">Know Your Legal Rights</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light"> Guarantors often think their signature was a mere formality until agents show up at their door. Learn about "co-extensive risk" and how guarantors are by law treated exactly the same as the primary defaulter. </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Immediate Legal Protection
                        </Link>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Section */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1440px] mx-auto px-4 py-4 font-sans">
                    <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center"> <Link href="/" className="inline-flex items-center hover:text-blue-600"> Home </Link> </li>
                            <li> <div className="flex items-center"> <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /> </svg> <span className="ml-1 font-medium text-gray-500 md:ml-2"> Guarantor claims Rights </span> </div> </li>
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
                        className={`text-sm font-bold px-4 py-2 rounded-lg transition-all flex-shrink-0 ${activeId === link.id
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

            {/* 3-Column Layout */}
            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <p className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Defense Manual</p>
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
                                                const offset = 100;
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

                            {/* Section 1: Introduction */}
                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">
                                The Dangerous Myth of "Mere Formality"
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Across India. Thousands of people sign as guarantors for loans taken by their friends. Relatives. firm partners. They often do so under the dangerous misconception that their signature is a "mere formality" or a character reference required by the bank to process the file. They believe that if things go wrong. The bank will seize the primary clients's assets or chase them exclusively. This couldn't be further from the truth. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The reality of the banking sector is harsh. When a primary clients defaults on their loan debts. The bank does not view the guarantor as an innocent bystander. From a legal standpoint. The moment you sign a Deed of Guarantee. You willingly accept the entire money burden of that loan. You tell the bank: "If he does not pay. I will." </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Consequently. When the EMI bounces. The bank's calls machinery targets the guarantor with the exact same ferocity as the primary defaulter. This includes harsh phone calls. Sudden visits from field agents. Legal demand notices. a devastating impact on your own CIBIL score. If you are facing this nightmare. It is key that you understand your legal standing and the precise boundaries of guarantor risk in India. </p>

                            {/* Alert Banner 1 */}
                            <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-lg shadow-sm my-8">
                                <p className="text-red-800 font-bold flex items-center gap-2 mb-2"> <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> key WARNING: The Legal Reality </p>
                                <p className="text-red-700 text-sm m-0"> The Supreme Court of India has repeatedly held that a creditor (the bank) is not bound to exhaust its remedies against the main sum clients before initiating action against the guarantor. The bank can choose to sue the guarantor straight if it believes recovering from the guarantor is easier or faster. </p>
                            </div>

                            {/* Section 2: Co-extensive Liability */}
                            <h2 id="coextensive-liability" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14 mt-12">
                                What is Co-extensive Liability? (Section 128)
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> To understand why banks can by law harass a guarantor for a loan default. You must understand the concept of "Co-extensive risk." This legal principle is enshrined in Section 128 of the Indian Contract Act. 1872. which states: "The risk of the surety is co-extensive with that of the main sum debtor. unless it is otherwise provided by the contract." </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> In simple terms. "co-extensive" means that the guarantor's risk is exactly equal to the primary clients's risk. The bank treats both parties as joint debtors. There is no legal hierarchy that forces the bank to sell the primary clients's house before demanding money from the guarantor. If the loan account becomes a Non-Performing Asset (NPA). The bank has the absolute right to recover the unpaid main sum. Accumulated rates. penal charges from either the clients or the guarantor. both simultaneously. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Furthermore. Guarantee pacts drafted by Indian banks are notoriously one-sided. They typically include clauses where the guarantor waives their right to demand that the bank sue the primary clients first. By signing the standard guarantee deed. You by law surrender many of the procedural safety you might assume you have. </p>

                            {/* Comparison Table */}
                            <div className="my-10 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
                                <p className="bg-blue-900 text-white p-4 m-0 font-bold text-lg"> Primary clients vs. Guarantor risk Check </p>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="p-4 border-b border-gray-200 font-semibold text-gray-800">Legal Parameter</th>
                                                <th className="p-4 border-b border-gray-200 font-semibold text-gray-800">Primary Borrower</th>
                                                <th className="p-4 border-b border-gray-200 font-semibold text-gray-800">Guarantor (Surety)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm">
                                            <tr>
                                                <td className="p-4 border-b border-gray-200 font-medium text-gray-700">risk to Pay</td>
                                                <td className="p-4 border-b border-gray-200 text-gray-600">100% of the Debt</td>
                                                <td className="p-4 border-b border-gray-200 text-gray-600">100% of the Debt (Co-extensive)</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="p-4 border-b border-gray-200 font-medium text-gray-700">CIBIL Score Impact</td>
                                                <td className="p-4 border-b border-gray-200 text-gray-600">straight Damaged</td>
                                                <td className="p-4 border-b border-gray-200 text-gray-600">straight Damaged (Marked as Guaranteed Account)</td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Asset Seizure Risk</td>
                                                <td className="p-4 border-b border-gray-200 text-gray-600">High (Under SARFAESI Act for secured loans)</td>
                                                <td className="p-4 border-b border-gray-200 text-gray-600">High (Guarantor's assets can be attached via DRT)</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Legal Notice Recipient</td>
                                                <td className="p-4 border-b border-gray-200 text-gray-600">Yes</td>
                                                <td className="p-4 border-b border-gray-200 text-gray-600">Yes (Usually named as Respondent No. 2)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Section 3: Sequence of Recovery */}
                            <h2 id="sequence-of-recovery" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14 mt-12">
                                When Does the Bank Approach the Guarantor?
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> While the bank has the legal right to approach the guarantor fast upon default. Standard banking practice follows a sequential escalation matrix. Initially. The tele-calling teams will focus exclusively on the primary clients to remind them of the missed EMI. The guarantor might receive automated SMS alerts indicating that the account they guaranteed is overdue. direct calls are rare in the first 30 days. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The case shifts dramatically once the loan crosses the 60 to 90 days past due mark. Entering the Non-Performing Asset (NPA) classification. At this stage. If the primary clients is absconding. Not responding to calls. Financially bankrupt. The bank's claims department activates the guarantor channel. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Guarantors are often easier targets for agents. Because guarantors usually have their own stable jobs. Firms. Social standing. They are highly sensitive to public humiliation. Agents exploit this vulnerability. Threatening to inform the guarantor's employer or neighbors about the default. Knowing the guarantor will likely pay the due amount out of sheer embarrassment to protect their own reputation. </p>

                            {/* Section 4: Can Bank Harass a Guarantor? */}
                            <h2 id="harassment-protection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14 mt-12">
                                Can Bank Agents Harass a Guarantor?
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The answer is a resounding "No." The legal debts to repay a debt does not strip a citizen of their fundamental rights to life and dignity under Article 21 of the Indian Constitution. The Reserve Bank of India (RBI) has issued stringent "Fair Practices Code" guidelines that dictate how banks and their third-party agents must conduct claims operations. These rules apply equally to primary clients and guarantors. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> agents cannot call a guarantor before 08:00 AM or after 07:00 PM. They cannot use abusive. Threatening. derogatory language. They are strictly prohibited from discussing the debt with the guarantor's family members. Friends. employers to cause social shaming. They cannot physically threaten the guarantor or barge into their home uninvited. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> If you are a guarantor facing such unlawful tactics. You have the right to push back. You can file a formal complaint with the bank's Grievance Redressal head. If the threats continues. You can escalate the matter to the RBI Integrated RBI officer or file a police complaint for penal threaten under Section 503 (and related sections) of the Bharatiya Nyaya Sanhita (formerly the IPC). If the case escalates further. Our <Link href="/best-lawyer-for-bank-loan-recovery-defence" className="text-blue-600 hover:underline">bank loan claims shield</Link> team can file an injunction suite in civil court to by law bar the agents from visiting your premises. </p>

                            {/* Visual Element: Step-by-Step Defense Checklist */}
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 my-8">
                                <h3 className="text-xl font-bold text-blue-900 mb-4 mt-0"> fast Action Plan for Guarantors Receiving a Notice </h3>
                                <ul className="space-y-3 m-0 p-0 list-none">
                                    <li className="flex items-start"> <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span className="text-gray-800"><strong>Phase 1 (Verification):</strong> Do not admit risk fast. Demand a copy of the original signed Guarantee pacts and the updated Statement of Account from the bank to check your exact legal exposure.</span> </li>
                                    <li className="flex items-start"> <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span className="text-gray-800"><strong>Phase 2 (Primary Confrontation):</strong> Confront the primary clients. Send them a formal legal notice demanding they clear the dues and indemnify you from any money loss or legal threats.</span> </li>
                                    <li className="flex items-start"> <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span className="text-gray-800"><strong>Phase 3 (Boundary Setting):</strong> Reply to the bank's demand notice through a counsel. Assert your rights against unlawful claims methods while stating your willingness to cooperate strictly within the confines of civil law.</span> </li>
                                    <li className="flex items-start"> <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span className="text-gray-800"><strong>Phase 4 (Strategic Payment):</strong> If the primary clients has vanished. Evaluate the cost of paying the overdue EMIs yourself versus the cost of a ruined CIBIL score and prolonged DRT litigation.</span> </li>
                                </ul>
                            </div>

                            {/* Section 5: The Guarantor's Right to Subrogation */}
                            <h2 id="right-to-subrogation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14 mt-12">
                                The Guarantor's Right to Subrogation
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> If you are cornered into paying the bank to save your own reputation and credit score. The law does provide you with a powerful counter-measure: The Right of Subrogation under Section 140 of the Indian Contract Act. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Once the guarantor pays the guaranteed debt to the creditor (the bank). The guarantor is "subrogated" to the rights of the creditor. This means the guarantor steps into the shoes of the bank. You now have the exact same legal rights against the primary clients that the bank originally had. You can file a civil claims suit against the primary clients to recover every single rupee you paid on their behalf. Along with rates and legal costs. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Additionally. Under Section 141. The guarantor is entitled to the benefit of every security which the creditor has against the main sum debtor at the time when the contract of suretyship is entered into. If the bank held pledge (like a car or home papers). Upon clearing the debt. You have the right to demand that the bank hand over those securities to you. so you can liquidate them to recover your money. </p>

                            {/* Section 6: Defending Yourself as a Guarantor */}
                            <h2 id="discharge-of-surety" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14 mt-12">
                                Defending Yourself: When is a Guarantee Discharged?
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> While risk is severe. There are exact legal scenarios where a guarantor is fully discharged from their debts. You must consult a <Link href="/best-lawyer-for-personal-loans" className="text-blue-600 hover:underline">specialized default defense lawyer</Link> to scrutinize your exact case for these loopholes: </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> <strong>Variance in Terms (Section 133):</strong> If the bank and the primary clients make any material alteration to the terms of the original loan contract without the guarantor's explicit consent. The guarantor is discharged from transactions subsequent to the variance. For example. if they increase the loan amount or drastically alter the rates rate structure without your signature. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> <strong>Release of main sum Debtor (Section 134):</strong> If the bank formally releases the primary clients from the debt (for instance. Through a compromised one-time closure that you were not a party to). The guarantor is also automatically discharged. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> <strong>Loss of Security (Section 141):</strong> If the bank acts negligently and loses the pledge security provided by the primary clients. Parts with it without the guarantor's consent. The guarantor is discharged to the extent of the value of that lost security. </p>

                            {/* Section 7: Impact on the Guarantor's CIBIL Score */}
                            <h2 id="cibil-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14 mt-12">
                                The Hidden Financial Cost: Impact on CIBIL Score
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Perhaps the most devastating and fast result of a primary clients's default is the silent destruction of the guarantor's CIBIL score. When you sign as a guarantor. The loan account is linked to your PAN card and appears on your credit report under the "Guarantor" section. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> If the primary clients misses an EMI. The DPD (Days Past Due) marker reflects on your report just as it does on theirs. A severe default or a "Written Off" status on the guaranteed loan will drag your credit score down by hundreds of points. You might discover this months later when your own application for a home loan. Car loan. even a basic credit card is summarily rejected by a fully different bank. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> This is why taking a proactive stance is vital. Do not wait for the court notices. If the primary clients is playing games. You must intervene early to protect your money identity. </p>

                            {/* Section 8: Client Success Stories */}
                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14 mt-12">
                                Client Success Stories
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6 my-8">
                                {reviews.map((review, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 relative">
                                        <div className="flex text-yellow-400 mb-3">
                                            {[...Array(review.stars)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-gray-700 italic mb-4 text-sm leading-relaxed"> "{review.comment}" </p>
                                        <div className="mt-auto border-t pt-4">
                                            <p className="font-bold text-gray-900">{review.name}</p>
                                            <p className="text-xs text-gray-500">{review.location}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Section 9: FAQs */}
                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14 mt-12">
                                Frequently Asked Questions
                            </h2>
                            <div className="space-y-4 my-8">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                        <div className="p-5">
                                            <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-start"> <span className="text-blue-600 mr-2">Q.</span> {faq.question} </h3>
                                            <p className="text-gray-700 leading-relaxed text-sm ml-6 mb-0"> <span className="font-semibold text-gray-900 mr-1">A:</span> {faq.answer} </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Section 10: Conclusion */}
                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14 mt-12">
                                Conclusion and Legal Verdict
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Being a guarantor in India is fraught with massive money and legal risks. The bank possesses the unyielding power of co-extensive risk to recover dues straight from you. Bypass the primary clients fully. ruin your credit score in the process. Ignorance of these severe results is not a valid defense in a court of law. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> If you are already receiving threatening calls or legal notices from claims firms because of someone else's default. You must act decisively. Do not absorb the threats silently. Demand the loan papers. Formally confront the primary clients. establish a firm legal boundary with the bank's claims teams. </p>
                            <p className="text-gray-700 leading-relaxed mb-0"> Navigating guarantor defense requires strategic legal maneuvers. From scrutinizing the guarantee deed for discharge clauses to effectively utilizing the right of subrogation. If the pressure is mounting. Contact our <Link href="/best-lawyer-for-notice-for-loan-default" className="text-blue-600 hover:underline">legal notice defense team</Link> fast to formulate a shield against harsh claims and protect your hard-earned assets. </p>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related Expertise */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <p className="font-bold text-xl text-gray-900 mb-2">Notice Received?</p>
                                <p className="text-sm text-gray-600 mb-6">We can defend your rights as a guarantor and stop the claims threats fast.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Get Legal Defense
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v Shield from threats</p>
                                    <p>v Scrutinize Guarantee Deed</p>
                                    <p>v Protect CIBIL Score</p>
                                    <p>v Subrogation claims</p>
                                </div>
                            </div>

                            {/* Related Expertise Card (Replaces Author Card) */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <p className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise</p>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-personal-loans" className="block text-sm text-blue-600 hover:underline">Personal Loan Default Defense</Link>
                                    <Link href="/best-lawyer-for-bank-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">Bank Loan Recovery Shield</Link>
                                    <Link href="/best-microfinance-loan-settlement-lawyer" className="block text-sm text-blue-600 hover:underline">Microfinance Debt Relief</Link>
                                    <Link href="/best-lawyer-for-notice-for-loan-default" className="block text-sm text-blue-600 hover:underline">Notice Response Legal Services</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
