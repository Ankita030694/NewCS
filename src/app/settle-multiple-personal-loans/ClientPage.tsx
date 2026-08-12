'use client';

import React from 'react';
import Link from 'next/link';

export default function ClientPage() {
  return (
    <main className="w-full">
      <section className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden" style={{ backgroundColor: '#0C2756' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-bg.svg')] bg-repeat opacity-20"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">How to Settle Multiple Personal Loans & Credit Cards at Once</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">Overwhelmed by multiple personal loans and credit cards? Discover how CredSettle consolidates negotiations to settle multiple debts with one streamlined legal process.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#007AFF] hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg text-lg">
              Get Free Consultation
            </Link>
            <a href="tel:+918800226635" className="bg-white text-[#0C2756] hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all shadow-lg text-lg flex items-center justify-center">
              Call +91 8800226635
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0C2756] mb-6">Expert Legal Solutions for Your Debt</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">At CredSettle, we understand that financial hardship can happen to anyone. Job loss, medical emergencies, or business downturns can make it impossible to keep up with high-interest personal loans.</p>
            
            <h3 className="text-xl font-semibold text-[#0C2756] mt-8 mb-4">Why Choose CredSettle?</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span><strong>100% RBI Compliant:</strong> Our legal team strictly follows Reserve Bank of India guidelines.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span><strong>Stop Harassment:</strong> We shield you from aggressive recovery agents and legal notices.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span><strong>Maximum Waivers:</strong> Our experts negotiate the lowest possible settlement amount on your behalf.</span>
              </li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
              <h4 className="font-semibold text-[#0C2756] mb-2">Take the First Step to Financial Freedom</h4>
              <p className="mb-4">Don't let debt control your life. Speak to our legal advisors today to understand your options.</p>
              <Link href="/contact" className="inline-block bg-[#0C2756] text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-900 transition-colors">
                Start Your Settlement
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
