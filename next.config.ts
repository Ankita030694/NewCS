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
        hostname: "storage.googleapis.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
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
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "credsettle.com",
          },
        ],
        destination: "https://www.credsettle.com/:path*",
        permanent: true,
      },
      {
        source: "/services/businessloan/:path*",
        destination: "/services/business-loan-settlement/:path*",
        permanent: true,
      },
      {
        source: "/services/personalloan/:path*",
        destination: "/services/personal-loan-settlement/:path*",
        permanent: true,
      },
      {
        source: "/nbfc-loan-settlement",
        destination: "/services/nbfc-loan-settlement",
        permanent: true,
      },
      {
        source: "/nbfc-loan-settlement/:path*",
        destination: "/services/nbfc-loan-settlement/:path*",
        permanent: true,
      },
      {
        source: "/services/creditloan/:path*",
        destination: "/services/credit-card-settlement/:path*",
        permanent: true,
      },
      {
        source: "/services/carloan/:path*",
        destination: "/services/car-loan-settlement/:path*",
        permanent: true,
      },
      {
        source: "/services/antiharassement/:path*",
        destination: "/services/anti-harassment/:path*",
        permanent: true,
      },
      {
        source: "/services/creditscore/:path*",
        destination: "/services/credit-score-builder/:path*",
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
        destination: "/",
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
        destination: "/resources",
        permanent: true,
      },
      {
        source: "/best-apps-for-managing-loan-settlement-offers-in-india",
        destination: "/resources",
        permanent: true,
      },
      {
        source: "/ignoring-calls-of-recovery-agent",
        destination: "/how-to-handle-recovery-agent-harrasment",
        permanent: true,
      },
      {
        source: "/legal-services-near-me",
        destination: "/",
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
        source: "/bajaj-finance-recovery-agent-harrasement-home-visit",
        destination: "/bajaj-finance-recovery-agent-harassment-home-visit",
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
        source: "/compare-different-debt-management-and-settlement-programs-available-to-Indian-consumers",
        destination: "/compare-different-debt-management-and-settlement-programs-available-to-indian-consumers",
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
        source: "/how-to-negotiate-a-debt-settlement-with-creditors-in-india",
        destination: "/how-to-negotiate-a-debt-settlement-with-creditors-in-India",
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
        destination: "/how-can-I-negotiate-a-personal-loan-settlement-with-lenders",
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
    ];
  },
};

export default nextConfig;
