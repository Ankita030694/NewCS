import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUs";
import WhyCredSettle from "@/components/WhyCredSettle";
import Services from "@/components/Services";
import Settlements from "@/components/Settlements";
import Testimonials from "@/components/Testimonials";
import Blogs from "@/components/Blogs";
import FAQ from "@/components/FAQ";
import { homeFaqItems } from "@/data/faq";
import Footer from "@/components/Footer";
import Script from "next/script";

export default function Home() {
  // Structured data for Organization and WebSite
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CredSettle",
    "url": "https://www.credsettle.com",
    "logo": "https://www.credsettle.com/credsettle-logo.svg",
    "image": "https://www.credsettle.com/credsettle-logo-black.png",
    "description": "India's leading legal loan settlement company specializing in RBI-compliant debt resolution",
    "telephone": "+91-8800226635",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8800226635",
      "contactType": "customer service",
      "email": "info@credsettle.com",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4th Floor, 2493AP, Block G, Sushant Lok 2, Sector 57",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122001",
      "addressCountry": "IN"
    },
    "sameAs": [
      // Add social media links when available
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CredSettle",
    "url": "https://www.credsettle.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.credsettle.com/resources?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const financialServiceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Loan Settlement Services",
    "provider": {
      "@type": "Organization",
      "name": "CredSettle",
      "url": "https://www.credsettle.com"
    },
    "description": "RBI-compliant loan settlement services for credit cards, personal loans, business loans, car loans, app loans, and NBFC loans",
    "serviceType": "Debt Settlement",
    "priceRange": "INR1500-INR25000",
    "telephone": "+91-8800226635",
    "image": "https://www.credsettle.com/hero-bg.png",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4th Floor, 2493AP, Block G, Sushant Lok 2, Sector 57",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122001",
      "addressCountry": "IN"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFaqItems.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="w-full overflow-x-hidden max-w-full">
      {/* Structured Data for SEO */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="financial-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HeroSection />
      <AboutUsSection />
      <WhyCredSettle />
      <Services />
      <Settlements />
      <Testimonials />
      <Blogs />
      <FAQ />
      <Footer />
    </div>
  );
}
