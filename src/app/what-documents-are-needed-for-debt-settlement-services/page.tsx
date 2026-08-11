import DocsNeededClient from './DocsNeededClient';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Documents Needed for Debt Settlement Services',
  description: 'Comprehensive guide to the documents required for debt settlement in India. Learn about hardship proof, bank statements, and RBI 2025 guidelines.',
  alternates: {
    canonical: 'https://www.credsettle.com/what-documents-are-needed-for-debt-settlement-services',
  },
};

export default function DocsNeededPage() {
  return (
    <div className="relative min-h-screen bg-white mt-5">
      <Navbar />
            <div className="relative z-10">
      <DocsNeededClient />
                  </div>
            <Footer />
    </div>
  );
}
