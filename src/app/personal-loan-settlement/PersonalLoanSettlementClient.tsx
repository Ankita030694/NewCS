'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function PersonalLoanSettlementClient() {
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
        { id: 'introduction', label: 'The Debt Trap' },
        { id: 'mechanical-process', label: 'Mechanical Process' },
        { id: 'prepayment-reflection', label: 'Prepayment Reflection' },
        { id: 'expert-vs-agents', label: 'Expert vs Agents' },
        { id: 'legal-repercussions', label: 'Legal Fears' },
        { id: 'settlement-timeline', label: 'Exact Timeline' },
        { id: 'paperwork-checklist', label: 'Paperwork Checklist' },
        { id: 'negotiation-scripts', label: 'Negotiation Strategy' },
        { id: 'cibil-impact', label: 'CIBIL Impact' },
        { id: 'case-studies', label: 'Success Case Studies' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' }
    ];

    const faqs = [
        {
            question: 'Will a personal loan settlement permanently ruin my CIBIL score?',
            answer: 'A settlement will lower your score and be marked as "Settled" rather than "Closed". However, it is not permanent. You can rebuild your credit score over the next 24 to 36 months by using secured credit cards or small consumer durable loans.'
        },
        {
            question: 'Can the bank file a cheating case against me for defaulting?',
            answer: 'No. Defaulting on a personal loan due to financial hardship is a civil breach of contract, not a criminal offense. Banks cannot file a cheating case (Section 420) unless they can prove you took the loan with the original intent to defraud them using fake documents.'
        },
        {
            question: 'How much percentage of the principal amount can be waived during a settlement?',
            answer: 'Waiver percentages depend on how long the loan has been in default. For a loan that is an NPA for over a year, banks typically waive 100% of the penal interest and may offer a 30% to 50% discount on the principal amount.'
        },
        {
            question: 'Is it safe to pay the settlement amount in cash to the recovery agent?',
            answer: 'It is highly unsafe. All settlement payments must be made directly to the bank account via NEFT, RTGS, or Demand Draft. Paying in cash to an agent can lead to fraud where the money never reaches your loan account.'
        },
        {
            question: 'What is the most important document to collect after settling the loan?',
            answer: 'The No Dues Certificate (NDC) or No Objection Certificate (NOC) is the most critical document. It serves as legal proof that the bank has accepted the settlement amount as full and final payment, preventing them from reopening the case.'
        }
    ];

    const reviews = [
        {
            name: 'Rajesh Kumar',
            location: 'Mumbai',
            stars: 5,
            comment: 'I was drowning in 12 Lakhs of personal loan debt after a medical emergency. The recovery agents were calling my office every day. CredSettle stopped the calls legally and helped me close the entire loan for 4.5 Lakhs.'
        },
        {
            name: 'Priya Sharma',
            location: 'Delhi',
            stars: 5,
            comment: 'The fear of legal repercussions was keeping me awake at night. The expert panel explained the mechanical process perfectly. We completed the paperwork and got the No Dues Certificate in just two months.'
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
        'name': 'Personal Loan Settlement Expert Consultation',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '2450',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-pls" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-pls" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        2025 Personal Loan Relief
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Personal Loan Settlement<br />
                        <span className="text-blue-300">The Ultimate Debt Relief Guide</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-normal">
                        Understand the exact mechanical process to close your high EMIs legally. Stop the harassment and settle your personal loans for a fraction of the principal.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Free Legal Protection
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
                                        Personal Loan Settlement Guidelines
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
                        className={`text-sm font-bold px-4 py-2 rounded-lg transition-all flex-shrink-0 ${activeId === link.id
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Settlement Manual</h3>
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
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100 font-sans">

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: The Personal Loan Debt Trap</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Borrowers drowning in personal loan EMIs frequently hear about "settlement" but rarely understand the actual mechanisms behind it. The typical scenario is deeply distressing. A salaried professional or a business owner faces a sudden financial crisis. A medical emergency occurs, a job is lost, or a business deal goes sour. The high EMIs on unsecured personal loans quickly become unmanageable. They take new loans to pay off the old ones, creating a devastating cycle of debt. The psychological pressure applied by banks is immense. The first thing you need to realize is that you are not the first person to face this, and there is a clear, legal pathway out.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The biggest barrier to resolving this crisis is fear. Borrowers fear the legal repercussions. They fear police action. They fear public shaming. Because of these fears, they avoid taking the right steps to negotiate a fair personal loan settlement. This comprehensive guide will demystify the entire personal loan settlement process in India. We will break down exactly how a 10 Lakh personal loan gets closed for 4 Lakhs. We will outline the exact timeline involved, the paperwork required, and most importantly, how to defend yourself from aggressive recovery tactics.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                This is your ultimate pillar page for surviving personal loan debt. Read it carefully. Equip yourself with knowledge. When you know your rights, the power dynamic completely shifts. For related insights on managing aggressive recovery, you might find our guide on <Link href="/best-lawyer-for-bank-loan-recovery-defence" className="text-blue-600 font-bold hover:underline">defending against bank loan recovery</Link> highly useful.
                            </p>

                            <h2 id="mechanical-process" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 2: The Mechanical Process of Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                How exactly does a bank agree to accept a lower amount? It is not magic. It is pure mathematics and risk assessment. When you stop paying your EMIs, the bank categorizes your loan into different buckets. At 90 days past due, your loan is officially declared a Non-Performing Asset (NPA). Once it becomes an NPA, the bank must set aside capital reserves to cover this potential loss. This hurts the bank profitability. 
                            </p>

                            {/* Alert Banner for Protections */}
                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-2xl"></div>
                                <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                                    </svg>
                                    Critical Legal Warning:
                                </h4>
                                <ul className="space-y-3 text-red-800 font-normal list-disc pl-5 m-0 text-sm">
                                    <li><strong>Never Pay Cash:</strong> Never pay cash to any collection agent promising a "discount settlement". Fraudulent agents often collect cash and disappear, leaving your loan account fully active.</li>
                                    <li><strong>Demand Official Letters:</strong> Always demand an official settlement letter on the bank letterhead before transferring a single rupee.</li>
                                    <li><strong>Use Regulated Channels:</strong> Direct transfers must be made to the bank via NEFT or RTGS, never through third-party wallets.</li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                As time goes on, the cost of recovering the money increases. They have to pay recovery agencies, lawyers, and administrative staff. If the loan remains unpaid for 180 days or more, the bank realizes that recovering the full amount is highly unlikely. At this stage, they are willing to take a "haircut" on the loan just to clear the bad debt from their books and free up their capital. This is where the mechanical process of settlement begins.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                The bank calculates the Principal Outstanding. They will almost always waive the penal interest and late fees entirely. Then, depending on your demonstrated financial hardship, they will offer a percentage discount on the principal amount itself. A 10 Lakh loan could easily be settled for 4 Lakhs or 5 Lakhs if properly negotiated. You must prove genuine inability to pay through bank statements, medical records, or termination letters.
                            </p>

                            <h2 id="prepayment-reflection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Section 3: How Long Does Prepayment Reflection Take in Your Loan Account?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the most common anxieties borrowers face is the delay between making the settlement payment and seeing it reflect in their loan account. You have just scraped together the settlement amount, you transferred the funds, but the bank portal still shows a massive outstanding balance. Panic sets in.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                                    <span className="text-blue-600 font-bold mb-2 block text-xs uppercase tracking-wider">Step 1</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">Suspense Account Transfer</h5>
                                    <p className="text-sm text-gray-600 m-0">When you make a settlement payment, it goes into a suspense account or a centralized collection pool first. It does not hit your specific loan ledger instantly.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                                    <span className="text-blue-600 font-bold mb-2 block text-xs uppercase tracking-wider">Step 2</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">Reconciliation</h5>
                                    <p className="text-sm text-gray-600 m-0">The bank undergoes an internal reconciliation process. The settlement letter usually specifies a timeline for this. Do not panic during this window.</p>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold bg-blue-50 text-blue-900 p-6 rounded-2xl shadow-sm border border-blue-100">
                                Standard Timeline: It typically takes 7 to 15 working days for a settlement payment to reflect in your loan account and for the status to change from "Active" to "Settled" internally. Save your transaction reference numbers and emails safely.
                            </p>

                            <h2 id="expert-vs-agents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Section 4: Expert Panel vs. Recovery Agents: Who Should You Trust?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                During the default phase, you will interact with two very different types of representatives from the bank side. You must be able to distinguish between them to protect your interests. 
                            </p>
                            
                            {/* Visual Element 2: Comparison Table */}
                            <div className="overflow-x-auto mb-10 rounded-2xl shadow-lg border border-gray-200">
                                <table className="w-full text-left bg-white border-collapse">
                                    <thead>
                                        <tr className="bg-gray-100 text-gray-900">
                                            <th className="p-4 border-b font-bold w-1/3">Criteria</th>
                                            <th className="p-4 border-b font-bold w-1/3 text-blue-800">Expert Panel / Bank Managers</th>
                                            <th className="p-4 border-b font-bold w-1/3 text-red-800">Third-Party Recovery Agents</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700 font-medium">
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="p-4 border-b font-bold">Goal</td>
                                            <td className="p-4 border-b">Minimize bank losses and close accounts quickly.</td>
                                            <td className="p-4 border-b">Maximize cash collected today to earn a percentage commission.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="p-4 border-b font-bold">Authority</td>
                                            <td className="p-4 border-b">High. They can approve significant waivers and issue official letters.</td>
                                            <td className="p-4 border-b">Zero. They cannot approve anything. They only convey offers.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="p-4 border-b font-bold">Communication Style</td>
                                            <td className="p-4 border-b">Formal, written emails, professional meetings at branches.</td>
                                            <td className="p-4 border-b">Aggressive, frequent phone calls, unannounced home visits.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="p-4 border-b font-bold">Legal Knowledge</td>
                                            <td className="p-4 border-b">Understand RBI guidelines perfectly. They know what is illegal.</td>
                                            <td className="p-4 border-b">Often ignorant of the law or deliberately ignore it to exert pressure.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                You should never negotiate final settlement terms with a street-level recovery agent. Their only motivation is their commission. You must escalate your case to the bank internal expert panel or the nodal officer. This is where a legal shield is incredibly valuable. If you are facing severe harassment, you must read our advice on <Link href="/best-lawyer-for-notice-for-loan-default" className="text-blue-600 font-bold hover:underline">handling loan default notices</Link>.
                            </p>

                            <h2 id="legal-repercussions" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 5: Addressing Fears of Legal Repercussions</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most powerful weapon a recovery agent has is your fear of the law. They will threaten you with police arrest. They will tell you that an FIR will be lodged for cheating. They will claim they have a warrant to seize your household goods. You need to know that 99 percent of these threats are completely baseless.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A personal loan is an "unsecured" loan. This means you did not pledge any collateral, like a house or a car, to get the money. If you default, the bank cannot simply walk into your house and take your television or your furniture. That requires a specific, lengthy court order from a civil judge.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold text-gray-900">
                                Can the police arrest you? No. Failure to repay a loan is a civil matter. The police have absolutely no jurisdiction in loan recovery cases. They cannot arrest you for not having money. The only exception is if you submitted fraudulent documents (like a fake salary slip) to obtain the loan initially.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                What about Section 138 of the Negotiable Instruments Act? This relates to bounced cheques. If you provided post-dated cheques or an ECS mandate that bounced, the bank can file a case. However, this is a bailable offense. The court process takes years, and the judges actively encourage both parties to reach a compromise settlement during the proceedings. You will not go to jail immediately.
                            </p>

                            <h2 id="settlement-timeline" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 6: The Exact Timeline of a Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Borrowers often think settlement happens in a day. It does not. It is a strategic process that requires patience. If you rush it, you will pay a much higher amount. Here is a realistic timeline for closing an unsecured loan for a fraction of the principal.
                            </p>
                            <ul className="list-disc pl-6 mb-10 space-y-4 text-gray-700 font-medium">
                                <li><strong>Month 1 to 3: The Pressure Phase.</strong> You miss your first EMI. The bank calls politely. By the third missed EMI, the calls become aggressive. Recovery agencies are deployed. Your goal here is to formally communicate your financial hardship via email and not yield to intimidation.</li>
                                <li><strong>Month 4 to 6: NPA Status.</strong> Your account is officially an NPA. The bank sends legal notices. The recovery agents push harder. This is when you should propose your first settlement offer in writing. The bank will likely reject it and demand the full amount.</li>
                                <li><strong>Month 7 to 9: Serious Negotiation.</strong> The bank realizes you truly cannot pay the full amount. The case is escalated to senior officers. This is the optimal window to negotiate hard. You can push for waivers up to 50 percent of the principal.</li>
                                <li><strong>Month 10 onwards: Finalization.</strong> You agree on a number. The bank issues the Settlement Letter. You make the payment. Within 30 days, the NDC is issued, and within 60 days, your CIBIL report is updated to "Settled".</li>
                            </ul>

                            <h2 id="paperwork-checklist" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 7: Paperwork Checklist for Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Documentation is everything in legal disputes. Do not rely on verbal promises. If an agreement is not on paper, it does not exist. Use this checklist to ensure your settlement is ironclad.
                            </p>

                            {/* Visual Element 3: Checklist */}
                            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 mb-10 shadow-lg">
                                <h4 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Essential Documents Checklist</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">1</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Hardship Letter</h5>
                                            <p className="text-sm text-gray-600 m-0">A detailed letter explaining your job loss, medical issue, or business failure, backed by proof (termination letter, hospital bills).</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">2</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Official Settlement Offer Letter</h5>
                                            <p className="text-sm text-gray-600 m-0">Issued on bank letterhead, stating the exact settlement amount, the timeline for payment, and explicitly mentioning "Full and Final Settlement".</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">3</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Payment Receipts</h5>
                                            <p className="text-sm text-gray-600 m-0">Bank statements or transaction reference numbers proving the money was sent directly to your loan account.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">4</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">No Dues Certificate (NDC)</h5>
                                            <p className="text-sm text-gray-600 m-0">The final victory document. Issued by the bank 15 to 30 days after payment, confirming zero outstanding balance.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <h2 id="negotiation-scripts" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 8: Negotiation Strategy for Maximum Waivers</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Negotiation is a skill. When talking to the bank managers, you must remain calm, professional, and firm. Do not show desperation. If they sense you have money hidden away, they will not offer a good discount.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Start by offering a very low amount, perhaps 20 percent of the principal. They will act outraged. That is part of the game. Let them reject it. Wait a few weeks. They will come back with a counteroffer. Your goal is to meet somewhere in the middle, around 40 to 50 percent. Constantly reiterate your financial hardship. Tell them plainly, "This is all the money I can arrange from relatives. If you reject this, I have no other options, and the account will remain unpaid indefinitely."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                This psychological leverage is crucial. The bank knows that a lengthy court battle for an unsecured loan will yield very little return. They would rather take the cash in hand today. If you need professional assistance in drafting these emails and managing the negotiation, explore our <Link href="/best-lawyer-for-personal-loans" className="text-blue-600 font-bold hover:underline">personal loan legal services</Link>.
                            </p>

                            <h2 id="cibil-impact" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 9: The CIBIL Impact of Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Let us be completely honest. A settlement is a compromise. The bank took a loss, and they will report this to the credit bureaus (CIBIL, Experian, Equifax). Your loan account status will be updated to "Settled" or "Post Write Off Settled".
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This will cause your credit score to drop significantly. You will find it extremely difficult to get a new unsecured loan or a credit card for the next 2 to 3 years. The system flags you as a high-risk borrower.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold text-blue-900">
                                However, this is not the end of the world. A "Settled" status is vastly superior to an "Active Defaulter" status. Once the debt is settled, the harassment stops. You regain your mental peace. You can rebuild your CIBIL score slowly by taking a small loan against a fixed deposit or using a secured credit card. Focus on surviving the crisis first. Credit scores can always be rebuilt later.
                            </p>

                            <h2 id="case-studies" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 10: Case Studies of Successful Personal Loan Settlements</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To truly understand how this process works in practice, let us look at two real-world case studies of borrowers who successfully navigated the personal loan settlement process with expert guidance. These examples highlight the importance of patience, proper documentation, and legal fortitude.
                            </p>
                            
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm mb-6">
                                <h4 className="text-2xl font-bold text-gray-900 mb-4 mt-0">Case Study 1: The Job Loss Crisis</h4>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    <strong>The Scenario:</strong> A software engineer in Bengaluru had a personal loan of ₹15 Lakhs. After a sudden tech industry layoff, he could not pay the ₹45,000 monthly EMI. Within three months, aggressive recovery agents began visiting his apartment, causing immense social embarrassment.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    <strong>The Strategy:</strong> We immediately sent a Cease and Desist Legal Notice to the bank, citing RBI guidelines on harassment. We formally submitted his termination letter and bank statements showing zero income. We advised him to hold firm during the initial 6-month period while the bank categorized the loan as an NPA.
                                </p>
                                <p className="text-gray-700 leading-relaxed m-0 font-bold text-blue-800">
                                    <strong>The Result:</strong> After 9 months of negotiation, the bank realized litigation would be fruitless. They offered a final settlement of ₹6.5 Lakhs (an approx 56% waiver on the principal and 100% waiver on penal interest). The borrower paid this amount from his provident fund withdrawal, received the NDC, and stopped the harassment permanently.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm mb-10">
                                <h4 className="text-2xl font-bold text-gray-900 mb-4 mt-0">Case Study 2: Medical Emergency Debt Trap</h4>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    <strong>The Scenario:</strong> A small business owner in Delhi took a ₹8 Lakh personal loan to cover emergency hospital bills for a family member. The business subsequently suffered due to his absence, and he defaulted. The bank filed a Section 138 cheque bounce case against him.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    <strong>The Strategy:</strong> Instead of panicking over the court summons, our legal team appeared in the magistrate court and submitted medical records to prove genuine financial hardship, not malicious intent to defraud. We requested the judge to refer the matter to the Lok Adalat (mediation center) for an amicable settlement.
                                </p>
                                <p className="text-gray-700 leading-relaxed m-0 font-bold text-blue-800">
                                    <strong>The Result:</strong> During the Lok Adalat session, the bank’s legal team agreed to settle the ₹8 Lakh principal plus accumulated interest for a flat ₹3.5 Lakhs. The payment was made directly to the bank, the Section 138 case was officially withdrawn, and the borrower received his No Objection Certificate.
                                </p>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-10">
                                These cases prove that even in the face of aggressive recovery tactics or court cases, a structured, legally sound approach can result in massive waivers and complete peace of mind.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Client Success and Feedback</h2>
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

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4 mt-0">Escape the Debt Cycle Now.</h3>
                                <p className="text-blue-800 mb-6 font-normal">Our expert consultants specialize in analyzing your financial profile and structuring customized solutions to stop harassment.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-300 transform hover:-translate-y-1"
                                >
                                    Start Your Free Strategy Call
                                </Link>
                            </div>
                        </article>
                    </main>

                    {/* Right Column: Cards */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24 self-start">
                        <div className="space-y-4">
                            {/* Card 1: CTA */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center flex flex-col items-center">
                                <h3 className="font-black text-gray-900 text-xl mb-2 mt-1 tracking-tight">Facing Harassment?</h3>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed px-1">
                                    We can dispatch a powerful Legal Notice to stop aggressive agents from coming to your home.
                                </p>
                                <Link
                                    href="/contact"
                                    className="w-full bg-[#1b5df3] hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md text-center text-base"
                                >
                                    Stop the Agents
                                </Link>
                                <div className="mt-4 space-y-1.5 text-xs text-gray-500 w-full text-center font-medium">
                                    <p>&#10003; 24hr Legal Response</p>
                                    <p>&#10003; Settlement Negotiation</p>
                                    <p>&#10003; FIR Support for Abuse</p>
                                </div>
                            </div>

                            {/* Card 2: Links */}
                            <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100 shadow-sm mt-4">
                                <h4 className="font-black text-gray-900 text-lg border-b border-gray-900 pb-2 mb-4">Related Expertise</h4>
                                <ul className="space-y-3 text-left font-medium">
                                    <li>
                                        <Link href="/best-microfinance-loan-settlement-lawyer" className="text-blue-600 hover:text-blue-800 text-sm transition-colors block">
                                            Microfinance Relief
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-msme-business-loan-dispute" className="text-blue-600 hover:text-blue-800 text-sm transition-colors block">
                                            MSME Business Disputes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-bank-loan-recovery-defence" className="text-blue-600 hover:text-blue-800 text-sm transition-colors block">
                                            Bank Recovery Defense
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/best-lawyer-for-notice-for-loan-default" className="text-blue-600 hover:text-blue-800 text-sm transition-colors block">
                                            Legal Notice Support
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
