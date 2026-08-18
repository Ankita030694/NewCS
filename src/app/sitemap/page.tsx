import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SitemapClient from './SitemapClient';
import { sitemapLinks } from './sitemapData';

export const metadata: Metadata = {
  title: "HTML Sitemap | All Debt Relief & Legal Guides | CredSettle",
  description: "Browse CredSettle's complete directory of legal and financial query guides, loan settlement procedures, and debt resolution resources sorted by latest additions.",
  alternates: {
    canonical: 'https://www.credsettle.com/sitemap',
  },
};

export default function SitemapPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <main>
        <SitemapClient initialLinks={sitemapLinks} />
      </main>
      <Footer />
    </div>
  );
}
