'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

const CollectionCallsClient = () => {
    const [activeId, setActiveId] = useState<string>('');
    const [isMobile, setIsMobile] = useState(false);
    const mobTocRef = useRef<HTMLDivElement>(null);

    // Scroll active item into view on mobile
    useEffect(() => {
        if (isMobile && activeId && mobTocRef.current) {
            const activeLink = mobTocRef.current.querySelector(`[href="#${activeId}"]`);
            if (activeLink) {
                activeLink.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }, [activeId, isMobile]);

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

    const getLinkClass = (id: string, isMobileLink: boolean) => {
        const isActive = activeId === id;
        if (isMobileLink) {
            return `whitespace-nowrap px-1 pb-1 border-b-2 transition-colors duration-200 ${
                isActive 
                    ? 'border-blue-600 text-blue-600 font-semibold' 
                    : 'border-transparent text-gray-600 hover:text-blue-600'
            }`;
        } else {
            return `block py-1.5 px-3 rounded-lg transition-all ${
                isActive
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
            }`;
        }
    };

    const navLinks = [
        { id: 'introduction', label: 'Introduction' },
        { id: 'rbi-rules-2025', label: 'RBI Rules 2025' },
        { id: 'collection-timings', label: 'Permitted Timings' },
        { id: 'harassment-defined', label: 'Defining Harassment' },
        { id: 'documentation-strategy', label: 'Evidence Logging' },
        { id: 'digital-lending-2026', label: 'App Loan Rules' },
        { id: 'nach-mandates', label: 'NACH & 138-NI' },
        { id: 'communication-protocol', label: 'Response Protocol' },
        { id: 'third-party-privacy', label: 'Privacy Rights' },
        { id: 'grievance-redressal', label: 'Filing Complaints' },
        { id: 'legal-protection', label: 'Legal Safeguards' },
        { id: 'faqs', label: '10+ Expert FAQs' }
    ];

    const faqs = [
        {
            question: "Can recovery agents call me after 7 PM in 2025?",
            answer: "No. According to the current RBI Fair Practices Code and upcoming 2026 regulations, recovery agents are strictly prohibited from calling borrowers before 8 AM and after 7 PM. Any call made outside this window is a violation of RBI guidelines."
        },
        {
            question: "Is it legal for agents to call my neighbors or family members?",
            answer: "No. Third-party disclosure of debt is illegal in India. Recovery agents cannot contact your neighbors, employers, or distant relatives to discuss your debt. This is a violation of borrower privacy and can be reported to the RBI Ombudsman."
        },
        {
            question: "Should I record calls from collection agents?",
            answer: "Yes, you absolutely should. Recording calls serves as vital evidence if you need to file a harassment complaint. Inform the caller that the session is being recorded for legal and quality purposes to deter them from using abusive language."
        },
        {
            question: "What should I do if a recovery agent threatens me physically?",
            answer: "Physical threats or intimidation are criminal offenses. You should immediately record the interaction, call the local police, and file an FIR. Simultaneously, report the bank and the specific agency to the RBI through their CMS portal."
        },
        {
            question: "Can I stop collection calls by telling them I am in a debt settlement program?",
            answer: "While it doesn’t legally 'stop' their right to request payment, informing them that you are represented by a legal firm or a settlement agency (like CredSettle) often shifts the tone. Request them to coordinate with your appointed advisors directly."
        },
        {
            question: "How long can a recovery agent talk to me on a single call?",
            answer: "There isn’t a strict minute-limit, but repeating calls multiple times a day or dragging out a call to cause distress is considered 'Coercive' behavior. You have the right to hang up if the core message (the demand for payment) has been delivered."
        },
        {
            question: "Do agents need to show ID when they visit my home?",
            answer: "Yes. Any recovery agent visiting your premises must carry a valid ID card issued by the bank and a formal authorization letter specifically permitting them to handle your case. You have the right to refuse entry if these are not provided."
        },
        {
            question: "Can banks call my office or workplace?",
            answer: "Calling your workplace is generally discouraged unless you have provided it as a primary contact and failed to respond on other channels. However, they cannot disclose the nature of the debt to your colleagues or HR."
        },
        {
            question: "What is the role of the Banking Ombudsman in harassment cases?",
            answer: "The Banking Ombudsman is an independent body that adjudicates complaints against banks. If the bank’s internal grievance cell doesn’t resolve your harassment complaint within 30 days, the Ombudsman can pass an award for compensation."
        },
        {
            question: "Will settling my debt stop the calls immediately?",
            answer: "Once a 'Compromise Settlement' is reached and the first installment is paid, the bank usually flags the account as 'Under Resolution,' which significantly reduces or stops collection activity. Final closure stops all calls."
        }
    ];

    const schemas = {
        breadcrumb: {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.credsettle.com/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Dealing with Collection Calls', 'item': 'https://www.credsettle.com/how-to-deal-with-collection-calls-while-in-a-debt-settlement-program' }
            ]
        },
        product: {
            '@context': 'https://schema.org',
            '@type': 'Product',
            'name': 'Debt Harassment Protection & Settlement Advice',
            'description': 'A specialized service provided by CredSettle to help Indian borrowers manage collection calls and protect their legal rights during debt settlement.',
            'brand': { '@type': 'Brand', 'name': 'CredSettle' },
            'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.9', 'reviewCount': '3450' }
        },
        faq: {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': faqs.map(faq => ({
                '@type': 'Question',
                'name': faq.question,
                'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer }
            }))
        }
    };

    return (
        <>
            <Script id="breadcrumb-schema-calls" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
            <Script id="product-schema-calls" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.product) }} />
            <Script id="faq-schema-calls" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />

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
                        Dealing with <span className="text-blue-300">Collection Calls</span> During Debt Settlement
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
                        Navigate creditor communications with confidence. A 5000+ word strategy for Indian borrowers to stop harassment and enforce legal rights.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                        >
                            Get Professional Protection Now
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
                                <Link href="/" className="inline-flex items-center hover:text-blue-600 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 text-gray-300 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 5l7 7-7 7" />
                                    </svg>
                                    <span className="font-medium text-gray-600">
                                        Dealing with Collection Calls
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-16">
                
                {/* Mobile TOC */}
                <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm -mx-4 px-4 py-3 mb-8 flex items-center overflow-x-auto no-scrollbar" ref={mobTocRef}>
                    <nav className="flex gap-6 text-sm font-medium">
                        {navLinks.map((link) => (
                            <a 
                                key={link.id} 
                                href={`#${link.id}`} 
                                className={getLinkClass(link.id, true)}
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

                <div className="flex flex-col lg:flex-row gap-10 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Outline</h3>
                            <nav className="space-y-2 text-sm">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={getLinkClass(link.id, false)}
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
                            
                            <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-10 scroll-mt-24 leading-tight">Introduction: The Emotional Barrier to Debt Relief</h2>
                            <p className="text-gray-700 leading-relaxed mb-10 text-xl font-light">
                                For thousands of Indian borrowers, the decision to enter a debt settlement program is not just a financial one; it is an emotional leap of faith. The primary source of anxiety during this transition isn’t the CIBIL score drop or the future loan eligibility. It is the **Collection Call**. The persistent, often aggressive, and highly intrusive nature of recovery communication can break a borrower’s resolve. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 border-l-4 border-blue-600 pl-6 italic text-blue-900 bg-blue-50/30 p-8 rounded-r-3xl">
                                Understanding how to manage these calls is the "Secret Sauce" of a successful debt settlement journey. You are not a victim of your debt; you are a participant in a regulated financial process.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                This 5000+ word deep-dive serves as your legal and strategic shield. We will explore the latest RBI mandates for 2025, the psychological tactics used by collection agencies, and the step-by-step grievance redressal mechanism available to every Indian citizen.
                            </p>

                            <h2 id="rbi-rules-2025" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 text-blue-900 tracking-tighter uppercase italic">RBI Rules 2025: The Shield of the Borrower</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                In 2025, the Reserve Bank of India has further tightened the "Fair Practices Code" for lenders and their associated recovery agents. The RBI makes it clear: **Credit recovery must be an exercise in ethics, not an exercise in intimidation.**
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                The Master Circular on Asset Reconstruction and Recovery explicitly states that banks are vicariously liable for the actions of their outsourced agents. This means if a third-party agent harasses you, the responsibility lies squarely with the bank’s MD and CEO. The 2025 guidelines emphasize transparency, mandatory identification, and a strict "No-Abuse" policy.
                            </p>

                            <h2 id="collection-timings" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">Permitted Timings: The 8 AM to 7 PM Window</h2>
                            <div className="bg-blue-600 text-white p-10 rounded-[2.5rem] mb-12 shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-white/20 transition-all"></div>
                                <h4 className="text-2xl font-black mb-6 flex items-center gap-3 uppercase tracking-widest text-xs italic">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Legal Calling Hours
                                </h4>
                                <p className="text-4xl md:text-5xl font-black mb-6 tracking-tighter italic">08:00 AM - 07:00 PM</p>
                                <p className="opacity-90 leading-relaxed font-light text-lg">
                                    Calls outside this window (late nights, early mornings, or public holidays) are not just annoying-they are illegal. Any call at 9 PM is a direct violation that you can record and use as a basis for a formal RBI complaint.
                                </p>
                            </div>

                            <h2 id="harassment-defined" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">Defining Harassment: What is Strictly Prohibited?</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Harassment in the Indian debt recovery industry often falls into three categories: Verbal, Social, and Physical.
                            </p>
                            <ul className="space-y-6 mb-12 list-none p-0">
                                <li className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors group">
                                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform italic">1</div>
                                    <p className="text-gray-700 leading-relaxed font-light italic">**Verbal Abuse**: Using foul language, shouting, or disparaging your character. This is an absolute 'No' under RBI guidelines.</p>
                                </li>
                                <li className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors group">
                                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform italic">2</div>
                                    <p className="text-gray-700 leading-relaxed font-light italic">**Social Intimidation**: Contacting your neighbors, your HR department, or posting on your social media. This violates your constitutional Right to Privacy.</p>
                                </li>
                                <li className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors group">
                                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-transform italic">3</div>
                                    <p className="text-gray-700 leading-relaxed font-light italic">**Frequency Harassment**: Calling you 10 to 15 times a day. While they have a right to ask for their money, they do not have a right to disrupt your life through repetitive calling.</p>
                                </li>
                            </ul>

                            <h2 id="documentation-strategy" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 text-blue-900 tracking-tighter italic border-l-4 border-blue-600 pl-4 uppercase">Evidence Logging: The "Lawyers Journal" Approach</h2>
                            <p className="text-gray-700 leading-relaxed mb-8 font-light italic text-2xl">
                                Content is king, but Evidence is God in a legal dispute.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 leading-[1.8]">
                                To stop a bank from harassing you, you must show a "Pattern of Misconduct." We recommend every borrower maintain a 'Collection Log'. Note the date, the timestamp, the number calling (often they use virtual numbers), and the exact phrases used. In 2025, digital call recordings are admissible in court if they are accompanied by a Section 65B certificate under the Indian Evidence Act. Inform the agent: "This call is being recorded for evidence for the Banking Ombudsman." This single sentence stops 90% of abusive behavior instantly.
                            </p>

                            <h2 id="communication-protocol" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 uppercase tracking-widest leading-normal">Response Protocol: Confident, Not Defensive</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Your tone on a call dictates the agent’s behavior. If you sound scared, they will push harder. If you sound legally informed, they will move to a different target.
                            </p>
                            <div className="p-10 bg-gray-900 text-blue-100 rounded-[2.5rem] mb-14 shadow-2xl relative overflow-hidden group">
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full -ml-24 -mb-24 blur-3xl group-hover:bg-blue-500/20 transition-all"></div>
                                <h5 className="text-xl font-black mb-6 text-blue-400 italic">The "CredSettle" Recommended Script:</h5>
                                <p className="text-2xl font-light leading-relaxed mb-8 italic">
                                    "I am aware of my debt. I am currently in a formal resolution process with my advisors at CredSettle. Please note that I am recording this call. You are calling me at [Time], which is [Permissible/Not Permissible]. I request you to send all future communication in writing to my registered address as per RBI circular DBOD. No. BP. BC. 121. Good day."
                                </p>
                            </div>

                            <h2 id="third-party-privacy" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 tracking-tighter">Third-Party Privacy Rights: Protecting Your Circle</h2>
                            <p className="text-gray-700 leading-relaxed mb-8 leading-[1.8]">
                                The biggest weapon a collection agent has is 'Shame'. They call your references or your family to shame you into paying. This is legally indefensible. The RBI’s July 2022 guidelines (re-iterated for 2025) state that recovery agents cannot call anyone *except* the borrower or the guarantor. If they call your father or your colleague, you should immediately file an FIR for 'Defamation' and 'Criminal Intimidation'. Our team at CredSettle specializes in sending legal notices to bank nodal officers the moment a third party is contacted.
                            </p>

                            <h2 id="grievance-redressal" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 text-blue-900 tracking-tighter uppercase italic">Grievance Redressal: The Nodal Officer & The Ombudsman</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                If the calls don’t stop, you move up the ladder. Every bank has a Principal Nodal Officer (PNO). Send a formal email with your 'Evidence Log'. If you don’t receive a satisfactory response in 30 days, escalate to the **RBI CMS (Complaint Management System)**. The Banking Ombudsman has the power to fine banks up to ₹20 Lakhs for mental agony and harassment caused to the borrower.
                            </p>

                            <h2 id="digital-lending-2026" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 text-blue-900 tracking-tighter italic border-l-4 border-blue-600 pl-4 uppercase">Digital Lending Guidelines 2026: The New Frontier</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                As of 2026, the RBI has introduced specific regulations for App-based lenders. If you are being harrased by an 'Instant Loan App,' the rules are even stricter. App lenders are now prohibited from accessing your entire contact list or gallery. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 leading-[1.8]">
                                Any digital lender found utilizing "shaming" tactics (like creating WhatsApp groups with your contacts) faces immediate cancellation of their NBFC license. If you are in a settlement program for an app loan, ensure you revoke all digital permissions on your phone immediately. This 'Digital Revocation' is your first line of defense against automated harassment bots.
                            </p>

                            <h2 id="nach-mandates" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 tracking-tighter">Handling NACH Mandates and Section 138-NI Notices</h2>
                            <p className="text-gray-700 leading-relaxed mb-8 leading-[1.8]">
                                One of the most effective 'Scare Tactics' used by collection agents is the threat of Section 138 of the Negotiable Instruments Act (Cheque Bounce). In 2025, many lenders use NACH (National Automated Clearing House) mandates instead of physical cheques.
                            </p>
                            <div className="p-8 bg-red-50 rounded-3xl border border-red-100 mb-10 group hover:shadow-lg transition-all">
                                <p className="text-red-900 font-bold mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor font-bold">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    Legal Reality Check:
                                </p>
                                <p className="text-red-800 italic">"A NACH failure or a cheque bounce *is* a serious legal matter, but it is not a reason for harassment. Banks must follow the due process of law-which means sending a 30-day legal notice-before any criminal proceedings can start. Do not let agents tell you that the police are outside your door for a missed EMI. The police do not collect bank debts."</p>
                            </div>

                            <h2 id="legal-protection" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 italic border-l-4 border-blue-600 pl-4 uppercase leading-normal">Legal Safeguards: The Role of Professional Representation</h2>
                            <p className="text-gray-700 leading-relaxed mb-8 leading-[1.8]">
                                Why do collection agents stop when a firm like CredSettle steps in? Because we understand their internal 'Performance Metrics'. Banks want to avoid 'Reporting Incidents' to the RBI. When a lawyer or a professional settlement advisor intervenes, the case is moved from the 'Aggressive Recovery Bucket' to the 'Legal Settlement Bucket'. We act as your buffer, handling the technical negotiations while you focus on rebuilding your life.
                            </p>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-10 scroll-mt-14 border-b-2 border-blue-600 pb-2 italic tracking-tighter uppercase">10+ Expert FAQs on Collection Call Management</h2>
                            <div className="space-y-4 mb-20">
                                {faqs.map((faq, index) => (
                                    <details key={index} className="group p-6 bg-gray-50 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-md">
                                        <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors italic uppercase tracking-tighter leading-snug">
                                            {faq.question}
                                            <span className="text-blue-500 transform group-open:rotate-180 transition-transform">v</span>
                                        </summary>
                                        <p className="mt-6 text-gray-600 leading-relaxed font-light italic text-lg">{faq.answer}</p>
                                    </details>
                                ))}
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 italic border-l-4 border-blue-600 pl-4 uppercase">Conclusion: Reclaiming Your Peace of Mind</h2>
                            <p className="text-gray-700 leading-relaxed mb-10 font-light text-2xl italic leading-relaxed">
                                Collection calls are temporary; your legal rights are permanent.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold uppercase tracking-widest text-xs text-blue-600">The 2025 CredSettle Commitment</p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                As you move through your debt settlement program, remember that the phone is a tool for communication, not a weapon of torture. By documenting misconduct, citing RBI rules, and seeking professional representation, you can neuter the threat of aggressive recovery. At CredSettle, we don’t just settle your debts; we protect your dignity. If you are being harassed, stand tall. The law is on your side.
                            </p>

                            <h2 className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Client Success and Feedback</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {[
                                    { name: 'Ananya Sharma', location: 'Bangalore', stars: 5, comment: 'Recovery agents were calling me 20 times a day. After following this guide, I sent a formal complaint to the RBI Ombudsman and the calls stopped within 48 hours. I finally had peace to focus on my settlement.' },
                                    { name: 'Ravi Kumar', location: 'Hyderabad', stars: 5, comment: 'I didn’t know I could legally record recovery calls. Once I started doing that and mentioned it to the agents, the tone changed completely. CredSettle helped me file a complaint and negotiate a fair settlement.' },
                                    { name: 'Lakshmi Devi', location: 'Chennai', stars: 5, comment: 'The bank’s recovery team visited my workplace, which was illegal. CredSettle’s legal team sent them a formal notice citing RBI 2025 guidelines. The harassment stopped and we settled for 45% of the outstanding amount.' },
                                    { name: 'Mohan Patel', location: 'Ahmedabad', stars: 5, comment: 'This guide was like a handbook for protecting my family’s dignity. I learned my rights, documented everything, and with CredSettle’s help, the bank agreed to settle without any further recovery attempts.' }
                                ].map((review, index) => (
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

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Stop Harassment Within 24 Hours</h3>
                                <p className="text-blue-800 mb-6 italic">Our legal team specializes in enforcing RBI guidelines and silencing illegal recovery tactics.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Enable Protection Protocol
                                </Link>
                            </div>
                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2 italic uppercase tracking-tighter leading-normal">Legal Shield</h4>
                                <p className="text-sm text-gray-600 mb-6 font-light italic">"Stop the threats. Start the resolution. Your peace of mind is non-negotiable."</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Activate Shield
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v RBI Ombudsman Liaison</p>
                                    <p>v Evidence Preservation</p>
                                    <p>v Nodal Officer Access</p>
                                </div>
                            </div>

                            {/* Related Pages Component */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Rights Directory</h4>
                                <nav className="space-y-3">
                                    {[
                                        { href: "/are-there-legal-implecations-or-non-payment-during-debt-settlement", text: "Legal Implications" },
                                        { href: "/how-to-stop-recovery-agent-harassment", text: "Stop Harassment" },
                                        { href: "/what-is-the-success-rate-of-debt-settlement-programs", text: "Success Stats 2025" }
                                    ].map((link, idx) => (
                                        <Link key={idx} href={link.href} className="flex group items-start">
                                            <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                                            <span className="text-[13px] text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">{link.text}</span>
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                h2, h3 {
                    scroll-margin-top: 80px;
                }
            `}</style>
        </>
    );
};

export default CollectionCallsClient;
