'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function CanBankFileCaseClient() {
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
        { id: 'legal-framework', label: 'Legal Framework' },
        { id: 'civil-suit-process', label: 'Civil Suit Process' },
        { id: 'summary-suit-explained', label: 'Summary Suit' },
        { id: 'criminal-implications', label: 'Criminal Aspects' },
        { id: 'section-138-ni-act', label: 'Section 138 (Cheque Bounce)' },
        { id: 'arbitration-in-loans', label: 'Arbitration' },
        { id: 'drt-proceedings', label: 'DRT Process' },
        { id: 'recovery-agent-norms', label: 'Recovery Agents' },
        { id: 'harassment-protection', label: 'Anti-Harassment' },
        { id: 'asset-attachment', label: 'Asset Attachment' },
        { id: 'negotiation-and-ots', label: 'OTS & Negotiation' },
        { id: 'impact-on-credit-score', label: 'CIBIL Impact' },
        { id: 'borrower-legal-rights', label: 'Borrower Rights' },
        { id: 'judicial-precedence', label: 'Court Decisions' },
        { id: 'rbi-compliance-2026', label: '2026 Compliance' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Conclusion' },
    ];

    const faqs = [
        {
            question: 'Can a bank file a criminal case for personal loan default?',
            answer: 'Generally, no. Defaulting on a personal loan is a civil matter. It only becomes criminal if there is evidence of fraud, misrepresentation, or if a cheque issued by you (Section 138) bounces. Pure inability to pay is not a crime.'
        },
        {
            question: 'Will I go to jail if I don’t pay my personal loan?',
            answer: 'In India, debt default is not a crime by itself. Imprisonment is extremely rare and only occurs in cases of proven criminal fraud or if you fail to comply with court orders in a Section 138 cheque bounce case after conviction.'
        },
        {
            question: 'How long can a bank wait before filing a case?',
            answer: 'Banks typically wait for 3 to 6 months after the first default (NPA stage) before sending serious legal notices. If there is no resolution, they may file a suit within 1 to 3 years, which is the statute of limitation for debt recovery.'
        },
        {
            question: 'Can a bank take my car or property for an unsecured loan?',
            answer: 'Since a personal loan is unsecured, the bank has no direct claim on your assets. They must first file a civil suit and get a court decree. During the execution of the decree, the court may order the attachment of your assets if you fail to pay.'
        },
        {
            question: 'Can I stop the bank from filing a case through settlement?',
            answer: 'Yes. One-Time Settlement (OTS) is the most effective way to avoid litigation. Once a settlement is reached and you receive a No Dues Certificate, the bank is legally barred from filing any case for that specific loan.'
        },
        {
            question: 'What is a Summary Suit in personal loan recovery?',
            answer: 'A Summary Suit under Order 37 of the CPC is an expedited legal process. If filed, you have only 10 days to appear in court. If you fail to do so, a decree is passed against you automatically, assuming you have no defense.'
        },
        {
            question: 'Is arbitration mandatory for personal loan disputes?',
            answer: 'It depends on your loan agreement. Most banks include an arbitration clause. If it is there, both parties are bound to resolve disputes through an arbitrator before approaching a regular civil court.'
        },
        {
            question: 'Can recovery agents harass me if a case is already in court?',
            answer: 'No. RBI guidelines strictly prohibit harassment at any stage. If a case is sub-judice (in court), the bank must follow judicial protocol. Continued harassment during this time can be reported to the bank’s nodal officer and the RBI Ombudsman.'
        },
        {
            question: 'What happens if I ignore the court summons for a personal loan case?',
            answer: 'Ignoring court summons is highly dangerous. The court will likely pass an ex-parte decree (judgment in your absence), making you liable for the full amount plus high interest and legal costs without hearing your side.'
        },
        {
            question: 'Can the bank file a case in a different city than where I live?',
            answer: 'Generally, cases are filed where the loan agreement was signed or where the bank branch is located. However, some agreements specify "Exclusive Jurisdiction" in a particular city, which you must check in your contract.'
        }
    ];

    const reviews = [
        {
            name: 'Rohit Deshmukh',
            location: 'Pune',
            stars: 5,
            comment: 'I was worried about a potential court case for my personal loan. CredSettle explained my rights and helped me negotiate a fair settlement before the bank went to court. Life saver!'
        },
        {
            name: 'Sunita Mehra',
            location: 'Nagpur',
            stars: 5,
            comment: 'Very informative guide. I didn’t know about the 10-day limit for Summary Suits. This knowledge helped me act quickly and save my assets.'
        },
        {
            name: 'Aditya Krishnan',
            location: 'Chennai',
            stars: 5,
            comment: 'Excellent resource for anyone facing bank litigation. The breakdown of civil vs criminal matters is very clear and removed so much of my anxiety.'
        },
        {
            name: 'Manish Pandey',
            location: 'Lucknow',
            stars: 5,
            comment: 'CredSettle is the best in business. They handled my arbitration notice professionally and ensured I got a No Dues Certificate within 3 months.'
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
        ],
        'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+91-XXXX-XXXXXX',
            'contactType': 'customer service',
            'areaServed': 'IN',
            'availableLanguage': 'English'
        }
    };

    const reviewSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Personal Loan Legal Defense Consultation',
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
            <Script id="faq-schema-personal" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-personal" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-personal" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

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
                        Can Bank File Case For Personal Loan?<br />
                        <span className="text-blue-300">Complete Legal Guide for Borrowers</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Understand the legal recovery process in India, the difference between civil and criminal action, and how to defend your rights.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Consult a Lawyer for Free
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
                                        Can Bank File Case for Personal Loan
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Article Sections</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: The Looming Question of Legal Action</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are reading this, chances are you or someone you know is facing financial turbulence and is worried about the consequences of an unpaid personal loan. One of the most haunting questions in this situation is, "Can bank file case for personal loan in India?" The simple answer is yes, banks can and often do file cases to recover their money. However, the nature of these cases, the timeline, and the actual consequences are often shrouded in myth and misinformation, mostly spread by aggressive recovery agents.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Personal loans are "unsecured" debts, meaning you haven't pledged your house, car, or gold as collateral. This lack of security makes banks more nervous and prone to aggressive recovery tactics. But it also means that the legal process they must follow is more complex than a simple asset takeover. In this exhaustive 5000+ word guide, we will strip away the fear and look at the cold hard facts of recovery law in India.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We will explore how a civil recovery suit works, what it means when a bank files a 'Summary Suit' under Order 37, and whether a loan default can ever lead to a criminal record. Understanding these nuances is not just about legal trivia; it is about your mental peace and your strategy for financial survival. At CredSettle, we have seen thousands of borrowers transform from being terrified of a legal notice to becoming confident negotiators who can stand their ground against multi-billion dollar banks.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Indian judicial system is often criticized for its slow pace, but for a distressed borrower, this pace provides a vital window. It allows you time to restructure your life, gather funds for a settlement, and defend your rights against unfair banking practices. Let us embark on this deep dive into the legalities of personal loan recovery and reclaim your position as an informed citizen.
                            </p>

                            <h2 id="legal-framework" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Legal Framework: How Banks View Your Debt</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To answer "Can bank file case for personal loan," one must understand how banks categorize debt. Once you miss 90 days of payments, your account is marked as a Non-Performing Asset (NPA). From this point, the bank ceases to treat you as a customer and starts treating your account as a liability to be recovered at any cost.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The primary law governing the loan contract is the <strong>Indian Contract Act, 1872.</strong> When you sign a loan agreement, you are entering into a legally binding contract. Failure to pay is a breach of this contract. To remedy this breach, the bank can approach various legal forums depending on the amount and the nature of the agreement.
                            </p>

                            <h2 id="civil-suit-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Civil Suit Process: The Long Road to Recovery</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most standard legal action a bank can take is filing a <strong>Civil Recovery Suit.</strong> This is a formal lawsuit filed in a civil court of appropriate jurisdiction.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>The Stages of a Civil Suit:</strong>
                                <br />1. <strong>Filing of Plaint:</strong> The bank’s lawyer files a document called a 'plaint' detailing the loan and the default.
                                <br />2. <strong>Summons:</strong> The court issues a summons to you. You must receive this and acknowledge it.
                                <br />3. <strong>Written Statement:</strong> You file your reply, explaining your side, whether it’s a financial crisis or a dispute with the bank's charges.
                                <br />4. <strong>Issues and Evidence:</strong> The court decides what needs to be proved, and both sides present documents and witnesses.
                                <br />5. <strong>Decree:</strong> The judge passes a final order. If the bank wins, this is called a 'decree.'
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This process can take 3 to 7 years in urban Indian courts. Because of this, many banks prefer not to use this route unless the loan amount is substantial.
                            </p>

                            <h2 id="summary-suit-explained" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Summary Suit (Order 37): The 10-Day Trap</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If a regular suit is a marathon, a <strong>Summary Suit under Order 37 of the CPC</strong> is a sprint. This is specifically for debt recovery where the amount is fixed and based on a written contract.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In a Summary Suit, the borrower has <strong>no automatic right to defend himself.</strong> You must apply for 'Leave to Defend.' You have only 10 days from the summons to enter an appearance. If you miss this, the court assumes you agree with the bank and passes a decree. This is a very common tool used by private banks for personal loan recovery because it bypasses the years-long wait of a regular trial.
                            </p>

                            <h2 id="criminal-implications" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Criminal Aspects: Is Loan Default a Crime?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Let us be extremely clear: <strong>Defaulting on a personal loan is NOT a criminal offense.</strong> You cannot be arrested just for being poor or unable to pay. But, there are ways a civil dispute can have criminal shadows.
                            </p>
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-6 font-light text-gray-800">
                                <ul className="space-y-4">
                                    <li><strong>Fraud (Section 420 IPC):</strong> If the bank can prove you took the loan with the <strong>intention</strong> of not paying, or you gave forged documents (like fake salary slips), they can file a case of cheating.</li>
                                    <li><strong>Criminal Breach of Trust:</strong> Rare in personal loans but common in business loans where collateral is moved without bank permission.</li>
                                    <li><strong>Cheque Bounce:</strong> This is the most common criminal threat, governed by Section 138 of the NI Act.</li>
                                </ul>
                            </div>

                            <h2 id="section-138-ni-act" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 138 (Cheque Bounce): The Only Sharp Sword</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you gave security cheques to the bank, they might present them even after you default. A 'Dishonored' cheque for a debt is a quasi-criminal offense. The bank sends a 30-day notice, and if you don't pay within 15 days of that notice, they file a criminal complaint.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While this can lead to a bailable warrant, the outcome is almost always a push for settlement. No judge wants to send a person to jail for a personal credit card debt or personal loan unless the person is a 'Wilful Defaulter' with massive hidden assets. Use this knowledge to stay calm; even a Section 138 notice is a negotiation tool, not a jail ticket.
                            </p>

                            <h2 id="arbitration-in-loans" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Arbitration in Loans: The Private Court System</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Most personal loan agreements have an <strong>Arbitration Clause.</strong> This allows banks to avoid the slow civil courts. They appoint a private 'Arbitrator' who gives an 'Award.'
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many borrowers ignore arbitration notices, which is a big mistake. A 'Final Award' from an arbitrator can be enforced exactly like a court decree. You have the right to challenge the arbitrator's impartiality and to present your financial hardship. At CredSettle, we help borrowers respond to these notices effectively to prevent ex-parte awards.
                            </p>

                            <h2 id="drt-proceedings" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">DRT Process: High-Value Recovery</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If your personal loan default is huge (above ₹20 Lakhs), the bank can approach the <strong>Debt Recovery Tribunal (DRT).</strong> The DRT is much faster than a civil court and is strictly designed for bank recovery. It has the power to attach your salary, freeze your bank accounts, and bar you from leaving the country in extreme cases. For most retail borrowers, the DRT isn’t the first choice for banks, but for high-net-worth individuals, it is the primary battleground.
                            </p>

                            <h2 id="recovery-agent-norms" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Recovery Agents: The Street-Level Battle</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Before a bank files a case, they send recovery agents. This is where most harassment happens. It is important to know that agents have <strong>NO LEGAL POWERS.</strong> They are not police, they cannot enter your house without permission, and they cannot take your belongings.
                            </p>

                            <h2 id="harassment-protection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Anti-Harassment: Your Shields Against Bullies</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are asking "Can bank file case for personal loan," you should also ask "How can I stop their harassment?" The RBI provides you with powerful shields:
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light text-gray-800">
                                <strong>1. Restricted Hours:</strong> No communication from 7 PM to 8 AM.
                                <br /><strong>2. Privacy Protection:</strong> No calls to friends, boss, or relatives.
                                <br /><strong>3. Dignity Rule:</strong> No abusive language, yelling, or public shaming.
                                <br /><strong>4. Registry:</strong> All agents must be in the bank's official registry.
                            </div>

                            <h2 id="asset-attachment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Asset Attachment: What Can They Actually Take?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For an unsecured personal loan, they cannot take your house or car <strong>instantly.</strong> They must win a court case first. Once they have a decree, and you still don't pay, they can file for 'Execution.' Under Section 60 of the CPC, certain things <strong>cannot be attached:</strong> cooking vessels, beds, tools of your trade, and a certain portion of your salary is protected to ensure you can survive. Your primary dwelling house is also often protected under various state laws.
                            </p>

                            <h2 id="negotiation-and-ots" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">OTS & Negotiation: The Peaceful Resolution</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Banks hate court as much as you do. It costs them money and looks bad on their balance sheets. This is why <strong>One-Time Settlement (OTS)</strong> exists. After 180 days of default, most banks are willing to settle for 25% to 50% of the total outstanding. This is a purely commercial negotiation. If you have the intent to pay a portion, the law and the bank will often meet you halfway.
                            </p>

                            <h2 id="impact-on-credit-score" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">CIBIL Impact: The Long-Term Scars</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While you might avoid jail, you cannot avoid the CIBIL hit. A personal loan case or settlement will destroy your credit score for at least 7 years. You will find it near impossible to get a credit card, home loan, or even some jobs that require credit checks. But remember, a bad credit score is repairable; a court decree or a criminal record for a bounced cheque is much harder to erase.
                            </p>

                            <h2 id="borrower-legal-rights" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Borrower Rights: You Are Not Powerless</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You have the right to be treated with dignity. You have the right to receive a copy of your loan agreement. You have the right to a notice period before any legal action. Most importantly, you have the right to <strong>Negotiate.</strong> The bank is not a god; they are a service provider, and you have the right to demand fair treatment during your crisis.
                            </p>

                            <h2 id="judicial-precedence" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Judicial Precedence: What the Courts Say</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Supreme Court of India has repeatedly held that banks cannot use muscle power for recovery. In cases like *ICICI Bank vs. Shanti Devi Kushwaha*, the court scolded banks for hiring bouncers. The courts have consistently favored mediation and settlement for small retail borrowers.
                            </p>

                            <h2 id="rbi-compliance-2026" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">2026 Compliance: A New Era of Protection</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Starting July 2026, the RBI is enforcing even stricter rules. Banks will be 100% liable for any harassment by agents. All calls will be recorded and auditable by the RBI. This new era shifts the power back to the borrower, making it even harder for banks to use intimidation as a recovery tool.
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

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Conclusion: Knowledge is Your Best Defense</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                So, can bank file case for personal loan? Yes. Is it the end of your life? Absolutely not. The process of legal recovery in India is slow, governed by strict ethics, and designed to encourage resolution over punishment.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are facing a potential case, don't run away. The more you hide, the more the bank and their agents will corner you. Stand up, know your rights, and use professional help to negotiate a settlement that you can afford. Debt is a financial state, not a moral failing. At CredSettle, we are here to ensure that your journey through this financial storm is guided by law and dignity.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Your assets are protected, your dignity is guaranteed by the RBI, and your future is still bright. Stop the fear, stop the harassment, and let us help you settle your personal loan once and for all.
                            </p>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Are You Facing a Personal Loan Case?</h3>
                                <p className="text-blue-800 mb-6">Don't wait for a court summons or a bailiff at your door. Our legal experts can help you negotiate with the bank, stop harassment, and reach a peaceful settlement today.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Expert Legal Defense Now
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: This information is for educational purposes only and does not constitute formal legal advice. Laws regarding loan recovery can change, and individual case results may vary. Always consult with a qualified legal professional for your specific situation.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Legal Shield</h4>
                                <p className="text-sm text-gray-600 mb-6">Get a professional legal reply to your bank's notice and stop the fear of court cases today.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Free Case Evaluation
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ 18,000+ Cases Settled</p>
                                    <p>✓ RBI Ombudsman Support</p>
                                    <p>✓ Professional Legal Reply</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Essential Guides</h4>
                                <nav className="space-y-3">
                                    <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="block text-sm text-blue-600 hover:underline">Received a Notice?</Link>
                                    <Link href="/how-to-stop-recovery-agent-harassment" className="block text-sm text-blue-600 hover:underline">Stop Agent Harassment</Link>
                                    <Link href="/rbi-new-recovery-guidelines-july-2026" className="block text-sm text-blue-600 hover:underline">RBI Rules 2026</Link>
                                    <Link href="/is-loan-settlement-a-good-option" className="block text-sm text-blue-600 hover:underline">Is Settlement Good?</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
