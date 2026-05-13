/**
 * Sitemap Generator for CredSettle Website
 * 
 * This file generates an XML sitemap that includes all pages on the website.
 * A sitemap helps search engines discover and index all pages on your site.
 * 
 * URL Structure:
 * - Main pages: /, /about, /contact, /services, /resources
 * - Simple service pages: /services/anti-harassment, /services/credit-score-builder
 * - Loan settlement services (with nested routes):
 *   - Main page: /services/{service-type}
 *   - State pages: /services/{service-type}/{state}
 *   - Bank pages: /services/{service-type}/banks/{bank}
 * - Resource/Blog pages: /resources/{slug}
 * 
 * PAGE COUNT CALCULATION:
 * Based on the current structure:
 * - Main static pages: 5
 * - Simple service pages: 2
 * - Loan settlement service types: 6
 * - Indian states/UTs: 36
 * - Banks/NBFCs: ~115
 * - Resource/Blog pages: Dynamic (fetched from Firebase)
 * 
 * Total pages breakdown:
 * - Main static pages: 5
 * - Simple service pages: 2
 * - Loan settlement main pages: 6 (one per service type)
 * - Loan settlement state pages: 6 x 36 = 216 (one per service x state)
 * - Loan settlement bank pages: 6 x 115 = 690 (one per service x bank)
 * - Resource/Blog pages: Dynamic (fetched from Firebase Firestore 'blogs' collection)
 * 
 * TOTAL PAGES: ~950+ pages (varies based on number of blog posts)
 * 
 * Note: The actual count may vary slightly based on:
 * - The exact number of states and banks in getAllStateSlugs() and getAllBankSlugs()
 * - The number of blog posts in the Firebase 'blogs' collection
 */

import { NextResponse } from 'next/server';
import { getAllStateSlugs as getPersonalStateSlugs } from '@/app/services/personal-loan-settlement/states-content';
import { getAllStateSlugs as getBusinessStateSlugs } from '@/app/services/business-loan-settlement/states-content';
import { getAllStateSlugs as getCarStateSlugs } from '@/app/services/car-loan-settlement/states-content';
import { getAllStateSlugs as getCreditCardStateSlugs } from '@/app/services/credit-card-settlement/states-content';
import { getAllStateSlugs as getAppStateSlugs } from '@/app/services/app-loan-settlement/states-content';
import { getAllStateSlugs as getNbfcStateSlugs } from '@/app/services/nbfc-loan-settlement/states-content';
import { getAllBankSlugs as getPersonalBankSlugs } from '@/app/services/personal-loan-settlement/banks-content';
import { getAllBankSlugs as getBusinessBankSlugs } from '@/app/services/business-loan-settlement/banks-content';
import { getAllBankSlugs as getCarBankSlugs } from '@/app/services/car-loan-settlement/banks-content';
import { getAllBankSlugs as getCreditCardBankSlugs } from '@/app/services/credit-card-settlement/banks-content';
import { getAllBankSlugs as getAppBankSlugs } from '@/app/services/app-loan-settlement/banks-content';
import { getAllBankSlugs as getNbfcBankSlugs } from '@/app/services/nbfc-loan-settlement/banks-content';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

// ============================================================================
// CONFIGURATION
// ============================================================================

/** Base URL of the website */
const baseUrl = 'https://www.credsettle.com';

/**
 * Loan settlement service types that have nested routes (state and bank pages)
 * These services have the following structure:
 * - /services/{service-type} (main page)
 * - /services/{service-type}/{state} (state-specific pages)
 * - /services/{service-type}/banks/{bank} (bank-specific pages)
 */
const loanSettlementServices = [
  'personal-loan-settlement',
  'business-loan-settlement',
  'car-loan-settlement',
  'credit-card-settlement',
  'app-loan-settlement',
  'nbfc-loan-settlement'
];

/**
 * Simple service pages that don’t have nested routes
 * These are standalone pages: /services/{service-slug}
 */
const simpleServices = [
  'anti-harassment',
  'credit-score-builder'
];

const STATE_SLUG_FALLBACKS = [
  'andaman-and-nicobar-islands',
  'andhra-pradesh',
  'arunachal-pradesh',
  'assam',
  'bihar',
  'chandigarh',
  'chhattisgarh',
  'dadra-and-nagar-haveli-and-daman-and-diu',
  'delhi',
  'goa',
  'gujarat',
  'haryana',
  'himachal-pradesh',
  'jammu-and-kashmir',
  'jharkhand',
  'karnataka',
  'kerala',
  'ladakh',
  'lakshadweep',
  'madhya-pradesh',
  'maharashtra',
  'manipur',
  'meghalaya',
  'mizoram',
  'nagaland',
  'odisha',
  'puducherry',
  'punjab',
  'rajasthan',
  'sikkim',
  'tamil-nadu',
  'telangana',
  'tripura',
  'uttar-pradesh',
  'uttarakhand',
  'west-bengal'
];

const serviceStateSlugGetters: Record<string, () => string[]> = {
  'personal-loan-settlement': getPersonalStateSlugs,
  'business-loan-settlement': getBusinessStateSlugs,
  'car-loan-settlement': getCarStateSlugs,
  'credit-card-settlement': getCreditCardStateSlugs,
  'app-loan-settlement': getAppStateSlugs,
  'nbfc-loan-settlement': getNbfcStateSlugs
};

const serviceBankSlugGetters: Record<string, () => string[]> = {
  'personal-loan-settlement': getPersonalBankSlugs,
  'business-loan-settlement': getBusinessBankSlugs,
  'car-loan-settlement': getCarBankSlugs,
  'credit-card-settlement': getCreditCardBankSlugs,
  'app-loan-settlement': getAppBankSlugs,
  'nbfc-loan-settlement': getNbfcBankSlugs
};

const stateSlugCache = new Map<string, string[]>();
const bankSlugCache = new Map<string, string[]>();

function dedupeSlugs(slugs: string[]): string[] {
  return Array.from(
    new Set(
      slugs.filter(
        (slug) => typeof slug === 'string' && slug.trim() !== ''
      )
    )
  );
}

const personalBankFallbackSlugs = (() => {
  try {
    return dedupeSlugs(getPersonalBankSlugs());
  } catch (error) {
    console.error('Error getting default personal bank slugs:', error);
    return [];
  }
})();

const DEFAULT_BANK_FALLBACK_COUNT = personalBankFallbackSlugs.length || 115;

function getStateSlugsForService(serviceType: string): string[] {
  const cached = stateSlugCache.get(serviceType);
  if (cached) {
    return cached;
  }

  const getter = serviceStateSlugGetters[serviceType];
  let serviceSlugs: string[] = [];

  if (getter) {
    try {
      serviceSlugs = getter();
    } catch (error) {
      console.error(`Error getting state slugs for ${serviceType}:`, error);
    }
  } else {
    console.warn(`No state slug getter configured for service: ${serviceType}`);
  }

  const merged = dedupeSlugs([...STATE_SLUG_FALLBACKS, ...serviceSlugs]);
  stateSlugCache.set(serviceType, merged);
  return merged;
}

function getBankSlugsForService(serviceType: string): string[] {
  const cached = bankSlugCache.get(serviceType);
  if (cached) {
    return cached;
  }

  const getter = serviceBankSlugGetters[serviceType];
  let slugs: string[] = [];

  if (getter) {
    try {
      slugs = getter();
    } catch (error) {
      console.error(`Error getting bank slugs for ${serviceType}:`, error);
    }
  } else {
    console.warn(`No bank slug getter configured for service: ${serviceType}`);
  }

  if (!slugs.length && serviceType !== 'personal-loan-settlement') {
    slugs = personalBankFallbackSlugs;
  }

  const deduped = dedupeSlugs(slugs);
  bankSlugCache.set(serviceType, deduped);
  return deduped;
}

/**
 * Helper function to generate slug from title (matching client-side logic)
 * This ensures consistency with how slugs are generated in the app
 */
function generateSlugFromTitle(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Fetches all blog slugs from Firebase Firestore
 * This function dynamically retrieves all blog posts and extracts their slugs
 * @returns Array of blog slugs (strings)
 */
async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const blogsRef = collection(db, 'blogs');
    const querySnapshot = await getDocs(blogsRef);

    const slugs: string[] = [];

    querySnapshot.docs.forEach((doc) => {
      const data = doc.data();
      const title = data.title || '';

      // Use existing slug if available, otherwise generate from title
      let slug = data.slug && data.slug.trim() !== ''
        ? data.slug.trim()
        : generateSlugFromTitle(title);

      // If still no slug, use blog ID as fallback
      if (!slug) {
        slug = doc.id || `blog-${Date.now()}`;
      }

      // Only add non-empty slugs
      if (slug && slug.trim() !== '') {
        slugs.push(slug);
      }
    });

    // Remove duplicates
    return [...new Set(slugs)];
  } catch (error) {
    console.error('Error fetching blog slugs from Firebase:', error);
    // Return empty array on error - sitemap will still work but won’t include blog pages
    return [];
  }
}

// ============================================================================
// TYPES
// ============================================================================

/**
 * Represents a URL entry in the sitemap
 */
interface SitemapUrl {
  /** The full URL of the page */
  loc: string;
  /** Priority (0.0 to 1.0) - higher priority pages are crawled more frequently */
  priority: number;
  /** How often the page content changes */
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  /** Last modification date (ISO format: YYYY-MM-DD) */
  lastmod?: string;
}

// ============================================================================
// SITEMAP GENERATION
// ============================================================================

/**
 * Counts the total number of pages that will be included in the sitemap
 * This function calculates the count without actually generating the sitemap
 * @returns Object with page counts by category
 */
async function countSitemapPages(): Promise<{
  total: number;
  breakdown: {
    mainStaticPages: number;
    simpleServicePages: number;
    loanSettlementMainPages: number;
    loanSettlementStatePages: number;
    loanSettlementBankPages: number;
    loanSettlementBankStatePages: number;
    resourcePages: number;
  };
}> {
  let blogCount = 0;

  try {
    const blogSlugs = await getAllBlogSlugs();
    blogCount = blogSlugs.length;
  } catch (error) {
    // If this fails, use default count (9)
    blogCount = 9;
  }

  // Calculate counts
  const mainStaticPages = 147; // Updated for new loan settlement SEO pages.
  const simpleServicePages = simpleServices.length; // 2
  const loanSettlementMainPages = loanSettlementServices.length; // 6

  let loanSettlementStatePages = 0;
  let loanSettlementBankPages = 0;

  for (const serviceType of loanSettlementServices) {
    loanSettlementStatePages += getStateSlugsForService(serviceType).length;
    loanSettlementBankPages += getBankSlugsForService(serviceType).length;
  }

  if (!loanSettlementStatePages) {
    loanSettlementStatePages = STATE_SLUG_FALLBACKS.length * loanSettlementServices.length;
  }

  if (!loanSettlementBankPages) {
    loanSettlementBankPages = DEFAULT_BANK_FALLBACK_COUNT * loanSettlementServices.length;
  }

  const loanSettlementBankStatePages = 0; // Combined bank/state pages not currently generated
  const resourcePages = blogCount; // Dynamic count from Firebase

  const total =
    mainStaticPages +
    simpleServicePages +
    loanSettlementMainPages +
    loanSettlementStatePages +
    loanSettlementBankPages +
    loanSettlementBankStatePages +
    resourcePages;

  return {
    total,
    breakdown: {
      mainStaticPages,
      simpleServicePages,
      loanSettlementMainPages,
      loanSettlementStatePages,
      loanSettlementBankPages,
      loanSettlementBankStatePages,
      resourcePages,
    },
  };
}

/**
 * Generates the complete XML sitemap for all pages on the website
 * @returns XML string in sitemap format
 */
async function generateSitemap(): Promise<string> {
  const urls: SitemapUrl[] = [];
  const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD

  // ========================================================================
  // SECTION 1: MAIN STATIC PAGES
  // ========================================================================
  // These are the most important pages on the website (highest priority)

  urls.push({
    loc: `${baseUrl}/`,
    priority: 1.0, // Highest priority - homepage
    changefreq: 'daily',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/about`,
    priority: 0.9, // High priority - important company info
    changefreq: 'monthly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/contact`,
    priority: 0.9, // High priority - contact information
    changefreq: 'monthly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-is-the-success-rate-of-debt-settlement-programs`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/debt-management-services`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/1-debt-management-services-in-india`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/1-loan-settlement-services-in-india`,
    priority: 1.0,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/services`,
    priority: 1.0, // Highest priority - main services page
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/resources`,
    priority: 0.9, // High priority - resources/blog listing
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/terms-and-conditions`,
    priority: 0.6, // Legal page - reviewed periodically
    changefreq: 'yearly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/privacy-policy`,
    priority: 0.6, // Legal page - reviewed periodically
    changefreq: 'yearly',
    lastmod: today
  });

  // Generic SEO Educational Pages
  urls.push({
    loc: `${baseUrl}/what-is-loan-settlement-and-how-does-it-work-in-india`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/loc-cant-be-issues-for-mere-bank-loan-default-delhi-high-court`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/can-i-settle-a-secured-loan-like-a-home-loan-or-only-unsecured-ones`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/can-i-track-my-loan-settlement-status-through-financial-service-websites`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/is-it-possible-to-settle-a-personal-loan-through-mobile-banking-apps`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/find-debt-settlement-services-known-for-effective-negotiation`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/compare-features-of-loan-settlement-services-offered-by-major-financial-apps`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/where-can-i-locate-government-approved-consumer-credit-counseling-services-in-chennai`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/how-to-get-the-best-settlement-deal-on-a-vehicle-loan-using-online-services`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/understanding-90-day-loan-default-india`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/do-banks-file-fir-for-credit-card-dues`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/is-loan-settlement-illegal-in-india-truth`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/does-settlement-erase-the-debt-completely`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/is-cibil-ruined-forever-after-settlement`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/is-there-a-government-portal-for-debt-collection-complaints`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/can-recovery-agents-abuse-you-legally-india`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });



  urls.push({
    loc: `${baseUrl}/is-loan-settlement-a-good-option-for-borrowers`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/will-banks-blacklist-you-after-loan-settlement`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/can-you-get-a-loan-again-after-settling-a-previous-loan`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-documents-do-i-need-to-prepare-for-a-loan-settlement-proposal`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/how-to-check-if-a-loan-settlement-offer-is-genuine-on-digital-platforms`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/how-can-i-initiate-a-full-and-final-settlement-discussion-with-my-bank`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/top-rated-loan-settlement-consultants-for-small-business-loans`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/compare-different-debt-management-and-settlement-programs-available-to-Indian-consumers`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/how-do-digital-lending-companies-handle-loan-settlement-requests`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/when-should-you-choose-loan-settlement-instead-of-repayment`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/how-can-I-negotiate-a-personal-loan-settlement-with-lenders`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/which-companies-offer-loan-settlement-services-in-india`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/how-does-settling-a-loan-impact-my-cibil-credit-score`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/how-to-check-if-a-debt-settlement-company-is-legit-and-trustworthy`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-apps-for-managing-and-settling-unsecured-loans`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/which-companies-offer-professional-debt-settlement-services-for-personal-loans`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/steps-to-apply-for-a-loan-settlement-through-a-financial-service-provider`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-are-the-key-benefits-and-drawbacks-of-pursuing-a-loan-settlement`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/find-reputable-debt-relief-agencies-specializing-in-unsecured-loans-in-bangalore`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/can-i-use-online-platforms-to-settle-my-home-loan-faster`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-are-the-income-tax-implications-of-a-settled-debt-amount`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-documents-are-required-for-loan-settlement-with-a-professional-service`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/can-i-settle-my-credit-card-dues-using-third-party-loan-settlement-companies`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-alternatives-exist-to-loan-settlement-for-managing-overwhelming-debt`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/which-professional-services-assist-in-negotiating-loan-settlement-terms`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-are-the-interest-savings-by-settling-loans-early-through-digital-services`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/are-there-specialized-programs-for-settling-student-loan-defaults-in-india`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/available-loan-settlement-plans-for-salaried-individuals-via-fintech-apps`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/loan-settlement-for-startup-founders`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/loan-settlement-for-msme-owners`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/loan-settlement-for-traders`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/loan-settlement-during-medical-emergency`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/which-bank-provide-personal-loan-for-cibil-defaulters`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });
  urls.push({
    loc: `${baseUrl}/legal-notice-for-recovery-of-money`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/how-to-improve-cibil-score-after-loan-settlement`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/how-to-block-recovery-agent-numbers-on-android-and-iphone-devices`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-debt-settlement-companies-in-india-for-loan-and-credit-card-debt-relief`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/does-foreclosure-of-loan-affect-cibil`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/can-i-settle-my-debts-without-using-a-third-party-company`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/reviews-of-popular-debt-settlement-services-available-to-indian-consumers`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/how-to-negotiate-a-debt-settlement-with-creditors-in-India`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/find-reputable-agencies-that-help-settle-credit-card-debt-in-india`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-companies-for-debt-settlement-services-in-india`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-are-the-risks-of-entering-a-debt-settlement-agreement`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-questions-should-i-ask-a-debt-settlement-consultant`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/customer-testimonials-for-debt-settlement-service-providers`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/debt-settlement-options-for-freelancers-and-self-employed-individuals`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/get-a-free-consultation-for-debt-settlement-options`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/which-banks-offer-debt-consolidation-loans-in-india`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/punishment-for-non-payment-of-personal-loan-in-india`,
    priority: 0.95,
    changefreq: "weekly",
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/which-banks-offer-debt-consolidation-loans-for-bad-credit`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/get-contact-details-for-top-rated-debt-resolution-companies-in-india`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/which-credit-card-debt-relief-services-offer-the-best-settlement-options-in-india`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/loan-recovery-agent-near-me`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/support-for-loan-settlement-during-medical-emergencies`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/trading-loan-settlement`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-loan-settlement-services-near-me-with-flexible-payment-plans`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });
  urls.push({
    loc: `${baseUrl}/how-to-get-800-credit-score-in-india`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-time-for-loan-settlement`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/recommendations-for-debt-settlement-services-in-india-with-low-processing-fees`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-is-the-best-loan-settlement-company-in-india-for-high-credit-card-balances`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/recommendations-for-loan-settlement-services-that-negotiate-lower-interest-rates-in-india`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/which-loan-settlement-service-should-i-use-for-settling-multiple-credit-card-debts`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/how-do-i-officially-submit-a-loan-settlement-offer-to-my-lender`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/how-to-document-evidence-of-debt-collector-harassment`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/affordable-debt-settlement-plans-for-salaried-individuals`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/how-do-online-debt-settlement-platforms-work-in-india`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/can-i-settle-credit-card-debt-through-a-debt-settlement-service`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/how-to-avoid-scams-in-the-debt-settlement-industry`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Main Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement`,
    priority: 0.95, // Very high priority
    changefreq: 'weekly',
    lastmod: today
  });

  // HDFC Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/hdfc`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  // SBI Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/sbi`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/loan-settlement/indusind`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  // ICICI Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/icici`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  // IDFC Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/idfc`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  // Kotak Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/kotak`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  // Yes Bank Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/yes-bank`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  // Axis Bank Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/axis-bank`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  // DMI Finance Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/dmi-finance`,
    priority: 0.8,
    changefreq: 'weekly',
    lastmod: today
  });

  // RBL Bank Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/rbl-bank`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  // Bajaj Finserv Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/bajaj-finserv`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  // Hero Fincorp Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/hero-fincorp`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  // Aditya Birla Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/aditya-birla`,
    priority: 0.8,
    changefreq: 'weekly',
    lastmod: today
  });

  // Federal Bank Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/federal-bank`,
    priority: 0.8,
    changefreq: 'weekly',
    lastmod: today
  });

  // Union Bank Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/union-bank`,
    priority: 0.8,
    changefreq: 'weekly',
    lastmod: today
  });

  // Bank of Baroda Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/bank-of-baroda`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  // Kisetsu Saison Finance Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/kisetsu`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  // SMFG India Credit Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/smfg-india-credit`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  // Fibe Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/fibe`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  // MSME and Personal Loan Legal Defence Pages
  urls.push({
    loc: `${baseUrl}/best-lawyer-for-MSME-loan-recovery-defence`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-lawyer-for-MSME-personal-loan`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-lawyer-for-personal-loans`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-lawyer-for-bank-loan-recovery-defence`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-lawyers-for-bounced-security-check-for-loans-and-credit-card-disputes`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-lawyer-for-drt-case-defence-for-bank-loan-recovery`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-lawyer-for-loan-settlement-during-drt`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-project-finance-builder-loan-recovery-matter-lawyer`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-loan-agreement-arbitration-lawyer`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-lawyer-for-home-loan-check-bounce-case`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/drt-lawyer-in-mumbai-loan-recovery`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-lawyer-for-account-documents-drt`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-lawyer-for-loan-recovery-documentation`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-lawyer-for-documentation-review-of-loan-agreement`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-lawyer-for-arc-loan-assignment-dispute`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // New Legal Pages 2025
  urls.push({
    loc: `${baseUrl}/best-lawyer-for-msme-business-loan-dispute`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-lawyer-for-loan-settlement-by-drt`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-lawyer-for-notice-for-loan-default`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-lawyer-for-drt-loan-assignment-dispute-defence-in-drt`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-lawyer-for-msme-and-business-loans`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-lawyer-for-company-loan-matters`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-lawyer-for-notice-for-default-on-mortgage-or-loan-repayment`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-lawyer-for-consortium-loan-recovery-defence`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/loan-agreement-drafting-review`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-nbfc-loan-settlement-lawyer`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/SME-loan-dispute-resolution`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/mudra-loan-settlement-legal-help`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/dispute-over-forged-loan-signatures`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/rbi-new-recovery-guidelines-july-2026`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/bank-sent-legal-notice-for-loan-what-to-do`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/can-bank-file-case-for-personal-loan`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/legal-action-for-credit-card-default`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/bank-arbitration-notice-loan`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/bank-recovery-case-in-court`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/recovery-agents-threatening-me-what-to-do`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/bank-recovery-harassment-complaint`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/rbi-rules-for-recovery-agents`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/can-recovery-agents-come-home`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/recovery-agents-calling-family-members-law`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/can-i-go-to-jail-for-loan-default-in-india`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/police-case-for-credit-card-debt`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/bank-filed-fir-for-loan-default`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/startup-loan-legal-advisory`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/working-capital-loan-legal-help`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/legal-case-for-loan-sanction-without-consent`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/loan-default-recovery-freeze-defense`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/post-loan-settlement-legal-help`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/digital-online-cyber-loan-disputes`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/business-corporate-loan-matters`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/loan-default-emi-foreclosure-assistance`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/legal-help-for-non-closure-of-settled-loan`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-loan-emi-settlement-lawyer`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/loan-parties-dispute-resolution`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Poonawalla Fincorp Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/poonawalla`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  // Tata Capital Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/tata-capital`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  // KrazyBee Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/krazybee`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  // AU Small Finance Bank Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/au-small-finance-bank`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  // Piramal Finance Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/piramal-finance`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  // Stashfin Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/stashfin`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  // PayU Finance Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/payu-finance`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  // Maharashtra Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/maharashtra`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Delhi Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/delhi`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Karnataka Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/karnataka`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Rajasthan Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/rajasthan`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Haryana Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/haryana`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Gujarat Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/gujarat`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // West Bengal Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/west-bengal`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Tamil Nadu Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/tamil-nadu`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Uttar Pradesh Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/uttar-pradesh`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Andhra Pradesh Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/andhra-pradesh`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Telangana Loan Settlement Page
  urls.push({
    loc: `${baseUrl}/loan-settlement/telangana`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });
  // what-is-npa page
  urls.push({
    loc: `${baseUrl}/what-is-npa`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Cheque Bounce Case in Kolkata page
  urls.push({
    loc: `${baseUrl}/cheque-bounce-case-in-kolkata`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Cheque Bounce Case in Ahmedabad page
  urls.push({
    loc: `${baseUrl}/cheque-bounce-case-in-ahmedabad`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Cheque Bounce Case in Delhi page
  urls.push({
    loc: `${baseUrl}/cheque-bounce-case-in-delhi`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Cheque Bounce Case in Noida page
  urls.push({
    loc: `${baseUrl}/cheque-bounce-case-in-noida`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Best Lawyer for Secured Loan Litigation DRT page
  urls.push({
    loc: `${baseUrl}/best-lawyer-for-secured-loan-litigation-drt`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Best Lawyer for Car Loan Settlement page
  urls.push({
    loc: `${baseUrl}/best-lawyer-for-car-loan-settlement`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Best Check Bounce Lawyer for Loan Case page
  urls.push({
    loc: `${baseUrl}/best-check-bounce-lawyer-for-loan-case`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Fastest Loan Settlement Service for Personal Loans page
  urls.push({
    loc: `${baseUrl}/which-loan-settlement-service-offers-the-fastest-resolution-for-personal-loans`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/loan-settlement-services-vs-debt-consolidation-companies-which-is-better-for-reducing-emi`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // How to Handle Recovery Agent Harassment page
  urls.push({
    loc: `${baseUrl}/how-to-handle-recovery-agent-harrasment`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // How to Stop Recovery Agent Home Visit page
  urls.push({
    loc: `${baseUrl}/how-to-stop-recovery-agent-home-visit`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // How to Stop Recovery Agent Harassment page
  urls.push({
    loc: `${baseUrl}/how-to-stop-recovery-agent-harassment`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // How to ask bank for settlement page
  urls.push({
    loc: `${baseUrl}/how-to-ask-bank-for-settlement`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Can I Settle Loan For Free page
  urls.push({
    loc: `${baseUrl}/can-i-settle-loan-for-free`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Loan Settlement vs Repayment page
  urls.push({
    loc: `${baseUrl}/loan-settlement-vs-repayment`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Is Loan Settlement a Good Option page
  urls.push({
    loc: `${baseUrl}/is-loan-settlement-a-good-option`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Advantages and Disadvantages of Loan Settlement page
  urls.push({
    loc: `${baseUrl}/what-are-the-advantages-and-disadvantages-of-loan-settlement`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // How Does Loan Settlement Affect Your Financial Health in the Long Term page
  urls.push({
    loc: `${baseUrl}/how-does-loan-settlement-affect-your-financial-health-in-long-term`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Does Loan Settlement Affect CIBIL page
  urls.push({
    loc: `${baseUrl}/does-loan-settlement-affect-cibil`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Bajaj Finance Recovery Agent Harassment Home Visit page
  urls.push({
    loc: `${baseUrl}/bajaj-finance-recovery-agent-harassment-home-visit`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // RBL Bank Harassment Home Visit page
  urls.push({
    loc: `${baseUrl}/rbl-bank-harrasement-home-visit`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Steps Before Negotiating Loan Settlement page
  urls.push({
    loc: `${baseUrl}/what-steps-should-i-take-before-negotiating-a-loan-settlement-with-my-lender`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Best Lawyer for Loan Recovery Cases page
  urls.push({
    loc: `${baseUrl}/best-lawyer-for-loan-recovery-cases`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Best Lawyer for MSME Loan Disputes page
  urls.push({
    loc: `${baseUrl}/best-lawyer-for-msme-loan-disputes`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Best Lawyer for Bank Harassment for Loan page
  urls.push({
    loc: `${baseUrl}/best-lawyer-for-bank-harassment-for-loan`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // How to Settle 7-Day Loan Apps page
  urls.push({
    loc: `${baseUrl}/how-to-settle-7-days-loan-app`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Best Lawyer for Loan Contract page
  urls.push({
    loc: `${baseUrl}/best-lawyer-for-loan-contract`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Best Lawyer for Home Loan Settlement page
  urls.push({
    loc: `${baseUrl}/best-lawyer-for-home-loan-settlement`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Best Lawyer for Loan and Mortgage Agreements page
  urls.push({
    loc: `${baseUrl}/best-lawyer-for-loan-and-mortgage-agreements`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Best Lawyer for Education Loan Settlement page
  urls.push({
    loc: `${baseUrl}/best-lawyer-for-education-loan-settlement`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Best Lawyer for Loan Against Property Settlement page
  urls.push({
    loc: `${baseUrl}/best-lawyer-for-loan-against-property-settlement`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/best-lawyer-for-business-loan-settlement`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Best Lawyer for Loan Agreement page
  urls.push({
    loc: `${baseUrl}/best-lawyer-for-loan-agreement`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Best Lawyer for Trading Loan Settlement page
  urls.push({
    loc: `${baseUrl}/best-lawyer-for-trading-loan-settlement`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });


  // Best Lawyer for Unsecured Loan page
  urls.push({
    loc: `${baseUrl}/best-lawyer-for-unsecured-loan`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Best Lawyer to Challenge Loan Assignment to ARC page
  urls.push({
    loc: `${baseUrl}/best-lawyer-to-challenge-loan-assignment-to-arc`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Best Lawyer for MSME Loan Recovery Defence page
  urls.push({
    loc: `${baseUrl}/best-lawyer-for-MSME-loan-recovery-defence`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Best Lawyer for MSME Personal Loan page
  urls.push({
    loc: `${baseUrl}/best-lawyer-for-MSME-personal-loan`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Bad Loan Recovery Strategy page
  urls.push({
    loc: `${baseUrl}/bad-loan-recovery-strategy`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Best Microfinance Loan Settlement Lawyer page
  urls.push({
    loc: `${baseUrl}/best-microfinance-loan-settlement-lawyer`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // What Questions Should I Ask a Debt Settlement Consultant page
  urls.push({
    loc: `${baseUrl}/what-questions-should-i-ask-a-debt-settlement-consultant`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/customer-testimonials-for-debt-settlement-service-providers`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });
  // Debt Settlement Services That Work With Multiple Creditors page
  urls.push({
    loc: `${baseUrl}/debt-settlement-services-that-work-with-multiple-creditors`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // What is Minimum Debt Amount Required for Settlement Programs page
  urls.push({
    loc: `${baseUrl}/what-is-minimun-debt-amount-required-for-settlement-programs`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Are There Legal Implications or Non-Payment During Debt Settlement page
  urls.push({
    loc: `${baseUrl}/are-there-legal-implecations-or-non-payment-during-debt-settlement`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // How Long Does a Debt Settlement Typically Take page
  urls.push({
    loc: `${baseUrl}/how-long-does-a-debt-settlement-typically-take`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Debt Settlement Offers for Business Loans page
  urls.push({
    loc: `${baseUrl}/debt-settlement-offers-for-business-loans`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // Compare Debt Settlement Fees and Success Rate page
  urls.push({
    loc: `${baseUrl}/compare-debt-settlement-fees-and-success-rate`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // How to Choose a Trustworthy Debt Settlement Provider page
  urls.push({
    loc: `${baseUrl}/how-to-choose-a-trustworthy-debt-settlement-provider`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // How to Find a Trustworthy Debt Settlement Agency Near Me page
  urls.push({
    loc: `${baseUrl}/how-to-find-a-trustworthy-debt-settlement-agency-near-me`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-is-the-success-rate-of-debt-settlement-programs`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-are-the-best-apps-to-block-recovery-agent-calls-and-messages`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/how-to-deal-with-collection-calls-while-in-a-debt-settlement-program`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/find-alternatives-solutions-to-debt-settlement-for-small-debts`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/find-alternatives-solutions-to-debt-settlement-for-small-debts`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/debt-settlement-vs-bankruptcy`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-documents-are-needed-for-debt-settlement-services`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-are-the-consumer-protection-laws-related-to-debt-settlement-in-india`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/debt-settlement-vs-debt-consolidation`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/how-to-negotiate-a-lower-principal-amount-for-creditors`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-are-the-legal-risks-associated-with-defaulting-on-a-loan-without-settlement`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-are-user-reviews-for-popular-loan-settlement-platforms`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/can-i-settle-my-credit-card-dues-using-third-party-loan-settlement-companies`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-alternatives-exist-to-loan-settlement-for-managing-overwhelming-debt`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/are-there-any-government-approved-loan-settlement-services-available-online`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/request-a-free-evaluation-of-my-debt-situation-from-a-settlement-firm`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });
  urls.push({
    loc: `${baseUrl}/do-banks-file-fir-for-credit-card-dues`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/loan-settlement-for-salaried-people`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/top-10-instant-loan-apps-revolutionizing-access-to-credit-in-india`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/rbi-july-2026-recovery-guidelines`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/top-rated-loan-settlement-agencies-in-india-for-reducing-credit-card-debt`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  
  urls.push({
    loc: `${baseUrl}/bank-calling-references-and-family-members`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/can-I-settle-my-home-loan`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/can-i-convert-settled-to-closed-later`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/can-i-settle-my-loan-without-a-lawyer`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/cred-settle-plan-for-building-debt-free-future-after-settlement`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/cred-settle-support-for-avoiding-aggressive-recovery-practices`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/does-settlement-impact-a-co-borrower`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/explain-the-difference-between-a-loan-write-off-and-a-loan-settlement`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/where-to-find-lawyers-specializing-in-consumer-debt-protection`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/is-there-any-mobile-software-to-automatically-block-harassment-calls-from-recovery-agents`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/how-to-protect-family-members-from-debt-collector-calls`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-are-the-best-legal-aid-websites-for-recovery-agent-harassment-cases`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/which-financial-institutions-provide-support-to-stop-recovery-agent-harassment`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/find-certified-financial-planners-who-specialize-in-debt-restructuring-and-settlement`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/get-a-quote-for-debt-settlement-services-for-my-credit-card-debt`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/handle-loan-default-without-panicking`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/home-loan-eligibility-after-settlement`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/how-do-i-officially-submit-a-loan-settlement-offer-to-my-lender`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/how-do-peer-to-peer-lending-platforms-handle-loan-settlements`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/how-to-avoid-debt-settlement-scams-in-india`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/how-to-check-active-loan-on-your-name-in-india-stepbystep-guide`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/how-to-get-freed-from-debt`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/how-to-identify-fake-recovery-agents`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/how-to-initiate-a-loan-settlement-request-through-a-banks-online-portal`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/how-to-settle-loan`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/is-it-possible-to-settle-a-joint-loan-and-what-are-the-implications-for-co-borrowers`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/is-loan-settlement-in-installments-possible`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/legal-notice-for-loan-settlement-harassment`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/loan-settlement-by-bank`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/loan-settlement-by-city`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/loan-settlement-for-borrowers-facing-economic-downturn`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/loan-settlement-for-borrowers-planning-financial-reset`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/loan-settlement-for-self-employed`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/loan-settlement-letter-format-noc-format`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/loan-settlement-process-in-hindi`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/p2p-crypto-scam-unfreeze-bank-account`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/rbi-guidelines-calling-after-7pm`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/smart-ways-to-manage-emi-payment`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-alternatives-exist-to-loan-settlement-services-for-debt-relief-online`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-are-the-charges-for-loan-settlement-services-by-top-financial-firms`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-are-the-consequences-of-not-paying-emi`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-are-the-eligibility-criteria-for-loan-settlement-programs-by-lending-platforms`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-customer-support-options-do-loan-settlement-companies-provide`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-is-the-average-timeframe-for-completing-a-loan-settlement-process`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-is-the-best-way-to-negotiate-loan-settlement`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-kind-of-loans-can-not-be-settled`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-percentage-do-banks-accept-in-loan-settlement`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/why-does-my-credit-score-drop-even-though-i-pay-on-time`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  urls.push({
    loc: `${baseUrl}/what-are-my-rights-when-dealing-with-loan-recovery-agents`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // ========================================================================
  // SECTION 2: SIMPLE SERVICE PAGES
  // ========================================================================
  // These services don’t have nested routes - just single pages

  for (const service of simpleServices) {
    urls.push({
      loc: `${baseUrl}/services/${service}`,
      priority: 0.9, // High priority - important service pages
      changefreq: 'monthly',
      lastmod: today
    });
  }

  // Cheque Bounce Lawyer Page
  urls.push({
    loc: `${baseUrl}/services/cheque-bounce-lawyer`,
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: today
  });

  // ========================================================================
  // SECTION 3: LOAN SETTLEMENT SERVICES (WITH NESTED ROUTES)
  // ========================================================================
  // These services have complex nested routes:
  // 1. Main service page
  // 2. State-specific pages (for all Indian states/UTs)
  // 3. Bank-specific pages (for all banks/NBFCs)

  // Loop through each loan settlement service type
  for (const serviceType of loanSettlementServices) {

    // 3.1: Main service page
    // Example: /services/personal-loan-settlement
    urls.push({
      loc: `${baseUrl}/services/${serviceType}`,
      priority: 0.9, // High priority - main service landing page
      changefreq: 'weekly',
      lastmod: today
    });

    // 3.2: State-specific pages
    // Example: /services/personal-loan-settlement/andhra-pradesh
    // These pages provide information about loan settlement in specific states
    const states = getStateSlugsForService(serviceType);
    for (const state of states) {
      urls.push({
        loc: `${baseUrl}/services/${serviceType}/${state}`,
        priority: 0.8, // Medium priority - important for local SEO
        changefreq: 'weekly',
        lastmod: today
      });
    }

    // 3.3: Bank-specific pages
    // Example: /services/personal-loan-settlement/banks/hdfc
    // These pages provide information about settling loans with specific banks
    const banks = getBankSlugsForService(serviceType);
    for (const bank of banks) {
      urls.push({
        loc: `${baseUrl}/services/${serviceType}/banks/${bank}`,
        priority: 0.8, // Medium priority - important for bank-specific searches
        changefreq: 'weekly',
        lastmod: today
      });
    }
  }

  // ========================================================================
  // SECTION 4: RESOURCE/BLOG PAGES
  // ========================================================================
  // These are blog posts and articles under /resources/{slug}
  // Dynamically fetch all blog slugs from Firebase

  try {
    const blogSlugs = await getAllBlogSlugs();

    for (const slug of blogSlugs) {
      urls.push({
        loc: `${baseUrl}/resources/${slug}`,
        priority: 0.8, // Medium priority - important content pages
        changefreq: 'monthly',
        lastmod: today
      });
    }
  } catch (error) {
    console.error('Error fetching blog slugs for sitemap:', error);
    // Continue without blog pages if there’s an error
  }

  // Government-Backed Debt Relief Programs in India page
  urls.push({
    loc: `${baseUrl}/are-there-government-backed-programs-for-debt-relief-in-india`,
    priority: 0.95,
    changefreq: 'weekly',
    lastmod: today
  });

  // ========================================================================
  // GENERATE XML SITEMAP
  // ========================================================================
  // Convert the URL array into proper XML sitemap format

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
      .map(
        (url) => `  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>${url.lastmod ? `\n    <lastmod>${url.lastmod}</lastmod>` : ''}
  </url>`
      )
      .join('\n')}
</urlset>`;

  return sitemap;
}

// ============================================================================
// API ROUTE HANDLER
// ============================================================================

/**
 * Next.js API route handler for GET requests
 * Returns the sitemap XML when accessed at /sitemap.xml
 */
export async function GET() {
  const sitemap = await generateSitemap();

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      // Cache the sitemap for 24 hours (86400 seconds)
      // This improves performance while still allowing updates
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}

/**
 * Helper function to get page count statistics
 * This can be used for debugging or displaying statistics
 */
export async function getSitemapPageCount() {
  return await countSitemapPages();
}
