'use client';

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faStar, faQuoteLeft, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const faqData = [
  {
    question: "Which bank apps in India allow online loan settlement?",
    answer: "Most major bank apps like HDFC, SBI YONO, and ICICI iMobile do NOT allow 'Settlement' (where you pay less than the full amount). They only allow 'Foreclosure' (full payment). For a settlement, you usually need a specialized negotiation tool like the AMA Connect app."
  },
  {
    question: "Is the AMA Connect app safe for loan settlement?",
    answer: "Yes, AMA Connect is a professional debt resolution platform that connects borrowers with legal experts and bank negotiators. It is widely used in India for reaching compromise settlements with multiple lenders through a single dashboard."
  },
  {
    question: "Can I settle my credit card debt through the bank's mobile app?",
    answer: "You can sometimes find 'One Time Settlement' offers under the 'Offers' or 'Credit Card' section of the bank app if you have defaulted for over 90 days. However, these are fixed offers and do not allow for the deep negotiations possible through specialized apps."
  },
  {
    question: "What is the Play Store link for the AMA Connect app?",
    answer: "You can download the AMA Connect app from the Google Play Store here: https://play.google.com/store/apps/details?id=com.ama.connect. It is the most rated app for debt resolution in India."
  },
  {
    question: "Will using a digital app for settlement impact my CIBIL score?",
    answer: "Any loan settlement, whether done through an app or at a bank branch, will be reported as 'Settled' to CIBIL. This causes a temporary drop in your credit score, but apps like AMA Connect also offer advice on how to rebuild your score after the settlement."
  },
  {
    question: "How long does it take for an app-based settlement to reflect in my account?",
    answer: "Once the payment is made through the digital channel and the bank issues the NDC, it takes 45 to 60 days for the status to be updated on the CIBIL portal."
  },
  {
    question: "Do mobile apps charge a fee for loan settlement services?",
    answer: "Most banking apps do not charge fees for their own offers. Specialized apps like AMA Connect may charge a service fee for providing legal representation and professional negotiation services with the bank."
  },
  {
    question: "Can I settle a business loan through a mobile app?",
    answer: "Business loan settlements are complex and usually require physical documentation and committee approvals. While you can initiate the process or track it through an app like AMA Connect, the final sign-off is often offline."
  },
  {
    question: "What documents do I need to upload for digital settlement?",
    answer: "You will typically need to upload your latest bank statements, salary slips or income proof, the loan sanction letter, and a valid ID proof (Aadhaar/PAN)."
  },
  {
    question: "Can I cancel a settlement request initiated through an app?",
    answer: "Yes, you can cancel the request until the final settlement letter is issued. Once you pay the settled amount, the contract is finalized and cannot be reversed."
  }
];

const reviews = [
  {
    name: "Vikram Shah",
    location: "Ahmedabad",
    rating: 5,
    text: "I was struggling with 4 different credit cards. The AMA Connect app consolidated my communication with all banks. I managed to settle all of them for 40% of the total dues. Highly recommended digital tool."
  },
  {
    name: "Priya Nair",
    location: "Kochi",
    rating: 5,
    text: "The convenience of managing my debt resolution through my phone was amazing. I used the AMA Connect app to upload my medical bills as hardship proof, and the bank accepted my OTS proposal within 2 weeks."
  },
  {
    name: "Amit Patel",
    location: "Surat",
    rating: 4,
    text: "While my banking app only showed foreclosure options, AMA Connect helped me reach a real settlement. The Play Store link was easy to find, and the onboarding was seamless."
  },
  {
    name: "Deepika Sharma",
    location: "Chandigarh",
    rating: 5,
    text: "Professional advice at my fingertips. I was being harassed by agents, but the digital logs in the app helped me report the issue and get a peaceful settlement."
  }
];

const navLinks = [
  { id: 'intro', label: 'Digital Settlement Era' },
  { id: 'ama-connect', label: 'AMA Connect App' },
  { id: 'bank-apps', label: 'Banking App Limits' },
  { id: 'digital-security', label: 'Security & Privacy' },
  { id: 'step-by-step', label: 'App Settlement Steps' },
  { id: 'pitfalls', label: 'Avoid Digital Pitfalls' },
  { id: 'future', label: 'Future of Debt Tech' },
  { id: 'faqs', label: 'Expert FAQs' }
];

export default function MobileAppSettlementClient() {
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="font-sans text-[#0C2756] bg-white">
      <Navbar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section 
        className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden flex items-center justify-center min-h-[50vh]"
        style={{ background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)' }}
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Is it Possible to Settle a Personal Loan <br className="hidden md:block" />
            <span className="text-blue-300">Through Mobile Banking Apps?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
            The 2025 Guide to Digital Debt Resolution. Learn how to bypass the limitations of HDFC, SBI, and ICICI apps and settle your debts using specialized tools like AMA Connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions&hl=en_IN" 
              target="_blank"
              className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faMobileAlt} className="mr-2" />
              Download AMA Connect App
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
                  <span className="font-medium text-gray-600">Mobile App Personal Loan Settlement</span>
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
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Introduction: The Dawn of Digital Debt Resolution</h2>
                <p className="text-gray-700 leading-relaxed">
                  As we navigate through 2025, the way Indians manage their finances has shifted almost entirely to the palm of their hands. From UPI payments to instant credit, the mobile phone is the primary financial hub. Naturally, when a borrower faces a financial crisis, their first instinct is to open their banking app and look for a solution.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  However, there is a significant gap between what traditional banking apps like HDFC, SBI YONO, and ICICI iMobile offer and what a distressed borrower actually needs. While these apps are excellent for making payments or checking balances, they are often designed to facilitate 'Compliance' rather than 'Resolution'. 
                </p>
                <p className="text-gray-700 leading-relaxed mt-4 font-bold text-blue-900 border-l-4 border-blue-600 pl-4">
                  This guide explores the reality of settling personal loans through mobile banking apps and why specialized platforms like AMA Connect have become the gold standard for borrowers seeking a fresh start.
                </p>
              </div>

              <div id="ama-connect" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 outline-dashed outline-1 outline-blue-200 p-4 rounded-xl">1. The Power of AMA Connect App: Your Debt Shield</h2>
                <p className="text-gray-700 leading-relaxed">
                  Before we look at bank apps, it is vital to understand the tool that has revolutionized debt settlement in India: the AMA Connect app. 
                </p>
                <div className="bg-blue-900 text-white p-8 rounded-3xl my-8 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-4">Why Everyone is Downloading AMA Connect:</h3>
                  <ul className="space-y-3 font-light">
                    <li><strong>• Multi-Lender Dashboard:</strong> Manage settlements for 5 different banks in one place.</li>
                    <li><strong>• Professional Negotiation:</strong> Connect with experts who know the bank's internal waiver policies.</li>
                    <li><strong>• Harassment Logging:</strong> Record and report illegal recovery calls directly through the app.</li>
                    <li><strong>• Document Vault:</strong> Securely store your NDC and Settlement Letters forever in digital format.</li>
                  </ul>
                  <Link 
                    href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions&hl=en_IN" 
                    target="_blank"
                    className="mt-6 inline-block bg-white text-blue-900 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
                  >
                    Download from Play Store
                  </Link>
                </div>
              </div>

              <div id="bank-apps" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">2. Limitations of Traditional Banking Apps</h2>
                <p className="text-gray-700 leading-relaxed">
                  Apps like HDFC Bank MobileBanking or SBI YONO are designed according to strict bank protocols. For a bank, 'Settlement' is a loss. Therefore, they rarely promote it as an option in their interface. 
                </p>
                <h3 className="text-2xl font-semibold mt-8 mb-4">Foreclosure vs. Settlement</h3>
                <p className="text-gray-700 leading-relaxed">
                  When you go to the 'Loan' section of your bank app, you will find an option for 'Foreclosure'. This means paying the entire remaining principal and interest to close the loan. The 'Settlement' option, which involves a waiver of 40% to 70%, is almost never available as a self-service button.
                </p>
              </div>

              <div id="digital-security" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">3. Speed and Security in Digital Settlement</h2>
                <p className="text-gray-700 leading-relaxed">
                  The primary advantage of settling through an app in 2025 is speed. In the old days, you had to visit the bank branch multiple times, meet the manager, and wait weeks for a letter. 
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                  <div className="p-6 bg-green-50 rounded-2xl border border-green-100 italic">"Digital settlement is 3x faster than physical visits."</div>
                  <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 italic">"Instant verification of settlement letters using QR codes."</div>
                </div>
              </div>

              <div id="step-by-step" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">4. Step-by-Step: Settling via AMA Connect</h2>
                <ol className="space-y-6">
                  <li className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 items-center">
                    <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">1</span>
                    <div><strong>Onboarding:</strong> Download the app and sync your loan accounts using your registered mobile number.</div>
                  </li>
                  <li className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 items-center">
                    <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">2</span>
                    <div><strong>Hardship Profiling:</strong> Upload documents proving your financial distress (e.g., job loss letter).</div>
                  </li>
                </ol>
              </div>

              <div id="pitfalls" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">5. Avoiding Digital Pitfalls and Scams</h2>
                <p className="text-gray-700 leading-relaxed">
                  With the rise of debt apps, there has also been a rise in 'Fake Settlement' scams. A scammer might send you a fake PDF on WhatsApp that looks like a bank letter. 
                </p>
              </div>

              <div id="faqs" className="mt-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Expert FAQs on Digital Settlement</h2>
                <div className="space-y-6">
                  {faqData.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews Section */}
              <div id="reviews" className="mt-20 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">What Users Are Saying</h2>
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
                <h4 className="font-bold text-xl text-gray-900 mb-2">Ready to Settle?</h4>
                <p className="text-sm text-gray-600 mb-6">Stop juggling multiple EMIs. Take the first step towards a debt-free life today.</p>
                <Link 
                  href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions&hl=en_IN" 
                  target="_blank"
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                >
                  Download App
                </Link>
              </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Digital Debt Guides</h4>
                  <nav className="space-y-3">
                    <Link href="/best-apps-for-managing-and-settling-unsecured-loans" className="flex group items-start">
                      <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">→</span>
                      <span className="text-[13px] text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">Top Unsecured Loan Apps</span>
                    </Link>
                    <Link href="/can-i-use-online-platforms-to-settle-my-home-loan-faster" className="flex group items-start">
                      <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">→</span>
                      <span className="text-[13px] text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">Online Home Loan Settlement</span>
                    </Link>
                    <Link href="/how-to-check-if-a-loan-settlement-offer-is-genuine-on-digital-platforms" className="flex group items-start">
                      <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">→</span>
                      <span className="text-[13px] text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">Verify Genuine Digital Offers</span>
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
