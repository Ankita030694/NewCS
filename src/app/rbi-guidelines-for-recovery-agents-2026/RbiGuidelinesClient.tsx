'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function RbiGuidelinesClient() {
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
        { id: 'understanding', label: 'Understanding RBI Guidelines 2026' },
        { id: 'legal-rights', label: 'Legal Rights of Defaulters in India' },
        { id: 'harassment-vs-legal', label: 'Harassment vs. Legal Recovery' },
        { id: 'working-hours', label: 'Working Hours and Contact Rules' },
        { id: 'red-flags', label: 'Red Flags: Identifying Illegal Practices' },
        { id: 'legal-process-map', label: 'Legal Process Map: Police Complaint' },
        { id: 'myth-vs-fact', label: 'Myth vs. Fact: What Agents Can Do' },
        { id: 'seeking-protection', label: 'Seeking Legal Protection' },
        { id: 'faqs', label: 'Frequently Asked Questions' },
    ];

    const faqs = [
        {
            question: 'What are the new RBI guidelines for recovery agents in 2026?',
            answer: 'The updated RBI guidelines for 2026 strictly regulate contact hours, forbidding calls or visits before 8:00 AM or after 7:00 PM. They also explicitly outlaw any form of intimidation, public humiliation, or contacting the borrower family members.'
        },
        {
            question: 'Can a recovery agent visit my office under the new rules?',
            answer: 'No. The 2026 guidelines prohibit recovery agents from visiting a borrower workplace or causing any public embarrassment. All communication must be restricted to the registered residential address and must be conducted respectfully.'
        },
        {
            question: 'How do I file a police complaint against recovery agents?',
            answer: 'You can file a formal FIR at your local police station under IPC Section 503 (Criminal Intimidation) and Section 506 (Punishment for Criminal Intimidation). It is highly recommended to present audio recordings, WhatsApp messages, or call logs as evidence of harassment.'
        },
        {
            question: 'Can banks use third-party agencies for loan recovery?',
            answer: 'Yes, banks can employ third-party recovery agencies, but they remain strictly liable for the actions of these agents. The bank is responsible for ensuring the agents comply entirely with RBI directives.'
        },
        {
            question: 'What should I do if a recovery agent calls my relatives?',
            answer: 'Calling relatives is a severe breach of data privacy and RBI regulations. You should immediately send a legal notice to the bank grievance redressal officer and escalate the matter to the RBI Ombudsman if the bank fails to act within thirty days.'
        }
    ];

    const reviews = [
        {
            name: 'Priya Sharma',
            location: 'Mumbai',
            stars: 5,
            comment: 'I was constantly harassed by recovery agents calling my workplace. After understanding the RBI guidelines for recovery agents 2026 and getting proper legal help, we filed a complaint. The calls stopped immediately. Knowing your legal rights of defaulters in India changes everything.'
        },
        {
            name: 'Rahul Verma',
            location: 'Delhi',
            stars: 5,
            comment: 'The relentless threats were destroying my mental peace. I learned how to file a police complaint against recovery agents and issued a strong legal notice. The bank had to apologize and restructure my loan properly. We must stop recovery agent harassment together.'
        },
        {
            name: 'Aditya Desai',
            location: 'Bangalore',
            stars: 5,
            comment: 'When agents started visiting my home at 9 PM, I knew it was illegal. The guidance on this platform helped me escalate the matter to the RBI Ombudsman. The bank completely changed their tone. Exceptional resource for anyone facing illegal loan recovery practices.'
        }
    ];

    return (
        <>
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
                        RBI Guidelines for Recovery Agents 2026<br />
                        <span className="text-blue-300">Know Your Rights</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Stop recovery agent harassment instantly. Learn the precise legal rights of defaulters in India and how to file a police complaint against recovery agents today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Immediate Legal Protection
                        </Link>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
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
                                        RBI Guidelines for Recovery Agents
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
                className="sticky top-[56px] z-40 lg:hidden bg-white border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar scroll-smooth py-3 px-4 flex gap-4 whitespace-nowrap"
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
                            document.querySelector(`#${link.id}`)?.scrollIntoView({ behavior: 'smooth' });
                            setActiveId(link.id);
                        }}
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Left Column: TOC */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Outline</h3>
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

                    {/* Middle Column: Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                            
                            <p className="text-gray-700 leading-relaxed mb-6 font-semibold">
                                Under the updated RBI guidelines for 2026, any recovery agent contacting a borrower outside the hours of 8:00 AM to 7:00 PM is committing a punishable violation. Harassment by recovery agents is not a legal consequence of default, it is a criminal offense that can be countered with immediate police intervention and DRT appeals.
                            </p>

                            <h2 id="understanding" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Understanding the 2026 RBI Guidelines for Recovery Agents</h2>
                            
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The landscape of debt recovery in India has witnessed a monumental shift. For years, borrowers grappling with financial distress have faced unethical, aggressive, and downright illegal tactics from collection agencies. The reserve bank recognized this systemic abuse and introduced sweeping reforms. The rbi guidelines for recovery agents 2026 are not mere suggestions; they are ironclad regulations designed to ensure that human dignity is preserved even when financial obligations are unmet. If you want to stop recovery agent harassment, the first and most critical step is fully comprehending these very guidelines.
                            </p>
                            
                            <p className="text-gray-700 leading-relaxed mb-6">
                                These updated mandates place the burden of responsibility squarely on the lending institutions. Banks and Non Banking Financial Companies (NBFCs) can no longer outsource their collections to third party agencies and turn a blind eye to their misconduct. If an agent violates the rules, the bank is held directly accountable. This principle of vicarious liability is the cornerstone of the new regulatory framework. It empowers consumers to take decisive legal action against the principal lender, forcing them to rein in their rogue agents.
                            </p>
                            
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, the 2026 updates expand the definition of harassment to include digital intimidation. Repeated text messages, abusive WhatsApp communications, and threatening emails are now explicitly classified as severe breaches. Borrowers must understand that they are not powerless victims in this ecosystem. By leveraging the updated directives, you can transition from a defensive posture to an offensive legal strategy, protecting your peace of mind and forcing lenders to the negotiating table.
                            </p>

                            <h2 id="legal-rights" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Legal Rights of Defaulters in India</h2>
                            
                            <p className="text-gray-700 leading-relaxed mb-6">
                                There is a pervasive and dangerous myth in the Indian financial sector: the belief that defaulting on a loan strips a citizen of their fundamental rights. This is categorically false. The legal rights of defaulters in India are robust and protected under multiple layers of jurisprudence, including the Constitution of India, the Indian Penal Code, and the specific banking regulations outlined by the central bank. A loan default is a civil dispute, not a criminal act. You cannot be jailed simply for being unable to repay a debt, provided there is no malicious intent or fraudulent activity involved.
                            </p>
                            
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Every borrower has the absolute right to privacy and the right to live with dignity. This means that recovery agents are legally prohibited from discussing your financial situation with your neighbors, your employer, or your extended family. The disclosure of your debt to unauthorized third parties is a severe violation of privacy laws and can form the basis of a strong legal claim for defamation and damages. Your financial struggles are confidential, and lenders are obligated to maintain that confidentiality.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Moreover, defaulters possess the right to adequate notice before any drastic recovery action is initiated. Lenders cannot arbitrarily seize your property or freeze your accounts without following the due process of law. This involves issuing formal notices, providing a reasonable window for repayment or negotiation, and obtaining necessary orders from competent legal authorities such as the Debt Recovery Tribunal (DRT) or civil courts. Any attempt to bypass these procedures constitutes an illegal act of coercion.
                            </p>
                            
                            <h3 id="harassment-vs-legal" className="text-2xl font-bold text-gray-900 mb-4 mt-8 scroll-mt-20">Harassment vs. Legal Recovery</h3>
                            
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Distinguishing between legitimate debt recovery efforts and unlawful harassment is vital. Legal recovery involves formal written communications, standardized reminder calls during permitted hours, and the initiation of proper legal proceedings in a court of law or tribunal. It is a process bound by rules, documentation, and respect for the borrower's rights. It seeks to resolve the financial dispute through established civic mechanisms. For more details on proper legal channels, review our guide on <Link href="/rbi-rules-for-recovery-agents" className="text-blue-600 hover:underline">RBI rules for recovery agents</Link>.
                            </p>
                            
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Harassment, conversely, is defined by intimidation and coercion. It includes using abusive or profane language, making continuous and repeated phone calls designed to annoy, threatening physical violence, or attempting to publicly shame the borrower. Showing up at a borrower's workplace unannounced to create a scene is harassment. Sending fabricated legal notices designed to look like police warrants is harassment. These actions are criminal in nature and move the situation from a civil debt matter to a police matter.
                            </p>
                            
                            <h3 id="working-hours" className="text-2xl font-bold text-gray-900 mb-4 mt-8 scroll-mt-20">Working Hours and Contact Rules</h3>
                            
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most explicit and easily verifiable regulation concerns contact hours. The rbi guidelines for recovery agents 2026 unequivocally state that agents may only contact borrowers between 8:00 AM and 7:00 PM. A phone call at 7:05 PM is a violation. A visit at 7:30 AM is a violation. These boundaries are non negotiable. They are designed to ensure that individuals have peaceful mornings and evenings, free from the stress of financial collection.
                            </p>
                            
                            <h2 id="red-flags" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Red Flags: Identifying Illegal Recovery Practices</h2>
                            
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To effectively stop recovery agent harassment, you must be able to instantly recognize when an agent has crossed the legal line. Here is a definitive list of red flags that indicate criminal behavior by collection agencies. If you experience any of these, it is time to escalate the matter to the authorities.
                            </p>

                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6">
                                <h4 className="font-bold text-blue-900 mb-4 text-xl">The Major Red Flags of Illegal Collection</h4>
                                <ul className="space-y-4 text-gray-800">
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                        <span><strong>Abusive Language and Threats:</strong> Any use of profanity, threats of physical violence, or threats of unlawful arrest.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                        <span><strong>Contact Outside Permitted Hours:</strong> Any phone calls, text messages, or visits occurring before 8:00 AM or after 7:00 PM.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                        <span><strong>Third Party Disclosure:</strong> Discussing your loan default with your neighbors, relatives, or employer.</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Documenting these red flags is crucial. Keep a log of every call, record conversations if possible, and save all text messages and emails. This evidence will form the foundation of your legal defense. If you need assistance formalizing your complaint, you can learn <Link href="/how-to-stop-recovery-agent-harassment" className="text-blue-600 hover:underline">how to stop recovery agent harassment</Link> through structured legal frameworks.
                            </p>

                            <h2 id="legal-process-map" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The Legal Process Map: Filing a Police Complaint Against Recovery Agents</h2>
                            
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When lines are crossed, taking immediate legal action is imperative. A loan default does not give anyone the right to commit criminal intimidation. Here is the exact step by step legal process map to file a police complaint against recovery agents and escalate the matter effectively.
                            </p>

                            <div className="relative border-l-4 border-blue-600 ml-4 py-2 mb-8 space-y-8">
                                <div className="pl-6 relative">
                                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[10px] top-1"></div>
                                    <h4 className="font-bold text-xl text-gray-900 mb-2">Step 1: Gather and Organize Evidence</h4>
                                    <p className="text-gray-700">Before approaching the authorities, compile all your proof. Take screenshots of call logs showing calls outside permitted hours. Save abusive WhatsApp messages. Download call recordings. Write down the names, phone numbers, and agency names of the offending individuals. Solid evidence is necessary for the police to register a First Information Report (FIR).</p>
                                </div>
                                <div className="pl-6 relative">
                                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[10px] top-1"></div>
                                    <h4 className="font-bold text-xl text-gray-900 mb-2">Step 2: Send a Formal Legal Notice to the Bank</h4>
                                    <p className="text-gray-700">Send a legal notice to the Grievance Redressal Officer of the lending institution. Inform them that their agents are violating the RBI guidelines and committing criminal acts. Give them a strict deadline (e.g. 7 days) to halt the harassment. Often, this formal legal threat is enough to make the bank withdraw the aggressive agents. Consider using a template like the <Link href="/legal-notice-for-loan-settlement-harassment" className="text-blue-600 hover:underline">legal notice for loan settlement harassment</Link>.</p>
                                </div>
                                <div className="pl-6 relative">
                                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[10px] top-1"></div>
                                    <h4 className="font-bold text-xl text-gray-900 mb-2">Step 3: Register a Police Complaint (FIR)</h4>
                                    <p className="text-gray-700">If the harassment continues, visit your local police station. Submit a written complaint detailing the harassment, attaching your evidence. Request the police to file an FIR under relevant sections of the Indian Penal Code, such as Section 503 (Criminal Intimidation), Section 504 (Intentional Insult with intent to provoke breach of the peace), and Section 506 (Punishment for criminal intimidation). Ensure you get a stamped copy of your complaint.</p>
                                </div>
                                <div className="pl-6 relative">
                                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[10px] top-1"></div>
                                    <h4 className="font-bold text-xl text-gray-900 mb-2">Step 4: Escalate to the RBI Ombudsman</h4>
                                    <p className="text-gray-700">If the bank ignores your legal notice and the harassment persists, file a formal complaint with the Banking Ombudsman through the RBI Complaint Management System (CMS) portal. The Ombudsman has the power to heavily penalize the bank and mandate compensation for the mental agony caused by their recovery agents. This is a highly effective, free mechanism for dispute resolution.</p>
                                </div>
                                <div className="pl-6 relative">
                                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[10px] top-1"></div>
                                    <h4 className="font-bold text-xl text-gray-900 mb-2">Step 5: Approach the Consumer Court or Civil Court</h4>
                                    <p className="text-gray-700">For severe cases involving significant mental trauma or financial loss due to defamation, you can file a suit in the Consumer Dispute Redressal Forum for deficiency in service, or file a civil suit for injunction (to legally ban the agents from contacting you) and claim financial damages for defamation and harassment.</p>
                                </div>
                            </div>

                            <h2 id="myth-vs-fact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Myth vs. Fact: What Agents Can and Cannot Do</h2>
                            
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Recovery agencies often rely on the borrower's lack of legal knowledge to employ scare tactics. Let us debunk some of the most common myths propagated by these agents.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-gray-100 p-6 rounded-2xl border border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-2 flex items-center text-lg">
                                        <span className="text-blue-600 mr-2 text-2xl font-black">X</span> Myth
                                    </h4>
                                    <p className="text-gray-700 italic">"We have a warrant for your arrest because you bounced an EMI check."</p>
                                </div>
                                <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                                    <h4 className="font-bold text-green-900 mb-2 flex items-center text-lg">
                                        <span className="text-green-600 mr-2 text-2xl font-black">✓</span> Fact
                                    </h4>
                                    <p className="text-gray-800">Only a judge can issue an arrest warrant. An EMI bounce is a civil matter. Even under Section 138 (cheque bounce), a formal court process is required, and agents cannot arrest you.</p>
                                </div>
                            </div>
                            
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Whenever an agent makes an outlandish claim, remain calm. Ask them to put their statement in writing on official bank letterhead. In almost all cases, they will refuse, because they know their verbal threats are entirely illegal.
                            </p>

                            <h2 id="seeking-protection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Seeking Legal Protection and Next Steps</h2>
                            
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are facing unmanageable debt and the harassment has begun, do not suffer in silence. The law provides multiple avenues for relief. The first step is to shift the communication from verbal chaos to written legal strategy. By engaging a legal professional, you signal to the bank that you are no longer an easy target for their collection agencies.
                            </p>
                            
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A competent lawyer can assist you in drafting a comprehensive legal notice that clearly outlines the violations of the RBI directives. This notice serves as a formal warning to the bank. Simultaneously, your legal team can evaluate your financial situation to determine the best path forward. This might involve negotiating a loan restructuring plan, applying for a moratorium based on genuine financial hardship, or proposing a one time settlement (OTS) to close the account permanently at a reduced amount.
                            </p>
                            
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Remember, banks are fundamentally pragmatic institutions. They prefer to recover some portion of their money through a negotiated settlement rather than spend years fighting a drawn out legal battle, especially when they are vulnerable to counter suits for harassment and regulatory penalties. By standing your ground and asserting your rights, you force the lender to abandon aggressive tactics and enter into reasonable negotiations.
                            </p>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">End The Harassment Now</h3>
                                <p className="text-blue-800 mb-6">You do not have to endure another abusive phone call. Our legal experts are ready to defend your rights and hold aggressive lenders accountable. Take control of your financial and mental well being today.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Schedule a Legal Consultation
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The content provided here is for informational purposes only and not intended as legal or financial advice. Debt recovery matters involve significant legal complexities; always consult with a qualified lawyer before making decisions.
                            </div>
                        </article>
                    </main>

                    {/* Right Column: CTA & Related Expertise & Author */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="space-y-6">
                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Facing Harassment?</h4>
                                <p className="text-sm text-gray-600 mb-6">Do not ignore illegal recovery tactics. Secure your rights and build a strong defense.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Get Legal Defence
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✔ Draft Police Complaints</p>
                                    <p>✔ Reply to Legal Notices</p>
                                    <p>✔ Stop Agent Calls</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-bank-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">Bank Recovery Defence</Link>
                                    <Link href="/best-lawyer-for-drt-case-defence-for-bank-loan-recovery" className="block text-sm text-blue-600 hover:underline">DRT Specialization</Link>
                                    <Link href="/best-lawyer-for-loan-settlement-during-drt" className="block text-sm text-blue-600 hover:underline">Settlement Strategies</Link>
                                    <Link href="/how-to-stop-recovery-agent-harassment" className="block text-sm text-blue-600 hover:underline">Anti Harassment</Link>
                                </nav>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            
            {/* Reviews Section at the bottom */}
            <section className="max-w-[1440px] mx-auto px-4 py-12 border-t border-gray-100">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Client Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
            </section>
        </>
    );
}
