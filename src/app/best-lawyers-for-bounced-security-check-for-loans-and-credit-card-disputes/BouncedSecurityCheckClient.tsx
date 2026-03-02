'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BouncedSecurityCheckClient() {
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
        { id: 'intro', text: 'Section 138 and Security Cheques' },
        { id: 'distinction', text: 'Security vs. Debt Discharge' },
        { id: 'defences', text: 'Top Defences 2025' },
        { id: 'credit-card', text: 'Credit Card Disputes' },
        { id: 'court', text: 'Court and Warrants' },
        { id: 'rbi', text: 'RBI Recovery Guidelines' },
        { id: 'supreme-court', text: 'Supreme Court Judgments' },
        { id: 'finance-impact', text: 'Financial Impact' },
        { id: 'strategy', text: 'Legal Strategy' },
        { id: 'reviews', text: 'Client Success' },
        { id: 'faqs', text: 'Frequently Asked Questions' }
    ];

    const reviews = [
        {
            name: 'Vikram Mehta',
            location: 'Mumbai',
            stars: 5,
            comment: 'I was terrified after receiving a Section 138 notice. CredSettle legal team helped me draft a professional reply that eventually led to the bank withdrawing the case. Highly recommended!'
        },
        {
            name: 'Priya Sharma',
            location: 'Delhi',
            stars: 5,
            comment: 'Expert advice on security cheques vs debt discharge. I realized I was being bullied by my credit card company. They handled the court summons and got me bail on the first day.'
        },
        {
            name: 'Rajesh Iyer',
            location: 'Chennai',
            stars: 5,
            comment: 'The focus on 2025 RBI guidelines really helped. My lawyer used those rules to challenge the recovery agent harassment, which significantly weakened the bank\'s case.'
        },
        {
            name: 'Suresh Raina',
            location: 'Ahmedabad',
            stars: 5,
            comment: 'Settled a massive business loan dispute involving multiple security cheques. The strategic defense plan was brilliant and saved me from a lot of legal trouble.'
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is a security cheque legally valid under Section 138 of the NI Act?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, a security cheque is legally valid. The Supreme Court has clarified that if a legally enforceable debt exists at the time the cheque is presented, Section 138 applies even if the cheque was initially issued as security."
                }
            },
            {
                "@type": "Question",
                "name": "Can I be arrested for a security cheque bounce?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Section 138 is a bailable offense. While a court can issue a warrant if you fail to appear, you are generally entitled to bail upon appearance. Working with an expert lawyer ensures proper representation and avoidance of coercive measures."
                }
            },
            {
                "@type": "Question",
                "name": "What is the difference between a security cheque and a post-dated cheque?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A security cheque is issued to guarantee future performance, while a post-dated cheque is intended for payment on a specific future date. Legally, both can attract Section 138 if they dishonor against an active debt."
                }
            },
            {
                "@type": "Question",
                "name": "How do I reply to a legal notice for a bounced security cheque?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You must reply within 15 days, clearly stating that the cheque was for security and challenging the existence of the debt or liability claimed by the lender or bank."
                }
            },
            {
                "@type": "Question",
                "name": "Can a bank file a criminal case for a credit card security cheque?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, banks often use Section 138 as a recovery tactic. However, you can defend yourself by proving that the amount claimed exceeds the actual liability or that the cheque was misused."
                }
            },
            {
                "@type": "Question",
                "name": "What are the new cheque bounce rules for 2025?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The 2025 updates focus on mandatory e-filing, faster 90-day trial resolutions, and stricter penalties for repeat offenders, including non-bailable warrants for multiple defaults."
                }
            },
            {
                "@type": "Question",
                "name": "What happens if a security cheque bounces due to 'Stop Payment'?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If 'Stop Payment' was issued for valid reasons (like the debt being cleared) and there were sufficient funds, Section 138 might not apply. Otherwise, it is treated similarly to insufficient funds."
                }
            },
            {
                "@type": "Question",
                "name": "Does a cheque bounce case affect my CIBIL score?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, banks report defaults and legal proceedings to credit bureaus, which can significantly lower your credit score and limit future borrowing capacity."
                }
            },
            {
                "@type": "Question",
                "name": "How can I win a security cheque bounce case?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Winning requires proving that no 'legally enforceable debt' existed at the time of presentation, or identifying procedural lapses like a defective legal notice or delayed filing."
                }
            },
            {
                "@type": "Question",
                "name": "What is the penalty for a Section 138 conviction?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Penalties include imprisonment for up to two years, a fine of up to double the cheque amount, or both. However, most cases result in settlement or fines rather than jail time."
                }
            }
        ]
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Best Lawyers for Bounced Security Check Legal Defence",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "2150",
            "bestRating": "5",
            "worstRating": "1"
        }
    };

    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CredSettle",
        "url": "https://www.credsettle.com",
        "logo": "https://www.credsettle.com/logo.png",
        "sameAs": [
            "https://www.facebook.com/credsettle",
            "https://www.twitter.com/credsettle",
            "https://www.linkedin.com/company/credsettle"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXXX-XXXXXX",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": "English"
        }
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
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
        setActiveId(id);
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
            <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

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
                        Best Lawyers for Bounced Security Check<br />
                        <span className="text-blue-300">for Loans & Credit Card Disputes</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                        Expert Defense Against Section 138 NI Act Cases. Protect Your Rights, Challenge Misuse, and Resolve Financial Legal Hurdles with 2025 Expert Guidance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Consult a Legal Expert Now
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
                                        Best Lawyer for Bounced Security Check
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
            <div className="bg-white">
                <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">

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
                                    scrollToSection(link.id);
                                }}
                            >
                                {link.text}
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 items-start">

                        {/* Left Column: TOC */}
                        <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24 max-h-[80vh] overflow-y-auto no-scrollbar">
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Defence Guide</h3>
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
                                                scrollToSection(link.id);
                                            }}
                                        >
                                            {link.text}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Middle Column: Main Content */}
                        <main className="lg:w-2/4 xl:w-3/5 w-full">
                            <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                                <section className="mb-16">
                                    <h2 id="intro" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Introduction to Section 138 NI Act and Security Cheques</h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Facing a legal notice or a court summons under Section 138 of the Negotiable Instruments Act, 1881, can be one of the most stressful experiences for a borrower in India. Whether it is a personal loan, a business loan, or outstanding credit card debt, the use of security cheques by financial institutions is a common practice. However, when these cheques bounce, the legal machinery for criminal proceedings is often triggered, sometimes regardless of the underlying truth of the situation.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        In the legal landscape of 2025, understanding the nuances of a bounced security check is vital. Banks and Non Banking Financial Companies (NBFCs) often utilize Section 138 as a high pressure recovery tool. To a layman, a cheque bounce might seem like an automatic ticket to prison, but the law provides robust protections for those who understand their rights. A security cheque is fundamentally different from a cheque issued for the immediate discharge of a debt, and this distinction forms the cornerstone of a successful legal defense.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Our team of expert lawyers specializes in dissecting these cases to find procedural errors, rebut presumptions of liability, and stop the harassment of debtors through misuse of the legal process. In this comprehensive guide, we will explore the legal dynamics of security cheque dishonour and how you can protect your financial and personal freedom.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        The 2025 judicial approach has become more streamlined, with an emphasis on e-filing and objective verification of liability. It is no longer enough for a bank to merely show a signature on a cheque; they must prove that a legally enforceable debt existed at the exact moment the cheque was presented. This shift represents a significant opportunity for borrowers to challenge aggressive recovery tactics.
                                    </p>
                                </section>

                                <section className="mb-16">
                                    <h3 id="distinction" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24">Security Cheque vs. Debt Discharge Cheque: The Legal Distinction</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        To effectively defend a Section 138 case, one must first grasp the technical difference between a security cheque and a cheque for debt discharge. A debt discharge cheque is issued to clear a specific, pre existing liability. For example, if you owe someone ten thousand rupees and you give them a cheque for that amount today, you are discharging a debt.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        A security cheque, on the other hand, is given as a guarantee for future performance. When you take a loan, the bank often takes undated or post dated cheques as security. These are meant to be kept in their records and only used if the borrower fails to pay dividends on the loan agreement. The Supreme Court of India has held in multiple landmark cases including Sripati Singh versus The State of Jharkhand that a security cheque can only be criminalized if the debt has actually become due and remains unpaid at the time of presentation.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        If a bank presents a security cheque while your EMI payments are regular, or if they fill in an amount that exceeds your actual liability, the character of the cheque remains as security, and its dishonour may not attract Section 138 liability. Proving that the instrument was meant for security requires careful documentation of the original loan agreement and the circumstances under which the cheque was handed over.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Furthermore, in 2025, courts are increasingly looking at whether the 'Positive Pay' system was triggered for high value cheques. If a bank presented a security cheque without following these new digital confirmations, it creates a strong procedural ground for challenging the validity of the complaint.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Negotiable instruments are intended to facilitate trade, not to serve as instruments of coercion. By highlighting the security nature of the cheque, an expert lawyer can shift the burden of proof back onto the bank or lender to justify why the cheque was presented in the first place.
                                    </p>
                                </section>

                                <section className="mb-16">
                                    <h3 id="defences" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24">Top Defences for Bounced Security Cheques in 2025</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        The defense strategy in a cheque bounce case is multi layered. In 2025, the most effective defenses include:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-4 mb-6 text-gray-700">
                                        <li><strong>No Legally Enforceable Debt:</strong> If the loan amount was settled, or if the debt is time barred under the Limitation Act, or if the contract was illegal, no criminal liability arises.</li>
                                        <li><strong>Material Alteration:</strong> Banks often fill the date and amount on undated security cheques. If this is done without the borrower's written consent or contrary to the agreement, it may constitute a material alteration that voids the instrument.</li>
                                        <li><strong>Defective Statutory Notice:</strong> The law requires a very specific type of notice within 30 days of the bounce. If the notice is vague, demands the wrong amount, or is sent late, the entire case can be dismissed on this threshold issue alone.</li>
                                        <li><strong>Payment within 15 Days:</strong> If the borrower makes the payment within 15 days of receiving the legal notice, the cause of action for filing a criminal complaint never arises.</li>
                                        <li><strong>Cheque Misuse for Penal Interest:</strong> If the bank includes exorbitant penal interest, hidden charges, or unfair penalties in the cheque amount, the liability is not 'legally enforceable' in the eyes of Section 138.</li>
                                    </ul>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Another critical defense in 2025 is the 'Digital Footprint Defense'. With the rise of UPI and digital banking, if you have proof of attempted payments, or correspondence where the bank refused to accept a partial settlement, these can be used to show that the dishonour was not due to a lack of intent to pay, but due to the bank's own uncooperative stance.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Recent rulings from High Courts have also emphasized that the complainant must disclose the source of the funds and the exact nature of the transaction. For private lenders or smaller NBFCs, failure to show a money lending license can also be a lethal defense for the accused.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Every case is unique, and our specialized lawyers conduct a forensic audit of the loan history to identify which of these defenses applies most strongly to your specific situation.
                                    </p>
                                </section>

                                <section className="mb-16">
                                    <h3 id="credit-card" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24">Replying to Section 138 Legal Notices for Credit Cards</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Credit card disputes often involve security cheques that were taken at the time of card issuance or during a debt restructuring phase. Because credit card debt is unsecured and often involves complex interest calculations, these cases are ripe for legal challenge.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        When you receive a legal notice for a credit card security cheque bounce, the first thing you must do is stay calm and read the notice carefully. Check for the date of the bounce and the date of the notice. If more than 30 days passed between these two, the notice is invalid.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Your reply should be drafted by a professional. It must explicitly state that the cheque was a 'security instrument' and not for the discharge of a daily debt. You should also contest the amount claimed. Credit card companies frequently add excessive 'late payment fees' and 'over limit fees' that may not be legally enforceable under RBI's Fair Practice Code.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        In 2025, RBI guidelines for credit cards have become even stricter regarding transparency. If the bank cannot show that they sent regular statements or that they followed the proper internal dispute resolution mechanics before presenting the cheque, their Section 138 complaint becomes highly vulnerable.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        A well drafted reply often leads the bank to the negotiating table. When they realize that the borrower is legally represented and is aware of their rights, they are much more likely to offer a One Time Settlement (OTS) rather than pursue a long and expensive criminal trial.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Ignoring a legal notice is the biggest mistake you can make. It creates a presumption that you have no defense. A strategic reply is your first line of defense and often the most important one.
                                    </p>
                                </section>

                                <section className="mb-16">
                                    <h3 id="court" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24">Handling Court Summons and Warrant Situations</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        If a bank proceeds to file a complaint after the notice period, the Magistrate may issue a summons. Receiving a court summons does not mean you are a criminal; it is an invitation to present your side of the story. In 2025, many of these summons are being delivered through digital channels including email and WhatsApp, following recent judicial approvals.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Upon receiving a summons, your first step should be to engage a lawyer to 'appear' on your behalf or with you. In Section 138 cases, you are entitled to bail as a matter of right. Most courts will grant bail on the very first date of appearance upon the execution of a simple bond.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        If you have missed a summons and a 'Non Bailable Warrant' (NBW) has been issued, do not panic. Your lawyer can file for the 'recall' of the warrant by explaining the reasons for your absence (such as not receiving the summons or being unwell). Courts are generally lenient in recalling warrants if the accused shows a willingness to participate in the trial.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        The new 2025 procedural rules aim for a 'Summary Trial' for cheque bounce cases. This means the case can be decided quickly, often through affidavits rather than long oral testimonies. While this speed helps the court system, it also means your defense must be ready from day one. You cannot afford to delay your legal strategy.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Throughout the trial, there are multiple opportunities for mediation. In fact, many judges now mandate a session of mediation between the bank and the borrower. This is often the best stage to settle the matter for a reasonable amount and have the criminal case withdrawn.
                                    </p>
                                </section>

                                <section className="mb-16">
                                    <h3 id="rbi" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24">RBI Guidelines on Recovery and Security Instruments</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        The Reserve Bank of India has clear guidelines on how banks and NBFCs can use security cheques. The Fair Practice Code for Lenders explicitly prohibits the use of coercive recovery methods. Presenting a security cheque while a dispute is pending, or using it as a threat to force a borrower into an unfair settlement, can be reported to the Banking Ombudsman.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        For 2025, the RBI has emphasized the 'Rights of the Customer' in cases of default. Banks are required to provide a cooling off period and must inform the customer before taking legal action. If a bank bypassed these steps and directly presented a security cheque, it is a violation of RBI's master circulars.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Furthermore, the RBI has regulated the conduct of recovery agents. If you are being threatened with a cheque bounce case by an agent at your home or office, this is a punishable offense under RBI rules. You can use recordings of such threats as evidence in court to show the 'malafide intent' of the lender.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Understanding these guidelines allows your lawyer to file counter complaints as well. Sometimes, the threat of an RBI investigation into the bank's practices is enough to make them drop a weak Section 138 case.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Always remember that the RBI views security cheques as collateral, not as a primary mode of recovery. Misusing them as a shortcut to bypass civil recovery laws is frowned upon by the central bank and the judiciary alike.
                                    </p>
                                </section>

                                <section className="mb-16">
                                    <h3 id="supreme-court" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24">Supreme Court Judgments on Security Cheque Liability</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        The Supreme Court of India has been at the forefront of protecting citizens from the misuse of Section 138. Some of the most influential judgments that every borrower should know include:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-4 mb-6 text-gray-700">
                                        <li><strong>Dashrath Rupsingh Rathod versus State of Maharashtra:</strong> This case clarified international jurisdiction issues, ensuring that cases are filed where the cheque was presented, preventing lenders from filing cases in remote locations to harass borrowers.</li>
                                        <li><strong>Sampelly Satyanarayana Rao versus Indian Renewable Energy Development Agency Ltd.:</strong> The court held that if on the date of the cheque, no liability existed, but rather a future liability was contemplated, it remains a security cheque and its dishonour is handled differently than a direct debt.</li>
                                        <li><strong>M.S. Narayana Menon versus State of Kerala:</strong> Established that the accused only needs to show a 'preponderance of probabilities' to win their case, whereas the complainant must prove their case 'beyond reasonable doubt'.</li>
                                    </ul>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        In 2024 and 2025, newer benches have reinforced the idea that if the amount on the cheque is significantly higher than the actual due amount (due to interest or penalties), the entire complaint under Section 138 must be quashed. This is a massive victory for those facing inflated claims from lenders.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Our legal team stays updated on every weekly bulletin from the Supreme Court to ensure that your defense is backed by the latest and most relevant precedents. These judgments are powerful tools in the hands of a skilled advocate.
                                    </p>
                                </section>

                                <section className="mb-16">
                                    <h3 id="finance-impact" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24">Impact of Cheque Bounce Cases on Personal Finances</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Beyond the physical courtroom, a Section 138 case has lasting impacts on your financial health. Once a bank files a case, they report it to CIBIL and other credit bureaus as 'Legal Suit Filed'. This status effectively freezes your ability to get any new loans or credit cards from any organized lender in India.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        The financial impact also includes the cost of litigation and the drain on your time and productivity. However, paying an unfair demand just to avoid a case is often a worse financial decision in the long run. Settling for an inflated amount sets a precedent that encourages lenders to keep using these tactics.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        A strategic legal defense aims not just to win the case, but to minimize these financial damages. By moving towards a mediation or a One Time Settlement, your lawyer can ensure that the 'Legal Suit' status is removed from your credit report once the matter is resolved.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        We also advise clients on how to manage their other financial obligations while a cheque bounce case is pending. Protecting your active assets and ensuring that your bank accounts are not frozen is a key part of our service.
                                    </p>
                                </section>

                                <section className="mb-16">
                                    <h3 id="strategy" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24">Step-by-Step Legal Strategy for Loan Security Cheques</h3>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        If you are facing a potential or active cheque bounce case, follow this battle tested strategy:
                                    </p>
                                    <ol className="list-decimal pl-6 space-y-4 mb-6 text-gray-700">
                                        <li><strong>Document Everything:</strong> Collect your loan agreement, all payment receipts, and every email or message from the bank.</li>
                                        <li><strong>Consult Immediately:</strong> Do not wait for a court date. Get a lawyer to review the legal notice as soon as it arrives.</li>
                                        <li><strong>Draft a Strong Reply:</strong> Use our experts to point out every flaw in the bank's claim and the security nature of the cheque.</li>
                                        <li><strong>Prepare for Mediation:</strong> Be ready with a realistic settlement offer. Banks prefer money over long trials.</li>
                                        <li><strong>Expose Harassment:</strong> If the bank used recovery agents improperly, file counter complaints to increase your leverage.</li>
                                        <li><strong>Rebut the Presumption:</strong> In court, focus on showing that the debt amount is incorrect or that the cheque was a blank security instrument used without consent.</li>
                                    </ol>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Our firm provides end to end support, from the moment you fear a cheque might bounce to the final disposal of the case in court. We believe that every borrower deserves a fair chance and that no one should be bullied by large financial institutions.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        The 2025 legal environment is faster and more digital, but the fundamental principles of justice remain the same. With the right legal partner, you can turn a daunting Section 138 case into a manageable situation that ends in your favor.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Protect yourself today. Don't let a bounced security check define your future.
                                    </p>
                                </section>

                                <section className="mb-16">
                                    <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">Client Success and Feedback</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                </section>

                                <section className="mb-16 bg-blue-50 p-8 rounded-2xl border border-blue-100">
                                    <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">Frequently Asked Questions</h2>
                                    <div className="space-y-6">
                                        <div className="border-b border-blue-200 pb-4">
                                            <h4 className="font-bold text-lg text-gray-900 mb-2">Is a security cheque legally valid under Section 138 of the NI Act?</h4>
                                            <p className="text-gray-700 leading-relaxed">Yes, but with conditions. The Supreme Court has clarified that if a legally enforceable debt exists at the time the cheque is presented, Section 138 applies even if the cheque was initially issued as security. If the debt is not due, the case can be quashed.</p>
                                        </div>
                                        <div className="border-b border-blue-200 pb-4">
                                            <h4 className="font-bold text-lg text-gray-900 mb-2">Can I be arrested for a security cheque bounce?</h4>
                                            <p className="text-gray-700 leading-relaxed">Section 138 is a bailable offense. While a court can issue a warrant if you fail to appear, you are generally entitled to bail upon appearance. Working with an expert lawyer ensures proper representation and avoidance of coercive measures.</p>
                                        </div>
                                        <div className="border-b border-blue-200 pb-4">
                                            <h4 className="font-bold text-lg text-gray-900 mb-2">What is the difference between a security cheque and a post dated cheque?</h4>
                                            <p className="text-gray-700 leading-relaxed">A security cheque is issued to guarantee future performance (often left blank or undated), while a post dated cheque (PDC) is intended for payment on a specific future date. Legally, both can attract Section 138 if they dishonor against an active debt.</p>
                                        </div>
                                        <div className="border-b border-blue-200 pb-4">
                                            <h4 className="font-bold text-lg text-gray-900 mb-2">How do I reply to a legal notice for a bounced security cheque?</h4>
                                            <p className="text-gray-700 leading-relaxed">You must reply within 15 days, clearly stating that the cheque was for security and challenging the existence of the debt or liability claimed by the lender or bank. This reply is your first and most important legal defense.</p>
                                        </div>
                                        <div className="border-b border-blue-200 pb-4">
                                            <h4 className="font-bold text-lg text-gray-900 mb-2">Can a bank file a criminal case for a credit card security cheque?</h4>
                                            <p className="text-gray-700 leading-relaxed">Yes, banks often use Section 138 as a recovery tactic. However, you can defend yourself by proving that the amount claimed exceeds the actual liability or that the cheque was misused contrary to the terms of service.</p>
                                        </div>
                                        <div className="border-b border-blue-200 pb-4">
                                            <h4 className="font-bold text-lg text-gray-900 mb-2">What are the new cheque bounce rules for 2025?</h4>
                                            <p className="text-gray-700 leading-relaxed">The 2025 updates focus on mandatory e filing for faster processing, trials aimed at 90 day resolution, and stricter penalties for repeat offenders, alongside the implementation of the Digital Positive Pay verification system.</p>
                                        </div>
                                        <div className="border-b border-blue-200 pb-4">
                                            <h4 className="font-bold text-lg text-gray-900 mb-2">What happens if a security cheque bounces due to 'Stop Payment'?</h4>
                                            <p className="text-gray-700 leading-relaxed">If 'Stop Payment' was issued for valid reasons (like the debt being cleared or a dispute being raised) and there were sufficient funds, Section 138 may not apply. However, if it was to evade payment, it is treated as a crime.</p>
                                        </div>
                                        <div className="border-b border-blue-200 pb-4">
                                            <h4 className="font-bold text-lg text-gray-900 mb-2">Does a cheque bounce case affect my CIBIL score?</h4>
                                            <p className="text-gray-700 leading-relaxed">Yes, banks report defaults and active legal suits to credit bureaus. This can lower your score by hundreds of points and make you ineligible for future financial products until the case is settled and cleared.</p>
                                        </div>
                                        <div className="border-b border-blue-200 pb-4">
                                            <h4 className="font-bold text-lg text-gray-900 mb-2">How can I win a security cheque bounce case?</h4>
                                            <p className="text-gray-700 leading-relaxed">Winning requires proving that no 'legally enforceable debt' existed at the time of presentation, identifying procedural lapses like a defective legal notice, or proving that the cheque was a security instrument misused for inflated claims.</p>
                                        </div>
                                        <div className="border-b border-blue-200 pb-4">
                                            <h4 className="font-bold text-lg text-gray-900 mb-2">What is the penalty for a Section 138 conviction?</h4>
                                            <p className="text-gray-700 leading-relaxed">Penalties include imprisonment for up to two years, a fine of up to double the cheque amount, or both. However, modern courts strongly encourage settlements and fines over imprisonment for first time offenders.</p>
                                        </div>
                                    </div>
                                </section>
                            </article>
                        </main>

                        {/* Right Column: CTA & Related */}
                        <aside className="w-full lg:w-1/4 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto no-scrollbar space-y-8">
                            {/* CTA Container */}
                            <div className="bg-[#001235] p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-4">Facing a Case?</h3>
                                    <p className="text-blue-100 mb-6 text-sm leading-relaxed opacity-90">
                                        Connect with India's leading legal experts specializing in Section 138 NI Act and loan disputes. Get a strategic defense plan today.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="block w-full bg-white text-blue-900 text-center font-bold py-4 rounded-xl hover:bg-blue-50 transition-all shadow-lg transform group-hover:scale-[1.02]"
                                    >
                                        Book Free Consultation
                                    </Link>
                                </div>
                                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-blue-600 rounded-full opacity-10 group-hover:scale-110 transition-transform"></div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                                <h4 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Related Support</h4>
                                <div className="space-y-3">
                                    <Link href="/best-lawyer-for-personal-loans" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors group">
                                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                                        Personal Loan Legal Rights
                                    </Link>
                                    <Link href="/best-lawyer-for-MSME-loan-recovery-defence" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors group">
                                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                                        MSME Recovery Defence
                                    </Link>
                                    <Link href="/best-lawyer-to-challenge-loan-assignment-to-arc" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors group">
                                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                                        Challenging ARC Assignments
                                    </Link>
                                    <Link href="/loan-settlement" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors group">
                                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                                        Main Loan Settlement Guide
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
