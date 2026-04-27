import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Script from 'next/script';
import { Suspense } from 'react';
import ContactForm from './ContactForm';

const contactFaqs = [
  {
    question: "How can I contact CredSettle?",
    answer:
      "You can email us at info@credsettle.com, call +91 8800226635 for customer support, or visit our hub at 4th Floor, 2493AP, Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana 122001."
  },
  {
    question: "Do you provide loans?",
    answer:
      "No. CredSettle does not provide loans; we exclusively help clients settle existing loans through RBI-compliant legal processes."
  },
  {
    question: "What information should I include in the contact form?",
    answer:
      "Please share your basic details including name, mobile number, email address, city, employment status, monthly income, current credit card and personal loan dues, whether you are facing harassment, your ability to pay an initial amount, and any specific queries."
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "Once you submit the form, our experts review the details and get back to you with a call to guide you through the loan settlement process."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.credsettle.com/contact#faq",
  "name": "CredSettle Contact FAQs",
  "description": "Answers to common questions about contacting CredSettle for RBI-compliant debt settlement support.",
  "mainEntity": contactFaqs.map((faq, index) => ({
    "@type": "Question",
    "@id": `https://www.credsettle.com/contact#faq-question-${index + 1}`,
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-white mt-5">
      <Script id="faq-schema-contact" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      {/* Background Circle Effect */}
      <div 
        className="absolute top-0 left-0 w-[240px] h-[240px] md:w-[400px] md:h-[400px] lg:w-[606px] lg:h-[606px] blur-[80px] md:blur-[160px] lg:blur-[320px]"
        style={{
          borderRadius: '50%',
          background: '#007AFF',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          opacity: 0.3,
          willChange: 'filter',
          backfaceVisibility: 'hidden'
        }}
      />
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 pt-12 md:pt-16 lg:pt-[80px] px-3 md:px-5 lg:px-[13px]">
        <div className="w-full max-w-6xl mx-auto relative">
          <div className="flex flex-col lg:flex-row items-start lg:justify-around gap-6 lg:gap-8">
            {/* Left Sidebar - Contact Information */}
            <div className="order-2 lg:order-1 w-full lg:flex-shrink-0 lg:w-[560px] lg:mr-8">
              <div 
                className="inline-block px-3 md:px-5 py-1.5 md:py-2.5 mb-3 md:mb-5"
                style={{
                  borderRadius: '38px',
                  background: '#BFEEFF'
                }}
              >
                <h2 
                  className="text-[9px] md:text-[11px]"
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '18px'
                  }}
                >
                  Contact Us
                </h2>
              </div>
              <h1 
                className="mb-2.5 md:mb-3 text-xl md:text-2xl lg:text-[36px] leading-tight md:leading-tight lg:leading-[52px]"
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '400'
                }}
              >
                Let&apos;s Get in Touch
              </h1>
              <p 
                className="mb-3 md:mb-5 text-sm md:text-base lg:text-[16px] leading-5 md:leading-6 lg:leading-[20px]"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '400'
                }}
              >
                Or just reach out manually at info@credsettle.com
              </p>
              <h4 
                className="mb-2.5 md:mb-3 text-lg md:text-xl lg:text-[22px] leading-tight"
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '500'
                }}
              >
                Reach Out to us
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div 
                  className="relative overflow-hidden flex gap-3 md:gap-4 p-4 md:p-6 rounded-[24px] min-h-[128px]"
                  style={{
                    background: '#EFF7FF',
                    boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)'
                  }}
                >
                  <div className="absolute right-2 bottom-0 opacity-40 md:opacity-60">
                    <img src="/contact1.png" alt="Email CredSettle for Loan Settlement Consultation" className="w-16 h-16 md:w-20 md:h-20" />
                  </div>
                  <a href="mailto:info@credsettle.com" target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col relative z-10">
                    <span className="text-[10px] md:text-xs text-[rgba(12,39,86,0.70)]">Email Us</span>
                    <span className="text-xs md:text-sm text-[#0C2756] font-medium">General Inquiries</span>
                    <span className="text-[10px] md:text-xs text-[#0C2756] underline-offset-2 hover:underline mt-1.5">
                      info@credsettle.com
                    </span>
                  </div>
                  </a>
                </div>
                <div 
                  className="relative overflow-hidden flex gap-3 md:gap-4 p-4 md:p-6 rounded-[24px] min-h-[128px]"
                  style={{
                    background: '#EFF7FF',
                    boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)'
                  }}
                >
                  <div className="absolute right-2 bottom-0 opacity-40 md:opacity-60">
                    <img src="/contact2.png" alt="Call CredSettle for Loan Settlement Support" className="w-16 h-16 md:w-20 md:h-20 rotate-90" />
                  </div>
                  <a href="tel:+918800226635" target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col relative z-10">
                    <span className="text-[10px] md:text-xs text-[rgba(12,39,86,0.70)]">Call Us</span>
                    <span className="text-xs md:text-sm text-[#0C2756] font-medium">Customer Support</span>
                    <span className="text-[10px] md:text-xs text-[#0C2756] underline-offset-2 hover:underline mt-1.5">
                      +91 8800226635
                    </span>
                  </div>
                  </a>
                </div>
                <div 
                  className="relative overflow-hidden flex gap-3 md:gap-4 p-4 md:p-6 rounded-[24px] sm:col-span-2 min-h-[128px]"
                  style={{
                    background: '#EFF7FF',
                    boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)'
                  }}
                >
                  <div className="absolute right-2 bottom-0 opacity-40 md:opacity-60">
                    <img src="/contact3.png" alt="CredSettle Office Address in Gurugram" className="w-16 h-16 md:w-20 md:h-20" />
                  </div>
                  <a href="https://maps.app.goo.gl/JCgKrU6LZSb2BDpS8" target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col relative z-10 max-w-[288px]">
                    <span className="text-[10px] md:text-xs text-[rgba(12,39,86,0.70)]">Our Address</span>
                    <span className="text-xs md:text-sm text-[#0C2756] font-medium">Visit Our Hub</span>
                    <p className="text-[10px] md:text-xs text-[#0C2756] leading-relaxed mt-1.5">
                      4th Floor, 2493AP, Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana 122001
                    </p>
                  </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form (Client Component) */}
            <div className="order-1 lg:order-2 w-full lg:flex-shrink-0 lg:w-[480px]">
              <Suspense fallback={
                <div className="flex items-center justify-center p-12 rounded-xl bg-[#EFF7FF]">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#007AFF]"></div>
                </div>
              }>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>

      </div>

      {/* Additional Content Section: Office & FAQs */}
      <div className="w-full max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
          {/* Left Column: Office Details */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0C2756] mb-6 font-poppins">Visit Our Headquarters &amp; Speak to Experts</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Our main office is strategically located in Gurugram&apos;s bustling business district, making it easily accessible for clients seeking in-person assistance. 
              Whether you are currently facing intense harassment from aggressive recovery agents, struggling with mounting credit card dues, or simply need professional legal advice on navigating a complex loan settlement, our dedicated team of financial and legal experts is available for comprehensive, face-to-face consultations. 
              We know that dealing with overwhelming debt can be incredibly stressful and isolating. Taking that very first step to reach out for professional help is often the hardest part of the journey. At CredSettle, we are deeply committed to providing a safe, completely secure, and judgment-free environment where you can openly discuss the specifics of your financial situation without fear.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Our specialized advisory team brings years of proven expertise in effectively negotiating with prominent banks and Non-Banking Financial Companies (NBFCs) across India. 
              We strictly employ a 100% RBI-compliant, legally robust approach to help you potentially reduce your principal outstanding amount by up to 50%, immediately stop unwanted harassment calls, and ultimately close your loans with proper legal documentation and No Dues Certificates (NDCs). 
              When you visit our Gurugram office or contact us through our online portal, we conduct a thorough, customized evaluation of your accounts-whether they involve unmanageable personal loans, credit card debt, or business loans. Based on this thorough assessment, we tailor a personalized, actionable settlement strategy that realistically fits your current repayment capacity and long-term financial goals. Regain your peace of mind, protect your legal rights, and start your journey towards total financial freedom by getting in touch with CredSettle today.
            </p>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8">
              <h3 className="font-semibold text-xl text-[#0C2756] mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Office Hours
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between border-b border-gray-50 pb-2"><span>Monday - Friday</span> <span className="font-medium text-[#0C2756]">10:00 AM - 7:00 PM</span></li>
                <li className="flex justify-between border-b border-gray-50 pb-2"><span>Saturday</span> <span className="font-medium text-[#0C2756]">10:00 AM - 4:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span className="font-medium text-red-500">Closed</span></li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h3 className="font-semibold text-lg text-[#0C2756] mb-2">Why Visit Us?</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start"><span className="text-blue-500 mr-2">v</span> Face-to-face consultation with legal experts</li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">v</span> Document verification and analysis</li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">v</span> Confidential and secure environment</li>
              </ul>
            </div>
          </div>

          {/* Right Column: FAQs */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0C2756] mb-6 font-poppins">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {contactFaqs.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all duration-300">
                  <h3 className="font-semibold text-[#0C2756] mb-2 text-lg">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-8 bg-gradient-to-r from-[#0C2756] to-[#1a3b75] rounded-2xl text-white text-center shadow-lg">
              <h3 className="font-bold text-xl mb-2">Need Immediate Assistance?</h3>
              <p className="text-blue-100 mb-6">Our legal team is ready to assist you with your loan settlement journey.</p>
              <a href="tel:+918800226635" className="inline-flex items-center bg-white text-[#0C2756] font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors shadow-md">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                Call +91 8800226635
              </a>
            </div>
          </div>

        </div>
      </div>
      
      <div className="mt-10 md:mt-12 lg:mt-[80px]">
        <Footer />
      </div>
    </div>
  );
}
