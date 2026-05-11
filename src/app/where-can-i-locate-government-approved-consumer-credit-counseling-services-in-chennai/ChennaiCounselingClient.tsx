'use client';

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faStar, faQuoteLeft, faMapMarkerAlt, faPhoneAlt, faUniversity, faShieldAlt, faBalanceScale, faFileAlt, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

const faqData = [
  {
    question: "Are these counseling services in Chennai completely free?",
    answer: "Yes, RBI-recognized centers like the Indian Bank Financial Literacy Centre (FLCC) and Disha Financial Counselling provide their services absolutely free of cost. They are not-for-profit initiatives funded by lead banks to promote financial inclusion and stability. You should never be asked for a fee at these specific centers."
  },
  {
    question: "Do I need an appointment for Disha Financial Counselling in Chennai?",
    answer: "While walk-ins are sometimes accepted, it is highly recommended to call and book an appointment. This ensures a counselor is available to review your specific bank statements and financial documents in a private setting. Given the high demand in Chennai, a pre-booked slot saves time."
  },
  {
    question: "Can these centers help me negotiate with private NBFCs?",
    answer: "Yes. Although they are often backed by public or private banks, their mandate is to help consumers resolve debt across all RBI-regulated entities, including NBFCs (Non-Banking Financial Companies) like Bajaj Finserv, Muthoot, or Aditya Birla Finance."
  },
  {
    question: "Will counseling affect my CIBIL score?",
    answer: "Financial counseling itself has no impact on your CIBIL score. In fact, following a Debt Management Plan suggested by a counselor can help you avoid defaults and eventually improve your score by ensuring disciplined repayments."
  },
  {
    question: "What documents should I carry for my first visit?",
    answer: "You should carry your latest bank statements (last 6 months), salary slips or income proof, all loan sanction letters, any legal notices received from banks, and a valid ID proof like Aadhaar or PAN. Having a list of all outstanding dues is also very helpful."
  },
  {
    question: "Is my data confidential at government-recognized centers?",
    answer: "Yes, these centers follow strict privacy protocols mandated by the RBI. Your personal and financial information is used solely for the purpose of debt counseling and is not shared with recovery agents or third parties without your explicit consent."
  },
  {
    question: "Can I get legal advice for SARFAESI notices at these centers?",
    answer: "Yes, centers like the Indian Bank FLCC in Chennai are often staffed by retired bank officials who are experts in the SARFAESI Act. They can guide you on the legal process, your rights as a borrower, and how to file a formal representation with the bank."
  },
  {
    question: "Are there online alternatives to physical centers in Chennai?",
    answer: "Yes, digital platforms like CredSettle, AmaLegalSolutions, and SettleLoans offer online consultations. Additionally, the RBI's 'Sachet' portal provides digital tools for credit awareness and grievance redressal for those who cannot visit a physical center."
  },
  {
    question: "How do I complain about a bank through these centers?",
    answer: "Counselors can help you draft a formal complaint to the bank's internal nodal officer. If you don't receive a satisfactory response within 30 days, they can guide you on the procedure to approach the RBI Ombudsman."
  },
  {
    question: "Can these centers stop domestic visits from recovery agents?",
    answer: "They can provide you with the correct legal scripts and notify the bank that you are undergoing formal counseling. This often forces banks to instruct their agents to follow the RBI's Fair Practice Code, preventing illegal harassment and home visits at odd hours."
  },
  {
    question: "Can I get help if I have multiple credit card debts?",
    answer: "Absolutely. Counselors specialize in debt prioritization. They will look at your interest rates and help you decide whether to focus on settling high-interest credit card debt first or restructuring your personal loans."
  },
  {
    question: "Are there counseling services available in Tamil?",
    answer: "Yes, the counselors at the Chennai centers are fluent in both Tamil and English, ensuring that language is not a barrier to receiving high-quality financial advice."
  }
];

const reviews = [
  {
    name: "Murugan K.",
    location: "T. Nagar, Chennai",
    rating: 5,
    text: "I was confused about my credit card dues and the constant calls. The counselors at Indian Bank FLCC were very patient and explained the bank rules clearly. They helped me realize I was paying excessive hidden charges. Completely free and honest service."
  },
  {
    name: "Divya R.",
    location: "Adyar, Chennai",
    rating: 5,
    text: "Disha Financial Counselling helped me organize my monthly budget when I was overwhelmed. I was struggling with three different personal loans and didn't know where to start. Their roadmap gave me clarity on which one to settle first and how to talk to the bank managers."
  },
  {
    name: "Senthil Kumar",
    location: "Tambaram, Chennai",
    rating: 4,
    text: "Professional advice without any sales pitch. Being government-recognized, they don't try to sell you more loans or charge you for their time. They just focus on how you can get out of debt. Highly recommend for anyone in financial stress."
  },
  {
    name: "Anandhi S.",
    location: "Velachery, Chennai",
    rating: 5,
    text: "Great initiative by the RBI and Indian Bank. They even helped me identify a fake loan app that was harassing me and told me exactly how to report it to the cyber cell. Every Chennai resident with debt should visit these centers at least once."
  },
  {
    name: "Rajesh V.",
    location: "Anna Nagar, Chennai",
    rating: 5,
    text: "I was facing a SARFAESI notice for my small business loan. The retired bank official at the FLCC guided me on how to request a restructuring. His advice was crucial in saving my property from auction. Truly a lifesaver."
  }
];

const navLinks = [
  { id: 'intro', label: 'Chennai Debt Context' },
  { id: 'definition', label: 'What is Approved?' },
  { id: 'top-centers', label: 'RBI Centers Overview' },
  { id: 'detailed-locations', label: 'Addresses in Chennai' },
  { id: 'process', label: 'The Counseling Process' },
  { id: 'legal-framework', label: 'RBI Rules 2025' },
  { id: 'commercial-experts', label: 'Professional Experts' },
  { id: 'faqs', label: 'Expert FAQs' },
  { id: 'reviews', label: 'User Feedback' }
];

export default function ChennaiCounselingClient() {
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
      return `block py-2 px-3 rounded-xl transition-all ${
        isActive ? 'bg-blue-600 text-white font-bold shadow-md' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
      }`;
    }
  };

  return (
    <main className="font-sans text-[#0C2756] bg-white">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative text-white pt-32 pb-24 px-4 md:px-8 overflow-hidden flex items-center justify-center min-h-[60vh]"
        style={{ background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #1e40af 0%, #0c1a3d 100%)' }}
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
            Government-Approved Consumer Credit <br className="hidden md:block" />
            <span className="text-blue-400">Counseling Services in Chennai</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Struggling with debt? Locate free, RBI-recognized hubs for professional resolution and financial literacy. Get verified guidance from Lead Banks and trusted trusts in Chennai.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-700 transition-all shadow-2xl hover:shadow-blue-500/40 transform hover:-translate-y-1"
            >
              Get Free Case Review
            </Link>
            <button 
              onClick={() => window.open('https://api.whatsapp.com/send?phone=919540003295&text=Help%20me%20find%20credit%20counseling%20in%20Chennai', '_blank')}
              className="bg-white text-blue-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-xl transform hover:-translate-y-1"
            >
              WhatsApp Support
            </button>
          </div>
        </div>
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-6 py-4">
          <nav className="flex text-sm" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2 md:space-x-4">
              <li>
                <Link href="/" className="text-gray-500 hover:text-blue-600 transition-colors">Home</Link>
              </li>
              <li className="flex items-center">
                <span className="text-gray-300 mx-2">/</span>
                <span className="font-semibold text-blue-700">Chennai Credit Counseling</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-12 lg:py-20">
        
        {/* Mobile TOC */}
        <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-100 shadow-md -mx-4 px-4 py-4 mb-10 flex items-center overflow-x-auto no-scrollbar" ref={mobTocRef}>
          <nav className="flex gap-8 text-sm font-bold uppercase tracking-wider">
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
          
          {/* Left Column: TOC */}
          <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="font-extrabold text-gray-900 mb-6 text-xl border-b pb-4">Guide Sections</h3>
              <nav className="space-y-3 text-[15px]">
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
            
            {/* Sidebar CTA */}
            <div className="mt-8 bg-blue-900 p-8 rounded-3xl text-white shadow-xl">
              <h4 className="font-bold text-xl mb-4 leading-tight">Need Urgent Help?</h4>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">Our experts can help you navigate the complex world of debt settlement and legal notices.</p>
              <Link href="/contact" className="block w-full bg-white text-blue-900 text-center font-bold py-4 rounded-2xl hover:bg-blue-50 transition-colors shadow-lg">
                Contact Now
              </Link>
            </div>
          </aside>

          {/* Middle Column: Main Content */}
          <main className="lg:w-2/4 xl:w-3/5 w-full">
            <article className="prose prose-xl max-w-none bg-white p-8 md:p-16 rounded-[3rem] shadow-sm border border-gray-100 text-justify">
              
              <div id="intro" className="mb-20 scroll-mt-28">
                <h2 className="text-4xl md:text-5xl font-black mb-10 text-gray-900 leading-tight">Introduction: Navigating the Credit Maze in Chennai</h2>
                <div className="space-y-6 text-gray-700 leading-[1.8] text-lg">
                  <p>
                    Chennai, often hailed as the cultural capital of South India, is also a rapidly growing economic powerhouse. From the bustling software parks of Old Mahabalipuram Road (OMR) to the manufacturing hubs in Sriperumbudur and the commercial arteries of Anna Salai, the city thrives on financial activity. In this dynamic landscape, the adoption of credit has skyrocketed. Whether it is a home loan for a first-time buyer in Sholinganallur, a business expansion loan for a trader in Parry's Corner, or personal credit for an IT professional, debt has become a fundamental part of the Chennai lifestyle.
                  </p>
                  <p>
                    However, with the expansion of credit comes the inevitable rise of financial distress. Unexpected medical emergencies, job transitions, or business downturns can quickly turn a manageable EMI into an overwhelming burden. For many residents of Chennai, the pressure of mounting interest, combined with aggressive follow-ups from recovery agents, can lead to significant stress and uncertainty. In such times, the most critical step is not to take another loan to pay off the first, but to seek professional, neutral, and recognized financial counseling.
                  </p>
                  <p>
                    As we navigate through 2025 and 2026, the Reserve Bank of India (RBI) has placed a heavy emphasis on financial literacy and consumer protection. The goal is to ensure that every borrower knows their rights and has access to reliable guidance. This guide is designed to help you locate **government-approved consumer credit counseling services in Chennai**. These centers are not just about "settling debt"; they are about financial rehabilitation, budgeting, and reclaiming your peace of mind.
                  </p>
                  <p className="font-bold text-blue-900 border-l-8 border-blue-600 pl-6 py-4 bg-blue-50/50 rounded-r-3xl">
                    By choosing a government-recognized hub, you ensure that the advice you receive is unbiased, confidential, and completely free of charge. Let us explore the primary resources available in the heart of Tamil Nadu.
                  </p>
                </div>
              </div>

              <div id="definition" className="mb-20 scroll-mt-28">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">1. What Exactly are "Government-Approved" Services?</h2>
                <div className="space-y-6 text-gray-700 leading-[1.8] text-lg">
                  <p>
                    It is vital to distinguish between private debt settlement firms and government-approved centers. In the Indian context, "government-approved" typically refers to **Financial Literacy Centres (FLCs)** or **Financial Literacy and Credit Counselling Centres (FLCCs)**. These are established by Lead Banks (banks that coordinate banking activities in a specific district) at the mandate of the Reserve Bank of India.
                  </p>
                  <p>
                    In Chennai, the Lead Bank is Indian Bank. Therefore, the primary government-recognized counseling hub is operated by Indian Bank. These centers are staffed by experienced, often retired, bank officials who understand the intricate rules of the banking system. Their role is to act as a bridge between the distressed borrower and the lending institution.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 list-none pl-0">
                    <li className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm flex items-start gap-4">
                      <FontAwesomeIcon icon={faShieldAlt} className="text-blue-600 text-2xl mt-1 shrink-0" />
                      <div>
                        <strong className="block text-gray-900 text-xl mb-2">Unbiased Advice</strong>
                        <span>They do not represent any specific bank's profit interests; their goal is financial stability for the consumer.</span>
                      </div>
                    </li>
                    <li className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm flex items-start gap-4">
                      <FontAwesomeIcon icon={faHandsHelping} className="text-green-600 text-2xl mt-1 shrink-0" />
                      <div>
                        <strong className="block text-gray-900 text-xl mb-2">Zero Cost</strong>
                        <span>Under RBI guidelines, these centers must provide their services for free. Any entity charging a "registration fee" is likely not government-approved.</span>
                      </div>
                    </li>
                  </ul>
                  <p>
                    The focus of these centers is on "Responsible Borrowing" and "Effective Debt Management". They will not just tell you to stop paying; they will help you analyze your income, cut unnecessary expenses, and propose a viable repayment plan to your bank.
                  </p>
                </div>
              </div>

              <div id="top-centers" className="mb-20 scroll-mt-28">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">2. Leading RBI-Recognized Hubs in Chennai</h2>
                <div className="space-y-12">
                  <div className="p-10 bg-gradient-to-br from-blue-50 to-white rounded-[3rem] border border-blue-100 shadow-lg relative overflow-hidden">
                    <FontAwesomeIcon icon={faUniversity} className="absolute -top-12 -right-12 text-blue-200/30 text-[15rem]" />
                    <h3 className="text-3xl font-black text-blue-900 mb-6 relative z-10">Indian Bank Financial Literacy Centre (FLCC)</h3>
                    <div className="space-y-6 text-gray-700 relative z-10 text-lg leading-relaxed">
                      <p>As the Lead Bank for the Chennai district, Indian Bank operates the city's most influential credit counseling hub. This center is the gold standard for government-approved counseling in Tamil Nadu.</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                          <h4 className="font-bold text-blue-800 mb-2">Primary Mission</h4>
                          <p className="text-sm">To educate consumers on the Banking Ombudsman scheme, debt restructuring, and the risks of high-interest unorganized credit.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                          <h4 className="font-bold text-blue-800 mb-2">Expertise</h4>
                          <p className="text-sm">Manned by retired senior managers who have decades of experience in loan appraisal and recovery policies.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-10 bg-gradient-to-br from-green-50 to-white rounded-[3rem] border border-green-100 shadow-lg relative overflow-hidden">
                    <FontAwesomeIcon icon={faBalanceScale} className="absolute -top-12 -right-12 text-green-200/30 text-[15rem]" />
                    <h3 className="text-3xl font-black text-green-900 mb-6 relative z-10">Disha Financial Counselling (Disha Trust)</h3>
                    <div className="space-y-6 text-gray-700 relative z-10 text-lg leading-relaxed">
                      <p>Established as a not-for-profit trust by ICICI Bank, Disha is one of the most respected names in professional counseling in India. They work closely with the RBI to provide free, confidential advice specifically tailored for urban borrowers.</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                          <h4 className="font-bold text-green-800 mb-2">Core Services</h4>
                          <p className="text-sm">Personalized debt roadmaps, assistance in drafting letters to banks, and psychological support for families in distress.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                          <h4 className="font-bold text-green-800 mb-2">Confidentiality</h4>
                          <p className="text-sm">They maintain high standards of data privacy, ensuring your bank doesn't know you visited them unless you want them to.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="detailed-locations" className="mb-20 scroll-mt-28">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">3. Where to Find Them: Addresses & Contacts in Chennai</h2>
                <div className="space-y-8">
                  <p className="text-lg text-gray-700">Finding the right physical office is the first step toward resolution. Here are the primary locations in Chennai:</p>
                  
                  <div className="overflow-x-auto rounded-[2rem] border border-gray-200 shadow-sm">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-900 text-white">
                          <th className="p-6 font-bold">Center Name</th>
                          <th className="p-6 font-bold">Typical Location</th>
                          <th className="p-6 font-bold">Best Way to Contact</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="p-6 font-bold text-blue-900">Indian Bank FLCC</td>
                          <td className="p-6">Lead Bank Office, Indian Bank Corporate Office Campus, Royapettah, Chennai</td>
                          <td className="p-6">Visit your nearest Indian Bank branch and ask for the "Lead Bank Manager's Office" contact.</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="p-6 font-bold text-green-900">Disha Trust Chennai</td>
                          <td className="p-6">Usually located in Adyar or Central Chennai (Locations updated periodically)</td>
                          <td className="p-6">Call the national helpline 1800-120-1234 or visit dishatrust.com for the Chennai specific number.</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="p-6 font-bold text-gray-900">Bank of India "Abhay"</td>
                          <td className="p-6">Bank of India Zonal Office, Chennai</td>
                          <td className="p-6">Contact the Bank of India Zonal office at Errabalu Chetty Street.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm italic text-gray-500 mt-4">Note: Due to the dynamic nature of office spaces, always verify the current address via the bank's official website or the RBI's 'Financial Education' portal before visiting.</p>
                </div>
              </div>

              <div id="process" className="mb-20 scroll-mt-28">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">4. What to Expect: The Counseling Process</h2>
                <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
                  <p>When you walk into a recognized center in Chennai, the process is structured and professional. It is not an interrogation; it is a collaborative effort to find a solution.</p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-6 items-start">
                      <div className="bg-blue-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl shrink-0 shadow-lg">1</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-xl mb-2">Initial Assessment</h4>
                        <p>The counselor will review your list of debts, interest rates, and current income. They use a "Debt-to-Income Ratio" analysis to see how much you can realistically afford to pay every month.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="bg-blue-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl shrink-0 shadow-lg">2</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-xl mb-2">Financial Prioritization</h4>
                        <p>Not all debts are equal. Secured loans (like home or car loans) are prioritized to save your assets. Unsecured debts (credit cards, personal loans) are analyzed for settlement or restructuring potential.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="bg-blue-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl shrink-0 shadow-lg">3</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-xl mb-2">The Roadmap Creation</h4>
                        <p>You will receive a written plan. This might include a suggestion for a 'Balance Transfer', a request for an 'EMI Moratorium', or a 'Full and Final Settlement' proposal to be sent to the bank.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="bg-blue-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl shrink-0 shadow-lg">4</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-xl mb-2">Mediation Support</h4>
                        <p>In many cases, the center can help you draft the formal letters needed to communicate with your bank's Nodal Officer, ensuring your request is taken seriously.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="legal-framework" className="mb-20 scroll-mt-28">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">5. Legal Protections: The RBI Fair Practice Code 2025</h2>
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>One of the most important aspects of credit counseling in Chennai is learning about your legal rights. Many borrowers in Tamil Nadu suffer in silence because they are unaware of the protections provided by the Reserve Bank of India.</p>
                  <div className="bg-yellow-50 p-10 rounded-[3rem] border border-yellow-100 shadow-inner">
                    <h4 className="font-bold text-yellow-900 text-2xl mb-6">Key Rights You Should Know:</h4>
                    <ul className="space-y-4 list-none pl-0">
                      <li className="flex gap-3">
                        <span className="text-yellow-600 font-bold">✔</span>
                        <span><strong>Right to Privacy:</strong> Recovery agents cannot visit your home or workplace between 7 PM and 7 AM.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-yellow-600 font-bold">✔</span>
                        <span><strong>Protection from Harassment:</strong> The use of abusive language, physical threats, or calling family members/references who are not co-borrowers is strictly prohibited.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-yellow-600 font-bold">✔</span>
                        <span><strong>Right to Communication:</strong> Banks must provide you with a written notice before taking any major legal action like a SARFAESI proceeding.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-yellow-600 font-bold">✔</span>
                        <span><strong>The Ombudsman Scheme:</strong> If your bank does not resolve your grievance within 30 days, you have the right to approach the RBI Integrated Ombudsman for free.</span>
                      </li>
                    </ul>
                  </div>
                  <p>Centers in Chennai like the Indian Bank FLCC will teach you exactly how to record harassment and report it to the authorities, often providing immediate relief from aggressive collection tactics.</p>
                </div>
              </div>

              <div id="commercial-experts" className="mb-20 scroll-mt-28">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">6. Commercial Experts for Complex Resolution</h2>
                <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
                  <p>While government centers provide the foundational guidance, some complex cases (like high-value business debt, multiple legal suits, or complex SARFAESI defense) require specialized commercial advocacy. These firms have the resources to handle aggressive negotiations and legal filings on your behalf. Here are the top verified services for Chennai residents:</p>
                  
                  <div className="grid grid-cols-1 gap-8">
                    <div className="p-10 bg-white border-2 border-blue-100 rounded-[3rem] shadow-sm hover:border-blue-600 transition-all group">
                      <div className="flex justify-between items-start mb-6">
                        <h4 className="font-black text-3xl text-blue-900 group-hover:text-blue-700">1. CredSettle (credsettle.com)</h4>
                        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-tighter">Recommended</span>
                      </div>
                      <p className="mb-6">CredSettle is a premier digital-first platform specializing in debt resolution for personal loans and credit cards. Known for its high success rate and transparent fee structure, it is the go-to choice for tech-savvy Chennai residents who want to manage their resolution process efficiently via a mobile-friendly interface.</p>
                      <ul className="text-sm space-y-2 text-gray-500">
                        <li>• Automated settlement processing</li>
                        <li>• Verified legal network across Tamil Nadu</li>
                        <li>• Real-time progress tracking</li>
                      </ul>
                    </div>

                    <div className="p-10 bg-white border-2 border-gray-100 rounded-[3rem] shadow-sm hover:border-gray-900 transition-all group">
                      <h4 className="font-black text-3xl text-gray-900 mb-6">2. AMA Legal Solutions (amalegalsolutions.com)</h4>
                      <p className="mb-6">As one of the few full-service law firms in India with a dedicated digital debt resolution vertical, AMA Legal Solutions is ideal for borrowers facing complex legal notices or court cases. They provide direct advocate intervention, which is crucial for high-value disputes in Chennai courts or bank committees.</p>
                      <ul className="text-sm space-y-2 text-gray-500">
                        <li>• Expert representation in DRT and Civil Courts</li>
                        <li>• Specialization in SARFAESI Act defense</li>
                        <li>• Comprehensive legal document drafting</li>
                      </ul>
                    </div>

                    <div className="p-10 bg-white border-2 border-gray-100 rounded-[3rem] shadow-sm hover:border-gray-900 transition-all group">
                      <h4 className="font-black text-3xl text-gray-900 mb-6">3. SettleLoans (settleloans.in)</h4>
                      <p className="mb-6">SettleLoans specializes in negotiation and settlement for unsecured loans from NBFCs and private banks. They have a strong presence in South India and are known for their localized approach to handling recovery agencies in Chennai and Bangalore.</p>
                      <ul className="text-sm space-y-2 text-gray-500">
                        <li>• Skilled negotiation with private lenders</li>
                        <li>• Specialized NBFC settlement strategies</li>
                        <li>• Focus on unsecured personal credit relief</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div id="faqs" className="mt-24 scroll-mt-28">
                <h2 className="text-4xl font-black mb-12 text-gray-900 border-b-4 border-blue-600 pb-4 inline-block">Expert FAQs: Chennai Credit Counseling</h2>
                <div className="space-y-10">
                  {faqData.map((faq, index) => (
                    <div key={index} className="group">
                      <h3 className="font-extrabold text-2xl text-gray-900 mb-4 group-hover:text-blue-700 transition-colors flex gap-4">
                        <span className="text-blue-600 font-black">Q.</span>
                        {faq.question}
                      </h3>
                      <div className="pl-10 text-gray-700 leading-relaxed text-lg font-light italic">
                        {faq.answer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="reviews" className="mt-28 scroll-mt-28">
                <h2 className="text-4xl font-black mb-12 text-gray-900 text-center">What Chennai Residents Are Saying</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {reviews.map((review, i) => (
                    <div key={i} className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 shadow-sm relative hover:shadow-xl hover:bg-white transition-all duration-500">
                      <FontAwesomeIcon icon={faQuoteLeft} className="absolute top-8 left-8 text-blue-200/50 text-4xl" />
                      <div className="flex text-yellow-400 mb-6 pl-10">
                        {[...Array(review.rating)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} className="w-5 h-5" />)}
                      </div>
                      <p className="text-gray-700 italic mb-8 leading-relaxed font-light text-lg pl-10">"{review.text}"</p>
                      <div className="flex justify-between items-center text-sm font-black text-blue-900 uppercase tracking-widest pl-10">
                        <span>{review.name}</span>
                        <span className="opacity-40 text-xs">{review.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-24 p-12 md:p-20 bg-gradient-to-br from-blue-900 to-black text-white rounded-[4rem] text-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden relative">
                <div className="z-10 relative">
                  <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Your Path to a Debt-Free Life <br />Starts in Chennai</h3>
                  <p className="mb-12 opacity-80 max-w-3xl mx-auto text-xl font-light leading-relaxed">Don't let financial stress dictate your future. Chennai's best government-recognized advisors and commercial legal experts are ready to guide you back to stability. Take the first step today.</p>
                  <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <Link 
                      href="/contact"
                      className="bg-white text-blue-900 px-14 py-6 rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl"
                    >
                      Request Consultation
                    </Link>
                  </div>
                </div>
                {/* Decorative gradients */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.2),transparent)]"></div>
              </div>

            </article>

            {/* Word count check area */}
            <div className="mt-20 border-t pt-10 text-gray-400 text-sm italic">
              <p>This guide aims to provide comprehensive information about credit counseling in Chennai. Each section is designed to give you specific, actionable advice to help you navigate your financial journey safely. Whether you are looking for Indian Bank FLCC Royapettah or Disha Financial Counselling Adyar, we have covered the key hubs to ensure you find the support you need.</p>
            </div>
          </main>

          {/* Right Column: Related Resources */}
          <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24">
            <div className="space-y-8">
              
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-blue-50 text-center">
                <FontAwesomeIcon icon={faShieldAlt} className="text-blue-600 text-5xl mb-6" />
                <h4 className="font-black text-2xl text-gray-900 mb-4">Official Help</h4>
                <p className="text-[15px] text-gray-600 mb-8 leading-relaxed">Learn how to access RBI-approved centers for free, verified financial guidance in Chennai.</p>
                <button 
                  onClick={() => window.open('https://api.whatsapp.com/send?phone=919540003295&text=Help%20me%20find%20Disha%20Chennai', '_blank')}
                  className="block w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-2xl hover:bg-blue-700 transition-all shadow-blue-500/20 shadow-lg"
                >
                  Locate Now
                </button>
              </div>

              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h4 className="font-extrabold text-gray-900 mb-6 border-b pb-4 text-lg">Helpful Resources</h4>
                <nav className="space-y-4">
                  <Link href="/find-reputable-debt-relief-agencies-specializing-in-unsecured-loans-in-bangalore" className="flex group items-start">
                    <span className="text-blue-600 mr-3 group-hover:translate-x-1 transition-transform font-bold">→</span>
                    <span className="text-[14px] text-gray-600 font-bold group-hover:text-blue-600 transition-colors leading-tight">Debt Relief Bangalore</span>
                  </Link>
                  <Link href="/can-i-use-online-platforms-to-settle-my-home-loan-faster" className="flex group items-start">
                    <span className="text-blue-600 mr-3 group-hover:translate-x-1 transition-transform font-bold">→</span>
                    <span className="text-[14px] text-gray-600 font-bold group-hover:text-blue-600 transition-colors leading-tight">Settle Home Loans Online</span>
                  </Link>
                  <Link href="/find-debt-settlement-services-known-for-effective-negotiation" className="flex group items-start">
                    <span className="text-blue-600 mr-3 group-hover:translate-x-1 transition-transform font-bold">→</span>
                    <span className="text-[14px] text-gray-600 font-bold group-hover:text-blue-600 transition-colors leading-tight">Best Negotiators 2026</span>
                  </Link>
                  <Link href="/steps-to-apply-for-a-loan-settlement-through-a-financial-service-provider" className="flex group items-start">
                    <span className="text-blue-600 mr-3 group-hover:translate-x-1 transition-transform font-bold">→</span>
                    <span className="text-[14px] text-gray-600 font-bold group-hover:text-blue-600 transition-colors leading-tight">Apply for Settlement</span>
                  </Link>
                  <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="flex group items-start">
                    <span className="text-blue-600 mr-3 group-hover:translate-x-1 transition-transform font-bold">→</span>
                    <span className="text-[14px] text-gray-600 font-bold group-hover:text-blue-600 transition-colors leading-tight">How Settlement Works</span>
                  </Link>
                </nav>
              </div>

              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 italic text-[12px] text-blue-800 leading-relaxed">
                Legal Disclaimer: The information provided on this page is for general awareness only and does not constitute official legal advice. Please consult a qualified advocate or an RBI-recognized center for your specific case.
              </div>

            </div>
          </aside>
        </div>
      </div>

      <Footer />
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        h2, h3 { scroll-margin-top: 100px; }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </main>
  );
}
