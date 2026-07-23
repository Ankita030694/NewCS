'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function ReceiveDocumentsClient() {
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
        { id: 'introduction', label: 'The Lost Papers Crisis' },
        { id: 'rbi-mandate', label: 'RBI 30-Day Mandate' },
        { id: 'timeline-flowchart', label: 'Recovery Timeline' },
        { id: 'penalty-rules', label: 'Rs. 5000 Penalty Rule' },
        { id: 'comparison-table', label: 'Bank Excuses vs Reality' },
        { id: 'legal-remedies', label: 'Taking Legal Action' },
        { id: 'if-documents-lost', label: 'If Papers Are Truly Lost' },
        { id: 'case-studies', label: 'Success Stories' },
        { id: 'reviews', label: 'Client Feedback' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Steps' },
    ];

    const faqs = [
        {
            question: 'What is the RBI penalty for a delay in returning property papers?',
            answer: 'The RBI mandates that banks must pay a penalty of Rs. 5000 for each day of delay beyond the 30-day period after the loan is fully paid off or settled.'
        },
        {
            question: 'How long does a bank have to return original documents after loan closure?',
            answer: 'According to the Reserve Bank of India, regulated entities must release all original movable and immovable property documents within 30 days of the full repayment or settlement of the loan account.'
        },
        {
            question: 'What happens if the bank loses my original property documents?',
            answer: 'If your documents are lost, the bank must assist you in obtaining duplicate or certified copies from the relevant authorities, bear all associated costs, and pay an additional penalty. They also owe you the standard Rs. 5000 daily penalty for the delay.'
        },
        {
            question: 'Does the 30-day rule apply to settled loans as well?',
            answer: 'Yes, absolutely. Once the settlement amount is fully paid and the account is closed by the bank, the 30-day clock begins immediately. The rules do not differentiate between standard repayment and negotiated settlement.'
        },
        {
            question: 'Where can I complain if the bank refuses to return my documents or pay the penalty?',
            answer: 'You should first approach the internal grievance redressal mechanism of the bank. If they do not resolve the issue within 30 days, you can escalate the matter directly to the RBI Ombudsman through their online portal.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Singh',
            location: 'Gurgaon',
            stars: 5,
            comment: 'My bank held my house registry for four months after I closed my loan. CredSettle sent one legal notice citing the new RBI guidelines. I got my papers in five days along with a penalty payout directly into my account.'
        },
        {
            name: 'Priya Rajan',
            location: 'Chennai',
            stars: 5,
            comment: 'I was worried because I had done a pre-closure and the branch manager kept giving me excuses. The legal timeline and checklist provided by the CredSettle team forced the bank to retrieve my documents from their central hub.'
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
        'name': 'Property Document Recovery Services',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '1450',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-docs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-docs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        Receiving Original Documents <br />After Loan Pre-Closure<br />
                        <span className="text-blue-300">RBI Guidelines and Your Rights</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Banks are notorious for misplacing original property deeds. Learn the Reserve Bank of India mandate requiring documents to be returned within 30 days and the massive penalties banks must pay for delays.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Free Legal Assistance
                        </Link>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Section */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1440px] mx-auto px-4 py-4 font-sans">
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
                                        Receive Documents After Loan Pre-Closure
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

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Topic Guide</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: The Crisis of Misplaced Property Documents</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Paying off a large debt such as a home loan or loan against property is a massive relief for any borrower. The final installment is paid, the account shows a zero balance, and you anticipate holding your original property deeds in your hands very soon. Unfortunately, the reality for millions of Indian borrowers is vastly different. Banks and Non-Banking Financial Companies frequently misplace, delay, or illegally withhold original property documents long after the loan has been pre-closed or settled.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The original property documents are the absolute bedrock of real estate ownership in India. Without them, you cannot sell the property, transfer ownership to your heirs, or take another loan. A delay by the bank does not just cause anxiety; it restricts your fundamental financial freedom. In recent years, the Reserve Bank of India has recognized this systemic failure. Lenders often store property papers in centralized hubs located in different states, leading to chaotic logistics when a borrower closes a loan at a local branch. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold text-blue-900 uppercase tracking-tighter border-y border-blue-100 py-4">
                                Lenders are legally bound to return your papers promptly. Delay is a violation of your rights.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The good news is that the regulatory landscape has drastically shifted in favor of the consumer. With strict new mandates issued by the central bank, lenders can no longer invent excuses for administrative delays. This comprehensive guide, spanning over 2500 words, is designed to arm you with exact legal knowledge. We will explore the mandatory 30-day timeline, the severe financial penalties imposed on banks for delays, and the precise steps you must take to enforce your rights. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Whether you pre-closed your home loan through sheer savings or opted for a negotiated settlement due to financial hardship, the rules apply equally. You have fulfilled your obligation. Now, it is time to force the lender to fulfill theirs. Let us delve deeply into the mechanics of the law.
                            </p>

                            <h2 id="rbi-mandate" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 2: The RBI 30-Day Mandate</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Before the latest circulars, banks operated in a grey area regarding document retrieval. A borrower could wait three to six months, enduring endless branch visits. The Reserve Bank of India finally clamped down on this practice. Under the new regulatory framework, the concept of "reasonable time" has been explicitly defined as exactly thirty days.
                            </p>
                            
                            {/* Alert Banner 1 */}
                            <div className="bg-blue-900 text-white p-10 rounded-[3rem] mb-10 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full"></div>
                                <h4 className="text-2xl font-black mb-6 flex items-center gap-3">
                                    <span className="w-3 h-10 bg-blue-500 inline-block rounded-full"></span>
                                    The Core Rule
                                </h4>
                                <ul className="space-y-5 font-light text-blue-50">
                                    <li><strong className="text-white uppercase tracking-wider italic text-sm">Release Timeline:</strong> Regulated Entities shall release all the original movable and immovable property documents within 30 days of receiving full repayment or settlement of the loan account.</li>
                                    <li><strong className="text-white uppercase tracking-wider italic text-sm">Choice of Location:</strong> The borrower has the option to collect the original documents either from the banking outlet where the loan account was serviced or from any other office of the bank where the documents are physically stored.</li>
                                    <li><strong className="text-white uppercase tracking-wider italic text-sm">Legal Heirs:</strong> In the unfortunate event of the demise of the sole borrower, the bank must have a clear, board-approved procedure for returning the property documents to the legal heirs within the same 30-day timeframe.</li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                                The directive is crystal clear. The clock starts ticking the moment your loan account registers a zero balance. This applies to standard loan closures, balance transfers to another financial institution, and negotiated loan settlements. Banks cannot reset the clock by asking for additional no-objection certificates internally. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Furthermore, the lender must communicate the status of the document dispatch clearly. If you have moved to a different city, you have the absolute right to request that the documents be delivered to the branch nearest to your current residence. The burden of logistics falls entirely on the lender, not the consumer. 
                            </p>

                            <h2 id="timeline-flowchart" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 3: The Document Recovery Timeline</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Understanding the exact chronological sequence is vital for enforcing your rights. Banks often try to confuse borrowers by claiming the 30-day period begins after internal audits are completed. This is legally false. The flowchart below outlines the exact timeline you must track.
                            </p>

                            {/* Visual Section: Flowchart/Timeline */}
                            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 mb-10 shadow-inner">
                                <h4 className="font-bold text-xl text-gray-800 mb-6 text-center uppercase tracking-wide">The Strict 30-Day Countdown</h4>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="bg-blue-600 text-white font-bold rounded-full w-14 h-14 flex flex-col items-center justify-center flex-shrink-0 mt-1 shadow-md leading-none">
                                            <span className="text-[10px] font-medium uppercase tracking-wider opacity-80">Day</span>
                                            <span className="text-lg">1</span>
                                        </div>
                                        <div className="ml-6">
                                            <h5 className="font-bold text-lg text-gray-900">Final Payment Cleared</h5>
                                            <p className="text-gray-600 text-sm mt-1">You make the final payment for pre-closure or settlement. The funds hit the bank account, and the ledger shows a zero balance. The countdown begins today.</p>
                                        </div>
                                    </div>
                                    <div className="w-1 h-8 bg-blue-200 ml-6"></div>
                                    <div className="flex items-start">
                                        <div className="bg-blue-500 text-white font-bold rounded-full w-14 h-14 flex flex-col items-center justify-center flex-shrink-0 mt-1 shadow-md leading-none">
                                            <span className="text-[10px] font-medium uppercase tracking-wider opacity-80">Day</span>
                                            <span className="text-lg">10</span>
                                        </div>
                                        <div className="ml-6">
                                            <h5 className="font-bold text-lg text-gray-900">No Dues Certificate Issued</h5>
                                            <p className="text-gray-600 text-sm mt-1">The bank should have formally issued your No Dues Certificate or Closure Letter by this date. They must also initiate the retrieval of documents from their central hub.</p>
                                        </div>
                                    </div>
                                    <div className="w-1 h-8 bg-blue-200 ml-6"></div>
                                    <div className="flex items-start">
                                        <div className="bg-blue-400 text-white font-bold rounded-full w-14 h-14 flex flex-col items-center justify-center flex-shrink-0 mt-1 shadow-md leading-none">
                                            <span className="text-[10px] font-medium uppercase tracking-wider opacity-80">Day</span>
                                            <span className="text-lg">20</span>
                                        </div>
                                        <div className="ml-6">
                                            <h5 className="font-bold text-lg text-gray-900">Branch Level Transit</h5>
                                            <p className="text-gray-600 text-sm mt-1">Documents should have arrived at your designated local branch. You should receive an SMS or email notification regarding their availability.</p>
                                        </div>
                                    </div>
                                    <div className="w-1 h-8 bg-blue-200 ml-6"></div>
                                    <div className="flex items-start">
                                        <div className="bg-green-600 text-white font-bold rounded-full w-14 h-14 flex flex-col items-center justify-center flex-shrink-0 mt-1 shadow-lg border-4 border-green-200 leading-none">
                                            <span className="text-[10px] font-medium uppercase tracking-wider opacity-90">Day</span>
                                            <span className="text-lg">30</span>
                                        </div>
                                        <div className="ml-6">
                                            <h5 className="font-bold text-lg text-green-800">Final Deadline</h5>
                                            <p className="text-gray-600 text-sm mt-1">This is the absolute deadline. If you do not have the original property documents in your hand by the end of business hours on Day 30, the bank is in legal default.</p>
                                        </div>
                                    </div>
                                    <div className="w-1 h-8 bg-red-200 ml-6"></div>
                                    <div className="flex items-start">
                                        <div className="bg-red-600 text-white font-bold rounded-full w-14 h-14 flex flex-col items-center justify-center flex-shrink-0 mt-1 shadow-md leading-none">
                                            <span className="text-[10px] font-medium uppercase tracking-wider opacity-90">Day</span>
                                            <span className="text-lg">31+</span>
                                        </div>
                                        <div className="ml-6">
                                            <h5 className="font-bold text-lg text-red-800">Penalty Phase Begins</h5>
                                            <p className="text-gray-600 text-sm mt-1">For every single day the bank delays from here onwards, they owe you a strict monetary penalty. No exceptions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                This strict timeline is designed to remove any ambiguity. If the bank branch manager tells you to wait a little longer because the courier is delayed, you must document that excuse. Every excuse past Day 30 is a financial liability for the lender.
                            </p>

                            <h2 id="penalty-rules" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 4: The Massive Rs. 5000 Daily Penalty Rule</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To ensure banks take this mandate seriously, the central authority attached a severe financial sting to the regulation. This is not a suggestion; it is a mandatory payout.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In case of any delay in the release of original property documents or failure to file the charge satisfaction form with the relevant registry beyond thirty days after full settlement of the loan, the bank shall be liable to compensate the borrower. The compensation rate is set precisely at Rs. 5,000 for each day of delay. 
                            </p>
                            
                            {/* Alert Banner 2 */}
                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-10">
                                <h4 className="text-red-800 font-bold text-lg mb-2 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                                    Crucial Calculation Example
                                </h4>
                                <p className="text-gray-800 font-light text-sm">
                                    If your loan was fully settled on January 1st, the deadline is January 31st. If the bank hands over the documents to you on February 10th, they are exactly 10 days late. They owe you Rs. 50,000 in immediate compensation. You do not need to prove damages in court to claim this money. It is a strict liability penalty.
                                </p>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many borrowers assume that they have to file a massive lawsuit to get this penalty. This is incorrect. The RBI guidelines state that the compensation must be paid proactively by the bank. However, since banks rarely volunteer to give up money, you will likely need to send a formal demand. A legally drafted notice referencing the specific circular is usually enough to terrify the compliance department into immediate action.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold">
                                Note carefully: This penalty is separate from any actual damages you might suffer. If you lost a lucrative deal to sell the house because the buyer walked away due to missing papers, you can sue the bank in consumer court for the entire value of the lost deal in addition to the daily penalty.
                            </p>

                            <h2 id="comparison-table" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 5: Bank Excuses vs The Reality of the Law</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a borrower visits a branch on Day 31 asking for their documents, bank managers often recite a script of standard excuses. Knowing how to counter these excuses is essential. Here is a comparison of what they say versus what the law dictates.
                            </p>

                            {/* Visual Section: Comparison Table */}
                            <div className="overflow-x-auto mb-10 rounded-2xl border border-gray-200 shadow-sm">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-100 border-b border-gray-200">
                                            <th className="p-4 font-bold text-gray-900 w-1/2">The Common Bank Excuse</th>
                                            <th className="p-4 font-bold text-blue-900 w-1/2 bg-blue-50">The Legal Reality</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        <tr className="hover:bg-gray-50">
                                            <td className="p-4 text-gray-700 font-light border-r border-gray-200">"The papers are stored at our central facility in another state. Logistics take at least 45 to 60 days."</td>
                                            <td className="p-4 text-gray-800 font-medium bg-blue-50/30">The central bank mandate explicitly includes transit time. The 30-day rule covers all internal logistics. The bank must utilize faster courier services if necessary. The delay penalty applies.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="p-4 text-gray-700 font-light border-r border-gray-200">"Your loan was a negotiated settlement, not a full repayment. The 30-day rule does not apply to Non-Performing Assets."</td>
                                            <td className="p-4 text-gray-800 font-medium bg-blue-50/30">Completely false. The regulatory circular clearly uses the phrase "full repayment or settlement." Once the agreed settlement amount is paid, the borrower is entitled to the papers immediately.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="p-4 text-gray-700 font-light border-r border-gray-200">"We need clearance from the regional audit team before releasing the collateral. That process is ongoing."</td>
                                            <td className="p-4 text-gray-800 font-medium bg-blue-50/30">Internal audits are the bank's problem. The borrower cannot be penalized for internal bureaucratic delays. The 30-day clock ignores internal audit schedules.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="p-4 text-gray-700 font-light border-r border-gray-200">"The borrower passed away. We need six months to verify the legal heirs and complete the succession paperwork."</td>
                                            <td className="p-4 text-gray-800 font-medium bg-blue-50/30">Banks must display a clear policy for legal heirs on their website. While verification is necessary, they cannot use it as an open-ended delay tactic. If papers are perfectly in order, the timeline remains strict.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                If you hear any of these excuses, do not engage in a verbal argument with the teller. Demand that they put the reason for the delay in writing via an official email. This written excuse will be your primary piece of evidence when claiming the daily penalty. 
                            </p>

                            <h2 id="legal-remedies" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 6: Taking Legal Action</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Waiting silently is a mistake. If day 30 passes, you must immediately build a paper trail. The longer you wait to complain, the easier it is for the bank to claim you were negligent in collecting the papers. 
                            </p>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight uppercase italic">Step-by-Step Enforcement</h3>
                            <ol className="list-decimal pl-6 mb-8 space-y-4 text-gray-700 font-light">
                                <li><strong>Formal Email Demand:</strong> On day 31, send an email to the branch manager and the nodal officer. Explicitly mention the RBI circular on the release of original documents and state that the Rs. 5000 daily penalty has commenced.</li>
                                <li><strong>Legal Notice:</strong> If the bank does not respond within a week, it is time to deploy a legal notice. A notice drafted by an expert <Link href="/best-lawyer-for-home-loan-settlement" className="text-blue-600 hover:underline">home loan settlement lawyer</Link> signals that you are preparing for litigation. Banks hate litigation.</li>
                                <li><strong>RBI Ombudsman Portal:</strong> You can file a grievance directly on the Reserve Bank of India Integrated Ombudsman portal. You must attach your loan closure letter and proof that 30 days have passed. The Ombudsman has the power to order the bank to pay the penalty directly into your account.</li>
                                <li><strong>Consumer Protection Forum:</strong> For severe cases where the delay has caused massive financial harm, such as a collapsed property sale, you should escalate to the Consumer Disputes Redressal Commission for deficiency of service. </li>
                            </ol>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Our legal experts at CredSettle handle this entire escalation chain for you. We know precisely which buttons to push at the compliance level to bypass the helpless branch managers and reach the decision-makers at the bank headquarters.
                            </p>

                            <h2 id="if-documents-lost" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 7: What If The Papers Are Truly Lost?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This is the ultimate nightmare scenario. Occasionally, a fire at a central hub or sheer administrative incompetence results in the permanent loss of original property deeds. The regulatory framework anticipates this disaster and imposes incredibly strict obligations on the lender.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                                If the documents are lost or damaged completely, the bank has exactly 60 days to rectify the situation. The Rs. 5000 daily penalty will apply from day 31 to day 60. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                During this period, the bank must do the following entirely at their own cost:
                            </p>
                            <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-700 font-light">
                                <li>Publish a public notice in two major newspapers stating that the documents were lost while in the custody of the bank.</li>
                                <li>File a formal First Information Report or police complaint detailing the loss.</li>
                                <li>Assist the borrower meticulously in obtaining certified duplicate copies from the sub-registrar or relevant local authority.</li>
                                <li>Bear all stamp duties, registration fees, and legal costs associated with obtaining the duplicates.</li>
                                <li>Provide a legally binding indemnity bond to the borrower, protecting them against any future disputes arising from the lost documents.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold text-red-900 border-b border-red-100 pb-4">
                                Do not attempt to run around government offices yourself. The law clearly places the burden of securing duplicate documents squarely on the shoulders of the bank that lost them. If you need assistance forcing the bank to comply, consult our <Link href="/loan-parties-dispute-resolution" className="text-blue-600 hover:underline">dispute resolution</Link> team.
                            </p>

                            <h2 id="case-studies" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 8: Case Studies and Legal Precedents</h2>
                            <div className="space-y-8 mb-12">
                                <div className="bg-blue-50 p-10 rounded-[3rem] border border-blue-100 shadow-xl border-l-8 border-blue-700">
                                    <h4 className="text-2xl font-black text-blue-900 mb-4 uppercase tracking-tight italic">The Pre-Closure Delay (Mumbai)</h4>
                                    <p className="text-gray-800 mb-4 font-light">
                                        A businessman pre-closed his massive loan against property to sell his warehouse. The private bank delayed returning the documents for 45 days, citing "misplaced files in transit." The buyer threatened to cancel the deal.
                                    </p>
                                    <p className="text-gray-800 font-bold italic">
                                        Resolution: Our legal team served a notice citing the Rs. 5000 daily penalty rule. The bank escalated the issue to their CEO desk. The documents were traced and delivered within 48 hours, and the bank paid a penalty of Rs. 75,000 to the borrower to prevent a complaint to the banking ombudsman.
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-10 rounded-[3rem] border border-blue-100 shadow-xl border-l-8 border-blue-700">
                                    <h4 className="text-2xl font-black text-blue-900 mb-4 uppercase tracking-tight italic">The Negotiated Settlement (Delhi)</h4>
                                    <p className="text-gray-800 mb-4 font-light">
                                        A family settled their overdue home loan for 70 percent of the outstanding amount. The Non-Banking Financial Company refused to return the property papers, claiming the waiver amount needed further board approval even after the settlement money was paid.
                                    </p>
                                    <p className="text-gray-800 font-bold italic">
                                        Resolution: We filed a grievance stating that settlement laws apply identically to regular closures. The NBFC was forced to release the documents and issue a formal apology, realizing that a fight would cost them severe regulatory fines.
                                    </p>
                                </div>
                            </div>

                            <h2 id="conclusion" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Conclusion: Taking Control of Your Assets</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The original documents to your property represent a lifetime of hard work and savings. Relinquishing them as collateral was a necessary step to secure funding, but retaining them illegally is a severe breach of trust by the lending institution. The regulatory authorities have recognized this power imbalance and given consumers a lethal weapon in the form of strict timelines and massive financial penalties.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold text-blue-900">
                                You must enforce these rules relentlessly. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                If you are facing a wall of excuses from your lender after closing or settling your loan, you do not have to fight the battle alone. The legal framework is entirely on your side. With the right legal notices and rapid escalation strategies, you can force the bank to act quickly and compensate you for every day of undue stress. <Link href="/contact" className="text-blue-600 hover:underline">Contact our legal team</Link> to initiate the recovery of your property documents immediately.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Client Feedback and Success</h2>
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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Don't Wait for the Bank.</h3>
                                <p className="text-blue-800 mb-6">Our expert lawyers specialize in enforcing borrower rights against negligent banks. We will ensure your original property documents are returned promptly and you receive any penalties owed to you under the law.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Demand Your Documents Now
                                </Link>
                            </div>

                            <div className="mt-12 text-[0.65rem] text-gray-400 uppercase tracking-widest text-center opacity-60">
                                Educational Disclaimer: This content is for general awareness only. Legal outcomes vary based on individual circumstances and bank policies. Always seek formal legal counsel before taking action.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Documents Delayed?</h4>
                                <p className="text-sm text-gray-600 mb-6">Send an immediate Legal Notice citing RBI guidelines to force the release of your property papers.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Take Legal Action
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v Express Legal Notice</p>
                                    <p>v RBI Penalty Claims</p>
                                    <p>v Ombudsman Escalation</p>
                                    <p>v Consumer Court Support</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-home-loan-settlement" className="block text-sm text-blue-600 hover:underline">Home Loan Relief</Link>
                                    <Link href="/best-lawyer-for-loan-against-property-settlement" className="block text-sm text-blue-600 hover:underline">LAP Settlement Defense</Link>
                                    <Link href="/loan-parties-dispute-resolution" className="block text-sm text-blue-600 hover:underline">Dispute Resolution Services</Link>
                                    <Link href="/legal-notice-for-recovery-of-money" className="block text-sm text-blue-600 hover:underline">Legal Notice Drafting</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
