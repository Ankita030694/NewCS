import React from 'react';
import { Metadata } from 'next';
import CanIGoToJailClient from './CanIGoToJailClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Can I Go To Jail for Loan Default in India? Truth and Laws 2025',
    description: 'Stop being intimidated by jail threats. Learn the legal reality of loan defaults in India, Supreme Court rulings, and the difference between civil and criminal liability.',
    alternates: {
        canonical: 'https://www.credsettle.com/can-i-go-to-jail-for-loan-default-in-india',
    },
    openGraph: {
        title: 'Can I Go To Jail for Loan Default in India? Truth and Laws 2025',
        description: 'Stop being intimidated by jail threats. Learn the legal reality of loan defaults in India, Supreme Court rulings, and the difference between civil and criminal liability.',
        url: 'https://www.credsettle.com/can-i-go-to-jail-for-loan-default-in-india',
        type: 'article',
    },
};

export default function CanIGoToJailPage() {
    return (
        <>
            <Navbar />
            <CanIGoToJailClient />
            <Footer />
        </>
    );
}
