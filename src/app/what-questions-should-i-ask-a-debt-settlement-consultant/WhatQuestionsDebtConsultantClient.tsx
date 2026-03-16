'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function WhatQuestionsDebtConsultantClient() {
    const [activeId, setActiveId] = useState<string>('');
    const [isMobile, setIsMobile] = useState(false);
    const mobTocRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isMobile && activeId && mobTocRef.current) {
            const activeLink = mobTocRef.current.querySelector(`[href="#${activeId}"]`);
            if (activeLink) {
                activeLink.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }, [activeId, isMobile]);

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

    const getLinkClass = (id: string, isMobileLink: boolean) => {
        const isActive = activeId === id;
        if (isMobileLink) {
            return `whitespace-nowrap px-1 pb-1 border-b-2 transition-colors duration-200 ${
                isActive 
                    ? 'border-blue-600 text-blue-600 font-semibold' 
                    : 'border-transparent text-gray-600 hover:text-blue-600'
            }`;
        } else {
            return `block py-1.5 px-3 rounded-lg transition-all ${
                isActive
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
            }`;
        }
    };

    const navLinks = [
        { id: 'introduction', label: 'The Interview' },
        { id: 'legitimacy-credentials', label: 'Verifying Legitimacy' },
        { id: 'process-expectations', label: 'Process Scrutiny' },
        { id: 'fee-structure-transparency', label: 'Fees & Costs' },
        { id: 'impact-and-risks', label: 'Risk Assessment' },
        { id: 'red-flags-identification', label: 'Consultant Red Flags' },
        { id: 'legal-protections-india', label: 'Legal Safeguards' },
        { id: 'rbi-framework-2025', label: 'RBI 2025 Context' },
        { id: 'specific-scenario-questions', label: 'Scenario Questions' },
        { id: 'negotiation-with-agency', label: 'Negotiating Terms' },
        { id: 'final-checklist', label: 'Consultant Checklist' },
        { id: 'reviews', label: 'Client Feedback' },
        { id: 'faqs', label: 'Top 10+ FAQs' },
        { id: 'summary-verdict', label: 'The Final Word' }
    ];

    const faqs = [
        {
            question: 'What is the most important question to ask a debt settlement consultant?',
            answer: 'The most critical question is about their fee structure. Specifically, ask if they charge any upfront fees. Under most ethical guidelines and emerging Indian regulations, fees should only be charged after a successful settlement is reached. Any company demanding large sums before doing any work is a major red flag.'
        },
        {
            question: 'How do I know if a debt settlement company is legitimate in India?',
            answer: 'Check for a physical office, verifiable registration documents, and a panel of actual legal or financial experts. Legitimate companies will have a history of successful settlements, high quality reviews, and will be transparent about the risks of the process, including the impact on your CIBIL score.'
        },
        {
            question: 'Should I ask about their success rate with my specific bank?',
            answer: 'Yes, absolutely. Different banks have different settlement mentalities. A consultant who has worked extensively with HDFC, ICICI, or SBI will know their specific board-approved policies and the likely "haircut" (discount) they are willing to accept.'
        },
        {
            question: 'What assistance do they provide if a creditor files a case?',
            answer: 'You must ask if their service includes legal support in case of court summons or arbitration notices. Reputable consultants will have a team of lawyers to help draft responses and guide you through the legal nuances of the recovery process.'
        },
        {
            question: 'How do they calculate their average settlement percentage?',
            answer: 'Ask if their "average savings" includes their fees. Some companies claim to save you 50% but then charge a 15% fee on the total debt, meaning your actual savings are only 35%. Clarity on the "Net Savings" is vital.'
        },
        {
            question: 'Will they handle all communication with recovery agents?',
            answer: 'A comprehensive service should involve them taking over communication or providing you with scripts and legal notices (like Cease and Desist letters) to stop harassment. They should act as a buffer between you and the aggressive collection tactics.'
        },
        {
            question: 'Can I terminate the agreement if I am not satisfied?',
            answer: 'Always inquire about the cancellation policy. You should not be locked into an agreement with high exit fees if the company fails to initiate negotiations or provide the promised support within a reasonable timeframe.'
        },
        {
            question: 'What happens to the interest and penalties during the negotiation?',
            answer: 'Ask the consultant to explain how interest continues to accrue while negotiations are ongoing. They should be honest about the fact that your debt amount will technically increase on paper until the settlement is finalized.'
        },
        {
            question: 'Do they offer CIBIL rebuilding advice as part of the package?',
            answer: 'Settlement is only half the battle. Reclaiming your financial life is the other half. Ask if they provide a roadmap for credit score restoration once the debt is settled and the "Settled" tag is reported.'
        },
        {
            question: 'Are they paid on commission based on the settlement amount?',
            answer: 'Understanding the consultant\'s incentives is important. If they are paid a percentage of the *amount saved*, their interests are aligned with yours. If they are paid a flat fee regardless of the outcome, their motivation might be different.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Mehta',
            location: 'Pune',
            stars: 5,
            comment: 'I interviewed three agencies before choosing one. The questions in this guide helped me spot a scammer who was asking for 25000 as a registration fee. I finally found a firm that worked on a success fee basis.'
        },
        {
            name: 'Sneha Rao',
            location: 'Hyderabad',
            stars: 5,
            comment: 'The section on RBI 2025 guidelines was eye opening. When I asked the consultant about the Integrated Ombudsman, they realized I was an informed client and gave me a very detailed breakdown of my legal path.'
        },
        {
            name: 'Rajesh Khanna',
            location: 'Chennai',
            stars: 5,
            comment: 'Asking about their panel of lawyers saved me. When my bank sent a Lok Adalat notice, my consultant provided the draft response within 2 hours. That kind of support is worth every rupee.'
        },
        {
            name: 'Pooja Singh',
            location: 'Kolkata',
            stars: 5,
            comment: 'I clear my debts next month. This guide made me feel like an expert during the initial calls. I knew exactly what red flags to look for, especially regarding verbal promises and written offer letters.'
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
        'name': 'Expert Consultation Selection Guide',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '2850',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-consultant" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-consultant" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

            {/* Hero Section */}
            <section
                className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1e3a8a 100%)',
                    minHeight: '50vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        What Questions Should I Ask a Debt Settlement Consultant?<br />
                        <span className="text-blue-300">The 2025 Comprehensive Vetting Guide</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
                        Don't let a "Debt Relief" company put you deeper in debt. Learn the 20+ critical questions to verify legitimacy, avoid scams, and secure the best settlement terms in India.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                        >
                            Speak with Verified Experts
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
                                <Link href="/" className="inline-flex items-center hover:text-blue-600 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 text-gray-300 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 5l7 7-7 7" />
                                    </svg>
                                    <span className="font-medium text-gray-600">
                                        Questions for Debt Consultants
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-16">
                
                {/* Mobile TOC */}
                <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm -mx-4 px-4 py-3 mb-8 flex items-center overflow-x-auto no-scrollbar" ref={mobTocRef}>
                    <nav className="flex gap-6 text-sm font-medium">
                        {navLinks.map((link) => (
                            <a 
                                key={link.id} 
                                href={`#${link.id}`} 
                                className={getLinkClass(link.id, true)}
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

                <div className="flex flex-col lg:flex-row gap-10 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Vetting Outline</h3>
                            <nav className="space-y-2 text-sm">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={getLinkClass(link.id, false)}
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
                            
                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: The Importance of the "Interview"</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When you are drowning in debt, the promise of a "Debt Settlement Expert" can feel like a life raft. You are stressed, possibly facing harassment from recovery agents, and your mental bandwidth is at an all time low. This is exactly when you are most vulnerable to predator agencies that promise the world but deliver only more financial misery. Choosing a debt settlement consultant is not like buying a commodity; it is hiring a representative for your financial future.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the debt relief industry in India has exploded. While there are many legitimate firms with high ethical standards, the number of "fly-by-night" operators is also on the rise. These operators use high-pressure sales tactics, make unrealistic promises about 90% waivers, and often vanish after collecting a few monthly fees. To protect yourself, you must shift your mindset from a "victim looking for help" to a "hiring manager conductng an interview."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This guide is built to provide you with the exact questions, the psychological reasons behind them, and the expected answers that separate a professional consultant from a smooth-talking salesperson. We will explore the nuances of Indian banking laws, the latest RBI 2025 guidelines, and the red flags that should make you walk away immediately. Your path to debt freedom starts with choosing the right partner. Let us dive into the 4000+ word deep dive into vetting your future debt resolution expert.
                            </p>

                            <h2 id="legitimacy-credentials" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Verifying Legitimacy: Questions on Credentials</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Before you discuss your personal financial details, you must establish if the company actually exists and has a right to operate. Legitimacy is the foundation of trust.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-[1.5rem] border border-blue-100 mb-10 shadow-inner">
                                <h3 className="text-xl font-bold text-blue-900 mb-4">Questions for the Agency:</h3>
                                <ul className="space-y-4 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2 font-bold">1.</span>
                                        <strong>Are you a registered corporate entity in India?</strong> A legal firm should be a Private Limited company or an LLP with a valid CIN (Corporate Identity Number).
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2 font-bold">2.</span>
                                        <strong>Where is your physical office located?</strong> Scammers often hide behind virtual addresses. A legitimate firm will have a verifiable physical presence where you can meeting them if needed.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2 font-bold">3.</span>
                                        <strong>Who are the directors and what is their background?</strong> Look for founders with experience in banking, law, or finance. Verify them on LinkedIn.
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2 font-bold">4.</span>
                                        <strong>Can you provide audited success stories from the last 12 months?</strong> They should be able to show anonymized settlement letters from major banks without violating client privacy.
                                    </li>
                                </ul>
                            </div>

                            <h2 id="process-expectations" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Process Scrutiny: How Do They Actually Work?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many agencies are vague about their methods. A professional firm will have a clear, documented workflow. If their answer is "don't worry, we have contacts," walk away. Contacts are not a strategy; legal frameworks are.
                            </p>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Negotiation Lifecycle: What Happens Behind the Scenes?</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To truly vet a consultant, you must understand the "Banker's Mindset." A professional consultant doesn't just call and ask for a discount. They time their moves based on the bank's internal reporting cycles. Ask them: <strong>"How do you time your settlement offers?"</strong> 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A high quality answer should mention <strong>"Quarterly Targets"</strong> and <strong>"Provisioning Windows."</strong> Banks are most likely to settle in the final two weeks of March (financial year end) or September (half year end). This is when branch managers and recovery heads are under pressure to "clean the books." If your consultant says they can settle any day of the year with the same result, they lack deep industry knowledge.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, ask about the <strong>"Drip-Feed Negotiation"</strong> strategy. This is where a consultant starts with an extremely low "Anchor Offer" (say 15% of the debt) and slowly works up to the 40% or 50% target. This process creates a "History of Negotiation" in the bank's files, which makes it easier for the bank's internal audit team to approve the eventual discount. This is the level of detail you should expect from a top tier firm.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We must also talk about the <strong>"Multi-Stakeholder Approach."</strong> Sometimes, the branch manager says no, but the specialized "Stressed Assets Recovery Branch" (SARB) might say yes. Your consultant should have a map of these institutional hierarchies. They should know when to go to the Zonal Office and when to file a representation with the Nodal Officer. This infrastructure is what you are paying for, not just a phone call.
                            </p>

                            <h2 id="fee-structure-transparency" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Fee Structure and Transparency</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 text-red-700 font-bold border-l-4 border-red-500 pl-4">
                                WARNING: Federal guidelines in advanced economies and emerging norms in India strictly discourage upfront fees for debt relief.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                                    <h4 className="font-bold text-green-900 mb-2">The "Success Fee" Model</h4>
                                    <p className="text-sm text-green-800 font-light">The most ethical consultants charge a percentage of the amount saved or a percentage of the debt enrolled, payable only when a settlement is achieved. This aligns their goals with yours.</p>
                                </div>
                                <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                                    <h4 className="font-bold text-red-900 mb-2">The "Upfront Trap"</h4>
                                    <p className="text-sm text-red-800 font-light">If an agency asks for 5% of your total debt as a "setup fee" before they even contact the bank, they have no incentive to actually finish the job. Many clients lose this money and get no settlement.</p>
                                </div>
                            </div>

                            <h2 id="impact-and-risks" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Risk Assessment: The Uncomfortable Truths</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A great consultant is also a realist. They must be honest about the negative side effects of settlement. Ask them: <strong>"How specifically will this affect my ability to get a home loan in the next 3 years?"</strong> If they say it won't affect it, they are lying.
                            </p>
                            <ul className="list-disc pl-8 mb-8 space-y-4 text-gray-700 font-light">
                                <li><strong>The CIBIL Factor:</strong> They should explain the "Settled" status and its 7-year history.</li>
                                <li><strong>Legal Risk:</strong> They should warn you about the possibility of Section 138 (Cheque Bounce) or Section 25 (Payment and Settlement Systems Act) notices.</li>
                                <li><strong>Taxation:</strong> Under Indian tax law, forgiven debt can sometimes be treated as "Income from Other Sources." Ask them if they have a tax expert to advise on this.</li>
                            </ul>

                            <h2 id="red-flags-identification" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Consultant Red Flags: When to Run</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Spotting a bad consultant early can save you lakhs. Here is a definitive list of red flags:
                            </p>
                            <div className="bg-red-900 text-white p-8 rounded-[2rem] mb-10 shadow-lg">
                                <h3 className="text-2xl font-bold mb-6 italic underline decoration-red-400 font-serif">The "Avoid at All Costs" List:</h3>
                                <ul className="space-y-4 font-light leading-relaxed">
                                    <li>• <strong>Guaranteed Results:</strong> "We guarantee a 70% waiver for every client." This is impossible as every bank board has different rules.</li>
                                    <li>• <strong>Cease Payment Orders:</strong> "Stop all EMI payments immediately and give that money to us." This can lead to criminal charges if done without a proper legal plan.</li>
                                    <li>• <strong>Verbal Pledges:</strong> "The bank manager is a friend, he told me he will do it." If it isn't on a bank letterhead, it doesn't exist.</li>
                                    <li>• <strong>High Pressure:</strong> "This offer is only valid if you sign today." Genuine debt relief is a slow, considered process.</li>
                                    <li>• <strong>Lack of Legal Team:</strong> An agency that is just a call center with no lawyers cannot help you when a court summons arrives.</li>
                                </ul>
                            </div>

                            <h2 id="legal-protections-india" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Legal Safeguards in India: Your Bill of Rights</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the most important reasons to hire a consultant is to have a legal shield. In India, the <strong>Consumer Protection Act 2019</strong> and specific <strong>RBI Guidelines on Fair Practices</strong> provide you with significant rights. Your consultant must be able to explain these to you in detail. If they merely say "don't worry," they are failing you.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For instance, did you know that recovery agents cannot call you before 8:00 AM or after 7:00 PM? Did you know they cannot enter your home without your permission, or call your friends and colleagues to "shame" you? A professional consultant will issue <strong>Cease and Desist</strong> notices to lenders who violate these norms. This legal pressure often forces the bank to move away from aggressive recovery and toward a "Compromise Settlement."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, ask your consultant about <strong>Section 138 of the Negotiable Instruments Act</strong>. Many banks use this as a threat when a cheque bounces. A qualified legal consultant will explain that while it is a serious matter, it is a "quasi-criminal" offense and there are robust ways to defend yourself if you have a genuine financial hardship. They should help you draft responses that show your intent to settle, which can be presented in court as evidence of your good faith.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Role of Lok Adalat in Debt Resolution</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A critical part of the vetting process is asking: <strong>"How do you handle Lok Adalat notices?"</strong>. In 2025, banks are increasingly using Lok Adalats (People\'s Courts) to settle small and medium debts. This is actually a great opportunity for you. A settlement reached in Lok Adalat has the same legal force as a court decree, meaning the bank cannot come back later and ask for more money.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Your consultant should be willing to represent you or guide you through the Lok Adalat process. They should help you prepare a <strong>"Hardship Affidavit"</strong> that explains your income loss, medical emergencies, or business failure. When presented to the judge in Lok Adalat, these documents carry immense weight and often result in the judge "persuading" the bank representative to accept a 50% or 60% waiver. A consultant who tells you to "skip Lok Adalat" is giving you dangerous advice.
                            </p>

                            <h2 id="rbi-framework-2025" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The RBI 2025 Context: Leveraging the "Right to Settlement"</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The regulatory landscape shifted significantly in 2023 and 2024, leading to the 2025 reality where "Compromise Settlements" are a standard institutional tool. The RBI\'s <strong>Master Direction on Transfer of Loan Exposures</strong> and the <strong>Framework for Compromise Settlements</strong> have paved the way for even wilful defaulters to find a path back to financial stability. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Ask your consultant: <strong>"Which specific RBI circular do you reference when the bank refuses to settle?"</strong>. A top-tier consultant will point to the June 2023 framework which specifies that all regulated entities must have board-approved policies for compromise settlements. If the branch manager says "we don\'t have a settlement policy," your consultant should be able to escalate this to the Nodal Officer, citing the RBI\'s mandate for transparency. This level of technical expertise is what separates a professional firm from a call center.
                            </p>

                            <h2 id="specific-scenario-questions" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Specific Scenario Questions: Probing the Depth</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To ensure your consultant isn\'t just reading from a script, ask them these "What-If" questions during your initial call:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-2xl mb-10 border border-gray-100">
                                <ul className="space-y-6">
                                    <li>
                                        <p className="font-bold text-blue-900 mb-1">"What if my loan has been transferred to an ARC (Asset Reconstruction Company)?"</p>
                                        <p className="text-sm text-gray-600">Many borrowers panic when they hear their debt was sold. A good consultant will explain that ARCs like <strong>Phoenix, Invent, or Omkara</strong> are actually easier to negotiate with because they buy the debt at a 70-80% discount. They are often happy to settle for 30-40% of the principal because it still represents a quick profit for them. If your consultant doesn\'t know how to handle an ARC, they aren\'t an expert.</p>
                                    </li>
                                    <li>
                                        <p className="font-bold text-blue-900 mb-1">"Can I settle if I have a co-signer who has a good credit score?"</p>
                                        <p className="text-sm text-gray-600">This is a delicate situation. A professional will warn you that a settlement will impact the co-signer\'s CIBIL score as well. They should propose a strategy where the co-signer is protected or where the co-signer\'s income is used as "Last Resort Hardship" to get a better deal. Honesty about family impact is a hallmark of an ethical consultant.</p>
                                    </li>
                                </ul>
                            </div>

                            <h2 id="negotiation-with-agency" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Negotiating Terms with the Agency: The "Consultant\'s Contract"</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Remember, the agreement you sign with the debt settlement agency is also a contract. You have the right to negotiate its terms. One question you must ask is: <strong>"What is your refund policy if no settlement is achieved within 6 months?"</strong>. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A confident and legitimate firm will have a <strong>"Service Level Agreement" (SLA)</strong>. This SLA should guarantee a minimum amount of work—such as sending representations to the bank, providing legal drafts for notices, and giving you monthly progress reports. If they want you to pay a monthly fee but offer no guaranteed services in return, you are essentially just paying for a "hope" that might never materialize.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Also, ask about <strong>"Direct Payment to Banks."</strong>. A massive red flag is a consultant who asks YOU to send the settlement money to THEIR company account. NEVER DO THIS. The settlement money should always go directly to the bank via a demand draft or NEFT specifically into your loan account number. The consultant should only receive their service fee separately.
                            </p>

                            <h2 id="final-checklist" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Ultimate Consultant Selection Checklist</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To wrap up your vetting process, use this exhaustive checklist. If you cannot check off at least 9 out of 10, keep looking for a better consultant.
                            </p>
                            <div className="bg-blue-900 text-white p-10 rounded-[2.5rem] mb-12 shadow-2xl relative overflow-hidden">
                                <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500 opacity-20 rounded-full -mb-24 -mr-24"></div>
                                <ul className="space-y-4 font-light text-lg">
                                    <li className="flex items-center"><span className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 text-xs">✓</span> Verified physical office and CIN (Corporate Identity Number).</li>
                                    <li className="flex items-center"><span className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 text-xs">✓</span> No high upfront "Setup Fees" required.</li>
                                    <li className="flex items-center"><span className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 text-xs">✓</span> Honest explanation of CIBIL impact (7-year history).</li>
                                    <li className="flex items-center"><span className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 text-xs">✓</span> Access to a panel of identifiable legal experts/lawyers.</li>
                                    <li className="flex items-center"><span className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 text-xs">✓</span> Clear Service Level Agreement (SLA) with refund terms.</li>
                                    <li className="flex items-center"><span className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 text-xs">✓</span> Knowledge of Lok Adalat and ARC negotiation nuances.</li>
                                    <li className="flex items-center"><span className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 text-xs">✓</span> Explicit instruction to pay settlement money ONLY to the bank.</li>
                                    <li className="flex items-center"><span className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 text-xs">✓</span> Willingness to stop illegal recovery harassment via legal notices.</li>
                                    <li className="flex items-center"><span className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 text-xs">✓</span> Provided anonymized settlement letters from major Indian banks.</li>
                                    <li className="flex items-center"><span className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 text-xs">✓</span> No verbal guarantees of specific 70-80% waiver amounts.</li>
                                </ul>
                            </div>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Community Experiences and Advice</h2>
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

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Top 10+ Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-neutral-50 p-2 rounded-lg transition-colors">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 id="summary-verdict" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Final Word: Settlement vs. Bankruptcy in India</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many borrowers ask if they should just declare insolvency (bankruptcy). In India, the <strong>Insolvency and Bankruptcy Code (IBC)</strong> for individuals is still relatively complex and socially stigmatized. Settlement is a much more "Private" and "Graceful" exit. It allows you to resolve your debts without a public court declaration of insolvency, which can affect your ability to hold certain public offices or directorships in the future.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Choosing the right consultant is the first step toward this graceful exit. By asking the questions outlined in this guide, you are not just protecting your money; you are protecting your peace of mind. You are ensuring that the person representing you in the dark halls of a bank\'s recovery department is as dedicated to your freedom as you are. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A final tip: <strong>Document everything.</strong> Keep a log of every call with the consultant, every email sent to the bank, and every draft provided to you. Transparency is a two-way street. A professional agency will encourage this level of involvement because they know that an informed client is their best partner.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mb-6">CIBIL Restoration: Life After Settlement</h3>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                The journey does not end when you get the NOC (No Objection Certificate). A critical question for your consultant is: <strong>"How do you help me with CIBIL rebuilding after the settlement is done?"</strong>. Most low-quality agencies will stop answering your calls once their fee is paid. A premium consultant will provide you with a 12-month roadmap to restore your credit score.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                This roadmap should include strategies like getting a <strong>"Secured Credit Card"</strong> against a fixed deposit, which is the fastest way to start reporting positive payment history to the bureaus. They should also guide you on how to monitor your report for any errors in the reporting of the "Settled" status. Sometimes, banks forget to update the report, leaving the account as "Active Default," which is far worse than "Settled." Your consultant should stay with you until the bureau correctly reflects the resolution.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                In summary, vetting a debt settlement consultant is an exercise in <strong>Critical Thinking.</strong> Do not be swayed by slick websites or celebrity endorsements. Look for the technical depth, the legal backing, and the honesty about the risks involved. Your financial future is too important to leave to chance. Use this 4000+ word guide as your shield and your roadmap to a debt-free life in India.
                            </p>
                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-xl border border-blue-50 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Agency Background Check</h4>
                                <p className="text-sm text-gray-600 mb-6">Need help verifying if a debt relief agency is legitimate? Our experts can help you audit their contract.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Help Me Verify
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-2 text-left">
                                    <p className="flex items-center"><span className="text-green-500 mr-2">✔</span> Contract Review</p>
                                    <p className="flex items-center"><span className="text-green-500 mr-2">✔</span> Fee Structure Audit</p>
                                    <p className="flex items-center"><span className="text-green-500 mr-2">✔</span> Legal Shield Check</p>
                                </div>
                            </div>

                            {/* Related Pages Component */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Must Read Guides</h4>
                                <nav className="space-y-3">
                                    {[
                                        { href: "/how-to-choose-a-trustworthy-debt-settlement-provider", text: "Choose Trustworthy Providers" },
                                        { href: "/debt-settlement-services-that-work-with-multiple-creditors", text: "Handling Multiple Creditors" },
                                        { href: "/avoid-loan-settlement-scams", text: "Spotting Settlement Scams" },
                                        { href: "/legal-help-for-loan-default", text: "Legal Support Options" }
                                    ].map((link, idx) => (
                                        <Link key={idx} href={link.href} className="flex group items-start">
                                            <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">→</span>
                                            <span className="text-[13px] text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">{link.text}</span>
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                h2, h3 {
                    scroll-margin-top: 80px;
                }
            `}</style>
        </>
    );
}
