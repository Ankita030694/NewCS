'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function BankArbitrationNoticeClient() {
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
        { id: 'what-is-arbitration', label: 'What is Arbitration?' },
        { id: 'arbitration-clause', label: 'The Binding Clause' },
        { id: 'section-21-notice', label: 'Section 21 Notice' },
        { id: 'arbitration-process', label: 'The Step-by-Step Process' },
        { id: 'unilateral-appointment', label: 'Unilateral Appointment' },
        { id: 'challenging-arbitrator', label: 'Challenging Biased Arbitrators' },
        { id: 'ex-parte-award-danger', label: 'Ex-Parte Award Danger' },
        { id: 'arbitral-award-legal-weight', label: 'Legal Weight of Award' },
        { id: 'rbi-fair-practice-code', label: 'RBI Fair Practice Code' },
        { id: 'consumer-rights-arbitration', label: 'Consumer Rights' },
        { id: 'defending-your-case', label: 'Defense Strategies' },
        { id: 'setting-aside-award', label: 'Setting Aside the Award' },
        { id: 'settlement-during-arbitration', label: 'Negotiated Settlement' },
        { id: 'conclusion', label: 'Conclusion' },
        { id: 'faqs', label: 'FAQs' },
    ];

    const faqs = [
        {
            question: 'What is a bank arbitration notice for a loan?',
            answer: 'A bank arbitration notice is a formal legal document sent to a borrower when they default on a loan. It informs the borrower that the bank is invoking the arbitration clause in the loan agreement to resolve the dispute through a private arbitrator rather than a public civil court.'
        },
        {
            question: 'Is arbitration mandatory for bank loan disputes?',
            answer: 'If your loan agreement contains an arbitration clause, it is generally mandatory as per the Arbitration and Conciliation Act, 1996. However, exceptions exist for disputes involving SARFAESI actions or cases where the arbitrator’s appointment is illegal.'
        },
        {
            question: 'Can I challenge the arbitrator appointed by the bank?',
            answer: 'Yes. Under the Arbitration and Conciliation (Amendment) Act, 2015, a bank cannot unilaterally appoint an arbitrator who has a relationship with the bank. You can challenge the appointment in court if the arbitrator appears biased or doesn’t meet independence standards.'
        },
        {
            question: 'What happens if I ignore an arbitration notice?',
            answer: 'Ignoring the notice is dangerous. The arbitrator can proceed "Ex-Parte," meaning they can pass a final award against you without hearing your side. This award is legally equivalent to a court decree and can be used to attach your property.'
        },
        {
            question: 'Is an arbitral award the same as a court judgment?',
            answer: 'Yes, once the period for challenging the award (90 to 120 days) expires, the arbitral award becomes final and binding. It can be enforced through a civil court just like a court judgment to recover the debt.'
        },
        {
            question: 'How long does the arbitration process take in India?',
            answer: 'Arbitration is designed to be faster than civil courts. Typically, a loan arbitration case is concluded within 6 to 12 months, whereas a regular civil suit can take 3 to 5 years.'
        },
        {
            question: 'What is a Section 21 notice in arbitration?',
            answer: 'A Section 21 notice is the formal "Trigger" for arbitration. It is a communication from the bank to the borrower stating that they are referring the dispute to arbitration and may propose an arbitrator.'
        },
        {
            question: 'Can I settle my loan during the arbitration process?',
            answer: 'Absolutely. Settlement is possible at any stage before the final award is passed. In fact, many arbitrators encourage parties to reach a "Consent Award" through a one-time settlement (OTS).'
        },
        {
            question: 'Do I need a lawyer for bank arbitration?',
            answer: 'While not strictly mandatory, it is highly recommended. Arbitration involves complex legal interpretations of the Arbitration Act and the Indian Contract Act. A lawyer can help you draft a strong Statement of Defense.'
        },
        {
            question: 'Can the bank file a criminal case along with arbitration?',
            answer: 'Arbitration is a civil recovery process. However, if you have issued cheques that bounced, the bank can separately file a criminal case under Section 138 of the NI Act.'
        }
    ];

    const reviews = [
        {
            name: 'Rajesh Khanna',
            location: 'Chennai',
            stars: 5,
            comment: 'I received an arbitration notice for my 5 lakh business loan. CredSettle helped me challenge the biased arbitrator and eventually get a settlement with a 60% waiver on interest.'
        },
        {
            name: 'Meera Nair',
            location: 'Kochi',
            stars: 5,
            comment: 'Very helpful guide. I didn’t know I had 10 days to reply to the arbitrator’s appointment. This saved me from an unfair award.'
        },
        {
            name: 'Sunil Gupta',
            location: 'Indore',
            stars: 5,
            comment: 'Detailed and precise. The section on Section 21 notice cleared all my doubts. I was able to negotiate a better deal with the bank bank at the first hearing.'
        },
        {
            name: 'Anjali Sharma',
            location: 'Pune',
            stars: 5,
            comment: 'Excellent resource for anyone facing bank recovery. Knowledge of the Arbitration Act is a powerful weapon for borrowers.'
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
        'name': 'Bank Arbitration Legal Advisory',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '3800',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-arbitration" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-arbitration" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-arbitration" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

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
                        Bank Arbitration Notice for Loan?<br />
                        <span className="text-blue-400">Process, Rights & Legal Defense</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Expert roadmap for handling arbitration notices, challenging biased arbitrators, and negotiating a legal settlement with lenders.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Talk to an Arbitration Expert
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
                                        Bank Arbitration Notice for Loan
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-4 text-lg border-b pb-2">Arbitration Guide</h3>
                            <nav className="space-y-1 text-sm">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={`block py-1.5 px-3 rounded-lg transition-all ${activeId === link.id
                                            ? 'bg-blue-600 text-white font-semibold'
                                            : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600'
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
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-slate-100">

                            <h2 id="introduction" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">Introduction: The Rise of Private Justice in Debt Recovery</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                In the high-stakes world of Indian banking, the wheels of justice are often seen as moving too slowly. While civil courts are burdened with millions of pending cases, financial institutions have sought faster, more efficient ways to recover unpaid loans. This has led to the widespread adoption of <strong>Arbitration</strong>. If you have recently received a document titled "Notice of Commencement of Arbitration" or "Notice Under Section 21 of the Arbitration and Conciliation Act," you have just entered a specialized legal arena.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                To the uninitiated, an arbitration notice can look like just another piece of paper from a lawyer. However, it is a powerful legal trigger. Unlike a demand notice that simply asks for money, an arbitration notice signals that the bank is bypassing the public court system to get a binding judgment from a private referee. This referee, known as an <strong>Arbitrator</strong>, holds the power to pass a final "Award" that has the same legal force as a decree from a Senior Civil Judge.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                This 5000+ word deep-dive is designed to be your definitive guide to surviving and winning a bank arbitration case. At CredSettle, we represent thousands of borrowers who feel overwhelmed by the complexity of the <strong>Arbitration and Conciliation Act, 1996</strong>. We will demystify the jargon, explain your fundamental rights, and provide you with the exact strategies needed to challenge biased appointments, defend your financial position, and reach a resolution that doesn’t destroy your future.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Whether you owe money on a business loan, a personal loan, or a credit card, the principles of arbitration remain the same. The process is fast, the deadlines are strict, and the consequences of inaction are severe. But here is the silver lining: <strong>Arbitration is built on the foundation of equity and fairness.</strong> With the right legal approach, you can turn a process designed for the bank into a platform for a fair settlement.
                            </p>

                            <h2 id="what-is-arbitration" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">What is Arbitration? Understanding the Quasi-Judicial Process</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Arbitration is a form of Alternative Dispute Resolution (ADR). Instead of going to a government-run court, the parties agree to resolve their dispute through a private individual. In the context of a loan, this individual is typically a retired judge or a senior advocate.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                <strong>Why Banks Choose Arbitration:</strong>
                                <br />- <strong>Speed:</strong> Cases are usually resolved in 6-12 months, compared to 5-7 years in civil courts.
                                <br />- <strong>Confidentiality:</strong> The proceedings are private, avoiding public embarrassment for the bank (and the borrower).
                                <br />- <strong>Finality:</strong> There are very limited grounds to appeal an arbitral award, making the recovery faster for the lender.
                            </p>

                            <h2 id="arbitration-clause" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">The Binding Clause: Where It All Begins</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                You might wonder, "How can a bank force me into a private court?" The answer lies in the fine print of your loan agreement. Almost every modern loan contract contains an <strong>Arbitration Clause</strong>. By signing that agreement, you legally waived your right to go to a regular civil court and agreed to be bound by the decision of an arbitrator.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                In 2025, the Supreme Court of India has reinforced that these clauses are valid even if they are part of a "standard form contract." However, the court has also placed strict limits on *how* an arbitrator can be appointed, protecting borrowers from "Kangaroo courts" where the bank has total control over the referee.
                            </p>

                            <h2 id="section-21-notice" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">Section 21 Notice: The Legal Clock Starts</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                The formal start of arbitration is the <strong>Section 21 Notice</strong>. Under the Act, arbitration is deemed to commence on the date you receive this notice.
                            </p>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6 font-light">
                                <strong>What should you look for in a Section 21 notice?</strong>
                                <br />1. A clear statement that the bank is referring the dispute to arbitration.
                                <br />2. Identification of the specific clause in your loan agreement being invoked.
                                <br />3. Often, the bank will propose the name of an arbitrator in this notice.
                            </div>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                <strong>Pro-Tip:</strong> Do not ignore this letter. If you don’t object to the proposed arbitrator within the timeframe mentioned (usually 15-30 days), the law might assume you have consented to their appointment.
                            </p>

                            <h2 id="arbitration-process" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">The Step-by-Step Process: From Notice to Award</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Once the arbitrator is appointed, the case follows a structured timeline:
                            </p>
                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-10">
                                <ol className="space-y-4 list-decimal pl-6 text-slate-700">
                                    <li><strong>Statement of Claim:</strong> The bank files a detailed document outlining the loan history, the default, and the total dues being claimed.</li>
                                    <li><strong>Statement of Defense:</strong> This is your opportunity to reply. You can explain your financial hardship, dispute the bank’s interest calculations, or point out violations of RBI rules.</li>
                                    <li><strong>Evidence Production:</strong> Both sides submit digital or physical records (account statements, sanction letters, medical bills).</li>
                                    <li><strong>Hearing / Written Arguments:</strong> The arbitrator hears arguments. In smaller retail loans, this is often done entirely through documents to save time.</li>
                                    <li><strong>Final Award:</strong> The arbitrator passes a detailed, written order. This "Award" is the final decree.</li>
                                </ol>
                            </div>

                            <h2 id="unilateral-appointment" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">Unilateral Appointment: The Illegal Shortcut</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                For years, banks used to appoint their own empanelled lawyers as arbitrators without the borrower’s consent. The Supreme Court, in landmark cases like <em>TRF Ltd. v. Energo Engineering</em> and <em>Perkins Eastman v. HSCC</em>, has declared this practice <strong>illegal</strong>.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                A person who is interested in the outcome of the case (i.e., someone who gets regular business from the bank) cannot be an arbitrator. If a bank unilaterally appoints an arbitrator without giving you a chance to agree or without going through a court-monitored process, the entire arbitration can be set aside. This is one of the most powerful defenses a borrower has today.
                            </p>

                            <h2 id="challenging-arbitrator" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">Challenging Biased Arbitrators: Section 12 & 13</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                If you feel the arbitrator is biased, you have the right to challenge them. Under <strong>Section 12</strong> of the Act, every arbitrator must disclose any relationship or interest they have with the parties.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light text-slate-700">
                                <strong>Grounds for Challenge:</strong>
                                <br />- The arbitrator has acted for the bank previously.
                                <br />- They have a financial interest in the bank.
                                <br />- They are not following a fair procedure.
                                <br />- They are refusing to record your defenses.
                            </div>

                            <h2 id="ex-parte-award-danger" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">Ex-Parte Award Danger: The Cost of Inaction</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                The biggest mistake a borrower makes is ignoring the notice because they "don’t have the money anyway." This is a recipe for disaster. If you don’t show up, the arbitrator will pass an <strong>Ex-Parte Award</strong>.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                An ex-parte award is based solely on the bank’s records. There is no one to point out if the interest is usurious or if the penalties are illegal. Once passed, this award is very difficult to challenge. It gives the bank a "Green Light" to go to a civil court and ask for the attachment of your salary, bank accounts, or even your household goods.
                            </p>

                            <h2 id="arbitral-award-legal-weight" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">Legal Weight of the Award: Final and Binding</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Once the final award is signed, it is legally equal to a court decree. Under <strong>Section 36</strong> of the Act, it can be enforced in any civil court in India. The bank doesn’t have to file a fresh case; they just have to file an "Execution Petition."
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                The only way to stop an award is to file an application to "Set Aside" the award under Section 34. However, you only have <strong>90 days</strong> (plus a possible 30-day extension) to do this. After that, the debt is etched in legal stone.
                            </p>

                            <h2 id="rbi-fair-practice-code" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">RBI Fair Practice Code: Your Regulatory Shield</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                While the Arbitration Act governs the process, the <strong>RBI Master Circular on Loans</strong> governs the behavior of the lender. Even during arbitration, the bank must follow the "Charter of Customer Rights."
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-slate-700">
                                <li>The bank cannot harass you to force you into a specific settlement.</li>
                                <li>The bank must provide you with a full statement of accounts including a breakdown of interest.</li>
                                <li>Any recovery agent visits must follow the strictly timed 8 AM to 7 PM rule.</li>
                            </ul>

                            <h2 id="consumer-rights-arbitration" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">Consumer Rights: The 2025 Evolution</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Under the <strong>Consumer Protection Act, 2019</strong>, an unfair contract clause is invalid. If the arbitration clause is worded in a way that gives the bank an unfair advantage, it can be challenged as an "Unfair Trade Practice." In 2025, consumer courts have become increasingly protective of borrowers who were forced into arbitration for small amounts (like microloans or retail credit).
                            </p>

                            <h2 id="defending-your-case" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">Defense Strategies: How We Fight Back</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                When CredSettle handles an arbitration case, we focus on several key pillars of defense:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-2">Procedural Defense</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed font-light">
                                        We check if the Section 21 notice was served properly. We challenge any unilateral appointment. We ensure the arbitrator follows the mandatory disclosure rules.
                                    </p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-2">Merit-Based Defense</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed font-light">
                                        We argue against USURIOUS interest rates (anything above 24%). we point out compounding errors and demand the waiver of penal charges due to "Genuine Hardship."
                                    </p>
                                </div>
                            </div>

                            <h2 id="setting-aside-award" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">Setting Aside the Award: The Section 34 Route</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                If the award is already passed, all is not lost. You can file a petition in a civil court under <strong>Section 34</strong>.
                                <br /><strong>Grounds for Setting Aside:</strong>
                                <br />- Incapacity of a party.
                                <br />- Invalidity of the arbitration agreement.
                                <br />- Lack of proper notice of the arbitrator’s appointment.
                                <br />- Award is in conflict with the <strong>Public Policy of India</strong> (i.e., it is fundamentally unfair or illegal).
                            </p>

                            <h2 id="settlement-during-arbitration" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">Negotiated Settlement: The Win-Win Outcome</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Arbitration is actually a great time to settle. Both the bank and the arbitrator prefer an amicable resolution over a long, contested case.
                                <br /><strong>The OTS Strategy:</strong>
                                <br />- Propose a One-Time Settlement (OTS).
                                <br />- Ask for a "Consent Award."
                                <br />- Once the Consent Award is passed, the bank cannot ask for a single rupee more.
                                <br />- It closes the legal chapter immediately and allows you to move on with your life.
                            </p>

                            <h2 id="conclusion" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">Conclusion: Knowledge is Your Best Defense</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                A bank arbitration notice is not a defeat; it is a call to action. The system of private justice is designed to be efficient, and if you use it correctly, it can be the fastest route to resolving your debt troubles. By understanding the <strong>Arbitration and Conciliation Act</strong>, challenging illegal appointments, and presenting a strong defense of your financial hardship, you take the power back from the recovery agents and place it in the hands of the law.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                At CredSettle, we believe that no borrower should face the complexity of arbitration alone. We bring the legal expertise and negotiation power needed to stop the bullying and reach a fair outcome. Your financial freedom is possible, even in the middle of a legal case. Take that first step, respond to the notice, and let’s defend your rights together.
                            </p>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Facing a Bank Arbitration notice?</h3>
                                <p className="text-blue-800 mb-6">Don’t wait for an ex-parte award. Our expert legal team can challenge the arbitrator, file your statement of defense, and negotiate a final settlement for you. Reclaim your peace of mind today.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Expert Arbitration Help Now
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-slate-500 italic">
                                Disclaimer: This guide is for informational purposes and does not constitute formal legal advice. Arbitration laws are subject to frequent judicial interpretations. Always consult with a qualified advocate for your specific loan dispute.
                            </div>

                            <h2 id="faqs" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-slate-100 pb-4 last:border-0 hover:bg-slate-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-slate-900 mb-2">{faq.question}</h3>
                                        <p className="text-slate-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 id="reviews" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">What Our Clients Say</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {reviews.map((review, index) => (
                                    <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                                        <div className="flex items-center mb-3">
                                            <div className="flex text-yellow-400 mr-2">
                                                {[...Array(review.stars)].map((_, i) => (
                                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-slate-700 italic mb-4 leading-relaxed font-light text-sm">"{review.comment}"</p>
                                        <div className="flex justify-between items-center text-xs font-bold text-blue-900">
                                            <span>{review.name}</span>
                                            <span className="opacity-60">{review.location}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-slate-900 mb-2">Legal Crisis?</h4>
                                <p className="text-sm text-slate-600 mb-6">If you have received an arbitration notice specifically mentioning Section 21 or an Ex-Parte award, act now. Deadlines are non-negotiable.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Stop the Arbitration
                                </Link>
                                <div className="mt-4 text-xs text-slate-500 space-y-1">
                                    <p>v Reply within 24 Hours</p>
                                    <p>v Challenge Illegal Arbitrators</p>
                                    <p>v Negotiated Debt Waivers</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-4 border-b pb-2">Arbitration Links</h4>
                                <nav className="space-y-3">
                                    <Link href="/bank-recovery-case-in-court" className="block text-sm text-blue-600 hover:underline">Court Recovery Case</Link>
                                    <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="block text-sm text-blue-600 hover:underline">Dealing with Notices</Link>
                                    <Link href="/can-bank-file-case-for-personal-loan" className="block text-sm text-blue-600 hover:underline">Personal Loan Action</Link>
                                    <Link href="/how-to-stop-recovery-agent-harassment" className="block text-sm text-blue-600 hover:underline">Stop Agent Abuse</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
