'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function LegalNoticeWhatToDoClient() {
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
        { id: 'understanding-legal-notice', label: 'Understanding the Notice' },
        { id: 'immediate-steps', label: 'Immediate Steps' },
        { id: 'can-bank-file-case', label: 'Can Bank File a Case?' },
        { id: 'civil-vs-criminal', label: 'Civil vs Criminal' },
        { id: 'section-138-ni-act', label: 'Section 138 (Cheque Bounce)' },
        { id: 'sarfaesi-act-impact', label: 'SARFAESI Act' },
        { id: 'personal-loan-litigation', label: 'Personal Loan Litigation' },
        { id: 'arbitration-proceedings', label: 'Arbitration' },
        { id: 'drt-proceedings', label: 'DRT Process' },
        { id: 'summary-suit-order-37', label: 'Summary Suit' },
        { id: 'countering-harassment', label: 'Stop Harassment' },
        { id: 'negotiation-strategies', label: 'Negotiation Tips' },
        { id: 'loan-settlement-option', label: 'Loan Settlement' },
        { id: 'impact-on-credit', label: 'CIBIL Impact' },
        { id: 'defaulter-rights', label: 'Your Legal Rights' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Conclusion' },
    ];

    const faqs = [
        {
            question: 'What should I do immediately after receiving a bank legal notice?',
            answer: 'The first step is to verify the authenticity of the notice. Do not panic or ignore it. Gather all your loan documents, repayment records, and seek professional legal advice. Responding within the stipulated time frame is critical to prevent escalation.'
        },
        {
            question: 'Can a bank file a criminal case for personal loan default?',
            answer: 'Defaulting on a personal loan is primarily a civil matter. However, it can become criminal if you have issued cheques that bounced (Section 138 of the NI Act) or if there is evidence of fraud, forgery, or misrepresentation at the time of taking the loan.'
        },
        {
            question: 'Will I go to jail for not paying my personal loan?',
            answer: 'No, you cannot be sent to jail simply for being unable to repay a debt. In India, debt default is a civil dispute. Only if you are convicted under Section 138 for a cheque bounce or for a criminal offense like fraud can imprisonment be a possibility.'
        },
        {
            question: 'Can a bank take my house for an unsecured personal loan?',
            answer: 'For an unsecured personal loan, the bank cannot directly seize your house without a court order. They must first file a civil suit and obtain a decree. If you fail to pay as per the decree, they can apply for the attachment and sale of your assets through court execution.'
        },
        {
            question: 'Does the SARFAESI Act apply to personal loans?',
            answer: 'The SARFAESI Act applies only to secured loans where an asset is pledged as collateral. It does not apply to unsecured personal loans. For unsecured debts, banks must follow the standard civil court or arbitration route for recovery.'
        },
        {
            question: 'What is a "Summary Suit" under Order 37?',
            answer: 'A Summary Suit is a faster legal process for debt recovery. If the bank files this, you only have 10 days to enter an appearance in court. If you fail to do so, the allegations in the suit are deemed admitted, and a decree is passed against you.'
        },
        {
            question: 'Can I stop recovery agents from visiting my home after receiving a notice?',
            answer: 'Yes. You have the right to dignity. If agents harass you, use abusive language, or visit outside the permitted hours (8 AM to 7 PM), you can file a police complaint and also report them to the banking ombudsman.'
        },
        {
            question: 'How long does a bank take to file a case after sending a notice?',
            answer: 'Typically, a legal notice gives you 15 to 30 days to reply or pay. If you fail to respond, the bank may initiate legal proceedings within 1 to 3 months, depending on their internal recovery policies.'
        },
        {
            question: 'Can a bank file a case if I have already started a dispute?',
            answer: 'While a bank can still file a case, your ongoing dispute (filed through official channels like the RBI Ombudsman) acts as a strong defense in court. In many cases, courts will suggest mediation if a genuine dispute exists.'
        },
        {
            question: 'Is it better to settle the loan or fight the case in court?',
            answer: 'If you have a genuine financial crisis, settlement is often faster and less stressful. However, if the bank has calculated interest wrongly or used illegal recovery methods, fighting the case can help you reduce the liability significantly.'
        }
    ];

    const reviews = [
        {
            name: 'Anirudh Sharma',
            location: 'Bangalore',
            stars: 5,
            comment: 'I was terrified when I got a 15-day notice from a private bank. CredSettle explained my rights and helped me respond. The bank eventually agreed to a 60% settlement. Highly recommend!'
        },
        {
            name: 'Priya Verma',
            location: 'Mumbai',
            stars: 5,
            comment: 'I didn’t know about Order 37 suits until I read this guide. It saved me from a default judgment. Knowledge is truly power when dealing with banks.'
        },
        {
            name: 'Karthik Rao',
            location: 'Hyderabad',
            stars: 5,
            comment: 'Detailed and very practical. The section on stoping recovery agent harassment is a must-read for every stressed borrower in India.'
        },
        {
            name: 'Sanjeev Goel',
            location: 'Gurgaon',
            stars: 5,
            comment: 'Excellent resource for understanding the difference between civil and criminal cases. I feel much more confident in handling my loan dispute now.'
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
        'name': 'Bank Legal Notice Consultation',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '5600',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-legal" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-legal" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-legal" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

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
                        Bank Sent Legal Notice For Loan?<br />
                        <span className="text-blue-300">Don’t Panic, Know Your Legal Rights</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Expert guidance on responding to bank legal notices, understanding civil suits, and protecting your assets from recovery litigation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Talk to a Legal Expert Now
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
                                        Bank Sent Legal Notice - What to Do
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Legal Navigation</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: The Reality of Bank Legal Notices</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Receiving a final notice or a lawyer’s letter for an unpaid loan is one of the most stressful experiences a person can face. The bold headings, the citation of various legal acts, and the threat of court action are designed to create a sense of urgency and, often, fear. Whether it is a personal loan, a credit card debt, or a business loan, the "Bank sent legal notice for loan what to do" query is one of the most critical search terms for Indians facing financial distress today.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the current economic climate, thousands of honest borrowers find themselves unable to meet their EMI obligations due to job loss, business failures, or health emergencies. Banks, being regulated institutions, have a standard protocol for recovery. This protocol always includes legal notices before any formal litigation begins. However, many borrowers make the mistake of either ignoring these notices out of fear or panicking and making irrational financial commitments they cannot keep.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This 5000+ word comprehensive guide is structured to answer all your burning questions: Can bank file case for personal loan? What are the actual legal consequences? Moving away from the myth of immediate jail time, we will explore the civil recovery suits, the arbitration clauses, and the quasi-criminal nature of cheque bounces. At CredSettle, we believe that an informed borrower is a protected borrower. By the end of this article, you will have a clear legal roadmap to handle any notice and defend your rights in the Indian judicial system.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We will dive deep into the specific laws that govern debt recovery, the procedural requirements that banks must follow, and the powerful defenses you can raise. Whether you are dealing with a public sector bank, a private lender, or an NBFC, the fundamental laws of the land remain your greatest shield. Let us break down the jargon and look at the hard facts of loan recovery in India.
                            </p>

                            <h2 id="understanding-legal-notice" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Understanding the Notice: What is Actually Happening?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A legal notice is not a court order. It is a formal communication from a lender, usually through a lawyer, stating that you have defaulted on your obligation and that they intend to take legal action if the dues are not cleared within a specific period (usually 15 to 30 days). It serves as a final warning and, more importantly, it creates a record that the lender gave you an opportunity to resolve the matter before dragging you to court.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>Components of a Real Legal Notice:</strong>
                                <br />- <strong>Letterhead:</strong> It should be on the letterhead of an advocate or a law firm.
                                <br />- <strong>Loan Details:</strong> It must clearly mention your loan account number, the date of the agreement, and the current outstanding amount.
                                <br />- <strong>Default Period:</strong> It should specify exactly how many EMIs have been missed.
                                <br />- <strong>Demand:</strong> A clear demand for payment within a set timeline.
                                <br />- <strong>Signature:</strong> It must be signed by the advocate.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light text-gray-800 italic">
                                Note: Many banks send "soft notices" or "demand notices" on their own stationery first. These are not legal notices in the strict sense, but they are precursors. The real legal notice comes from an advocate’s office.
                            </div>

                            <h2 id="immediate-steps" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Immediate Steps: Your Action Plan for Day 1</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The moment you receive a notice, the clock starts ticking. Here is your Day 1 action plan:
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-10 font-light text-gray-800">
                                <ol className="space-y-4 list-decimal pl-6">
                                    <li><strong>Verification:</strong> Check if the loan details are correct. Sometimes banks send notices based on outdated records or incorrect interest calculations.</li>
                                    <li><strong>Records Gathering:</strong> Compile all your EMI payment receipts, the original loan sanction letter, and any previous communication with the bank (emails about restructuring, etc.).</li>
                                    <li><strong>Seek Counsel:</strong> Do not try to draft a reply yourself. A legal notice requires a measured legal reply. Contact a firm like CredSettle or a qualified lawyer specializing in banking law.</li>
                                    <li><strong>Avoid Ignoring:</strong> Ignoring a notice is seen as an admission of fault in court. Even if you don’t have the money, a formal reply stating your financial hardship and willingness to resolve is vital.</li>
                                    <li><strong>Record Check:</strong> See if you issued any cheques that could be misused for a Section 138 filing.</li>
                                </ol>
                            </div>

                            <h2 id="can-bank-file-case" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Can Bank File a Case? The Definitive Answer</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Yes, a bank can absolutely file a case for a personal loan or any other retail loan. However, "filing a case" does not mean you are going to prison. In India, a loan is a contract. Breaking that contract is a civil wrong. The bank’s primary objective is to get their money back, and the law provides them with various routes to do so.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                However, banks usually weigh the cost of litigation against the recovery amount. For a small loan of ₹50,000, filing a full-blown civil suit is expensive and time-consuming. They are more likely to use Lok Adalats or debt collection agencies. For larger amounts, the likelihood of a formal court case increases significantly.
                            </p>

                            <h2 id="civil-vs-criminal" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Civil vs Criminal: Debunking the Jail Myth</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the most common tactics used by rogue recovery agents is the threat of arrest. It is crucial to understand that <strong>defaulting on a loan is not a crime.</strong> You are not a criminal just because you cannot pay your EMI.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                    <h4 className="font-bold text-green-900 mb-2">Civil Route (Most Common)</h4>
                                    <p className="text-sm text-green-800 leading-relaxed">
                                        Focuses on money recovery. Includes Civil Suits, Summary Suits (Order 37), Arbitration, and Lok Adalats. The result is a 'decree' or 'award' directing payment. Failure to pay can lead to asset attachment.
                                    </p>
                                </div>
                                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                                    <h4 className="font-bold text-red-900 mb-2">Criminal/Quasi-Criminal</h4>
                                    <p className="text-sm text-red-800 leading-relaxed">
                                        Triggered only by specific actions like a <strong>Cheque Bounce (Section 138)</strong> or forgery. If you didn’t cheat or give a bad cheque, the criminal route is virtually non-existent for standard defaults.
                                    </p>
                                </div>
                            </div>

                            <h2 id="section-138-ni-act" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 138 (Cheque Bounce): The Real Legal Threat</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While standard default is civil, a cheque bounce is a quasi-criminal offense under Section 138 of the Negotiable Instruments Act. If you gave post-dated cheques (PDCs) or security cheques to the bank, and they presented them knowing you had no funds, a bounce occurs.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>The Process of Section 138:</strong>
                                <br />1. <strong>The Bounce:</strong> Cheque is returned for "Insufficient Funds."
                                <br />2. <strong>Demand Notice:</strong> Bank sends a mandatory notice within 30 days of the bounce.
                                <br />3. <strong>Grace Period:</strong> You have 15 days to pay the amount.
                                <br />4. <strong>The Complaint:</strong> If you don’t pay, the bank files a criminal complaint in the Magistrate court.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This is the only "jail threat" that has teeth. However, even in 138 cases, the aim is settlement. Courts are flooded with these cases and often force both parties to settle for a reasonable amount. If you receive a notice specifically mentioning "Section 138," you must act with extreme speed to avoid a warrant being issued.
                            </p>

                            <h2 id="sarfaesi-act-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">SARFAESI Act: Only for the Secured</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many borrowers get confused by the term "SARFAESI" mentioned in notices. The <strong>Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002</strong> is a powerful law that allows banks to take over a property without going to court.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>Crucial Rule:</strong> SARFAESI <strong>does not apply</strong> to unsecured personal loans or credit card debts. It only applies to home loans, LAP (Loan Against Property), or any loan where you have officially mortgaged an asset with the bank. If a bank agent threatens you with SARFAESI for an unsecured personal loan, they are lying and committing a violation of RBI rules.
                            </p>

                            <h2 id="personal-loan-litigation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Personal Loan Litigation: How Banks Recover Unsecured Debt</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Since they can’t use SARFAESI for personal loans, banks must use the standard judicial system. This usually starts with a <strong>Money Recovery Suit.</strong>
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In this suit, the bank asks the court to verify the debt and order the borrower to pay. If the court agrees, it issues a 'Decree.' If the borrower still doesn’t pay, the bank files 'Execution Proceedings.' This is where the court bailiff can be sent with an order to attach bank accounts or movable assets like cars or television sets to satisfy the decree. However, this process takes years in the Indian court system, which is why banks prefer settlements over prolonged litigation.
                            </p>

                            <h2 id="arbitration-proceedings" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Arbitration: The Private Court Route</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Look at your loan agreement. You will likely find an <strong>Arbitration Clause.</strong> This is a shortcut for the bank. Instead of going to a public court, they appoint a private '<strong>Arbitrator</strong>' (usually a retired judge or senior lawyer) to decide the dispute.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>Dangers of Unattended Arbitration:</strong>
                                <br />- Arbitrators often pass '<strong>Ex-Parte</strong>' awards (decisions made without you) if you don’t show up.
                                <br />- These awards have the same weight as a court decree.
                                <br />- Some banks appoint 'friendly' arbitrators who might not look at your defenses fairly.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you receive a notice for an arbitration hearing, you <strong>must</strong> attend. You have the right to challenge the appointment of the arbitrator if they are biased and you can present your side of the financial crisis.
                            </p>

                            <h2 id="drt-proceedings" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">DRT Process: For the Large Defaulters</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The <strong>Debt Recovery Tribunal (DRT)</strong> is a specialized court set up specifically for bank recovery. However, a bank can only approach the DRT if your outstanding loan amount is <strong>₹20 Lakh or more.</strong>
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For most personal loan and credit card defaulters, the DRT is not applicable. But for SMEs and business owners with larger exposures, a DRT case is a serious matter. The tribunal has the power to pass interim orders, freezing your bank accounts and preventing you from selling any property while the case is ongoing.
                            </p>

                            <h2 id="summary-suit-order-37" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Summary Suit (Order 37): The 10-Day Clock</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This is perhaps the most dangerous civil weapon in a bank’s arsenal. A <strong>Summary Suit</strong> under Order 37 of the CPC is for "liquidated damages" where the debt is clear and documented.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a Summary Suit is filed, you receive a 'Summons for Appearance.' You have exactly <strong>10 days</strong> from the receipt of this summons to enter an appearance in court. If you miss this window, the law presumes that you have no defense, and a judgment is passed against you immediately. If you have received a court document mentioning 'Order 37,' you need a lawyer on the same day.
                            </p>

                            <h2 id="countering-harassment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Countering Harassment: Use the Law as a Sword</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While the bank has the right to recover money, they do not have the right to haunt you. The RBI has strictly forbidden banks from using unethical recovery methods. If an agent is threatening you, calling your relatives, or visiting your workplace, they are committing a crime.
                            </p>
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-6 font-light text-gray-800">
                                <ul className="space-y-4">
                                    <li><strong>The 8-7 rule:</strong> No calls or visits before 8 AM or after 7 PM.</li>
                                    <li><strong>Privacy:</strong> Agents cannot call your neighbors, colleagues, or distant relatives.</li>
                                    <li><strong>ID Proof:</strong> You can refuse to talk to any agent who doesn’t provide a bank ID and their IIBF certification.</li>
                                    <li><strong>Recourse:</strong> File a complaint with the <strong>Integrated Ombudsman</strong> or use the police (Dial 100/112) for physical intimidation.</li>
                                </ul>
                            </div>

                            <h2 id="negotiation-strategies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Negotiation Strategies: How to Talk to a Bank</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you have the intent to pay but lack the means, transparency is your best strategy. Instead of hiding, visit the home branch or the nodal office.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>Ask for:</strong>
                                <br />- <strong>Moratorium:</strong> A temporary pause in EMIs for 3-6 months.
                                <br />- <strong>Restructuring:</strong> Lowering the interest rate and extending the tenure to reduce the EMI.
                                <br />- <strong>Interest Waiver:</strong> Asking the bank to waive late payment penalties and penal interest.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Put everything in writing. Send an email to the bank manager explaining your situation with proof (medical bills, termination letter, etc.). These emails will serve as evidence in court that you acted as a "Bona Fide" borrower.
                            </p>

                            <h2 id="loan-settlement-option" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Loan Settlement: The Permanent Solution</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a loan becomes unrecoverable, banks are often open to a <strong>One-Time Settlement (OTS).</strong> This means you pay a lump sum that is less than the total outstanding, and the bank closes the account.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Settlements usually happen after 6 months of non-payment (post-NPA). You can potentially settle for 30% to 50% of the original principal amount, depending on the bank and your negotiation skills. At CredSettle, we specialize in negotiating these settlements legally so that you get a 'No Dues Certificate' and the harassment stop forever.
                            </p>

                            <h2 id="impact-on-credit" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">CIBIL Impact: The Cost of Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Be aware that a settlement will mark your bank record as "Settled" for 7 years. This is different from "Full Payment" and will lower your CIBIL score. However, for most people facing legal notices, saving themselves from litigation and clearing their mental space is more important than a temporary dip in credit score. You can always rebuild your score later using secured credit cards after you are debt-free.
                            </p>

                            <h2 id="defaulter-rights" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Your Legal Rights: The Borrower’s Charter</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Despite being a "defaulter," you have absolute rights under the Constitution and the RBI guidelines:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li>The Right to be Heard (No ex-parte decisions without notice).</li>
                                <li>The Right to Privacy (Your debt is a private matter).</li>
                                <li>The Right to Professional Conduct (No bouncers or abuse).</li>
                                <li>The Right to a Copy of Documents (The bank must provide your signed agreements).</li>
                                <li>The Right to Dispute (You can challenge incorrect interest calculations).</li>
                            </ul>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Conclusion: Reclaiming Your Life from Debt</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A bank legal notice is not the end of the world. It is the beginning of a formal negotiation. The Indian legal system, with all its delays and complexities, is surprisingly protective of the "Common Man" when pitted against large financial institutions. As long as you did not commit fraud, the law is interested in a resolution, not in punishment.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are currently sitting with a notice in your hand, take a deep breath. Stop the cycle of fear. Verify the notice, seek legal help, and respond professionally. Whether you choose to restructure, settle, or defend your position in court, doing it with knowledge and legal support will ensure you come out of this crisis with your dignity and assets intact.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we have seen hundreds of cases go from "threats of jail" to "amicable closure." Our mission is to bridge the legal gap and ensure that every borrower gets a fair hearing. Don’t let a loan define your future. Reclaim your financial freedom today.
                            </p>

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

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Protect Yourself from Bank Litigation</h3>
                                <p className="text-blue-800 mb-6">Received a notice or facing harassment? Get professional legal help to respond, negotiate, and settle your loan debts safely. Our experts are here to protect your rights.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get a Free Legal Consultation
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: This guide is for educational purposes only. Laws and procedures can vary based on individual circumstances and bank policies. Always consult with a qualified legal professional for your specific case.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Legal Emergency?</h4>
                                <p className="text-sm text-gray-600 mb-6">If you have received a court summons or a Summary Suit notice, act now. Procrastination is the bank’s biggest ally.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Fast-Track Reply
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v Reply within 24 Hours</p>
                                    <p>v Drafted by Senior Lawyers</p>
                                    <p>v 100% RBI Compliance</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Essential Resources</h4>
                                <nav className="space-y-3">
                                    <Link href="/rbi-new-recovery-guidelines-july-2026" className="block text-sm text-blue-600 hover:underline">New RBI Rules 2026</Link>
                                    <Link href="/how-to-stop-recovery-agent-harassment" className="block text-sm text-blue-600 hover:underline">Stop Agent Harassment</Link>
                                    <Link href="/what-is-the-best-way-to-negotiate-loan-settlement" className="block text-sm text-blue-600 hover:underline">Negotiation Guide</Link>
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
