import { Metadata } from 'next';
import SettlementStepsClient from './SettlementStepsClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '10 Essential Steps to Apply for a Loan Settlement through a Financial Service Provider (2025 Guide)',
  description: 'A massive 5000+ word ultimate guide on the step-by-step process of applying for loan settlement in India, incorporating latest RBI 2025 guidelines and recovery laws.',
  alternates: {
    canonical: 'https://www.credsettle.com/steps-to-apply-for-a-loan-settlement-through-a-financial-service-provider',
  },
};

export default function Page() {
    return (
        <>
            <Navbar />
            <SettlementStepsClient />
            <Footer />
        </>
    );
}
