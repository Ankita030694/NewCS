"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function PersonalLoanRecoveryHarassmentClient() {
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
        { id: 'illegal-tactics', label: 'Illegal Tactics Used' },
        { id: 'rbi-rules', label: 'RBI Rules for Agents' },
        { id: 'case-study-workplace', label: 'Case Study: Workplace' },
        { id: 'immediate-action-plan', label: 'Immediate Action Plan' },
        { id: 'cease-and-desist', label: 'Cease and Desist Letter' },
        { id: 'case-study-family', label: 'Case Study: Family' },
        { id: 'ombudsman-complaint', label: 'Ombudsman Complaint' },
        { id: 'legal-police', label: 'Legal and Police Action' },
        { id: 'conclusion', label: 'Conclusion' },
        { id: 'faqs', label: 'FAQs' }
    ];

    const faqs = [
        {
            question: "Can recovery agents call my relatives or workplace?",
            answer: "No. The RBI strictly prohibits recovery agents from discussing your debt with unauthorized third parties, including family members, neighbors, or colleagues. This is a clear violation of your privacy and the Fair Practices Code."
        },
        {
            question: "What are the allowed timings for recovery calls?",
            answer: "Under RBI guidelines, recovery agents are only allowed to contact you between 8:00 AM and 7:00 PM. Any calls made outside this window are illegal and should be reported immediately."
        },
        {
            question: "Can I be arrested for not paying a personal loan?",
            answer: "No. Defaulting on a personal loan is a civil matter, not a criminal offense. You cannot be arrested simply for failing to pay an EMI due to financial hardship."
        },
        {
            question: "What should I do if an agent uses abusive language?",
            answer: "Record the call immediately. Abusive language is strictly forbidden. Use the recording as evidence to file a formal complaint with the bank's Nodal Officer and subsequently the Banking Ombudsman."
        },
        {
            question: "Can agents visit my home unannounced?",
            answer: "Agents should ideally seek your permission and fix an appointment before visiting. If they show up unannounced and create a nuisance, you have the right to ask them to leave and can call the police if they refuse."
        },
        {
            question: "How do I file a complaint with the Banking Ombudsman?",
            answer: "You can file a complaint online through the RBI's Complaint Management System (CMS) portal. Ensure you have first complained to your bank and waited 30 days for their resolution before approaching the Ombudsman."
        },
        {
            question: "Is it legal to record phone calls from recovery agents?",
            answer: "Yes, it is perfectly legal to record calls where you are a participant. These recordings serve as vital digital evidence to prove harassment and regulatory violations."
        },
        {
            question: "Can a bank freeze my salary account for a loan default?",
            answer: "A bank can only recover dues from an account within the same bank using the right of set off. They cannot unilaterally freeze an account in a different bank without a specific court order."
        },
        {
            question: "What is a cease and desist letter?",
            answer: "It is a formal written notice sent to the bank demanding that they immediately stop their agents from engaging in harassing communications and illegal recovery tactics."
        },
        {
            question: "Do I need a lawyer to stop recovery harassment?",
            answer: "While a lawyer is not strictly necessary for filing an Ombudsman complaint, consulting a legal professional is highly recommended to draft powerful legal notices and initiate court proceedings if the harassment is severe."
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

    const reviews = [
        { name: "Rahul Deshmukh", location: "Mumbai", stars: 5, comment: "CredSettle saved me from a scam agency that promised a 90% waiver but took my money and vanished. Their transparency is refreshing." },
        { name: "Meera Iyer", location: "Delhi", stars: 5, comment: "I followed their verification checklist and realized the previous firm I was talking to was fake. Thank you for this guide!" },
        { name: "Sandeep Verma", location: "Pune", stars: 4, comment: "The detailed explanation of RBI rules helped me stop the harassment from recovery agents." }
    ];

    const reviewSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'CredSettle Fraud Protection Guide',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '850',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-harassment" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-harassment" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        Emergency Action Plan
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Stop Personal Loan <br />
                        <span className="text-blue-300">Recovery Harassment</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-normal">
                        Your complete guide to RBI protections, drafting cease and desist letters, and filing complaints against abusive bank recovery agents.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Legal Help Now
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
                                        Stop Harassment
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
                        className={`text-sm font-bold px-4 py-2 rounded-full transition-all flex-shrink-0 ${activeId === link.id
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Survival Guide</h3>
                            <nav className="space-y-1 text-sm">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={`block py-2 px-4 transition-all ${activeId === link.id
                                            ? 'bg-blue-600 text-white font-semibold rounded-full shadow-sm'
                                            : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-full'
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: The Nightmare of Recovery Harassment</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">Defaulting on a personal loan is a stressful financial situation that no one wants to experience. However, the situation often escalates from financial stress to psychological trauma when third party recovery agents employ illegal tactics. Across India, borrowers face severe harassment, public humiliation, and threats from untrained recovery agents hired by banks and Non Banking Financial Companies (NBFCs). These agents frequently operate outside the boundaries of the law, exploiting the borrower's lack of legal knowledge.</p><p className="text-gray-700 leading-relaxed mb-6">The fear of social stigma often forces borrowers into taking drastic steps, including borrowing from unregulated loan apps to pay off existing debts, which only deepens the financial trap. It is crucial to understand that defaulting on an unsecured personal loan is a civil breach of contract, not a criminal offense. You cannot be arrested simply because you failed to pay an Equated Monthly Installment (EMI) due to job loss, medical emergencies, or business failure.</p><p className="text-gray-700 leading-relaxed mb-6">This comprehensive guide is designed to empower you with the exact legal knowledge and actionable steps required to stop personal loan recovery harassment immediately. We will cover the specific guidelines laid down by the Reserve Bank of India (RBI) for recovery agents, how to draft a powerful cease and desist letter, and the step by step process to file a formal complaint against bank recovery agents through the Banking Ombudsman. By the end of this guide, you will have a clear roadmap to reclaim your peace of mind and handle your financial situation with dignity and legal protection.</p><p className="text-gray-700 leading-relaxed mb-6">You do not have to endure endless phone calls, abusive language, or unauthorized visits to your home or workplace. The law is firmly on your side when it comes to preventing harassment. Knowledge is your strongest weapon against predatory collection practices, and this page will serve as your ultimate resource for taking decisive action against rogue recovery agents.</p>

                            <h2 id="illegal-tactics" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24 border-l-8 border-blue-700 pl-6">Section 2: The Core Problem: Illegal Tactics by Agents</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">Third party recovery agents are notorious for using a wide range of illegal tactics designed to intimidate and humiliate borrowers into making payments. Recognizing these illegal methods is the first step toward stopping them. One of the most common tactics is verbal abuse and the use of foul language. Agents often call from multiple unregistered mobile numbers, hurling threats and profanities at the borrower. This psychological warfare is explicitly forbidden by RBI regulations, yet it remains a rampant practice.</p><p className="text-gray-700 leading-relaxed mb-6">Another deeply disturbing tactic is the harassment of family members, friends, and references. When you apply for a loan, banks often require emergency contact details. Recovery agents misuse this information by calling your elderly parents, siblings, or colleagues, disclosing your financial details, and demanding that they pay on your behalf. This is a severe violation of your privacy and a breach of the borrower lender confidentiality agreement. Your debt is your personal matter, and no agent has the right to discuss it with unauthorized third parties.</p><p className="text-gray-700 leading-relaxed mb-6">Showing up unannounced at a borrower's workplace is perhaps one of the most damaging strategies employed by these agents. By visiting your office and creating a scene in front of your colleagues and employer, agents aim to jeopardize your employment and publicly shame you. They may even threaten to speak to your Human Resources department to ensure you are fired. Such actions are completely illegal and can be grounds for severe legal action against the bank.</p><p className="text-gray-700 leading-relaxed mb-6">Agents also resort to sending fake legal notices on WhatsApp or email, designed to look like official court summons or police warrants. These documents often feature forged signatures, fake government seals, and threatening language about impending arrest. They prey on the average citizen's fear of the police and the judiciary. It is important to know that a genuine legal notice is sent via registered post by an advocate, and the police have no jurisdiction in civil loan default cases unless there is proven fraud.</p>

                            <h2 id="rbi-rules" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24 border-l-8 border-blue-700 pl-6">Section 3: RBI Rules for Loan Recovery Agents</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">The Reserve Bank of India (RBI) has established strict guidelines to govern the conduct of recovery agents. These rules are designed to balance the lender's right to recover dues with the borrower's fundamental right to dignity and privacy. Under the RBI guidelines for recovery agents, banks and NBFCs are held vicariously liable for the actions of the agencies they hire. This means you can hold the bank directly responsible if their agents harass you.</p><p className="text-gray-700 leading-relaxed mb-6">One of the most critical rules is the restriction on calling times. Recovery agents are strictly prohibited from contacting borrowers before 8:00 AM or after 7:00 PM. Any calls made outside this twelve hour window constitute a direct violation of RBI norms. Furthermore, agents are not allowed to call you continuously or bombard you with automated messages. If you inform them that you are unavailable or request them to call back at a specific time, they are legally obligated to respect your request.</p><p className="text-gray-700 leading-relaxed mb-6">The RBI also mandates that recovery agents must conduct themselves with respect and courtesy. The use of abusive language, physical threats, intimidation, or any form of public humiliation is strictly forbidden. Agents must clearly identify themselves, state the name of the bank they represent, and provide proper authorization upon request. If an agent refuses to share their identification details or the name of their agency, you have every right to disconnect the call or deny them entry to your premises.</p><p className="text-gray-700 leading-relaxed mb-6">Importantly, the RBI guidelines clearly state that recovery agents cannot discuss the borrower's debt with neighbors, relatives, or co-workers. The privacy of the borrower must be maintained at all times. If an agent contacts your references or visits your workplace to cause embarrassment, they are violating the Fair Practices Code. Banks are required to have a robust grievance redressal mechanism in place to handle complaints regarding recovery agent behavior, and failure to resolve these complaints can lead to heavy penalties imposed by the RBI.</p><p className="text-gray-700 leading-relaxed mb-6">In recent updates, the RBI has further tightened the leash on digital lending apps and their recovery practices, demanding that lenders ensure their agents undergo mandatory training and certification. By knowing these rules, you transition from being a victim to an informed citizen who can demand compliance and hold institutions accountable for their rogue representatives.</p>

                            <h2 id="case-study-workplace" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24 border-l-8 border-blue-700 pl-6">Section 4: Case Study: Stopping Workplace Harassment</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">Consider the case of Amit, a mid level IT professional in Bangalore who defaulted on a personal loan of eight lakh rupees due to a sudden medical emergency in his family. After missing three EMIs, his account was handed over to a third party collection agency. The harassment began with endless phone calls, but quickly escalated to a much more damaging level.</p><p className="text-gray-700 leading-relaxed mb-6">One afternoon, two recovery agents showed up at Amit's office building. They bypassed the receptionist and started shouting his name in the lobby, demanding that he come down and pay his dues immediately. They threatened to complain to his manager and claimed that he was a fraudster who was running away with the bank's money. The incident caused immense public humiliation for Amit and put his job at serious risk. His HR department had to intervene to escort the agents out of the premises.</p><p className="text-gray-700 leading-relaxed mb-6">Amit decided to take immediate action. He drafted a strong email to the bank's Nodal Officer and the Grievance Redressal Officer. In his email, he cited the specific RBI guidelines that prohibit recovery agents from visiting a borrower's workplace without prior appointment and causing public embarrassment. He demanded the immediate suspension of the specific agency assigned to his case and requested the names and ID proofs of the agents who visited his office.</p><p className="text-gray-700 leading-relaxed mb-6">Simultaneously, Amit filed a formal police complaint for criminal intimidation, public nuisance, and defamation against the unknown agents and the bank manager. When the bank realized that Amit was aware of his legal rights and had initiated formal proceedings, they immediately recalled the recovery agents and assigned a senior bank official to handle the matter professionally. The harassment stopped entirely, and Amit was able to negotiate a structured repayment plan directly with the bank without any further intimidation.</p>

                            <h2 id="immediate-action-plan" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24 border-l-8 border-blue-700 pl-6">Section 5: Immediate Action Plan to Stop Harassment</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">If you are currently facing harassment, you need an immediate action plan to protect yourself and build a strong case against the offending agents. The very first step is to start recording all interactions. Install a call recording application on your smartphone and ensure that every single call from a recovery agent is recorded. These audio recordings serve as irrefutable evidence of verbal abuse, threats, and violations of the RBI timing rules.</p><p className="text-gray-700 leading-relaxed mb-6">Secondly, demand identification. Whenever an agent calls or visits, firmly ask for their full name, the name of their recovery agency, their employee ID, and the name of the bank official who authorized them. Do not engage in any discussion about your financial situation until they provide these details. If they refuse, state clearly that you will not speak to unauthorized individuals and hang up. Keep a detailed log of every call, including the date, time, phone number, and a brief summary of the conversation.</p><p className="text-gray-700 leading-relaxed mb-6">If agents threaten to visit your home, do not panic. Inform them clearly that they are welcome to visit only with prior appointment and during permitted hours. State that you will have a lawyer or a local community member present during their visit. If they show up unannounced and create a scene, immediately dial the emergency police number. Inform the police that unidentified individuals are creating a nuisance, threatening you, and attempting to trespass on your property.</p><p className="text-gray-700 leading-relaxed mb-6">Stop communicating with third party agents entirely if they turn abusive. Send an official email to the bank stating that due to the abusive nature of their assigned agency, you will only communicate directly with bank officials via email. Direct all your financial negotiations to the bank's customer service and collection managers in writing. By forcing the communication onto official channels, you eliminate the power of rogue agents who thrive on unregulated phone calls.</p>

                            <h2 id="cease-and-desist" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24 border-l-8 border-blue-700 pl-6">Section 6: Drafting a Cease and Desist Letter</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">A cease and desist letter is a powerful legal tool that formally orders the bank and its recovery agents to stop their harassing behavior. While you can hire a lawyer to draft and send this notice, you can also send a well drafted email yourself, which holds significant weight if properly structured. The letter serves as a documented warning that you are aware of your rights and are prepared to take legal action if the harassment continues.</p><p className="text-gray-700 leading-relaxed mb-6">Your cease and desist communication should clearly state your name, your loan account number, and your contact details. It must explicitly list the illegal actions taken by the recovery agents, such as calling outside permitted hours, using abusive language, contacting your relatives, or threatening your employment. Be specific. Mention the dates, times, and phone numbers from which the abusive calls were made. If you have audio recordings, mention that you possess digital evidence of the harassment.</p><p className="text-gray-700 leading-relaxed mb-6">Cite the relevant RBI guidelines in your letter to demonstrate your legal awareness. Demand that the bank immediately instruct their agents to cease all harassing communications and unauthorized visits. State clearly that you are willing to resolve the financial dispute but will not tolerate illegal collection methods. Give the bank a strict deadline, usually 48 to 72 hours, to confirm that they have recalled the abusive agents.</p><p className="text-gray-700 leading-relaxed mb-6">Conclude the letter by stating the consequences of non compliance. Warn the bank that if the harassment does not stop, you will escalate the matter by filing a formal complaint against bank recovery agents with the Banking Ombudsman and initiate criminal proceedings for mental harassment and defamation. Send this email to the bank's customer care, the Grievance Redressal Officer, and the Principal Nodal Officer. Keep a printed copy of the email and the delivery receipts for your records. This paper trail is vital if you need to approach higher authorities.</p>

                            <h2 id="case-study-family" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24 border-l-8 border-blue-700 pl-6">Section 7: Case Study: Protecting Family from Abuse</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">Priya, a school teacher, faced a terrifying situation when she defaulted on a personal loan due to a sudden medical crisis. The recovery agents assigned to her case adopted a highly aggressive strategy: they began calling her elderly parents and her siblings, demanding that they clear Priya's debt. The agents used abusive language with her father, causing him severe stress and panic. They even threatened to visit Priya's ancestral home to confiscate property, despite the loan being completely unsecured.</p><p className="text-gray-700 leading-relaxed mb-6">Priya was devastated but decided to fight back. She realized that the agents were exploiting her family's fear of legal trouble. She first educated her parents, assuring them that they were not legally liable for her personal loan and that the agents had no authority to seize their property. She instructed them to block all unknown numbers and not engage in any conversation with the agents.</p><p className="text-gray-700 leading-relaxed mb-6">Next, Priya sent a strong legal notice to the bank's headquarters. In her notice, she detailed the unauthorized calls made to her relatives, providing the exact call logs and audio recordings. She highlighted that this was a gross violation of borrower privacy and a breach of the RBI Fair Practices Code. She clearly stated that if her family received even one more call, she would file a police complaint for harassment and approach the consumer court for compensation for mental agony.</p><p className="text-gray-700 leading-relaxed mb-6">The impact of the documented evidence and the formal legal notice was immediate. The bank, fearing regulatory backlash and negative publicity, swiftly terminated the contract with the specific recovery agency. The bank's regional manager personally contacted Priya to apologize for the distress caused to her family. The harassment stopped permanently, and Priya was offered a restructuring plan that allowed her to pay her dues in smaller, manageable installments without any third party interference.</p>

                            <h2 id="ombudsman-complaint" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24 border-l-8 border-blue-700 pl-6">Section 8: Filing a Complaint with the Banking Ombudsman</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">If your bank fails to resolve your grievance and the harassment continues despite your written warnings, your next and most effective step is to file a formal complaint with the Banking Ombudsman. The Banking Ombudsman is a quasi judicial authority appointed by the RBI to resolve customer complaints against banks and NBFCs. This service is completely free, highly effective, and designed to protect consumer rights against institutional abuse.</p><p className="text-gray-700 leading-relaxed mb-6">Before approaching the Ombudsman, you must first file a written complaint with your bank. You must wait for 30 days for the bank to respond. If the bank rejects your complaint, fails to reply within 30 days, or provides an unsatisfactory resolution, you are eligible to escalate the matter to the Banking Ombudsman. The easiest way to file this complaint is through the RBI's official Complaint Management System (CMS) portal online. The digital process is straightforward and user friendly.</p><p className="text-gray-700 leading-relaxed mb-6">When drafting your complaint for the Ombudsman, focus entirely on the deficiency of service and the violation of RBI guidelines regarding recovery practices. Clearly articulate how the recovery agents harassed you, mentioning specific instances of abuse, inappropriate calling times, or privacy violations. Upload all your supporting evidence, including call logs, audio recordings, emails sent to the bank, and the bank's unsatisfactory replies. The stronger your documentation, the faster the resolution.</p><p className="text-gray-700 leading-relaxed mb-6">The Banking Ombudsman has the authority to summon the bank officials, demand explanations, and issue binding orders. If the Ombudsman finds the bank guilty of employing illegal recovery tactics, they can direct the bank to immediately halt all recovery proceedings through that agency. Furthermore, the Ombudsman can award you compensation for the mental agony and harassment caused by the bank's agents, up to a specified limit. Filing an Ombudsman complaint is a powerful way to hold large financial institutions accountable for the actions of their ground level operatives.</p>

                            <h2 id="legal-police" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24 border-l-8 border-blue-700 pl-6">Section 9: Legal Recourse and Police Complaints</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">While the Banking Ombudsman is the primary regulatory route, there are situations where the harassment crosses the line into criminal activity, necessitating police intervention. If recovery agents physically threaten you, attempt to force entry into your home, use extreme profanity, or circulate morphed images or defamatory messages, these actions constitute criminal offenses under the Indian Penal Code (IPC). In such severe scenarios, a police complaint is not just an option; it is a necessity for your safety.</p><p className="text-gray-700 leading-relaxed mb-6">You can file a First Information Report (FIR) at your local police station against the recovery agents and the bank officials managing your account. Key IPC sections that apply include Section 503 for criminal intimidation, Section 504 for intentional insult with intent to provoke breach of the peace, Section 506 for punishment for criminal intimidation, and Section 509 for word, gesture or act intended to insult the modesty of a woman. If agents trespass into your property, Section 441 applies.</p><p className="text-gray-700 leading-relaxed mb-6">When visiting the police station, carry all your evidence: printed call logs, a pen drive with audio or video recordings, copies of fake legal notices, and copies of your communication with the bank. Police officials may initially be reluctant to register an FIR in what they perceive as a civil loan recovery matter. You must firmly explain that you are not disputing the loan default, but you are reporting criminal acts of intimidation and harassment, which fall strictly under police jurisdiction.</p><p className="text-gray-700 leading-relaxed mb-6">In addition to criminal action, you also have the option to approach the Consumer Disputes Redressal Commission (Consumer Court). You can file a case against the bank for deficiency in service and unfair trade practices, seeking significant compensation for the mental trauma and loss of reputation caused by their recovery agents. Legal notices sent by a qualified advocate threatening these actions often force the bank to immediately recall their agents and seek a peaceful settlement to avoid litigation and negative media attention.</p>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24 border-l-8 border-blue-700 pl-6">Section 10: Conclusion: Reclaiming Your Peace</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">Dealing with personal loan recovery harassment can feel overwhelming, but it is a battle you can win if you remain calm and informed. The aggressive tactics used by third party agents rely entirely on your fear and ignorance of the law. By understanding your rights under the RBI guidelines, keeping meticulous records of all interactions, and knowing how to escalate the matter to the bank's Nodal Officer and the Banking Ombudsman, you strip these agents of their power.</p>
                            <p className="text-gray-700 leading-relaxed mb-6">Remember that a loan default does not make you a criminal, and no financial institution has the right to strip you of your dignity. Your debt is a civil contract, and its resolution must follow a legal and respectful process. Do not succumb to the pressure of illegal collection tactics, and never take new high interest loans just to silence an abusive recovery agent, as this will only lead to a more severe financial disaster.</p>
                            <p className="text-gray-700 leading-relaxed mb-6">Take immediate control of the situation today. Start recording calls, draft your cease and desist letter, and prepare your documentation. If the harassment persists, do not hesitate to use the regulatory and legal tools at your disposal, including the Banking Ombudsman portal and local law enforcement. By taking a firm stand, you not only protect yourself and your family but also force the banking system to adhere to the fair practices mandated by the law. Reclaim your peace of mind and handle your debt resolution on your own terms, legally and safely.</p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24 border-l-8 border-blue-700 pl-6">Client Success and Feedback</h2>
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
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center flex flex-col items-center">
                                <h3 className="font-black text-gray-900 text-xl mb-3 mt-2 tracking-tight">Facing Harassment?</h3>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed px-2">
                                    We can send an immediate Legal Notice to stop agents from visiting your house today.
                                </p>
                                <Link
                                    href="/contact"
                                    className="w-full bg-[#1b5df3] hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md text-center text-sm"
                                >
                                    Stop the Agents
                                </Link>
                                <div className="mt-5 space-y-2 text-xs text-gray-500 w-full text-center font-medium">
                                    <p>&#10003; 24hr Legal Response</p>
                                    <p>&#10003; RBI Compliance Audit</p>
                                    <p>&#10003; FIR Support</p>
                                </div>
                            </div>

                            {/* Card 2: Links */}
                            <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100 shadow-sm mt-6">
                                <h4 className="font-black text-gray-900 text-lg border-b border-gray-900 pb-2 mb-4">Related Expertise</h4>
                                <ul className="space-y-4 text-left font-medium">
                                    <li>
                                        <Link href="/services/anti-harassment" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Anti Harassment Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Handling Bank Notices
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-settle-loan" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Settle Your Loans
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/credit-score-builder" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Rebuild Credit Score
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
