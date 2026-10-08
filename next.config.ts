import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/webp"],
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "credsettlee.firebasestorage.app",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.firebasestorage.app",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.googleapis.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "image.pollinations.ai",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.pollinations.ai",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "oaidalleapiprodscus.blob.core.windows.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  async redirects() {
    return [
      {
      source: "/social/linkedin",
      destination: "https://www.linkedin.com/company/credsettle/",
      permanent: false,
      },
      {
      source: "/social/facebook",
      destination: "https://www.facebook.com/people/CredSettle/61572589389799/",
      permanent: false,
      },
      {
      source: "/social/instagram",
      destination: "https://www.instagram.com/credsettle/",
      permanent: false,
      },
      {
      source: "/whatsapp",
      destination: "https://wa.me/918800226635?text=I%20want%20to%20settle%20my%20loans",
      permanent: false,
      },
      {
      source: "/credit-score-repair",
      destination: "/services/credit-score-builder",
      permanent: true,
      },
      {
      source: "/authors/:slug*",
      destination: "/author/ashish-jhangra",
      permanent: true,
      },
      {
      source: "/consultation",
      destination: "/contact",
      permanent: true,
      },
      {
      source: "/settle-personal-loan",
      destination: "/services/personal-loan-settlement",
      permanent: true,
      },
      {
      source: "/best-lawyer-for-personal-loan-settlement",
      destination: "/services/personal-loan-settlement",
      permanent: true,
      },
      {
      source: "/recovery-agent-harassment-legal-protection",
      destination: "/services/anti-harassment",
      permanent: true,
      },
      {
      source: "/best-lawyer-for-illegal-loan-recovery-harassment",
      destination: "/services/anti-harassment",
      permanent: true,
      },
      {
      source: "/how-to-deal-with-recovery-agents",
      destination: "/how-to-stop-recovery-agent-harassment",
      permanent: true,
      },
      {
      source: "/loan-restructuring-vs-settlement",
      destination: "/should-i-settle-or-restructure-personal-loan",
      permanent: true,
      },
      {
      source: "/bank-sent-legal-notice-for-loan-default",
      destination: "/legal-notice-for-loan-settlement-harassment",
      permanent: true,
      },
      {
      source: "/convert-settled-loan-to-closed",
      destination: "/legal-help-for-non-closure-of-settled-loan",
      permanent: true,
      },
      {
      source: "/impact-of-loan-default-on-cibil",
      destination: "/understanding-90-day-loan-default-india",
      permanent: true,
      },
      {
      source: "/bajaj-finance-recovery-agent-harrasement-home-visit",
      destination: "/bajaj-finance-recovery-agent-harassment-home-visit",
      permanent: true,
      },
      {
      source: "/services/businessloan",
      destination: "/services/business-loan-settlement",
      permanent: true,
      },
      {
      source: "/services/businessloan/:path+",
      destination: "/services/business-loan-settlement/:path+",
      permanent: true,
      },
      {
      source: "/services/personalloan",
      destination: "/services/personal-loan-settlement",
      permanent: true,
      },
      {
      source: "/services/personalloan/:path+",
      destination: "/services/personal-loan-settlement/:path+",
      permanent: true,
      },
      {
      source: "/nbfc-loan-settlement",
      destination: "/services/nbfc-loan-settlement",
      permanent: true,
      },
      {
      source: "/nbfc-loan-settlement/:path+",
      destination: "/services/nbfc-loan-settlement/:path+",
      permanent: true,
      },
      {
      source: "/services/creditloan",
      destination: "/services/credit-card-settlement",
      permanent: true,
      },
      {
      source: "/services/creditloan/:path+",
      destination: "/services/credit-card-settlement/:path+",
      permanent: true,
      },
      {
      source: "/services/carloan",
      destination: "/services/car-loan-settlement",
      permanent: true,
      },
      {
      source: "/services/carloan/:path+",
      destination: "/services/car-loan-settlement/:path+",
      permanent: true,
      },
      {
      source: "/services/antiharassement",
      destination: "/services/anti-harassment",
      permanent: true,
      },
      {
      source: "/services/antiharassement/:path+",
      destination: "/services/anti-harassment/:path+",
      permanent: true,
      },
      {
      source: "/services/creditscore",
      destination: "/services/credit-score-builder",
      permanent: true,
      },
      {
      source: "/services/creditscore/:path+",
      destination: "/services/credit-score-builder/:path+",
      permanent: true,
      },
      {
      source: "/blogs",
      destination: "/resources",
      permanent: true,
      },
      {
      source: "/blogs/:slug",
      destination: "/resources/:slug",
      permanent: true,
      },
      {
      source: "/form",
      destination: "/contact",
      permanent: true,
      },
      {
      source: "/faq",
      destination: "/services",
      permanent: true,
      },
      {
      source: "/testimonials",
      destination: "/reviews-of-popular-debt-settlement-services-available-to-indian-consumers",
      permanent: true,
      },
      {
      source: "/privacypolicy",
      destination: "/privacy-policy",
      permanent: true,
      },
      {
      source: "/termscondition",
      destination: "/terms-and-conditions",
      permanent: true,
      },
      {
      source: "/thanks",
      destination: "/thank-you",
      permanent: true,
      },
      {
      source: "/payment-success",
      destination: "/thank-you",
      permanent: true,
      },
      {
      source: "/payment-failure",
      destination: "/thank-you",
      permanent: true,
      },
      {
      source: "/failed",
      destination: "/thank-you",
      permanent: true,
      },
      {
      source: "/login",
      destination: "/",
      permanent: true,
      },
      {
      source: "/admin/:path*",
      destination: "/",
      permanent: true,
      },
      {
      source: "/best-apps-for-managing-loan-settlement-offers-in-India",
      destination: "/available-loan-settlement-plans-for-salaried-individuals-via-fintech-apps",
      permanent: true,
      },
      {
      source: "/best-apps-for-managing-loan-settlement-offers-in-india",
      destination: "/available-loan-settlement-plans-for-salaried-individuals-via-fintech-apps",
      permanent: true,
      },
      {
      source: "/ignoring-calls-of-recovery-agent",
      destination: "/how-to-handle-recovery-agent-harrasment",
      permanent: true,
      },
      {
      source: "/legal-services-near-me",
      destination: "/loan-settlement",
      permanent: true,
      },
      {
      source: "/resources/how-loan-settlement-and-anti-harassment-services-transformed-a-clients-life-a-real-life-success-story",
      destination: "/resources",
      permanent: true,
      },
      {
      source: "/resources/how-to-get-loan-or-is-it-time-to-learn-how-to-settle-loan-instead",
      destination: "/resources",
      permanent: true,
      },
      {
      source: "/resources/is-your-bank-account-under-lien-heres-everything-you-need-to-know",
      destination: "/resources",
      permanent: true,
      },
      {
      source: "/resources/loan-settlement-kaise-kare-puri-jankari-step-by-step",
      destination: "/resources",
      permanent: true,
      },
      {
      source: "/resources/www.credsettle.com",
      destination: "/",
      permanent: true,
      },
      {
      source: "/services/loan-settlement",
      destination: "/loan-settlement",
      permanent: true,
      },
      {
      source: "/what-is-ots",
      destination: "/loan-settlement",
      permanent: true,
      },
      {
      source: "/bank-recovery-defence",
      destination: "/bank-recovery-case-in-court",
      permanent: true,
      },
      {
      source: "/best-lawyer-for-credit-card-debt-settlement",
      destination: "/credit-card-settlement",
      permanent: true,
      },
      {
      source: "/cibil-defaulter-list",
      destination: "/how-to-check-the-cibil-defaulter-list",
      permanent: true,
      },
      {
      source: "/co-signer-legal-rights-loan-default",
      destination: "/resources",
      permanent: true,
      },
      {
      source: "/credit-card-debt-exit",
      destination: "/credit-card-settlement",
      permanent: true,
      },
      {
      source: "/credit-card-debt-exit-strategy",
      destination: "/credit-card-settlement",
      permanent: true,
      },
      {
      source: "/drt-specialization",
      destination: "/services",
      permanent: true,
      },
      {
      source: "/education-loan-lawyer-india",
      destination: "/education-loan-default-settlement-india",
      permanent: true,
      },
      {
      source: "/fake-legal-notice-from-bank-check",
      destination: "/bank-sent-legal-notice-for-loan-what-to-do",
      permanent: true,
      },
      {
      source: "/harassment-by-recovery-agents",
      destination: "/how-to-handle-recovery-agent-harrasment",
      permanent: true,
      },
      {
      source: "/how-to-delay-loan-repayment-legally",
      destination: "/resources",
      permanent: true,
      },
      {
      source: "/how-to-reply-to-legal-notice-for-personal-loan",
      destination: "/bank-sent-legal-notice-for-loan-what-to-do",
      permanent: true,
      },
      {
      source: "/how-to-settle-personal-loan",
      destination: "/how-to-settle-loan",
      permanent: true,
      },
      {
      source: "/lawyer-to-stop-police-harassment-loan",
      destination: "/police-case-for-credit-card-debt",
      permanent: true,
      },
      {
      source: "/loan-settlement-status",
      destination: "/check-loan-settlement-status",
      permanent: true,
      },
      {
      source: "/msme-loan-defence",
      destination: "/best-lawyer-for-msme-and-business-loans",
      permanent: true,
      },
      {
      source: "/rbi-guidelines-for-loan-recovery",
      destination: "/rbi-rules-for-recovery-agents",
      permanent: true,
      },
      {
      source: "/settlement-strategies",
      destination: "/loan-settlement",
      permanent: true,
      },
      {
      source: "/how-to-handle-recovery-agent-harrasement",
      destination: "/how-to-handle-recovery-agent-harrasment",
      permanent: true,
      },
      {
      source: "/home",
      destination: "/",
      permanent: true,
      },
      {
      source: "/best-lawyer-for-loan-settlement",
      destination: "/loan-settlement",
      permanent: true,
      },
      {
      source: "/cibil-score-improvement",
      destination: "/how-to-improve-cibil-score",
      permanent: true,
      },
      {
      source: "/legal-rights-against-harassment",
      destination: "/how-to-handle-recovery-agent-harrasment",
      permanent: true,
      },
      {
      source: "/debt-harassment-laws-india",
      destination: "/resources",
      permanent: true,
      },
      {
      source: "/cibil-score-after-settlement",
      destination: "/how-to-improve-cibil-score-after-loan-settlement",
      permanent: true,
      },
      {
      source: "/does-settling-a-loan-impact-my-cibil-credit-score",
      destination: "/how-does-settling-a-loan-impact-my-cibil-credit-score",
      permanent: true,
      },
      {
      source: "/debt-settlement-process",
      destination: "/loan-settlement-process-in-hindi",
      permanent: true,
      },
      {
      source: "/services/how-to-check-your-loan-status-without-visiting-the-bank",
      destination: "/how-to-check-your-loan-status-without-visiting-the-bank",
      permanent: true,
      },
      {
      source: "/legal-notice-response",
      destination: "/bank-sent-legal-notice-for-loan-what-to-do",
      permanent: true,
      },
      {
      source: "/rbi-guidelines-for-loan-settlement-2024",
      destination: "/rbi-rules-for-recovery-agents",
      permanent: true,
      },
      {
      source: "/credit-score-builder",
      destination: "/services/credit-score-builder",
      permanent: true,
      },
      {
      source: "/digital-cyber-loan-dispute-resolution",
      destination: "/digital-online-cyber-loan-disputes",
      permanent: true,
      },
      {
      source: "/contact-us",
      destination: "/contact",
      permanent: true,
      },
      {
      source: "/anti-harassment",
      destination: "/services/anti-harassment",
      permanent: true,
      },
      {
      source: "/credit-card-debt-settlement",
      destination: "/credit-card-settlement",
      permanent: true,
      },
      {
      source: "/what-happens-if-i-dont-pay-my-personal-loan",
      destination: "/punishment-for-non-payment-of-personal-loan-in-india",
      permanent: true,
      },
      {
      source: "/how-to-deal-with-collection-calls",
      destination: "/how-to-deal-with-collection-calls-while-in-a-debt-settlement-program",
      permanent: true,
      },
      {
      source: "/loan-settlement-during-job-loss",
      destination: "/loan-settlement-for-borrowers-facing-economic-downturn",
      permanent: true,
      },
      {
      source: "/rbi-new-recovery-guidelines",
      destination: "/rbi-new-recovery-guidelines-july-2026",
      permanent: true,
      },
      {
      source: "/loan-settlement-for-senior-citizens",
      destination: "/loan-settlement-for-senior-citizens-pension-holders-india",
      permanent: true,
      },
      {
      source: "/loan-settlement/aditya-birla-capital",
      destination: "/loan-settlement",
      permanent: true,
      },
      {
      source: "/legal-notice-for-loan-recovery",
      destination: "/bank-sent-legal-notice-for-loan-what-to-do",
      permanent: true,
      },
      {
      source: "/loan-settlement/bajaj-finance",
      destination: "/loan-settlement",
      permanent: true,
      },
      {
      source: "/legal-help-for-loan-default",
      destination: "/loan-settlement",
      permanent: true,
      },
      {
      source: "/how-to-negotiate-a-personal-loan-settlement-with-lenders",
      destination: "/how-can-i-negotiate-a-personal-loan-settlement-with-lenders",
      permanent: true,
      },
      {
      source: "/how-to-prove-financial-hardship-for-loan-settlement",
      destination: "/how-to-ask-bank-for-settlement",
      permanent: true,
      },
      {
      source: "/best-lawyer-for-bounced-security-check-for-loans-and-credit-card-disputes",
      destination: "/best-lawyers-for-bounced-security-check-for-loans-and-credit-card-disputes",
      permanent: true,
      },
      {
      source: "/business-loan-settlement",
      destination: "/services/business-loan-settlement",
      permanent: true,
      },
      {
      source: "/legal-help-for-loan-settlement-by-drt",
      destination: "/best-lawyer-for-loan-settlement-by-drt",
      permanent: true,
      },
      {
      source: "/legal-help-for-loan-settlement",
      destination: "/loan-settlement",
      permanent: true,
      },
      {
      source: "/best-lawyers-for-cibil-dispute-resolution",
      destination: "/resources",
      permanent: true,
      },
      {
      source: "/loan-settlement/kreditbee",
      destination: "/loan-settlement",
      permanent: true,
      },
      {
      source: "/calculate-my-settlement-savings",
      destination: "/personal-loan-settlement-calculator",
      permanent: true,
      },
      {
      source: "/debt-resolution-companies-contact-details",
      destination: "/contact",
      permanent: true,
      },
      {
      source: "/services/bank-harassment",
      destination: "/services/anti-harassment",
      permanent: true,
      },
      {
      source: "/resources/debt-resolution-program-reviews",
      destination: "/reviews-of-popular-debt-settlement-services-available-to-indian-consumers",
      permanent: true,
      },
      {
      source: "/blogs/debt-resolution-program-reviews",
      destination: "/reviews-of-popular-debt-settlement-services-available-to-indian-consumers",
      permanent: true,
      },
      {
      source: "/blogs/debt-resolution-program-reviews-",
      destination: "/reviews-of-popular-debt-settlement-services-available-to-indian-consumers",
      permanent: true,
      },
      {
      source: "/resources/debt-resolution-program-reviews-",
      destination: "/reviews-of-popular-debt-settlement-services-available-to-indian-consumers",
      permanent: true,
      },
      {
      source: "/loan-settlement-by-city/ganganagar",
      destination: "/loan-settlement-by-city/sri-ganganagar",
      permanent: true,
      },
      {
      source: "/loan-settlement-by-city/sector-:num(1|2|3|4|5|6|7|8|9|10|11)-vasundhara",
      destination: "/loan-settlement-by-city/vasundhara-sector-:num",
      permanent: true,
      },
      {
      source: "/loan-settlement-by-city/:foreign(geelong|dhaka|barisal|tonkolili|alamdanga)",
      destination: "/loan-settlement-by-city",
      permanent: true,
      },
      {
      source: "/debt-settlement-vs-loan-restructuring-for-credit-card-debt-relief-in-india-which-should-i-choose",
      destination: "/debt-settlement-vs-loan-restructuring-credit-card",
      permanent: true,
      },
      {
      source: "/is-there-any-mobile-software-to-automatically-block-harassment-calls-from-recovery-agents",
      destination: "/block-harassment-calls-from-recovery-agents",
      permanent: true,
      },
      {
      source: "/loan-settlement-services-vs-debt-consolidation-companies-which-is-better-for-reducing-emi",
      destination: "/loan-settlement-vs-debt-consolidation",
      permanent: true,
      },
      {
      source: "/SME-loan-dispute-resolution",
      destination: "/sme-loan-dispute-resolution",
      permanent: true,
      },
      {
      source: "/best-lawyer-for-MSME-loan-recovery-defence",
      destination: "/best-lawyer-for-msme-loan-recovery-defence",
      permanent: true,
      },
      {
      source: "/best-lawyer-for-MSME-personal-loan",
      destination: "/best-lawyer-for-msme-personal-loan",
      permanent: true,
      },
      {
      source: "/can-I-get-a-loan-settlement-quote-instantly-from-online-services-",
      destination: "/can-i-get-a-loan-settlement-quote-instantly-from-online-services-",
      permanent: true,
      },
      {
      source: "/can-i-get-a-loan-settlement-quote-instantly-from-online-services",
      destination: "/can-i-get-a-loan-settlement-quote-instantly-from-online-services-",
      permanent: true,
      },
      {
      source: "/can-I-get-a-loan-settlement-quote-instantly-from-online-services",
      destination: "/can-i-get-a-loan-settlement-quote-instantly-from-online-services-",
      permanent: true,
      },
      {
      source: "/can-I-settle-my-home-loan",
      destination: "/can-i-settle-my-home-loan",
      permanent: true,
      },
      {
      source: "/how-can-I-negotiate-a-personal-loan-settlement-with-lenders",
      destination: "/how-can-i-negotiate-a-personal-loan-settlement-with-lenders",
      permanent: true,
      },
      {
      source: "/recommendations-for-loan-settlement-services-that-negotiate-lower-interest-rates-in-india",
      destination: "/loan-settlement-services-lower-interest-rates-india",
      permanent: true,
      },
      {
      source: "/loanA-settlement-by-city/:path*",
      destination: "/loan-settlement-by-city/:path*",
      permanent: true,
      },
      {
      source: "/loanA-settlement-by-city",
      destination: "/loan-settlement-by-city",
      permanent: true,
      },
      {
      source: "/loana-settlement-by-city/:path*",
      destination: "/loan-settlement-by-city/:path*",
      permanent: true,
      },
      {
      source: "/loana-settlement-by-city",
      destination: "/loan-settlement-by-city",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/hdfc-bank-credit-card",
      destination: "/credit-card-settlement/hdfc",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/icici-bank-credit-card",
      destination: "/credit-card-settlement/icici",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/sbi-card",
      destination: "/credit-card-settlement/sbi",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/sbicap-securities",
      destination: "/credit-card-settlement/sbi",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/pnb-housing-finance",
      destination: "/credit-card-settlement/pnb",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/branch-international",
      destination: "/loan-settlement-by-bank/branch",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/faircent",
      destination: "/loan-settlement-by-bank/faircent-technologies-india-pvt-ltd",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/fibe-early-salary",
      destination: "/loan-settlement-by-bank/fibe",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/freo-save",
      destination: "/loan-settlement-by-bank/freopay",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/gichf",
      destination: "/loan-settlement-by-bank/gic-housing-finance",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/iifl-home-finance",
      destination: "/loan-settlement-by-bank/iifl",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/incred-financial-services",
      destination: "/loan-settlement-by-bank/incred",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/jupiter-edge",
      destination: "/loan-settlement-by-bank/jupiter-money",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/lazypay",
      destination: "/loan-settlement-by-bank/lazy-pay",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/loantap-financial",
      destination: "/loan-settlement-by-bank/loantap",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/muthoot-fincorp",
      destination: "/loan-settlement-by-bank/muthoot-finance",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/onecard-metal",
      destination: "/loan-settlement-by-bank/onecard",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/paytm-postpaid",
      destination: "/loan-settlement-by-bank/paytm",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/poonawalla-fincorp-limited",
      destination: "/loan-settlement-by-bank/poonawala-fin",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/ring-app",
      destination: "/loan-settlement-by-bank/si-creva",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/rupeeredee",
      destination: "/loan-settlement-by-bank/rupee-redee",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/slice-card",
      destination: "/loan-settlement-by-bank/slice",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/stashfin-credit",
      destination: "/loan-settlement-by-bank/stashfin",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/tata-motor-finance",
      destination: "/loan-settlement-by-bank/tata-capital",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/ugro-capital-ltd",
      destination: "/loan-settlement-by-bank/ugro-capital",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/uni-cards",
      destination: "/loan-settlement-by-bank/uni-card",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/vivriti-capital",
      destination: "/loan-settlement-by-bank/vivriti",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/zestmoney",
      destination: "/loan-settlement-by-bank/zest-money",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/aadhar-housing-finance",
      destination: "/loan-settlement-by-bank/aadhar-housing-finance",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/can-fin-homes",
      destination: "/loan-settlement-by-bank/can-fin-homes",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/aviom-india-housing",
      destination: "/loan-settlement-by-bank/aviom-india-housing",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/avanse-financial-services",
      destination: "/loan-settlement-by-bank/avanse-financial-services",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/bharatpe",
      destination: "/loan-settlement-by-bank/bharatpe",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/auxilo-finserve",
      destination: "/loan-settlement-by-bank/auxilo-finserve",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/credila-financial-services",
      destination: "/loan-settlement-by-bank/credila-financial-services",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/fatakpay",
      destination: "/loan-settlement-by-bank/fatakpay",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/fi-money",
      destination: "/loan-settlement-by-bank/fi-money",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/fedbank-financial-services",
      destination: "/loan-settlement-by-bank/fedbank-financial-services",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/flexiloans",
      destination: "/loan-settlement-by-bank/flexiloans",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/homefirst-finance",
      destination: "/loan-settlement-by-bank/homefirst-finance",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/i2ifunding",
      destination: "/loan-settlement-by-bank/i2ifunding",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/india-shelter-finance",
      destination: "/loan-settlement-by-bank/india-shelter-finance",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/indostar-capital",
      destination: "/loan-settlement-by-bank/indostar-capital",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/kissht",
      destination: "/loan-settlement-by-bank/kissht",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/lendingkart",
      destination: "/loan-settlement-by-bank/lendingkart",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/lic-housing-finance",
      destination: "/loan-settlement-by-bank/lic-housing-finance",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/magma-fincorp",
      destination: "/loan-settlement-by-bank/magma-fincorp",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/kreditzy",
      destination: "/loan-settlement-by-bank/kreditzy",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/mahindra-finance",
      destination: "/loan-settlement-by-bank/mahindra-finance",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/manappuram-finance",
      destination: "/loan-settlement-by-bank/manappuram-finance",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/mcapital",
      destination: "/loan-settlement-by-bank/mcapital",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/moneyview",
      destination: "/loan-settlement-by-bank/moneyview",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/mpokket",
      destination: "/loan-settlement-by-bank/mpokket",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/mswipe",
      destination: "/loan-settlement-by-bank/mswipe",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/payme-india",
      destination: "/loan-settlement-by-bank/payme-india",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/pine-labs",
      destination: "/loan-settlement-by-bank/pine-labs",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/pocketly",
      destination: "/loan-settlement-by-bank/pocketly",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/rapid-rupee",
      destination: "/loan-settlement-by-bank/rapid-rupee",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/privo",
      destination: "/loan-settlement-by-bank/privo",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/redcarpet",
      destination: "/loan-settlement-by-bank/redcarpet",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/repco-home-finance",
      destination: "/loan-settlement-by-bank/repco-home-finance",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/rupeecircle",
      destination: "/loan-settlement-by-bank/rupeecircle",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/shubham-housing-development",
      destination: "/loan-settlement-by-bank/shubham-housing-development",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/smartcoin",
      destination: "/loan-settlement-by-bank/smartcoin",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/snapmint",
      destination: "/loan-settlement-by-bank/snapmint",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/sundaram-finance",
      destination: "/loan-settlement-by-bank/sundaram-finance",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/tala-loan",
      destination: "/loan-settlement-by-bank/tala-loan",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/vastu-housing-finance",
      destination: "/loan-settlement-by-bank/vastu-housing-finance",
      permanent: true,
      },
      {
      source: "/credit-card-settlement/zype",
      destination: "/loan-settlement-by-bank/zype",
      permanent: true,
      },
      // Bank Loan Settlement Alias 301 Redirects (Fix Screaming Frog Canonicalised Issue)
      {
        source: "/loan-settlement-by-bank/chimnay-finlease-ltd",
        destination: "/loan-settlement-by-bank/chimnay-finlease-ltd-lenditt",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/lenditt",
        destination: "/loan-settlement-by-bank/chimnay-finlease-ltd-lenditt",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/indus-ind",
        destination: "/loan-settlement-by-bank/indusind",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/landt",
        destination: "/loan-settlement-by-bank/l-t-finance",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/krzaybee",
        destination: "/loan-settlement-by-bank/krazybee",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/landt-finance",
        destination: "/loan-settlement-by-bank/l-t-finance",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/lt-finance",
        destination: "/loan-settlement-by-bank/l-t-finance",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/l-and-t-finance",
        destination: "/loan-settlement-by-bank/l-t-finance",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/l-and-t",
        destination: "/loan-settlement-by-bank/l-t-finance",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/lt",
        destination: "/loan-settlement-by-bank/l-t-finance",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/mpocket",
        destination: "/loan-settlement-by-bank/mpokket",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/north-east-small-finance-bank",
        destination: "/loan-settlement-by-bank/north-east-small-finance",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/branch-international",
        destination: "/loan-settlement-by-bank/branch",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/faircent",
        destination: "/loan-settlement-by-bank/faircent-technologies-india-pvt-ltd",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/fibe-early-salary",
        destination: "/loan-settlement-by-bank/fibe",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/freo-save",
        destination: "/loan-settlement-by-bank/freopay",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/gichf",
        destination: "/loan-settlement-by-bank/gic-housing-finance",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/hdfc-bank-credit-card",
        destination: "/loan-settlement-by-bank/hdfc",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/iifl-home-finance",
        destination: "/loan-settlement-by-bank/iifl",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/icici-bank-credit-card",
        destination: "/loan-settlement-by-bank/icici",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/incred-financial-services",
        destination: "/loan-settlement-by-bank/incred",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/lazypay",
        destination: "/loan-settlement-by-bank/lazy-pay",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/jupiter-edge",
        destination: "/loan-settlement-by-bank/jupiter-money",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/loantap-financial",
        destination: "/loan-settlement-by-bank/loantap",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/muthoot-fincorp",
        destination: "/loan-settlement-by-bank/muthoot-finance",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/onecard-metal",
        destination: "/loan-settlement-by-bank/onecard",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/paytm-postpaid",
        destination: "/loan-settlement-by-bank/paytm",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/pnb-housing-finance",
        destination: "/loan-settlement-by-bank/punjab-national-bank",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/poonawalla-fincorp-limited",
        destination: "/loan-settlement-by-bank/poonawala-fin",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/ring-app",
        destination: "/loan-settlement-by-bank/si-creva",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/rupeeredee",
        destination: "/loan-settlement-by-bank/rupee-redee",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/sbi-card",
        destination: "/loan-settlement-by-bank/sbi",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/sbicap-securities",
        destination: "/loan-settlement-by-bank/sbi",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/stashfin-credit",
        destination: "/loan-settlement-by-bank/stashfin",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/slice-card",
        destination: "/loan-settlement-by-bank/slice",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/ugro-capital-ltd",
        destination: "/loan-settlement-by-bank/ugro-capital",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/uni-cards",
        destination: "/loan-settlement-by-bank/uni-card",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/vivriti-capital",
        destination: "/loan-settlement-by-bank/vivriti",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/zestmoney",
        destination: "/loan-settlement-by-bank/zest-money",
        permanent: true,
      },
      {
        source: "/loan-settlement-by-bank/tata-motor-finance",
        destination: "/loan-settlement-by-bank/tata-capital",
        permanent: true,
      },
      // Credit Card Settlement Dadra State Slug 301 Permanent Redirects (Fix Screaming Frog URL >115 chars)
      {
        source: "/credit-card-settlement/:bank/dadra-and-nagar-haveli-and-daman-and-diu",
        destination: "/credit-card-settlement/:bank/dadra-nagar-haveli-daman-diu",
        permanent: true,
      },
      {
        source: "/credit-card-settlement/capital-small-finance-bank/dadra-and-nagar-haveli-and-daman-and-diu",
        destination: "/credit-card-settlement/capital-small-finance-bank/dadra-nagar-haveli-daman-diu",
        permanent: true,
      },
      {
        source: "/credit-card-settlement/equitas-small-finance-bank/dadra-and-nagar-haveli-and-daman-and-diu",
        destination: "/credit-card-settlement/equitas-small-finance-bank/dadra-nagar-haveli-daman-diu",
        permanent: true,
      },
      {
        source: "/credit-card-settlement/north-east-small-finance-bank/dadra-and-nagar-haveli-and-daman-and-diu",
        destination: "/credit-card-settlement/north-east-small-finance-bank/dadra-nagar-haveli-daman-diu",
        permanent: true,
      },
      {
        source: "/credit-card-settlement/shivalik-small-finance-bank/dadra-and-nagar-haveli-and-daman-and-diu",
        destination: "/credit-card-settlement/shivalik-small-finance-bank/dadra-nagar-haveli-daman-diu",
        permanent: true,
      },
      {
        source: "/credit-card-settlement/utkarsh-small-finance-bank/dadra-and-nagar-haveli-and-daman-and-diu",
        destination: "/credit-card-settlement/utkarsh-small-finance-bank/dadra-nagar-haveli-daman-diu",
        permanent: true,
      },
      {
        source: "/credit-card-settlement/ujjivan-small-finance-bank/dadra-and-nagar-haveli-and-daman-and-diu",
        destination: "/credit-card-settlement/ujjivan-small-finance-bank/dadra-nagar-haveli-daman-diu",
        permanent: true,
      },
      {
        source: "/credit-card-settlement/suryoday-small-finance-bank/dadra-and-nagar-haveli-and-daman-and-diu",
        destination: "/credit-card-settlement/suryoday-small-finance-bank/dadra-nagar-haveli-daman-diu",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: blob: https:; font-src 'self' data: https:; connect-src 'self' https:; frame-src 'self' https:; object-src 'none'; base-uri 'self';",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
