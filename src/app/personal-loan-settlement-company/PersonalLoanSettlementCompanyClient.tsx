'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function PersonalLoanSettlementCompanyClient() {
    const [activeId, setActiveId] = useState<string>('');
    const [isMobile, setIsMobile] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
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

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const navLinks = [
        { id: 'the-gap', label: 'Bridging The Gap' },
        { id: 'why-corporate', label: 'Why Choose Corporate Entity' },
        { id: 'verification-criteria', label: 'Verification Criteria' },
        { id: 'legal-backing', label: 'Legal Backing & Support' },
        { id: 'zero-upfront-scams', label: 'Zero Upfront Retainer Scams' },
        { id: 'data-privacy', label: 'Strict Data Privacy' },
        { id: 'aggressive-negotiation', label: 'Aggressive Negotiation Tactics' },
        { id: 'case-study-one', label: 'Case Study: The 15 Lakh Default' },
        { id: 'case-study-two', label: 'Case Study: Shielding The Family' },
        { id: 'faqs', label: 'FAQs' }
    ];

    const faqs = [
        {
            question: "What makes a personal loan settlement company verified?",
            answer: "A verified company is registered with the Ministry of Corporate Affairs. They work with legal and financial experts, following official RBI rules rather than informal freelance methods."
        },
        {
            question: "Are upfront retainers a sign of a scam?",
            answer: "Yes. Honest settlement firms do not demand large upfront retainers before doing any work. They link fees to settlement milestones and real results."
        },
        {
            question: "How does a legitimate settlement agency protect my data?",
            answer: "A top personal loan settlement company implements bank level encryption and strict data privacy protocols. Your financial records, loan account numbers, and personal identification documents are never shared with unauthorized third parties or lead generation websites."
        },
        {
            question: "Can a settlement company stop recovery agents?",
            answer: "A genuine firm gives you legal cover. They send formal notices to banks to stop agent harassment and direct all calls to legal counsel."
        },
        {
            question: "Why should I avoid fly by night freelancers?",
            answer: "Freelancers lack legal backing and business accountability. If a freelancer takes your money and leaves, you lose your cash while bank recovery actions continue."
        },
        {
            question: "How much can a verified debt settlement company save me?",
            answer: "The savings depend entirely on your unique financial hardship and the policies of your specific lending institution. A top agency will aggressively negotiate on your behalf to secure the maximum possible waiver on principal, interest, and penal charges."
        },
        {
            question: "Is it legal to use a loan settlement agency in India?",
            answer: "Absolutely. Borrowers have the constitutional right to appoint a legal representative or a financial consultant to negotiate on their behalf. Verified debt settlement companies in India operate strictly within the legal framework provided by the Reserve Bank of India guidelines."
        },
        {
            question: "How long does the settlement process take?",
            answer: "The timeline varies based on the bank and the complexity of the case. However, a structured corporate entity follows a systematic approach, often resolving cases within a few months by maintaining consistent and professional dialogue with bank recovery heads."
        },
        {
            question: "Will my CIBIL score be affected?",
            answer: "Yes, settling a loan will reflect on your CIBIL report as settled rather than closed, which impacts your credit score. A genuine agency will educate you about this consequence upfront and offer post settlement credit building guidance."
        },
        {
            question: "What happens if the bank files a legal case during settlement?",
            answer: "This is precisely why you need a corporate entity with legal backing. If a bank initiates legal proceedings such as Section 138 or arbitration, your settlement company's legal panel will represent you, respond to notices, and continue settlement negotiations simultaneously."
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
        'name': 'Verified Personal Loan Settlement Services',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '1240',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-pl-company" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-pl-company" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-300 text-sm font-semibold mb-8 backdrop-blur-md border border-red-500/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        Verified Corporate Debt Relief
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Top Personal Loan <br />
                        <span className="text-blue-300">Settlement Company</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-normal">
                        Stop trusting fly by night freelancers. Partner with a legitimate corporate entity for aggressive negotiation, robust legal backing, and zero upfront retainer scams.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Consult Our Legal Panel
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
                                        Personal Loan Settlement Company
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
                        className={`text-sm font-bold px-4 py-2 transition-all flex-shrink-0 ${activeId === link.id
                            ? 'bg-blue-600 text-white rounded-full shadow-md'
                            : 'text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg'
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
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <p className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Settlement Blueprint</p>
                            <nav className="space-y-1 text-sm">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={`block py-1.5 px-3 transition-all ${activeId === link.id
                                            ? 'bg-blue-600 text-white rounded-full font-bold'
                                            : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg'
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

                                                        <h2 id="the-gap" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Bridging The Gap in Debt Relief</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                More borrowers now look for a registered company to resolve their debts rather than relying on solo freelancers. When unpaid personal loans pile up, panic sets in fast. This fear makes people easy targets for fake agents who promise quick debt erasure for large upfront cash. This guide explains how to choose a verified debt settlement company. We look at the need for legal backing, the danger of upfront fee scams, and the value of data privacy.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A verified personal loan settlement company works with open terms and full dedication to the borrower. The gap between what borrowers need and what unregulated agents offer is wide. Borrowers need real legal cover against agent harassment. They need milestone fees, not high upfront demands. They also need strict data security so private loan details stay safe. Working with a registered firm turns worried borrowers into protected clients backed by a dedicated legal team.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A loan default is a temporary money problem, not a personal failure. A good debt relief firm does more than cut loan numbers. It helps you regain your peace of mind and financial freedom. We counter unlawful collection tactics using RBI rules and banking laws. This guide gives you the steps to choose a trusted company and avoid unverified agents.
                            </p>
                            
                            <h2 id="why-corporate" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Why Choose a Corporate Entity Over Freelancers</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Choosing a registered company over an unverified freelancer makes a huge difference. A trusted loan settlement firm is registered with the Ministry of Corporate Affairs. This registration requires clear records, regular audits, and real accountability. When you hire a registered firm, you get help from debt negotiators, financial analysts, and experienced lawyers. Freelancers simply cannot match this support.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Freelancers operate without formal offices, business bank accounts, or professional liability cover. When a freelancer fails to deliver, they can turn off their phone and walk away with your money. This leaves you in deeper trouble. Your unpaid loan continues to build up interest and late fees while bank recovery teams keep calling.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In addition, registered debt settlement firms have strong standing with major Indian banks. Lenders recognize and respect formal legal representation. When a law firm sends an official notice on behalf of a registered settlement firm, bank teams change their approach. They move from harsh calls to formal settlement talks. Freelancers lack this weight with bank decision makers.
                            </p>

                            <h2 id="verification-criteria" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Rigorous Verification Criteria</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Finding a genuine settlement agency requires careful checks. Never rely on verbal claims alone. Always verify the company's incorporation certificate and Corporate Identification Number on the official government website. A trustworthy firm shares its company credentials openly and welcomes verification.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Next, review the service agreement terms. Legitimate firms provide a clear contract that lists all services, fees, and timelines. The agreement must state that all settlement payments go straight to the lending bank, never into the agency's bank account. Any agent asking you to send settlement money to their private account is a fraud.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Finally, verify the company's physical office and online presence. A genuine debt settlement firm operates from a real commercial office. They have client reviews, a secure website, and clear contact channels. They do not operate through anonymous social media pages or chat apps alone. Following these checks keeps you safe from scams.
                            </p>

                            <h2 id="legal-backing" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">The Imperative of Legal Backing</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Loan settlement is a legal process. Missing personal loan payments breaches a loan contract. The bank recovery process follows set laws, including the Negotiable Instruments Act and RBI guidelines. Navigating these rules without legal counsel is risky. A top settlement company includes legal support in every phase of work.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Genuine firms do not just ask the bank for a discount. They find bank calculation errors, check loan contracts, and defend borrower rights. If a bank sends recovery agents to your office or files a Section 138 cheque bounce case, our legal team replies swiftly. We issue legal notices, file complaints with the RBI Ombudsman, and protect you from unlawful pressure.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This legal support is why registered firms succeed where solo agents fail. Banks employ large legal panels. They easily brush aside informal requests from freelancers. But when faced with formal legal challenges, banks realize that lengthy court battles will cost time and money. This encourages bank heads to agree to a fast, fair settlement.
                            </p>
                            
                            <h2 id="zero-upfront-scams" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Exposing Zero Upfront Retainer Scams</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most common debt trap is the upfront fee scam. Anxious borrowers wanting relief from collection calls often fall for false promises of instant waivers in exchange for large fees. Fake agents pressure borrowers to transfer money before doing any work. Once paid, the agent vanishes, leaving the borrower alone with mounting bank debt.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A genuine settlement company avoids this predatory approach. Honest agencies use milestone billing linked to real progress. While a small onboarding fee covers document drafting, the main success fee applies only after the bank issues the final settlement letter.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                By tying their fees to your settlement success, genuine companies work hard to secure deep waivers quickly. Walk away from any agent who demands large upfront payments as a condition to start talks. Protecting your cash is your first priority during debt recovery.
                            </p>

                            <h2 id="data-privacy" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Strict Data Privacy and Security</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Your personal loan documents contain sensitive details. You must share bank statements, PAN card copies, salary slips, and loan account numbers. If this data falls into wrong hands, it can lead to identity theft and unwanted spam calls.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A professional debt settlement company treats data privacy seriously. They use secure servers, encrypted portals, and strict access controls to keep client records safe. Legitimate firms follow the Information Technology Act and sign non-disclosure agreements with all staff.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In contrast, freelance agents often store sensitive files on personal phones and share them over unencrypted messaging apps. This exposes borrowers to serious privacy risks. Working with an established corporate firm ensures your financial records stay confidential and protected.
                            </p>

                            <h2 id="aggressive-negotiation" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Aggressive Negotiation Tactics</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Getting a deep settlement requires more than just asking for waivers. It demands structured negotiation backed by a strong grasp of banking rules and quarterly balance sheet cycles. A top settlement company approaches bank talks with solid financial data and clear legal grounds.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Professional negotiators build a verified hardship record. They time settlement offers to match quarterly and annual bank closing periods when lenders want to clean up bad debts. They challenge wrongful late fees, penal interest, and bounce charges to cut the total claim down to the core principal.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In addition, registered firms talk directly with senior recovery heads rather than call center staff who have no waiver power. Presenting clean hardship files directly to credit committees helps borrowers secure waivers of 50% to 75% on unpaid dues.
                            </p>
                            
                            <h2 id="case-study-one" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Case Study: Resolving The 15 Lakh Default</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Consider the case of Mr. Sharma, an IT manager who suffered a medical crisis that wiped out his family savings. He defaulted on three personal loans totaling 15 Lakh rupees. Bank agents began visiting his home and calling his work contacts, creating deep personal stress.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Mr. Sharma first hired an online freelancer who took a 40,000 rupee fee and vanished. As bank notices arrived, he approached our registered settlement company. Within twenty-four hours, our legal team sent formal notices to all three banks citing RBI debt collection rules, halting agent visits at once.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our analysts then prepared a clear medical hardship file and negotiated directly with bank zonal managers. We removed all penal interest and late fees. After three months of talks, we settled all three loans for 4.2 Lakh rupees, saving over 70% while closing all legal notices.
                            </p>

                            <h2 id="case-study-two" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Case Study: Shielding The Family from Harassment</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A loan default often affects family members who have no connection to the debt. Mrs. Gupta owed 8 Lakh rupees after her husband's small business closed. Recovery agents began calling her elderly parents with threats of police action.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The stress on her parents was severe. Mrs. Gupta turned to our firm for help. Our legal panel immediately filed a complaint with the Banking Ombudsman against the recovery agency for illegal third-party harassment.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Facing regulatory scrutiny, the bank recalled the recovery agency and moved the file to its internal team. Using this advantage, our negotiators secured a full settlement for 2.5 Lakh rupees. We protected her family from calls and resolved the debt within her budget.
                            </p>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-4 mb-12">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                                        <button 
                                            onClick={() => toggleFaq(index)}
                                            className="w-full text-left p-4 focus:outline-none flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                                        >
                                            <p className="font-bold text-lg text-gray-900 pr-4 m-0">{faq.question}</p>
                                            <svg 
                                                className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <div 
                                            className={`transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-[500px] opacity-100 p-4 border-t border-gray-100' : 'max-h-0 opacity-0 overflow-hidden px-4'}`}
                                        >
                                            <p className="text-gray-600 leading-relaxed font-normal m-0">{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </article>
                    </main>

                    {/* Right Column: Cards */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24 self-start">
                        <div className="space-y-6">
                            {/* Card 1: CTA */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center flex flex-col items-center">
                                <p className="font-black text-gray-900 text-lg mb-2 mt-1 tracking-tight">Facing Harassment?</p>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed px-1">
                                    Our corporate legal team can issue immediate notices to stop recovery agents today.
                                </p>
                                <Link
                                    href="/contact"
                                    className="w-full bg-[#1b5df3] hover:bg-blue-700 text-white font-bold py-3 px-3 rounded-xl transition-colors shadow-md text-center text-sm"
                                >
                                    Stop the Agents
                                </Link>
                                <div className="mt-4 space-y-1 text-xs text-gray-500 w-full text-center font-medium">
                                    <p>✓ 24hr Legal Response</p>
                                    <p>✓ RBI Compliance Audit</p>
                                    <p>✓ Zero Upfront Scams</p>
                                    <p>✓ Verified Corporate Entity</p>
                                </div>
                            </div>

                            {/* Card 2: Links */}
                            <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100 shadow-sm mt-4">
                                <p className="font-black text-gray-900 text-base border-b border-gray-900 pb-2 mb-4">Related Expertise</p>
                                <ul className="space-y-3 text-left font-medium">
                                    <li>
                                        <Link href="/services/personal-loan-settlement" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Personal Loan Relief
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/credit-card-settlement" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Credit Card Dispute
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-handle-recovery-agent-harrasment" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Bank Recovery Shield
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/check-loan-settlement-status" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Check Settlement Status
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
