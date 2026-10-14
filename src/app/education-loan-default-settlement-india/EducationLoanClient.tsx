'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
export default function EducationLoanClient() {
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
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, {
            rootMargin: '-100px 0px -35% 0px',
            threshold: 0.1
        });
        const headings = document.querySelectorAll('h2[id], h3[id]');
        headings.forEach((heading) => observer.observe(heading));
        return () => {
            headings.forEach((heading) => observer.unobserve(heading));
        };
    }, []);
    const navLinks = [
        { id: 'hidden-crisis', label: 'The Hidden Crisis of Loan Defaults' },
        { id: 'consequences', label: 'Consequences for Graduates & Co-Signers' },
        { id: 'career-impact', label: 'Impact on Career Prospects' },
        { id: 'legal-action-parents', label: 'Legal Action Against Parents' },
        { id: 'subsidies-moratorium', label: 'Subsidies and Moratorium Extensions' },
        { id: 'csis-scheme', label: 'Understanding the CSIS Scheme' },
        { id: 'negotiate-extension', label: 'Negotiating an Extension' },
        { id: 'settlement-vs-restructuring', label: 'Settlement vs Restructuring' },
        { id: 'when-is-ots-possible', label: 'When is OTS Possible?' },
        { id: 'faqs', label: 'Frequently Asked Questions' },
    ];
    const faqs = [
        {
            question: 'Can a student go to jail for defaulting on an education loan in India?',
            answer: 'No. Non-payment of an education loan is a civil matter. Not a criminal offense. You cannot be arrested simply for being unable to repay an bank loan due to unemployment.'
        },
        {
            question: 'How does an education loan default affect my parents?',
            answer: 'Because parents are usually strict co-signers on education loans. A default severely impacts their CIBIL score. If security was provided. The bank can initiate SARFAESI proceedings against their property.'
        },
        {
            question: 'What is the Central Sector Interest Subsidy (CSIS) scheme?',
            answer: 'The CSIS scheme provides a full interest subsidy during the moratorium period (course period plus one year) for students from economically weaker sections whose parental income is below local thresholds.'
        },
        {
            question: 'Can I extend my moratorium period if I haven\'t found a job?',
            answer: 'Yes. Many banks allow for an extension of the moratorium period (typically by another 6 months to a year) if you can provide proof of continued unemployment or enrollment in further studies.'
        },
        {
            question: 'Will an education loan settlement ruin my chances of studying abroad later?',
            answer: 'Yes. A settlement heavily damages your CIBIL score. If you plan to study abroad later. Most international education loan providers will check your credit history and reject applications with a "Settled" status.'
        },
        {
            question: 'Can background checks by employers see my education loan default?',
            answer: 'While employers do not generally pull your CIBIL report for entry-level jobs. Many multinational banks and banks do check credit scores during the hiring process. A default could disqualify you from certain finance roles.'
        }
    ];
    const reviews = [
        {
            name: 'Nikhil Sharma',
            location: 'Delhi',
            stars: 5,
            comment: 'I graduated during a hiring freeze and couldn\'t pay my EMIs. The bank started harassing my retired parents. The lawyers negotiated a 12-month moratorium extension based on unemployment proof, saving our family from immense stress.'
        },
        {
            name: 'Priya Das',
            location: 'Kolkata',
            stars: 5,
            comment: 'My education loan ballooned to an unmanageable amount due to compound interest while I was sick. They helped me settle a fair One Time Settlement so I could finally move on with my life without legal threats.'
        }
    ];
    return (<>
            {/* Hero Section */}
            <section className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden" style={{
            background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
            minHeight: '50vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Education Loan Default in India:<br />
                        <span className="text-blue-300">Settlement vs Restructuring.</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light"> Protect your career and your parents. Learn how to settle moratorium extensions and secure final settlements legally. </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Consult an Education Debt Expert
                        </Link>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1440px] mx-auto px-4 py-4">
                    <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center"> <Link href="/" className="inline-flex items-center hover:text-blue-600"> Home </Link> </li>
                            <li> <div className="flex items-center"> <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/> </svg> <span className="ml-1 font-medium text-gray-500 md:ml-2"> Education Loan Default Solutions. </span> </div> </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Mobile Sticky TOC */}
            <div ref={mobTocRef} className="sticky top-[56px] z-40 lg:hidden bg-white border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar scroll-smooth py-3 px-4 flex gap-4 whitespace-nowrap">
                {navLinks.map((link) => (<a key={link.id} id={`mob-toc-${link.id}`} href={`#${link.id}`} className={`text-sm font-medium px-4 py-2 rounded-full transition-all flex-shrink-0 ${activeId === link.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 bg-gray-50 hover:bg-gray-100'}`} onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${link.id}`)?.scrollIntoView({ behavior: 'smooth' });
                setActiveId(link.id);
            }}>
                        {link.label}
                    </a>))}
            </div>

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Left Column: TOC */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <p className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Outline</p>
                            <nav className="space-y-1 text-sm">
                                {navLinks.map((link) => (<a key={link.id} href={`#${link.id}`} className={`block py-1.5 px-3 rounded-lg transition-all ${activeId === link.id
                ? 'bg-blue-600 text-white font-semibold'
                : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`} onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${link.id}`)?.scrollIntoView({ behavior: 'smooth' });
                setActiveId(link.id);
            }}>
                                        {link.label}
                                    </a>))}
                            </nav>
                        </div>
                    </aside>

                    {/* Middle Column: Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                            
                            <p className="text-gray-700 leading-relaxed mb-6 font-semibold"> Young graduates entering a difficult job market are increasingly defaulting on their education loans. Bringing immense stress not just to themselves. To their parents who acted as co-signers. This full guide explains how to settle moratorium extensions. Leverage government subsidies. Handle final settlements without permanently destroying a young expert's career prospects. </p>

                            <h2 id="hidden-crisis" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The Hidden Crisis of Education Loan Defaults</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Education loans are fundamentally different from other retail credit products like private loans or credit cards. They represent an investment in human cash. A student borrows money based on the projected future earnings of a degree they have not yet earned. However. The Indian job market is highly volatile. And campus placements are rarely guaranteed. Thousands of engineers, MBA graduates. Medical students find themselves holding degrees but lacking the high paying jobs required to service massive Equated Monthly Installments (EMIs). </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Compounding this crisis is the structure of the loans themselves. While most banks offer a "moratorium period" (a payment holiday lasting the duration of the course plus six months to one year). Simple interest continues to accrue during this time. By the time the graduate is expected to pay their first EMI. The base loan has ballooned greatly. If the graduate fails to secure employment within this grace period. They promptly face the terrifying prospect of default right at the beginning of their expert life. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The psychological toll of an early default is devastating. Young workers often feel intense guilt for placing money burdens on their families. Unfortunately. Banking systems are rigid and automated. Missing three consecutive EMI payments triggers an automatic Non-Performing Asset (NPA) classification. Initiating a chain reaction of legal and money results that drag entire families into distress. Seeking. <Link href="/loan-default-emi-foreclosure-assistance" className="text-blue-600 hover:underline">how to delay loan payment legally</Link> is often the most pressing concern for these young graduates. </p>

                            <h2 id="consequences" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Consequences of Non-Payment for Graduates and Co-Signers</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> It is a common misconception that because the student is the primary beneficiary of the education. They alone bear the results of a default. In reality. Education loans are almost always structured as joint debts. The banking sector requires parents or legal guardians to act as co-signers. For loans exceeding local amounts (typically over INR 7.5 Lakhs). Tangible security is demanded. </p>

                            {/* Section Type: Impact Matrix */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-8 overflow-x-auto">
                                <p className="text-xl font-bold text-gray-900 mb-4 text-center">Default result Matrix.</p>
                                <table className="w-full text-left border-collapse min-w-[600px]">
                                    <thead>
                                        <tr className="bg-blue-100 text-blue-900">
                                            <th className="p-4 font-bold border-b border-gray-300 rounded-tl-xl w-1/2">Impact on the Student (Primary Borrower).</th>
                                            <th className="p-4 font-bold border-b border-gray-300 rounded-tr-xl w-1/2">Impact on the Parent (Co-Signer).</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700 bg-white">
                                        <tr className="border-b border-gray-200">
                                            <td className="p-4">Instant drop in private CIBIL score to high risk levels.</td>
                                            <td className="p-4">Simultaneous severe drop in the parent's CIBIL score.</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 bg-gray-50">
                                            <td className="p-4">Inability to secure future auto loans. Home loans, or credit cards.</td>
                                            <td className="p-4">fast rejection of firm loans applications or credit limit enhancements.</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="p-4">abuse calls from claims agents targeting the student's new workplace.</td>
                                            <td className="p-4">Humiliating claims agent visits to the family home or parent's office.</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="p-4 rounded-bl-xl">Potential disqualification during background checks for finance sector jobs.</td>
                                            <td className="p-4 rounded-br-xl font-bold text-red-600">Risk of property auction under SARFAESI Act if security was pledged.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 id="career-impact" className="text-2xl font-bold text-gray-800 mt-8 mb-4">Impact on the Student's Career Prospects</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> For the graduate. The most fast invisible result is the destruction of their credit history. A ruined CIBIL score effectively locks them out of the formal credit system for years. This means they will struggle to get a basic credit card. An auto loan to buy a vehicle for their commute. A housing loan when they eventually decide to settle down. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> More alarmingly. The company world is increasingly integrating money background checks into their hiring processes. While a tech company might not care about a loan default. Major multinational banks, money services firms. cover companies strictly scrutinize credit reports. A candidate with a severe default or an NPA tag may be deemed a money risk and disqualified from handling sensitive fiduciary roles. </p>

                            <h2 id="legal-action-parents" className="text-2xl font-bold text-gray-800 mt-8 mb-4">Legal Action Against Parent Co-Signers</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The burden on parents is often far heavier. Because the student usually lacks assets. The bank aggressively targets the co-signer. Legally. The co-signer is equally liable for the debt. The bank does not have to exhaust all options against the student before pursuing the parents. Understanding. <Link href="/can-bank-contact-guarantor-for-recovery" className="text-blue-600 hover:underline">co-signer legal rights loan default</Link> is crucial for families navigating this crisis. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> If a house or plot of land was pledged as security (common for loans exceeding INR 7.5 Lakhs or for expensive foreign education). The bank will invoke the SARFAESI Act upon NPA classification. This allows the bank to issue a 60 day notice and then take physical takeover of the family property to auction it off. All without needing a court order. This creates an atmosphere of sheer panic for retired parents who risk losing their life savings due to their child's unemployment. </p>

                            <h2 id="subsidies-moratorium" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Government Subsidies and Moratorium Extensions</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Before considering extreme measures like settlements or facing property auctions. Families must exhaust all available restructuring and subsidy options provided by the government and banking regulators. The system acknowledges the swings of the job market and provides local safety nets for education loans. </p>

                            {/* Section Type: Information Cards */}
                            <h2 id="csis-scheme" className="text-2xl font-bold text-gray-800 mt-8 mb-4">Understanding the CSIS Scheme</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-green-50 p-6 rounded-2xl border border-green-200 shadow-sm">
                                    <p className="font-bold text-green-900 text-lg mb-3">What is CSIS?</p>
                                    <p className="text-green-800 text-sm leading-relaxed">The Central Sector Interest Subsidy (CSIS) scheme is a government initiative where the Ministry of Education pays the full interest accrued on the education loan during the moratorium period (course duration + 1 year).</p>
                                </div>
                                <div className="bg-green-50 p-6 rounded-2xl border border-green-200 shadow-sm">
                                    <p className="font-bold text-green-900 text-lg mb-3">Who is Eligible?</p>
                                    <p className="text-green-800 text-sm leading-relaxed">Students belonging to Economically Weaker Sections (EWS) with an annual gross parental family income with a local upper limit (traditionally INR 4.5 Lakhs) pursuing technical or expert courses in India.</p>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6"> Many eligible students fail to claim this subsidy because they are unaware of the paperwork requirements at the time of loan sanction. Ensuring the bank accurately flags the account for the CSIS subsidy prevents the main loan from ballooning during the study period. Drastically reducing the future EMI burden. </p>

                            <h3 id="negotiate-extension" className="text-2xl font-bold text-gray-800 mt-8 mb-4">Negotiating a Moratorium Extension Due to Unemployment</h3>
                            <p className="text-gray-700 leading-relaxed mb-6"> If the standard moratorium period is ending and the graduate is still unemployed. Defaulting is not the only option. The RBI permits banks to extend the moratorium period for education loans under local situation of hardship. </p>
                            
                            {/* Section Type: Step-by-Step Guide */}
                            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">How to Apply for a Moratorium Extension</h3>
                                <ol className="list-decimal list-inside space-y-4 text-gray-700">
                                    <li className="pl-2 pb-2 border-b border-gray-100"> <span className="font-semibold text-blue-800">Draft a Formal legal help:</span> Write a detailed letter to the branch manager explaining the exact reasons for unemployment (e.g. Rescinded job offers, industry downturns). </li>
                                    <li className="pl-2 pb-2 border-b border-gray-100"> <span className="font-semibold text-blue-800">Gather Documentary Proof:</span> Attach proof of active job searching. Rejection letters from companies. Or proof of registration with employment exchanges. </li>
                                    <li className="pl-2 pb-2 border-b border-gray-100"> <span className="font-semibold text-blue-800">Propose a Revised Schedule:</span> Request a local extension (e.g. 6 months) and propose a revised EMI structure (Restructuring) that might involve lower initial payments stepping up as salary increases. </li>
                                    <li className="pl-2"> <span className="font-semibold text-blue-800">Involve Legal Counsel:</span> If the bank refuses to accept the application and threatens NPA status. A formal notice from an. <Link href="/best-lawyer-for-education-loan-settlement" className="text-blue-600 hover:underline">education loan lawyer in India</Link> can force the bank to formally review the restructuring request under RBI rules. </li>
                                </ol>
                            </div>

                            <h2 id="settlement-vs-restructuring" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Education Loan Settlement vs. Restructuring</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The ultimate goal should always be restructuring. Restructuring modifies the terms (longer tenure. Lower interest. Extended moratorium) but requires you to eventually pay back the entire main loan. This protects your CIBIL score and keeps your career options wide open. However, if restructuring fails. The debt has grown so large that even extended EMIs are impossible. Settlement becomes the final exit plan. </p>

                            <h3 id="when-is-ots-possible" className="text-2xl font-bold text-gray-800 mt-8 mb-4">When is a One-Time Settlement (OTS) Possible?</h3>
                            <p className="text-gray-700 leading-relaxed mb-6"> A One-Time Settlement (OTS) involves paying a lump sum amount that is greatly less than the total unpaid to close the loan permanently. Banks are highly reluctant to offer OTS on education loans. Chiefly if there is security attached. This is because they know they can recover the money by auctioning the parents' property. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> OTS is generally only viable for no-pledge education loans (usually under INR 7.5 Lakhs) where the account has been an NPA for a considerable period. The bank realizes that the cost of pursuing legal claims through civil courts exceeds the potential recovered amount. An OTS will reflect as 'Settled' on both the student's and the parents' CIBIL reports. Severely damaging their creditworthiness for at least seven years. It is a desperate measure meant only to stop severe abuse and legal threats when all other avenues of income generation have failed. </p>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Frequently Asked Questions on Student Loan Debt</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (<div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Protect Your Family's Assets and Your Future</h3>
                                <p className="text-blue-800 mb-6">Do not let a temporary phase of unemployment result in the auction of your parents' home or the destruction of your credit score. Our legal experts specialize in settling moratorium extensions and settlements for distressed graduates.</p>
                                <Link href="/contact" className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300">
                                    Get Legal Help Today
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The strategies outlined regarding education loan restructuring and settlements are for educational purposes. Banking regulations and RBI guidelines are subject to change. Always consult with a qualified financial advisor and legal counsel before submitting settlement offers.
                            </div>
                        </article>
                    </main>

                    {/* Right Column: CTA & Related Expertise (NO AUTHOR BIO) */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="space-y-6">
                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <p className="font-bold text-xl text-gray-900 mb-2">Facing NPA Threats?</p>
                                <p className="text-sm text-gray-600 mb-6">Stop abuse against your parents and settle a legal extension or settlement.</p>
                                <Link href="/contact" className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center">
                                    Talk to an Expert
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✔ Stop Agent abuse.</p>
                                    <p>✔ Protect security.</p>
                                    <p>✔ Draft Extension Letters.</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <p className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise.</p>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-bank-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">Bank Recovery Defence</Link>
                                    <Link href="/best-lawyer-for-drt-case-defence-for-bank-loan-recovery" className="block text-sm text-blue-600 hover:underline">DRT Specialization</Link>
                                    <Link href="/best-lawyer-for-loan-settlement-during-drt" className="block text-sm text-blue-600 hover:underline">Settlement Strategies</Link>
                                    <Link href="/best-lawyer-for-msme-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">MSME Loan Defence</Link>
                                </nav>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            
            {/* Reviews Section at the bottom */}
            <section className="max-w-[1440px] mx-auto px-4 py-12 border-t border-gray-100">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Client Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {reviews.map((review, index) => (<div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center mb-3">
                                <div className="flex text-yellow-400 mr-2">
                                    {[...Array(review.stars)].map((_, i) => (<svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>))}
                                </div>
                            </div>
                            <p className="text-gray-700 italic mb-4 leading-relaxed font-light text-sm">"{review.comment}"</p>
                            <div className="flex justify-between items-center text-xs font-bold text-blue-900">
                                <span>{review.name}</span>
                                <span className="opacity-60">{review.location}</span>
                            </div>
                        </div>))}
                </div>
            </section>
        </>);
}
