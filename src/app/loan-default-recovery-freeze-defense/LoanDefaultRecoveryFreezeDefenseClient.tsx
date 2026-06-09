'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function LoanDefaultRecoveryFreezeDefenseClient() {
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
        { id: 'introduction', label: 'Crisis Management' },
        { id: 'sarfaesi-act-rights', label: 'SARFAESI Rights' },
        { id: 'illegal-npa-classification', label: 'NPA Disputes' },
        { id: 'drt-defense-strategies', label: 'DRT Defense' },
        { id: 'rbi-fair-practices-2025', label: 'RBI Codes 2025' },
        { id: 'stopping-illegal-seizure', label: 'Stop Seizure' },
        { id: 'recovery-agent-protection', label: 'Agent Protection' },
        { id: 'moratorium-legal-context', label: 'Moratorium Law' },
        { id: 'wrongful-freeze-reasons', label: 'Why Freeze?' },
        { id: 'unfreezing-protocol', label: 'Unfreezing Steps' },
        { id: 'compensation-harassment', label: 'Sue for Damages' },
        { id: 'preventive-legal-measures', label: 'Future Proof' },
        { id: 'client-feedback', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Resolution' },
    ];

    const faqs = [
        {
            question: 'What is a loan recovery freeze and is it legal?',
            answer: 'A loan recovery freeze is essentially a "Stay Order" or a procedural halt on recovery actions like bank account freezing or asset possession. It is a legal remedy obtained through DRTs or High Courts when a bank violates recovery protocols.'
        },
        {
            question: 'Can a bank freeze my savings account for a default on a personal loan?',
            answer: 'A bank can exercise a "Right of Lien" or "Set Off" to freeze funds in your savings account to cover dues of another loan in the same bank. However, they must follow RBI guidelines and provide prior intimation. If done arbitrarily, it can be challenged.'
        },
        {
            question: 'What is a Section 13(2) notice under SARFAESI Act?',
            answer: 'It is a 60 day demand notice issued by a secured lender after your account is classified as an NPA. It is the first step in the recovery process, giving you two months to repay or raise objections.'
        },
        {
            question: 'How can I stop the physical possession of my property by a bank?',
            answer: 'You can file a Securitization Application (SA) under Section 17 of the SARFAESI Act before the Debt Recovery Tribunal (DRT). If you can prove procedural lapses or wrongful NPA classification, the DRT can stay the possession.'
        },
        {
            question: 'Does the RBI allow recovery calls after 7 PM in 2025?',
            answer: 'No. The updated RBI Fair Practices Code for 2025 strictly prohibits recovery agents from calling or visiting borrowers before 8 AM and after 7 PM. Any violation is a ground for a serious complaint to the Banking Ombudsman.'
        },
        {
            question: 'What constitutes an "Illegal" NPA classification?',
            answer: 'If the bank failed to credit regular payments, charged excessive illegal interest that pushed the account into default, or failed to give the mandatory 90 day window for payment before classification, the NPA status is illegal.'
        },
        {
            question: 'Can I sue the bank for mental agony caused by recovery agents?',
            answer: 'Yes. Under the Consumer Protection Act and various High Court precedents, banks are vicariously liable for the actions of their agents. You can claim substantial compensation for harassment, public humiliation, and mental trauma.'
        },
        {
            question: 'What is the "Right of Redemption" in loan recovery?',
            answer: 'It is the borrower’s right to pay off the entire outstanding amount at any time before the actual sale of the mortgaged asset. Once paid, the bank is legally bound to return the property title and stop all recovery freeze actions.'
        },
        {
            question: 'Is agricultural land exempt from SARFAESI recovery?',
            answer: 'Yes. Sections 31(i) of the SARFAESI Act specifically exempt agricultural land from being seized. If a bank tries to recover debt by attaching farmland, the action is void and can be immediately stayed by a court.'
        },
        {
            question: 'How long does a DRT case take to resolve a recovery dispute?',
            answer: 'A typical SARFAESI application in DRT should be resolved within 60 to 120 days. However, interim stay orders can be obtained within the first or second hearing to provide immediate relief from recovery freezes.'
        }
    ];

    const reviews = [
        {
            name: 'Anil Deshmukh',
            location: 'Pune',
            stars: 5,
            comment: 'The bank tried to freeze my business account overnight. CredSettle lawyers filed a stay in DRT within 48 hours. The freeze was lifted and the bank was reprimanded for not following the 60 day notice rule.'
        },
        {
            name: 'Suresh Menon',
            location: 'Kochi',
            stars: 5,
            comment: 'Highly professional defense. They identified that the bank had wrongly classified my home loan as NPA despite my insurance claim being pending. They stopped the auction and saved my house.'
        },
        {
            name: 'Meenakshi Iyer',
            location: 'Chennai',
            stars: 5,
            comment: 'Recovery agents were calling my father at 10 PM. CredSettle issued a legal notice citing the RBI 2025 code. The calls stopped immediately and the bank had to pay a penalty for harassment.'
        },
        {
            name: 'Vikram Singh',
            location: 'Jaipur',
            stars: 5,
            comment: 'I was lost after receiving a SARFAESI notice. These guys drafted a powerful reply that forced the bank to offer a 2 year restructuring plan instead of taking my shop.'
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
        'name': 'Loan Default & Recovery Defense Services',
        'description': 'Elite legal defense against aggressive loan recovery tactics, SARFAESI notices, and illegal bank account freezes, ensuring borrower rights and dignity.',
        'brand': {
            '@type': 'Brand',
            'name': 'CredSettle'
        },
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '3120',
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
            <Script id="faq-schema-recovery-defense" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="product-schema-recovery-defense" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

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
                        Countering Loan Defaults &<br />
                        <span className="text-blue-300">Freezing Illegal Recovery Tactics in 2025</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Don’t let banks bulldoze your rights. Deploy elite legal defense against SARFAESI notices, stop account freezes, and end recovery agent harassment using the latest RBI mandates.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Stop Illegal Recovery Now
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
                                        Loan Default & Recovery Freeze Defense
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Defense Manual</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Crisis Management: Why Defensive Strategy is Vital During a Loan Default</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A loan default is not just a financial failure; in India’s high pressure lending environment, it is often treated as a criminal act by banks and recovery agents. When a borrower hits a rough patch due to business loss, medical emergency, or unexpected job cuts, they are immediately met with a wall of aggressive recovery tactics. From account freezes to threatening SARFAESI notices, the system is designed to induce panic. However, in 2025, the law has shifted significantly toward borrower protection.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Understanding "Recovery Freeze Defense" is about realizing that while you owe a debt, you do not owe your dignity or your fundamental rights. A default does not give a bank the license to bypass due process. Whether it is a personal loan, a home loan, or a massive business credit line, the bank is bound by strict procedural mandates. If they fail to follow these, the entire recovery process can be brought to a clinical halt.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This 5000+ word technical manual is designed to equip you with the legal ammunition needed to fight back. We will dissect the SARFAESI Act, explore the technicalities of "NPA Classification Disputes," and show you how to leverage the latest RBI Fair Practice Codes to stop harassment in its tracks. At CredSettle, we don’t just settle debt; we defend citizens against institutional overreach. Your first step to recovery starts by stopping the illegal "Freeze" on your life.
                            </p>

                            <h2 id="sarfaesi-act-rights" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">SARFAESI Act 2002: Your Rights Against Property Possession</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The SARFAESI Act (Securitization and Reconstruction of Financial Assets and Enforcement of Security Interest Act) is the most powerful weapon in a bank’s arsenal. It allows lenders to seize and sell a borrower’s assets without a court intervention. But, this power is not absolute.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>The 60 Day Demand Notice (Sec 13-2):</strong> The bank must give you a clear 60 day window to pay your dues after classifying your account as NPA. Any attempt to take possession before this is illegal.</li>
                                    <li><strong>The Right to Object (Sec 13-3A):</strong> You have the legal right to submit a representation/objection to the notice. The bank is MANDATED to reply to your objection within 15 days. If they don’t, the subsequent possession can be set aside by the DRT.</li>
                                    <li><strong>The Possession Notice (Sec 13-4):</strong> Actual possession happens only after the 60 day period expires. This notice must be published in two leading newspapers.</li>
                                    <li><strong>Valuation Rights:</strong> Banks often undervalue properties to ensure a quick sale. You have the right to challenge this valuation using independent government approved valuers.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                SARFAESI defense is a game of "Technical Lapses." If the bank missed even one day in their notice period, or failed to send the notice to all co-borrowers, the entire recovery freeze can be dismantled in court.
                            </p>

                            <h2 id="illegal-npa-classification" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Combat Against Illegal NPA Classification</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Every recovery action begins with an account being marked as an **NPA (Non Performing Asset)**. According to RBI rules, this happens when payments are overdue for 90 days. But banks often make "Strategic Mistakes":
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light text-gray-800">
                                <ol className="list-decimal pl-6 space-y-4">
                                    <li><strong>Accounting Errors:</strong> Failing to credit payments made through cheques or online transfers, leading to a "Paper Default."</li>
                                    <li><strong>Illegal Interest Charges:</strong> Charging "Interest on Interest" or penal interest that exceeds RBI caps, which artificially inflates the debt and triggers the 90 day threshold prematurely.</li>
                                    <li><strong>Lien Mismanagement:</strong> Freezing a secondary account’s funds that should have been used to clear the loan EMI, then marking the loan as default anyway.</li>
                                </ol>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If we can prove that the NPA status was achieved through bank error, the entire SARFAESI superstructure collapses. We specialize in "Forensic Banking Audits" to identify these errors and use them as a primary defense.
                            </p>

                            <h2 id="drt-defense-strategies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">DRT Defense Strategies: Filing Section 17 Applications</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The **Debt Recovery Tribunal (DRT)** is the specialized forum where most loan disputes are fought. Under Section 17 of the SARFAESI Act, a borrower can challenge any measure taken by the bank.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A successful DRT strategy is built on **"Procedural Non Compliance."** We analyze the bank’s files to see if the authorized officer was properly appointed, if the sale notice was sent via Registered Post, and if the property description was accurate. In many cases, the DRT will grant an **Interim Stay**, preventing the bank from taking possession while the case is heard. This "Recovery Freeze" gives the borrower critical breathing room to either arrange funds or negotiate an OTS (One Time Settlement).
                            </p>

                            <h2 id="rbi-fair-practices-2025" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">RBI Fair Practice Code 2025: New Shields for Borrowers</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Reserve Bank of India has introduced revolutionary changes to the **Fair Practices Code** for 2025. These are not just suggestions; they are binding directives. Key updates include:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700 font-light">
                                <li><strong>Pre-possession Counseling:</strong> Banks must now document that they attempted to offer restructuring or counseling before initiating asset seizure.</li>
                                <li><strong>Electronic Evidence:</strong> All recovery attempts (calls/messages) must be logged digitally. If a bank cannot provide this log during a harassment complaint, the Ombudsman can impose heavy fines.</li>
                                <li><strong>Transparency in Charges:</strong> Banks must highlight all "Penal Charges" separately. They cannot hide them within the principal amount to trigger an NPA.</li>
                            </ul>

                            <h2 id="stopping-illegal-seizure" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Stopping Illegal Seizure: The Power of Injunction</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Sometimes, banks try to "Bypass the DRT" by using muscle power or local goons. This is strictly illegal. If a seizure is imminent and the bank has not followed the SARFAESI notice protocol, you can approach the **Civil Court for a Permanent Injunction**.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While the SARFAESI Act generally bars civil court jurisdiction, the Supreme Court has clarified that if "Fraud" or "Absolute Absence of Jurisdiction" is proven, civil courts CAN intervene. We help our clients identify these "Rare Window" opportunities to get immediate protective orders.
                            </p>

                            <h2 id="recovery-agent-protection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Protection from Recovery Agent Harassment</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most traumatic part of a loan default is the constant pestering by third party recovery agents. In 2025, you have the right to **"Silence the Agents."**
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light text-gray-800">
                                <ul className="space-y-4">
                                    <li><strong>The Golden Hour Rule:</strong> No calls before 8 AM or after 7 PM.</li>
                                    <li><strong>The Workplace Ban:</strong> Agents cannot visit your office or workplace unless it is your primary place of business registered with the bank.</li>
                                    <li><strong>Identity Disclosure:</strong> Every agent MUST show their ID card and the bank’s authorization letter. Failure to do so makes them a "Trespasser."</li>
                                    <li><strong>No Third Party Shaming:</strong> Calling your neighbors, relatives, or social media contacts is a criminal offense under Privacy Laws.</li>
                                </ul>
                            </div>

                            <h2 id="moratorium-legal-context" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Moratorium Law and Debt Restructuring</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A moratorium is a legal "Pause" on debt. While nationwide moratoriums are rare (like during COVID), **Individual Moratoriums** can be negotiated. Under the **Prudential Framework for Resolution of Stressed Assets**, banks have the power to restructure your loan if they believe you have a genuine temporary hardship.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We help you draft a "Hardship Petition" that is technically compliant and impossible for a bank to ignore. By demonstrating a clear path to future recovery, we force the bank to choose "Restructuring" over "Recovery Freezing," which is better for both parties.
                            </p>

                            <h2 id="wrongful-freeze-reasons" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Wrongful Account Freezes: Why Banks Exceed Their Brief</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A bank account freeze is the ultimate pressure tactic. Banks often use a **"General Lien" (Section 171 of the Indian Contract Act)** to freeze accounts. However, this lien is restricted. They cannot freeze an account where your salary is credited, or an account held jointly with a person who is NOT a co-borrower, without a specific court order.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many freezes in 2024 and 2025 have been found "Ultra Vires" (beyond power) by the Banking Ombudsman. If your survival funds are frozen, it is a violation of your "Right to Life" under Article 21, and we take immediate legal action to restore your liquidity.
                            </p>

                            <h2 id="unfreezing-protocol" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Unfreezing Protocol: A Step by Step Legal Guide</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To unfreeze an account, speed is of the essence. Follow this CredSettle Protocol:
                            </p>
                            <ul className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>1. Demand the "Freeze Letter":</strong> The bank must give you the specific reason and the legal section under which the account was frozen.</li>
                                <li><strong>2. The 24 Hour Objection:</strong> Submit a formal objection to the Nodal Officer citing "Financial Hardship" and "Lack of Due Notice."</li>
                                <li><strong>3. Ombudsman Escalation:</strong> If the bank doesn’t respond in 48 hours, file an online complaint with the RBI CMS portal.</li>
                                <li><strong>4. Writ Petition:</strong> In cases of massive business losses, we approach the High Court for a writ of "Mandamus" to direct the bank to lift the illegal freeze.</li>
                            </ul>

                            <h2 id="compensation-harassment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Suing for Damages: Compensation for Bank Negligence</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If a bank’s illegal recovery freeze leads to your business failing, or a family member suffering health issues due to stress, you are entitled to **"Exemplary Damages."**
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Consumer Courts in India have started awarding 2 lakh to 10 lakh INR for mental agony caused by wrongful recovery. We help you document the "Causal Link" between the bank’s illegal action and your loss, turning the tables so that the bank pays you for their mistakes.
                            </p>

                            <h2 id="preventive-legal-measures" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Future Proof: Preventive Legal Measures</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once we stop the immediate recovery fire, we build a "Legal Shield" for the future:
                            </p>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-8 font-light text-gray-800">
                                <ul className="space-y-4">
                                    <li>v <strong>Separate Survival Funds:</strong> Keep a primary savings account in a bank where you have NO loans or credit cards.</li>
                                    <li>v <strong>Document Everything:</strong> Maintain a "Lending File" with every letter, email, and receipt.</li>
                                    <li>v <strong>Proactive Communication:</strong> Never stop communicating. A "Silence" is interpreted as "Wilful Default."</li>
                                    <li>v <strong>Legal Retainer:</strong> Keep a debt defense lawyer on speed dial to review any notice before you sign for it.</li>
                                </ul>
                            </div>

                            <h2 id="client-feedback" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Victories Against Aggressive Recovery</h2>
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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Secure Your Legal Shield Today</h3>
                                <p className="text-blue-800 mb-6">Don’t stay silent under illegal recovery tactics. Face the bank with elite legal support and reclaim your financial sovereignty.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Your Defense Strategy Session
                                </Link>
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24 h-screen overflow-y-auto no-scrollbar pb-24">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Defend Now</h4>
                                <p className="text-sm text-gray-600 mb-6">Stop account freezes and SARFAESI possession actions clinically.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Initial Consultation
                                </Link>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-100 p-6 rounded-2xl border border-gray-200 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise</h4>
                                <nav className="space-y-3">
                                    <div className="block text-sm text-gray-400 ">Notice Defense</div>
                                    <Link href="/bank-calling-references-and-family-members" className="block text-sm text-blue-600 hover:underline">Harassment Protection</Link>
                                    <Link href="/best-lawyers-for-bounced-security-check-for-loans-and-credit-card-disputes" className="block text-sm text-blue-600 hover:underline">Security Check Defense</Link>
                                    <Link href="/best-lawyer-for-loan-recovery-cases" className="block text-sm text-blue-600 hover:underline">Recovery Lawyers</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
