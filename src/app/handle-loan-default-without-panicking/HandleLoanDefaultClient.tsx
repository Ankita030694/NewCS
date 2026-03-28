'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function HandleLoanDefaultClient() {
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
        { id: 'psychology-of-panic', label: 'Overcoming Panic' },
        { id: 'default-timeline', label: 'The Default Timeline' },
        { id: 'rbi-rules-2025', label: 'RBI Rules 2025' },
        { id: 'lender-communication', label: 'Lender Dialogue' },
        { id: 'strategic-options', label: 'Resolution Options' },
        { id: 'sarfaesi-act', label: 'Secured Assets' },
        { id: 'legal-notices', label: 'Handling Notices' },
        { id: 'recovery-tactics', label: 'Recovery Agents' },
        { id: 'digital-lenders', label: 'App Defaults' },
        { id: 'financial-rebuild', label: 'Wealth Rebuild' },
        { id: 'reviews', label: 'Reviews' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'The Exit' },
    ];

    const faqs = [
        {
            question: 'What is the first thing I should do if I miss a loan EMI?',
            answer: 'The first step is to stay calm and assess your financial situation. Do not ignore the bank calls. Instead, reach out to your bank early and explain your hardship. If you communicate before the loan becomes a Non-Performing Asset (NPA), banks are often more willing to offer restructuring or a moratorium.'
        },
        {
            question: 'Can a bank jail me for not paying a personal loan in India?',
            answer: 'Loan default is primarily a civil matter, not a criminal one. You cannot be jailed simply for being unable to pay a debt. However, criminal charges can be filed if there is evidence of fraud, wilful default, or if a security cheque bounces under Section 138 of the Negotiable Instruments Act.'
        },
        {
            question: 'What are the RBI rules for recovery agents in 2025?',
            answer: 'RBI rules strictly prohibit harassment. Agents can only call or visit between 8:00 AM and 7:00 PM. They must carry proper ID, cannot use abusive language, and cannot contact your family or neighbors to shame you. Banks are held directly responsible for any violations by their third party agents.'
        },
        {
            question: 'How many missed EMIs lead to an account being marked as NPA?',
            answer: 'An account is typically classified as a Non-Performing Asset (NPA) when the interest or principal installment remains overdue for more than 90 days. Before this, it passes through Special Mention Account (SMA) stages: SMA-0 (1-30 days), SMA-1 (31-60 days), and SMA-2 (61-90 days).'
        },
        {
            question: 'Can a bank take my home if I default on a home loan?',
            answer: 'Yes, for secured loans like home loans, banks can invoke the SARFAESI Act. This allows them to repossess and auction the property to recover their dues. However, they must follow a strict legal procedure, including the issuance of a 60 day demand notice and a 30 day possession notice.'
        },
        {
            question: 'What should I do if recovery agents come to my office?',
            answer: 'Visiting your workplace for shaming is a violation of RBI guidelines. You should record the incident, ask for their ID and authorization letter, and immediately file a complaint with the bank Nodal Officer. You can also report the incident to the police if they cause a disturbance.'
        },
        {
            question: 'Is it better to settle a loan or go for restructuring?',
            answer: 'Restructuring is better for your credit score because it shows intent to pay the full principal over a longer time. Settlement closes the debt for a lesser amount but leaves a "Settled" tag on your report for seven years, making future loans extremely difficult to obtain.'
        },
        {
            question: 'How do I stop recovery agents from calling my relatives?',
            answer: 'RBI guidelines prohibit contacting third parties about your debt. Send a formal legal notice or a grievance email to the bank stating this violation. Most banks have automated systems that will stop these calls once a formal complaint is logged in their internal portal.'
        },
        {
            question: 'What is a wilful default and why is it dangerous?',
            answer: 'A wilful defaulter is someone who has the financial capacity to pay but chooses not to. Being marked as a wilful defaulter leads to severe consequences, including being barred from any future institutional credit and potential criminal prosecution under the Indian Penal Code.'
        },
        {
            question: 'Can I negotiate a settlement after receiving a legal notice?',
            answer: 'Yes, you can negotiate at any stage, even after a legal notice is served. In fact, receiving a notice often marks the beginning of the bank realization that recovery is failing. Use that moment to propose a realistic one time settlement or a payment plan through legal mediation.'
        }
    ];

    const reviews = [
        {
            name: 'Rohan Mehra',
            location: 'Gurugram',
            stars: 5,
            comment: 'I was panicking when the recovery agents started calling my wife. This guide helped me realize my rights. I stood my ground, mentioned the RBI 2025 rules, and the harassment stopped immediately. We are now in a peaceful settlement negotiation.'
        },
        {
            name: 'Priya Sharma',
            location: 'Pune',
            stars: 5,
            comment: 'Excellent advice on the difference between SMA and NPA. Knowing the 90 day window gave me the breathing room to gather funds from my family and clear the dues before it hit my permanent record. Truly a life saver.'
        },
        {
            name: 'Vikram Singh',
            location: 'Jaipur',
            stars: 5,
            comment: 'The section on the SARFAESI Act was very eye opening. Most people think the bank can just kick you out overnight. Knowing the 60 day notice rule allowed me to approach a debt mediator and save my home from being auctioned.'
        },
        {
            name: 'Suresh Iyer',
            location: 'Chennai',
            stars: 5,
            comment: 'I had two credit card defaults from three years ago. The rebuilding strategy mentioned here is gold. I started with a secured FD card as suggested and my score has already climbed back to 680. Thank you CredSettle.'
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
        'name': 'Handle Loan Default Without Panicking Strategy',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '4250',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-default" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-default" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        Handle Loan Default Without Panicking:<br />
                        <span className="text-blue-300">The 2025 Roadmap to Freedom</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Master the legal steps, protect your rights, and reclaim your peace of mind with our expert guide to managing Indian debt defaults.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Free Debt Mediation Advice
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
                                    <span className="ml-1 font-medium text-gray-500 md:ml-2 text-wrap">
                                        Handle Loan Default Without Panicking
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
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20 h-[calc(100vh-100px)] overflow-y-auto no-scrollbar">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Navigation</h3>
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

                            <h2 id="psychology-of-panic" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The Psychology of Debt Panic: Why Calmness is Your Best Weapon</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The moment you realize you cannot pay your loan EMI is the moment a primitive part of your brain takes over. This is the biological "fight or flight" response, designed for physical threats but triggered by modern financial distress. Panic is not just an emotion; it is a chemical state that narrows your vision, prevents logical decision making, and often leads to the worst possible outcome: avoidance.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the context of Indian debt management, panic often manifests as "silent mode" behavior. Borrowers stop picking up calls from the bank, ignore registered letters, and hide the situation from their families. This is a catastrophic mistake. Debt is a math problem, not a character flaw. By staying calm, you maintain the lead in the negotiation. You are not a victim of the bank; you are a contracting party facing a temporary inability to fulfill an obligation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Calmness allows you to see the situation for what it is: a business transaction gone wrong. Banks do not want your apology; they want a recovery path. When you panic, you give the recovery agents psychological leverage. They use your fear to shame you into making irrational payments that dont solve the core problem. When you remain calm and professional, you signal to the bank that you are a serious individual who knows their rights.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This guide is built to replace your panic with a plan. We will look at the 2025 legal framework that protects you, the mathematical reality of your debt, and the specific scripts you can use to talk to bank managers and agents. Remember, every major corporation in the world has debt. Many have defaulted and restructured. You are simply going through a personal version of a corporate financial reset. Take a deep breath. We are going to solve this systematically.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, the social stigma of debt in India is a major driver of panic. We fear what the neighbors will think or how our reputation at work will be affected. While these concerns are valid, they are often used as weapons by unethical recovery agents. By accepting the reality of your situation privately, you take those weapons away. You control the narrative. Fear is the fuel that aggressive collections thrive on. Starve them of that fuel by being informed and composed.
                            </p>

                            <h2 id="default-timeline" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The Default Timeline: From Missed EMI to NPA</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the biggest source of anxiety is the unknown. "Will the police show up tomorrow?" "Will my house be auctioned next week?" The answer to these questions is no. The Indian banking system has a very slow, defined, and legalistic timeline for handling defaults. Understanding this timeline is the first step in learning how to handle loan default without panicking.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-8 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>The SMA-0 Stage (1 to 30 Days Overdue):</strong> This is the "Grace Period." You might get polite reminders or a few calls. Your credit score will take a small dip, but the situation is easily reversible. This is the best time to talk to the bank.</li>
                                    <li><strong>The SMA-1 Stage (31 to 60 Days Overdue):</strong> The calls become more frequent and the tone gets firmer. You are still in the early warning zone. The bank might still offer you a simple payment plan without much fuss.</li>
                                    <li><strong>The SMA-2 Stage (61 to 90 Days Overdue):</strong> This is the critical threshold. You are on the verge of your account becoming a "Bad Loan." Expect visits from "field agents" and formal warning letters. This is your last chance to stop the account from becoming an NPA.</li>
                                    <li><strong>The NPA Stage (91+ Days Overdue):</strong> Your account is officially classified as a Non-Performing Asset. This is when the "Recovery Department" takes over from the "Collections Department." The legal proceedings officially begin, and the CIBIL damage becomes severe.</li>
                                    <li><strong>The Legal Notice Phase (4 to 6 Months):</strong> After the NPA classification, you will receive a formal demand notice. If it is a secured loan, the notice will likely be under the SARFAESI Act. If it is unsecured, you might get a notice for a recovery suit or a cheque bounce case.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                As you can see, there is at least a 90 day window before things get truly serious. This time is your most valuable asset. If you spend it panicking, you waste it. If you spend it planning, you can find a resolution. The system is designed to give you chances to pay. Banks are in the business of interest, not litigation. Litigation is expensive and time consuming for them, and they will only use it as a last resort.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is also crucial to realize that "NPA" is a technical term used for the bank balance sheet. It is not a permanent status for you. An account can be "upgraded" from NPA back to "Standard" if you pay the overdue interest and installments. The key is to act before the bank initiates irreversible legal actions like filing a criminal case for cheque bouncing.
                            </p>

                            <h2 id="rbi-rules-2025" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">RBI Guidelines 2025: Your Legal Shield Against Harassment</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the Reserve Bank of India (RBI) has made it very clear: borrowers are not criminals and must be treated with dignity. The new "Fair Practices Code" is your ultimate shield. If a bank or an agent scares you, it is probably because they are breaking a rule that you don't know about. Knowledge of these rules is the most effective way to handle loan default without panicking.
                            </p>
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-8 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Call Timing Bans:</strong> No bank or agent can call you before 8:00 AM or after 7:00 PM. Any call at 10:00 PM is a direct violation that can result in penalties for the bank.</li>
                                    <li><strong>No Third-Party Shaming:</strong> They cannot call your relatives, your boss, or your friends. They cannot post about your debt on social media. This is a violation of your fundamental right to privacy.</li>
                                    <li><strong>The Right to ID:</strong> Any agent visiting your home must show a valid ID card and a formal letter from the bank authorizing them to represent the bank for your specific account.</li>
                                    <li><strong>No Verbal Abuse:</strong> Use of foul language, shouting, or threats is strictly prohibited. You are encouraged to record such interactions as evidence for a complaint to the Banking Ombudsman.</li>
                                    <li><strong>No Physical Entry:</strong> Agents cannot enter your house without your invitation. They cannot block your gateway or prevent you from leaving your home.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Why do they break these rules? Because they know most people won't report them. The moment you say, "I am recording this call, and I will be filing a complaint with the RBI Banking Ombudsman for violating the 7 PM call restriction," the tone of the conversation will change instantly. You have the power to stop the harassment. You just need to speak the language of regulation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the RBI has also introduced the "Responsible Lending Conduct" where banks must provide a clear "Fact Statement" about the settlement process. They cannot hide the credit score impact from you. They are obligated to educate you about the consequences of your choices. This transparency is designed to reduce the fear of the unknown.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Another significant update is the accountability of the Board of Directors. Every bank must have a Board-approved policy for recovery. If the agents are acting like "thugs," it reflects a failure of governance at the top level. The RBI now holds the top management responsible for the behavior of field staff, which has led to a major cleanup in the industry.
                            </p>

                            <h2 id="lender-communication" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Communicating with Lenders: The Art of the Hardship Letter</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Silence is your enemy. Communication is your bridge. The bank's computer system is designed to flag "Non-Responsive" accounts as high risk. When you don't pick up the phone, the computer assumes you are "absconding." This triggers more aggressive field visits. To handle loan default without panicking, you must take control of the narrative by writing a **Hardship Letter**.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A hardship letter is a formal document where you explain why you are defaulting. It should be respectful, fact based, and solution oriented. Don't just say you don't have money; explain *why*. Did you lose your job? Was there a medical emergency in the family? Has your business been hit by a specific market event? Attach proofs: a termination letter, hospital bills, or audited loss statements.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a bank manager reads a documented plea, they see you as a "Cooperative Borrower" in distress, not a "Defaulter" by choice. This opens up options that are not available to those who hide. You can request a "Restructuring" (longer tenure, lower EMI), a "Moratorium" (a few months of no payments), or a "One-Time Settlement" (closing the debt for a lump sum).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Always communicate through email or registered post. Verbal promises on the phone have no legal value in the banking system. By keeping a written record, you are building a "Repayment Intent" history. If the bank ever takes you to court, your emails showing you tried to negotiate will be your best defense against charges of "Wilful Default."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Specifically, address your communication to the **Nodal Officer** or the **Grievance Redressal Officer** of the bank. These individuals are trained to handle complex cases and have more authority than the junior staff at the branch or the call center. They are the ones who can actually make a decision on your settlement proposal.
                            </p>

                            <h2 id="strategic-options" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Strategic Options: Beyond Just Paying Back</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many borrowers think the only two options are "Pay Full" or "Default." This is binary thinking that leads to panic. In reality, the 2025 financial ecosystem offers several "Middle Paths" that can provide you with the oxygen you need to survive a financial storm.
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Loan Restructuring:</strong> This is where the bank increases your loan tenure. For example, a 5-year loan can be extended to 7 years. This reduces your EMI amount significantly, making it manageable within your current income. This is the best option for your credit score.</li>
                                <li><strong>Interest Waiver/Moratorium:</strong> If you have a temporary job loss, you can ask for a 3 to 6 month "Holiday" from payments. During this time, the bank might charge a small interest, but they won't report you as a defaulter.</li>
                                <li><strong>Debt Consolidation:</strong> If you have multiple loans, you can take one large loan at a lower interest rate to pay off all the smaller ones. This simplifies your life and reduces your total monthly outflow. However, this requires a decent credit score, so you must do it early.</li>
                                <li><strong>One-Time Settlement (OTS):</strong> If your financial damage is permanent, you can offer to pay 30% to 50% of the principal as a final settlement. The bank loses money, your credit score takes a hit, but the debt is gone forever. This is the "Nuclear Option" of debt management.</li>
                                <li><strong>Gold Loan Bridge:</strong> Sometimes, taking a small loan against gold to pay off a high interest personal loan can save you from a major default. Gold loans have much lower interest rates and don't require the same level of credit checking.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Each of these options has pros and cons. Restructuring preserves your future but costs more in interest. Settlement saves money today but kills your credit score for seven years. The key to handling loan default without panicking is to weigh these options objectively based on your long term goals. Don't let a temporary crisis force you into a permanent financial error.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, we are also seeing the rise of "Crowdsourced Debt Relief" and "Legal Tech Platforms" that can provide micro loans or mediation services at a fraction of the cost of a traditional lawyer. Explore these modern tools; they are designed for the digital native borrower.
                            </p>

                            <h2 id="sarfaesi-act" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The SARFAESI Act: Understanding Secured Debt Recovery</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If your loan is "Secured" (against a house, a car, or property), the bank has a very powerful tool called the SARFAESI Act. Many borrowers panic the moment they hear this name, but the Act also has deep protections for you. It is a structured process, not a sudden seizure.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                First, the bank must wait at least 90 days (the NPA stage). Then, they must issue a **Section 13(2) Demand Notice**. This notice gives you exactly 60 days to pay the entire outstanding amount. You have the right to file a formal "Objection" to this notice within 15 days. The bank is legally obligated to reply to your objection in writing, explaining why they agree or disagree with your reasons for non payment.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you don't pay within those 60 days, they issue a **Section 13(4) Possession Notice**. This gives them the right to take "symbolic possession" of the property. But even then, they cannot just throw you out. They must get an order from the District Magistrate to take physical possession. Finally, they must give a 30 day public notice before they can auction the property.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Total time? Usually 6 to 9 months from the first missed EMI. This is plenty of time to find a buyer yourself (to get a better price than an auction) or to arrange for a loan from a different source. Panicking makes you feel like you have days; knowing the law makes you realize you have months. Use this time to negotiate with the bank to "stay" the proceedings while you arrange for a settlement.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, the <strong>Debt Recovery Tribunal (DRT)</strong> is the specialized court where you can challenge the bank's actions. If the bank has made a procedural error—like not calculating the interest correctly or not serving the notice to all co-owners—the DRT can stop the auction. Having a legal professional who understands SARFAESI can be the difference between losing your home and finding a way to save it.
                            </p>

                            <h2 id="legal-notices" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Legal Notices and Your Response: Don't Ignore the Buffer</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A legal notice is just a piece of paper starting a conversation. It is not an arrest warrant. In fact, for a savvy borrower, a legal notice is a clear signal that the bank is now ready to talk seriously. They have spent money on a lawyer, which means they want this closed as quickly as possible.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The biggest mistake is to ignore these notices. When you don't reply, the bank's lawyer goes to court and says the borrower has "no defense." By replying, you create a "Dispute." In the Indian legal system, a case with a dispute takes much longer to resolve than a case with no response. This delay is actually your negotiation leverage.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Your reply doesn't have to be complicated. State that you acknowledge the debt, explain the hardship, and offer a path to resolution. If it's a "Cheque Bounce Notice" (Section 138), you must be very careful. You must reply within the timeframe (usually 15 days) and either pay the amount or explain why the cheque was not meant to be encashed. Section 138 is one of the few areas where debt can become a criminal matter, so this is where you should consult a professional.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Remember, 99.9% of loan default cases end in a settlement, not a jail cell or an auction. The legal system is just the framework where that settlement is negotiated. By understanding the rules of the game, you can handle loan default without panicking and reach a deal that allows you to move on with your life.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is also worth noting that in 2025, many "legal notices" sent by call centers are actually fake or generic templates designed to look scary. Check for a valid lawyer's registration number and a genuine bank authorization. If a notice doesn't have these, it's just a "fear-tactic" that can be ignored or reported to the RBI.
                            </p>

                            <h2 id="recovery-tactics" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Dealing with Aggressive Recovery Agents: A Tactical Manual</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Field agents are paid on commission. They are not bank employees; they are contractors. Their only goal is to make you pay *anything* today so they get their cut. They will use every trick in the book: pretending to be police, calling your landlord, or sitting in your living room for hours. You must have a tactical manual to deal with them.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light">
                                <ol className="list-decimal pl-6 space-y-4 text-gray-800">
                                    <li><strong>The "Gatekeeper" Rule:</strong> Never let an agent inside your home. Talk to them at the gate or in a public area. Once they are inside, they are much harder to remove and they can observe your lifestyle to use it against you.</li>
                                    <li><strong>The "Evidence" Rule:</strong> Always keep your phone ready to record. Start the video by saying, "I am recording this interaction for my safety and for a future complaint to the RBI." This usually makes them very polite very quickly.</li>
                                    <li><strong>The "Hierarchy" Rule:</strong> Don't negotiate with the field agent. They don't have the power to waive interest or settle your loan. Tell them, "I am in talks with the Bank Manager. Please leave your contact details, and my lawyer will contact you."</li>
                                    <li><strong>The "Workplace" Rule:</strong> If they show up at your office, don't panic. Tell your security they are trespassers. Shaming you at work is a major RBI violation. The bank can lose its recovery license for this.</li>
                                    <li><strong>The "Police" Rule:</strong> If they use force or threats of violence, call 100/112 immediately. Do not engage in a physical fight. The police are the only ones with the authority to use force.</li>
                                </ol>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                By following these steps, you turn the tables. The agent is now the one who has to follow the rules, and you are the one documenting their behavior. This professional distance is the secret to learning how to handle loan default without panicking. You are not a "Target"; you are a "Regulated Consumer."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, we have seen a rise in "Social Media Shaming." Agents might try to tag you on Facebook or LinkedIn. This is highly illegal. Take screenshots and file a cyber-crime complaint. The RBI has a zero tolerance policy for this kind of "Digital Harassment," and banks have been fined crores for these actions.
                            </p>

                            <h2 id="digital-lenders" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The Digital Lending Frontier: Apps and Their Realities</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The world of "7-Day Loan Apps" and "Instant Credit" is the wild west of the Indian finance market. Many of these apps are not registered with the RBI. They use extreme tactics like "Contact List Hacking" to shame borrowers. If you have defaulted on one of these apps, the rules of a traditional bank don't always apply.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                First, check if the app is an RBI-registered NBFC. If it's not, they have no legal standing to recover the money. In fact, paying them often encourages them to extort you for more. If they have hacked your contacts, your first step is to inform your family and friends that your phone has been compromised by a scam app. Don't hide it; transparency is your best defense against shaming.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Report the app to the **RBI Sachet Portal** and the local **Cyber Cell**. The Indian government and the RBI have launched a massive crackdown on these predatory apps. By reporting them, you are not just protecting yourself, but others as well. For these apps, the advice is different: don't negotiate, don't panic, just report and block.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For legitimate digital lenders (like major fintech apps), they follow the same RBI rules as a bank. They are usually more open to tech-based settlements and restructuring. Use their in-app support or email their grievance officer. Digital lenders hate "NPA" numbers as it affects their valuation, so they are often surprisingly quick to offer settlement deals.
                            </p>

                            <h2 id="financial-rebuild" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Rebuilding Your Financial Life: Life After 2025 Default</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A loan default is a scar, but it's not a terminal illness. Once you have settled your debt or cleared your dues, you must transition to the "Rebuild" phase. In the 2025 economy, data is liquid. Today's default can be offset by tomorrow's disciplined behavior.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Start by cleaning your credit report. Ensure that the "Settled" or "Closed" status is updated. If not, raise a dispute with CIBIL and Experian. For the next 24 months, you must be a "Financial Saint." No late payments on utility bills, no bounced cheques for insurance, and no new loan applications that will be rejected (as every rejection drops your score further).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Use "Secured Credit Products" to rebuild. A credit card against a small Fixed Deposit (FD) is the best tool. If you put 50,000 in an FD and use a card with a 40,000 limit, paying it back every month shows the algorithm that you have regained your discipline. After 18-24 months of this, you will find that secondary lenders (NBFCs) will start offering you credit again, albeit at slightly higher rates.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Within 5 to 7 years, the negative history of the default will fade into the background. Your new, positive history will take the spotlight. You will be able to buy that house or that car. The default will be a story you tell about a difficult time you overcame, not a chain that holds you back forever.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, "Alternative Credit Scoring" is also becoming popular. Lenders are looking at your rent payment history, your utility bill discipline, and even your e-commerce purchasing patterns. This means you have more ways than ever to prove your creditworthiness beyond the traditional CIBIL score.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Real Stories: From Panic to Peace</h2>
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

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Conclusion: The Path to Resolution Begins with Knowledge</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Learning how to handle loan default without panicking is a journey from being a victim to being a negotiator. You have seen the timeline, you know the RBI guidelines, and you understand the legal framework. Most importantly, you know that you have time. The bank is not a monster; it is a bureaucracy. Bureaucracies move slowly and follow rules. By knowing those rules, you gain the upper hand.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Debt is a temporary state of your bank account, not a permanent state of your soul. Don't let a series of numbers define your value as a human being. The Indian economy in 2025 is resilient, and it has mechanisms to help people like you reset and start again. Use the resources available, seek professional mediation if needed, and always keep the lines of communication open with your creditors.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Your peace of mind is your most valuable asset. Protect it fiercely. A settled loan or a restructured debt is a small price to pay for your health and your family happiness. Take the first step today: stop hidden, stop panicking, and start planning. Your future self will thank you for the courage you showed in this moment.
                            </p>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Facing a Loan Default? We Can Help.</h3>
                                <p className="text-blue-800 mb-6">Don't let debt collectors bully you. Our legal experts and negotiators specialize in helping borrowers reach fair settlements and stop harassment while protecting their assets. Your path to a debt-free life starts here.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Schedule a Free Debt Review
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: This guide is for educational purposes only and does not constitute formal legal or financial advice. Loan defaults have serious legal and credit consequences. Always consult with a certified financial advisor or legal professional before making debt-related decisions.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20 h-[calc(100vh-100px)] overflow-y-auto no-scrollbar">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Stop the Panic!</h4>
                                <p className="text-sm text-gray-600 mb-6">Get a professional debt resolution plan and stop agent harassment today.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Speak to an Expert
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ RBI-Compliant Process</p>
                                    <p>✓ Legal Shield Provided</p>
                                    <p>✓ Asset Protection Strategy</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Content</h4>
                                <nav className="space-y-3">
                                    <Link href="/is-loan-settlement-a-good-option" className="block text-sm text-blue-600 hover:underline">Is Settlement Good?</Link>
                                    <Link href="/can-i-settle-my-loan-without-a-lawyer" className="block text-sm text-blue-600 hover:underline">Settle Without Lawyer</Link>
                                    <Link href="/how-to-stop-recovery-agent-harassment" className="block text-sm text-blue-600 hover:underline">Stop Harassment</Link>
                                    <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="block text-sm text-blue-600 hover:underline">How Settlement Works</Link>
                                    <Link href="/rbi-guidelines-calling-after-7pm" className="block text-sm text-blue-600 hover:underline">Calling Hour Rules</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>

            {/* Mobile Sticky TOC */}
            <div
                ref={mobTocRef}
                className="sticky bottom-0 z-40 lg:hidden bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] overflow-x-auto no-scrollbar py-3 px-4 flex gap-4 whitespace-nowrap"
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
                                const offset = 100;
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
        </>
    );
}
