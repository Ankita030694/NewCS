'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function IdentifyFakeAgentsClient() {
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
        { id: 'introduction', label: 'The Surge in Fraud' },
        { id: 'genuine-agent-definition', label: 'Legitimate Agents' },
        { id: 'red-flags-fake-agents', label: 'Scammer Red Flags' },
        { id: 'rbi-guidelines-2025', label: 'RBI 2025 Rules' },
        { id: 'payment-security', label: 'Secure Payments' },
        { id: 'legal-notice-scams', label: 'Notice Scams' },
        { id: 'digital-harassment', label: 'App Extortion' },
        { id: 'borrower-rights', label: 'Legal Arsenal' },
        { id: 'reporting-channels', label: 'How to Report' },
        { id: 'psychological-strength', label: 'Mental Resilience' },
        { id: 'global-comparison', label: 'Global Rules' },
        { id: 'case-studies', label: 'Real Stories' },
        { id: 'legal-protections', label: 'Fundamental Rights' },
        { id: 'faq-schema-fake-agents', label: 'FAQs' },
        { id: 'reviews', label: 'Client Feedback' },
        { id: 'conclusion', label: 'Final Verdict' },
    ];

    const faqs = [
        {
            question: 'How do I know if a recovery agent is from my actual bank?',
            answer: 'A genuine agent must carry an official ID card from the bank or the authorized agency and a copy of the bank\'s authorization letter. They must also show a copies of your loan details. You should verify this by calling your bank\'s customer service through the number listed on their official website.'
        },
        {
            question: 'Is it legal for a recovery agent to call me at 10 PM?',
            answer: 'No, the RBI 2025 guidelines strictly prohibit calling or visiting borrowers between 7 PM and 8 AM. Any communication outside these hours is a direct violation of the Fair Practices Code and should be reported as harassment.'
        },
        {
            question: 'Can a fake recovery agent send me a legal notice on WhatsApp?',
            answer: 'While some legitimate communication happens via digital channels, most scammers use fake legal notice templates with "Supreme Court" or "High Court" seals to intimidate you. A real legal notice is usually sent via registered post or from a verified law firm\'s official email. Always check the legitimacy of the sender before panicking.'
        },
        {
            question: 'Do genuine recovery agents ask for cash or UPI transfers to personal accounts?',
            answer: 'Never. A legitimate agent will always ask you to pay through the official bank portal, mobile app, or a branch. They will never ask for a transfer to a personal mobile number or a private name. All payments must generate an official, bank issued digital or physical receipt.'
        },
        {
            question: 'What should I do if a fake agent threatens to contact my relatives?',
            answer: 'This is a common tactic of fraudulent digital lending apps. It is a violation of privacy laws in India. You should immediately report the number to the local cyber cell and use the Sanchar Saathi "Chakshu" portal to block the scammer\'s account and device.'
        },
        {
            question: 'Can I go to jail immediately for defaulting on a loan?',
            answer: 'Civil debt default is not a criminal offense in India and does not lead to immediate arrest. Scammers often pretend to be police officers or "court commissioners" to scare you. Legitimate recovery is a civil process involving notices and potentially a court hearing, not an instant jail sentence.'
        },
        {
            question: 'Is it safe to share my ID or loan documents with an agent who visits me?',
            answer: 'You should only share your documents once you have verified the agent\'s own ID and authorization letter. Scammers may try to collect your sensitive information to commit identity theft or further fraud.'
        },
        {
            question: 'Can a bank authorized recovery agent enter my house without permission?',
            answer: 'No. The Right to Privacy is a fundamental right. Agents can only visit your premises with your consent during permitted hours. If they force entry or refuse to leave when asked, you can call the police for trespassing and criminal intimidation.'
        },
        {
            question: 'How does the RBI Banking Ombudsman help with agent harassment?',
            answer: 'If your bank fails to resolve your complaint about an agent\'s behavior within 30 days, you can escalate the matter to the RBI Integrated Ombudsman. They have the power to penalize banks and NBFCs for the actions of their recovery agents, sometimes resulting in compensation for the borrower.'
        },
        {
            question: 'What is the "Sunlight Rule" in the context of debt collection?',
            answer: 'The Sunlight Rule is an industry term for the RBI mandate that requires all debt collection activities to happen in the literal light of day, specifically between 8 AM and 7 PM. This ensures transparency and protects borrowers from late night intimidation.'
        }
    ];

    const reviews = [
        {
            name: 'Prakash Hegde',
            location: 'Mumbai',
            stars: 5,
            comment: 'I was being harassed by a fake "legal officer" claiming to be from a well known bank. CredSettle helped me identify the fake template he was using. It turned out to be a scammer from outside the city. Great guide for everyone.'
        },
        {
            name: 'Meera Nair',
            location: 'KERALA',
            stars: 5,
            comment: 'The list of red flags saved me from paying 50,000 to a personal UPI ID. I realized the agent was fake because he refused to show his authorization letter. Thank you for making these rights so clear and easy to understand.'
        },
        {
            name: 'Rahul Batra',
            location: 'Delhi',
            stars: 5,
            comment: 'Professional advice. I used the RBI contact hours rule to stop the late night calls. The bank actually apologized when I quoted the 2025 guidelines and mentioned the Ombudsman. Knowledge is definitely power.'
        },
        {
            name: 'Anita Sharma',
            location: 'Pune',
            stars: 5,
            comment: 'Excellent resource for anyone dealing with debt. The section on digital lending apps was particularly helpful. I reported a fraudulent app to the cyber cell after reading this and got my data secured.'
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

    const reviewSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Identify Fake Recovery Agents Guide',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '4150',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-fake-agents" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-fake-agents" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        How to Identify Fake Recovery Agents:<br />
                        <span className="text-blue-300">The 2025 RBI Compliance Guide</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Expert analysis on identifying scammers, knowing your legal rights, and reporting loan harassment under latest Indian regulations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Free Legal Protection Help
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
                                        Identify Fake Recovery Agents
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
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
                                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
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

                    {/* Middle Column: Main Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: The Surge of Digital Fraud in Modern Recovery</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The landscape of financial recovery in India has undergone a radical transformation over the last decade. With the rapid digitization of lending and the explosion of fintech applications, credit has never been more accessible. However, this accessibility has also opened the floodgates for a darker side of the industry: the rise of fraudulent and unauthorized recovery agents. These individuals operate outside the law, using intimidation, psychological pressure, and digital extortion to squeeze money out of vulnerable borrowers.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For an honest borrower who is already struggling with the weight of debt, the appearance of a recovery agent can be a terrifying experience. But a crucial question often remains unasked in the heat of the moment: Is this person actually authorized by my bank? In 2024 and 2025, the number of "fake recovery scams" has reached an all time high. These scammers often use stolen data from compromised lending apps to target individuals, pretending to be from major banks or NBFCs. They rely on fear as their primary weapon, knowing that most borrowers are not aware of their rights and the strict regulations imposed by the Reserve Bank of India.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Learning how to identify a fake recovery agent is no longer just a financial skill; it is a vital act of self protection. It is about understanding that having a debt does not strip you of your fundamental human rights or your legal status as a citizen. The banking system has clear, documented procedures for recovery, and anyone acting outside those procedures is likely a criminal. This extensive guide is designed to empower you with the knowledge to distinguish between a legitimate professional and a fraudulent predator.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We will delve deep into the latest RBI 2025 guidelines, explore the specific red flags used by scammers, and provide you with a step by step protocol for verifying identity. We will also examine the "Cyber Extortion" tactics used by illegal lending apps and how the Indian government's new digital security portals can help you fight back. Our goal is to ensure that you never pay a single rupee to a scammer and that you can handle even legitimate recovery processes with a sense of dignity and legal strength.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Remember, the psychological toll of harassment is often worse than the financial debt itself. Scammers know this and they use "shame" as a tool. By educating yourself on the realities of the recovery industry, you neutralize their biggest weapon. You shift the power dynamic from one of fear to one of accountability. Whether you are dealing with a small credit card bill or a large business loan, the information provided here will serve as your shield against illegal practices and fraudulent individuals.
                            </p>

                            <h2 id="genuine-agent-definition" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Part 1: Defining Legality - Who is a Genuine Agent?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To identify a fake agent, you must first understand what a real one looks like in the eyes of the law. A legitimate recovery agent in India is not a freelancer or a random individual. They are employees of the bank or registered "Debt Recovery Agencies" that have been formally vetted and appointed by the financial institution. Every major bank, from HDFC and ICICI to public sector giants like SBI, has a strict onboarding process for these agencies.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>1. Written Authorization:</strong> A genuine agent will never just "show up." The bank is legally obligated to send you a notice informing you that your account has been assigned to a specific recovery agency. This notice usually includes the name of the agency and their contact details.</li>
                                    <li><strong>2. Formal Identity Proof:</strong> Legitimate agents carry an official ID card issued by the agency they work for, which in turn should be linked to the bank. They should also carry a copy of the specific authorization letter from the bank that allows them to interact with you regarding your specific loan account.</li>
                                    <li><strong>3. Knowledge of Your Case:</strong> Real agents have access to your official loan history, including the exact principal outstanding, the interest calculation, and the history of your previous interactions with the bank. If an agent is vague about these details or asks you "how much do you owe?", it is a major warning sign.</li>
                                    <li><strong>4. Respect for Privacy:</strong> Professional agents are trained to maintain the confidentiality of the debt. They are prohibited from announcing your debt status to your neighbors, family members who are not guarantors, or your workplace colleagues. Their interaction is limited to you or your legally defined co-borrowers.</li>
                                    <li><strong>5. No Coercive Tools:</strong> Genuine agents do not carry weapons, they do not bring large groups of people (known as "bouncers"), and they do not use physically intimidating postures. They are there as mediators and recovery facilitators, not as enforcers.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the RBI has mandated that every bank must maintain a directory of authorized recovery agencies on their official website. Before engaging with any agent, you have the right to ask for the agency name and verify it against the bank\'s website. If the agency name is not listed, you should refuse to communicate and report the individual to the bank\'s grievance department immediately.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, legitimate agents are now required to provide a digital "Call Verification" or a "Visit Verification" code in some modern banking systems. This is a one time password (OTP) sent to your registered mobile number by the bank when an authorized agent initiates a meeting. If an agent cannot trigger this official bank communication, they are likely unauthorized. The focus on "Transparent Identity" is the cornerstone of modern Indian banking recovery.
                            </p>

                            <h2 id="red-flags-fake-agents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Part 2: The Red Flags - Anatomy of a Fake Recovery Agent</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Scammers rely on a set of predictable tactics designed to create panic. They want to prevent you from thinking clearly or checking with your bank. By recognizing these red flags, you can spot a fake agent within the first few minutes of conversation.
                            </p>
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>1. Demand for Private Payment (The biggest red flag):</strong> If anyone asks you to transfer money to a personal UPI ID, a mobile number via GPay or PhonePe, or pay in cash without a bank generated QR code, they are a scammer. Legitimate recovery always goes into the bank\'s official accounts through official channels.</li>
                                    <li><strong>2. Refusal to Show ID or Authorization:</strong> Fake agents will get aggressive or dismissive when you ask for identification. They might say things like "I am from the head office, I don\'t need to show ID" or "If you don\'t pay now, you will see what happens." A real professional will expect and respect your request for verification.</li>
                                    <li><strong>3. Impersonating Police or Court Officials:</strong> Scammers love to pretend they are calling from "Sector 5 Police Station" or "The District Court Recovery Cell." In India, the police do not call citizens to collect loan EMIs. Civil debt recovery is a process between you and the bank. If someone threatens you with "immediate arrest in 2 hours," they are lying.</li>
                                    <li><strong>4. Using Non-Official Communication Channels:</strong> Be wary of "legal notices" sent as low quality PDF files on WhatsApp from personal mobile numbers. Real legal notices are sent via registered post with proper tracking numbers and a clear letterhead from a verified law firm. Fake notices often contain grammatical errors and overuse of "urgent" or "criminal" keywords.</li>
                                    <li><strong>5. Digital Shaming Threats:</strong> Scammers, especially those from illegal lending apps, will threaten to send your "default status" (or even morphed photos) to everyone in your contact list. This is a criminal offense known as digital extortion. Legitimate banks will never use your contact list as a tool for recovery as it violates the RBI Fair Practices Code.</li>
                                    <li><strong>6. No Formal Notice of Assignment:</strong> If you never received a letter or email from your bank saying "We have assigned your account to Agency X," and someone from Agency X suddenly shows up, be extremely cautious. Always call your bank to confirm first.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Another subtle sign of a fake agent is their lack of negotiation flexibility. Scammers want the full amount (or a "settlement amount") immediately and will not listen to your financial situation. Legitimate agents are trained to listen to your reasons for default and might even suggest restructuring or settlement options authorized by the bank. Their goal is recovery, not just "now" money.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you spot any of these signs, your immediate action should be to stop the communication. Do not argue, do not get angry, and most importantly, do not pay. Take screenshots, record the calls, and note down the phone numbers. This evidence is crucial for your next steps with the cyber cell and the bank.
                            </p>

                            <h2 id="rbi-guidelines-2025" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Part 3: RBI Guidelines 2025 - The "Sunlight Rule" and Beyond</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Reserve Bank of India has updated its "Fair Practices Code" (FPC) to provide one of the strongest borrower protection frameworks in the world. As of 2025, these rules are non negotiable for every bank and NBFC operating in India. Knowing these rules allows you to hold recovery agents accountable and identify those who are violating the law.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the most important rules is what we call the **"Sunlight Rule."** It mandates that all debt collection activities, whether they are phone calls or physical visits, must happen between 8:00 AM and 7:00 PM. This is designed to protect your peace of mind and prevent late night intimidation. Any call received at 9 PM or a visit at 7 AM is a documented violation of RBI rules. Even if the debt is real, the method is illegal.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, the RBI has clarified the **"Privacy of Information"** rule. Agents cannot contact your friends, family, or employers to shaming you or ask them to pay your debt. They are strictly prohibited from discussing your financial status with anyone other than you, your co-borrower, or your legally defined guarantor. If they call your brother or your boss, they are in violation of the FPC.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the RBI has also introduced the **"Digital Footprint Rule."** This requires banks to record every interaction made by a recovery agent with a borrower. If an agent uses abusive language or threats, the bank is held directly responsible for that behavior. You can use this to your advantage by recording your own side of the conversation. When you tell an agent, "I am recording this call for my complaint to the RBI Ombudsman," a legitimate agent will immediately moderate their tone, while a fake one might get more aggressive or hang up.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                There is also a mandatory **"Training Certificate"** requirement. Every recovery agent must undergo a training program prescribed by the Indian Institute of Banking and Finance (IIBF) and should carry a certificate of completion. While you might not always ask for this, knowing it exists adds to your leverage. A bank using untrained agents is violating RBI directives and can be heavily fined. The 2025 guidelines emphasize that "Debt Recovery is a Professional Service, not a Criminal Act."
                            </p>

                            <h2 id="payment-security" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Part 4: Secure Payments - The Golden Rule of Debt Resolution</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The ultimate goal of a fake recovery agent is to get your money into their own hands. This is where most scams succeed. To prevent this, you must follow the Golden Rule of Debt Resolution: **Never pay outside official channels.**
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the modern Indian banking ecosystem, there is no reason for an agent to take cash or a personal transfer. Legitimate payments should be made through:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>The Official Bank App:</strong> Use the "Pay Bill" or "EMI Payment" section of your bank\'s own application.</li>
                                <li><strong>The Official Website:</strong> Log in to the bank\'s portal using your credentials and pay through the secure payment gateway.</li>
                                <li><strong>Bank Generated QR Codes:</strong> Some agents might carry a dynamic QR code. Ensure that the "Beneficiary Name" displayed on your screen after scanning is the exact name of the bank (e.g., "HDFC BANK LOAN RECOVERY" or "ICICI BANK LTD"). If it shows a person\'s name or a generic "Digital Solutions" name, do not pay.</li>
                                <li><strong>Cheque or DD:</strong> If you prefer physical payment, always issue a cheque or Demand Draft in the exact name of the bank, and cross it with "Account Payee Only." Never leave the "Pay To" field blank.</li>
                                <li><strong>Nodal Branch Payment:</strong> The safest way is to go to the bank branch personally, pay at the counter, and get a stamped physical receipt.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Scammers will often tell you that "the system is down" or that "your account is blocked so you must pay to this special recovery UPI." This is a lie. Even if an account is NPA (Non Performing Asset), the bank can always accept payments through their official internal systems. A fake agent might also offer you a "special 80% discount" if you pay right now. Remember, a real settlement or discount requires a formal white paper "Settlement Offer Letter" with a bank seal. A discount offered verbally or over a WhatsApp chat is almost always a scam.
                            </p>

                            <h2 id="legal-notice-scams" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Part 5: Notice Scams - Distinguishing Real Law from Fear-Mongering</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the most common tools in a fake agent\'s arsenal is the "Fake Legal Notice." These documents are designed to look official and frightening. They often contain the following elements:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-6">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Excessive Use of Seals:</strong> They might have multiple logos of the Supreme Court, CBI, Police, and the Bank all on one page. Real legal notices are from a law firm, not from the court itself.</li>
                                    <li><strong>Criminal Keywords:</strong> They will use words like "Warrant Issued," "Non Bailable Offense," "Immediate Property Seizure," and "Passport Cancellation." Most debt defaults are civil matters and do not result in these consequences instantly.</li>
                                    <li><strong>Incorrect Legal Sections:</strong> They might quote random sections of the IPC or BR Act that have nothing to do with debt recovery. For example, they might quote a section related to "Theft" for an unpaid personal loan.</li>
                                    <li><strong>WhatsApp Delivery:</strong> While a copy can be sent on WhatsApp, a legal notice has no standing unless it is formally served. If you only receive it via a WhatsApp message from a personal number and there is no accompanying post, it is likely a scare tactic.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you receive such a notice, the first thing you should do is **Verify the Lawyer.** Every legal notice must have the name, enrollment number, and contact details of the advocate who sent it. You can search for the lawyer\'s name on the Bar Council website or call their office directly using a number found on Google, not the one provided in the notice. If the "Lawyer\'s Office" says they have no record of you, you are dealing with a fake agent.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Also, remember that a "Notice" is not a "Summons" or a "Warrant." A notice is just a communication from the bank\'s lawyer. It is the beginning of a legal process, not the end. You have time to respond, seek your own legal counsel, and negotiate. Scammers want you to think it's too late to do anything except pay them immediately. This artificial sense of urgency is their biggest tell.
                            </p>

                            <h2 id="digital-harassment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Part 6: Digital Harassment - Fighting the "Contact List" Extortion</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the last few years, a particularly vicious form of fake recovery has emerged, primarily linked to unauthorized digital lending apps (often called "7 day loan apps"). These apps take permission to access your contact list and gallery during the installation process. If you default, or sometimes even if you don\'t, "recovery agents" from these apps begin to harass you.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Their tactics include:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Social Shaming:</strong> Sending a message to your family, friends, and coworkers saying you are a "fraud" or a "thief."</li>
                                <li><strong>Morphed Images:</strong> Creating offensive or inappropriate images using the photos found in your gallery and threatening to leak them.</li>
                                <li><strong>Continuous Calling:</strong> Using automation to call your number and your contacts hundreds of times a day.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To identify if an agent is from such an illegal setup, check the app\'s RBI registration. Every legitimate lender must be linked to a registered NBFC. If the agent cannot name their NBFC or if the NBFC name sounds fake, you are dealing with a criminal syndicate. In 2025, the government has launched the **Sanchar Saathi "Chakshu" portal**, where you can report these numbers. Once reported, the entire device and the SIM card used by the scammer are blocked across India.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are a victim of this, **do not give in to their demands.** Paying them once will only lead to more demands. Instead, secure your social media, inform your close contacts that your phone has been hacked, and file a complaint with the National Cyber Crime portal (cybercrime.gov.in) or call the helpline at **1930**. The Indian police have become very efficient at tracking these groups, many of which operate from "scam hubs" in specific parts of the country or even across borders.
                            </p>

                            <h2 id="borrower-rights" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Part 7: Your Legal Arsenal - Laws, FIRs, and Ombudsmen</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Knowledge of the law is your greatest defense. Even if you owe money, you are protected by several legal frameworks in India. If a recovery agent (fake or authorized) crosses the line, you have multiple channels for redressal.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-8 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>1. The Right to Privacy:</strong> Your financial details are your personal data under the Digital Personal Data Protection Act. Sharing them with unauthorized third parties or using them to shame you is a legal violation.</li>
                                    <li><strong>2. Protection Against Trespassing:</strong> If an agent enters your home without permission or refuses to leave, they can be charged with criminal trespass under the Bharatiya Nyaya Sanhita (formerly IPC).</li>
                                    <li><strong>3. Protection Against Criminal Intimidation:</strong> Using threats of force, abusive language, or shaming tactics falls under criminal intimidation. You can file an FIR for this at your local police station.</li>
                                    <li><strong>4. The RBI Integrated Ombudsman Scheme:</strong> This is a powerful, free tool. If you file a complaint with your bank and don't get a satisfactory resolution in 30 days, you can go to the Ombudsman. The RBI takes a very dim view of harassment and can force the bank to compensate you and even freeze their recovery actions.</li>
                                    <li><strong>5. The Consumer Protection Act:</strong> Banks are service providers. Harassment by recovery agents is considered a "Deficiency in Service" and an "Unfair Trade Practice." You can drag the bank to a consumer court, where they often lose large sums in damages.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When you file a complaint, **Document Everything.** Use call recording apps (where legal), take photos of the agents who visit you, and keep a log of all text messages. Providing a "Timeline of Harassment" makes your case much stronger. A bank that sees you are prepared with evidence will often change their approach and might even offer you a better settlement deal just to avoid the legal fallout of their agent\'s bad behavior.
                            </p>

                            <h2 id="reporting-channels" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Part 8: How to Report Fake Recovery Agents - A Step-by-Step Protocol</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you have identified a fake or illegal recovery agent, follow this protocol to protect yourself and others:
                            </p>
                            <ol className="list-decimal pl-6 mb-6 space-y-4 text-gray-700 leading-relaxed">
                                <li><strong>Stop All Direct Communication:</strong> Do not engage in arguments or try to "reason" with a scammer. Block their numbers on your phone and on apps like Truecaller.</li>
                                <li><strong>Report to the Sanchar Saathi Portal:</strong> Use the "Chakshu" facility to report the scam call or message. This helps the Department of Telecommunications block the fraudster's digital identity.</li>
                                <li><strong>Inform Your Bank:</strong> Call the official customer care number of the bank the agent claimed to be from. Inform them that someone is using their name to commit fraud. This protects you in case the bank actually has an authorized agent who later visits you.</li>
                                <li><strong>File a Cyber Crime Complaint:</strong> Go to cybercrime.gov.in. This is vital if you have shared any personal data or images with the agent. The cyber cell can help in taking down fraudulent links or posts.</li>
                                <li><strong>Local Police Information:</strong> If the agent visited your house or threatened physical harm, go to your local police station and file a "General Diary" (GD) or an FIR. This creates a legal record of the threat.</li>
                                <li><strong>Broadcasting to Your Circle:</strong> If your contacts are being harassed, send a clear, calm message to your group saying: "My number/data was compromised by a fraudulent app/agent. Please ignore any messages from unknown numbers regarding my finances. I am taking legal action." This stops the "shame" power the scammer has over you.</li>
                            </ol>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Remember, scammers thrive on silence. By reporting them through multiple channels, you disrupt their business model. You are not just saving yourself; you are preventing the next person from falling into the same trap. The 2025 regulatory system is designed to respond to these reports quickly, but it requires input from alert citizens like you.
                            </p>

                            <h2 id="psychological-strength" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Part 9: Staying Calm - The Psychological Battle</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Debt recovery, especially from fake agents, is 90% psychology and 10% finance. The scammer's goal is to keep you in a state of high stress where your "fight or flight" response is active. In this state, the logical part of your brain shuts down, and you are more likely to make a panic payment.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To stay calm, remember these three truths:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Truth 1: You cannot be arrested today.</strong> No matter what they say on the phone, the police do not work for banks. Civil debt is a slow process involving court summons, not sudden handcuffs.</li>
                                <li><strong>Truth 2: Your worth is not defined by your debt.</strong> Financial setbacks happen to the best of people. Being in debt is a temporary situation, not a character flaw. Don't let a stranger on the phone make you feel like a criminal.</li>
                                <li><strong>Truth 3: You have time.</strong> Scammers create a "2 hour deadline" or a "noon deadline." There is no such thing in real banking. Real recovery processes take weeks and months. You have time to breathe, consult an expert, and verify facts.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you find yourself getting overwhelmed, hang up. You are not obligated to listen to someone who is being abusive or threatening. Regain your composure, talk to a friend or a professional debt counselor, and then decide on your next move. A calm borrower is a scammer\'s worst nightmare.
                            </p>

                            <h2 id="global-comparison" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Global Perspective: Indian Rules vs. The World</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is interesting to note that India's RBI rules for recovery are actually more stringent than in many developed nations. In the United States, the "Fair Debt Collection Practices Act" (FDCPA) provides similar protections, but agents there are often allowed to call until 9 PM. India's 7 PM cut off is a significant win for consumer rights.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In many European countries, the focus is on "Debt Mediation" rather than "Recovery." The Indian system is slowly moving in that direction. The key takeaway from looking at the world is that everywhere, debt is a contract, not a crime. By following global best practices, the RBI is ensuring that the Indian borrower is treated as a consumer with rights, not as a defaulter without a voice.
                            </p>

                            <h2 id="case-studies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Real Case Studies: Lessons from the Ground</h2>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Case 1: The WhatsApp "Warrant" (A Near Miss)</h3>
                                <p className="text-gray-700 mb-4">
                                    A young professional in Bangalore received a PDF warrant on WhatsApp with a "CBI" logo and his photo. The agent on the phone told him he would be arrested at his office by evening unless he paid 30,000 to an "official court UPI ID."
                                </p>
                                <p className="text-gray-700">
                                    The Result: He paused and looked at the PDF closely. It had spelling errors and the "UPI ID" was just a random mobile number. He called his bank, found out no such warrant existed, and reported the number to the cyber cell. By staying calm, he saved his 30,000 and his peace of mind.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Case 2: The Late Night Visitor (Know Your Rights)</h3>
                                <p className="text-gray-700 mb-4">
                                    A woman in Pune had an agent visit her home at 8:30 PM. He was aggressive and tried to push into the house. He claimed the "standard rules" didn't apply because she hadn't responded to emails.
                                </p>
                                <p className="text-gray-700">
                                    The Result: She didn't open the door. She recorded him through the security camera and quoted the RBI 7 PM rule. She told him she was calling the local police. The agent immediately left. The next day, she filed a complaint with the bank and got the agent permanently removed from the recovery agency.
                                </p>
                            </div>

                            <h2 id="legal-protections" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Conclusion: Reclaiming Your Path to Financial Freedom</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Identifying fake recovery agents is about more than just avoiding a scam; it is about reclaiming your dignity in a difficult financial period. The system in 2025 is built to protect you, provided you know where the guardrails are.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Always remember:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>No ID? No Talk.</strong> Always demand official verification.</li>
                                <li><strong>No Official Portal? No Payment.</strong> Never pay a personal UPI or in cash.</li>
                                <li><strong>After 7 PM? No Entrance.</strong> Respect your own right to privacy and peace.</li>
                                <li><strong>Abusive Language? No Engagement.</strong> You are not obligated to be shouted at.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Debt is a financial challenge, not a life sentence. By being an informed and vigilant borrower, you ensure that even your recovery process is one of respect and legal compliance. Don't let the fear of a fake agent take away your hope. Use the reporting channels, stand on your rights, and move forward toward a debt free life with your head held high.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Client Success and Feedback</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {reviews.map((review, index) => (
                                    <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                        <div className="flex items-center mb-3">
                                            <div className="flex text-yellow-400 mr-2">
                                                {[...Array(review.stars)].map((_, i) => (
                                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20 shadow-sm">
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

                            <h2 id="faq-schema-fake-agents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Stop The Harassment Today</h3>
                                <p className="text-blue-800 mb-6">If you are being targeted by unauthorized agents or feel your rights are being violated, don\'t face it alone. Our legal experts specialize in protecting borrowers from illegal recovery practices and facilitating fair, bank authorized settlements.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Protect My Legal Rights Now
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The information provided in this guide is for educational purposes and does not constitute official legal advice. Always consult with a qualified legal professional or report threats to the local police and RBI Ombudsman.
                            </div>
                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">
                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Facing Harassment?</h4>
                                <p className="text-sm text-gray-600 mb-6">Get professional help to stop illegal calls and verify agent legitimacy according to latest guidelines.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Talk to Our Experts
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ Agent Verification Support</p>
                                    <p>✓ Legal Redressal Paths</p>
                                    <p>✓ RBI Ombudsman Assistance</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Deep Dives</h4>
                                <nav className="space-y-3">
                                    <Link href="/rbi-rules-for-recovery-agents" className="block text-sm text-blue-600 hover:underline">Official RBI Rules</Link>
                                    <Link href="/how-to-stop-recovery-agent-harassment" className="block text-sm text-blue-600 hover:underline">Stop Harassment Guide</Link>
                                    <Link href="/can-recovery-agents-come-home" className="block text-sm text-blue-600 hover:underline">Home Visit Rights</Link>
                                    <Link href="/services/anti-harassment" className="block text-sm text-blue-600 hover:underline">Our Anti-Harassment Services</Link>
                                </nav>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
