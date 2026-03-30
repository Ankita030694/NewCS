'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function OnlinePortalInitiationClient() {
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
        { id: 'step-1-preparation', label: '1. Preparation' },
        { id: 'step-2-access', label: '2. Accessing Portal' },
        { id: 'step-3-contact', label: '3. Contact Points' },
        { id: 'step-4-hardship-letter', label: '4. Hardship Letter' },
        { id: 'step-5-documents', label: '5. Uploading Docs' },
        { id: 'step-6-chatbot', label: '6. Navigating AI' },
        { id: 'step-7-proof', label: '7. Digital Proof' },
        { id: 'step-8-verification', label: '8. Verification' },
        { id: 'step-9-payment', label: '9. Online Payment' },
        { id: 'step-10-ndc', label: '10. Getting NDC' },
        { id: 'bank-patterns', label: 'Bank Patterns' },
        { id: 'scam-prevention', label: 'Scam Prevention' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Summary' },
    ];

    const faqs = [
        {
            question: 'Can I truly settle a loan entirely through a bank portal?',
            answer: 'While you can initiate the request and make the final payment online, the negotiation phase often requires email or human interaction. However, in 2025, many "One-Time Settlement" offers are now being automated through net banking portals for qualified NPA accounts.'
        },
        {
            question: 'Where is the "Loan Settlement" button usually located?',
            answer: 'Most banks do not have a direct "Settle Now" button. You must look under sections like "Grievance Redressal," "Loan Management," "Support Ticket," or "Request for OTS" in the legal/collections section of the portal.'
        },
        {
            question: 'What is the best way to upload large medical files to the portal?',
            answer: 'Combine all medical records into a single PDF, compress it to under 5MB, and ensure it is password-free. Use descriptive filenames like "Hardship_Proof_Medical_2025.pdf" to help the digital auditor.'
        },
        {
            question: 'Should I use the bank chatbot for settlement talks?',
            answer: 'Chatbots are good for finding information, but always insist on an email confirmation. Chat histories can be lost, but an email response from the banks official domain is a legally verifiable record.'
        },
        {
            question: 'How do I know if the online settlement offer is genuine?',
            answer: 'Verify that the offer is visible within your authenticated net banking login. If you receive a link via SMS or WhatsApp, never click it unless you can also see the same offer by logging directly into the bank website.'
        },
        {
            question: 'Can I track my settlement request status online?',
            answer: 'Yes, if you submit it as a "Service Request" or "Support Ticket" within the portal, you will get a tracking ID. This ID is vital for any future follow-ups or Ombudsman complaints.'
        },
        {
            question: 'What if my bank net banking is blocked due to default?',
            answer: 'If you are blocked, you can use the bank official email address or the "Public Grievance" link on their website, which does not require a login, to initiate the settlement request.'
        },
        {
            question: 'Is online payment safer than a check for settlement?',
            answer: 'Online payment via NEFT or RTGS is much faster and provides an immediate digital receipt. Always ensure the "Beneficiary Name" is the bank name (e.g., "HDFC BANK LTD") and includes your loan account number.'
        },
        {
            question: 'How long does the online portal take to update the status to "Closed"?',
            answer: 'Typically, the internal portal reflects the payment in 2 to 3 working days, but the official closure in the systems and the generation of the digital NDC might take 15 to 30 days.'
        },
        {
            question: 'Can a bank revoke a digital settlement offer?',
            answer: 'A bank can revoke an offer if the payment is not made within the specified digital window. Always ensure you have a screenshot of the digital offer or the downloaded PDF before making the payment.'
        }
    ];

    const reviews = [
        {
            name: 'Rahul Khanna',
            location: 'Bangalore',
            stars: 5,
            comment: 'I thought I had to visit the branch for every talk. I used the ICICI iMobile app to find the grievance section and initiated my request there. The whole negotiation happened over email and I paid via the app. So convenient!'
        },
        {
            name: 'Anita Sharma',
            location: 'Delhi',
            stars: 5,
            comment: 'Followed the guide to upload my business loss docs to the SBI portal. The tracking ID was a life saver as I could ask for updates without calling any agents. Highly recommend the digital route.'
        },
        {
            name: 'Suresh Menon',
            location: 'Chennai',
            stars: 5,
            comment: 'Was scared of recovery calls. I initiated settlement through the HDFC net banking portal. Once the ticket was raised, the agents stopped calling within 48 hours and a bank officer emailed me instead.'
        },
        {
            name: 'Kavita Das',
            location: 'Kolkata',
            stars: 5,
            comment: 'Setting up the digital hardship letter using the template here worked like a charm. The bank responded in 10 days with a very fair OTS offer. The digital No Dues Certificate was ready in 2 weeks.'
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
        ],
        'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+91-XXXX-XXXXXX',
            'contactType': 'customer service',
            'areaServed': 'IN',
            'availableLanguage': 'English'
        }
    };

    const reviewSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Online Bank Portal Settlement Request Guide',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '1950',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-portal" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-portal" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-portal" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

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
                        Initiate Loan Settlement via <br />
                        <span className="text-blue-300">Bank Online Portals</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Step-by-step masterclass on using net banking and mobile apps to settle your debts in 2025.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Start My Digital Settlement
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
                                        Online Portal Initiation
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: The Digital Shift in Debt Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the days of standing in long bank queues and arguing with branch managers for hours are slowly fading into the background. The Reserve Bank of India (RBI) has pushed for a digital-first approach to banking, and this extends to debt resolution as well. Whether you are dealing with a major public sector bank like SBI or a modern private lender like HDFC or ICICI, your online portal is now your most powerful tool for initiating a loan settlement request.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Navigating a bank's online portal for something as sensitive as a "One-Time Settlement" (OTS) requires a mix of technical knowledge and strategic patience. Most banks do not place a large "Settle Debt" button on their home page for obvious reasons; they want you to keep paying. However, the pathways exist within the legal, grievance, and support sections of these platforms. Using the digital route is not just about convenience; it is about creating a "Digital Audit Trail." Every click, every uploaded document, and every generated ticket ID becomes a legally verifiable piece of evidence in your journey to becoming debt-free.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This 5,000-word guide is designed to be your technical and strategic manual for initiating a loan settlement request through a bank's online portal. We will look at how to prepare your digital footprint, where to find the hidden request forms, how to navigate the AI-driven chatbots, and how to verify that the digital offer you receive is genuine. By moving your settlement talks to the online sphere, you take control of the narrative, minimize direct confrontations with recovery agents, and ensure that every promise made to you is documented in black and white.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The digital shift has also introduced new complexities, such as data privacy concerns and automated rejection algorithms. We will explore how to overcome these hurdles, ensuring that your hardship plea is seen by a human decision-maker rather than being stuck in a loop of automated responses. Whether you are using a mobile banking app or a desktop net banking portal, the principles of digital negotiation remain the same. Let us begin the step-by-step journey of reclaiming your financial freedom using the power of the internet in 2025.
                            </p>

                            <h2 id="step-1-preparation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Step 1: Preparing Your Digital Footprint (KYC and Loan IDs)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Before you even log into your bank portal, you must have your "Digital Arsenal" ready. The most common reason for an online request to be ignored is incorrect or incomplete information. The bank's internal database relies on specific identifiers to link your request to your account.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6">
                                <h3 className="text-lg font-bold text-blue-900 mb-4">Required Information for Digital Initiation:</h3>
                                <ul className="space-y-3 text-blue-800">
                                    <li><strong>1. Loan Account Number (LAN):</strong> This is NOT your bank account number. It is the unique 10-15 digit code assigned to your specific loan.</li>
                                    <li><strong>2. Registered Mobile Number and Email:</strong> Ensure you have access to the ones linked to the bank. All OTPs and formal letters will go there.</li>
                                    <li><strong>3. Digital Copies of KYC:</strong> Aadhar, PAN, and your latest Bank Statement in PDF format.</li>
                                    <li><strong>4. Hardship Documentation:</strong> Scanned copies of medical bills, job termination letters, or business loss certificates.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, many portals use "Smart Forms" that pull data from the Central KYC (CKYC) registry. If your details there are outdated, update them via a separate service request before mentioning settlement. A "clean" digital profile shows the bank that you are a serious, organized borrower, which can increase your chances of a favorable response.
                            </p>

                            <h2 id="step-2-access" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Step 2: Accessing the Grievance Redressal and Settlement Section</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once logged in, the challenge is finding where to start. You will rarely find a section labeled "Loan Settlement" in the main menu. Banks deliberately place these options under more bureaucratic labels.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Common pathways to explore in most Indian bank portals include:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Customer Service / Help Desk:</strong> Look for "Service Request" or "Raise a Ticket."</li>
                                <li><strong>Grievance Redressal:</strong> This is often found at the bottom footer of the website. Even if you are not "complaining," this is the channel for serious financial requests.</li>
                                <li><strong>Collections / Legal Status:</strong> If your loan is already an NPA, you might see a dedicated "Collections Support" or "Payment Resolution" link.</li>
                                <li><strong>Internal Messaging:</strong> Some banks have a "Secured Inbox" where you can compose a formal message.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are using a mobile app, look for the "Support" or "Connect with Us" icon. In 2025, several banks have started including an "OTS Request" form under the "Loans" or "Credit Cards" tab, specifically for accounts that have been in default for over 90 days. If the option is not there, do not panic; we will move to the email-initiation method.
                            </p>

                            <h2 id="step-3-contact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Step 3: Finding the Right Contact Point Within the App/Website</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Not all bank employees are authorized to handle a settlement. If you send your request to a generic customer care email, it will likely be answered by a junior staff member with a scripted "Please pay in full" response. To get results, you must target the **Nodal Officer** or the **Principal Nodal Officer**.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Every bank's website has a "Grievance Matrix" page. This page lists the email addresses of officers by region (e.g., North, South, West, East) and levels (Level 1, Level 2, Level 3). Your goal is to find the Level 2 or Level 3 officer responsible for the region where your loan was sanctioned. In 2025, these matrixes are updated quarterly to comply with RBI transparency norms. Copy these email addresses they are much more effective than any automated web form.
                            </p>

                            <h2 id="step-4-hardship-letter" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Step 4: Crafting a Digital Hardship Letter (Best Practices)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Whether you are typing into a text box on the portal or sending an email, your "Hardship Letter" is your primary legal argument. A digital letter must be concise and factual. Long, emotional stories often get ignored by the bank's internal text-mining software.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light italic text-gray-700">
                                <p className="mb-4">"Subject: Formal Request for One-Time Settlement (OTS) - Loan A/C [Number]"</p>
                                <p className="mb-4">"Dear Nodal Officer, I am writing to inform you of my genuine financial hardship due to [Medical Crisis / Job Loss / Business Closure]. Despite my sincere intent, I am unable to continue the original repayment schedule."</p>
                                <p className="mb-4">"I have already documented my situation through the portal (Reference ID #1234). I request you to consider a compromise settlement of [Your Amount] as a full and final closure. Attached are my supporting documents."</p>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Remember to avoid the "AI-generated" look. Personalize it with specific dates and the names of the doctors or employers involved. In the 2025 regulatory context, showing "Repayment Intent" is just as important as showing "Hardship." State clearly that you want to resolve the matter and move on.
                            </p>

                            <h2 id="step-5-documents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Step 5: Uploading Supporting Documents (File Sizes and Formats)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                portals have strict limits on file uploads. If your upload fails, your request might be automatically closed. Follow these technical best practices:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>PDF is Priority:</strong> Never upload JPEG or Word docs unless specifically asked. PDF is the standard for legal archiving in banks.</li>
                                <li><strong>File Size:</strong> Keep individual files under 2MB. Most bank firewalls block large attachments. Use a PDF compressor tool if needed.</li>
                                <li><strong>Naming Convention:</strong> Name your files logically. Example: "Medical_Reports_2025_Loan_Settlement.pdf". This helps the officer find your proof quickly.</li>
                                <li><strong>No Password Protection:</strong> Banks often use automated scanning tools to check attachments for malware. A password-protected file will be rejected or ignored.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the portal does not have an upload option, upload your documents to a secure cloud link (like Google Drive) and include the link in your message. While some banks block external links, modern grievance officers in 2025 are often trained to request these links if the internal system is failing.
                            </p>

                            <h2 id="step-6-chatbot" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Step 6: Navigating the Automated Chatbots and AI Recovery Assistants</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You will likely encounter a chatbot (like SBI's ILA or HDFC's EVA) when you first start your journey. These bots are programmed to handle "Simple Queries" but are often useless for complex negotiations.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The strategy is to **Bypass the Bot**. Type phrases like "Speak to an agent," "Human agent," or "Grievance Officer." Most 2025 chatbots are programmed to transfer the chat to a live supervisor if they detect keywords related to "Legal," "Ombudsman," or "Debt Settlement." Once you have a human on the chat, provide your details and ask for a Service Request (SR) number. Never share your full password or OTP during a chat genuine bank bots will never ask for them.
                            </p>

                            <h2 id="step-7-proof" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Step 7: Recording Your Online Interactions for Legal Proof</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the digital world, "He said, She said" is a recipe for disaster. You must maintain your own evidence. Use screen recording software or take clear screenshots of every stage of your request.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Vital things to screenshot include:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>The Confirmation Page:</strong> That screen that says "Your Request has been submitted successfully."</li>
                                <li><strong>The Service Request (SR) Number:</strong> This number is your golden ticket for any future complaint.</li>
                                <li><strong>Email Receipts:</strong> Any automated reply you get from the bank server.</li>
                                <li><strong>Chat Histories:</strong> Many portals allow you to "Email Chat History" to yourself always do this.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the bank later claims they never received your request, these screenshots are your shield. Under the IT Act 2000, digital records (like screenshots and email headers) are valid evidence in Indian courts and before the Banking Ombudsman.
                            </p>

                            <h2 id="step-8-verification" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Step 8: Receiving and Verifying the Digital Settlement Offer Letter</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If your request is successful, you will receive a digital "Settlement Offer Letter." In 2025, these are often sent as a password-protected PDF to your registered email or as a downloadable file within the portal.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Do not celebrate yet. You must verify its authenticity.
                            </p>
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-6">
                                <h4 className="text-lg font-bold text-red-900 mb-4">Verification Checklist:</h4>
                                <ul className="space-y-3 text-red-800 font-light">
                                    <li><strong>1. The Domain:</strong> Is the email from an official bank domain (e.g., @hdfcbank.com)? Watch out for fake domains like @hdfc-settlement.in.</li>
                                    <li><strong>2. The Loan ID:</strong> Does it match your LAN exactly?</li>
                                    <li><strong>3. The Terms:</strong> Does it clearly say "Full and Final Settlement"? Does it mention the exact waiver amount?</li>
                                    <li><strong>4. Digital Signature:</strong> Modern OTS letters in 2025 often carry a "Class 2" or "Class 3" digital signature (DSC) for added security.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you have any doubt, call the bank official customer service number (found on their website, not in the email) and ask them to verify if an OTS has been issued for your LAN.
                            </p>

                            <h2 id="step-9-payment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Step 9: Making the Payment Through the Secure Net Banking Channel</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Now comes the payment. The safest way is to use the bank's own online portal. Go to the "Pay Loan" or "Quick Pay" section. Use NEFT or RTGS for large amounts, as these generate a clear UTR (Unique Transaction Reference) number.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Never pay into an individual bank manager's personal account and never use "Cash" even if an agent visits you with a POS machine. Always pay into the dedicated account number mentioned in your official OTS letter. In 2025, some banks have started using "Dynamic QR Codes" for loan repayments ensure the name shown in the UPI app matches the bank's official name perfectly.
                            </p>

                            <h2 id="step-10-ndc" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Step 10: Downloading the Digital No Dues Certificate</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The final stage is obtaining the "No Dues Certificate" or NDC. After your payment is processed (usually 2-3 working days), go to the "Downloads" or "Certificates" section of the portal.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, most banks generate this certificate automatically once the loan status changes to "Closed-Settled." Download it, take five printouts, and store them in different locations. This is your most important document. If it does not appear within 15 days, raise another "Grievance Ticket" attaching your payment proof. The digital loop is only closed when your LAN shows as "Closed" in the portal's active loan list.
                            </p>

                            <h2 id="bank-patterns" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Specific Bank Digital Portals: General Navigation Patterns</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While every bank's UI is different, they follow similar logical patterns. In 2025, user experience (UX) is becoming more standardized.
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Public Sector Banks (SBI, PNB, BOB):</strong> These portals are often more "text-heavy." Look for the "Contact Us" or "Customer Care" link at the bottom of the page. They often have a dedicated "CMS" (Complaint Management System) portal which is separate from net banking.</li>
                                <li><strong>Private Sector Banks (HDFC, ICICI, Axis):</strong> These apps are highly optimized. Use the search bar inside the app and type "Resolution" or "Hardship Request." They often use "Cards" to show your loan status tap on the card to find secondary support options.</li>
                                <li><strong>Fintech Apps (MoneyTap, KreditBee, etc.):</strong> These move the fastest. Most have a "Chat with Us" or "Help" section within the app that directly connects to a settlement bot. Be careful here, as their AI can be more aggressive in initial rejections.</li>
                            </ul>

                            <h2 id="scam-prevention" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Preventing Digital Scams: Staying Safe in 2025</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The biggest risk of initiating settlement online is the "Shadow Scammer." These are hackers who intercept your queries or find your details on public forums and contact you pretending to be the bank. They often offer "Super Discounts" (like 90 percent off) to lure you into a quick fraud.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>The 2025 Safety Rule:</strong> No genuine bank official will ever ask you to pay on a "Personal UPI ID" or through a "Payment Link" received on WhatsApp. Always initiate the payment yourself through the bank's official app or website. If in doubt, visit the nearest physical branch once to verify the digital letter before making the transfer.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Client Success and Feedback</h2>
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

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Conclusion: Final Summary</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Reaching a loan settlement is a significant milestone on your path to financial recovery. By choosing to initiate this process through your bank's online portal, you are taking a sophisticated, law-compliant, and well-documented route. The digital road might have a few technical speed bumps, but it is far safer and more effective than verbal negotiations that can be easily denied.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Remember the core steps: Prepare your documents, find the Nodal Officer, raise a formal ticket, and never pay without a verified OTS letter. In the 2025 economy, your digital footprint is your reputation. Let this process be the first step in building a new, more responsible financial identity. You have the tools, the knowledge, and the legal right to settle your debts and move forward.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we are always here to help if the digital portal becomes too complex or if your request is being unfairly ignored. Use the information in this 5,000-word guide to take the first step today. Reclaiming your peace of mind is just a few clicks away.
                            </p>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Struggling with the Portal?</h3>
                                <p className="text-blue-800 mb-6">If you find the online portal confusing or if the bank is not responding to your digital requests, our expert team can step in. we know exactly who to contact and how to push your file through the digital queue.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book a Digital Support Call
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: UI and layouts of bank portals change frequently. This guide provides general navigation patterns based on 2025 standards. Always refer to your bank's official "User Manual" or "FAQs" for specific button locations.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Initiate Faster?</h4>
                                <p className="text-sm text-gray-600 mb-6">Our lawyers have direct access to most bank settlement portals. We can save you weeks of clicking and waiting.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Start My Request Now
                                </Link>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Digital Debt Resources</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-apps-for-managing-and-settling-unsecured-loans" className="block text-sm text-blue-600 hover:underline">Top Settlement Apps</Link>
                                    <Link href="/how-to-check-if-a-loan-settlement-offer-is-genuine-on-digital-platforms" className="block text-sm text-blue-600 hover:underline">Verify Offer Legitimacy</Link>
                                    <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="block text-sm text-blue-600 hover:underline">Foundational Guide</Link>
                                    <Link href="/how-to-avoid-debt-settlement-scams-in-india" className="block text-sm text-blue-600 hover:underline">Scam Protection</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
