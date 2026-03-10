import React from 'react';
import { Metadata } from 'next';
import RecoveryAgentsFamilyLawClient from './RecoveryAgentsFamilyLawClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Recovery Agents Calling Family Members: Law & Privacy Rights 2025',
    description: 'Learn about the legal protections against recovery agents contacting your family, friends, or employer. Explore RBI mandates, privacy laws, and how to stop harassment.',
    alternates: {
        canonical: 'https://www.credsettle.com/recovery-agents-calling-family-members-law',
    },
    openGraph: {
        title: 'Recovery Agents Calling Family Members: Law & Privacy Rights 2025',
        description: 'Learn about the legal protections against recovery agents contacting your family, friends, or employer. Explore RBI mandates, privacy laws, and how to stop harassment.',
        url: 'https://www.credsettle.com/recovery-agents-calling-family-members-law',
        type: 'article',
    },
};

export default function RecoveryAgentsFamilyLawPage() {
    return (
        <>
            <Navbar />
            <RecoveryAgentsFamilyLawClient />
            <Footer />
        </>
    );
}
