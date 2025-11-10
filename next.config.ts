import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
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
    ];
  },
};

export default nextConfig;
