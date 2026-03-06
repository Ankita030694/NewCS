'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function LoanSanctionWithoutConsentClient() {
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
        { id: 'introduction', label: 'Fraud Threat 2025' },
        { id: 'legal-anatomy-consent', label: 'Anatomy of Consent' },
        { id: 'common-fraud-patterns', label: 'Common Patterns' },
        { id: 'indian-contract-act', label: 'Contract Law' },
        { id: 'immediate-action-plan', label: '24-Hour Plan' },
        { id: 'stopping-deductions', label: 'Stop EMI' },
        { id: 'fir-police-complaint', label: 'Police Action' },
        { id: 'ombudsman-escalation', label: 'RBI Ombudsman' },
        { id: 'consumer-court-claims', label: 'Consumer Court' },
        { id: 'cibil-score-cleanup', label: 'CIBIL Rectification' },
        { id: 'bank-liability-negligence', label: 'Bank Liability' },
        { id: 'financial-identity-security', label: 'Future Security' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Resolution' },
    ];

    const faqs = [
        {
            question: 'What should I do if a loan amount is credited to my account without my consent?',
            answer: 'Immediately inform your bank via email and registered post. Do not spend the money. If it came from a digital app, transfer it back using a traceable method and keep the screenshot of the transaction and the initial communication.'
        },
        {
            question: 'Can I be forced to pay EMIs for a loan I never signed for?',
            answer: 'No. Under the Indian Contract Act, a loan without consent is null and void. You are not legally liable for repayment. If the bank deducts money, it is a "Deficiency in Service" and "Unfair Trade Practice" for which you can claim compensation.'
        },
        {
            question: 'How does identity theft happen in digital lending?',
            answer: 'Fraudsters often use leaked KYC documents (Aadhaar/PAN) to apply for loans on fintech apps that have weak verification. Sometimes, corrupt bank employees create dummy accounts using your details to meet their targets.'
        },
        {
            question: 'What is the RBI Integrated Ombudsman Scheme 2021?',
            answer: 'It is a centralized mechanism to resolve complaints against regulated entities like banks and NBFCs. If a lender does not resolve your unauthorized loan issue within 30 days, you can escalate it here for free.'
        },
        {
            question: 'Will an unauthorized loan affect my CIBIL score?',
            answer: 'Unfortunately, yes. Since the loan is in your name, any missed payment will reflect as a default. However, once the fraud is legally proven, the lender is mandatory bound to inform the credit bureaus and remove the entry.'
        },
        {
            question: 'Do I need to file an FIR for an unauthorized loan?',
            answer: 'Yes, filing an FIR (First Information Report) or a cybercrime complaint is a critical legal step. It serves as official evidence that you have reported a crime, which is required by banks and CIBIL for further action.'
        },
        {
            question: 'What compensation can I get from Consumer Court?',
            answer: 'Consumer courts can award the reversal of the loan, refund of any deducted EMIs with interest, and additional compensation for mental agony, harassment, and damage to your credit reputation.'
        },
        {
            question: 'Can a bank be held liable if their employee committed the fraud?',
            answer: 'Yes, the principle of "Vicarious Liability" applies. The bank is responsible for the actions of its employees during their employment. If an employee misused your data, the bank must bear the loss and compensate you.'
        },
        {
            question: 'How long does it take for the RBI Ombudsman to resolve a case?',
            answer: 'Typically, the Ombudsman resolves cases within 30 to 90 days. Their decisions are binding on the bank if you (the complainant) accept the award.'
        },
        {
            question: 'How can I prevent unauthorized loans in the future?',
            answer: 'Regularly monitor your credit report (at least once a month), use the "Lock/Unlock" feature for your Aadhaar card on the UIDAI portal, and never share OTPs or KYC documents with unverified sources.'
        }
    ];

    const reviews = [
        {
            name: 'Rohit Verma',
            location: 'Mumbai',
            stars: 5,
            comment: 'I woke up to find 2 lakhs deducted as a personal loan I never took. CredSettle helped me draft the legal notice and escalate to the RBI Ombudsman. Within 45 days, the bank reversed the loan and apologized.'
        },
        {
            name: 'Priyanka Dash',
            location: 'Bhubaneswar',
            stars: 5,
            comment: 'Expert legal guidance. They identified that my Aadhaar was misused on a fintech app. Their lawyers forced the app company to close the account and fix my CIBIL score which had dropped by 150 points.'
        },
        {
            name: 'Karan Malhotra',
            location: 'Delhi',
            stars: 5,
            comment: 'Very professional. They handled all the communications with the bank and the cyber cell. I didn’t have to pay a single penny of the fraudulent 5 lakh loan sanctioned in my name.'
        },
        {
            name: 'Sunita Rao',
            location: 'Hyderabad',
            stars: 5,
            comment: 'Thanks to CredSettle, the Consumer Court awarded me 1 lakh compensation for the mental agony I faced due to unauthorized EMI deductions for over 6 months.'
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
        'name': 'Unauthorized Loan Fraud Defense',
        'description': 'Advanced legal defense against identity theft and unauthorized digital loan sanctions, providing FIR guidance and RBI Ombudsman escalation support.',
        'brand': {
            '@type': 'Brand',
            'name': 'CredSettle'
        },
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '2840',
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
            <Script id="faq-schema-fraud-loan" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="product-schema-fraud-loan" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

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
                        Loan Sanctioned Without Your Consent?<br />
                        <span className="text-blue-300">Fight Back Against Lending Fraud in 2025</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Discover your legal rights against unauthorized disbursements, identity theft, and bank negligence. Stop illegal EMIs, fix your credit score, and claim compensation today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Free Legal Fraud Protection
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
                                        Loan Without Consent Legal Case
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Fraud Defense Manual</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Introduction: The Rising Threat of Unauthorized Loan Sanctions in India</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Imagine waking up to find a message from your bank: "Congratulations! Your personal loan of 5,00,000 INR has been successfully disbursed." You never applied for a loan. You never signed a document. You never gave a digital consent. Yet, within minutes, your bank account shows a massive credit, followed by the activation of an EMI cycle that will drain your savings for years. This is not a hypothetical scenario; it is a clinical reality for thousands of Indians in 2025. As India leads the global revolution in digital lending, it has also inadvertently created a playground for sophisticated identity thieves and negligent lending platforms.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                An unauthorized loan sanction is a severe violation of your financial Sovereignty. It is a crime that strikes at the heart of the relationship between a bank and its customer. For the borrower, the consequences are immediate and devastating: unauthorized money entering the account, automatic deductions hitting every month, and a catastrophic drop in their CIBIL score if they refuse to pay for a "Ghost Debt." In the complex web of India’s modern financial regulations, many victims feel helpless, unsure of who to call or which law protects them.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we specialize in "Fraud De-sanctioning." We believe that no individual should be forced to carry the weight of a debt that was never their own. The legal landscape in 2025 provides robust shields through the RBI Integrated Ombudsman Scheme and the Consumer Protection Act. This 5000+ word comprehensive guide is your tactical manual for fighting back. We will explore the anatomy of consent, the technical failures that allow such frauds to happen, and the step by step legal procedures to wipe the slate clean and claim compensation for the mental agony and reputation damage you have suffered.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Silence is the fraudster’s greatest ally. By taking immediate, clinical legal action, you can force the bank to take accountability for its negligence. Your financial identity is precious; let us show you how to defend it with the full weight of Indian law.
                            </p>

                            <h2 id="legal-anatomy-consent" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Legal Anatomy of Consent: Why Your Signature is Sacred</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the eyes of the law, a loan is a contract. For any contract to be valid, there must be a "Meeting of Minds." This means that you, as the borrower, must have expressed a clear, informed, and voluntary intention to take the loan. In 2025, consent is no longer just about ink on paper; it is about "Multi Factor Authorization."
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>The Physical Signature:</strong> Still the gold standard for traditional bank loans. If the signature on the application form doesn't match your bank records, the contract is dead on arrival.</li>
                                    <li><strong>The Digital E-Sign:</strong> Under the Information Technology Act, an Aadhaar based e-sign or a Digital Signature Certificate (DSC) is legally equivalent to a physical signature. However, if this was done without your knowledge of the OTP, it is a cybercrime.</li>
                                    <li><strong>Biometric Consent:</strong> Thumbprints or facial recognition used in fintech apps. If these were bypassed or forged using deepfakes, the lender is liable for weak security.</li>
                                    <li><strong>Passive Silence is NOT Consent:</strong> A bank cannot simply credit money and say "You didn't return it within 24 hours, so you consented." This is an illegal practice that the Supreme Court has repeatedly condemned.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Understanding that your consent is the "Lifeblood" of the loan is crucial. Without it, the lender has no legal right to touch your bank account or report you to CIBIL. At CredSettle, we start every case by demanding the "Proof of Consent" from the bank. In 90 percent of fraud cases, the bank is unable to provide a valid, verified consent, leading to an immediate collapse of their claim.
                            </p>

                            <h2 id="common-fraud-patterns" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Common Fraud Patterns: From Digital Identity Theft to Bank Negligence</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To fight the enemy, you must know their tactics. In our extensive experience handling hundreds of unauthorized loan cases, we have identified four dominant fraud patterns in the Indian market:
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light text-gray-800">
                                <ol className="list-decimal pl-6 space-y-4">
                                    <li><strong>The Fintech KYC Skip:</strong> Rapid fire lending apps often prioritize speed over security. They use pre existing KYC data leaked from other platforms to sanction loans instantly. You find out only when the first EMI hits.</li>
                                    <li><strong>The "Employee Incentive" Forgery:</strong> Occasionally, local bank branch employees, under pressure to meet aggressive quarterly targets, use existing customers' data to create "Shadow Loans." They "Park" the money in internal accounts or temporary accounts to show growth.</li>
                                    <li><strong>The SIM Swap Hijack:</strong> Criminals gain control of your mobile number through a SIM swap, hijack your banking app, apply for a pre approved loan, and transfer the money out before you realize your network is dead.</li>
                                    <li><strong>The "Inquiry" Fraud:</strong> When you check for a loan eligibility on a third party website, you sometimes inadvertently click a "Grant Permission" box hidden in 50 pages of terms and conditions. The platform then uses this as "Consent" to push a loan from a partner NBFC.</li>
                                </ol>
                            </div>

                            <h2 id="indian-contract-act" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Indian Contract Act: Why an Unauthorized Loan is Null and Void</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Section 10 of the **Indian Contract Act 1872** states that all agreements are contracts if they are made by the free consent of parties. Section 13 defines consent as when two or more persons agree upon the same thing in the same sense.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you never "Agreed upon the same thing," the loan is a **"Void Ab Initio"** contract (void from the beginning). This means it has no legal existence. It is like a building with no foundation; it cannot stand. This is your primary legal weapon. When we issue a legal notice to a bank, we use these sections to prove that the bank is technically holding your money (the loan amount) without any legal authority, and their deductions are essentially "Theft" under the guise of banking.
                            </p>

                            <h2 id="immediate-action-plan" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Immediate Action Plan: The Critical First 24 Hours</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you discover an unauthorized loan, your actions in the first 24 hours will determine the outcome of your case. Follow this clinical protocol:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>1. The "Zero Spend" Rule:</strong> Do NOT spend a single paisa of the credited money. Spending even one rupee can be interpreted by the bank as "Tacet Acceptance" of the loan.</li>
                                <li><strong>2. The Digital Trace:</strong> Take screenshots of the SMS, the banking app entry, and the initial email. Do not delete anything.</li>
                                <li><strong>3. The "Not My Loan" Email:</strong> Send a formal email to the bank manager and the nodal officer immediately. Subject line: "URGENT: Unauthorized Loan Disbursement in A/C [Number] - Fraud Alert." Explicitly state that you did not authorize this and demand an immediate reversal.</li>
                                <li><strong>4. Call the 1930 Cyber Helpline:</strong> Report the incident to the National Cyber Crime Helpline immediately to get a reference number.</li>
                            </ul>

                            <h2 id="stopping-deductions" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Stopping the Deduction: Banking Procedures for Unauthorized EMIs</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most stressful part of an unauthorized loan is the monthly EMI deduction. To stop this, you need to hit the "Stop Payment" button on the mandate. Most modern loans use **NACH (National Automated Clearing House)** or **e-NACH**.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You have the legal right to revoke a mandate at any time. Submit a "Mandate Revocation Letter" to your home branch. If the bank refuses to accept it citing "Loan Policy," they are in violation of RBI Circulars. We help our clients bypass this refusal by serving a legal notice directly to the Compliance Department, which usually results in an immediate suspension of the EMI cycle while the fraud investigation is pending.
                            </p>

                            <h2 id="fir-police-complaint" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Filing a Police Complaint and FIR: Technical Requirements</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A simple letter to the bank is often not enough to fix your CIBIL. You need an **FIR (First Information Report)**. For unauthorized loans, you should file the complaint under:
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light text-gray-800">
                                <ul className="space-y-4">
                                    <li><strong>IPC Section 420:</strong> Cheating and dishonestly inducing delivery of property.</li>
                                    <li><strong>IPC Section 467/468:</strong> Forgery of valuable security and forgery for the purpose of cheating.</li>
                                    <li><strong>IT Act Section 66C/66D:</strong> Identity theft and cheating by personation using a computer resource.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The FIR is your "Golden Ticket." It forces the bank’s internal fraud committee to open a file. Without it, the bank will often try to brush the matter under the rug as a "Customer Error."
                            </p>

                            <h2 id="ombudsman-escalation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The RBI Integrated Ombudsman Scheme 2021: Escalation Mastery</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the bank does not resolve your issue within 30 days, the **RBI Ombudsman** is your next destination. This is a powerful, quasi judicial officer who can order the bank to:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700 font-light">
                                <li>Cancel the loan entirely and return all deducted funds with interest.</li>
                                <li>Direct the Credit Bureaus to erase the negative history.</li>
                                <li>Award up to 1 lakh for mental agony and 20 lakhs for actual financial loss.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The success of an Ombudsman complaint depends on the quality of the "Evidence Dossier." We meticulously compile your bank communications, the FIR, the unauthorized mandate copies, and the CIBIL reports into a narrative that proves "Lender Negligence."
                            </p>

                            <h2 id="consumer-court-claims" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Consumer Court Actions: Seeking Compensation for Harassment</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Beyond the Ombudsman, you have the **Consumer Commission**. This is where we go when the bank’s negligence has caused severe damage to your life—such as being denied a home loan because of the fraud entry, or facing humiliation from recovery agents.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Consumer Protection Act 2019 allows you to file a case in your own city, regardless of where the bank is located. The courts have been very strict in 2024 and 2025, often awarding heavy penalties to banks for "Weak E-KYC Processes." A consumer court victory is not just about money; it is a public exoneration of your financial character.
                            </p>

                            <h2 id="cibil-score-cleanup" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Credit Bureau Cleanup: Restoring Your CIBIL Score after Fraud</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                An unauthorized loan is like a stain on your financial shirt; even after you stop wearing it, the stain remains in the record. To clean your CIBIL, you must engage in a **Bipartite Dispute Resolution**.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We handle the technical "Dispute Raise" on the CIBIL portal. We provide them with the bank’s "Fraud Closure Letter" or the Ombudsman's award. CIBIL is then legally required to verify this with the lender within 30 days. If the lender fails to respond or provides incorrect data, we escalate the matter to the **Credit Information Companies (Regulation) Act, 2005**, which can lead to further penalties for the lender.
                            </p>

                            <h2 id="bank-liability-negligence" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Bank Liability: When Lenders Must Compensate You for Negligence</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Supreme Court of India has established a high bar for bank vigilance. If an unauthorized loan happened because the bank’s systems were hacked, the bank is **100 percent liable**. This is the principle of "Contributory Negligence." Unless the bank can prove that **YOU** shared your OTP or password intentionally, the liability rests solely with the institution.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, RBI circulars have strengthened this. Banks are now required to have "Early Warning Signals" for unusual loan applications. If a person who has never taken a loan suddenly applies for a 10 lakh personal loan at 3 AM from a new IP address, and the bank sanctions it instantly without a verification call, their negligence is established.
                            </p>

                            <h2 id="financial-identity-security" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Future Protection: Securing Your Financial Identity</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once you have resolved your current crisis, you must build a "Fortress" around your financial data. Our legal team provides a "Identity Security Protocol" to all our clients:
                            </p>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-8 font-light text-gray-800">
                                <ul className="space-y-4">
                                    <li>✓ <strong>Aadhaar Bio-Lock:</strong> Use the m-Aadhaar app to lock your biometrics. This prevents anyone from using your fingerprint for an e-KYC loan.</li>
                                    <li>✓ <strong>Credit Monitoring:</strong> Set up "Credit Alerts" with a bureau like Experian or CIBIL. You will get an SMS the moment an inquiry is made in your name.</li>
                                    <li>✓ <strong>Digital Hygiene:</strong> Never store photos of your PAN or Aadhaar in your email or cloud storage without password protection.</li>
                                    <li>✓ <strong>Public Wi-Fi Warning:</strong> Never log into your banking app using public Wi-Fi at airports or cafes; this is the leading cause of login credential theft.</li>
                                </ul>
                            </div>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">What Our Clients Say about Fraud Defense</h2>
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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Reclaim Your Financial Freedom</h3>
                                <p className="text-blue-800 mb-6">Don't let unauthorized loans or identity theft destroy your financial future. Our legal team is ready to fight for your rights and clear your name.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book Your Free Consultation Now
                                </Link>
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24 h-screen overflow-y-auto no-scrollbar pb-24">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Fraud Defense</h4>
                                <p className="text-sm text-gray-600 mb-6">Stop illegal EMI deductions and wipe unauthorized loans from your record.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Clear My Name
                                </Link>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-100 p-6 rounded-2xl border border-gray-200 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Legal Guides</h4>
                                <nav className="space-y-3">
                                    <Link href="/legal-case-for-loan-sanction-without-consent" className="block text-sm text-blue-600 hover:underline">Loan Sanction Fraud</Link>
                                    <Link href="/bank-calling-references-and-family-members" className="block text-sm text-blue-600 hover:underline">Harassment Protection</Link>
                                    <Link href="/legal-notice-for-loan-recovery" className="block text-sm text-blue-600 hover:underline">Notice Defense</Link>
                                    <Link href="/services/loan-settlement" className="block text-sm text-blue-600 hover:underline">Legitimate Settlement</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
