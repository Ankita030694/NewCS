'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function MissedCarLoanEmiMoreThan90DaysClient() {
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
        { id: 'introduction', label: 'The 90 Day Mark' },
        { id: 'the-npa-classification', label: 'NPA Classification' },
        { id: 'illegal-seizure-tactics', label: 'Illegal Muscle Tactics' },
        { id: 'rbi-repossession-guidelines', label: 'RBI Repo Guidelines' },
        { id: 'mandatory-notices', label: 'Mandatory Notices' },
        { id: 'negotiation-vs-surrender', label: 'Surrender vs Repo' },
        { id: 'protecting-your-vehicle', label: 'Protect Your Vehicle' },
        { id: 'legal-injunctions', label: 'Legal Injunctions' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' },
    ];

    const faqs = [
        {
            question: 'Can recovery agents seize my car on the road without notice?',
            answer: 'No, this is completely illegal. The Supreme Court of India and RBI guidelines strictly prohibit the use of muscle men or force to repossess vehicles on public roads or from your residence without prior statutory notices.'
        },
        {
            question: 'What happens to my car loan after 90 days of non-payment?',
            answer: 'After 90 days of continuous default, your loan account is classified as a Non-Performing Asset (NPA). At this stage, the bank can initiate formal recovery proceedings under the SARFAESI Act, which allows them to seize the secured asset following a strict legal protocol.'
        },
        {
            question: 'How many days of notice must the bank give before repossession?',
            answer: 'Under the SARFAESI Act, the bank must issue a 60 day notice under Section 13(2). If you fail to repay, they must provide another notice before taking symbolic possession, followed by a pre-sale notice before auctioning the vehicle.'
        },
        {
            question: 'Can I negotiate a settlement after my car loan becomes an NPA?',
            answer: 'Yes, negotiation is always an option. You can offer a one time settlement, request loan restructuring, or opt for a voluntary surrender to minimize the shortfall balance rather than facing forced repossession.'
        },
        {
            question: 'What should I do if agents try to block my car?',
            answer: 'Lock your doors, stay inside the vehicle, and call the local police immediately at 112. Forceful seizure is a criminal offense, and you have the right to file an FIR against the agents and the bank for criminal intimidation and extortion.'
        }
    ];

    const reviews = [
        {
            name: 'Rajesh K.',
            location: 'Mumbai',
            stars: 5,
            comment: 'Agents threatened to tow my car from my office. CredSettle guided me on the RBI rules and helped me send a legal notice to the bank. The harassment stopped immediately, and we negotiated a proper settlement.'
        },
        {
            name: 'Sunita P.',
            location: 'Delhi',
            stars: 5,
            comment: 'I missed 4 EMIs and panicked when agents stopped my husband on the road. Understanding the mandatory 60 day notice rule saved us. We filed a police complaint and the bank stepped back.'
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
        'name': 'Car Loan Repossession Legal Guide',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '2',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-missed-car-loan" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-missed-car-loan" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        Missed Car Loan EMI for Over 90 Days?<br />
                        <span className="text-blue-300">Know the Vehicle Seizure Rules</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Auto loans are secured debts, but banks cannot use mafia tactics to take your car. Discover the strict RBI guidelines, required legal notices, and how to protect your vehicle from illegal repossession.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Stop Repossession Harassment
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
                                    <Link href="/services/car-loan-settlement" className="ml-1 font-medium text-gray-500 hover:text-blue-600 md:ml-2">Car Loan Settlement</Link>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ml-1 font-medium text-gray-500 md:ml-2">
                                        Seizure Rules
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Survival Guide</h3>
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
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: The Reality of the 90 Day Default</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Falling behind on a car loan creates a uniquely stressful situation. Unlike unsecured personal loans or credit cards, an auto loan is backed by physical collateral: your vehicle. When you miss your EMI payments for an extended period, the lender has a legal right to reclaim that asset. However, a major misconception is that banks can act like vigilantes, sending agents to snatch your keys in the middle of traffic.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The 90 day mark is a critical threshold in the Indian banking system. Up until 89 days, your account is considered in arrears or default. You will receive phone calls, emails, and SMS reminders. The tone might become aggressive, but formal legal repossession cannot begin yet. It is only when you cross 90 consecutive days of non payment that the rules of the game change entirely.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                This guide is dedicated to untangling the complexities of car loan default. We will explore exactly what happens to your loan classification, the severe restrictions placed on recovery agents by the Reserve Bank of India, and the legal protocols that banks must follow before they can even touch your vehicle. If you are facing harassment right now, you need to know your rights.
                            </p>

                            <h2 id="the-npa-classification" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Section 2: Understanding the NPA Classification</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The term NPA stands for Non Performing Asset. In banking terminology, an asset is a loan that generates interest income for the bank. When you stop paying, it stops performing. According to the strict guidelines laid down by the Reserve Bank of India, a term loan must be classified as an NPA if the interest or principal installment remains overdue for a period of more than 90 days.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once your car loan is officially tagged as an NPA, the bank shifts its strategy from collection to recovery. The account is moved from the standard customer service department to the specialized legal and recovery division. This is the moment when the bank can invoke the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act of 2002.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                The SARFAESI Act was designed to allow banks to recover their money by seizing secured collateral without having to endure the lengthy process of civil court litigation. However, this immense power comes with mandatory procedural safeguards. The bank cannot simply issue an internal memo and send a tow truck. They must follow a rigid timeline of statutory notices to give you, the borrower, every possible chance to clear the dues.
                            </p>

                            <h2 id="illegal-seizure-tactics" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Section 3: Beware of Illegal Muscle Tactics</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Despite the clear laws, many banks outsource their recovery processes to third party agencies that operate on the fringes of legality. These agencies are paid on a commission basis, earning a percentage of what they recover or a flat fee for repossessing a vehicle. This incentive structure often leads to rogue behavior.
                            </p>

                            {/* VISUAL ELEMENT 1: Alert Banner */}
                            <div className="bg-red-50 border-l-8 border-red-600 p-8 rounded-r-2xl mb-10 shadow-md relative">
                                <div className="absolute top-4 right-4 bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-red-200">
                                    Legal Warning
                                </div>
                                <h4 className="text-2xl font-black text-red-900 mb-4 flex items-center gap-3">
                                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                    Spotting Illegal Repossession Attempts
                                </h4>
                                <p className="text-red-800 font-medium mb-4">
                                    The Supreme Court of India has repeatedly ruled that banks and their agents cannot use force, intimidation, or coercion to seize vehicles. The following actions are strictly illegal:
                                </p>
                                <ul className="space-y-3 text-red-900 mb-0 font-light">
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2 font-bold text-xl">•</span>
                                        <span><strong>Public Interception:</strong> Stopping your car in the middle of traffic, at toll plazas, or outside your workplace to force you out of the vehicle.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2 font-bold text-xl">•</span>
                                        <span><strong>Physical Threats:</strong> Using bouncers, muscle men, or any form of physical intimidation to snatch the keys from you or your family members.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2 font-bold text-xl">•</span>
                                        <span><strong>Without Prior Notice:</strong> Attempting to tow the car from your driveway without having served the mandatory legal notices under the SARFAESI Act.</span>
                                    </li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-10">
                                If you experience any of these tactics, you are facing a criminal offense, not just a banking dispute. You have the right to call the police, record the interaction on your smartphone, and file an FIR against the individuals and the bank management for criminal intimidation, wrongful restraint, and attempted robbery.
                            </p>

                            <h2 id="rbi-repossession-guidelines" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Section 4: The Strict RBI Guidelines on Recovery</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Reserve Bank of India has issued comprehensive directives regarding the conduct of recovery agents. If you are dealing with aggressive callers or unannounced visits, it is crucial to familiarize yourself with these rules. You can read a detailed breakdown in our guide on the <Link href="/rbi-guidelines-for-recovery-agents-2026" className="text-blue-600 underline font-medium">RBI guidelines for recovery agents</Link>.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Banks are entirely responsible for the actions of their recovery agents. The RBI mandates that agents must rely on legal and acceptable means of recovery. They are expressly forbidden from resorting to harassment, which includes persistently bothering you at odd hours, threatening your family, or attempting to publicly humiliate you. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Furthermore, the RBI insists that before taking repossession of a vehicle, the bank must have a board approved policy in place detailing the procedure. This policy must explicitly mention the notice period required before seizure, the circumstances under which the notice period can be waived, and the procedure for valuing and selling the repossessed vehicle. The borrower must be given a fair chance to clear the dues or restructure the loan before drastic measures are taken.
                            </p>

                            <h2 id="mandatory-notices" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Section 5: The Pre-Seizure Notice Protocol</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Repossession is a process, not an event. The law demands that banks follow a very specific paper trail. If they skip a step, the entire repossession attempt can be challenged in the Debt Recovery Tribunal or civil courts.
                            </p>

                            {/* VISUAL ELEMENT 2: Checklist */}
                            <div className="bg-gray-900 text-white p-8 rounded-3xl mb-10 shadow-2xl">
                                <h4 className="text-2xl font-black mb-6 flex items-center text-blue-300">
                                    Statutory Notice Checklist
                                </h4>
                                <div className="space-y-6">
                                    <div className="flex items-start bg-gray-800 p-5 rounded-2xl border border-gray-700">
                                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">1</div>
                                        <div>
                                            <h5 className="font-bold text-lg mb-1 text-white">The Section 13(2) Demand Notice</h5>
                                            <p className="text-gray-300 text-sm font-light leading-relaxed">Once the account is an NPA, the bank issues a notice under Section 13(2) of the SARFAESI Act. This notice demands that you clear the entire outstanding liability within 60 days. You have the right to reply to this notice with your objections or settlement proposals within 15 days.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-gray-800 p-5 rounded-2xl border border-gray-700">
                                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">2</div>
                                        <div>
                                            <h5 className="font-bold text-lg mb-1 text-white">The Possession Notice</h5>
                                            <p className="text-gray-300 text-sm font-light leading-relaxed">If you fail to pay within the 60 day period, the bank can proceed to take possession of the vehicle under Section 13(4). They must serve a specific possession notice stating their intent to seize the asset.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start bg-gray-800 p-5 rounded-2xl border border-gray-700">
                                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">3</div>
                                        <div>
                                            <h5 className="font-bold text-lg mb-1 text-white">The Pre-Sale Notice</h5>
                                            <p className="text-gray-300 text-sm font-light leading-relaxed">Even after seizing the car, the bank cannot sell it secretly. They must issue a pre sale notice (usually giving you 7 to 30 days, depending on the specific loan agreement and vehicle type) allowing you a final chance to pay the dues and reclaim your car before it is auctioned.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-10">
                                If an agent attempts to seize your car but cannot produce the formal possession notice, or if you never received the initial 60 day demand notice, their actions are legally invalid. You must document these failures.
                            </p>

                            <h2 id="negotiation-vs-surrender" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Section 6: Voluntary Surrender vs. Forced Repossession</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you have suffered a genuine financial setback, perhaps job loss or a medical emergency, and simply cannot afford the EMIs anymore, you might feel trapped. However, you still have strategic choices to make. You can either wait for the bank to forcibly seize the vehicle, or you can opt for voluntary surrender.
                            </p>

                            {/* VISUAL ELEMENT 3: Comparison Table */}
                            <div className="overflow-x-auto my-10 bg-white rounded-3xl shadow-lg border border-gray-200">
                                <table className="min-w-full divide-y divide-gray-200 text-left text-sm md:text-base">
                                    <thead className="bg-blue-900 text-white">
                                        <tr>
                                            <th scope="col" className="px-6 py-5 font-bold uppercase tracking-wider w-1/2">Voluntary Surrender</th>
                                            <th scope="col" className="px-6 py-5 font-bold uppercase tracking-wider w-1/2 border-l border-blue-800">Forced Repossession</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-5 text-gray-700">You proactively drive the car to the bank's yard and hand over the keys and documents.</td>
                                            <td className="px-6 py-5 text-gray-700 border-l border-gray-200">Agents seize the car without your consent, often causing stress and public embarrassment.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-5 text-gray-700">You avoid towing charges, yard fees, and exorbitant recovery agent commissions.</td>
                                            <td className="px-6 py-5 text-gray-700 border-l border-gray-200">The bank adds massive towing fees, parking charges, and legal costs to your outstanding loan balance.</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-5 text-gray-700">You maintain some dignity and leverage to negotiate the final shortfall amount.</td>
                                            <td className="px-6 py-5 text-gray-700 border-l border-gray-200">The bank dictates terms, and the car is often sold at a heavily distressed auction price.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a car is sold by the bank, the sale price rarely covers the full outstanding loan balance plus all the accumulated penalties and interest. This difference is known as the shortfall. If you surrender the car voluntarily, you can negotiate this shortfall much more effectively. For a deeper understanding of this strategy, explore our detailed guide on <Link href="/voluntary-surrender-vehicle-car-loan-shortfall" className="text-blue-600 underline font-medium">voluntary surrender and car loan shortfall</Link>.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Always document a voluntary surrender with a formal surrender letter, signed and acknowledged by the bank manager. Never hand over the keys to a third party agent without a stamped receipt from the bank branch.
                            </p>

                            <h2 id="protecting-your-vehicle" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Section 7: How to Protect Your Vehicle Legally</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you want to keep your car and need time to arrange funds, you must take proactive legal steps. Ignoring the bank's calls will only accelerate the repossession process.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                First, respond to the Section 13(2) demand notice in writing within the 15 day window. State your financial hardship clearly and propose a realistic repayment plan or request a restructuring of the loan. While the bank is not obligated to accept your proposal, they are legally required to reply to your objections. This creates a documented paper trail demonstrating your intent to pay, which is vital if the matter goes to court.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Second, if you face abusive calls or threats of illegal seizure, you must know <Link href="/can-recovery-agents-abuse-you-legally-india" className="text-blue-600 underline font-medium">if recovery agents can abuse you legally in India</Link>. Send a formal legal notice for harassment to the bank's grievance officer. Cite the specific RBI circulars on fair practices. Banks despise negative attention from regulators, and a well drafted legal notice often forces them to recall aggressive agencies and assign the case to senior officers who can actually negotiate a fair settlement.
                            </p>

                            <h2 id="legal-injunctions" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Section 8: Seeking Legal Injunctions</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In extreme cases where the bank ignores procedural rules or employs violent tactics, you can approach the civil court to seek a temporary injunction against the seizure. An injunction is a court order demanding that the bank halt all recovery actions until the dispute is heard.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                To secure an injunction, your legal counsel must prove that the bank violated the SARFAESI guidelines, such as failing to serve the demand notice properly or using criminal force. While an injunction does not erase your debt, it buys you precious time to organize funds, negotiate a settlement, or arrange a buyer for the vehicle yourself to secure a much better price than a bank auction.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Client Success Stories</h2>
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
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Protect Your Vehicle Today.</h3>
                                <p className="text-blue-800 mb-6">Do not wait for agents to show up at your doorstep. Our legal experts can halt illegal recovery tactics and negotiate a fair resolution with your bank.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Legal Intervention Now
                                </Link>
                            </div>

                            <div className="mt-12 text-[0.65rem] text-gray-400 uppercase tracking-widest text-center opacity-60">
                                Educational Disclaimer: This content provides general information regarding borrower rights and banking regulations in India. It does not constitute formal legal advice. If you are facing asset seizure, please consult with a qualified advocate immediately. CredSettle is a social fintech mediation platform.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Facing Harassment?</h4>
                                <p className="text-sm text-gray-600 mb-6">We can send an immediate Legal Notice to stop agents from visiting your house today.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Stop the Agents
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v 24hr Legal Response</p>
                                    <p>v RBI Compliance Audit</p>
                                    <p>v Stop Illegal Seizure</p>
                                    <p>v Negotiate Settlement</p>
                                </div>
                            </div>

                            {/* Related Expertise */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Seizure Relief Vault</h4>
                                <nav className="space-y-3">
                                    <Link href="/rbi-guidelines-for-recovery-agents-2026" className="block text-sm text-blue-600 hover:underline">RBI Recovery Rules</Link>
                                    <Link href="/voluntary-surrender-vehicle-car-loan-shortfall" className="block text-sm text-blue-600 hover:underline">Voluntary Vehicle Surrender</Link>
                                    <Link href="/can-recovery-agents-abuse-you-legally-india" className="block text-sm text-blue-600 hover:underline">Anti Harassment Rights</Link>
                                    <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="block text-sm text-blue-600 hover:underline">Loan Settlement Guide</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
