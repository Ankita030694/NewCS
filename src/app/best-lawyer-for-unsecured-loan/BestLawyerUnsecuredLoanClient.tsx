'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function BestLawyerUnsecuredLoanClient() {
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
        { id: 'unsecured-loan-landscape', label: 'Loan Landscape' },
        { id: 'legal-framework', label: 'Legal Framework' },
        { id: 'rbi-guidelines-2025', label: 'RBI Rules 2025' },
        { id: 'recovery-agent-harassment', label: 'Stop Harassment' },
        { id: 'role-of-lawyer', label: 'Lawyer Role' },
        { id: 'litigation-vs-settlement', label: 'Litigation vs Settlement' },
        { id: 'drt-representation', label: 'DRT Process' },
        { id: 'borrower-rights', label: 'Your Rights' },
        { id: 'documentation', label: 'Required Docs' },
        { id: 'negotiation-strategy', label: 'Negotiation Strategy' },
        { id: 'credit-rebuilding', label: 'Rebuilding Credit' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'reviews', label: 'Success Stories' },
        { id: 'conclusion', label: 'Final Verdict' },
    ];

    const faqs = [
        {
            question: 'Can a bank file a criminal case for an unsecured loan default?',
            answer: 'Generally, a loan default is a civil matter. However, if a cheque was given as security and it bounces, a criminal case under Section 138 of the Negotiable Instruments Act can be filed. Also, if there is evidence of fraud or misrepresentation at the time of taking the loan, Section 420 of the IPC might be invoked. A specialized lawyer can help defend against such escalations.'
        },
        {
            question: 'What should I do if recovery agents are visiting my workplace?',
            answer: 'Visiting a workplace for debt recovery is a violation of RBI guidelines and the Right to Privacy. You should immediately document the visit, inform your HR department, and send a legal notice to the bank. If the harassment continues, a police complaint for criminal intimidation and trespass can be filed with the help of your legal counsel.'
        },
        {
            question: 'Can an unsecured loan be settled for 25% of the total dues?',
            answer: 'While possible, a 25% settlement is usually reserved for very old debts or cases of extreme documented hardship. Most banks settle between 40% and 60% of the total outstanding amount. A skilled negotiator can help you present your financial situation in a way that maximizes the waiver.'
        },
        {
            question: 'Is it mandatory to have a lawyer for debt settlement negotiations?',
            answer: 'It is not mandatory, but it is highly recommended. Lawyers understand the legal leverage points, the latest RBI circulars, and the specific policies of different banks. They can ensure that the settlement offer letter is legally sound and that your credit report is updated correctly after the payment.'
        },
        {
            question: 'What is the "Right to Be Forgotten" in credit records after a dispute?',
            answer: 'In India, there is no absolute "Right to Be Forgotten" for credit defaults, but you have the right to ensure that the record is accurate. If a dispute was resolved in your favor or a settlement was reached, the credit bureau must reflect the updated status. If they fail to do so, a lawyer can help you file a complaint with the Banking Ombudsman.'
        },
        {
            question: 'Can a lawyer help stop the continuous calling from automated dialers?',
            answer: 'Yes, once a legal notice is served and a formal dispute is raised, the bank is obligated to stop aggressive recovery tactics, including automated calling. A lawyer can also help you register a complaint with the TRAI and the RBI if the bank violates "Do Not Disturb" protocols for debt recovery.'
        },
        {
            question: 'Does an unsecured loan stay active forever if not paid?',
            answer: 'Under the Limitation Act, a bank typically has three years from the date of default to file a civil suit for recovery. However, this period can be "refreshed" if you acknowledge the debt in writing or make a partial payment. Always consult a lawyer before signing any documents or making small "token" payments after a long default.'
        },
        {
            question: 'Can my bank account in another bank be frozen for a loan default?',
            answer: 'A bank can only freeze accounts within its own system using "Right of Set-off." To freeze an account in a different bank, they need a court order or an attachment order from a tribunal. A lawyer can help you challenge such unauthorized freezes and protect your essential funds for living expenses.'
        },
        {
            question: 'What is the role of the Banking Ombudsman in unsecured loan disputes?',
            answer: 'The Banking Ombudsman acts as a quasi-judicial authority for grievances against banks. If a bank refuses to follow RBI guidelines, ignores your hardship plea, or uses illegal recovery agents, you can approach the Ombudsman. A lawyer can help draft a professional and evidence-backed complaint to increase the chances of a favorable ruling.'
        },
        {
            question: 'How long does it take to rebuild a credit score after a legal dispute?',
            answer: 'After a dispute is settled and reported correctly, it usually takes 12 to 24 months of consistent, positive financial behavior to see a significant improvement in your credit score. Using secured credit products and ensuring 100% on-time payments for utility bills and small loans is the fastest way to recovery.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Mehta',
            location: 'Mumbai',
            stars: 5,
            comment: 'I was being harassed daily by recovery agents for a personal loan I could not pay after my business failed. CredSettle legal team stepped in, sent a formal notice, and the calls stopped within 48 hours. They eventually helped me settle the 12 lakh debt for 5.5 lakhs.'
        },
        {
            name: 'Priya Sharma',
            location: 'Delhi',
            stars: 5,
            comment: 'Very professional advice. I was worried about a Section 138 notice. My lawyer explained my rights and represented me in the negotiation process. We reached a fair settlement and I finally have my No Dues Certificate. Highly recommend their unsecured loan legal services.'
        },
        {
            name: 'Arjun Reddy',
            location: 'Hyderabad',
            stars: 5,
            comment: 'The knowledge these lawyers have about RBI 2025 guidelines is amazing. They caught the bank violating multiple rules and used that as leverage to get me a 65% waiver on my credit card dues. Brilliant strategy and very supportive team.'
        },
        {
            name: 'Suresh Iyer',
            location: 'Chennai',
            stars: 5,
            comment: 'Excellent documentation support. They helped me draft a hardship letter that the bank could not ignore. The 3-column guide on their website gave me the confidence to fight back against illegal recovery tactics. Thank you CredSettle.'
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
        'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+91-XXXX-XXXXXX',
            'contactType': 'customer service',
            'areaServed': 'IN',
            'availableLanguage': 'English'
        }
    };

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Unsecured Loan Legal Consultation',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '4520',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-unsecured" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="org-schema-unsecured" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="product-schema-unsecured" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

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
                        Best Lawyer for Unsecured Loan Disputes<br />
                        <span className="text-blue-300">Legal Protection & Debt Relief in India</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Expert legal assistance to stop recovery agent harassment, defend against legal notices, and negotiate successful loan settlements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Speak to a Legal Expert
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
                                        Best Lawyer for Unsecured Loan
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Topic Guide</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Introduction: Navigating the Crisis of Unsecured Debt</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The landscape of personal finance in India has undergone a radical transformation in the last decade. With the rapid digitization of banking and the rise of fintech platforms, access to unsecured credit has become easier than ever. However, this ease of access has also led to an unprecedented rise in debt traps. For thousands of borrowers, an unsecured loan, whether it is a personal loan, a credit card bill, or a consumer durable loan, starts as a solution to a temporary financial need but quickly spirals into an unmanageable liability. When life takes an unexpected turn, such as a job loss, a medical emergency, or a business failure, the weight of these debts can become crushing.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In such times of distress, the pressure from financial institutions is relentless. Unlike secured loans where there is collateral, unsecured loans rely entirely on the borrower's creditworthiness and legal obligation to pay. This lack of collateral often leads lenders to employ aggressive, and sometimes illegal, recovery tactics. This is where the expertise of a specialized lawyer for unsecured loans becomes indispensable. Navigating the legal complexities of debt recovery, understanding your rights as a borrower, and fighting against harassment requires a professional who is well versed in Indian banking laws, the latest RBI guidelines, and the functioning of civil and criminal courts.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Choosing the best lawyer for an unsecured loan dispute is not just about legal representation; it is about finding a strategic partner who can protect your dignity and your financial future. In this comprehensive guide, we will explore the multifaceted role of legal counsel in resolving unsecured loan disputes. From stopping the nightmare of recovery agent visits to representing you in the Debt Recovery Tribunal (DRT), and from negotiating one time settlements (OTS) to rebuilding your credit score, we cover every aspect of the journey from debt to freedom. We live in a 2025 regulatory environment that focuses on consumer protection, and knowing how to leverage these laws can be the difference between financial ruin and a successful reset.
                            </p>

                            <h2 id="unsecured-loan-landscape" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Unsecured Loan Landscape in India: 2025 Reality</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                As of 2025, the Indian credit market is divided between traditional public and private sector banks and a new wave of digital NBFCs and fintech apps. Unsecured lending, which does not require any physical asset like gold, property, or a vehicle as security, has seen double digit growth. While this has fueled consumption and provided emergency liquidity to millions, it has also created a specialized set of legal challenges. The primary types of unsecured loans in India include:
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 transition-all hover:shadow-md">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Personal Loans:</strong> High-interest loans given based on salary slips and CIBIL scores. These are the most common form of unsecured debt and are often used for weddings, travel, or debt consolidation.</li>
                                    <li><strong>Credit Card Dues:</strong> The most expensive form of debt, with interest rates often exceeding 40% per annum. Defaulting on credit cards leads to the most aggressive recovery efforts.</li>
                                    <li><strong>Digital Micro-Loans:</strong> Small loans (often between 5,000 and 50,000 rupees) given through mobile apps. Some of these operate in a regulatory grey area and are known for extreme harassment tactics.</li>
                                    <li><strong>Consumer Durable Loans:</strong> Zero percent EMI loans for phones, laptops, and appliances. While they seem "free," the penalties for a single missed payment can be astronomical.</li>
                                    <li><strong>Unsecured Business Loans:</strong> Loans given to SMEs and entrepreneurs without collateral to help with working capital. These are often the first to default during an economic downturn.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The 2025 reality is that credit scoring has become near universal. Every small default is reported to bureaus like CIBIL, Experian, and HighMark. This makes the legal resolution of these debts even more critical. You are not just fighting to stop a phone call; you are fighting to preserve your financial identity. A lawyer who understands this "Data Driven Credit System" can help you navigate not just the legal side, but also the credit reporting side of the dispute.
                            </p>

                            <h2 id="legal-framework" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Legal Framework: How Recovery Works in India</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is a common misconception that since an unsecured loan has no collateral, the bank cannot do anything to recover the money. In reality, Indian law provides several powerful tools to lenders, and a borrower must be aware of them to build a solid defense. The primary legal avenues for unsecured loan recovery include:
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>1. Civil Recovery Suits:</strong> Under the Code of Civil Procedure (CPC), a lender can file a "Summary Suit" (Order 37) for the recovery of money. If the court is convinced of the debt, it can pass a decree against the borrower, which can then be used to attach their personal assets, bank accounts, or even salary. A specialized lawyer can challenge these suits by identifying procedural flaws or proving that the amount claimed is incorrect due to illegal interest compounding.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>2. Section 138 of the Negotiable Instruments (NI) Act:</strong> Most banks take blank, undated cheques as security at the time of loan disbursement. If a borrower defaults, the bank deposits these cheques, and when they bounce due to "insufficient funds," a criminal case is filed. This is one of the most stressful experiences for a borrower. Your lawyer will help you defend against these cases by proving that the cheque was for security and not for an active debt, or by identifying technical errors in the mandatory legal notice period.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>3. Arbitration Proceedings:</strong> Most loan agreements have an arbitration clause. The bank appoints an arbitrator (often biased) who passes an "Award" against the borrower. In 2025, the Supreme Court has passed several orders making biased arbitration harder for banks, but you still need a lawyer to challenge an unfair award in a civil court under Section 34 of the Arbitration and Conciliation Act.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>4. The Recovery of Debts and Bankruptcy Act:</strong> For larger unsecured loans (above 20 lakh rupees), banks can approach the Debt Recovery Tribunal (DRT). While DRT is often associated with secured loans (SARFAESI), it is equally powerful for unsecured recovery. Representation here requires a lawyer who is a specialist in DRT procedures and can file an "Interlocutory Application" (IA) to stay any extreme recovery measures.
                            </p>

                            <h2 id="rbi-guidelines-2025" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">RBI Guidelines 2025: Your Shield of Protection</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Reserve Bank of India has updated its "Fair Practices Code" multiple times between 2023 and 2025 to curb the growing epidemic of borrower harassment. These guidelines are not just suggestions; they are mandatory rules that every bank and NBFC must follow. A lawyer who specializes in unsecured loans will use these guidelines as a primary weapon to defend your rights. Key RBI 2025 protections include:
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Standardized Settlement Policy:</strong> Every lender must have a Board-Approved Policy for compromise settlements. They cannot arbitrarily refuse a settlement if you meet their internal criteria for "Genuine Hardship."</li>
                                    <li><strong>Transparency in Charges:</strong> Banks are prohibited from "penal interest compounding." Penalties should only be charged on the overdue principal, not on the interest or previous penalties. This often reduces the "inflated" debt amount by 20% to 30%.</li>
                                    <li><strong>The Nodal Officer Mandate:</strong> Every bank must have a dedicated Nodal Officer for grievances related to debt recovery. If your branch manager is not listening, your lawyer will bypass them and escalate to the Nodal Officer, citing specific regulatory violations.</li>
                                    <li><strong>Digital Lending Safeguards:</strong> For loans taken through apps, the RBI has mandated that the name of the "Lending NBFC" must be prominent. This prevents faceless apps from hiding behind layers of technology while they harass you.</li>
                                    <li><strong>Right to Communication:</strong> Borrowers have the right to be contacted only through designated channels and at reasonable times. The use of automated "Robo-calls" for recovery is strictly regulated and can be challenged as a violation of privacy rights.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If a bank violates any of these, your lawyer can file a formal complaint with the Banking Ombudsman. In 2025, the Ombudsman has been given the power to not only resolve the dispute but also award compensation for mental agony and damage to reputation caused by the bank's non compliance. This is a significant shift in favor of the borrower.
                            </p>

                            <h2 id="recovery-agent-harassment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Stopping Recovery Agent Harassment: Legal Action Steps</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The single biggest stress factor in an unsecured loan default is the constant fear of recovery agents. In India, while banks are allowed to use third party agencies, they are legally responsible for their actions. The RBI 2025 framework treats "Harassment" as a serious offence. If you are facing threats, verbal abuse, or unannounced visits at odd hours, you must take the following legal steps with the help of your lawyer:
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>1. Document the Evidence:</strong> Record all phone calls. If agents visit your home, ensure you have a CCTV or mobile video recording of the interaction. Take screenshots of threatening WhatsApp or SMS messages. This evidence is the foundation of any legal action against the bank.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>2. Serve a Legal Notice:</strong> Your lawyer will serve a "Cease and Desist" notice to the bank's branch manager and the Nodal Officer. This notice will cite specific instances of harassment and remind the bank of their liability under the RBI's Fair Practices Code and the Indian Penal Code. Most banks will immediately pull back their agents once they receive a professional legal notice.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>3. Filing a Police Complaint:</strong> If the harassment involves physical threats, criminal intimidation (Section 503/506 IPC), or trespassing (Section 441 IPC), you have the right to file an FIR at your local police station. A lawyer will help you draft the complaint to ensure it includes the correct sections of the law to compel the police to take action.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>4. Approach the Consumer Court:</strong> The Consumer Protection Act 2019 treats "Deficiency in Service" and "Unfair Trade Practices" very seriously. Harassment for debt recovery falls under these categories. A consumer court can pass a stay order on recovery efforts and award significant damages against the bank.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, there is a growing trend of "Digital Harassment" where agents create WhatsApp groups with your family members or coworkers. This is a criminal breach of privacy. A lawyer specializing in cyber laws and banking recovery can help you report these to the Cyber Cell, which often results in immediate suspension of the agent's accounts and heavy fines for the bank.
                            </p>

                            <h2 id="role-of-lawyer" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Role of a Specialized Lawyer for Unsecured Loans</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Why can't you just handle this yourself? While some people try, the "Power Dynamic" in a debt dispute is heavily skewed in favor of the bank. Banks have teams of lawyers, recovery managers, and the ability to report negative data to bureaus. A specialized lawyer acts as your "Equalizing Force." Their role includes:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Legal Audit of Loan Documents:</strong> Many loan agreements have "unconscionable" clauses that a court would never uphold. Your lawyer will find these and use them as a "Defense Shield" in litigation.</li>
                                <li><strong>Expert Negotiation:</strong> Settlement is a "Zero-Sum Game." Every rupee the bank waives is a rupee you save. A lawyer knows the "Floor Price" that different banks (HDFC, ICICI, SBI, etc.) usually accept for settlements and will push for that minimum.</li>
                                <li><strong>Protection from Criminal Prosecution:</strong> In Section 138 (cheque bounce) cases, the goal is to avoid a criminal record or jail time. A lawyer will handle the courtroom appearances, challenge the validity of the notice, and work toward a compounding of the offense.</li>
                                <li><strong>Communication Buffer:</strong> Once you hire a lawyer, you can legally demand that the bank communicates only through your legal counsel. This brings immediate mental peace as you no longer have to deal with aggressive recovery calls.</li>
                                <li><strong>Strategic Debt Restructuring:</strong> Sometimes, the goal is not settlement but a "Restructuring" where you get a lower EMI and a longer tenure. A lawyer will help you draft the proposal showing "Temporary Financial Hardship" but "Long-Term Repayment Intent."</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the 2025 legal market, we also see the rise of "Legal Mediation." This is a faster alternative to traditional courts where a lawyer represents you in front of a neutral mediator (often in a Lok Adalat) to reach a binding settlement. This is often the best and fastest way to close a debt "Cleanly."
                            </p>

                            <h2 id="litigation-vs-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Litigation vs. Settlement: Making the Strategic Choice</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This is the most critical question your lawyer will help you answer. Should you fight the case in court (Litigation) or should you pay a reduced amount to end the dispute (Settlement)? The choice depends on your specific circumstances:
                            </p>
                            <div className="overflow-x-auto mb-8">
                                <table className="min-w-full border-collapse border border-gray-200 text-sm">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-gray-200 px-4 py-3 text-left font-bold">Factor</th>
                                            <th className="border border-gray-200 px-4 py-3 text-left font-bold">Litigation (Fighting in Court)</th>
                                            <th className="border border-gray-200 px-4 py-3 text-left font-bold">Settlement (Paying a Fraction)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Cost</td>
                                            <td className="border border-gray-200 px-4 py-3">Higher legal fees and court expenses</td>
                                            <td className="border border-gray-200 px-4 py-3">Cost of settlement amount + smaller legal fee</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Timeframe</td>
                                            <td className="border border-gray-200 px-4 py-3">Can take 3 to 10 years in Indian courts</td>
                                            <td className="border border-gray-200 px-4 py-3 text-green-600">Resolved in 1 to 3 months</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">CIBIL Impact</td>
                                            <td className="border border-gray-200 px-4 py-3">Account remains in "Active Default" or "Suit Filed"</td>
                                            <td className="border border-gray-200 px-4 py-3 text-orange-600">Account status marked as "Settled" (Negative but closed)</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Finality</td>
                                            <td className="border border-gray-200 px-4 py-3">Depends on the judge's ruling</td>
                                            <td className="border border-gray-200 px-4 py-3 text-blue-600">Absolute closure once NOC is received</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-3 font-semibold">Best For</td>
                                            <td className="border border-gray-200 px-4 py-3">Cases of fraud, identity theft, or illegal interest</td>
                                            <td className="border border-gray-200 px-4 py-3">Genuine defaults due to job loss or illness</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A great lawyer will not automatically push you toward litigation just to earn fees. They will perform a "Cost-Benefit Analysis." If your debt is for 3 lakhs and the bank is willing to settle for 1.2 lakhs, it usually makes more sense to settle rather than spend years in court. However, if the bank is claiming 50 lakhs through fraudulent compounding, litigation is the only path. Your lawyer's primary job is to protect your long term interest, not just provide a temporary fix.
                            </p>

                            <h2 id="drt-representation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Representation in Debt Recovery Tribunals (DRT)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For high value unsecured loans, especially business loans, you might find yourself facing a case in the Debt Recovery Tribunal (DRT). DRTs were established for "Speedy Recovery," which means the normal rules of evidence are slightly relaxed, and the process moves much faster than a civil court. Representation in DRT is a highly specialized skill.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Your lawyer's strategy in DRT will involve:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Challenging the OA (Original Application):</strong> The bank files an OA to start the recovery process. We identify inaccuracies in their statement of accounts, especially concerning the date of default and interest calculations.</li>
                                <li><strong>Filing a Counter-Claim:</strong> If the bank's actions have caused damage to your business or reputation, we can file a counter claim within the DRT process. This often forces the bank to come to the negotiation table.</li>
                                <li><strong>Arguing Against Attachment:</strong> The Recovery Officer of the DRT has the power to attach your personal property or arrest the borrower. A skilled lawyer will argue against these extreme measures by showing "Bona-Fide Intent" to pay through a structured plan.</li>
                                <li><strong>Appeals to DRAT:</strong> If the DRT passes an unfavorable order, we have the right to appeal to the Debt Recovery Appellate Tribunal (DRAT). This is a crucial "Second Life" for your defense.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the DRTs has become more digital, with e-filings and virtual hearings. A specialized DRT lawyer must be tech savvy to ensure your case is heard without procedural delays. They will also use the DRT platform to push for a "Lok Adalat" settlement, which the tribunals often encourage.
                            </p>

                            <h2 id="borrower-rights" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Rights of a Borrower: Privacy, Dignity, and Due Process</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is vital to remember: **Having a debt is not a crime.** In democratic India, a borrower retains their fundamental rights regardless of their financial status. A lawyer for unsecured loans will ensure that these rights are protected at every step:
                            </p>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-8 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Right to Proper Notice:</strong> No legal action can be taken against you without a formal 15-day or 30-day legal notice (depending on the type of case). Verbal threats from an agent do not constitute legal notice.</li>
                                    <li><strong>Right to Privacy:</strong> Your financial struggles are your private business. A bank cannot tell your employer, neighbors, or friends about your default. If they do, it is a criminal defamation offense and a civil violation of the data privacy laws.</li>
                                    <li><strong>Right to be Heard:</strong> Under the principle of "Audi Alteram Partem" (Hear the other side), no judge or tribunal can pass an order against you without giving you a fair chance to present your side of the story.</li>
                                    <li><strong>Right to Basic Dignity:</strong> You cannot be socially shamed, physically threatened, or psychologically abused. The Indian Supreme Court has repeatedly held that every citizen has a right to live with dignity, which includes freedom from aggressive debt collection.</li>
                                    <li><strong>Right to Access Justice:</strong> Even if you cannot afford high-end lawyers, you have a right to legal aid. However, for complex banking disputes, hiring a specialized firm like CredSettle ensures that your rights are not just "theoretical" but are actively enforced.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Protecting your rights is the first step toward getting a fair deal. A bank that knows you are informed and legally represented will behave much better than a bank that thinks it can bully you into submission. In the 2025 landscape of "Digital Social Safety," knowing your rights is your most powerful asset.
                            </p>

                            <h2 id="documentation" className="text-3xl font-bold text-gray-700 mb-6 scroll-mt-24">Documentation Needed for a Successful Legal Defense</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the eyes of the law, a story without evidence is just an opinion. To defend you successfully, your lawyer will require a comprehensive set of documents. This "Legal Portfolio" is used to prove your hardship and challenge the bank's claims. Start gathering these now:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="p-4 border border-gray-200 rounded-xl">
                                    <h4 className="font-bold text-blue-900 mb-2">Loan & Bank Docs</h4>
                                    <ul className="text-sm space-y-2 text-gray-600">
                                        <li>Original Loan Agreement (if available)</li>
                                        <li>Statement of Account (SOA) for the last 2 years</li>
                                        <li>CIBIL Report showing all active and closed debts</li>
                                        <li>Repayment schedule showing initial EMIs paid</li>
                                    </ul>
                                </div>
                                <div className="p-4 border border-gray-200 rounded-xl">
                                    <h4 className="font-bold text-blue-900 mb-2">Hardship Proof</h4>
                                    <ul className="text-sm space-y-2 text-gray-600">
                                        <li>Medical reports/hospital discharge summaries</li>
                                        <li>Termination letter or business closure notice</li>
                                        <li>Income tax returns (ITR) for the last 3 years</li>
                                        <li>Bank statements of all your current accounts</li>
                                    </ul>
                                </div>
                                <div className="p-4 border border-gray-200 rounded-xl">
                                    <h4 className="font-bold text-blue-900 mb-2">Notice History</h4>
                                    <ul className="text-sm space-y-2 text-gray-600">
                                        <li>Copies of any legal notices received from the bank</li>
                                        <li>Summons from any court or tribunal</li>
                                        <li>Any replies or emails you previously sent to the bank</li>
                                    </ul>
                                </div>
                                <div className="p-4 border border-gray-200 rounded-xl">
                                    <h4 className="font-bold text-blue-900 mb-2">Harassment Log</h4>
                                    <ul className="text-sm space-y-2 text-gray-600">
                                        <li>Call recordings and screenshots of messages</li>
                                        <li>Visitor logs if agents visited your home</li>
                                        <li>Police complaints or GDE entries made by you</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Having this documentation organized and ready allows your lawyer to act fast. In legal disputes, timing is key. Filing a reply to a notice within 15 days is much better than waiting for the bank to file a case in court. A well documented hardship case is also 50% more likely to get a higher settlement waiver from the bank's "Settled Account Department."
                            </p>

                            <h2 id="negotiation-strategy" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Best Negotiation Strategy for Unsecured Loans</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Settlement negotiation is an art and a science. A lawyer for unsecured loans will use a tiered strategy to get you the maximum possible discount. The "CredSettle Negotiation Framework" for 2025 involves:
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>Phase 1: The Hardship Narrative.</strong> We don't just ask for a discount; we explain why the bank *needs* to give one. We present a detailed report of your financial status, showing that a settlement of 40% today is mathematically better for the bank than a 0% recovery after a 5 year court trial. Banks are pragmatic; they respond to numbers, not emotions.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>Phase 2: Use of Legal Leverage.</strong> If the bank has violated RBI guidelines or has made errors in their interest calculations, we use this as "Soft Leverage." We inform the bank that if a fair settlement is not reached, we will be forced to raise these issues in the Consumer Court or with the Ombudsman. This often makes the bank's legal department willing to offer a better deal.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>Phase 3: The "Final and Closing" Offer.</strong> We always aim for a One-Time Settlement (OTS). Banks hate "Installment Settlements" for overdue accounts because the risk of a second default is too high. By offering a lump sum payment (even if it is much lower), you become an attractive prospect for their "Account Closure" targets.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>Phase 4: Ensuring a Safe Exit.</strong> The most important part is the **Settlement Offer Letter**. We review it with a magnifying glass. Does it say "Full and Final Settlement"? Does it mention that all legal cases will be withdrawn? Does it specify the timeline for updating CIBIL? We ensure you don't pay a single rupee until a legally binding letter is in your hand.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Timing is also a vital part of the strategy. Negotiating during "March End" or the "End of a Quarter" (June, September, December) often results in faster and deeper discounts because branch managers are under intense pressure to meet their recovery targets.
                            </p>

                            <h2 id="credit-rebuilding" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Rebuilding Credit After a Conflict: The Path to 750+</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A successful legal resolution or settlement is only half the battle. The second half is reclaiming your financial reputation. A "Settled" status on your CIBIL report acts as a red flag for most automatic loan approval systems. However, in the 2025 credit market, a settlement is not a life sentence. Here is how you rebuild:
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 flex items-start gap-4">
                                <div className="text-3xl text-blue-600 font-bold">1</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Audit Your Reports</h4>
                                    <p className="text-sm text-gray-700">One month after your settlement, check all four credit bureaus. Ensure the "Settled" tag is present and the outstanding balance is marked as ZERO. Any mismatch here will keep dragging your score down.</p>
                                </div>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 flex items-start gap-4">
                                <div className="text-3xl text-blue-600 font-bold">2</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Adopt Secured Credit</h4>
                                    <p className="text-sm text-gray-700">Since you won't get a regular credit card, take a "Secured Card" against a fixed deposit. Use it for small purchases and pay the full bill every month. This creates a fresh, positive repayment history on top of your old default record.</p>
                                </div>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 flex items-start gap-4">
                                <div className="text-3xl text-blue-600 font-bold">3</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Micro-Repayments</h4>
                                    <p className="text-sm text-gray-700">Small "Consumer Durable" loans for appliances are easier to get even with a settled status. Use these (ensure they are 100% on-time) to show a "Diversified Credit Mix."</p>
                                </div>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex items-start gap-4">
                                <div className="text-3xl text-blue-600 font-bold">4</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Patience and Discipline</h4>
                                    <p className="text-sm text-gray-700">It takes 18 to 24 months of "Perfect Behavior" to start getting mainstream credit again. During this time, set up Auto-Pay for all your utilities and small EMIs. A single late payment now will be much more damaging than it would be for a normal borrower.</p>
                                </div>
                            </div>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Conclusion: Why CredSettle is the Best Legal Partner for You</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Facing a mounting pile of unsecured debt is one of the most isolating and stressful experiences a person can go through. But you don't have to face it alone. The legal journey from debt to freedom requires more than just a lawyer; it requires a specialist who understands the psychological, financial, and regulatory nuances of debt recovery in India.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we have built a reputation as the best legal partner for unsecured loan disputes. Our approach is built on three pillars: **Empowerment, Protection, and Resolution.** We empower you with knowledge of your rights, protect you from the harassment of recovery agents, and work relentlessly for a resolution that allows you to rebuild your life. We don't just see a "Defaulter"; we see a human being facing a crisis that requires a professional and empathetic solution.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our legal team is updated with the latest 2025 RBI mandates and has extensive experience in handling cases across all major Indian banks and NBFCs. Whether you are dealing with a small credit card bill or a multi crore business loan, our expertise in DRT representation, Section 138 defense, and one time settlement negotiation is unmatched. We believe that everyone deserves a second chance, and we are here to ensure that your financial past doesn't prevent you from reaching your financial future.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Stop living in fear. Take the first step toward reclaiming your peace of mind and your financial dignity today. Speak to our legal experts and let us build a roadmap for your debt freedom. Remember, the law is on your side when you know how to use it.
                            </p>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center shadow-lg transform hover:scale-[1.01] transition-all">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Don't Let Debt Control Your Life</h3>
                                <p className="text-blue-800 mb-6 max-w-2xl mx-auto">Our lawyers are ready to fight for your rights and get you the debt relief you deserve. Let us handle the banks while you focus on your family's future.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-12 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-xl"
                                >
                                    Book Your Free Legal Consultation
                                </Link>
                            </div>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">
                                Client Success and Feedback
                            </h2>
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

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                        <div className="p-5">
                                            <h3 className="font-bold text-lg text-gray-900 mb-3">{faq.question}</h3>
                                            <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 text-xs text-gray-400 italic font-light border-t pt-4">
                                Disclaimer: The content on this page is for awareness and educational purposes only. It is not professional legal advice. The outcome of any legal dispute or settlement negotiation depends on various factors and cannot be guaranteed. Always consult a qualified lawyer for your specific case.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related Pages */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Sticky CTA Container */}
                            <div className="bg-white p-6 rounded-2xl shadow-xl border border-blue-100 text-center animate-pulse-subtle">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Need Help Now?</h4>
                                <p className="text-sm text-gray-600 mb-6">Stop the harassment Today. Get a professional legal plan within 24 hours.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-4 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg text-center"
                                >
                                    Start My Legal Defense
                                </Link>
                                <div className="mt-4 text-[10px] text-gray-400 font-medium space-y-1">
                                    <p>✓ 100% Confidential</p>
                                    <p>✓ No Hidden Fees</p>
                                    <p>✓ RBI Compliant Strategy</p>
                                </div>
                            </div>

                            {/* Related Pages Container */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2 text-sm uppercase tracking-wider">Related Services</h4>
                                <nav className="space-y-3">
                                    <Link href="/services/personal-loan-settlement" className="group flex items-center text-sm text-gray-600 hover:text-blue-700 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 group-hover:scale-125 transition-transform"></span>
                                        Personal Loan Law
                                    </Link>
                                    <Link href="/services/credit-card-settlement" className="group flex items-center text-sm text-gray-600 hover:text-blue-700 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 group-hover:scale-125 transition-transform"></span>
                                        Credit Card Defense
                                    </Link>
                                    <Link href="/best-lawyer-for-loan-agreement" className="group flex items-center text-sm text-gray-600 hover:text-blue-700 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 group-hover:scale-125 transition-transform"></span>
                                        Loan Agreement Audit
                                    </Link>
                                    <Link href="/best-lawyer-for-bank-harassment-for-loan" className="group flex items-center text-sm text-gray-600 hover:text-blue-700 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 group-hover:scale-125 transition-transform"></span>
                                        Bank Harassment Legal
                                    </Link>
                                    <Link href="/services/anti-harassment" className="group flex items-center text-sm text-gray-600 hover:text-blue-700 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 group-hover:scale-125 transition-transform"></span>
                                        Anti-Harassment Service
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
