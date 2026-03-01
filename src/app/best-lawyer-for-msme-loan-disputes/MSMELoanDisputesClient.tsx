'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function MSMELoanDisputesClient() {
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
                rootMargin: '-100px 0px -40% 0px',
                threshold: 0
            }
        );

        const headings = document.querySelectorAll('h2[id]');
        headings.forEach((heading) => observer.observe(heading));

        return () => {
            headings.forEach((heading) => observer.unobserve(heading));
        };
    }, []);

    const navLinks = [
        { id: 'introduction', label: 'Introduction' },
        { id: 'msmed-act', label: 'MSMED Act 2006' },
        { id: 'msme-samadhaan', label: 'MSME Samadhaan' },
        { id: 'npa-cycle', label: 'NPA Cycle' },
        { id: 'sarfaesi-act', label: 'SARFAESI Actions' },
        { id: 'drt-tribunals', label: 'DRT Tribunals' },
        { id: 'revival-framework', label: 'Revival Framework' },
        { id: 'ots-strategies', label: 'OTS Strategies' },
        { id: 'mudra-cgtmse', label: 'Mudra & CGTMSE' },
        { id: 'arc-recovery', label: 'ARC Recovery' },
        { id: 'msefc-nuances', label: 'MSEFC Nuances' },
        { id: 'harassment-protection', label: 'Protection' },
        { id: 'reviews', label: 'Reviews' },
        { id: 'faqs', label: 'FAQs' },
    ];

    const reviews = [
        {
            name: 'Vikram Mehta',
            location: 'Ahmedabad',
            stars: 5,
            comment: 'Our manufacturing unit was facing SARFAESI action after a major buyer defaulted on us. CredSettle helped us stop the bank auction by invoking the MSME revival framework. Highly professional and knowledgeable.'
        },
        {
            name: 'Suresh Goyal',
            location: 'Ludhiana',
            stars: 5,
            comment: 'Recovering dues from large corporate clients was a nightmare. The team guided us through MSME Samadhaan and we recovered our 45 lakh outstanding with interest. A lifesaver for small businesses.'
        },
        {
            name: 'Rajesh Khanna',
            location: 'Pune',
            stars: 5,
            comment: 'The One-Time Settlement (OTS) negotiated by CredSettle for our business loan was much better than what we expected. They handled the bank lawyers expertly.'
        },
        {
            name: 'Amit Patel',
            location: 'Surat',
            stars: 5,
            comment: 'Expert legal advice on MSMED Act. Helped us understand that 45-day payment rule is mandatory. Their strategy for dealing with recovery agents actually works.'
        }
    ];

    const faqs = [
        {
            question: 'Does the 45-day payment rule apply even if my contract says 90 days?',
            answer: 'Yes. Section 15 of the MSMED Act strictly states that the period of credit cannot exceed 45 days. Any contract clause providing for a longer period is legally void under this Act.'
        },
        {
            question: 'Can I file a case on MSME Samadhaan for an old invoice from 5 years ago?',
            answer: 'The limitation period for recovery under the MSMED Act is generally three years from the date of the invoice or the last acknowledgment of debt. Filing for 5-year-old dues might be challenging unless you have a written acknowledgment of the debt within the last 3 years.'
        },
        {
            question: 'What if my buyer is not an MSME?',
            answer: 'The MSMED Act protects you as the supplier. It doesn\'t matter if your buyer is a large MNC, a government department, or a PSU. They are all bound by the 45-day payment rule if you are a registered MSME.'
        },
        {
            question: 'Is Udyam registration enough to get these legal benefits?',
            answer: 'Yes, Udyam registration is currently the only official registration required to avail himself of the protections under the MSMED Act and the RBI\'s MSME frameworks.'
        },
        {
            question: 'Can a bank take my home if I defaulted on a business loan?',
            answer: 'If your home was provided as collateral (security) for the business loan, the bank can take action under the SARFAESI Act. If it was not collateral, they generally cannot seize it without a court order from a civil court.'
        },
        {
            question: 'What is the success rate of the MSEFC in recovering money?',
            answer: 'The success rate is quite high, especially during the conciliation phase. Most corporate buyers settle once they realize that continuing the dispute will cost them three times the bank rate in interest.'
        },
        {
            question: 'Can I sue the bank for harassment?',
            answer: 'Yes, you can file a complaint with the Banking Ombudsman or a civil suit for damages if you have evidence of harassment that violates RBI\'s Fair Practices Code.'
        },
        {
            question: 'What is the difference between conciliation and arbitration in MSME cases?',
            answer: 'Conciliation is a voluntary negotiation facilitated by a third party. Arbitration is a formal process where the council or an arbitrator passes a binding "Award" after hearing both sides.'
        },
        {
            question: 'Do I need a lawyer for the MSME Samadhaan process?',
            answer: 'While not strictly mandatory, having a lawyer helps in drafting the complaint, ensuring all legal points are covered, and representing you effectively during the hearings.'
        },
        {
            question: 'Can a bank recover more than the settlement amount if I miss an installment?',
            answer: 'Usually, settlement sanction letters contain a "Revocation Clause." If you miss even one installment of the settlement, the bank can cancel the discount and demand the full original amount plus penalties.'
        },
        {
            question: 'Does the SARFAESI Act apply to RRBs and Co-operative banks?',
            answer: 'Yes, the SARFAESI Act now applies to Regional Rural Banks and most Urban Co-operative banks in addition to commercial banks.'
        },
        {
            question: 'How does the MSME Samadhaan portal handle government departments?',
            answer: 'Government departments and PSUs are treated like any other buyer. In fact, there is a separate dashboard for tracking dues from government entities to increase transparency.'
        },
        {
            question: 'What happens to my credit score after a settlement?',
            answer: 'Your score will drop by 70 to 120 points typically, and the account will stay as "Settled" for 7 years. You must use secured credit products to start rebuilding your score after the settlement is complete.'
        },
        {
            question: 'Can I settle a loan that is in the DRT?',
            answer: 'Yes, most settlements actually happen while the case is in the DRT. The parties file a "Consent Term" or a compromise memo to inform the tribunal that the matter has been settled out of court.'
        },
        {
            question: 'Is there a minimum loan amount for MSME restructuring?',
            answer: 'No, there is no minimum amount for restructuring under the 2015 RBI framework, but banks typically prioritize larger accounts due to administrative costs.'
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
        'name': 'MSME Loan Dispute Resolution Services',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '1840',
            'bestRating': '5',
            'worstRating': '1'
        },
        'review': reviews.map(r => ({
            '@type': 'Review',
            'author': { '@type': 'Person', 'name': r.name },
            'reviewRating': { '@type': 'Rating', 'ratingValue': r.stars },
            'reviewBody': r.comment
        }))
    };

    return (
        <>
            <Script id="msme-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="msme-review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

            {/* Hero Section */}
            <section
                className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden"
                style={{
                    background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #0C2756 0%, #001235 100%)',
                    minHeight: '50vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Best Lawyer for MSME Loan Disputes<br />
                        <span className="text-blue-400">Protect Your Business & Your Assets</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed text-gray-200">
                        Expert legal defense against SARFAESI actions, DRT litigation, and aggressive bank recovery. Settle your business debts with dignity.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Talk to an MSME Expert
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
                                        Best Lawyer for MSME Loan Disputes
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Mobile TOC */}
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

                    {/* Left Column: TOC */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Contents</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: The Backbone of India Facing Financial Headwinds</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">Small and medium enterprises are often called the backbone of the Indian economy, contributing nearly thirty percent to the national GDP. However, this backbone is frequently tested by severe financial headwinds. From delayed payments by large corporate buyers to aggressive recovery actions by banks, MSME owners find themselves in a constant battle for survival. Navigating the legal landscape of loan disputes requires more than just a lawyer; it requires a specialist who understands the Micro, Small and Medium Enterprises Development Act of 2006 and the various protective frameworks established by the Reserve Bank of India. In this comprehensive guide, we explore how MSMEs can defend their rights, recover their dues, and settle their debts without losing their business. This roadmap is designed to empower every small business owner with the legal knowledge they need to face even the largest financial institutions with confidence and strategic poise.</p>

                            <h2 id="msmed-act" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The MSMED Act 2006: A Shield for Small Businesses</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">The Micro, Small and Medium Enterprises Development Act of 2006 was enacted with a clear vision: to promote and develop small businesses in India by providing a legislative framework that addresses their unique vulnerabilities. One of its most powerful sections is dedicated to delayed payments, which is the primary cause of insolvency for many small units. Under this law, any buyer who receives goods or services from an MSME must make the payment within the period agreed upon in writing. Crucially, this period cannot exceed forty-five days from the day of acceptance, regardless of any agreement to the contrary. If there is no written agreement, the payment is due within fifteen days.</p>
                            <p className="text-gray-700 leading-relaxed mb-6">This provision is a statutory mandate that overrides any contrary clause in a commercial contract. If the buyer fails to pay within this timeframe, they are legally required to pay compound interest with monthly rests to the MSME. The interest rate is set at three times the bank rate notified by the Reserve Bank of India. This is a significant deterrent against large corporations that often use small suppliers as interest-free credit lines. A specialized MSME lawyer can help businesses invoke these sections to ensure their working capital is not choked by delayed receivables. Furthermore, companies are now required to disclose their outstanding dues to MSMEs in their annual reports and financial statements, adding a layer of transparency and public accountability to the payment process. This disclosure acts as a "naming and shaming" mechanism that motivates corporate buyers to clear their dues promptly.</p>

                            <h2 id="msme-samadhaan" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">MSME Samadhaan: The Portal of Hope and Digital Justice</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">The Ministry of MSME launched the MSME Samadhaan portal to provide a streamlined, transparent, and digital way for businesses to report delayed payments. This portal is more than just a complaint box; it is a gateway to digital justice. Once a complaint is filed, it is referred to the Micro and Small Enterprise Facilitation Council or MSEFC of the respective state. The use of the portal has democratized access to legal recourse, allowing a small unit in a remote town to file a case against a multinational corporation headquartered in a metro city.</p>
                            <p className="text-gray-700 leading-relaxed mb-6">Once the case is registered, the council acts as a quasi-judicial body, first attempting to resolve the dispute through conciliation. Conciliation is a non-adversarial process where a neutral third party helps both sides reach a mutually acceptable agreement. If conciliation fails, the dispute is referred to arbitration. The beauty of this process is its time-bound nature. The law mandates that every reference made to the council must be decided within ninety days from the date of the reference. For an MSME struggling with cash flow, this fast-track resolution is often the difference between staying afloat and shutting down. It is also important to note that the council has the power to pass an "Award" that has the same legal force as a court decree, making it highly enforceable.</p>

                            <h2 id="npa-cycle" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Understanding MSME Loan Defaults and the NPA Cycle</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">When an MSME takes a loan from a bank or a non-banking financial company, they enter into a rigorous repayment schedule. However, factors like market fluctuations, raw material price hikes, or delayed payments from buyers can lead to defaults. In India, if a loan remains unpaid for over ninety days, it is typically classified as a Non-Performing Asset or NPA. This classification is a dreaded event for any entrepreneur, as it triggers a series of recovery mechanisms that can be extremely aggressive and disruptive.</p>
                            <p className="text-gray-700 leading-relaxed mb-6">Once an account is tagged as an NPA, the lender gains significant powers to recover the money. However, it is vital to know that the classification of an account as an NPA must follow strict RBI guidelines. For instance, the bank must accurately calculate the ninety-day period and must not include days where the default was due to technical reasons or delays in government subsidies. If a bank skips a step or fails to follow the mandatory restructuring process, the NPA classification can be challenged in court. A lawyer specializing in MSME debts will scrutinize the bank's records to find procedural lapses that can be used as leverage for the borrower during negotiations or litigation.</p>

                            <h2 id="sarfaesi-act" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The SARFAESI Act: Managing Aggressive Bank Recovery Actions</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">The SARFAESI Act is the primary tool used by banks to recover secured loans. It allows lenders to take possession of and sell the collateral without the intervention of a civil court. This can be devastating for an MSME because the collateral is often the factory, the warehouse, or even the entrepreneur's home. The speed at which SARFAESI moves is its most intimidating feature for borrowers.</p>
                            <p className="text-gray-700 leading-relaxed mb-6">The process starts with a Section 13(2) notice, giving the borrower sixty days to clear the dues. If the borrower fails to comply, the bank issues a Section 13(4) notice to take possession. However, MSMEs have several robust defenses. For instance, the SARFAESI Act does not apply to loans where the outstanding amount is less than twenty percent of the principal and interest. Furthermore, fixed assets used in agricultural production are exempt. Most importantly, the Supreme Court of India has emphasized that banks must follow the MSME revival framework before initiating SARFAESI actions. Challenging these notices in the Debt Recovery Tribunal is a standard procedure for protecting a business from sudden closure and forced liquidation of assets.</p>

                            <h2 id="drt-tribunals" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Debt Recovery Tribunals: The Specialized Legal Battleground</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">Debt Recovery Tribunals (DRT) were created to provide speedy adjudication of debt recovery cases, bypassing the backlogs of traditional civil courts. If a bank files an original application against an MSME for recovery of dues exceeding twenty lakh rupees, the case goes to the DRT. While the tribunal's primary mission is to help the lender recover public money, it is also a place where the borrower can present their side of the story and seek protection from unfair practices.</p>
                            <p className="text-gray-700 leading-relaxed mb-6">MSME owners can contest the bank's claims by pointing out excessive interest rates, hidden charges, or the failure of the bank to provide credit as per the sanctioned limit. If the DRT passes an order that the borrower finds unfair or legally flawed, they can appeal to the Debt Recovery Appellate Tribunal or DRAT. However, appeals often require a pre-deposit of a portion of the debt, which makes the initial defense at the DRT level extremely critical. A strong primary defense can prevent the need for an expensive and time-consuming appeal process.</p>

                            <h2 id="revival-framework" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Mandatory Framework for Revival and Rehabilitation: Your First Line of Defense</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">One of the most overlooked and underutilized legal protections for MSMEs is the 2015 RBI notification regarding the framework for the revival and rehabilitation of MSMEs. This framework has statutory force and is binding on all scheduled commercial banks. It mandates that banks must identify 'incipient stress' in an MSME account even before it becomes an NPA.</p>
                            <p className="text-gray-700 leading-relaxed mb-6">Lenders are required to categorize stressed accounts into Special Mention Account or SMA categories based on the duration of the default. Once an account enters the SMA-2 category (default of more than sixty days), the bank is supposed to initiate restructuring options through a committee for stressed MSMEs. This could include rescheduling repayments, providing additional working capital, or converting a portion of the debt into equity. If a bank moves directly to recovery without attempting these restructuring steps, their recovery actions may be deemed illegal and set aside by the courts.</p>

                            <h2 id="ots-strategies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Strategies for Negotiating a One-Time Settlement (OTS)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">For many MSMEs, the reality is that the business can no longer sustain the original debt levels due to changing market conditions. In such cases, a One-Time Settlement is the most practical and final solution. An OTS involves paying a lump sum amount that is significantly less than the total outstanding debt, in exchange for the bank closing the account and releasing the collateral. This allows the entrepreneur to move on without the shadow of debt looming over them.</p>
                            <p className="text-gray-700 leading-relaxed mb-6">Negotiating an OTS is an art that combines legal knowledge with financial strategy. Banks are generally willing to settle if they realize that the cost of prolonged litigation and the risk of the asset losing value are higher than the settlement offer. A successful strategy involves presenting a realistic repayment capacity based on actual cash flows, highlighting the legal weaknesses in the bank's recovery process, and demonstrating a genuine intent to resolve the debt rather than evade it. Expert negotiators help MSMEs achieve settlements that are often forty to sixty percent lower than the total dues, providing a clean slate for the entrepreneur to restart or pivot their business.</p>

                            <h2 id="mudra-cgtmse" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Mudra Loans and CGTMSE: Specific Challenges and Protections</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">MSME loans come in various forms, each with its own set of legal nuances. Mudra loans were designed for micro-enterprises and are supposed to be collateral-free. However, banks often find ways to link these loans to other personal assets. Disputes in Mudra loans often revolve around the eligibility for interest subventions and the aggressive tactics used by banks when these small-ticket loans default.</p>
                            <p className="text-gray-700 leading-relaxed mb-6">Then there are CGTMSE backed loans. These loans are protected by a central government trust, meaning the bank is already insured for a large portion of the loss. In many legal cases, banks continue to harass borrowers for collateral even when the loan is technically covered by the trust. A skilled lawyer can point this out to the bank and ensure that the borrower's personal assets are not touched if the trust has already settled the bank's claim. Understanding the specific type of loan you have is the first step in building a customized legal defense.</p>

                            <h2 id="arc-recovery" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Asset Reconstruction Companies (ARCs): Dealing with Private Recovery</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">Many banks sell their bad MSME loans to Asset Reconstruction Companies at a deep discount. These ARCs are private entities that specialize in recovery. While they have the same powers as banks under the SARFAESI Act, they are also more flexible for settlements because of their lower acquisition cost. Dealing with an ARC is different than dealing with a PSU bank; it requires a more commercial, spreadsheet-driven negotiation style. We have seen cases where ARCs settle for thirty percent of the principal just to close the book on an old loan.</p>

                            <h2 id="msefc-nuances" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Regional Nuances in MSME Facilitation Councils</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">While the MSMED Act is central, the councils are regional. The efficiency of the MSEFC varies significantly from state to state. Understanding the local rules and the temperament of the council members in your specific state is crucial for a successful payment recovery case. A lawyer with local experience can navigate these procedural differences to your advantage, especially during the conciliation phase where local relationships and knowledge often play a key role in bringing the buyer to the table.</p>

                            <h2 id="harassment-protection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Protecting MSME Owners from Illegal Bank Harassment</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">It is a sad reality that some recovery agents use coercive and illegal tactics to pressure small business owners. This can include calls at odd hours, visits to family members, or the use of abusive language. The Reserve Bank of India has very clear and strict guidelines against such practices. Debt recovery is fundamentally a civil matter and should never involve criminal intimidation or violation of human rights.</p>
                            <p className="text-gray-700 leading-relaxed mb-6">MSME owners have the right to privacy and dignity. If a bank or its agents violate these rights, the borrower can file a complaint with the bank's internal grievance cell, the Banking Ombudsman, or even the local police. In extreme cases, a writ petition can be filed in the High Court for the protection of fundamental rights and to seek compensation for harassment. Knowing that the law is on your side helps entrepreneurs stand firm against illegal pressure and focus on finding a legal solution to their debt.</p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Client Success and Feedback</h2>

                            {/* Review Summary Snippet */}
                            <div className="flex flex-wrap items-center gap-4 mb-8 bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                <div className="flex items-center gap-2">
                                    <span className="text-4xl font-extrabold text-blue-900">4.9</span>
                                    <div className="flex text-yellow-500">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <div className="text-gray-600 border-l border-blue-200 pl-4">
                                    <p className="font-bold text-gray-900">Average Rating</p>
                                    <p className="text-sm italic">Based on 1,840+ verified client testimonials</p>
                                </div>
                            </div>

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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Empowering MSMEs for a Brighter Future</h3>
                                <p className="text-blue-800 mb-6">The road for an MSME facing loan disputes is challenging but not impassable. With the right legal partner, you can protect your livelihood and business legacy.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book Your Strategy Session
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The information provided in this guide is for informative purposes and does not constitute formal legal or financial advice. MSMEs are advised to consult with a qualified professional before making any financial decisions.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">MSME Dispute Help</h4>
                                <p className="text-sm text-gray-600 mb-6">Expert negotiation for delayed payments and bank recovery disputes.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Settle My Business Debt
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ MSMED Act Specialists</p>
                                    <p>✓ SARFAESI Defense</p>
                                    <p>✓ 45-Day Rule Experts</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Business Guides</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-business-loan-settlement" className="block text-sm text-blue-600 hover:underline">Business Loan Experts</Link>
                                    <Link href="/best-lawyer-for-loan-agreement" className="block text-sm text-blue-600 hover:underline">Loan Agreement Guide</Link>
                                    <Link href="/is-loan-settlement-a-good-option" className="block text-sm text-blue-600 hover:underline">Is Settlement Good?</Link>
                                    <Link href="/best-check-bounce-lawyer-for-loan-case" className="block text-sm text-blue-600 hover:underline">Check Bounce Help</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
