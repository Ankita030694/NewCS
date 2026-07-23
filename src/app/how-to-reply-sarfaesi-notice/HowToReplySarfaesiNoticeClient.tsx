'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function HowToReplySarfaesiNoticeClient() {
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
        { id: 'section-13-2-ultimatum', label: 'The 60 Day Ultimatum' },
        { id: 'silence-property-loss', label: 'Why Silence Fails' },
        { id: 'statutory-objection', label: 'Section 13(3A) Objection' },
        { id: 'key-legal-grounds', label: 'Key Legal Defenses' },
        { id: 'format-reply', label: 'Reply Format Guide' },
        { id: 'debt-restructuring', label: 'OTS and Restructuring' },
        { id: 'drt-appeals', label: 'DRT Appeals (Sec 17)' },
        { id: 'case-studies', label: 'Case Studies' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Verdict' },
    ];

    const faqs = [
        {
            question: 'What is a Section 13(2) notice under the SARFAESI Act?',
            answer: 'A Section 13(2) notice is a formal legal demand sent by a secured creditor (a bank or NBFC) after a loan account is classified as a Non Performing Asset (NPA). It demands full payment of the outstanding dues within 60 days. If you fail to pay or reply with a valid objection, the bank can proceed to take physical possession of your property under Section 13(4).'
        },
        {
            question: 'Can I reply to the SARFAESI notice myself, or do I need a lawyer?',
            answer: 'While you can legally draft the reply yourself, it is highly recommended to use an expert lawyer. A proper Section 13(3A) reply requires citing specific legal discrepancies, calculating exact penal interest violations, and raising technical defects in the notice. A generic "I cannot pay" letter is not considered a valid statutory objection and will be instantly rejected by the bank.'
        },
        {
            question: 'What happens if the bank ignores my Section 13(3A) reply?',
            answer: 'Under the SARFAESI Act, the bank is legally obligated to reply to your Section 13(3A) representation within 15 days, explaining why your objections are not accepted. If the bank ignores your reply and proceeds directly to Section 13(4) possession, this becomes a powerful legal ground to challenge their entire action in the Debt Recovery Tribunal (DRT) and obtain a stay on the auction.'
        },
        {
            question: 'Will sending a reply stop the 60 day countdown?',
            answer: 'Sending a reply does not pause the 60 day countdown. The clock keeps ticking from the date you received the notice. However, filing a strong legal objection forces the bank to respond to your claims and creates a solid foundation of evidence. If you eventually need to approach the DRT for a stay order, the judge will ask if you utilized your right to reply under Section 13(3A). If you did not, securing a stay becomes much harder.'
        },
        {
            question: 'Can I offer a One Time Settlement (OTS) in my Section 13(2) reply?',
            answer: 'Yes, you can absolutely include a proposal for a One Time Settlement (OTS) or loan restructuring in your reply. However, this should be done strategically. You must first highlight the legal and technical flaws in the bank\'s notice, and then offer the OTS as an alternative resolution. This shows the bank that you are ready for a legal fight but prefer a mutual settlement, which often brings them to the negotiation table.'
        }
    ];

    const reviews = [
        {
            name: 'Rajesh Kumar',
            location: 'Delhi',
            stars: 5,
            comment: 'I was in a state of absolute panic when the bank stuck the SARFAESI notice on my door. I thought I would lose my home in 60 days. The legal team drafted a brilliant Section 13(3A) objection pointing out major calculation errors by the bank. This forced them to halt possession and agree to an affordable One Time Settlement. Simply outstanding service.'
        },
        {
            name: 'Priya Desai',
            location: 'Mumbai',
            stars: 5,
            comment: 'My previous lawyer completely missed the 60 day deadline, but CredSettle took over my case just in time. Their technical knowledge of NPA guidelines and the SARFAESI framework is unmatched. They filed a detailed reply that exposed the bank\'s illegal penal charges, and we easily secured a stay from the DRT when the bank tried to ignore our reply.'
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
        'name': 'SARFAESI Notice Reply Legal Assistance',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '2150',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-sarfaesi" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-sarfaesi" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        How to Legally Reply to a SARFAESI Notice<br />
                        <span className="text-blue-300">Stop Bank Property Possession</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Ignoring a 60 day Section 13(2) notice guarantees the loss of your property. Learn exactly how to file a statutory objection to stall the auction timeline.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Immediate Legal Help
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
                                        How to Reply to SARFAESI Notice
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Defense Manual</h3>
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

                            <h2 id="section-13-2-ultimatum" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: The 60 Day Ultimatum and Section 13(2)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Receiving a legal notice from your bank is always stressful, but a notice under Section 13(2) of the SARFAESI Act, 2002, is perhaps the most serious document a property owner can receive. This legislation was designed to allow banks and financial institutions to recover their dues rapidly without the intervention of regular civil courts. The moment your loan account is classified as a Non Performing Asset (NPA), the bank gains the statutory power to initiate this aggressive recovery process.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A Section 13(2) notice serves as a strict ultimatum. It states that you have exactly 60 days from the date of the notice to clear your entire outstanding debt, including the principal amount, accrued interest, penal charges, and legal costs. If you fail to discharge your liability in full within this strictly defined period, the bank acquires the legal right to proceed to the next stage under Section 13(4). This subsequent stage allows the bank to take physical or symbolic possession of your mortgaged property, appoint a receiver, and ultimately auction your asset to the highest bidder to recover their money.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold text-red-900 uppercase tracking-tighter border-y border-red-100 py-4">
                                A Section 13(2) notice is not a mere warning letter. It is the beginning of the legal process to seize your property.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many borrowers mistakenly believe that a Section 13(2) notice is just a pressure tactic used by recovery agents. They assume they can negotiate casually over the phone or write an informal email asking for more time. This is a catastrophic error. The SARFAESI Act operates on strict procedural timelines. The law assumes that if you do not formally object to the bank's demands, you implicitly accept their calculation of the debt and their right to enforce the mortgage. Therefore, understanding the gravity of this notice and knowing the exact legal mechanism to reply to it is the only way to protect your home, office, or factory from being sold at a distress value.
                            </p>
                            
                            {/* Visual Section 1: Alert Banner */}
                            <div className="bg-red-50 border-l-8 border-red-600 p-8 rounded-2xl mb-10 shadow-md">
                                <h4 className="text-2xl font-black text-red-900 mb-4 uppercase tracking-tight flex items-center">
                                    <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    Critical Deadline Alert
                                </h4>
                                <p className="text-red-800 font-medium leading-relaxed mb-4">
                                    The 60 day countdown begins from the date of the notice, not the date you choose to open the envelope. Every single day counts. If you miss this window without filing a valid Section 13(3A) objection, your options to stop the subsequent possession action are severely restricted. 
                                </p>
                                <ul className="list-disc pl-6 text-red-800 font-light space-y-2">
                                    <li>Do not wait for day 59 to contact a lawyer.</li>
                                    <li>Verbal discussions with bank managers do not pause the statutory clock.</li>
                                    <li>Only a formally drafted legal reply holds weight in the Debt Recovery Tribunal (DRT).</li>
                                </ul>
                            </div>

                            <h2 id="silence-property-loss" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 2: Why Silence Guarantees Property Loss</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most fatal mistake a borrower can make upon receiving a SARFAESI notice is to remain silent. In the realm of SARFAESI law, silence is strictly construed as acceptance. When the bank sends a demand notice claiming that your account is an NPA and that you owe a specific sum of money, they are establishing a legal premise. If you do not challenge this premise in writing, the law presumes that the bank's claims are entirely accurate and undisputed.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you ignore the 60 day notice, the bank will smoothly transition to Section 13(4). They will send an authorized officer to your premises. This officer will paste a possession notice on the outer wall of your property, take photographs, and publish the possession notice in two leading newspapers (one in English and one in the local language). This public declaration not only damages your social reputation but also severely impairs the market value of your property. Once symbolic possession is taken, the bank will approach the Chief Metropolitan Magistrate (CMM) or District Magistrate (DM) under Section 14 of the Act to obtain police assistance for taking physical possession. At that stage, armed police personnel can arrive to forcibly evict you and your family.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Furthermore, if you attempt to file an appeal in the Debt Recovery Tribunal (DRT) after the bank has taken possession, the first question the presiding officer will ask your lawyer is whether you filed a statutory objection to the initial demand notice. If the answer is no, the judge will naturally question why you did not utilize the legal remedy provided by the legislature. Failing to reply drastically weakens your defense and portrays you as a non cooperative defaulter rather than a borrower with genuine grievances.
                            </p>

                            <h2 id="statutory-objection" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 3: The Statutory Objection (Section 13(3A))</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The SARFAESI Act is indeed tilted in favor of banks, but it does contain a critical safeguard for borrowers, enshrined in Section 13(3A). This section grants the borrower the statutory right to make a representation or raise an objection against the demand notice issued under Section 13(2). This is your primary weapon to derail or stall the bank's aggressive recovery machinery.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Section 13(3A) mandates that if the borrower raises an objection, the secured creditor must carefully consider it. If the bank finds the objection unacceptable, they are legally bound to communicate the reasons for non acceptance to the borrower within 15 days of receiving the representation. This is a mandatory requirement, not a discretionary guideline.
                            </p>
                            
                            {/* Visual Section 2: Checklist */}
                            <div className="bg-gray-900 text-white p-10 rounded-[3rem] mb-10 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full"></div>
                                <h4 className="text-2xl font-black mb-6 flex items-center gap-3">
                                    <span className="w-3 h-10 bg-blue-500 inline-block rounded-full"></span>
                                    The Section 13(3A) Objection Checklist
                                </h4>
                                <p className="text-gray-300 font-light mb-6">To ensure your reply carries maximum legal force, it must include these critical elements:</p>
                                <ul className="space-y-5 font-light text-gray-300">
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <div><strong className="text-white">Challenge the NPA Classification:</strong> Point out if the account was wrongly classified as NPA in violation of RBI master circulars.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <div><strong className="text-white">Demand the Statement of Accounts:</strong> Explicitly ask for a detailed statement showing principal, regular interest, penal interest, and capitalised charges separately.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <div><strong className="text-white">Dispute Penal Charges:</strong> Object to any exorbitant penal interest charged on penal interest, which violates supreme court rulings on capitalisation.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <div><strong className="text-white">Invoke Force Majeure (If Applicable):</strong> Detail genuine reasons for default such as major medical crises or severe business disruptions beyond your control.</div>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <div><strong className="text-white">Propose Resolution:</strong> Offer a concrete proposal to regularize the account or suggest a One Time Settlement framework.</div>
                                    </li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-10 font-medium">
                                The true power of Section 13(3A) lies in the fact that it forces the bank to act deliberately. In many cases, banks are overwhelmed with NPA accounts and issue generic possession notices without proper due diligence. When faced with a highly technical, customized legal reply, the bank's machinery often slows down. If they fail to reply within 15 days, or if they reply with a vague, automated letter that does not address your specific objections, they commit a procedural violation. This violation becomes the bedrock of your appeal before the DRT, drastically increasing your chances of securing a stay order against the auction of your property.
                            </p>

                            <h2 id="key-legal-grounds" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 4: Key Legal Grounds to Stop Bank Possession</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Crafting a successful reply requires moving beyond emotional pleas and focusing on hard legal facts. The Debt Recovery Tribunals operate strictly on procedural correctness. Your reply must expose any deviations the bank has made from the law. Here are the most effective legal grounds to utilize in your representation.
                            </p>
                            
                            {/* Visual Section 3: Comparison Table */}
                            <div className="overflow-x-auto mb-10 shadow-lg rounded-2xl border border-gray-200">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-blue-50 text-blue-900">
                                            <th className="p-4 border-b-2 border-blue-200 font-bold w-1/3">Defense Strategy</th>
                                            <th className="p-4 border-b-2 border-blue-200 font-bold w-1/3">Weak Approach (Likely Rejected)</th>
                                            <th className="p-4 border-b-2 border-blue-200 font-bold w-1/3">Strong Legal Approach (DRT Approved)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700 text-sm">
                                        <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 font-semibold text-gray-900">NPA Classification</td>
                                            <td className="p-4 text-red-700">"I missed a few payments because my business is slow, please give me more time."</td>
                                            <td className="p-4 text-green-700">"The account was classified as NPA on [Date] violating the RBI Master Circular on Prudential Norms, as the 90 day overdue criterion was not strictly met due to a partial credit on [Date]."</td>
                                        </tr>
                                        <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 font-semibold text-gray-900">Amount Demanded</td>
                                            <td className="p-4 text-red-700">"The bank is asking for too much money, I do not agree with this amount."</td>
                                            <td className="p-4 text-green-700">"The demand of INR [Amount] is defective as it includes penal interest capitalized into the principal, directly contravening the Supreme Court judgment in Central Bank of India vs Ravindra."</td>
                                        </tr>
                                        <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 font-semibold text-gray-900">Defects in Notice</td>
                                            <td className="p-4 text-red-700">"I did not understand the notice properly."</td>
                                            <td className="p-4 text-green-700">"The notice lacks the mandatory details of the secured assets and fails to bifurcate the principal and interest components as required under Section 13(3) of the Act."</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="p-4 font-semibold text-gray-900">Agricultural Land</td>
                                            <td className="p-4 text-red-700">"This land is used for my livelihood, you cannot take it."</td>
                                            <td className="p-4 text-green-700">"The scheduled property falls under the definition of agricultural land, which is expressly exempted from the purview of the SARFAESI Act under Section 31(i)."</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                                These technical defenses demonstrate to the bank that you are not legally defenseless. By highlighting violations of RBI guidelines and citing Supreme Court precedents, you elevate the dispute from a simple loan default to a complex legal challenge. This severely complicates the bank's recovery process.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Another critical ground is evaluating the valuation of the property. Often, banks intentionally undervalue the asset in their notices to facilitate a quick sale to preferred buyers during an auction. Pointing out the actual circle rate and current market value, supported by an independent valuer's report, can halt the auction process, as selling a property severely below market value is deemed illegal.
                            </p>

                            <h2 id="format-reply" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 5: How to Format Your Reply to SARFAESI Notice</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The format and presentation of your Section 13(3A) objection are just as important as the content. The reply should not be written as a casual letter. It must be structured as a formal legal notice, drafted on the letterhead of an experienced advocate, and dispatched via Registered Post with Acknowledgment Due (RPAD) to ensure you have irrefutable proof of delivery.
                            </p>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight uppercase italic">Essential Components of the Format:</h3>
                            <ol className="list-decimal pl-6 mb-8 space-y-4 text-gray-700 font-light">
                                <li><strong>The Header:</strong> Clearly state "Representation/Objection under Section 13(3A) of the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002".</li>
                                <li><strong>Reference Details:</strong> Accurately quote the loan account number, branch name, the date of the bank's Section 13(2) notice, and the date you actually received it.</li>
                                <li><strong>Preliminary Objections:</strong> Begin by asserting your legal rights and pointing out immediate technical flaws, such as incorrect jurisdiction or unauthorized signatories on the bank's notice.</li>
                                <li><strong>Factual Matrix:</strong> Narrate the brief history of the loan, acknowledging the initial disbursement but clearly explaining the circumstances that led to financial stress. Maintain a professional tone.</li>
                                <li><strong>Para wise Reply:</strong> This is the core of the document. You must address every single paragraph of the bank's notice individually. Explicitly "deny" false claims and demand documentary proof for every financial figure asserted by the bank.</li>
                                <li><strong>The Prayer/Demand:</strong> Conclude the reply by formally demanding that the bank withdraw the Section 13(2) notice, furnish a detailed, corrected statement of accounts, and invite you for a restructuring meeting.</li>
                            </ol>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold bg-blue-900 text-white p-8 rounded-3xl shadow-xl">
                                Crucial Step: Never hand deliver the reply to a bank employee without obtaining a formal receiving stamp and signature on a duplicate copy. Always use Registered Post to establish a legal paper trail. Email copies should only serve as secondary confirmation.
                            </p>

                            <h2 id="debt-restructuring" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 6: Exploring Debt Restructuring and OTS (One Time Settlement)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A SARFAESI notice does not mean that a settlement is impossible. In fact, receiving the notice is often the catalyst needed to bring senior bank officials to the negotiation table. While your Section 13(3A) reply builds your legal defense, you can simultaneously pursue a One Time Settlement (OTS) or loan restructuring.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Under an OTS scheme, the bank agrees to accept a lump sum payment that is significantly lower than the total demanded amount. Banks prefer OTS because it allows them to clean their balance sheets quickly without dragging out litigation for years. If your property is difficult to sell due to market conditions or legal disputes, the bank will be highly motivated to negotiate.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                To successfully negotiate an OTS, you need leverage. A strongly drafted Section 13(3A) objection provides that leverage. When the bank's legal department reviews your highly technical reply and realizes that seizing the property will result in a prolonged DRT battle, their willingness to accept an OTS increases dramatically. CredSettle specializes in this dual strategy: fighting fiercely on legal grounds while negotiating aggressively for a massive reduction in the debt burden. We ensure that any settlement is properly documented with a No Dues Certificate to protect you permanently.
                            </p>

                            <h2 id="drt-appeals" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 7: DRT Appeals: When to Escalate Under Section 17</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the bank rejects your Section 13(3A) representation, or worse, ignores it completely and issues a possession notice under Section 13(4), your next legal remedy is to file a Securitisation Application (SA) before the Debt Recovery Tribunal (DRT) under Section 17 of the Act.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold text-gray-900 border-b border-gray-100 pb-2">
                                The DRT Strategy:
                            </p>
                            <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-700 font-light">
                                <li><strong>The 45 Day Window:</strong> You must file your appeal in the DRT within 45 days from the date the bank takes measures under Section 13(4). Missing this deadline can be fatal to your case.</li>
                                <li><strong>Proving Procedural Lapses:</strong> Your primary argument in the DRT will rely heavily on the Section 13(3A) reply you filed earlier. You will demonstrate to the Tribunal that the bank acted arbitrarily and violated mandatory statutory procedures.</li>
                                <li><strong>Seeking a Stay Order:</strong> The immediate goal of the DRT application is to obtain an interim stay order restraining the bank from auctioning or alienating your property while the main case is being adjudicated.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                The DRT has sweeping powers. If the Tribunal finds that the bank violated the provisions of the SARFAESI Act, it can completely invalidate the possession notice, order the restoration of the property back to the borrower, and even direct the bank to pay compensation. However, success in the DRT requires meticulous preparation and expert legal representation.
                            </p>

                            <h2 id="case-studies" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 8: Case Studies: Protecting Homes from Auction</h2>
                            <div className="space-y-8 mb-12">
                                <div className="bg-blue-50 p-10 rounded-[3rem] border border-blue-100 shadow-xl border-l-8 border-blue-700">
                                    <h4 className="text-2xl font-black text-blue-900 mb-4 uppercase tracking-tight italic">Case Study 1: Halting an Illegal Possession in Pune</h4>
                                    <p className="text-gray-800 mb-4 font-light">
                                        A small business owner received a SARFAESI notice demanding 1.5 Crores. The bank had blatantly capitalized penal interest, violating RBI norms. 
                                    </p>
                                    <p className="text-gray-800 font-bold italic">
                                        Action: We drafted a comprehensive Section 13(3A) objection detailing the exact mathematical errors. The bank failed to reply within 15 days. When they tried to take symbolic possession, we immediately approached the DRT. The Tribunal granted an absolute stay on the auction, citing the bank's failure to address our statutory objections. The bank eventually settled the account for just 85 Lakhs.
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-10 rounded-[3rem] border border-blue-100 shadow-xl border-l-8 border-blue-700">
                                    <h4 className="text-2xl font-black text-blue-900 mb-4 uppercase tracking-tight italic">Case Study 2: Protecting Agricultural Land in Punjab</h4>
                                    <p className="text-gray-800 mb-4 font-light">
                                        A farmer was served a Section 13(2) notice threatening to auction his ancestral land against an overdue tractor loan. 
                                    </p>
                                    <p className="text-gray-800 font-bold italic">
                                        Action: Our legal team immediately invoked Section 31(i) in the reply format, proving that the land was actively used for agricultural purposes and was strictly exempt from SARFAESI provisions. The bank was forced to unconditionally withdraw the notice to avoid severe penalties from the Tribunal.
                                    </p>
                                </div>
                            </div>

                            <h2 id="conclusion" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Conclusion: Your Rights Under the SARFAESI Act</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The SARFAESI Act gives immense power to banks, but it does not leave you defenseless. A meticulously drafted reply to a Section 13(2) notice is the single most important step you can take to protect your assets. It shifts the burden of proof back onto the bank and creates the legal groundwork necessary to fight in the tribunals.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are facing the threat of property possession, time is your greatest enemy. Every passing day brings the auction hammer closer. Do not rely on verbal assurances or generic complaint letters. You need specialized legal intervention.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 text-blue-900 font-medium">
                                At CredSettle, our elite team of debt resolution advocates understands the intricacies of the SARFAESI Act better than anyone else. We have successfully defended thousands of borrowers across India, saving homes, factories, and livelihoods. Contact us immediately to draft your statutory objection and secure your financial future.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Client Success and Feedback</h2>
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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Stop The Bank Action Today.</h3>
                                <p className="text-blue-800 mb-6">Our expert lawyers specialize in drafting powerful statutory objections to halt property possession under the SARFAESI Act. Protect your assets with India's leading debt defense team.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Legal Protection Now
                                </Link>
                            </div>

                            <div className="mt-12 text-[0.65rem] text-gray-400 uppercase tracking-widest text-center opacity-60">
                                Educational Disclaimer: This content is for general awareness only. Legal outcomes vary based on individual loan contracts, state specific rules, and the nature of the default. Always seek formal legal counsel. CredSettle is a legal tech advisory service.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Notice Received?</h4>
                                <p className="text-sm text-gray-600 mb-6">We can draft a legally binding objection to stall the bank's 60 day possession timeline.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Stop Possession
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v Custom Legal Strategy</p>
                                    <p>v RBI Compliance Check</p>
                                    <p>v DRT Appeal Support</p>
                                    <p>v OTS Negotiation</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-loan-recovery-cases" className="block text-sm text-blue-600 hover:underline">Loan Recovery Defense</Link>
                                    <Link href="/best-lawyer-for-home-loan-settlement" className="block text-sm text-blue-600 hover:underline">Home Loan Settlement</Link>
                                    <Link href="/best-lawyer-for-loan-settlement-by-drt" className="block text-sm text-blue-600 hover:underline">DRT Settlement Lawyer</Link>
                                    <Link href="/best-lawyer-for-notice-for-default-on-mortgage-or-loan-repayment" className="block text-sm text-blue-600 hover:underline">Mortgage Default Notice</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
