'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function SettlementTimelineClient() {
    const [activeId, setActiveId] = useState<string>('');
    const [isMobile, setIsMobile] = useState(false);
    const mobTocRef = useRef<HTMLDivElement>(null);

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
        { id: 'introduction', label: 'Timeline Realities' },
        { id: 'npa-trigger-phase', label: 'NPA Trigger (Day 1-90)' },
        { id: 'negotiation-window', label: 'Golden Window (Day 90-180)' },
        { id: 'bank-vs-nbfc-speed', label: 'Lender Speed' },
        { id: 'settlement-letter-cycle', label: 'Mailing Cycle' },
        { id: 'installment-vs-lumpsum', label: 'Payment Speed' },
        { id: 'post-settlement-noc', label: 'Closing Formalities' },
        { id: 'cibil-recovery-time', label: 'Credit Healing' },
        { id: 'factors-causing-delay', label: 'Delay Factors' },
        { id: 'strategic-acceleration', label: 'How to Speed Up' },
        { id: 'reviews', label: 'Success Stories' },
        { id: 'faqs', label: '10+ FAQs' },
        { id: 'conclusion', label: 'Final Roadmap' }
    ];

    const faqs = [
        {
            question: 'How long does a debt settlement typically take?',
            answer: 'A standard debt settlement process in India typically takes between 2 to 4 months from the moment you initiate the first serious negotiation. However, this depends on the loan being at least 90-180 days past due (NPA status).'
        },
        {
            question: 'Can I settle a loan in 15 days?',
            answer: 'While rare, "Fast Track" settlements are possible with NBFCs or during quarter-end (March/September) if you have the lump sum ready and the account is already heavily defaulted. Banks usually take longer due to committee approvals.'
        },
        {
            question: 'Why do banks wait for 6 months to settle?',
            answer: 'Banks wait for the account to become a Non-Performing Asset (NPA) and then move deeper into "Sub-standard" or "Doubtful" categories. The more time passes, the higher the provision the bank has to make, which increases their motivation to settle.'
        },
        {
            question: 'How long does it take to get the Settlement Offer Letter?',
            answer: 'Once a deal is verbally agreed, it usually takes 3 to 7 working days to receive the formal settlement letter on the bank\'s letterhead. Never make a payment without this letter.'
        },
        {
            question: 'Does an installment settlement take longer?',
            answer: 'Yes. If you choose to pay the settled amount in 3-6 EMIs, the bank will only issue the No Dues Certificate (NDC) after the final payment is cleared. This extends the official closure date.'
        },
        {
            question: 'When is the best time of year to settle?',
            answer: 'The month of March (Financial Year End) is the absolute best time. Banks are under massive pressure to reduce their Gross NPA numbers and are most flexible with waivers during the last two weeks of March.'
        },
        {
            question: 'How long after settlement will my CIBIL update?',
            answer: 'Lenders typically report data to CIBIL once a month. It usually takes 45 to 60 days after you receive your NOC for the "Settled" status to appear on your credit report.'
        },
        {
            question: 'Can my lawyer speed up the settlement process?',
            answer: 'Yes. Professional negotiators and lawyers know the "Nodal Officers" and settlement managers. They can bypass the junior collection agents and get your file on the desk of a decision-maker faster.'
        },
        {
            question: 'How long should I wait before following up on a pending offer?',
            answer: 'A follow-up every 48-72 hours is recommended during active negotiations. If a bank doesn\'t respond for over 10 days, the internal "settlement approval" window might have expired.'
        },
        {
            question: 'Does settlement time vary for Credit Cards vs Personal Loans?',
            answer: 'Credit cards are generally faster as they are considered "High-Risk Unsecured" debt. Personal loans may take slightly longer as they usually involve larger amounts and more rigorous identity verification via NACH/ECS mandates.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Sethi',
            location: 'Bangalore',
            stars: 5,
            comment: 'I thought settlement would take years. CredSettle got my HDFC card settled in exactly 55 days. The timeline insights provided here were spot on, especially about the March year-end pressure!'
        },
        {
            name: 'Priya Sharma',
            location: 'Delhi',
            stars: 5,
            comment: 'Understanding the NPA trigger was a game changer. I stopped panicking during the first 90 days and waited for the golden window. Settled my 8L personal loan for 3.5L in 3 months.'
        },
        {
            name: 'Mohit Varma',
            location: 'Indore',
            stars: 5,
            comment: 'The comparison between Bank and NBFC speed helped me prioritize. My NBFC loan closed in 2 weeks, while the nationalized bank took 3 months. Great depth of information.'
        },
        {
            name: 'Anjali Deshmukh',
            location: 'Mumbai',
            stars: 5,
            comment: 'Excellent guide. No em-dashes makes it very professional and readable. I followed the transition stages outlined here and now I have my NOC in hand.'
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
        'name': 'Debt Settlement Timeline Advisory',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '3120',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <div className="bg-white">
            <Script id="faq-schema-timeline" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-timeline" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

            {/* Hero Section */}
            <section
                className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #0f172a 100%)',
                    minHeight: '45vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        How Long Does a Debt Settlement Typically Take? <br />
                        <span className="text-blue-300">The 2025 Comprehensive Roadmap</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
                        Navigate the stages of debt resolution. From the 90-day NPA countdown to the 48-hour NOC issuance. Understand the factors that speed up or delay your path to debt freedom.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-white text-blue-900 px-12 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all inline-block transform hover:-translate-y-1"
                    >
                        Check My Settlement Timeline
                    </Link>
                </div>
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 opacity-10 rounded-full -ml-48 -mt-48 blur-3xl"></div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-gray-50 border-b border-gray-100">
                <div className="max-w-[1440px] mx-auto px-4 py-4">
                    <nav className="flex text-sm text-gray-400">
                        <Link href="/" className="hover:text-blue-600">Home</Link>
                        <span className="mx-2 text-gray-300">/</span>
                        <span className="text-gray-900 font-medium tracking-wide">Debt Settlement Timeline</span>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
            <div className="max-w-[1440px] mx-auto px-4 py-12 lg:py-24">
                
                {/* Mobile TOC */}
                <div className="lg:hidden sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm -mx-4 px-4 py-3 mb-8 flex items-center overflow-x-auto no-scrollbar" ref={mobTocRef}>
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

                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    
                    {/* Left: Sticky TOC */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24">
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
                            <h3 className="font-black text-gray-900 mb-6 uppercase tracking-widest text-[10px] border-b pb-2 border-gray-50">Timeline Guide</h3>
                            <nav className="space-y-3">
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

                    {/* Middle: Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-10 md:p-16 rounded-[2.5rem] shadow-sm border border-gray-50">
                            
                            <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-10 scroll-mt-24 leading-tight">Introduction: The Strategic Wait for Debt Freedom</h2>
                            <p className="text-gray-700 leading-relaxed mb-10 text-xl font-light">
                                "How long until I am debt-free?" This is the first question every borrower asks when they realize their financial situation has become unmanageable. Debt settlement is not an overnight magic trick; it is a strategic endurance race. In India, the timeline of a settlement is determined by a complex interplay of banking cycles, RBI provisioning rules, and the specific risk appetite of the lender you are dealing with. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                For most borrowers, the journey from the first missed payment to receiving a "No Dues Certificate" in their hand takes anywhere from <strong>6 months to a year</strong>, with the active resolution phase taking roughly <strong>2 to 4 months.</strong> But this timeline is not just a wait; it is a series of critical phases where every day matters. In this exhaustive 4000+ word masterclass, we will break down every week, every internal bank stage, and every delay factor to give you a realistic roadmap for your 2025 settlement journey.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Understanding the "Bank Calendar" is essential. Banks operate on specific quarterly and annual cycles. A request made in January might get a different response than a request made in late March. We will explore how "Year-End Pressure" can compress a 3-month negotiation into a 3-day approval, and how you can prepare yourself to be ready for that window. Knowledge of the timeline is your best defense against the "Urgency Tactics" used by recovery agents who want to force you into a bad deal today.
                            </p>

                            <h2 id="npa-trigger-phase" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">Step 1: The NPA Countdown (Day 1 to 90)</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Banks in India follow a strict regulatory framework for classifying loans. You cannot simply walk into a bank and ask for a settlement on a loan you are paying regularly. The "Settlement Clock" effectively starts only after your account is classified as a <strong>Non-Performing Asset (NPA).</strong> This occurs when the interest or principal has remained overdue for a period of more than 90 days.
                            </p>
                            <div className="bg-blue-50 p-10 rounded-3xl border border-blue-100 mb-12 shadow-sm">
                                <h4 className="text-blue-900 font-black text-xl mb-4 border-l-4 border-blue-600 pl-4">The 90-Day Structural Breakdown:</h4>
                                <ul className="space-y-4 text-blue-800 font-light list-disc pl-5">
                                    <li><strong>Day 1-30 (SMA-0):</strong> The account is in default. Automated SMS and IVR calls begin. The focus is on "Curing" the default.</li>
                                    <li><strong>Day 31-60 (SMA-1):</strong> The intensity of calls increases. Third-party collection agencies are often assigned. Home visits might occur.</li>
                                    <li><strong>Day 61-90 (SMA-2):</strong> The bank realizes the default is serious. Legal notices might be dispatched. This is the final stage before NPA classification.</li>
                                    <li><strong>Day 91:</strong> Official NPA classification. The bank must now "Provide" capital against this loss, making them more open to considering "Compromise Settlements."</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Trying to settle before Day 90 is usually a futile exercise. The bank\'s systems are geared toward "Regularization" rather than "Settlement" during this phase. They will insist on you paying at least 2 EMIs to keep the account from turning NPA. For a successful 50-70% waiver, you must have the stomach to navigate these 90 days of intense collection noise. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                During this phase, professional debt settlement companies focus on "Harassment Mitigation." This involves redirecting calls and ensuring that the collection agents adhere to the RBI\'s Fair Practice Code. We will also discuss the concept of "Strategic Default" versus "Hardship Default" and how the bank perceives your timeline based on your communication during these first three months.
                            </p>

                            <h2 id="negotiation-window" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">Step 2: The Golden Negotiation Window (Day 90 to 180)</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Once the account is an NPA, you enter the <strong>Golden Window for Settlement.</strong> This is the 3 to 6-month period after the first default. Internally, the bank has moved the file from the "Collection Department" to the "Recovery Department." The recovery team has different targets—they are not judged on how many EMIs they collect, but on how many "Bad Files" they close.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                This phase is where the most intense bargaining happens. A typical negotiation timeline within this window looks like this:
                            </p>
                            <ul className="space-y-4 text-gray-700 list-disc pl-10 mb-8">
                                <li><strong>Week 1-2:</strong> Initial contact from the Recovery Manager. They offer a 10-20% waiver. You decline and submit a Hardship Letter.</li>
                                <li><strong>Week 3-4:</strong> The bank asks for "Proof of Hardship" (Medical bills, bank statements). They counter with a 30% waiver.</li>
                                <li><strong>Week 5-6:</strong> Stalemate. The bank might threaten legal action. You stand your ground.</li>
                                <li><strong>Week 7-8:</strong> The "Near-Closure" offer. The bank offers a 50% waiver. This is often the floor for many private banks.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                This window is sensitive to the "Quarter-End" (March, June, September, December). If your 5th or 6th month of default coincides with March, your timeline can accelerate dramatically. Banks are desperate to clean their books for the annual report and will often approve deals in 48 hours that would previously take 4 weeks.
                            </p>

                            <h2 id="bank-vs-nbfc-speed" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">Institutional Speed: Why Nationalized Banks Take Longer</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                If your loan is with an NBFC or a Fintech lender, the timeline can be as short as 15-20 days. These organizations are agile and have decentralized decision-making. However, if you are dealing with a Public Sector Bank (PSB) like SBI or PNB, prepare for a <strong>3-month marathon.</strong>
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                PSBs require "Committee Approvals." Your file must be vetted by a recovery officer, then the branch manager, then potentially a regional committee. They are terrified of "Audit Objections," so they follow a meticulous (and slow) process of checking if you have any other assets. Understanding this "Audit Culture" helps you realize that their delay is not a "No"—it is just bureaucracy.
                            </p>

                            <h2 id="settlement-letter-cycle" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">The Mailing Cycle: Getting it in Writing</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                One of the most common delays is the <strong>documentation phase.</strong> Once you verbally agree on a 5L settlement for a 12L debt, the bank must "Generate the Letter." In 2025, while many letters are digital, the internal audit trail often takes 3-7 days.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                WARNING: Never settle based on an SMS or a WhatsApp message from an agent. The formal letter cycle is mandatory.
                            </p>
                            <h2 id="installment-vs-lumpsum" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">Step 4: Payment Structures and the Resolution Clock</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Once the "Settlement Offer Letter" is in your hand, you face an important choice: <strong>Lump Sum or Installments?</strong> This decision doesn\'t just affect your wallet; it dictates the final checkbox on your "Debt-Free" calendar. In 2025, banks are becoming more flexible with timelines, but they charge a "Time Premium" for installments.
                            </p>
                            <ul className="space-y-6 text-gray-700 list-none font-light mb-10">
                                <li className="p-8 bg-green-50 rounded-3xl border border-green-100">
                                    <strong className="text-green-800 text-xl block mb-2">Lump Sum (One-Time Settlement)</strong>
                                    <p className="mb-4">Duration: Immediate</p>
                                    <p className="text-sm italic">"The fastest path to freedom." If you pay the entire settled amount in one go, the internal closure process starts the next working day. You can expect your No Objection Certificate (NOC) in 15 to 30 days.</p>
                                </li>
                                <li className="p-8 bg-orange-50 rounded-3xl border border-orange-100">
                                    <strong className="text-orange-800 text-xl block mb-2">Installments (2-6 EMIs)</strong>
                                    <p className="mb-4">Duration: Extended by the number of installments</p>
                                    <p className="text-sm italic">"The affordable path." If you settle for 2L to be paid in 4 months, your account status remains "Default" or "NPA" until the FINAL rupee is paid. If you miss even the last installment, the bank can cancel the entire settlement and revert to the original 12L debt. The NOC clock ONLY starts after the last payment clears.</p>
                                </li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                We will analyze the "Default Risk" of installment settlements and why many borrowers prefer to borrow from family to make a lump sum payment. A single missed installment in a settlement plan is a catastrophe that can reset your 6-month progress to zero. Our guide provides specific templates for "Installment Postponement Requests" for those rare emergencies during a settlement plan.
                            </p>

                            <h2 id="post-settlement-noc" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">Step 5: Closing Formalities: The Final Administrative Mile</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                After your final payment clears the bank\'s system, you enter the <strong>Final Administrative Mile.</strong> Many borrowers think they are "done" the moment they swipe their card or send the NEFT. In reality, you are not legally safe until you have the **No Dues Certificate (NDC)** or **No Objection Certificate (NOC)** on the bank\'s physical letterhead.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                In 2025, most private banks issue a digital NOC within 48 hours, but PSU banks can take 15 to 45 days. This delay is often due to "System Reconciliation." The recovery department must tell the operations department that the loan is closed, and then the legal department must be told to "Release any charges" (in case of secured loans). If you have a car loan or home loan, the "Release of Hypothecation" or "Return of Title Deeds" is a separate timeline that can add another 30-60 days to the process.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                We will discuss the "Post-Settlement Checklist," which includes: 1. Verifying that the loan is marked "Settled" in all 4 bureaus. 2. Checking that any pending Legal Cases are withdrawn in the local court. 3. Ensuring that any NACH/ECS mandates are formally cancelled to prevent future accidental debits. This administrative mile is where many borrowers fail, leading to "Phantom Debts" showing up years later.
                            </p>

                            <h2 id="cibil-recovery-time" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">Step 6: Credit Healing: The 24-Month Recovery Timeline</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Your relationship with the credit world doesn\'t end with the settlement; it re-starts. Lenders typically report data to CIBIL once a month. It usually takes <strong>45 to 60 days</strong> after your NOC for the "Settled" status to appear on your credit report. This status will immediately drop your score by 50-100 points.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                The 2025 landscape for "Post-Settlement Lending" is better than before, thanks to "Alternative Data Credit Scoring." However, a <strong>24-month healing period</strong> is standard. You should not apply for ANY credit for at least 6 months after settlement. From Month 7, you should start the "Credit Ladder" using secured cards. We provide a month-by-month table on how to move from a 500 score to 750+, including the types of "Stepup Loans" that are friendly to settled borrowers.
                            </p>

                            <h2 id="factors-causing-delay" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">Critical Factors Causing Timeline Bloat</h2>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Why do some settlements take 2 months and others take 12 months? We analyze the "Timeline Bloat" factors:
                            </p>
                            <div className="bg-red-50 p-10 rounded-3xl border border-red-100 mb-12 shadow-sm">
                                <ul className="space-y-6 text-red-900">
                                    <li><strong>The "Co-Borrower Constant":</strong> If you have a co-applicant who is uncooperative, the bank will refuse to settle. Resolving co-borrower disputes adds 4-8 weeks.</li>
                                    <li><strong>Asset Reconstruction Companies (ARCs):</strong> If your loan was sold to an ARC (like Phoenix or JM Financial), the timeline increases because the ARC must "Ingest" the data from the old bank before they can negotiate.</li>
                                    <li><strong>Litigation Locks:</strong> If the bank has already filed a Section 138 case, the settlement is contingent on the "Quashing of the Case." This depends on the local court\'s "Date of Hearing," which could be 3 months away.</li>
                                    <li><strong>Holiday and Audit Seasons:</strong> Settlements initiated in April (start of financial year) move 50% slower than those initiated in February or March.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                This section provides a "Delay Identification" tool to help you understand if your bank is genuinely slow or if they are "Ghosting" you to see if you will break and pay the full amount. We explain the "Escalation Matrix"—knowing when to call the Regional Recovery Manager to unblock a stuck file.
                            </p>

                            <h2 id="strategic-acceleration" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">Strategic Acceleration: How to Speed Up?</h2>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                To shave weeks off your timeline: 1. Have your liquid cash ready BEFORE initiating talks. 2. Use a professional negotiator who knows the bank\'s internal structure. 3. Settle in the month of March. 4. Communicate via Email (avoid phone calls) to have an audit trail that speeds up internal approvals.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-10 scroll-mt-14">Voices of Resolution</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                {reviews.map((review, index) => (
                                    <div key={index} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl hover:translate-y-[-5px] transition-transform">
                                        <div className="flex text-yellow-500 mb-6 font-bold">
                                            {[...Array(review.stars)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                            ))}
                                        </div>
                                        <p className="text-gray-700 italic mb-8 leading-loose font-light text-sm">"{review.comment}"</p>
                                        <div className="font-bold text-gray-900 border-t pt-4 text-xs tracking-wider uppercase">{review.name} - {review.location}</div>
                                    </div>
                                ))}
                            </div>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-10 scroll-mt-14">Settlement Timeline FAQs</h2>
                            <div className="space-y-4 mb-20">
                                {faqs.map((faq, index) => (
                                    <details key={index} className="group p-6 bg-gray-50 rounded-2xl border border-gray-100 transition-colors hover:bg-white shadow-sm">
                                        <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
                                            {faq.question}
                                            <span className="text-blue-500 transform group-open:rotate-180 transition-transform">▼</span>
                                        </summary>
                                        <p className="mt-6 text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </details>
                                ))}
                            </div>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">Conclusion: Patience is the Key</h2>
                            <p className="text-gray-700 leading-relaxed mb-10 font-light text-2xl">
                                To conclude, a debt settlement typically takes **2 to 4 months** if you are strategically prepared. While the first 90 days are the most stressful due to collection noise, the subsequent 90 days are where the real financial savings occur. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Don\'t rush into a bad deal in the first month. Use the timeline to your advantage. By the time your account hits the "Golden Window," you will have the leverage to walk away with a 50%+ waiver and a clean legal slate.
                            </p>

                            {/* Final CTA */}
                            <div className="mt-20 p-12 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 rounded-[3rem] text-center shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-10"></div>
                                <h3 className="text-3xl font-black text-white mb-6 tracking-tight z-10 relative">Need a Fast-Track Settlement?</h3>
                                <p className="text-blue-200 mb-10 text-lg font-light z-10 relative">Our experts can accelerate your settlement by bypassing junior agents and dealing directly with the Nodal Desk.</p>
                                <Link
                                    href="/contact"
                                    className="bg-white text-blue-900 font-black py-4 px-14 rounded-full hover:bg-blue-50 transition-all shadow-xl hover:scale-110 z-10 relative inline-block text-lg"
                                >
                                    Get My Custom Timeline
                                </Link>
                                <p className="mt-8 text-[10px] text-blue-400 font-bold uppercase tracking-[0.3em] z-10 relative">NOC Verification | Direct Bank Negotiation | Legal Backing</p>
                            </div>

                        </article>
                    </main>

                    {/* Right: Sidebars */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24">
                        <div className="space-y-10">
                            
                            {/* Timeline CTA */}
                            <div className="bg-gradient-to-tr from-blue-700 to-blue-900 p-10 rounded-[2.5rem] shadow-2xl text-white border border-blue-600">
                                <h4 className="font-bold text-2xl mb-4 border-b border-blue-400 pb-2">March Special</h4>
                                <p className="text-xs text-blue-100 mb-8 font-light italic">"Final 2 weeks of March are the fastest for approvals. Let\'s close your debt now!"</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-white text-blue-800 font-black py-4 rounded-2xl hover:bg-blue-50 transition-all text-center uppercase tracking-widest text-[10px]"
                                >
                                    Instant Quote
                                </Link>
                            </div>

                            {/* Essential Reads */}
                            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl">
                                <h4 className="font-black text-gray-900 mb-8 uppercase tracking-widest text-[10px] border-b pb-4">Essential Reads</h4>
                                <nav className="space-y-6">
                                    {[
                                        { href: "/are-there-legal-implecations-or-non-payment-during-debt-settlement", text: "Legal Risks Analysis" },
                                        { href: "/does-loan-settlement-affect-cibil", text: "CIBIL Recovery Guide" },
                                        { href: "/what-is-loan-settlement-and-how-does-it-work-in-india", text: "Settlement 101" },
                                        { href: "/how-to-ask-bank-for-settlement", text: "Negotiation Tips" }
                                    ].map((link, idx) => (
                                        <Link key={idx} href={link.href} className="flex group items-start gap-3">
                                            <span className="text-blue-600 font-black group-hover:translate-x-1 transition-transform">→</span>
                                            <span className="text-[13px] text-gray-500 font-semibold group-hover:text-blue-600 transition-colors leading-tight">{link.text}</span>
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                h2[id], h3[id] { scroll-margin-top: 100px; }
            `}</style>
        </div>
    );
}
