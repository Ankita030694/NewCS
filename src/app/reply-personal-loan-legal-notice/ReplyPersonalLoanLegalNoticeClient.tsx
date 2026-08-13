'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function ReplyPersonalLoanLegalNoticeClient() {
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
        { id: 'decoding-notice', label: 'Decoding the Notice' },
        { id: 'step-by-step', label: 'Step by Step Reply' },
        { id: 'case-study-one', label: 'Case Study: Court Action' },
        { id: 'strategic-defenses', label: 'Strategic Defenses' },
        { id: 'case-study-two', label: 'Case Study: Settlement' },
        { id: 'legal-counsel', label: 'Why Hire a Lawyer' },
        { id: 'ignoring-risks', label: 'Risks of Ignoring' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' }
    ];

    const faqs = [
        {
            question: "How much time do I get to reply to a personal loan legal notice?",
            answer: "Most legal notices stipulate a response time of seven to fifteen days from the date of receipt. You must adhere to this timeline strictly to prevent the bank from initiating immediate unilateral legal action in a civil court."
        },
        {
            question: "Can a lawyer respond to a loan notice on my behalf?",
            answer: "Absolutely. Engaging a lawyer to draft and send the response is highly recommended. A legal professional understands the statutory language and can formulate defenses that protect your rights while signalling to the bank that you are prepared for a legal defense."
        },
        {
            question: "What happens if I ignore a legal notice for a personal loan default?",
            answer: "Ignoring the notice is the worst possible strategy. It allows the bank to proceed with an ex parte decision, meaning the court will only hear their side of the story. This could result in immediate attachment of your salary accounts or other assets without your input."
        },
        {
            question: "Is the legal notice a final judgment against me?",
            answer: "No. A legal notice is simply a formal warning that the bank intends to take legal action if the dispute is not resolved. It is an invitation to negotiate, clarify misunderstandings, or arrange a settlement before court proceedings begin."
        },
        {
            question: "Can I negotiate a settlement after receiving a legal notice?",
            answer: "Yes. Replying to the notice is often the first step in opening a dialogue for a One Time Settlement. By explaining your financial hardship formally, you can invite the bank to the negotiating table rather than rushing to court."
        },
        {
            question: "Do I need to visit the court immediately after getting the notice?",
            answer: "Not immediately. The notice is a precursor to a lawsuit. If you reply effectively and begin negotiations, you may completely avoid having to visit a courtroom. Court appearances are only necessary if a formal suit is filed and summons are issued."
        },
        {
            question: "Should I contact the recovery agent who sent the notice?",
            answer: "No. You should communicate directly with the bank officials or the advocate who signed the notice. Recovery agents often use fake notices as pressure tactics. Always verify the authenticity of the notice before engaging in dialogue."
        },
        {
            question: "Can they arrest me for not paying a personal loan?",
            answer: "A personal loan default is a civil matter, not a criminal offense. You cannot be arrested merely for being unable to repay a personal loan. However, if you issued a security cheque that bounced, the bank might file a criminal case under Section 138 of the Negotiable Instruments Act."
        },
        {
            question: "What details should be included in my reply?",
            answer: "Your reply must include the date of the notice, your correct loan account number, a denial of any exaggerated claims, a statement of your current financial hardship, and a formal request for a meeting or settlement discussion."
        },
        {
            question: "How do I send the reply to the bank?",
            answer: "The reply should be sent via registered post with acknowledgment due or via speed post. You should also send a scanned copy via email to the advocate who issued the notice and the bank's official grievance redressal email address."
        }
    ];

    const reviews = [
        { name: "Vikram Sharma", location: "Delhi", stars: 5, comment: "I was terrified when I received a legal notice for my personal loan. The lawyers at CredSettle drafted a perfect reply that stopped the harassment and opened the door for a fair settlement." },
        { name: "Anita Roy", location: "Bangalore", stars: 5, comment: "The step by step guide provided here gave me the confidence to hire a professional. My case was handled beautifully without ever having to step inside a courtroom." },
        { name: "Rajat Kapoor", location: "Mumbai", stars: 4, comment: "Understanding the difference between a fake notice from recovery agents and a real one saved me a lot of stress. Highly recommend their legal services." }
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
        'name': 'Reply Personal Loan Legal Notice Service',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '312',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-legal-notice" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-legal-notice" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        Legal Notice Defense Guide
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        How to Reply to a <br />
                        <span className="text-blue-300">Personal Loan Legal Notice</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-normal">
                        Received a legal warning from your bank? Learn the correct format, essential tips, and professional strategies to halt legal action and negotiate a favorable settlement.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Draft a Strong Reply with Our Lawyers
                        </Link>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Section */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1440px] mx-auto px-4 py-4 font-sans">
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
                                        Reply to Legal Notice
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
                        className={`text-sm font-bold px-4 py-2 rounded-full transition-all flex-shrink-0 ${activeId === link.id
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
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Defense Guide</h3>
                            <nav className="space-y-1 text-sm">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={`block py-1.5 px-3 rounded-full transition-all ${activeId === link.id
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: Introduction to the Legal Notice Reality</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Receiving a formal document from a law firm representing your bank can be an incredibly stressful and overwhelming experience. When you default on a personal loan, financial institutions use every tool at their disposal to recover their funds. A legal notice is typically the first major escalation in this recovery process. It serves as a formal declaration of their intent to pursue litigation if the outstanding debt is not addressed promptly.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many borrowers panic upon receiving this document, assuming that court dates have already been set or that their arrest is imminent. This is a profound misconception. A legal notice is an opportunity. It is an invitation to engage in a formal dialogue, clarify your financial hardship, and present a structured plan for resolution. By crafting a precise, legally sound reply, you can deescalate the situation and push the bank toward a mutually beneficial settlement rather than a prolonged court battle. This comprehensive guide will equip you with the knowledge needed to handle this situation effectively.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Throughout this detailed exposition, we will break down the components of a standard legal notice, explore the psychological tactics employed by banks, and provide you with actionable strategies to defend yourself. We will examine real life case studies where strategic replies have halted aggressive legal actions and paved the way for substantial debt waivers. Understanding your rights and the mechanics of the legal system is your absolute best defense against intimidation.
                            </p>

                            <h2 id="decoding-notice" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 2: Decoding the Bank Notice</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Before you can draft an effective reply, you must thoroughly understand the document you have received. Not all communications from a bank or their recovery agents carry legal weight. Many agencies send documents designed to look like court summons to frighten borrowers into immediate payment. A genuine legal notice will always be drafted on the official letterhead of an advocate or a law firm.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It will clearly state the advocate's enrollment number, the date of issuance, and the specific client they represent. The document must explicitly detail your loan account number, the exact amount disbursed, the history of defaults, and the total outstanding amount claimed. Furthermore, it will outline a specific time frame for compliance, usually demanding payment within seven to fifteen days. If these elements are missing, you may be dealing with a coercive tactic rather than a formal legal prelude.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is vital to scrutinize the claims made in the notice. Banks often inflate the outstanding amount by adding exorbitant penal interest, late payment fees, and other undocumented charges. Your reply must challenge these figures if they do not align with the original loan agreement. Decoding the notice allows you to identify vulnerabilities in the bank's case, which your lawyer can then exploit in the response to build leverage for a settlement.
                            </p>

                            <h2 id="step-by-step" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 3: Step by Step Guide to Drafting Your Reply</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Drafting a reply to a legal notice is not merely about denying the claims; it is about establishing a narrative that protects your interests. The structure and tone of your response are critical. It must be professional, factual, and devoid of emotional outbursts. The goal is to demonstrate that you are aware of your rights, willing to engage constructively, and prepared to defend yourself if forced into litigation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The first step is to categorically state that you have received the notice on a specific date. This establishes a timeline for your response. Next, you must address the claims paragraph by paragraph. If the bank alleges a specific outstanding amount, you should demand a detailed, certified statement of account. You must explicitly contest any arbitrary penalties or unverified charges. Denying exaggerated claims forces the bank to substantiate their figures with evidence.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Following the denials, you must present your side of the story. If you experienced a genuine financial hardship, such as a medical emergency, job loss, or business failure, document it clearly. Explain that the default was not willful but circumstantial. Finally, conclude your reply by offering a pathway to resolution. Request a meeting with a senior bank official to discuss a restructuring plan or a One Time Settlement. This shows the court, should the matter escalate, that you made a genuine attempt to resolve the dispute amicably.
                            </p>

                            <h2 id="case-study-one" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 4: Case Study One Stalling Court Action</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To illustrate the power of a well crafted reply, consider the case of Mr. Verma, a mid level executive from Pune. Following a sudden company restructuring, he lost his job and subsequently defaulted on a large personal loan. After three months of missed payments, he received a highly aggressive legal notice demanding the entire outstanding amount within seven days, threatening immediate civil suits and asset attachment.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Panic stricken, Mr. Verma consulted our legal experts. Rather than ignoring the notice or making empty promises to the bank, our team drafted a comprehensive legal reply. The response challenged the penal interest applied during the non payment period and formally submitted evidence of his termination and current unemployment status. The reply explicitly stated that Mr. Verma had every intention of repaying the principal amount once he secured new employment but could not meet the arbitrary seven day deadline.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The result was immediate. The bank recognized that pursuing a civil suit against an unemployed individual with a documented intent to settle would be a waste of resources and time. They halted the planned litigation and agreed to a six month moratorium on his payments. When Mr. Verma finally secured a new job, the bank was amenable to negotiating a settlement plan based on the groundwork laid by that initial legal reply. A strong response entirely neutralized their aggressive timeline.
                            </p>

                            <h2 id="strategic-defenses" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 5: Strategic Defenses Against Default Claims</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When constructing your reply, several strategic defenses can be employed depending on the specifics of your loan agreement and the bank's actions. One powerful defense revolves around the capitalization of penal interest. The Reserve Bank of India has clear guidelines regarding how penalties can be levied. If the bank has compounded penal interest onto the principal amount illegally, your lawyer can highlight this violation, significantly weakening the bank's claim.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Another vital defense involves the limitation period. Under the Limitation Act, a bank has exactly three years from the date of the last payment or the date of default to file a civil suit for recovery. If the bank has slept on its rights and sends a legal notice after this period has expired, the debt is considered time barred. A strong reply pointing out that the claim is barred by limitation can completely terminate the bank's legal options, forcing them to abandon the pursuit or accept a nominal settlement.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, if you have faced harassment from recovery agents prior to receiving the notice, this must be documented in your reply. RBI guidelines mandate fair practices in debt recovery. By detailing instances of abuse, unauthorized visits, or calls at odd hours, you shift the narrative. You put the bank on the defensive, reminding them that their agents violated statutory guidelines, which could expose the institution to regulatory penalties and counter claims for mental agony.
                            </p>

                            <h2 id="case-study-two" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 6: Case Study Two Negotiating a Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Let us examine another scenario involving a small business owner, Mrs. Iyer, based in Chennai. She had taken a personal loan to inject capital into her boutique, which unfortunately suffered massive losses due to unforeseen market changes. The outstanding balance ballooned to twelve lakhs, inclusive of severe late payment charges. The bank issued a stern legal notice demanding immediate payment.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our legal team recognized that Mrs. Iyer possessed limited liquid assets but was genuinely committed to clearing her name. We drafted a reply that did not deny the debt but firmly contested the inflated penalty charges. The reply laid out her business failure in stark terms, accompanied by a formal proposal for a One Time Settlement. We offered a lump sum payment of five lakhs, sourced from family assistance, as full and final settlement of the account.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The bank initially rejected the offer, attempting to push for eight lakhs. However, because our reply established a clear record of her financial insolvency and demonstrated that a court case would yield nothing but prolonged expenses for the bank, their legal department advised the collection team to reconsider. After a month of back and forth negotiations initiated by the reply, the bank accepted a settlement of five and a half lakhs. The legal notice, properly managed, became the catalyst for a highly successful debt resolution.
                            </p>

                            <h2 id="legal-counsel" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 7: The Importance of Professional Legal Counsel</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A common question among borrowers is whether they can draft and send a reply themselves. While legally permissible, it is strategically unwise. Legal notices are drafted by experienced advocates who use specific terminology designed to trap the unwary. A poorly worded reply by a layman might inadvertently admit to liabilities, waive crucial rights, or restart the limitation clock on a time barred debt. This is a risk you cannot afford to take.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Engaging a lawyer for your personal loan legal notice ensures that your response is calibrated perfectly. A lawyer knows exactly what facts to admit, what claims to deny, and how to structure the counter narrative. Furthermore, a reply dispatched on an advocate's letterhead carries significant weight. It signals to the bank that you are not an easy target and that you are fully prepared to mount a vigorous legal defense if they choose to proceed to court.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Your legal counsel will also manage all subsequent communications with the bank's advocates. This acts as a powerful shield against harassment. Once a lawyer is on record representing you, recovery agents are generally deterred from using aggressive tactics, knowing that any misstep will be documented and used against them in legal proceedings. The fee paid for professional counsel is an investment in your peace of mind and financial security.
                            </p>

                            <h2 id="ignoring-risks" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 8: The Severe Risks of Ignoring the Notice</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Burying your head in the sand is the single most destructive action you can take when faced with a legal notice. Many borrowers mistakenly believe that if they ignore the communication, the bank will eventually give up. The reality is quite the opposite. Silence is often interpreted in legal proceedings as an admission of guilt or a lack of defense. By failing to reply, you hand the bank a massive tactical advantage.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you ignore the notice, the bank will proceed to file a civil suit for recovery. Since you have not contested their claims, they may easily secure an ex parte order. An ex parte order is a judgment passed in your absence, based entirely on the evidence presented by the bank. Once this order is secured, the bank can obtain execution decrees to attach your salary accounts, seize movable assets, or place liens on any property you might own.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Beyond civil suits, if a security cheque was involved in your loan agreement, ignoring the notice is particularly perilous. A notice regarding a bounced cheque under the Negotiable Instruments Act demands payment within fifteen days. Failure to comply or reply within this statutory period allows the bank to initiate criminal proceedings. By simply engaging a lawyer to reply to the notice, you disrupt their momentum, force them to justify their claims, and protect yourself from devastating unilateral court orders. Do not ignore the warning; address it with strength and professional guidance.
                            </p>

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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4 mt-0">Protect Your Rights Today</h3>
                                <p className="text-blue-800 mb-6 font-normal">Our experienced legal team specializes in analyzing bank notices and drafting powerful replies to secure your financial future.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-300 transform hover:-translate-y-1"
                                >
                                    Draft a Strong Reply with Our Lawyers
                                </Link>
                            </div>
                        </article>
                    </main>

                    {/* Right Column: Cards */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24 self-start">
                        <div className="space-y-6">
                            {/* Card 1: CTA */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center flex flex-col items-center">
                                <h3 className="font-black text-gray-900 text-lg mb-3 mt-2 tracking-tight">Facing Harassment?</h3>
                                <p className="text-gray-600 text-xs mb-6 leading-relaxed px-2">
                                    We can send an immediate Legal Notice to stop agents from visiting your house today.
                                </p>
                                <Link
                                    href="/contact"
                                    className="w-full bg-[#1b5df3] hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md text-center text-sm"
                                >
                                    Draft a Strong Reply with Our Lawyers
                                </Link>
                                <div className="mt-5 space-y-2 text-xs text-gray-500 w-full text-center font-medium">
                                    <p>&#10003; 24hr Legal Response</p>
                                    <p>&#10003; RBI Compliance Audit</p>
                                    <p>&#10003; Stop Bank Action</p>
                                    <p>&#10003; FIR Support</p>
                                </div>
                            </div>

                            {/* Card 2: Links */}
                            <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100 shadow-sm mt-6">
                                <h4 className="font-black text-gray-900 text-sm border-b border-gray-900 pb-3 mb-6">Related Expertise</h4>
                                <ul className="space-y-4 text-left font-medium">
                                    <li>
                                        <Link href="/are-there-legal-implecations-or-non-payment-during-debt-settlement" className="text-blue-600 hover:text-blue-800 text-xs transition-colors">
                                            Personal Loan Relief
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/compare-debt-settlement-fees-and-success-rate" className="text-blue-600 hover:text-blue-800 text-xs transition-colors">
                                            MSME Dispute Defense
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/is-loan-settlement-a-good-option-for-borrowers" className="text-blue-600 hover:text-blue-800 text-xs transition-colors">
                                            Bank Recovery Shield
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-improve-cibil-score" className="text-blue-600 hover:text-blue-800 text-xs transition-colors">
                                            Default Notice Help
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
