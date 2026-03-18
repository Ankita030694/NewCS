import LoanSettlementCompaniesClient from './LoanSettlementCompaniesClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Which Companies Offer Loan Settlement Services in India? (2025 Reviews)',
  description: 'Discover the top loan settlement companies in India. Comprehensive reviews of debt relief agencies, legal firms, and negotiation services for personal and business loans.',
  keywords: 'loan settlement companies india, debt relief agencies, best debt settlement company, ama legal solutions, freed care, credsettle reviews, debt negotiation services',
};

export default function LoanSettlementCompaniesPage() {
    return (
        <>
            <Navbar />
            <LoanSettlementCompaniesClient />
            <Footer />
        </>
    )
}
