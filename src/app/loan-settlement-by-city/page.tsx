import React from "react";
import Link from "next/link";
import { locationData } from "./locationData";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lawyers for Loan Settlement & Debt Relief by City",
  description:
    "Find expert advocates and lawyers for loan settlement across 1,500+ cities in India. Professional legal assistance to settle your debts and stop bank harassment.",
};

export default function LawyerByCity() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "url": "https://credsettle.com/loan-settlement-by-city",
        "name": "Loan Settlement Services by City in India | CredSettle",
        "description": "Find specialized loan settlement lawyers and procedures for your specific city in India."
      },
      {
        "@type": "Service",
        "name": "City-Wise Loan Settlement Assistance",
        "description": "Expert legal representation for debt negotiation in over 1,500 cities across India.",
        "provider": {
          "@type": "Organization",
          "name": "CredSettle"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "2450"
        }
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-200 text-xs font-bold mb-6 tracking-widest uppercase border border-blue-400/30">
            Pan-India Legal Network
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Loan Settlement Experts <br className="hidden md:block" /> in Your City
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
            Struggling with debt? Find specialized legal assistance in your local area. We provide expert loan settlement services across {locationData.length}+ cities in India.
          </p>
        </div>
      </section>

      {/* City Grid Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Select Your Location
            </h2>
            <div className="flex items-center gap-2 mt-4 md:mt-0 px-4 py-2 bg-blue-50 rounded-full text-xs font-bold text-blue-700 border border-blue-100">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               {locationData.length} ACTIVE CITIES
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {locationData.map((loc, index) => {
              return (
                <Link
                  key={index}
                  href={`/loan-settlement-by-city/${loc.slug}`}
                  className="group flex items-center p-4 border border-gray-100 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
                >
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 truncate">
                    Settlement in {loc.name}
                  </span>
                  <svg 
                    className="w-4 h-4 ml-auto text-gray-300 group-hover:text-blue-500 transition-colors flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gray-900 rounded-[2rem] p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 filter blur-[80px] rounded-full -mr-32 -mt-32"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Get Local Legal Support
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto font-medium">
              We have a network of <strong>expert advocates</strong> in almost every city. Don't face the banks alone—get legal protection today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg text-lg"
              >
                Free Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
