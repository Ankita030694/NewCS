'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function LawyerClient() {
    const [activeId, setActiveId] = useState<string>('');
    const [isMobile, setIsMobile] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
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

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const navLinks = [
        { id: 'introduction', label: 'Introduction' },
        { id: 'section-138-defense', label: 'Section 138 Defense' },
        { id: 'civil-recovery-notices', label: 'Civil Recovery Notices' },
        { id: 'why-agencies-fail', label: 'Why Agencies Fail' },
        { id: 'advocate-advantage', label: 'The Advocate Advantage' },
        { id: 'case-study-one', label: 'Case Study 1: The Panic' },
        { id: 'case-study-two', label: 'Case Study 2: The Block' },
        { id: 'watertight-settlements', label: 'Watertight Settlements' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' }
    ];

    const faqs = [
        {
            question: "How can a personal loan settlement lawyer near me stop bank harassment?",
            answer: "A dedicated counsel for bank loan default knows exactly how to invoke your legal rights. Banks often rely on threaten tactics because clients do not know the law. Once your counsel sends a formal legal response stating they represent you. Banks are by law obligated to communicate straight with your legal counsel. This effectively creates an fast barrier between you and the agents. Stopping the threats."
        },
        {
            question: "What happens if I ignore a Section 138 cheque bounce notice from my bank?",
            answer: "Ignoring a Section 138 notice is highly dangerous. A cheque bounce is considered a crime under the Negotiable Instruments Act. If you do not reply to the legal notice within the legal 15 days. The bank can proceed to file a penal complaint against you. Finding the right legal help for loan closure ensures that a proper reply is drafted. Countering their claims and preventing sudden arrest warrants."
        },
        {
            question: "Can an advocate for bank loan default actually reduce my principal amount?",
            answer: "Yes. An experienced counsel can settle significant waivers. Banks are firms. They understand that prolonged litigation in civil courts or the Debt claims court is expensive and time consuming. When they see a strong legal defense presented by an counsel. They realize that fighting you in court will be costly. This leverage often forces them to the closure table. Allowing your counsel to settle major reductions on both the main sum and the accumulated rates."
        },
        {
            question: "Why should I choose a lawyer over a standard debt settlement agency?",
            answer: "Standard debt firms often use a generic script. They excel at basic talks but panic the moment the bank escalates the matter by law. They cannot represent you in a court of law. A specialized counsel understands the procedural complexities. If the bank files a civil suit or a penal complaint. Your counsel can fast step into the courtroom to defend you. Something an ordinary firm cannot do."
        },
        {
            question: "Is it mandatory to hire a personal loan settlement lawyer near me, or can I hire one from another city?",
            answer: "While having a local counsel offers the convenience of in person meetings. It is not strictly mandatory for the talks phase. Most legal notices and closure talks happen via formal correspondence. Emails. phone calls. yet. If the matter goes to your local district court. Having an counsel who understands the local jurisdiction provides a massive strategic advantage."
        },
        {
            question: "How long does the legal process take to settle a defaulted personal loan?",
            answer: "The timeline varies significantly based on the bank's aggression and your money hardship. Once you secure legal help for loan closure. The fast threats usually stops within a few weeks. The actual talks phase can take anywhere from three to six months. An counsel ensures that the process moves at a pace that benefits you. Preventing the bank from rushing you into a disadvantageous deal."
        },
        {
            question: "What is a civil recovery notice, and how does a lawyer handle it?",
            answer: "A civil claims notice is a formal demand from the bank threatening to file a civil suit for the claims of money. A counsel handles this by examining the loan pacts for any procedural lapses or unfair clauses. They then draft a strong reply challenging the bank's claims. which often stalls the civil suit and pushes the bank towards an out of court closure."
        },
        {
            question: "Will settling my personal loan through a lawyer affect my CIBIL score?",
            answer: "Yes. Any loan closure will negatively impact your CIBIL score because the loan is marked as 'Settled' rather than 'Closed'. Yet. Your counsel can settle the exact terms of the closure. In some cases. They can settle a 'no dues' letter that minimizes long term damage. they will advise you on the legal steps to begin repairing your credit score after the closure."
        },
        {
            question: "Can the bank freeze my savings account if I default on a personal loan?",
            answer: "Banks can sometimes attempt to exercise a 'banker's lien' or seek a court order to freeze your accounts. A specialized counsel for bank loan default will proactively monitor these threats. If a bank illegally freezes an account without a proper court order. Your counsel can fast approach the courts to get the freeze lifted. Protecting your livelihood."
        },
        {
            question: "What exactly makes a settlement letter legally watertight?",
            answer: "A watertight closure note explicitly states that the payment is in 'full and final closure' of all dues. Preventing the bank from claiming residual rates later. It must also include clauses demanding the withdrawal of any pending civil or penal cases and the return of all original papers and security cheques. A counsel ensures these clauses are ironclad before you make any payment."
        }
    ];

    const reviews = [
        { name: "Anand Sharma", location: "Bengaluru", stars: 5, comment: "I received a terrifying cheque bounce notice and the standard firms just told me to wait. Finding a own loan closure counsel near me through CredSettle changed everything. My counsel drafted a powerful reply and the bank backed down instantly." },
        { name: "Priya Menon", location: "Kochi", stars: 5, comment: "The civil claims notices were endless. My legal team took over all contact. Having proper legal help for loan closure gave me the peace of mind to focus on my family while they handled the complex talks." },
        { name: "Rajiv Desai", location: "Ahmedabad", stars: 5, comment: "I cannot stress enough how important it is to have an actual counsel for bank loan default. They reviewed my closure note and found a loophole the bank tried to sneak in. They forced the bank to revise it. Securing a truly watertight closure." }
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
        'name': 'CredSettle Legal Settlement Advocate Services',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '1120',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-lawyer" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-lawyer" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-300 text-sm font-semibold mb-8 backdrop-blur-md border border-red-500/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        Legal Notice Defense Active
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Counter Bank Threats With A <br />
                        <span className="text-blue-300">Personal Loan Settlement Lawyer</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-normal"> When the bank sends a Section 138 cheque bounce or civil claims notice. Standard firms panic. You need an actual counsel for bank loan default to neutralize legal threats and settle a watertight closure. </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Expert Legal Help Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Section */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1440px] mx-auto px-4 py-4 font-sans">
                    <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center"> <Link href="/" className="inline-flex items-center hover:text-blue-600"> Home </Link> </li>
                            <li> <div className="flex items-center"> <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /> </svg> <span className="ml-1 font-medium text-gray-500 md:ml-2"> own Loan closure counsel </span> </div> </li>
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
                        className={`text-sm font-bold px-4 py-2 rounded-lg transition-all flex-shrink-0 ${activeId === link.id
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
                            <p className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Legal Defense Guide</p>
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
                            </nav>
                        </div>
                    </aside>

                    {/* Middle Column: Main Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Reality of Defaulting on a Personal Loan</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Defaulting on a own loan in India triggers a systematic. Highly harsh claims process. money institutions do not simply wait for you to gather the funds. They employ vast networks of agents. Specialized legal departments. a barrage of threaten tactics to force fast payment. The first phase usually involves incessant phone calls. Threatening messages. visits to your home or workplace. Yet. The case becomes critically dangerous when the bank transitions from informal threats to formal legal action. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> This transition is marked by the arrival of legal notices. Many clients mistakenly believe that ignoring these notices will make the problem go away. Others panic and turn to generic debt relief companies that promise the moon but lack the legal standing to protect them in a court of law. When a bank sends a Section 138 cheque bounce notice or a civil claims suit. Standard firms crumble under the pressure. You specifically need legal representation to counter bank counsel. Finding a own loan closure counsel near me is no longer a luxury. it becomes a fundamental requirement for your money and own survival. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> This thorough guide will dissect the exact legal threats banks use. Explain why ordinary firms fail when faced with real legal challenges. Demonstrate how an counsel for bank loan default provides a massive. Decisive advantage in securing a by law watertight closure. We will explore the workings of Section 138 notices. Civil claims actions. present real case studies showing how legal expertise turns the tide in favor of the clients. </p>

                            <h2 id="section-138-defense" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">The Threat of Section 138: Cheque Bounce Notices</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> One of the most terrifying weapons in a bank's arsenal is the Section 138 notice under the Negotiable Instruments Act. When you applied for your own loan. The bank likely took undated security cheques from you. If you default. The bank will present one of these cheques. Predictably. The cheque will bounce due to insufficient funds. The bank then issues a legal legal notice giving you 15 days to pay the entire amount mentioned on the cheque. </p>
                            
                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-2xl"></div>
                                <p className="text-xl font-bold text-red-900 mb-4 flex items-center"> <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path> </svg> The penal Implication </p>
                                <p className="text-red-800 font-normal m-0 text-sm"> Unlike a civil dispute. A cheque bounce is a crime in India. If you fail to respond appropriately within the 15 day window. The bank can file a penal complaint. This can lead to court summons and. If ignored. Non bailable warrants for your arrest. This is not a case where you can afford amateur advice. </p>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6"> A specialized counsel for bank loan default understands exactly how to dismantle a Section 138 notice. They will fast draft a robust legal reply. This reply often challenges the validity of the cheque presentation. Questioning whether the amount filled by the bank represents a by law enforceable debt at the time of presentation. Rather than just a security mechanism. By drafting a highly technical. By law sound response. Your counsel forces the bank to reconsider filing the penal complaint. Pushing them instead toward the talks table. </p>

                            <h2 id="civil-recovery-notices" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Deciphering Civil Recovery Notices</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> If the cheque bounce route is not viable. Sometimes in tandem with it. Banks will issue civil claims notices. These notices threaten to file a civil suit in the district courts or approach the Debt claims court (if the amount crosses exact thresholds). The language used in these notices is designed to threaten. Filled with legal jargon threatening the attachment of your salary. Freezing of your bank accounts. seizure of your assets. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Without legal help for loan closure. A clients might assume that the bank already has the power to seize their assets fast. A counsel knows that a notice is merely a threat of future action. The bank must actually file the suit. Prove their case. obtain a decree from the judge before they can touch your assets. This process takes years. Your counsel will counter these civil notices by demanding strict proof of the debt. Challenging exorbitant rates rate calculations. highlighting any unfair trade practices or threats you have faced from agents. </p>

                            <h2 id="why-agencies-fail" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Why Standard Settlement Agencies Fail Under Pressure</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The market is flooded with debt closure companies. Many of these operate purely as glorified call centers. They follow a simple script: call the bank. Plead money hardship on your behalf. ask for a discount. This approach works when the bank is casually attempting to recover a small. Clean debt. Yet. Standard firms fully fall apart when the bank decides to flex its legal muscles. </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-red-200 transition-colors">
                                    <span className="text-red-600 font-bold mb-2 block text-xs uppercase tracking-wider">Limitation 1</span>
                                    <p className="font-bold text-gray-900 mb-2 mt-0">No Courtroom Authority</p>
                                    <p className="text-sm text-gray-600 m-0">Standard firms cannot represent you in court. If a civil suit is filed. They cannot file a vakalatnama (power of lawyer) to stand before the judge and defend you.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-red-200 transition-colors">
                                    <span className="text-red-600 font-bold mb-2 block text-xs uppercase tracking-wider">Limitation 2</span>
                                    <p className="font-bold text-gray-900 mb-2 mt-0">Inability to Reply to Legal Notices</p>
                                    <p className="text-sm text-gray-600 m-0">Drafting a response to a legal notice requires a deep grasp of legal law. firms lack the qualified staff to draft replies that will hold up under judicial scrutiny.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-red-200 transition-colors">
                                    <span className="text-red-600 font-bold mb-2 block text-xs uppercase tracking-wider">Limitation 3</span>
                                    <p className="font-bold text-gray-900 mb-2 mt-0">Panic and Abandonment</p>
                                    <p className="text-sm text-gray-600 m-0">When penal threats like Section 138 emerge. Many unlicensed firms simply stop answering the clients's calls. Leaving them defenseless.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-red-200 transition-colors">
                                    <span className="text-red-600 font-bold mb-2 block text-xs uppercase tracking-wider">Limitation 4</span>
                                    <p className="font-bold text-gray-900 mb-2 mt-0">Poor papers Scrutiny</p>
                                    <p className="text-sm text-gray-600 m-0">Firms often miss key loopholes in closure letters. Allowing banks to retain the right to pursue residual rates at a later date.</p>
                                </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6"> The gap is obvious. When the bank sends a Section 138 or civil claims notice. Standard firms panic. clients specifically need legal representation to counter bank counsel. You cannot bring a knife to a gunfight. you need a qualified legal experts to match the bank's legal department step for step. </p>

                            <h2 id="advocate-advantage" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">The Massive Advantage of an Advocate for Bank Loan Default</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Having an actual counsel settle your closure provides a strategic superiority that fully changes the dynamic of the claims process. The moment the bank receives correspondence on the valid letterhead of a registered legal practitioner. Their strategy shifts. They are no longer dealing with an uninformed clients they can bully. they are dealing with a experts who knows the law better than their own agents. </p>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold bg-blue-50 text-blue-900 p-8 rounded-3xl shadow-md border border-blue-100"> Legal Shielding: A own loan closure counsel near me creates a protective barrier. They will formally instruct the bank and its agents that all contact must be routed through their law office. Any further direct threats of the clients becomes a documented violation of legal procedure. which the counsel can use aggressively against the bank to force a favorable closure. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Furthermore. Counsel understand the cost benefit analysis of the banking sector. A bank knows that litigating a own loan default can take years and consume significant legal fees. When faced with a fierce. Competent defense from your counsel. The bank's legal department will often advise the claims department that settling the account at a steep discount is far more profitable than fighting a protracted legal battle. This is the leverage that secures waivers of 50 percent or more on the unpaid amount. </p>

                            <h2 id="case-study-one" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Case Study 1: Neutralizing the Section 138 Panic</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Consider the case of Vikram. A software engineer who defaulted on a ₹15 Lakh own loan after a sudden medical emergency depleted his savings. The bank assigned a particularly ruthless claims firm that began harassing his family. Within three months. The bank presented a security cheque for ₹18 Lakh (including exorbitant penal rates). The cheque bounced. Vikram received a terrifying Section 138 legal notice. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Vikram initially sought help from a generic online debt relief platform. The platform staff panicked upon seeing the penal notice and advised Vikram to arrange the funds fast or risk jail time. Realizing he was getting terrible advice. Vikram searched for a own loan closure counsel near me and connected with the legal experts at CredSettle. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> <strong>The Strategy:</strong> The counsel fast took charge. They drafted a meticulous reply to the Section 138 notice within the 15 day window. The reply pointed out that the bank had filled an arbitrary amount that included disputed penal rates. Meaning the cheque did not represent a by law enforceable debt at the exact time of presentation. The counsel also documented the severe threats Vikram faced. Warning of a counter complaint. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> <strong>The Outcome:</strong> The bank's legal team. Realizing their Section 138 case was flawed and would likely be thrown out by a magistrate. Abandoned the penal complaint route. The counsel then forced the bank to the settle table. Without the leverage of a penal threat. The bank agreed to a one time closure of ₹6 Lakh. Vikram's counsel secured a by law watertight closure note. the nightmare ended without Vikram ever stepping foot inside a courtroom. </p>

                            <h2 id="case-study-two" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Case Study 2: Blocking the Civil Recovery Escalation</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Sunita. A small firm owner. Had taken a own loan of ₹8 Lakh to expand her operations. When a severe market downturn hit. Her firm struggled. she missed five running EMIs. The unpaid amount ballooned to ₹11 Lakh due to compound rates and fines. The bank sent a final civil claims notice. Stating they were initiating steps to attach her firm assets. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Sunita needed robust legal help for loan closure. She hired a specialized counsel who fast reviewed the entire loan pacts and the statement of accounts. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> <strong>The Strategy:</strong> Her counsel discovered that the bank had violated RBI guidelines regarding the calculation of penal rates and had failed to provide the mandatory pre default notices. The counsel responded to the civil notice with a detailed legal rejoinder. Demanding a complete recalculation of the dues and threatening to approach the banking RBI officer regarding the RBI violations. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> <strong>The Outcome:</strong> The bank knew that steps with the civil suit would expose their non compliance with RBI norms. To avoid a protracted and embarrassing legal fight. They requested an out of court closure. Sunita's counsel settle a payout sum of ₹4.5 Lakh. Payable in three manageable tranches. The legal threats were fully neutralized. Sunita saved her firm assets from attachment. </p>

                            <h2 id="watertight-settlements" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Ensuring a Legally Watertight Settlement Letter</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Securing a verbal pacts for a discount is only half the battle. The most crucial phase is documenting that pacts. Banks are notorious for drafting closure letters with ambiguous clauses that allow them to reopen the case years later. Claiming that the closure only covered the main sum and that rates is still due. </p>
                            
                            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 mb-10 shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">The counsel's Checklist for a Watertight Letter</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start"> <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1"> <span className="font-bold text-blue-600 text-sm">1</span> </div> <div> <h3 className="font-bold text-gray-900 mt-0">Full and Final closure Clause</h3> <p className="text-sm text-gray-600 m-0">The letter must explicitly state that the agreed amount is in 'full and final closure' of the exact loan account number. Leaving zero room for future claims.</p> </div> </li>
                                    <li className="flex items-start"> <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1"> <span className="font-bold text-blue-600 text-sm">2</span> </div> <div> <h3 className="font-bold text-gray-900 mt-0">Withdrawal of Legal Cases</h3> <p className="text-sm text-gray-600 m-0">If the bank has already initiated a Section 138 or civil suit. The letter must contain a mandatory clause requiring the bank to formally withdraw these cases upon receipt of payment.</p> </div> </li>
                                    <li className="flex items-start"> <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1"> <span className="font-bold text-blue-600 text-sm">3</span> </div> <div> <h3 className="font-bold text-gray-900 mt-0">Return of Security papers</h3> <p className="text-sm text-gray-600 m-0">The closure must mandate the return of all original papers and unused security cheques within a specified timeframe.</p> </div> </li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6"> A own loan closure counsel near me will rigorously review every single word of the closure note. If the bank attempts to insert a sneaky clause. Your counsel will reject the letter and force the bank to issue a revised. Compliant papers. You should never make a closure payment until your counsel has thoroughly vetted and approved the written pacts. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> In conclusion. Navigating a own loan default is a serious legal undertaking. The threats posed by bank counsel and harsh claims teams cannot be mitigated by generic advice or unqualified firms. You must arm yourself with experts legal representation. An counsel for bank loan default will shield you from threats. Counter terrifying penal and civil notices. settle a closure that permanently and safely closes the chapter on your debt. </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Client Success and Feedback</h2>
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
                                        <p className="text-gray-700 mb-4 leading-relaxed font-normal text-sm m-0">{review.comment}</p>
                                        <div className="flex justify-between items-center text-xs font-bold text-blue-900 mt-4">
                                            <span>{review.name}</span>
                                            <span className="opacity-60">{review.location}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-4 mb-12">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                                        <button 
                                            onClick={() => toggleFaq(index)}
                                            className="w-full text-left p-4 focus:outline-none flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                                        >
                                            <h3 className="font-bold text-lg text-gray-900 pr-4 m-0">{faq.question}</h3>
                                            <svg 
                                                className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <div 
                                            className={`transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-[500px] opacity-100 p-4 border-t border-gray-100' : 'max-h-0 opacity-0 overflow-hidden px-4'}`}
                                        >
                                            <p className="text-gray-600 leading-relaxed font-normal m-0">{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4 mt-0">Don't Face Bank counsel Alone.</h3>
                                <p className="text-blue-800 mb-6 font-normal">Secure powerful legal representation today. Our counsel are ready to dismantle their legal notices and fight for your money freedom.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-300 transform hover:-translate-y-1"
                                >
                                    Consult A Legal Expert Now
                                </Link>
                            </div>
                        </article>
                    </main>

                    {/* Right Column: Cards */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block">
                        <div className="sticky top-24 self-start space-y-6">
                            {/* Card 1: CTA */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center flex flex-col items-center">
                                <p className="font-black text-gray-900 text-xl mb-3 mt-2 tracking-tight">Facing threats?</p>
                                <p className="text-gray-600 text-sm mb-5 leading-relaxed px-1"> We can send an fast Legal Notice to stop bank agents from visiting your house today. </p>
                                <Link
                                    href="/contact"
                                    className="w-full bg-[#1b5df3] hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md text-center text-sm"
                                >
                                    Stop the Agents
                                </Link>
                                <div className="mt-4 space-y-2 text-xs text-gray-500 w-full text-center font-medium">
                                    <p>&#10003. 24hr Legal Response</p>
                                    <p>&#10003. Section 138 Defense</p>
                                    <p>&#10003. Expert talks</p>
                                    <p>&#10003. Watertight Closure</p>
                                </div>
                            </div>

                            {/* Card 2: Links */}
                            <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100 shadow-sm mt-5">
                                <p className="font-black text-gray-900 text-lg border-b border-gray-900 pb-2 mb-4">Related Expertise</p>
                                <ul className="space-y-4 text-left font-medium">
                                    <li> <Link href="/services/personal-loan-settlement" className="text-blue-600 hover:text-blue-800 text-sm transition-colors"> own Loan Relief </Link> </li>
                                    <li> <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-blue-600 hover:text-blue-800 text-sm transition-colors"> Legal Notice Defense </Link> </li>
                                    <li> <Link href="/bank-recovery-case-in-court" className="text-blue-600 hover:text-blue-800 text-sm transition-colors"> Bank claims Shield </Link> </li>
                                    <li> <Link href="/how-to-handle-recovery-agent-harrasment" className="text-blue-600 hover:text-blue-800 text-sm transition-colors"> Stop Agent threats </Link> </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
