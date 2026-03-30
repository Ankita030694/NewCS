'use client';

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const faqData = [
  {
    question: "Is it easier to settle a personal loan or a home loan?",
    answer: "It is much easier to settle a personal loan because there is no collateral for the bank to fall back on. Home loan settlements require more documentation and the waivers are usually smaller."
  },
  {
    question: "Can the bank take my house without going to court?",
    answer: "Yes, under the SARFAESI Act 2002, if you have defaulted and the loan is an NPA, the bank can take possession and auction the property after following the notice procedure, without needing a court order."
  },
  {
    question: "What is the minimum percentage a bank accepts for a home loan settlement?",
    answer: "There is no fixed minimum, but generally, banks look for at least the Principal Amount plus a portion of the interest. In extreme cases of property depreciation, they might accept 70% to 80% of the total outstanding."
  },
  {
    question: "Does the SARFAESI Act apply to agricultural land?",
    answer: "No. Section 31(i) of the SARFAESI Act explicitly excludes agricultural land from being seized. This gives farmers much more leverage in debt negotiations compared to urban home buyers."
  },
  {
    question: "Can I settle a car loan after the repo man has taken the car?",
    answer: "Yes, but you must act quickly before the car is auctioned. You can negotiate an OTS to get the car back, but the bank will include the towing and yard charges in the amount."
  },
  {
    question: "Will a settlement remove the NPA status from my records?",
    answer: "The account will be closed in the bank’s books, but in your CIBIL report, it will be marked as Settled. This is better than an Active Default but still impacts your ability to get future loans for several years."
  },
  {
    question: "What happens if the auction fails to find a buyer?",
    answer: "If the auction fails (no bidders), the bank’s bargaining power decreases. They might then be more willing to accept a lower settlement offer from the borrower because they don’t want to hold onto a Dead Asset."
  },
  {
    question: "Can I use specialized apps for a secured loan settlement?",
    answer: "Yes, specialized apps and legal service providers can help you draft replies to SARFAESI notices and identify procedural errors that give you leverage for a better settlement."
  },
  {
    question: "Is a 50% waiver possible on a home loan?",
    answer: "It is extremely rare. It only happens if the property value has crashed significantly below the loan amount or if there is a severe legal defect in the property titles that makes it impossible for the bank to auction it."
  },
  {
    question: "How long does a secured loan settlement take?",
    answer: "From the first proposal to the final No Dues Certificate, it usually takes 3 to 6 months. This allows for valuations, committee approvals, and the payment window."
  },
  {
    question: "What is the 'Symbolic Possession' mentioned in SARFAESI notices?",
    answer: "Symbolic possession means the bank has a legal claim to the property but Has Not physically evicted you. You can still reside there, but you cannot enter into any transaction (sell/rent) with the property. This is a critical time to negotiate an OTS."
  },
  {
    question: "Can I settle if my loan has been sold to an ARC like Edelweiss?",
    answer: "Yes! In fact, ARCs are usually more flexible than banks. They buy debt at a discount and are often willing to settle for a lower amount than the original bank, as long as they make a profit on their purchase price."
  },
  {
    question: "What happens if a co-borrower does not agree to the settlement?",
    answer: "All co-borrowers and guarantors must ideally sign the settlement proposal. If one is unavailable, the bank may still proceed if the primary borrower takes full liability, but this varies between bank policies."
  },
  {
    question: "Does the bank return my original documents after settlement?",
    answer: "Yes, absolutely. Under the latest RBI Fair Practices Code, the bank must return all original property or vehicle documents within 30 days of the full payment. If they fail, they are liable to pay a daily penalty to the borrower."
  },
  {
    question: "Can I get a stay on an auction through DRT?",
    answer: "Yes, if there is a procedural error in the bank’s notices or if you can prove that the valuation is unfairly low, the Debt Recovery Tribunal can grant a stay on the auction, giving you more time to arrange funds for a settlement."
  }
];

const reviews = [
  {
    name: "Rajesh Kumar",
    location: "Mumbai",
    rating: 5,
    text: "I was terrified of the SARFAESI notice on my flat. CredSettle helped me understand the 13(2) timeline and managed to negotiate a 25% waiver with my bank. We saved our family home."
  },
  {
    name: "Anjali Gupta",
    location: "Delhi",
    rating: 5,
    text: "Settling a car loan after it was repossessed seemed impossible. The team worked with the bank to waive off the extra yard charges and settled the balance for a reasonable amount. Highly professional."
  },
  {
    name: "Suresh Menon",
    location: "Bangalore",
    rating: 4,
    text: "Very knowledgeable about the OTS policies of PSUs. They identified a technical error in the bank’s valuation which gave us the upper hand in the settlement negotiation."
  },
  {
    name: "Meera Deshmukh",
    location: "Pune",
    rating: 5,
    text: "Transparent and honest. They told me upfront that secured loans get lower discounts than credit cards, but their help with the legal documentation was worth every rupee."
  }
];

const navLinks = [
  { id: 'intro', label: 'Myth of Unsettlable Loan' },
  { id: 'unsecured-vs-secured', label: 'Comparing Ground' },
  { id: 'sarfaesi-act', label: 'SARFAESI Framework' },
  { id: 'technical-leverage', label: 'Technical Leverage' },
  { id: 'asset-specifics', label: 'Vehicle & LAP Specifics' },
  { id: 'drt-role', label: 'The Power of DRT' },
  { id: 'arc-negotiation', label: 'Negotiating with ARCs' },
  { id: 'why-settle', label: 'Why Banks Settle' },
  { id: 'strategy', label: 'Settlement Strategy' },
  { id: 'ots-scheme', label: 'OTS Schemes' },
  { id: 'comparison', label: 'Comparison Table' },
  { id: 'faqs', label: 'Expert FAQs' }
];

export default function SecuredVsUnsecuredClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [isMobile, setIsMobile] = useState(false);
  const mobTocRef = useRef<HTMLDivElement>(null);

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
      { rootMargin: '-100px 0px -35% 0px', threshold: 0.1 }
    );
    const headings = document.querySelectorAll('h2[id], h3[id]');
    headings.forEach((heading) => observer.observe(heading));
    return () => headings.forEach((heading) => observer.unobserve(heading));
  }, []);

  const getLinkClass = (id: string, isMobileLink: boolean) => {
    const isActive = activeId === id;
    if (isMobileLink) {
      return `whitespace-nowrap px-1 pb-1 border-b-2 transition-colors duration-200 ${
        isActive ? 'border-blue-600 text-blue-600 font-semibold' : 'border-transparent text-gray-600 hover:text-blue-600'
      }`;
    } else {
      return `block py-1.5 px-3 rounded-lg transition-all ${
        isActive ? 'bg-blue-600 text-white font-semibold' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
      }`;
    }
  };

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="font-sans text-[#0C2756] bg-white">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden flex items-center justify-center min-h-[50vh]"
        style={{ background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)' }}
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Can I Settle a Secured Loan Like a Home Loan, <br className="hidden md:block" />
            <span className="text-blue-300">or Only Unsecured Ones?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
            Shattering the myths of debt resolution in 2025. A comprehensive look at SARFAESI Act, OTS schemes, and how to protect your assets while seeking a waiver.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button 
              onClick={() => window.open('https://api.whatsapp.com/send?phone=919540003295&text=I%20want%20to%20settle%20my%20loan', '_blank')}
              className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 py-4">
          <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center hover:text-blue-600 transition-colors">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-300 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 5l7 7-7 7" />
                  </svg>
                  <span className="font-medium text-gray-600">Secured vs Unsecured Loan Settlement</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-16">
        
        {/* Mobile TOC */}
        <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm -mx-4 px-4 py-3 mb-8 flex items-center overflow-x-auto no-scrollbar" ref={mobTocRef}>
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

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* Left Column: TOC */}
          <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Outline</h3>
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
          </aside>

          {/* Middle Column: Main Content */}
          <main className="lg:w-2/4 xl:w-3/5 w-full">
            <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="mb-16">
                <h2 id="intro" className="text-3xl font-bold mb-6 text-gray-900 scroll-mt-24">Introduction: The Myth of the Unsettlable Loan</h2>
                <p className="text-gray-700 leading-relaxed">
                  In the world of Indian debt management, a common misconception prevails: that only unsecured debts like credit cards and personal loans can be settled. Many borrowers believe that once a Security (like a house or a car) is involved, the bank will never agree to a discount. They assume the only path is either full repayment or the eventual seizure and auction of the property.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  As we enter 2025, this black and white view of the financial landscape is no longer accurate. While it is true that settling a secured loan is significantly more complex and follows a different legal playbook, it is absolutely possible. The process is governed by the SARFAESI Act, 2002, and depends heavily on the Liquidity of the asset and the Audacity of the negotiation.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  This deep dive will shatter the myths and provide you with a strategic roadmap. We will explain why banks settle secured debts, how the SARFAESI legal timeline creates opportunities for negotiation, and why a One Time Settlement (OTS) might be a better option for both you and the bank than an aggressive auction.
                </p>
              </div>

              <div className="mb-16">
                <h2 id="unsecured-vs-secured" className="text-3xl font-bold mb-6 text-gray-900 scroll-mt-24">Section 1: Defining the Battleground - Secured vs. Unsecured Debt</h2>
                <p className="text-gray-700 leading-relaxed">
                  To understand why settlement is possible for a home loan, we must first understand the fundamental differences in how banks view their risk.
                </p>
                <h3 className="text-2xl font-semibold mt-8 mb-4">Unsecured Debt: The Nothing to Lose Scenario</h3>
                <p className="text-gray-700 leading-relaxed">
                  For a credit card or a personal loan, the bank has no collateral. If you stop paying, the bank has to go through a long, expensive court process (civil suit) to get a decree against you. Because recovery is uncertain and costly, banks are often willing to accept 20% to 30% of the total outstanding amount just to get something rather than nothing.
                </p>
                <h3 className="text-2xl font-semibold mt-8 mb-4">Secured Debt: The Collateral Comfort</h3>
                <p className="text-gray-700 leading-relaxed">
                  For a home loan or a car loan, the bank is in a position of strength. They hold the Title Deeds or the Registration Papers. Under the SARFAESI Act, they don’t even need a court’s permission to take over the property if you default. They can simply issue a notice, take possession, and auction it off. Because of this, the waiver (discount) on a secured loan is much lower, typically ranging from 10% to 35%, rarely exceeding 40% unless the property is practically unsellable.
                </p>
              </div>

              <div className="mb-16">
                <h2 id="sarfaesi-act" className="text-3xl font-bold mb-6 text-gray-900 scroll-mt-24">Section 2: The Legal Framework - SARFAESI Act 2002</h2>
                <p className="text-gray-700 leading-relaxed font-medium text-blue-900 bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 mb-6">
                  The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act is the primary law governing secured debt recovery in India. Understanding its timeline is crucial because the best time to settle is often between the legal notices.
                </p>
                <h3 className="text-2xl font-semibold mt-8 mb-4">The Default and the 13(2) Notice</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  When you miss three consecutive EMIs, your loan becomes a Non Performing Asset (NPA). The bank then issues a notice under Section 13(2). This is a 60 Day Demand Notice. It tells you that you have 60 days to pay the entire outstanding amount or the bank will exercise its right to take the property. This is your primary window for a "Soft Negotiation."
                </p>
                <h3 className="text-2xl font-semibold mt-8 mb-4">The 13(4) Notice: Symbolic Possession</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  If the 60-day period expires without payment, the bank issues a notice under Section 13(4). They physically put a "Possession Notice" on your property. This is <strong>Symbolic Possession</strong>. You can still live in the house, but you cannot sell it. The bank usually begins the process of appointing an authorized officer for auction at this stage.
                </p>
                <h3 className="text-2xl font-semibold mt-8 mb-4">Section 14: Physical Possession</h3>
                <p className="text-gray-700 leading-relaxed">
                  The final stage is when the bank approaches the District Magistrate (DM) or Chief Metropolitan Magistrate (CMM) under Section 14 to get police assistance for <strong>Physical Possession</strong>. Once you are evicted, your leverage for a settlement drops significantly as the bank now has full control of the asset.
                </p>
              </div>

              <div className="mb-16">
                <h2 id="technical-leverage" className="text-3xl font-bold mb-6 text-gray-900 scroll-mt-24">Section 3: Technical Leverage - Identifying Bank Procedural Errors</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Banks are under immense pressure to recover NPAs, and in their haste, they often make procedural errors that can be used as leverage in settlement negotiations.
                </p>
                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 mb-6">
                  <h4 className="font-bold text-orange-900 mb-4">Common Leverage Points:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Improper Service of Notice:</strong> If the 13(2) notice was not delivered to all co-borrowers or not published in two newspapers (one in vernacular language), the entire proceeding can be stayed in the DRT.</li>
                    <li><strong>Incorrect Outstanding Amount:</strong> If the bank has included penal interest or charges that were not part of the original agreement, the notice is legally flawed.</li>
                    <li><strong>Valuation Flaws:</strong> Banks often use "Distress Valuation" to justify a lower auction price. Proving that the property value is higher than the bank’s estimate can delay the auction.</li>
                  </ul>
                </div>
              </div>

              <div className="mb-16">
                <h2 id="asset-specifics" className="text-3xl font-bold mb-6 text-gray-900 scroll-mt-24">Section 4: Asset Specifics - Vehicle Loans vs. LAP</h2>
                <h3 className="text-2xl font-semibold mt-8 mb-4">Vehicle Loan Settlements: The Depreciation Leverage</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Unlike real estate, which generally appreciates, vehicles are "Depreciating Assets." From the moment a car leaves the showroom, it loses 15-20% of its value. For a bank, a repossessed vehicle sitting in a yard is a liability.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                    <h4 className="font-bold text-blue-900 mb-2">The Yard Cost Factor</h4>
                    <p className="text-sm text-gray-700">Banks pay ₹500 to ₹1,500 per day for yard storage and security. Over 6 months, this cost can exceed ₹2 Lakhs, often making it cheaper for the bank to settle for the principal amount than to auction the car.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                    <h4 className="font-bold text-blue-900 mb-2">Auction Realities</h4>
                    <p className="text-sm text-gray-700">Second-hand vehicles sold through bank auctions rarely fetch more than 60% of the market value. This gives the borrower a strong position to negotiate an OTS that matches the auction’s expected net recovery.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Loan Against Property (LAP): Commercial vs. Residential</h3>
                <p className="text-gray-700 leading-relaxed">
                  LAP is often treated as a "Commercial Risk." If the property used as collateral is a commercial shop or a warehouse, banks are more aggressive but also more pragmatic. Because these aren’t "Primary Residences," the emotional weight is lower, and banks are open to 25-30% waivers if the business has folded and there are no other assets to attach.
                </p>
              </div>

              <div className="mb-16">
                <h2 id="drt-role" className="text-3xl font-bold mb-6 text-gray-900 scroll-mt-24">Section 5: Legal Pressure - The Role of the DRT</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The <strong>Debt Recovery Tribunal (DRT)</strong> is the specialized court where SARFAESI actions are challenged. For a borrower, filing a Securitisation Application (SA) under Section 17 is the ultimate "Checkmate" move in a negotiation.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  When a borrower moves the DRT, they highlight "Procedural Lapses" in the bank’s notices. If the DRT finds even a minor error-like an incorrect date on the newspaper publication or a failure to serve notice to a guarantor-it can grant a <strong>Status Quo</strong> or a <strong>Stay on Auction</strong>.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-6 italic text-gray-600">
                  "Once an auction is stayed, the bank’s recovery officer faces internal pressure. The account stays as an NPA, capital is blocked, and the recovery target for the quarter is missed. This is the exact moment when the bank’s 'Hard Stance' turns into a 'Settlement Offer'."
                </div>
              </div>

              <div className="mb-16">
                <h2 id="arc-negotiation" className="text-3xl font-bold mb-6 text-gray-900 scroll-mt-24">Section 6: Negotiating with ARCs (Asset Reconstruction Companies)</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Asset Reconstruction Companies (ARCs) are unique players in the Indian debt market. They buy "Stressed Portfolios" from banks at a massive discount (often 40% to 60% of the book value).
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Better Waivers</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">Since the ARC bought your ₹1 Crore loan for ₹50 Lakhs, if you offer them ₹70 Lakhs as a settlement, they make a ₹20 Lakh profit. A bank, on the other hand, would see that same ₹70 Lakhs as a ₹30 Lakh loss.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Flexible Structures</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">Unlike PSU banks that require rigid committee approvals, ARCs are private entities. They can agree to longer installment plans (up to 12 months) and custom waiver structures that suit your specific cash flow.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 id="why-settle" className="text-3xl font-bold mb-6 text-gray-900 scroll-mt-24">Section 7: Why Would a Bank Settle a Home Loan?</h2>
                <p className="text-gray-700 leading-relaxed mb-6">The decision to settle is a commercial one, driven by three major factors:</p>
                <ul className="space-y-6 text-gray-700">
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2.5 flex-shrink-0"></div>
                    <div>
                      <strong>The NPA Provisioning Burden:</strong> Under RBI’s Basell III norms, banks must keep aside a portion of their profits (provisioning) for every NPA. For "Doubtful Assets," this can be as high as 40-100%. Settling releases this capital back into the bank’s profitable books.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2.5 flex-shrink-0"></div>
                    <div>
                      <strong>The Cost of Legal Attrition:</strong> A full SARFAESI recovery takes 18-36 months if contested. The legal fees, valuer fees, and security guard costs often eat up 5-8% of the property value. A settlement provides 100% of the agreed value <em>today</em>.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2.5 flex-shrink-0"></div>
                    <div>
                      <strong>Market Volatility:</strong> Real estate is not as liquid as people think. If an auction fails twice, the bank must lower the "Reserve Price" by 10%. Smart managers would rather settle with the borrower at the original reserve price than risk a failed public auction.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-16">
                <h2 id="strategy" className="text-3xl font-bold mb-6 text-gray-900 scroll-mt-24">Section 8: Settlement Strategy for Secured Loans</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  A successful secured loan settlement follows a 4-step roadmap:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">01</div>
                    <div className="font-bold text-sm mb-2">Independent Valuation</div>
                    <p className="text-xs text-gray-500">Get your own valuation report to counter the bank’s distress value.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">02</div>
                    <div className="font-bold text-sm mb-2">Hardship Profile</div>
                    <p className="text-xs text-gray-500">Document medical/business losses to prove lack of 'Wilful Default'.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">03</div>
                    <div className="font-bold text-sm mb-2">Liquid Proof</div>
                    <p className="text-xs text-gray-500">Show a bank statement with ready funds to trigger the 'Closure' instinct.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">04</div>
                    <div className="font-bold text-sm mb-2">Legal Vetting</div>
                    <p className="text-xs text-gray-500">Audit the OTS letter to ensure full waiver of all future rights.</p>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 id="ots-scheme" className="text-3xl font-bold mb-6 text-gray-900 scroll-mt-24">Section 9: The One Time Settlement (OTS) Scheme</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Most PSU banks (SBI, PNB, Canara) release periodic <strong>Special OTS Schemes</strong> (often during the March or September closing). These schemes usually follow a mathematical formula:
                </p>
                <div className="bg-blue-900 text-white p-8 rounded-3xl mb-8 shadow-xl">
                  <h4 className="font-bold text-xl mb-4 border-b border-blue-700 pb-2">Common OTS Formulae:</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span><strong>Category A (Sub-Standard):</strong> Principal + 10% interest.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span><strong>Category B (Doubtful \u003e 3 yrs):</strong> 100% of Principal (Interest waived).</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span><strong>Category C (Loss Assets):</strong> 70-80% of Principal amount.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-16">
                <h2 id="comparison" className="text-3xl font-bold mb-6 text-gray-900 scroll-mt-24">Section 10: Comparison Table</h2>
                <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                  <table className="w-full border-collapse bg-white text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100">
                        <th className="p-4 text-left font-bold text-gray-900">Feature</th>
                        <th className="p-4 text-left font-bold text-gray-900 text-blue-600">Unsecured Loans</th>
                        <th className="p-4 text-left font-bold text-gray-900 text-red-600">Secured Loans</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 text-gray-600">
                      <tr>
                        <td className="p-4 font-semibold text-gray-900">Average Waiver</td>
                        <td className="p-4">50% to 80%</td>
                        <td className="p-4">15% to 35%</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-gray-900">Recovery Timeline</td>
                        <td className="p-4">3 to 6 Months</td>
                        <td className="p-4">1 to 3 Years</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-gray-900">Legal Complexity</td>
                        <td className="p-4">Medium (Civil Suits)</td>
                        <td className="p-4">High (SARFAESI/DRT)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-gray-900">Negotiation Level</td>
                        <td className="p-4">Direct (Credit Manager)</td>
                        <td className="p-4">Legal (Authorized Officer)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-gray-900">CIBIL Impact</td>
                        <td className="p-4">High (Negative Marker)</td>
                        <td className="p-4">Medium (Asset Cleared)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-16">
                <h2 id="faqs" className="text-3xl font-bold mb-8 text-gray-900 scroll-mt-24">Expert FAQs</h2>
                <div className="space-y-6">
                  {faqData.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Need Help Settling a Secured Loan?</h3>
                <p className="text-blue-800 mb-6">Don’t let the legal notices overwhelm you. Our legal team can help you negotiate a fair settlement and protect your property.</p>
                <button 
                  onClick={() => window.open('https://api.whatsapp.com/send?phone=919540003295&text=I%20want%20to%20settle%20my%20loan', '_blank')}
                  className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md"
                >
                  Message on WhatsApp
                </button>
              </div>

              {/* Reviews Section */}
              <div id="reviews" className="mt-20 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Client Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {reviews.map((review, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                      <div className="flex text-yellow-400 mb-3">
                        {[...Array(review.rating)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4" />)}
                      </div>
                      <p className="text-gray-700 italic mb-4 leading-relaxed font-light text-sm">"{review.text}"</p>
                      <div className="flex justify-between items-center text-xs font-bold text-blue-900 uppercase tracking-wider">
                        <span>{review.name}</span>
                        <span className="opacity-60">{review.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </main>

          {/* Right Column: CTA & Resources */}
          <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Start Resolution</h4>
                <p className="text-sm text-gray-600 mb-6">Facing a SARFAESI notice? Get professional help today to negotiate the best OTS terms.</p>
                <button 
                  onClick={() => window.open('https://api.whatsapp.com/send?phone=919540003295&text=I%20want%20to%20settle%20my%20loan', '_blank')}
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                >
                  Start Consultation
                </button>
              </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Must Read Pieces</h4>
                  <nav className="space-y-3">
                    <Link href="/is-loan-settlement-a-good-option-for-borrowers" className="flex group items-start">
                      <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                      <span className="text-[13px] text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">Is Settlement Good?</span>
                    </Link>
                    <Link href="/how-does-settling-a-loan-impact-my-cibil-credit-score" className="flex group items-start">
                      <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                      <span className="text-[13px] text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">CIBIL Score Impact</span>
                    </Link>
                    <Link href="/will-banks-blacklist-you-after-loan-settlement" className="flex group items-start">
                      <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                      <span className="text-[13px] text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">Blacklisting Myths</span>
                    </Link>
                  </nav>
                </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        h2, h3 { scroll-margin-top: 80px; }
      `}</style>
    </main>
  );
}
