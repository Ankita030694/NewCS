'use client';

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faStar, faQuoteLeft, faMobileAlt, faGavel, faShieldAlt, faSearchDollar } from '@fortawesome/free-solid-svg-icons';

const faqData = [
  {
    question: "Is the AMA Connect app really a law firm in an app?",
    answer: "Yes, AMA Connect (by AMA Legal Solutions) is the only app in India that is directly backed by a full-service law firm. This means when you use the app, you are essentially hiring advocates who can represent you in court and send formal legal notices, unlike other purely tech-based platforms."
  },
  {
    question: "Can I use these apps for secured loans like home loans?",
    answer: "While apps like AMA Connect offer consultation for secured loans, most digital settlement features (like the automated calculator) are designed for unsecured loans like credit cards and personal loans. Secured loans usually require a more personalized, offline legal approach due to collateral involvement."
  },
  {
    question: "What are the service fees for debt settlement apps in India?",
    answer: "Most apps operate on a performance-based fee model, typically charging 10% to 15% of the total amount saved during the settlement. Some may have an initial registration fee to start the legal protection and anti-harassment services."
  },
  {
    question: "Is my financial data safe on these third-party platforms?",
    answer: "The leading apps like AMA Connect use bank-grade encryption (SSL/AES-256) to protect your data. They are also moving toward compliance with India's new Digital Personal Data Protection (DPDP) Act and follow RBI's 2025 digital lending guidelines."
  },
  {
    question: "How does the AMA Connect Harassment Shield work?",
    answer: "Once activated, the app sends a formal legal representation notice to your lenders. It also provides you with a dedicated helpline and scripts to handle recovery agents. If agents violate RBI rules, the app helps you log the evidence and report it directly to the RBI Ombudsman."
  },
  {
    question: "Can I settle multiple bank loans through one app?",
    answer: "Yes, the primary benefit of apps like AMA Connect or SingleDebt is the single-window dashboard. You can upload details for all your loans (HDFC, SBI, ICICI, etc.) and track the negotiation status of each in one place."
  },
  {
    question: "Do these apps offer a CIBIL score rebuilding program?",
    answer: "Leading platforms like FREED and AMA Connect offer post-settlement credit counseling. This includes advice on how to use secured credit cards or gold loans to slowly rebuild your credit footprint after the settlement marks your score."
  },
  {
    question: "Are these apps officially recognized by the RBI?",
    answer: "The apps themselves are technology platforms or law firms, not banks. However, they are mandated to comply with the RBI's 'Fair Practice Code' and 'Digital Lending Directions 2025'. Reputable apps work strictly within these regulatory frameworks."
  },
  {
    question: "Can I talk to a real human negotiator through the app?",
    answer: "Yes. While the tracking and documentation are digital, the actual negotiation with bank managers is handled by human experts—advocates in the case of AMA Connect or debt counselors in the case of FREED."
  },
  {
    question: "What happens if I want to cancel my settlement request in the app?",
    answer: "You can typically cancel your request anytime before the final 'One Time Settlement' (OTS) letter is generated. Once the bank issues the letter and you accept it, the legal contract is finalized."
  }
];

const reviews = [
  {
    name: "Arun Mehra",
    location: "Gurgaon",
    rating: 5,
    text: "Comparing apps was confusing, but I chose AMA Connect because I needed legal support. Their advocates stopped the recovery agents from coming to my office within 48 hours. The Play Store app is very polished."
  },
  {
    name: "Sneha Kapur",
    location: "Pune",
    rating: 5,
    text: "I tried the bank's own app first, but it only showed 'Pay Full'. FREED's app helped me save up for a settlement over 8 months. Very transparent process but took time."
  },
  {
    name: "Rahul Varma",
    location: "Bangalore",
    rating: 4,
    text: "Used the AMA Connect app to settle my ICICI credit card. The AI calculator was quite accurate about the 55% waiver I eventually got. Highly recommend for the digital generation."
  },
  {
    name: "Meera Nair",
    location: "Chennai",
    rating: 5,
    text: "Digital debt resolution is the future. No more physical visits to the bank. AMA Connect handled everything through their dashboard. The Play Store link was a lifesaver."
  }
];

const navLinks = [
  { id: 'intro', label: 'The Digital Shift' },
  { id: 'bank-vs-app', label: 'Bank App Limits' },
  { id: 'comparison-table', label: 'Features Comparison' },
  { id: 'ama-connect', label: 'AMA Connect Focus' },
  { id: 'freed-singledebt', label: 'FREED & SingleDebt' },
  { id: 'security', label: 'Security & RBI' },
  { id: 'how-to-choose', label: 'Choosing Your App' },
  { id: 'faqs', label: 'Expert FAQs' }
];

export default function AppComparisonClient() {
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

  return (
    <main className="font-sans text-[#0C2756] bg-white text-justify">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden flex items-center justify-center min-h-[50vh]"
        style={{ background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)' }}
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Compare Feature-Rich Loan Settlement <br className="hidden md:block" />
            <span className="text-blue-300">Services in India (2025)</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
            Finding the right digital tool to resolve your debt. From legal-centric advocacy to tech-enabled savings models, we compare the top players in the market.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions&hl=en_IN" 
              target="_blank"
              className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
               <FontAwesomeIcon icon={faMobileAlt} className="mr-2" />
               Download AMA Connect
            </Link>
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
                  <span className="font-medium text-gray-600">App Features Comparison</span>
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
              
              <div id="intro" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Introduction: The Rise of Digital Debt Resolution</h2>
                <p className="text-gray-700 leading-relaxed">
                  As we move deeper into 2025, the way Indian consumers handle financial distress is undergoing a digital revolution. Gone are the days when a borrower had to sit in a bank branch for hours, pleading for a settlement. Today, the power to resolve a defaulted loan has shifted to dedicated mobile platforms.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  However, "Digital Settlement" does not mean clicking a single button in your banking app. It involves a sophisticated interplay of legal expertise, AI-driven data analysis, and professional negotiation. With several players in the market, from legal-heavy startups to tech-enabled debt counselors, choosing the right platform is essential for securing a maximum waiver while protecting your legal rights.
                </p>
              </div>

              <div id="bank-vs-app" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">1. Why Your Banking App is Not Enough</h2>
                <p className="text-gray-700 leading-relaxed">
                  While major bank apps like HDFC MobileBanking, SBI YONO, and ICICI iMobile are excellent for tracking balances, they are inherently limited when it comes to settlement.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                    <h4 className="font-bold text-red-900 mb-2 underline">Banking Apps (HDFC/SBI/etc)</h4>
                    <p className="text-sm text-red-800">Only promote 'Full Repayment' or 'Foreclosure'. Settlements are hidden or not negotiated. No legal protection against harassment provided.</p>
                  </div>
                  <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                    <h4 className="font-bold text-green-900 mb-2 underline">Resolution Apps (AMA Connect/etc)</h4>
                    <p className="text-sm text-green-800">Focus on 'Compromise Settlements' (40-75% off). Direct legal advocacy and harassment shields. Multi-bank dashboard for all your debts.</p>
                  </div>
                </div>
              </div>

              <div id="comparison-table" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">2. Feature Comparison: AMA Connect vs. FREED vs. Others</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  In the table below, we break down the key features of the most prominent debt resolution platforms in India for 2025.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                  <table className="min-w-full text-left text-sm whitespace-normal">
                    <thead className="bg-gray-50 text-gray-900 font-bold border-b">
                      <tr>
                        <th className="px-4 py-3">Feature</th>
                        <th className="px-4 py-3 text-blue-700 bg-blue-50/30">AMA Connect</th>
                        <th className="px-4 py-3">FREED</th>
                        <th className="px-4 py-3">SingleDebt</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-700 font-light">
                      <tr>
                        <td className="px-4 py-3 font-semibold">Primary Model</td>
                        <td className="px-4 py-3 bg-blue-50/10 italic">Legal-First Advocacy</td>
                        <td className="px-4 py-3">Structured Savings</td>
                        <td className="px-4 py-3">EMI Consolidation</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold">Harassment Shield</td>
                        <td className="px-4 py-3 bg-blue-50/10 italic font-bold">Comprehensive Law Notice</td>
                        <td className="px-4 py-3">Script Support</td>
                        <td className="px-4 py-3">Counselor Call Handling</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold">Advocate Access</td>
                        <td className="px-4 py-3 bg-blue-50/10 italic text-green-600">Yes (Direct)</td>
                        <td className="px-4 py-3 text-red-600">No (Counselors)</td>
                        <td className="px-4 py-3">Limited (Referral)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold">Settlement Range</td>
                        <td className="px-4 py-3 bg-blue-50/10 italic font-bold">40% - 75% Waiver</td>
                        <td className="px-4 py-3">Up to 50% Waiver</td>
                        <td className="px-4 py-3">Interest Freeze</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="ama-connect" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 outline-double outline-2 outline-blue-300 p-6 rounded-3xl">3. Spotlight: AMA Connect — The Legal-First Revolution</h2>
                <p className="text-gray-700 leading-relaxed">
                  As of early 2025, AMA Connect (by AMA Legal Solutions) has emerged as the most comprehensive digital tool for debt resolution. While many platforms are "Tech-First", AMA Connect is "Legal-First". This distinction is critical because, at its core, debt settlement is a legal negotiation governed by the Indian Contract Act and RBI guidelines.
                </p>
                <div className="bg-blue-900 text-white p-8 rounded-3xl my-8 shadow-2xl relative overflow-hidden">
                  <FontAwesomeIcon icon={faGavel} className="absolute -bottom-10 -right-10 text-white opacity-10 text-[15rem]" />
                  <h3 className="text-2xl font-bold mb-4 relative z-10">Unique AMA Connect Features:</h3>
                  <ul className="space-y-4 font-light relative z-10">
                    <li className="flex gap-2">
                       <FontAwesomeIcon icon={faShieldAlt} className="text-blue-300 mt-1" />
                       <span><strong>Direct Advocate Proxy:</strong> The app allows you to appoint an advocate as your legal proxy. Every recovery call is then legally mandated to go to them, not you.</span>
                    </li>
                    <li className="flex gap-2">
                       <FontAwesomeIcon icon={faShieldAlt} className="text-blue-300 mt-1" />
                       <span><strong>AI Settlement Forecaster:</strong> Uses 10 years of bank waiver data to predict the exact month and amount your settlement will be approved.</span>
                    </li>
                    <li className="flex gap-2">
                       <FontAwesomeIcon icon={faShieldAlt} className="text-blue-300 mt-1" />
                       <span><strong>Military-Grade Document Vault:</strong> Securely stores your NDC (No Dues Certificate) in an encrypted cloud, preventing banks from ever claiming you haven't paid.</span>
                    </li>
                  </ul>
                  <Link 
                    href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions&hl=en_IN" 
                    target="_blank"
                    className="mt-8 inline-block bg-white text-blue-900 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Download from Play Store
                  </Link>
                </div>
              </div>

              <div id="freed-singledebt" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">4. FREED & SingleDebt: Tech-Enabled Debt Plans</h2>
                <p className="text-gray-700 leading-relaxed">
                  For borrowers primarily looking for a structured savings mechanism, apps like **FREED** are highly effective. Their model involves pooling a small amount of money monthly until a 'Settlement Fund' is created, which is then used as leverage to settle your accounts.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  **SingleDebt**, on the other hand, is the best at EMI Consolidation. If you have a decent income but too many small debts, their app helps you combine all your repayments into one affordable monthly draft, which they then distribute to your creditors.
                </p>
              </div>

              <div id="security" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 underline decoration-blue-500 underline-offset-8">5. Security, Privacy, and RBI Compliance</h2>
                <p className="text-gray-700 leading-relaxed">
                  The most common concern in 2025 is data security. Is it safe to upload your PAN and Aadhar to a debt app? 
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Top-rated apps like the ones mentioned here are fully compliant with the **RBI Digital Lending Directions 2025**. They follow "Privacy by Design" principles, ensuring that your data is not sold to marketing firms and is only used for the specific purpose of negotiating your settlement. 
                </p>
              </div>

              <div id="how-to-choose" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">6. How to Choose the Right App for You</h2>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <FontAwesomeIcon icon={faSearchDollar} className="text-blue-600" />
                    Our Expert Recommendation Model:
                  </h4>
                  <div className="space-y-4 text-sm font-light">
                    <p className="border-b pb-2"><strong className="text-blue-900">Scenario A:</strong> You are facing legal notices or severe recovery harassment. <br/> ➔ **Choice: AMA Connect.**</p>
                    <p className="border-b pb-2"><strong className="text-blue-900">Scenario B:</strong> You have no income but can save small amounts monthly. <br/> ➔ **Choice: FREED.**</p>
                    <p className="pb-2"><strong className="text-blue-900">Scenario C:</strong> You have income but too many loans creating chaos. <br/> ➔ **Choice: SingleDebt.**</p>
                  </div>
                </div>
              </div>

              <div id="faqs" className="mt-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Expert FAQs on Settlement Apps</h2>
                <div className="space-y-6">
                  {faqData.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div id="reviews" className="mt-20 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">User Verified Reviews</h2>
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

              <div className="mt-16 p-10 bg-blue-900 text-white rounded-3xl text-center shadow-2xl shadow-blue-200">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Start Your Digital Journey to Freedom</h3>
                <p className="mb-10 text-blue-100 max-w-2xl mx-auto opacity-80">Download the AMA Connect app today and see how easy it is to manage your debts, stop harassment, and secure a life-changing settlement.</p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <Link 
                    href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions&hl=en_IN" 
                    target="_blank"
                    className="bg-white text-blue-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-lg transform hover:-translate-y-1"
                  >
                    Download on Play Store
                  </Link>
                </div>
              </div>

            </article>
          </main>

          {/* Right Column: CTA & Resources */}
          <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
            <div className="space-y-6">
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Compare & Choose</h4>
                <p className="text-sm text-gray-600 mb-6">Unsure which app is right for you? Consult with our experts to find the perfect debt resolution match.</p>
                <button 
                  onClick={() => window.open('https://api.whatsapp.com/send?phone=919540003295&text=Help%20me%20choose%20the%20right%20settlement%20app', '_blank')}
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                >
                  Expert Advice
                </button>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Digital Debt Resources</h4>
                <nav className="space-y-3">
                  <Link href="/is-it-possible-to-settle-a-personal-loan-through-mobile-banking-apps" className="flex group items-start">
                    <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">→</span>
                    <span className="text-[13px] text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">Banking App Limits Guide</span>
                  </Link>
                  <Link href="/how-to-check-if-a-loan-settlement-offer-is-genuine-on-digital-platforms" className="flex group items-start">
                    <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">→</span>
                    <span className="text-[13px] text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">Avoid Digital Scams</span>
                  </Link>
                  <Link href="/find-debt-settlement-services-known-for-effective-negotiation" className="flex group items-start">
                    <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">→</span>
                    <span className="text-[13px] text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">Professional Negotiators</span>
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
    </div>
  );
}
