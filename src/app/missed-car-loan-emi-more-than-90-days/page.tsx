import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MissedCarLoanEmiMoreThan90DaysClient from './MissedCarLoanEmiMoreThan90DaysClient';

export const metadata: Metadata = {
  title: "Missed Car Loan EMI for More Than 90 Days: Seizure Rules",
  description: "Learn the legal RBI guidelines for vehicle repossession, pre-seizure notices, and how to stop auto loan repossession when a car loan becomes an NPA after 90 days.",
  keywords: [
      "missed car loan emi 90 days",
      "vehicle seizure rules India",
      "stop auto loan repossession",
      "car loan npa recovery"
  ],
  alternates: {
    canonical: 'https://www.credsettle.com/missed-car-loan-emi-more-than-90-days',
  },
};

export default function MissedCarLoanEmiMoreThan90DaysPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Missed Car Loan EMI for More Than 90 Days: Seizure Rules",
    "description": "Learn the legal RBI guidelines for vehicle repossession, pre-seizure notices, and how to stop auto loan repossession when a car loan becomes an NPA after 90 days.",
    "image": "https://www.credsettle.com/images/missed-car-loan-emi-90-days.jpg",
    "author": {
      "@type": "Organization",
      "name": "CredSettle"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CredSettle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.credsettle.com/logo.png"
      }
    },
    "datePublished": "2026-07-23",
    "dateModified": "2026-07-23"
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.credsettle.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Missed Car Loan EMI 90 Days",
        "item": "https://www.credsettle.com/missed-car-loan-emi-more-than-90-days"
      }
    ]
  };

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CredSettle",
    "url": "https://www.credsettle.com",
    "logo": "https://www.credsettle.com/logo.png",
    "sameAs": [
        "https://www.facebook.com/credsettle",
        "https://www.twitter.com/credsettle",
        "https://www.linkedin.com/company/credsettle"
    ]
  };

  return (
    <div className="relative min-h-screen bg-white mt-5">
      <Navbar />
            <div className="relative z-10">
      <Script
        id="article-schema-missed-car-loan"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <Script
        id="breadcrumb-schema-missed-car-loan"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Script
        id="org-schema-missed-car-loan"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <MissedCarLoanEmiMoreThan90DaysClient />
                  </div>
            <Footer />
    </div>
  );
}
