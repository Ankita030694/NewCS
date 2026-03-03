'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function DRTLoanSettlementClient() {
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
        { id: 'what-is-drt', label: 'What is DRT?' },
        { id: 'why-settlement', label: 'Why Settle via DRT' },
        { id: 'drt-process', label: 'DRT Process' },
        { id: 'ots-during-drt', label: 'OTS During DRT' },
        { id: 'negotiation-strategy', label: 'Negotiation Strategy' },
        { id: 'drat-appeals', label: 'DRAT Appeals' },
        { id: 'legal-rights', label: 'Your Rights' },
        { id: 'choosing-lawyer', label: 'Selecting Lawyer' },
        { id: 'credit-score', label: 'Credit Score Impact' },
        { id: 'case-studies', label: 'Case Studies' },
        { id: 'common-mistakes', label: 'Common Mistakes' },
        { id: 'reviews', label: 'Client Feedback' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Conclusion' },
    ];

    const faqs = [
        {
            question: 'Can I still settle my loan after the bank has filed a case in DRT?',
            answer: 'Yes, absolutely. Loan settlement is possible at any stage of DRT proceedings. In fact, DRT proceedings often create a more realistic environment for settlement negotiations because both parties understand the costs and risks of continued litigation. Many banks are willing to negotiate better OTS terms during DRT proceedings to recover funds without prolonged legal battles. Your DRT lawyer can represent you in the tribunal while simultaneously negotiating settlement terms with the bank recovery department.'
        },
        {
            question: 'What is the time limit to respond to a DRT summons?',
            answer: 'Upon receiving a summons from the Debt Recovery Tribunal, you typically have 30 days to file a written statement in defence. Failing to file within this period can result in an ex-parte order against you, meaning the DRT may pass a recovery order without hearing your side. This deadline is non-negotiable and requires immediate engagement of a qualified DRT lawyer upon receipt of the summons.'
        },
        {
            question: 'What percentage of the outstanding loan can I expect to settle for through DRT?',
            answer: 'Settlement amounts during DRT proceedings typically range from 40% to 75% of the total outstanding amount, depending on the age of the NPA, the type of loan (secured or unsecured), the realizable value of collateral, and the bank\'s internal settlement policy. Senior NPAs (overdue for more than 3 to 5 years) often attract more favourable settlement terms because the bank recognizes that full recovery through litigation is increasingly unlikely. Your lawyer can analyse the specific factors in your case to give a realistic estimate.'
        },
        {
            question: 'What is a DRAT and when should I approach it?',
            answer: 'DRAT stands for Debt Recovery Appellate Tribunal. It is the appellate body above the DRT. If you are aggrieved by an order passed by the DRT, you can appeal to the DRAT within 45 days of the DRT order. The DRAT can grant a stay on the DRT order pending the appeal, which can be critical if the DRT has ordered immediate recovery action. DRAT appeals require a skilled appellate lawyer with experience in banking law.'
        },
        {
            question: 'Can the bank take possession of my property while DRT proceedings are ongoing?',
            answer: 'Yes, a bank can proceed with SARFAESI action while DRT proceedings are pending, unless you obtain a specific stay order from the DRT. This is why filing a Securitisation Application (SA) before the DRT from the date of the Section 13(4) possession notice is critical. The DRT can grant an interim stay on possession and auction proceedings while the main case is being heard. Without this stay, the bank can proceed to seal and auction your property even during litigation.'
        },
        {
            question: 'How long does a DRT case typically take to be resolved?',
            answer: 'The Recovery of Debts and Bankruptcy Act mandates resolution within 180 days. However, in practice, contested DRT cases take anywhere from 12 months to 36 months or more, depending on the tribunal\'s backlog, the complexity of the case, the number of witnesses, and whether DRAT appeals are filed. Many cases resolve sooner through OTS negotiations during the pendency of DRT proceedings, which is often the most efficient outcome for both the bank and the borrower.'
        },
        {
            question: 'What documents do I need to prepare for DRT defence?',
            answer: 'For an effective DRT defence, you should gather your original loan sanction letter, loan agreement, all repayment receipts and bank statements, SARFAESI or demand notices received, any previous correspondence with the bank, audited financial statements for the period of default, documentation proving the hardship that caused the default (job loss, business failure, medical emergency), property valuation reports, and any evidence of procedural violations by the bank. Your DRT lawyer will advise on case-specific additional documents.'
        },
        {
            question: 'Is it possible to get an interim stay from the DRT on auction proceedings?',
            answer: 'Yes. When you file a Securitisation Application (SA) before the DRT challenging a bank\'s SARFAESI action, you can simultaneously apply for an interim stay on auction proceedings. If the DRT is satisfied that a prima facie case exists and that irreversible harm would occur if the stay is not granted, it will issue a conditional stay, typically requiring you to deposit a percentage of the outstanding amount. An experienced DRT lawyer can maximize your chances of obtaining this stay quickly.'
        },
        {
            question: 'Can a DRT order be contested before the High Court?',
            answer: 'While the standard appellate hierarchy requires you to first challenge a DRT order before the DRAT, in extraordinary circumstances involving violations of fundamental rights or jurisdictional errors, you can approach the High Court directly through a writ petition under Article 226 of the Constitution. However, courts generally redirect borrowers to exhaust the DRAT remedy first unless there are compelling constitutional grounds. High Court intervention in DRT matters is not routine and requires expert legal judgement.'
        },
        {
            question: 'What happens to the DRT case once an OTS is finalised?',
            answer: 'Once an OTS is finalised and the agreed amount is paid in full, the bank will issue a No Dues Certificate and file an application before the DRT to withdraw the Original Application as the debt has been satisfied. Your lawyer will ensure that the OTS agreement explicitly requires the bank to withdraw all legal proceedings, including DRT cases and SARFAESI actions, as a condition precedent to or simultaneously with your final payment. This withdrawal must be recorded in the DRT by way of a formal consent order for permanent legal protection.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Singhania',
            location: 'Delhi',
            stars: 5,
            comment: 'The bank had filed a DRT case against my business for 85 lakh rupees. CredSettle connected me with an excellent DRT lawyer who got a stay on the auction within 7 days. After 4 months of negotiations, we settled for 38 lakhs. This was far better than what I thought was possible. Professional and knowledgeable team.'
        },
        {
            name: 'Rekha Pillai',
            location: 'Chennai',
            stars: 5,
            comment: 'I had no idea that I could negotiate a settlement even after the DRT case was filed. The lawyer explained the entire process clearly and negotiated a 50% reduction in the total dues. The bank withdrew the DRT case after we paid. I got my NOC in just 3 weeks after final payment. Exceptional service.'
        },
        {
            name: 'Manish Bhatia',
            location: 'Ahmedabad',
            stars: 5,
            comment: 'My factory was about to be auctioned under SARFAESI when I contacted CredSettle. The DRT lawyer filed an SA and got the auction stayed the same day. We then negotiated an OTS that allowed me to keep the factory and settle the loan. I have since rebuilt my business. A life-changing intervention.'
        },
        {
            name: 'Sunita Gupta',
            location: 'Lucknow',
            stars: 5,
            comment: 'Received a DRT summons for a personal loan I could not repay after my husband\'s illness. The legal team guided me through every step of the written statement filing. We then proposed an OTS and the bank agreed to settle for 40% of the outstanding amount. The DRT case was withdrawn. Grateful beyond words.'
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
        'name': 'Best Lawyer for Loan Settlement by DRT - CredSettle Legal Services',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '2153',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-drt-settlement" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-drt-settlement" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-drt-settlement" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

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
                        Best Lawyer for Loan Settlement<br />
                        <span className="text-blue-300">by DRT in India 2025</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Expert legal strategies to settle your bank loan through the Debt Recovery Tribunal. Protect your assets, negotiate OTS, and close your debt case permanently.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get a Free DRT Consultation
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
                                        Best Lawyer for Loan Settlement by DRT
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Overview: Why DRT Loan Settlement Requires Specialist Legal Expertise</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a bank account becomes a Non-Performing Asset and the bank decides to escalate their recovery efforts, the Debt Recovery Tribunal (DRT) becomes the battleground. For millions of borrowers in India, receiving a DRT notice or summons is one of the most frightening financial experiences of their lives. The immediate reaction is often panic, followed by confusion about what to do next. This guide is designed to replace that panic with clarity, and to explain why finding the best lawyer for loan settlement by DRT is the single most important decision you will make at this stage.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                What many borrowers do not know is that a DRT case is not the end of the road. In fact, the DRT is often a platform where skilled lawyers negotiate the most favourable loan settlements that a borrower could ever hope to achieve outside of formal proceedings. Banks file DRT cases to maximise recovery pressure, but they also simultaneously open themselves to scrutiny of their own procedural compliance, interest calculations, and valuation practices. An experienced DRT lawyer turns this scrutiny into your negotiating leverage.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The DRT framework in India is governed by the Recovery of Debts and Bankruptcy Act of 1993, which applies to loan recovery claims exceeding 20 lakh rupees by banks and financial institutions. The tribunal has specific powers including the ability to pass recovery certificates, order attachment and sale of properties, and grant interim stays on bank actions pending the resolution of disputes. For borrowers, the DRT offers a structured legal forum where you can present your defence, challenge the bank's calculation of dues, and simultaneously explore settlement options.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This comprehensive guide takes you through every dimension of DRT loan settlement, from understanding the tribunal's process and your rights as a borrower, to practical strategies for negotiating an OTS during DRT proceedings. We also cover DRAT appeals, the impact on your credit score, and how to select the best DRT lawyer for your specific situation. Read carefully, because every section contains information that can significantly affect the outcome of your case.
                            </p>

                            <h2 id="what-is-drt" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">What is the Debt Recovery Tribunal and How Does It Work?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Debt Recovery Tribunal was established under the Recovery of Debts Due to Banks and Financial Institutions Act, 1993, with the primary objective of providing a faster mechanism for debt recovery by banks and financial institutions compared to civil courts. Before the DRT system was created, banks had to pursue debt recovery through regular civil courts, which often took 10 to 15 years to conclude. The DRT was designed to resolve cases in 180 days.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                There are 39 Debt Recovery Tribunals across India, each headed by a Presiding Officer who is typically a retired District Judge or equivalent. The DRT has jurisdiction over cases where the debt claimed by a bank or financial institution exceeds 20 lakh rupees. Smaller debt recoveries are handled through courts or other mechanisms.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The DRT process begins when the bank files an Original Application (OA) detailing the outstanding dues, supporting documents, and the relief sought. Upon admission of the OA, the DRT issues summons to the borrower and any guarantors named in the application. The borrower must file a written statement in defence within 30 days of receiving the summons. Both parties then present their evidence, examine witnesses, and make legal arguments. The DRT eventually passes an order called a Recovery Certificate if it finds in favour of the bank.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A Recovery Certificate empowers the Recovery Officer of the DRT to attach and sell the borrower's assets. The Recovery Officer can attach bank accounts, seize vehicles, attach and sell property, and recover money from salary if the borrower is employed. This enforcement arm of the DRT makes a Recovery Certificate almost equivalent to a civil court decree for practical purposes.
                            </p>

                            <h2 id="why-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Why Settling a Loan Through DRT Proceedings Can Be Advantageous</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Counterintuitively, the existence of DRT proceedings can actually work in your favour as a borrower seeking to settle a loan. Here is why pursuing settlement during DRT proceedings is often more effective than trying to settle before or outside of DRT.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>1. Mutual Cost Awareness:</strong> When both parties are engaged in DRT litigation, both sides are acutely aware of the ongoing legal costs. Banks understand that a prolonged DRT case costs them not just lawyer fees, but also the time value of money tied up in provisioned capital. A well-timed OTS offer can close the file at a fraction of the litigation cost for both parties.</li>
                                    <li><strong>2. Scrutiny Creates Leverage:</strong> Once your DRT lawyer begins cross-examining the bank's case, filing counter-applications, and raising procedural objections, banks often discover that their case is not as airtight as their internal legal team believed. Any procedural error, incorrect calculation, or documentation gap gives you leverage to negotiate better settlement terms.</li>
                                    <li><strong>3. Interim Stays Protect Your Assets:</strong> By filing a Securitisation Application or other interim applications within the DRT, your lawyer can obtain stays on possession and auction proceedings. With your assets protected and the bank unable to recover through forced sale, the pressure shifts toward finding a mutually acceptable settlement.</li>
                                    <li><strong>4. DRT Promotes Mediation:</strong> The DRT framework encourages mediation between parties as a means to reach consensual resolution. Many DRTs have established mediation centres where experienced mediators help borrowers and banks find common ground. An experienced DRT lawyer can guide you through this mediation process to maximum effect.</li>
                                    <li><strong>5. Quarter-End and Year-End Pressure on Banks:</strong> Banks face quarterly and annual targets for NPA reduction and recovery percentages. A settlement offer made by your lawyer to the bank's nodal officer near the end of a financial quarter can receive much more favourable consideration than the same offer made mid-quarter.</li>
                                </ul>
                            </div>

                            <h2 id="drt-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Understanding the DRT Process: A Timeline for Borrowers</h2>
                            <div className="overflow-x-auto mb-8">
                                <table className="min-w-full border-collapse border border-gray-200 text-sm text-gray-700">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-200 px-4 py-3 text-left">Stage</th>
                                            <th className="border border-gray-200 px-4 py-3 text-left">What Happens</th>
                                            <th className="border border-gray-200 px-4 py-3 text-left">Your Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Bank Files OA</td>
                                            <td className="border border-gray-200 px-4 py-3">Bank submits Original Application with all loan documents</td>
                                            <td className="border border-gray-200 px-4 py-3">Engage a DRT lawyer immediately</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">DRT Admits OA and Issues Summons</td>
                                            <td className="border border-gray-200 px-4 py-3">Tribunal serves summons to borrower and guarantors</td>
                                            <td className="border border-gray-200 px-4 py-3">File written statement within 30 days</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Written Statement Filing</td>
                                            <td className="border border-gray-200 px-4 py-3">Borrower presents defence, denials and counter-claims</td>
                                            <td className="border border-gray-200 px-4 py-3">Prepare documents; begin OTS exploration</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Evidence and Arguments</td>
                                            <td className="border border-gray-200 px-4 py-3">Both parties file affidavits, examine witnesses</td>
                                            <td className="border border-gray-200 px-4 py-3">Lawyer cross-examines bank witnesses</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Final Arguments</td>
                                            <td className="border border-gray-200 px-4 py-3">Lawyers present legal arguments to Presiding Officer</td>
                                            <td className="border border-gray-200 px-4 py-3">Finalise OTS or present strong defence</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">DRT Order</td>
                                            <td className="border border-gray-200 px-4 py-3">Recovery Certificate issued or case dismissed</td>
                                            <td className="border border-gray-200 px-4 py-3">Appeal to DRAT within 45 days if adverse</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most important thing a borrower can do upon receiving DRT summons is to engage a specialist lawyer within the first 5 to 7 days. This gives the lawyer sufficient time to review your loan documents, identify any procedural errors in the bank's OA, prepare a comprehensive written statement, and simultaneously open OTS discussions with the bank. First impressions matter in DRT proceedings. A well-prepared written statement sets the tone for the entire case and signals to the bank that you have strong legal representation and are not a pushover.
                            </p>

                            <h2 id="ots-during-drt" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">OTS During DRT Proceedings: The Strategy That Works</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A One-Time Settlement (OTS) during DRT proceedings is not a sign of weakness. It is a sophisticated strategy that, when executed correctly, allows you to close your debt case significantly below the total outstanding amount, protect your assets from forced sale, and avoid the uncertainty of a DRT order that may go against you. Here is how skilled DRT lawyers approach OTS negotiations during active proceedings.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The first principle of OTS negotiation during DRT is what experienced practitioners call the "dual track" approach: your lawyer continues vigorous DRT litigation on the one hand, while simultaneously opening confidential settlement discussions with the bank's recovery department on the other. The litigation creates pressure; the settlement discussions provide a face-saving exit for both parties. Banks that know they face a determined, well-represented borrower who is raising legitimate procedural objections are far more likely to engage seriously in settlement talks.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The second principle is financial analysis. Your DRT lawyer must conduct a detailed analysis of the bank's claim, comparing it against the actual outstanding amount after correctly accounting for all payments made. Banks routinely inflate claims with compound penal interest, insurance charges, and inspection fees. A detailed audit often reveals that the actual legitimate outstanding is considerably lower than the claimed amount. This revised figure becomes the basis for your OTS offer.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The third principle is collateral analysis. For secured loans, your lawyer will obtain an independent market valuation of the secured assets. When the market value of the collateral is close to or higher than the outstanding amount, banks have a strong incentive to proceed with SARFAESI rather than settle. When the market value is significantly lower, banks realise that forced sale will not cover their dues, making a negotiated OTS that pays more than the net realizable value of the asset a rational business decision for the bank.
                            </p>

                            <h2 id="negotiation-strategy" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Expert OTS Negotiation Strategy for DRT Cases</h2>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light">
                                <ol className="list-decimal pl-6 space-y-4 text-gray-800">
                                    <li><strong>Start With a Formal Hardship Representation:</strong> Before proposing any OTS amount, your lawyer should send a formal hardship representation to the bank's Nodal Officer. This document should clearly explain the circumstances that caused the default, supported by documentary evidence. This creates a paper trail establishing that your default was not wilful and puts the bank on notice that you are genuinely willing to resolve the matter.</li>
                                    <li><strong>Make a Written, Numbered OTS Proposal:</strong> The OTS offer must be in writing, clearly stating the proposed settlement amount, the proposed timeline for payment, and the conditions (withdrawal of DRT case, issuance of NOC, removal of SARFAESI notices). Never negotiate OTS terms verbally or through informal channels.</li>
                                    <li><strong>Start Low, Move Incrementally:</strong> Your first offer should be at the lower end of the realistic range. The bank will counter-offer. Your lawyer negotiates the gap, moving up incrementally while pointing to the litigation risks the bank faces (procedural errors, valuation disputes, DRAT appeal risks) to justify keeping the offer conservative.</li>
                                    <li><strong>Propose a Quick Payment Timeline:</strong> Banks love OTS proposals that can be executed quickly. If you can pay the settled amount within 30 to 60 days of the agreement, this immediacy is often worth 5 to 10 percentage points of additional waiver, because it gives the bank immediate capital and avoids the risk of you defaulting on a settlement payment plan.</li>
                                    <li><strong>Request Waiver of All Penal Interest and Charges:</strong> The biggest opportunity for savings in any OTS negotiation is the waiver of penal interest, late payment charges, inspection fees, and legal costs that have been added to the principal. These can often amount to 40 to 60 percent of the total claimed amount. Insisting on their waiver is not unreasonable; it is standard practice in bank OTS settlements.</li>
                                    <li><strong>Obtain the Formal OTS Sanction Letter Before Any Payment:</strong> This is non-negotiable. The bank's formal OTS sanction letter, signed by an authorised officer and bearing the bank's seal, must be in your possession before you transfer a single rupee. Verbal assurances or informal confirmations are not legally binding. Your lawyer must review this letter carefully before you proceed to payment.</li>
                                </ol>
                            </div>

                            <h2 id="drat-appeals" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">DRAT Appeals: When to Fight the DRT Order</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the Debt Recovery Tribunal passes an order against you, the matter does not necessarily end there. The Debt Recovery Appellate Tribunal (DRAT) provides a second level of adjudication where DRT orders can be challenged. Understanding when to appeal and what to expect is an important part of DRT loan settlement strategy.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                An appeal before the DRAT must be filed within 45 days of the DRT order. The DRAT requires the application to be accompanied by a deposit of at least 50% of the amount of debt due as determined by the DRT, although this requirement can be waived or reduced by the DRAT in cases of genuine financial hardship. The DRAT can grant a stay of the DRT order pending the appeal, which is critical if the DRT has ordered immediate attachment or sale of your assets.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                DRAT appeals are most successful when the DRT order contains legal errors, ignored relevant evidence submitted by the borrower, or applied incorrect interest calculation principles. They are less effective as mere delays unless there are genuine grounds of appeal. An honest assessment by your DRT lawyer of whether the DRT order has genuine grounds of appeal is crucial before you invest in a DRAT proceeding.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Sometimes a DRAT appeal is filed strategically not primarily to contest the DRT order, but to buy additional time to complete OTS negotiations with the bank. With the DRAT filing, the bank knows that full enforcement may take another 12 to 24 months, making a negotiated resolution attractive. This is a legitimate, if challenging, legal strategy that requires experienced appellate counsel.
                            </p>

                            <h2 id="legal-rights" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Your Legal Rights as a Borrower in DRT Proceedings</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many borrowers feel powerless when they receive DRT summons, as if the bank's case is inevitable and final. The reality is that as a responding party in DRT proceedings, you have substantial legal rights that a qualified lawyer can exercise on your behalf.
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Right to File a Counter-Claim:</strong> If the bank has violated RBI guidelines, overcharged interest, or caused you financial loss through negligence, you can file a counter-claim in the same DRT proceeding. A successful counter-claim can reduce the net amount you owe or even result in the bank owing you compensation.</li>
                                <li><strong>Right to Examine the Bank's Loan Account Statements:</strong> Your lawyer can formally request complete and authenticated copies of your loan account statements from origination to the date of the DRT filing. Discrepancies, missed credits, or incorrect interest applications in these statements form powerful defence arguments.</li>
                                <li><strong>Right to Cross-Examine the Bank's Key Witnesses:</strong> The bank official who signed the OA on behalf of the bank must appear for cross-examination if you demand it. Your lawyer's cross-examination can expose gaps in the bank's documentation, establish that proper procedures were not followed, or reveal that the outstanding amount is different from what the bank has claimed.</li>
                                <li><strong>Right to Challenge the Valuation of Secured Assets:</strong> If the bank is seeking to sell your property to recover dues, you have the right to challenge the bank's valuation through an independent registered valuation report. Undervaluation by the bank is grounds for setting aside an auction, and the threat of this challenge can motivate the bank toward a fair OTS instead.</li>
                                <li><strong>Right to Propose Settlement at Any Stage:</strong> You have the right to submit an OTS proposal to the bank at any stage of DRT proceedings, including during cross-examination, during final arguments, and even after a recovery certificate is issued (though before the actual sale of property). The DRT encourages consensual resolution and will give you reasonable time to negotiate.</li>
                                <li><strong>Right to Dignity in Enforcement:</strong> Even after a Recovery Certificate is issued, the Recovery Officer must follow a prescribed procedure for attachment and sale. They cannot forcibly enter your home, cannot use intimidation, and must serve proper notice before any physical action. Violations of these procedures are grounds for complaint and legal action.</li>
                            </ul>

                            <h2 id="choosing-lawyer" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Choosing the Best Lawyer for DRT Loan Settlement: What to Look For</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The quality of legal representation in a DRT case is one of the most decisive factors in the outcome. An experienced DRT lawyer does not just write documents; they develop a case theory, conduct strategic litigation, and use the litigation as a foundation for settlement negotiations. Here is what separates an excellent DRT lawyer from an average one.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Regular DRT Practice:</strong> The lawyer must appear regularly before the specific DRT that is handling your case. Each DRT has its own procedural culture, preferred formats, and the Presiding Officer has their own approach to case management. A lawyer who appears rarely in DRT courts will not have this institutional knowledge.</li>
                                    <li><strong>Banking Law Expertise:</strong> DRT lawyers must understand SARFAESI, RBI guidelines, interest calculation methodologies, and loan documentation standards. Without this technical knowledge, they cannot effectively challenge the bank's account statements or cross-examine the bank's witnesses.</li>
                                    <li><strong>Settlement Negotiation Track Record:</strong> Ask specifically about OTS negotiations the lawyer has conducted during DRT proceedings. What percentage of their DRT clients achieved OTS rather than waiting for a final order? What is the typical quantum of waiver they have negotiated?</li>
                                    <li><strong>Availability for Urgent Matters:</strong> DRT cases often have urgent interim applications (for a stay on auction, for example) where the lawyer must appear on short notice. A lawyer who is difficult to reach or who is juggling too many cases simultaneously is a liability in DRT proceedings.</li>
                                    <li><strong>Transparent About Timelines:</strong> A good DRT lawyer will give you a realistic assessment of the timeline, the costs of the proceedings, and the probability of different outcomes. They will not make sweeping guarantees but will explain the best, realistic, and worst-case scenarios for your specific facts.</li>
                                </ul>
                            </div>

                            <h2 id="credit-score" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Credit Score Impact of DRT Loan Settlement: What to Expect</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When your loan account is at the stage where a DRT case has been filed, your credit score has almost certainly already suffered significant damage. The account is likely reported as NPA (Non-Performing Asset) or in "Written Off" status. Understanding the credit score implications of settling through DRT helps you plan your financial recovery realistically.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When you settle a loan that is in DRT proceedings, the bank will typically report the account as "Settled" on your credit bureau report. While this is still a negative marker, it is significantly better than a "Written Off" or "Suit Filed" status, which indicates ongoing unresolved default. The "Settled" status demonstrates that you reached a resolution and paid something, rather than completely walking away from the debt.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The path to credit score recovery after a DRT settlement is a patient one. Typically, you should: verify with all credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) that the account is correctly reported as "Settled" with a zero balance; begin building positive credit history through a secured credit card against a fixed deposit; avoid any further defaults on any other obligations; and consider applying for a small secured loan from an NBFC after 18 to 24 months. The "Settled" status remains on your report for approximately 7 years from the date of settlement, but its negative impact on lending decisions diminishes significantly after 3 years of clean payment history.
                            </p>

                            <h2 id="case-studies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Case Studies: DRT Loan Settlements Done Right</h2>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Case 1: 85 Lakh Business Loan Settled at 38 Lakhs During DRT Proceedings</h3>
                                <p className="text-gray-700 mb-4">
                                    A Delhi-based trading company had an 85 lakh rupee outstanding amount from a business loan that had been NPA for 3 years. The bank filed an OA before DRT Delhi and simultaneously initiated SARFAESI proceedings on the company's mortgaged commercial property valued at 60 lakhs.
                                </p>
                                <p className="text-gray-700">
                                    Result: A DRT lawyer filed an SA challenging the SARFAESI valuation (which was below market rate) and simultaneously initiated OTS discussions. The bank's internal settlement committee, aware that the property valuation was being contested and that the DRT case would take 12 to 18 months minimum, agreed to settle at 38 lakhs. The company paid within 45 days, received its NOC, and the DRT case was withdrawn by mutual consent.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Case 2: Credit Card and Personal Loan Settlement via DRT Mechanism</h3>
                                <p className="text-gray-700 mb-4">
                                    A Mumbai professional had accumulated 32 lakh rupees in credit card and personal loan dues across two banks following a medical emergency and job loss. One bank had filed DRT proceedings while the other was threatening to do the same.
                                </p>
                                <p className="text-gray-700">
                                    Result: A legal strategy was devised to use the DRT case as leverage with both banks. The settled DRT case bank accepted 13 lakhs (40% of outstanding) after the borrower's lawyer filed comprehensive hardship documentation and a counter-examination application highlighting the bank's interest overcharging. The second bank, seeing the resolution of the DRT case, agreed to a similar settlement rate without needing to file their own DRT case.
                                </p>
                            </div>

                            <h2 id="common-mistakes" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Common Mistakes Borrowers Make in DRT Proceedings</h2>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Ignoring the Summons:</strong> Many borrowers, paralysed by fear, simply ignore DRT summons hoping the problem will go away. It does not. Ignoring leads to ex-parte orders that are very difficult to set aside.</li>
                                <li><strong>Engaging a Non-Specialist Lawyer:</strong> Using a family friend who is a general civil litigator for a DRT case is a serious mistake. DRT law is specialised, and the procedural nuances of banking law require dedicated expertise.</li>
                                <li><strong>Making Partial Payments Without Documentation:</strong> Some borrowers make ad-hoc partial payments to the bank during DRT proceedings hoping to demonstrate goodwill. Without proper documentation linking these payments to a formal restructuring or OTS agreement, these payments can be treated as acknowledgement of the total debt, weakening your negotiating position.</li>
                                <li><strong>Talking to Bank Officials Without Legal Guidance:</strong> Any statement you make to a bank official can potentially be used against you in DRT proceedings. All communications with the bank during DRT should be in writing and ideally through your lawyer.</li>
                                <li><strong>Agreeing to Verbal OTS Terms:</strong> Always, always insist on a written, signed OTS sanction letter before making any payment. Verbal commitments from bank officials have no legal standing and are frequently repudiated after payment.</li>
                                <li><strong>Waiting Too Long to File the Written Statement:</strong> The 30-day deadline to file a written statement after receiving DRT summons is strict. Missing this deadline results in an ex-parte order. Engage a lawyer on the same day you receive the summons.</li>
                            </ul>

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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Facing DRT Proceedings? Get Expert Help Now</h3>
                                <p className="text-blue-800 mb-6">Whether you have just received DRT summons or are already mid-way through proceedings, our specialist DRT lawyers can protect your assets, negotiate a fair OTS, and help you close your debt case on the best possible terms. Do not navigate DRT proceedings alone.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book Your Free Consultation
                                </Link>
                            </div>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14 mt-10">Conclusion: DRT Loan Settlement Is Achievable With the Right Legal Partner</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A DRT case, while intimidating, is not the end of the road. For thousands of borrowers across India, the DRT has been the forum where the best loan settlements of their financial lives were negotiated. The combination of legal pressure through DRT proceedings and skilled settlement negotiations creates a unique dynamic that skilled lawyers exploit to deliver results that would never have been achievable through voluntary bank discussions alone.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The key is timing, expertise, and documentation. Every day that passes after receiving a DRT summons without legal engagement is a day of lost strategic opportunity. The moment you engage a specialist DRT lawyer, the dynamic shifts. The bank is no longer dealing with an overwhelmed individual; they are dealing with a legal professional who knows the procedural rules as well as they do, who will scrutinise every document, and who can convert any procedural error into negotiation leverage.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we connect borrowers with the best DRT lawyers across India who combine technical legal expertise with practical settlement experience. Our approach is results-focused: we want to get your debt resolved at the best possible terms, whether that is through a successful DRT defence, an OTS negotiation, or a combination of both. Reach out today for a free consultation and let us assess the best legal path for your DRT loan settlement.
                            </p>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The information provided in this guide is for educational purposes and does not constitute legal advice. Please consult a qualified DRT lawyer before taking any action in your debt recovery tribunal matter.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">DRT Case Pending?</h4>
                                <p className="text-sm text-gray-600 mb-6">Get specialist DRT lawyers to negotiate a settlement and protect your assets from bank recovery action. Free first consultation.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Start My DRT Consultation
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ Specialist DRT Lawyers</p>
                                    <p>✓ OTS Negotiation Experts</p>
                                    <p>✓ Pan-India Coverage</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Legal Guides</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-msme-business-loan-dispute" className="block text-sm text-blue-600 hover:underline">MSME Business Loan Dispute</Link>
                                    <Link href="/best-lawyer-for-notice-for-loan-default" className="block text-sm text-blue-600 hover:underline">Loan Default Notice Lawyer</Link>
                                    <Link href="/best-lawyer-for-drt-case-defence-for-bank-loan-recovery" className="block text-sm text-blue-600 hover:underline">DRT Case Defence</Link>
                                    <Link href="/best-lawyer-for-secured-loan-litigation-drt" className="block text-sm text-blue-600 hover:underline">Secured Loan Litigation</Link>
                                    <Link href="/best-lawyer-for-loan-settlement-during-drt" className="block text-sm text-blue-600 hover:underline">Loan Settlement During DRT</Link>
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
