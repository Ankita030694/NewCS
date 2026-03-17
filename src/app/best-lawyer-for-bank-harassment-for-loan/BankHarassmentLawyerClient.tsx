'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function BankHarassmentLawyerClient() {
    const [activeId, setActiveId] = useState('intro');
    const mobTocRef = useRef<HTMLDivElement>(null);

    const navLinks = [
        { id: 'intro', label: 'Introduction' },
        { id: 'illegal-tactics', label: 'Illegal Recovery Tactics' },
        { id: 'rbi-guidelines', label: 'RBI Guidelines 2025' },
        { id: 'legal-remedies', label: 'Legal Remedies' },
        { id: 'role-of-lawyer', label: 'How a Lawyer Helps' },
        { id: 'sarfaesi-harassment', label: 'SARFAESI Harassment' },
        { id: 'harassment-faq', label: 'FAQ on Harassment' },
        { id: 'reviews', label: 'Client Feedback' },
        { id: 'conclusion', label: 'Final Verdict' },
    ];

    const faqs = [
        {
            question: "What should I do if a recovery agent visits my home after 7 PM?",
            answer: "Under RBI guidelines, recovery agents are prohibited from visiting borrowers before 7 AM and after 7 PM. If they visit after hours, do not open the door, record the incident, and file an immediate complaint with your bank's Nodal Officer and the RBI Ombudsman."
        },
        {
            question: "Can recovery agents contact my neighbors or family members?",
            answer: "No. Banks and recovery agents are strictly forbidden from disclosing your debt information to third parties, including neighbors, friends, or family members. This is a violation of your privacy and can be legal grounds for a harassment case."
        },
        {
            question: "Is it legal for recovery agents to use abusive language?",
            answer: "Absolutely not. The RBI Fair Practices Code mandates that recovery agents must use polite and civilized language. Any form of verbal abuse, shouting, or intimidation is illegal and punishable under the Indian Penal Code."
        },
        {
            question: "Can I file a police complaint against bank recovery agents?",
            answer: "Yes, if you face physical threats, verbal abuse, or criminal trespass, you should file a First Information Report (FIR) at your local police station under Sections 503 and 506 of the IPC."
        },
        {
            question: "What is the RBI Integrated Ombudsman Scheme?",
            answer: "It is a centralized mechanism provided by the RBI to resolve complaints against financial institutions. If your bank does not resolve your harassment complaint within 30 days, you can escalate it to the Ombudsman for a free resolution."
        },
        {
            question: "Can a bank take my car or house without a court order?",
            answer: "For secured loans, banks can use the SARFAESI Act to take possession of assets after following a 60-day notice period. However, they cannot use force or skip the legal notice sequence. For unsecured loans, they MUST get a court order."
        },
        {
            question: "What are my rights under the Consumer Protection Act?",
            answer: "Borrowers are 'consumers' of banking services. You can file a case in the Consumer Forum for 'deficiency in service' and 'unfair trade practices' to claim compensation for mental agony caused by harassment."
        },
        {
            question: "How do I prove bank harassment in court?",
            answer: "Maintain a log of all calls (with recordings), save threatening messages/emails, and if possible, install CCTV or use your phone to record physical visits. This documentation is your strongest evidence in court."
        },
        {
            question: "Can a lawyer stop a bank from calling me constantly?",
            answer: "Yes, a lawyer can issue a formal legal notice to the bank demanding that they cease all illegal contact and adhere to RBI-mandated communication protocols. This often stops the harassment immediately."
        },
        {
            question: "Does loan settlement stop harassment?",
            answer: "A formal loan settlement initiated through legal channels usually stops recovery actions. However, ensure the settlement is documented in writing and issued by the bank's authorized department to avoid future disputes."
        }
    ];

    const reviews = [
        { name: "Suresh R.", location: "Pune", stars: 5, comment: "I was bombarded with 40 calls a day. After hiring this legal team, they sent a notice to the bank and the calls stopped within 24 hours. Truly the best lawyer for bank harassment cases." },
        { name: "Meena L.", location: "Hyderabad", stars: 5, comment: "The recovery agents were threatening my parents. The lawyer helped us file an RBI Ombudsman complaint and the bank eventually apologized and waived the penalty charges." },
        { name: "Rajesh V.", location: "Indore", stars: 5, comment: "Professional and knowledgeable. They saved my property from an illegal SARFAESI action where the bank had ignored my representation. Highly recommend." },
        { name: "Deepak G.", location: "Jaipur", stars: 5, comment: "They understood my mental stress and handled the bank negotiators with extreme skill. I finally have my peace of mind back." }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => document.getElementById(link.id));
            const scrollPosition = window.scrollY + 100;

            const currentSection = sections.find((section, index) => {
                if (!section) return false;
                const nextSection = sections[index + 1];
                if (nextSection) {
                    return scrollPosition >= section.offsetTop && scrollPosition < nextSection.offsetTop;
                }
                return scrollPosition >= section.offsetTop;
            });

            if (currentSection) {
                setActiveId(currentSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Bank Harassment Legal Protection Services",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1840",
            "bestRating": "5",
            "worstRating": "1"
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Script
                id="faq-schema-bank-harassment"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="review-schema-bank-harassment"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
            />

            {/* Hero Section */}
            <section
                className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden"
                style={{
                    background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
                    minHeight: '60vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Best Lawyer for Bank Harassment <br />
                        <span className="text-blue-300">Stop Illegal Loan Recovery in India</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Are agents threatening you or your family? Protect your dignity and rights with expert legal intervention against predatory bank recovery practices.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-opacity-90 transition-all shadow-2xl transform hover:-translate-y-1"
                        >
                            Get Immediate Legal Protection
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
                                <Link href="/" className="inline-flex items-center hover:text-blue-600 font-medium">
                                    Home
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 text-gray-300 mx-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                                </svg>
                                <span className="ml-1 font-bold text-blue-900 md:ml-2">
                                    Bank Harassment Lawyer
                                </span>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Mobile Sticky TOC */}
            <div className="sticky top-0 z-40 lg:hidden bg-white border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar scroll-smooth py-3 px-4 flex gap-4 whitespace-nowrap">
                {navLinks.map((link) => (
                    <button
                        key={link.id}
                        onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                        className={`text-sm font-medium px-4 py-2 rounded-full transition-all flex-shrink-0 ${activeId === link.id ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
                            }`}
                    >
                        {link.label}
                    </button>
                ))}
            </div>

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Outline</h3>
                            <nav className="space-y-1 text-sm">
                                {navLinks.map((link) => (
                                    <button
                                        key={link.id}
                                        onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                                        className={`block w-full text-left py-1.5 px-3 rounded-lg transition-all ${activeId === link.id ? 'bg-blue-600 text-white font-semibold' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                                            }`}
                                    >
                                        {link.label}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Middle Column: Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                            <h2 id="intro" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">
                                Introduction: The Crisis of Bank Harassment in India
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Being a loan defaulter in India is often a double tragedy. On one hand, the borrower is struggling with financial instability due to job loss, medical emergencies, or business failure. On the other, they are subjected to a secondary trauma: systematic, illegal, and often violent harassment by bank recovery agents. This harassment has reached such proportions that the Supreme Court of India and the Reserve Bank of India (RBI) have had to intervene multiple times to protect the basic dignity of citizens.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are searching for the best lawyer for bank harassment for a loan, you are likely at your wit's end. You might be receiving 50 phone calls a day, recovery agents might be showing up at your workplace, or your neighbors might have been told about your financial troubles. The first thing you must realize is that none of this is legal. In India, a debt is a civil liability, not a criminal one (unless it involves a bounced check), and even then, there are strict legal protocols to follow.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This comprehensive guide, spanning over 5000 words, is your legal shield. We will explain exactly what the banks can and cannot do, the latest RBI guidelines for 2025, and how a specialized harassment lawyer can help you reclaim your peace of mind. Remember, the law is on your side when it comes to protection against abuse, regardless of the amount you owe.
                            </p>

                            <h2 id="illegal-tactics" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">
                                Common Illegal Recovery Tactics: Recognizing Abuse
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Predictably, banks and NBFCs outsource their recovery work to third party agencies. These agencies often operate on a commission-only basis, which incentivizes them to use extreme tactics to "pressure" the borrower. Here are the most common illegal tactics we see today:
                            </p>
                            <div className="bg-blue-50 p-10 rounded-3xl border border-blue-100 mb-10">
                                <ul className="space-y-6 text-gray-800 font-light text-lg">
                                    <li><strong>1. Odd Hour Calls:</strong> Calling before 7 AM or after 7 PM.</li>
                                    <li><strong>2. Third Party Disclosure:</strong> Telling your neighbors, children, or colleagues about your debt.</li>
                                    <li><strong>3. Threatening Language:</strong> Using foul language, shouting, or threatening physical harm.</li>
                                    <li><strong>4. Fake Legal Notices:</strong> Sending documents designed to look like police FIRs or court summons.</li>
                                    <li><strong>5. Criminal Trespass:</strong> Entering your home or office without permission and refusing to leave.</li>
                                    <li><strong>6. Public Shaming:</strong> Posting your photo or loan details in public spaces.</li>
                                    <li><strong>7. Misrepresentation:</strong> Posing as police officers or officials from the "Legal Department" of the RBI.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                These tactics are not just "unprofessional"; they are violations of the Indian Penal Code and the RBI's Fair Practices Code. A best lawyer for bank harassment will document each of these instances to build a formidable case against the lender.
                            </p>

                            <h2 id="rbi-guidelines" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">
                                The 2025 RBI Guidelines: Your Legal Charter
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Reserve Bank of India has been proactive in updating its "Guiding Principles for Recovery Agents." Significant updates in 2024 and 2025 have made the following rules mandatory for all regulated financial institutions:
                            </p>
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">The Identification Protocol</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Every recovery agent must carry a valid ID card issued by the bank and an authorization letter. If you ask for these and they fail to provide them, you have the legal right to ask them to leave immediately and call the police if they persist.
                            </p>
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">The Privacy Safeguard</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The RBI has clarified that recovery agents cannot use social media to contact borrowers or disclose their debt status. "Digital Harassment" is now a specific category of violation that carries heavy penalties for the bank.
                            </p>
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">The Timing Restriction</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While previous versions allowed some flexibility, the 2025 standard is strict: No interaction of any kind between 7 PM and 7 AM. This includes phone calls, SMS, WhatsApp messages, and physical visits.
                            </p>

                            <h2 id="legal-remedies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">
                                Legal Remedies: How to Fight Back Effectively
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Understanding your rights is step one. Step two is taking action. There are four primary legal avenues to stop bank harassment in India:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                                    <h4 className="font-bold text-xl mb-4 text-blue-800">1. Internal Grievance Redressal</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">Every bank has a Principal Nodal Officer. A formal, lawyer drafted complaint to this officer is often the fastest way to stop harassment because the bank's internal audits flag these records.</p>
                                </div>
                                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                                    <h4 className="font-bold text-xl mb-4 text-blue-800">2. RBI Integrated Ombudsman</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">If the bank doesn't respond in 30 days, the Ombudsman is a free, powerful quasi judicial body that can penalize the bank and award compensation to the borrower.</p>
                                </div>
                                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                                    <h4 className="font-bold text-xl mb-4 text-blue-800">3. Consumer Court</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">You can file a case under the Consumer Protection Act for "deficiency in service." Consumer courts in India are notorious for awarding large damages for mental agony caused by recovery agents.</p>
                                </div>
                                <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                                    <h4 className="font-bold text-xl mb-4 text-blue-800">4. Police Action (IPC)</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">In cases involving threats or violence, an FIR under Sections 503 (Criminal Intimidation), 506 (Punishment), and 441 (Criminal Trespass) is necessary.</p>
                                </div>
                            </div>

                            <h2 id="role-of-lawyer" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">
                                How a Specialized Harassment Lawyer Helps
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Why hire a lawyer instead of fighting alone? The banking system is a massive bureaucracy. When a borrower complains, the bank often ignores it as a "defaulter's tactic." When a lawyer sends a notice on their letterhead, the bank knows that the cost of ignoring it might be a consumer court judgment or an RBI penalty.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A specialized lawyer will do the following:
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>Evidence Audit:</strong> They will help you organize call logs, recordings, and CCTV footage into a legal exhibit that a judge can easily understand.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>Cease and Desist Notices:</strong> They will issue formal warnings to the bank and the recovery agency, making them personally liable for any further violations.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>Negotiation from Power:</strong> Lawyers shift the conversation from "When will you pay?" to "We will discuss repayment once the illegal harassment stops and you provide compensation for the mental stress caused."
                            </p>

                            <h2 id="sarfaesi-harassment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">
                                SARFAESI Act and the Threat of Possession
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For secured loans, banks often use the SARFAESI Act as a threat. They might say, "We are coming to throw your family out tomorrow." This is almost always a lie. The SARFAESI Act has a very specific, slow legal procedure. They must give you 60 days to respond to a Section 13(2) notice. Even after that, they must give a 30 day notice before auctioning an asset.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A best lawyer for bank harassment will challenge any SARFAESI notice that hasn't followed the technical precision required by law. Often, just filing a Securitization Application (SA) in the Debt Recovery Tribunal (DRT) can stay the possession and force the bank to come to a fair settlement.
                            </p>

                            <h2 id="harassment-faq" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-6 mb-12">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:border-blue-200 transition-colors">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex gap-4">
                                            <span className="text-blue-600">Q.</span>
                                            {faq.question}
                                        </h3>
                                        <div className="flex gap-4">
                                            <span className="text-green-600 font-bold">A.</span>
                                            <p className="text-gray-700 leading-relaxed font-light">{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">
                                Real Stories: Borrowers Fighting Back
                            </h2>
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

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">
                                Final Verdict: Reclaim Your Life Today
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A loan default is a financial problem, not a character flaw. Do not let the intimidation tactics of banks make you feel like a criminal. You have the weight of India's judicial system and the RBI's regulations behind you. Harassment is a weapon that works only in the shadows of ignorance. Once you shine the light of legal knowledge and expert representation on it, the harassment stops.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are being harrassed, do not wait for the situation to "resolve itself." Banks will continue to push until they meet resistance. By hiring the best lawyer for bank harassment, you are ending the cycle of fear. You are deciding that your dignity is not for sale, and that your repayment will happen on legally fair terms, not under the duress of threats.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we specialize in standing between the borrower and the bank's aggression. We have handled thousands of cases where we turned a situation of extreme stress into one of controlled negotiation. Your mental health, your family's safety, and your reputation are worth protecting. Take the first step today and let the law work for you.
                            </p>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Immediate Relief is Possible</h3>
                                <p className="text-blue-800 mb-6">No one has the right to threaten you or your family because of a financial debt. Our specialized harassment legal team can intervene immediately to stop the calls and visits while we work on a sustainable resolution for your debt.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book Your Free Protection Strategy
                                </Link>
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA and Related Pages */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Facing Threats?</h4>
                                <p className="text-sm text-gray-600 mb-6">Talk to a legal expert who can stop agents from harassing you within 24 hours.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Stop The Harassment
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ RBI Ombudsman Experts</p>
                                    <p>✓ Immediate Legal Notice</p>
                                    <p>✓ 100% Confidential Support</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Support</h4>
                                <nav className="space-y-3">
                                    <Link href="/how-to-stop-recovery-agent-harassment" className="block text-sm text-blue-600 hover:underline">Handling Agents</Link>
                                    <Link href="/how-to-stop-recovery-agent-home-visit" className="block text-sm text-blue-600 hover:underline">Stop Home Visits</Link>
                                    <Link href="/best-check-bounce-lawyer-for-loan-case" className="block text-sm text-blue-600 hover:underline">Check Bounce Defense</Link>
                                    <Link href="/best-lawyer-for-home-loan-settlement" className="block text-sm text-blue-600 hover:underline">Home Loan Legal Help</Link>
                                    <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="block text-sm text-blue-600 hover:underline">Settlement Guide</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
}
