'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function LoanDefaultNoticeClient() {
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
        { id: 'types-of-notices', label: 'Types of Notices' },
        { id: 'first-steps', label: 'First Steps' },
        { id: 'drafting-reply', label: 'Drafting Your Reply' },
        { id: 'sarfaesi-details', label: 'SARFAESI Notice' },
        { id: 'your-rights', label: 'Your Legal Rights' },
        { id: 'drt-next', label: 'If DRT Case is Filed' },
        { id: 'settlement-options', label: 'Settlement Options' },
        { id: 'harassment-protection', label: 'Harassment Protection' },
        { id: 'choosing-lawyer', label: 'Selecting a Lawyer' },
        { id: 'npa-defence', label: 'Fighting NPA Status' },
        { id: 'case-studies', label: 'Case Studies' },
        { id: 'reviews', label: 'Client Feedback' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Conclusion' },
    ];

    const faqs = [
        {
            question: 'What is the first thing I should do after receiving a loan default notice from a bank?',
            answer: 'The first and most important action is to not ignore the notice. Read it carefully to understand the nature of the notice (demand notice, SARFAESI notice, legal notice), the outstanding amount claimed, and the deadline for response. Then engage a qualified banking lawyer immediately. Most notices have a 30 to 60-day reply window, but you should not wait until the deadline. The sooner you engage legal counsel, the more options you have. Gather all your loan documents, repayment receipts, and any previous correspondence with the bank before your first meeting with the lawyer.'
        },
        {
            question: 'Is a loan default notice the same as a legal notice under SARFAESI?',
            answer: 'No, they are different documents with different legal significance. A general loan default notice is the bank\'s informal communication alerting you to the default and asking for payment. A SARFAESI notice under Section 13(2) is a formal legal document with specific statutory consequences. Upon receiving a Section 13(2) SARFAESI notice, you have 60 days to file a representation with the bank, failing which the bank can proceed to take possession of your secured assets under Section 13(4). The SARFAESI notice is significantly more serious and requires immediate legal engagement.'
        },
        {
            question: 'Can a bank classify my loan as NPA without sending me a notice?',
            answer: 'No. Under RBI guidelines, a bank must issue a communication to the borrower before classifying a loan as NPA. Additionally, for secured loans, the bank must issue a specific 60-day notice under Section 13(2) of the SARFAESI Act before taking any recovery action. For MSME borrowers specifically, the bank must also follow the Framework for Revival and Rehabilitation before NPA classification. Any NPA classification made without following proper notification and procedural requirements is legally challengeable.'
        },
        {
            question: 'What should be included in my legal reply to a bank loan default notice?',
            answer: 'A comprehensive legal reply to a loan default notice should include: your identification details and loan account number, a clear acknowledgement that you received the notice, your strong denial of any wilful default (if applicable), your explanation of the genuine hardship that caused the default, documentary evidence supporting your hardship claim, a cross-verification of the outstanding amount stated in the notice against your own calculation, any procedural errors or factual inaccuracies in the notice, and a concrete proposal for resolution (moratorium, restructuring, or OTS offer). The reply must be sent via registered post with acknowledgement due to create a legal record.'
        },
        {
            question: 'Can I negotiate directly with the bank without a lawyer after receiving a loan default notice?',
            answer: 'Technically yes, but in practice it is extremely inadvisable. Banks have trained recovery officers and legal teams who understand banking law far better than the average borrower. Direct negotiations without legal guidance frequently result in borrowers agreeing to terms that are unfavourable, making admissions that can be used against them later, or missing critical deadlines that permanently weaken their legal position. A lawyer familiar with banking law can identify errors in the bank\'s notice, challenge the outstanding amount, and negotiate far better terms than you can on your own.'
        },
        {
            question: 'What happens if I ignore a bank loan default notice?',
            answer: 'Ignoring a loan default notice has serious consequences. For a general notice, silence is often interpreted as admission of the debt, strengthening the bank\'s legal position. For a SARFAESI Section 13(2) notice, failing to respond within the 60-day window means losing your right to raise objections to the bank\'s recovery action under that specific notice. The bank can then move to Section 13(4) and take possession of your secured assets. For MSMEs, failing to assert your MSME status during this window can deprive you of the protections of the Revival and Rehabilitation Framework. Ignoring legal notices never makes the problem go away; it always makes it worse.'
        },
        {
            question: 'Can a bank use a recovery agent to recover a loan after sending a default notice?',
            answer: 'Yes, banks can and do engage recovery agents. However, recovery agents must operate within strict RBI guidelines. They can only contact you between 8 AM and 7 PM. They must carry a proper authorization letter from the bank. They cannot use abusive language, physical force, or social shaming. They cannot contact your employers, neighbours, or family members without your consent. Any violation of these guidelines is a violation of the RBI Fair Practices Code and can be reported to the Banking Ombudsman. Such a complaint can also be used as leverage in settlement negotiations.'
        },
        {
            question: 'How long does a bank usually wait after sending a default notice before taking legal action?',
            answer: 'For unsecured loans (personal loans, credit cards), banks typically wait 90 to 180 days after the first default notice before filing a civil case or DRT application. For secured loans under SARFAESI, after the 60-day Section 13(2) notice period expires without satisfactory response, the bank can proceed immediately to Section 13(4) possession action. Banks also reserve the right to file a DRT case in parallel with SARFAESI action for loans exceeding 20 lakh rupees. The specific timeline varies by bank and by the size and type of the loan.'
        },
        {
            question: 'What is the difference between a loan moratorium and a loan restructuring?',
            answer: 'A moratorium is a temporary pause on loan repayment obligations, typically of principal payments, while interest continues to accrue. It is a short-term measure suitable for borrowers facing a temporary cash flow crisis. Loan restructuring is a more comprehensive change to the loan terms, which may include extension of tenure, reduction in interest rate, conversion of loan type, or a combination of these. Restructuring is appropriate when the borrower has a long-term change in capacity that makes the original repayment schedule unworkable but can sustain a revised payment plan. Both options can be formally requested in response to a bank default notice and should be explored with a lawyer before you default on seeking them.'
        },
        {
            question: 'Can I challenge the outstanding amount mentioned in the bank default notice?',
            answer: 'Yes, absolutely. Banks frequently make errors in calculating outstanding amounts. Common errors include: failing to credit payments already made, applying incorrect interest rates, applying compound interest where simple interest should apply, incorrectly calculating penal interest, or including charges and fees not authorised by the loan agreement. Your lawyer should request a complete, authenticated statement of account from the loan inception date and compare it against your own repayment records and the loan agreement terms. Any discrepancy can be raised as a formal objection in your reply and can reduce the outstanding amount you are legally required to pay.'
        }
    ];

    const reviews = [
        {
            name: 'Arjun Mehta',
            location: 'Bangalore',
            stars: 5,
            comment: 'Received a SARFAESI notice for my home loan and panicked completely. CredSettle connected me with an excellent lawyer who drafted a comprehensive reply within 5 days. The bank had made calculation errors totalling over 3 lakhs. We eventually restructured the loan with no auction proceedings. Forever grateful for the quick and professional help.'
        },
        {
            name: 'Kavita Narayanan',
            location: 'Hyderabad',
            stars: 5,
            comment: 'Got a loan default notice after losing my job because of a health crisis. I thought it was hopeless. My lawyer challenged the outstanding amount, got the penal interest removed, and negotiated a moratorium while I found new employment. The bank withdrew all recovery proceedings. The guidance here was truly excellent.'
        },
        {
            name: 'Deepak Sinha',
            location: 'Mumbai',
            stars: 5,
            comment: 'Recovery agents were calling me and my family members constantly after the default notice. The lawyer sent a legal notice to the bank citing RBI guidelines violations, which stopped the harassment immediately. We then negotiated an OTS at 35% of the outstanding amount. The dual approach of stopping harassment and settling the loan was handled superbly.'
        },
        {
            name: 'Neha Jain',
            location: 'Pune',
            stars: 5,
            comment: 'My business received a legal notice for a 45 lakh overdue loan. The lawyer identified that the bank had not followed the MSME Revival Framework before sending the notice. This error became our entire negotiation leverage. We got the loan restructured over 7 years with a 6-month principal moratorium. Outstanding legal strategy.'
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
        'name': 'Best Lawyer for Notice for Loan Default - CredSettle Legal Services',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '2418',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-loan-default" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-loan-default" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-loan-default" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

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
                        Best Lawyer for Notice<br />
                        <span className="text-blue-300">for Loan Default in India 2025</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Received a loan default notice from your bank? Know your rights, draft a legally sound reply, and protect your assets with expert legal guidance.
                    </p>
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
                                        Best Lawyer for Notice for Loan Default
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

            {/* 3-Column Layout */}
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Overview: What a Loan Default Notice Really Means and What You Should Do</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Receiving a loan default notice from a bank is one of those moments that freezes a borrower mid-breath. Whether it is a letter that arrives by registered post, a physical notice served at your home or office, or a formal communication handed over by a bank official, the words "loan default notice" carry an immediate weight of anxiety and uncertainty. The very first question most borrowers ask is: what do I do now?
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The honest answer is that you have more time, more rights, and more options than the notice wants you to believe. A loan default notice, even a SARFAESI Section 13(2) notice, is not a final judgment. It is the beginning of a legal process, and that process has specific procedures that the bank must follow, and specific rights that you as a borrower can exercise. The borrower who knows these rights and exercises them through the best lawyer for notice for loan default is in a fundamentally different position than the borrower who panics and does nothing.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This comprehensive guide explains everything you need to know about loan default notices in India in 2025. We cover the different types of notices, what each means legally, the step-by-step process of responding, your rights under SARFAESI and RBI guidelines, how to challenge an incorrect outstanding amount, how to explore settlement and restructuring options simultaneously, and how to protect yourself from recovery agent harassment throughout the process.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The stakes in responding to a loan default notice correctly are high. A well-prepared, legally sound reply can result in a restructuring of your loan terms, a moratorium on payments, a negotiated OTS, or the complete withdrawal of SARFAESI proceedings. A poor response, or no response at all, can result in the loss of your home, your business property, your vehicle, or your savings. This guide is your roadmap to the right response.
                            </p>

                            <h2 id="types-of-notices" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Types of Bank Default Notices: Understanding What You Have Received</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Not all loan default notices are the same. The type of notice you have received determines the urgency of your response and the specific legal options available to you. Here is a breakdown of the main types of loan default notices in India.
                            </p>
                            <div className="overflow-x-auto mb-8">
                                <table className="min-w-full border-collapse border border-gray-200 text-sm text-gray-700">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-200 px-4 py-3 text-left">Notice Type</th>
                                            <th className="border border-gray-200 px-4 py-3 text-left">Legal Basis</th>
                                            <th className="border border-gray-200 px-4 py-3 text-left">Response Deadline</th>
                                            <th className="border border-gray-200 px-4 py-3 text-left">Urgency</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">General Demand Notice</td>
                                            <td className="border border-gray-200 px-4 py-3">Loan agreement/internal bank policy</td>
                                            <td className="border border-gray-200 px-4 py-3">Usually 15 to 30 days</td>
                                            <td className="border border-gray-200 px-4 py-3 text-yellow-600">Medium</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Recall Notice</td>
                                            <td className="border border-gray-200 px-4 py-3">Loan agreement terms; account recall provisions</td>
                                            <td className="border border-gray-200 px-4 py-3">Usually 30 days</td>
                                            <td className="border border-gray-200 px-4 py-3 text-yellow-600">Medium-High</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">SARFAESI Section 13(2) Notice</td>
                                            <td className="border border-gray-200 px-4 py-3">SARFAESI Act, 2002</td>
                                            <td className="border border-gray-200 px-4 py-3">60 days from date of notice</td>
                                            <td className="border border-gray-200 px-4 py-3 text-red-600">Very High</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">DRT Summons</td>
                                            <td className="border border-gray-200 px-4 py-3">Recovery of Debts and Bankruptcy Act, 1993</td>
                                            <td className="border border-gray-200 px-4 py-3">30 days to file written statement</td>
                                            <td className="border border-gray-200 px-4 py-3 text-red-600">Critical</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">NPA Classification Notice</td>
                                            <td className="border border-gray-200 px-4 py-3">RBI Prudential Norms</td>
                                            <td className="border border-gray-200 px-4 py-3">Immediate response advisable</td>
                                            <td className="border border-gray-200 px-4 py-3 text-yellow-600">High</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most legally significant notice in the SARFAESI framework is the Section 13(2) Demand Notice. This notice formally informs you that your account has been classified as NPA and that the bank intends to exercise its SARFAESI powers to recover the outstanding dues. The 60-day window following this notice is your single most important opportunity to assert your rights, challenge the bank's claims, and propose a resolution before the bank takes physical possession of your secured assets.
                            </p>

                            <h2 id="first-steps" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">First Steps After Receiving a Loan Default Notice: The Critical 72 Hours</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The actions you take in the first 72 hours after receiving a loan default notice set the tone for everything that follows. Here is a structured approach that maximises your options and preserves your legal position.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Hour 1 to 24: Identify and Read the Notice Carefully:</strong> Do not panic. Read the notice from beginning to end at least twice. Identify what type of notice it is, the outstanding amount alleged, the date the notice was issued (important for calculating your response deadline), and what specific action the bank is demanding from you. Note any factual errors or claims that seem incorrect.</li>
                                    <li><strong>Hour 24 to 48: Gather All Relevant Documents:</strong> Collect your original loan sanction letter, loan agreement, all EMI payment receipts and bank statements, any previous correspondence with the bank, any insurance policy associated with the loan, and documents that explain the reason for your default (medical bills, termination letter, business closure proof, GST decline data). This documentation will be the foundation of your reply.</li>
                                    <li><strong>Hour 48 to 72: Engage a Specialist Banking Lawyer:</strong> Contact a lawyer who specialises in banking law and loan default matters. Share copies of the notice and all your documents in the first meeting. Ask the lawyer to identify any procedural errors in the notice, assess the accuracy of the outstanding amount, and advise on the best response strategy. A good lawyer will also advise you on simultaneously exploring restructuring or OTS options while preparing the reply.</li>
                                    <li><strong>Do Not Make Any Payments Without Legal Advice:</strong> Many borrowers, in a moment of panic, rush to make partial payments to "show goodwill." Without proper documentation and legal framing, such payments can be treated as an admission of the full outstanding amount. Any payment during this period must be structured carefully by your lawyer.</li>
                                </ul>
                            </div>

                            <h2 id="drafting-reply" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Drafting the Legal Reply: What Your Response Must Accomplish</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A legally sound reply to a bank default notice is not just a formality. It is a strategic document that accomplishes several objectives simultaneously. When drafted by an expert banking lawyer, your reply can challenge the outstanding amount, protect you from immediate SARFAESI action, open the door for restructuring or settlement negotiations, create a record of your non-wilful default, and document any procedural errors by the bank.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The structure of a comprehensive legal reply to a bank default notice should include the following elements.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light">
                                <ol className="list-decimal pl-6 space-y-4 text-gray-800">
                                    <li><strong>Formal Identification Section:</strong> Your full name, address, loan account number, the date of the notice to which you are replying, and the name and address of the bank official to whom you are sending the reply. Send via registered post with acknowledgement due, retaining a copy for your records.</li>
                                    <li><strong>Firm but Professional Denial of Wilful Default:</strong> State clearly that your default was not intentional but was caused by specific, documented circumstances. Attach supporting evidence. Differentiate yourself from a "wilful defaulter," as this distinction is critical in determining the bank's settlement willingness and in any future DRT proceedings.</li>
                                    <li><strong>Verification of Outstanding Amount:</strong> State that you have reviewed the outstanding amount claimed in the notice and that you agree/disagree with specific figures. If there are discrepancies, identify them specifically (for example: "The notice claims penal interest of Rs. X, but under Clause Y of the loan agreement, penal interest is applicable only after 90 days, not 60 days as cited"). Attach your own calculation of the correct outstanding amount.</li>
                                    <li><strong>MSME Status Assertion (if applicable):</strong> If you are an MSME registered borrower, explicitly assert your MSME status and invoke the Framework for Revival and Rehabilitation. Attach your Udyam Registration Certificate. State that the bank is obligated to follow the Revival Framework before any SARFAESI action under the Supreme Court's ruling in Pro Knits v. Canara Bank (2024).</li>
                                    <li><strong>Procedural Objections:</strong> Identify any procedural errors in the notice itself, such as incorrect NPA classification date, failure to follow correct notice service procedure, or discrepancies between the notice content and the loan agreement terms. These objections, if valid, can invalidate the notice entirely.</li>
                                    <li><strong>Proposal for Resolution:</strong> Conclude with a concrete proposal for resolution. This may be a request for a moratorium period, a proposal for restructuring with a revised repayment schedule, or an initial OTS offer. Even if the bank rejects this proposal, the fact that you made it demonstrates good faith and non-wilful default.</li>
                                </ol>
                            </div>

                            <h2 id="sarfaesi-details" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">SARFAESI Notice Survival Guide: Protecting Your Secured Assets</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For borrowers with secured loans, the Section 13(2) SARFAESI notice is the single most critical document in the entire recovery process. It is the formal trigger that starts the 60-day clock within which you must respond to potentially stop the bank from seizing your home, factory, vehicle, or other secured assets without a court order.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The SARFAESI Act was designed to help banks recover dues quickly by bypassing lengthy court proceedings. However, for this speed to be legally valid, the bank must follow every procedural step precisely. A single procedural error in the SARFAESI process can invalidate the entire action and give your lawyer grounds to seek a stay from the DRT.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Here are the SARFAESI provisions most frequently used by experienced banking lawyers to protect borrowers upon receiving a Section 13(2) notice.
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Challenging the NPA Classification Date:</strong> Under RBI norms, an account becomes NPA only after 90 consecutive days of default. If the bank has classified your account as NPA before 90 days have elapsed from the date of the first default, the entire SARFAESI action is premature and can be challenged.</li>
                                <li><strong>Challenging the Outstanding Amount:</strong> Section 13(2) requires the bank to specify the amount due and the details of security interest. If the amount stated in the notice is incorrect, this is a fatal procedural error that can set aside the notice.</li>
                                <li><strong>Notice Service Requirements:</strong> The Section 13(2) notice must be served directly to the borrower, not just posted publicly or sent to an old address. Improper service means the notice period has not started running.</li>
                                <li><strong>Bank Must Respond to Your Representation:</strong> Under Section 13(3A), after you file your representation, the bank must provide you with a reasoned reply within 15 days acknowledging and addressing your objections. A bank that simply ignores your representation and proceeds to Section 13(4) action has violated the statute.</li>
                                <li><strong>Invoking MSME Revival Framework:</strong> For MSME borrowers, asserting MSME status in the Section 13(2) reply and invoking the Revival and Rehabilitation Framework is the most powerful single action available, as it legally obligates the bank to form a committee and prepare a Corrective Action Plan before proceeding further.</li>
                            </ul>

                            <h2 id="your-rights" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Your Legal Rights After Receiving a Loan Default Notice in India</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Indian law provides borrowers with a comprehensive set of rights when they are in default. These rights exist to ensure that the recovery process is fair, transparent, and proportionate, and that genuine cases of financial hardship are distinguished from wilful defaults. Understanding these rights is the foundation of any effective response to a loan default notice.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Right to Receive a Detailed Account Statement:</strong> You have the right to receive a complete, authenticated loan account statement from the bank, showing every transaction from disbursement to the date of the notice. This is essential for verifying the outstanding amount claimed. The bank cannot refuse this request.</li>
                                    <li><strong>Right to 60 Days to Respond to SARFAESI Notice:</strong> The bank cannot take any action to realise its security interest under Section 13(4) until 60 days have elapsed from the date of the Section 13(2) demand notice. This is a mandatory statutory provision.</li>
                                    <li><strong>Right to a Reasoned Response to Your Representation:</strong> If you file a written representation or objection to the bank's demand notice, the bank must respond in writing, with reasons, within 15 days. A bank that does not respond or gives inadequate reasons is in violation of the statute.</li>
                                    <li><strong>Right to Fair Valuation of Secured Assets:</strong> If the bank proceeds to SARFAESI action, the secured assets must be valued by a qualified registered valuer. You have the right to challenge this valuation through an independent report.</li>
                                    <li><strong>Right to Redeem Your Security at Any Time Before Sale:</strong> You can redeem your mortgaged or pledged assets by paying the full outstanding amount, including all costs and charges, at any point before the final sale or transfer of the assets. This right cannot be waived by any clause in the loan agreement.</li>
                                    <li><strong>Right to the Surplus After Sale:</strong> If your assets are sold under SARFAESI and the proceeds exceed the outstanding dues and all costs, you have the absolute right to receive the surplus amount. Banks cannot retain this surplus.</li>
                                    <li><strong>Right to File an SA Before the DRT:</strong> If you are aggrieved by any SARFAESI measure taken by the bank, you can file a Securitisation Application before the relevant DRT within 45 days of the bank taking possession under Section 13(4). The DRT can grant a stay on further action, including the proposed auction.</li>
                                    <li><strong>Right to Dignity and Protection from Harassment:</strong> RBI guidelines explicitly prohibit recovery agents from using abusive language, physical force, threats, or psychological intimidation. They cannot contact you outside of business hours (8 AM to 7 PM) or at your workplace without permission. Violations are actionable before the Banking Ombudsman.</li>
                                </ul>
                            </div>

                            <h2 id="drt-next" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">What Happens If the Bank Files a DRT Case After the Default Notice?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When banks are unable to recover dues through informal demand notices or even through SARFAESI action (for example, if there is no security, or if the DRT has stayed the SARFAESI action), they file an Original Application before the Debt Recovery Tribunal. For loans exceeding 20 lakh rupees, this is the bank's primary litigation tool.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Upon filing of the OA and its admission by the DRT, the tribunal will issue summons to you as the borrower. These summons typically give you 30 days to file a written statement in defence. This deadline is absolute and must not be missed. If you do not appear or file a written statement within the deadline, the DRT can pass an ex-parte recovery certificate against you, which allows immediate enforcement action against your assets.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The moment you receive DRT summons, your defence strategy must shift into a higher gear. You now have not just a negotiation challenge but a formal legal proceeding running in parallel. Your lawyer must: file a written statement within 30 days raising all your defences, simultaneously apply for a stay on any auction proceedings pending under SARFAESI, and open structured OTS discussions with the bank at the right moment during the proceedings. The DRT track and the OTS track should run simultaneously under your lawyer's coordination.
                            </p>

                            <h2 id="settlement-options" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Settlement Options After a Loan Default Notice: What Is Available to You</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Receiving a loan default notice does not necessarily mean you must fight a prolonged legal battle. In many cases, the right response to the notice opens up settlement and restructuring options that were not formally on the table before the notice was received. Here are the main settlement pathways available after a loan default notice.
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Loan Restructuring:</strong> The most credit-positive resolution is a loan restructuring, where the bank agrees to modify the loan terms to make them sustainable. This can include extending the repayment tenure, converting a demand/working capital loan to a term loan, reducing the interest rate for a limited period, or providing a moratorium on principal repayment. Restructuring keeps the loan as "standard" on your credit report, avoiding the "Settled" tag.</li>
                                <li><strong>One-Time Settlement (OTS):</strong> If restructuring is not feasible because of a permanent change in financial capacity, an OTS allows you to pay a negotiated lump sum (typically 30 to 70% of the total outstanding, depending on the case facts) to close the account permanently. The bank withdraws all legal and SARFAESI actions upon receipt of the agreed amount and issues a No Dues Certificate. OTS results in a "Settled" status on your credit report but is far better than an "Active Default" or "Written Off" status.</li>
                                <li><strong>Moratorium Agreement:</strong> For borrowers facing a temporary cash flow crisis due to job loss, medical emergency, or business downturn, a bank may agree to a formal moratorium, typically for 3 to 12 months. During this period, no EMIs are due and no SARFAESI action or DRT filing will be made. This gives you time to stabilise your income before resuming regular repayments.</li>
                                <li><strong>Phased Repayment Plan:</strong> Some banks agree to a modified repayment plan following a default notice, where a reduced EMI is accepted for an initial period with the understanding that regular EMIs will resume after the borrower's financial situation improves. This is distinct from formal restructuring and is typically a goodwill arrangement not reported to credit bureaus as a restructuring event.</li>
                                <li><strong>Debt Consolidation:</strong> If you have multiple defaulted loans, consolidating all of them into a single restructured loan (possibly with a different lender) can simplify your obligations and potentially reduce your overall interest burden. This requires both a DRT-experienced lawyer and a financial advisor who understands banking products.</li>
                            </ul>

                            <h2 id="harassment-protection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Protecting Yourself from Recovery Agent Harassment After a Default Notice</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the period immediately following a loan default notice, banks often step up contact through recovery agents. While legitimate contact by recovery agents is allowed, there is a significant and clear boundary between lawful recovery efforts and illegal harassment. Knowing this boundary allows you to take firm action against violations, which in turn gives you additional leverage in settlement negotiations.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The RBI's guidelines on Fair Practices Code for debt recovery are explicit. Recovery agents must operate within these rules:
                            </p>
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Time Restrictions:</strong> Recovery agents can only call you or visit your home between 8:00 AM and 7:00 PM. Calls outside these hours are documented violations. Record the exact time of all calls you receive from recovery agents.</li>
                                    <li><strong>Prohibited Conduct:</strong> Recovery agents cannot use abusive or threatening language. They cannot make false claims about legal consequences (such as claiming you will be arrested for a civil debt, which is false). They cannot impersonate police officials or court officers. They cannot damage your property or use physical force.</li>
                                    <li><strong>Contact Restrictions:</strong> Recovery agents cannot contact your family members, friends, neighbours, or employers without your explicit consent. They cannot disclose your debt situation to third parties. They cannot use social media to embarrass or pressure you.</li>
                                    <li><strong>Authorization Required:</strong> Any recovery agent who visits you in person must carry and show you a written authorisation letter from the bank, clearly identifying the specific amount they are authorised to collect and the loan account to which it relates.</li>
                                    <li><strong>Your Response to Violations:</strong> Document every violation meticulously. Record phone calls if legally permitted in your state. Save every threatening text message or WhatsApp follow-up. This documentation can be used to file a complaint with the Banking Ombudsman, which is a free and effective remedy. A well-documented harassment complaint can result in significant waivers in settlement negotiations, as banks prefer to settle rather than face Ombudsman penalties and reputational damage.</li>
                                </ul>
                            </div>

                            <h2 id="choosing-lawyer" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Choosing the Best Lawyer for Your Loan Default Notice: The Key Questions to Ask</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The quality of your legal representation determines whether a loan default notice becomes a manageable situation or a financial catastrophe. Here is how to evaluate potential lawyers before making a decision.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Ask About Their SARFAESI Experience:</strong> "Have you handled SARFAESI notices before? How many? What was the typical outcome?" A lawyer with genuine SARFAESI experience will be able to describe specific procedural objections they have raised and outcomes they have achieved.</li>
                                    <li><strong>Ask About Their Knowledge of Recovery Agent Laws:</strong> "What are the specific RBI guidelines on recovery agent conduct? Have you filed Banking Ombudsman complaints before?" This question tests whether they understand the full spectrum of borrower rights, not just the courtroom dimensions.</li>
                                    <li><strong>Ask About Their Settlement Track Record:</strong> "In how many of your recent default notice cases did you achieve a settlement or restructuring rather than going to litigation? What is the typical percentage of the outstanding amount that your clients have settled for?" Honest answers to these questions give you a realistic sense of expectations.</li>
                                    <li><strong>Ask About Fees and Timeline:</strong> "What is your fee structure for handling this notice? What is the likely timeline for resolution if we go the restructuring route versus the OTS route versus the DRT defence route?" A good lawyer gives you a realistic breakdown, not just a vague reassurance.</li>
                                    <li><strong>Assess Their Responsiveness Right From the First Call:</strong> A lawyer who takes days to return your first call when you are in a time-sensitive notice situation is telling you something important about how they will handle your case when deadlines matter. Responsiveness is as important as expertise in default notice cases.</li>
                                </ul>
                            </div>

                            <h2 id="npa-defence" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Fighting NPA Status: How a Lawyer Can Challenge an Improper NPA Classification</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the most consequential aspects of a loan default notice is that it typically accompanies or immediately follows the bank classifying your loan as a Non-Performing Asset. NPA status triggers the bank's right to invoke SARFAESI, file DRT cases, and report your account to credit bureaus as a defaulter. Challenging an improper NPA classification, or preventing one from occurring, is therefore a high-priority legal objective.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                An NPA classification is legally valid only when a loan account has been overdue for more than 90 consecutive days. This sounds straightforward, but in practice, banks frequently miscount the overdue period, use incorrect base dates for calculation, or fail to account for partial payments made by the borrower that should have reset the clock. Your lawyer should carefully audit the bank's NPA classification date against your repayment records.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For MSME borrowers, as discussed throughout this guide, an additional legal layer applies. The bank must follow the Framework for Revival and Rehabilitation before classifying an MSME account as NPA. If the bank has skipped this step, the NPA classification and any SARFAESI action flowing from it is legally challengeable. The Supreme Court's ruling in Pro Knits v. Canara Bank (2024) makes the mandatory nature of this framework unambiguous, and High Courts across India have consistently applied this principle.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Even for non-MSME borrowers, if the bank classified the loan as NPA without following proper notification procedures, without giving adequate time for response, or without considering a formal restructuring request that was already pending, these procedural failures can be raised as grounds to challenge the NPA classification and the subsequent recovery action.
                            </p>

                            <h2 id="case-studies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Real Case Studies: Loan Default Notices Successfully Challenged</h2>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Case 1: SARFAESI Notice Killed by Procedural Challenge, Restructuring Achieved</h3>
                                <p className="text-gray-700 mb-4">
                                    A self-employed professional in Bangalore received a Section 13(2) SARFAESI notice for a 55 lakh home loan. The bank had classified the account as NPA 10 days before the mandatory 90-day completion period. The lawyer identified this error immediately.
                                </p>
                                <p className="text-gray-700">
                                    Result: A formal representation was sent to the bank's Nodal Officer citing the premature NPA classification and attaching the RBI Prudential Norms. The bank acknowledged the error, reversed the NPA classification, and agreed to a 2-year interest moratorium followed by extended tenure. The home was saved, and the credit report shows no NPA entry.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Case 2: Harassment Documentation Led to 60% OTS Waiver</h3>
                                <p className="text-gray-700 mb-4">
                                    A small business owner in Hyderabad received a demand notice for a 22 lakh business loan and was subjected to aggressive recovery agent harassment, including calls to his suppliers and threats of consequences that were legally false.
                                </p>
                                <p className="text-gray-700">
                                    Result: The lawyer meticulously documented the harassment and filed a formal Banking Ombudsman complaint. Simultaneously, an OTS proposal was submitted. The bank, aware of the pending Ombudsman complaint, agreed to settle at 9 lakhs (40% of the outstanding amount). The OTS agreement also required the bank to submit a report confirming all recovery activities had ceased.
                                </p>
                            </div>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Client Feedback and Success Stories</h2>
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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Received a Loan Default Notice? Act Before It Is Too Late</h3>
                                <p className="text-blue-800 mb-6">Every day without legal guidance after a loan default notice is a day of lost options. Our specialist banking lawyers can review your notice, draft a legally sound reply, challenge the outstanding amount, and simultaneously explore the best resolution path for your situation. Free first consultation.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book Your Free Consultation
                                </Link>
                            </div>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14 mt-10">Conclusion: A Loan Default Notice Is the Beginning, Not the End</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A loan default notice is a beginning, not an ending. It is the bank's opening move in a legal process that has many stages and many opportunities for skilled borrowers and their lawyers to change the outcome. The borrower who ignores the notice, the borrower who panics and makes uninformed decisions, and the borrower who engages the wrong type of legal counsel all face the worst outcomes. The borrower who immediately engages a specialist banking lawyer, follows a structured response strategy, and exercises their legal rights fully is in a dramatically better position.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Indian law provides MSME borrowers with especially powerful protections through the Revival and Rehabilitation Framework and Supreme Court precedents that make the mandatory nature of these protections clear. But even for individual borrowers with personal loans, home loans, or car loans in default, the SARFAESI framework, DRT mechanisms, and RBI guidelines on fair practice collectively offer a robust set of rights that a skilled lawyer can translate into real, tangible relief.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we understand that receiving a loan default notice is one of the most stressful experiences of a person's life. We connect borrowers with the best specialist banking lawyers across India who have the expertise to turn this crisis into a manageable legal challenge. Our lawyers draft legally sound replies, challenge incorrect outstanding amounts, stop recovery agent harassment, negotiate restructuring or OTS terms, and if needed, fight for you before the DRT. Reach out today for a free consultation.
                            </p>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The information provided in this guide is for educational purposes and does not constitute legal advice. Please consult a qualified banking lawyer before taking any action in response to a loan default notice.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Got a Default Notice?</h4>
                                <p className="text-sm text-gray-600 mb-6">Get an expert banking lawyer to review your notice, draft a reply, and protect your assets from bank recovery action. Free first consultation.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Start My Consultation
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ SARFAESI Reply Experts</p>
                                    <p>✓ DRT Defence Ready</p>
                                    <p>✓ Settle or Restructure</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Legal Guides</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-msme-business-loan-dispute" className="block text-sm text-blue-600 hover:underline">MSME Business Loan Dispute</Link>
                                    <Link href="/best-lawyer-for-loan-settlement-by-drt" className="block text-sm text-blue-600 hover:underline">DRT Loan Settlement Lawyer</Link>
                                    <Link href="/best-lawyer-for-drt-case-defence-for-bank-loan-recovery" className="block text-sm text-blue-600 hover:underline">DRT Case Defence</Link>
                                    <Link href="/best-lawyer-for-bank-harassment-for-loan" className="block text-sm text-blue-600 hover:underline">Bank Harassment Lawyer</Link>
                                    <Link href="/how-to-handle-recovery-agent-harrasment" className="block text-sm text-blue-600 hover:underline">Handle Recovery Agent Harassment</Link>
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
