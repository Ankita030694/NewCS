import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RecoveryAgentsThreateningMeClient from './RecoveryAgentsThreateningMeClient';

export const metadata: Metadata = {
    title: "Recovery Agents Threatening Me? Legal Rights & Plan",
    description: "Are recovery agents harassing you for a bank loan? Learn the 2025 RBI guidelines, your legal rights against threats, and how to stop harassment immediately. Expert legal advice for borrowers.",
    keywords: [
        "recovery agents threatening me what to do",
        "bank recovery harassment India 2025",
        "RBI guidelines for recovery agents 2026",
        "how to stop recovery agents harassment",
        "legal rights against loan recovery agents",
        "can recovery agents come to my house",
        "bank recovery agent timing rules India",
        "harassment by private recovery agents",
        "debt recovery harassment legal protection",
        "complaint against bank recovery agents"
    ],
    alternates: {
        canonical: 'https://www.credsettle.com/recovery-agents-threatening-me-what-to-do',
    },
};

export default function RecoveryAgentsThreateningMePage() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <RecoveryAgentsThreateningMeClient />
            <Footer />
        </div>
    );
}
