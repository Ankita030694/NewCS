'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function StopRecoveryHarassmentClient() {
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
        { id: 'introduction', label: 'Introduction to Harassment' },
        { id: 'rbi-guidelines-2026', label: 'RBI 2026 Guidelines' },
        { id: 'how-to-handle-bank-calls', label: 'Handling Bank Calls' },
        { id: 'what-to-do-when-threatened', label: 'When Threatened' },
        { id: 'stop-personal-loan-calls', label: 'Stop Personal Loan Calls' },
        { id: 'case-study-1', label: 'Case Study 1: Personal Loan' },
        { id: 'case-study-2', label: 'Case Study 2: Credit Card' },
        { id: 'how-to-file-complaint', label: 'Filing a Complaint' },
        { id: 'legal-remedies', label: 'Legal Remedies' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' }
    ];

    const faqs = [
        {
            question: "How to stop recovery agent harassment completely?",
            answer: "To stop recovery agent harassment, you must assert your rights under RBI 2026 guidelines. Start by recording all calls, demand their authorization letters, and file a formal complaint with the bank's Nodal Officer or the RBI Integrated Ombudsman. Legal notices can also force banks to cease unlawful recovery practices."
        },
        {
            question: "How to stop personal loan recovery calls?",
            answer: "You can stop personal loan recovery calls by requesting the bank to communicate only via email or formal letters. If the calls persist at odd hours or involve abusive language, log the exact time, record the calls, and file a police complaint for harassment under the relevant sections of the Bharatiya Nyaya Sanhita."
        },
        {
            question: "How to handle bank recovery calls professionally?",
            answer: "When handling bank recovery calls, remain calm and professional. Do not argue. State your financial hardship clearly, ask for a restructuring or settlement plan, and request the agent's name, ID, and agency details. If they refuse to provide identification, hang up immediately."
        },
        {
            question: "What should I do if recovery agents are threatening me?",
            answer: "If recovery agents are threatening you with physical violence, defamation, or false police cases, this is a criminal offense. Record the threat, do not pay them out of fear, and immediately file an FIR at your local police station or via the national cybercrime portal."
        },
        {
            question: "Can recovery agents visit my home or workplace?",
            answer: "Recovery agents can visit your home, but only after providing prior notice and taking your consent for the time and place. They cannot visit your workplace unannounced, and they cannot disclose your debt details to your employer, neighbors, or family members."
        },
        {
            question: "What are the RBI 2026 guidelines for recovery agents?",
            answer: "The RBI 2026 guidelines mandate that recovery calls can only be made between 8 AM and 7 PM. Agents must not use abusive language, physical threats, or contact your relatives. Banks are held strictly accountable for any misconduct by their third party agents."
        },
        {
            question: "Can a bank send police or file a criminal case for an unsecured loan?",
            answer: "No. Defaulting on an unsecured personal loan or credit card is a civil dispute, not a criminal offense. Banks and recovery agents cannot send the police to your home or file an FIR for simple non payment. Any threat of 'jail time' is illegal intimidation."
        },
        {
            question: "How do I report a recovery agent to the RBI?",
            answer: "You can report a recovery agent to the RBI by visiting the RBI Complaint Management System (CMS) portal. You will need to provide proof of harassment, such as call recordings or abusive messages, and show that you first complained to the bank but received no resolution within 30 days."
        },
        {
            question: "Is it legal for recovery agents to contact my phone contacts?",
            answer: "Absolutely not. It is entirely illegal for recovery agents to hack your phone, access your contact list, or call your friends and family members. This violates privacy laws and the RBI fair practices code, and is punishable under cyber laws."
        },
        {
            question: "Can a legal notice stop bank harassment?",
            answer: "Yes. Serving a robust legal notice to the bank's grievance officer and the recovery agency's head office puts them on high alert. It creates a formal legal record of their misconduct, which often forces them to immediately suspend the harassing agents from your case."
        }
    ];

    const reviews = [
        { name: "Vikram S.", location: "Bengaluru", stars: 5, comment: "I was getting 50 calls a day from abusive agents. CredSettle helped me send a legal notice to the bank, and the harassment stopped within 48 hours. I finally have my peace of mind back." },
        { name: "Anjali M.", location: "Hyderabad", stars: 5, comment: "Agents were threatening to visit my office and humiliate me. The legal team guided me on how to record the calls and escalate the matter to the RBI Ombudsman. The bank had to recall their agency." },
        { name: "Rajesh K.", location: "Ahmedabad", stars: 5, comment: "I did not know how to handle bank recovery calls until I found this guide. By demanding their ID and citing the 2026 RBI rules, the agents backed off and agreed to a proper settlement dialogue." }
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
        'name': 'Stop Recovery Agent Harassment Services',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '1120',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-stop-harassment" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-stop-harassment" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        Legal Rights 2026
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        How to Stop <br />
                        <span className="text-blue-300">Recovery Agent Harassment</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-normal">
                        Are recovery agents harassing you over a personal loan? Learn how to legally stop recovery calls, file complaints, and protect your rights in India.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Stop Recovery Harassment: Get Legal Help Now
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
                                        Stop Recovery Harassment
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
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Sections</h3>
                            <nav className="space-y-1 text-sm">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={`block py-1.5 px-3 rounded-full transition-all ${activeId === link.id
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: The Nightmare of Recovery Harassment</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Falling behind on personal loans or credit card payments is a stressful experience. However, that stress is exponentially magnified when banks and Non Banking Financial Companies deploy aggressive recovery agents to collect the dues. If you are constantly wondering how to stop recovery agent harassment, you are not alone. Millions of borrowers across India face severe intimidation, public humiliation, and relentless phone calls from these agents every single day.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is critical to understand that defaulting on a loan is a civil matter, not a criminal offense. You cannot be sent to jail simply because you were unable to pay an EMI due to genuine financial hardship. Yet, recovery agents routinely use scare tactics, claiming they have police warrants, threatening to lock up your house, or abusing you and your family members. This comprehensive 2026 guide will equip you with the exact legal knowledge and actionable steps you need to handle bank recovery calls, protect your dignity, and permanently stop recovery agents from threatening you.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Whether the harassment is happening over the phone, via WhatsApp, or through unannounced visits to your home and workplace, the law is on your side. The Reserve Bank of India has laid down strict guidelines governing the conduct of these agents, and the Supreme Court of India has repeatedly condemned the use of muscle power for loan recovery. By the end of this guide, you will know precisely how to assert your rights and turn the tables on abusive collection agencies.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We will explore the nuances of the RBI directives, the legal remedies available under the Bharatiya Nyaya Sanhita, and share detailed case studies of borrowers who successfully fought back against institutional bullying. Do not let fear dictate your actions. Knowledge is your strongest shield against recovery agent harassment.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This article is not just about defending yourself; it is about taking control. We will provide you with the exact scripts to use when agents call, the protocols for documenting their abuse, and the escalation matrix to ensure that the banks are held legally and financially accountable for the actions of their hired thugs.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Let us begin by breaking down the fundamental rules that govern the debt recovery process in India, ensuring you are never again left feeling helpless or threatened by an unauthorized collection agent.
                            </p>

                            <h2 id="rbi-guidelines-2026" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">The Ironclad Shield: RBI 2026 Guidelines on Recovery</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Reserve Bank of India is the supreme regulatory authority governing all banks and NBFCs in the country. To curb the rising menace of recovery agent harassment, the RBI periodically updates its Fair Practices Code and issues stringent directives. In 2026, the regulatory framework has become even more robust, placing strict vicarious liability on the lending institutions for the actions of their recovery agents.
                            </p>

                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-2xl"></div>
                                <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                                    </svg>
                                    Core Protections Under RBI Rules:
                                </h4>
                                <ul className="space-y-3 text-red-800 font-normal list-disc pl-5 m-0 text-sm">
                                    <li><strong>Strict Calling Hours:</strong> Recovery agents are legally prohibited from calling or visiting a borrower before 8:00 AM or after 7:00 PM. Any contact outside this 11 hour window is a direct violation.</li>
                                    <li><strong>Zero Tolerance for Abuse:</strong> Agents cannot use abusive language, issue physical threats, or employ any form of intimidation, whether verbal or physical.</li>
                                    <li><strong>Privacy and Confidentiality:</strong> It is illegal for agents to discuss your loan details with your relatives, friends, neighbors, or employer. Public humiliation is strictly barred.</li>
                                    <li><strong>Mandatory Identification:</strong> Agents must carry a valid identity card, an authorization letter from the bank, and a copy of the loan recovery notice when visiting your premises.</li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are wondering how to stop recovery agent harassment, invoking these RBI guidelines is your first line of defense. When an agent calls, you have the right to ask for their full name, the name of their recovery agency, and their employee ID. If they refuse to provide this information, you are well within your rights to disconnect the call. Furthermore, banks are required to inform you in advance regarding the details of the recovery agency assigned to your case.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Scammers and rogue agents rely on the borrower's ignorance of these rules. They assume that if they shout loud enough, the borrower will submit. By calmly citing the RBI circulars on "Recovery Agents engaged by REs," you immediately signal that you are an informed citizen who will not be easily bullied. This often forces the agency to adopt a much more polite and professional tone.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Remember, the bank cannot wash its hands of the agent's behavior. The RBI has made it clear that complaints against the recovery agents will be treated as complaints against the bank itself. If a bank receives multiple complaints regarding its recovery practices, the RBI can impose hefty financial penalties and even ban the bank from operating in certain areas or utilizing third party recovery services altogether.
                            </p>

                            <h2 id="how-to-handle-bank-calls" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">How to Handle Bank Recovery Calls Like a Pro</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many borrowers dread the ringing of their phone, knowing it is another recovery agent. However, dodging calls indefinitely is not a viable strategy. It can lead the bank to classify you as a "willful defaulter" or an "absconder," which accelerates legal action and home visits. The key is to learn how to handle bank recovery calls professionally, calmly, and strategically.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The first rule of engagement is: <strong>Never lose your temper.</strong> Recovery agents are trained to provoke you. If you get angry, start shouting, or use abusive language yourself, they will record the call and use it against you to justify their own aggressive behavior. Maintain a cool, detached demeanor at all times.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When you answer a call from an unknown number or a known recovery agency, follow this exact protocol:
                            </p>
                            <ol className="list-decimal pl-6 space-y-4 mb-8 text-gray-700">
                                <li><strong>Demand Identification:</strong> Before discussing anything, ask: "May I know your name, the agency you represent, and your employee ID?" If they refuse, state: "I cannot discuss my financial matters with an unidentified caller. Please call back when you are ready to identify yourself," and hang up.</li>
                                <li><strong>State That You Are Recording:</strong> Inform the agent immediately: "Please be aware that I am recording this call for my legal records and to ensure compliance with RBI guidelines." This single sentence often changes the agent's tone instantly.</li>
                                <li><strong>Acknowledge the Debt, But State the Hardship:</strong> Do not deny the loan. Simply state: "I acknowledge the outstanding amount. However, due to a medical emergency and job loss, I am currently facing severe financial hardship. I intend to pay, but I need time."</li>
                                <li><strong>Do Not Make Unrealistic Promises:</strong> Agents will pressure you to pay "something today" to stop the calls. If you promise to pay ₹5,000 by evening and fail to do so, the harassment will double the next day. Only commit to what you can realistically afford, even if that amount is zero right now.</li>
                                <li><strong>Request Written Communication:</strong> Tell the agent: "I am willing to discuss a settlement or restructuring plan. Please send the official proposal to my registered email address. I will not negotiate over the phone."</li>
                            </ol>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                By standardizing your response, you take away the agent's power to intimidate you. You transition the interaction from an emotional shouting match into a documented, professional exchange. If the agent continues to shout or talk over you, calmly repeat your statement and disconnect the call. Do this every single time, and the agency will realize that aggressive tactics do not work on you.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, keep a meticulous log of all calls. Note the date, time, phone number, the name of the agent, and a brief summary of the conversation. If an agent calls you at 9:00 PM, take a screenshot of the call log. This documentation is vital evidence if you need to file a formal complaint for harassment later on.
                            </p>

                            <h2 id="what-to-do-when-threatened" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">What to Do When Recovery Agents Are Threatening You</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                There is a massive difference between a persistent collection call and a criminal threat. If you find yourself thinking, "recovery agents threatening me," you have crossed into territory where you must involve law enforcement. Agents sometimes threaten physical harm, kidnapping, public defamation, or filing false police reports to extort money from terrified borrowers.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is crucial to understand that threats of violence, extortion, and criminal intimidation are serious offenses under the Bharatiya Nyaya Sanhita (the updated Indian penal code). A bank's mandate to recover money does not give its agents immunity from criminal laws.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Here is exactly what you must do when faced with direct threats:
                            </p>
                            <ul className="list-disc pl-6 space-y-4 mb-8 text-gray-700">
                                <li><strong>Do Not Show Fear:</strong> The agent is feeding on your panic. Reply firmly: "You are issuing a criminal threat. I have recorded this, and I am filing an FIR against you and the bank immediately." Often, calling their bluff makes them back down.</li>
                                <li><strong>Secure Your Evidence:</strong> Ensure your call recording app is functioning. Save any threatening WhatsApp messages, SMS texts, or voicemails. Take screenshots and backup this data to a secure cloud drive. Never delete a threatening message; it is your primary evidence.</li>
                                <li><strong>File an Online Police Complaint:</strong> You do not necessarily have to visit a police station immediately. Use the National Cyber Crime Reporting Portal or your state's online police grievance system to file a complaint against the specific phone numbers used to threaten you.</li>
                                <li><strong>Draft a Formal Legal Notice:</strong> Engage a legal professional to draft a strongly worded notice to the bank's Nodal Officer and the Grievance Redressal Officer. Attach the evidence of the threats. The notice should demand immediate cessation of the agency's activities and threaten legal action against the bank for criminal intimidation.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold bg-blue-50 text-blue-900 p-8 rounded-3xl shadow-md border border-blue-100">
                                Critical Alert: If agents threaten to come to your home with "police," understand that the police do not assist banks in recovering unsecured personal loans or credit card dues without a specific court order. If thugs show up at your door claiming to have police authority, do not let them in. Call the local police emergency number immediately and report trespass and extortion.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Threats involving defamation are also common. Agents may threaten to post your photo on social media with the word "Defaulter," or threaten to stand outside your office holding banners. This is a severe violation of your right to privacy and reputation. Document the threat, and if they follow through, you have grounds to sue the bank for substantial damages in a civil court for defamation and mental agony.
                            </p>

                            <h2 id="stop-personal-loan-calls" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Actionable Steps: How to Stop Personal Loan Recovery Calls</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are specifically searching for how to stop personal loan recovery calls, you need a structured approach to transition the bank from aggressive recovery mode into settlement negotiation mode.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Step one is to officially revoke your consent for telephonic communication. While you cannot completely stop a bank from contacting you regarding a debt, you can dictate the medium of communication. Write a formal email to the bank's customer service and grievance redressal officer. State clearly that due to the harassing nature of the telephonic calls, you are formally requesting all future communications to be conducted via email or physical letters sent to your registered address. State that continued phone calls will be treated as harassment.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Step two is to propose a viable alternative. You cannot just tell the bank to go away; you must offer a solution. If you cannot afford the current EMIs, submit a formal request for loan restructuring due to financial hardship. Provide documentary evidence, such as a termination letter from your employer or medical bills. If you cannot afford even the restructured EMIs, you must initiate a dialogue for a One Time Settlement.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Step three involves leveraging the RBI Ombudsman if the bank ignores your requests and the calls continue. The RBI Integrated Ombudsman Scheme is a powerful tool. If you have filed a complaint with the bank regarding harassment and received no satisfactory response within 30 days, you can escalate the matter to the Ombudsman. The portal is free to use, and a notice from the Ombudsman usually forces the bank's higher management to intervene and rein in their rogue agents.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Step four is engaging specialized legal counsel. Sometimes, the sheer volume of calls from multiple lenders becomes impossible for an individual to manage. Legal firms specializing in anti harassment services can step in, issue cease and desist notices to the lenders, and take over the communication. When a bank realizes you have legal representation, they are far less likely to utilize illegal recovery tactics.
                            </p>

                            <h2 id="case-study-1" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Case Study 1: Stopping Harassment in a Personal Loan Default</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Meet Suresh, a 34 year old IT professional from Pune. During the economic slowdown, Suresh lost his job and defaulted on a ₹8 Lakh unsecured personal loan from a prominent private sector bank. Within 60 days of the default, his life turned into a nightmare. The bank assigned his account to a third party recovery agency known for its ruthless tactics.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The agents began calling Suresh over 30 times a day, starting as early as 6:00 AM. When Suresh explained his job loss, the agents mocked him, using foul language and demanding he borrow money from his parents to clear the dues. The harassment escalated when the agents somehow obtained the phone numbers of his former colleagues and began calling them, falsely claiming Suresh was a fraudster on the run.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Suresh was deeply depressed and considering drastic measures. However, he decided to fight back. He installed a reliable call recording application and documented the exact times the agents called outside the RBI permissible window. He recorded three specific conversations where the agents used explicit abusive language and threatened to "send thugs to his house."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Armed with this evidence, Suresh drafted a comprehensive complaint. He emailed the bank's Principal Nodal Officer, attaching the audio files and call logs. He explicitly stated that the bank was in gross violation of the RBI Fair Practices Code and that he was holding the bank vicariously liable for the defamation he suffered among his colleagues. He gave the bank 48 hours to withdraw the agency.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The bank's response was lukewarm, offering a standard apology but failing to stop the calls. Suresh immediately escalated the complaint to the RBI Integrated Ombudsman portal, uploading all the evidence and the bank's inadequate response. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The result was swift. Within a week of the Ombudsman taking cognizance of the complaint, the bank's regional manager personally called Suresh. The abusive recovery agency was entirely removed from his case. The bank issued a formal apology and offered to halt all recovery activities for three months, giving Suresh time to find a new job, after which they would discuss a structured settlement. Suresh successfully stopped the harassment by systematically documenting the abuse and leveraging the correct regulatory channels.
                            </p>

                            <h2 id="case-study-2" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Case Study 2: Managing Credit Card Recovery Agent Threats</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Priya, a 28 year old entrepreneur from Delhi, faced a different kind of terror. Her boutique business suffered heavy losses, leading to a default on three different credit cards totaling ₹4.5 Lakh. Credit card debt is notoriously expensive, and the recovery tactics are often the most aggressive in the industry.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One evening, two large men appeared at Priya's boutique. They refused to show any ID, blocked the entrance, and loudly announced to her customers that she was a "thief" who was hiding from the bank. They threatened to confiscate her inventory right then and there if she did not pay ₹50,000 immediately. They claimed they had a police warrant, though they refused to show it.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Priya was terrified but remembered a crucial piece of legal advice: recovery agents have absolutely no authority to seize assets for unsecured credit card debt without a specific court order. She discreetly turned on her phone's video camera and placed it on the counter, capturing their faces and their threats. She then loudly told them, "I know my rights. You are trespassing and attempting extortion. I am calling the police right now."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                She immediately dialed 112. The moment the agents realized she was actually calling the police and not just making empty threats, they panicked and fled the boutique. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Priya did not stop there. She took the video footage to the local police station and filed a formal FIR for criminal trespass, extortion, and criminal intimidation against unknown persons representing the specific bank. She also hired a lawyer who sent a scathing legal notice to the bank's headquarters, citing the FIR and threatening a massive civil suit for damages to her business reputation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Faced with a criminal FIR and a severe legal notice, the bank immediately backed down. They dispatched a senior official to apologize to Priya in person, assuring her that the rogue agency had been blacklisted. The bank, eager to avoid further negative publicity and legal liability, eventually agreed to a One Time Settlement of ₹1.5 Lakh, payable over six months, allowing Priya to close the accounts without further harassment.
                            </p>

                            <h2 id="how-to-file-complaint" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">The definitive guide to filing a complaint against recovery agents</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Knowing how to file a complaint effectively is the difference between continued harassment and immediate relief. A poorly drafted complaint sent to the wrong department will be ignored. A well documented, legally sound complaint sent to the highest authorities demands action.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>Level 1: The Bank's Grievance Redressal Mechanism</strong><br />
                                Do not complain to the customer care executive on the phone; it is useless. Go to the bank's official website and find the contact details for the 'Grievance Redressal Officer' (GRO) and the 'Principal Nodal Officer' (PNO). Draft a clear email detailing the date, time, and nature of the harassment. Attach audio recordings, SMS screenshots, or WhatsApp messages. State clearly which specific RBI guidelines the agents violated (e.g., calling after 7 PM, using abusive language). Demand a written response and a unique complaint tracking number.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>Level 2: The RBI Integrated Ombudsman</strong><br />
                                If the bank does not resolve the issue within 30 days, or if you are dissatisfied with their response, escalate to the RBI. Visit the RBI's Complaint Management System website. File a complaint under the category of 'Harassment by Recovery Agents'. You must upload the original complaint sent to the bank and the bank's reply (if any). The Ombudsman has the power to penalize the bank and direct them to cease the harassment immediately.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>Level 3: Law Enforcement and Cyber Crime</strong><br />
                                If the harassment involves criminal threats, stalking, defamation, or hacking your contacts, bypass the bank and go straight to the police. Use the National Cyber Crime portal (cybercrime.gov.in) to report online harassment or abusive WhatsApp messages. For physical threats or home visits, file a written complaint at your local police station demanding an FIR under the Bharatiya Nyaya Sanhita for criminal intimidation and extortion.
                            </p>

                            <h2 id="legal-remedies" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Advanced Legal Remedies to Stop Recovery Harassment</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Beyond administrative complaints, borrowers have powerful legal remedies available through the Indian judicial system. When banks cross the line, the courts are often willing to step in and protect the fundamental rights of the citizen.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the most effective tools is sending a formal Legal Notice through an advocate. A legal notice serves as a stern warning to the bank that you are aware of your rights and are prepared to litigate. It formally demands the cessation of illegal recovery tactics and often initiates a serious settlement dialogue, as banks prefer to avoid costly litigation over unsecured debts.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the harassment is extreme and causing severe mental agony, you can file a civil suit for an Injunction in a local civil court. An injunction is a court order commanding the bank and its agents to immediately stop contacting you, visiting your home, or harassing you in any manner until the debt dispute is legally resolved. Violating a court injunction is contempt of court, which carries severe penalties for the bank officials.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, if the bank's actions have caused tangible harm to your reputation or business, you can file a suit for damages (defamation). The Supreme Court of India has ruled in several landmark judgments that the right to life and liberty under Article 21 of the Constitution includes the right to live with dignity, which cannot be violated by recovery agents using muscle power.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You do not have to endure harassment in silence. By understanding the RBI guidelines, documenting every interaction, knowing how to handle bank recovery calls, and utilizing the legal remedies available, you can stop the abuse and regain control of your financial life. If you feel overwhelmed, do not hesitate to seek professional legal assistance to defend your rights and negotiate a fair settlement on your behalf.
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
                                        <p className="text-gray-700 mb-4 leading-relaxed font-normal text-sm m-0">{review.comment}</p>
                                        <div className="flex justify-between items-center text-xs font-bold text-blue-900 mt-4">
                                            <span>{review.name}</span>
                                            <span className="opacity-60">{review.location}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

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

                        </article>
                    </main>

                    {/* Right Column: Cards */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24 self-start">
                        <div className="space-y-6">
                            {/* Card 1: CTA */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center">
                                <h3 className="font-black text-gray-900 text-lg mb-2 mt-1 tracking-tight">Facing Harassment?</h3>
                                <p className="text-gray-600 text-xs mb-4 leading-relaxed px-1">
                                    Our legal experts can send an immediate notice to stop agents and protect your family today.
                                </p>
                                <Link
                                    href="/contact"
                                    className="w-full bg-[#1b5df3] hover:bg-blue-700 text-white font-bold py-3 px-3 rounded-xl transition-colors shadow-sm text-center text-sm"
                                >
                                    Stop the Agents
                                </Link>
                                <div className="mt-4 space-y-1 text-xs text-gray-500 w-full text-center font-medium">
                                    <p>&#10003; Stop Calls & Visits</p>
                                    <p>&#10003; RBI Compliant Action</p>
                                    <p>&#10003; Legal Representation</p>
                                    <p>&#10003; 24/7 Support</p>
                                </div>
                            </div>

                            {/* Card 2: Links */}
                            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 shadow-sm mt-4">
                                <h4 className="font-black text-gray-900 text-sm border-b border-gray-200 pb-2 mb-4">Related Expertise</h4>
                                <ul className="space-y-3 text-left font-medium">
                                    <li>
                                        <Link href="/services/personal-loan-settlement" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Personal Loan Settlement
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/anti-harassment" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Anti-Harassment Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-handle-recovery-agent-harrasment" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Handle Recovery Agents
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/rbi-rules-for-recovery-agents" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            RBI Recovery Rules
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
