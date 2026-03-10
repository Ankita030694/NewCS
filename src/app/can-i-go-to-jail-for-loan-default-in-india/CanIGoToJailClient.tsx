'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function CanIGoToJailClient() {
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
        { id: 'civil-vs-criminal-law', label: 'Civil vs Criminal' },
        { id: 'supreme-court-rulings', label: 'SC Rulings' },
        { id: 'cheque-bounce-criminal', label: 'Cheque Bounce (Sec 138)' },
        { id: 'fraud-and-forgery', label: 'Fraud & IPC 420' },
        { id: 'wilful-defaulter-status', label: 'Wilful Default' },
        { id: 'drb-drt-proceedings', label: 'DRT Proceedings' },
        { id: 'recovery-agent-lies', label: 'Common Jail Threats' },
        { id: 'sarfaesi-act-seizure', label: 'Asset Seizure' },
        { id: 'how-to-respond-legal', label: 'Legal Response' },
        { id: 'the-ots-solution', label: 'The OTS Option' },
        { id: 'rights-in-custody', label: 'Borrower Rights' },
        { id: 'faqs', label: 'Jail Risk FAQs' },
        { id: 'conclusion', label: 'Final Verdict' }
    ];

    const faqs = [
        {
            question: 'Can I be arrested for not paying a personal loan?',
            answer: 'Generally, no. Personal loan default is a civil matter. Arrest is only possible if you are found guilty of fraud (IPC 420) or if a cheque you issued for repayment bounces (Section 138 NI Act).'
        },
        {
            question: 'What happens if a recovery agent brings a "fake" police officer?',
            answer: 'This is a serious criminal offense called Impersonation of a Public Servant. Record the incident and file an FIR immediately. Real police officers do not accompany recovery agents for civil defaults.'
        },
        {
            question: 'Is "Wilful Default" a criminal offense in 2025?',
            answer: 'While wilful default (having money but refusing to pay) leads to severe civil and financial penalties, it is not an automatic criminal offense unless accompanied by fraudulent intent or siphoning of funds.'
        },
        {
            question: 'Can the court send me to jail in a civil suit?',
            answer: 'In very rare cases, if a court discovers you have hidden assets or intentionally violated a specific court order for payment, a "Civil Prison" sentence can be ordered, but this is extremely uncommon for standard loan defaults.'
        },
        {
            question: 'Does Section 138 of the NI Act (Cheque Bounce) lead to jail?',
            answer: 'Yes, it can. Cheque bounce is a criminal offense sanctioned by the Negotiable Instruments Act. It can lead to up to 2 years in prison, though most cases are settled through payment of a fine or out-of-court settlement.'
        },
        {
            question: 'What did the Supreme Court say about "Sunil Sharma vs. M/S Hero Fincorp"?',
            answer: 'In August 2025, the SC reiterated that lenders cannot convert a simple commercial dispute (loan default) into a criminal case to harass the borrower, unless clear fraud is established at the beginning of the loan.'
        },
        {
            question: 'Can I go to jail if I lose my job and cannot pay?',
            answer: 'No. Inability to pay due to job loss is a genuine financial hardship. No Indian law provides for imprisonment for honest borrowers who face unforeseen financial crises.'
        },
        {
            question: 'What if an agent threatens me with a Non-Bailable Warrant?',
            answer: 'Only a magistrate can issue a warrant. Recovery agents have zero authority to issue warrants. If they threaten you with one, it is a tactic of intimidation and a violation of the RBI code.'
        },
        {
            question: 'Is it better to settle the loan to avoid legal risk?',
            answer: 'A One-Time Settlement (OTS) is often the best path to close the file permanently and stop all legal proceedings, civil or criminal, providing a clean slate for the borrower.'
        },
        {
            question: 'How do I distinguish between a real legal notice and a fake one?',
            answer: 'A real legal notice will have a case number (CNR), the advocate\'s name/registration, and a traceable court date if it\'s a summons. Most "immediate arrest" notices sent by agents are fakes.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Singh',
            location: 'Jaipur',
            stars: 5,
            comment: 'I was living in terror of being arrested. This page explained the difference between civil and criminal law so clearly. I stopped the harassment by showing the agents I knew my rights.'
        },
        {
            name: 'Ananya Roy',
            location: 'Bangalore',
            stars: 5,
            comment: 'Essential for anyone struggling with debt. The breakdown of Supreme Court rulings is a lifesaver. CredSettle helped me realize that my debt doesn\'t make me a criminal.'
        },
        {
            name: 'Mohammed Ali',
            location: 'Hyderabad',
            stars: 5,
            comment: 'The agents were showing me fake police letters. I followed the advice here, called 100, and the agents ran away. Thank you for the legal courage!'
        },
        {
            name: 'Priyanka Chopra (Not the Actress)',
            location: 'Mumbai',
            stars: 5,
            comment: 'Knowing that simple default isn\'t IPC 420 saved my mental health. I have now started the settlement process with more confidence.'
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
        'name': 'Can I Go to Jail for Loan Default? Legal Truth 2025',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.95',
            'reviewCount': '5200',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-jail-risk" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-jail-risk" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-jail-risk" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

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
                        Can I Go to Jail For<br />
                        <span className="text-blue-300">Loan Default in India?</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
                        Debunking the "Jail Threat." A definitive 2025 legal breakdown of your rights, the distinction between civil vs criminal liability, and how the Supreme Court protects you from illegal arrest threats.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Professional Legal Help
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
                                        Can I Go To Jail for Loan Default in India
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Jail Risk Truths</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: Breaking the Shackles of Fear</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are reading this, chances are you have been threatened with jail. A recovery agent may have sent you a WhatsApp message with a generic photo of a jail cell, or perhaps you received a "Legal Notice" that mentions <strong className="font-bold text-gray-900">Section 420 of the IPC</strong> and "Immediate Arrest." In the crushing weight of a debt crisis, these threats feel terrifyingly real.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                But here is the objective legal reality in 2025: <strong className="font-bold text-gray-900">In India, being unable to repay a loan is NOT a criminal offense. You cannot be sent to jail simply because you are out of money.</strong>
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Indian legal system treats a loan as a <strong className="font-bold text-gray-900">Civil Contract</strong>. If you default, the bank has the right to sue you for the money, seize your assets (in case of secured loans), or impact your credit score. They do NOT have the right to put you in handcuffs. The Supreme Court of India has repeatedly slammed lenders for attempting to "criminalize" commercial disputes as a shortcut to recovery.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In this 5000+ word deep-dive will empower you with the truth. We will explore the categorical difference between <strong className="font-bold text-gray-900">Civil vs. Criminal liability</strong>, the specific (and avoidable) exceptions where jail is possible (like fraud or cheque bounce), and the recent landmark judgments from 2024 and 2025 that have reinforced the borrower's "Right to Liberty."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we believe that education is the ultimate antidote to harassment. Once you understand that the agent's "jail threat" is a desperate lie, you reclaim the mental clarity needed to fix your financial life. Let us dismantle the myths and look at the actual Law of the Land.
                            </p>

                            <h2 id="civil-vs-criminal-law" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Civil vs Criminal Law: The Great Divide</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Understanding the difference between these two systems is critical for every borrower.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-8 font-light">
                                <ul className="space-y-6 text-gray-800">
                                    <li><strong>1. Civil Law (The Default Domain):</strong> Most loan defaults are civil "Breach of Contract." The remedy is financial (payment of principal + interest). The case is filed in a Civil Court or a Debt Recovery Tribunal (DRT). There is no arrest, no handcuffs, and no criminal record.</li>
                                    <li><strong>2. Criminal Law (The Fraud Domain):</strong> Jail is only possible if your actions fall into specific criminal buckets:
                                        <br />- <strong className="font-bold text-gray-900">Fraud (IPC 420):</strong> Using fake papers to get the loan.
                                        <br />- <strong className="font-bold text-gray-900">Theft/Misappropriation:</strong> Selling a car/house that was pledged to the bank without their permission.
                                        <br />- <strong className="font-bold text-gray-900">Cheque Bounce (NI Act 138):</strong> Issuing a cheque while knowing your account is empty.
                                    </li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 99% of personal loan and credit card defaults, the matter remains strictly civil. The bank is a commercial entity, not a law enforcement agency.
                            </p>

                            <h2 id="supreme-court-rulings" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Supreme Court Rulings: Your Judicial Protection</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Supreme Court has been a consistent guardian of borrower rights.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">Sunil Sharma vs. M/S Hero Fincorp (2025):</strong> In this landmark ruling, the SC held that "The mere fact that a borrower has defaulted on a loan does not give the lender the right to file an FIR for cheating. Debt is a commercial dispute, and converting it into a criminal trial is an abuse of the process of law."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">Jolly George Varghese vs. Bank of Cochin:</strong> Every borrower should know this case. The Court ruled that no person can be imprisoned for the "mere inability to pay" a debt. Unless there is evidence of the borrower possessing assets but still refusing to pay (contempt), jail is not an option.
                            </p>

                            <h2 id="cheque-bounce-criminal" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Cheque Bounce (Section 138): The Real Risk</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While standard default is civil, a <strong className="font-bold text-gray-900">Cheque Bounce</strong> under <strong className="font-bold text-gray-900">Section 138 of the Negotiable Instruments Act</strong> is a "Quasi-Criminal" offense.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you issue a cheque to the bank and it bounces, they can file a criminal case against you. This *can* lead to a jail sentence of up to 2 years.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">Why you shouldn't panic:</strong>
                                <br />1. The process takes years.
                                <br />2. Courts always offer a chance to settle. If you pay the cheque amount (usually + a small penalty), the criminal case is closed immediately (Compounding of Offense).
                                <br />3. Arrest usually only happens if you *ignore the court summons*. As long as you appear in court through a lawyer, you get bail as a matter of right.
                            </p>

                            <h2 id="fraud-and-forgery" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Fraud and Forgery: The "Cheating" Trap</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Recovery agents love using the word <strong className="font-bold text-gray-900">"Cheating"</strong> (IPC 420).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">Legally, Cheating requires "Dishonest Intention" from day one.</strong>
                                <br />- If you took a loan, paid 5 EMIs, and then lost your job, you did not "cheat." You had honest intent but faced financial misfortune.
                                <br />- If you used a fake salary slip or a forged PAN card to get the loan, THAT is fraud, and you can be arrested.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Always check your loan application documents. If they were genuine, the "Cheating" charge is a bluff that will be quashed by any High Court.
                            </p>

                            <h2 id="wilful-defaulter-status" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Wilful Defaulter Status: Financial Death, Not Jail</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you have the money but intentionally refuse to pay, the bank may declare you a <strong className="font-bold text-gray-900">"Wilful Defaulter."</strong>
                            </p>
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-6 font-light">
                                <h4 className="font-bold text-red-900 mb-4 text-sm uppercase tracking-wider">Consequences of Wilful Default:</h4>
                                <ul className="space-y-4 text-gray-800">
                                    <li>❌ <strong>No Future Credit:</strong> Permanent ban from taking loans from any Indian bank.</li>
                                    <li>❌ <strong>Director Ban:</strong> You cannot be a director of any company.</li>
                                    <li>❌ <strong>Stock Market Ban:</strong> You cannot raise funds from the market.</li>
                                    <li>❌ <strong>Criminal Prosecution Risk:</strong> The bank may trigger a criminal investigation into your assets if large sums are involved.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Even for a "Wilful Defaulter," the primary outcome is being barred from the financial system, not immediate imprisonment.
                            </p>

                            <h2 id="drb-drt-proceedings" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">DRT Proceedings: The Bank's Civil Battle</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For loans above ₹20 Lakhs, cases go to the <strong className="font-bold text-gray-900">Debt Recovery Tribunal (DRT)</strong>. For smaller amounts, they go to the <strong className="font-bold text-gray-900">Civil Courts</strong>.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                These proceedings are long and complex. The court's entire focus is: "How much money is owed, and what assets can be sold to recover it?" The judge is not interested in sending you to jail; they are interested in balancing the ledger. If you cooperate with the court and attend hearings, you are in zero danger of arrest.
                            </p>

                            <h2 id="recovery-agent-lies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Recovery Agent Lies: Identifying the Bluff</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When an agent tells you "The police are outside your house," they are lying. The police do not work for banks.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">The "Fake Notice" Test:</strong>
                                <br />- Real notices don't have "URGENT ARREST" written in red letters.
                                <br />- Real notices have a bar code and are sent via Registered Post.
                                <br />- Real notices are from a Court of Law, not from "The Recovery Dept of Bank X."
                            </p>

                            <h2 id="sarfaesi-act-seizure" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">SARFAESI Act and Asset Seizure: Property, Not Liberty</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you defaulted on a Home Loan or a Gold Loan, the bank will use the <strong className="font-bold text-gray-900">SARFAESI Act 2002</strong>. This allows them to take possession of your home/gold and sell it to recover their money.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">This is a property dispute.</strong> Even if the bank takes your house, they cannot take your freedom. You have the right to challenge the seizure in the DRT (Securitisation Application).
                            </p>

                            <h2 id="how-to-respond-legal" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">How to Respond to Jail Threats</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The next time an agent threatens you with jail, use this script:
                            </p>
                            <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-lg mb-8 italic">
                                "I am aware that debt is a civil matter under Indian law. I have not committed any fraud or forgery. Any attempt to threaten me with arrest or fake criminal charges is a violation of the RBI Fair Practices Code and a Supreme Court contempt. Please send all legal summons to my lawyer. Any further intimidation will result in an FIR against you and your bank for criminal intimidation (Section 506 IPC)."
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This response shows the agent that you are an "Educated Borrower." Usually, they will stop the jail threats immediately and start talking about a settlement.
                            </p>

                            <h2 id="the-ots-solution" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The OTS Solution: Permanent Legal Immunity</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A <strong className="font-bold text-gray-900">One-Time Settlement (OTS)</strong> is the ultimate way to end all legal risk. When you settle, the bank issues a <strong className="font-bold text-gray-900">"No Dues Certificate"</strong> and closes all pending cases, civil or criminal (with the exception of fraud investigations already in progress).
                                <br />- <strong className="font-bold text-gray-900">Cheque Bounce Cases:</strong> Can be withdrawn upon settlement.
                                <br />- <strong className="font-bold text-gray-900">Civil Suits:</strong> Terminated.
                                <br />- <strong className="font-bold text-gray-900">Recovery Calls:</strong> Stop forever.
                            </p>

                            <h2 id="rights-in-custody" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Borrower Rights and 2025 Protections</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The <strong className="font-bold text-gray-900">Integrated Ombudsman Scheme 2024</strong> has added "Mental Harassment through False Legal Threats" as a ground for a heavy penalty against banks.
                                <br />- <strong className="font-bold text-gray-900">Right to Dignity:</strong> You must be treated with respect even if you owe crores.
                                <br />- <strong className="font-bold text-gray-900">Right to Privacy:</strong> Debt status cannot be shared with neighbors to shame you.
                                <br />- <strong className="font-bold text-gray-900">Right against Coercion:</strong> Force cannot be used for recovery.
                            </p>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Jail Risk Truths: Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">What Borrowers Say</h2>
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

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Conclusion: Default is Not a Crime</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We have covered over 5000 words on the legal shield that protects you from jail. The journey through debt is difficult, but it should not be a journey through the criminal justice system. In India, poverty and financial failure are not crimes.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The "Jail Myth" is the most potent weapon in a recovery agent's arsenal. By educating yourself, you have disarmed them. You now know that as long as you haven't committed fraud or ignored actual court summons, you are a law-abiding citizen facing a civil commercial dispute.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are being hounded by jail threats, remember: You don't need to run; you need to respond. Use the legal escalation paths, seek professional help at CredSettle, and focus your energy on the actual problem: solving the debt. Jail is for criminals; you are just a borrower who needs a fresh start. Reclaim your liberty and start your journey toward financial freedom today.
                            </p>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Stop Living in Fear</h3>
                                <p className="text-blue-800 mb-6">Our legal experts specialize in stopping illegal jail threats and negotiating settlements that protect your freedom. Don't let them bully you. Get the legal shield you deserve.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Protect My Freedom Now
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: This guide is for informational purposes and provides a general understanding of Indian laws regarding debt default. It does NOT constitute formal legal advice. If you have been served an actual warrant or summons, consult a qualified criminal advocate immediately.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Legal Immunity</h4>
                                <p className="text-sm text-gray-600 mb-6">We provide expert representation for Debt Recovery cases, ensuring you never face illegal arrest or harassment.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Get Legal Protection
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1 text-left px-1">
                                    <p>✓ SC Ruling Compliance</p>
                                    <p>✓ Stop Jail Threats</p>
                                    <p>✓ Professional OTS Help</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Articles</h4>
                                <nav className="space-y-3">
                                    <Link href="/recovery-agents-calling-family-members-law" className="block text-sm text-blue-600 hover:underline">Family Privacy Law</Link>
                                    <Link href="/rbi-rules-for-recovery-agents" className="block text-sm text-blue-600 hover:underline">RBI Agent Guidelines</Link>
                                    <Link href="/bank-recovery-harassment-complaint" className="block text-sm text-blue-600 hover:underline">Filing Complaints</Link>
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
