import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoldLoanDefaultAuctionClient from './GoldLoanDefaultAuctionClient';

export const metadata: Metadata = {
  title: 'Gold Loan Default: Can Bank Auction My Gold? (Borrower Legal Rights)',
  description:
    'Facing gold loan default? Learn your legal rights against unfair gold auctions by NBFCs and banks, Section 176 30-day notice rules, auction surplus refunds, and interest waivers.',
  keywords: [
    'gold loan default can bank auction my gold',
    'bank auctioning gold loan legal rights',
    'section 176 indian contract act gold loan',
    'muthoot finance gold auction rules rbi',
    'manappuram gold loan default notice',
    'stop gold loan auction legal stay',
    'gold loan auction surplus refund rules',
    'gold loan interest waiver one time settlement',
    'rbi guidelines on gold loan auction',
    'how to recover pledged gold after default'
  ],
  openGraph: {
    title: 'Gold Loan Default: Can Bank Auction My Gold? (Borrower Legal Rights) | CredSettle',
    description:
      'Facing gold loan default? Learn your legal rights against unfair gold auctions by NBFCs and banks, Section 176 30-day notice rules, auction surplus refunds, and interest waivers.',
    type: 'article',
    locale: 'en_IN',
    siteName: 'CredSettle',
    url: 'https://www.credsettle.com/gold-loan-default-auction',
    images: [
      {
        url: 'https://www.credsettle.com/images/infographics/gold-loan-default-auction.jpg',
        width: 1200,
        height: 630,
        alt: 'Gold Loan Default and Auction Defense Legal Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gold Loan Default: Can Bank Auction My Gold? (Borrower Legal Rights)',
    description:
      'Facing gold loan default? Learn your legal rights against unfair gold auctions by NBFCs and banks, Section 176 30-day notice rules, auction surplus refunds, and interest waivers.',
    images: ['https://www.credsettle.com/images/infographics/gold-loan-default-auction.jpg']
  },
  alternates: {
    canonical: 'https://www.credsettle.com/gold-loan-default-auction'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function GoldLoanDefaultAuctionPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.credsettle.com/gold-loan-default-auction#article',
        isPartOf: {
          '@type': 'WebPage',
          '@id': 'https://www.credsettle.com/gold-loan-default-auction'
        },
        headline: 'Gold Loan Default: Can Bank Auction My Gold? (Borrower Legal Rights)',
        description:
          'Facing gold loan default? Learn your legal rights against unfair gold auctions by NBFCs and banks, Section 176 30-day notice rules, auction surplus refunds, and interest waivers.',
        inLanguage: 'en-IN',
        mainEntityOfPage: 'https://www.credsettle.com/gold-loan-default-auction',
        datePublished: '2026-08-25T09:00:00+05:30',
        dateModified: '2026-08-25T09:00:00+05:30',
        articleSection: 'Secured Lending & Banking Law',
        author: {
          '@type': 'Person',
          '@id': 'https://www.credsettle.com/author/ashish-jhangra#author',
          name: 'Ashish Jhangra',
          url: 'https://www.credsettle.com/author/ashish-jhangra',
          jobTitle: 'Legal & Debt Resolution Professional',
          worksFor: {
            '@type': 'Organization',
            name: 'CredSettle'
          }
        },
        publisher: {
          '@type': 'Organization',
          name: 'CredSettle',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.credsettle.com/credsettle-logo-black.png'
          }
        },
        image: ['https://www.credsettle.com/images/infographics/gold-loan-default-auction.jpg']
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.credsettle.com/#organization',
        name: 'CredSettle',
        url: 'https://www.credsettle.com',
        logo: 'https://www.credsettle.com/credsettle-logo-black.png',
        telephone: '+91-8800226635',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Barakhamba Road, Connaught Place',
          addressLocality: 'New Delhi',
          addressRegion: 'Delhi',
          postalCode: '110001',
          addressCountry: 'IN'
        },
        sameAs: [
          'https://www.facebook.com/credsettle',
          'https://www.twitter.com/credsettle',
          'https://www.linkedin.com/company/credsettle',
          'https://www.instagram.com/credsettle/'
        ],
        image: 'https://www.credsettle.com/credsettle-logo-black.png',
        priceRange: '₹₹'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.credsettle.com/gold-loan-default-auction#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.credsettle.com/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Resources',
            item: 'https://www.credsettle.com/resources'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Gold Loan Default Auction Defense',
            item: 'https://www.credsettle.com/gold-loan-default-auction'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.credsettle.com/gold-loan-default-auction#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can a bank auction my gold immediately after an EMI default?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Lenders cannot sell pledged ornaments upon a single default. Accounts must first turn NPA past 90 days, followed by a mandatory 30-day statutory notice under Section 176 Contract Act.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the statutory notice period required before a gold auction?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Section 176 mandates reasonable notice of sale, interpreted under RBI directives as at least thirty days of registered written notice specifying total debt, auction date, time, and reserve price.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I stay an auction if the bank undervalued my jewelry?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. If a lender attempts a distress sale below market value without certified assayer reports or newspaper ads, borrowers can obtain an urgent civil court stay under Order 39 CPC.'
            }
          },
          {
            '@type': 'Question',
            name: 'What happens to surplus money if gold sells for more than total debt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Under RBI guidelines and Section 176, any excess auction proceeds above legitimate principal, simple interest, and verifiable sale expenses must be refunded to the borrower within thirty days.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can I negotiate an OTS or interest waiver on a defaulted gold loan?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Defaulted gold loans accrue heavy penal compounding. Presenting a verified financial hardship dossier allows negotiating a 30% to 60% penal interest waiver to redeem ornaments.'
            }
          },
          {
            '@type': 'Question',
            name: 'How does gold loan default affect my credit bureau score?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Overdue gold accounts are reported as NPA tradelines, causing a 50 to 120-point CIBIL drop. Executing an OTS and obtaining an NDC mandates updating bureau records to Closed.'
            }
          },
          {
            '@type': 'Question',
            name: 'Are NBFCs allowed to conduct private or internal auctions?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. The RBI strictly prohibits private auctions. NBFCs must conduct public auctions through board-approved auctioneers with public newspaper notices in the local branch district.'
            }
          },
          {
            '@type': 'Question',
            name: 'What if the bank claims pledged gold had lesser purity or weight?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The bank is bound by the original pawn ticket issued at sanction. Unilateral purity downgrades without contemporaneous forensic proof constitute unfair trade practices under consumer laws.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can the bank recover deficits if auction proceeds fall short of dues?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The lender may file a civil suit for the shortfall under Section 176. However, banks cannot seize unpledged household assets or initiate criminal action for civil debt defaults.'
            }
          },
          {
            '@type': 'Question',
            name: 'How can I retrieve family gold if I cannot pay the full balance?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Borrowers can negotiate a structured compromise settlement, request partial ornament release against partial payments, or execute a loan takeover balance transfer to an alternate lender.'
            }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.credsettle.com/#service',
        name: 'CredSettle Gold Loan Default Defense & Pledged Ornament Resolution Services',
        url: 'https://www.credsettle.com/gold-loan-default-auction',
        provider: {
          '@type': 'Organization',
          name: 'CredSettle'
        },
        image: 'https://www.credsettle.com/images/infographics/gold-loan-default-auction.jpg',
        telephone: '+91-8800226635',
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Barakhamba Road, Connaught Place',
          addressLocality: 'New Delhi',
          addressRegion: 'Delhi',
          postalCode: '110001',
          addressCountry: 'IN'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '5180',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Pooja Radhakrishnan'
            },
            datePublished: '2026-07-28',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'A major gold loan NBFC issued an unfair 14-day auction threat for my 120 grams of family gold while demanding 28% penal interest. CredSettle stepped in, served a statutory Section 176 objection, secured a 55% interest waiver, and safely retrieved my ancestral jewelry!',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Rajeshwar Patil'
            },
            datePublished: '2026-07-02',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'When my agricultural gold loan defaulted during crop failure, the branch planned a private distress auction without newspaper publication. CredSettle escalated the matter to the Principal Nodal Officer, stayed the auction, and restructured the settlement cleanly.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Gurpreet Singh Dhillon'
            },
            datePublished: '2026-05-18',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'The bank tried to auction our gold ornaments while failing to account for past interest payments and charging hidden auction fees. CredSettle performed a forensic loan audit, removed the bogus charges, and delivered an official No Dues Certificate within weeks.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Kavita Sundaram'
            },
            datePublished: '2026-04-14',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '4.8'
            },
            reviewBody:
              'I was drowning in compounding penal charges after a hospitalization crisis. CredSettle represented my hardship dossier directly before the lender credit committee, securing a substantial interest discount that allowed me to redeem my pledged gold.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Amitabh Mukherjee'
            },
            datePublished: '2026-03-09',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5'
            },
            reviewBody:
              'CredSettle successfully challenged an undervalued gold valuation report and halted a premature auction. Their legal defense framework protected our family assets and updated my CIBIL credit report to Closed status without any lingering disputes.',
            itemReviewed: {
              '@type': 'FinancialService',
              '@id': 'https://www.credsettle.com/#service'
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedSchema) }}
      />
      <GoldLoanDefaultAuctionClient />
      <Footer />
    </div>
  );
}
