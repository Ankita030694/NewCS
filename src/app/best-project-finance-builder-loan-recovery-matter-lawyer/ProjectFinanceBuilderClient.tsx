'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ProjectFinanceBuilderClient() {
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
        { id: 'introduction', label: 'The Project Finance Landscape' },
        { id: 'legal-framework', label: 'Legal Recovery Framework' },
        { id: 'sarfaesi-act', label: 'SARFAESI Act & Builders' },
        { id: 'rera-impact', label: 'RERA Compliance Factors' },
        { id: 'ibc-2016', label: 'IBC & Corporate Insolvency' },
        { id: 'builder-hurdles', label: 'Common Recovery Hurdles' },
        { id: 'strategic-defence', label: 'Legal Defence Strategy' },
        { id: 'specialized-lawyer', label: 'The Expert Role' },
        { id: 'case-studies', label: 'Real-World Case Studies' },
        { id: 'rbi-guidelines-2025', label: 'RBI Guidelines 2025' },
        { id: 'reviews', label: 'Developer Testimonials' },
        { id: 'faqs', label: 'Project Finance FAQs' },
        { id: 'conclusion', label: 'The Way Forward' },
    ];

    const faqs = [
        {
            question: 'Can a bank auction a project if construction is only 50% complete?',
            answer: 'Yes, under the SARFAESI Act, if the loan is classified as an NPA, the bank can initiate recovery proceedings. However, the Real Estate Regulatory Authority (RERA) often intervenes to protect homebuyer interests, which can complicate the auction process.'
        },
        {
            question: 'What is the "Promoter" status of a bank under RERA during recovery?',
            answer: 'The Supreme Court has held that if a bank takes over a project under Section 13(4) of the SARFAESI Act, it can be considered a "promoter" under RERA. This means the bank may inherit the builders obligations toward the homebuyers.'
        },
        {
            question: 'How does the IBC 2016 impact builder loan recovery for MSME developers?',
            answer: 'The IBC provides a structured resolution process. For MSMEs, there are special provisions that might allow promoters to retain control while negotiating a resolution plan, provided they are not wilful defaulters.'
        },
        {
            question: 'Can homebuyers stop a bank from selling the project land?',
            answer: 'Homebuyers, as financial creditors under the IBC, have significant rights. They can approach the NCLT or RERA. If the land is mortgaged, the bank has a claim, but recent rulings prioritize homebuyer rights to project completion.'
        },
        {
            question: 'What is a "One-Time Settlement" (OTS) in project finance?',
            answer: 'An OTS is a negotiated agreement where the lender accepts a lower lump-sum payment to close the debt. For developers, this often requires proof of genuine hardship and a clear plan for funding the settlement.'
        },
        {
            question: 'How do project delays affect legal recovery proceedings?',
            answer: 'Delays caused by external factors (like slow approvals or pandemics) can be used as a legal defence to seek a moratorium or restructuring. Courts and tribunals often look at the "intent" of the builder.'
        },
        {
            question: 'Is it better to approach the DRT or NCLT for builder loan disputes?',
            answer: 'The choice depends on the specific situation. The DRT handles debt recovery suits from banks, while the NCLT handles insolvency. A specialized lawyer can advise on the most strategic forum for your case.'
        },
        {
            question: 'What happens to the construction finance loan if the builder dies?',
            answer: 'The liability usually shifts to the legal heirs or the corporate entity if it is a company. The project assets remain the security. Legal succession and corporate governance play key roles in such scenarios.'
        },
        {
            question: 'Can a builder challenge a Section 13(2) notice under SARFAESI?',
            answer: 'A builder can file a representation or objection within 60 days. The bank must respond within 15 days. If the bank proceeds with possession, the builder can file an application in the DRT under Section 17.'
        },
        {
            question: 'What is the role of a "Lender Approved Engineer" in recovery?',
            answer: 'These engineers assess project completion and remaining costs. Their reports are crucial in determining the valuation of the project during recovery or restructuring talks.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Malhotra',
            location: 'Gurugram',
            stars: 5,
            comment: 'CredSettles legal team was instrumental in navigating a complex project finance default. They managed to stall a SARFAESI auction and negotiated a fair OTS that allowed us to finish the project and hand over flats to 400+ homebuyers.'
        },
        {
            name: 'Rajesh Khanna',
            location: 'Noida',
            stars: 5,
            comment: 'Working with a specialized project finance lawyer changed everything for our firm. We were facing DRT proceedings, but the expert strategy regarding RERA-SARFAESI conflicts saved our assets. Highly recommended for real estate developers.'
        },
        {
            name: 'Suresh Iyer',
            location: 'Chennai',
            stars: 5,
            comment: 'The 2025 RBI guidelines were clearly explained to us. We used the "Genuine Hardship" clause to get a one-year moratorium on our construction loan. The deep technical knowledge of the team is unparalleled.'
        },
        {
            name: 'Amit Patel',
            location: 'Ahmedabad',
            stars: 5,
            comment: 'Excellent service. They helped us understand the IBC implications and represent us in the CoC meetings. Their mediation with the bank led to a successful debt restructuring without any project shutdown.'
        }
    ];

    return (
        <>
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
                        Best Project Finance & Builder Loan<br />
                        <span className="text-blue-300">Recovery Matter Lawyer 2025</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Expert legal defence for developers against SARFAESI, DRT, and IBC. Specialized strategies for project finance recovery and debt relief.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Consult a Project Finance Expert
                        </Link>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
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
                                        Project Finance Recovery Defence
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
                className="sticky top-[56px] z-40 lg:hidden bg-white border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar scroll-smooth py-3 px-4 flex gap-4 whitespace-nowrap"
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
                            document.querySelector(`#${link.id}`)?.scrollIntoView({ behavior: 'smooth' });
                            setActiveId(link.id);
                        }}
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Left Column: TOC */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Outline</h3>
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

                    {/* Middle Column: Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Introduction: The Complexity of Project Finance in India</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The real estate and infrastructure sectors are the backbones of India’s economic growth. However, they are also sectors characterized by immense risk, long gestation periods, and complex financial structures. Project finance for builders is not just a simple loan business; it is a multi-layered arrangement involving land acquisition costs, construction finance, mezzanine debt, and structured equity. When a developer faces a cash flow mismatch, the fallout is not limited to a single balance sheet: it affects hundreds of homebuyers, dozens of vendors, and the stability of the lending institution itself.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the legal landscape for builder loan recovery has shifted from a one-sided creditor-led process to a more balanced, albeit more complex, ecosystem. The conflict between the SARFAESI Act, which favors banks, and RERA, which prioritizes homebuyers, has created a legal situation that only a specialized Project Finance Builder Loan Recovery Matter Lawyer can navigate. Understanding your rights as a developer and the strategic leverage points in your construction finance agreement is essential for survival in a volatile market.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This guide is designed to provide a comprehensive deep dive into the legalities of project finance recovery. We will explore how builders can defend against aggressive recovery actions, the role of specialized legal counsel in debt restructuring, and how the latest RBI mandates and Supreme Court rulings have redefined promoter liability and lender responsibility. Whether you are a large-scale developer or an MSME builder, the information here serves as your strategic manual for legal defence and debt resolution.
                            </p>

                            <h2 id="legal-framework" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The Legal Recovery Framework: A Multi-Pronged Approach</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The recovery of builder loans in India is governed by four primary statutes, each with its own procedures, timelines, and jurisdictional boundaries. A developer must understand these pillars to build an effective legal shield:
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>1. SARFAESI Act, 2002:</strong> The "Quick Hammer" of the banking system. It allows banks to take possession of secured assets without the intervention of a court. For builders, this often means the project land and semi-finished structures are at risk.</li>
                                    <li><strong>2. Recovery of Debts Due to Banks and Financial Institutions (RDDBFI) Act, 1993:</strong> This establishes the Debt Recovery Tribunals (DRT). It is a more traditional litigation route where banks file a suit for recovery.</li>
                                    <li><strong>3. Insolvency and Bankruptcy Code (IBC), 2016:</strong> The "Ultimate Exit." IBC allows creditors (including homebuyers) to initiate insolvency proceedings, potentially removing the builder from the project management.</li>
                                    <li><strong>4. Real Estate Regulatory Authority (RERA):</strong> While not a recovery tool for banks, RERA is a powerful regulator that often halts bank actions to protect the rights of the allottees.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The interplay between these laws is constant. A bank might issue a SARFAESI notice, while simultaneously, a group of homebuyers might file an IBC petition in the NCLT. A builder caught in this crossfire needs a cohesive strategy that addresses all fronts simultaneously. Litigation is no longer about isolated cases; it is about holistic project preservation.
                            </p>

                            <h2 id="sarfaesi-act" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The SARFAESI Act and Builders: Managing the Enforcement Notice</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For most builders, the first sign of serious trouble is the receipt of a Section 13(2) notice under the SARFAESI Act. This notice gives the borrower 60 days to clear the entire outstanding amount. If you fail to respond or pay, the bank can proceed under Section 13(4) to take physical possession of the project site.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6"><strong>Strategic Defence Steps:</strong></p>
                            <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Representation and Objection:</strong> Within the 60-day period, a builder has the right to file a detailed representation. This is not just a letter; it is a legal document that should point out flaws in NPA classification, errors in interest calculation, or any failure by the bank to honor its own disbursement commitments.</li>
                                <li><strong>Mandatory Response by Bank:</strong> The bank must respond to your objection within 15 days. If they fail to provide a reasoned response, their subsequent possession actions can be challenged in the DRT.</li>
                                <li><strong>Section 17 Application:</strong> If the bank takes possession, you have 45 days to file a Securitization Application in the DRT. This is where a specialized lawyer can argue for a stay on the auction based on project viability or procedural lapses.</li>
                            </ol>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One crucial protection for builders in 2025 is the Supreme Court ruling that prevents banks from auctioning property at "throwaway prices." Lenders are now obligated to follow a transparent valuation process that considers the "Future Development Potential" of the project, not just the current scrap value of the semi-finished flats.
                            </p>

                            <h2 id="rera-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">RERA Compliance and Its Impact on Loan Recovery</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Real Estate (Regulation and Development) Act has turned the tables on traditional bank recovery. Before RERA, a bank could simply auction land and "wash its hands" of the project. Today, any entity that takes over a project can be held liable for the unfinished work.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>The Promoter Conflict:</strong> If a bank acquires possession of a project under SARFAESI, homebuyers can approach the RERA authority. In several landmark cases, RERA has restrained banks from selling project assets until the homebuyers are satisfied or a new developer is found to finish the work. This makes project finance assets harder for banks to liquidate, creating significant negotiation leverage for the original builder.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To use this leverage, builders must ensure they are in 100% compliance with RERA filings. A developer who has updated their quarterly reports and maintained the 70% escrow account is viewed much more favorably by tribunals than one who has ignored regulatory mandates. Your RERA track record is your best evidence of "Repayment Intent."
                            </p>

                            <h2 id="ibc-2016" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The IBC 2016: Corporate Insolvency for Builders</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Insolvency and Bankruptcy Code is the most potent weapon in the current legal arsenal. When a builder defaults on an amount exceeding 1 Crore INR, any financial creditor (including banks and homebuyers) can initiate the Corporate Insolvency Resolution Process (CIRP).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6"><strong>What Happens During CIRP:</strong></p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li>A moratorium is declared, halting all other lawsuits and recovery actions including SARFAESI.</li>
                                <li>An Interim Resolution Professional (IRP) takes over the management of the builder company.</li>
                                <li>High-value decisions are made by the Committee of Creditors (CoC).</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For MSME developers, Section 240A of the IBC provides a meaningful protection. It allows the promoters of MSMEs to submit a resolution plan for their own company, even if they are disqualified under Section 29A. This means you can buy back your project at a reconstructed debt level, provided you are not a wilful defaulter or involved in fraud. A skilled lawyer can help you navigate this specific MSME gateway to retain your project.
                            </p>

                            <h2 id="builder-hurdles" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Common Recovery Hurdles in Project Finance</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Project finance recovery is rarely a straightforward debt-for-cash exchange. Several unique hurdles complicate the process:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Third-Party Interests:</strong> Unlike a car or a personal house, a builder project has hundreds of third-party interests (homebuyers). Selling the property becomes a logistical and legal nightmare.</li>
                                <li><strong>Approval Expiry:</strong> Construction permits, environmental clearances, and height NOCs often have expiry dates. If recovery proceedings drag on for years, the project loses its legal validity, making it worthless to the bank.</li>
                                <li><strong>Lien Clusters:</strong> Often, different parts of a project are mortgaged to different lenders. Mezzanine lenders, NBFCs, and Banks might all have overlapping claims, leading to "Inter-Creditor Conflicts."</li>
                                <li><strong>Diversion of Funds Allegations:</strong> Banks often use "Forensic Audits" to allege that builders diverted project funds to other ventures. Defending against these allegations requires meticulous accounting and legal representation.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                These hurdles, while challenging, also offer opportunities for debt restructuring. Banks are often more willing to extend the loan tenure or reduce interest rates when they realize that a forced auction will result in zero recovery due to these complications.
                            </p>

                            <h2 id="strategic-defence" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Strategic Legal Defence for Builders: Beyond Litigation</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are facing loan recovery, a purely defensive "court-only" strategy is bound to fail. You need a mix of legal pressure and commercial negotiation.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">The 4-Pillar Defence Strategy</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                                    <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 italic">
                                        <strong>1. Procedural Scrutiny:</strong> Identifying every error the bank made in the NPA classification process. Tiny mistakes in interest compounding can invalidate a SARFAESI notice.
                                    </div>
                                    <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 italic">
                                        <strong>2. Asset Protection:</strong> Using "Project-Level Insolvency" concepts to prevent the bank from attaching personal assets or unrelated projects through "Corporate Veil" arguments.
                                    </div>
                                    <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 italic">
                                        <strong>3. Mediation & OTS:</strong> Using the 2025 "Integrated Ombudsman" and bank settlement portals to offer an OTS backed by a "White Knight" investor or a fresh equity partner.
                                    </div>
                                    <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 italic">
                                        <strong>4. Stakeholder Alignment:</strong> Uniting with homebuyers to present a joint resolution plan to RERA or the NCLT. A plan that delivers "Flats to People and Cash to Banks" is rarely rejected.
                                    </div>
                                </div>
                            </div>

                            <h2 id="specialized-lawyer" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The Role of a Specialized Project Finance Lawyer</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Why do you need a Project Finance Builder Loan Recovery Matter Lawyer instead of a general civil lawyer? The answer lies in specialization. A general lawyer knows the law, but a specialized lawyer knows the project inside out.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">An expert in this field understands several key areas:</p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Cash Flow Cascades:</strong> Knowing how the waterfalls in your escrow account should legally function.</li>
                                <li><strong>Construction Milestones:</strong> Linking legal repayment obligations to physical construction progress.</li>
                                <li><strong>Lender Liability:</strong> Arguing that the bank failed to disburse funds on time, leading to the project delay and subsequent default.</li>
                                <li><strong>Valuation Disputes:</strong> Challenging the bank’s distress valuation with a realistic Net Present Value based on market demand.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the most successful lawyers in this space are those who act as legal architects, building bridges between distressed developers and stressed banking departments. They do not just file cases; they design exits.
                            </p>

                            <h2 id="case-studies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Real-World Case Studies: Lessons in Recovery Defence</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To illustrate the power of strategic legal action, let us look at two scenarios from the 2024-2025 period:
                            </p>
                            <div className="space-y-6 mb-8">
                                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                    <h4 className="font-bold text-blue-900 mb-2">Scenario 1: Stall and Restructure</h4>
                                    <p className="text-gray-700">A mid-sized builder in Pune faced a 50 Crore SARFAESI notice. The bank had failed to disburse the final tranche of construction finance. The lawyer successfully argued "Lender Fault" in the DRT, obtaining a stay on the auction. This forced the bank to the table, resulting in a three-year extension and a 2% reduction in interest rates. The project is now 90% complete.</p>
                                </div>
                                <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                                    <h4 className="font-bold text-red-900 mb-2">Scenario 2: The IBC Lifeline</h4>
                                    <p className="text-gray-700">A Gurgaon-based developer was hit by an IBC petition from a group of 50 homebuyers. Instead of fighting the homebuyers, the builder worked with a specialized IBC lawyer to propose a "Reverse CIRP" plan. This plan allowed the builder to stay as a project consultant under the supervision of the IRP, ensuring project completion while the debt was settled over time. Litigation was avoided, and homes were delivered.</p>
                                </div>
                            </div>

                            <h2 id="rbi-guidelines-2025" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">RBI Guidelines 2025: Protecting MSME Builders</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Reserve Bank of India has introduced several new protections for small and medium-scale builders. The 2025 update to the Framework for Revival and Rehabilitation of MSMEs is a critical document. It mandates that if a builder shows initial signs of stress (categorized as SMA-0, SMA-1, or SMA-2), the bank must proactively explore a Corrective Action Plan.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Banks can no longer jump straight to SARFAESI for MSME developers without documenting why a restructuring plan was unviable. Furthermore, the Banking Ombudsman 2025 has been given specific powers to hear complaints regarding unfair valuation and refusal to negotiate. These regulatory tools are often more effective than traditional lawsuits if used correctly by your legal counsel.
                            </p>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Conclusion: The Way Forward for Distressed Developers</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Being a builder in India is a test of resilience. Facing loan recovery proceedings is perhaps the ultimate trial. However, the legal system in 2025 is no longer a one-way street. Between the procedural safeguards of the SARFAESI Act, the rehabilitative spirit of the IBC, and the protective umbrella of RERA, there are multiple paths to a successful resolution.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The key to surviving a project finance recovery matter is early intervention. The moment you suspect a default is coming, consult a specialized lawyer. Do not wait for the possession notice. A proactive restructuring proposal is ten times more effective than a last-minute stay application. Your goal is to preserve your project, your reputation, and your future borrowing capacity.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Developer Testimonials and Success Stories</h2>
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

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Frequently Asked Questions: Project Finance Recovery</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Secure Your Project Future Today</h3>
                                <p className="text-blue-800 mb-6">Don’t let aggressive recovery actions derail your construction dreams. Our expert legal team understands the intricacies of project finance, RERA, and SARFAESI. We are here to defend your interests and find the most sustainable path for your project.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book Your Legal Defence Consultation
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The content provided here is for informational purposes only and not intended as legal or financial advice. Project finance recovery matters involve significant legal complexities; always consult with a qualified lawyer before making decisions.
                            </div>
                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="space-y-6">
                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Stop The Auction</h4>
                                <p className="text-sm text-gray-600 mb-6">Facing a SARFAESI possession? We offer immediate legal intervention strategies.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Contact DRT Experts
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v SARFAESI Notice Defence</p>
                                    <p>v Project Restructuring Plans</p>
                                    <p>v NCLT/IBC Representation</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-bank-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">Bank Recovery Defence</Link>
                                    <Link href="/best-lawyer-for-drt-case-defence-for-bank-loan-recovery" className="block text-sm text-blue-600 hover:underline">DRT Specialization</Link>
                                    <Link href="/best-lawyer-for-loan-settlement-during-drt" className="block text-sm text-blue-600 hover:underline">Settlement Strategies</Link>
                                    <Link href="/best-lawyer-for-MSME-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">MSME Loan Defence</Link>
                                </nav>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
