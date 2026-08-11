'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function PersonalLoanSettlementServicesClient() {
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
        { id: 'introduction', label: 'The Trust Gap' },
        { id: 'professional-services-entail', label: 'What We Actually Do' },
        { id: 'drafting-legal-notices', label: 'Drafting Legal Notices' },
        { id: 'negotiating-nodal-officers', label: 'Nodal Officer Negotiation' },
        { id: 'securing-the-noc', label: 'Securing Your NOC' },
        { id: 'drt-litigation-protection', label: 'DRT Litigation Protection' },
        { id: 'case-study-mumbai', label: 'Case Study: Mumbai' },
        { id: 'case-study-bangalore', label: 'Case Study: Bangalore' },
        { id: 'why-structured-service', label: 'Why Structured Service' },
        { id: 'faqs', label: 'FAQs' }
    ];

    const faqs = [
        {
            question: "What makes the best personal loan settlement services different from scam agencies?",
            answer: "The best personal loan settlement services operate with complete transparency. They do not demand massive upfront fees, they provide a legally binding agreement detailing the scope of work, and they represent you professionally through Nodal Officers rather than making empty guarantees."
        },
        {
            question: "How does a debt settlement agency in India protect me from DRT litigation?",
            answer: "A professional debt settlement agency in India actively engages with the bank's legal department. By submitting structured hardship applications and responding to legal notices on time, they prevent the bank from easily obtaining ex-parte orders from the Debt Recovery Tribunal."
        },
        {
            question: "Will you draft legal notices on my behalf?",
            answer: "Yes. Drafting legal notices in response to harassment or to formally request a settlement is a core part of professional loan settlement help. This creates a documented trail of your intent to resolve the debt."
        },
        {
            question: "Do I have to meet the bank officials myself?",
            answer: "Not necessarily. Our experts handle the complex negotiations with Nodal Officers and regional collection heads. You only need to review the final settlement offer and make the payment directly to the bank."
        },
        {
            question: "How do you ensure I receive my NOC?",
            answer: "Securing the NOC (No Objection Certificate) is our final and most crucial step. We do not consider a case closed until the bank has issued the official NOC and updated the status in your CIBIL report."
        },
        {
            question: "Can I get professional loan settlement help if I have already received a court summons?",
            answer: "Yes. Receiving a summons means time is critical. We immediately step in to assess the stage of litigation, file the necessary responses, and open a parallel negotiation channel to settle the matter out of court."
        },
        {
            question: "Are upfront fees completely illegal?",
            answer: "No, a nominal retainer for legal documentation is standard practice. However, demanding a large percentage of the total debt as an advance fee is a major red flag indicating a potential scam."
        },
        {
            question: "How long does the entire settlement process take?",
            answer: "It typically ranges from 3 to 6 months depending on the bank's internal policies, the age of the default, and the complexity of any ongoing DRT litigation."
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

    return (
        <>
            <Script id="faq-schema-pl-settlement" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
                        Verified & Trustworthy Service
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Best Personal Loan <br />
                        <span className="text-blue-300">Settlement Services</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-normal">
                        Defaulters know they need help but fear being scammed. We outline exactly what professional loan settlement help entails, from drafting legal notices to securing your final NOC.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Professional Help Now
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
                                        Personal Loan Settlement Services
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Service Guide</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: The Trust Gap in Debt Relief</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Millions of Indians face a devastating dilemma every year. When personal loans become unmanageable due to job loss, medical emergencies, or business downturns, borrowers desperately look for a lifeline. They know they need the best personal loan settlement services to navigate the complex negotiations with powerful banking institutions. However, they are paralyzed by a profound sense of skepticism.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This skepticism is entirely justified. The market is flooded with fraudulent entities posing as a legitimate debt settlement agency India. These scam agencies prey on vulnerability. They promise unrealistic waivers, demand massive upfront fees, and then completely disappear when the bank intensifies its recovery efforts. The borrower is left with less money, more debt, and absolutely no legal defense.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The gap between the desperate need for professional loan settlement help and the fear of being defrauded is the biggest obstacle to financial freedom. This comprehensive guide is designed to bridge that gap. We will break down, step by step, exactly what a genuine, structured settlement service looks like. By understanding the mechanics of drafting legal notices, negotiating directly with Nodal Officers, securing the NOC, and providing robust DRT litigation protection, you can confidently differentiate between a scam and a true professional service.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A genuine service does not operate in the shadows. It operates within the legal framework established by the Reserve Bank of India and the legal system. It uses documentation, persistent negotiation, and legal strategy to bring banks to the table. Let us explore the anatomy of true professional loan settlement help and how it completely transforms your defense against aggressive creditors.
                            </p>

                            <h2 id="professional-services-entail" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 2: What Do Professional Settlement Services Actually Entail?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Scam agencies sell you a dream of an overnight miracle. The best personal loan settlement services sell you a structured, legal, and highly tactical process. When you hire a top tier debt settlement agency India, you are not paying for magic. You are paying for a team of financial analysts and legal experts to execute a multi phase strategy designed to systematically break down the bank's resistance and secure the lowest possible settlement amount.
                            </p>

                            {/* Alert Banner for Protections */}
                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl"></div>
                                <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                                    </svg>
                                    The Four Pillars of Professional Help:
                                </h4>
                                <ul className="space-y-3 text-blue-800 font-medium list-disc pl-5 m-0 text-sm">
                                    <li><strong>Legal Documentation:</strong> Precision drafting of notices and responses.</li>
                                    <li><strong>High Level Escalation:</strong> Bypassing low level recovery agents to deal with decision makers.</li>
                                    <li><strong>Data Driven Negotiation:</strong> Using RBI hardship guidelines to force favorable terms.</li>
                                    <li><strong>Closure Security:</strong> Ensuring the final No Objection Certificate is legally sound.</li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                We will now examine each of these pillars in extreme detail. By the end of this guide, you will know exactly what questions to ask any firm offering professional loan settlement help to ensure they are actually providing these critical services.
                            </p>

                            <h2 id="drafting-legal-notices" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 3: Drafting Legal Notices and Responses</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The first sign of a professional debt settlement agency India is their reliance on written, legally sound documentation. When you default on a personal loan, banks rely heavily on automated legal notices and aggressive telecalling. Their goal is to intimidate you into making a partial payment that resets the limitation period of the loan. A fake agency will simply tell you to ignore the calls and change your number. That is a disastrous strategy.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The best personal loan settlement services take the offensive. The moment you engage them, their legal team begins drafting legal notices tailored to your specific situation. This involves:
                            </p>
                            
                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. The Anti Harassment Notice</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If recovery agents are calling your family, visiting your workplace, or using abusive language, the agency drafts a stringent legal notice citing specific RBI guidelines from 2025 regarding fair practice codes. This notice is sent directly to the bank's compliance officer. This action immediately forces the bank to rein in their third party agencies, as ignoring it exposes them to heavy penalties from the Ombudsman.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. The Hardship Declaration</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Banks do not offer settlements out of the goodness of their hearts. They offer them when they realize that recovering the full amount is statistically impossible. Professional loan settlement help involves drafting a highly detailed Hardship Declaration. This document outlines your exact financial constraints, supported by evidence, clearly stating your inability to service the current EMI structure. This sets the legal groundwork for a compromise settlement.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Responding to Recall Notices</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a bank sends a Loan Recall Notice, demanding the entire principal amount immediately, silence is legally interpreted as acceptance of the debt's validity and immediacy. The agency drafts a calculated response, disputing arbitrary penal charges and reiterating the intent to settle reasonably, thus slowing down the bank's momentum toward DRT litigation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold bg-gray-50 text-gray-900 p-8 rounded-3xl shadow-sm border border-gray-200">
                                This heavy reliance on drafting legal notices ensures that every interaction with the bank is on the record. It transforms you from a scared defaulter into a legally represented entity that the bank must take seriously.
                            </p>

                            <h2 id="negotiating-nodal-officers" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 4: Elevating the Conversation to Nodal Officers</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Have you ever tried negotiating a massive discount with a call center employee? It is impossible. They do not have the authority. Yet, this is exactly what scam agencies do. They call the standard recovery numbers and beg for a waiver. When it fails, they stop answering your calls.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The hallmark of a premier debt settlement agency India is access. Professional negotiators do not waste time with third party recovery agents whose only incentive is to extract maximum cash today. Instead, they escalate the matter directly to the bank's Nodal Officers, Grievance Redressal Officers, and Regional Collection Heads.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                These senior officials have the actual authority to approve waivers of 50 percent, 60 percent, or even 80 percent of the outstanding amount, depending on the severity of the hardship. The best personal loan settlement services use their established channels to present your case directly to these decision makers.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, if a bank is acting unreasonably or ignoring RBI mandates regarding fair recovery, professional loan settlement help includes escalating the matter to the RBI Integrated Ombudsman. The mere threat of an Ombudsman escalation, drafted professionally by legal experts, is often enough to make a stubborn bank offer a highly favorable settlement plan. The strategy is simple: negotiate with the people who have the power to say yes.
                            </p>

                            <h2 id="securing-the-noc" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 5: Securing the No Objection Certificate (NOC)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most dangerous phase of debt relief is the payment phase. A common tactic used by banks and deceptive collection agencies is the "verbal settlement." An agent will call you and say, "Pay Rs 50,000 today and we will close your Rs 2 Lakh loan." Desperate, you pay. The next month, a new agent calls demanding the remaining Rs 1.5 Lakh, claiming the Rs 50,000 was just a partial payment towards interest.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This is where professional loan settlement help proves its ultimate value. A legitimate debt settlement agency India will absolutely forbid you from making any payment based on a verbal promise, a WhatsApp message, or an email from a generic address.
                            </p>
                            
                            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 mb-10 shadow-lg">
                                <h4 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">The NOC Protocol</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">Step 1</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">The Settlement Letter</h5>
                                            <p className="text-sm text-gray-600 m-0">We demand a formal Settlement Letter on the bank's official letterhead, signed by an authorized signatory. It must explicitly state the agreed settlement amount, the payment schedule, and confirm that upon payment, the account will be permanently closed.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">Step 2</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Verification and Payment</h5>
                                            <p className="text-sm text-gray-600 m-0">Our legal team verifies the authenticity of the document. Only then do you make the payment, and you make it directly to the bank's official loan account, never to an agent's personal account.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">Step 3</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Securing the NOC</h5>
                                            <p className="text-sm text-gray-600 m-0">After payment, we aggressively follow up with the Nodal Officers to issue the final No Objection Certificate (NOC) and No Dues Certificate (NDC). We ensure this document is legally flawless.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The best personal loan settlement services consider the job incomplete until the NOC is in your hand and the CIBIL report reflects the account status as "Settled," completely neutralizing any future claims by the bank.
                            </p>

                            <h2 id="drt-litigation-protection" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 6: Absolute Protection from DRT Litigation</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many borrowers mistakenly believe that unsecured personal loans cannot lead to serious legal trouble. While it is true that there is no collateral to seize, a highly aggressive bank can initiate proceedings in the Debt Recovery Tribunal (DRT) or civil courts for high ticket personal loans.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you ignore legal notices and fail to appear for summons, the bank can obtain an ex-parte order (an order made in your absence). This can lead to the freezing of your salary accounts, attachment of other movable assets, and immense psychological pressure.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A premier debt settlement agency India provides a shield against this. DRT litigation protection is a massive differentiator between a scam firm and genuine professional loan settlement help. By proactively drafting legal notices, filing replies to the bank's legal maneuvers, and establishing a clear, documented intent to settle, the agency makes it incredibly difficult for the bank to justify extreme DRT measures.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                The courts favor amicable resolution. When your legal representatives show the tribunal that you have been attempting to negotiate in good faith, and the bank has been unreasonable, the leverage shifts entirely in your favor. This DRT litigation protection allows you to negotiate from a position of security, rather than panic.
                            </p>

                            <h2 id="case-study-mumbai" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 7: Case Study: Defeating DRT Threats in Mumbai</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 font-semibold text-blue-900 bg-blue-50 p-6 rounded-2xl">
                                Client Profile: Mr. Amit Sharma, IT Executive, Mumbai.<br />
                                Debt Situation: Rs 15 Lakh Personal Loan default due to sudden medical expenses.<br />
                                The Threat: Bank initiated legal proceedings and threatened immediate salary account freeze.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Amit was paralyzed by fear when he received a massive legal notice threatening DRT action. A scam agency told him to simply switch off his phone and pay them Rs 30,000 to "delete the case from the system." Recognizing the absurdity of this claim, Amit sought the best personal loan settlement services.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our debt settlement agency India took immediate action. Within 48 hours, our legal team was drafting legal notices in response to the bank's counsel, highlighting Amit's severe medical hardship and the bank's failure to offer a restructuring plan as per RBI guidelines. We bypassed the aggressive external lawyers and escalated the file directly to the bank's Regional Nodal Officer.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The robust DRT litigation protection provided by our documentation forced the bank to halt the court proceedings. Realizing that fighting a protracted legal battle against a prepared defendant was unprofitable, the Nodal Officer agreed to a negotiation table.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold">
                                The Result: We secured a structured settlement for Rs 5.5 Lakh, payable over 6 months. We ensured the final settlement letter was perfect, and upon the final payment, we aggressively pursued the bank until Amit held his NOC, completely closing the chapter without a single court appearance.
                            </p>

                            <h2 id="case-study-bangalore" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 8: Case Study: Exposing Scam Agencies in Bangalore</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 font-semibold text-blue-900 bg-blue-50 p-6 rounded-2xl">
                                Client Profile: Ms. Priya Reddy, Small Business Owner, Bangalore.<br />
                                Debt Situation: Multiple unsecured loans totaling Rs 22 Lakh after business failure.<br />
                                The Threat: Harassment at her physical store by aggressive recovery goons.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Priya was desperate to stop the daily humiliation at her store. She initially hired an online agency that demanded a 3 percent upfront fee (Rs 66,000) guaranteeing a 90 percent waiver. After she paid, the agency blocked her number, and the bank's recovery agents became even more aggressive.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Needing genuine professional loan settlement help, she approached our team. We immediately initiated our anti-harassment protocol. By drafting legal notices addressed to the bank's top management and the local police station regarding criminal intimidation, we stopped the store visits within three days.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We then began the painstaking process of negotiating with Nodal Officers across three different lending institutions. We used her business closure documents to build an irrefutable hardship case. We provided comprehensive DRT litigation protection, ensuring no lender could stealthily file a case while we negotiated.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold">
                                The Result: Over five months, we settled all three loans for a combined total of Rs 8 Lakh. More importantly, we managed the entire NOC issuance process. Priya realized that the best personal loan settlement services do not ask for massive upfront cuts; they do the grueling legal work required to force the banks into fair agreements.
                            </p>

                            <h2 id="why-structured-service" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 9: Why a Structured Service is Your Only Real Option</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When facing a financial crisis, the temptation to believe in a quick, cheap fix is overwhelming. But the reality of the Indian banking system is that banks have massive legal and financial resources. You cannot outrun them, and you cannot trick them with fake agencies.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Choosing a legitimate debt settlement agency India means choosing a structured defense. It means paying for a team that knows the RBI guidelines inside and out, a team that excels at drafting legal notices that command respect, and a team that has the network to reach Nodal Officers directly.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The peace of mind that comes with DRT litigation protection, the cessation of harassment calls, and the absolute certainty of securing your NOC is invaluable. Do not let skepticism prevent you from getting the professional loan settlement help you desperately need. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Verify the agency. Ask about their legal team. Demand to know their strategy for drafting legal notices and handling DRT threats. The best personal loan settlement services will gladly explain their process in detail, without demanding exorbitant upfront fees. Take control of your financial future by hiring professionals who fight the banks on your behalf, legally and systematically.
                            </p>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-4 mb-12">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                                        <button 
                                            onClick={() => toggleFaq(index)}
                                            className="w-full text-left p-4 focus:outline-none flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                                        >
                                            <h3 className="font-bold text-lg text-gray-900 pr-4 m-0">{faq.question}</h3>
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

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4 mt-0">Secure Your Financial Freedom Today</h3>
                                <p className="text-blue-800 mb-6 font-normal">Do not fall for upfront fee scams. Partner with India's most trusted legal professionals to secure your NOC safely and legally.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-300 transform hover:-translate-y-1"
                                >
                                    Book Your Strategy Call
                                </Link>
                            </div>
                        </article>
                    </main>

                    {/* Right Column: Cards */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24 self-start">
                        <div className="space-y-6">
                            {/* Card 1: CTA */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center flex flex-col items-center">
                                <h3 className="font-black text-gray-900 text-xl mb-3 mt-2 tracking-tight">Facing Harassment?</h3>
                                <p className="text-gray-600 text-xs mb-5 leading-relaxed px-1">
                                    We issue immediate legal notices to stop illegal recovery practices and protect your dignity.
                                </p>
                                <Link
                                    href="/contact"
                                    className="w-full bg-[#1b5df3] hover:bg-blue-700 text-white font-bold py-3 px-3 rounded-xl transition-colors shadow-md text-center text-sm"
                                >
                                    Stop the Harassment
                                </Link>
                                <div className="mt-4 space-y-2 text-xs text-gray-500 w-full text-center font-medium">
                                    <p>&#10003; DRT Litigation Shield</p>
                                    <p>&#10003; Nodal Officer Escalation</p>
                                    <p>&#10003; Zero Upfront Fraud</p>
                                    <p>&#10003; Guaranteed NOC Support</p>
                                </div>
                            </div>

                            {/* Card 2: Links */}
                            <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100 shadow-sm mt-5">
                                <h4 className="font-black text-gray-900 text-lg border-b border-gray-900 pb-2 mb-4">Related Expertise</h4>
                                <ul className="space-y-4 text-left font-medium">
                                    <li>
                                        <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Handling Bank Legal Notices
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-handle-recovery-agent-harrasement" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Stopping Agent Harassment
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/bank-recovery-case-in-court" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            DRT and Court Defense
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/check-loan-settlement-status" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Tracking Settlement Status
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
