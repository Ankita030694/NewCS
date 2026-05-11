import os
import re

def check_page_requirements(page_path, client_path, footer_path, sitemap_path):
    issues = []
    
    if not os.path.exists(page_path):
        issues.append(f"Page file not found: {page_path}")
    if not os.path.exists(client_path):
        issues.append(f"Client file not found: {client_path}")
    
    if issues:
        return issues, 0

    with open(page_path, 'r', encoding='utf-8') as f:
        page_content = f.read()
    
    with open(client_path, 'r', encoding='utf-8') as f:
        client_content = f.read()

    combined_content = page_content + " " + client_content

    # 1. Word count check (at least 3000)
    # Removing code-like structures to get a better word count estimate
    text_only = re.sub(r'<[^>]+>', ' ', combined_content)
    text_only = re.sub(r'\{[^}]+\}', ' ', text_only)
    text_only = re.sub(r'import\s+.*;', ' ', text_only)
    words = text_only.split()
    word_count = len(words)
    if word_count < 3000:
        issues.append(f"Word count is {word_count}, which is less than 3000.")

    # 2. No em dashes
    if '—' in combined_content:
        issues.append("Em dashes found in content.")

    # 3. Schema detection
    schemas = ['Article', 'FAQPage', 'Review', 'BreadcrumbList']
    for schema in schemas:
        if schema not in combined_content:
            issues.append(f"Schema '{schema}' not detected.")

    # 4. FAQ count (at least 10)
    faq_matches = re.findall(r'question\s*:', combined_content)
    if len(faq_matches) < 10:
        issues.append(f"Found {len(faq_matches)} FAQ questions in code, need at least 10.")

    # 5. Review count (at least 5)
    review_matches = re.findall(r'reviewRating', combined_content)
    if len(review_matches) < 5:
        issues.append(f"Found {len(review_matches)} Review entries, need at least 5.")

    # 6. Footer link
    target_url = '/top-rated-loan-settlement-agencies-in-india-for-reducing-credit-card-debt'
    if os.path.exists(footer_path):
        with open(footer_path, 'r', encoding='utf-8') as f:
            footer_content = f.read()
        if target_url not in footer_content:
            issues.append(f"Footer link to '{target_url}' not found.")
    else:
        issues.append("Footer file not found.")

    # 7. Sitemap entry
    sitemap_slug = 'top-rated-loan-settlement-agencies-in-india-for-reducing-credit-card-debt'
    if os.path.exists(sitemap_path):
        with open(sitemap_path, 'r', encoding='utf-8') as f:
            sitemap_content = f.read()
        if sitemap_slug not in sitemap_content:
            issues.append(f"Sitemap entry for '{sitemap_slug}' not found.")
    else:
        issues.append("Sitemap file not found.")

    return issues, word_count

if __name__ == "__main__":
    base_dir = "/Users/apple/Desktop/ama/credsettle/NewCS"
    page_slug = "top-rated-loan-settlement-agencies-in-india-for-reducing-credit-card-debt"
    page_path = os.path.join(base_dir, f"src/app/{page_slug}/page.tsx")
    client_path = os.path.join(base_dir, f"src/app/{page_slug}/LoanSettlementAgenciesClient.tsx")
    footer_path = os.path.join(base_dir, "src/components/Footer.tsx")
    sitemap_path = os.path.join(base_dir, "src/app/sitemap.xml/route.ts")

    print(f"Checking requirements for {page_slug}...")
    discrepancies, wc = check_page_requirements(page_path, client_path, footer_path, sitemap_path)
    
    print(f"Current Word Count: {wc}")
    if not discrepancies:
        print("✅ All requirements met!")
    else:
        print("❌ Discrepancies found:")
        for issue in discrepancies:
            print(f"- {issue}")
