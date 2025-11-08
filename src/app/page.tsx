import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUs";
import WhyCredSettle from "@/components/WhyCredSettle";
import Services from "@/components/Services";
import Settlements from "@/components/Settlements";
import Testimonials from "@/components/Testimonials";
import Blogs from "@/components/Blogs";
import FAQ from "@/components/FAQ";
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
    "description": "India's leading legal loan settlement company specializing in RBI-compliant debt resolution",
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
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is RBI compliant loan settlement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RBI compliant loan settlement follows Reserve Bank of India guidelines to help you close delinquent accounts with documented agreements that protect your credit profile."
        }
      },
      {
        "@type": "Question",
        "name": "How does CredSettle negotiate with banks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our legal team reviews your case, prepares evidence of financial stress, and negotiates directly with the bank to secure the most favorable waiver possible."
        }
      },
      {
        "@type": "Question",
        "name": "Can I settle multiple loans together?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we create a unified strategy that prioritizes high risk accounts, coordinates timelines, and delivers consolidated settlements for credit cards and personal or business loans."
        }
      },
      {
        "@type": "Question",
        "name": "Will settlement hurt my credit score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A negotiated settlement may affect your credit score temporarily, but it prevents legal escalation and sets the stage for faster score recovery once liabilities are closed."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the settlement process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most clients see first negotiation outcomes within 30 to 45 days, depending on creditor responsiveness and how quickly documentation is provided."
        }
      }
    ]
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
