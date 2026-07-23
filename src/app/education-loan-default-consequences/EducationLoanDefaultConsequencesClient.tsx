'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function EducationLoanDefaultConsequencesClient() {
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
        { id: 'introduction', label: 'The Graduate Dilemma' },
        { id: 'mythbusting', label: 'Mythbusting: Passports & Jail' },
        { id: 'civil-vs-criminal', label: 'Civil vs Criminal Liability' },
        { id: 'co-borrower-trap', label: 'The Co-Borrower Trap' },
        { id: 'government-subsidy', label: 'Government Subsidies' },
        { id: 'education-loan-settlement', label: 'The Settlement Process' },
        { id: 'cibil-impact', label: 'CIBIL & Career Rebuilding' },
        { id: 'reviews', label: 'Client Success Stories' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Verdict' },
    ];

    const faqs = [
        {
            question: 'Will defaulting on my education loan result in my passport being confiscated?',
            answer: 'No. Passport confiscation is not a consequence of standard loan default. It is a myth propagated by aggressive collection agents. Unless you are involved in a massive criminal fraud case or have an active court warrant where you are deemed a flight risk, the Regional Passport Office will not revoke or confiscate your passport for a civil debt.'
        },
        {
            question: 'Can the bank file a criminal case against me or my parents for not paying the student loan?',
            answer: 'An education loan default is strictly a civil matter under Indian law. You cannot be jailed or face criminal charges for being unable to repay. The only exception is if you submitted forged admission documents or fake income certificates during the application process, which constitutes fraud.'
        },
        {
            question: 'How does an education loan default affect my parents who signed as co-borrowers?',
            answer: 'Parents who sign as co-borrowers or guarantors share equal legal responsibility for the loan. If the loan turns into a Non-Performing Asset (NPA), their CIBIL score will drop alongside yours. The bank has the legal right to approach them for recovery, but they are protected against harassment just as you are.'
        },
        {
            question: 'Can I use government schemes to delay my loan turning into an NPA?',
            answer: 'Yes. Schemes like the Central Scheme to provide Interest Subsidy (CSIS) cover the interest during the moratorium period. Additionally, if you are unemployed after graduation, you can apply for an extension of the moratorium period with the bank manager, supported by proof of unemployment, which temporarily halts the NPA classification.'
        },
        {
            question: 'Will a settled education loan ruin my chances of getting a job or a visa in the future?',
            answer: 'A settled loan will lower your CIBIL score, but it rarely impacts private sector employment or visa applications. Most background checks verify criminal records, not civil credit histories. While the "Settled" status stays on your credit report for a few years, it is far better than an active "Defaulter" status, and you can rebuild your score over time.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram S.',
            location: 'Bangalore',
            stars: 5,
            comment: 'I was terrified that the bank would seize my fathers property after I lost my job and defaulted on my engineering loan. CredSettle helped us negotiate a fair settlement plan. They clarified the myths about criminal charges and stopped the recovery agents from harassing my parents.'
        },
        {
            name: 'Priya M.',
            location: 'Chennai',
            stars: 5,
            comment: 'Graduating during a recession meant I could not pay my MBA loan. The bank threatened to block my passport just as I got a job offer abroad. The CredSettle team stepped in, proved the threats were illegal, and arranged a restructured payment plan that saved my career.'
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
        'name': 'Education Loan Default Legal Services',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '2150',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-edu" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-edu" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        Education Loan Default Consequences<br />
                        <span className="text-blue-300">Protecting Your Career and Family</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Expert legal guidance for young professionals facing student loan NPAs. Learn the truth about passport confiscation, civil liability, and how to settle your education debt.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Free Legal Consultation
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
                                        Education Loan Default Consequences
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Graduate Dilemma: Panic Versus Reality</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The transition from university to the professional world is expected to be a time of hope and ambition. However, for many young professionals, this period is overshadowed by the looming pressure of an education loan. An education loan default often triggers intense anxiety. Graduates imagine catastrophic outcomes: police at their doorstep, their passports confiscated, and their parents facing severe legal action. The reality of an education loan default in India is significantly different from the terrifying scenarios painted by aggressive collection agents.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Understanding the actual consequences of an education loan default is the first step toward regaining control. A default occurs when you miss consecutive Equated Monthly Installment payments, usually for a period of 90 days. At this point, the bank classifies the loan as a Non-Performing Asset. While this classification has financial repercussions, it is not the end of your career. It is crucial to separate the myths propagated by debt collectors from the legal reality.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                This comprehensive guide will dissect the legal landscape surrounding education loan defaults. We will explore the vital differences between civil and criminal liabilities, examine the impact on co-borrowers, and reveal actionable strategies to delay NPA status or negotiate a fair settlement. The goal is to equip you with the knowledge required to protect your career, secure your financial future, and shield your family from undue harassment.
                            </p>

                            <h2 id="mythbusting" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Mythbusting: Passports and Jail Time</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The fear tactics used by recovery agents often rely on a profound misunderstanding of the law. Two of the most common threats involve passport confiscation and imprisonment. Let us dismantle these myths definitively.
                            </p>
                            
                            {/* Visual Element 1: Alert Banners */}
                            <div className="space-y-6 mb-10">
                                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl shadow-sm">
                                    <div className="flex items-center gap-3 mb-2">
                                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                        <h4 className="text-lg font-bold text-red-900 m-0">Myth: Your Passport Will Be Confiscated</h4>
                                    </div>
                                    <p className="text-red-800 font-medium">
                                        Fact: The Regional Passport Office does not confiscate passports for civil debt defaults. A bank cannot simply call the passport authority and demand a block. Passport revocation is reserved for serious criminal offenses or cases involving massive economic fraud where the individual is a declared flight risk. Your ability to travel abroad for work or further studies remains intact despite an education loan default.
                                    </p>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl shadow-sm">
                                    <div className="flex items-center gap-3 mb-2">
                                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                        <h4 className="text-lg font-bold text-red-900 m-0">Myth: You Will Face Criminal Charges</h4>
                                    </div>
                                    <p className="text-red-800 font-medium">
                                        Fact: Defaulting on a loan is a civil breach of contract, not a criminal act. You cannot be sent to jail for lacking the funds to repay a bank. As long as the loan was obtained using genuine documents, the bank can only pursue civil remedies. If an agent threatens you with <Link href="/can-i-go-to-jail-for-loan-default-in-india" className="text-blue-700 underline font-bold hover:text-blue-900">jail for loan default</Link>, they are committing an offense of criminal intimidation.
                                    </p>
                                </div>
                            </div>
                            
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Recognizing these threats as empty scare tactics empowers you to handle the situation logically. The bank wants its money back, and their primary mechanism for achieving this is negotiation, not throwing graduates in prison.
                            </p>

                            <h2 id="civil-vs-criminal" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Civil vs Criminal Liability: A Clear Distinction</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To fully grasp the education loan default consequences, one must understand the legal boundary between civil and criminal liability. An education loan agreement is a civil contract. When you default, you breach that contract. The remedies available to the bank are entirely civil in nature.
                            </p>
                            
                            {/* Visual Element 2: Comparison Table */}
                            <div className="overflow-x-auto mb-10 border border-gray-200 rounded-xl shadow-sm">
                                <table className="min-w-full text-left bg-white">
                                    <thead className="bg-gray-100 border-b border-gray-200">
                                        <tr>
                                            <th className="px-6 py-4 font-bold text-gray-900 text-sm uppercase tracking-wider">Legal Aspect</th>
                                            <th className="px-6 py-4 font-bold text-blue-900 text-sm uppercase tracking-wider">Civil Liability (Standard Default)</th>
                                            <th className="px-6 py-4 font-bold text-red-900 text-sm uppercase tracking-wider">Criminal Liability (Fraud)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">Cause of Action</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Inability to pay due to job loss, low income, or medical emergency.</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Submitting forged admission letters or fake income certificates to obtain the loan.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">Bank Action</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Filing a civil suit in the Debt Recovery Tribunal or civil court. Sending legal notices.</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Filing an FIR with the police for cheating and forgery under the penal code.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">Possible Outcomes</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Attachment of property, salary garnishment orders, or negotiated settlement.</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Arrest, criminal trial, potential imprisonment, and heavy fines.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">Passport Status</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">No impact. Travel is permitted.</td>
                                            <td className="px-6 py-4 text-sm text-gray-700">Potential impounding if deemed a flight risk during investigation.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-10">
                                As the table clearly illustrates, a standard default does not cross into criminal territory. The bank may pursue civil litigation, but they prefer a negotiated resolution because civil trials are lengthy and expensive. If you are facing financial hardship, your primary focus should be on navigating the civil recovery process and seeking a structured settlement.
                            </p>

                            <h2 id="co-borrower-trap" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">The Co-Borrower Trap: Impact on Parents</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Perhaps the most distressing aspect of an education loan default is the impact it has on the co-borrowers, who are typically the parents. Most education loans exceeding a certain threshold require a co-borrower or a guarantor. From a legal standpoint, the co-borrower is equally liable for the repayment of the loan.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a default occurs, the bank will direct its recovery efforts toward the parents just as vigorously as they pursue the primary borrower. This means parents will receive constant phone calls, legal notices, and potentially face visits from recovery agents. The psychological toll on parents, who may be nearing retirement or managing their own financial commitments, can be immense.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, the co-borrower credit score will suffer a direct hit. When the loan is classified as an NPA, the negative remark is recorded on both the primary borrower and the co-borrower CIBIL reports. This can severely restrict the parents ability to secure future credit, such as a home improvement loan or an emergency medical loan.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold bg-blue-50 border border-blue-200 text-blue-900 p-6 rounded-xl">
                                Protection Strategy: It is imperative to maintain open communication with your parents regarding your financial struggles. Shielding them from the reality of the default only leaves them vulnerable to aggressive agent tactics. By presenting a unified front and seeking professional legal assistance, you can demand that the bank follows fair recovery practices, effectively stopping the harassment of your family.
                            </p>

                            <h2 id="government-subsidy" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Government Subsidies and Delaying NPA Status</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Before accepting default as an inevitability, graduates should explore available mechanisms to extend the moratorium period or secure financial relief. The Indian government has instituted several schemes designed to support students from economically weaker sections.
                            </p>

                            {/* Visual Element 3: Checklist */}
                            <div className="bg-white border-2 border-green-500 p-8 rounded-2xl mb-10 shadow-lg">
                                <h4 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                                    Action Checklist: Delaying NPA Status
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center border border-green-500">
                                                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                            </div>
                                        </div>
                                        <div>
                                            <strong className="text-gray-900 block mb-1">Check CSIS Eligibility</strong>
                                            <p className="text-sm text-gray-600">The Central Scheme to provide Interest Subsidy (CSIS) covers the full interest during the moratorium period for students from lower-income families. Ensure your bank has processed this subsidy correctly.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center border border-green-500">
                                                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                            </div>
                                        </div>
                                        <div>
                                            <strong className="text-gray-900 block mb-1">Submit Proof of Unemployment</strong>
                                            <p className="text-sm text-gray-600">If you have not secured a job within the standard moratorium period (usually course duration plus one year), write a formal letter to the branch manager attaching proof of ongoing job hunts to request an extension.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center border border-green-500">
                                                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                            </div>
                                        </div>
                                        <div>
                                            <strong className="text-gray-900 block mb-1">Apply for Restructuring</strong>
                                            <p className="text-sm text-gray-600">Before the loan hits 90 days past due, proactively ask the bank for loan restructuring. This involves extending the loan tenure to reduce the monthly EMI burden, thereby avoiding an official NPA classification.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-10">
                                Banks are often reluctant to inform borrowers about these options because it requires administrative effort. However, as a borrower, you have the right to demand restructuring or subsidy application processing if you meet the criteria. Taking these proactive steps can buy you the necessary time to secure employment and stabilize your finances.
                            </p>

                            <h2 id="education-loan-settlement" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Education Loan Settlement: The Legal Process</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If all attempts to manage the EMIs fail and the loan turns into a stubborn NPA, the final recourse is <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="text-blue-700 underline font-bold hover:text-blue-900">loan settlement</Link>. Settlement is a formal negotiation where the bank agrees to accept a lump sum payment that is less than the total outstanding amount, subsequently closing the loan account.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The settlement process begins with a hardship letter. This document must eloquently detail your financial distress, explaining precisely why full repayment is impossible. Whether it is prolonged unemployment, a severe medical crisis, or a drastically lower starting salary than anticipated, the bank needs tangible proof of your inability to pay.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Negotiations can be protracted. The bank will initially demand the full amount, leveraging the emotional pressure on your parents. This is where legal representation becomes invaluable. A specialized lawyer can insulate your family from direct contact with the bank, channeling all communication through official legal avenues. They understand the internal waiver matrices that banks use and can push for the maximum possible reduction in principal and complete waiver of penalties.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Once an agreement is reached, it is critical to secure an official settlement letter from the bank before making any payment. Following the final payment, the bank will issue a No Dues Certificate. This document is your ultimate proof that the debt obligation has been resolved.
                            </p>

                            <h2 id="cibil-impact" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">CIBIL Impact and Career Rebuilding</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A common fear among graduates is that a settled loan will permanently destroy their career prospects. This is an exaggeration. When you settle an education loan, your CIBIL report will reflect a "Settled" status rather than "Closed." To learn more about how this specifically affects your credit profile, you can read our guide on <Link href="/does-loan-settlement-affect-cibil" className="text-blue-700 underline font-bold hover:text-blue-900">how settlement impacts CIBIL</Link>
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The immediate impact is a drop in your credit score, making it difficult to obtain new unsecured loans or premium credit cards for a few years. However, its effect on employment is generally minimal. While some financial institutions run credit checks on prospective employees, the vast majority of IT, engineering, and private sector companies focus solely on criminal background checks and educational verification.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Rebuilding your credit requires patience and financial discipline. Over time, as you secure stable employment, you can start rebuilding your score using secured credit options or small builder loans. A "Settled" status shows that you took responsibility and resolved the debt, which is always viewed more favorably than a permanent "Defaulter" tag.
                            </p>

                            <h2 id="reviews" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Client Success Stories</h2>
                            <div className="space-y-6 mb-12">
                                {reviews.map((review, idx) => (
                                    <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm relative">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xl">
                                                {review.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 m-0">{review.name}</h4>
                                                <p className="text-sm text-gray-500 m-0">{review.location}</p>
                                            </div>
                                            <div className="ml-auto flex text-yellow-400">
                                                {[...Array(review.stars)].map((_, i) => (
                                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-gray-700 italic">"{review.comment}"</p>
                                    </div>
                                ))}
                            </div>

                            <h2 id="faqs" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Frequently Asked Questions</h2>
                            <div className="space-y-6 mb-12">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                        <h4 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h4>
                                        <p className="text-gray-700 font-light leading-relaxed">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 id="conclusion" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Final Verdict</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                An education loan default is a stressful financial hurdle, not a career-ending catastrophe. The myths of passport confiscation and criminal charges are precisely that: myths. The reality involves a civil process that requires strategic management and proactive negotiation.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                By understanding your legal rights, protecting your co-borrowers, and seeking professional assistance to navigate the settlement process, you can overcome this challenge. Your education was an investment in your future. Do not allow temporary financial distress to dictate the trajectory of your professional life. Take informed action today to reclaim your peace of mind and secure your financial independence.
                            </p>

                        </article>
                    </main>

                    {/* Right Column: CTA and Expertise */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14 space-y-6">
                        {/* Primary CTA */}
                        <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-6 rounded-2xl shadow-lg text-white text-center">
                            <h3 className="font-bold text-xl mb-4">Facing Recovery Harassment?</h3>
                            <p className="text-sm opacity-90 mb-6">Our legal experts can stop the calls and negotiate a fair settlement for your education loan.</p>
                            <Link href="/contact" className="inline-block bg-white text-blue-900 font-bold py-3 px-6 rounded-xl w-full hover:bg-gray-50 transition-colors shadow-sm">
                                Talk to a Lawyer
                            </Link>
                        </div>

                        {/* Related Expertise */}
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Related Expertise</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/services/personal-loan-settlement" className="text-blue-700 hover:text-blue-900 font-medium text-sm flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                        Personal Loan Settlement
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/credit-card-settlement" className="text-blue-700 hover:text-blue-900 font-medium text-sm flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                        Credit Card Debt Relief
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/loan-written-off-vs-settled-cibil-impact" className="text-blue-700 hover:text-blue-900 font-medium text-sm flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                        Written-off vs Settled
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/what-are-the-consequences-of-not-paying-emi" className="text-blue-700 hover:text-blue-900 font-medium text-sm flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                        Consequences of EMI Default
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
