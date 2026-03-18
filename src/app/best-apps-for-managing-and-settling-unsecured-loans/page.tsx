import BestAppsClient from './BestAppsClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: '10 Best Apps for Managing and Settling Unsecured Loans in India (2025)',
  description: 'Discover the top-rated apps for debt resolution and loan settlement in India. Featuring AMA Legal Solutions, SingleDebt, and AI-powered debt trackers to help you become debt-free.',
  keywords: 'best loan settlement apps india, debt management apps 2025, ama legal solutions app, unsecured loan settlement help, settle credit card debt app, rbi compliant debt apps',
};

export default function BestAppsPage() {
    return (
        <>
            <Navbar />
            <BestAppsClient />
            <Footer />
        </>
    );
}
