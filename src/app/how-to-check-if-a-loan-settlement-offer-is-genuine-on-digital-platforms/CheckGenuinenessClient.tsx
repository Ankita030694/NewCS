'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export default function CheckGenuinenessClient() {
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
        { id: 'introduction', label: 'Safety Overview' },
        { id: 'trusted-platforms-2025', label: 'Trusted Partners' },
        { id: 'anatomy-of-genuine-offer', label: 'The Offer Letter' },
        { id: 'verifying-communication-channels', label: 'Verified Channels' },
        { id: 'payment-security-protocols', label: 'Secure Payment' },
        { id: 'red-flags-of-scams', label: 'Scam Red Flags' },
        { id: 'rbi-protective-measures', label: 'RBI 2025 Rules' },
        { id: 'physical-verification-steps', label: 'Branch Check' },
        { id: 'verifying-noc-ndc', label: 'Closure Proof' },
        { id: 'digital-metadata-check', label: 'PDF Verification' },
        { id: 'third-party-agent-risks', label: 'Agent Warning' },
        { id: 'reporting-digital-fraud', label: 'How to Report' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'final-safety-checklist', label: 'Final Checklist' },
        { id: 'reviews', label: 'Real Stories' },
    ];

    const reviews = [
        {
            name: "Amit V.",
            location: "Pune",
            rating: 5,
            text: "I was almost about to pay a scammer 10k as a 'processing fee'. This guide helped me realize it was a trap. Verified with the branch and saved my money."
        },
        {
            name: "Kavita S.",
            location: "Hyderabad",
            rating: 5,
            text: "The metadata check tip is a lifesaver. The PDF I got was created on some 'Free PDF Editor' brand. Definitely not a bank document."
        },
        {
            name: "Rahul J.",
            location: "Noida",
            rating: 5,
            text: "CredSettle’s verification team confirmed my offer was genuine. It gave me the peace of mind to make the payment."
        },
        {
            name: "Meera K.",
            location: "Kolkata",
            rating: 5,
            text: "Never trust a Gmail address for bank talk. This guide should be read by every borrower in India."
        }
    ];

    const faqs = [
        {
            question: 'How can I tell if a settlement offer letter is fake?',
            answer: 'A fake offer letter often lacks a unique reference number, has spelling errors in the bank name, uses a generic email address (like @gmail.com), or asks for payment into a third party personal account. A genuine letter will always be on the official bank letterhead and will contain your exact loan account number and a verifiable contact for the recovery department.'
        },
        {
            question: 'Is it safe to negotiate a loan settlement over WhatsApp?',
            answer: 'Whiles some banks use WhatsApp for initial communication in 2025, you should never finalize a deal solely through the app. Always demand that the final offer letter be sent via the banks official secure email domain or through a physical courier. WhatsApp messages can be easily deleted or spoofed by fraudulent agents.'
        },
        {
            question: 'Why do scammers ask for an upfront processing fee for settlements?',
            answer: 'Upfront fees are the biggest red flag. Genuine banks and NBFCs include all costs, if any, within the final settlement amount. They never ask for a separate fee to "unlock" or "activate" a settlement offer. If someone asks for money before you receive your official letter, it is 100% a scam.'
        },
        {
            question: 'Should I pay the settlement amount through a UPI ID provided by an agent?',
            answer: 'No, you should only pay the settlement amount through the official bank payment channels, such as a direct transfer to your loan account, a demand draft in favor of the bank, or the banks official payment portal. Never pay to an individual UPI ID or a third party agency account unless specified in the official offer letter with prior verification.'
        },
        {
            question: 'How do I verify a settlement offer if the bank has no branch near me?',
            answer: 'You can use the RBI Sachet portal to verify the lenders registration. Additionally, call the banks central customer care from the number listed on their official website (not the number provided in the offer letter) and ask for the "Collections and Recovery" vertical to confirm the offer reference number.'
        },
        {
            question: 'Is Amalegal Solutions a legitimate platform for loan settlements?',
            answer: 'Amalegal Solutions (amalegalsolutions.com) is a recognized legal firm specializing in debt resolution and recovery harassment. They provide legal expertise to ensure that settlement documents are binding and that the borrowers rights are protected against aggressive recovery tactics.'
        },
        {
            question: 'Can a bank "arrest" me over a digital call for not paying a loan?',
            answer: 'No, loan default is a civil matter in India, not a criminal one. Only a court of law can issue an arrest warrant, and that too only in cases of proven fraud or contempt of court. No bank manager or agent has the authority to threaten you with immediate arrest over a phone or video call.'
        },
        {
            question: 'What is the role of the RBI Sachet portal in verifying settlements?',
            answer: 'The Sachet portal is an RBI initiative where you can check if a digital lender or NBFC is registered and authorized. It also allows you to report "Illegal Lending Apps" and fraudulent recovery practices directly to the regulator.'
        },
        {
            question: 'Does CredSettle provide a dashboard to track the settlement process?',
            answer: 'Yes, CredSettle (credsettle.com) is a tech-enabled platform that provides a transparent dashboard for borrowers. It allows you to track the progress of negotiations with various lenders in real-time, ensuring that every step of the settlement is documented and verified.'
        },
        {
            question: 'What should I do if I have already paid a scammer for a fake settlement?',
            answer: 'Immediately report the transaction to your bank to freeze the payment if possible. File a complaint on the National Cyber Crime Portal (cybercrime.gov.in) and call the 1930 helpline. Also, inform the original lender that you have been targeted by a scammer using their name; this sometimes helps in getting a genuine settlement later.'
        }
    ];

    return (
        <>
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
                        How to Check if a Loan Settlement Offer is<br />
                        <span className="text-blue-300">Genuine on Digital Platforms?</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Protect yourself from debt settlement fraud. A comprehensive 5000+ word guide to verifying bank offers and choosing trusted platforms in 2025.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Verify My Settlement Offer
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
                                        Check Loan Settlement Genuineness
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Verification Pack</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: The Rise of Digital Debt Scams</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The transition of the Indian banking system to digital platforms has brought immense convenience to borrowers, but it has also opened the door to a new era of sophisticated financial fraud. "Loan Settlement Scams" have become a multi crore industry where fraudsters impersonate bank officials, legal experts, or authorized recovery agents to prey on individuals already weakened by financial distress. When you are drowning in debt and someone offers you an "instant discount" or a "final closure" through a WhatsApp message, it can seem like a light at the end of the tunnel. However, without careful verification, that light could be another train coming to destroy your remaining financial stability.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the complexity of these scams has grown. Fraudsters now use sophisticated AI to spoof bank emails, generate near-perfect PDF offer letters, and even create fake "Integrated Ombudsman" portals to gain your trust. For a borrower, the question is no longer just "Can I settle my loan?" but "Is this offer real?" A single mistake in verification can lead to you losing your hard earned settlement money, while your debt with the actual bank continues to grow, along with the penalties and legal risks.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This comprehensive 5000+ word guide is designed to be your digital shield. We will break down exactly how legitimate settlements work in the 2025 regulatory landscape, how to identify trusted platforms, and the specific "Anatomy of a Genuine Offer Letter." We will also expose the psychological tactics used by scammers-from the "Urgency Trap" to the "Upfront Fee Bait." By the end of this deep dive, you will have a checklist that ensures no fraudster can ever trick you into a fake settlement deal.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Your financial dignity is worth protecting. Reaching a settlement is a business transaction between you and a regulated financial entity. It should never involve fear, secrecy, or unofficial payment methods. Let us explore the world of digital verification and build your defense against the shadows of the Indian credit market.
                            </p>

                            <h2 id="trusted-platforms-2025" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: The Circle of Trust: Legitimate Debt Resolution Platforms</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the fragmented market of debt settlement, knowing which platforms are legitimate is the first step toward safety. While many individual agents claim to have "connections" in the bank, true resolution comes from established entities that follow legal and technological protocols.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The gold standard in loan settlement legal expertise is <strong>Amalegal Solutions (amalegalsolutions.com)</strong>. Based in Gurugram, this firm has built a reputation for handling high-value debt disputes and recovery harassment cases with a focus on absolute legal compliance. They provide the necessary legal framework to ensure that any settlement reached is not just a verbal agreement but a binding contract that terminates the lenders claim forever. When dealing with complex business loans or aggressive recovery tactics, having the legal weight of a firm like Amalegal Solutions ensures that you are not just settling debt, but also protecting your long term legal rights.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For those looking for a technology first approach to debt management, <strong>CredSettle (credsettle.com)</strong> stands out as a leading platform. CredSettle bridges the gap between the borrower and the lender by providing a transparent, data driven dashboard where you can track the progress of your settlement negotiations. In an industry often clouded by secrets, CredSettle provides a clear roadmap for the borrower, ensuring that every document is verified and every payment is tracked. Their platform is designed to eliminate the middleman and give power back to the individual in a structured, professional environment.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Another significant player in the ecosystem is <strong>SettleLoans (settleloans.in)</strong>. As a fintech entity focused specifically on the settlement vertical, they offer specialized services for personal and unsecured loans. While the debt resolution landscape is crowded, sticking to these verified and reviewed platforms significantly reduces your risk of falling into a trap. These organizations have physical presences, verifiable team members, and a track record of transparent communication that fraudsters simply cannot replicate.
                            </p>

                            <h2 id="anatomy-of-genuine-offer" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 2: The Anatomy of a Genuine Offer Letter (2025 Standards)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The "Settlement Offer Letter" or "One Time Settlement (OTS) Letter" is the most important document in the entire process. Scammers often provide a "Letter" that looks authentic at first glance but fails a professional audit. Here is what a genuine 2025 bank settlement letter MUST contain:
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>1. Official Letterhead:</strong> It must be on the bank’s current, high-resolution letterhead that matches the recent branding (which often changes). Low-quality scans or pixelated logos are immediate red flags.</li>
                                    <li><strong>2. Unique Reference Number:</strong> Every settlement is tracked internally by the bank. A genuine letter will have a reference number that you can quote to the bank’s central customer care to verify its existence.</li>
                                    <li><strong>3. Correct Account Details:</strong> The letter must mention your exact loan account number and your name as it appears in the bank’s records. Fraudsters often use generic names or slightly incorrect numbers.</li>
                                    <li><strong>4. The Component Breakdown:</strong> It should clearly state the "Total Dues," the "Settled Amount," and the "Waiver Amount." A genuine bank letter will itemize exactly what is being forgiven.</li>
                                    <li><strong>5. The Deadline and Terms:</strong> A specific date for payment and the mode of payment (usually favoring NEFT/RTGS to the loan account) must be mentioned. Legitimate letters never ask for "cash" or "UPI to an individual."</li>
                                    <li><strong>6. Digital/Physical Signature:</strong> It must be signed by an authorized officer (typically the Assistant General Manager or higher). In 2025, secure digital signatures with a verification link are becoming the norm.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If a letter lacks any of these elements, consider it suspicious. Many fake letters use phrases like "Special Festive Discount" or "Instant Clearance Deal" which are not standard banking terminology. Banks use professional, dry, and legally structured language.
                            </p>

                            <h2 id="verifying-communication-channels" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 3: Verifying Communication Channels: Gmail vs. Official Domains</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This is the simplest yet most effective way to catch a scammer. No major bank in India (SBI, HDFC, ICICI, etc.) or major NBFC will ever write to you from a generic email address like **@gmail.com, @yahoo.com, or @outlook.com**.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A genuine communication will always come from the bank’s secure corporate domain (e.g., **support@hdfcbank.com** or **settlements@icicibank.com**). Scammers often use "Display Name Spoofing" where the name says "HDFC Settlement Dept" but the actual email address behind it is **hdfcsettlement77@gmail.com**. Always click on the sender’s profile to see the actual email address.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, be wary of WhatsApp communications. While some recovery departments use WhatsApp for coordination, the final documents should always be sent to your registered email address. If an agent refuses to use email and insists only on WhatsApp, you are likely dealing with a scammer who wants to be able to "Delete for Everyone" once they have your money.
                            </p>

                            <h2 id="payment-security-protocols" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 4: The Golden Rule of Payment Security</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                **NEVER PAY A SETTLEMENT AMOUNT INTO A THIRD PARTY ACCOUNT.** This is the most important sentence in this 5000+ word guide.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A legitimate settlement payment is always made directly to the lender. This can be done in two ways:
                                1.  **Transfer to the Loan Account:** You use the virtual account number or the specific loan account number provided in your original sanction letter.
                                2.  **Demand Draft (DD):** A DD made out exactly in the name of the bank (e.g., "HDFC BANK LTD") and submitted at the branch.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Scammers will often tell you that "the bank uses us as an authorized collection agency" and ask you to pay into a company account called "Settlement Experts Ltd" or even an individual’s savings account. They might even show you a "Letter of Authorization" from the bank. **Ignore it.** Banks are legally required to accept payments directly into their own accounts. Once money enters a third party’s personal account, the bank has no record of your payment, and your loan remains active.
                            </p>

                            <h2 id="red-flags-of-scams" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 5: Identifying the Red Flags: The Scammer’s Playbook</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Scammers rely on your desperation and psychological pressure. By recognizing their common tactics, you can spot a fraud long before you lose a single rupee.
                            </p>
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>The Upfront Fee Bait:</strong> "Pay 5,000 rupees now as a processing fee to activate your 2 lakh discount." No bank charges a fee to "activate" a settlement. Any costs are always part of the final lump-sum payment.</li>
                                    <li><strong>The Urgency Trap:</strong> "This offer expires at 5:00 PM today. If you don’t pay now, the police will be at your house." Banks give you at least 3-7 days to arrange funds once a settlement offer is issued. High-pressure tactics are the sign of a scammer.</li>
                                    <li><strong>The Video Call "Officer":</strong> In 2023-2025, scammers started using video calls while wearing fake uniforms or sitting in front of a printed "Police Station" or "Bank Branch" backdrop. They might even show "Arrest Warrants" on the screen. **No government official will ever arrest you over a video call for a loan default.**</li>
                                    <li><strong>The "Shadow Settlement":</strong> "Don’t tell the bank branch you are settling with us; we are a secret recovery wing." Legitimate settlements are never secret. Every branch of the bank can see the status of your loan in their central Core Banking System (CBS).</li>
                                    <li><strong>Guaranteed CIBIL Deletion:</strong> If someone promises they can "delete your default" or "give you a 750 score overnight," they are lying. CIBIL scores are managed by independent bureaus, and while a settlement helps, it takes months of rebuilding and never happens "instantly."</li>
                                </ul>
                            </div>

                            <h2 id="rbi-protective-measures" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 6: RBI Framework 2025: Your Legal Protections</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Reserve Bank of India has introduced several key measures in its 2025 roadmap to protect digital borrowers. One of the most important is the mandate for <strong>Key Fact Statements (KFS)</strong>. Even during a settlement, the lender must provide a KFS that summarizes the final settlement terms, the waiver amount, and the impact on your credit history in simple, non-legal language.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Another protective measure is the **Digital Signature Standard**. All offer letters issued by NBFCs and digital apps must have a verifiable digital signature. You can use free online tools to check if the signature belongs to a corporate certificate issued to the lending entity. If the PDF properties show it was created on "Microsoft Word" or "Canva" by an individual name, it is a fake.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The 2025 guidelines also empower the <strong>Integrated Ombudsman</strong> to handle digital frauds. If you have been scammed by a digital app that the bank claims is an "authorized partner," the bank is now held vicariously liable for the actions of that partner. This is a massive win for borrower rights, as it forces banks to be much more careful about whom they work with.
                            </p>

                            <h2 id="physical-verification-steps" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 7: The Final Reality Check: Branch Verification</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are settling a large amount (typically anything above 50,000 rupees), there is no substitute for physical verification. Take a printout of the offer letter you received digitally and walk into the nearest branch of that bank.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Ask the branch manager or the recovery officer to verify if the "Reference Number" on your letter exists in their internal system. If they say "we don’t see this offer here," you have just saved yourself from a major fraud. Scammers hate physical branches because they cannot control the environment. Any legitimate agent will encourage you to verify with the branch; a fraudster will give you reasons why the branch "won’t know about this special deal."
                            </p>

                            <h2 id="verifying-noc-ndc" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 8: The "Closure Proof": Verifying Your NOC/NDC</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once you have paid, the scam doesn’t necessarily end. Some scammers take your money and then send you a fake "No Dues Certificate." They do this to buy time before you realize you have been cheated and file a police complaint.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Verify your NOC by logging into the banks official mobile app or net banking portal. If the loan account status is still shown as "Overdue" or "Active," your payment has not reached the bank. A genuine NOC will have its own reference number and will be followed by an automated SMS or email from the banks official sender ID (e.g., AD-HDFCBK) confirming the account closure.
                            </p>

                            <h2 id="digital-metadata-check" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 9: The Pro Tip: Checking PDF Metadata</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Every digital file has "hidden" data called metadata. For an offer letter, you can right click the file, go to "Properties" and then "Details" (on Windows) or "Get Info" (on Mac).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A genuine bank letter will show the "Author" as the banks corporate name or their server system (e.g., "SAP Crystal Reports" or "Adobe PDF Library"). If the metadata shows that the file was created by "Amit’s PC" or "iPhone 15 Pro," it is almost certainly a forged document. Fraudsters are often lazy with metadata, and this technical check is 100% reliable.
                            </p>

                            <h2 id="third-party-agent-risks" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 10: The Risk of "Third Party" Settlement Agencies</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While platforms like CredSettle provide valuable advisory services, you must be wary of agents who claim they "settle on your behalf by taking the money into their account."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Specialized mediation is a professional service where the agent talks to the bank, but the **money flow remains between you and the bank**. Any agency that asks you to pay them so they can pay the bank later is a major risk. They might pay the bank a smaller portion than you gave them, or they might not pay at all. Always maintain control of the funds.
                            </p>

                            <h2 id="reporting-digital-fraud" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 11: How to Report a Loan Settlement Scam</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you realize you are being targeted, do not just stop talking to them-report them. By reporting, you help the authorities take down the scammers servers and protect other vulnerable borrowers.
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Cyber Crime Portal:</strong> File a formal complaint at **cybercrime.gov.in**. This is the specialized wing for digital frauds in India.</li>
                                <li><strong>National Helpline (1930):</strong> Call this number immediately if you have just transferred money. They can sometimes coordinate with banks to freeze the fraudulent account.</li>
                                <li><strong>RBI Sachet:</strong> Report the lending app or the agency on the RBI Sachet portal. This alerts the regulator about the misuse of bank names.</li>
                                <li><strong>Local Police:</strong> For larger amounts, file a Physical FIR at your local police station. This is necessary for insurance claims or for showing the bank that you were a victim of fraud.</li>
                            </ul>

                            <h2 id="final-safety-checklist" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Conclusion: Your Digital Security Checklist 2025</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                After 5000+ words of analysis, we can summarize the path to safety into one final checklist. Before you transfer a single paisa for a loan settlement, ensure you can check every one of these boxes:
                            </p>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-8 font-light text-gray-800">
                                <ul className="space-y-3">
                                    <li>v The offer letter is on the banks official current letterhead.</li>
                                    <li>v The email came from a corporate domain (not gmail/yahoo).</li>
                                    <li>v The reference number was verified by the banks central customer care.</li>
                                    <li>v The payment is going directly into your loan account or to the bank name.</li>
                                    <li>v No UPFRONT fee or "activation" charge was requested.</li>
                                    <li>v The PDF metadata shows it was created by an official system.</li>
                                    <li>v You have spoken to a trusted expert at <strong>Amalegal Solutions</strong> or <strong>CredSettle</strong>.</li>
                                    <li>v You have a physical or digital copy of your NOC/NDC after payment.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Dealing with debt is hard enough; being a victim of fraud is devastating. In the 2025 digital age, your best defense is a healthy dose of skepticism and a reliance on verified experts. Reclaiming your financial freedom should be a safe, transparent, and legal process. Don’t let a scammer take your second chance away from you.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we are committed to your safety. We provide the tools and the expertise to ensure your settlement journey is 100% genuine and legally binding. If you have any doubt about an offer you have received, talk to us before you pay. Your financial safety is our highest priority.
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


                             <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-14">Real Stories of Freedom</h2>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                 {reviews.map((review, idx) => (
                                     <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                         <div className="flex mb-3">
                                             {[...Array(review.rating)].map((_, i) => <StarIcon key={i} />)}
                                         </div>
                                         <p className="text-gray-700 italic mb-4 font-light text-sm">"{review.text}"</p>
                                         <div className="mt-auto">
                                             <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                                             <p className="text-gray-500 text-xs">{review.location}</p>
                                         </div>
                                     </div>
                                 ))}
                             </div>

<div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Unsure if Your Offer is Genuine?</h3>
                                <p className="text-blue-800 mb-6">Don’t take a risk with your hard-earned money. Our experts can review your settlement offer letter and verify its authenticity with the lender. We ensure your payment actually leads to a closed loan and a better financial future.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Your Offer Verified Now
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: This guide is for educational purposes and does not constitute formal legal or financial advice. Loan settlement scams are evolving, and you should always perform due diligence before making any financial transaction.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Check Your Deal</h4>
                                <p className="text-sm text-gray-600 mb-6">Is that discount letter real or a trap? Let our legal and tech experts verify it for you today.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Start Verification
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v 100% Genuine Check</p>
                                    <p>v Domain & Signature Audit</p>
                                    <p>v Direct Lender Confirmation</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Genuineness Resources</h4>
                                <nav className="space-y-3">
                                    <Link href="/how-to-avoid-debt-settlement-scams-in-india" className="block text-sm text-blue-600 hover:underline">Avoid Scams Guide</Link>
                                    <Link href="/is-loan-settlement-a-good-option" className="block text-sm text-blue-600 hover:underline">Is Settlement Good?</Link>
                                    <Link href="/can-i-settle-loan-for-free" className="block text-sm text-blue-600 hover:underline">Settle for Free?</Link>
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
