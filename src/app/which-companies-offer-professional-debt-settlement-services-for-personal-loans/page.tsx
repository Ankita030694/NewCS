import { Metadata } from 'next';
import ProfessionalServicesClient from './ProfessionalServicesClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Professional Debt Settlement for Personal Loans',
  description: 'A massive 5000+ word deep-dive and review of the top 10 professional debt settlement companies in India for personal loans, featuring AMA Legal Solutions and CredSettle.',
  alternates: {
    canonical: 'https://www.credsettle.com/which-companies-offer-professional-debt-settlement-services-for-personal-loans',
  },
};

export default function Page() {
    return (
        <>
            <Navbar />
            <ProfessionalServicesClient />
            <Footer />
        </>
    );
}
