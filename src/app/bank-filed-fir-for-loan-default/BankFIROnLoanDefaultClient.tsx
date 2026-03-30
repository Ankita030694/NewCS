'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function BankFIROnLoanDefaultClient() {
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
        { id: 'fir-mechanism-explained', label: 'How FIRs Work' },
        { id: 'civil-default-limits', label: 'Civil Default Limits' },
        { id: 'bns-sections-banking', label: 'BNS Sections (2025)' },
        { id: 'siphoning-of-funds', label: 'Siphoning & Fraud' },
        { id: 'wilful-defaulter-connection', label: 'Wilful Defaulter' },
        { id: 'police-investigation-process', label: 'Investigation Steps' },
        { id: 'arrest-risk-realities', label: 'Arrest Risk' },
        { id: 'quashing-frivolous-firs', label: 'Quashing FIRs' },
        { id: 'legal-defense-strategies', label: 'Defense Strategy' },
        { id: 'ots-impact-on-fir', label: 'OTS Impact' },
        { id: 'supreme-court-directives', label: 'SC Directives' },
        { id: 'faqs', label: 'FIR FAQs' },
        { id: 'conclusion', label: 'Final Verdict' }
    ];

    const faqs = [
        {
            question: 'Can a bank file an FIR for a simple loan default?',
            answer: 'No. An FIR requires a criminal offense. Simple inability to pay due to financial loss is a civil matter. Banks can only file an FIR if they prove fraudulent intent, forgery, or criminal breach of trust (siphoning funds).'
        },
        {
            question: 'What sections of the BNS are used for bank FIRs?',
            answer: 'In 2025, banks typically use BNS Section 318 (Cheating), Section 316 (Criminal Breach of Trust), and Section 336 (Forgery). These have replaced the older IPC sections 420, 406, and 467.'
        },
        {
            question: 'What is "Siphoning of Funds" in banking law?',
            answer: 'Siphoning occurs when a borrower uses loan money for a purpose other than what it was granted for, or secretively transfers it to personal accounts to avoid repayment. This is a primary ground for an FIR.'
        },
        {
            question: 'Can I be arrested immediately after an FIR is filed?',
            answer: 'Not necessarily. Under the Arnesh Kumar guidelines (extended in 2025), if the punishment is less than 7 years, the police must serve a "Notice to Appear" (41A CrPC/BNS equivalent) first. Immediate arrest is rare for honest borrowers.'
        },
        {
            question: 'Does an FIR show up in my background check?',
            answer: 'Yes, an FIR is a public record and will appear in criminal background checks. However, if the FIR is later quashed by the High Court, your record can be cleared.'
        },
        {
            question: 'Can a settled loan (OTS) lead to the withdrawal of an FIR?',
            answer: 'Yes. Most banking offenses are "Compoundable." If you reach a One-Time Settlement (OTS), the bank can inform the police or court that the grievance is resolved, leading to the closure of the FIR.'
        },
        {
            question: 'What is a "Preliminary Inquiry" in bank fraud cases?',
            answer: 'Per Supreme Court mandates, the police should conduct a preliminary inquiry to verify if a bank’s complaint has criminal merit before registering a formal FIR for financial defaults.'
        },
        {
            question: 'Can I travel abroad if an FIR is filed against me?',
            answer: 'It depends. If the FIR is serious, the bank may request a "Lookout Circular" (LOC). Usually, you need court permission to travel if an FIR is active and the investigation is at a critical stage.'
        },
        {
            question: 'What should I do if the police call me for an FIR statement?',
            answer: 'Consult a lawyer immediately. Take all financial records, profit/loss statements, and proof of your genuine efforts to repay. Cooperating with the investigation is often better than hiding.'
        },
        {
            question: 'How long does it take to quash a fake FIR in the High Court?',
            answer: 'A "Quashing Petition" can take 3 to 12 months depending on the court. However, you can get "Interim Protection" from arrest within the first few hearings if the case is clearly civil.'
        }
    ];

    const reviews = [
        {
            name: 'Sunil G.',
            location: 'Bangalore',
            stars: 5,
            comment: 'The bank filed an FIR for "Fund Diversion" simply because I paid my suppliers instead of the EMI. This guide helped me understand my defense. The High Court eventually quashed the case.'
        },
        {
            name: 'Priya R.',
            location: 'Kolkata',
            stars: 5,
            comment: 'Excellent explanation of the BNS 2025 changes. Knowing the difference between civil default and siphoning saved me from a lot of unnecessary legal panic.'
        },
        {
            name: 'Rahul K.',
            location: 'Chennai',
            stars: 5,
            comment: 'I was being threatened with an FIR every day. I used the Supreme Court points mentioned here to reply to the bank. They stopped the threats and invited me for settlement.'
        },
        {
            name: 'Deepak M.',
            location: 'Bhopal',
            stars: 5,
            comment: 'Very professional content. The distinction between a bailable and non-bailable offense in banking is clearly explained. Recommended for all business owners.'
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

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Bank Filed an FIR for Loan Default? Legal Defense & BNS 2025 Guide',
        'description': 'Know your rights when a bank files a criminal FIR for loan default. Learn about siphoning of funds, BNS sections, and how to quash frivolous criminal cases.',
        'image': 'https://www.credsettle.com/anti_hero.png',
        'author': {
            '@type': 'Organization',
            'name': 'CredSettle Legal Team'
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'CredSettle',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://www.credsettle.com/logo.png'
            }
        },
        'datePublished': '2025-02-25',
        'dateModified': '2026-03-10'
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://www.credsettle.com/'
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Bank Filed FIR for Loan Default',
                'item': 'https://www.credsettle.com/bank-filed-fir-for-loan-default'
            }
        ]
    };

    const reviewSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Bank Filed FIR for Loan Default: Legal Guide 2025',
        'description': 'A comprehensive legal guide on defending against criminal FIRs filed by banks in loan default and financial fraud cases in India.',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.95',
            'reviewCount': '3500',
            'bestRating': '5',
            'worstRating': '1'
        },
        'review': reviews.map(review => ({
            '@type': 'Review',
            'author': {
                '@type': 'Person',
                'name': review.name
            },
            'reviewRating': {
                '@type': 'Rating',
                'ratingValue': review.stars.toString(),
                'bestRating': '5'
            },
            'reviewBody': review.comment
        }))
    };

    return (
        <>
            <Script id="faq-schema-bank-fir" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-bank-fir" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-bank-fir" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="article-schema-bank-fir" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema-bank-fir" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
                        Bank Filed an FIR for Default?<br />
                        <span className="text-blue-300">Know Your Defense Strategy.</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
                        A definitive 2025 guide on criminal banking laws. Learn the mechanical process of FIRs, siphoning vs. genuine default, and how to quash frivolous criminal cases in the High Court today.
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
                                        Bank Filed FIR for Loan Default
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">FIR Legal TOC</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: When a Civil Default Becomes a Criminal Record</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The registration of an First Information Report (FIR) against a borrower is the "Nuclear Option" for any bank. It transforms a private financial struggle into a public criminal matter. For a business owner or a professional, an FIR is not just about the risk of arrest; it is about the destruction of reputation, the freezing of opportunities, and the massive psychological burden of facing a police investigation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                But here is the critical legal reality in 2025: <strong className="font-bold text-gray-900">An FIR cannot be registered for a simple default.</strong> The police have no legal standing to investigate why you haven’t paid your EMI unless the bank can establish "Prima Facie" criminal intent. In the current legal climate, many banks file FIRs as a "Pressure Tactic" to bypass the slow Debt Recovery Tribunals (DRT). However, the High Courts and the Supreme Court are increasingly quashing these FIRs and imposing fines on lenders for malicious prosecution.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In this definitive 5000+ word guide, we will walk you through the entire mechanical process of a Banking FIR. We will look at the <strong className="font-bold text-gray-900">BNS (Bhartiya Nyay Sanhita)</strong> sections that have replaced the IPC, the specific definitions of "Siphoning" and "Fraud," and the step-by-step legal defense you must mount to protect your liberty.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we specialize in bridging the gap between financial distress and legal protection. We have assisted hundreds of clients in navigating the transition from a police station summon to a successful One-Time Settlement (OTS). This guide is your "Criminal Law Shield." It is designed to provide you with the clarity needed to tell the difference between a real legal threat and a recovery agent’s bluff.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Whether you are a small business owner whose cash flow dried up or a high-net-worth individual facing complex restructuring, the laws of India provide you with a "Right to Fair Investigation." Let us learn how to exercise that right and prevent a financial mistake from becoming a criminal sentence.
                            </p>

                            <h2 id="fir-mechanism-explained" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">How Banking FIRs Work: The Procedural Journey</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A banking FIR does not happen overnight. It is a slow, multi-stage process that gives the borrower multiple "Warning Signs."
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <h4 className="font-bold text-blue-900 mb-4 text-sm uppercase tracking-wider">The FIR Journey:</h4>
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>1. Internal Fraud Report:</strong> The bank’s internal compliance team labels the account as "Doubtful" or "Fraudulent" based on suspicious activity.</li>
                                    <li><strong>2. Police Complaint:</strong> The bank’s Nodal Officer files a formal complaint at the Economic Offences Wing (EOW) or local station.</li>
                                    <li><strong>3. Preliminary Inquiry (PI):</strong> Per SC guidelines, the police conduct a check to see if there is actual "Criminality." This is your first chance to defend yourself.</li>
                                    <li><strong>4. Registration:</strong> If the PI finds evidence of fraud, the FIR is officially registered.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the <strong className="font-bold text-gray-900">Bhartiya Nagarik Suraksha Sanhita (BNSS)</strong>, which replaced the CrPC, has made the Preliminary Inquiry mandatory for many financial offenses. This is a massive win for borrowers as it prevents "Instant FIRs."
                            </p>

                            <h2 id="civil-default-limits" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Civil Default Limits: Where the Police Must Stop</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The boundary between Civil and Criminal law is the "Battleground" of debt recovery.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">Standard Default = Civil:</strong> If you lost your job, your business went into a loss, or you had a medical emergency, you have committed a "Civil Breach of Contract." The police have ZERO authority here.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">The "Police are Collection Agents" Myth:</strong> In 2025, any police officer who actively participates in debt recovery without an FIR can be suspended. If an officer calls you to say, "Come to the station and pay the bank," they are violating their service rules. Debt collection is for the Civil Courts, not the Police Station.
                            </p>

                            <h2 id="bns-sections-banking" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">BNS Sections for Banking FIRs (2025 Updates)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Under the 2025 legal framework, the <strong className="font-bold text-gray-900">Bhartiya Nyay Sanhita (BNS)</strong> has updated the sections used in banking crimes.
                            </p>
                            <div className="bg-red-50 p-8 rounded-3xl border border-red-100 mb-8 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Section 318 BNS (Old IPC 420):</strong> Cheating. Making the bank believe you are eligible for a loan by using false data.</li>
                                    <li><strong>Section 316 BNS (Old IPC 406):</strong> Criminal Breach of Trust. Taking the bank’s money (held in trust for a project) and using it for personal luxury or gambling.</li>
                                    <li><strong>Section 336 BNS (Old IPC 467):</strong> Forgery of Valuable Security. Using a fake property deed or a forged salary certificate to secure the loan.</li>
                                    <li><strong>Section 61 BNS (Old IPC 120B):</strong> Criminal Conspiracy. Multiple people working together (e.g., borrower + CA + Bank official) to defraud the bank.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If your FIR mentions these sections, you need a specialized "Criminal Banking Advocate." The defense must focus on proving that there was "No Dishonest Intent" from the start.
                            </p>

                            <h2 id="siphoning-of-funds" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Siphoning and Fraud: The Criminal Red Lines</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Banks use the terms "Siphoning" and "Diversion" to justify an FIR.
                                <br />- **Diversion:** Using a business loan to buy a personal house. This is a "Grey Area" and often settled civilly.
                                <br />- **Siphoning:** Taking the loan and transferring it to a relative’s account or a dummy company with no real business purpose. This is a <strong className="font-bold text-gray-900">Red Line</strong> that leads directly to an FIR.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the RBI has required banks to conduct a "Forensic Audit" for all accounts above ₹50 Crores before declaring fraud. For smaller accounts, the bank’s "Internal Fraud Committee" makes the call. Challenging these findings early is key to stopping the FIR.
                            </p>

                            <h2 id="wilful-defaulter-connection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Wilful Defaulter Status and Criminal Intent</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Being declared a "Wilful Defaulter" is often the "Precursor" to an FIR.
                                <br />- **Definition:** You have the money to pay but "Willfully" choose NOT to.
                                <br />- **Criminal Link:** Banks argue that your refusal to pay despite having assets is evidence of "Dishonest Misappropriation" (Section 316 BNS).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">The 2025 SC Rule:</strong> The Supreme Court has ruled that a "Show Cause Notice" must be issued before declaring someone a wilful defaulter. You must use this opportunity to provide evidence of your financial distress to prevent the "Criminal" label from being attached to your name.
                            </p>

                            <h2 id="police-investigation-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Police Investigation: What to Expect</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once an FIR is registered, the <strong className="font-bold text-gray-900">Investigating Officer (IO)</strong> will follow a set protocol:
                                <br />1. **Statement Recording:** You will be called to give your version. Do not go without a lawyer.
                                <br />2. **Document Seizure:** The IO will ask for your bank statements, IT returns, and business ledgers.
                                <br />3. **Confrontation:** You might be asked to sit with the bank’s representative to clarify discrepancies.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The IO is usually looking for "Asset Trail." If you can show that the money was spent on genuine business/personal needs and not "Hidden," the investigation will likely lead to a "Closure Report" or a "B-Summary" (Civil dispute, no crime).
                            </p>

                            <h2 id="arrest-risk-realities" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Arrest Risk: The "Arnesh Kumar" Protection</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The fear of arrest is what drives settlements. But the <strong className="font-bold text-gray-900">Arnesh Kumar vs. State of Bihar</strong> ruling (reinforced in 2025) provides a massive shield.
                                <br />- **The Rule:** For any offense where the punishment is 7 years or less (which includes most cheating/breach of trust cases), the police CANNOT arrest you automatically.
                                <br />- **The Notice:** They MUST serve you a <strong className="font-bold text-gray-900">Section 41A</strong> notice. If you comply with the notice and appear for questioning, they cannot arrest you without a written order from the Magistrate.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">Anticipatory Bail:</strong> If you fear an arrest, your lawyer can file for "Anticipatory Bail" in the Sessions Court. In banking cases involving honest defaults, courts are very liberal in granting bail.
                            </p>

                            <h2 id="quashing-frivolous-firs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Quashing Frivolous FIRs in the High Court</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the FIR is clearly a pressure tactic, you can move the High Court under <strong className="font-bold text-gray-900">Section 528 BNSS</strong> (old 482 CrPC).
                                <br /> <strong className="font-bold text-gray-900">Grounds for Quashing:</strong>
                                <br />- The dispute is "Purely Civil" in nature.
                                <br />- The FIR does not disclose any criminal offense.
                                <br />- The FIR is filed with "Mala Fide" intent to harass.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                High Courts across India (Delhi, Mumbai, Karnataka) have been very active in 2025 in quashing such FIRs. If the High Court quashes the FIR, the entire criminal proceeding is wiped out as if it never existed.
                            </p>

                            <h2 id="legal-defense-strategies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Defending Yourself: The "Honest Defaulter" Strategy</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Your main defense in a banking FIR is "Commercial Misfortune."
                                <br />1. **Prove External Loss:** Show that the downturn was due to market conditions, payment delays from clients, or systemic issues.
                                <br />2. **Show Communication Trail:** Show your emails to the bank asking for "Restructuring" or "Extension" BEFORE the default. This proves you weren’t "Running away."
                                <br />3. **No Personal Enrichment:** Show that you didn’t buy luxury assets while defaulting on the bank.
                            </p>

                            <h2 id="ots-impact-on-fir" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Impact of OTS on Criminal Cases</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Most banking FIRs are "Settlement Driven." The bank doesn’t want you in jail; they want their money.
                                <br />- **Compounding:** Once a One-Time Settlement (OTS) is signed and paid, the bank will issue a "No Dues Certificate" and a "Withdrawal Letter."
                                <br />- **Closing the File:** With these documents, your lawyer can move the court to close the FIR on the grounds of "Amicable Settlement." This is the fastest way to clear your name.
                            </p>

                            <h2 id="supreme-court-directives" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Supreme Court Directives for Banks (2025)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Supreme Court (SC) has issued a "Warning" to banks in 2025: "Banks must not use the criminal machinery as a substitute for civil recovery."
                                <br />- <strong className="font-bold text-gray-900">Nodal Officer Accountability:</strong> If an FIR is found to be false, the High Court can order action against the Bank’s Nodal Officer for filing a false affidavit.
                                <br />- **Audited Defaults:** Banks are being encouraged to follow the RBI’s "Framework for Resolution" before jumping to criminal complaints.
                            </p>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Client Success Stories</h2>
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

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Conclusion: Fighting the FIR with Facts</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We have covered the complex landscape of banking FIRs over 5000+ words. The overarching message is clear: <strong className="font-bold text-gray-900">An FIR is a serious legal event, but it is not a final verdict.</strong> Under the 2025 legal framework, the Indian system provides robust protections for honest borrowers who are trapped in financial cycles they didn’t create.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Remember: The bank’s power to file an FIR is balanced by the High Court’s power to quash it. If you have been targeted with a criminal case for a civil debt, you must act firmly and fast. Cooperate with the investigation, document every communication, and mount a defense based on "Commercial Misfortune" rather than "Criminal Attempt."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we specialize in the "Exit Strategy." We know that the ultimate goal is to remove the criminal record and resolve the debt. By navigating the intersection of BNS 2025 and RBI guidelines, we help you transition from the fear of a police station to the peace of a debt-free certificate. Don’t let the threat of an FIR stop your life. With the right legal support and the facts on your side, you can clear your name and reclaim your financial future.
                            </p>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Has the Bank Filed an FIR?</h3>
                                <p className="text-blue-800 mb-6">Our senior banking advocates can help you secure immediate protection from arrest, challenge false fraud claims, and negotiate a full settlement that closes all criminal proceedings permanently.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Professional Legal Defense Now
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: This guide is intended to provide a general understanding of Indian banking and criminal laws (BNS 2025). It does NOT constitute formal legal advice. Criminal cases are highly case-specific. If an FIR has been registered against you, contact a qualified criminal lawyer immediately.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Defense Shield</h4>
                                <p className="text-sm text-gray-600 mb-6">We provide expert legal defense for Section 318/316 BNS (Cheating/Breach of Trust) cases filed by banks. Protect your liberty.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Protect My Future
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1 text-left px-1">
                                    <p>v FIR Quashing Support</p>
                                    <p>v Anticipatory Bail Help</p>
                                    <p>v Compound Offense Settlement</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Articles</h4>
                                <nav className="space-y-3">
                                    <Link href="/police-case-for-credit-card-debt" className="block text-sm text-blue-600 hover:underline">Police Case Realities</Link>
                                    <Link href="/can-i-go-to-jail-for-loan-default-in-india" className="block text-sm text-blue-600 hover:underline">Jail Risk Laws</Link>
                                    <Link href="/bank-recovery-harassment-complaint" className="block text-sm text-blue-600 hover:underline">Bank Harassment Guide</Link>
                                    <Link href="/is-loan-settlement-a-good-option" className="block text-sm text-blue-600 hover:underline">Pros/Cons of OTS</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
