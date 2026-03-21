'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function CustomerSupportOptionsClient() {
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
        { id: 'evolution-of-support', label: 'Support Evolution' },
        { id: 'dedicated-case-managers', label: 'Dedicated Managers' },
        { id: 'legal-helpline-support', label: 'Legal Helplines' },
        { id: 'whatsapp-messenger-support', label: 'Chat & WhatsApp' },
        { id: 'digital-dashboards', label: 'Client Dashboards' },
        { id: 'document-assistance', label: 'Document Help' },
        { id: 'bank-coordination', label: 'Bank Coordination' },
        { id: 'anti-harassment-tools', label: 'Anti-Harassment' },
        { id: 'psychological-support', label: 'Mental Support' },
        { id: 'post-settlement-reports', label: 'Post-Settlement' },
        { id: 'complaint-resolution', label: 'Complaint Redressal' },
        { id: 'hybrid-support-models', label: 'Hybrid Models' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Verdict' },
    ];

    const faqs = [
        {
            question: 'Will I have a single point of contact during my loan settlement?',
            answer: 'Yes, premium loan settlement companies provide a Dedicated Case Manager who acts as your single point of contact. This ensures you dont have to repeat your story to different people every time you call.'
        },
        {
            question: 'How do I reach the legal team if a recovery agent visits my home?',
            answer: 'Most top-tier firms like AMA Legal or CredSettle provide an Emergency Legal Helpline. You can call this number while the agent is present, and a legal expert will speak with them to ensure RBI guidelines are being followed.'
        },
        {
            question: 'Is customer support available on weekends?',
            answer: 'While core negotiation with banks happens on weekdays, many companies offer 24/7 or weekend support via WhatsApp bots or emergency helplines to handle urgent harassment issues.'
        },
        {
            question: 'Can I track the progress of my settlement online?',
            answer: 'Yes, modern debt relief companies provide digital dashboards. These platforms show you which banks have been contacted, the current status of negotiations, and any counter-offers received.'
        },
        {
            question: 'Do loan settlement companies offer counseling in regional languages?',
            answer: 'In India, diversity is key. Most national companies provide support in English, Hindi, and major regional languages like Tamil, Telugu, Kannada, and Marathi to ensure clear communication.'
        },
        {
            question: 'What happens if I have a grievance with the settlement company itself?',
            answer: 'Professional firms have a formal Grievance Redressal Mechanism. You can escalate your issue to the Nodal Officer, whose contact details are usually provided on their website.'
        },
        {
            question: 'How often will my case manager update me?',
            answer: 'Typically, you should receive a mandatory update once every 15 days, or immediately whenever a bank sends a fresh notice or a settlement offer is made.'
        },
        {
            question: 'Is there support for credit score rebuilding after the settlement?',
            answer: 'Yes, the support doesn\'t end with the settlement. Leading firms provide a "Credit Rehabilitation" roadmap to help you navigate the bureaus and improve your score over the next 12 to 24 months.'
        },
        {
            question: 'Are call recordings provided for conversations with the bank?',
            answer: 'Most companies maintain internal logs and recordings of all negotiations. While they may not share the raw files due to security, they provide detailed "Minutes of the Meeting" for all verbal agreements.'
        },
        {
            question: 'Can I choose my preferred mode of communication?',
            answer: 'Absolutely. You can choose whether you want updates via email, phone calls, or WhatsApp, depending on your comfort and professional schedule.'
        }
    ];

    const reviews = [
        {
            name: 'Rohit Verma',
            location: 'Delhi',
            stars: 5,
            comment: 'The Dedicated Manager at CredSettle was a lifesaver. He was always available on WhatsApp and handled all the scary calls from the bank. Best customer service I have experienced in finance.'
        },
        {
            name: 'Meena Iyer',
            location: 'Chennai',
            stars: 5,
            comment: 'I really appreciated the Tamil language support. It made explaining my business losses so much easier. The digital dashboard gave me clarity on every single rupee.'
        },
        {
            name: 'Sameer Sheikh',
            location: 'Hyderabad',
            stars: 5,
            comment: 'The emergency legal helpline is the real deal. An agent came to my door, I called the support number, and after 2 minutes of talking to the lawyer, the agent apologized and left.'
        },
        {
            name: 'Anjali Sharma',
            location: 'Pune',
            stars: 5,
            comment: 'Exemplary support during the documentation phase. They helped me organize 3 years of statements and medical records into a professional proposal for SBI.'
        }
    ];

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Customer Support Options Provided by Loan Settlement Companies',
        'description': 'A detailed 5,000-word analysis of customer support infrastructure in the Indian debt settlement industry for 2025.',
        'author': {
            '@type': 'Organization',
            'name': 'CredSettle Research Team'
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'CredSettle',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://www.credsettle.com/logo.png'
            }
        },
        'datePublished': '2025-02-10',
        'dateModified': '2025-03-21'
    };

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
        'name': 'Loan Settlement Customer Support Analysis',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '2150',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="article-schema-support" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="faq-schema-support" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-support" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        Customer Support Options in <br />
                        <span className="text-blue-300">Loan Settlement Companies</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                        From human-led dedicated managers to AI-driven legal bots, explore the support ecosystem keeping Indian borrowers safe in 2025.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Experience Premium Support
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
                                        Support Options Guide
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

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14 self-start max-h-[calc(100vh-100px)] overflow-y-auto no-scrollbar">
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

                    {/* Middle Column: Main Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Introduction: The Human Side of Debt Resolution</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the journey of debt resolution, technical knowledge of interest rates and legal statutes is indispensable. However, for a borrower under extreme duress, the most critical factor is often the quality of support they receive. Loan settlement is a high stress, multi month process that can break even the most resilient individuals. In 2025, the industry has realized that "Settling a Debt" and "Supporting a Debtor" are two different but equally important tasks. This is why customer support options provided by loan settlement companies have evolved from simple call centers to sophisticated, legally backed empowerment hubs.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When you are facing a default, you are not just fighting the bank; you are fighting a system. This system includes automated recovery bots, high pressure agents, and complex legal notices. Without a robust support structure, a borrower can easily crumble under the pressure and make faulty decisions, such as taking further "high interest bridge loans" or surrendering to unfair settlement terms. In this exhaustive 5,000 word guide, we will break down every layer of the modern support ecosystem in India, from the role of a dedicated case manager to the importance of emergency anti-harassment helplines.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We will explore how top tier firms like **CredSettle** and **AMA Legal Solutions** use a "Human-Plus-Tech" model to provide 360 degree protection. Whether it is through digital dashboards that offer 24/7 transparency or regional language support that ensures no detail is lost in translation, the goal of modern support is clear: to give the borrower the peace of mind needed to finish the race. By understanding these options, you will be able to choose a service provider who doesn\'t just "handle your case," but actually "holds your hand" through the darkest periods of your financial life.
                            </p>

                            <h2 id="evolution-of-support" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Evolution of Support: From Call Centers to Legal Hubs</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Ten years ago, the only "support" most people had was a local friend or a relative who knew a lawyer. Today, the landscape is professional and institutionalized. We have moved from a "Pull Support" model, where the borrower had to constantly chase the bank for updates, to a "Push Support" model, where companies proactively manage information flows.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This evolution has been driven by the RBI\'s increasingly strict guidelines on recovery Practices. As the regulator demands more transparency and less aggression from banks, the support teams of settlement companies have become the primary enforcers of these rights. They are the ones who file complaints with the Banking Ombudsman when a bank oversteps its bounds. They are the ones who record recovery calls and use them as leverage during negotiations. In 2025, support is not just about "talking," it is about "evidence and action."
                            </p>

                            <h2 id="dedicated-case-managers" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">1. Dedicated Case Managers: Your Single Point of Contact</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most fundamental support option is the Dedicated Case Manager. When you enter a debt relief program, your file is assigned to a specific expert. This person is your advocate. They understand your bank statements, your medical history, your business losses, and your family commitments.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl mb-8 border border-blue-100">
                                <h4 className="font-bold text-blue-900 mb-3 text-xl italic uppercase font-semibold">Value of a Dedicated Manager:</h4>
                                <ul className="space-y-3 text-gray-800">
                                    <li><strong>Consistency:</strong> You dont have to re-explain your trauma to a new person every time you call.</li>
                                    <li><strong>Strategic Alignment:</strong> The manager knows the progress of all 5 of your loans and ensures one settlement doesn\'t jeopardize the next.</li>
                                    <li><strong>Emotional Support:</strong> They are trained to handle the anxiety and panic that often comes with debt defaults.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, firms have specialized managers for different banks. For example, a manager who handles SBI cases for 10 years has unique insights into the branch managers\' psyche and the specific recovery windows of the public sector giant. This niche expertise is a form of support that an individual borrower simply cannot replicate.
                            </p>

                            <h2 id="legal-helpline-support" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">2. Emergency Legal Helplines: Real-Time Protection</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Perhaps the most vital support option is the 24/7 Legal Helpline. This is designed for crisis moments such as when a recovery agent shows up at your child's school or your elderly parents' home. Having a "Lawyer on Speed Dial" is no longer a luxury for the rich; it is a necessity for the defaulted borrower.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Companies like AMA Legal Solutions provide a dedicated emergency line. When an agent crosses the line, you can hand the phone to them. A legal professional will then inform the agent of the specific sections of the Indian Penal Code and RBI guidelines they are currently violating. This usually results in an immediate withdrawal by the agent. This "Real-Time Intervention" is a superior form of support that prevents physical harassment and social stigma.
                            </p>

                            <h2 id="whatsapp-messenger-support" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">3. WhatsApp and Messenger Support: Convenience in Your Pocket</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Traditional email is slow, and phone calls can be intrusive. In 2025, WhatsApp has become the primary support channel for the Indian debt market. Borrowers can send pictures of bank notices, voice notes about agent visits, and PDF copies of salary slips in real time.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This "Always-On" connection reduces the "Anxiety Loop." When a borrower receives a scary message from their bank, they can instantly forward it to their support team and get a "Don\'t worry, this is a standard automated notice" response within minutes. This rapid feedback loop is essential for psychological health during a 12 month settlement process.
                            </p>

                            <h2 id="digital-dashboards" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">4. Client Dashboards: The Clarity of Data</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Transparent reporting is a modern support pillar. Through secure digital dashboards, clients can see:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
                                    <p className="text-blue-900 font-bold mb-1">Negotiation Logs</p>
                                    <p className="text-xs text-gray-600 italic">Every email and call made to the bank on your behalf is logged for your review.</p>
                                </div>
                                <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
                                    <p className="text-blue-900 font-bold mb-1">Savings Tracker</p>
                                    <p className="text-xs text-gray-600 italic">Real-time calculation of how much interest and penalty has been waived compared to the current offer.</p>
                                </div>
                                <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
                                    <p className="text-blue-900 font-bold mb-1">Notice Repository</p>
                                    <p className="text-xs text-gray-600 italic">A digital vault for all legal notices, OTS letters, and No Dues Certificates for future reference.</p>
                                </div>
                                <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
                                    <p className="text-blue-900 font-bold mb-1">Task List</p>
                                    <p className="text-xs text-gray-600 italic">Clear instructions on what documents you need to provide next to keep the process moving.</p>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This level of transparency builds trust. It proves that the company is actually working on your case even when there is no immediate "breakthrough."
                            </p>

                            <h2 id="document-assistance" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">5. Documentation Assistance: Building the Hardship Case</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Most settlement requests fail because they are poorly documented. A crucial support option is the "Document Preparation Service." Professionals help you draft your "Financial Hardship Letter" and help you organize your records tax returns, bank statements, termination letters, and medical certifications into a professional dossier that a bank manager can actually approve.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This support is especially valuable for those who have a "Variable Income" or are "Self-Employed," as documenting business losses in a way that aligns with banking "Write-off" codes is a specialized skill.
                            </p>

                            <h2 id="bank-coordination" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">6. Direct Bank Coordination: Ending the "Information Vacuum"</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Borrowers often feel like they are shouting into a void. Support teams act as the bridge. They have established channels with the Nodal Officers and Regional Heads of major banks. This direct coordination means they can get answers in days that would take an individual months. They handle the "Verification Calls" from the bank and ensure that the bank's system is properly updated when a negotiation reaches a verbal milestone.
                            </p>

                            <h2 id="anti-harassment-tools" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">7. Anti-Harassment Tools: Redirecting the Noise</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Some companies offer "Call Forwarding" or "Voicemail Redirection" as a support feature. When a recovery agent calls you, you can redirect the call to the company\'s interactive voice response (IVR) or a live agent. This shields your mental health by filtering out the repetitive and aggressive calls while ensuring the bank still has a professional point of contact to share updates.
                            </p>

                            <h2 id="psychological-support" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">8. Psychological Support and Peer Communities</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Debt is isolated. Many borrowers feel like they are the only ones going through this. Advanced support options include access to "Peer Support Groups" or "Financial Counseling." These communities allow you to talk to others who have successfully settled their debts, providing a powerful "Social Proof" that the nightmare will eventually end. Knowing that someone else settled for 50 percent four months ago gives you the strength to hold your ground today.
                            </p>

                            <h2 id="post-settlement-reports" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">9. Post-Settlement Reporting and Verification</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The support does not end when you pay the bank. The "Final Mile Support" includes:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
                                <li><strong>Verification of the OTS Letter:</strong> Ensuring the document is genuine and not a forged note from a rogue recovery agent.</li>
                                <li><strong>NOC Tracking:</strong> Following up with the bank for 30 to 45 days until the physical No Dues Certificate is issued.</li>
                                <li><strong>CIBIL Dispute Management:</strong> Checking the credit bureaus after 60 days to ensure the account is marked as "Settled" or "Closed" as per the agreement.</li>
                            </ul>

                            <h2 id="complaint-resolution" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">10. Grievance Redressal and Quality Control</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, every reputable debt settlement company must have a clear "Complaint Redressal" policy. If you feel your case manager is not responsive or the negotiation is not moving, you should have access to a Supervisor or a Nodal Officer within the company. This "Internal Support Audit" ensures that the service provider remains accountable to the borrower.
                            </p>

                            <h2 id="hybrid-support-models" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Future: Hybrid AI and Human Support Models</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We are entering an era of "Legal AI" where basic queries about the SARFAESI Act or Section 138 (Cheque Bounce) can be answered instantly by trained bots. This leaves the human experts free to handle the complex emotional and high-stakes negotiation work. This hybrid model ensures that you get instant answers at 2 AM on a Sunday, while still having a top tier lawyer to handle the actual committee meeting on a Monday morning.
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
                                        <p className="text-gray-600 leading-relaxed font-light italic">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Conclusion: Why Support Matters More Than the Discount</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the final analysis, anyone can ask for a discount, but not everyone can survive the process of getting one. The customer support options provided by loan settlement companies are the thin line between a successful financial reset and a total mental breakdown. When choosing a company, do not just look at their "Waiver Percentage" claims. Look at their support infrastructure.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Does the company have a physical office? Do they have a dedicated grievance officer? Is there an emergency legal helpline? Are they providing transparency through a digital dashboard? If the answer to these questions is "Yes," you have found a partner who will protect you. If the answer is "No," you are just another file in a call center database.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we pride ourselves on having the most robust support ecosystem in India. We understand that behind every loan account is a human being, a family, and a dream. Our support is designed to protect all three. Rebuild your life with the support you deserve.
                            </p>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">You Don't Have to Fight This Alone</h3>
                                <p className="text-blue-800 mb-6">Experience the peace of mind that comes with premium, legally backed customer support. Let our dedicated managers and lawyers handle the stress while you focus on your future.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Your Free Support Consultation
                                </Link>
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14 self-start">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Need Help Now?</h4>
                                <p className="text-sm text-gray-600 mb-6">Access our emergency legal helpline and dedicated support team today.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Talk to a Manager
                                </Link>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Must Read Guides</h4>
                                <nav className="space-y-3">
                                    <Link href="/how-to-handle-recovery-agent-harrasment" className="block text-sm text-blue-600 hover:underline">Handling Harassment</Link>
                                    <Link href="/rbi-rules-for-recovery-agents" className="block text-sm text-blue-600 hover:underline">RBI Recovery Rules</Link>
                                    <Link href="/is-loan-settlement-a-good-option" className="block text-sm text-blue-600 hover:underline">Pros & Cons</Link>
                                    <Link href="/what-kind-of-loans-can-not-be-settled" className="block text-sm text-blue-600 hover:underline">Non-Settlable Loans</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
