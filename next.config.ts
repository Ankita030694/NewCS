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
        destination: "/how-to-handle-recovery-agent-harrasement",
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
        destination: "/how-to-handle-recovery-agent-harrasement",
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
    ];
  },
};

export default nextConfig;
