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
            answer: 'Yes, absolutely. Loan closure is possible at any stage of DRT steps. In fact. DRT steps often create a more realistic environment for closure talks because both parties understand the costs and risks of continued litigation. Many banks are willing to settle better OTS terms during DRT steps to recover funds without prolonged legal battles. Your DRT counsel can represent you in the court while simultaneously settle closure terms with the bank claims department.'
        },
        {
            question: 'What is the time limit to respond to a DRT summons?',
            answer: 'Upon receiving a summons from the Debt claims court. You typically have 30 days to file a written statement in defence. Failing to file within this period can result in an ex-parte order against you. Meaning the DRT may pass a claims order without hearing your side. This deadline is non-negotiable and requires fast engagement of a qualified DRT counsel upon receipt of the summons.'
        },
        {
            question: 'What percentage of the outstanding loan can I expect to settle for through DRT?',
            answer: 'Closure amounts during DRT steps typically range from 40% to 75% of the total unpaid amount. Depending on the age of the NPA. The type of loan (secured or clean). The realizable value of pledge. the bank’s internal closure policy. Senior NPAs (overdue for more than 3 to 5 years) often attract more favourable closure terms because the bank recognizes that full claims through litigation is increasingly unlikely. Your counsel can analyse the exact factors in your case to give a realistic estimate.'
        },
        {
            question: 'What is a DRAT and when should I approach it?',
            answer: 'DRAT stands for Debt claims Appellate court. It is the appellate body above the DRT. If you are aggrieved by an order passed by the DRT. You can appeal to the DRAT within 45 days of the DRT order. The DRAT can grant a stay on the DRT order pending the appeal. which can be key if the DRT has ordered fast claims action. DRAT appeals require a skilled appellate counsel with experience in banking law.'
        },
        {
            question: 'Can the bank take possession of my property while DRT proceedings are ongoing?',
            answer: 'Yes. A bank can proceed with SARFAESI action while DRT steps are pending. unless you obtain a exact stay order from the DRT. This is why filing a Securitisation Application (SA) before the DRT from the date of the Section 13(4) takeover notice is key. The DRT can grant an interim stay on takeover and auction steps while the main case is being heard. Without this stay. The bank can proceed to seal and auction your home even during litigation.'
        },
        {
            question: 'How long does a DRT case typically take to be resolved?',
            answer: 'The claims of Debts and Bankruptcy Act mandates relief within 180 days. Yet. In practice. Contested DRT cases take anywhere from 12 months to 36 months or more. Depending on the court’s backlog. The complexity of the case. The number of witnesses. whether DRAT appeals are filed. Many cases resolve sooner through OTS talks during the pendency of DRT steps. which is often the most efficient outcome for both the bank and the clients.'
        },
        {
            question: 'What documents do I need to prepare for DRT defence?',
            answer: 'For an effective DRT defence. You should gather your original loan sanction letter. Loan pacts. All payment receipts and bank statements. SARFAESI or demand notices received. Any previous correspondence with the bank. Audited money statements for the period of default. Proof proving the hardship that caused the default (job loss. Firm failure. Medical emergency). Home valuation reports. any evidence of procedural violations by the bank. Your DRT counsel will advise on case-exact additional papers.'
        },
        {
            question: 'Is it possible to get an interim stay from the DRT on auction proceedings?',
            answer: 'Yes. When you file a Securitisation Application (SA) before the DRT challenging a bank’s SARFAESI action. You can simultaneously apply for an interim stay on auction steps. If the DRT is satisfied that a prima facie case exists and that irreversible harm would occur if the stay is not granted. It will issue a conditional stay. Typically requiring you to deposit a rate of the unpaid amount. An experienced DRT counsel can maximize your chances of obtaining this stay quickly.'
        },
        {
            question: 'Can a DRT order be contested before the High Court?',
            answer: 'While the standard appellate hierarchy requires you to first challenge a DRT order before the DRAT. In extraordinary hardship involving violations of fundamental rights or jurisdictional errors. You can approach the High Court straight through a writ petition under Article 226 of the Constitution. Yet. Courts generally redirect clients to exhaust the DRAT remedy first unless there are compelling legal grounds. High Court action in DRT matters is not routine and requires expert legal judgement.'
        },
        {
            question: 'What happens to the DRT case once an OTS is finalised?',
            answer: 'Once an OTS is finalised and the agreed amount is paid in full. The bank will issue a No Dues letter and file an application before the DRT to withdraw the Original Application as the debt has been satisfied. Your counsel will ensure that the OTS pacts explicitly requires the bank to withdraw all legal steps. Including DRT cases and SARFAESI actions. as a condition precedent to or simultaneously with your final payment. This withdrawal must be recorded in the DRT by way of a formal consent order for permanent legal safety.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Singhania',
            location: 'Delhi',
            stars: 5,
            comment: 'The bank had filed a DRT case against my firm for 85 lakh rupees. CredSettle connected me with an excellent DRT counsel who got a stay on the auction within 7 days. After 4 months of talks. We settled for 38 lakhs. This was far better than what I thought was possible. experts and knowledgeable team.'
        },
        {
            name: 'Rekha Pillai',
            location: 'Chennai',
            stars: 5,
            comment: 'I had no idea that I could settle a closure even after the DRT case was filed. The counsel explained the entire process clearly and settle a 50% reduction in the total dues. The bank withdrew the DRT case after we paid. I got my NOC in just 3 weeks after final payment. Exceptional service.'
        },
        {
            name: 'Manish Bhatia',
            location: 'Ahmedabad',
            stars: 5,
            comment: 'My factory was about to be auctioned under SARFAESI when I contacted CredSettle. The DRT counsel filed an SA and got the auction stayed the same day. We then settle an OTS that allowed me to keep the factory and settle the loan. I have since rebuilt my firm. A life-changing action.'
        },
        {
            name: 'Sunita Gupta',
            location: 'Lucknow',
            stars: 5,
            comment: 'Received a DRT summons for a own loan I could not repay after my husband’s illness. The legal team guided me through every step of the written statement filing. We then proposed an OTS and the bank agreed to settle for 40% of the unpaid amount. The DRT case was withdrawn. Grateful beyond words.'
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
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light"> Expert legal strategies to settle your bank loan through the Debt claims court. Protect your assets. Settle OTS. close your debt case permanently. </p>
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
                            <li className="inline-flex items-center"> <Link href="/" className="inline-flex items-center hover:text-blue-600"> Home </Link> </li>
                            <li> <div className="flex items-center"> <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /> </svg> <span className="ml-1 font-medium text-gray-500 md:ml-2"> Best counsel for Loan closure by DRT </span> </div> </li>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Overview: Why DRT Loan Settlement Requires Specialist Legal Expertise</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> When a bank account becomes a Non-Performing Asset and the bank decides to escalate their claims efforts. The Debt claims court (DRT) becomes the battleground. For millions of clients in India. Receiving a DRT notice or summons is one of the most frightening money experiences of their lives. The fast reaction is often panic. Followed by confusion about what to do next. This guide is designed to replace that panic with clarity. to explain why finding the best counsel for loan closure by DRT is the single most important decision you will make at this stage. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> What many clients do not know is that a DRT case is not the end of the road. In fact. The DRT is often a platform where skilled counsel settle the most favourable loan closures that a clients could ever hope to achieve outside of formal steps. Banks file DRT cases to maximise claims pressure. They also simultaneously open themselves to scrutiny of their own procedural compliance. Rates calculations. valuation practices. An experienced DRT counsel turns this scrutiny into your settle leverage. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The DRT framework in India is governed by the claims of Debts and Bankruptcy Act of 1993. which applies to loan claims claims exceeding 20 lakh rupees by banks and money institutions. The court has exact powers including the ability to pass claims letters. Order attachment and sale of homes. grant interim stays on bank actions pending the relief of disputes. For clients. The DRT offers a structured legal forum where you can present your defence. Challenge the bank’s calculation of dues. simultaneously explore closure options. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> This thorough guide takes you through every dimension of DRT loan closure. From grasp the court’s process and your rights as a clients. To practical strategies for settle an OTS during DRT steps. We also cover DRAT appeals. The impact on your credit score. how to select the best DRT counsel for your exact case. Read carefully. because every section contains information that can significantly affect the outcome of your case. </p>

                            <h2 id="what-is-drt" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">What is the Debt Recovery Tribunal and How Does It Work?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The Debt claims court was established under the claims of Debts Due to Banks and money Institutions Act. 1993. With the primary objective of providing a faster mechanism for debt claims by banks and money institutions compared to civil courts. Before the DRT system was created. Banks had to pursue debt claims through regular civil courts. which often took 10 to 15 years to conclude. The DRT was designed to resolve cases in 180 days. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> There are 39 Debt claims Tribunals across India. Each headed by a Presiding head who is typically a retired District Judge or equivalent. The DRT has jurisdiction over cases where the debt claimed by a bank or money institution exceeds 20 lakh rupees. Smaller debt recoveries are handled through courts or other mechanisms. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The DRT process begins when the bank files an Original Application (OA) detailing the unpaid dues. Supporting papers. the relief sought. Upon admission of the OA. The DRT issues summons to the clients and any guarantors named in the application. The clients must file a written statement in defence within 30 days of receiving the summons. Both parties then present their evidence. Examine witnesses. make legal arguments. The DRT eventually passes an order called a claims letter if it finds in favour of the bank. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> A claims letter empowers the claims head of the DRT to attach and sell the clients’s assets. The claims head can attach bank accounts. Seize vehicles. Attach and sell home. recover money from salary if the clients is employed. This enforcement arm of the DRT makes a claims letter almost equivalent to a civil court decree for practical purposes. </p>

                            <h2 id="why-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Why Settling a Loan Through DRT Proceedings Can Be Advantageous</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Counterintuitively. The existence of DRT steps can actually work in your favour as a clients seeking to settle a loan. Here is why pursuing closure during DRT steps is often more effective than trying to settle before or outside of DRT. </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>1. Mutual Cost Awareness:</strong> When both parties are engaged in DRT litigation. Both sides are acutely aware of the ongoing legal costs. Banks understand that a prolonged DRT case costs them not just counsel fees. also the time value of money tied up in provisioned capital. A well-timed OTS offer can close the file at a fraction of the litigation cost for both parties.</li>
                                    <li><strong>2. Scrutiny Creates Leverage:</strong> Once your DRT counsel begins cross-examining the bank’s case. Filing counter-applications. Raising procedural objections. Banks often discover that their case is not as airtight as their internal legal team believed. Any procedural error. Incorrect calculation. proof gap gives you leverage to settle better closure terms.</li>
                                    <li><strong>3. Interim Stays Protect Your Assets:</strong> By filing a Securitisation Application or other interim applications within the DRT. Your counsel can obtain stays on takeover and auction steps. With your assets protected and the bank unable to recover through forced sale. The pressure shifts toward finding a mutually acceptable closure.</li>
                                    <li><strong>4. DRT Promotes Mediation:</strong> The DRT framework encourages mediation between parties as a means to reach consensual relief. Many DRTs have established mediation centres where experienced mediators help clients and banks find common ground. An experienced DRT counsel can guide you through this mediation process to maximum effect.</li>
                                    <li><strong>5. Quarter-End and Year-End Pressure on Banks:</strong> Banks face quarterly and annual targets for NPA reduction and claims rate. A deals made by your counsel to the bank’s nodal head near the end of a money quarter can receive much more favourable consideration than the same offer made mid-quarter.</li>
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
                                            <td className="border border-gray-200 px-4 py-3">Bank submits Original Application with all loan papers</td>
                                            <td className="border border-gray-200 px-4 py-3">Engage a DRT counsel fast</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">DRT Admits OA and Issues Summons</td>
                                            <td className="border border-gray-200 px-4 py-3">court serves summons to clients and guarantors</td>
                                            <td className="border border-gray-200 px-4 py-3">File written statement within 30 days</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Written Statement Filing</td>
                                            <td className="border border-gray-200 px-4 py-3">Clients presents defence. Denials and counter-claims</td>
                                            <td className="border border-gray-200 px-4 py-3">Prepare papers. begin OTS exploration</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Evidence and Arguments</td>
                                            <td className="border border-gray-200 px-4 py-3">Both parties file affidavits. Examine witnesses</td>
                                            <td className="border border-gray-200 px-4 py-3">counsel cross-examines bank witnesses</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Final Arguments</td>
                                            <td className="border border-gray-200 px-4 py-3">counsel present legal arguments to Presiding head</td>
                                            <td className="border border-gray-200 px-4 py-3">Finalise OTS or present strong defence</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">DRT Order</td>
                                            <td className="border border-gray-200 px-4 py-3">claims letter issued or case dismissed</td>
                                            <td className="border border-gray-200 px-4 py-3">Appeal to DRAT within 45 days if adverse</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6"> The most important thing a clients can do upon receiving DRT summons is to engage a specialist counsel within the first 5 to 7 days. This gives the counsel sufficient time to review your loan papers. Identify any procedural errors in the bank’s OA. Prepare a thorough written statement. simultaneously open OTS discussions with the bank. First impressions matter in DRT steps. A well-prepared written statement sets the tone for the entire case and signals to the bank that you have strong legal representation and are not a pushover. </p>

                            <h2 id="ots-during-drt" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">OTS During DRT Proceedings: The Strategy That Works</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> A One-Time closure (OTS) during DRT steps is not a sign of weakness. It is a sophisticated strategy that. When executed correctly. Allows you to close your debt case significantly below the total unpaid amount. Protect your assets from forced sale. avoid the uncertainty of a DRT order that may go against you. Here is how skilled DRT counsel approach OTS talks during active steps. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The first principle of OTS talks during DRT is what experienced practitioners call the "dual track" approach: your counsel continues vigorous DRT litigation on the one hand. while simultaneously opening private closure discussions with the bank’s claims department on the other. The litigation creates pressure. the closure discussions provide a face-saving exit for both parties. Banks that know they face a determined. Well-represented clients who is raising legitimate procedural objections are far more likely to engage seriously in talks. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The second principle is money analysis. Your DRT counsel must conduct a detailed analysis of the bank’s claim. Comparing it against the actual unpaid amount after correctly accounting for all payments made. Banks routinely inflate claims with compound penal rates. Cover charges. inspection fees. A detailed audit often reveals that the actual legitimate unpaid is considerably lower than the claimed amount. This revised figure becomes the basis for your OTS offer. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The third principle is pledge analysis. For secured loans. Your counsel will obtain an independent market valuation of the secured assets. When the market value of the pledge is close to or higher than the unpaid amount. Banks have a strong incentive to proceed with SARFAESI rather than settle. When the market value is significantly lower. Banks realise that forced sale will not cover their dues. Making a settle OTS that pays more than the net realizable value of the asset a rational firm decision for the bank. </p>

                            <h2 id="negotiation-strategy" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Expert OTS Negotiation Strategy for DRT Cases</h2>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light">
                                <ol className="list-decimal pl-6 space-y-4 text-gray-800">
                                    <li><strong>Start With a Formal Hardship Representation:</strong> Before proposing any OTS amount. Your counsel should send a formal hardship representation to the bank’s Nodal head. This papers should clearly explain the hardship that caused the default. Supported by documentary evidence. This creates a paper trail establishing that your default was not wilful and puts the bank on notice that you are genuinely willing to resolve the matter.</li>
                                    <li><strong>Make a Written. Numbered OTS Proposal:</strong> The OTS offer must be in writing. Clearly stating the proposed payout sum. The proposed timeline for payment. The conditions (withdrawal of DRT case. Issuance of NOC. Removal of SARFAESI notices). Never settle OTS terms verbally or through informal channels.</li>
                                    <li><strong>Start Low. Move Incrementally:</strong> Your first offer should be at the lower end of the realistic range. The bank will counter-offer. Your counsel negotiates the gap. Moving up incrementally while pointing to the litigation risks the bank faces (procedural errors. Valuation disputes. DRAT appeal risks) to justify keeping the offer conservative.</li>
                                    <li><strong>Propose a Quick Payment Timeline:</strong> Banks love OTS proposals that can be executed quickly. If you can pay the settled amount within 30 to 60 days of the pacts. This immediacy is often worth 5 to 10 rate points of additional waiver. because it gives the bank fast capital and avoids the risk of you defaulting on a closure payment plan.</li>
                                    <li><strong>Request Waiver of All Penal rates and Charges:</strong> The biggest opportunity for savings in any OTS talks is the waiver of penal rates. Late payment charges. Inspection fees. legal costs that have been added to the main sum. These can often amount to 40 to 60 percent of the total claimed amount. Insisting on their waiver is not unreasonable. it is standard practice in bank OTS closures.</li>
                                    <li><strong>Obtain the Formal OTS Sanction Letter Before Any Payment:</strong> This is non-negotiable. The bank’s formal OTS sanction letter. Signed by an authorised head and bearing the bank’s seal. Must be in your takeover before you transfer a single rupee. Verbal assurances or informal confirmations are not by law binding. Your counsel must review this letter carefully before you proceed to payment.</li>
                                </ol>
                            </div>

                            <h2 id="drat-appeals" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">DRAT Appeals: When to Fight the DRT Order</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> If the Debt claims court passes an order against you. The matter does not necessarily end there. The Debt claims Appellate court (DRAT) provides a second level of adjudication where DRT orders can be challenged. grasp when to appeal and what to expect is an important part of DRT loan closure strategy. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> An appeal before the DRAT must be filed within 45 days of the DRT order. The DRAT requires the application to be accompanied by a deposit of at least 50% of the amount of debt due as determined by the DRT. although this requirement can be waived or reduced by the DRAT in cases of genuine money hardship. The DRAT can grant a stay of the DRT order pending the appeal. which is key if the DRT has ordered fast attachment or sale of your assets. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> DRAT appeals are most successful when the DRT order contains legal errors. Ignored relevant evidence submitted by the clients. applied incorrect rates calculation principles. They are less effective as mere delays unless there are genuine grounds of appeal. An honest assessment by your DRT counsel of whether the DRT order has genuine grounds of appeal is crucial before you invest in a DRAT steps. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Sometimes a DRAT appeal is filed strategically not primarily to contest the DRT order. to buy additional time to complete OTS talks with the bank. With the DRAT filing. The bank knows that full enforcement may take another 12 to 24 months. Making a settle relief attractive. This is a legitimate. If challenging. Legal strategy that requires experienced appellate counsel. </p>

                            <h2 id="legal-rights" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Your Legal Rights as a Borrower in DRT Proceedings</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Many clients feel powerless when they receive DRT summons. as if the bank’s case is inevitable and final. The reality is that as a responding party in DRT steps. You have substantial legal rights that a qualified counsel can exercise on your behalf. </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Right to File a Counter-Claim:</strong> If the bank has violated RBI guidelines. Overcharged rates. Caused you money loss through negligence. You can file a counter-claim in the same DRT steps. A successful counter-claim can reduce the net amount you owe or even result in the bank owing you compensation.</li>
                                <li><strong>Right to Examine the Bank’s Loan Account Statements:</strong> Your counsel can formally request complete and authenticated copies of your loan account statements from origination to the date of the DRT filing. Discrepancies, missed credits. incorrect rates applications in these statements form powerful defence arguments.</li>
                                <li><strong>Right to Cross-Examine the Bank’s Key Witnesses:</strong> The bank valid who signed the OA on behalf of the bank must appear for cross-examination if you demand it. Your counsel’s cross-examination can expose gaps in the bank’s proof. Establish that proper procedures were not followed. reveal that the unpaid amount is different from what the bank has claimed.</li>
                                <li><strong>Right to Challenge the Valuation of Secured Assets:</strong> If the bank is seeking to sell your home to recover dues. You have the right to challenge the bank’s valuation through an independent registered valuation report. Undervaluation by the bank is grounds for setting aside an auction. the threat of this challenge can motivate the bank toward a fair OTS instead.</li>
                                <li><strong>Right to Propose closure at Any Stage:</strong> You have the right to submit an OTS proposal to the bank at any stage of DRT steps. Including during cross-examination. During final arguments. even after a claims letter is issued (though before the actual sale of home). The DRT encourages consensual relief and will give you reasonable time to settle.</li>
                                <li><strong>Right to Dignity in Enforcement:</strong> Even after a claims letter is issued. The claims head must follow a prescribed procedure for attachment and sale. They cannot forcibly enter your home. Cannot use threaten. must serve proper notice before any real action. Violations of these procedures are grounds for complaint and legal action.</li>
                            </ul>

                            <h2 id="choosing-lawyer" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Choosing the Best Lawyer for DRT Loan Settlement: What to Look For</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The quality of legal representation in a DRT case is one of the most decisive factors in the outcome. An experienced DRT counsel does not just write papers. They develop a case theory. Conduct strategic litigation. use the litigation as a foundation for closure talks. Here is what separates an excellent DRT counsel from an average one. </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Regular DRT Practice:</strong> The counsel must appear regularly before the exact DRT that is handling your case. Each DRT has its own procedural culture. Preferred formats. the Presiding head has their own approach to case handling. A counsel who appears rarely in DRT courts will not have this bank knowledge.</li>
                                    <li><strong>Banking Law Expertise:</strong> DRT counsel must understand SARFAESI. RBI guidelines. Rates calculation methodologies. loan proof standards. Without this technical knowledge. They cannot effectively challenge the bank’s account statements or cross-examine the bank’s witnesses.</li>
                                    <li><strong>closure talks Track Record:</strong> Ask specifically about OTS talks the counsel has conducted during DRT steps. What rate of their DRT clients achieved OTS rather than waiting for a final order? What is the typical quantum of waiver they have settle?</li>
                                    <li><strong>Availability for Urgent Matters:</strong> DRT cases often have urgent interim applications (for a stay on auction. For example) where the counsel must appear on short notice. A counsel who is difficult to reach or who is juggling too many cases simultaneously is a risk in DRT steps.</li>
                                    <li><strong>Transparent About Timelines:</strong> A good DRT counsel will give you a realistic assessment of the timeline. The costs of the steps. the probability of different outcomes. They will not make sweeping guarantees but will explain the best. Realistic. worst-case scenarios for your exact facts.</li>
                                </ul>
                            </div>

                            <h2 id="credit-score" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Credit Score Impact of DRT Loan Settlement: What to Expect</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> When your loan account is at the stage where a DRT case has been filed. Your credit score has almost certainly already suffered significant damage. The account is likely reported as NPA (Non-Performing Asset) or in "Written Off" status. grasp the credit score implications of settling through DRT helps you plan your money claims realistically. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> When you settle a loan that is in DRT steps. The bank will typically report the account as "Settled" on your credit desk report. While this is still a negative marker. It is significantly better than a "Written Off" or "Suit Filed" status. which indicates ongoing unresolved default. The "Settled" status demonstrates that you reached a relief and paid something. Rather than fully walking away from the debt. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The path to credit score claims after a DRT closure is a patient one. Typically. You should: check with all credit bureaus (CIBIL. Experian. Equifax. CRIF High Mark) that the account is correctly reported as "Settled" with a zero balance. begin building positive credit history through a secured credit card against a fixed deposit. avoid any further defaults on any other debts. and consider applying for a small secured loan from an NBFC after 18 to 24 months. The "Settled" status remains on your report for about 7 years from the date of closure. its negative impact on lending decisions diminishes significantly after 3 years of clean payment history. </p>

                            <h2 id="case-studies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Case Studies: DRT Loan Settlements Done Right</h2>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                                <p className="text-xl font-bold text-gray-900 mb-4">Case 1: 85 Lakh firm Loan Settled at 38 Lakhs During DRT steps</p>
                                <p className="text-gray-700 mb-4"> A Delhi-based trading company had an 85 lakh rupee unpaid amount from a firm loan that had been NPA for 3 years. The bank filed an OA before DRT Delhi and simultaneously initiated SARFAESI steps on the company’s mortgaged trade home valued at 60 lakhs. </p>
                                <p className="text-gray-700"> Result: A DRT counsel filed an SA challenging the SARFAESI valuation (which was below market rate) and simultaneously initiated OTS discussions. The bank’s internal closure board. Aware that the home valuation was being contested and that the DRT case would take 12 to 18 months minimum. Agreed to settle at 38 lakhs. The company paid within 45 days. Received its NOC. the DRT case was withdrawn by mutual consent. </p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                                <p className="text-xl font-bold text-gray-900 mb-4">Case 2: Credit Card and own Loan closure via DRT Mechanism</p>
                                <p className="text-gray-700 mb-4"> A Mumbai experts had accumulated 32 lakh rupees in credit card and own loan dues across two banks following a medical emergency and job loss. One bank had filed DRT steps while the other was threatening to do the same. </p>
                                <p className="text-gray-700"> Result: A legal strategy was devised to use the DRT case as leverage with both banks. The settled DRT case bank accepted 13 lakhs (40% of unpaid) after the clients’s counsel filed thorough hardship proof and a counter-examination application highlighting the bank’s rates overcharging. The second bank. Seeing the relief of the DRT case. Agreed to a similar closure rate without needing to file their own DRT case. </p>
                            </div>

                            <h2 id="common-mistakes" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Common Mistakes Borrowers Make in DRT Proceedings</h2>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Ignoring the Summons:</strong> Many clients. Paralysed by fear. Simply ignore DRT summons hoping the problem will go away. It does not. Ignoring leads to ex-parte orders that are very difficult to set aside.</li>
                                <li><strong>Engaging a Non-Specialist counsel:</strong> Using a family friend who is a general civil litigator for a DRT case is a serious mistake. DRT law is specialised. the procedural nuances of banking law require dedicated expertise.</li>
                                <li><strong>Making Partial Payments Without proof:</strong> Some clients make ad-hoc partial payments to the bank during DRT steps hoping to demonstrate goodwill. Without proper proof linking these payments to a formal restructuring or OTS pacts. These payments can be treated as acknowledgement of the total debt. Weakening your settle position.</li>
                                <li><strong>Talking to Bank Officials Without Legal Guidance:</strong> Any statement you make to a bank valid can potentially be used against you in DRT steps. All contacts with the bank during DRT should be in writing and ideally through your counsel.</li>
                                <li><strong>Agreeing to Verbal OTS Terms:</strong> Always. Always insist on a written. Signed OTS sanction letter before making any payment. Verbal commitments from bank officials have no legal standing and are often repudiated after payment.</li>
                                <li><strong>Waiting Too Long to File the Written Statement:</strong> The 30-day deadline to file a written statement after receiving DRT summons is strict. Missing this deadline results in an ex-parte order. Engage a counsel on the same day you receive the summons.</li>
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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Facing DRT steps? Get Expert Help Now</h3>
                                <p className="text-blue-800 mb-6">Whether you have just received DRT summons or are already mid-way through steps. Our specialist DRT counsel can protect your assets. Settle a fair OTS. help you close your debt case on the best possible terms. Do not navigate DRT steps alone.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book Your Free Consultation
                                </Link>
                            </div>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14 mt-10">Conclusion: DRT Loan Settlement Is Achievable With the Right Legal Partner</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> A DRT case. While threaten. Is not the end of the road. For thousands of clients across India. The DRT has been the forum where the best loan closures of their money lives were settle. The combination of legal pressure through DRT steps and skilled closure talks creates a unique dynamic that skilled counsel exploit to deliver results that would never have been achievable through voluntary bank discussions alone. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The key is timing. Expertise. proof. Every day that passes after receiving a DRT summons without legal engagement is a day of lost strategic opportunity. The moment you engage a specialist DRT counsel. The dynamic shifts. The bank is no longer dealing with an overwhelmed individual. They are dealing with a legal experts who knows the procedural rules as well as they do. Who will scrutinise every papers. who can convert any procedural error into talks leverage. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> At CredSettle. We connect clients with the best DRT counsel across India who combine technical legal expertise with practical closure experience. Our approach is results-focused: we want to get your debt resolved at the best possible terms. Whether that is through a successful DRT defence. An OTS talks. a combination of both. Reach out today for a free consultation and let us assess the best legal path for your DRT loan closure. </p>

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
                                <p className="font-bold text-xl text-gray-900 mb-2">DRT Case Pending?</p>
                                <p className="text-sm text-gray-600 mb-6">Get specialist DRT counsel to settle a closure and protect your assets from bank claims action. Free first consultation.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Start My DRT Consultation
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v Specialist DRT counsel</p>
                                    <p>v OTS talks Experts</p>
                                    <p>v Pan-India Coverage</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <p className="font-bold text-gray-900 mb-4 border-b pb-2">Related Legal Guides</p>
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
