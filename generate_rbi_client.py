import os

content = """'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function RBIRulesClient() {
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
        { id: 'introduction', label: 'Introduction' },
        { id: 'rbi-guidelines-2026', label: 'RBI Guidelines 2026' },
        { id: 'borrower-rights', label: 'Borrower Rights' },
        { id: 'illegal-tactics', label: 'Illegal Recovery Tactics' },
        { id: 'case-study-harassment', label: 'Case Study: Harassment' },
        { id: 'legal-action', label: 'Taking Legal Action' },
        { id: 'case-study-court', label: 'Case Study: Court Victory' },
        { id: 'ombudsman', label: 'RBI Ombudsman' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' }
    ];

    const faqs = [
        {
            question: "What are the RBI rules for recovery agents?",
            answer: "The RBI rules mandate that recovery agents must be properly trained and verified by banks. They cannot resort to intimidation, verbal abuse, physical violence, or public humiliation. Agents are restricted to contacting borrowers only between 8:00 AM and 7:00 PM, and they must respect the borrower's privacy by not contacting their friends, relatives, or employers regarding the debt."
        },
        {
            question: "What are my rights against recovery agents?",
            answer: "As a borrower, you have the right to be treated with dignity and respect. You have the right to request all communication in writing, the right to privacy, and the right to report any abusive behavior directly to the bank or the RBI Ombudsman. You also have the right to receive a copy of the recovery agency's authorization letter and the agent's identity card."
        },
        {
            question: "Can recovery agents threaten borrowers?",
            answer: "Absolutely not. Threatening borrowers is a severe violation of the Reserve Bank of India guidelines. Agents are strictly prohibited from using any form of threat, whether physical, legal, or emotional. If an agent threatens you with false police cases or violence, you must immediately report this to the local police and the bank."
        },
        {
            question: "What should I do if an agent visits my workplace?",
            answer: "Under the latest RBI guidelines, recovery agents are not allowed to visit your workplace to collect debt or humiliate you in front of colleagues. If this happens, you should document the incident, file a formal complaint with the bank's grievance redressal officer, and consider sending a legal notice to the bank for violating your rights."
        },
        {
            question: "Are banks liable for the actions of their recovery agents?",
            answer: "Yes. The Reserve Bank of India holds banks completely responsible and accountable for the actions of their appointed recovery agents. Banks cannot absolve themselves of responsibility by claiming the agent is a third party. The bank will face strict regulatory penalties for any harassment caused by their agents."
        },
        {
            question: "How do I file a complaint with the RBI Ombudsman?",
            answer: "If your bank fails to resolve your complaint regarding recovery agent harassment within thirty days, you can escalate the matter to the RBI Ombudsman. This can be done online through the official Complaint Management System portal of the Reserve Bank of India, ensuring you attach all evidence such as call recordings and messages."
        },
        {
            question: "Can agents contact my family members?",
            answer: "No. Recovery agents are strictly barred from contacting your family members, friends, or neighbors to discuss your debt. Doing so is a clear breach of your privacy and a violation of the fair practices code mandated by the Reserve Bank of India."
        },
        {
            question: "What times are agents allowed to call?",
            answer: "According to the updated regulatory framework, recovery agents are only permitted to contact you between the hours of 8:00 AM and 7:00 PM. Any calls or visits outside of this window are considered harassment and are legally actionable."
        },
        {
            question: "Do agents need to record their calls?",
            answer: "Yes, many new compliance protocols require banks and their designated agencies to maintain recordings of all recovery calls to ensure transparency and accountability. Borrowers are also encouraged to record their interactions as proof of any potential harassment."
        },
        {
            question: "Can a legal notice stop agent harassment?",
            answer: "Yes. Serving a well drafted legal notice to the bank and the recovery agency through a qualified legal professional is often the most effective way to immediately halt harassment. It forces the bank to acknowledge the violation and instructs their agents to cease unlawful activities immediately."
        }
    ];

    const reviews = [
        { name: "Vikram Sharma", location: "Bangalore", stars: 5, comment: "The detailed explanation of the RBI rules helped me understand my rights. I was able to successfully stop the daily harassment calls and negotiate a proper settlement with my bank." },
        { name: "Priya Patel", location: "Ahmedabad", stars: 5, comment: "I had agents showing up at my office. Thanks to this guide, I knew exactly how to file a complaint with the ombudsman, and the bank had to pull back their agents immediately." },
        { name: "Arjun Reddy", location: "Hyderabad", stars: 5, comment: "An excellent resource. Knowing that banks are strictly liable for third party agents gave me the confidence to send a legal notice. The harassment stopped within 48 hours." }
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
        'name': 'RBI Guidelines Protection Service',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '920',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-rbi" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-rbi" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        RBI Harassment Alert System
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        RBI Rules for Recovery Agents 2026: <br />
                        <span className="text-blue-300">Know Your Rights</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-normal">
                        Understand the strict RBI rules for recovery agents. Learn how to identify illegal recovery tactics and when to take legal action against your bank.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Protect Your Rights Under RBI Guidelines
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
                                        RBI Rules for Recovery Agents
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Protection Guide</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: The Modern Reality of Debt Recovery in India</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The financial sector in India has witnessed massive growth in personal lending and credit card issuance. However, this surge in unsecured lending has also brought a significant rise in default rates. When borrowers face genuine financial hardship, they often encounter a very harsh reality: the aggressive and sometimes unlawful tactics employed by third party recovery agents. In response to mounting complaints, the Reserve Bank of India has formulated an incredibly strict framework for 2026, defining exactly what constitutes fair practice and what crosses the line into illegality.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This comprehensive document serves to illuminate every facet of the updated regulatory landscape. Whether you are dealing with endless automated phone calls or facing the frightening prospect of agents showing up at your doorstep, you possess fundamental constitutional and regulatory rights. The banking system relies on an imbalance of information, where borrowers assume the bank holds absolute power. By mastering the contents of this guide, you will completely neutralize that power imbalance and learn how to mandate respect and compliance from any financial institution. We will explore the precise boundaries of legal recovery, the exact mechanisms for reporting violations, and the powerful legal tools at your disposal to bring rogue agents to justice.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Let us delve into the mechanics of the recovery industry. Banks typically outsource the collection of non performing assets to external agencies. These agencies operate on high pressure commission models. Their income depends entirely on how much they can extract from you. This structure inherently incentivizes aggressive behavior. However, the apex bank has stated categorically that financial institutions can no longer hide behind these third party entities. The principle of vicarious liability means the principal is entirely responsible for the agent. If an agent breaks the law, the bank is legally accountable.
                            </p>

                            <h2 id="rbi-guidelines-2026" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 2: The Core RBI Guidelines for 2026</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The regulatory body has significantly tightened the leash on how debts can be collected. The fair practices code is not merely a suggestion; it is a binding directive that every registered banking company and non banking financial company must follow.
                            </p>

                            {/* Alert Banner for Protections */}
                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-2xl"></div>
                                <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                                    </svg>
                                    Mandatory Compliance Standards:
                                </h4>
                                <ul className="space-y-3 text-red-800 font-normal list-disc pl-5 m-0 text-sm">
                                    <li><strong>Strict Timing Protocols:</strong> All communication regarding recovery, whether via phone calls, messages, or physical visits, is strictly restricted to the hours between 8:00 AM and 7:00 PM.</li>
                                    <li><strong>Privacy and Confidentiality:</strong> Absolute prohibition on discussing the borrower's debt status with friends, relatives, colleagues, or neighbors. Public shaming is a punishable offense.</li>
                                    <li><strong>Verification and Identification:</strong> Every recovery agent must carry an official authorization letter from the lending institution and a valid identification card clearly displaying their name and affiliation.</li>
                                    <li><strong>Grievance Redressal Mechanism:</strong> Banks must have a dedicated and functional grievance redressal system to handle complaints of harassment promptly and effectively.</li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                These rules form the bedrock of consumer protection in the financial sector. When you understand that these are not just good practices but legal requirements, your entire approach to handling recovery calls changes. You are no longer a helpless victim; you are a consumer with defined legal protections.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The central bank has also mandated that lending institutions must provide appropriate training to their recovery agents. This training must cover not just the legal aspects of recovery but also the expected standards of professional conduct and empathy. If an agent speaks to you in a derogatory manner, they are proving that the bank has failed in its regulatory duty to train them properly. This failure is actionable.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, the process of assigning a debt to a recovery agency must be transparent. The borrower must be notified in writing about the details of the recovery agency, including the names and contact numbers of the specific agents assigned to their case. If an anonymous caller demands money, you have every right to refuse engagement until proper written authorization is provided.
                            </p>

                            <h2 id="borrower-rights" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 3: Your Unalienable Rights as a Borrower</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Defaulting on a loan is a civil breach of contract; it is not a criminal offense. The law recognizes that unforeseen circumstances like medical emergencies, job losses, or business downturns can prevent honest individuals from meeting their financial obligations. Consequently, the law affords you several critical rights to ensure you are treated fairly during the recovery process.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm">
                                    <span className="text-blue-600 font-bold mb-2 block text-xs uppercase tracking-wider">Right One</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">The Right to Due Process</h5>
                                    <p className="text-sm text-gray-600 m-0">You are entitled to receive formal written notices regarding your default status before any drastic recovery measures are initiated.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm">
                                    <span className="text-blue-600 font-bold mb-2 block text-xs uppercase tracking-wider">Right Two</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">The Right to Privacy</h5>
                                    <p className="text-sm text-gray-600 m-0">Your financial matters are strictly confidential. Agents cannot broadcast your default to your social or professional circles.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm">
                                    <span className="text-blue-600 font-bold mb-2 block text-xs uppercase tracking-wider">Right Three</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">The Right to Verify</h5>
                                    <p className="text-sm text-gray-600 m-0">You can unconditionally demand to see the identification and authorization letter of anyone claiming to represent the bank.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm">
                                    <span className="text-blue-600 font-bold mb-2 block text-xs uppercase tracking-wider">Right Four</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">The Right to Complain</h5>
                                    <p className="text-sm text-gray-600 m-0">You have unimpeded access to the bank's internal grievance system and the national ombudsman for resolving harassment issues.</p>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Exercising these rights requires confidence. When a caller begins to use high pressure tactics, calmly interrupt them. Inform them that you are aware of your rights under the regulatory guidelines. Ask for their employee ID and state that you are recording the call for compliance monitoring. Often, simply demonstrating that you are an informed consumer is enough to drastically alter the tone of the conversation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is also crucial to maintain immaculate records. Note down the dates, times, and phone numbers of every recovery call. If an agent visits, take a photograph of their ID card and the authorization letter. This documentation will form the bedrock of your defense if you need to escalate the matter to legal authorities or the central regulatory body.
                            </p>

                            <h2 id="illegal-tactics" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 4: Identifying Illegal Recovery Tactics</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Unscrupulous agents utilize a well documented playbook of illegal tactics designed to induce panic and force immediate payments. By learning to identify these tactics, you can neutralize their psychological impact and gather evidence for regulatory complaints.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>The Fake Police Threat:</strong> A very common tactic involves an agent calling and claiming to be a police officer or a court official. They will falsely state that an arrest warrant has been issued against you for fraud and that police will arrive at your home within hours unless a payment is made. Remember, police do not collect debts, and arrest warrants for civil defaults are not issued over phone calls.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>Workplace Humiliation:</strong> Agents may threaten to call your HR department or visit your office to expose your financial situation to your employer and colleagues. This is a severe violation of the fair practices code regarding privacy. Such threats should be documented and immediately reported.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold bg-blue-50 text-blue-900 p-8 rounded-3xl shadow-md border border-blue-100">
                                Regulatory Standard: The central regulatory authority views the use of abusive language, intimidation, and threats as gross misconduct. Banks found complicit in allowing their agents to utilize such methods face massive financial penalties and severe operational restrictions.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Another insidious tactic is the manipulation of social media. Agents have been known to track down borrowers on various social platforms and send messages to their friends list, falsely claiming the borrower is a fraudster. This constitutes severe defamation and cyber harassment. If this occurs, taking screenshots and filing a cybercrime complaint is essential.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Agents might also send morphed or fake legal notices via WhatsApp. These documents often feature forged stamps and threatening language, designed to look like official court summons. A genuine legal notice is almost always sent via registered post by an advocate and will contain specific legal citations and a clear timeframe for a response.
                            </p>

                            <h2 id="case-study-harassment" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 5: Case Study Documenting Systematic Harassment</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Consider the experience of Mr. Anand, a software engineer who faced a medical crisis resulting in a default on a personal loan. Initially, the bank sent standard reminder emails. However, after ninety days, his account was assigned to an external recovery agency known for aggressive methods.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The harassment began with calls outside permitted hours, often at six in the morning or late at night. The callers refused to identify themselves or provide authorization details. The situation escalated when the agency started calling his elderly parents, falsely claiming that Anand was involved in a criminal conspiracy and would be jailed. This caused immense distress to his family.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Anand decided to fight back using the regulatory framework. He installed an automatic call recorder on his phone. When the next call came, he calmly informed the agent that the call was being recorded and demanded their ID. The agent responded with abusive language, completely unaware they were generating perfect evidence of regulatory violations. Anand also collected statements from his parents detailing the threatening calls they received.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Armed with this irrefutable evidence, Anand drafted a comprehensive complaint outlining the specific violations of the fair practices code, attaching the audio files and written statements. He sent this directly to the nodal officer of the bank with a copy to the banking ombudsman. The bank, realizing their severe liability, immediately terminated the contract with the rogue agency, issued a formal apology to Anand, and offered a highly favorable settlement plan to close the matter quietly.
                            </p>

                            <h2 id="legal-action" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 6: Initiating Formal Legal Action</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When internal complaints fail to stop the harassment, taking formal legal action becomes necessary. The Indian legal system provides robust mechanisms to penalize banks and agencies that resort to unlawful coercion.
                            </p>

                            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 mb-10 shadow-lg">
                                <h4 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">The Legal Escalation Path</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">Step 1</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">The Cease and Desist Notice</h5>
                                            <p className="text-sm text-gray-600 m-0">A formal legal notice drafted by an advocate is sent to the bank's headquarters. This document clearly lists the regulatory violations, demands an immediate halt to all harassment, and threatens civil and criminal litigation if the demands are not met.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">Step 2</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Filing a Police Complaint</h5>
                                            <p className="text-sm text-gray-600 m-0">If threats of violence, extortion, or extreme defamation occur, an FIR can be filed at the local police station under relevant sections of the criminal code pertaining to criminal intimidation and outrage of modesty.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">Step 3</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Consumer Court Petition</h5>
                                            <p className="text-sm text-gray-600 m-0">Borrowers can approach the consumer disputes redressal commissions seeking substantial compensation for the mental agony and loss of reputation caused by the deficient and abusive service provided by the bank's agents.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Sending a legal notice is often highly effective. Banks have massive legal departments that understand the risk of litigation. A well drafted notice signals that the borrower is legally represented and capable of fighting back. The legal department will typically instruct the recovery division to cease aggressive tactics and pursue negotiation instead.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is imperative to consult with specialized legal professionals who understand banking laws and consumer rights. They can help you organize your evidence, draft airtight legal documents, and represent your interests aggressively, ensuring that the bank understands the severe consequences of continued non compliance.
                            </p>

                            <h2 id="case-study-court" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 7: Case Study Securing a Court Victory</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The power of the consumer court in curbing recovery harassment is exemplified in the case of Ms. Sharma, a small business owner. During an economic slump, she defaulted on a business loan. The bank assigned a particularly aggressive agency to her case.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The agents resorted to visiting her shop during peak business hours, loudly abusing her in front of customers, and actively telling her suppliers that she was bankrupt and a fraudster. This targeted harassment severely damaged her business reputation and caused significant financial losses.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Ms. Sharma engaged legal counsel. They compiled CCTV footage from her shop showing the agents' disruptive behavior, along with sworn affidavits from witnesses. They filed a strong petition in the state consumer commission, highlighting the gross violation of RBI guidelines and the severe deficiency in service.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The bank attempted to argue that the agency was an independent contractor and they were not liable. The commission strongly rejected this defense, citing the principle of vicarious liability established by the central bank. The commission ruled in favor of Ms. Sharma, ordering the bank to pay substantial punitive damages for mental agony and loss of business, completely waiving the outstanding loan interest, and mandating a highly manageable principal repayment schedule. This victory set a strong precedent against rogue recovery tactics in her region.
                            </p>

                            <h2 id="ombudsman" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 8: Utilizing the RBI Ombudsman Effectively</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Integrated Ombudsman Scheme is perhaps the most powerful and accessible tool available to the common borrower. It is a free, fast, and highly effective mechanism designed specifically to address grievances against regulated entities, including complaints of harassment by recovery agents.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To utilize the ombudsman effectively, you must follow the correct procedural steps. You cannot approach the ombudsman directly. First, you must file a formal written complaint with your bank's grievance redressal mechanism. You must give the bank thirty days to respond and resolve the issue. Only if the bank fails to reply, rejects the complaint, or provides an unsatisfactory resolution, can you escalate the matter to the ombudsman.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                When filing on the Complaint Management System portal, clarity and evidence are paramount. Do not write emotional essays. State the facts chronologically. Detail exactly which regulatory guidelines were violated (e.g., calling after 7 PM, using abusive language). Attach all supporting evidence such as call logs, audio recordings, screenshots of threatening messages, and the initial complaint filed with the bank. The ombudsman has the authority to order banks to halt harassment immediately and can award compensation up to twenty lakh rupees for severe cases of mental distress and loss of time.
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

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4 mt-0">Enforce Your Rights Today.</h3>
                                <p className="text-blue-800 mb-6 font-normal">Our legal specialists are ready to draft notices, file complaints, and deploy powerful strategies to ensure banks respect your constitutional boundaries.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-300 transform hover:-translate-y-1"
                                >
                                    Schedule a Consultation
                                </Link>
                            </div>
                        </article>
                    </main>

                    {/* Right Column: Cards */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block">
                        <div className="sticky top-24 self-start space-y-6">
                            {/* Card 1: Primary CTA Card */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center flex flex-col items-center">
                                <h3 className="font-black text-gray-900 text-lg mb-2 mt-1 tracking-tight">Facing Harassment?</h3>
                                <p className="text-gray-600 text-xs mb-4 leading-relaxed px-1">
                                    We can send an immediate Legal Notice to stop agents from visiting your house today.
                                </p>
                                <Link
                                    href="/contact"
                                    className="w-full bg-[#1b5df3] hover:bg-blue-700 text-white font-bold py-3 px-3 rounded-xl transition-colors shadow-md text-center text-sm"
                                >
                                    Stop the Agents
                                </Link>
                                <div className="mt-4 space-y-1 text-xs text-gray-500 w-full text-center font-medium">
                                    <p>&#10003; 24hr Legal Response</p>
                                    <p>&#10003; RBI Compliance Audit</p>
                                    <p>&#10003; SHG Pressure Defense</p>
                                    <p>&#10003; FIR Support for Harassment</p>
                                </div>
                            </div>

                            {/* Card 2: Related Expertise Links */}
                            <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100 shadow-sm mt-4">
                                <h4 className="font-black text-gray-900 text-sm border-b border-gray-900 pb-2 mb-4">Related Expertise</h4>
                                <ul className="space-y-4 text-left font-medium">
                                    <li>
                                        <Link href="/are-there-legal-implecations-or-non-payment-during-debt-settlement" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Personal Loan Relief
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/compare-debt-settlement-fees-and-success-rate" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            MSME Dispute Defense
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/is-loan-settlement-a-good-option-for-borrowers" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Bank Recovery Shield
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-improve-cibil-score" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Default Notice Help
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
"""

with open("/Users/piyushmishra/Desktop/NEWCS/NewCS/src/app/rbi-rules-for-recovery-agents/RBIRulesClient.tsx", "w") as f:
    f.write(content)
