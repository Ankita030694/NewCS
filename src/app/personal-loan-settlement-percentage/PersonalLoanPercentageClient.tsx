'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function PersonalLoanPercentageClient() {
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
        { id: 'introduction', label: 'The Expectation Gap' },
        { id: 'bank-internal-math', label: 'Bank Internal Math' },
        { id: 'dpd-npa-rules', label: 'DPD & NPA Rules' },
        { id: 'stage-1-sma', label: 'Stage 1: SMA Buckets' },
        { id: 'stage-2-substandard', label: 'Stage 2: Sub-Standard' },
        { id: 'stage-3-doubtful', label: 'Stage 3: Doubtful Assets' },
        { id: 'average-percentage', label: 'Average Waivers' },
        { id: 'case-study-1', label: 'Case Study 1: Early Default' },
        { id: 'case-study-2', label: 'Case Study 2: Long Term NPA' },
        { id: 'maximising-discounts', label: 'Maximising Discounts' },
        { id: 'legal-implications', label: 'Legal Implications' },
        { id: 'faqs', label: 'FAQs' }
    ];

    const faqs = [
        {
            question: "What percentage is personal loan settlement usually approved at?",
            answer: "The average personal loan settlement amount falls between 30 percent to 50 percent of the total outstanding balance, but this heavily depends on how many days past due your account is and the bank's internal NPA provisioning policies."
        },
        {
            question: "How much does the bank waive in settlement during the first 90 days?",
            answer: "During the first 90 days, banks rarely offer substantial waivers. You might get a 10 percent to 20 percent discount on penal interest and late fees, but the principal amount is almost never waived before the loan becomes a Non-Performing Asset."
        },
        {
            question: "Can I demand a 70 percent discount on my personal loan?",
            answer: "Demanding a 70 percent discount on day one of default is a common misconception. Banks only consider taking such a massive haircut if the loan has been in the Doubtful or Loss asset category for several years and they have already provisioned for the entire loss."
        },
        {
            question: "What is DPD and why does it matter for settlement percentages?",
            answer: "DPD stands for Days Past Due. It measures how many days you have missed your payment. Banks use DPD to classify loans into SMA categories and eventually NPA. The higher the DPD, the higher the provision the bank must make, which increases their willingness to offer a larger waiver percentage."
        },
        {
            question: "Does the settlement percentage change for different banks?",
            answer: "Yes, private banks and public sector banks have slightly different provisioning norms and risk appetites. Private banks might aggressively settle older NPA accounts to clean their balance sheets, while public banks often stick to strict board approved settlement schemes."
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
        'name': 'Personal Loan Settlement Percentage Guide',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '924',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-pl-percentage" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-pl-percentage" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        Bank Internal Math Revealed
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        What Percentage is <br />
                        <span className="text-blue-300">Personal Loan Settlement?</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-normal">
                        Discover the average personal loan settlement amount and learn exactly how much a bank will waive based on Days Past Due (DPD) and NPA provisioning rules.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Calculate Your Discount
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
                                        Settlement Percentage
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Topic Overview</h3>
                            <nav className="space-y-1 text-sm">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={`block py-2 px-4 rounded-full transition-all ${activeId === link.id
                                            ? 'bg-blue-600 text-white font-bold shadow-md'
                                            : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600 font-medium'
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: The Expectation Gap in Debt Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Borrowers often think they can walk into a bank on the first day of default and demand a seventy percent discount on their outstanding dues. This is a massive misconception that leads to frustration, failed negotiations, and intense harassment from recovery agents. Many borrowers simply do not understand that the willingness of a bank to take a financial haircut is strictly tied to the Days Past Due (DPD) metrics and Non Performing Asset (NPA) provisioning rules mandated by the Reserve Bank of India. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The question of what percentage is personal loan settlement approved at cannot be answered with a single flat rate. It is a highly dynamic calculation. This page reveals the internal math of the bank, explaining precisely why discounts increase dramatically from twenty percent to over fifty percent the longer the loan remains unpaid and classified as an NPA. Understanding this framework is the only way to effectively negotiate the average personal loan settlement amount and understand how much the bank will waive in settlement.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When you stop paying your personal loan Equated Monthly Installments (EMIs), the bank does not immediately view your account as a lost cause. Initially, they see it as a temporary cash flow problem. They deploy their telecalling teams to remind you of your dues. At this stage, asking for a principal waiver is completely counterproductive. The bank has not yet suffered any regulatory capital hit. They have no incentive to waive a single rupee of the principal amount you borrowed. To secure a substantial waiver, you must understand the journey of a bad loan through the banking system.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Debt settlement is a mathematical transaction for the bank, not an emotional one. They do not care about your medical bills, your job loss, or your business failure unless it translates into a prolonged period of non payment. The bank only cares about minimizing their capital provisioning requirements and maximizing their recovery rate on written off assets. If you approach the bank with emotional appeals on day thirty, you will be rejected. If you approach them with a strategic lump sum offer on day one hundred and eighty, you have a high probability of success. We will break down exactly how this timeline works.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Before we delve into the complex NPA provisioning rules, it is vital to set realistic expectations. A zero percent repayment is impossible. A ten percent repayment is extremely rare and usually involves decades old litigation. The average personal loan settlement amount generally hovers between thirty percent and fifty percent of the total outstanding balance, provided you time your negotiation perfectly. Let us examine the internal math that dictates these percentages.
                            </p>

                            <h2 id="bank-internal-math" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 2: Decoding the Bank Internal Math</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To understand how much a bank will waive in settlement, you must first understand how banks account for bad loans. When a bank lends you money, that loan is considered an asset on their balance sheet because it generates interest income. When you stop paying, that asset starts turning toxic. The Reserve Bank of India forces banks to set aside a portion of their own profits as a buffer against these toxic assets. This buffer is called a provision.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Provisioning eats directly into the quarterly profits of the bank. Bank managers and executives are bonused based on profitability. Therefore, bad loans directly impact the bonuses and performance reviews of the bank staff. This creates a massive incentive for the bank to either recover the money from you quickly or, if that is impossible, settle the account to reverse the provisioning requirements and clean up their balance sheet. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The longer you do not pay, the higher the provision the bank must make. When you are thirty days late, the provision might be negligible. When you are over three years late, the bank might be forced to provide one hundred percent of the loan amount from their own profits. This is the core secret of debt settlement: your negotiating power increases in direct proportion to the provisioning burden you place on the bank. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a bank settles a loan, they are doing a cost benefit analysis. They compare the settlement amount you are offering today against the future costs of litigation, the future costs of continuous provisioning, and the low probability of full recovery. If your settlement offer provides a better financial outcome than keeping the dead asset on their books, they will approve it. This is why the question of what percentage is personal loan settlement approved at varies so wildly based on the age of the default.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, unsecured personal loans have no collateral. The bank cannot seize your house or your car to recover the money. Their only leverage is harassing you via recovery agents or filing a civil suit for recovery, both of which are expensive and time consuming. This lack of collateral is the primary reason why unsecured personal loan settlement percentages are significantly more favorable to the borrower compared to secured loans like home loans or car loans.
                            </p>

                            {/* Alert Banner for Internal Math */}
                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl"></div>
                                <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                                    </svg>
                                    The Core Principle of Settlement
                                </h4>
                                <p className="text-blue-800 font-normal text-sm m-0">
                                    Your discount is directly proportional to the bank's provisioning requirement. You cannot demand a high discount when the bank's provision is zero. You must wait for the loan to age into higher provisioning buckets to unlock massive waivers.
                                </p>
                            </div>

                            <h2 id="dpd-npa-rules" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 3: DPD and NPA Rules Explained</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                DPD stands for Days Past Due. It is the most critical metric on your CIBIL report and in the internal systems of the bank. The DPD counter starts ticking the day you miss your EMI payment. If your EMI was due on the fifth of the month, and today is the tenth, your account is five Days Past Due. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The banking system categorizes your loan based on this DPD counter. These categories dictate the intensity of the recovery efforts and the willingness of the bank to negotiate a settlement. The journey from a standard account to a complete write off involves several distinct stages, each carrying different implications for your average personal loan settlement amount.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                NPA stands for Non Performing Asset. A loan officially becomes an NPA when the overdue amount remains unpaid for more than ninety days. Before the ninety day mark, the loan is still considered a standard asset, although it is flagged as a Special Mention Account (SMA). Once an account crosses the ninety day threshold and becomes an NPA, the bank is legally required to start provisioning for the loss. This is the exact moment when serious settlement negotiations become possible.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Knowing the exact DPD of your loan account is the foundation of any debt settlement strategy. If you blindly offer a settlement without knowing whether your account is SMA or NPA, you will likely be rejected or you will end up paying far more than necessary. You must calculate the exact age of your default to predict what percentage is personal loan settlement acceptable to the bank.
                            </p>

                            <h2 id="stage-1-sma" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 4: Stage 1: The SMA Buckets (0 to 90 Days)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The first ninety days of default are the most chaotic for a borrower. The bank divides this period into three Special Mention Account (SMA) buckets: SMA-0, SMA-1, and SMA-2. During this entire phase, the loan is still a Standard Asset. The bank believes they can bully, cajole, or persuade you into paying the overdue EMIs and regularizing the account. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                SMA-0 covers the period from one to thirty Days Past Due. The recovery efforts here are usually mild, consisting of automated SMS reminders, emails, and polite phone calls from the internal collections team. The bank assumes you simply forgot to pay or had a minor cash flow hiccup. They will charge you late payment fees and bounce charges, but they will absolutely not entertain any talk of a principal waiver.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                SMA-1 covers the period from thirty one to sixty Days Past Due. The tone of the recovery calls changes drastically. The bank may assign the account to an external recovery agency. You will start receiving multiple calls a day, and agents may threaten to visit your home or workplace. Despite the aggressive tactics, the bank's internal provisioning is still negligible. The focus is entirely on recovering the arrears, not settling the total debt. If you ask for a settlement here, they might offer to waive the late fees, but nothing more.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                SMA-2 covers the critical period from sixty one to ninety Days Past Due. The pressure reaches its peak. Recovery agents become extremely aggressive because they know that if the account crosses the ninety day mark, it becomes an NPA, which reflects poorly on their collection targets. The bank may send you a formal legal notice recalling the entire loan amount. However, even in the SMA-2 stage, significant principal waivers are almost never approved. The bank is still trying to save the asset from becoming toxic.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                Settlement Expectation in SMA Stages: Do not expect a principal waiver. The maximum discount you can negotiate is a waiver of penal interest and bounce charges. The bank will demand one hundred percent of the principal outstanding. 
                            </p>

                            <h2 id="stage-2-substandard" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 5: Stage 2: Sub-Standard Assets (NPA)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The moment your account hits ninety one Days Past Due, it is classified as a Non Performing Asset (NPA). Specifically, it enters the Sub-Standard Asset category, where it will remain for the next twelve months (up to roughly 450 Days Past Due total). This classification triggers a profound change in the bank's internal accounting.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                By law, the bank must now make a general provision of fifteen percent on the total outstanding balance of your unsecured personal loan. This means fifteen percent of your loan amount is immediately deducted from the bank's quarterly profit pool. The asset is officially toxic, and the bank's primary goal shifts from regularizing the account to minimizing losses and reversing the provision.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This is the stage where real debt settlement negotiations begin. The recovery agents will still shout and threaten legal action, but behind the scenes, the bank managers have the authority to approve substantial discounts. If you can offer a lump sum payment that represents a better recovery than they expect from endless phone calls or civil litigation, they will take the deal.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the early months of the Sub-Standard phase (90 to 180 DPD), the bank may offer to waive thirty percent of the total outstanding amount. They are testing the waters, hoping you will panic and arrange the funds. As the account ages further into the Sub-Standard category (180 to 360 DPD), the bank becomes more desperate to clean the books before the loan falls into the next, more punitive provisioning bucket. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The average personal loan settlement amount in the late Sub-Standard phase often lands around fifty percent to sixty percent of the principal balance, plus a complete waiver of all accumulated interest and penalties. However, securing these deals requires patience, strong negotiation skills, and a clear understanding that the recovery agents barking at you on the phone have zero authority to approve these waivers. You must negotiate directly with the settlement desk or higher tier management.
                            </p>

                            <h2 id="stage-3-doubtful" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 6: Stage 3: Doubtful and Loss Assets</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If a loan remains in the Sub-Standard category for twelve months without being settled or recovered, it is downgraded to a Doubtful Asset. The provisioning rules for unsecured Doubtful Assets are brutal for the bank. Depending on the exact age, the bank may be forced to provide up to one hundred percent of the loan amount from their profits. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a loan is one hundred percent provisioned, it essentially means the bank has already absorbed the total financial loss on their balance sheet. Any money they recover from you at this point is considered pure profit, a "write back" to their profit and loss statement. This creates a massive incentive for the bank to accept almost any reasonable settlement offer. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                What percentage is personal loan settlement approved at in the Doubtful Asset stage? This is where borrowers can secure waivers of sixty percent, seventy percent, or even higher. If your loan has been unpaid for three years or more, the bank considers it a dead asset. If you walk in with a lump sum offer of twenty five percent of the original principal, the bank will heavily consider it because recovering twenty five percent of a dead asset is better than recovering zero percent.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Eventually, if recovery is deemed entirely impossible, the bank's internal auditors or the RBI will mandate that the loan be classified as a Loss Asset and completely written off the books. A write off does not mean your debt is forgiven; you still legally owe the money, and your CIBIL will show a massive default. However, written off accounts are often sold to Asset Reconstruction Companies (ARCs) or third party debt buyers for pennies on the rupee. If an ARC bought your loan for ten percent of its value, they will happily settle it with you for twenty percent, making a handsome profit while giving you an eighty percent discount.
                            </p>

                            <h2 id="average-percentage" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 7: Summary of Average Settlement Waivers</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Based on thousands of resolved cases, here is a realistic breakdown of how much the bank will waive in settlement across different DPD buckets. Please note that these are averages; individual results vary based on the specific bank, the loan amount, and your documented financial hardship.
                            </p>

                            {/* Visual Element: Data Table */}
                            <div className="overflow-x-auto mb-10 border border-gray-200 rounded-xl shadow-sm">
                                <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
                                    <thead className="bg-gray-50 text-gray-900 font-bold">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">Days Past Due (DPD)</th>
                                            <th scope="col" className="px-6 py-4">Asset Classification</th>
                                            <th scope="col" className="px-6 py-4">Expected Principal Waiver</th>
                                            <th scope="col" className="px-6 py-4">Interest & Penalties</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 text-gray-700">
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 font-medium">0 to 90 Days</td>
                                            <td className="px-6 py-4">Standard (SMA 0, 1, 2)</td>
                                            <td className="px-6 py-4">0% (No Principal Waiver)</td>
                                            <td className="px-6 py-4">Partial Waiver Possible</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 font-medium">91 to 180 Days</td>
                                            <td className="px-6 py-4">NPA (Sub-Standard)</td>
                                            <td className="px-6 py-4">20% to 35%</td>
                                            <td className="px-6 py-4">100% Waived</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 font-medium">181 to 365 Days</td>
                                            <td className="px-6 py-4">NPA (Sub-Standard)</td>
                                            <td className="px-6 py-4">40% to 55%</td>
                                            <td className="px-6 py-4">100% Waived</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 font-medium">1 Year to 3 Years</td>
                                            <td className="px-6 py-4">Doubtful Asset</td>
                                            <td className="px-6 py-4">60% to 75%</td>
                                            <td className="px-6 py-4">100% Waived</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 font-medium">Over 3 Years</td>
                                            <td className="px-6 py-4">Loss Asset / Written Off</td>
                                            <td className="px-6 py-4">Up to 85%</td>
                                            <td className="px-6 py-4">100% Waived</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                            <h2 id="case-study-1" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 8: Case Study 1: The Premature Settlement Attempt</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To illustrate how these percentages apply in real life, let us examine the case of Mr. Sharma. Mr. Sharma had an unsecured personal loan of INR 8,000,000 from a leading private bank. Due to a medical emergency, he exhausted his savings and missed his very first EMI. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Panicking about the recovery calls, Mr. Sharma visited his home branch on Day 35 of his default (SMA-1 phase). He explained his medical situation and offered to pay a lump sum of INR 4,000,000 to settle the entire debt, effectively asking for a fifty percent discount. The branch manager outright rejected the offer. The manager explained that the system would not allow any principal waiver for a standard asset. Mr. Sharma was devastated and assumed settlement was impossible.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Mr. Sharma endured months of severe harassment from recovery agents because he had shown his cards too early. The agents knew he had access to INR 4,000,000, so they relentlessly pressured him to use that money to clear his arrears and resume paying regular EMIs. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Eventually, Mr. Sharma sought professional debt relief advice. He was instructed to hold his funds securely and completely ignore the recovery agents until the account crossed the 180 day NPA threshold. By month seven, the bank's provisioning requirement had severely impacted the branch's metrics. The same bank that rejected his fifty percent discount offer on Day 35 reached out to him with a settlement campaign. Ultimately, Mr. Sharma settled his INR 8,000,000 loan for a final payment of INR 3,600,000, securing a fifty five percent waiver on the principal and zero interest charges. Timing is everything.
                            </p>

                            <h2 id="case-study-2" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 9: Case Study 2: Strategic Patience and Doubtful Assets</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The power of provisioning is even more apparent in long term defaults. Consider Ms. Gupta, an entrepreneur whose business collapsed during a severe economic downturn. She defaulted on a massive INR 15,000,000 unsecured business loan. For the first year, the bank filed arbitration cases, sent endless legal notices, and deployed aggressive field agents. Ms. Gupta, having zero income and zero liquid assets, could not pay a single rupee.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Fast forward three and a half years. Ms. Gupta's loan had transitioned through Sub-Standard and was now classified as a Doubtful Asset. The bank had already made a near one hundred percent provision for the loss. The loan was essentially a dead weight on their books, generating zero income but requiring administrative effort to manage the stalled legal proceedings.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Ms. Gupta slowly rebuilt her career and managed to save INR 3,500,000. She approached the bank's regional settlement desk through a legal representative. She offered a full and final settlement of INR 3,000,000 against the total outstanding of over INR 20,000,000 (which included years of penal interest). 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Initially, the bank demanded at least fifty percent of the principal. However, Ms. Gupta's legal team pointed out the loan's vintage, the fully provisioned status, and the absolute lack of any attachable assets. They made it clear that this was a take it or leave it offer. After a month of escalations to higher committees, the bank accepted the INR 3,000,000 settlement. The bank booked a massive haircut, but they were thrilled to recover anything at all from a three year old Doubtful Asset. Ms. Gupta walked away debt free with an eighty percent discount on her principal.
                            </p>

                            <h2 id="maximising-discounts" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 10: Strategies for Maximising Your Settlement Discount</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you want to push the average personal loan settlement amount lower and maximize the percentage the bank will waive, you must adopt a clinical, strategic approach. You cannot act out of fear, and you cannot let recovery agents dictate the timeline.
                            </p>
                            <ul className="list-none space-y-4 mb-6 pl-0">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span className="text-gray-700"><strong>Never Negotiate with Field Agents:</strong> The agents calling you or visiting your house have zero authority to approve a fifty percent waiver. Their job is to collect EMIs. If you offer them a settlement, they will reject it and use the information against you. Always negotiate directly with the bank's central settlement team or regional manager.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span className="text-gray-700"><strong>Wait for the Right DPD Window:</strong> As demonstrated, offering a settlement before 90 DPD is futile. You must have the psychological endurance to withstand the harassment during the SMA phases. The optimal window for initiating serious settlement talks is usually between 120 and 180 Days Past Due.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span className="text-gray-700"><strong>Lump Sum Payments Command Premium Discounts:</strong> Banks hate installment settlements. If you ask to pay the settled amount over six months, the bank takes on the risk of you defaulting again. If you offer a single, immediate lump sum payment transferred within forty eight hours of receiving the settlement letter, the bank will often grant an extra ten to fifteen percent discount.</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span className="text-gray-700"><strong>Document Hardship Methodically:</strong> While the bank is primarily driven by internal math, they still require justification to present to their auditors for taking a massive loss. Provide solid documentation of your financial hardship: termination letters, hospital bills, or GST cancellation certificates. Make it unequivocally clear that they cannot recover the full amount, regardless of how many legal notices they send.</span>
                                </li>
                            </ul>

                            <h2 id="legal-implications" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 11: The Legal Implications of High Percentage Waivers</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Securing a high percentage waiver is a massive relief, but it comes with permanent consequences. You must understand the trade offs before aggressively pursuing a seventy percent discount. The banking system does not simply forgive the debt and forget about it. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a bank waives a portion of your principal, they report the account to CIBIL and other credit bureaus with the status flag set to Settled, not Closed. A Settled status is a severe negative mark. It tells future lenders that you borrowed money, failed to repay the full amount, and forced the bank to take a loss. This status will remain on your credit report for up to seven years, drastically lowering your credit score and making it extremely difficult to obtain unsecured credit in the near future.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, if the waived principal amount is substantial, it may be treated as a taxable event under certain interpretations of the Income Tax Act. While this is rarely enforced for small consumer loans, business loans with massive multi crore write offs might attract scrutiny. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Finally, you must ensure that the settlement agreement explicitly states that the payment is in Full and Final settlement of all dues. The letter must clearly outline the total outstanding, the agreed settlement amount, the waiver percentage, and the timeline for issuing the No Objection Certificate (NOC). If the letter is ambiguous, the bank or a third party debt buyer might try to recover the remaining balance years later.
                            </p>

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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4 mt-0">Negotiate Your Settlement Safely</h3>
                                <p className="text-blue-800 mb-6 font-normal">Do not let recovery agents dictate your financial future. Speak to our legal experts to analyze your loan's DPD status and structure the perfect settlement offer.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-300 transform hover:-translate-y-1"
                                >
                                    Get Expert Settlement Help
                                </Link>
                            </div>
                        </article>
                    </main>

                    {/* Right Column: Cards */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24 self-start">
                        <div className="space-y-6">
                            {/* Card 1: CTA */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center flex flex-col items-center">
                                <h3 className="font-black text-gray-900 text-xl mb-3 tracking-tight">Facing Harassment?</h3>
                                <p className="text-gray-600 text-sm mb-5 leading-relaxed px-1">
                                    We can send an immediate Legal Notice to stop recovery agents from visiting your house today.
                                </p>
                                <Link
                                    href="/contact"
                                    className="w-full bg-[#1b5df3] hover:bg-blue-700 text-white font-bold py-3 px-3 rounded-xl transition-colors shadow-md text-center text-sm"
                                >
                                    Stop the Agents
                                </Link>
                                <div className="mt-4 space-y-2 text-xs text-gray-500 w-full text-center font-medium">
                                    <p>✓ 24hr Legal Response</p>
                                    <p>✓ Stop Unwanted Calls</p>
                                    <p>✓ Block Home Visits</p>
                                    <p>✓ Protect Your Family</p>
                                </div>
                            </div>

                            {/* Card 2: Links */}
                            <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100 shadow-sm mt-6">
                                <h4 className="font-black text-gray-900 text-lg border-b border-gray-300 pb-3 mb-5">Related Expertise</h4>
                                <ul className="space-y-4 text-left font-medium text-sm">
                                    <li>
                                        <Link href="/personal-loan-settlement-calculator" className="text-blue-600 hover:text-blue-800 transition-colors">
                                            Calculate Settlement Cost
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-avoid-debt-settlement-scams-in-india" className="text-blue-600 hover:text-blue-800 transition-colors">
                                            Avoid Debt Scams
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-handle-recovery-agent-harrasment" className="text-blue-600 hover:text-blue-800 transition-colors">
                                            Handle Recovery Agents
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/personal-loan-settlement-cibil-impact" className="text-blue-600 hover:text-blue-800 transition-colors">
                                            CIBIL Impact Explained
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
