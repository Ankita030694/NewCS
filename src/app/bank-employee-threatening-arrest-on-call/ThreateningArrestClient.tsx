'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export default function ThreateningArrestClient() {
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
        { id: 'reality-of-loan-default', label: 'Civil vs. Criminal' },
        { id: 'why-threaten-arrest', label: 'Why Agents Threaten' },
        { id: 'your-legal-rights', label: 'Your Legal Rights' },
        { id: 'actionable-steps', label: 'Actionable Steps' },
        { id: 'case-study', label: 'Case Study' },
        { id: 'how-to-file-complaint', label: 'File a Complaint' },
        { id: 'myth-vs-fact', label: 'Myth vs Fact' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'reviews', label: 'Real Stories' },
    ];

    const reviews = [
        {
            name: "Sanjay R.",
            location: "Mumbai",
            rating: 5,
            text: "I was terrified when a man claiming to be an inspector called me about my credit card dues. This guide helped me realize it was a scam. I recorded the next call and complained to the RBI. The calls stopped fully."
        },
        {
            name: "Priya M.",
            location: "Delhi",
            rating: 5,
            text: "The step by step checklist on how to handle these agents is incredibly useful. I asked for the caller's ID and he fast hung up. Thank you for empowering clients."
        },
        {
            name: "Vikram K.",
            location: "Bengaluru",
            rating: 5,
            text: "I thought my life was over when they threatened to arrest me in front of my office. Reading the myth vs fact section gave me the confidence to stand up for my rights and settle a proper closure."
        }
    ];

    const faqs = [
        {
            question: 'Can I actually go to jail for a personal loan default?',
            answer: 'No. A own loan default is a civil dispute in India. Not a crime. You cannot be arrested simply for being unable to repay a loan due to money hardship. The only exceptions are if you committed intentional fraud (like submitting fake papers) or if a court issues a exact warrant for contempt. which is very rare in standard consumer loans.'
        },
        {
            question: 'What should I do if the caller claims to be from the local police station?',
            answer: 'Ask for their exact name. Designation. the police station they are calling from. Then. Disconnect and call that exact police station straight to check. In 99 percent of cases. It is a agents using a fake identity. Police heads do not call to threaten arrest for bank loans.'
        },
        {
            question: 'Is it legal for recovery agents to call my relatives and threaten them?',
            answer: 'Absolutely not. The RBI has issued strict guidelines prohibiting banks and their agents from contacting relatives. Friends. Colleagues to recover a loan. Let alone threatening them. This is a clear violation of your privacy and RBI rules.'
        },
        {
            question: 'Can a bank freeze my salary account without any notice?',
            answer: 'If your loan is with the same bank as your salary account. They may use the "Right of Set Off" to deduct dues. Yet. They cannot arbitrarily freeze your entire account without a court order or proper legal notice. If an agent threatens an fast freeze over a call. It is usually an threaten tactic.'
        },
        {
            question: 'How do I record a call if my phone does not have a built in call recorder?',
            answer: 'You can use a secondary device to record the audio on speakerphone. download a reliable third party call recording application that complies with your local laws. Having an audio recording is the strongest piece of evidence when filing a complaint for threats.'
        },
        {
            question: 'What happens after I file a complaint on the RBI Ombudsman portal?',
            answer: 'Once you file a complaint with audio or documentary evidence. The RBI RBI officer will direct the concerned bank to investigate. If the threats is proven. The bank can face heavy fines. they are usually forced to terminate the exact claims firm involved.'
        },
        {
            question: 'Should I hire a lawyer if I receive these threatening calls?',
            answer: 'While you can handle first complaints through the RBI portal yourself. Consulting a legal experts can be highly beneficial if the threats continues or if the bank sends a formal legal notice. A counsel can send a cease and desist notice that usually stops unlawful claims tactics fast.'
        }
    ];

    return (
        <main>
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
                        Bank Employee Threatening Arrest on Call? <br />
                        <span className="text-blue-300">Know Your Legal Rights</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light"> Discover the exact steps to protect yourself from unlawful claims threats and learn the truth about civil risk versus penal action in India. </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Report Harassment Now
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
                            <li> <div className="flex items-center"> <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /> </svg> <span className="ml-1 font-medium text-gray-500 md:ml-2"> Bank Employee Threatening Arrest on Call </span> </div> </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="max-w-8xl mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <p className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Contents</p>
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
                    <article className="lg:w-2/4 xl:w-3/5 w-full">
                        <div className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                            <p className="text-gray-700 leading-relaxed mb-6 font-semibold text-xl"> In 2024 alone. Over 15,000 complaints were filed with the RBI RBI officer regarding illegal agents impersonating police heads and threatening clients with fast arrest over phone calls. If you have received a call from someone claiming to be a bank employee threatening you with jail time for a loan default. You are a victim of unlawful mental coercion. Not a penal suspect. </p>

                            <p className="text-gray-700 leading-relaxed mb-6"> The transition to digital lending and the harsh targets placed on claims firms have created a toxic environment for clients. When an individual falls behind on their own loan. Credit card payment. Firm loan. They are often bombarded with calls. These calls often cross the line from standard reminders to outright unlawful threats. The most common and terrifying of these is the threat of an fast police arrest. This thorough guide will dissect the legal reality behind these claims. Expose the mental tactics used by rogue agents. provide you with a bulletproof action plan to protect your dignity and your rights. We will explore everything from grasp the difference between civil and penal risk to knowing <Link href="/what-are-my-rights-when-dealing-with-loan-recovery-agents" className="text-blue-600 hover:underline">what are my rights when dealing with loan agents</Link>. </p>
                            
                            <p className="text-gray-700 leading-relaxed mb-6"> It is key to understand that the Indian legal system is designed to handle debt disputes through established civil courts and tribunals. Not through random phone calls threatening incarceration. By the end of this extensive papers. You will have the knowledge and the tools to fully neutralize any unlawful threat made by a bank employee or a third party agents. Let us begin by breaking down the fundamental laws that protect you. </p>

                            <h2 id="reality-of-loan-default" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Reality of Loan Default: Civil vs. Criminal Liability</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The foundation of the fear instilled by agents is a fundamental misunderstanding of Indian law. When you take a loan from a bank or an NBFC. You enter into a trade contract. If you fail to repay that loan due to job loss. Medical emergencies. A firm downturn. It is considered a breach of contract. Under the Indian legal system. A breach of a trade contract is a civil dispute. It falls under the purview of civil laws. Such as the Code of Civil Procedure. is resolved in civil courts or through arbitration mechanisms. </p>
                            
                            <p className="text-gray-700 leading-relaxed mb-6"> To put it plainly. Failing to repay a loan is not a crime. It is not equivalent to theft. Fraud. assault. Therefore. The police have absolutely no jurisdiction to arrest a person simply for owing money to a bank. The Supreme Court of India has repeatedly held that a person cannot be sent to jail merely for the inability to repay a debt. The core question many clients ask is <Link href="/can-i-go-to-jail-for-loan-default-in-india" className="text-blue-600 hover:underline">can i go to jail for loan default in india</Link>. the answer in the vast majority of genuine hardship cases is a definitive no. </p>
                            
                            <p className="text-gray-700 leading-relaxed mb-6"> The only scenarios where penal charges might arise in relation to a loan are if the clients committed intentional fraud at the time of taking the loan. For example. If someone submitted forged identity papers. Fabricated income tax returns. Provided counterfeit home papers as pledge. The bank can file a penal First Information Report (FIR) under sections related to cheating and forgery (such as Section 420 of the Indian Penal Code). Yet. This is for the crime of forgery. Not the act of defaulting. Even in cases involving cheque bounce (under Section 138 of the Negotiable Instruments Act). There is a lengthy legal process involving court summons. an arrest only happens if the individual fully ignores multiple court orders and the court issues a non bailable warrant. A bank employee over a phone call has zero authority to initiate or execute an arrest. </p>

                            <h2 id="why-threaten-arrest" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Why Do Bank Employees Threaten Arrest?</h2>
                            
                            <h2 id="pressure-on-recovery-agents" className="text-2xl font-bold text-gray-800 mb-4 mt-8 scroll-mt-14">The Pressure on Recovery Agents</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> To understand why these unlawful threats occur. We must look at the economics of the claims trade. Banks rarely handle the gritty work of late stage debt calls themselves. They outsource this task to third party claims firms. These firms operate on a commission basis. The more money they recover from defaulted accounts. The higher their commission. Furthermore. Individual telecallers working in these firms are given grueling daily targets and face the constant threat of losing their own jobs if they do not extract payments. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> This high pressure environment creates a perverse incentive structure. When logical persuasion and standard reminders fail. Desperate agents resort to the most extreme mental tool available to them. which is fear. They know that the average Indian citizen is deeply afraid of the police. Public humiliation. the legal system. By weaponizing this fear. They aim to force the clients to beg. Borrow. Sell assets to make an fast payment. Just to make the nightmare stop. </p>

                            <h2 id="psychological-tactics" className="text-2xl font-bold text-gray-800 mb-4 mt-8 scroll-mt-14">Psychological Tactics Used Over the Phone</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> agents employ a exact playbook designed to maximize panic. They will never speak calmly or professionally when executing this tactic. Instead. They will use harsh. Loud. abusive language to fast put the clients on the defensive. They often utilize a technique called "impersonation." The caller will confidently introduce themselves as "Inspector Sharma from the Cyber Crime Cell" or "counsel Verma from the Delhi High Court." They rely on the shock value of these titles to paralyze the clients's key thinking. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Another common tactic is the "false sense of urgency." The agent will declare that a police jeep has already been dispatched to the clients's residence or workplace. that the only way to stop the vehicle is to transfer a exact amount of money within the next ten minutes. This manufactured urgency prevents the clients from consulting a counsel. Researching their rights. even calling the actual bank to check the claims. It is a highly coordinated mental attack designed to bypass logic and trigger a fight or flight response. </p>

                            <h2 id="your-legal-rights" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Your Legal Rights Against Harassment</h2>
                            
                            <h2 id="rbi-guidelines" className="text-2xl font-bold text-gray-800 mb-4 mt-8 scroll-mt-14">RBI Guidelines on Recovery Practices</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The Reserve Bank of India (RBI) is acutely aware of these rogue practices and has established a robust framework of guidelines that all regulated entities must follow. The Fair Practices Code explicitly prohibits lenders and their agents from resorting to any form of threaten or threats. This includes verbal abuse. Threats of real violence. Threats of unlawful arrest. calling clients at odd hours (typically before 8:00 AM or after 7:00 PM). </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Furthermore. The RBI mandates that banks must maintain a strict code of conduct for their agents. Agents are required to undergo exact training and must carry proper identification. Most importantly. The RBI holds the bank vicariously liable for the actions of its agents. This means a bank cannot simply wash its hands of the case by blaming the third party firm. If an agent threatens you. The bank is by law responsible for that threat. </p>

                            <h2 id="ipc-protections" className="text-2xl font-bold text-gray-800 mb-4 mt-8 scroll-mt-14">The Indian Penal Code (IPC) Protections</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Beyond the RBI guidelines of the RBI. A clients is protected by the penal laws of the country. When a agents crosses the line from demanding payment to threatening unlawful arrest. They are committing penal offenses under the Indian Penal Code (IPC) or the Bharatiya Nyaya Sanhita (BNS). </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Specifically. Threatening someone with false police action or real harm constitutes penal threaten. If the agent uses filthy or abusive language. They can be charged with insulting the modesty of a person or causing public nuisance. If the agent falsely claims to be a police head or a court valid. They are committing the crime of Impersonation of a Public Servant. These are serious penal charges. clients have every right to file a police complaint against the caller and the bank for these offenses. It is essential to understand <Link href="/bank-recovery-harassment-complaint" className="text-blue-600 hover:underline">bank claims threats complaint</Link> procedures to fight back effectively. </p>

                            <h2 id="actionable-steps" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Actionable Steps When Threatened on Call</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Knowledge of the law is your shield. taking calculated action is your sword. When you receive a threatening call. Your fast response dictates the outcome. Do not panic. Do not argue emotionally. do not make any fast payments out of fear. Instead. Follow this precise step by step checklist to neutralize the threat and turn the tables on the harassing agent. </p>

                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-8">
                                <p className="text-xl font-bold text-gray-900 mb-4">Step Checklist: Neutralizing the Threat</p>
                                <ul className="space-y-4 text-gray-800">
                                    <li className="flex items-start"> <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold mr-3 mt-1">1</span> <div> <strong className="block text-lg">Record the talk Instantly</strong> <p className="mt-1 font-light">The moment the caller begins to use harsh language or mentions the police. Activate your call recorder. If your phone lacks this feature. Put the call on speaker and use another phone to record the audio. This recording is your primary evidence. Without it. It is your word against theirs.</p> </div> </li>
                                    <li className="flex items-start"> <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold mr-3 mt-1">2</span> <div> <strong className="block text-lg">Demand valid Identification</strong> <p className="mt-1 font-light">Interrupt the agent and calmly state. "Before we proceed. Please provide your full name. Employee ID. The name of your firm. the address of your office." Legitimate agents are required to provide this information. A scammer or an abusive agent will usually refuse or hang up fast when faced with this demand.</p> </div> </li>
                                    <li className="flex items-start"> <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold mr-3 mt-1">3</span> <div> <strong className="block text-lg">Call Their Bluff on the "Arrest"</strong> <p className="mt-1 font-light">If they claim to be a police head. Ask for their batch number and the exact police station they are calling from. Inform them that you are recording the call and will be calling that exact station to check their identity. Never show fear. A calm. By law informed response shatters their mental tactics.</p> </div> </li>
                                    <li className="flex items-start"> <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold mr-3 mt-1">4</span> <div> <strong className="block text-lg">Disconnect and Do Not Entertain</strong> <p className="mt-1 font-light">Once you have secured the recording and asked for identification. Politely state that you will only communicate through valid email or written notices. disconnect the call. Do not engage in a screaming match. Engaging only feeds their script.</p> </div> </li>
                                    <li className="flex items-start"> <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold mr-3 mt-1">5</span> <div> <strong className="block text-lg">Escalate to the Bank's Nodal head</strong> <p className="mt-1 font-light">Draft a formal email detailing the date. Time. phone number of the caller. Attach the audio recording. Send this email straight to the Grievance Redressal head (GRO) or the main sum Nodal head (PNO) of the bank. State clearly that you are facing unlawful penal threaten and demand fast action.</p> </div> </li>
                                </ul>
                            </div>

                            <h2 id="step-1" className="text-2xl font-bold text-gray-800 mb-4 mt-8 scroll-mt-14">Deep Dive: The Importance of Recording</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> We cannot stress enough the importance of the first step in the checklist. When you file a complaint with the bank or the RBI. The first thing the bank will do is contact the claims firm. The firm will predictably deny all allegations. Claiming their agent was polite and merely reminding you of the dues. Without an audio recording. The investigation becomes a dead end. An audio recording is an irrefutable piece of evidence that forces the bank to acknowledge the unlawful activity and take punitive action against the firm. </p>

                            <h2 id="case-study" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Case Study: Dealing with a Threatening Caller</h2>
                            <div className="bg-white border-l-4 border-indigo-600 p-6 rounded-r-2xl shadow-sm mb-8">
                                <p className="text-xl font-bold text-gray-900 mb-3">The Scenario: The Fake Cyber Cell head</p>
                                <p className="text-gray-700 leading-relaxed mb-4"> Rahul. An IT experts from Pune. Lost his job and defaulted on two own loan EMIs. On a Tuesday morning. He received a call from an unknown number. The caller shouted. "I am Inspector Singh from the Cyber Crime branch. Your bank has filed an FIR for fraud. The police jeep is leaving for your office right now to arrest you. Transfer 50,000 rupees to this account number fast to cancel the warrant." </p>
                                <p className="text-lg font-bold text-gray-900 mb-2">The Reaction</p>
                                <p className="text-gray-700 leading-relaxed mb-4"> Initially terrified. Rahul remembered reading about claims scams. He quickly turned on his secondary phone's voice recorder. He took a deep breath and said. "Inspector Singh. Please provide your batch number and the address of your Cyber Cell. I am recording this call and my counsel is conference in." </p>
                                <p className="text-lg font-bold text-gray-900 mb-2">The relief</p>
                                <p className="text-gray-700 leading-relaxed"> The caller fast started stammering. Dropped the harsh tone. Hurled one final insult. disconnected the call. Rahul emailed the recording to the bank's Nodal head and filed a complaint on the RBI Sachet portal. Within 48 hours. The bank apologized in writing. Confirmed the caller was a rogue third party agent. assigned a polite internal executive to help Rahul restructure his loan. The threat was fully fabricated. </p>
                            </div>

                            <h2 id="how-to-file-complaint" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">How to File a Formal Complaint</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> If the bank's Nodal head fails to resolve your grievance within 30 days. If the threats is particularly severe. You must escalate the matter to higher authorities. The RBI framework in India is designed to support consumers who are victims of such malpractices. you must use the correct channels to be heard. </p>

                            <h2 id="rbi-ombudsman" className="text-2xl font-bold text-gray-800 mb-4 mt-8 scroll-mt-14">RBI Ombudsman Portal</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The Reserve Bank of India has established the Complaint handling System (CMS) portal. Managed by the Banking RBI officer. This is a highly effective. Free. digital mechanism to resolve complaints against banks and NBFCs. You can log in to the portal. Fill out the complaint form. upload your audio recordings and email trails. The RBI officer has the power to summon bank officials. Demand explanations. award compensation to the clients for the mental agony caused by unlawful claims practices. Banks are extremely cautious about RBI officer complaints because multiple complaints can lead to severe RBI fines and reputational damage. </p>

                            <h2 id="police-complaint" className="text-2xl font-bold text-gray-800 mb-4 mt-8 scroll-mt-14">Police Complaint and Cyber Crime Portal</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> If an agent impersonates a police head or threatens real harm. You should not hesitate to involve the actual law enforcement. You can file a complaint at your local police station citing penal threaten and impersonation. Additionally. If the threats are being made through digital calls. WhatsApp messages. SMS. You can file a complaint on the National Cyber Crime Reporting Portal (cybercrime.gov.in). Providing the phone numbers used by the agents allows the cyber cell to track down the unlawful call centers operating on behalf of these rogue firms. </p>

                            <h2 id="myth-vs-fact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Myth vs Fact: Loan Default Arrests</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                                    <p className="flex items-center text-red-700 font-bold text-xl mb-3"> <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> The Myth </p>
                                    <p className="text-gray-700 font-light leading-relaxed"> If I miss three EMIs. The bank will automatically send the police to my house. Arrest me in front of my neighbors. seize all my household belongings without any court order. </p>
                                </div>
                                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                    <p className="flex items-center text-green-700 font-bold text-xl mb-3"> <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> The Fact </p>
                                    <p className="text-gray-700 font-light leading-relaxed"> Missing EMIs leads to a drop in your CIBIL score and standard claims calls. It is a civil matter. The bank must follow a lengthy legal process involving notices and civil courts. Police cannot arrest you. belongings cannot be seized without a exact judicial decree. </p>
                                </div>
                            </div>
                            
                            <p className="text-gray-700 leading-relaxed mb-6"> grasp the difference between these myths and facts is crucial. Scammers rely on your ignorance of the law. By educating yourself. You remove their most powerful weapon. </p>

                            <p className="text-gray-700 leading-relaxed mb-6"> Dealing with money hardship is already a deeply stressful experience. You do not deserve to be treated like a penal for facing economic challenges. The law is on your side when it comes to fair treatment. By documenting everything. Grasp your rights. Utilizing the proper grievance channels. You can stop the threats and focus on finding a legitimate relief to your debt through talks or formal closure processes. Never let a threatening phone call dictate your actions or deal your dignity. </p>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-6 mb-12">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-14">Real Stories of Courage</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {reviews.map((review, idx) => (
                                    <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex mb-3">
                                            {[...Array(review.rating)].map((_, i) => <StarIcon key={i} />)}
                                        </div>
                                        <p className="text-gray-700 italic mb-4 font-light text-sm">"{review.text}"</p>
                                        <div className="mt-auto">
                                            <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                                            <p className="text-gray-500 text-xs">{review.location}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </article>

                    {/* Right Column: Author Bio */}
                    <aside className="lg:w-1/4 hidden lg:block sticky top-14">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-blue-50">
                                <Image 
                                    src="/default-avatar.jpg" 
                                    alt="Rohan Kumar - Senior Legal Strategist" 
                                    width={96} 
                                    height={96}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <p className="font-bold text-gray-900 text-lg mb-1">Rohan Kumar</p>
                            <p className="text-blue-600 text-sm font-medium mb-3">Senior Legal Strategist</p>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light"> Specializing in consumer rights. Debt closure talks. safety against unlawful claims threats. Dedicated to empowering clients with actionable legal frameworks. </p>
                            <Link href="/contact" className="text-sm text-blue-600 hover:underline font-medium">
                                Consult Rohan
                            </Link>
                        </div>
                    </aside>

                </div>
            </div>
        </main>
    );
}
