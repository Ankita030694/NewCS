import { Metadata } from 'next';
import Script from 'next/script';
import BangaloreAgenciesClient from './BangaloreAgenciesClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Find Reputable Debt Relief Agencies in Bangalore | Unsecured Loans',
    description: 'Discover the top reputable debt relief agencies specializing in unsecured loans in Bangalore. Compare firms, understand RBI frameworks, and stop recovery agent harassment today.',
    keywords: [
        'reputable debt relief agencies specializing in unsecured loans in bangalore',
        'loan settlement bangalore',
        'unsecured loan settlement agencies',
        'debt relief india',
        'stop recovery agents bangalore',
        'RBI guidelines debt settlement'
    ],
    openGraph: {
        title: 'Find Reputable Debt Relief Agencies in Bangalore | Unsecured Loans',
        description: 'Discover the top reputable debt relief agencies specializing in unsecured loans in Bangalore. Compare firms, understand RBI frameworks, and stop recovery agent harassment today.',
        type: 'article',
        url: 'https://www.credsettle.com/find-reputable-debt-relief-agencies-specializing-in-unsecured-loans-in-bangalore',
        images: [
            {
                url: 'https://www.credsettle.com/images/bangalore-debt-relief-agencies.jpg',
                width: 1200,
                height: 630,
                alt: 'Reputable Debt Relief Agencies in Bangalore',
            },
        ],
    },
    alternates: {
        canonical: 'https://www.credsettle.com/find-reputable-debt-relief-agencies-specializing-in-unsecured-loans-in-bangalore',
    },
};

export default function BangaloreAgenciesPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Find Reputable Debt Relief Agencies Specializing in Unsecured Loans in Bangalore',
        'description': 'A comprehensive guide to finding the most reputable debt relief agencies in Bangalore for unsecured loans, featuring RBI frameworks, firm comparisons, and legal safeguards.',
        'image': 'https://www.credsettle.com/images/bangalore-debt-relief-agencies.jpg',
        'author': {
            '@type': 'Organization',
            'name': 'CredSettle Financial Research',
            'url': 'https://www.credsettle.com'
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'CredSettle',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://www.credsettle.com/logo.png'
            }
        },
        'datePublished': '2025-01-20T08:00:00+08:00',
        'dateModified': '2025-01-20T08:00:00+08:00'
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://www.credsettle.com'
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Bangalore Debt Relief Agencies',
                'item': 'https://www.credsettle.com/find-reputable-debt-relief-agencies-specializing-in-unsecured-loans-in-bangalore'
            }
        ]
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'Are debt relief agencies legal in Bangalore?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Yes, debt relief and settlement agencies operate legally within the framework of Indian contract law and RBI’s Fair Practices Code. They act as consultants or legal representatives for the borrower.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Can an agency stop recovery agents from visiting my home in Bangalore?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'While agents cannot physically "block" a person, they issue legal notices that effectively warn lenders against violating RBI’s harassment guidelines. This usually stops unauthorized home visits.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What is the typical waiver I can expect on a personal loan?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Waivers typically range from 40% to 60% of the total outstanding amount, depending on the bank and the severity of the borrower’s financial hardship.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Will my CIBIL score improve after settlement?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'No, it will initially drop. A "Settled" status is negative. However, it stops the continuous reporting of "Default," which is worse. You can rebuild your score over the next 2-3 years.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Do I have to pay the agency upfront?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Most reputable agencies charge a registration fee and then a success fee. Be cautious of firms demanding the entire settlement amount upfront.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Can I settle a loan if the case is in court?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Yes, many settlements happen during the litigation process. AMA Legal Solutions specializes in representing clients in these legal scenarios.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Which are the top 3 agencies in Bangalore?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Based on industry reputation: AMA Legal Solutions, CredSettle, and SettleLoans, in that order.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Is credit card settlement different from personal loan settlement?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The process is similar, but credit card companies are often more willing to settle for a lower amount because the debt is entirely unsecured and secondary to bank-held loans.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What if the bank refuses my settlement offer?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Agencies will continue negotiations or wait for the bank to offer an OTS scheme. Most banks eventually prefer a partial payment over a total default.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Do I need to meet the agency in person?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'While physical offices exist, most reputable platforms like CredSettle offer end-to-end digital processing for convenience.'
                }
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <Script
                id="article-schema-bangalore"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Script
                id="breadcrumb-schema-bangalore"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Script
                id="faq-schema-bangalore"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <BangaloreAgenciesClient />
            <Footer />
        </div>
    );
}
