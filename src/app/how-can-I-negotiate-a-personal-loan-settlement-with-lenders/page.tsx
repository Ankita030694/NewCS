import NegotiatePersonalLoanClient from './NegotiatePersonalLoanClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  alternates: { canonical: 'https://www.credsettle.com/how-can-I-negotiate-a-personal-loan-settlement-with-lenders' },
  title: 'How Can I Negotiate a Personal Loan Settlement with Lenders? (2025 Guide)',
  description: 'Learn the expert strategies to negotiate a personal loan settlement in India. Step-by-step guide on reducing your debt, stopping harassment, and legal rights.',
  keywords: 'negotiate personal loan settlement, debt settlement india, hdfc loan settlement, sbi loan settlement, rbi recovery guidelines 2025, loan settlement process',
};

export default function NegotiatePersonalLoanPage() {
    return (
        <>
            <Navbar />
            <NegotiatePersonalLoanClient />
            <Footer />
        </>
    );
}
