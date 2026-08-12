import LoanSettlementCompaniesClient from './LoanSettlementCompaniesClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  alternates: { canonical: 'https://www.credsettle.com/which-companies-offer-loan-settlement-services-in-india' },
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
