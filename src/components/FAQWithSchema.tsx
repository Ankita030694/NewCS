'use client';

import { useState, useEffect, useMemo } from 'react';
import Script from 'next/script';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQWithSchemaProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQWithSchema({ faqs, title, subtitle }: FAQWithSchemaProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [schemaMarkup, setSchemaMarkup] = useState<string>('');
  const faqsToRender = useMemo(() => faqs.slice(0, 5), [faqs]);

  useEffect(() => {
    // Generate FAQPage schema markup
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqsToRender.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };
    setSchemaMarkup(JSON.stringify(schema));
  }, [faqsToRender]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Schema Markup */}
      {schemaMarkup && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaMarkup }}
        />
      )}

      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-[76px] w-full">
        {/* Left: Header Section */}
        <div className="flex flex-col items-start gap-[21px] w-full lg:w-[365px]">
          <h2 className="text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] font-bold">
            <span style={{ color: '#0C2756' }}>
              {title || 'Personal Loan Settlement'}
              {`\n`}
              <br /> FAQs -{' '}
            </span>
            <span style={{ color: '#007AFF' }}>Answered.</span>
          </h2>
          <p className="text-[13px] md:text-[15px] leading-[13px] md:leading-[15px] font-normal">
            <span style={{ color: '#0C2756' }}>Need more details? </span>
            <Link href="/contact" className="underline" style={{ color: '#007AFF' }}>
              Contact us
            </Link>
            <span style={{ color: '#0C2756' }}> anytime.</span>
          </p>
        </div>

        {/* Right: FAQ Items */}
        <div className="w-full lg:w-[800px] lg:ml-auto p-4 rounded-xl" style={{ background: '#EFF7FF' }}>
          <div className="flex flex-col gap-4">
            {faqsToRender.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg transition-all duration-500 ease-in-out cursor-pointer overflow-hidden"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-start gap-[49px] p-[21px_28px]">
                  <p
                    className="text-[13px] md:text-[14px] leading-[13px] md:leading-[14px] font-normal flex-1"
                    style={{ color: '#0C2756' }}
                  >
                    {faq.question}
                  </p>
                  <div className="flex-shrink-0 w-[16px] h-[16px] relative">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-all duration-500 ease-in-out"
                      style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    >
                      <path
                        d="M11.5 0C12.3284 0 13 0.671573 13 1.5V10H21.5C22.3284 10 23 10.6716 23 11.5C23 12.3284 22.3284 13 21.5 13H13V21.5C13 22.3284 12.3284 23 11.5 23C10.6716 23 10 22.3284 10 21.5V13H1.5C0.671573 13 0 12.3284 0 11.5C0 10.6716 0.671573 10 1.5 10H10V1.5C10 0.671573 10.6716 0 11.5 0Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="transition-all duration-500 ease-in-out overflow-hidden"
                  style={{
                    maxHeight: openIndex === index ? '500px' : '0px',
                    opacity: openIndex === index ? 1 : 0,
                    paddingTop: openIndex === index ? '12px' : '0px',
                    paddingBottom: openIndex === index ? '21px' : '0px',
                    paddingLeft: '28px',
                    paddingRight: '28px'
                  }}
                >
                  <div className="border-t border-gray-200 pt-3">
                    <p
                      className="text-[11px] md:text-[13px] leading-[14px] md:leading-[15px] font-normal"
                      style={{ color: 'rgba(12, 39, 86, 0.7)' }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

