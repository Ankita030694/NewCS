'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function CanRecoveryAgentsHomeClient() {
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
        { id: 'legal-status-visits', label: 'Legal Status of Visits' },
        { id: 'trespassing-laws-india', label: 'Trespassing Laws' },
        { id: 'refusing-entry-rights', label: 'Right to Refuse Entry' },
        { id: 'home-visit-etiquette', label: 'Visit Protocol' },
        { id: 'workplace-visit-rules', label: 'Workplace Visits' },
        { id: 'harassment-at-doorstep', label: 'Doorstep Harassment' },
        { id: 'recording-home-visits', label: 'Recording Evidence' },
        { id: 'police-involvement', label: 'When to Call 100' },
        { id: 'family-protection', label: 'Protecting Family' },
        { id: 'securing-the-gate', label: 'Physical Defense' },
        { id: 'negotiation-at-home', label: 'Handle the Talk' },
        { id: 'after-the-visit', label: 'Post-Visit Steps' },
        { id: 'legal-remedies-trespass', label: 'Suing for Trespass' },
        { id: 'faqs', label: 'Visit FAQs' },
        { id: 'conclusion', label: 'Final Verdict' }
    ];

    const faqs = [
        {
            question: 'Can recovery agents legally enter my house without permission?',
            answer: 'Strictly No. A recovery agent has no legal right to enter your private property without your explicit consent. Entering forcefully or refusing to leave when asked constitutes criminal trespass under Section 441 of the IPC.'
        },
        {
            question: 'What should I do if an agent is standing outside my gate and shouting?',
            answer: 'This is public shaming and harassment. Do not open the gate. Record the incident on your phone, inform the agent that you are calling the police, and file a formal complaint with the bank nodal officer immediately.'
        },
        {
            question: 'Are there specific hours for home visits by recovery agents?',
            answer: 'Yes, RBI rules generally restrict visits to between 8 AM and 7 PM. Visits outside these hours, especially late at night or early morning, are illegal and considered harassment.'
        },
        {
            question: 'Can I be arrested if I don\'t let the recovery agent in?',
            answer: 'Absolutely not. Debt recovery is a civil matter. Not letting a private agent into your home is your legal right to privacy and can never lead to an arrest.'
        },
        {
            question: 'Can recovery agents visit my office or workplace?',
            answer: 'They should only visit your workplace if they cannot find you at home. Even then, they cannot discuss your debt with your colleagues or HR, as it violates your right to privacy.'
        },
        {
            question: 'What documents should an agent show before entering?',
            answer: 'They must produce a valid ID card from the bank or agency and a specific authorization letter for your loan. If they don\'t have these, they are unauthorized individuals.'
        },
        {
            question: 'How do I stop future visits from recovery agents?',
            answer: 'The most effective way is to file a formal complaint with the bank and the RBI Ombudsman citing specific instances of harassment. You can also hire a debt mediation firm to handle all communications on your behalf.'
        },
        {
            question: 'Can a female recovery agent visit a male borrower?',
            answer: 'Yes, but the conduct rules remain the same. Conversely, if a male agent is visiting a house where only women are present, they must ensure extreme sensitivity and professional distance.'
        },
        {
            question: 'Is it trespassing if they stay in my garden or porch?',
            answer: 'If you have asked them to leave your property and they remain on your porch, garden, or driveway, it constitutes criminal trespass. Every inch of your property is protected by privacy laws.'
        },
        {
            question: 'Should I sign any documents given to me at home?',
            answer: 'Never sign any blank papers or "visit confirmation" forms without reading them carefully. Often these contain admissions of debt that can be used against you in court. It is better to refuse to sign anything on the spot.'
        }
    ];

    const reviews = [
        {
            name: 'Rajesh Kumar',
            location: 'Bangalore',
            stars: 5,
            comment: 'An agent tried to push my door open. I showed him the trespass law section from this guide and threatened an FIR. He literally ran away. Knowledge is power!'
        },
        {
            name: 'Anjali Sharma',
            location: 'Pune',
            stars: 5,
            comment: 'I was terrified of home visits. CredSettle taught me that I don\'t even have to open my gate. Now I talk to them through my window, keeping my children safe inside.'
        },
        {
            name: 'Sunil Mehta',
            location: 'Ahmedabad',
            stars: 5,
            comment: 'The section on recording visits is great. I caught an agent using abusive language at my doorstep on my doorbell camera. The bank waived all penalties to avoid a lawsuit.'
        },
        {
            name: 'Meena Das',
            location: 'Kolkata',
            stars: 5,
            comment: 'Very helpful. Knowing that they can\'t call me at 6 AM or visit after 7 PM brought so much peace to my household. Thank you for this guide.'
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
        'sameAs': [
            'https://www.facebook.com/credsettle',
            'https://www.twitter.com/credsettle',
            'https://www.linkedin.com/company/credsettle'
        ]
    };

    const reviewSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Can Recovery Agents Come Home? Legal Rights Guide',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '4100',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-home-visit" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-home-visit" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-home-visit" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

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
                        Can Recovery Agents Come Home?<br />
                        <span className="text-blue-300">Know Your Privacy & Trespass Rights</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
                        An expert guide on handling doorstep visits. Learn when you can legally refuse entry, how to handle aggressive behavior, and the trespassing laws that protect your household.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Protect My Home & Privacy
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
                                    <span className="ml-1 font-medium text-gray-500 md:ml-2 line-clamp-1">
                                        Can Recovery Agents Come Home
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
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

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Home Rights Outline</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: The Sacred Boundary of Your Home</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For most of us, our home is more than just a structure of bricks and mortar; it is our sanctuary. It is the one place where we feel safe, where our families find peace, and where we expect a total shield from the pressures of the outside world. When this sanctuary is breached by the aggressive knock of a "Recovery Agent," the impact is far more than just financial, it is deeply psychological. The question <strong className="font-bold text-gray-900">"Can recovery agents come home?"</strong> is often asked with a mixture of fear and desperation by borrowers who feel like their private life is being invaded.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Let us start with the most important legal fact in 2025: <strong className="font-bold text-gray-900">Your home is your kingdom, and you are the gatekeeper.</strong> While a bank has a right to recover its dues, it does NOT have a right to trespass, intimidate, or embarrass you in your own private space. The Indian legal system, through the Constitution, the Indian Penal Code, and specific RBI guidelines, provides you with a powerful set of "Doorstep Protections." Every borrower needs to know that having a debt does not mean you have surrendered your right to privacy or your right to live with dignity.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In this 5000+ word deep dive, we will explore the precise legal boundaries of a home visit. We will demystify the myths spread by recovery agents and replace them with hard legal truths. You will learn about the <strong className="font-bold text-gray-900">Right to Refuse Entry</strong>, the <strong className="font-bold text-gray-900">Trespassing laws</strong> that protect your porch and garden, and the strict <strong className="font-bold text-gray-900">RBI Protocol</strong> that every agent must follow before they even set foot on your street. We will look at practical, "street-level" strategies to handle aggressive visitors without losing your cool or your legal standing.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we represent thousands of families who have faced the trauma of doorstep recovery. We have seen how knowledge of one single legal section can transform a terrified borrower into a empowered citizen who stands their ground. Whether you are dealing with a personal loan, a credit card default, or a complex business loan recovery, this guide is your roadmap to securing your home. We will move beyond the fear and provide you with a masterclass on how to manage, record, and, if necessary, legally prosecute any agent who crosses the line.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Remember, the goal of a home visit is often psychological, to make you feel "hunted" so you pay out of panic. By mastering the rules of engagement, you take that weapon away from the bank. A home visit should be a professional interaction, and if it becomes anything else, the law is on your side. Let let's begin by defining the exact legal status of a recovery agent at your door.
                            </p>

                            <h2 id="legal-status-visits" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Legal Status of Visits: Myth vs. Reality</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                There is a common myth used by recovery agents: they claim they have "Court Powers" to visit and inspect your home. This is 100% false. A recovery agent is a private employee of a bank or an agency. They have <strong className="font-bold text-gray-900">zero</strong> official legal powers. They are not police officers, they are not court bailiffs, and they are not tax officials.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">The Reality:</strong> A recovery agent at your door has the same legal standing as a salesperson or a delivery person. They can ring your bell and request to speak with you. That is the extent of their "Power." They cannot force you to talk, they cannot force you to open your door, and they certainly cannot force their way inside.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The <strong className="font-bold text-gray-900">Supreme Court of India</strong> has repeatedly held that debt recovery is a civil matter. It cannot be used as a cover for criminal acts like intimidation. If an agent tells you he has a "Visit Warrant," he is lying. Only a civil court through a bailiff can issue a warrant for attachment of property, and that happens after years of litigation, not during the early stages of a loan default.
                            </p>

                            <h2 id="trespassing-laws-india" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Trespassing Laws in India: Section 441 IPC</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In India, your privacy is protected by the <strong className="font-bold text-gray-900">Indian Penal Code (IPC)</strong>. The most relevant section for any borrower is <strong className="font-bold text-gray-900">Section 441</strong>, which defines "Criminal Trespass."
                            </p>
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-6 font-light">
                                <h4 className="font-bold text-red-900 mb-4 text-sm uppercase tracking-wider">What accounts for Trespass?</h4>
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>1. Unlawful Entry:</strong> Entering your property with the intent to commit an offense or to intimidate, insult, or annoy you.</li>
                                    <li><strong>2. Unlawful Staying:</strong> Entering legally but refusing to leave once you have asked them to go.</li>
                                    <li><strong>3. The Boundaries:</strong> This law applies to your house, your garden, your porch, and even the common area in front of your flat if it is under your control.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If a recovery agent enters your porch and you say, "Please leave my property immediately," and they stay for even one minute longer to continue arguing, they are committed the crime of <strong className="font-bold text-gray-900">Criminal Trespass</strong>. This is a powerful legal reality. You are not "being difficult", you are exercising a right that is fundamental to the Rule of Law in India.
                            </p>

                            <h2 id="refusing-entry-rights" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Right to Refuse Entry: "Not Today"</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Here is the golden rule of doorstep recovery: <strong className="font-bold text-gray-900">You do not have to let them in.</strong> There is no law, and no RBI guideline, that requires a borrower to allow a private agent inside their house.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">How to handle the door in 2025:</strong>
                                <br />- <strong className="font-bold text-gray-900">The Intercom/Window:</strong> If you have an intercom or can speak through a window, do so. There is no need to open the main door.
                                <br />- <strong className="font-bold text-gray-900">The Firm "No":</strong> If an agent asks, "Can we come inside and talk?", your answer can simply be, "No. I am not comfortable with visitors right now. We can talk through the gate, or you can send me an email."
                                <br />- <strong className="font-bold text-gray-900">Public Spaces:</strong> If you must talk, suggest meeting at a nearby public place like a park or cafe, where you feel safer and have witnesses.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Agents often use the "Sympathy Trap" ("It's very hot outside, please just let us sit for 5 minutes"). Do not fall for this. Once they are inside, it is much harder to get them to leave, and they have an opportunity to "look around" at your assets and family, which they will use to build psychological pressure later. Professionalism means keeping the boundaries clear.
                            </p>

                            <h2 id="home-visit-etiquette" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Home Visit Etiquette: The RBI Protocol</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Even if you choose to allow a visit, the agent must follow a strict <strong className="font-bold text-gray-900">RBI Fair Practices Protocol</strong>. In 2024 and 2025, these rules have been tightened to ensure that a visit does not become a spectacle of shame.
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Pre-Notice Requirement:</strong> The bank must have updated their empanelled agent list on their website and should ideally have sent you a text or email saying that Agent X is authorized to visit you.</li>
                                <li><strong>Timing (8 AM - 7 PM):</strong> Visits can only happen during these daylight hours. Any visit at 8 PM is a violation.</li>
                                <li><strong>Identification:</strong> The agent MUST carry a valid ID card and a copy of the bank's authorization letter. Take a photo of these immediately.</li>
                                <li><strong>Professional Distance:</strong> The agent must maintain a distance and not use physical proximity as a tool of intimidation.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If an agent arrives in a group (more than 2 people), this is often viewed by the courts as <strong className="font-bold text-gray-900">"Gang Intimidation."</strong> A standard recovery visit should ideally involve only one or two professionals. If five large men arrive at your gate, do not open it. Call the police immediately, as this is a clear attempt to use physical force to pressure you.
                            </p>

                            <h2 id="workplace-visit-rules" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Workplace Visits: Defending Your Reputation</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For many, the office is more vulnerable than the home. The fear of being shamed in front of colleagues or HR is a massive leverage point for agents. The RBI has recognized this and has created strict "Workplace Boundaries."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">The Workplace Rule:</strong> An agent can only visit your office as a <strong className="font-bold text-gray-900">Last Resort</strong>, specifically when they have tried and failed multiple times to contact you at your home or via phone. They cannot visit your office just because it's "more convenient" for them or because they want to embarrass you.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">During an Office Visit:</strong>
                                <br />- They cannot shout or create a scene in the lobby.
                                <br />- They cannot contact your superiors to "complain" about your debt. This is a violation of your privacy and can lead to the bank being sued for <strong className="font-bold text-gray-900">Defamation</strong>.
                                <br />- If an agent reaches your office, tell your security to ask for their ID and authorization letter. If they don't have it, they can be escorted out.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, you can also send a <strong className="font-bold text-gray-900">"Notice of Non-Consent"</strong> to your bank. State: "I am available for discussion at my home address between 6 PM and 7 PM. I do NOT consent to any visits at my place of employment as it may jeopardize my source of income." Once the bank has this in writing, any office visit becomes a deliberate act of bad faith and is easily punishable by the Ombudsman.
                            </p>

                            <h2 id="harassment-at-doorstep" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Doorstep Harassment: Identifying the Red Lines</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                What exactly counts as "Harassment" at your gate? The law looks for actions that are designed to cause "Alarm or Distress."
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>1. The Shout:</strong> Shouting your name and the debt amount loudly so neighbors can hear. This is "Public Defamation."</li>
                                    <li><strong>2. The Blockade:</strong> Standing in front of your car or gate so you cannot leave for work. This is "Wrongful Restraint" (Section 341 IPC).</li>
                                    <li><strong>3. The Poster:</strong> Sticking any notice or poster on your wall or gate. Only a court official or a SARFAESI officer (after multiple legal steps) can do this. A private agent cannot.</li>
                                    <li><strong>4. The Threat:</strong> Saying they will call the police or gather a crowd.</li>
                                    <li><strong>5. The Persistent Ring:</strong> Ringing your doorbell continuously for 10-20 minutes.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                These actions are not just "unprofessional", they are illegal. If an agent does any of the following, you should NOT engage in a conversation about the loan. Your only response should be: "You are harassing me and violating RBI guidelines. I am recording this and calling the police."
                            </p>

                            <h2 id="recording-home-visits" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Recording Evidence: Your Digital Witness</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In a "He Said, She Said" battle with a bank, the one with the recording wins 100% of the time. Modern technology is the borrower's best friend.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">How to Record Safely:</strong>
                                <br />- <strong className="font-bold text-gray-900">Doorbell Cameras:</strong> In 2025, a smart video doorbell is the best investment for a borrower. It records the interaction from the start, often with high-quality audio.
                                <br />- <strong className="font-bold text-gray-900">Phone Video:</strong> If you must face an agent at the gate, have someone else (a family member or neighbor) record the interaction from a short distance.
                                <br />- <strong className="font-bold text-gray-900">The Warning:</strong> You do NOT need the agent's permission to record someone who is on your property or talking to you in a public space. However, explicitly saying "I am recording this for my safety and for RBI compliance" often makes agents behave much better instantly.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">Save the Metadata:</strong> Ensure your recordings have the date and time stamp. This evidence is vital for the <strong className="font-bold text-gray-900">RBI Ombudsman</strong> and for filing a police complaint. A video of an agent shouting a vulgar word at your gate is enough to get a bank to waive a significant portion of your penalties.
                            </p>

                            <h2 id="police-involvement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">When to Call 100: Managing Emergencies</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many borrowers are afraid to call the police because they feel "I am the one who owes money." This is a dangerous misconception. The police do not care about your loan; they care about <strong className="font-bold text-gray-900">Law and Order</strong>.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">Call 100/112 immediately if:</strong>
                                <br />- An agent attempts to enter your home forcefully.
                                <br />- An agent uses physical force or touches you or your family.
                                <br />- More than 3-4 agents have surrounded your home.
                                <br />- An agent refuses to leave after 10 minutes of being asked to go.
                                <br />- An agent is threatening immediate physical harm.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When the police arrive, be calm. Say: "I have a civil loan dispute with Bank X. These private individuals are here, they are trespassing, and they are using criminal intimidation. I want them removed, and I want to file a complaint." Often, just the act of calling the police will make the agents flee. Make sure to get a "Daily Diary Entry" (DDE) or a copy of the complaint from the police station; this is powerful evidence of harassment.
                            </p>

                            <h2 id="family-protection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Protecting Your Family: Child & Elder Rights</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most hurtful part of a home visit is the trauma caused to children and elderly parents. RBI Guidelines 2024 specifically mention that recovery agents must be sensitive to the presence of minors and the elderly.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">The "Safe Room" Strategy:</strong> If you know agents are coming, or if they are at the door, move your children and elderly family members to a back room. They should not be part of the negotiation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong className="font-bold text-gray-900">The Elderly Shield:</strong> In India, the <strong className="font-bold text-gray-900">Maintenance and Welfare of Parents and Senior Citizens Act, 2007</strong> provides very high levels of protection. If an agent's behavior causes a health crisis for an elderly person, the legal consequences for the bank are severe. If you are a senior citizen living alone, or have elderly parents at home, mention this in your first response: "There are vulnerable senior citizens here. Any scene or shouting will be treated as a direct health threat under the Senior Citizens Act."
                            </p>

                            <h2 id="securing-the-gate" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Physical Defense: Practical Home Security</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While we focus on legal defense, a few physical steps can make a massive difference in your peace of mind.
                                <br />- <strong className="font-bold text-gray-900">The Physical Barrier:</strong> Ensure your gate or main door is always locked. Never rely on just a screen door.
                                <br />- <strong className="font-bold text-gray-900">Security Mirrors/Cameras:</strong> Knowing who is outside *before* you open the door gives you the power to choose whether to engage.
                                <br />- <strong className="font-bold text-gray-900">The "No Trespassing" Sign:</strong> Put a small, professional sign on your gate that says: "Private Property. No Entry without Appointment. Solicitors and Recovery Agents must show Bank ID and Authorization." While this doesn't stop everyone, it sets a legal tone from the start. It proves that anyone who enters without permission has knowingly ignored your warning.
                            </p>

                            <h2 id="negotiation-at-home" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Handle the Talk: Negotiation from the Gate</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you decide to talk to the agent at the gate, keep it professional and brief.
                                <br />- <strong className="font-bold text-gray-900">Do not apologize:</strong> Apologies are seen as weakness by recovery agents. Stick to the facts.
                                <br />- <strong className="font-bold text-gray-900">"I am in contact with the Bank":</strong> Always say, "I am already in formal communication with the bank's Nodal Officer regarding a resolution. Please talk to your supervisors."
                                <br />- <strong className="font-bold text-gray-900">The Written Record:</strong> If they give you a letter, take it. If they ask you to sign anything, say, "I will review this with my legal advisor and reply via email." Never sign anything on the spot.
                                <br />- <strong className="font-bold text-gray-900">Short Tenure:</strong> A professional visit should not last more than 5-10 minutes. If it stretches longer, say, "I have other commitments now. Please leave."
                            </p>

                            <h2 id="after-the-visit" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Post-Visit Steps: Winning the Paper War</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                What you do *after* the agent leaves is what determines if they will come back.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-8 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>1. The "Visit Protest" Email:</strong> Send an email to the bank's nodal officer immediately. "Your agent visited today at Time X. Here are the violations (no ID, aggressive tone, etc.). I am protesting this visit as harassment."</li>
                                    <li><strong>2. Save the Evidence:</strong> Move any recordings to a secure cloud folder. Label them with the date and the agent's name.</li>
                                    <li><strong>3. Update Your Mediation Team:</strong> If you are working with a firm like CredSettle, send us the details. We will use this visit to push the bank for a better settlement. </li>
                                    <li><strong>4. Check the Bureau:</strong> Sometimes agents file false reports saying "The borrower threatened us." Filing your own protest email first protects your record.</li>
                                </ul>
                            </div>

                            <h2 id="legal-remedies-trespass" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Suing for Trespass: Turning the Tables</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If a bank agent has committed a serious breach, like entering your home without permission, you can sue them.
                                <br />- <strong className="font-bold text-gray-900">Civil Suit for Defamation:</strong> If they shamed you in front of neighbors.
                                <br />- <strong className="font-bold text-gray-900">Suit for Damages:</strong> For any mental agony or health impact on family members.
                                <br />- <strong className="font-bold text-gray-900">Injunction:</strong> You can ask a civil court for a "Permanent Injunction" preventing the bank from sending any private agents to your home. In 2025, courts are very quick to grant such injunctions if there is proof of previous harassment.
                            </p>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Success Stories</h2>
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

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Conclusion: Final Verdict</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We return to the fundamental truth we started with: Your home is sacred. A financial mistake, whether it is an unpaid credit card or a business loan default, does not give anyone the right to breach that sanctity. As we have explored in these 5000+ words, the law is heavily on the side of the borrower regarding home visits.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The <strong className="font-bold text-gray-900">Right to Refuse Entry</strong>, the protection of <strong className="font-bold text-gray-900">Trespassing Laws</strong>, the strict <strong className="font-bold text-gray-900">RBI Contact Timings</strong>, and the power of <strong className="font-bold text-gray-900">Digital Evidence</strong> are your allies. You are not a criminal, and you do not need to hide. By standing at your gate with the knowledge of your rights, you transform from a victim into a professional party in a civil matter.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Do not let the knock on the door fill you with dread. Instead, let it be the moment you demonstrate your informed strength. Take the photos, record the videos, demand the IDs, and keep your family safe inside. At CredSettle, we are committed to ensuring that every borrower in India can face their debt crisis without losing their sense of security. Your home is your kingdom; keep the gates locked, the cameras on, and your rights in focus.
                            </p>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Are Recovery Agents Crossing the Line?</h3>
                                <p className="text-blue-800 mb-6">You don't have to endure abuse. Our legal experts can step in, stop the harassment by citing these RBI mandates, and negotiate a final settlement with your lender. Protect your mental health and reclaim your peace today.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Expert Legal Protection Now
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: This guide is for informational purposes and intended to provide general knowledge about RBI guidelines. It does not constitute formal legal advice. If you are facing physical threats or criminal intimidation, contact your local law enforcement immediately.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Gate Guarded?</h4>
                                <p className="text-sm text-gray-600 mb-6">If agents are visiting your home without ID or after hours, we can stop them legally within 24 hours.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Secure My Home Now
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1 text-left px-1">
                                    <p>✓ Zero-Contact Protection</p>
                                    <p>✓ Stop Office Visits</p>
                                    <p>✓ Trespass Legal Action</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Home Rights Links</h4>
                                <nav className="space-y-3">
                                    <Link href="/rbi-rules-for-recovery-agents" className="block text-sm text-blue-600 hover:underline">RBI Agent Rules</Link>
                                    <Link href="/how-to-stop-recovery-agent-harassment" className="block text-sm text-blue-600 hover:underline">Stop the Bullying</Link>
                                    <Link href="/recovery-agents-threatening-me-what-to-do" className="block text-sm text-blue-600 hover:underline">Emergency Threat Guide</Link>
                                    <Link href="/bank-recovery-harassment-complaint" className="block text-sm text-blue-600 hover:underline">File Your Complaint</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
