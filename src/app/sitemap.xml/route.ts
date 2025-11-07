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
 * - Loan settlement state pages: 6 × 36 = 216 (one per service × state)
 * - Loan settlement bank pages: 6 × 115 = 690 (one per service × bank)
 * - Resource/Blog pages: Dynamic (fetched from Firebase Firestore 'blogs' collection)
 * 
 * TOTAL PAGES: ~950+ pages (varies based on number of blog posts)
 * 
 * Note: The actual count may vary slightly based on:
 * - The exact number of states and banks in getAllStateSlugs() and getAllBankSlugs()
 * - The number of blog posts in the Firebase 'blogs' collection
 */

import { NextResponse } from 'next/server';
import { getAllStateSlugs } from '@/app/services/personal-loan-settlement/states-content';
import { getAllBankSlugs } from '@/app/services/personal-loan-settlement/banks-content';
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
 * Simple service pages that don't have nested routes
 * These are standalone pages: /services/{service-slug}
 */
const simpleServices = [
  'anti-harassment',
  'credit-score-builder'
];

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
    // Return empty array on error - sitemap will still work but won't include blog pages
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
  // Get dynamic counts
  let stateCount = 0;
  let bankCount = 0;
  let blogCount = 0;

  try {
    stateCount = getAllStateSlugs().length;
  } catch (error) {
    // If this fails, use default count (36 Indian states/UTs)
    stateCount = 36;
  }

  try {
    bankCount = getAllBankSlugs().length;
  } catch (error) {
    // If this fails, use approximate count
    bankCount = 115;
  }

  try {
    const blogSlugs = await getAllBlogSlugs();
    blogCount = blogSlugs.length;
  } catch (error) {
    // If this fails, use default count (9)
    blogCount = 9;
  }

  // Calculate counts
  const mainStaticPages = 5; // Home, About, Contact, Services, Resources
  const simpleServicePages = simpleServices.length; // 2
  const loanSettlementMainPages = loanSettlementServices.length; // 6
  const loanSettlementStatePages = loanSettlementServices.length * stateCount; // 6 services × 36 states
  const loanSettlementBankPages = loanSettlementServices.length * bankCount; // 6 services × 115 banks
  const resourcePages = blogCount; // Dynamic count from Firebase

  const total =
    mainStaticPages +
    simpleServicePages +
    loanSettlementMainPages +
    loanSettlementStatePages +
    loanSettlementBankPages +
    resourcePages;

  return {
    total,
    breakdown: {
      mainStaticPages,
      simpleServicePages,
      loanSettlementMainPages,
      loanSettlementStatePages,
      loanSettlementBankPages,
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

  // ========================================================================
  // SECTION 2: SIMPLE SERVICE PAGES
  // ========================================================================
  // These services don't have nested routes - just single pages
  
  for (const service of simpleServices) {
    urls.push({
      loc: `${baseUrl}/services/${service}`,
      priority: 0.9, // High priority - important service pages
      changefreq: 'monthly',
      lastmod: today
    });
  }

  // ========================================================================
  // SECTION 3: LOAN SETTLEMENT SERVICES (WITH NESTED ROUTES)
  // ========================================================================
  // These services have complex nested routes:
  // 1. Main service page
  // 2. State-specific pages (for all Indian states/UTs)
  // 3. Bank-specific pages (for all banks/NBFCs)

  // First, get all available states and banks dynamically
  let allStates: string[] = [];
  let allBanks: string[] = [];

  try {
    // Get all state slugs (e.g., 'andhra-pradesh', 'maharashtra', etc.)
    allStates = getAllStateSlugs();
  } catch (error) {
    console.error('Error getting state slugs:', error);
    // If this fails, the sitemap will still work but won't include state pages
  }

  try {
    // Get all bank slugs (e.g., 'hdfc', 'icici', 'sbi', etc.)
    allBanks = getAllBankSlugs();
  } catch (error) {
    console.error('Error getting bank slugs:', error);
    // If this fails, the sitemap will still work but won't include bank pages
  }

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
    for (const state of allStates) {
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
    for (const bank of allBanks) {
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
    // Continue without blog pages if there's an error
  }

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
