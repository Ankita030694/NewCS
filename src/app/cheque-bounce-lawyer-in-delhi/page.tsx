import { Metadata } from 'next';
import ChequeBounceLawyerDelhiClient from './ChequeBounceLawyerDelhiClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Top Cheque Bounce Lawyer in Delhi | Section 138 Experts',
  description: 'Find a top cheque bounce lawyer in Delhi for Section 138 cases. Learn about average costs, red flags, and the legal process for fast interim compensation.',
  alternates: {
    canonical: 'https://www.credsettle.com/cheque-bounce-lawyer-in-delhi',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ChequeBounceLawyerDelhiPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Top Cheque Bounce Lawyer in Delhi | Section 138 Experts",
        "description": "Find a top cheque bounce lawyer in Delhi for Section 138 cases. Learn about average costs, red flags, and the legal process for fast interim compensation.",
        "image": "https://www.credsettle.com/images/cheque-bounce-delhi.jpg",
        "author": {
          "@type": "Person",
          "name": "Rajesh Sharma",
          "image": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",
          "url": "https://www.credsettle.com/author/rajeshsharma"
        },
        "publisher": {
          "@type": "Organization",
          "name": "CredSettle",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.credsettle.com/logo.png"
          }
        },
        "datePublished": new Date().toISOString(),
        "dateModified": new Date().toISOString(),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.credsettle.com/cheque-bounce-lawyer-in-delhi"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I identify a top cheque bounce lawyer in Delhi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A top cheque bounce lawyer in Delhi will have extensive experience handling Section 138 cases, deep knowledge of local court procedures, and a track record of securing interim compensation under Section 143A. They should prioritize swift legal notice dispatch and strategic negotiation."
            }
          },
          {
            "@type": "Question",
            "name": "What is the average cost of hiring a cheque bounce lawyer in Delhi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The average cost for a cheque bounce lawyer in Delhi varies based on the case complexity and the lawyer's expertise. Generally, fees can range from 15,000 to over 1,00,000 INR per case. Some lawyers may charge a flat fee, while others might ask for a percentage of the recovered amount."
            }
          },
          {
            "@type": "Question",
            "name": "Are there any red flags to look for when choosing a lawyer for a Section 138 case?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, red flags include guarantees of absolute success, pressure to pay large upfront fees without a clear contract, lack of specific experience in Negotiable Instruments Act cases, and poor communication or unresponsiveness during the initial consultation."
            }
          },
          {
            "@type": "Question",
            "name": "Why is court jurisdiction important in Delhi cheque bounce cases?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Court jurisdiction is critical because filing in the wrong district court in Delhi can lead to immediate dismissal of your case. A knowledgeable lawyer will determine the correct jurisdiction based on where the payee bank is located, ensuring your complaint is legally sound from the start."
            }
          },
          {
            "@type": "Question",
            "name": "What can I expect during the initial consultation with a cheque bounce lawyer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "During your first consultation, you should expect to discuss the details of your bounced cheque, provide copies of the cheque and bank return memo, and review the timeline for sending the mandatory legal notice. The lawyer will outline the potential strategy, costs, and timeline for your specific case."
            }
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Legal Consultation for Cheque Bounce Cases in Delhi",
        "description": "Expert legal assistance and representation for Section 138 cheque bounce matters in Delhi NCR.",
        "brand": {
          "@type": "Brand",
          "name": "CredSettle"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "3"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sanjay Verma"
            },
            "datePublished": "2026-06-15",
            "reviewBody": "The team at CredSettle provided exceptional guidance for my complex cheque bounce issue in Delhi. Their strategic approach secured interim compensation much faster than I anticipated.",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            }
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Priya Singh"
            },
            "datePublished": "2026-05-22",
            "reviewBody": "I was facing significant delays with my Section 138 case until I switched to a lawyer recommended here. Their knowledge of Delhi court jurisdictions was evident and highly effective.",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            }
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Amit Kumar"
            },
            "datePublished": "2026-04-10",
            "reviewBody": "Very professional and transparent about the cost breakdown from day one. I felt fully informed and supported throughout the entire legal process in the Delhi courts.",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.credsettle.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Cheque Bounce Lawyer in Delhi",
            "item": "https://www.credsettle.com/cheque-bounce-lawyer-in-delhi"
          }
        ]
      }
    ]
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ChequeBounceLawyerDelhiClient />
      <Footer />
    </>
  );
}
