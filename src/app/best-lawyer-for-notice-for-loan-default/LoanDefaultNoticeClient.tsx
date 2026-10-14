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
            answer: 'The first and most important action is to not ignore the notice. Read it carefully to understand the nature of the notice (demand notice. SARFAESI notice. Legal notice). The unpaid amount claimed. the deadline for response. Then engage a qualified banking counsel fast. Most notices have a 30 to 60-day reply window. you should not wait until the deadline. The sooner you engage legal counsel. The more options you have. Gather all your loan papers. Payment receipts. any previous correspondence with the bank before your first meeting with the counsel.'
        },
        {
            question: 'Is a loan default notice the same as a legal notice under SARFAESI?',
            answer: 'No. They are different papers with different legal significance. A general loan default notice is the bank’s informal contact alerting you to the default and asking for payment. A SARFAESI notice under Section 13(2) is a formal legal papers with exact legal results. Upon receiving a Section 13(2) SARFAESI notice. You have 60 days to file a representation with the bank. Failing which the bank can proceed to take takeover of your secured assets under Section 13(4). The SARFAESI notice is significantly more serious and requires fast legal engagement.'
        },
        {
            question: 'Can a bank classify my loan as NPA without sending me a notice?',
            answer: 'No. Under RBI guidelines. A bank must issue a contact to the clients before classifying a loan as NPA. Additionally. For secured loans. The bank must issue a exact 60-day notice under Section 13(2) of the SARFAESI Act before taking any claims action. For MSME clients specifically. The bank must also follow the Framework for Revival and Rehabilitation before NPA classification. Any NPA classification made without following proper notification and procedural requirements is by law challengeable.'
        },
        {
            question: 'What should be included in my legal reply to a bank loan default notice?',
            answer: 'A thorough legal reply to a loan default notice should include: your identification details and loan account number. A clear acknowledgement that you received the notice. Your strong denial of any wilful default (if applicable). Your explanation of the genuine hardship that caused the default. Documentary evidence supporting your hardship claim. A cross-verification of the unpaid amount stated in the notice against your own calculation. Any procedural errors or factual inaccuracies in the notice. A concrete proposal for relief (EMI freeze. Restructuring. OTS offer). The reply must be sent via registered post with acknowledgement due to create a legal record.'
        },
        {
            question: 'Can I negotiate directly with the bank without a lawyer after receiving a loan default notice?',
            answer: 'Technically yes. in practice it is extremely inadvisable. Banks have trained claims heads and legal teams who understand banking law far better than the average clients. Direct talks without legal guidance often result in clients agreeing to terms that are unfavourable. Making admissions that can be used against them later. missing key deadlines that permanently weaken their legal position. A counsel familiar with banking law can identify errors in the bank’s notice. Challenge the unpaid amount. settle far better terms than you can on your own.'
        },
        {
            question: 'What happens if I ignore a bank loan default notice?',
            answer: 'Ignoring a loan default notice has serious results. For a general notice. Silence is often interpreted as admission of the debt. Strengthening the bank’s legal position. For a SARFAESI Section 13(2) notice. Failing to respond within the 60-day window means losing your right to raise objections to the bank’s claims action under that exact notice. The bank can then move to Section 13(4) and take takeover of your secured assets. For MSMEs. Failing to assert your MSME status during this window can deprive you of the safety of the Revival and Rehabilitation Framework. Ignoring legal notices never makes the problem go away. it always makes it worse.'
        },
        {
            question: 'Can a bank use a recovery agent to recover a loan after sending a default notice?',
            answer: 'Yes. Banks can and do engage agents. Yet. Agents must operate within strict RBI guidelines. They can only contact you between 8 AM and 7 PM. They must carry a proper authorization letter from the bank. They cannot use abusive language. Real force. social shaming. They cannot contact your employers. Neighbours. family members without your consent. Any violation of these guidelines is a violation of the RBI Fair Practices Code and can be reported to the Banking RBI officer. Such a complaint can also be used as leverage in closure talks.'
        },
        {
            question: 'How long does a bank usually wait after sending a default notice before taking legal action?',
            answer: 'For clean loans (own loans. Credit cards). Banks typically wait 90 to 180 days after the first default notice before filing a civil case or DRT application. For secured loans under SARFAESI. After the 60-day Section 13(2) notice period expires without satisfactory response. The bank can proceed fast to Section 13(4) takeover action. Banks also reserve the right to file a DRT case in parallel with SARFAESI action for loans exceeding 20 lakh rupees. The exact timeline varies by bank and by the size and type of the loan.'
        },
        {
            question: 'What is the difference between a loan moratorium and a loan restructuring?',
            answer: 'A EMI freeze is a temporary pause on loan payment debts. Typically of main sum payments. while rates continues to accrue. It is a short-term measure suitable for clients facing a temporary cash flow crisis. Loan restructuring is a more thorough change to the loan terms. Which may include extension of tenure. Reduction in rates rate. Conversion of loan type. a combination of these. Restructuring is appropriate when the clients has a long-term change in capacity that makes the original payment schedule unworkable but can sustain a revised payment plan. Both options can be formally requested in response to a bank default notice and should be explored with a counsel before you default on seeking them.'
        },
        {
            question: 'Can I challenge the outstanding amount mentioned in the bank default notice?',
            answer: 'Yes, absolutely. Banks often make errors in calculating unpaid amounts. Common errors include: failing to credit payments already made. Applying incorrect rates rates. Applying compound rates where simple rates should apply. Incorrectly calculating penal rates. including charges and fees not authorised by the loan pacts. Your counsel should request a complete. Authenticated statement of account from the loan inception date and compare it against your own payment records and the loan pacts terms. Any discrepancy can be raised as a formal objection in your reply and can reduce the unpaid amount you are by law required to pay.'
        }
    ];

    const reviews = [
        {
            name: 'Arjun Mehta',
            location: 'Bangalore',
            stars: 5,
            comment: 'Received a SARFAESI notice for my home loan and panicked fully. CredSettle connected me with an excellent counsel who drafted a thorough reply within 5 days. The bank had made calculation errors totalling over 3 lakhs. We eventually restructured the loan with no auction steps. Forever grateful for the quick and experts help.'
        },
        {
            name: 'Kavita Narayanan',
            location: 'Hyderabad',
            stars: 5,
            comment: 'Got a loan default notice after losing my job because of a health crisis. I thought it was hopeless. My counsel challenged the unpaid amount. Got the penal rates removed. settle a EMI freeze while I found new employment. The bank withdrew all claims steps. The guidance here was truly excellent.'
        },
        {
            name: 'Deepak Sinha',
            location: 'Mumbai',
            stars: 5,
            comment: 'agents were calling me and my family members constantly after the default notice. The counsel sent a legal notice to the bank citing RBI guidelines violations. which stopped the threats fast. We then settle an OTS at 35% of the unpaid amount. The dual approach of stopping threats and settling the loan was handled superbly.'
        },
        {
            name: 'Neha Jain',
            location: 'Pune',
            stars: 5,
            comment: 'My firm received a legal notice for a 45 lakh overdue loan. The counsel identified that the bank had not followed the MSME Revival Framework before sending the notice. This error became our entire talks leverage. We got the loan restructured over 7 years with a 6-month main sum EMI freeze. unpaid legal strategy.'
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
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light"> Received a loan default notice from your bank? Know your rights. Draft a by law sound reply. protect your assets with expert legal guidance. </p>
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
                            <li> <div className="flex items-center"> <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /> </svg> <span className="ml-1 font-medium text-gray-500 md:ml-2"> Best counsel for Notice for Loan Default </span> </div> </li>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">What a Loan Default Notice Means and What You Should Do</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Receiving a loan default notice from a bank is one of those moments that freezes a clients mid-breath. Whether it is a letter that arrives by registered post. A real notice served at your home or office. A formal contact handed over by a bank valid. The words "loan default notice" carry an fast weight of anxiety and uncertainty. The very first question most clients ask is: what do I do now? </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The honest answer is that you have more time. More rights. more options than the notice wants you to believe. A loan default notice. Even a SARFAESI Section 13(2) notice. Is not a final judgment. It is the beginning of a legal process. that process has exact procedures that the bank must follow. exact rights that you as a clients can exercise. The clients who knows these rights and exercises them through the best counsel for notice for loan default is in a fundamentally different position than the clients who panics and does nothing. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> This thorough guide explains everything you need to know about loan default notices in India in 2025. We cover the different types of notices. What each means by law. The step-by-step process of responding. Your rights under SARFAESI and RBI guidelines. How to challenge an incorrect unpaid amount. How to explore closure and restructuring options simultaneously. how to protect yourself from agents threats throughout the process. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The stakes in responding to a loan default notice correctly are high. A well-prepared. By law sound reply can result in a restructuring of your loan terms. A EMI freeze on payments. A settle OTS. the complete withdrawal of SARFAESI steps. A poor response. No response at all. Can result in the loss of your home. Your firm home. Your vehicle. your savings. This guide is your roadmap to the right response. </p>

                            <h2 id="types-of-notices" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Types of Bank Default Notices: Understanding What You Have Received</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Not all loan default notices are the same. The type of notice you have received determines the urgency of your response and the exact legal options available to you. Here is a breakdown of the main types of loan default notices in India. </p>
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
                                            <td className="border border-gray-200 px-4 py-3">Loan pacts/internal bank policy</td>
                                            <td className="border border-gray-200 px-4 py-3">Usually 15 to 30 days</td>
                                            <td className="border border-gray-200 px-4 py-3 text-yellow-600">Medium</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Recall Notice</td>
                                            <td className="border border-gray-200 px-4 py-3">Loan pacts terms. account recall rules</td>
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
                                            <td className="border border-gray-200 px-4 py-3">Claims of Debts and Bankruptcy Act. 1993</td>
                                            <td className="border border-gray-200 px-4 py-3">30 days to file written statement</td>
                                            <td className="border border-gray-200 px-4 py-3 text-red-600">key</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">NPA Classification Notice</td>
                                            <td className="border border-gray-200 px-4 py-3">RBI Prudential Norms</td>
                                            <td className="border border-gray-200 px-4 py-3">fast response advisable</td>
                                            <td className="border border-gray-200 px-4 py-3 text-yellow-600">High</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6"> The most by law significant notice in the SARFAESI framework is the Section 13(2) Demand Notice. This notice formally informs you that your account has been classified as NPA and that the bank intends to exercise its SARFAESI powers to recover the unpaid dues. The 60-day window following this notice is your single most important opportunity to assert your rights. Challenge the bank’s claims. propose a relief before the bank takes real takeover of your secured assets. </p>

                            <h2 id="first-steps" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">First Steps After Receiving a Loan Default Notice</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The actions you take in the first 72 hours after receiving a loan default notice set the tone for everything that follows. Here is a structured approach that maximises your options and preserves your legal position. </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Hour 1 to 24: Identify and Read the Notice Carefully:</strong> Do not panic. Read the notice from beginning to end at least twice. Identify what type of notice it is. The unpaid amount alleged. The date the notice was issued (important for calculating your response deadline). what exact action the bank is demanding from you. Note any factual errors or claims that seem incorrect.</li>
                                    <li><strong>Hour 24 to 48: Gather All Relevant papers:</strong> Collect your original loan sanction letter. Loan pacts. All EMI payment receipts and bank statements. Any previous correspondence with the bank. Any cover policy associated with the loan. Papers that explain the reason for your default (medical bills. End letter. Firm closure proof. GST decline data). This proof will be the foundation of your reply.</li>
                                    <li><strong>Hour 48 to 72: Engage a Specialist Banking counsel:</strong> Contact a counsel who specialises in banking law and loan default matters. Share copies of the notice and all your papers in the first meeting. Ask the counsel to identify any procedural errors in the notice. Assess the accuracy of the unpaid amount. advise on the best response strategy. A good counsel will also advise you on simultaneously exploring restructuring or OTS options while preparing the reply.</li>
                                    <li><strong>Do Not Make Any Payments Without Legal Advice:</strong> Many clients. In a moment of panic. Rush to make partial payments to "show goodwill." Without proper proof and legal framing. Such payments can be treated as an admission of the full unpaid amount. Any payment during this period must be structured carefully by your counsel.</li>
                                </ul>
                            </div>

                            <h2 id="drafting-reply" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Drafting the Legal Reply: What Your Response Must Accomplish</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> A by law sound reply to a bank default notice is not just a formality. It is a strategic papers that accomplishes several objectives simultaneously. When drafted by an expert banking counsel. Your reply can challenge the unpaid amount. Protect you from fast SARFAESI action. Open the door for restructuring or closure talks. Create a record of your non-wilful default. papers any procedural errors by the bank. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The structure of a thorough legal reply to a bank default notice should include the following elements. </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light">
                                <ol className="list-decimal pl-6 space-y-4 text-gray-800">
                                    <li><strong>Formal Identification Section:</strong> Your full name. Address. Loan account number. The date of the notice to which you are replying. the name and address of the bank valid to whom you are sending the reply. Send via registered post with acknowledgement due. Retaining a copy for your records.</li>
                                    <li><strong>Firm but experts Denial of Wilful Default:</strong> State clearly that your default was not intentional but was caused by exact. Documented hardship. Attach supporting evidence. Differentiate yourself from a "wilful defaulter," as this distinction is key in determining the bank’s closure willingness and in any future DRT steps.</li>
                                    <li><strong>Verification of unpaid Amount:</strong> State that you have reviewed the unpaid amount claimed in the notice and that you agree/disagree with exact figures. If there are discrepancies. Identify them specifically (for example: "The notice claims penal rates of Rs. X. Under Clause Y of the loan pacts. Penal rates is applicable only after 90 days. Not 60 days as cited"). Attach your own calculation of the correct unpaid amount.</li>
                                    <li><strong>MSME Status Assertion (if applicable):</strong> If you are an MSME registered clients. Explicitly assert your MSME status and invoke the Framework for Revival and Rehabilitation. Attach your Udyam Registration letter. State that the bank is obligated to follow the Revival Framework before any SARFAESI action under the Supreme Court’s ruling in Pro Knits v. Canara Bank (2024).</li>
                                    <li><strong>Procedural Objections:</strong> Identify any procedural errors in the notice itself. Such as incorrect NPA classification date. Failure to follow correct notice service procedure. discrepancies between the notice content and the loan pacts terms. These objections. If valid. Can invalidate the notice fully.</li>
                                    <li><strong>Proposal for relief:</strong> Conclude with a concrete proposal for relief. This may be a request for a EMI freeze period. A proposal for restructuring with a revised payment schedule. an first OTS offer. Even if the bank rejects this proposal. The fact that you made it demonstrates good faith and non-wilful default.</li>
                                </ol>
                            </div>

                            <h2 id="sarfaesi-details" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">SARFAESI Notice Survival Guide: Protecting Your Secured Assets</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> For clients with secured loans. The Section 13(2) SARFAESI notice is the single most key papers in the entire claims process. It is the formal trigger that starts the 60-day clock within which you must respond to potentially stop the bank from seizing your home. Factory. Vehicle. other secured assets without a court order. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The SARFAESI Act was designed to help banks recover dues quickly by bypassing lengthy court steps. Yet. For this speed to be by law valid. The bank must follow every procedural step precisely. A single procedural error in the SARFAESI process can invalidate the entire action and give your counsel grounds to seek a stay from the DRT. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Here are the SARFAESI rules most often used by experienced banking counsel to protect clients upon receiving a Section 13(2) notice. </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Challenging the NPA Classification Date:</strong> Under RBI norms. An account becomes NPA only after 90 running days of default. If the bank has classified your account as NPA before 90 days have elapsed from the date of the first default. The entire SARFAESI action is premature and can be challenged.</li>
                                <li><strong>Challenging the unpaid Amount:</strong> Section 13(2) requires the bank to specify the amount due and the details of security rates. If the amount stated in the notice is incorrect. This is a fatal procedural error that can set aside the notice.</li>
                                <li><strong>Notice Service Requirements:</strong> The Section 13(2) notice must be served straight to the clients. Not just posted publicly or sent to an old address. Improper service means the notice period has not started running.</li>
                                <li><strong>Bank Must Respond to Your Representation:</strong> Under Section 13(3A). After you file your representation. The bank must provide you with a reasoned reply within 15 days acknowledging and addressing your objections. A bank that simply ignores your representation and proceeds to Section 13(4) action has violated the statute.</li>
                                <li><strong>Invoking MSME Revival Framework:</strong> For MSME clients. Asserting MSME status in the Section 13(2) reply and invoking the Revival and Rehabilitation Framework is the most powerful single action available. as it by law obligates the bank to form a board and prepare a Corrective Action Plan before steps further.</li>
                            </ul>

                            <h2 id="your-rights" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Your Legal Rights After Receiving a Loan Default Notice in India</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Indian law provides clients with a thorough set of rights when they are in default. These rights exist to ensure that the claims process is fair. Transparent. proportionate. that genuine cases of money hardship are distinguished from wilful defaults. grasp these rights is the foundation of any effective response to a loan default notice. </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Right to Receive a Detailed Account Statement:</strong> You have the right to receive a complete. Authenticated loan account statement from the bank. Showing every transaction from disbursement to the date of the notice. This is essential for verifying the unpaid amount claimed. The bank cannot refuse this request.</li>
                                    <li><strong>Right to 60 Days to Respond to SARFAESI Notice:</strong> The bank cannot take any action to realise its security rates under Section 13(4) until 60 days have elapsed from the date of the Section 13(2) demand notice. This is a mandatory legal rules.</li>
                                    <li><strong>Right to a Reasoned Response to Your Representation:</strong> If you file a written representation or objection to the bank’s demand notice. The bank must respond in writing. With reasons. Within 15 days. A bank that does not respond or gives inadequate reasons is in violation of the statute.</li>
                                    <li><strong>Right to Fair Valuation of Secured Assets:</strong> If the bank proceeds to SARFAESI action. The secured assets must be valued by a qualified registered valuer. You have the right to challenge this valuation through an independent report.</li>
                                    <li><strong>Right to Redeem Your Security at Any Time Before Sale:</strong> You can redeem your mortgaged or pledged assets by paying the full unpaid amount. Including all costs and charges. At any point before the final sale or transfer of the assets. This right cannot be waived by any clause in the loan pacts.</li>
                                    <li><strong>Right to the Surplus After Sale:</strong> If your assets are sold under SARFAESI and the proceeds exceed the unpaid dues and all costs. You have the absolute right to receive the surplus amount. Banks cannot retain this surplus.</li>
                                    <li><strong>Right to File an SA Before the DRT:</strong> If you are aggrieved by any SARFAESI measure taken by the bank. You can file a Securitisation Application before the relevant DRT within 45 days of the bank taking takeover under Section 13(4). The DRT can grant a stay on further action. Including the proposed auction.</li>
                                    <li><strong>Right to Dignity and safety from threats:</strong> RBI guidelines explicitly prohibit agents from using abusive language. Real force. Threats. mental threaten. They cannot contact you outside of firm hours (8 AM to 7 PM) or at your workplace without permission. Violations are actionable before the Banking RBI officer.</li>
                                </ul>
                            </div>

                            <h2 id="drt-next" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">What Happens If the Bank Files a DRT Case After the Default Notice?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> When banks are unable to recover dues through informal demand notices or even through SARFAESI action (for example. if there is no security. If the DRT has stayed the SARFAESI action). They file an Original Application before the Debt claims court. For loans exceeding 20 lakh rupees. This is the bank’s primary litigation tool. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Upon filing of the OA and its admission by the DRT. The court will issue summons to you as the clients. These summons typically give you 30 days to file a written statement in defence. This deadline is absolute and must not be missed. If you do not appear or file a written statement within the deadline. The DRT can pass an ex-parte claims letter against you. which allows fast enforcement action against your assets. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The moment you receive DRT summons. Your defence strategy must shift into a higher gear. You now have not just a talks challenge but a formal legal steps running in parallel. Your counsel must: file a written statement within 30 days raising all your defences. Simultaneously apply for a stay on any auction steps pending under SARFAESI. open structured OTS discussions with the bank at the right moment during the steps. The DRT track and the OTS track should run simultaneously under your counsel’s coordination. </p>

                            <h2 id="settlement-options" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Settlement Options Available After a Loan Default Notice</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Receiving a loan default notice does not necessarily mean you must fight a prolonged legal battle. In many cases. The right response to the notice opens up closure and restructuring options that were not formally on the table before the notice was received. Here are the main closure pathways available after a loan default notice. </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Loan Restructuring:</strong> The most credit-positive relief is a loan restructuring. where the bank agrees to modify the loan terms to make them sustainable. This can include extending the payment tenure. Converting a demand/working capital loan to a term loan. Reducing the rates rate for a limited period. providing a EMI freeze on main sum payment. Restructuring keeps the loan as "standard" on your credit report. Avoiding the "Settled" tag.</li>
                                <li><strong>One-Time closure (OTS):</strong> If restructuring is not feasible because of a permanent change in money capacity. An OTS allows you to pay a settle lump sum (typically 30 to 70% of the total unpaid. Depending on the case facts) to close the account permanently. The bank withdraws all legal and SARFAESI actions upon receipt of the agreed amount and issues a No Dues letter. OTS results in a "Settled" status on your credit report but is far better than an "Active Default" or "Written Off" status.</li>
                                <li><strong>EMI freeze pacts:</strong> For clients facing a temporary cash flow crisis due to job loss. Medical emergency. Firm downturn. A bank may agree to a formal EMI freeze. Typically for 3 to 12 months. During this period. No EMIs are due and no SARFAESI action or DRT filing will be made. This gives you time to stabilise your income before resuming regular payments.</li>
                                <li><strong>Phased payment Plan:</strong> Some banks agree to a modified payment plan following a default notice. where a reduced EMI is accepted for an first period with the grasp that regular EMIs will resume after the clients’s money case improves. This is distinct from formal restructuring and is typically a goodwill arrangement not reported to credit bureaus as a restructuring event.</li>
                                <li><strong>Debt merger:</strong> If you have multiple defaulted loans. Consolidating all of them into a single restructured loan (possibly with a different lender) can simplify your debts and potentially reduce your overall rates burden. This requires both a DRT-experienced counsel and a money advisor who understands banking products.</li>
                            </ul>

                            <h2 id="harassment-protection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Protecting Yourself from Harassment After a Default Notice</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> In the period fast following a loan default notice. Banks often step up contact through agents. While legitimate contact by agents is allowed. There is a significant and clear boundary between lawful claims efforts and unlawful threats. Knowing this boundary allows you to take firm action against violations. which in turn gives you additional leverage in closure talks. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The RBI’s guidelines on Fair Practices Code for debt claims are explicit. agents must operate within these rules: </p>
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Time Restrictions:</strong> agents can only call you or visit your home between 8:00 AM and 7:00 PM. Calls outside these hours are documented violations. Record the exact time of all calls you receive from agents.</li>
                                    <li><strong>Prohibited Conduct:</strong> agents cannot use abusive or threatening language. They cannot make false claims about legal results (such as claiming you will be arrested for a civil debt. which is false). They cannot impersonate police officials or court heads. They cannot damage your home or use real force.</li>
                                    <li><strong>Contact Restrictions:</strong> agents cannot contact your family members. Friends. Neighbours. employers without your explicit consent. They cannot disclose your debt case to third parties. They cannot use social media to embarrass or pressure you.</li>
                                    <li><strong>Authorization Required:</strong> Any agents who visits you in person must carry and show you a written authorisation letter from the bank. Clearly identifying the exact amount they are authorised to collect and the loan account to which it relates.</li>
                                    <li><strong>Your Response to Violations:</strong> papers every violation meticulously. Record phone calls if by law permitted in your state. Save every threatening text message or WhatsApp follow-up. This proof can be used to file a complaint with the Banking RBI officer. which is a free and effective remedy. A well-documented threats complaint can result in significant waivers in closure talks. as banks prefer to settle rather than face RBI officer fines and reputational damage.</li>
                                </ul>
                            </div>

                            <h2 id="choosing-lawyer" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">How to Choose the Best Lawyer for a Loan Default Notice</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The quality of your legal representation determines whether a loan default notice becomes a manageable case or a money catastrophe. Here is how to evaluate potential counsel before making a decision. </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Ask About Their SARFAESI Experience:</strong> "Have you handled SARFAESI notices before? How many? What was the typical outcome?" A counsel with genuine SARFAESI experience will be able to describe exact procedural objections they have raised and outcomes they have achieved.</li>
                                    <li><strong>Ask About Their Knowledge of agents Laws:</strong> "What are the exact RBI guidelines on agents conduct? Have you filed Banking RBI officer complaints before?" This question tests whether they understand the full spectrum of clients rights. Not just the courtroom dimensions.</li>
                                    <li><strong>Ask About Their closure Track Record:</strong> "In how many of your recent default notice cases did you achieve a closure or restructuring rather than going to litigation? What is the typical rate of the unpaid amount that your clients have settled for?" Honest answers to these questions give you a realistic sense of expectations.</li>
                                    <li><strong>Ask About Fees and Timeline:</strong> "What is your fee structure for handling this notice? What is the likely timeline for relief if we go the restructuring route versus the OTS route versus the DRT defence route?" A good counsel gives you a realistic breakdown. Not just a vague reassurance.</li>
                                    <li><strong>Assess Their Responsiveness Right From the First Call:</strong> A counsel who takes days to return your first call when you are in a time-sensitive notice case is telling you something important about how they will handle your case when deadlines matter. Responsiveness is as important as expertise in default notice cases.</li>
                                </ul>
                            </div>

                            <h2 id="npa-defence" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">How a Lawyer Can Challenge Improper NPA Classification</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> One of the most consequential aspects of a loan default notice is that it typically accompanies or fast follows the bank classifying your loan as a Non-Performing Asset. NPA status triggers the bank’s right to invoke SARFAESI. File DRT cases. report your account to credit bureaus as a defaulter. Challenging an improper NPA classification. Preventing one from occurring. Is therefore a high-priority legal objective. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> An NPA classification is by law valid only when a loan account has been overdue for more than 90 running days. This sounds straightforward. In practice. Banks often miscount the overdue period. Use incorrect base dates for calculation. fail to account for partial payments made by the clients that should have reset the clock. Your counsel should carefully audit the bank’s NPA classification date against your payment records. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> For MSME clients. As discussed throughout this guide. An additional legal layer applies. The bank must follow the Framework for Revival and Rehabilitation before classifying an MSME account as NPA. If the bank has skipped this step. The NPA classification and any SARFAESI action flowing from it is by law challengeable. The Supreme Court’s ruling in Pro Knits v. Canara Bank (2024) makes the mandatory nature of this framework unambiguous. High Courts across India have consistently applied this principle. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Even for non-MSME clients. If the bank classified the loan as NPA without following proper notification procedures. Without giving adequate time for response. Without considering a formal restructuring request that was already pending. These procedural failures can be raised as grounds to challenge the NPA classification and the subsequent claims action. </p>

                            <h2 id="case-studies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Real Case Studies: Loan Default Notices Successfully Challenged</h2>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                                <p className="text-xl font-bold text-gray-900 mb-4">Case 1: SARFAESI Notice Killed by Procedural Challenge. Restructuring Achieved</p>
                                <p className="text-gray-700 mb-4"> A self-employed experts in Bangalore received a Section 13(2) SARFAESI notice for a 55 lakh home loan. The bank had classified the account as NPA 10 days before the mandatory 90-day completion period. The counsel identified this error fast. </p>
                                <p className="text-gray-700"> Result: A formal representation was sent to the bank’s Nodal head citing the premature NPA classification and attaching the RBI Prudential Norms. The bank acknowledged the error. Reversed the NPA classification. agreed to a 2-year rates EMI freeze followed by extended tenure. The home was saved. the credit report shows no NPA entry. </p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                                <p className="text-xl font-bold text-gray-900 mb-4">Case 2: threats proof Led to 60% OTS Waiver</p>
                                <p className="text-gray-700 mb-4"> A small firm owner in Hyderabad received a demand notice for a 22 lakh firm loan and was subjected to harsh agents threats. Including calls to his suppliers and threats of results that were by law false. </p>
                                <p className="text-gray-700"> Result: The counsel meticulously documented the threats and filed a formal Banking RBI officer complaint. Simultaneously. An OTS proposal was submitted. The bank. Aware of the pending RBI officer complaint. Agreed to settle at 9 lakhs (40% of the unpaid amount). The OTS pacts also required the bank to submit a report confirming all claims activities had ceased. </p>
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
                                <p className="text-blue-800 mb-6">Every day without legal guidance after a loan default notice is a day of lost options. Our specialist banking counsel can review your notice. Draft a by law sound reply. Challenge the unpaid amount. simultaneously explore the best relief path for your case. Free first consultation.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book Your Free Consultation
                                </Link>
                            </div>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14 mt-10">Conclusion: A Loan Default Notice Is the Beginning, Not the End</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> A loan default notice is a beginning. Not an ending. It is the bank’s opening move in a legal process that has many stages and many opportunities for skilled clients and their counsel to change the outcome. The clients who ignores the notice. The clients who panics and makes uninformed decisions. the clients who engages the wrong type of legal counsel all face the worst outcomes. The clients who fast engages a specialist banking counsel. Follows a structured response strategy. exercises their legal rights fully is in a dramatically better position. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Indian law provides MSME clients with especially powerful safety through the Revival and Rehabilitation Framework and Supreme Court precedents that make the mandatory nature of these safety clear. But even for individual clients with own loans. Home loans. Car loans in default. The SARFAESI framework. DRT mechanisms. RBI guidelines on fair practice collectively offer a robust set of rights that a skilled counsel can translate into real. Tangible relief. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> At CredSettle. We understand that receiving a loan default notice is one of the most stressful experiences of a person’s life. We connect clients with the best specialist banking counsel across India who have the expertise to turn this crisis into a manageable legal challenge. Our counsel draft by law sound replies. Challenge incorrect unpaid amounts. Stop agents threats. Settle restructuring or OTS terms. If needed. Fight for you before the DRT. Reach out today for a free consultation. </p>

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
                                <p className="font-bold text-xl text-gray-900 mb-2">Got a Default Notice?</p>
                                <p className="text-sm text-gray-600 mb-6">Get an expert banking counsel to review your notice. Draft a reply. protect your assets from bank claims action. Free first consultation.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Start My Consultation
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v SARFAESI Reply Experts</p>
                                    <p>v DRT Defence Ready</p>
                                    <p>v Settle or Restructure</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <p className="font-bold text-gray-900 mb-4 border-b pb-2">Related Legal Guides</p>
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
