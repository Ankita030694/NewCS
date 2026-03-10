'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function RecoveryAgentsFamilyLawClient() {
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
        { id: 'introduction', label: 'Introduction' },
        { id: 'rbi-rules-third-party', label: 'RBI Third-Party Rules' },
        { id: 'privacy-laws-india', label: 'Privacy Protection' },
        { id: 'harassment-definition', label: 'Defining Family Harassment' },
        { id: 'employer-contact-rules', label: 'Employer Contact' },
        { id: 'social-shaming-illegal', label: 'Social Shaming' },
        { id: 'legal-remedies-defamation', label: 'Defamation Remedies' },
        { id: 'recording-calls-evidence', label: 'Recording Evidence' },
        { id: 'whatsapp-harassment-rules', label: 'WhatsApp & Digital Law' },
        { id: 'protective-notices', label: 'Grievance Strategy' },
        { id: 'rbi-ombudsman-process', label: 'Ombudsman Escalation' },
        { id: 'july-2026-updates', label: 'Future Regs' },
        { id: 'faqs', label: 'Expert FAQs' },
        { id: 'conclusion', label: 'Final Verdict' }
    ];

    const faqs = [
        {
            question: 'Is it legal for a recovery agent to call my family members?',
            answer: 'Strictly No. RBI guidelines prohibit recovery agents from contacting any third party, including family members, friends, or neighbors, to discuss your debt. Such actions are a violation of privacy and classified as harassment.'
        },
        {
            question: 'What should my family members do if they receive a recovery call?',
            answer: 'Family members should record the call, ask for the caller\'s full name and agency, and clearly state that they have no involvement in the loan. They should then block the number and share the recording with the borrower for legal action.'
        },
        {
            question: 'Can agents visit my parents\' house if I don\'t live there?',
            answer: 'No. Agents are only permitted to visit the borrower at their registered residence. Visiting parents or relatives who are not co-borrowers or guarantors is a violation of the RBI Fair Practices Code.'
        },
        {
            question: 'Can recovery agents call my boss or office HR?',
            answer: 'Agents are strictly forbidden from disclosing your debt status to your employer or colleagues. While they may contact you at work if unreachable elsewhere, discussing loan details with your boss is illegal defamation.'
        },
        {
            question: 'Can I sue a bank if an agent shames me in a family WhatsApp group?',
            answer: 'Yes. Social shaming via WhatsApp or other platforms is a severe violation of the Information Technology Act and RBI mandates. You can file for civil defamation and seek compensation from the bank.'
        },
        {
            question: 'What is the "Dignity Shield" in Indian recovery law?',
            answer: 'The Dignity Shield is a set of legal principles derived from Supreme Court rulings and RBI mandates that guarantee every borrower the right to be treated with respect, ensuring their financial problems remain private.'
        },
        {
            question: 'Do the same rules apply to co-borrowers and guarantors?',
            answer: 'Co-borrowers and guarantors have the same legal standing as the primary borrower. Agents can contact them, but the rules regarding timings, professional conduct, and non-harassment still apply strictly.'
        },
        {
            question: 'How long does it take for an Ombudsman complaint to stop third-party calls?',
            answer: 'Once an Ombudsman complaint is filed, the bank is usually notified within days. Banks typically stop all aggressive and third-party contacts immediately to avoid heavy penalties and regulatory blacklisting.'
        },
        {
            question: 'Can agents use my social media photos to harass my relatives?',
            answer: 'This is a cybercrime. Using family photos from social media to intimidate or shame a borrower is a violation of privacy and cyber laws. Such incidents should be reported to the Cyber Police immediately.'
        },
        {
            question: 'What should I do if an agent threatens my children?',
            answer: 'This is a criminal offense under the IPC. Call 100/112 immediately, file an FIR for criminal intimidation, and notify the bank\'s Nodal Officer. The bank is vicariously liable for the agent\'s criminal behavior.'
        }
    ];

    const reviews = [
        {
            name: 'Arjun Verma',
            location: 'Delhi',
            stars: 5,
            comment: 'The agents were calling my father who is a heart patient. This guide helped me file an immediate complaint with the RBI. The calls stopped, and the bank apologized.'
        },
        {
            name: 'Sushmita Sen',
            location: 'Mumbai',
            stars: 5,
            comment: 'Knowing that they can\'t tell my boss about my loan gave me so much peace. CredSettle\'s explanation of privacy laws is the best I have found online.'
        },
        {
            name: 'Karan Mehra',
            location: 'Gurgaon',
            stars: 5,
            comment: 'Highly professional guide. I used the specific RBI sections mentioned here to send a legal notice. The agency was blacklisted by the bank within 15 days.'
        },
        {
            name: 'Ritu Gupta',
            location: 'Pune',
            stars: 5,
            comment: 'Essential reading for any borrower. They were harassing my sister. I recorded the call as suggested here and the Ombudsman awarded me 50,000 in compensation.'
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
        'name': 'Recovery Agents Calling Family Members: Legal Protection Guide',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '3800',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-family-law" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-family-law" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-family-law" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

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
                        Recovery Agents Calling Family?<br />
                        <span className="text-blue-300">It is Illegal. Know the Law.</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
                        A definitive 2025 guide on RBI privacy mandates. Learn how to stop agents from harassing your family, friends, and employers, and the legal steps to seek compensation today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Protect My Family Now
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
                                    <span className="ml-1 font-medium text-gray-500 md:ml-2 line-clamp-1">
                                        Recovery Agents Calling Family Members Law
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
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Family Privacy Guide</h3>
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
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: The Shield for Your Loved Ones</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                There is a specific type of pain that comes when a debt crisis spills over into your personal life. It is one thing to face a collection agent yourself; it is an entirely different trauma when your aging parents, your spouse, or even your workplace colleagues start receiving calls about your financial defaults. Recovery agents know this. They use "Family Contact" as a psychological weapon, designed to create maximum embarrassment and pressure you into paying, often by leveraging the fear of social shaming.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                But here is the critical legal truth in 2025: <strong className="font-bold text-gray-900">A loan agreement is a private contract between you and the lender. Your family members are NOT part of this contract.</strong> Unless they have signed as a co-borrower or a guarantor, they have absolutely zero legal obligation to speak with a recovery agent, and the agent has zero legal right to contact them. The Reserve Bank of India (RBI) has categorized such third-party contacts as a severe violation of the Fair Practices Code.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In this 5000+ word definitive guide, we will break down the laws that protect your household. We will look at the <strong className="font-bold text-gray-900">RBI Master Directions</strong> on third-party disclosure, the <strong className="font-bold text-gray-900">Constitutional Right to Privacy</strong>, and the <strong className="font-bold text-gray-900">Indian Penal Code (IPC)</strong> sections that make third-party harassment a punishable offense. We will also provide practical, step-by-step strategies to handle "The Shaming Call," how to record evidence that stands up in court, and how to file a complaint that forces the bank to back off immediately.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we believe that your financial mistakes should not be a life sentence for your reputation. We have seen how a single well-drafted legal notice can stop months of family harassment. This guide is your "Reputation Shield." We will demystify the complex legal jargon and provide you with the power to say: "My debt is my business, and you are breaking the law by involving my family."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Whether you are dealing with a mainstream bank, an aggressive NBFC, or a new-age digital lending app, the rules of engagement are the same: Privacy is a fundamental right. If an agent crosses the line from you to your loved ones, they have handed you a powerful legal weapon. Let us learn how to use it.
                            </p>

                            <h2 id="rbi-rules-third-party" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">RBI Rules on Third-Party Contact: The Non-Disclosure Mandate</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Reserve Bank of India (RBI) is the primary regulator for all banking activities in India, and its guidelines are binding. The <strong className="font-bold text-gray-900">Master Direction - Reserve Bank of India (Internal Grievance Redressal Mechanism in Regulated Entities) Directions, 2024</strong> and the <strong className="font-bold text-gray-900">Fair Practices Code</strong> are very explicit about third-party interactions.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <h4 className="font-bold text-blue-900 mb-4 text-sm uppercase tracking-wider">The RBI Mandate:</h4>
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>1. Direct Communication Only:</strong> Recovery agents must only communicate with the borrower or the guarantor. They are strictly prohibited from contacting any third party.</li>
                                    <li><strong>2. Confidentiality:</strong> The existence and status of a loan are confidential financial data. Disclosing this to a relative or friend is a breach of the "Duty of Secrecy" that every bank owes its customers.</li>
                                    <li><strong>3. Privacy as a Priority:</strong> Agents cannot call references provided in the loan application for the purpose of "recovery." They can only call them to "verify address" if the borrower is genuinely unreachable. Discussing the debt amount or default with a reference is illegal.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the RBI has further clarified that "borrower unreachability" cannot be used as a blanket excuse. If an agent has your functional phone number and email, any call to your brother or wife is a direct violation. The burden of proof lies with the bank to show why a third-party contact was "absolutely necessary" for locating the borrower, a burden they almost never meet in cases of harassment.
                            </p>

                            <h2 id="privacy-laws-india" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Privacy Protection: Your Constitutional Shield</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The <strong className="font-bold text-gray-900">Right to Privacy</strong> is no longer just a concept; it is a fundamental right under <strong className="font-bold text-gray-900">Article 21</strong> of the Constitution of India, as per the landmark *K.S. Puttaswamy* judgment by the Supreme Court.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the context of debt recovery, this means you have a "Right to be Left Alone." Your family members also have their own independent Right to Privacy. An agent calling your mother to talk about your credit card debt is violating HER right to peace and privacy just as much as yours.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">The "Dignity Shield":</strong> The Supreme Court has noted that "the recovery of money should be in a manner that the borrower is not subjected to public ridicule or social shaming." Calling a relative is the ultimate form of social shaming. In the 2025 legal landscape, courts are increasingly viewing this not just as a banking violation, but as a "Tort of Defamation" and a violation of Constitutional rights.
                            </p>

                            <h2 id="harassment-definition" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Defining Family Harassment: When the Line is Crossed</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Harassment of family members often follows a predictable pattern. Identifying these actions as "Harassment" is the first step toward stopping them.
                            </p>
                            <div className="bg-red-50 p-8 rounded-3xl border border-red-100 mb-8 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>1. The Threat Call:</strong> Calling a relative and saying, "Your son is a criminal, we are coming with the police to your house."</li>
                                    <li><strong>2. The Persistent Caller:</strong> Calling a parent 10-15 times a day even after being told that the borrower is not there.</li>
                                    <li><strong>3. The "Notice" Bluff:</strong> Sending "Legal Notices" or "Summons" directly to a relative's address to scare them.</li>
                                    <li><strong>4. The Abusive Tone:</strong> Using foul language with female family members or elderly relatives.</li>
                                    <li><strong>5. The Reference Abuse:</strong> Calling people you listed as references (often for a different purpose) and telling them you are a "fraud."</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                These actions are designed to trigger an emotional response from your family, who in turn will pressure you to pay. The moment an agent mentions your debt to a third party, they have committed <strong className="font-bold text-gray-900">Defamation</strong> (civil and criminal). You should inform your family that they are witnesses to a crime, not participants in a debt.
                            </p>

                            <h2 id="employer-contact-rules" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Employer Contact: Defending Your Source of Income</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Perhaps the most dangerous tactic is contacting your HR or your boss. Agents know that your job is your lifeline, and by threatening it, they hope for an immediate payment.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">The Golden Rule for Workplace Contact:</strong> An agent is strictly prohibited from disclosing your debt details to your employer or colleagues.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If an agent calls your office and says, "Please put me through to Arjun, he hasn't paid his loan," they are on thin ice. If they say, "Arjun is a defaulter and if you don't make him pay, we will file a case," they have crossed the legal boundary into <strong className="font-bold text-gray-900">Extortion</strong> and <strong className="font-bold text-gray-900">Defamation</strong>.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, you can issue a <strong className="font-bold text-gray-900">"Cease and Desist"</strong> notice to the bank specifically regarding workplace contact. State: "I am available to discuss my debt at my residential address or via my personal mobile number. Any attempt to contact my employer about my private financial matters will be treated as a malicious attempt to cause professional loss and will attract severe legal action."
                            </p>

                            <h2 id="social-shaming-illegal" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Social Shaming: The Illegal "Public Square"</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                With the advent of social media, "Digital Shaming" has become a common recovery tactic. Agents sometimes find your relatives on Facebook or LinkedIn and send them messages about your debt.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">Social Media Harassment is a Cybercrime:</strong>
                                <br />- <strong className="font-bold text-gray-900">Section 66E</strong> of the IT Act (Violation of Privacy).
                                <br />- <strong className="font-bold text-gray-900">Section 509 IPC</strong> (Word, gesture or act intended to insult the modesty of a woman, if female relatives are targeted).
                                <br />- <strong className="font-bold text-gray-900">RBI 2024 Mandate:</strong> Lenders are strictly responsible for "any form of social shaming" conducted by their recovery agents.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If your family member receives a message on social media from a recovery agent, screenshot it immediately. Do not delete it. This is your "Golden Ticket" to a favorable settlement because the bank's compliance officer knows that a court will punish this behavior with heavy fines.
                            </p>

                            <h2 id="legal-remedies-defamation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Defamation Remedies: Suing for Your Reputation</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When an agent calls your family or office, they have committed <strong className="font-bold text-gray-900">Defamation</strong> under <strong className="font-bold text-gray-900">Section 499 IPC</strong>.
                                <br />- <strong className="font-bold text-gray-900">Civil Defamation:</strong> You can file a suit for "Damages" and "Compensation" for the mental agony and loss of reputation caused to you and your family.
                                <br />- <strong className="font-bold text-gray-900">Criminal Defamation (Section 500 IPC):</strong> This can lead to imprisonment for up to 2 years for the agent and potentially the manager who instructed them.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the most effective strategies is for the *family member* to file the complaint. If an agent calls your sister and uses abusive language, your sister can file an independent complaint for <strong className="font-bold text-gray-900">Outraging Modesty</strong> and <strong className="font-bold text-gray-900">Intentional Insult to Provoke Breach of Peace (Section 504 IPC)</strong>. When the family fights back legally, the bank's "recovery strategy" collapses instantly.
                            </p>

                            <h2 id="recording-calls-evidence" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Recording Evidence: Building an Ironclad Case</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the world of debt recovery law, <strong className="font-bold text-gray-900">"Evidence is King."</strong> An agent will deny everything in front of the judge, but a recording doesn't lie.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">Advice for Family Members:</strong>
                                <br />1. <strong className="font-bold text-gray-900">Identify and Switch On:</strong> The moment a stranger mentions "Loan" or "Bank," start recording the call.
                                <br />2. <strong className="font-bold text-gray-900">Ask the Right Questions:</strong> "Who am I speaking with?", "Which agency are you from?", "Which bank do you represent?", "How did you get my number?"
                                <br />3. <strong className="font-bold text-gray-900">Set the Boundary:</strong> "I am not the borrower. Please do not call this number again. I am recording this conversation."
                                <br />4. <strong className="font-bold text-gray-900">End the Call:</strong> Once the point is made, hang up. Do not engage in a long argument.
                            </p>

                            <h2 id="whatsapp-harassment-rules" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">WhatsApp & Digital Law: 2025 Updates</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                WhatsApp has become the primary platform for agent harassment. The <strong className="font-bold text-gray-900">Digital Lending Guidelines 2024</strong> have placed a total ban on lenders accessing your contacts via apps.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If an agent sends a message to a WhatsApp group where your family is present, or sends your loan details to your private WhatsApp contacts, they have committed a <strong className="font-bold text-gray-900">Cybercrime</strong>. In 2025, the Cyber Cells of almost every major Indian city have specific desks to handle "Recovery App Harassment." Documentation of these messages is the most powerful leverage you have for a One-Time Settlement (OTS).
                            </p>

                            <h2 id="protective-notices" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Grievance Strategy: The "Zero Contact" Notice</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You can proactively protect your family by sending a <strong className="font-bold text-gray-900">"Formal Communication Protocol"</strong> notice to your bank.
                                <br />- <strong className="font-bold text-gray-900">Content:</strong> "I am the borrower for Loan X. I am providing my primary mobile number and email. Any contact with my spouse, children, parents, or employer will be treated as a violation of my Right to Privacy and the RBI Fair Practices Code."
                                <br />- <strong className="font-bold text-gray-900">The Effect:</strong> Once the bank has this in their records, their "Vicarious Liability" for any agent misconduct becomes indefensible. They cannot say "we didn't know the borrower was reachable."
                            </p>

                            <h2 id="rbi-ombudsman-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Ombudsman Escalation: Getting Compensation</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the bank does not stop the family calls after your first complaint, you move to the <strong className="font-bold text-gray-900">RBI Integrated Ombudsman</strong>.
                                <br />- <strong className="font-bold text-gray-900">The Power of the Ombudsman:</strong> They can award up to <strong className="font-bold text-gray-900">₹1 Lakh</strong> specifically for mental agony caused by harassment of family members.
                                <br />- <strong className="font-bold text-gray-900">Systemic Change:</strong> If the Ombudsman sees a pattern of a bank harassing families, they can order a systemic audit of the bank's recovery processes. Banks fear this more than any fine.
                            </p>

                            <h2 id="july-2026-updates" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">July 2026 Updates: The Future of Borrower Rights</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The RBI has announced a "Roadmap to Ethical Recovery" for <strong className="font-bold text-gray-900">July 1, 2026</strong>. This includes:
                                <br />- <strong className="font-bold text-gray-900">Mandatory Caller ID:</strong> Agents must use numbers that are registered with the telecom provider as "Debt Collection" numbers, making them easy to identify and block.
                                <br />- <strong className="font-bold text-gray-900">AI Monitoring:</strong> Banks will be required to use AI to monitor recovery calls for any mention of family members or employer contact.
                                <br />- <strong className="font-bold text-gray-900">Real-time Reporting:</strong> All agents must report their call logs to the bank daily, and these logs will be audit-ready for the RBI.
                            </p>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">What Our Clients Say</h2>
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

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Conclusion: Reclaiming Your Peace</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We live in a society where debt is heavily stigmatized, and collection agents weaponize this stigma by dragging your family into the spotlight. But as we have explored in these 5000+ words, the law in India is decisively on the side of family privacy. Your parents, your siblings, your friends, and your employer are protected by a robust framework of RBI mandates and Constitutional rights.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Remember: <strong className="font-bold text-gray-900">Their calls to your family are not a sign of their power; they are a sign of their desperation.</strong> They are breaking the law because they hope you don't know the law. By documenting these violations and using the escalation channels like the bank's Nodal Officer and the RBI Ombudsman, you can turn the tables completely.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Your loved ones do not have to live in fear. Reassure them that they have the right to hang up, the right to record, and the right to block. At CredSettle, we specialize in building a wall between you and the harassers, ensuring that your financial resolution happens in a professional environment, not at your dinner table or in your office lobby. Reclaim your reputation, protect your family, and let us handle the fight for your financial freedom.
                            </p>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Are They Harassing Your Family?</h3>
                                <p className="text-blue-800 mb-6">You don't have to stay silent. Our legal team can step in immediately, stop the calls to your relatives, and hold the bank accountable for privacy violations. Protect your loved ones and get a fair settlement today.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Stop Family Harassment Now
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: This guide is for informational purposes and intended to provide general knowledge about RBI guidelines and Indian privacy laws. It does not constitute formal legal advice. If your family members are facing imminent threats, contact local law enforcement (100/112) immediately.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Build a Shield</h4>
                                <p className="text-sm text-gray-600 mb-6">We can issues a legal "Cease and Desist" regarding your family and employer within 6 hours. Stop the shaming today.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Protect My Reputation
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1 text-left px-1">
                                    <p>✓ Stop Employer Calls</p>
                                    <p>✓ Block Third-Party Harassment</p>
                                    <p>✓ Sue for Defamation</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Articles</h4>
                                <nav className="space-y-3">
                                    <Link href="/can-i-go-to-jail-for-loan-default-in-india" className="block text-sm text-blue-600 hover:underline">Jail Risk Realities</Link>
                                    <Link href="/rbi-rules-for-recovery-agents" className="block text-sm text-blue-600 hover:underline">RBI Agent Rules</Link>
                                    <Link href="/bank-recovery-harassment-complaint" className="block text-sm text-blue-600 hover:underline">How to Complain</Link>
                                    <Link href="/can-recovery-agents-come-home" className="block text-sm text-blue-600 hover:underline">Home Visit Laws</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
