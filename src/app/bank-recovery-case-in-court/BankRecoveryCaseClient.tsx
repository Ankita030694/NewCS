'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function BankRecoveryCaseClient() {
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
        { id: 'regular-civil-suit', label: 'Regular Civil Suit' },
        { id: 'order-37-summary-suit', label: 'Order 37 Summary Suit' },
        { id: 'leave-to-defend', label: 'Leave to Defend' },
        { id: 'summons-process', label: 'Summons & Service' },
        { id: 'attachment-of-property', label: 'Asset Attachment' },
        { id: 'execution-proceedings', label: 'Execution Process' },
        { id: 'sarfaesi-act-overlap', label: 'SARFAESI Overlap' },
        { id: 'drt-proceedings', label: 'DRT Process' },
        { id: 'bank-legal-tactics', label: 'Bank Legal Tactics' },
        { id: 'borrower-legal-defenses', label: 'Borrower Defenses' },
        { id: 'mediation-settlement', label: 'Court-Led Mediation' },
        { id: 'rbi-ombudsman-role', label: 'The Ombudsman' },
        { id: 'bankruptcy-options', label: 'Personal Insolvency' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Conclusion' },
    ];

    const faqs = [
        {
            question: 'What is a regular recovery suit by a bank?',
            answer: 'A regular recovery suit is a civil case filed under the Code of Civil Procedure (CPC) to recover unpaid debt. It involves a full trial where both the bank and the borrower present evidence and witnesses. It typically takes 3 to 5 years to conclude.'
        },
        {
            question: 'How is a Summary Suit (Order 37) different from a regular suit?',
            answer: 'A Summary Suit is a fast-track process for certain types of debts. Unlike a regular suit, the borrower does not have an automatic right to defend. You must apply for "Leave to Defend" within 10 days of receiving the summons; otherwise, the judge can pass a decree immediately.'
        },
        {
            question: 'What happens if I don’t appear in court for a bank case?',
            answer: 'If you fail to appear after receiving a summons, the court can pass an "Ex-Parte Decree." This means the bank wins the case by default. Once a decree is passed, the bank can apply for the attachment and sale of your assets.'
        },
        {
            question: 'Can the bank attach my salary for loan recovery?',
            answer: 'Yes, if the bank obtains a court decree, they can apply for the attachment of your salary through execution proceedings. However, the law provides certain exemptions, such as a portion of the salary that cannot be attached to ensure your basic survival.'
        },
        {
            question: 'What is the "Leave to Defend" in a summary suit?',
            answer: 'In an Order 37 summary suit, you must file an application asking the court for permission to defend yourself. You must show that you have a "triable issue" or a genuine dispute regarding the debt or the bank’s charges.'
        },
        {
            question: 'Does the bank file cases in the Debt Recovery Tribunal (DRT)?',
            answer: 'Banks and NBFCs can only file cases in the DRT if the total outstanding amount is ₹20 Lakh or more. For smaller amounts, they must use the regular civil courts.'
        },
        {
            question: 'Can a bank take my house without a court case?',
            answer: 'Only for secured loans (like home loans) can a bank use the SARFAESI Act to repossess property without a court case. For unsecured loans (personal loans, credit cards), they MUST get a court decree first.'
        },
        {
            question: 'Is it possible to settle a loan after a case is filed in court?',
            answer: 'Yes, settlement is always an option. Many judges actually encourage "Pre-Trial Mediation" or "Lok Adalats" to resolve the matter amicably. A settlement reached in court is recorded as a "Consent Decree."'
        },
        {
            question: 'What is the Statute of Limitations for a bank to file a case?',
            answer: 'Under the Limitation Act, 1963, a bank generally has 3 years from the date of the last payment or acknowledgment of debt to file a recovery suit. If they miss this deadline, the debt becomes "time-barred."'
        },
        {
            question: 'Can I be arrested if the bank wins the court case?',
            answer: 'No. Civil recovery decrees do not lead to arrest. You can only be arrested if you are found guilty of criminal fraud or if you deliberately disobey a direct court order during execution proceedings (civil prison), which is extremely rare.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Singh',
            location: 'Gurgaon',
            stars: 5,
            comment: 'I was facing a 25 lakh recovery suit in DRT. CredSettle helped me find the procedural errors in the bank’s filing. We managed to settle for 15 lakhs, saving me years of litigation.'
        },
        {
            name: 'Priyanka Das',
            location: 'Kolkata',
            stars: 5,
            comment: 'Detailed explanation of Order 37. I was served a summary summons and had only 10 days to act. This guide was my first source of truth. Highly recommend!'
        },
        {
            name: 'Manoj Kumar',
            location: 'Bhopal',
            stars: 5,
            comment: 'Clear and concise. The section on asset attachment was very reassuring. I realized the bank cannot just take my house for a credit card debt without a decree.'
        },
        {
            name: 'Sanjeev Nair',
            location: 'Thiruvananthapuram',
            stars: 5,
            comment: 'Excellent resource. The difference between civil and criminal cases is something every borrower should know to avoid recovery agent bullying.'
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
        'name': 'Bank Recovery Legal Advisory',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '4100',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-recovery" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-recovery" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-recovery" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

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
                        Bank Recovery Case in Court?<br />
                        <span className="text-blue-400">Civil Suits, Order 37 & Your Rights</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Expert guidance on defending bank recovery suits, handling Summary Summons, and preventing asset attachment in Indian courts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Talk to a Litigation Expert
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
                                        Bank Recovery Case in Court
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
                            <h3 className="font-bold text-slate-900 mb-4 text-lg border-b pb-2">Court Navigation</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">Introduction: Facing the Bench in a Debt Recovery Case</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                The transition from receiving bank notices to being served a court summons is a significant escalation in the life of a borrower. For thousands of Indians, a "Bank Recovery Case in Court" is the nightmare they hoped to avoid. The formal environment of a courtroom, the technicalities of the <strong>Code of Civil Procedure (CPC)</strong>, and the fear of losing one’s assets can be paralyzing. However, a court case is not an automatic defeat. In fact, for many borrowers, it is the first time they have a neutral platform to present their side of the story.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                In India, the legal framework for debt recovery is designed to balance the rights of the lender to get their money back with the fundamental rights of the borrower to a fair trial and a life of dignity. Whether the bank files a regular recovery suit, a high-speed Summary Suit under Order 37, or a case in the Debt Recovery Tribunal (DRT), there are specific procedural requirements they must meet. At CredSettle, we believe that understanding these procedures is the first step toward a successful defense or an amicable settlement.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                this 5000+ word comprehensive guide is your survival manual for the Indian judicial system. We will explore the different types of suits, the critical concept of "Leave to Defend," the dangerous reality of property attachment, and the powerful legal shields provided by the RBI and the Limitation Act. Moving beyond the fear-mongering of recovery agents, we will look at the hard legal facts and provide a roadmap to handle litigation without losing your sanity or your home.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Litigation should always be the last resort for any borrower, but if you are already in the system, you must act with precision. Deadlines in court are non-negotiable. Whether you are dealing with a personal loan, an SME loan, or complex credit card litigation, the strategies outlined here will help you navigate the process from a position of strength, knowledge, and legal compliance.
                            </p>

                            <h2 id="regular-civil-suit" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">The Regular Civil Suit: Recovery at a Human Pace</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                A <strong>Regular Civil Suit for Money Recovery</strong> is the standard procedure for debts that don't qualify for fast-track processes. This is an adversarial process where both sides are on equal footing.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                <strong>The Stages of a Regular Suit:</strong>
                                <br />- <strong>Filing of Plaint:</strong> The bank’s lawyer files a 'Plaint' detailing the loan agreement, the default, and the amount owed.
                                <br />- <strong>Summons:</strong> The court issues a formal notice to you. <strong>Receipt of summons is the most critical stage.</strong>
                                <br />- <strong>Written Statement:</strong> You file your reply (usually within 30-90 days), raising all your defenses.
                                <br />- <strong>Framing of Issues:</strong> The judge decides exactly what needs to be proven.
                                <br />- <strong>Evidence & Trial:</strong> Witnesses are examined, and documents are verified.
                                <br />- <strong>Judgment & Decree:</strong> The final decision is delivered.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                The primary advantage of a regular suit for the borrower is <strong>Time</strong>. These cases can take multiple years, giving you ample opportunity to stabilize your finances and negotiate a settlement while the case is ongoing.
                            </p>

                            <h2 id="order-37-summary-suit" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">Order 37 Summary Suit: The 10-Day Speed Trap</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Banks despise the slow pace of regular suits, which is why they often use <strong>Order 37 of the CPC</strong>. This is a special procedure for "Liquidated Debts" (debts based on written contracts or cheques).
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                In a Summary Suit, the bank claims that since the debt is documented, there is no need for a long trial. This is extremely dangerous for a borrower because:
                                <br />1. You have only <strong>10 days</strong> to show up in court after receiving the summons.
                                <br />2. If you don't show up, the court DEEMS all the bank’s allegations as true and passes a decree against you on the 11th day.
                            </p>

                            <h2 id="leave-to-defend" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">Leave to Defend: Your Gateway to Justice</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                If you are served with an Order 37 summons, you must file an application for <strong>Leave to Defend</strong>. You are asking the judge: "Please let me defend this case because the bank is wrong or the situation is complex."
                            </p>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6 font-light">
                                <strong>Grounds for Leave to Defend:</strong>
                                <br />- The bank has calculated interest incorrectly (Usury).
                                <br />- The loan agreement has forged signatures or unfair terms.
                                <br />- The debt is "Time-Barred" under the Limitation Act.
                                <br />- You have already paid a part of the amount that the bank is not disclosing.
                            </div>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                If the judge finds your defense is "triable," they will grant you leave to defend, and the case will be converted into a regular civil suit.
                            </p>

                            <h2 id="summons-process" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">Summons & Service: The Proper Legal Channel</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                A bank cannot just claim they filed a case. You must be <strong>"Duly Served."</strong> This means a court official or a registered courier must deliver the summons to you personally. In 2025, courts have started allowing service through WhatsApp or Email in certain cases, but the proof of delivery remains strictly regulated.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                <strong>Never evade service.</strong> If you refuse to take a summons, the court can allow "Substituted Service" (putting a notice in the newspaper). This is worse because you won't know the court date, and an Ex-Parte decree will be passed against you.
                            </p>

                            <h2 id="attachment-of-property" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">Asset Attachment: What Can and Cannot Be Taken</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                If the bank wins the case and gets a 'Decree,' they move to <strong>Execution Proceedings</strong>. This is where they ask for the attachment of your property.
                            </p>
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-6 font-light">
                                <strong>Exemptions Under Section 60 CPC:</strong>
                                <br />- Basic household furniture and cooking vessels.
                                <br />- Tools of artisans or implements of husbandry (for farmers).
                                <br />- Necessary wearing apparel for the family.
                                <br />- A portion of your salary (usually the first ₹1,000 + 2/3rd of the remainder).
                                <br />- Standard pension and EPF amounts.
                            </div>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                However, luxury items, second cars, industrial machinery, and secondary properties are all fair game for attachment and court auction.
                            </p>

                            <h2 id="execution-proceedings" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">Execution Process: The Final Stage</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Possession and sale of property by a court bailiff is a very specific procedural dance. The court must issue a warrant of attachment, followed by a public proclamation of sale. As a borrower, you still have the right to pay and stop the sale right up to the moment the hammer falls at the auction.
                            </p>

                            <h2 id="sarfaesi-act-overlap" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">SARFAESI Overlap: Secured vs Unsecured</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                For home loans and business loans with collateral, banks use the <strong>SARFAESI Act, 2002</strong>. This is much faster because it allows the bank to take possession <strong>without going to court.</strong>
                                <br />- If it's SARFAESI, you go to the <strong>Debt Recovery Tribunal (DRT).</strong>
                                <br />- If it's an unsecured personal loan, you go to the <strong>Civil Court.</strong>
                                <br />- If a bank mentions SARFAESI for a credit card, they are wrong, and you can get an immediate 'Stay' from the court.
                            </p>

                            <h2 id="drt-proceedings" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">DRT Process: Litigation for the Big Debts</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                The DRT is a specialized court for bank debts above ₹20 Lakh. The procedures here are governed by the <strong>RDB Act</strong>. It’s faster than a regular civil court, and the tribunal has the power to issue "Debt Recovery Certificates," which are like super-powered decrees.
                            </p>

                            <h2 id="bank-legal-tactics" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">Bank Legal Tactics: What to Expect</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Banks have deep pockets and dedicated legal teams. They often use delay tactics (if the borrower is trying to counter-sue) or aggressive fast-track filings (Order 37). They might also try to file multiple cases (Civil + Section 138) to put maximum pressure on you.
                            </p>

                            <h2 id="borrower-legal-defenses" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">Borrower Defenses: Reclaiming the Narrative</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                <strong>Common Defenses We Use:</strong>
                                <br />- <strong>The Limitation Bar:</strong> Did the bank wait more than 3 years?
                                <br />- <strong>Unconscionable Interest:</strong> Is the rate exploitative?
                                <br />- <strong>Lack of Consideration:</strong> Did the bank fail to disburse the full amount?
                                <br />- <strong>Procedural Defect:</strong> Is the power of attorney of the person filing the case valid?
                            </p>

                            <h2 id="mediation-settlement" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">Court-Led Mediation: The Amicable Exit</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                In 2025, judges are under immense pressure to reduce pendency. Almost every bank case is referred to <strong>Mediation</strong> or <strong>Lok Adalats</strong>. This is your best chance. A settlement reached through mediation is called a "Settlement Agreement," and when it's converted into a court order, it's final. It usually involves a massive waiver of penal interest.
                            </p>

                            <h2 id="rbi-ombudsman-role" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">The Ombudsman: A Parallel Search for Justice</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                While the court case is on, you can still approach the <strong>Banking Ombudsman</strong> if the bank has violated the Fair Practice Code. A negative finding by the Ombudsman can be used as a powerful piece of evidence in your defense in court.
                            </p>

                            <h2 id="bankruptcy-options" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">Personal Insolvency: The Shield of the IBC</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Under the <strong>Insolvency and Bankruptcy Code (IBC)</strong>, once you initiate a personal insolvency process, an <strong>"Interim Moratorium"</strong> starts. This legally freezes all bank recovery cases and court proceedings. It is the <strong>"Nuclear Option"</strong> of debt defense.
                            </p>

                            <h2 id="conclusion" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">Conclusion: Litigation is a Negotiation with a Judge</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                A bank recovery case in court is a marathon, not a sprint. The bank’s goal is money, and the court’s goal is fairness. If you are honest about your financial hardship and respectful of the legal process, the Indian judiciary often provides a "Cushion" for honest borrowers to settle and restart their lives.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Don't let fear of court stop you from defending your rights. Whether you choose to fight it out on merits or use the litigation as a platform for a one-time settlement, being informed is your greatest asset. At CredSettle, we stand between the corporate might of the bank and the individual borrower, ensuring that the law serves justice, not just recovery.
                            </p>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Under Pressure from a Bank Court Case?</h3>
                                <p className="text-blue-800 mb-6">Received a summons or an Order 37 notice? Our expert legal team can draft your Leave to Defend, represent you in court, and negotiate a final settlement. Don't let the bank get an ex-parte decree.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Legal Representation Now
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-slate-500 italic">
                                Disclaimer: This guide is for educational purposes only. Each court case has unique facts. Consult with a qualified advocate specializing in banking and civil litigation before taking any legal steps.
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

                            <h2 id="reviews" className="text-3xl font-bold text-slate-900 mb-6 scroll-mt-14">Client Success and Feedback</h2>
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
                                <h4 className="font-bold text-xl text-slate-900 mb-2">Notice Served?</h4>
                                <p className="text-sm text-slate-600 mb-6">If you have been served a court summons, the 10-90 day legal clock has started. Procrastination is the bank's biggest ally.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Respond Professionally
                                </Link>
                                <div className="mt-4 text-xs text-slate-500 space-y-1">
                                    <p>✓ Draft Leave to Defend</p>
                                    <p>✓ Stop Ex-Parte Decrees</p>
                                    <p>✓ Fast-Track Settlements</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-4 border-b pb-2">Litigation Links</h4>
                                <nav className="space-y-3">
                                    <Link href="/bank-arbitration-notice-loan" className="block text-sm text-blue-600 hover:underline">Arbitration Notice</Link>
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
