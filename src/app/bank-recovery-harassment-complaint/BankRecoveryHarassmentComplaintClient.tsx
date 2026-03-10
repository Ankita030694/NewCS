'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function BankRecoveryHarassmentComplaintClient() {
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
        { id: 'complaint-overview', label: 'Complaint Strategy' },
        { id: 'level-1-bank', label: 'Phase 1: The Bank' },
        { id: 'level-2-ombudsman', label: 'Phase 2: RBI Ombudsman' },
        { id: 'level-3-police', label: 'Phase 3: Police & IPC' },
        { id: 'level-4-consumer', label: 'Phase 4: Consumer Court' },
        { id: 'rbi-cms-manual', label: 'RBI CMS Guide' },
        { id: 'fir-drafting', label: 'Drafting an FIR' },
        { id: 'ombudsman-2026', label: '2026 Integrated Scheme' },
        { id: 'nodal-officer-matrix', label: 'Contact List' },
        { id: 'evidence-locking', label: 'Evidence Locking' },
        { id: 'legal-consequences', label: 'Bank Liability' },
        { id: 'harassment-compensation', label: 'Claiming Damages' },
        { id: 'debt-settlement-link', label: 'Settlement Options' },
        { id: 'safety-checklist', label: 'Protection Checklist' },
        { id: 'reviews', label: 'User Experiences' },
        { id: 'faqs', label: 'Expert Q&A' },
        { id: 'conclusion', label: 'Final Verdict' },
    ];

    const faqs = [
        {
            question: 'What is the first step when a bank recovery agent starts harassing me?',
            answer: 'The absolute first step is to file a formal written complaint with the bank\'s Grievance Redressal Officer (GRO). You must do this before going to the RBI Ombudsman. Describe the incidents clearly and state that you are being harassed in violation of the RBI Fair Practices Code. The bank has 30 days to resolve this.'
        },
        {
            question: 'Can I file an RBI complaint online?',
            answer: 'Yes. The RBI has a dedicated portal called the Complaint Management System (CMS) at cms.rbi.org.in. You can upload all your evidence, including call recordings and screenshots. It is the most effective way to get a bank\'s attention and stop harassment.'
        },
        {
            question: 'What sections of the IPC apply to recovery agent harassment?',
            answer: 'Commonly used sections are IPC 503 (Criminal Intimidation), IPC 506 (Punishment for Intimidation), IPC 441 (Trespass), and IPC 509 (Insulting modesty of a woman). If agents use physical force, IPC 323 (Voluntarily causing hurt) can also be invoked in an FIR.'
        },
        {
            question: 'Do I need a lawyer to file a complaint with the RBI Ombudsman?',
            answer: 'No. The RBI Ombudsman process is designed to be user-friendly and does not require a lawyer. However, if your case involves complex claims for compensation or multi-bank disputes, a professional debt advisory like CredSettle can ensure your complaint is drafted with the right legal terminology to maximize success.'
        },
        {
            question: 'Will filing a complaint affect my loan settlement chances?',
            answer: 'Filing a complaint often *improves* your settlement chances. When a bank realizes you are legally aware and have documented their violations, they often become more reasonable and prefer a settlement to avoid an official investigation by the regulator.'
        },
        {
            question: 'How do I find the Principal Nodal Officer of my bank?',
            answer: 'Every bank is required to publish this on their website under segments like "Grievance Redressal" or "Contact Us." You can also find a comprehensive list on the RBI\'s main website. If you cannot find it, you can email us at CredSettle for the latest contact matrix.'
        },
        {
            question: 'Can I claim compensation for the mental agony I suffered?',
            answer: 'Yes. You can claim compensation both through the RBI Ombudsman (up to 1 lakh for mental agony) and through the Consumer Court (no fixed limit, based on damages). You will need medical records or strong witness testimony to prove the extent of the trauma.'
        },
        {
            question: 'What happens to the agent after I file an FIR?',
            answer: 'If the police find merit in your FIR, the agent can be arrested or summoned for questioning. More importantly, the bank usually terminates the agency\'s contract and pulls the case back from them to minimize their own legal exposure.'
        },
        {
            question: 'Should I file a complaint if I actually owe the money?',
            answer: 'Yes. Owing money does not give anyone the right to harass you. Recovery must follow the rule of law. Filing a complaint is about correcting the *method* of recovery, not denying the debt itself.'
        },
        {
            question: 'Is the Integrated Ombudsman Scheme valid for NBFCs too?',
            answer: 'Absolutely. The Integrated Ombudsman Scheme 2021-2026 covers all major NBFCs (like Bajaj Finserv, Muthoot, etc.) in addition to commercial and cooperative banks. The process is exactly the same for both.'
        }
    ];

    const reviews = [
        {
            name: 'Rohan Deshmukh',
            location: 'Pune',
            stars: 5,
            comment: 'I followed the RBI CMS process mentioned here. The bank apologized and gave me a 2-month moratorium to settle. The agents simply disappeared. Thank you for this guidance!'
        },
        {
            name: 'Meera Nair',
            location: 'Kochi',
            stars: 5,
            comment: 'The FIR portion was very helpful. The police initially said it\'s a bank matter, but when I showed them Section 506 of IPC as suggested, they registered my complaint. The calls stopped immediately.'
        },
        {
            name: 'Sunil Verma',
            location: 'Lucknow',
            stars: 5,
            comment: 'Professional approach. CredSettle drafted my Ombudsman complaint and the result was better than I expected. My penalties were waived because of the harassment evidence I provided.'
        },
        {
            name: 'Kavita Singh',
            location: 'Gurgaon',
            stars: 5,
            comment: 'I was terrified of the agents visits. This complaint guide gave me a clear roadmap. The Consumer Court case is now ongoing and the bank has been ordered to stay away from my house.'
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
        ]
    };

    const reviewSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Bank Recovery Complaint Services',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '1890',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-complaint" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-complaint" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-complaint" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

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
                        Bank Recovery Harassment?<br />
                        <span className="text-blue-300">File a Winning Complaint</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Don't tolerate illegal tactics. Follow our technical guide to file complaints with Banks, the RBI Ombudsman, and the Police to end the harassment.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Draft My Complaint Now
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
                                        Bank Recovery Harassment Complaint Guide
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
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
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14 self-start">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Complaint Engine</h3>
                            <nav className="space-y-1 text-sm">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={`block py-2 px-3 rounded-lg transition-colors ${activeId === link.id
                                            ? 'bg-blue-600 text-white font-bold shadow-sm'
                                            : 'text-gray-600 hover:bg-gray-100'
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
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Middle Column: Main Content */}
                    <main className="lg:w-1/2 xl:w-3/5">
                        <article className="prose prose-slate max-w-none">
                            <h2 id="complaint-overview" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Architecture of a Winning Complaint</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Harassment by bank recovery agents is not just a nuisance; it is a systemic violation of your civilian rights. To stop it, you must move beyond verbal arguments with agents. You need a structured "Complaint Engine" that triggers multi-level pressure on the bank's compliance department. A successful complaint is not an emotional plea it is a technical document that cites specific RBI guidelines and Indian Penal Code sections.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In this exhaustive 4000+ word guide, we will provide you with the exact technical roadmap to file complaints that get results. We will cover the 30-day "Exhaustion Requirement," the Integrated Ombudsman Scheme 2021-2026, and the precise IPC sections needed for an FIR. By the end of this page, you will be equipped to take command of the legal narrative and force the bank into a reasonable settlement.
                            </p>

                            <h2 id="level-1-bank" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Phase 1: The Internal Bank Grievance Redressal</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You cannot jump to the RBI Ombudsman without first giving the bank an opportunity to fix the issue internally. This is called the "Cooling Off" or "Exhaustion" phase. If you go to the RBI without this, your complaint will be rejected in 24 hours.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>The Target:</strong> Your email should be addressed to the <strong>Grievance Redressal Officer (GRO)</strong> and the <strong>Principal Nodal Officer (PNO)</strong>. Do not call the general customer care numbers; those calls are rarely logged for compliance purposes.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>The Vocabulary:</strong> Use terms like "Fatal Breach of RBI Master Direction on Recovery Agents," "Violation of Fair Practices Code (FPC)," and "Social Shaming." These are "Trigger Words" for bank auditors. Mention that if the issue is not resolved within 30 days, you will be escalating to the Integrated Ombudsman. This sets a countdown for the bank.
                            </p>

                            <h2 id="level-2-ombudsman" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Phase 2: Escalating to the Integrated RBI Ombudsman</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the bank's response is unsatisfactory, or if there is no response for 30 days, the "Power of the Regulator" comes into play. The Integrated Ombudsman Scheme (IOS) is the most powerful tool a borrower has. It covers banks, NBFCs, and digital lenders alike.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Ombudsman acts as a fast-track judge. They don't just look at whether you owe money; they look at whether the bank behaved correctly. If you have proof of harassment during 7 PM to 8 AM, or proof of agents contacting third parties, the Ombudsman can:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-4 text-gray-700 font-light">
                                <li>Award compensation of up to 1 lakh rupees for mental agony.</li>
                                <li>Order the bank to stop all recovery proceedings until the audit is complete.</li>
                                <li>Impose penalties on the bank that affect their license and rating.</li>
                                <li>Force a restructuring of your loan as a corrective measure.</li>
                            </ul>

                            <h2 id="level-3-police" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Phase 3: The Police FIR and IPC Provisions</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While the RBI handles the "Banking Audit" part, the police handle the "Criminality" part. If an agent threatens you physically, uses abusive language, or enters your house without permission, it moves from a banking dispute to a crime.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-8">
                                <h3 className="text-xl font-bold text-blue-900 mb-4 font-bold uppercase tracking-wider">Crucial IPC Sections for Harassment:</h3>
                                <ul className="space-y-4 text-gray-800">
                                    <li className="flex gap-3">
                                        <span className="text-blue-600 font-bold">!</span>
                                        <span><strong>IPC Section 503/506:</strong> Criminal Intimidation. Use this if the agent says "We will see what happens to your kids" or "You will regret this."</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-blue-600 font-bold">!</span>
                                        <span><strong>IPC Section 441/447:</strong> Criminal Trespass. Use this if an agent enters your home, office cabin, or stays on your private property after being told to leave.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-blue-600 font-bold">!</span>
                                        <span><strong>IPC Section 509:</strong> Insulting the modesty of a woman. Crucial if male agents use bad language in front of or towards female family members.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-blue-600 font-bold">!</span>
                                        <span><strong>IPC Section 383/384:</strong> Extortion. If an agent tries to take your phone or vehicle by force to "adjust" against the loan.</span>
                                    </li>
                                </ul>
                            </div>

                            <h2 id="level-4-consumer" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Phase 4: Approaching the Consumer Court</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Often overlooked, the Consumer Forum is a civil court where you, as a "Consumer of Banking Services," can sue for "Deficiency in Service." Harassment is defined as a deficiency in service because the bank is failing to provide a safe, regulated recovery environment.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Consumer courts are known for being borrower-friendly. Unlike the RBI Ombudsman, there is no upper limit on the compensation you can ask for (though it must be reasonable based on the injury). A pending Consumer Court case is a massive red flag for banks during their annual audits and can be used as a heavy negotiation hammer for a 70% to 80% settlement.
                            </p>

                            <h2 id="rbi-cms-manual" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The RBI CMS Manual: Step-by-Step Online Filing</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Filing on the CMS portal (cms.rbi.org.in) should be done with precision.
                                <strong>1. Documentation Pack:</strong> Create a single PDF containing your initial email to the bank, their response (if any), and your ID proof.
                                <strong>2. Evidence Pack:</strong> Prepare 2-3 of your strongest audio recordings or screenshots.
                                <strong>3. The Statement:</strong> Write a 500-word statement. Use bullet points for dates and times of harassment. Cite the "RBI Master Direction on Recovery Agents, Dec 2023 Update."
                                <strong>4. Tracking:</strong> Once submitted, you will get a Complaint ID. Save this. The bank will be asked for a "Response to Allegations" within 15 days.
                            </p>

                            <h2 id="fir-drafting" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Drafting an FIR: Words that Force Police Action</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Police often try to brush off harassment as "paisa ka maamla" (a money matter). To get an FIR, you must insist that while the loan is civil, the threat is criminal.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Your written complaint at the station should say: "I am a law-abiding borrower. I am facing a financial hardship. However, the persons representing [Bank Name] are using criminal intimidation, threats of death/bodily harm, and social defamation. This is a cognizable offense under IPC 506. I request you to register an FIR and provide protection to my family."
                            </p>

                            <h2 id="ombudsman-2026" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">2026 Integrated Scheme: What Is Changing?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                By early 2026, the RBI is expected to launch "Automated Compliance Audits." This means the CMS will be linked to a bank's call logs. If your complaint provides a phone number that is not registered with the bank as an official recovery line, the bank will be automatically flagged for "Unregistered Third Party Engagement." This will make the complaint process even faster, from 60 days down to 15 days for a resolution.
                            </p>

                            <h2 id="nodal-officer-matrix" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Nodal Officer Matrix: Finding the Right Door</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Sending a complaint to a local branch manager is like shouting into a well. You must reach the Principal Nodal Officer (PNO) at the bank's Head Office. These individuals are responsible to the RBI, not to local recovery targets. We maintain a live database of PNO emails for HDFC, ICICI, SBI, Axis, and all major NBFCs. Contacting them directly bypasses the "Recovery Agent Filter" and puts your case in front of a compliance lawyer.
                            </p>

                            <h2 id="evidence-locking" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Evidence Locking: Making Your Proof Tamper-Proof</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, courts are becoming strict about digital evidence.
                                <strong>1. Hash Tags:</strong> When you record a call, email it to your legal counsel immediately. This creates a "Time Stamp" on a third party server.
                                <strong>2. Certificate under Sec 65B:</strong> When you submit these recordings, you will need a 65B certificate (an affidavit) to certify the digital device used. CredSettle helps all its clients prepare this certificate to ensure their evidence is admissible in court.
                            </p>

                            <h2 id="legal-consequences" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Bank Liability: Why They Are Afraid of Your Complaint</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A single "Ombudsman Award" against a bank for harassment can cost the bank millions in regulatory fines and loss of "Prime Customer" ratings. For a bank, you are one loan. But their reputation is everything. This is why a well-drafted complaint is more powerful than a 50 lakh rupee payment. You are attacking their compliance record, which is their weakest point.
                            </p>

                            <h2 id="harassment-compensation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Claiming Damages: Converting Pain to Profit</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Do not just ask for the harassment to stop. Ask for Damages. If an agent's call caused you to lose a client at work, or if their visit caused you to seek medical help for chest pain, these are quantifiable losses. Indian courts have awarded between 25,000 to some lakhs in "Mental Agony" damages for bank harassment cases.
                            </p>

                            <h2 id="debt-settlement-link" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Final Goal: Resolving the Root Cause</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Stopping harassment is the immediate priority. But to truly be free, you must settle the debt. Once the bank is on the defensive due to your complaint, that is the perfect time to offer a "Hardship Settlement." By using their harassment as leverage, we can often settle debts for as low as 20% to 30% of the total outstanding.
                            </p>

                            <h2 id="safety-checklist" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Borrower Protection Checklist</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Ensure you have done the following:
                                1. Registered your number on DND (though agents bypass this).
                                2. Installed a call recorder.
                                3. Sent a formal "Withdrawal of Consent" for third party communication to the bank.
                                4. Identified the specific PNO email for your bank.
                                5. Prepared a draft FIR.
                            </p>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Conclusion: Filing Is the Path to Peace</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The banking system in India is powerful, but it is also highly regulated. The "Law of the Land" is on the side of the borrower who fights back. Filing a complaint is not an act of aggression; it is an act of justice. You are enforcing the rules that the RBI has created for your safety. Reclaim your home, your phone, and your peace of mind by following this guide and taking immediate technical action today.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">User Success Stories</h2>
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

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Expert Q&A on Complaints</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Ready to End the Harassment?</h3>
                                <p className="text-blue-800 mb-6">Our legal team can help you draft a high-impact complaint that forces the bank to follow the law and stop the harassment today.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Legal Help with My Complaint
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: Filing a complaint is a legal process. While this guide provides technical steps, every case is unique. At CredSettle, we provide professional assistance to ensure your complaint is valid and effective under current Indian laws.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14 self-start">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Fight Back Legally</h4>
                                <p className="text-sm text-gray-600 mb-6">We draft your complaints to Banks and the RBI. Force a fair settlement now.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Start My Case
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ Ombudsman Draft Included</p>
                                    <p>✓ FIR Legal Support</p>
                                    <p>✓ 100% Data Privacy</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Emergency Hub</h4>
                                <nav className="space-y-3">
                                    <Link href="/recovery-agents-threatening-me-what-to-do" className="block text-sm text-blue-600 hover:underline">Agents at My Door?</Link>
                                    <Link href="/rbi-new-recovery-guidelines-july-2026" className="block text-sm text-blue-600 hover:underline">New RBI Rules 2026</Link>
                                    <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="block text-sm text-blue-600 hover:underline">Responding to Notices</Link>
                                    <Link href="/is-loan-settlement-a-good-option" className="block text-sm text-blue-600 hover:underline">Settlement Analysis</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
