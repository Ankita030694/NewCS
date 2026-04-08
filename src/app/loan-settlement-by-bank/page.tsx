import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Import your JSON data
// Ensure banks.json is in the same folder or update the path accordingly
import banksData from './banks.json';

export const metadata: Metadata = {
  title: 'Loan Settlement Services | Debt Relief & Consolidation | CredSettle',
  description: 'Expert loan settlement services to help you become debt free. We handle credit card debt, personal loans, and debt collectors.',
  // ... (rest of your metadata)
};

export default function LoanSettlementPage() {
  // ... (Your existing schema definitions: organizationSchema, breadcrumbSchema, articleSchema)

  // Helper to create a URL-friendly slug from company name
  const getSlug = (name: string) => 
  name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      {/* ... (Your existing Scripts) */}

      {/* Hero Section */}
      <section 
        className="relative text-white pt-32 pb-20 px-4 md:px-8"
        style={{
          background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
          minHeight: '40vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Partner Banks & Institutions
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Select your bank to view specific settlement procedures and contact details.
          </p>
        </div>
      </section>

      {/* Banks Grid Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b pb-4">
            Settle Loans by Bank
          </h2>
          
          {/* 5-column layout grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {banksData.map((bank, index) => (
              <Link
                key={index}
                href={`/loan-settlement-by-bank/${getSlug(bank.company)}`}
                className="group flex items-center p-4 border border-gray-100 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
              >
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 truncate">
                  {bank.company}
                </span>
                <svg 
                  className="w-4 h-4 ml-auto text-gray-300 group-hover:text-blue-500 transition-colors" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>


      
      <Footer />
    </div>
  );
}