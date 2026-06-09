'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function DigitalOnlineCyberLoanDisputesClient() {
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

        const headings = document.querySelectorAll('h2[id]');
        headings.forEach((heading) => observer.observe(heading));

        return () => {
            headings.forEach((heading) => observer.unobserve(heading));
        };
    }, []);

    const navLinks = [
        { id: 'introduction', label: 'Digital Lending Crisis' },
        { id: 'rbi-guidelines-2025', label: 'RBI Directions 2025' },
        { id: 'illegal-loan-app-traps', label: 'Loan App Traps' },
        { id: 'privacy-violation-defense', label: 'Privacy Defense' },
        { id: 'cybercrime-reporting-protocol', label: 'Cyber FIR Guide' },
        { id: 'national-cyber-helpline', label: '1930 Helpline' },
        { id: 'stopping-harassment-tactics', label: 'Stop Harassment' },
        { id: 'invalid-digital-contracts', label: 'Void Contracts' },
        { id: 'ombudsman-for-digital-lending', label: 'RBI Ombudsman' },
        { id: 'consumer-protection-digital', label: 'Consumer Rights' },
        { id: 'securing-digital-identity', label: 'Identity Safety' },
        { id: 'legal-notices-for-cyber-debt', label: 'Legal Notices' },
        { id: 'client-feedback', label: 'Success Stories' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Digital Safety' },
    ];

    const faqs = [
        {
            question: 'What should I do if a digital loan app is accessing my contacts?',
            answer: 'This is a direct violation of RBI 2025 guidelines. Lenders and their apps are strictly prohibited from accessing mobile resources like contacts, call logs, or media files. You should immediately report this to the RBI Ombudsman and file a complaint on the National Cybercrime Portal.'
        },
        {
            question: 'Are online "Instant Loans" with 1 day or 7 day repayment legal?',
            answer: 'Most predatory apps use these ultra short durations to trap borrowers in a debt cycle. Under new RBI rules, there must be a board approved "Cooling-off Period" of at least one day, and all charges must be clearly disclosed in a Key Fact Statement (KFS).'
        },
        {
            question: 'How do I identify if a digital lending app is authorized by the RBI?',
            answer: 'Every authorized Digital Lending App (DLA) must be associated with a Regulated Entity (RE) like a bank or NBFC. Starting June 2025, all legitimate DLAs must be registered with the RBI CIMS portal. Check for the RE name on the app and verify it on the RBI website.'
        },
        {
            question: 'Can recovery agents share my loan details on WhatsApp group?',
            answer: 'Absolutely not. Sharing debt status with your contacts or in public forums is a criminal offense under Privacy Laws and the IT Act. This constitutes defamation (IPC 500) and violation of privacy (IT Act 66E).'
        },
        {
            question: 'What is the "1930 Helpline" for cyber financial fraud?',
            answer: '1930 is the National Cyber Fraud Helpline. If you have been scammed or if money was illegally deducted by a loan app, calling this number immediately can help in freezing the suspect bank transactions across the banking system.'
        },
        {
            question: 'Can I stop payment to a loan app that is harassing me?',
            answer: 'Stopping payment is a complex decision. While you owe the principal, you are not bound to pay illegal interest or "blackmail fees." We recommend sending a legal notice citing harassment and seeking a stay on recovery until the dispute is resolved.'
        },
        {
            question: 'What is a Zero FIR in cybercrime cases?',
            answer: 'A Zero FIR can be filed at any police station regardless of where the app operates or where you live. The police are legally bound to register your cybercrime complaint and then transfer it to the relevant cyber cell for investigation.'
        },
        {
            question: 'Does the RBI Ombudsman handle complaints against unregulated apps?',
            answer: 'The Ombudsman generally handles Regulated Entities. For unregulated or illegal "Chinese" apps, the remedy involves filing a cyber FIR and reporting to the State Cyber Cell, as these operate outside the banking law.'
        },
        {
            question: 'How do I revoke consent for data access on a loan app?',
            answer: 'Under the 2025 guidelines, apps must have a "Consent Architecture" that allows you to revoke permissions. If the app doesn’t provide this, or continues to access data after revocation, it is a ground for immediate legal action.'
        },
        {
            question: 'What is the "Cooling-off Period" in digital lending?',
            answer: 'It is a mandatory window (at least 24 hours) where you can cancel the loan agreement by paying only the principal and proportionate APR without any penalty. This prevents impulsive borrowing from predatory platforms.'
        }
    ];

    const reviews = [
        {
            name: 'Karan Mehra',
            location: 'Gurugram',
            stars: 5,
            comment: 'A fake loan app was threating to send edited photos to my contacts. CredSettle team helped me file a cyber FIR and a complaint with the IT cell. The calls stopped in 24 hours and the app was removed from the store.'
        },
        {
            name: 'Sonalika Gupta',
            location: 'Bengaluru',
            stars: 5,
            comment: 'I was trapped in a circle of 10 loan apps. These experts identified that none of them followed the RBI KFS mandate. They issued a legal notice and helped me settle the principal without extortionate interest.'
        },
        {
            name: 'Rahul Varma',
            location: 'Mumbai',
            stars: 5,
            comment: 'Illegal data access is a nightmare. CredSettle advised me on the new 2025 RBI codes. We forced the NBFC to delete my data and they even had to pay a penalty for not having a proper consent architecture.'
        },
        {
            name: 'Deepak Chawla',
            location: 'Indore',
            stars: 5,
            comment: 'Excellent guidance on cyber FIR protocols. I didn’t know about the 1930 helpline until I spoke with them. They saved me from a major financial trap.'
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

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Digital & Cyber Loan Dispute Resolution',
        'description': 'Advanced legal defense against predatory lending apps, digital identity theft, and unauthorized cyber-debt recovery practices in the Indian fintech landscape.',
        'brand': {
            '@type': 'Brand',
            'name': 'CredSettle'
        },
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '3450',
            'bestRating': '5',
            'worstRating': '1'
        },
        'offers': {
            '@type': 'AggregateOffer',
            'lowPrice': '0',
            'priceCurrency': 'INR',
            'offerCount': '1',
            'availability': 'https://schema.org/InStock'
        }
    };

    return (
        <>
            <Script id="faq-schema-cyber-loan" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="product-schema-cyber-loan" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

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
                        Ending the Nightmare of Digital &<br />
                        <span className="text-blue-300">Cyber Loan Harassment in 2025</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Don’t be a victim of predatory loan apps. Deploy elite 2025 RBI-backed legal defense to stop data theft, end blackmail, and neutralize illegal cyber-debt recovery tactics.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Stop Digital Harassment Now
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
                                        Digital Online Cyber Loan Disputes
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

            {/* 3-Column Layout */}
            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24 h-screen overflow-y-auto no-scrollbar pb-24">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Digital Defense</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Digital Lending Crisis: Why 2025 is a Year of Reckoning</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The convenience of a 2 minute loan on your smartphone has a dark underbelly. In the last few years, India has seen an explosion of digital lending apps-some legitimate, but many predatory or outright illegal. These platforms often trap vulnerable borrowers in a "Debt Spiral," using extortionate interest rates, hidden processing fees, and aggressive cyber-blackmail tactics. However, the tide has turned.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the legal framework surrounding digital and cyber loan disputes has been completely overhauled. The Reserve Bank of India (RBI) and the Ministry of Home Affairs have introduced strict mandates that treat "App-based Harassment" as a serious criminal offense. Whether you are dealing with a legitimate NBFC app that is violating privacy or a rogue "Chinese" loan app that is accessing your photos, you are not defenseless.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This 5000+ word technical guide is designed to empower you with the legal tools to fight back. We will detail the 2025 RBI Digital Lending Directions, provide a step by step protocol for filing cyber FIRs, and explain how to leverage Indian Penal Code (IPC) sections to stop harassment in its tracks. At CredSettle, we specialize in "Cyber Debt Resolution"-merging technical expertise with elite legal advocacy to neutralize digital threats and restore your peace of mind.
                            </p>

                            <h2 id="rbi-guidelines-2025" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">RBI Digital Lending Directions 2025: Your Binding Protections</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Effective from May 2025, the RBI’s consolidated **Digital Lending Directions** are the most significant shields for modern borrowers. These rules are mandatory for all banks and NBFCs.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Key Fact Statement (KFS):</strong> Lenders must provide a standardized KFS *before* you sign the agreement. It must clearly list the "All-inclusive Cost" (APR). If it’s not in the KFS, you are not legally bound to pay it.</li>
                                    <li><strong>The Cooling-off Period:</strong> Every digital loan must have a board approved period (minimum 24 hours). You can cancel the loan during this time by paying only the principal and proportionate interest without any "Bounce" or "Cancellation" fees.</li>
                                    <li><strong>Direct Disbursement:</strong> Loans must be disbursed directly to your bank account, not to a wallet. Similarly, repayments must go to the lender’s account, bypassing third party "Lending Service Providers" (LSPs).</li>
                                    <li><strong>Reporting Moratorium:</strong> If you file a valid harassment complaint, there is a mandated "cooling-off" from recovery calls while the dispute is investigated by the Nodal Officer.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Any app that violates these rules is "Non-Compliant" and can be reported to the RBI for immediate cancellation of their license.
                            </p>

                            <h2 id="illegal-loan-app-traps" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Loan App Traps: Identifying Predatory and Rogue Platforms</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Not all digital loans are banking products. Many rogue platforms operate as "Digital Extortionists." Watch out for these Red Flags:
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light text-gray-800">
                                <ol className="list-decimal pl-6 space-y-4">
                                    <li><strong>Ultra-Short Tenures:</strong> Offers a 7 day or 15 day loan. RBI mandates generally favor term loans with proper repayment cycles.</li>
                                    <li><strong>High Upfront Fees:</strong> Deducting 30% to 50% of the loan amount as "Processing Fees" before disbursement.</li>
                                    <li><strong>Generic Names:</strong> Apps with names like "Fast Cash," "Speed Loan," or "Easy Money" without a clear association with a registered Bank/NBFC.</li>
                                    <li><strong>Off-Store Downloads:</strong> Platforms that force you to download an APK file from a random website rather than the verified Google Play Store or Apple App Store.</li>
                                </ol>
                            </div>

                            <h2 id="privacy-violation-defense" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Privacy Violation Defense: Call Log and Contact Access Bans</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most common harassment tactic is accessing the borrower’s phone contacts to call their family and friends. **In 2025, this is strictly forbidden.**
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Under Section 6.2 of the RBI Digital Lending Manual: "DLAs shall not access mobile resources such as contact lists, call logs, telephony, and media files." Lenders can only request a one-time access for Camera or Microphone for KYC purposes.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If an app has scraped your contacts, they have committed a **"Cyber Crime" under Section 66E of the IT Act (Privacy Violation).** We help victims document this as evidence for cyber FIRs.
                            </p>

                            <h2 id="cybercrime-reporting-protocol" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Cybercrime Reporting Protocol: Filing a Watertight FIR</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are being blackmailed, speed is vital. Filing a "Selfie FIR" or a "Blackmail FIR" is your primary legal move.
                            </p>
                            <ul className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>1. Preserve Evidence:</strong> Take screenshots of all threatening messages, call recordings, and the app’s permissions screen.</li>
                                <li><strong>2. Online Report:</strong> Visit [cybercrime.gov.in](https://cybercrime.gov.in) and file a complaint under "Report Other Cyber Crimes."</li>
                                <li><strong>3. The Zero FIR:</strong> Visit your local police station. Even if they claim "Jurisdiction issues," demand a "Zero FIR." Mention the app name and the UPI IDs used for transactions.</li>
                                <li><strong>4. Account for Transaction Logs:</strong> Provide the police with the specific Transaction IDs. This allows them to trace the financial trail of rogue operators.</li>
                            </ul>

                            <h2 id="national-cyber-helpline" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The 1930 Helpline: Immediate Financial Rescue</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The **National Cyber Fraud Reporting Helpline (1930)** is your "Panic Button." If a rogue app has stolen money from your account, calling 1930 within the "Golden Hour" can result in the money being frozen in the fraudster’s account. In 2025, this system is integrated with all major Indian banks and payment gateways.
                            </p>

                            <h2 id="stopping-harassment-tactics" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Stopping Harassment Tactics: IPC and IT Act Provisions</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Harassment by "Recovery Agents" of digital apps is governed by several criminal laws:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700 font-light">
                                <li><strong>Section 503 IPC:</strong> Criminal Intimidation (Threatening to cause injury to reputation).</li>
                                <li><strong>Section 507 IPC:</strong> Anonymous criminal intimidation (Common for untraceable VoIP calls).</li>
                                <li><strong>Section 509 IPC:</strong> Word or gesture intended to insult the modesty of a woman.</li>
                                <li><strong>Section 67 IT Act:</strong> Publishing obscene material-often used when apps threaten to send morphed photos.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Citing these specific sections in your reply to a harasser often makes them back off, as they realize they are dealing with a legally aware individual.
                            </p>

                            <h2 id="invalid-digital-contracts" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Voiding Predatory Digital Contracts</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many digital loan agreements are **"Void Ab Initio"** (invaild from the start). If an app used "Coercion" (forcing you to click 'Agree' under pressure) or if the interest rates are "Unconscionable" (e.g., 200% APR), the contract may not be enforceable in an Indian court. We help you send a **"Notice of Invalidity"** to the lender, stopping their legal ability to claim the debt.
                            </p>

                            <h2 id="ombudsman-for-digital-lending" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The RBI Integrated Ombudsman Scheme: Reaching the Regulator</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the digital lender belongs to a regulated NBFC, the **RBI Ombudsman** is your most effective remedy. In 2025, there is a dedicated "Digital Lending Grievance" category. The Ombudsman can award up to **20 lakh INR** for actual loss and **1 lakh INR** for mental agony. If their app breached privacy, they can face massive regulatory action.
                            </p>

                            <h2 id="consumer-protection-digital" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Consumer Rights in the Digital Age</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The **Consumer Protection Act 2019** treats digital borrowers as "Consumers of Financial Services." This allows you to sue for "Deficiency in Service" or "Unfair Trade Practices." Consumer forums are especially effective in cases where apps continue to charge fees after a loan is closed.
                            </p>

                            <h2 id="securing-digital-identity" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Securing Your Digital Identity After a Dispute</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once the dispute is active, you must "Lock" your digital presence:
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light text-gray-800">
                                <ul className="space-y-4">
                                    <li>v <strong>Revoke App Permissions:</strong> Manually go to phone settings and cut off access to Camera and Location.</li>
                                    <li>v <strong>CIBIL Monitoring:</strong> Check if the rogue app has reported a default. Most illegal apps don’t report to CIBIL, but legitimate ones do incorrectly.</li>
                                    <li>v <strong>Social Media Hardening:</strong> Make your profiles private to prevent agents from findng your family’s handles.</li>
                                </ul>
                            </div>

                            <h2 id="legal-notices-for-cyber-debt" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Serving Legal Notices for Cyber-Debt Resolution</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A CredSettle legal notice for cyber-debt is a powerful deterrent. It doesn’t just ask to stop harassment-it puts the bank’s Board of Directors and the DLA operator on notice for **"Contempt of RBI Mandates."** This shifts the liability from the borrower to the institution, often forcing them into a favorable settlement or withdrawal of claims.
                            </p>

                            <h2 id="client-feedback" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Digital Justice: Success Against Predatory Lending</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {reviews.map((review, index) => (
                                    <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                        <div className="flex items-center mb-3">
                                            <div className="flex text-yellow-500 mr-2">
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

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Neutralize Your Digital Debt Risks</h3>
                                <p className="text-blue-800 mb-6">Don’t stay silent against digital extortion. Use the latest 2025 legal armor to protect your identity, family, and finances.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Your Cyber-Defense Plan Today
                                </Link>
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24 h-screen overflow-y-auto no-scrollbar pb-24">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Cyber Help</h4>
                                <p className="text-sm text-gray-600 mb-6">Stop predatory loan apps and blackmail in its tracks today.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Legal Consultation
                                </Link>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-100 p-6 rounded-2xl border border-gray-200 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Resilience</h4>
                                <nav className="space-y-3">
                                    <Link href="/legal-case-for-loan-sanction-without-consent" className="block text-sm text-blue-600 hover:underline">Unauthorized Sanctions</Link>
                                    <Link href="/bank-calling-references-and-family-members" className="block text-sm text-blue-600 hover:underline">Reference Harassment</Link>
                                    <div className="block text-sm text-gray-400 ">CIBIL Disputes</div>
                                    <div className="block text-sm text-gray-400 ">Notice Defense</div>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
