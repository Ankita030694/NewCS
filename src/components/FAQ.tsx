'use client';

import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is a One-Time Settlement (OTS), and how does CredSettle help me achieve it?",
      answer: "A One-Time Settlement (OTS) is a negotiated agreement where you pay a reduced lump sum to settle your debt. CredSettle negotiates with lenders on your behalf to secure the best possible settlement terms while ensuring RBI compliance."
    },
    {
      question: "Is debt settlement legal? Does it adhere to RBI guidelines?",
      answer: "Yes, debt settlement is completely legal in India. CredSettle ensures all settlements are conducted in accordance with RBI guidelines and regulatory frameworks, protecting your rights throughout the process."
    },
    {
      question: "How does CredSettle stop harassment from recovery agents?",
      answer: "CredSettle provides legal intervention and communication services to stop harassment from recovery agents. We file formal complaints with RBI, NCH, and Cyber Police when necessary, and issue cease and desist notices to protect your rights."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-8 md:py-12 overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-4 overflow-x-hidden">
        <div className="flex flex-col items-center gap-6 md:gap-14">
          {/* Header and FAQ Items Container */}
          <div className="flex flex-col lg:flex-row items-start gap-4 md:gap-6 lg:gap-[76px] w-full">
            {/* Left: Header Section */}
            <div className="flex flex-col items-start gap-4 md:gap-[21px] w-full lg:w-[365px]">
              <h2 className="text-[20px] md:text-[24px] lg:text-[32px] leading-[20px] md:leading-[24px] lg:leading-[32px] font-bold">
                <span style={{ color: '#0C2756' }}>Have Question?{'\n'}<br /> We've Got </span>
                <span style={{ color: '#007AFF' }}>Answers.</span>
              </h2>
              <p className="text-[12px] md:text-[13px] lg:text-[15px] leading-[12px] md:leading-[13px] lg:leading-[15px] font-normal">
                <span style={{ color: '#0C2756' }}>Still have questions? </span>
                <span style={{ color: '#007AFF', textDecoration: 'underline' }}>Contact us</span>
                <span style={{ color: '#0C2756' }}> anytime.</span>
              </p>
            </div>

            {/* Right: FAQ Items - Aligned to right end */}
            <div className="w-full lg:w-[800px] lg:ml-auto p-3 md:p-4 rounded-xl" style={{ background: '#EFF7FF' }}>
              <div className="flex flex-col gap-3 md:gap-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg transition-all duration-500 ease-in-out cursor-pointer overflow-hidden"
                    onClick={() => toggleFAQ(index)}
                    >
                    <div className="flex justify-between items-start gap-3 md:gap-[49px] p-4 md:p-[21px_28px]">
                      <p className="text-[12px] md:text-[13px] lg:text-[14px] leading-[14px] md:leading-[13px] lg:leading-[14px] font-normal flex-1" style={{ color: '#0C2756' }}>
                        {faq.question}
                      </p>
                      <div className="flex-shrink-0 w-[16px] h-[16px] relative mt-0.5">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transition-all duration-500 ease-in-out"
                          style={{
                            transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)'
                          }}
                        >
                          <path
                            d="M11.5 0C12.3284 0 13 0.671573 13 1.5V10H21.5C22.3284 10 23 10.6716 23 11.5C23 12.3284 22.3284 13 21.5 13H13V21.5C13 22.3284 12.3284 23 11.5 23C10.6716 23 10 22.3284 10 21.5V13H1.5C0.671573 13 0 12.3284 0 11.5C0 10.6716 0.671573 10 1.5 10H10V1.5C10 0.671573 10.6716 0 11.5 0Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                    </div>
                    <div 
                      className={`transition-all duration-500 ease-in-out overflow-hidden px-4 md:px-7 ${
                        openIndex === index ? 'pt-2 pb-4 md:pt-3 md:pb-[21px]' : 'pt-0 pb-0'
                      }`}
                      style={{
                        maxHeight: openIndex === index ? '300px' : '0px',
                        opacity: openIndex === index ? 1 : 0
                      }}
                    >
                      <div className="border-t border-gray-200 pt-3">
                        <p className="text-[11px] md:text-[12px] lg:text-[13px] leading-[14px] md:leading-[14px] lg:leading-[15px] font-normal" style={{ color: 'rgba(12, 39, 86, 0.7)' }}>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div
            className="flex justify-center items-center w-full rounded-xl px-4 md:px-6 lg:px-3 py-6 md:py-8 lg:py-[63px]"
            style={{
              background: 'linear-gradient(180deg, rgba(191, 238, 255, 0.50) 27.61%, #007AFF 100%)',
              boxShadow: '0 5px 16px 0 rgba(0, 0, 0, 0.15)'
            }}
          >
            <div className="flex flex-col items-center gap-6 md:gap-[35px] w-full max-w-[644px] px-2 md:px-0">
              {/* Text Content */}
              <div className="flex flex-col items-center gap-4 md:gap-[28px] w-full">
                <h2
                  className="text-center text-[18px] md:text-[21px] lg:text-[28px] leading-[22px] md:leading-[21px] lg:leading-[28px] font-normal w-full px-2 md:px-0"
                  style={{ color: '#0C2756' }}
                >
                  Ready to End Your Debt Struggle?
                </h2>
                <p
                  className="text-center text-[13px] md:text-[14px] lg:text-[18px] leading-[16px] md:leading-[14px] lg:leading-[18px] font-normal w-full px-2 md:px-0"
                  style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                >
                  Stop harassment and secure your RBI-compliant settlement for a debt-free future.
                </p>
              </div>

              {/* CTA Button */}
              <button
                className="px-6 md:px-[28px] py-3 md:py-[14px] rounded-xl bg-white transition-opacity duration-200 hover:opacity-90 w-full max-w-[280px] md:max-w-none"
                style={{
                  boxShadow: '0 -3px 7px 0 rgba(9, 9, 9, 0.30) inset, 0 3px 7px 0 rgba(9, 9, 9, 0.30) inset'
                }}
              >
                <span className="text-[12px] md:text-[13px] lg:text-[14px] leading-[12px] md:leading-[13px] lg:leading-[14px] font-normal" style={{ color: '#0C2756' }}>
                  Get Your Free Consultation
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
