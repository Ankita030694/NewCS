'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WestBengalLoanSettlementClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [isMobile, setIsMobile] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (isMobile && activeId && mobileNavRef.current) {
      const activeLink = mobileNavRef.current.querySelector(`[href="#${activeId}"]`);
      if (activeLink) {
        activeLink.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeId, isMobile]);

  const navLinks = [
    { id: 'wb-debt-landscape', label: 'WB Debt Reality' },
    { id: 'bengal-money-lenders-act', label: 'Bengal Money Lenders Act' },
    { id: 'damdupat-rule', label: 'Rule of Damdupat' },
    { id: 'settlement-process-kolkata', label: 'Settlement Process' },
    { id: 'lok-adalat-wb', label: 'Lok Adalat System' },
    { id: 'police-help-kolkata', label: 'Police Protection' },
    { id: 'drt-kolkata', label: 'DRT Kolkata Info' },
    { id: 'credit-score-reality', label: 'CIBIL Impact' },
    { id: 'scams-west-bengal', label: 'Avoid Scams' },
    { id: 'cities-covered-wb', label: 'Districts We Serve' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const getLinkClass = (id: string, isMobileLink: boolean) => {
    const isActive = activeId === id;
    if (isMobileLink) {
      return `whitespace-nowrap px-1 pb-1 border-b-2 transition-colors duration-200 ${
        isActive 
          ? 'border-blue-600 text-blue-600 font-semibold' 
          : 'border-transparent text-gray-600 hover:text-blue-600'
      }`;
    } else {
      return `block transition-all duration-200 pl-3 border-l-2 ${
        isActive
          ? 'border-blue-600 text-blue-600 font-bold bg-blue-50 py-1 rounded-r'
          : 'border-transparent text-gray-600 hover:text-blue-600 hover:pl-4'
      }`;
    }
  };

  const faqList = [
    {
      question: "Is loan settlement legal in West Bengal?",
      answer: "Yes, loan settlement is a completely legal and recognized financial process in West Bengal. It operates strictly under the framework of the Indian Contract Act, 1872, and the guidelines issued by the Reserve Bank of India (RBI). Banks in Kolkata, whether public sector giants like SBI or private entities like HDFC, utilize settlement as a standard tool to clean their balance sheets of Non-Performing Assets (NPAs)."
    },
    {
      question: "What is the Bengal Money-Lenders Act, 1940?",
      answer: "This is a historic and powerful piece of state legislation specific to West Bengal. It regulates the business of money lending and provides massive protection to borrowers. Its most famous provision is the rule of 'Damdupat', which restricts the total interest recoverable by a lender to an amount not exceeding the principal. This Act is often cited to protect borrowers from predatory interest rates charged by unregistered lenders."
    },
    {
      question: "Can I settle my personal loan in Kolkata if I am employed?",
      answer: "Absolutely. Your employment status does not bar you from settlement. If you are facing genuine financial hardship—such as a salary cut, job loss in the IT sector (Salt Lake/New Town), or high medical expenses—banks are willing to negotiate. The key is to prove your current inability to pay the full EMIs despite having an intention to resolve the debt."
    },
    {
      question: "Will the Kolkata Police help if recovery agents harass me?",
      answer: "Yes. The Kolkata Police (headquartered at Lalbazar) and the West Bengal Police are very strict about maintaining public order. If recovery agents use abusive language, threaten you physically, or harass your family, you can file a General Diary (GD) or FIR. The police often intervene effectively to stop such illegal recovery tactics."
    },
    {
      question: "How does the Lok Adalat in West Bengal help in settlement?",
      answer: "The West Bengal State Legal Services Authority (WBSLSA) organizes Lok Adalats, which act as 'People's Courts'. They provide a fast, cost-effective, and legally binding forum to settle banking disputes. An award passed by the Lok Adalat is final and cannot be appealed in any higher court, giving you permanent closure on your loan."
    },
    {
      question: "Does settlement affect my CIBIL score?",
      answer: "Yes, choosing to settle will result in your loan account being marked as 'Settled' in your Credit Information Report (CIR). This will temporarily lower your score. However, this is a strategic decision: a 'Settled' status stops the continuous damage of a 'Default' or 'Written Off' status. You can rebuild your score back to 750+ within 18-24 months through disciplined financial behavior."
    },
    {
      question: "Where are the Debt Recovery Tribunals (DRT) in Kolkata?",
      answer: "Kolkata is a major judicial hub with three Debt Recovery Tribunals (DRT-1, DRT-2, and DRT-3). They are generally located in the central administrative areas like the Jeevan Sudha Building on Jawaharlal Nehru Road. These tribunals handle recovery cases for loan amounts exceeding ₹20 Lakhs."
    },
    {
      question: "Can I settle credit card dues in Siliguri or Durgapur?",
      answer: "Yes, our services cover the entire state of West Bengal. Credit card settlement is very common in commercial hubs like Siliguri, Asansol, and Durgapur. We can help you negotiate a waiver on the exorbitant interest charges and settle the principal amount for a much lower sum."
    },
    {
      question: "Do I need to visit the bank branch in person for settlement?",
      answer: "No. When you hire CredSettle, we handle all the legwork. We negotiate directly with the bank's Regional or Zonal offices (mostly located in Kolkata's Central Business District). You do not need to face the branch manager or local recovery agents personally."
    },
    {
      question: "How long does the settlement process take in West Bengal?",
      answer: "The timeline typically ranges from 45 to 90 days. It depends on the specific bank's internal approval hierarchy and the complexity of your case. Public sector banks may take slightly longer than private banks due to their multi-layered approval process."
    },
    {
      question: "What if I receive a fake legal notice?",
      answer: "This is a common scam. If you receive a notice on WhatsApp claiming to be from the 'Calcutta High Court' or 'Delhi Crime Branch' demanding immediate payment via UPI, ignore it and contact us. Real courts do not send notices via WhatsApp. We will verify the authenticity of any document you receive."
    }
  ];

  return (
    <>
      {/* Breadcrumb Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 py-4">
          <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/loan-settlement" className="ml-1 font-medium text-gray-700 hover:text-blue-600 md:ml-2 transition-colors">
                    Loan Settlement
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    West Bengal
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-12">
        {/* Mobile Sticky Nav */}
        <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm -mx-4 px-4 py-3 mb-8 flex items-center overflow-x-auto no-scrollbar" ref={mobileNavRef}>
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

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Table of Contents (Desktop) */}
          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Table of Contents</h3>
                <nav className="space-y-2 text-sm">
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
            </div>
          </div>

          {/* Middle Column: Main Content */}
          <div className="lg:w-3/5 w-full">
            <article className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 text-justify">
              
              <h2 id="wb-debt-landscape" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Debt Settlement in West Bengal: The Definitive Legal Guide</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                West Bengal presents a unique economic and social landscape. It is a state where traditional values meet modern financial pressures. From the bustling, historic trading lanes of Burrabazar and Posta in Kolkata to the gleaming glass towers of the IT sector in Salt Lake (Bidhannagar) and New Town, the aspiration for a better life is universal. This aspiration is often funded by credit. Whether it is a personal loan for a grand wedding, a business loan for a startup in Siliguri, or credit cards used to manage the rising cost of living in urban centers, debt has become an integral part of the Bengali middle-class existence.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                However, the economic reality is volatile. The post-pandemic world has seen shifts in the job market, particularly in the service and IT sectors, leading to unexpected layoffs or salary delays. Small business owners in districts like Howrah and Hooghly face fluctuations in demand and supply chain disruptions. When these financial shocks hit, the carefully managed cycle of EMIs can collapse. In West Bengal, the social fabric of the "Para" (neighborhood) is tight-knit. The fear of social embarrassment—of neighbors or relatives finding out about financial distress—is often more paralyzing than the debt itself. This "Bhadralok" sensitivity makes borrowers suffer in silence, often taking new loans to pay off old ones, spiraling deeper into a debt trap.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                It is vital to break this silence. You must understand that <strong>Loan Settlement</strong> is not a crime, nor is it a sign of moral failure. It is a legitimate, legal financial solution available to every Indian citizen under RBI guidelines. Major banks operating in the state, including the locally headquartered UCO Bank and Bandhan Bank, as well as giants like SBI, HDFC, and ICICI, have structured policies to settle Non-Performing Assets (NPAs). They prefer a pragmatic settlement over endless litigation. CredSettle acts as your bridge, your advocate, and your shield, helping you navigate the unique legal and banking landscape of West Bengal to achieve a dignified, debt-free future.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 mb-10">
                <h4 className="font-bold text-blue-900 mb-2">Local Legal Advantage</h4>
                <p className="text-blue-800 m-0">
                  West Bengal offers borrowers a unique legal advantage not found in many other states: the <strong>Bengal Money-Lenders Act, 1940</strong>. This historical legislation is a powerful tool in the hands of a knowledgeable legal team, providing robust protection against predatory interest rates and harassment.
                </p>
              </div>

              <h2 id="bengal-money-lenders-act" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Bengal Money-Lenders Act, 1940: Your Legal Shield</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                While central banking laws like the SARFAESI Act and the RDDBFI Act govern the broader banking sector, state-specific laws in West Bengal provide an additional, critical layer of protection for borrowers. The <strong>Bengal Money-Lenders Act, 1940</strong> is one such piece of legislation that remains highly relevant today.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Act was originally designed to protect farmers and small borrowers from the clutches of unregulated money lenders, but its principles set a legal tone for fair lending practices across the state. Understanding your rights under this Act can change the dynamic of your interaction with lenders.
              </p>
              <ul className="list-disc pl-6 space-y-4 mb-6 text-gray-700">
                <li>
                  <strong>Requirement of License:</strong> The Act mandates that anyone carrying on the business of money lending in West Bengal must hold a valid license. This effectively makes the operations of many informal "loan sharks," "Kabuliwalas," or private financiers operating without a license illegal. If you have borrowed from such an unregulated source and are facing harassment, the law is firmly on your side.
                </li>
                <li>
                  <strong>Protection Against Molestation:</strong> Section 40 of the Act specifically deals with the harassment of debtors. It criminalizes any act of molestation or intimidation used to recover a debt. This means that if a recovery agent blocks your path, uses abusive language, or creates a scene outside your home in Kolkata or Asansol, they are committing a punishable offense, not just a civil breach.
                </li>
              </ul>

              <h2 id="damdupat-rule" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Rule of Damdupat: Capping the Interest</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Perhaps the most powerful provision within the Bengal Money-Lenders Act is the adoption of the ancient principle of <strong>Damdupat</strong>. This rule provides a statutory ceiling on the amount of interest a lender can recover through a court of law.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>What is Damdupat?</strong>
                <br />
                The rule essentially states that at any given time, the total interest recoverable by the lender cannot exceed the principal amount of the loan. For example, if you borrowed ₹1 Lakh, the lender cannot file a suit to recover ₹5 Lakhs claiming ₹4 Lakhs is interest and penalties. The maximum interest component they can legally claim is capped relative to the principal.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                While modern banking laws and contracts often try to bypass this, the principle of Damdupat remains a potent argument in settlement negotiations and Lok Adalat proceedings in West Bengal. It highlights the state's judicial intent to prevent "usury" or predatory pricing. When CredSettle represents you, we leverage these local legal nuances to negotiate a settlement amount that is fair and just, often waiving off the accumulated penal interest entirely.
              </p>

              <h2 id="settlement-process-kolkata" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Loan Settlement Process in Kolkata & West Bengal</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Settling a loan is not about simply refusing to pay; it is a structured financial and legal negotiation. At CredSettle, we have refined a process specifically for the banking circles of West Bengal to ensure the highest success rate for our clients.
              </p>

              <div className="space-y-8 mb-10">
                <div className="flex bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Detailed Portfolio Analysis</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Every case starts with a deep dive. We analyze your loan agreements, payment history, and current financial standing. We determine which of your loans (Personal, Credit Card, or Business) are eligible for settlement and calculate a realistic settlement offer based on your disposable income.
                    </p>
                  </div>
                </div>

                <div className="flex bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">The Legal Shield (Stop Calls)</h4>
                    <p className="text-gray-700 leading-relaxed">
                      In Kolkata, recovery agents can be intrusive, often calling relatives or visiting workplaces. Once you engage us, we deploy our "Legal Shield." We formally notify the bank that you are represented by CredSettle. We direct you to forward all calls to our legal team. This significantly reduces the harassment and gives you the mental space to breathe.
                    </p>
                  </div>
                </div>

                <div className="flex bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Navigating the NPA Stage</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Banks typically entertain settlement only after the loan is classified as a Non-Performing Asset (NPA), which happens after 90 days of non-payment. This is a critical window. We guide you on how to handle legal notices under the SARFAESI Act (for secured loans) or Arbitration notices. We ensure you do not make mistakes that could weaken your legal position.
                    </p>
                  </div>
                </div>

                <div className="flex bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">4</div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Strategic Negotiation with Zonal Offices</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Most major banks have their Zonal or Circle offices in Kolkata's Central Business District (Dalhousie/BBD Bagh) or Salt Lake Sector V. We bypass the local branch level and negotiate directly with the authorized officers at the regional level. Our goal is to secure a waiver on 100% of the penal interest and legal charges, and a substantial reduction (often 40-60%) on the principal amount.
                    </p>
                  </div>
                </div>

                <div className="flex bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">5</div>
                  <div className="ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Settlement Letter & Closure</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We never proceed without written confirmation. We secure a formal Settlement Letter on the bank's official letterhead. We verify every clause—payment schedule, amount, and closure terms—to ensure there are no loopholes. Once you make the payment directly to the bank, we follow up to ensure the issuance of the "No Dues Certificate" (NDC).
                    </p>
                  </div>
                </div>
              </div>

              <h2 id="lok-adalat-wb" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Lok Adalat: The Safe & Speedy Route in West Bengal</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The <strong>Lok Adalat</strong> (People's Court) is one of the most effective forums for resolving banking disputes in West Bengal. Organized under the aegis of the <strong>West Bengal State Legal Services Authority (WBSLSA)</strong>, these courts act as an Alternative Dispute Resolution (ADR) mechanism that is both powerful and borrower-friendly.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Why is Lok Adalat the Best Option?</h3>
              <ul className="list-disc pl-6 space-y-4 mb-6 text-gray-700">
                 <li><strong>Finality of the Award:</strong> A decision (Award) made by the Lok Adalat is deemed to be a decree of a Civil Court. It is final and binding on all parties. Crucially, <strong>no appeal lies against this award</strong> in any court of law. This provides you with absolute certainty; the bank cannot reopen the case or demand more money in the future.</li>
                 <li><strong>Cost-Effective:</strong> There is absolutely no court fee payable when a matter is filed in a Lok Adalat. If a case pending in a regular court is referred to the Lok Adalat and settled, the court fee originally paid is refunded to the parties.</li>
                 <li><strong>Speedy Justice:</strong> Unlike regular courts where cases drag on for years, Lok Adalat matters are often resolved in a single sitting. National Lok Adalats are held quarterly in district courts across West Bengal, including the City Civil Court in Kolkata, and district courts in Alipore, Barasat, Howrah, and Chinsurah.</li>
                 <li><strong>Amicable Atmosphere:</strong> The proceedings are informal and conciliatory. The focus is on arriving at a compromise that is acceptable to both the borrower and the bank, rather than on strict legal technicalities.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                At CredSettle, we can facilitate the referral of your case to the Lok Adalat (Pre-Litigation or Pending Litigation) and represent your interests there. We ensure that the settlement terms recorded before the judge are accurate and favorable, giving you an ironclad legal exit from your debt.
              </p>

              <h2 id="police-help-kolkata" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Kolkata Police: Protection Against Harassment</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Kolkata Police, known for their efficiency and strict adherence to public order, offer strong protection against illegal recovery tactics. If you are being harassed, you are not helpless.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Effective Complaint Channels</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-blue-900 mb-2">Local Police Station (Thana)</h4>
                  <p className="text-sm text-gray-600">Filing a General Diary (GD) entry at your local police station is the first and most important step. Detail the specific nature of the harassment, the phone numbers used, and the language spoken. This creates an official record.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-blue-900 mb-2">Lalbazar Cyber Crime Cell</h4>
                  <p className="text-sm text-gray-600">For digital harassment—such as abusive WhatsApp messages, morphed photos, or fake legal notices—you can approach the Cyber Crime Police Station at the Kolkata Police Headquarters in Lalbazar. They are highly equipped to track digital footprints.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-blue-900 mb-2">The 'Bondhu' App</h4>
                  <p className="text-sm text-gray-600">The Kolkata Police's official citizen app, "Bondhu," allows you to report grievances digitally. It is a quick way to alert the authorities if you feel threatened.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-blue-900 mb-2">Dial 100 / 112</h4>
                  <p className="text-sm text-gray-600">In case of immediate physical threat—for instance, if recovery agents are at your door creating a nuisance—dialing 100 ensures immediate police intervention. The police usually warn agents that civil recovery cannot involve public disorder.</p>
                </div>
              </div>

              <h2 id="drt-kolkata" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Debt Recovery Tribunals (DRT) in Kolkata</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                For loans where the outstanding amount exceeds ₹20 Lakhs, banks utilize the <strong>Debt Recovery Tribunals (DRT)</strong> established under the RDDBFI Act, 1993. Kolkata is a major judicial hub for eastern India and hosts three DRT benches.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>DRT Infrastructure in Kolkata:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
                <li><strong>DRT-1 Kolkata:</strong> Handles cases from specific jurisdictions in Kolkata and southern Bengal districts. Located centrally, often near the Jeevan Sudha Building.</li>
                <li><strong>DRT-2 Kolkata:</strong> Has jurisdiction over other parts of Kolkata and several surrounding districts. It is one of the busiest tribunals handling high-value corporate and personal loan cases.</li>
                <li><strong>DRT-3 Kolkata:</strong> Established to manage the overflowing caseload, it covers remaining areas and sometimes cases from neighboring states depending on the bank's filing.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                Receiving a summons from the DRT (an Original Application or OA) is a serious legal matter. If ignored, the tribunal can pass an ex-parte order against you, leading to the issuance of a Recovery Certificate (RC) and potential attachment of assets. However, the DRT is not just a recovery engine; it is also a place for settlement. The Presiding Officers often encourage banks to settle matters amicably to reduce their backlog. CredSettle provides expert legal representation in all three DRTs in Kolkata, defending your rights and steering the case towards a mutually beneficial settlement.
              </p>

              <h2 id="credit-score-reality" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">The Reality of Your Credit Score</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We believe in complete transparency. Choosing to settle your loan <em>will</em> impact your CIBIL score. When a settlement is processed, the bank reports the account status as "Settled" rather than "Closed." This indicates to future lenders that the loan was not repaid in full.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>But consider the alternative:</strong> If you are unable to pay, your account will eventually be marked as "Written Off" or "Suit Filed" (if legal action is taken). These statuses are far more damaging and permanent. A "Default" status drags your score down every single month. Settlement stops this bleeding. It zeroes out the outstanding balance and closes the account.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>The Path to Redemption:</strong> A "Settled" status is not the end of your financial life. Once the debt is cleared, you can begin the process of rebuilding. By taking a small secured credit card (backed by a Fixed Deposit) and paying the bills on time, you can steadily improve your score. Within 18 to 24 months of disciplined behavior, it is entirely possible to restore your creditworthiness to a healthy 750+ level.
              </p>

              <h2 id="scams-west-bengal" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Beware of Settlement Scams in West Bengal</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The distress of debt often makes people vulnerable. In West Bengal, scammers have devised specific tricks to target anxious borrowers. Be vigilant against these red flags:
              </p>
              <ul className="list-disc pl-6 space-y-4 mb-6 text-gray-700">
                <li>
                  <strong>The "Calcutta High Court" WhatsApp Notice:</strong> You might receive a document on WhatsApp that looks like a formal legal notice from the Calcutta High Court or Alipore Court, complete with official-looking seals. It will claim that an arrest warrant has been issued against you and you must pay a "fine" or "settlement" immediately via UPI to stop it. <strong>This is a fraud.</strong> Courts never operate via WhatsApp, and they never ask for payments to personal UPI handles.
                </li>
                <li>
                  <strong>The "Loan Closure" Agent:</strong> You may meet agents in local trains or near bus stands who claim they know the bank manager personally and can "wipe" your loan for a cash fee. They might ask for ₹10,000 or ₹20,000 upfront. Never hand over cash to individuals. All settlement payments must be made directly to the bank.
                </li>
                <li>
                  <strong>Fake Settlement Letters:</strong> Scammers use Photoshop to create settlement letters that look exactly like those from HDFC, SBI, or Bajaj Finance. They will ask you to deposit the settlement amount into a specific bank account which, upon closer inspection, turns out to be a personal account, not the bank's loan account. Always verify the account number.
                </li>
              </ul>

              <h2 id="cities-covered-wb" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">We Serve Every Corner of West Bengal</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                CredSettle's expertise is not limited to Kolkata. We have a robust network that spans the entire state, ensuring that help is available whether you are in the hills of Darjeeling or the coastal town of Haldia.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['Kolkata', 'Howrah', 'Salt Lake', 'New Town', 'Asansol', 'Durgapur', 'Siliguri', 'Bardhaman', 'Malda', 'Kharagpur', 'Haldia', 'Berhampore', 'Krishnanagar', 'Barasat', 'Darjeeling', 'Chinsurah', 'Serampore', 'Barrackpore', 'Midnapore', 'Cooch Behar'].map((city, index) => (
                  <span key={index} className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium border border-blue-100 transition-colors hover:bg-blue-100">
                    {city}
                  </span>
                ))}
              </div>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqList.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                    <h3 className="font-bold text-xl text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl">
                <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-10"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">Reclaim Your Peace of Mind in Bengal</h3>
                  <p className="mb-10 opacity-90 max-w-2xl mx-auto text-lg">
                    Don't let debt define your future. With the law on your side and CredSettle by your side, a debt-free life is within reach. Expert legal help is just a click away.
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-700 font-bold py-4 px-12 rounded-full hover:bg-gray-100 transition-all shadow-lg transform hover:-translate-y-1 text-lg"
                  >
                    Start Your Settlement Journey
                  </Link>
                  <p className="mt-6 text-sm opacity-75 font-medium">Serving Kolkata, Howrah, Siliguri & All WB Districts</p>
                </div>
              </div>

            </article>
          </div>

          {/* Right Column: Sidebar (Desktop) */}
          <div className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center transition-transform hover:-translate-y-1 duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                   <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">West Bengal Support</h4>
                <p className="text-sm text-gray-600 mb-6">Specialized legal aid for Kolkata & WB residents.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                >
                  Check Eligibility
                </Link>
                <div className="mt-4 text-xs text-gray-500 space-y-2 text-left px-2">
                  <p className="flex items-center"><span className="text-green-500 mr-2">✓</span> Kolkata Based Team</p>
                  <p className="flex items-center"><span className="text-green-500 mr-2">✓</span> Money Lenders Act Expert</p>
                  <p className="flex items-center"><span className="text-green-500 mr-2">✓</span> Lok Adalat Support</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Regions</h4>
                <ul className="space-y-3 text-sm">
                   <li>
                    <Link href="/loan-settlement/delhi" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-blue-600 rounded-full mr-2 transition-colors"></span>
                      Delhi Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement/maharashtra" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-blue-600 rounded-full mr-2 transition-colors"></span>
                      Maharashtra Guide
                    </Link>
                  </li>
                   <li>
                    <Link href="/loan-settlement/uttar-pradesh" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-blue-600 rounded-full mr-2 transition-colors"></span>
                      UP Guide
                    </Link>
                  </li>
                </ul>
              </div>

               <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Our Services</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/services/personal-loan-settlement" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-blue-600 rounded-full mr-2 transition-colors"></span>
                      Personal Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/credit-card-settlement" className="text-gray-600 hover:text-blue-600 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-400 group-hover:bg-blue-600 rounded-full mr-2 transition-colors"></span>
                      Credit Card Settlement
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}