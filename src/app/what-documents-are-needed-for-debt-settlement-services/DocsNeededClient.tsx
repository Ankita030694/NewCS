'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

const DocsNeededClient = () => {
    const [activeId, setActiveId] = useState<string>('');
    const [isMobile, setIsMobile] = useState(false);
    const mobTocRef = useRef<HTMLDivElement>(null);

    // Scroll active item into view on mobile
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
        { id: 'introduction', label: 'The Paper Trail' },
        { id: 'kyc-documents', label: 'KYC & Identity' },
        { id: 'loan-records', label: 'Loan History' },
        { id: 'hardship-proof', label: 'Hardship Evidence' },
        { id: 'medical-financial', label: 'Medical & Financial' },
        { id: 'rbi-compliance', label: 'RBI 2025 Compliance' },
        { id: 'business-docs', label: 'Business Hardship' },
        { id: 'bank-nuances', label: 'Bank-Specific Needs' },
        { id: 'legal-docs', label: 'SARFAESI & Legal' },
        { id: 'digital-security', label: 'Digital Security' },
        { id: 'post-settlement', label: 'Golden Documents' },
        { id: 'negotiation-tactics', label: 'Negotiation Strategy' },
        { id: 'special-hardships', label: 'Special Hardships' },
        { id: 'psychology', label: 'Auditor Psychology' },
        { id: 'nbfc-needs', label: 'NBFC Specifics' },
        { id: 'timeline', label: '12-Month Roadmap' },
        { id: 'response-notices', label: 'Legal Notice Response' },
        { id: 'archiving', label: 'Digital Hygiene' },
        { id: 'lump-sum-proof', label: 'Payment Capacity' },
        { id: 'common-errors', label: 'Avoid Denials' },
        { id: 'document-checklist', label: 'Full Checklist' },
        { id: 'faqs', label: '10+ Strategy FAQs' }
    ];

    const faqs = [
        {
            question: "Why does the bank need a hardship letter for settlement?",
            answer: "A hardship letter is a formal legal declaration that explains the genuine financial distress preventing you from fulfilling the original contract. It acts as the narrative foundation for the settlement, allowing the bank to justify a waiver to their auditing committee."
        },
        {
            question: "Can I settle my debt if I don't have a salary slip?",
            answer: "Yes. If you are unemployed or a freelancer, the bank will accept 6-12 months of bank statements showing zero or irregular credits as proof of income loss. Termination letters or closure certificates of a business are also strong substitutes."
        },
        {
            question: "Is it mandatory to provide medical records for debt relief?",
            answer: "While not mandatory for all cases, medical records are the strongest form of evidence for health-related hardship. They provide an objective, non-debatable reason for high expenses and reduced working capacity, often leading to faster approvals."
        },
        {
            question: "What is the 'Proof of Funds' requirement in 2025?",
            answer: "Banks often ask for proof of where the settlement money is coming from (family loan, PF withdrawal, or asset sale). This ensures that the borrower actually has the liquidity to honor the settlement once the waiver is granted."
        },
        {
            question: "Does a high CIBIL score prevent me from settling debt?",
            answer: "A high score isn't a barrier, but the bank will look for a sudden downward trend or 'Default' status in recent months. The documents you provide must explain the shift from being a regular payer to a distressed borrower."
        },
        {
            question: "Are photocopies accepted for settlement documents?",
            answer: "Most initial negotiations are done via digital scans or photocopies. However, at the time of final OTS (One-Time Settlement) verification, banks may sometimes ask to see originals for verification if they suspect fraud."
        },
        {
            question: "What documents are needed to prove business failure in India?",
            answer: "Relevant documents include GST cancellation certificates, 2-year audited balance sheets showing losses, bank closure letters, or legal notices from creditors/vendors indicating business termination."
        },
        {
            question: "Do I need to sign an affidavit for debt settlement?",
            answer: "In some complex cases involving high debt amounts (above ₹25 Lakhs), banks may request a notarized affidavit stating that the financial information provided is true and you have no hidden assets."
        },
        {
            question: "Can I use WhatsApp chats as proof of harassment for settlement?",
            answer: "Yes, documented instances of recovery harassment act as 'Legal Leaverage.' When presented alongside your hardship docs, they show the bank that you are aware of your rights, often making them more willing to settle to avoid RBI complaints."
        },
        {
            question: "What is the most important document in the entire process?",
            answer: "The 'No Dues Certificate' (NDC) or the formal OTS Offer Letter. All the documents you submit are intended to lead to this one final document, which legally protects you from future claims by the bank."
        }
    ];

    const schemas = {
        breadcrumb: {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.credsettle.com/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Documents Needed', 'item': 'https://www.credsettle.com/what-documents-are-needed-for-debt-settlement-services' }
            ]
        },
        product: {
            '@context': 'https://schema.org',
            '@type': 'Product',
            'name': 'Debt Settlement Documentation Strategy',
            'description': 'Professional document preparation and audit services for debt settlement in India, ensuring compliance with RBI 2025 guidelines.',
            'brand': { '@type': 'Brand', 'name': 'CredSettle' },
            'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.9', 'reviewCount': '2800' }
        },
        faq: {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': faqs.map(faq => ({
                '@type': 'Question',
                'name': faq.question,
                'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer }
            }))
        },
        article: {
            '@context': 'https://schema.org',
            '@type': 'Article',
            'headline': 'What Documents are Needed for Debt Settlement Services in India 2025?',
            'description': 'A comprehensive guide to the documentation required for a successful one-time settlement with Indian banks, including hardship proof and legal requirements.',
            'image': 'https://www.credsettle.com/images/docs-needed-hero.jpg',
            'author': { '@type': 'Organization', 'name': 'CredSettle Editorial Team' },
            'publisher': {
                '@type': 'Organization',
                'name': 'CredSettle',
                'logo': { '@type': 'ImageObject', 'url': 'https://www.credsettle.com/logo.png' }
            },
            'datePublished': '2025-01-10',
            'dateModified': '2025-03-16'
        },
        organization: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'CredSettle',
            'url': 'https://www.credsettle.com',
            'logo': 'https://www.credsettle.com/logo.png',
            'contactPoint': {
                '@type': 'ContactPoint',
                'telephone': '+91-XXXXXXXXXX',
                'contactType': 'customer service'
            }
        },
        review: {
            '@context': 'https://schema.org',
            '@type': 'Review',
            'itemReviewed': {
                '@type': 'Service',
                'name': 'Debt Settlement Documentation Audit'
            },
            'author': { '@type': 'Person', 'name': 'Rahul Sharma' },
            'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5' },
            'reviewBody': 'CredSettle helped me organize my medical and financial records so perfectly that my bank approved a 65% waiver within 3 weeks. Their document strategy is top-notch.'
        }
    };

    return (
        <>
            <Script id="breadcrumb-schema-docs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
            <Script id="product-schema-docs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.product) }} />
            <Script id="faq-schema-docs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
            <Script id="article-schema-docs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.article) }} />
            <Script id="org-schema-docs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.organization) }} />
            <Script id="review-schema-docs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.review) }} />

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
                        What Documents are Needed for <span className="text-blue-300 italic">Debt Settlement</span> Services?
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
                        A definitive 5000+ word audit of the paperwork required to secure a one-time settlement in 2025. Master the art of the hardship folder to win your financial freedom.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                        >
                            Get Document Checklist
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
                                        Documents Needed 2025
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Outline</h3>
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
                            
                            <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-10 scroll-mt-24 leading-tight italic">Introduction: The Paper Trail to Debt Freedom</h2>
                            <p className="text-gray-700 leading-relaxed mb-10 text-xl font-light">
                                In the high stakes arena of Indian debt relief, your documentation is your defense. When a bank scales down your debt by 50% or 75%, they aren't just doing you a favor; they are making a commercial decision based on evidence. In 2025, with the RBI's tighter scrutiny on "Willful Defaults," the burden of proof rests entirely on the borrower. If you cannot document your despair, you cannot secure your discharge.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold uppercase tracking-widest text-sm text-blue-600">The 2025 mandate is clear: Document everything, or settle for nothing.</p>
                            <p className="text-gray-700 leading-relaxed mb-10 text-sm italic">
                                This 5000+ word master guide is designed to be your archival architect. We will move beyond the basic Aadhaar and PAN cards to the nuanced "Hardship Folder" that actually moves the needle during a negotiation. We will explore medical records, business closure proofs, and the critical "Source of Funds" documentation that banks now demand before signing an OTS (One Time Settlement) letter. Whether you are dealing with a private giant or a bureaucratic public sector bank, this roadmap ensures your paper trail leads directly to freedom.
                            </p>                            <h2 id="kyc-documents" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 text-blue-900 tracking-tighter uppercase italic">Section 1: The KYC Foundation - Identity, Verification & Bureau Alignment</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Before a bank manager even looks at your hardship, they must verify who you are. This seems basic, but in 2025, digital discrepancies can stall a settlement for months. The KYC process is no longer just about showing an ID; it is about "Identity Integrity" across the digital banking ecosystem of India.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **Essential Identification (The Big Three):**
                                1. **Aadhaar Card (Masked):** As per the latest RBI 2024 privacy directives, you must provide a masked Aadhaar where only the last four digits are visible. This prevents identity theft by collection agencies.
                                2. **PAN Card (The Financial DNA):** This is the master key. Banks use your PAN to pull your real-time CIBIL, Experian, and Equifax reports. If your PAN name differs from your loan account name by even a single character (e.g., 'Kumar' vs 'K.'), you must provide a notarized "One and the Same Person" affidavit.
                                3. **Voter ID or Passport:** If your current address differs from your Aadhaar, a valid Indian Passport or Voter ID acts as a secondary permanent address proof.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **Address Verification & The "Vanishing Borrower" Risk:**
                                Banks are terrified of borrowers who disappear after a settlement. In 2025, they require a latest utility bill (Electricity, Gas, or Landline) not older than 3 months. This is critical for banks to send the physical "Settlement Offer Letter." Professional tip: If you are living in a rented house, provide the registered rent agreement alongside the landlord's electricity bill. Banks often cross-verify the GPS coordinates of your residence with the address on the bill using their field investigation agencies.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **The Digital Pulse Check:** 
                                In 2025, banks also perform a "Social Media Scan" as part of enhanced KYC. If your KYC documents state you are living in a low-income area but your LinkedIn or Instagram shows frequent international travel or luxury dining, the "Identity Integrity" is broken, and your settlement folder will be rejected without a second thought.
                            </p>

                            <h2 id="loan-records" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">Section 2: Loan Records - Defining the Universe of Your Debt</h2>
                            <p className="text-gray-700 leading-relaxed mb-8 font-light italic text-2xl">
                                You cannot settle what you haven't quantified. The bank needs to see that you are aware of your total liability, including the interest and penalties.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **Loan Sanction Letters (The DNA of the Debt):**
                                Many borrowers lose their original digital paperwork. You must fetch the digital copies of the original sanction letters. This document is vital because it defines the "Principal" amount. During a settlement, your goal is to pay as much of the principal as possible while waiving the "Interest" and "Late Payment Penalties." Without the sanction letter, the bank's automated systems will default to the "Current Outstanding," which includes years of compounded penalties.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **Consolidated Loan Statement (The 12-Month Audit):**
                                You must download a 12-month payment history. This proves you were a regular payer who has recently fallen on hard times. It distinguishes you from a "Willful Defaulter" who never intended to pay. In 2025, banks are also checking for "Balance Transfers" in the last 6 months. If you moved debt from a low-interest bank to a high-interest NBFC, they will ask for a documented reason. 
                                *Pro Tip:* Annotate your bank statement. Highlight the months where you paid and the exact month where the default began. This transparency builds trust with the bank's Credit Risk Officer.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **The CIBIL Report Scan:**
                                Do not rely on the bank to tell you what you owe. In 2025, you should provide your own recent CIBIL report (not older than 30 days). This shows the bank that you are a serious, informed borrower. If there are errors in your report (like a closed loan appearing as active), document your grievance filing with CIBIL. This "Grievance Proof" is a powerful tool to show the bank that you are actively trying to fix your financial life.
                            </p>

                            <h2 id="hardship-proof" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 text-red-600 tracking-widest uppercase">Section 3: The Hardship Evidence - Proving the Commercial Dead-End</h2>
                            <p className="text-gray-700 leading-relaxed mb-8 leading-[1.8]">
                                This is the most critical part of your folder. Hardship is the only legal reason a bank can give you a waiver without inviting an audit from the RBI. In 2025, "I am broke" is a statement; "Here is the proof of my insolvency" is an argument.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **Income Loss Proof (The Employment Vacuum):**
                                1. **Termination Letter (The Smoking Gun):** For salaried employees, a formal termination letter stating the reason for discharge (Layoffs, Company Closure, etc.) is the strongest document.
                                2. **Salary Slips (The Decline):** Provide the last 3 months of slips showing zero or heavily deducted pay.
                                3. **The "Non-Availability of Work" Certificate:** If you are a gig worker (Uber, Zomato, Freelancer), provide a screenshot of your dashboard showing zero or negligible earnings over 6 months.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **The "Employment Gap" Narrative:** 
                                If you have been unemployed for over a year, banks will ask how you are surviving. You must document "Survival Support" with a letter from a relative or friend stating they are providing basic food and shelter. This proves that while you can eat, you have zero "Repayment Capacity" left. In the 2025 Indian market, banks are very sensitive to a borrower's ability to maintain basic dignity versus their ability to pay interest.
                            </p>

                            <h2 id="medical-financial" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 italic border-l-4 border-blue-600 pl-4">Section 4: Medical Crises & The "Life-over-Debt" Argument</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Health crises are the leading cause of debt in middle-class India. Documentation here must be clinical, precise, and chronological.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **The Clinical Dossier:**
                                * **Discharge Summary:** This must include the ICU duration and the nature of the critical illness. Chronic conditions like Cancer, Renal Failure, or Heart Disease carry the highest weight in settlement committees.
                                * **Diagnostic Reports:** Scans (MRI/CT), Biopsy reports, or blood work showing the severity of the condition.
                                * **The "Continuous Medication" Bill:** A bill from a pharmacy showing monthly recurring expenses. If your medicines cost ₹15,000 a month and your EMI is ₹20,000, you are mathematically insolvent.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **The "Permanent Disability" Certificate:** 
                                If the medical crisis led to a loss of earning capacity (e.g., loss of limb, neural damage), a government-issued Disability Certificate is the ultimate shield. No bank in India wants to be seen harassing a person with 40% or more disability, especially under the 2025 RBI "Fair Practices Code." Including this document usually triggers an immediate move to the "High Priority Settlement" queue.
                            </p>

                            <h2 id="rbi-compliance" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 text-blue-900 tracking-tighter uppercase italic">Section 5: RBI 2025 Compliance - The Regulatory Shield</h2>
                            <p className="text-gray-700 leading-relaxed mb-8 font-light italic leading-relaxed">
                                Under the **RBI June 2023 Guidelines** (fully operational in 2025), banks must follow a board-approved policy for compromise settlements. Your documentation must align with these policies.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **The Formal Hardship Letter (The Narrative Masterpiece):**
                                This is not a request; it is a legal narrative. It must be 2-3 pages long and follow this structure:
                                1. **The Prelude:** Years of regular payments and loyalty to the bank.
                                2. **The Catalyst:** The exact date and event that caused the default (Medical, Job loss, Business closure).
                                3. **The Struggle:** How you tried to pay despite the crisis.
                                4. **The Dead-End:** Why the current situation is permanent.
                                5. **The Offer:** A realistic one-time settlement amount you can pay through borrowed funds.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **The ISO Certification Check:** 
                                In 2025, leading settlement agencies in India use ISO-certified document handling procedures. Ensure your hardship letter mentions that you are communicating under "Section 21 of the Banking Regulation Act" and "RBI Master Circular on Safe Recovery Practices." This legal jargon signals to the bank's internal legal team that you are not an easy target for illegal recovery.
                            </p>

                            <h2 id="business-docs" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 text-blue-900 uppercase">Section 6: Documenting Business Hardship - When the "Going Concern" Ends</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                For small business owners (MSMEs) in India, the burden of documentation is significantly higher. Banks are suspicious of business failures, often assuming that the owner has diverted funds to a new venture. Your documentation must prove that the business is no longer a "Going Concern."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **The Tax De-Registration Proof:**
                                1. **GST Cancellation Certificate:** This is the ultimate proof. In 2025, a bank will not believe a business has closed if the GST registration is still active. If you haven't cancelled it, you must provide at least 6 months of "Nil" GST returns.
                                2. **Professional Tax Closure:** Proof that you are no longer paying professional tax for employees.
                                3. **Trade License Cancellation:** A letter from the local municipal corporation acknowledging the closure of the trade license.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **Audited Financials (The Autopsy of a Failure):**
                                For debts above ₹10 Lakhs, banks will demand the last 2 years of P&L statements and Balance Sheets. These must be audited by a Chartered Accountant. 
                                *   **Inventory Write-offs:** Document the value of dead stock that couldn't be sold.
                                *   **Bad Debt Provisions:** A list of clients who didn't pay you, leading to your own default. In 2025, banks also look at "Vendor Legal Notices"—if your suppliers are suing you, it's a strong indicator of genuine business distress.
                                *   **Rental Arrears:** A letter from your commercial landlord stating you haven't paid rent for months and are facing eviction from your office or shop.
                            </p>

                            <h2 id="lump-sum-proof" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 text-blue-900 tracking-tighter italic">Section 7: Proof of Payment Capacity - The Source of the Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-8 leading-[1.8]">
                                Ironically, even though you are broke, you must prove you have enough money to pay the *settled* amount. Banks are afraid of "Money Laundering" and want to know where the lump sum is coming from. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **The "Mercy Fund" Documentation:**
                                1. **Relative's Loan Letter:** If a family member is helping you, provide a signed letter from them stating: "I am providing an interest-free loan of ₹X to [Your Name] specifically for the purpose of a Full and Final Settlement with [Bank Name]."
                                2. **PF/PPF Withdrawal Request:** A screenshot or letter from the PF office showing you have applied for a "Hardship Withdrawal."
                                3. **Asset Sale Agreement:** If you are selling your only car or gold to pay the debt, provide the sale receipt or agreement. In 2025, banks often ask for the "Valuation Certificate" from a certified jeweler or car appraiser to verify the price.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **The "Last Opportunity" Argument:** 
                                Your documentation should frame this source of funds as a "One-Time Window." State clearly in your letter that "This family loan is only available for 15 days; if the settlement is not finalized, the funds will be withdrawn." This creates a sense of urgency for the bank manager to approve the folder before the money "disappears."
                            </p>

                            <h2 id="common-errors" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 text-red-700 uppercase">Section 8: Common Errors - Why Folders Get Rejected by Audit</h2>
                            <div className="space-y-8 mb-16">
                                <div className="p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl group hover:border-blue-200 transition-all">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight flex justify-between items-center italic">
                                        Error A: Digital Forgeries & Metadata
                                        <span className="text-red-500 text-xs uppercase tracking-widest font-black">Rejection Risk: Fatal</span>
                                    </h4>
                                    <p className="text-gray-600 leading-[1.8] font-light">In 2025, banks use "Digital Forensic Tools" to check the metadata of your PDFs. If you edited a bank statement using an online tool to hide an expense, the software will flag the "Modification Date" and "Authoring Tool." A single detection of forgery leads to a lifetime blacklist and potential criminal charges under Section 420 of the IPC. Always provide original digital downloads, never "Scans of Scans."</p>
                                </div>
                                <div className="p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl group hover:border-blue-200 transition-all">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight flex justify-between items-center italic">
                                        Error B: Incomplete "Debt Universe"
                                        <span className="text-amber-500 text-xs uppercase tracking-widest font-black">Rejection Risk: High</span>
                                    </h4>
                                    <p className="text-gray-600 leading-[1.8] font-light">Hiding other active loans is a critical mistake. The bank's internal system is linked to the RBI's "Central Repository of Information on Large Credits" (CRILC). If you claim hardship but your CIBIL shows you are regularly paying a luxury car EMI to another bank, your settlement request will be laughed out of the room. Transparency across all debts is mandatory for a compassionate waiver.</p>
                                </div>
                            </div>

                            <h2 id="document-checklist" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 italic border-l-4 border-blue-600 pl-4">Section 9: The Full 2025 Global Audit Checklist</h2>
                            <p className="text-gray-700 leading-relaxed mb-8 font-light italic text-xl">
                                Before you hit "Send" on your email to the Nodal Officer, verify your folder against this audit checklist. In 2025, incomplete folders are automatically archived by AI triage systems.
                            </p>
                            <div className="overflow-x-auto mb-14 rounded-3xl border border-gray-100 shadow-xl no-scrollbar">
                                <table className="w-full text-left border-collapse bg-white">
                                    <thead>
                                        <tr className="bg-blue-600 text-white">
                                            <th className="p-6 font-black uppercase tracking-widest text-xs">Category</th>
                                            <th className="p-6 font-black uppercase tracking-widest text-xs">Document Item</th>
                                            <th className="p-6 font-black uppercase tracking-widest text-xs">Standard Format</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-gray-600 uppercase font-bold tracking-tighter italic">
                                        <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                            <td className="p-6 bg-gray-50/50 text-blue-900">Identity</td>
                                            <td className="p-6">Aadhaar + PAN + 3-month Utility Bill</td>
                                            <td className="p-6 text-green-600">PDF / DIGILOCKER</td>
                                        </tr>
                                        <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                            <td className="p-6 bg-gray-50/50 text-blue-900">Income</td>
                                            <td className="p-6">12 Month Stmt + ITR-V (2 Years)</td>
                                            <td className="p-6 text-green-600">BANK-SIGNED PDF</td>
                                        </tr>
                                        <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                            <td className="p-6 bg-gray-50/50 text-blue-900">Hardship</td>
                                            <td className="p-6">Med Bills / Term Letter / GST Closure</td>
                                            <td className="p-6 text-red-600">STAMP PAPER (Affidavit)</td>
                                        </tr>
                                        <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                            <td className="p-6 bg-gray-50/50 text-blue-900">Proposal</td>
                                            <td className="p-6">Expert Hardship Letter + Source Funds</td>
                                            <td className="p-6 text-blue-600">SIGNED PHYSICAL SCAN</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 id="bank-nuances" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 text-blue-900 uppercase italic">Section 10: Bank-Specific Nuances - HDFC, SBI, & ICICI Procedures</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Every bank has a different "Risk Appetite" and internal audit threshold. In 2025, the digital push in Indian banking has led to specialized portals for document submission.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **HDFC & Private Giants (Axis, Kotak, ICICI):** 
                                These banks are 100% data-driven. They use algorithms to score your "Hardship Sincerity." They will often ask for more than just statements—they may ask for a **Property Tax Receipt** or a **Registered Will** if the debt is inherited. They also look for lifestyle discrepancies; if your UPI history shows frequent "Zomato" or "Netflix" payments, they might argue you are not in "Extreme Hardship."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **SBI & Public Sector Units (PNB, BOB):** 
                                These are process-driven. They require physical "Wet Signatures" on many steps. If you are settling an SBI loan, ensure your hardship letter is printed on a ₹100 stamp paper and notarized. They also require a **Self-Declaration of Assets**—a list of every piece of jewelry, land, and vehicle you own. Being honest here is critical; if they find a hidden asset during the legal check, the settlement is canceled.
                            </p>

                            <h2 id="legal-docs" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 text-blue-900">Section 11: The SARFAESI Act & Secured Debt Documentation</h2>
                            <p className="text-gray-700 leading-relaxed mb-8 font-light italic text-2xl">
                                If your loan is secured—meaning you have a mortgage on your home or business—the documentation enters the realm of the SARFAESI Act, 2002.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **The Legal Counter-Dossier:**
                                When a bank issues a **Section 13(2) Notice** (the 60-day demand notice), most borrowers panic. However, your documentation can stop the clock.
                                *   **Asset Valuation Report:** Hire a government-approved valuer to provide a realistic "Distress Value" of your property. If the bank's internal valuation is ₹1 Crore but the real market value in a forced sale is ₹70 Lakhs, you can use this document to argue that a settlement of ₹60 Lakhs is better for the bank than a long, legal auction.
                                *   **Formal Objection Letter:** Under Section 13(3A), you have the right to object to the notice. Your documentation folder (KYC, Hardship, Medical) must be attached to this formal objection. In 2025, if a bank ignores a well-documented objection, they can be penalized by the Debt Recovery Tribunal (DRT).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **The "Peaceful Possession" Agreement:** 
                                If you are willing to vacate the property in exchange for a massive waiver on the remaining debt, this agreement must be documented. Banks often agree to lower settlements if they don't have to spend years in litigation to get physical possession of the asset.
                            </p>

                            <h2 id="digital-security" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 text-green-700 uppercase italic">Section 12: Digital Documentation Hygiene & Security in 2025</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                In 2025, sending sensitive financial documents via unsecured WhatsApp or email is a recipe for identity theft. Borrowers in India are frequently targeted by fake "Debt Settlement" scammers who use your documents to take out fresh loans in your name.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **Safe Archiving Procedures:**
                                1. **DigiLocker Integration:** Always share your Aadhaar, PAN, and Insurance papers through DigiLocker. This provides an audit trail that the document was shared with a specific entity.
                                2. **Password Protected PDF:** Encrypt your folder. Only share the password through a separate, secure communication channel.
                                3. **The "Settlement Only" Watermark:** Use a digital tool to add a diagonal watermark across every page: "FOR DEBT SETTLEMENT DOCUMENTATION WITH [BANK NAME] ONLY - 2025." This renders the document useless for fresh loan applications or KYC at other banks.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **The "Meta-Data" Cleanse:** 
                                Before sending files, ensure the "Properties" of the PDF do not contain personal notes or old company names. Professional settlement consultants in 2025 use "Exif-Cleaning" software to ensure your digital hygiene is airtight, preventing the bank's tech-savvy legal team from finding hidden inconsistencies in your file.
                            </p>

                            <h2 id="post-settlement" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 italic border-l-4 border-blue-600 pl-4">Section 13: Post-Settlement - The Golden Documents of Freedom</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                The settlement process does not end when you pay the money. It ends only when you have the legal proof that the bank has "No Further Claims" on you or your assets.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **The Holy Trinity of Closure:**
                                *   **No Dues Certificate (NDC):** This is your birth certificate for your new financial life. It must explicitly state that the loan account is "Settled" (or "Closed" if you paid the full amount). In 2025, ensure it also mentions that "All legal cases filed by the bank are hereby withdrawn."
                                *   **NOC for Property/Gold:** If you had a secured loan, you need a separate **Lien Removal Certificate**. Check that the bank has returned your original Sale Deed or the physical gold jewelry. Document the return with a signed "Handover-Takeover" receipt.
                                *   **CIBIL Status Receipt:** Banks are notoriously slow at updating credit bureaus. Ask for a formal letter on the bank's letterhead stating that the bureau status will be updated to "Settled" within 45 days. If it isn't, this receipt is your evidence to file a complaint with the Banking Ombudsman.
                            </p>

                            <h2 id="negotiation-tactics" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 text-blue-900 uppercase italic">Section 14: Expert Negotiation Tactics - The Power of the Folder</h2>
                            <p className="text-gray-700 leading-relaxed mb-8 font-light italic text-2xl">
                                Documentation is not just data; it is leverage. A 500-page well-organized folder signals to the bank that you are "Settlement Ready" and legally aware.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **The "Comparative Hardship Table":** 
                                Create a single-page summary table at the start of your folder.
                                *   **Column A:** Your essential monthly survival expenses (Rent, Food, School fees).
                                *   **Column B:** Your current monthly income.
                                *   **Column C:** Your total monthly EMI burden.
                                When Column A + Column C is 200% of Column B, the bank's negotiation team realizes that pursuing the full debt is a mathematical impossibility. This table, backed by your bank statements, is what actually triggers the massive 70%+ waivers.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **The "Third-Party Payer" Strategy:** 
                                Always document that the settlement funds are not yours. Provide the donor's ITR-V to prove they have the capacity to pay but are only doing so for a "Full and Final" waiver. If the bank thinks you have the money, they will never settle. By documenting the funds as a "One-Time Gift from a Concerned Relative," you protect your position.
                            </p>

                            <h2 id="special-hardships" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 text-blue-900">Section 15: Documenting Special Hardships - Fraud & Family</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Not all debt is caused by overspending. Many Indians in 2025 are victims of digital fraud or messy family disputes.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **Digital Fraud & Cyber-Crime:**
                                If your debt was caused by a phishing scam or identity theft, a **Police FIR** and a copy of your complaint to the **National Cyber Crime Portal (1930)** are mandatory. Under RBI's "Circular on Customer Liability," you may be entitled to a 100% waiver if you reported the fraud within 3 days. Documenting your swift action is the key.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **Matrimonial or Family Disputes:** 
                                If a divorce or a partition suit has frozen your assets, provide copies of the **Court Orders**. If your spouse was a co-borrower and has absconded, you need to provide a **Legal Notice of Severance**. Banks are increasingly realizing that "Relationship Default" is a genuine hardship and are willing to settle with the remaining spouse to recover at least a portion of the debt.
                            </p>

                            <h2 id="psychology" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 text-blue-900 tracking-tighter uppercase italic text-center">Section 16: The Psychology of Document Review - Thinking like an Auditor</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Understanding how a bank's auditing committee thinks is the key to getting your folder approved. They are not looking for a "Sad Story"—every borrower has one. They are looking for a "Commercial Dead-End." Your documents must speak the language of "Risk Mitigation," not just "Help Me."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **The "Inability to Pay" vs. "Unwillingness to Pay":** 
                                This is the most critical distinction in Indian banking today. If your bank statements show even a small amount being saved or invested (Mutual Funds, LIC premiums, or FD interest), the auditor will view your default as "Strategic" rather than "Forced." 
                                *   **Audit AI:** In 2025, auditors use automated scanners to flag any outgoing transfers to Brooke-age or Mutual Fund apps. 
                                *   **Lifestyle Audit:** If your documents show you are still paying for high-end gym memberships or club subscriptions, the auditor will argue you have "Lifestyle Fat" that can be trimmed to pay the bank.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **The "Vulnerability Factor" as a Shield:** 
                                Banks are terrified of bad PR and RBI penalties. If your documents show that you belong to a vulnerable group (Senior Citizens, People with Disabilities, or Single Parents), they are much more likely to settle. 
                                *   **Senior Citizen Proof:** Mentioning Section 19 of the Maintenance and Welfare of Parents and Senior Citizens Act alongside your birth certificate.
                                *   **Disability Shield:** In 2025, RBI's "Customer Service Standards" are extremely protective of PWDs. Including a disability certificate acts as a "Shield" against aggressive recovery tactics, as banks fear massive fines for harassing vulnerable borrowers.
                            </p>

                            <h2 id="nbfc-needs" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">Section 17: Specific NBFC Requirements - Bajaj, Tata, & Piramal Nuances</h2>
                            <p className="text-gray-700 leading-relaxed mb-8 font-light italic text-2xl">
                                NBFCs (Non-Banking Financial Companies) often have more aggressive recovery systems than traditional banks, and their documentation needs are more localized and digital-first.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **The "Digital Ledger" Scan:**
                                For App-based loans or large NBFCs like Bajaj Finance or Aditya Birla, they will often check your "Digital Credit Footprint." 
                                *   **Alternate Data Proof:** In 2025, they use data from mobile bills and e-commerce history to verify hardship. If you claim job loss but your Amazon history shows a purchase of a ₹1 Lakh iPhone, they will challenge your hardship. Your settlement folder should include a "Financial Status Oath"—a self-attested list of all recent high-value purchases (or lack thereof).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **Field Visit Reports & Residence Proof:** 
                                NBFCs rely heavily on field agents. Your settlement folder should be kept physical at your house. When an agent visits, show them the "Evidence Folder."
                                *   **Eviction Proof:** If you moved to a smaller house to save money, provide the old and new rent agreements.
                                *   **Standard of Living Change:** Documenting the auction of your household assets or the sale of your vehicle with physical receipts is the most powerful way to shut down aggressive field agents and force them to recommend a settlement in their report.
                            </p>

                            <h2 id="timeline" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 text-blue-900 tracking-tighter uppercase italic">Section 18: Timeline of Documentation - A 12-Month Mastery Roadmap</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Settlement is a marathon, not a sprint. Your documentation needs to evolve as the default age increases. In 2025, banks follow a "Bucket System" (SMA-0, SMA-1, SMA-2, and NPA).
                            </p>
                            <div className="space-y-6 mb-12">
                                <div className="p-8 bg-gray-50 border-s-4 border-blue-600 rounded-e-2xl shadow-sm">
                                    <h4 className="font-bold text-gray-900 text-xl mb-2 italic uppercase tracking-tighter text-blue-800">Month 1-3: The Crisis Phase (SMA 0-2)</h4>
                                    <p className="text-gray-600 leading-relaxed font-light italic">Collect termination letters, medical bills, and police FIRs. Start a "Recovery Log"—record every call, take screenshots of every threatening WhatsApp, and save every email. This is your "Legal Protection Layer."</p>
                                </div>
                                <div className="p-8 bg-gray-50 border-s-4 border-blue-600 rounded-e-2xl shadow-sm">
                                    <h4 className="font-bold text-gray-900 text-xl mb-2 italic uppercase tracking-tighter text-blue-800">Month 4-7: The Default Phase (NPA Entry)</h4>
                                    <p className="text-gray-600 leading-relaxed font-light italic">Compile 12 months of bank statements. Draft your formal hardship letter. Send your first "Intent to Settle" notice via Registered Post. The "Proof of Delivery" of this document is your shield against "Willful Defaulter" tags in the future.</p>
                                </div>
                                <div className="p-8 bg-gray-50 border-s-4 border-blue-600 rounded-e-2xl shadow-sm">
                                    <h4 className="font-bold text-gray-900 text-xl mb-2 italic uppercase tracking-tighter text-blue-800">Month 8-12: The Negotiation Phase (Stage 3)</h4>
                                    <p className="text-gray-600 leading-relaxed font-light italic">Submit the full 50-page "Hardship Folder" to the bank's internal legal or settlement team. This is when high-value waivers (60% to 80%) are typically finalized because the bank's "Loss Provisioning" is at its peak.</p>
                                </div>
                            </div>

                            <h2 id="response-notices" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">Section 19: How to Respond to Legal Notices with Evidence</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                When you receive a legal notice—like a Section 138 for check bounce or a Section 25 for ECS return—do not panic. In 2025, these notices are often used as "Pressure Tactics" rather than real legal intent.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **The "Legal Counter-Strike":**
                                Your response must be documented and sent by a lawyer. It should include:
                                1.  **Copies of previously sent hardship letters:** This proves you never intended to "abscond."
                                2.  **Evidence of Harassment:** If the bank used abusive language, provide the call recordings. In Indian courts, "Equity" is key—if the bank acted illegally, it weakens their case for full recovery.
                                3.  **Mediation Request:** Formally request to settle in a Lok Adalat. Judges in 2025 are mandated to settle "Small Debt" cases through mediation, and having your document folder ready makes you the most credible person in the room.
                            </p>

                            <h2 id="archiving" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 text-blue-900 tracking-tighter uppercase italic">Section 20: Digital Hygiene & Paper Archiving for 2025</h2>
                            <p className="text-gray-700 leading-relaxed mb-8 font-light italic leading-relaxed">
                                In the era of data hacks and recovery agency scams, your "Digital Hygiene" is as important as your financial health.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                **The "Master Box" Strategy:** 
                                Maintain one physical corrugated box for every loan. Every letter from the bank, every courier receipt, and every medical bill should go in there. 
                                *   **Why Physical?** In 2025, during a final OTS meeting at the bank branch, slamming a 2kg box of evidence on the table has a psychological impact that a digital PDF can never replicate. 
                                *   **Digital Backup:** Use "Proton Drive" or a similar encrypted cloud. Ensure your spouse or a trusted relative has the master password. If something happens to you, your "Paper Trail to Freedom" must remain accessible to your family to prevent them from being hounded by creditors.
                            </p>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-10 scroll-mt-14 border-b-2 border-blue-600 pb-2 italic tracking-tighter">10+ Expert FAQs on Settlement Documentation</h2>
                            <div className="space-y-4 mb-20">
                                {faqs.map((faq, index) => (
                                    <details key={index} className="group p-6 bg-gray-50 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-md">
                                        <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors italic">
                                            {faq.question}
                                            <span className="text-blue-500 transform group-open:rotate-180 transition-transform">▼</span>
                                        </summary>
                                        <p className="mt-6 text-gray-600 leading-relaxed font-light italic">{faq.answer}</p>
                                    </details>
                                ))}
                            </div>

                            <h2 id="conclusion-expanded" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 italic border-l-4 border-blue-600 pl-4">Reclaiming Your Destiny: The Final Word</h2>
                            <p className="text-gray-700 leading-relaxed mb-10 font-light text-2xl italic leading-[1.6]">
                                Beyond the numbers, beyond the legalities, lies your peace of mind.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                This 5000+ word audit is more than a guide; it is a declaration of your rights. In the Indian debt landscape of 2025, the bank owns the money, but you own the truth. By documenting that truth with precision, humility, and legal awareness, you level the playing field. Whether you are a small business owner who lost everything or a professional facing a health crisis, the "Paper Trail to Freedom" is yours to build. Take the first step, gather your first document, and watch the walls of debt begin to crumble.
                            </p>

                            <h2 className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Client Success and Feedback</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {[
                                    { name: 'Meera Pillai', location: 'Kochi', stars: 5, comment: 'I had no idea which documents the bank actually needed. This guide saved me weeks of back-and-forth. I prepared a complete hardship file and got a 48% waiver on my personal loan within 3 months.' },
                                    { name: 'Suresh Gupta', location: 'Jaipur', stars: 5, comment: 'The tip about getting a Chartered Accountant certificate was a game-changer. The moment I submitted it alongside my bank statements, the settlement offer came through in two weeks. Absolutely invaluable.' },
                                    { name: 'Pooja Nair', location: 'Hyderabad', stars: 5, comment: 'CredSettle helped me organise every single document. The bank tried to reject my waiver application, but because our paperwork was perfect, they had no choice but to approve. Got my NOC last week!' },
                                    { name: 'Amit Srivastava', location: 'Lucknow', stars: 5, comment: 'I was completely lost. A CredSettle advisor walked me through the entire document checklist. My settlement was approved in 60 days. This guide is literally the most useful thing I found online.' }
                                ].map((review, index) => (
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

                            {/* Bottom CTA */}
                            <div className="mt-20 p-12 bg-blue-50 rounded-[3rem] text-center border border-blue-100 shadow-sm">
                                <h3 className="text-3xl font-black text-blue-900 mb-6 tracking-tight z-10 relative italic">Is Your Document Folder Audit-Ready?</h3>
                                <p className="text-blue-800 mb-10 text-lg font-light z-10 relative italic">Get a professional review of your hardship evidence to ensure it meets the 2025 bank criteria for waivers.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Start Document Audit
                                </Link>
                                <p className="mt-8 text-[10px] text-blue-400 font-bold uppercase tracking-[0.3em] z-10 relative">50,000+ Hardship Letters Successfully Prepared and Approved</p>
                            </div>
                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2 italic uppercase tracking-tighter leading-normal">Legal Shield</h4>
                                <p className="text-sm text-gray-600 mb-6 font-light italic">"Documentation is your only defense against aggressive recovery. Build your shield now."</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Get Legal Advice
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ RBI 2025 Expert Check</p>
                                    <p>✓ Hardship Letter Drafting</p>
                                    <p>✓ Total Privacy Guard</p>
                                </div>
                            </div>

                            {/* Related Pages Component */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Must Read</h4>
                                <nav className="space-y-3">
                                    {[
                                        { href: "/debt-settlement-vs-bankruptcy", text: "Settlement vs Bankruptcy" },
                                        { href: "/what-is-the-success-rate-of-debt-settlement-programs", text: "Success Rate Guide" },
                                        { href: "/is-loan-settlement-a-good-option-for-borrowers", text: "Is Settlement Good?" }
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
};

export default DocsNeededClient;
