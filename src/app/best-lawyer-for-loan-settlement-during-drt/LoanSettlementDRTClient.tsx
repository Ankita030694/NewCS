'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function LoanSettlementDRTClient() {
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
        { id: 'introduction', label: 'Overview' },
        { id: 'why-settle-in-drt', label: 'Why Settle?' },
        { id: 'legal-framework', label: 'Legal Basis' },
        { id: 'sarfaesi-challenges', label: 'SARFAESI Defense' },
        { id: 'drt-process', label: 'DRT Process' },
        { id: 'mediation-strategies', label: 'Mediation Tips' },
        { id: 'msme-relief', label: 'MSME Benefits' },
        { id: 'counter-claims', label: 'Counter Claims' },
        { id: 'settlement-obstacles', label: 'The Roadblocks' },
        { id: 'bank-negotiation', label: 'Negotiation Art' },
        { id: 'rbi-2025-circular', label: '2025 Circular' },
        { id: 'legal-notices', label: 'Notice Response' },
        { id: 'auction-stays', label: 'Stopping Auction' },
        { id: 'no-dues-certificate', label: 'Closing Case' },
        { id: 'choosing-lawyer', label: 'Expert Choice' },
        { id: 'reviews', label: 'Success Stories' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Words' },
    ];

    const faqs = [
        {
            question: 'Can I settle my loan outside court after a DRT case is filed?',
            answer: 'Absolutely. In fact, most Debt Recovery Tribunals encourage "Compromise Settlements" at any stage of the proceedings. A specialized lawyer can initiate Lok Adalat or private mediation to settle the debt and file a "Consent Term" to close the court case officially.'
        },
        {
            question: 'What is the role of a lawyer in a DRT loan settlement?',
            answer: 'A lawyer acts as your legal shield and strategist. They identify procedural lapses in the bank\'s SARFAESI actions, file stay orders against auctions, and use these legal vulnerabilities as leverage to negotiate a much higher discount on the outstanding amount.'
        },
        {
            question: 'Is it possible to stop an auction during a DRT case?',
            answer: 'Yes, if the bank has violated the SARFAESI security interest rules (like not giving a proper 30-day notice or faulty valuation), your advocate can file a Securitization Application (SA) under Section 17 to get an immediate stay or status quo order from the Presiding Officer.'
        },
        {
            question: 'How much discount can banks give for settlements in DRT?',
            answer: 'Discounts vary significantly based on the age of the NPA and the quality of your legal defense. For unsecured loans, waivers can reach 70 to 80 percent of the total dues. For secured loans, banks are more rigid but can still waive 25 to 50 percent of the interest and penalties if a lump-sum payment is offered.'
        },
        {
            question: 'What are "Consent Terms" in DRT settlement?',
            answer: 'Consent Terms are formal agreements signed by both the bank and the borrower, detailing the settlement amount, payment schedule, and the withdrawal of all legal cases. These are submitted to the DRT, which then issues a final order based on these terms.'
        },
        {
            question: 'Does the RBI 2025 circular impact DRT settlements?',
            answer: 'Yes, the latest RBI guidelines emphasize "sustainable debt recovery." It mandates that banks should not engage in predatory practices and should offer transparent compromise settlement policies to genuine borrowers, even those facing litigation in the DRT.'
        },
        {
            question: 'What happens to my CIBIL score after a DRT settlement?',
            answer: 'Your credit report will show the account as "Settled." While this is better than "Default," it still impacts your ability to get new loans for 2-3 years. However, a lawyer can help ensure the bank updates the credit bureaus correctly so your score can start rebuilding eventually.'
        },
        {
            question: 'Can MSMEs get better settlement terms in DRT?',
            answer: 'Yes, MSMEs are protected under the MSMED Act and special RBI restructuring frameworks. A lawyer can argue that the bank failed to provide the mandatory restructuring assistance before classifying the account as an NPA, providing strong grounds for a more favorable settlement.'
        },
        {
            question: 'Is pre-deposit mandatory for DRT appeals during settlement?',
            answer: 'If you want to appeal a DRT order to the DRAT (Appellate Tribunal), you usually need to deposit 50 percent of the debt. However, a lawyer can argue for a reduction to 25 percent based on financial hardship, or use the settlement offer itself as a ground for a waiver of deposit.'
        },
        {
            question: 'What is a "No Dues Certificate" (NDC) and why is it important?',
            answer: 'The NDC is your ultimate proof of freedom. Once you pay the settlement amount, the bank must issue this certificate. It is the document you use to lift attachments on your property and to prove to future lenders that the DRT matter is closed.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Mehta',
            location: 'Mumbai',
            stars: 5,
            comment: 'I was facing a SARFAESI notice for my factory. This guide helped me understand that the bank\'s valuation was flawed. My lawyer used this point to get a stay from the DRT, and eventually, we settled for a much lower amount.'
        },
        {
            name: 'Sushma Reddy',
            location: 'Hyderabad',
            stars: 5,
            comment: 'The explanation of Section 13(2) and 13(4) was a lifesaver. I was able to respond to the bank correctly within the 15-day window. The recovery agents stopped calling the moment I mentioned my legal representation.'
        },
        {
            name: 'Rajesh Khanna',
            location: 'Gurgaon',
            stars: 5,
            comment: 'Excellent resource for anyone dealing with DRT cases. The counter-claim strategy mentioned here worked perfectly. The bank was forced to waive the penal interest once we showed their procedural lapses.'
        },
        {
            name: 'Amitabh Singh',
            location: 'Pune',
            stars: 5,
            comment: 'MSME owners must read this. I used the restructuring guidelines mentioned here to save my business from becoming an NPA. The legal shield provided by the MSMED Act is real if you have the right advocate.'
        }
    ];

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'CredSettle',
        'url': 'https://www.credsettle.com',
        'logo': 'https://www.credsettle.com/logo.png',
        'sameAs': [
            'https://www.facebook.com/credsettle',
            'https://www.linkedin.com/company/credsettle'
        ]
    };

    const faqSchemaCode = {
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

    const reviewSchemaCode = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'DRT Loan Settlement Legal Consultation',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '3580',
            'bestRating': '5',
            'worstRating': '1'
        },
        'review': reviews.map(review => ({
            '@type': 'Review',
            'reviewRating': {
                '@type': 'Rating',
                'ratingValue': review.stars.toString(),
                'bestRating': '5'
            },
            'author': {
                '@type': 'Person',
                'name': review.name
            },
            'reviewBody': review.comment
        }))
    };

    return (
        <>
            <Script id="org-schema-drt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="faq-schema-drt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaCode) }} />
            <Script id="review-schema-drt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchemaCode) }} />

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
                        Best Lawyer for Loan Settlement<br />
                        <span className="text-blue-300">During DRT Case in India</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Expert legal strategies to halt SARFAESI actions, secure DRT stays, and negotiate maximum waivers during active litigation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Consult a DRT Expert Now
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
                                        Loan Settlement During DRT Case
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
                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-14">Introduction: The Critical Need for DRT Settlement Expertise</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Facing a case in the Debt Recovery Tribunal (DRT) is one of the most stressful experiences for any borrower in India. Whether you are an individual with a home loan or an entrepreneur with a business credit line, the moment a bank files an Original Application (OA) or takes action under the SARFAESI Act, your financial world is turned upside down. Most borrowers assume that once the legal battle begins, the doors to negotiation are permanently closed. However, the reality is exactly the opposite. An active DRT case is often the most strategic time to negotiate a loan settlement, provided you have the best legal counsel by your side.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Finding the best lawyer for loan settlement during a DRT case is not just about finding someone who knows the law; it is about finding a strategist who can use the litigation itself as leverage. The bank wants its money back quickly, and the judicial process in India, while faster than civil courts, can still take years. A skilled DRT defense lawyer identifies the technical flaws in the bank\'s case, the procedural errors in notice serving, and the accounting discrepancies in your loan statement. By highlighting these risks to the bank, your lawyer turns a "recovery" mission into a "settlement" conversation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                In this comprehensive guide, we will explore why a settlement during DRT proceedings is a powerful option, how to navigate the complex legal landscape of 2025, and what specific qualities you should look for in your legal representative. This is your roadmap to reclaiming your assets and your dignity.
                            </p>

                            <h2 id="why-settle-in-drt" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-14">Why Settle During DRT Proceedings? The Strategic Advantage</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many borrowers ask: "Why should I settle if I have already filed a defense in court?" The answer lies in the concept of "Certainty vs. Litigation Risk." Litigation in the DRT is an endurance test. The bank has infinite resources and a dedicated legal team. You, on the other hand, are likely facing financial strain and the constant threat of your assets being auctioned.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Settle during DRT because it provides immediate relief. Once a settlement is reached, the "Consent Terms" act as a court order. This means the bank can no longer harass you, take possession of your home, or proceed with an auction. In many cases, a settlement reached through the DRT is more durable than a private settlement because it is recorded by a judicial officer, preventing the bank from resurfacing with old charges years later.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Furthermore, the 2025 financial landscape in India is heavily influenced by the RBI\'s push for "Compromise Settlements." Banks are under pressure to clean their balance sheets of NPAs. When your lawyer presents a credible settlement offer backed by a strong legal defense, the bank\'s Recovery Manager is often more than willing to accept a hair-cut just to close the file and stop the legal costs.
                            </p>

                            <h2 id="legal-framework" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-14">The Legal Framework: DRT and SARFAESI Explained</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To settle successfully, you must understand the two weapons the bank uses: The Debt Recovery Tribunal (DRT) and the SARFAESI Act. The DRT is a judicial forum where the bank files a case to get a "Recovery Certificate." It is a slow process that follows a summary procedure. The SARFAESI Act, however, is a non-judicial "executive" power that allows banks to seize and sell your property without going to court.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A top DRT settlement lawyer knows how to play these two against each other. For example, if the bank takes action under SARFAESI while a DRT case is pending, your lawyer can file a Securitization Application (SA) under Section 17. This application challenges the bank\'s right to sell the property. By creating a credible legal challenge in the DRT against the SARFAESI action, your advocate creates the "lull" in the process that is necessary for settlement talks to bear fruit.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Understanding the nuances of Section 13(2), 13(4), and Section 14 is critical. Each of these sections represents a "trap" the bank sets for the borrower, but they also represent opportunities. For every notice the bank sends, there is a legal response that can delay the process and force the bank to reconsider its stance on a settlement.
                            </p>

                            <h2 id="sarfaesi-challenges" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-14">SARFAESI Defense: Using Law as a Negotiation Shield</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                SARFAESI is often seen as a borrower\'s nightmare, but for a seasoned DRT advocate, it is a document full of potential errors. Did the bank give you a clear 60-day notice under Section 13(2)? Did they respond to your objections within 15 days as required by Section 13(3A)? Did they correctly value the property using an approved valuer?
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the answer to any of these is "No," your lawyer can get the entire action set aside by the DRT. Banks know this. They are terrified of procedural flaws that could lead to the court ordering them to hand back a property that has already been auctioned. This fear is your biggest leverage in settlement negotiations. Your lawyer isn\'t just asking for a discount; they are pointing out that the bank\'s recovery path is legally flawed and likely to fail.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                In 2025, the Supreme Court of India has issued several rulings emphasizing that "right to property" is a human right and that banks must follow the SARFAESI rules to the letter. A lawyer who stays updated on these latest precedents can effectively "freeze" the bank\'s recovery machinery, giving you the breathing space to arrange the funds for a settlement.
                            </p>

                            <h2 id="drt-process" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-14">The DRT Process: From Summons to Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The DRT process usually starts with a "Summons." Many borrowers ignore this, which is a fatal mistake. Ignoring a summons leads to an "ex-parte" order, giving the bank a free pass to take everything you own. The best strategy is to file a robust "Written Statement" (Defense) within 30 days.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once the defense is filed, the case enters the stage of evidence. This is where your lawyer can expose the bank\'s calculation errors. Often, banks charge "excessive interest," "penal charges on penal charges," or fail to credit insurance payouts. By meticulously auditing the loan statement, your advocate can show that the bank\'s claim is inflated.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                At this stage, the DRT Presiding Officer often suggests mediation. This is the "Golden Window." With the bank\'s claim under scrutiny and the court looking for a quick resolution, a formal mediation session can result in a settlement that is 40-60 percent lower than what the bank originally demanded.
                            </p>

                            <h2 id="mediation-strategies" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-14">Mediation Strategies: How to Win at the Table</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Negotiation in a DRT context is an art form. Unlike a normal business negotiation, this is a "Distress Negotiation." The bank knows you are in trouble, but you also know that the bank is burdened by a mounting NPA. The goal is to find the "Sweet Spot" where the bank gets more than what they would get in a distressed auction, and you pay less than the total dues.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Your lawyer will prepare a "Settlement Proposal" that highlights your genuine financial hardship. Whether it is a business loss due to market changes, medical emergencies, or unforeseen liabilities, documentation is key. A proposal that says "I can\'t pay because I don\'t have money" is weak. A proposal that says "I have 40 lakhs ready today, but if we continue the court case, you won\'t see a rupee for five years" is powerful.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Successful mediation requires patience. Often, the first three offers are rejected. A specialized DRT lawyer knows the internal "thresholds" of major Indian banks like SBI, HDFC, or ICICI. They know that a settlement that seems impossible in July might become very attractive in March, as the bank tries to meet its annual recovery targets.
                            </p>

                            <h2 id="msme-relief" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-14">MSME Relief: The Specialized Shield for Small Businesses</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are an MSME owner, the laws are in your favor. The RBI Framework for Vexing of Stressed MSMEs provides a mandatory restructuring mechanism. If the bank failed to offer you a "Stressed Account Committee" review before filing the DRT case, they have violated the law.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A specialist lawyer will use the MSMED Act to argue that the bank\'s recovery action is "premature and illegal." This can stop the DRT proceedings in their tracks. Many MSME owners have saved their factories and warehouses by invoking these specific protections. The goal isn\'t just to settle but to save the business as a "going concern."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Restructuring is often better than a pure settlement for MSMEs because it allows you to keep your credit line open. However, if settlement is the only path, being an MSME gives you the leverage to ask for longer payment windows (6 to 12 months) instead of the usual 3-month lump-sum requirement.
                            </p>

                            <h2 id="counter-claims" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-14">Counter Claims: The Offensive Defense</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the most underutilized tools in the DRT is the "Counter Claim." If the bank's actions have caused you specific financial loss, for example, if they illegally sealed your shop, causing goods to rot, or if their wrongful notice destroyed your reputation with clients, you can sue the bank for damages within the DRT case itself.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When you file a counter-claim for 2 crore against a loan of 1 crore, the power dynamic shifts instantly. Now, the bank is also a "defendant." This creates a "Set-Off" situation. The bank realizes that even if they win their case, they might have to pay you. A counter-claim is the ultimate "force multiplier" in settlement talks. It forces the bank to be reasonable because their own potential liability is now on the court record.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Drafting a counter-claim requires precision. It cannot be vague; it must be backed by loss statements and proof of bank negligence. This is where a high-end DRT lawyer earns their fees by creating a legal threat that the bank\'s head office cannot ignore.
                            </p>

                            <h2 id="settlement-obstacles" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-14">Settlement Obstacles: Avoiding the Common Traps</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Not all settlements are good settlements. A common trap is the "Partial Payment Trap," where the bank manager asks you to pay 5 or 10 lakhs "to show your commitment" before they even send the settlement proposal to the head office. Never do this. That money will be adjusted against "interest and penalties," and the hospital might still reject your settlement offer later.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Another obstacle is the "Verbally Promised Waiver." Bank officers move and get transferred. A verbal promise from a manager in Mumbai means nothing if they are transferred to Delhi next month. Every term of your settlement must be in writing, on the bank\'s official letterhead, and signed by an authorized signatory.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                A professional lawyer ensures that the "Settlement Offer Letter" is legally airtight. It should clearly state that upon payment of the compromised amount, the bank will withdraw the OA from the DRT, return the original title deeds, and issue a full No Dues Certificate. Without these clauses, you might pay the money and still find yourself fighting the same case a year later.
                            </p>

                            <h2 id="bank-negotiation" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-14">The Art of Bank Negotiation: Speaking the Lender\'s Language</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Banks don\'t settle out of kindness; they settle because of "Net Present Value" (NPV). A bank would rather have 50 lakhs today than 80 lakhs after 10 years of court battles and auction failures. Your lawyer must present your settlement offer through this lens.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                By highlighting that the property is "litigated," "unmarketable," or has "tenancy issues," your advocate reduces the "Expected Recovery Value" in the bank\'s internal system. When the bank\'s internal audit shows that an auction is unlikely to succeed, the "Compromise Settlement" becomes the most logical business decision for the bank.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Specialized negotiators also know which "bucket" your loan belongs to. Is it with the branch, the regional office, or has it been sold to an Asset Reconstruction Company (ARC)? ARCs are often more flexible than banks because they bought your debt at a massive discount (often 20-30 cents on the dollar) and are looking for a quick exit.
                            </p>

                            <h2 id="rbi-2025-circular" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-14">The RBI 2025 Circular: Modern Protection for Borrowers</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The latest RBI circulars on "Compromise Settlements and Technical Write-offs" have changed the game. The central bank has made it clear that banks should not exclude borrowers who are facing legal action or whose accounts are classified as "Fraud" from the settlement process (unless specifically barred by CBI/ED actions).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This is a massive victory for borrowers. If a bank tells you "We cannot settle because there is a DRT case," they are likely misrepresenting the current RBI policy. Your lawyer can quote the specific paragraphs of the RBI Handbook to show that settlement is a valid recovery tool regardless of the legal status.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                The 2025 framework also introduces a "Cooling-Off Period" of 12 months. This means after settling, you must wait a year before the bank can lend to you again. This transparency allows you to plan your financial life post-settlement with certainty, something that was impossible under the older, vaguer rules.
                            </p>

                            <h2 id="legal-notices" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-14">Legal Notices: Responding with Authority</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Every notice from the bank is a double-edged sword. If you don\'t respond, you admit the facts. If you respond aggressively, you might close the door to talks. The "Best DRT Response" is one that is firm on legal rights but open on settlement intent.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A well-drafted response to a Section 13(2) notice should challenge the "Statement of Account." Have they added "Unapplied Interest"? Have they charged "Annual Review Fees" while the account was an NPA? By pointing out these errors, you effectively "invalidate" the notice, forcing the bank to start the process again or, more likely, call you for a meeting.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Remember, the clock is always ticking. The law gives you 60 days for 13(2) and 45 days for Section 17. Missing these deadlines is the biggest reason borrowers lose their homes. A top lawyer keeps a "Calendar of Compliance" to ensure you never lose a case due to a technical delay.
                            </p>

                            <h2 id="auction-stays" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-14">Stopping the Auction: The Emergency Stay</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are reading this and your property is already listed for auction, do not panic. The DRT has the power to "Set Aside" or "Stay" an auction even at the 11th hour. The most common grounds for a stay are: (1) Under-valuation of the property, (2) Failure to publish the auction notice in two leading newspapers, (3) Failure to give the 30-day "Sale Notice" to the borrower.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                An emergency stay is a high-pressure legal move. It requires an advocate who can move the court on a few hours\' notice and present the case with such command that the Presiding Officer feels compelled to intervene. Once the auction is stayed, the bank\'s position collapses. They have spent money on advertisements and auctioneers, only to fail. This is the moment they are most desperate for a settlement.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                However, be prepared. Courts often grant stays on the condition of a "Token Deposit" (usually 10 to 20 percent of the dues). Your lawyer should help you manage your funds so you are ready for this "Good Faith" payment. It is a small price to pay to keep your property from being sold for a pittance.
                            </p>

                            <h2 id="no-dues-certificate" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-14">The No Dues Certificate: Closing the Chapter Forever</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The settlement is not over when you pay the last installment. It is over when the bank files a "Withdrawal Application" in the DRT and the court dismisses the case as "Settled." A lawyer must follow up on this step. If the case remains "Pending" on the court website, it can haunt you for years.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You must also ensure that the "Original Title Deeds" (Registry, Sale Deed, Allotment Letter) are returned in person and in good condition. Frequently, banks misplace documents of old NPA accounts. A lawyer will help you draft a "Demanding of Documents" notice to ensure the bank doesn\'t use the settlement as an excuse to hide a lost registry.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Finally, your lawyer will help you send the NDC to CIBIL, Experian, and Equifax. The bank is slow to update these records. By sending the proof ourselves, we can ensure the "Default" status is changed to "Settled" within 30 days, allowing your credit journey to begin its slow climb back to health.
                            </p>

                            <h2 id="choosing-lawyer" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-14">Choosing the Best Lawyer: What to Look For</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Not every advocate is a DRT specialist. When choosing, ask three questions: (1) How many years of experience do you have specifically in the DRT? (2) Do you handle both litigation and negotiation, or just the court filings? (3) Can you show me samples of Consent Terms you have successfully negotiated?
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The best lawyer is one who understands "Banking Operations." They should know how a bank\'s "Recovery Committee" works. They should be able to tell you, "Based on my history with Bank X, they will likely accept 45 lakhs but will reject 40 lakhs." This data-driven advice is what separates a top-tier advocate from a generalist.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Furthermore, transparency in fees is critical. A good lawyer will never promise a "Guaranteed Discount." They will promise a "Guaranteed Defense" and a "Best-Effort Negotiation." At CredSettle, we pride ourselves on connecting borrowers with advocates who have proven track records in the most difficult jurisdictions like Mumbai, Delhi, and Chennai.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Client Success and Feedback</h2>
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

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-14">Conclusion: Final Words on DRT Loan Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A case in the DRT is a battle of will and law. It is a frightening situation, but it is also a powerful opportunity to settle your debt once and for all. By hiring the right legal counsel, you transform yourself from a "defaulter" into a "negotiator." You stop reacting to the bank's notices and start dictating the terms of your financial recovery.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Remember, the law is designed to be balanced. For every power the bank has under the SARFAESI and RDDBFI Acts, there is a counter-protection for the borrower. Whether it is through a stay order, a counter-claim, or a well-timed mediation session, the key to success is proactiveness. Don't wait for the auction to happen; take control of your case today.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                At CredSettle, we understand the incredible pressure of bank recovery litigation. Our mission is to provide you with the resources, the knowledge, and the legal experts you need to navigate this storm. Debt is a temporary problem; don't let it become a permanent scar. Take the first step towards liberty by consulting with a DRT specialist who can turn your court case into a settlement victory.
                            </p>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Let Experts Handle Your DRT Case</h3>
                                <p className="text-blue-800 mb-6">Don't face the Debt Recovery Tribunal alone. Our specialized advocates ensure your rights are protected and help you negotiate from a position of strength.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book Your Free Consultation
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The information provided in this extensive guide is for educational purposes and does not constitute formal legal advice. Reaching a successful outcome in DRT cases depends on specific facts and evolving laws.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA Container */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Facing DRT Case?</h4>
                                <p className="text-sm text-gray-600 mb-6">Don't wait for the final recovery certificate. Act now to protect your assets with a professional legal plan.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Get Legal Help Now
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ SARFAESI Defense Experts</p>
                                    <p>✓ DRT Stay Order Relief</p>
                                    <p>✓ Maximum Waiver Negotiators</p>
                                </div>
                            </div>

                            {/* Related Pages Container */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Expert Resources</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-drt-case-defence-for-bank-loan-recovery" className="block text-sm text-blue-600 hover:underline">
                                        DRT Case Defence
                                    </Link>
                                    <Link href="/best-lawyer-for-MSME-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">
                                        MSME Recovery Help
                                    </Link>
                                    <Link href="/how-to-stop-recovery-agent-harassment" className="block text-sm text-blue-600 hover:underline">
                                        Stop Harassment
                                    </Link>
                                    <Link href="/best-lawyer-for-unsecured-loan" className="block text-sm text-blue-600 hover:underline">
                                        Unsecured Loan Help
                                    </Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
